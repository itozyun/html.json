goog.provide( 'json2json.main' );

goog.require( 'htmlparser.BOOLEAN_ATTRIBUTES' );
goog.require( 'htmljson.NODE_TYPE' );
goog.require( 'htmljson.base' );
goog.require( 'htmljson.DEFINE.INSTRUCTION_ATTR_PREFIX' );
goog.require( 'htmlparser.isXMLRootElement' );
goog.require( 'htmlparser.isNamespacedTag' );
goog.require( 'VNode' );

/**
 * @param {!HTMLJson} rootHTMLJson
 * @param {!InstructionHandler=} opt_onInstruction
 * @param {!EnterNodeHandler=} opt_onEnterNode
 * @param {!function(!VNode)=} opt_onDocumentReady
 * @param {!function((string | !Error))=} opt_onError
 * @param {!Object=} opt_options
 * @return {boolean | void} isStaticWebPage
 */
json2json.main = function( rootHTMLJson, opt_onInstruction, opt_onEnterNode, opt_onDocumentReady, opt_onError, opt_options ){
    /** @const {number} */
    var REMOVED = -1;

    /** @const */
    var onInstruction     = opt_onInstruction || null;
    /** @const */
    var onEnterNode       = opt_onEnterNode || null;
    /** @const */
    var onDocumentReady   = typeof opt_onDocumentReady === 'function' ? opt_onDocumentReady : null;
    /** @const */
    var onError           = typeof opt_onError === 'function' ? opt_onError : function( error ){};
    /** @const */
    var options           = opt_options || {};
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

    if( m_isArray( rootHTMLJson ) ){
        walkNode( rootHTMLJson, null, 0, false, false );
        if( isTreeUpdated ){
            m_normalizeTextNodes( rootHTMLJson );
        };
        if( onDocumentReady ){
            if( _dispatchDocumentReadyEvent( onDocumentReady, rootHTMLJson ) ){
                isStaticWebPage = m_isStaticDocument( rootHTMLJson, attrPrefix );
            };
        };
        return isStaticWebPage;
    } else if( htmljson.DEFINE.DEBUG ){
        onError( 'Invalid html.json document!' );
    };

    /**
     * 
     * @param {!HTMLJson} currentJSONNode 
     * @param {!Array|null} parentJSONNode 
     * @param {number} myIndex
     * @param {boolean} isDescendantOfPre 
     * @param {boolean} isTrimNewlines
     * @return {number} Node Increase/Decrease
     */
    function walkNode( currentJSONNode, parentJSONNode, myIndex, isDescendantOfPre, isTrimNewlines ){
        var arg0 = currentJSONNode[ 0 ],
            arg1 = currentJSONNode[ 1 ],
            attrIndex = 1, tagName = arg0,
            prevJSONNode, attrs, result, isPreTag, isXMLRoot;

        switch( arg0 ){
            case htmljson.NODE_TYPE.DOCUMENT_NODE :
                if( htmljson.DEFINE.USE_XHTML && m_isXML( arg1 ) ){
                    isXmlInHTML = true;
                };
            case htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE :
                walkChildNodes( currentJSONNode, isDescendantOfPre, isTrimNewlines );
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
                walkChildNodes( currentJSONNode, isDescendantOfPre, isTrimNewlines );
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
                walkChildNodes( currentJSONNode, isDescendantOfPre, isTrimNewlines );
                if( !keepEmptyCondCmt && parentJSONNode && currentJSONNode.length === 2 ){
                    parentJSONNode.splice( myIndex, 1 );
                    return REMOVED;
                };
                break;
            case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION :
                if( onInstruction ){
                    result = m_executeProcessingInstruction( onInstruction, currentJSONNode, parentJSONNode, myIndex, onError );

                    if( result !== undefined ){
                        if( result === null || result === '' ){
                            if( parentJSONNode ){
                                parentJSONNode.splice( myIndex, 1 );
                            } else {
                                rootHTMLJson.length = 0;
                                rootHTMLJson.push( htmljson.NODE_TYPE.COMMENT_NODE, '' );
                            };
                            return REMOVED;
                        } else if( m_isStringOrNumber( result ) ){
                            // just replaced
                        } else if( m_isArray( result ) ){
                            return REMOVED;
                        // } else if( htmljson.DEFINE.DEBUG ){
                            // onError( 'PROCESSING_INSTRUCTION Error! [' + JSON.stringify( currentJSONNode ) + ']' );
                        };
                    } else {
                        isStaticWebPage = false;
                    };
                } else {
                    onError( 'onInstruction is void!' );
                };
                break;
            case htmljson.NODE_TYPE.ELEMENT_NODE :
            case htmljson.NODE_TYPE.ELEMENT_START_TAG :
                tagName   = arg1;
                attrIndex = 2;
            default :
                if( m_isString( tagName ) ){
                    tagName = /** @type {string} */ (tagName);
                    if( 1 + attrIndex <= currentJSONNode.length ){
                        attrs = currentJSONNode[ attrIndex ];
                        // attr
                        if( m_isAttributes( attrs ) ){
                            if( walkAttributes( currentJSONNode, attrIndex - 1, /** @type {!Attrs} */ (attrs) ) === 0 ){
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
                        walkChildNodes( currentJSONNode, isPreTag || isDescendantOfPre, !!m_TRIM_NEWLINES_ELEMENTS[ tagName ] );

                        if( isXMLRoot ){
                            isXmlInHTML = false;
                        };
                    };
                } else if( htmljson.DEFINE.DEBUG ){
                    onError( 'Not html.json! [' + currentJSONNode + ']' );
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
        } else if( htmlparser.isXMLRootElement( tagName ) ){
            return true;
        };
        return htmlparser.isNamespacedTag( tagName ); 
    };

    /**
     * 
     * @param {!HTMLJson} currentJSONNode 
     * @param {boolean} isDescendantOfPre 
     * @param {boolean} isTrimNewlines
     */
    function walkChildNodes( currentJSONNode, isDescendantOfPre, isTrimNewlines ){
        var i = m_getChildNodeStartIndex( currentJSONNode ), childNode, nodeIncreaseOrDecrease;

        for( ; i < currentJSONNode.length; ++i ){ // PROCESSING_INSTRUCTION で配列が変化する
            childNode = currentJSONNode[ i ];

            if( m_isStringOrNumber( childNode ) ){

            } else if( m_isArray( childNode ) ){
                nodeIncreaseOrDecrease = walkNode( /** @type {!HTMLJson} */ (childNode), currentJSONNode, i, isDescendantOfPre, isTrimNewlines );
                if( nodeIncreaseOrDecrease ){
                    i += nodeIncreaseOrDecrease; // Node Increase/Decrease
                    isTreeUpdated = true;
                };
            } else if( htmljson.DEFINE.DEBUG ){
                onError( 'Invalid html.json! [' + childNode + ']' );
            };
        };
    };

    /**
     * @param {!HTMLJson} currentJSONNode
     * @param {number} tagNameIndex
     * @param {!Attrs} attrs
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
                if( onInstruction ){
                    value = m_executeInstructionAttr( false, onInstruction, name, /** @type {!InstructionArgs | string} */ (value), onError );
                } else {
                    onError( 'onInstruction is void!' );
                };

                if( value !== undefined ){
                    delete attrs[ originalName ];
                    if( m_isArray( value ) ){
                        if( m_isString( value[ 0 ] ) ){
                            attrs[ originalName ] = value;
                            isStaticWebPage = false;
                            ++numAttributes;
                        } else if( htmljson.DEFINE.DEBUG ){
                            onError( 'Invalid dynamic attribute callback value! [' + originalName + '=' + value + ']' );
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

/**
 * @private
 * @param {!function(!VNode)} onDocumentReady
 * @param {!HTMLJson} rootHTMLJson
 * @return {boolean} isUpdated
 */
function _dispatchDocumentReadyEvent( onDocumentReady, rootHTMLJson ){
    var rootVNode = m_createVNodeFromHTMLJson( rootHTMLJson, false );

    VNode.treeIsUpdated = false;

    onDocumentReady( rootVNode );

    var isUpdated = VNode.treeIsUpdated;

    if( isUpdated ){
        VNode.treeIsUpdated = false;
        rootHTMLJson.length = 0;
        rootHTMLJson.push.apply( rootHTMLJson, rootVNode.getHTMLJson() );
        m_normalizeTextNodes( rootHTMLJson );
    };

    return isUpdated;
};
