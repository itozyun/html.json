/**
 * @param {!Array} json
 * @param {!function(string, ...*):(!Array|string|number|null|void)} opt_onInstruction
 * @param {!function(string)|!Object=} opt_onError
 * @param {!Object=} opt_options
 * @return {boolean|void} isStaticWebPage
 */
p_json2json = function( json, opt_onInstruction, opt_onError, opt_options ){
    /** @const {number} */
    var REMOVED = -1;

    var onInstruction = typeof opt_onInstruction === 'function' ? opt_onInstruction : function( funcName, args ){};

    var errorHandler = typeof opt_onError === 'function' ? opt_onError : function( error ){};

    var options          = m_isObject( opt_onError ) ? opt_onError : opt_options || {},
        keepCDATASections = options[ 'keepCDATASections'      ] !== false,
        keepComments     = options[ 'keepComments'          ] !== false,
        attrPrefix       = options[ 'instructionAttrPrefix' ] || DEFINE_HTML2JSON__INSTRUCTION_ATTR_PREFIX;

    var isTreeUpdated = false,
        isStaticWebPage = true;

    if( m_isArray( json ) ){
        walkNode( json, null, 0 );
        if( isTreeUpdated ){
            m_mergeTextNodes( json );
        };
        return isStaticWebPage; // TODO 連続する Text の結合
    } else if( DEFINE_HTML2JSON__DEBUG ){
        errorHandler( 'Invalid html.json document!' );
    };

    /**
     * 
     * @param {!Array} currentJSONNode 
     * @param {!Array|null} parentJSONNode 
     * @param {number} myIndex
     */
    function walkNode( currentJSONNode, parentJSONNode, myIndex ){
        var arg0 = currentJSONNode[ 0 ],
            arg1 = currentJSONNode[ 1 ],
            attrIndex = 1, tagName = arg0,
            attrs, result;

        switch( arg0 ){
            case HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE :
                walkChildNodes( currentJSONNode );
                break;
            case HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE :
                walkChildNodes( currentJSONNode );
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
                walkChildNodes( currentJSONNode );
                break;
            case HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER :
                walkChildNodes( currentJSONNode );
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
                            walkAttributes( attrs );
                            if( Object.keys( attrs ).length === 0 ){
                                currentJSONNode.splice( attrIndex, 1 );
                            };
                        };
                        // childNodes
                        walkChildNodes( currentJSONNode );
                    };
                } else if( DEFINE_HTML2JSON__DEBUG ){
                    errorHandler( 'Not html.json! [' + currentJSONNode + ']' );
                };
        };
    };

    /**
     * 
     * @param {!Array} currentJSONNode 
     */
    function walkChildNodes( currentJSONNode ){
        var i = m_getChildNodeStartIndex( currentJSONNode ), childNode;

        for( ; i < currentJSONNode.length; ++i ){ // PROCESSING_INSTRUCTION で配列が変化する
            childNode = currentJSONNode[ i ];

            if( m_isStringOrNumber( childNode ) ){

            } else if( m_isArray( childNode ) ){
                if( walkNode( childNode, currentJSONNode, i ) === REMOVED ){
                    --i; // node replaced
                };
            } else if( DEFINE_HTML2JSON__DEBUG ){
                errorHandler( 'Invalid html.json! [' + childNode + ']' );
            };
        };
    };

    /**
     * @param {!Object} attrs 
     */
    function walkAttributes( attrs ){
        var name, originalName, value, isInstruction;
    
        for( name in attrs ){
            originalName = name;
            value = attrs[ name ];
            isInstruction = m_isInstructionAttr( attrPrefix, name );
            isInstruction && ( name = name.substr( attrPrefix.length ) );
            name === 'className' && ( name = 'class' );

            if( isInstruction ){
                value = m_executeInstructionAttr( onInstruction, name, value, errorHandler );

                if( value !== undefined ){
                    delete attrs[ originalName ];
                    if( m_isArray( value ) ){
                        if( m_isString( value[ 0 ] ) ){
                            attrs[ originalName ] = value;
                            isStaticWebPage = false;
                        } else if( DEFINE_HTML2JSON__DEBUG ){
                            errorHandler( 'Invalid dynamic attribute callback value! [' + originalName + '=' + value + ']' );
                        };
                    } else if( value !== null && value !== '' ){
                        attrs[ name ] = value;
                    };
                } else {
                    isStaticWebPage = false;
                };
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
};