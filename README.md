# HTML.JSON

A compact and portable format that can be converted back to HTML in a lightweight way, achieving Web 1.0 level SSR!

[jsonml](http://www.jsonml.org/)([wiki](https://en.wikipedia.org/wiki/JsonML)) の拡張です.

1. html を json で表現する(変換する)
2. json から html への変換時に処理を追加できる
   * HTML を予め json 化しておけば、実行環境に HTML パーサーが不要になる
     * Web サーバの動的コンテンツ
     * オフラインドキュメントのデータ形式
     * PJAX
3. `Stream` でコンテンツの動的生成
4. ProcessingInstruction に改名, `[ 7, "function-name", ...args ]`
5. InstructionAttr 動的属性, `{ ":href" : [ "function-name", ...args ] }`
5. CDATA 追加, xhtml 対応?
6. TODO html.json DOM(予定)
7. TODO `<? include ./sidebar.json ?>`

## 目次

1. html2json
   1. 動的コンテンツ
   2. 動的属性
2. json2json
3. json2html
4. HTML.Json 定義
5. HTML の最小化

## 1. html2json

jsdom に依存する。

### 1.1. 動的コンテンツ

~~~html
<div id="side">
<? createSidebar("",6,{}) ?>
</div>
~~~

~~~js
[
    "div#side",
    [
        [
            8, // 動的コンテンツ
            "createSidebar", // メソッド名
            [ "", 6, {} ] // メソッドの引数
        ]
    ]
]
~~~

### 1.2. 動的属性

~~~html
<ul :class="toggleList('productList',1)"></ul>
~~~

~~~js
[
    "ul",
    {
        ":class" : [ // 動的属性
            "toggleList", // メソッド名
            [ "productList", 1 ] // メソッドの引数
        ]
    }
]
~~~

## 2. json2json

動的コンテンツの内、決定した値を `onReachDynamicContent` で埋め込むことが出来る。

~~~js
json2json( json, onReachDynamicContent, opt_errorHandler );

function onReachDynamicContent( methodName, args, currentHtmlJson ){
    return undefined; // null or '' or string or number or html.json
};
~~~
### json2json の `onReachDynamicContent` の戻り値

* `undefiend` 何もしない
* `null` or `""` 動的コンテンツを削除
* `{string|number}` TEXT_NODE になる
* strict な html.json `[ json2json.HTML_JSON_TYPE_DOCUMENT_FRAGMENT_NODE, [ [ 'P', "Hello, world!" ] ]`, `[ 2, 'p', [ ... ] ]`, `[ 'p', "Hi!" ]` や `[ 3, "Hello, world!" ]`
* 戻り値が `[json2json.HTML_JSON_TYPE_PROCESSING_INSTRUCTION, ]` も可能。このノードは再度 `onReachDynamicContent` で処理される。


## 3. json2html

既に JSON パーサーがある環境では、json2html を用意するだけで、json データから html を生成できる。

~~~js
json2html( json, onReachDynamicContent, opt_strictQuot, opt_useConmma );

function onReachDynamicContent( methodName, args, currentHtmlJson ){
    return htmlString; // or [] html.json
};
~~~

### json2html の `onReachDynamicContent` の戻り値

* `undefiend` or `null` or `""` 何も書きださない
* `{string|number}` -> 文字列をそのまま埋め込む, htmlString もそのまま埋め込む
* strict な html.json `[ json2json.HTML_JSON_TYPE_DOCUMENT_FRAGMENT_NODE, [ [ 'P', "Hello, world!" ] ]`, `[ 2, 'p', [ ... ] ]`, `[ 'p', "Hi!" ]` や `[ 3, "Hello, world!" ]`
* 戻り値が `[json2json.HTML_JSON_TYPE_PROCESSING_INSTRUCTION, ]` も可能。このノードは再度 `onReachDynamicContent` で処理される。


## 4. HTML.Json 定義

|                                  | 第1要素                     | 第2要素                               | 第3要素               | 第4要素               |
|:---------------------------------|:----------------------------|:--------------------------------------|:----------------------|:----------------------|
| DOCUMENT_NODE                    | `0`                         | `"<!DOCTYPE html>"` *5                | -                     | -                     |
| DOCUMENT_FRAGMENT_NODE           | `1`                         | `[]`                                  | -                     | -                     |
| HTML_ELEMENT *4                  | `2`                         | `"input"`                             | `{}`                  | `[]` or `textContent` |
| タグ名(.class#id) *1, *2         | `"input"`, `"p.main#main"`  |`{type:"text",style:{color:"red"}}` *3 | `[]` or `textContent` | -                     |
| TEXT_NODE                        | `3`                         | `textContent` *6                      | -                     | -                     |
| COMMENT_NODE                     | `4`                         | `string`                              | -                     | -                     |
| 下の階層が隠れる条件付きコメント | `5`                         | `"(IE)&(vml)"`                        | `[]` or `textContent` | -                     |
| 下の階層が見える条件付きコメント | `6`                         | `"!(IE)"`                             | `[]` or `textContent` | -                     |
| 動的コンテンツ                   | `7`                         | `"メソッド名"`                        | `[]` メソッドの引数   | -                     |

1. タグ名は小文字
2. クラス名, id どちらか、または両方を第2引数ではなくここで記述できる
3. 省略が可能。値が `""` or `==null` では属性は追加されない。style 属性は ハッシュで記述する。`{style:{}}`
4. json2html では実装済だが html2json ではこの形では出力しない, json2json の onReachDynamicContentsCallback で使用
5. XHTML では `"<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE html>"`
6. `textContent` は `string` または Finite な `number`

下の階層が隠れる条件付きコメント下に動的コンテンツを含むことは出来ません。これは、条件付きコメントの下にはパース出来ない html 文字列片を含む為です。
動的コンテンツで、下の階層が隠れる条件付きコメントを含むコンテンツを出力するようにします。

### 4.1. ドキュメント

~~~json
[ 
    0,
    "<!DOCTYPE html>",
    [
        "html",
        {
            "lang"    : "ja",
            "xmlns:v" : "urn:schemas-microsoft-com:vml"
        },
        [
            [
                "head",
                {
                    "prefix" : "og: http://ogp.me/ns# fb: http://ogp.me/ns/fb#"
                },
                [
                    [ "meta", { "http-equiv" : "Content-Type", "content" : "text/html; charset=utf-8" } ]
                ]
            ],
            [
                "body",
                { "size" : 1 },
                []
            ]
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
        [ "p", [ [ "span", "Hello, World!" ] ] ]
    ]
]
~~~

子要素が単一のテキストノード以外の場合は、必ず `[]` で囲む。子要素が単一の HTML 要素でも次のようになる。 `[ [ "br" ] ]`

子要素が、`Text`, `<br>`, `Text` の場合は `[ "Hello,", [ "br" ], "World!" ]`

### 4.3. TextNode

テキストノードは基本的に子として出現する。

~~~json
[ "p", "Hello, World!" ]
~~~

以下は単一のテキストノードの場合。

~~~json
[ 3, "Hello, World!" ]
~~~


### 4.4. 下の階層が隠れる条件付きコメント

~~~json
[ 
    5,
    "if (lt IE 9)&(vml)",
    [
        ...
    ]
]
~~~

### 4.5. 下の階層が見える条件付きコメント

~~~json
[ 
    6,
    "if !IE",
    [
        ...
    ]
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
   * 改行文字を削除, タブは一つの半角スペースに
   * 2つ以上の半角スペースを1つの半角スペースへ
   * 先頭と最後の半角スペースを削除
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
