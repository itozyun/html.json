# 条件付きコメント

## ユースケース

### 1. ベクター画像で SVG と VML を切り替える

`<v:path>` は条件付きコメント内で閉じている

~~~html
<div class="chart-container">
    <!--[if (!vml)|(IE 9)]><!-->
    <picture>
        <source src="chart.svg" type="xml/image">
        <img src="chart.png">
    </picture>
    <!--<![endif]-->
    <!--[if (vml)&!(IE 9)]><v:path>...</v:path><![endif]-->
</div>
~~~

### 2. 属性セレクタに非対応の IE6 以下だけ、代替タグを使用する

`<table class="tblborder" cellspacing=0>` は条件付きコメント内で閉じていない

~~~html
<!--[if !(gt IE 6)]><!--><table border=1 cellspacing=0><!--<![endif]-->
<!--[if lt IE 7]><table class="tblborder" cellspacing=0><![endif]-->
<tr>
    <th>...<td>...
</table>
~~~

## 閉じタグの省略の関係者

`<p>` の後続の Node は、`<a>1` か `<a>2`．つまり、この両方が省略を許容する場合に限って省略が可能

~~~html
<p>
    ....
</p>
<!--[if (!vml)|(IE 9)]><!--><a>1</a><!--<![endif]-->
<a>2</a>
<!--[if (vml)&!(IE 9)]><a>3</a><![endif]-->
~~~

`<p>` の後続の Node は、`<a>1` か `<a>2` か `<a>3`．つまり、この3者が省略を許容する場合に限って省略が可能

~~~html
<p>
    ....
</p>
<!--[if IE 9]><!--><a>1</a><!--<![endif]-->
<!--[if !(IE 8)]><a>2</a><![endif]-->
<a>3</a>
~~~

つまり stream では、全ての後続の Node が判明するまで `</p>` の後続のノードを書き出すことが出来ない!
