goog.provide( 'json2html.gulp' );

goog.require( 'json2html.node' );
goog.require( 'json2html' );

json2html.gulp = function( opt_onInstruction, opt_onError, opt_options ){
    const PluginError = require( 'plugin-error' ),
          through     = require( 'through2'     ),
          pluginName  = 'json2html';
    
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

                    const content = json2html( /** @type {!Array} */ (json), opt_onInstruction, opt_onError, opt_options );
                    // .html <= .html.json
                    file.extname = '.' + file.stem.split( '.' ).pop();
                    file.stem    = file.stem.substr( 0, file.stem.length - file.extname.length );
                    
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