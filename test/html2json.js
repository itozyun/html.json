const test = require('ava');
const html2json = require('../dist/html2json.js');

test('simple', (t) => {
    t.deepEqual( html2json('<p>Hello,World!'), [11, ['P','Hello,World!'] ] );

    t.deepEqual(JSON.stringify(html2json('<!DOCTYPE html><html><head></head><body><p>Hello,World!'), null, '    '),
`[
    9,
    "<!DOCTYPE html>",
    [
        "HTML",
        [
            "HEAD"
        ],
        [
            "BODY",
            [
                "P",
                "Hello,World!"
            ]
        ]
    ]
]` );

t.deepEqual( html2json('<font color=red>Hello,World!'), [11, ['FONT',{color:'red'},'Hello,World!']] );

t.deepEqual( html2json('<noscript><p>js disabled!</p></noscript><p>This is application.'), [11, ['NOSCRIPT',['P', 'js disabled!']],['P','This is application.']] );
});

test('text', (t) => {
    t.deepEqual( html2json('<!-- -->html<!-- -->.json'), [11, 'html.json']);

    t.deepEqual( html2json('12<!-- -->34<!-- -->56'), [11, 123456]);

    t.deepEqual( html2json('<span>1,100<!-- --> yen</span>'), [11, ['SPAN', '1,100 yen']]);

    t.deepEqual( html2json('0'), [11, 0]);
});

test('whitespace', (t) => {
    t.deepEqual( html2json('<p>\n\n \t\t \n\n \t\t', false, null, { trimWhitespaces : 'aggressive' }), [ 11, ['P'] ]);

    t.deepEqual( html2json('<p>\n\n \t\t \n\n \t\t', false, null, { trimWhitespaces : 'normal' }), [ 11, ['P', ' '] ]);

    t.deepEqual( html2json('<p>\n\n \t\t &#x20; \n\n \t\t', false, null, { trimWhitespaces : 'aggressive' }), [11, ['P', ' ']]);

    t.deepEqual( html2json('<p>\n\n \t\t \\u0020 \n\n \t\t', false, null, { trimWhitespaces : 'aggressive' }), [11, ['P', ' ']]);

    t.deepEqual( html2json('<p>\\u0020\\u0020', false, null, { trimWhitespaces : 'normal' }), [11, ['P', '  ']]);

    t.deepEqual( html2json(`
<ul>
    <li>pen
    <li>apple
    <li>pineapple
</ul>
        `, false, null, { trimWhitespaces : 'aggressive' }), [11, ['UL', ['LI', 'pen'], ['LI', 'apple'], ['LI', 'pineapple']]]);
});

test('number-string', (t) => {
    t.deepEqual( html2json('<var>.123'), [11, ['VAR', '.123']]);

    t.deepEqual( html2json('<p>1<p>2'), [11, ['P',1],['P',2]]);

    t.deepEqual( html2json('<p title="1234567890123">1234567890123'), [11, ['P', { title : 1234567890123 }, 1234567890123 ]]);
});

test('escape', (t) => {
    t.deepEqual( html2json('<p title="&lt;&gt;">&lt;&gt;'), [11, ['P', { title : '<>' }, '<>' ]]);

    t.deepEqual( html2json('<!--&lt;&gt;-->', false, null, { keepComments : true }), [11, [8, '<>' ]]);
});

test('conditional-comment', (t) => {
    t.deepEqual( html2json('<!--[if lte IE 9]>ie &lt;= 9<![endif]-->'), [11, [13, 'if lte IE 9', 'ie <= 9'] ] );

    t.deepEqual( html2json('<!--[if !IE]><!--><p>Hello, Not IE</p><!--<![endif]-->'), [11, [14, 'if !IE'], ['P', 'Hello, Not IE'], [15] ] );

    t.deepEqual( html2json('<!--{true};Netscape 4-->'), [11, [16, 'true', 'Netscape 4'] ] );
});

test('re-parse', (t) => {
    t.deepEqual( html2json('<!--[if IE]><p>Hello, IE</p><![endif]-->'), [11, [13, 'if IE', ['P', 'Hello, IE']] ] );
});

test('processing-instruction', (t) => {
    t.deepEqual( html2json('<p><? random ?>'), [11, ['P', [ 7, "random" ]] ] );

    t.deepEqual( html2json('<p><? person(777, "ADMIN") ?>'), [11, ['P', [ 7, "person", 777, "ADMIN" ]] ] );

    t.deepEqual( html2json('<script>var r=<? random ?>;</script>'), [11, ['SCRIPT', "var r=", [ 7, "random" ], ";"] ] );
});

test('instruction attributes', (t) => {
    t.deepEqual( html2json('<time :datetime="now"></time>'), [11, ['TIME', { ":datetime" : "now" }] ] );

    t.deepEqual( html2json('<time :datetime="now()"></time>'), [11, ['TIME', { ":datetime" : "now" }] ] );

    t.deepEqual( html2json('<a :href=\'toRelative("/top/")\'></a>'), [11, ['A', { ":href" : [ "toRelative", "/top/" ] }] ] );

    t.deepEqual( html2json('<a :href="toRelative(\\"/top/\\")"></a>'), [11, ['A', { ":href" : [ "toRelative", "/top/" ] }] ] );
});

test('id-class', (t) => {
    t.deepEqual( html2json('<div id=app class="app nojs"></div>'), [11, ['DIV#app.app nojs'] ]);
});

test('start tag', (t) => {
    t.deepEqual( html2json('<!--[if IE]><table border=1><![endif]-->'), [11, [13, 'if IE', [17, 'TABLE', { border : 1}]] ] );
    t.deepEqual( html2json('<!--[if IE]><input><table border=1><![endif]-->'), [11, [13, 'if IE', ['INPUT'], [17, 'TABLE', { border : 1}]] ] );
    t.deepEqual( html2json('<!--[if IE]><table border=1><tr><![endif]-->'), [11, [13, 'if IE', [17, 'TABLE', { border : 1}, [ 'TR' ]]] ] );

    t.deepEqual( html2json('<!--{true};<table border=1>-->'), [11, [16, 'true', [17, 'TABLE', { border : 1}]] ] );
});

test('end tag', (t) => {
    t.deepEqual( html2json('<!--[if IE]></div><![endif]-->'), [11, [13, 'if IE', [18, 'DIV']] ] );
    t.deepEqual( html2json('<!--{true};</div>-->'), [11, [16, 'true', [18, 'DIV']] ] );
});

test('<pre>', (t) => {
    t.deepEqual( html2json('<pre>\nGOTO 100\n</pre>' ), [ 11, ['PRE', 'GOTO 100'] ]);

    t.deepEqual( html2json('<pre>\n<b>GOTO 100\n</b></pre>' ), [ 11, ['PRE', [ 'B', 'GOTO 100'] ] ]);

    t.deepEqual( html2json('<pre class="lang:basic"><b>\nGOTO 100</b>\n</pre>' ), [ 11, ['PRE.lang:basic', [ 'B', 'GOTO 100'] ] ]);

    t.deepEqual( html2json('<pre class="lang:basic"><b>\r\nGOTO 100</b>\r\nGOTO 200\r</pre>' ), [ 11, ['PRE.lang:basic', [ 'B', 'GOTO 100'], '\nGOTO 200' ] ]);

    t.deepEqual( html2json(`
<pre>       
<b>PRINT "Hello, HTML.json!"</b>                      
<i>END</i>                                          
     </pre>
`, false, null, { trimWhitespaces : 'aggressive' }), [ 11, ['PRE', ['B', 'PRINT "Hello, HTML.json!"\n'], ['I', 'END']] ]);

    t.deepEqual( html2json(`
<pre><code>       
<b>PRINT "Hello, HTML.json!"</b>                      
<i>END</i>                                          </code>
     </pre>
`, false, null, { trimWhitespaces : 'aggressive' }), [ 11, ['PRE', [ 'CODE', ['B', 'PRINT "Hello, HTML.json!"\n'], ['I', 'END']]] ]);

    t.deepEqual( html2json(`
<pre><code>       
<b>PRINT "Hello, HTML.json!"     </b>                      
<i>END    </i>                                </code>
     </pre>
`, false, null, { trimWhitespaces : 'aggressive' }), [ 11, ['PRE', [ 'CODE', ['B', 'PRINT "Hello, HTML.json!"\n'], ['I', 'END']]] ]);
});

test('CDATA section', (t) => {
    t.deepEqual( html2json('<![CDATA[\r\ndata\r]]>', false, undefined, {keepCDATASections:true}), [11, [4, '\ndata\n'] ] );
    t.deepEqual( html2json('<![CDATA[999]]>', false, undefined, {keepCDATASections:true}), [11, [4, 999] ] );
});

test('style=""', (t) => {
    t.deepEqual( html2json('<a style="color : red"></a>'), [11, ['A', {style:'color:red'}] ]);

    t.deepEqual( html2json('<a style=": x ;"></a>'), [11, ['A', {style:':x'}] ]);

    t.deepEqual( html2json('<a style=" content : \';\'"></a>'), [11, ['A', {style:'content:\';\''}] ]);

    t.deepEqual( html2json('<a style=" content : \';\' ; color : red"></a>'), [11, ['A', {style:'content:\';\';color:red'}] ]);

    t.deepEqual( html2json('<a style=" content : \\";\\" ; color : red"></a>'), [11, ['A', {style:'content:";";color:red'}] ]);
});

test('xhtml', (t) => {
    t.deepEqual( html2json(`
<?xml version="1.0" encoding="Shift_JIS"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<body>
<p>xhtml
        `, false, null, { trimWhitespaces : 'aggressive' }),
        [9, '<?xml version="1.0" encoding="Shift_JIS"?>\n<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">',
          ['html', {xmlns:'http://www.w3.org/1999/xhtml'},
            ['body', ['p', 'xhtml']]
          ]
        ]
    );
});
