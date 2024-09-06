goog.provide( 'json2json.gulp' );

goog.require( 'json2json.node' );
goog.require( 'json2html' );

json2json.gulp = function( opt_onInstruction, opt_onError, opt_options ){
    const PluginError = require( 'plugin-error' ),
          through     = require( 'through2'     ),
          pluginName  = 'json2json',
          options     = opt_onInstruction && typeof opt_onInstruction === 'object'
                            ? opt_onInstruction
                      : opt_onError && typeof opt_onError === 'object'
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
                    const isStaticWebPage = json2json( json, opt_onInstruction, opt_onError, opt_options );
                    let content;

                    if( isStaticWebPage && options[ 'outputStaticPagesAsHTML' ] ){
                        content = json2html( /** @type {!Array} */ (json), opt_onInstruction, opt_onError, opt_options );
                        // .html <= .html.json
                        file.extname = '.' + file.stem.split( '.' ).pop();
                        file.stem    = file.stem.substr( 0, file.stem.length - file.extname.length );
                    } else {
                        content = JSON.stringify( json, null, options[ 'prettify' ] ? '    ' : '' );
                    };
                    
                    file.contents = Buffer.from( content );
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