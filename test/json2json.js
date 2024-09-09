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

        t.deepEqual(json, [11, ['code', [ 7, 'now' ]]]);

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

        t.deepEqual(json, [11, ['code', now]]);
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

        t.deepEqual(json, [11, ['code', 'AB']]);
    }
);