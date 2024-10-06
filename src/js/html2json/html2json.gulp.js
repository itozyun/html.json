goog.provide( 'html2json.gulp' );

goog.require( 'html2json.module' );

/**
 * @param {!Object=} opt_options
 */
html2json.gulp = function( opt_options ){
    const PluginError = require( 'plugin-error' ),
          through     = require( 'through2'     ),
          pluginName  = 'html2json',
          options     = opt_options || {},
          prettify    = options[ 'prettify' ];

    let numHTMLFiles = 0, totalFileSize = 0, totalTime = 0;

    return through.obj(
        /**
         * @this {stream.Readable}
         * @param {!Vinyl} file 
         * @param {string} encoding 
         * @param {function(Error, Vinyl)} callback
         */
        function( file, encoding, callback ){
            if( file.isNull() ) return callback();
    
            if( file.isStream() ){
                this.emit( 'error', new PluginError( pluginName, 'Streaming not supported' ) );
                return callback();
            };

            if( file.extname === '.html' || file.extname === '.htm' || file.extname === '.xhtml' || file.extname === '.php' ){
                try {
                    const html = file.contents.toString( encoding );
                    const now  = performance.now();
                    const json = html2json( html, false, options );

                    ++numHTMLFiles;
                    totalFileSize += html.length;
                    totalTime += performance.now() - now;

                    file.contents = Buffer.from(
                        JSON.stringify( json, null, prettify ? '    ' : '' )
                    );
                    // .html => .html.json
                    file.stem += file.extname;
                    file.extname = '.json';
                } catch( O_o ) {
                    this.emit( 'error', new PluginError( pluginName, O_o ) );
                    return callback();
                };
            };
            callback( null, file );
        },
        function( callback ){
            console.log( '[html2json] done!' )
            console.log( '  Number of files: ' + numHTMLFiles );
            console.log( '  Total file size: ' + ( ( totalFileSize / 100 | 0 ) / 10 ) + 'KB' );
            console.log( '  Total Time     : ' + ( totalTime | 0 ) + 'ms' );
            console.log( '  Time per file  : ' + ( ( totalTime / numHTMLFiles  * 100 | 0 ) / 100  ) + 'ms' );
            console.log( '  Time per size  : ' + (   totalTime / totalFileSize * 1000 * 100 | 0 ) + 'ms/100KB' );
            callback();
        }
    );
};
