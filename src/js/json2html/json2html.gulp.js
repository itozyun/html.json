goog.provide( 'json2html.gulp' );

goog.require( 'json2html.module' );
goog.require( 'json2html' );

/**
 * @param {!function(string, ...*):(!Array|string|number|boolean|null|void)} onInstruction
 * @param {!function(string)|!Object=} opt_onError
 * @param {!Object=} opt_options
 */
json2html.gulp = function( onInstruction, opt_onError, opt_options ){
    const PluginError = require( 'plugin-error' ),
          through     = require( 'through2'     ),
          pluginName  = 'json2html';
    
    return through(
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
    
            if( file.extname === '.json' ){
                try {
                    const json = JSON.parse( file.contents.toString( encoding ) );

                    const content = json2html( /** @type {!Array} */ (json), onInstruction, opt_onError, opt_options );
                    // .html <= .html.json
                    file.extname = '.' + file.stem.split( '.' ).pop();
                    file.stem    = file.stem.substr( 0, file.stem.length - file.extname.length );
                    
                    file.contents = Buffer.from( /** @type {string} */ (content) );
                    this.push( file );
                } catch( O_o ) {
                    this.emit( 'error', new PluginError( pluginName, O_o ) );
                };
            } else {
                this.push( file );
            };
            callback();
        }
    );
};