goog.provide( 'json2json.gulp' );

goog.require( 'json2json.node' );
goog.require( 'json2html' );

/**
 * @param {!function(string, ...*):(!Array|string|number|boolean|null|void)} onInstruction
 * @param {!function(string)|!Object=} opt_onError
 * @param {!Object=} opt_options
 */
json2json.gulp = function( onInstruction, opt_onError, opt_options ){
    const PluginError = require( 'plugin-error' ),
          through     = require( 'through2'     ),
          pluginName  = 'json2json',
          options     = opt_onError && typeof opt_onError === 'object'
                            ? opt_onError
                      : opt_options && typeof opt_options === 'object'
                            ? opt_options
                            : {};
    
    return through.obj(
        function( file, encoding, callback ){
            if( file.isNull() ) return callback();
    
            if( file.isStream() ){
                this.emit( 'error', new PluginError( pluginName, 'Streaming not supported' ) );
                return callback();
            };
    
            if( file.extname === '.json' ){
                try {
                    const json = JSON.parse( file.contents.toString( encoding ) );
                    const isStaticWebPage = json2json( /** @type {!Array} */ (json), onInstruction, opt_onError, opt_options );
                    let content;

                    if( isStaticWebPage && options[ 'outputStaticPagesAsHTML' ] ){
                        content = json2html( /** @type {!Array} */ (json), onInstruction, opt_onError, opt_options );
                        // .html <= .html.json
                        file.extname = '.' + file.stem.split( '.' ).pop();
                        file.stem    = file.stem.substr( 0, file.stem.length - file.extname.length );
                    } else {
                        content = JSON.stringify( json, null, options[ 'prettify' ] ? '    ' : '' );
                    };
                    
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