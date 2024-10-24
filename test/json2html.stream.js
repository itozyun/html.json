const test            = require('ava');
const json2html       = require('../dist/json2html.js');
const streamJson2html = require('../dist/json2html.stream.js');
const fs              = require('fs');

test('stream', async t => {
    const chunks = [];

    const date = new Date;

    function onInstruction( funcName, args ){
        // console.log( funcName, args );

        return funcName === 'date' ? date.toLocaleString() + args[0] + args[1].aa : undefined
    };

    await new Promise((resolve) => {
        fs.createReadStream(__dirname + '/index.html.json')
          .pipe(streamJson2html(onInstruction))
          .on('data', (chunk)=> {chunks.push(chunk)})
          .on('end', ()=> {resolve(chunks.join(''))});
    });
    
    const expected = json2html(JSON.parse(fs.readFileSync(__dirname + '/index.html.json')), onInstruction);

    t.deepEqual(chunks.join(''), expected);
});

test('stream - 2', async t => {
    const chunks = [];

    const date = new Date;

    function onInstruction( funcName, args ){
        // console.log( funcName, args );

        return funcName === 'date' ? [ [ 'BR' ], [ 'BR' ], [ 7, "rc" ], [ 'BR' ] ] : funcName === 'rc' ? date.toLocaleDateString() : undefined
    };

    await new Promise((resolve) => {
        fs.createReadStream(__dirname + '/index.html.json')
          .pipe(streamJson2html(onInstruction))
          .on('data', (chunk)=> {chunks.push(chunk)})
          .on('end', ()=> {resolve(chunks.join(''))});
    });
    
    const expected = json2html(JSON.parse(fs.readFileSync(__dirname + '/index.html.json')), onInstruction);

    t.deepEqual(chunks.join(''), expected);
});

test('pause & resume', async t => {
    const chunks = [];

    const date = new Date;
    let heavyAPI = true;

    function onInstruction( funcName, args ){
        if( this.pause && funcName === 'date' && heavyAPI ){
            console.log( 'pause ***' )
            heavyAPI = false;
            this.pause();

            setTimeout( () => this.resume(), 1000 );
        } else {
        // console.log( funcName, args );
            return funcName === 'date' ? date.toLocaleString() + args[0] + args[1].aa : undefined;
        };
    };

    await new Promise((resolve) => {
        fs.createReadStream(__dirname + '/index.html.json')
          .pipe(streamJson2html(onInstruction))
          .on('data', (chunk)=> {chunks.push(chunk)})
          .on('end', ()=> {resolve(chunks.join(''))});
    });
    
    const expected = json2html(JSON.parse(fs.readFileSync(__dirname + '/index.html.json')), onInstruction);

    t.deepEqual(chunks.join(''), expected);
});