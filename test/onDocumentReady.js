const test = require('ava');
const html2json = require('../dist/html2json.js');
const json2json = require('../dist/json2json.js');

test('vnode',
    (t) => {
        var json = html2json('<code>A<? empty ?>B</code>');

        json2json(
            json,
            function( funcName ){
                if( funcName === 'empty' ){
                    return null;
                };
            },
            null,
            function( rootVNode ){
                rootVNode.getFirstChild().insertNodeLast( 3, 'CD' ).insertNodeAfter( 3, 'EF' );

                // console.log( rootVNode.getElementListByTag( 'CODE' )[ 0 ].getHTMLJson() );
            }
        );

        t.deepEqual(json, [11, ['CODE', 'ABCDEF']]);
    }
);

test('vnode.getInnerText',
    (t) => {
        var text,
            json = html2json(`
<script>var a=0;</script>
<style>div{color:red;}</style>

<p>This is p
<ol>
    <li>pen
    <li>apple
    <li>pineapple
</ol>
<blockquote title="MDN">
<p>This is <br>blockquote > p
</blockquote>

<hr>

<form>
<button>submit</button>
</form>
        `, true, null, { trimWhitespaces : 'aggressive' });
console.log(json)
        json2json(
            json,
            null,
            null,
            function( rootVNode ){
                text = rootVNode.getInnerText();
            }
        );

                t.deepEqual( text, `
This is p

1.\tpen
2.\tapple
3.\tpineapple

MDN

This is 
blockquote > p


---

[submit]
`);
    }
);
