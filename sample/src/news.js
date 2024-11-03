goog.provide( 'sample.news' );

goog.require( 'json2html.stream' );

const Parser = require('rss-parser');
const parser = new Parser();

module.exports = {
    'news' : function(){
        const startTime = Date.now();
        let news, stoppingStream, stoppedTime;

        parser[ 'parseURL' ]('http://www.jcp.or.jp/akahata/index.rdf')
                  .then( feeds => {
                      news = feeds[ 'items' ];
                      if( stoppingStream ){
                          stoppedTime = Date.now() - startTime;
                          stoppingStream.restart();
                          stoppingStream = null;
                      };
                  });
        return json2html.stream(
            {
                'time' : function(){
                    if(!news){
                        stoppingStream = this;
                        stoppingStream.stop();
                    } else {
                        return news.length + ' Articles, ⌛' + ( Date.now() - startTime ) / 1000 + 's' + ( stoppedTime ? '(' + stoppedTime / 1000 + 's)' : '' );
                    };
                },
                'news' : function(){
                    for( var html = [ 11 ], l = news.length, i = 0, article; i < l; ++i ){
                        article = news[ i ];
                        html.push(
                            [ 'H3', [ 'A', { href : article[ 'link' ] }, article[ 'title' ].substr( 0, 50 ) ] ] // , [ 'P', article[ 'content' ].substr( 0, 140 ) ]
                        );
                    };
                    return html;
                }
            }
        )
    }
};
