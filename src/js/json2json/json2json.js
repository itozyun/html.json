goog.provide( 'json2json' );

goog.require( 'htmlparser.BOOLEAN_ATTRIBUTES' );
goog.require( 'htmljson.base' );
goog.require( 'htmljson.NODE_TYPE' );
goog.require( 'htmljson.DEFINE.INSTRUCTION_ATTR_PREFIX' );
goog.require( 'htmlparser.XML_ROOT_ELEMENTS' );

/**
 * @param {!Array} json
 * @param {!function(string, ...*):(!Array|string|number|boolean|null|void)=} opt_onInstruction
 * @param {!function(*)|!Object=} opt_onEnterNode
 * @param {!function(string)|!Object=} opt_onError
 * @param {!Object=} opt_options
 * @return {boolean|void} isStaticWebPage
 */
json2json = function( json, opt_onInstruction, opt_onEnterNode, opt_onError, opt_options ){
    /** @const {number} */
    var REMOVED = -1;
    /** @const */
    var onInstruction     = typeof opt_onInstruction === 'function' ? opt_onInstruction : function( funcName, args ){};
    /** @const */
    var onEnterNode    = typeof opt_onEnterNode === 'function' ? opt_onEnterNode : function( elementLike ){};
    /** @const */
    var errorHandler      = typeof opt_onError === 'function' ? opt_onError : function( error ){};
    /** @const */
    var options           = m_isObject( opt_onInstruction )
                              ? opt_onInstruction
                          : m_isObject( opt_onEnterNode )
                              ? opt_onEnterNode
                          : m_isObject( opt_onError )
                              ? opt_onError
                              : opt_options || {};
    /** @const */
    var isTrimWhitespace  = [ 'normal', true, 'aggressive' ].indexOf( options[ 'trimWhitespaces' ] ) !== -1;
    /** @const */
    var isAggressiveTrim  = options[ 'trimWhitespaces' ] === 'aggressive';
    /** @const */
    var isRemoveNewlineBetweenFullWidthChars
                          = !!options[ 'removeNewlineBetweenFullWidthChars' ];
    /** @const */
    var keepCDATASections = options[ 'keepCDATASections'           ] !== false;
    /** @const */
    var keepComments      = options[ 'keepComments'                ] !== false;
    /** @const */
    var keepEmptyCondCmt  = options[ 'keepEmptyConditionalComment' ] === true;
    /** @const */
    var attrPrefix        = options[ 'instructionAttrPrefix'       ] || htmljson.DEFINE.INSTRUCTION_ATTR_PREFIX;

    var isXmlInHTML     = false,
        isTreeUpdated   = false,
        isStaticWebPage = true;

    if( m_isArray( json ) ){
        walkNode( json, null, 0, [], false, false );
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
     * @param {boolean} isDescendantOfPre 
     * @param {boolean} isTrimNewlines
     * @return {number} Node Increase/Decrease
     */
    function walkNode( currentJSONNode, parentJSONNode, myIndex, ancestorJSONNodes, isDescendantOfPre, isTrimNewlines ){
        var arg0 = currentJSONNode[ 0 ],
            arg1 = currentJSONNode[ 1 ],
            attrIndex = 1, tagName = arg0,
            prevJSONNode, attrs, result, isPreTag, isXMLRoot;

        switch( arg0 ){
            case htmljson.NODE_TYPE.DOCUMENT_NODE :
                if( htmljson.DEFINE.USE_XHTML && m_isXML( arg1 ) ){
                    isXmlInHTML = true;
                };
                walkChildNodes( currentJSONNode, ancestorJSONNodes, isDescendantOfPre, isTrimNewlines );
                break;
            case htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE :
                walkChildNodes( currentJSONNode, ancestorJSONNodes, isDescendantOfPre, isTrimNewlines );
                break;
            case htmljson.NODE_TYPE.TEXT_NODE :
                arg1 = m_trimWhiteSpaces( '' + arg1, isDescendantOfPre, isTrimNewlines, isTrimWhitespace, isAggressiveTrim, isRemoveNewlineBetweenFullWidthChars );
                if( arg1 !== '' ){
                    parentJSONNode[ myIndex ] = arg1;
                } else {
                    parentJSONNode.splice( myIndex, 1 );
                    return REMOVED;
                };
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
                walkChildNodes( currentJSONNode, ancestorJSONNodes, isDescendantOfPre, isTrimNewlines );
                if( !keepEmptyCondCmt && parentJSONNode && currentJSONNode.length === 2 ){
                    parentJSONNode.splice( myIndex, 1 );
                    return REMOVED;
                };
                break;
            case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_END :
                prevJSONNode = parentJSONNode[ myIndex - 1 ];

                if( keepEmptyCondCmt || !prevJSONNode || prevJSONNode[ 0 ] !== htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START ){
                    
                } else if( prevJSONNode ){
                    parentJSONNode.splice( myIndex - 1, 2 );
                    return REMOVED * 2;
                };
                break;
            case htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER :
                walkChildNodes( currentJSONNode, ancestorJSONNodes, isDescendantOfPre, isTrimNewlines );
                if( !keepEmptyCondCmt && parentJSONNode && currentJSONNode.length === 2 ){
                    parentJSONNode.splice( myIndex, 1 );
                    return REMOVED;
                };
                break;
            case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION :
                result = m_executeProcessingInstruction( onInstruction, currentJSONNode, parentJSONNode, myIndex, errorHandler );

                if( result !== undefined ){
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
                            if( walkAttributes( currentJSONNode, attrIndex - 1, attrs ) === 0 ){
                                currentJSONNode.splice( attrIndex, 1 );
                            };
                        };

                        // xml;
                        if( !isXmlInHTML ){
                            isXMLRoot = isXmlInHTML = isXML( tagName );
                        };

                        isPreTag = !!m_FAMILY_OF_PRE_ELEMENT[ tagName ];

                        if( isPreTag && isTrimWhitespace ){
                            // pre タグの場合、最初と最後のテキストノードが空白文字のみなら削除, 最初のテキストノードの頭の改行文字を削除、最後のテキストノードの後ろの改行文字を削除
                            // 各行の改行の前の空白文字も削除
                        };

                        // childNodes
                        walkChildNodes( currentJSONNode, ancestorJSONNodes, isPreTag || isDescendantOfPre, !!m_TRIM_NEWLINES_ELEMENTS[ tagName ] );

                        if( isXMLRoot ){
                            isXmlInHTML = false;
                        };
                    };
                } else if( htmljson.DEFINE.DEBUG ){
                    errorHandler( 'Not html.json! [' + currentJSONNode + ']' );
                };
        };
        return 0;
    };

    /**
     * @param {string} tagName 
     * @return {boolean} 
     */
    function isXML( tagName ){
        if( isXmlInHTML ){
            return true;
        } else if( htmlparser.XML_ROOT_ELEMENTS[ tagName ] ){
            return true;
        };
        return m_isNamespacedTag( tagName ); // v: vml
    };

    /**
     * 
     * @param {!Array} currentJSONNode 
     * @param {!Array.<!Array>} ancestorJSONNodes
     * @param {boolean} isDescendantOfPre 
     * @param {boolean} isTrimNewlines
     */
    function walkChildNodes( currentJSONNode, ancestorJSONNodes, isDescendantOfPre, isTrimNewlines ){
        var i = m_getChildNodeStartIndex( currentJSONNode ), childNode, nodeIncreaseOrDecrease;

        ancestorJSONNodes.push( currentJSONNode );

        for( ; i < currentJSONNode.length; ++i ){ // PROCESSING_INSTRUCTION で配列が変化する
            childNode = currentJSONNode[ i ];

            if( m_isStringOrNumber( childNode ) ){
                // TEXT_NODE
            } else if( m_isArray( childNode ) ){
                nodeIncreaseOrDecrease = walkNode( childNode, currentJSONNode, i, ancestorJSONNodes, isDescendantOfPre, isTrimNewlines );
                if( nodeIncreaseOrDecrease ){
                    i += nodeIncreaseOrDecrease; // Node Increase/Decrease
                    isTreeUpdated = true;
                };
            } else if( htmljson.DEFINE.DEBUG ){
                errorHandler( 'Invalid html.json! [' + childNode + ']' );
            };
        };

        ancestorJSONNodes.pop();
    };

    /**
     * @param {!Array} currentJSONNode
     * @param {number} tagNameIndex
     * @param {!Object} attrs
     * @return {number} = attributes.length
     */
    function walkAttributes( currentJSONNode, tagNameIndex, attrs ){
        var numAttributes = 0, name, originalName, value, isInstruction;
        var classList, i, newClass;

        var tagName = m_parseTagName( /** @type {string} */ (currentJSONNode[ tagNameIndex ]) );
        var id        = tagName[ 1 ];
        var className = tagName[ 2 ];
        tagName = tagName[ 0 ];
    
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
                    } else if( htmlparser.BOOLEAN_ATTRIBUTES[ name ] && value === false ){

                    } else if( value !== null ){
                        if( m_isString( value ) ){
                            value = /** @type {string} */ (value);
                            if( name === 'id' ){
                                id = value;
                                continue;
                            } else if( name === 'class' ){
                                for( classList = value.split( ' ' ), i = classList.length; i; ){
                                    newClass = classList[ --i ];
                                    if( ( ' ' + className + ' ' ).indexOf( ' ' + newClass + ' ' ) === -1 ){
                                        className = ( className ? ' ' : '' ) + newClass;
                                    };
                                };
                                continue;
                            };
                        };
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

        currentJSONNode[ tagNameIndex ] = m_createTagName( tagName, id, className );
        return numAttributes;
    };
};
