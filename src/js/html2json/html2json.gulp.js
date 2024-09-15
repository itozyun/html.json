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

    let numHTMLFiles = 0, totalTime = 0;

    return through.obj(
        /**
         * @this {stream.Readable}
         * @param {!Vinyl} file 
         * @param {string} encoding 
         * @param {function()} callback 
         */
        function( file, encoding, callback ){
            if( file.isNull() ) return callback();
    
            if( file.isStream() ){
                this.emit( 'error', new PluginError( pluginName, 'Streaming not supported' ) );
                return callback();
            };

            if( file.extname === '.html' || file.extname === '.htm' || file.extname === '.xhtml' || file.extname === '.php' ){
                try {
                    const now  = performance.now();
                    const json = html2json( file.contents.toString( encoding ), false, options );

                    ++numHTMLFiles;
                    totalTime += ( performance.now() - now ) | 0;

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
            this.push( file );
            callback();
        },
        function( callback ){
            console.log( '[html2json] done!  Total number of files:' + numHTMLFiles + ', Total Time:' + totalTime + ', Average:' + ( totalTime / numHTMLFiles | 0 ) );
            callback();
        }
    );
};
