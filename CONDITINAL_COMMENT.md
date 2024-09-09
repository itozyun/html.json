# 条件付きコメント

## ユースケース

### 1. ベクター画像で SVG と VML を切り替える

`<v:path>` は条件付きコメント内で閉じている

~~~html
<div class="chart-container">
    <!--[if (!vml)|(IE 9)]><!-->
    <picture>
        <source src="chart.svg" type="xml/image">
        <img src="chart.svg">
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
