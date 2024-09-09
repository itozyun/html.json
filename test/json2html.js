const test = require('ava');
const html2json = require('../dist/html2json.js');
const json2json = require('../dist/json2json.js');
const json2html = require('../dist/json2html.js');

test('simple',
    (t) => {
        t.deepEqual(
            json2html(
                [ 'p', 'Hello, world!' ]
            ),
            '<p>Hello, world!'
        );

        let random = Math.random();

        t.deepEqual(
            json2html(
                [ 7, 'random' ],
                function( funcName ){
                    if( funcName === 'random' ){
                        return random;
                    };
                }
            ),
            '' + random
        );
    }
);

test('id-class',
    (t) => {
        t.deepEqual(
            json2html(
                [ 'div#app.app nojs', 'Hello, Application!' ]
            ),
            '<div id=app class="app nojs">Hello, Application!</div>'
        );
    }
);
