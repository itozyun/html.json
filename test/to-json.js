const test = require('ava');
const html2json = require('../dist/html2json.js');

test('simple', (t) => {
    t.deepEqual( html2json('<p>Hello,World!'), ['p','Hello,World!'] );

    t.deepEqual(JSON.stringify(html2json('<!DOCTYPE html><html><head></head><body><p>Hello,World!'), null, '    '),
`[
    9,
    "<!DOCTYPE html>",
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

t.deepEqual( html2json('<font color=red>Hello,World!'), ['font',{color:'red'},'Hello,World!'] );

t.deepEqual( html2json('<noscript><p>js disabled!</p></noscript><p>This is application.'), [['noscript',['p', 'js disabled!']],['p','This is application.']] );
});

test('text', (t) => {
    t.deepEqual( html2json('<!-- -->html<!-- -->.json'), [11, 'html.json']);

    t.deepEqual( html2json('12<!-- -->34<!-- -->56'), [11, 123456]);

    t.deepEqual( html2json('<span>1,100<!-- --> yen</span>'), ['span', '1,100 yen']);
});

test('whitespace', (t) => {
    t.deepEqual( html2json('<p>\n\n \t\t \n\n \t\t', { trimWhitespace : 'agressive' }), [ 'p' ]);

    t.deepEqual( html2json('<p>\n\n \t\t \n\n \t\t', { trimWhitespace : 'normal' }), ['p', ' ']);

    t.deepEqual( html2json('<p>\n\n \t\t &#x20; \n\n \t\t', { trimWhitespace : 'agressive' }), ['p']);

    t.deepEqual( html2json('<p>\n\n \t\t \\u0020 \n\n \t\t', { trimWhitespace : 'agressive' }), ['p', ' ']);

    t.deepEqual( html2json('<p>\\u0020\\u0020', { trimWhitespace : 'normal' }), ['p', '  ']);
    // t.deepEqual( html2json('<p>\\u0020'), ['p', '    ']);
});

test('number-string', (t) => {
    t.deepEqual( html2json('<var>.123'), ['var', '.123']);

    t.deepEqual( html2json('<p>1<p>2'), [['p',1],['p',2]]);

    t.deepEqual( html2json('<p title="1234567890123">1234567890123'), ['p', { title : 1234567890123 }, 1234567890123 ]);
});

test('escape', (t) => {
    t.deepEqual( html2json('<p title="&lt;&gt;">&lt;&gt;'), ['p', { title : '<>' }, '<>' ]);

    t.deepEqual( html2json('<!--&lt;&gt;-->', { keepComments : true }), [8, '<>' ]);
});

test('re-parse', (t) => {
    t.deepEqual( html2json('<!--[if IE]><p>Hello, IE</p><![endif]-->'), [13, 'if IE', ['p', 'Hello, IE']] );

    t.deepEqual( html2json('<!--[if IE lte 9]>ie &lt;= 9<![endif]-->'), [13, 'if IE lte 9', 'ie <= 9'] );
});

test('processing-instruction', (t) => {
    t.deepEqual( html2json('<p><? random ?>'), ["p", [ 7, "random" ]] );

    t.deepEqual( html2json('<p><? person(777, "ADMIN") ?>'), ["p", [ 7, "person", 777, "ADMIN" ]] );
});

test('id-class', (t) => {
    t.deepEqual( html2json('<div id=app class="app nojs"></div>'), ['div#app.app nojs']);
});
