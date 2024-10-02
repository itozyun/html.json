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
