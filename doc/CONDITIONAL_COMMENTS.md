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
