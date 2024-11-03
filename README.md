# HTML.JSON

A compact and portable format that can be converted back to HTML in a lightweight way.

And Tiny Streaming SSR!

![](doc/html.json.drawio.png)[Edit in draw.io](https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=%E5%90%8D%E7%A7%B0%E6%9C%AA%E8%A8%AD%E5%AE%9A%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB.drawio#R7ZpRl6I2FMc%2FSx98XA8hgPqoONNtO1vnHPecnvaNgQzSicSGODr99A2QoAmxqAdxdfdl19yQG%2FLLzf8mGXrQX25%2FpsFq8YVECPdsK9r24LRn20PL4f%2Fmho%2FSMPCEIaZJVJrAzjBP%2FkXCaAnrOolQpjzICMEsWanGkKQpCpliCyglG%2FWxV4LVXldBjGqGeRjguvWPJGILOSxrZ%2F%2BMknjBtIplIJ8VhmwRRGSzZ4IPPehTQlj5a7n1Ec7RSSxlu8cDtdV7UZSyYxqsw19%2Be3p89%2F%2BazbEDYjJ9no4%2FgUHp5j3AazFg8bbsQxKgZJ1GKPcCenCyWSQMzVdBmNdu%2BJRz24ItsagOaCjm0OOl1wRjn2BCeTklKTdPMkbJW4WSU5hEQbao3OeF54AxRNPCYvP4gRPxkogytD04fFBB5bGIyBIx%2BsEfEQ0cOQ8iDh0Ay%2FJmN6tQBt1ib0YhFMZARFJc%2Bd7R5j8E8FPgu98L%2FKHK3h1cHX0zeb5eV6hAx1Az%2BpcgfIuLyZqtGU5y2gIpfZvxVgnLx271LbcdogCoSAd1pMAyIAX2pZDaNaSfv355qmHlQ2Za1OIkzuMt5ENHPFgnOZiEK%2FBYVCyTKMKH5mC3QKw85knKxBKwq7LoHLSB3XYV7MCqcx8YsA8uRR02BzJKo3GeCHPEOMiyJFT5qwRViYBVtKKolicboe1BcQ1QpI0iHLDkXXVvIiV6eCYJ77iaExuqS8GWSU26yMiahki02s%2BQuiNPc%2BRojlhAY8RqjoqJq4Z9%2Flw6ty5KVZjrAK%2BnSqYU62EmpEGB6%2F2zJrLiU1aIyJg%2FALzVtsAj6%2FmvOP%2B%2FlLfSGX%2B30l9ZJc0vVFr6v85nv9%2BZGNpDVQxNSahTMRz%2BEEPHUpcgHJ0pho6mqo7drRiObl0MHecAwOuJodwz%2FlDDC6ih46pq6BhOOZ2qITjikHPvcugO9JPnmXLoabrqWd3KIagfr25MDz1wgOAV9bC%2B477DM6unnVk9OLyyMHnNsXwf916VjMkdMrRr6Lu%2B%2BapvknOS9t8ZSa8Y%2BMOWgDu63tc15v%2FSTfu46%2FvYnPSd4HZAc3x3y9uub3EL3gXTm%2Bftahfppj9idMz7hJv0iITrZTHSxr1JCfLpRRr2Nb1nQ99%2FfByNWpIM7aBrutK1TRpdbVbah2ra7HnBMqdUnKR%2Bms78r38%2BP%2BRvVAS2qDxw3FIbn9ECBZHaot%2Fvn7CaMHplra0l4F0mNwNgyBWmfZEHLzXtR1zmf9trCQya9anrtWS6VS%2FDPUreq3h3%2BfAtnqt5J5ZyuXHCqqsa%2BcYFJa9G9rs1vIn0mr5kq6JsFS8nvYt7lnpfZ3huKms9P4ynWs9WoQPm%2Fm9bHcDoiEg2nVb1C4b2AvmIrwW%2BbXWAmuJ6BsXtWh1MR9FT1nw9rx7KpN9LXoVaDvAM997VR1Hd5NX6R045zP51z2CO1dKZQFtVjtV3j1tWw9OB8%2BLui7XybnP31R98%2BA8%3D)

1. html を json で表現する(変換する)
2. json から html への変換時に処理を追加できる
3. HTML を予め json 化しておけば、実行環境に HTML パーサーが不要になる
   * Web サーバ側での動的生成のソース(AMP HTML, メディアタイプ別専用ページ)
   * オフラインドキュメントのコンテンツデータ
   * PJAX のコンテンツデータ
   * 非力な DHTML ブラウザで、文書をページャーで表示する(要素のサイズを測りながら描画する)際のデータ

## 目次

1. コンパイルとテスト
   1. Streaming SSR のデモ
2. html.json の例
3. API の概要
4. HTML の minify
5. 条件付きコメントに関する情報
6. License

## 1. コンパイルとテスト

~~~sh
git clone https://github.com/itozyun/html.json.git
cd html.json
npm i
git submodule update --init

npm run make
npm run test

# Do when the node module is updated
gulp externs
~~~

## 1.1. Streaming SSR のデモ

次を実行した後にブラウザで http://localhost:8080/ を開く．

~~~sh
npm run demo

# Do when the "sample/*" files are updated
gulp sample
~~~

## 2. html.json の例

html.json は HTML と等価な JSON のサブセットです．定義は [HTMLJSON.md](doc/HTMLJSON.md) にあります．

閉じタグの省略できない HTML 要素が多い文書などでは、HTML 形式よりファイルサイズが小さくなります．

~~~html
<!DOCTYPE html>
<p>Hello, world!
~~~

↓

~~~json
[
  9, "<!DOCTYPE html>",
  [ "P", "Hello, world!" ]
]
~~~

## 3. API の概要

次の3つの API が利用できます．詳しい文書は [API](doc/API.md) を確認します．

json2html, json2json で利用できる Restricted Virtual DOM の説明は [RESTRICTED_VNODE.md](doc/RESTRICTED_VNODE.md) を確認します．

json2json で使える Virtual DOM の説明は  [RESTRICTED_VNODE.md](doc/RESTRICTED_VNODE.md) を確認します．

1. html2json
   * html を html.json 形式に変換します．
   * html2json.gulp が利用できます．
2. json2html
   * html.json を html 形式に変換します．
   * 変換時に処理を追加します．
   * ストリーミング SSR の json2html.stream が利用できます
   * json2html.gulp が利用できます．
3. json2json
   * html.json の編集が行えます．
   * 動的ノードと動的属性の内で、決定済の値があれば、静的ノードと静的属性に置き換える．
   * json2json.gulp が利用できます．
4. filter.gulp
   * 静的ページまたは、動的ページだけ処理したい場合に便利な gulp プラグインです

## 4. HTML の minify

html2json, json2json ではテキストノードの最適化と[空白ノードの除去](doc/WHITE_SPACE.md)を行います．

json2html では、閉じタグとクォートを省略して HTML を最小化します．

より詳しい情報は [MINIFY_HTML](doc/MINIFY_HTML.md) を確認します．

## 5. 条件付きコメントに関する情報

html.json は条件付きコメントをサポートします．条件付きコメントに独自に割り振られた nodeType は [HTMLJSON.md](doc/HTMLJSON.md) で確認出来ます．
条件付きコメントに関する情報は [CONDITIONAL_COMMENTS](doc/CONDITIONAL_COMMENTS.md) にあります．

## 6. License

[HTML.JSON](https://github.com/itozyun/html.json) is licensed under MIT license.

(C) 2024 [itozyun](https://github.com/itozyun)([blog](//outcloud.blogspot.com/))
