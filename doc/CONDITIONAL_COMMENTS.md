# 条件付きコメント

html.json は条件付きコメントをサポートする．これには IE 用のものに加えて、NN4 用を含む．

## ユースケース

### 1. ベクター画像で SVG と VML を切り替える

`<v:path>` は条件付きコメント内で閉じている

~~~html
<div class="chart-container">
    <!--[if !IE]><!-->
    <picture>
        <source src="chart.svg" type="xml/image">
        <img src="chart.png">
    </picture>
    <!--<![endif]-->
    <!--[if IE 9]><img src="chart.svg"><![endif]-->
    <!--[if (vml)&!(IE 9)]><v:path>...</v:path><![endif]-->
    <!--[if (!vml)&!(IE 9)]><img src="chart.png"><![endif]-->
</div>
~~~

### 2. 属性セレクタに非対応の IE6 以下だけ、代替タグを使用する

`<table class="tblborder" cellspacing=0>` は条件付きコメント内で閉じていない

~~~html
<!--[if !(gt IE 6)]><!--><table border=1 cellspacing=0><!--<![endif]-->
<!--[if lt IE 7]><table class="border:1"><![endif]-->
<tr>
    <th>...<td>...
</table>
~~~

## 閉じタグの省略と条件付きコメント



`<p>` の後続の Element/Text は、`<x>1` か `<x>2`．つまり、この両方が省略を許容する場合に限って省略が可能

~~~html
<p>
    ....
</p>
<!--[if (!vml)|(IE 9)]><!--><x>1</x><!--<![endif]-->
<x>2</x>
<!--[if (vml)&!(IE 9)]><x>3</x><![endif]-->
~~~

`<p>` の後続の Element/Text は、`<x>1` か `<x>2` か `<x>3`．つまり、この3者が省略を許容する場合に限って省略が可能

~~~html
<p>
    ....
</p>
<!--[if IE 9]><!--><x>1</x><!--<![endif]-->
<!--[if !(IE 8)]><x>2</x><![endif]-->
<x>3</x>
~~~

`<p>` の後続の Element/Text は、`<x>0` か `<x>1` か `<x>2` か `<x>3`．つまり、この4者が省略を許容する場合に限って省略が可能

`<p>` と同階層の要素に出会うまで、後続ノードの列挙が続く

~~~html
<p>
    ....
</p>
<!--[if !(IE 9)]><!-->
    <!--[if IE 7]><x>0</x><![endif]-->
    <x>1</x>
<!--<![endif]-->
<!--[if !(gte IE 8)]><x>2</x><![endif]-->
<x>3</x>
~~~

つまり stream では、全ての後続の Element/Text が判明するまで `</p>` の後続のノードを書き出すことが出来ない!


## 参考リンク

1. [About Conditional Comments / Version Vectors](https://web.archive.org/web/20070103163310/http://msdn.microsoft.com/workshop/author/dhtml/overview/ccomment_ovw.asp)
2. [(X)HTML-only Filters Summary](https://web.archive.org/web/20050303001355/http://www.dithered.com/css_filters/html_only/index.php)
3. [Conditional Comments for Netscape 4](https://web.archive.org/web/20050308074844/http://www.dithered.com/css_filters/html_only/conditional_comments_ns4.html)

### IE5.5

[About Conditional Comments / Version Vectors](https://web.archive.org/web/20070103163310/http://msdn.microsoft.com/workshop/author/dhtml/overview/ccomment_ovw.asp)

> Microsoft Windows 2000に同梱されているInternet Explorer 5のバージョンベクトルは5.0002です。したがって、条件式[if IE lte 5.0000]は、Internet Explorer 5のリリースビルドで評価されると偽を返します。Internet Explorer 5.5のリリースビルドでは、バージョンベクトルは5.5000です。

~~~html
<!--[if (gte IE 5.5000)&(lt IE 6)]> IE5.5 <![endif]-->
~~~
