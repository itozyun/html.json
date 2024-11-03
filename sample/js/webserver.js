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
            try {
                fs.createReadStream('./sample' + req.url)
                .pipe(res);
            } catch(O_o) {
                res.end('Error!');
            };
        };
    }
).listen(8080);
