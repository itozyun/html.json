/**
 * @param {!Array} json
 * @param {!function(string, ...*):(!Array|string|number|boolean|null|void)=} opt_onInstruction
 * @param {!function(*)|!Object=} opt_onReachElement
 * @param {!function(string)|!Object=} opt_onError
 * @param {!Object=} opt_options
 * @return {boolean|void} isStaticWebPage
 */
p_json2json = function( json, opt_onInstruction, opt_onReachElement, opt_onError, opt_options ){
    /** @const {number} */
    var REMOVED = -1;
    /** @const */
    var onInstruction     = typeof opt_onInstruction === 'function' ? opt_onInstruction : function( funcName, args ){};
    /** @const */
    var onReachElement    = typeof opt_onReachElement === 'function' ? opt_onReachElement : function( elementLike ){};
    /** @const */
    var errorHandler      = typeof opt_onError === 'function' ? opt_onError : function( error ){};
    /** @const */
    var options           = m_isObject( opt_onInstruction )
                              ? opt_onInstruction
                          : m_isObject( opt_onReachElement )
                              ? opt_onReachElement
                          : m_isObject( opt_onError )
                              ? opt_onError
                              : opt_options || {};
    /** @const */
    var keepCDATASections = options[ 'keepCDATASections'     ] !== false;
    /** @const */
    var keepComments      = options[ 'keepComments'          ] !== false;
    /** @const */
    var attrPrefix        = options[ 'instructionAttrPrefix' ] || DEFINE_HTML2JSON__INSTRUCTION_ATTR_PREFIX;

    var isTreeUpdated   = false,
        isStaticWebPage = true;

    if( m_isArray( json ) ){
        walkNode( json, null, 0, [] );
        if( isTreeUpdated ){
            m_mergeTextNodes( json );
        };
        return isStaticWebPage;
    } else if( DEFINE_HTML2JSON__DEBUG ){
        errorHandler( 'Invalid html.json document!' );
    };

    /**
     * 
     * @param {!Array} currentJSONNode 
     * @param {!Array|null} parentJSONNode 
     * @param {number} myIndex
     * @param {!Array.<!Array>} ancestorJSONNodes 
     * @return {number} Node Increase/Decrease
     */
    function walkNode( currentJSONNode, parentJSONNode, myIndex, ancestorJSONNodes ){
        var arg0 = currentJSONNode[ 0 ],
            arg1 = currentJSONNode[ 1 ],
            attrIndex = 1, tagName = arg0,
            attrs, result;

        switch( arg0 ){
            case HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE :
                walkChildNodes( currentJSONNode, ancestorJSONNodes );
                break;
            case HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE :
                walkChildNodes( currentJSONNode, ancestorJSONNodes );
                break;
            case HTML_DOT_JSON__NODE_TYPE.TEXT_NODE :
                break;
            case HTML_DOT_JSON__NODE_TYPE.CDATA_SECTION :
                if( !keepCDATASections && parentJSONNode ){
                    parentJSONNode.splice( myIndex, 1 );
                    return REMOVED;
                };
                break;
            case HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE :
                if( !keepComments && parentJSONNode ){
                    parentJSONNode.splice( myIndex, 1 );
                    return REMOVED;
                };
                break;
            case HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER :
                walkChildNodes( currentJSONNode, ancestorJSONNodes );
                break;
            case HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER :
                walkChildNodes( currentJSONNode, ancestorJSONNodes );
                break;
            case HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION :
                result = m_executeProcessingInstruction( onInstruction, currentJSONNode, parentJSONNode, myIndex, errorHandler );

                if( result !== undefined ){
                    isTreeUpdated = true;

                    if( result === null || result === '' ){
                        if( parentJSONNode ){
                            parentJSONNode.splice( myIndex, 1 );
                        } else {
                            json.length = 0;
                            json.push( HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE, '' );
                        };
                        return REMOVED;
                    } else if( m_isStringOrNumber( result ) ){
                        // just replaced
                    } else if( m_isArray( result ) ){
                        return REMOVED;
                    // } else if( DEFINE_HTML2JSON__DEBUG ){
                        // errorHandler( 'PROCESSING_INSTRUCTION Error! [' + JSON.stringify( currentJSONNode ) + ']' );
                    };
                } else {
                    isStaticWebPage = false;
                };
                break;
            case HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE :
                tagName   = arg1;
                attrIndex = 2;
            default :
                if( m_isString( tagName ) ){
                    if( 1 + attrIndex <= currentJSONNode.length ){
                        attrs = currentJSONNode[ attrIndex ];
                        // attr
                        if( m_isAttributes( attrs ) ){
                            if( walkAttributes( attrs ) === 0 ){
                                currentJSONNode.splice( attrIndex, 1 );
                            };
                        };
                        // childNodes
                        walkChildNodes( currentJSONNode, ancestorJSONNodes );
                    };
                } else if( DEFINE_HTML2JSON__DEBUG ){
                    errorHandler( 'Not html.json! [' + currentJSONNode + ']' );
                };
        };
        return 0;
    };

    /**
     * 
     * @param {!Array} currentJSONNode 
     * @param {!Array.<!Array>} ancestorJSONNodes 
     */
    function walkChildNodes( currentJSONNode, ancestorJSONNodes ){
        var i = m_getChildNodeStartIndex( currentJSONNode ), childNode, nodeIncreaseOrDecrease;

        ancestorJSONNodes.push( currentJSONNode );

        for( ; i < currentJSONNode.length; ++i ){ // PROCESSING_INSTRUCTION で配列が変化する
            childNode = currentJSONNode[ i ];

            if( m_isStringOrNumber( childNode ) ){
                // TEXT_NODE
            } else if( m_isArray( childNode ) ){
                nodeIncreaseOrDecrease = walkNode( childNode, currentJSONNode, i, ancestorJSONNodes );
                if( nodeIncreaseOrDecrease ){
                    i += nodeIncreaseOrDecrease; // Node Increase/Decrease
                };
            } else if( DEFINE_HTML2JSON__DEBUG ){
                errorHandler( 'Invalid html.json! [' + childNode + ']' );
            };
        };

        ancestorJSONNodes.pop();
    };

    /**
     * @param {!Object} attrs
     * @return {number} = attributes.length
     */
    function walkAttributes( attrs ){
        var numAttributes = 0, name, originalName, value, isInstruction;
    
        for( name in attrs ){
            originalName = name;
            value = attrs[ name ];
            isInstruction = m_isInstructionAttr( attrPrefix, name );

            if( isInstruction ){
                name = name.substr( attrPrefix.length );
                name === 'className' && ( name = 'class' );
                value = m_executeInstructionAttr( false, onInstruction, name, value, errorHandler );

                if( value !== undefined ){
                    delete attrs[ originalName ];
                    if( m_isArray( value ) ){
                        if( m_isString( value[ 0 ] ) ){
                            attrs[ originalName ] = value;
                            isStaticWebPage = false;
                            ++numAttributes;
                        } else if( DEFINE_HTML2JSON__DEBUG ){
                            errorHandler( 'Invalid dynamic attribute callback value! [' + originalName + '=' + value + ']' );
                        };
                    } else if( m_ATTRS_NO_VALUE[ name ] && value === false ){

                    } else if( value !== null ){
                        attrs[ name ] = value;
                        ++numAttributes;
                    };
                } else {
                    isStaticWebPage = false;
                    ++numAttributes;
                };
            } else {
                ++numAttributes;
            };
        };
    };
};

if( DEFINE_HTML2JSON__EXPORT_JSON2JSON ){
    module.exports = p_json2json;

    p_json2json.DOCUMENT_NODE                  = HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE;
    p_json2json.DOCUMENT_FRAGMENT_NODE         = HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE;
    p_json2json.ELEMENT_NODE                   = HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE;
    p_json2json.TEXT_NODE                      = HTML_DOT_JSON__NODE_TYPE.TEXT_NODE;
    p_json2json.CDATA_SECTION                  = HTML_DOT_JSON__NODE_TYPE.CDATA_SECTION;
    p_json2json.COMMENT_NODE                   = HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE;
    p_json2json.CONDITIONAL_COMMENT_HIDE_LOWER = HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER;
    p_json2json.CONDITIONAL_COMMENT_SHOW_LOWER = HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER;
    p_json2json.PROCESSING_INSTRUCTION         = HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION;

    if( DEFINE_HTML2JSON__GULP_PULGIN ){
        p_html2json.gulp = function( opt_onInstruction, opt_onError, opt_options ){
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
                            const isStaticWebPage = p_html2json( json, opt_onInstruction, opt_onError, opt_options );
                            let content;

                            if( isStaticWebPage && options[ 'outputStaticPagesAsHTML' ] ){
                                content = p_json2html( /** @type {!Array} */ (json), opt_onInstruction, opt_onError, opt_options );
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
    };
};