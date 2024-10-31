goog.provide( 'json2json.gulp' );

goog.require( 'json2json.module' );
goog.require( 'json2json.main' );

/**
 * @param {!InstructionHandler=} opt_onInstruction
 * @param {!EnterNodeHandler=} opt_onEnterNode
 * @param {!function(!VNode)=} opt_onDocumentReady
 * @param {!function((string | !Error))=} opt_onError
 * @param {!Object=} opt_options
 */
json2json.main.gulp = function( opt_onInstruction, opt_onEnterNode, opt_onDocumentReady, opt_onError, opt_options ){
    const PluginError = require( 'plugin-error' ),
          through     = require( 'through2'     ),
          pluginName  = 'json2json',
          prettify    = opt_options && opt_options[ 'prettify' ];

    return through.obj(
        /**
         * @this {stream.Readable}
         * @param {!Vinyl} file 
         * @param {string} encoding 
         * @param {function(Error=, Vinyl=)} callback
         */
        function( file, encoding, callback ){
            if( file.isNull() ) return callback();
    
            if( file.isStream() ){
                this.emit( 'error', new PluginError( pluginName, 'Streaming not supported' ) );
                return callback();
            };
    
            if( file.extname === '.json' ){
                try {
                    const json = /** @type {!Array} */ (JSON.parse( file.contents.toString( encoding ) ) );
                    
                    json2json.main( json, opt_onInstruction, opt_onEnterNode, opt_onDocumentReady, opt_onError, opt_options );

                    const content = JSON.stringify( json, null, prettify ? '    ' : '' );

                    file.contents = Buffer.from( /** @type {string} */ (content) );
                } catch( O_o ) {
                    this.emit( 'error', new PluginError( pluginName, O_o ) );
                };
            };
            callback( null, file );
        }
    );
};