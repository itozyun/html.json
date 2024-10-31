const test = require('ava');
const html2json = require('../dist/html2json.js');
const json2json = require('../dist/json2json.js');

test('simple',
    (t) => {
        var json = html2json('<code><? now ?></code>'), now;

        t.deepEqual(json, [11, ['CODE', [ 7, 'now' ]]]);

        json2json(
            json,
            function( funcName ){
                if( funcName === 'now' ){
                    return now = Date.now();
                };
            }
        );

        t.deepEqual(json, [11, ['CODE', now]]);
    }
);

test('normalizeText',
    (t) => {
        const json = [ 11, [ 'A', '', '', 9, '', 9 ] ];

        json2json( json );

        t.deepEqual(json, [11, [ 'A', 99 ]]);
    }
);

test('optimaize',
    (t) => {
        var json = html2json('<code>A<? empty ?>B</code>');

        json2json(
            json,
            function( funcName ){
                if( funcName === 'empty' ){
                    return null;
                };
            }
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

test('cc',
    (t) => {
        var json = [11, [ 'P', ' ', [14, 'if !IE'], [8, '<>' ], [15], ' ' ]];

        json2json(
            json, 0, 0, 0, 0, {keepComments:false, trimWhitespaces:true}
        );

        t.deepEqual(json, [11, [ 'P', '  ' ]]);

        var json = [11, [ 'P', ' ', [14, 'if !IE'], [8, '<>' ], [15], ' ' ]];

        json2json(
            json, 0, 0, 0, 0, {keepComments:false}
        );

        t.deepEqual(json, [11, [ 'P', '  ' ]]);
    }
);
