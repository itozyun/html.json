goog.provide( 'json2json' );

goog.require( 'htmljson.base' );
goog.require( 'htmljson.NODE_TYPE' );
goog.require( 'htmljson.DEFINE.INSTRUCTION_ATTR_PREFIX' );

/**
 * @param {!Array} json
 * @param {!function(string, ...*):(!Array|string|number|boolean|null|void)=} opt_onInstruction
 * @param {!function(*)|!Object=} opt_onReachElement
 * @param {!function(string)|!Object=} opt_onError
 * @param {!Object=} opt_options
 * @return {boolean|void} isStaticWebPage
 */
json2json = function( json, opt_onInstruction, opt_onReachElement, opt_onError, opt_options ){
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
    var attrPrefix        = options[ 'instructionAttrPrefix' ] || htmljson.DEFINE.INSTRUCTION_ATTR_PREFIX;

    var isTreeUpdated   = false,
        isStaticWebPage = true;

    if( m_isArray( json ) ){
        walkNode( json, null, 0, [] );
        if( isTreeUpdated ){
            m_normalizeTextNodes( json );
        };
        return isStaticWebPage;
    } else if( htmljson.DEFINE.DEBUG ){
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
            case htmljson.NODE_TYPE.DOCUMENT_NODE :
                walkChildNodes( currentJSONNode, ancestorJSONNodes );
                break;
            case htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE :
                walkChildNodes( currentJSONNode, ancestorJSONNodes );
                break;
            case htmljson.NODE_TYPE.TEXT_NODE :
                break;
            case htmljson.NODE_TYPE.CDATA_SECTION :
                if( !keepCDATASections && parentJSONNode ){
                    parentJSONNode.splice( myIndex, 1 );
                    return REMOVED;
                };
                break;
            case htmljson.NODE_TYPE.COMMENT_NODE :
                if( !keepComments && parentJSONNode ){
                    parentJSONNode.splice( myIndex, 1 );
                    return REMOVED;
                };
                break;
            case htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER :
                walkChildNodes( currentJSONNode, ancestorJSONNodes );
                break;
            case htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER :
                walkChildNodes( currentJSONNode, ancestorJSONNodes );
                break;
            case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION :
                result = m_executeProcessingInstruction( onInstruction, currentJSONNode, parentJSONNode, myIndex, errorHandler );

                if( result !== undefined ){
                    isTreeUpdated = true;

                    if( result === null || result === '' ){
                        if( parentJSONNode ){
                            parentJSONNode.splice( myIndex, 1 );
                        } else {
                            json.length = 0;
                            json.push( htmljson.NODE_TYPE.COMMENT_NODE, '' );
                        };
                        return REMOVED;
                    } else if( m_isStringOrNumber( result ) ){
                        // just replaced
                    } else if( m_isArray( result ) ){
                        return REMOVED;
                    // } else if( htmljson.DEFINE.DEBUG ){
                        // errorHandler( 'PROCESSING_INSTRUCTION Error! [' + JSON.stringify( currentJSONNode ) + ']' );
                    };
                } else {
                    isStaticWebPage = false;
                };
                break;
            case htmljson.NODE_TYPE.ELEMENT_NODE :
            case htmljson.NODE_TYPE.ELEMENT_START_TAG :
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
                } else if( htmljson.DEFINE.DEBUG ){
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
            } else if( htmljson.DEFINE.DEBUG ){
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
                        } else if( htmljson.DEFINE.DEBUG ){
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
        return numAttributes;
    };
};
