# HTML.JSON

A compact and portable format that can be converted back to HTML in a lightweight way, achieving Web 1.0 level SSR!

[jsonml](http://www.jsonml.org/)([wiki](https://en.wikipedia.org/wiki/JsonML)) の拡張です.

1. html を json で表現する(変換する)
2. json から html への変換時に処理を追加できる
   * HTML を予め json 化しておけば、実行環境に HTML パーサーが不要になる
     * Web サーバ側での動的生成のソース
     * オフラインドキュメントのコンテンツデータ
     * PJAX のコンテンツデータ
     * 非力な DHTML ブラウザで、文書をページャーで表示する(要素のサイズを測りながら描画する)際のデータ

## コンパイルとテスト

~~~sh
npm run make
npm run test

# Do when the node module is updated
gulp externs
~~~

## 目次

1. html2json
   1. 動的コンテンツ
   2. 動的属性
2. json2json
3. json2html
4. HTML.JSON 定義
5. HTML の最小化

## 1. html2json

[ES2 HTML Parser](https://github.com/ECMAScript2/htmlparser) で HTML をパースします．

* `trimWhitespace`
* `keepCDATASections`
* `keepComments`
* `removeLineBreaksBetweenFullWidth`
* `argumentBrackets`
* `instructionAttrPrefix`

### `trimWhitespace`

1. `removeLineBreaksBetweenFullWidth` オプションが `true` の場合、全角文字の間の改行文字を削除する
2. タブ文字を半角スペースに置換
3. 連続する改行を1つの改行へ
4. テキストノードの最後の連続する改行を削除
5. `trimWhitespace:"agressive"` を指定すると、テキストノードの前後の空白文字をすべて削除する
   * 但し次のいずれかを満たす場合、前後に一つの半角スペースを残す
     1. テキストノードの先頭が改行ではない
     2. 後ろが改行と空白文字ではない
6. 改行を半角スペースに置換
7. 連続する半角スペースを1つ半角スペースへ
8. 半角スペースを保護したい場合 `\u0020` を使う

#### `trimWhitespace:"agressive"` でテキストノードの前後の空白文字をすべて削除する

~~~html
    </div>
    html.json
    <div>
~~~

~~~json
[ [ "div" ], "html.json", [ "div" ] ]
~~~

#### `trimWhitespace:"agressive"` でもテキストノードの前後の空白文字を1つだけ残す

~~~html
<b>1</b> / <b>10</b>
~~~

~~~json
[ [ "b", 1 ], " / ", [ "b", 10 ] ]
~~~

### 1.1. ProcessingInstruction

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

動的コンテンツの内、決定した値を `onInstruction` で埋め込むことが出来る．

~~~js
json2json( json, onInstruction, opt_onReachElement, opt_onError, opt_options );

function onInstruction( methodName, args, currentHtmlJson ){
    return undefined; // null or '' or string or number or html.json
};
~~~
### json2json の `onInstruction` の戻り値

json2html と微妙に異なる点に注意!

#### `InstructionNode`

* `undefiend` 何もしない
* `null` or `""` : `InstructionNode`を削除
* `{string|number}` TEXT_NODE になる
* strict な html.json `[json2json.DOCUMENT_FRAGMENT_NODE, ["p", "Hello, world!"]`, `[ 1, "p", ...node ]`, `[ 'p', "Hi!" ]` や `[ 3, "Hello, world!" ]`
* 戻り値が `[json2json.PROCESSING_INSTRUCTION, "funcName", ...args ]` も可能．このノードは再度 `onInstruction` で処理される．

#### `InstructionAttr`

* `undefiend` : 何もしない
* `null` : `InstructionAttr` を削除
* `m_ATTRS_NO_VALUE` なプロパティであり属性値が `false` の場合、属性を追加しない
* 戻り値が配列の場合、`InstructionAttr` のまま(json2html では必ず属性値を返すこと)
* これ以外は属性値になる

### `opt_onReachElement`

* Element に到達したときにコールバックされる
* 引数は DOM ライクに要素を操作できるオブジェクト
* 但し、文書ツリーの操作が出来るのは次に限る
  * 現在の Element の属性の操作
  * 現在の Element の子孫の操作
  * 現在の Element の直前への挿入
  * 現在の Element の直後への挿入
  * 現在の Element を Element で wrap する

## 3. json2html

既に JSON パーサーがある環境では、json2html を用意するだけで、json データから html を生成できる．

~~~js
json2html( json, onInstruction, opt_strictQuot, opt_useConmma );

function onInstruction( methodName, args, currentHtmlJson ){
    return htmlString; // or [] html.json
};
~~~

### json2html の `onInstruction` の戻り値

json2json と微妙に異なる点に注意!

#### `InstructionNode`

* `undefiend` or `null` or `""` 何も書きださない
* `{string|number}` -> 文字列をそのまま埋め込む, htmlString もそのまま埋め込む
* strict な html.json `[json2html.DOCUMENT_FRAGMENT_NODE, [ 'P', "Hello, world!" ]]`, `[2, 'p', ...`, `[ 'p', "Hi!" ]` や `[ 3, "Hello, world!" ]`
* 戻り値が `[json2html.PROCESSING_INSTRUCTION, "funcName", ...args ]` も可能．このノードは再度 `onInstruction` で処理される．

#### `InstructionAttr`

* `undefiend` or `null` 属性を追加しない
* `m_ATTRS_NO_VALUE` なプロパティであり属性値が `false` の場合、属性を追加しない
* 戻り値が配列の場合、このノードは再度 `onInstruction` で処理される(無限ループにならず属性値を返すこと)
* これ以外は属性値になる

## 4. HTML.Json 定義

|                                               | 第1要素                     | 第2要素                | 第3要素           | 第4要素    |
|:----------------------------------------------|:----------------------------|:-----------------------|:----------------- |:-----------|
| HTML_ELEMENT *4                               | `1`                         | `"input"`              | `{attributes}` *3 | `...nodes` |
| タグ名(.class#id) *1, *2                      | `"input"`, `"p.main#main"`  |`{attributes}` *3       | `...nodes`        | -          |
| TEXT_NODE *4                                  | `3`                         | `nodeValue` *6         | -                 | -          |
| CDATA_SECTION                                 | `4`                         | `nodeValue` *6         | -                 | -          |
| PROCESSING_INSTRUCTION                        | `7`                         | `"メソッド名"`         | `...arguments`    | -          |
| COMMENT_NODE                                  | `8`                         | `nodeValue` *6         | -                 | -          |
| DOCUMENT_NODE                                 | `9`                         | `"<!DOCTYPE html>"` *5 | `...nodes` *7     | -          |
| DOCUMENT_FRAGMENT_NODE                        | `11`                        | `...nodes`             | -                 | -          |
| 下の階層が隠れる条件付きコメント *8           | `13`                        | `"(IE)&(vml)"`         | `...nodes`        | -          |
| 下の階層が見える条件付きコメントの開始タグ    | `14`                        | `"!(IE 7)"`            | -                 | -          |
| 下の階層が見える条件付きコメントの終了タグ    | `15`                        | -                      | -                 | -          |
| Netscape4用 下の階層が隠れる条件付コメント *8 | `16`                        | `"true"`               | `...nodes`        | -          |
| HTML_ELEMENT(開始タグのみ) *9                 | `17`                        | `"div"`                | `{attributes}` *3 | `...nodes` |
| HTML_ELEMENT(閉じタグのみ) *9                 | `18`                        | `"div"`                | -                 | -          |

1. タグ名は小文字
2. クラス名, id どちらか、または両方を第2引数ではなくここで記述できる
3. 属性
   * 必ず tagName の直後に出現する
      * 省略が可能
   * 例
      * `{type:"text",style:{color:"red"}}`
   * 値が `===false` or `===null` or `==undefined` では属性は追加されない(json2html)
   * style 属性はオブジェクトまたは文字列(`elm.style.cssText`)で記述する
     * `{style:{}}`, `style:"color:red;font-size:2em"`
4. json2html では実装済だが html2json ではこの形では出力しない, json2json の onInstruction の戻り値で使用できる
5. doctype 文字列．XHTML では XML 宣言を含むこともある `"<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE html>"`
6. `nodeValue` は `string` または Finite な `number`
7. `...nodes` は `[ nodeType, ... ]`, `string` または Finite な `number`
8. 壊れた HTML ツリーを子にもつことがある
9. 下の階層が隠れる条件付きコメントの中に出現する壊れた HTML ツリーを表現する為の nodeType
10. [Conditional Comments for Netscape 4](https://web.archive.org/web/20050308074844/http://www.dithered.com/css_filters/html_only/conditional_comments_ns4.html)

~~~html
<!--&{true};
   <style type="text/css">
   /*<![CDATA[*/ #testElement {color: #00cc00;} /*]]>*/
   </style>
-->
~~~

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

テキストノードは基本的に子として出現する．

~~~json
[ "p", "Hello, World!" ]
~~~

以下は単一のテキストノードの場合．

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

### json2html 処理時に合わせて実施します

1. 閉じタグの省略
   * リンク要素下の閉じタグは省略しない
     * https://triple-underscore.github.io/HTML-writing-ja.html#optional-tags
   * `<source>` は閉じる．`</source>` が無いと Opera 9 で DOM ツリーが崩れる為．
2. 属性のダブルクォーテーションの省略

### html2json 処理時に合わせて実施します

1. テキストノードの空白文字の削除
   * 改行とタブは一つの半角スペースに
   * 2つ以上の半角スペースを1つの半角スペースへ
   * 先頭と最後の半角スペースを削除、例外は `trimWhitespace` を参照
   * 半角スペースの保護
     * 先頭または最後、または連続する半角スペースの保護には `\u0020` を使う．この工程で半角スペースに変換される．
     * `&#32;` は jsdom で半角スペースに変換されてしまう為、`&#32;` を削除から保護することは出来ない．
   * ここ迄で空文字列 `""` になった場合は、テキストノードは作られない
   * この作業の行われないのは `<script>` `<style>` `<textarea>` と `<pre>` の子要素．
2. `<script>` `<style>` `<textarea>` 下用の不要な空白文字の削除
   * テキストノードの最初と最後の改行文字を削除
3. `<pre>` 下用の不要な空白文字の削除
   * 最初に登場するテキストノードが空白文字のみならノードを削除する．再度、最初のテキストノードを調べる．
   * 最初のテキストノードの先頭が改行文字なら改行文字を削除
   * 最後に登場するテキストノードが空白文字のみならノードを削除する．再度、最後のテキストノードを調べる．
   * 最後のテキストノードの最後が改行文字なら改行文字を削除
4. コメントノードの削除
   * 条件付きコメント以外を削除します．
   * コメントノードのキープ
   * 参考 [IEでコメントノードを事前に除去し速度を稼ぐ](https://uupaa.hatenadiary.org/entry/20091203/1259820356), [コメントがフロートの位置をずらす](https://web.archive.org/web/20110519022142/http://css-bug.jp/win/ie/ver6/0424/)
5. 連続するテキストノードのマージ(noemalize)

### json2json 処理時に合わせて実施します

1. 連続するテキストノードのマージ(noemalize)

### 5.1. 公開用 HTML の為の機械処理

1. [ブラウザの問題：半角スペース、全角スペース、改行コード、整形処理](https://web.archive.org/web/20190330184130/http://www.geocities.co.jp/SiliconValley-SanJose/2485/browsertrouble.html)
2. [HTMLソースの整形処理](https://web.archive.org/web/20190331001728/http://www.geocities.co.jp/SiliconValley-SanJose/2485/reform.html)
3. [Google HTML/CSS Style Guide まとめ](https://qiita.com/Sugima/items/785644372397595644ba)
4. [Another HTML-lint 結果の解説 > <TAG> の ATTR の属性値 `XXXX` は引用符で囲まなければなりません](http://openlab.ring.gr.jp/k16/htmllint/explain.html#quote-attribute-value)

## License

[HTML.JSON](https://github.com/itozyun/html.json) is licensed under MIT license.

(C) 2024 [itozyun](https://github.com/itozyun)([blog](//outcloud.blogspot.com/))
