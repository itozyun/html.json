# html.json と HTML の最小化

1. html.json の最小化
2. HTML の最小化
3. 参考リンク - 公開用 HTML の為の機械処理

## 1. html.json の最小化

json2json 処理時に合わせて実施します

1. 連続するテキストノードのマージ(normalize)

html2json 処理時に合わせて実施します

1. テキストノードの空白文字の削除
   * 改行とタブは一つの半角スペースに
   * 2つ以上の半角スペースを1つの半角スペースへ
   * 先頭と最後の半角スペースを削除、例外は `trimWhitespaces` を参照
   * 半角スペースの保護
     * 先頭または最後、または連続する半角スペースの保護には `\u0020`, `&#32;`, `&#x20;` を使う．この工程で半角スペースに変換される．
   * ここ迄で空文字列 `""` になった場合は、テキストノードは作られない
   * この作業の行われないのは `<script>` `<style>` `<textarea>` と `<pre>` の子要素．
2. `<script>` `<style>` `<textarea>` 用の不要な空白文字の削除
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

## 2. HTML の最小化

json2html 処理時に合わせて実施します

1. 閉じタグの省略
   * リンク要素下の閉じタグは省略しない
     * https://triple-underscore.github.io/HTML-writing-ja.html#optional-tags
   * `<source>` は閉じる．`</source>` が無いと Opera 9 で DOM ツリーが崩れる為．
2. 属性のダブルクォーテーションの省略

## 3. 参考リンク - 公開用 HTML の為の機械処理

1. [ブラウザの問題：半角スペース、全角スペース、改行コード、整形処理](https://web.archive.org/web/20190330184130/http://www.geocities.co.jp/SiliconValley-SanJose/2485/browsertrouble.html)
2. [HTMLソースの整形処理](https://web.archive.org/web/20190331001728/http://www.geocities.co.jp/SiliconValley-SanJose/2485/reform.html)
3. [Google HTML/CSS Style Guide まとめ](https://qiita.com/Sugima/items/785644372397595644ba)
4. [Another HTML-lint 結果の解説 > <TAG> の ATTR の属性値 `XXXX` は引用符で囲まなければなりません](http://openlab.ring.gr.jp/k16/htmllint/explain.html#quote-attribute-value)