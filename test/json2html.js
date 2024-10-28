const test = require('ava');
const html2json = require('../dist/html2json.js');
const json2json = require('../dist/json2json.js');
const json2html = require('../dist/json2html.js');

test('simple',
    (t) => {
        t.deepEqual(
            json2html(
                [ 'P', 'Hello, world!' ]
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

test('quote',
    (t) => {
        t.deepEqual(
            json2html(
                [ 'IMG', { alt : '' } ]
            ),
            '<img alt="">'
        );
    }
);

test('id-class',
    (t) => {
        t.deepEqual(
            json2html(
                [ 'DIV#app.app nojs', 'Hello, Application!' ]
            ),
            '<div id=app class="app nojs">Hello, Application!</div>'
        );
    }
);

test('boolean attributes',
    (t) => {
        t.deepEqual(
            json2html(
                [ 'DIV', { checked : true, readonly : false, unknown : true, 'null' : null, 'false' : false } ]
            ),
            '<div checked unknown false=false></div>'
        );
    }
);


test('0',
    (t) => {
        t.deepEqual(
            json2html(
                [ 'DIV', 0 ]
            ),
            '<div>0</div>'
        );
    }
);

test('unescaped elements',
    (t) => {
        t.deepEqual(
            json2html(
                [ 'SCRIPT', '<!--\nd=document;//-->' ]
            ),
            '<script><!--\nd=document;//--></script>'
        );
    }
);

test('<p>',
    (t) => {
        t.deepEqual(
            json2html(
                [ 'A', [ 'P', '*' ] ]
            ),
            '<a><p>*</p></a>'
        );
        t.deepEqual(
            json2html(
                [ 'A', [ 'DIV', [ 'P', '*' ] ] ]
            ),
            '<a><div><p>*</p></div></a>'
        );
    }
);