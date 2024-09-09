const test            = require('ava');
const json2html       = require('../dist/json2html.js');
const streamJson2html = require('../dist/json2html.stream.js');
const fs              = require('fs');

test('stream', async t => {
    const chunks = [];

    function onInstruction( funcName, args ){
        console.log( funcName, args );

        return funcName === 'date' ? (new Date).toLocaleString() : undefined
    };

    await new Promise((resolve) => {
        fs.createReadStream(__dirname + '/../index.html.json')
          .pipe(streamJson2html(onInstruction))
          .on('data', (chunk)=> {chunks.push(chunk)})
          .on('end', ()=> {resolve(chunks.join(''))});
    });
    
    const correct = json2html(JSON.parse(fs.readFileSync(__dirname + '/../index.html.json')), onInstruction);

    t.deepEqual(chunks.join(''), correct);
});
