# html.json と HTML の最小化

1. html.json の最小化
   1. テキストノードの空白文字の削除
      1. `<script>` `<style>` `<textarea>` `<pre>` `<listing>` 以外の親を持つテキストノード
      2. `<script>` `<style>` `<textarea>` が親のテキストノード
      3. `<pre>` `<listing>` が親のテキストノード
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

#### 1.1.1. `<script>` `<style>` `<textarea>` `<pre>` `<listing>` 以外の親を持つテキストノード

* この作業の行われないのは `<script>` `<style>` `<textarea>` と `<pre>` `<listing>` の子要素．
* `removeNewlineBetweenFullWidthChars:true` の場合、全角文字の間に単一の改行文字がある場合、これを削除する
* 改行とタブは一つの半角スペースに
* 2つ以上の半角スペースを1つの半角スペースへ
* `trimWhitespaces:"aggressive"` を指定すると、テキストノードの前後の空白文字をすべて削除する
   * 但し「テキストノードの先頭が改行ではない」の場合、前に一つの半角スペースを残す
   * 但し「テキストノードの最後が改行と改行に続く0個以上の空白文字ではない」場合、最後に一つの半角スペースを残す
* 半角スペースを保護するには？
   * 先頭または最後、または連続する半角スペースの保護には `\u0020`, `&#32;`, `&#x20;` を使う．この工程で半角スペースに変換される．
* ここ迄で空文字列 `""` になった場合は、テキストノードは作られない(またはノードを削除する)

#### 1.1.2. `<script>` `<style>` `<textarea>` が親のテキストノード

テキストノードの最初と最後の改行文字を削除

#### 1.1.3. `<pre>` `<listing>` が親のテキストノード

1. 最初のテキストノードが空白文字のみなら削除．再度、最初のテキストノードを調べる．
2. 最初のテキストノードの頭の改行文字を削除
3. 最後のテキストノードが空白文字のみなら削除．再度、最後のテキストノードを調べる．
4. 最後のテキストノードの後ろの改行文字を削除
5. 各行の改行の前の空白文字("\t", " ")も削除(`trimWhitespaces:aggressive` のみ)
6. テキストノードが改行1文字だけの場合、直前のテキストノードに含める(`trimWhitespaces:aggressive` のみ)

### 1.2. 連続するテキストノードのマージ(normalize)

### 1.3. コメントノードの削除

空ではない条件付きコメントを除いて削除します．
コメントノードのキープ `keepComments`, `keepEmptyConditionalComment`
参考 [IEでコメントノードを事前に除去し速度を稼ぐ](https://uupaa.hatenadiary.org/entry/20091203/1259820356), [コメントがフロートの位置をずらす](https://web.archive.org/web/20110519022142/http://css-bug.jp/win/ie/ver6/0424/)

### 1.4. CDATA セクションの削除

CDATA セクションを削除します．

CDATA セクションのキープ `keepCDATASections`

## 2. HTML の最小化

json2html 処理時に併せて実施します．一般的な最小化処理です．

### 2.1. 閉じタグの省略

   * XHTML 文書では実施しない
   * `<a>` `<audio>` `<del>` `<ins>` `<map>` `<noscript>` `<video>` の子の lastChild な `</p>` は省略不可
     * https://triple-underscore.github.io/HTML-writing-ja.html#optional-tags
     * [Firefox 3.5~3.6 では `<a>` の子孫の閉じタグを省略すると奇妙なツリーになる](https://outcloud.blogspot.com/2021/08/richlink.html) この問題が `<del>` `<ins>` `<map>` `<noscript>` でも発生するか未確認
   * `<source>` は閉じる．`</source>` が無いと Opera 9 で DOM ツリーが崩れる為．

### 2.2. 属性値のダブルクォーテーションの省略

   * XHTML 文書では実施しない

## 3. 参考リンク - 公開用 HTML の為の機械処理

1. [ブラウザの問題：半角スペース、全角スペース、改行コード、整形処理](https://web.archive.org/web/20190330184130/http://www.geocities.co.jp/SiliconValley-SanJose/2485/browsertrouble.html)
2. [HTMLソースの整形処理](https://web.archive.org/web/20190331001728/http://www.geocities.co.jp/SiliconValley-SanJose/2485/reform.html)
3. [Google HTML/CSS Style Guide まとめ](https://qiita.com/Sugima/items/785644372397595644ba)
4. [Another HTML-lint 結果の解説 > <TAG> の ATTR の属性値 `XXXX` は引用符で囲まなければなりません](http://openlab.ring.gr.jp/k16/htmllint/explain.html#quote-attribute-value)
