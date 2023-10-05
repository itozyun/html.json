const test = require('ava');
const html2json = require('../dist/html2json.js');

test('simple', (t) => {
    t.deepEqual( html2json('<p>Hello,World!'), ['p','Hello,World!'] );

    t.deepEqual(JSON.stringify(html2json('<!DOCTYPE html><html><head></head><body><p>Hello,World!'), null, '    '),
`[
    0,
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

test('number-string', (t) => {
    t.deepEqual( html2json('<p>1<p>2'), [['p',1],['p',2]]);

    t.deepEqual( html2json('<p title="1234567890123">1234567890123'), ['p', { title : 1234567890123 }, 1234567890123 ]);
});

test('escape', (t) => {
    t.deepEqual( html2json('<p title="&lt;&gt;">&lt;&gt;'), ['p', { title : '<>' }, '<>' ]);

    t.deepEqual( html2json('<!--&lt;&gt;-->', { keepComments : true }), [4, '<>' ]);
});

test('re-parse', (t) => {
    t.deepEqual( html2json('<!--[if IE]><p>Hello, IE</p><![endif]-->'), [5, 'if IE', ['p', 'Hello, IE']] );

    t.deepEqual( html2json('<!--[if IE lte 9]>ie &lt;= 9<![endif]-->'), [5, 'if IE lte 9', 'ie <= 9'] );
});
