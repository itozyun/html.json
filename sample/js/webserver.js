const fs = require('fs');
const news = require('./news.generated.js');

require('http').createServer(
    (req, res) => {
        console.log(req.url)
        if(0 <= req.url.indexOf('.html') || req.url === '/'){
            res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
            fs.createReadStream('./sample/html.json/news.html.json')
              .pipe(news.news())
              .pipe(res);
        } else {
            fs.createReadStream('./sample' + req.url)
              .on('error', ()=>res.end('<!DOCTYPE html><p>Error!'))
              .pipe(res)
        };
    }
).listen(8080);
