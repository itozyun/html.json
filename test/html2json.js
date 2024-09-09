const test = require('ava');
const html2json = require('../dist/html2json.js');

test('simple', (t) => {
    t.deepEqual( html2json('<p>Hello,World!'), [11, ['p','Hello,World!'] ] );

    t.deepEqual(JSON.stringify(html2json('<!DOCTYPE html><html><head></head><body><p>Hello,World!'), null, '    '),
`[
    9,
    "html",
    [
        "html",
        [
            "head"
        ],
        [
            "body",
            [
                "p",
                "Hello,World!"
            ]
        ]
    ]
]` );

t.deepEqual( html2json('<font color=red>Hello,World!'), [11, ['font',{color:'red'},'Hello,World!']] );

t.deepEqual( html2json('<noscript><p>js disabled!</p></noscript><p>This is application.'), [11, ['noscript',['p', 'js disabled!']],['p','This is application.']] );
});

test('text', (t) => {
    t.deepEqual( html2json('<!-- -->html<!-- -->.json'), [11, 'html.json']);

    t.deepEqual( html2json('12<!-- -->34<!-- -->56'), [11, 123456]);

    t.deepEqual( html2json('<span>1,100<!-- --> yen</span>'), [11, ['span', '1,100 yen']]);
});

test('whitespace', (t) => {
    t.deepEqual( html2json('<p>\n\n \t\t \n\n \t\t', false, { trimWhitespace : 'agressive' }), [ 11, ['p'] ]);

    t.deepEqual( html2json('<p>\n\n \t\t \n\n \t\t', false, { trimWhitespace : 'normal' }), [ 11, ['p', ' '] ]);

    t.deepEqual( html2json('<p>\n\n \t\t &#x20; \n\n \t\t',false, { trimWhitespace : 'agressive' }), [11, ['p', ' ']]);

    t.deepEqual( html2json('<p>\n\n \t\t \\u0020 \n\n \t\t', false, { trimWhitespace : 'agressive' }), [11, ['p', ' ']]);

    t.deepEqual( html2json('<p>\\u0020\\u0020', false, { trimWhitespace : 'normal' }), [11, ['p', '  ']]);
    // t.deepEqual( html2json('<p>\\u0020'), ['p', '    ']);
});

test('number-string', (t) => {
    t.deepEqual( html2json('<var>.123'), [11, ['var', '.123']]);

    t.deepEqual( html2json('<p>1<p>2'), [11, ['p',1],['p',2]]);

    t.deepEqual( html2json('<p title="1234567890123">1234567890123'), [11, ['p', { title : 1234567890123 }, 1234567890123 ]]);
});

test('escape', (t) => {
    t.deepEqual( html2json('<p title="&lt;&gt;">&lt;&gt;'), [11, ['p', { title : '<>' }, '<>' ]]);

    t.deepEqual( html2json('<!--&lt;&gt;-->', false, { keepComments : true }), [11, [8, '<>' ]]);
});

test('conditional-comment', (t) => {
    t.deepEqual( html2json('<!--[if lte IE 9]>ie &lt;= 9<![endif]-->'), [11, [13, 'if lte IE 9', 'ie <= 9'] ] );

    t.deepEqual( html2json('<!--[if !IE]><!--><p>Hello, Not IE</p><!--<![endif]-->'), [11, [14, 'if !IE'], ['p', 'Hello, Not IE'], [15] ] );

    t.deepEqual( html2json('<!--{true};Netscape 4-->'), [11, [16, 'true', 'Netscape 4'] ] );
});

test('re-parse', (t) => {
    t.deepEqual( html2json('<!--[if IE]><p>Hello, IE</p><![endif]-->'), [11, [13, 'if IE', ['p', 'Hello, IE']] ] );
});

test('processing-instruction', (t) => {
    t.deepEqual( html2json('<p><? random ?>'), [11, ["p", [ 7, "random" ]] ] );

    t.deepEqual( html2json('<p><? person(777, "ADMIN") ?>'), [11, ["p", [ 7, "person", 777, "ADMIN" ]] ] );
});

test('id-class', (t) => {
    t.deepEqual( html2json('<div id=app class="app nojs"></div>'), [11, ['div#app.app nojs'] ]);
});

test('start tag', (t) => {
    t.deepEqual( html2json('<!--[if IE]><table border=1><![endif]-->'), [11, [13, 'if IE', [17, 'table', { border : 1}]] ] );
    t.deepEqual( html2json('<!--[if IE]><input><table border=1><![endif]-->'), [11, [13, 'if IE', ['input'], [17, 'table', { border : 1}]] ] );
    t.deepEqual( html2json('<!--[if IE]><table border=1><tr><![endif]-->'), [11, [13, 'if IE', [17, 'table', { border : 1}, [ 'tr' ]]] ] );

    t.deepEqual( html2json('<!--{true};<table border=1>-->'), [11, [16, 'true', [17, 'table', { border : 1}]] ] );
});

test('end tag', (t) => {
    t.deepEqual( html2json('<!--[if IE]></div><![endif]-->'), [11, [13, 'if IE', [18, 'div']] ] );
    t.deepEqual( html2json('<!--{true};</div>-->'), [11, [16, 'true', [18, 'div']] ] );
});
