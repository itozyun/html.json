const test = require('ava');
const html2json = require('../dist/html2json.js');
const json2json = require('../dist/json2json.js');

test('simple',
    (t) => {
        t.deepEqual(
            json2json(
                html2json('<? random ?>'),
                function( funcName ){
                    if( funcName === 'random' ){
                        return Math.random();
                    };
                }
            ),
            true
        );

        var json = html2json('<code><? now ?></code>'), now;

        t.deepEqual(json, [11, ['CODE', [ 7, 'now' ]]]);

        t.deepEqual(
            json2json(
                json,
                function( funcName ){
                    if( funcName === 'now' ){
                        return now = Date.now();
                    };
                }
            ),
            true
        );

        t.deepEqual(json, [11, ['CODE', now]]);
    }
);

test('optimaize',
    (t) => {
        var json = html2json('<code>A<? empty ?>B</code>');

        t.deepEqual(
            json2json(
                json,
                function( funcName ){
                    if( funcName === 'empty' ){
                        return null;
                    };
                }
            ),
            true
        );

        t.deepEqual(json, [11, ['CODE', 'AB']]);
    }
);

test('onDocumentReady',
    (t) => {
        var json = html2json('<p><b>Hello</b> <i>World!</i>'), text;

        json2json(
            json,
            null,
            null,
            function( vnodeRoot ){
                text = vnodeRoot.getTextContent();
            }  
        );

        t.deepEqual(text, 'Hello World!');
    }
);