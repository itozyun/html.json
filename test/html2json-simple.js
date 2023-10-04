const test = require('ava');
const html2json = require('../dist/html2json.js');

test('simple', (t) => {
    t.deepEqual( html2json('<p>Hello,World!'), ["p","Hello,World!"] );

    t.deepEqual(JSON.stringify(html2json('<!DOCTYPE html><html><head></head><body><p>Hello,World!'), null, '    '),
`[
    0,
    "<!DOCTYPE html>",
    [
        [
            "html",
            [
                [
                    "head"
                ],
                [
                    "body",
                    [
                        [
                            "p",
                            "Hello,World!"
                        ]
                    ]
                ]
            ]
        ]
    ]
]` );

t.deepEqual( html2json('<font color=red>Hello,World!'), ["font",{color:"red"},"Hello,World!"] );

t.deepEqual( html2json('<p>1<p>2'), [1, [['p',1],['p',2]]]);
});
