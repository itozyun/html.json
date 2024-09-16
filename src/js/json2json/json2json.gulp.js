goog.provide( 'json2json.gulp' );

goog.require( 'json2json.module' );
goog.require( 'json2html' );

/**
 * @param {!InstructionHandler=} opt_onInstruction
 * @param {!EnterNodeHandler=} opt_onEnterNode
 * @param {!function(!VNode)=} opt_onDocumentReady
 * @param {!function(string) | !Object=} opt_onError
 * @param {!Object=} opt_options
 */
json2json.gulp = function( opt_onInstruction, opt_onEnterNode, opt_onDocumentReady, opt_onError, opt_options ){
    const PluginError = require( 'plugin-error' ),
          through     = require( 'through2'     ),
          pluginName  = 'json2json',
          options     = opt_options || {},
          outputStaticPagesAsHTML = options[ 'outputStaticPagesAsHTML' ],
          staticPages             = options[ 'staticPages' ] && typeof options[ 'staticPages' ] === 'object' ? options[ 'staticPages' ] : {};

    options[ 'staticPages' ] = staticPages;

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
    
            if( file.extname === '.json' ){
                try {
                    const json = /** @type {!Array} */ (JSON.parse( file.contents.toString( encoding ) ) );
                    const isStaticWebPage = json2json( json, opt_onInstruction, opt_onEnterNode, opt_onDocumentReady, opt_onError, options );
                    let content;

                    if( outputStaticPagesAsHTML ){
                        const filePathElements = file.path.split( '\\' ).join( '/' ).split( '.' );

                        filePathElements.pop();
                        staticPages[ filePathElements.join( '.' ) ] = isStaticWebPage;
                    };

                    if( isStaticWebPage && outputStaticPagesAsHTML ){
                        content = json2html( json, undefined, opt_onEnterNode, opt_onError, options );
                        // .html <= .html.json
                        const extname = '.' + file.stem.split( '.' ).pop();

                        file.stem    = file.stem.substr( 0, file.stem.length - file.extname.length );
                        file.extname = extname;
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