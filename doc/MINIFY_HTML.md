# html.json と HTML の最小化

1. html.json の最小化
   1. テキストノードの空白文字の削除
   2. 連続するテキストノードのマージ(normalize)
   3. コメントノードの削除
   4. CDATA セクションの削除
2. HTML の最小化
   1. 閉じタグの省略
   2. 属性値のダブルクォーテーションの省略
3. 参考リンク - 公開用 HTML の為の機械処理

## 1. html.json の最小化

html2json, json2json で実施します．options で無効にできます．

### 1.1. テキストノードの空白文字の削除

* `trimWhitespaces: "normal"|"aggressive"|true` で空白文字の削除が有効になります．
* `trimWhitespaces: "aggressive"` については『[公開用 HTML の最小化 : ソースコードの実際に即した空白文字のアグレッシブな除去](https://outcloud.blogspot.com/2025/11/optimize-whitespaces.html)』に詳しい情報があります．
* 『[github / ES2 HTML Parser / Test: URI Attribute value & Raw Text Elements](https://ecmascript2.github.io/htmlparser/test.html)』では、一部のタグの改行の無視のまとめとテストページがあります．
* `removeNewlineBetweenFullWidthChars: true` で全角文字に挟まれた一つの改行文字を削除します．
* `trimWhitespaces: "aggressive"` でも半角スペースを保護するには？
   * 先頭または最後、または連続する半角スペースの保護には `\u0020`, `&#32;`, `&#x20;` を使う．この工程で半角スペースに変換される．

### 1.2. 連続するテキストノードのマージ(normalize)

ノードの追加や削除でテキストノードが連続した場合、マージします．

### 1.3. コメントノードの削除

空ではない条件付きコメントを除いて削除します．
コメントノードのキープ `keepComments`, `keepEmptyConditionalComment`

#### 参考リンク

* [IEでコメントノードを事前に除去し速度を稼ぐ](https://uupaa.hatenadiary.org/entry/20091203/1259820356)
* [コメントがフロートの位置をずらす](https://web.archive.org/web/20110519022142/http://css-bug.jp/win/ie/ver6/0424/)

### 1.4. CDATA セクションの削除

CDATA セクションを削除します．

CDATA セクションのキープ `keepCDATASections`

## 2. HTML の最小化

json2html 処理時に併せて実施します．一般的な最小化処理です．

### 2.1. 閉じタグの省略

   * XHTML 文書では実施しない
   * `<a>` `<audio>` `<del>` `<ins>` `<map>` `<noscript>` `<video>` の子の lastChild な `</p>` は省略不可
     * [公開用 HTML の最小化 : `</p>` を省略する](https://outcloud.blogspot.com/2025/11/p-end-tag-omittable.html)
     * https://triple-underscore.github.io/HTML-writing-ja.html#optional-tags
     * [Firefox 3.5~3.6 では `<a>` の子孫の閉じタグを省略すると奇妙なツリーになる](https://outcloud.blogspot.com/2021/08/richlink.html#bug-of-firefox3.5) この問題が `<del>` `<ins>` `<map>` `<noscript>` でも発生するか未確認
   * `<source>` は閉じる．`</source>` が無いと Opera 9 で DOM ツリーが崩れる為．

### 2.2. 属性値のダブルクォーテーションの省略

   * XHTML 文書では実施しない

## 3. 参考リンク - 公開用 HTML の為の機械処理

1. [ブラウザの問題：半角スペース、全角スペース、改行コード、整形処理](https://web.archive.org/web/20190330184130/http://www.geocities.co.jp/SiliconValley-SanJose/2485/browsertrouble.html)
2. [HTMLソースの整形処理](https://web.archive.org/web/20190331001728/http://www.geocities.co.jp/SiliconValley-SanJose/2485/reform.html)
3. [Google HTML/CSS Style Guide まとめ](https://qiita.com/Sugima/items/785644372397595644ba)
4. [Another HTML-lint 結果の解説 > <TAG> の ATTR の属性値 `XXXX` は引用符で囲まなければなりません](http://openlab.ring.gr.jp/k16/htmllint/explain.html#quote-attribute-value)
