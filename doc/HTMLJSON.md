# html.json 定義

html.json は HTML を表現できる JSON のサブセットです．

先行するプロジェクトには [jsonml](http://www.jsonml.org/)([wiki](https://en.wikipedia.org/wiki/JsonML)) があります．この拡張です.

## 表

|                                                   | 第1要素                     | 第2要素                | 第3要素           | 第4要素    |
|:--------------------------------------------------|:----------------------------|:-----------------------|:----------------- |:-----------|
| HTML_ELEMENT *4                                   | `1`                         | `"input"`              | `{attributes}` *3 | `...nodes` |
| タグ名(.class#id) *1, *2                          | `"input"`, `"p#main.main"`  |`{attributes}` *3       | `...nodes`        | -          |
| TEXT_NODE *4                                      | `3`                         | `nodeValue` *6         | -                 | -          |
| CDATA_SECTION                                     | `4`                         | `nodeValue` *6         | -                 | -          |
| PROCESSING_INSTRUCTION                            | `7`                         | `"メソッド名"`         | `...arguments`    | -          |
| COMMENT_NODE                                      | `8`                         | `nodeValue` *6         | -                 | -          |
| DOCUMENT_NODE                                     | `9`                         | `"<!DOCTYPE html>"` *5 | `...nodes` *7     | -          |
| DOCUMENT_FRAGMENT_NODE                            | `11`                        | `...nodes`             | -                 | -          |
| 下の階層が隠れる条件付きコメント *8               | `13`                        | `"(IE)&(vml)"`         | `...nodes`        | -          |
| 下の階層が見える条件付きコメントの開始タグ        | `14`                        | `"!(IE 7)"`            | -                 | -          |
| 下の階層が見える条件付きコメントの終了タグ        | `15`                        | -                      | -                 | -          |
| Netscape4用 下の階層が隠れる条件付コメント *8 *10 | `16`                        | `"true"`               | `...nodes`        | -          |
| HTML_ELEMENT(開始タグのみ) *9                     | `17`                        | `"DIV"`                | `{attributes}` *3 | `...nodes` |
| HTML_ELEMENT(閉じタグのみ) *9                     | `18`                        | `"DIV"`                | -                 | -          |

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

## ドキュメント

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

## HTML の一部

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

## Text Node

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

## 下の階層が隠れる条件付きコメント

~~~js
[ 
    13,
    "if (lt IE 9)&(vml)",
    // ...childNodes
]
~~~

## 下の階層が見える条件付きコメント

~~~js
[
    [
        14,
        "if !IE"
    ],
    "Not IE"
    [
        15
    ]
]
~~~

## ProcessingInstruction

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

## Instruction Attribute

~~~html
<ul :class='toggleList("productList",1)'></ul>
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