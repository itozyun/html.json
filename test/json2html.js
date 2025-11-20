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

test('quote',
    (t) => {
        t.deepEqual(
            json2html(
                [ 'img', { alt : '' } ]
            ),
            '<img alt="">'
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

test('boolean attributes',
    (t) => {
        t.deepEqual(
            json2html(
                [ 'div', { checked : true, readonly : false, unknown : true, 'null' : null, 'false' : false } ]
            ),
            '<div checked unknown false=false></div>'
        );
    }
);


test('0',
    (t) => {
        t.deepEqual(
            json2html(
                [ 'div', 0 ]
            ),
            '<div>0</div>'
        );
    }
);

test('unescaped elements',
    (t) => {
        t.deepEqual(
            json2html(
                [ 'script', '<!--\nd=document;//-->' ]
            ),
            '<script><!--\nd=document;//--></script>'
        );
    }
);

test('<a><p>',
    (t) => {
        t.deepEqual(
            json2html(
                [ 'a', [ 'p', '*' ] ]
            ),
            '<a><p>*</p></a>'
        );
        t.deepEqual(
            json2html(
                [ 'a', [ 'p', '*' ], [ 'p', '*' ] ]
            ),
            '<a><p>*</p><p>*</p></a>'
        );
        t.deepEqual(
            json2html(
                [ 'a', [ 'div', [ 'p', '*' ] ] ]
            ),
            '<a><div><p>*</p></div></a>'
        );
    }
);

test('<audio><p>',
    (t) => {
        t.deepEqual(
            json2html(
                [ 'audio', [ 'p', '*' ] ]
            ),
            '<audio><p>*</p></audio>'
        );
        t.deepEqual(
            json2html(
                [ 'audio', [ 'p', '*' ], [ 'p', '*' ] ]
            ),
            '<audio><p>*<p>*</p></audio>'
        );
        t.deepEqual(
            json2html(
                [ 'audio', [ 'div', [ 'p', '*' ], [ 'p', '*' ] ] ]
            ),
            '<audio><div><p>*<p>*</div></audio>'
        );
    }
);

test('conditional-comment',
    (t) => {
        t.deepEqual(
            json2html(
                [11, [13, 'if lte IE 9', [17, 'div']] ]
            ),
            '<!--[if lte IE 9]><div><![endif]-->'
        );

        t.deepEqual(
            json2html(
                [11, [13, 'if lte IE 9', [18, 'div']] ]
            ),
            '<!--[if lte IE 9]></div><![endif]-->'
        );
    }
);
