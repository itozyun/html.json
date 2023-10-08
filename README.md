# HTML.JSON

A compact and portable format that can be converted back to HTML in a lightweight way, achieving Web 1.0 level SSR!

[jsonml](http://www.jsonml.org/)([wiki](https://en.wikipedia.org/wiki/JsonML)) の拡張です.

1. html を json で表現する(変換する)
2. json から html への変換時に処理を追加できる
   * HTML を予め json 化しておけば、実行環境に HTML パーサーが不要になる
     * Web サーバの動的コンテンツ
     * オフラインドキュメントのデータ形式
     * PJAX のデータ形式
3. TODO html.json DOM(予定)
4. TODO `<? include ./sidebar.json ?>`

## 目次

1. html2json
   1. 動的コンテンツ
   2. 動的属性
2. json2json
3. json2html
4. HTML.Json 定義
5. HTML の最小化

## 1. html2json

heppy-dom に依存する。

* `trimWhitespace`
* `keepCDATASections`
* `keepComments`
* `removeLineBreaksBetweenFullWidth`
* `argumentBrackets`
* `instructionAttrPrefix`

### `trimWhitespace`

1. `trimWhitespace:"agressive"` を指定すると、テキストノードの前後の空白文字をすべて削除する、但し次の条件から外れる場合は、其々に一つの半角スペースを残す
   1. テキストノードの先頭が改行、かつ、後ろが改行と空白文字の場合、
2. 空白文字を保護したい場合 `\u0020` を使う

#### `trimWhitespace:"agressive"` でテキストノードの前後の空白文字をすべて削除する

~~~html
    </div>
    html.json
    <div>
~~~

#### `trimWhitespace:"agressive"` でもテキストノードの前後の空白文字を1つだけ残す

~~~html
<b>1</b> / <b>10</b>
~~~

### 1.1. ProcessingInstruction

* ~~`html2json("<? funcName ?>")` は不可、必ず Element の下に書くこと！~~

~~~html
<div id="side">
<? createSidebar("",6,{}) ?>
</div>
~~~

~~~js
[
    "div#side",
    [
        7, // ProcessingInstruction
        "createSidebar", // メソッド名
        "", 6, {} // メソッドの引数
    ]
]
~~~

### 1.2. ProcessingAttr

~~~html
<ul :class="toggleList('productList',1)"></ul>
~~~

~~~js
[
    "ul",
    {
        ":class" : [ // 動的属性
            "toggleList", // メソッド名
            "productList", 1 // メソッドの引数
        ]
    }
]
~~~

## 2. json2json

動的コンテンツの内、決定した値を `onInstruction` で埋め込むことが出来る。

~~~js
json2json( json, onInstruction, opt_onError );

function onInstruction( methodName, args, currentHtmlJson ){
    return undefined; // null or '' or string or number or html.json
};
~~~
### json2json の `onInstruction` の戻り値

* `undefiend` 何もしない
* `null` or `""` 動的コンテンツを削除
* `{string|number}` TEXT_NODE になる
* strict な html.json `[json2json.DOCUMENT_FRAGMENT_NODE, ["p", "Hello, world!"]`, `[ 1, "p", ...node ]`, `[ 'p', "Hi!" ]` や `[ 3, "Hello, world!" ]`
* 戻り値が `[json2json.PROCESSING_INSTRUCTION, "funcName", ...args ]` も可能。このノードは再度 `onInstruction` で処理される。


## 3. json2html

既に JSON パーサーがある環境では、json2html を用意するだけで、json データから html を生成できる。

~~~js
json2html( json, onInstruction, opt_strictQuot, opt_useConmma );

function onInstruction( methodName, args, currentHtmlJson ){
    return htmlString; // or [] html.json
};
~~~

### json2html の `onInstruction` の戻り値

* `undefiend` or `null` or `""` 何も書きださない
* `{string|number}` -> 文字列をそのまま埋め込む, htmlString もそのまま埋め込む
* strict な html.json `[json2json.DOCUMENT_FRAGMENT_NODE, [ 'P', "Hello, world!" ]]`, `[2, 'p', ...`, `[ 'p', "Hi!" ]` や `[ 3, "Hello, world!" ]`
* 戻り値が `[json2json.PROCESSING_INSTRUCTION, "funcName", ...args ]` も可能。このノードは再度 `onInstruction` で処理される。


## 4. HTML.Json 定義

|                                  | 第1要素                     | 第2要素                | 第3要素           | 第4要素    |
|:---------------------------------|:----------------------------|:-----------------------|:----------------- |:-----------|
| HTML_ELEMENT *4                  | `1`                         | `"input"`              | `{attributes}` *3 | `...nodes` |
| タグ名(.class#id) *1, *2         | `"input"`, `"p.main#main"`  |`{attributes}` *3       | `...nodes`        | -          |
| TEXT_NODE *4                     | `3`                         | `nodeValue` *6         | -                 | -          |
| CDATA_SECTION                    | `4`                         | `nodeValue` *6         | -                 | -          |
| PROCESSING_INSTRUCTION           | `7`                         | `"メソッド名"`         | `...arguments`    | -          |
| COMMENT_NODE                     | `8`                         | `nodeValue` *6         | -                 | -          |
| DOCUMENT_NODE                    | `9`                         | `"<!DOCTYPE html>"` *5 | `...nodes` *7     | -          |
| DOCUMENT_FRAGMENT_NODE           | `11`                        | `...nodes`             | -                 | -          |
| 下の階層が隠れる条件付きコメント | `13`                        | `"(IE)&(vml)"`         | `...nodes`        | -          |
| 下の階層が見える条件付きコメント | `14`                        | `"!(IE)"`              | `...nodes`        | -          |

1. タグ名は小文字
2. クラス名, id どちらか、または両方を第2引数ではなくここで記述できる
3. 属性
   * 必ず tagName の直後に出現する
      * 省略が可能
   * 例
      * `{type:"text",style:{color:"red"}}`
   * 値が `""` or `==null` では属性は追加されない(json2html)
   * style 属性はオブジェクトまたは文字列(`elm.style.cssText`)で記述する
     * `{style:{}}`, `style:"color:red;font-size:2em"`
4. json2html では実装済だが html2json ではこの形では出力しない, json2json の onInstruction の戻り値で使用できる
5. doctype 文字列。XHTML では XML 宣言を含むこともある `"<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE html>"`
6. `nodeValue` は `string` または Finite な `number`
7. `...nodes` は `[ nodeType, ... ]`, `string` または Finite な `number`


### 4.1. ドキュメント

~~~js
[ 
    9,
    "<!DOCTYPE html>",
    [
        "html",
        {
            "lang"    : "ja",
            "xmlns:v" : "urn:schemas-microsoft-com:vml"
        },
        [
            "head",
            {
                "prefix" : "og: http://ogp.me/ns# fb: http://ogp.me/ns/fb#"
            },
            [
                "meta",
                {
                    "http-equiv" : "Content-Type",
                    "content"    : "text/html; charset=utf-8"
                }
            ]
        ],
        [
            "body",
            { "size" : 1 },
            // ...childNodes
        ]
    ]
]
~~~

### 4.2. HTML の一部

~~~json
[
    "body.app-root#app-root",
    { "size" : 1 },
    [
        "p",
        [ "span", "Hello, World!" ]
    ]
]
~~~

子要素が、`Text`, `<br>`, `Text` の場合は `... "Hello,", [ "br" ], "World!"`

### 4.3. TextNode

テキストノードは基本的に子として出現する。

~~~json
[ "p", "Hello, World!" ]
~~~

以下は単一のテキストノードの場合。

~~~js
[ 3, "Hello, World!" ] // Text Node
[ 3, 2023 ] // Text Node
[ 11, "Hello, World!" ] // Document Fragment Node + Text Node
[ 11, 2023 ] // Document Fragment Node + Text Node
~~~


### 4.4. 下の階層が隠れる条件付きコメント

~~~js
[ 
    13,
    "if (lt IE 9)&(vml)",
    // ...childNodes
]
~~~

### 4.5. 下の階層が見える条件付きコメント

~~~js
[ 
    14,
    "if !IE",
    // ...childNodes
]
~~~

## 5. HTML の最小化

### json2html 処理時に合わせて実施します。

1. 閉じタグの省略
   * リンク要素下の閉じタグは省略しない
     * https://triple-underscore.github.io/HTML-writing-ja.html#optional-tags
   * `<source>` は閉じる。`</source>` が無いと Opera 9 で DOM ツリーが崩れる為。
2. 属性のダブルクォーテーションの省略

### html2json 処理時に合わせて実施します。

1. テキストノードの空白文字の削除
   * 改行とタブは一つの半角スペースに
   * 2つ以上の半角スペースを1つの半角スペースへ
   * 先頭と最後の半角スペースを削除、例外は `trimWhitespace` を参照
   * 半角スペースの保護
     * 先頭または最後、または連続する半角スペースの保護には `\u0020` を使う。この工程で半角スペースに変換される。
     * `&#32;` は jsdom で半角スペースに変換されてしまう為、`&#32;` を削除から保護することは出来ない。
   * ここ迄で空文字列 `""` になった場合は、テキストノードは作られない
   * この作業の行われないのは `<script>` `<style>` `<textarea>` と `<pre>` の子要素。
2. `<script>` `<style>` `<textarea>` 下用の不要な空白文字の削除
   * テキストノードの最初と最後の改行文字を削除
   * TODO JSON-LD を最小化
3. `<pre>` 下用の不要な空白文字の削除
   * 最初に登場するテキストノードが空白文字のみならノードを削除する。再度、最初のテキストノードを調べる。
   * 最初のテキストノードの先頭が改行文字なら改行文字を削除
   * 最後に登場するテキストノードが空白文字のみならノードを削除する。再度、最後のテキストノードを調べる。
   * 最後のテキストノードの最後が改行文字なら改行文字を削除
4. コメントノードの削除
   * 条件付きコメント以外を削除します。
   * コメントノードのキープ
   * 参考 [IEでコメントノードを事前に除去し速度を稼ぐ](https://uupaa.hatenadiary.org/entry/20091203/1259820356), [コメントがフロートの位置をずらす](https://web.archive.org/web/20110519022142/http://css-bug.jp/win/ie/ver6/0424/)

### 5.1. 公開用 HTML の為の機械処理

1. [ブラウザの問題：半角スペース、全角スペース、改行コード、整形処理](https://web.archive.org/web/20190330184130/http://www.geocities.co.jp/SiliconValley-SanJose/2485/browsertrouble.html)
2. [HTMLソースの整形処理](https://web.archive.org/web/20190331001728/http://www.geocities.co.jp/SiliconValley-SanJose/2485/reform.html)
3. [Google HTML/CSS Style Guide まとめ](https://qiita.com/Sugima/items/785644372397595644ba)
4. [Another HTML-lint 結果の解説 > <TAG> の ATTR の属性値 `XXXX` は引用符で囲まなければなりません](http://openlab.ring.gr.jp/k16/htmllint/explain.html#quote-attribute-value)
