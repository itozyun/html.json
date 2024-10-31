goog.provide( 'filter.gulp' );

goog.require( 'htmljson.DEFINE.INSTRUCTION_ATTR_PREFIX' );
goog.require( 'isStaticDocument' );

/**
 * @enum {number}
 */
var FILTER_OPTIONS = {
    STATIC  : 1,
    DYNAMIC : 2
};

module.exports = {
    STATIC  : FILTER_OPTIONS.STATIC,
    DYNAMIC : FILTER_OPTIONS.DYNAMIC
};

/**
 * @param {number} filter
 * @param {!Object=} opt_options
 */
module.exports.gulp = function( filter, opt_options ){
    const PluginError = require( 'plugin-error' ),
          through     = require( 'through2'     ),
          pluginName  = 'filter',
          attrPrefix  = opt_options && opt_options[ 'instructionAttrPrefix' ] || htmljson.DEFINE.INSTRUCTION_ATTR_PREFIX;

    if( htmljson.DEFINE.DEBUG ){
        if( !filter || filter & FILTER_OPTIONS.STATIC && filter & FILTER_OPTIONS.DYNAMIC ){
            throw 'Invalid filter value!';
        };
    };

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
                    const isStatic = isStaticDocument( json, attrPrefix );
                    
                    if( !isStatic && filter & FILTER_OPTIONS.STATIC ){
                        return callback();
                    };
                    if( isStatic && filter & FILTER_OPTIONS.DYNAMIC ){
                        return callback();
                    };
                } catch( O_o ) {
                    this.emit( 'error', new PluginError( pluginName, O_o ) );
                };
            };
            callback( null, file );
        }
    );
};
