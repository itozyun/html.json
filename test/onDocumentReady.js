const test = require('ava');
const html2json = require('../dist/html2json.js');
const json2json = require('../dist/json2json.js');

test('vnode',
    (t) => {
        var json = html2json('<code>A<? empty ?>B</code>');

        t.deepEqual(
            json2json(
                json,
                function( funcName ){
                    if( funcName === 'empty' ){
                        return null;
                    };
                },
                null,
                function( vnode ){
                    vnode.getFirstChild().insertNodeLast( 3, 'CD' ).insertNodeAfter( 3, 'EF' );
                }
            ),
            true
        );

        t.deepEqual(json, [11, ['CODE', 'ABCDEF']]);
    }
);