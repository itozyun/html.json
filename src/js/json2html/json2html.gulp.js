goog.provide( 'json2html.gulp' );

goog.requireType( 'VNode' );
goog.require( 'json2html.module' );
goog.require( 'json2html' );

/**
 * @param {!InstructionHandler=} opt_onInstruction
 * @param {!function(!VNode) | !Object.<(string | number), function(!VNode)>=} opt_onEnterNode
 * @param {!function(string) | !Object=} opt_onError
 * @param {!Object=} opt_options
 */
json2html.gulp = function( opt_onInstruction, opt_onEnterNode, opt_onError, opt_options ){
    const PluginError = require( 'plugin-error' ),
          through     = require( 'through2'     ),
          pluginName  = 'json2html';
    
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

            const originalExtname = '.' + file.stem.split( '.' ).pop();
    
            if( file.extname === '.json' && [ '.html', '.htm', '.xhtml' ].indexOf( originalExtname ) ){
                try {
                    const json = JSON.parse( file.contents.toString( encoding ) );

                    if( m_isArray( json ) ){
                        const content = json2html( /** @type {!Array} */ (json), opt_onInstruction, opt_onEnterNode, opt_onError, opt_options );
                        // .html <= .html.json
                        file.stem     = file.stem.substr( 0, file.stem.length - originalExtname.length );
                        file.extname  = originalExtname;
                        file.contents = Buffer.from( /** @type {string} */ (content) );
                    };
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