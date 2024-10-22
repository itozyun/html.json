goog.provide( 'json2json.main' );

goog.require( 'htmlparser.BOOLEAN_ATTRIBUTES' );
goog.require( 'htmljson.NODE_TYPE' );
goog.require( 'htmljson.base' );
goog.require( 'htmljson.DEFINE.INSTRUCTION_ATTR_PREFIX' );
goog.require( 'htmlparser.isXMLRootElement' );
goog.require( 'htmlparser.isNamespacedTag' );
goog.require( 'VNode' );
goog.require( 'htmljson.Traverser.VISITOR_OPTION' );
goog.requireType( 'htmljson.Traverser.EnterHandler' );
goog.requireType( 'htmljson.Traverser.LeaveHandler' );
goog.require( 'htmljson.Traverser.traverseAllDescendantNodes' );

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

    var isTreeUpdated,
        isStaticWebPage = true;
    /** @const */
    var statusStack = [ false, false ];

    if( m_isArray( rootHTMLJson ) ){
        if( rootHTMLJson[ 0 ] !== htmljson.NODE_TYPE.DOCUMENT_NODE && rootHTMLJson[ 0 ] !== htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE ){
            rootHTMLJson = [ htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE, rootHTMLJson ];
        };
        isTreeUpdated = htmljson.Traverser.traverseAllDescendantNodes(
            rootHTMLJson,
            /**
             * 
             * @param {!HTMLJson | string | number} currentJSONNode 
             * @param {HTMLJson | null} parentJSONNode 
             * @param {number} myIndex
             * @param {number} depth
             * @return {number | void} VISITOR_OPTION.*
             */
            function( currentJSONNode, parentJSONNode, myIndex, depth ){
                var isDescendantOfPre = statusStack[ depth * 2 + 0 ],
                    isTrimNewlines    = statusStack[ depth * 2 + 1 ],
                    tagName           = currentJSONNode[ 0 ],
                    arg1              = currentJSONNode[ 1 ],
                    attrIndex         = 1,
                    prevJSONNode, attrs, result, isPreTag;

                switch( m_getNodeType( currentJSONNode ) ){
                    case htmljson.NODE_TYPE.DOCUMENT_NODE :
                        break;
                    case htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE :
                        break;
                    case htmljson.NODE_TYPE.TEXT_NODE :
                        if( !m_isArray( currentJSONNode ) ){
                            arg1 = currentJSONNode;
                        };
                        arg1 = m_trimWhiteSpaces( '' + arg1, isDescendantOfPre, isTrimNewlines, isTrimWhitespace, isAggressiveTrim, isRemoveNewlineBetweenFullWidthChars );
                        if( arg1 !== '' ){
                            parentJSONNode[ myIndex ] = arg1;
                        } else {
                            parentJSONNode.splice( myIndex, 1 );
                            return htmljson.Traverser.VISITOR_OPTION.REMOVED;
                        };
                        return;
                    case htmljson.NODE_TYPE.CDATA_SECTION :
                        if( !keepCDATASections ){
                            /** @type {!HTMLJson} */ (parentJSONNode).splice( myIndex, 1 );
                            return htmljson.Traverser.VISITOR_OPTION.REMOVED;
                        };
                        break;
                    case htmljson.NODE_TYPE.COMMENT_NODE :
                        if( !keepComments ){
                            /** @type {!HTMLJson} */ (parentJSONNode).splice( myIndex, 1 );
                            return htmljson.Traverser.VISITOR_OPTION.REMOVED;
                        };
                        break;
                    case htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER :
                        break;
                    case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START :
                        break;
                    case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_END :
                        prevJSONNode = parentJSONNode[ myIndex - 1 ];

                        if( !keepEmptyCondCmt && prevJSONNode && prevJSONNode[ 0 ] === htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START ){
                            parentJSONNode.splice( myIndex - 1, 2 );
                            return htmljson.Traverser.VISITOR_OPTION.REMOVED * 2;
                        };
                        break;
                    case htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER :
                        break;
                    case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION :
                        if( onInstruction ){
                            result = m_executeProcessingInstruction( onInstruction, /** @type {!HTMLJson} */ (currentJSONNode), /** @type {!HTMLJson} */ (parentJSONNode), myIndex, onError );

                            if( result !== undefined ){
                                if( result === null || result === '' ){
                                    parentJSONNode.splice( myIndex, 1 );
                                    return htmljson.Traverser.VISITOR_OPTION.REMOVED;
                                } else if( m_isStringOrNumber( result ) ){
                                    // just replaced
                                } else if( m_isArray( result ) ){
                                    return htmljson.Traverser.VISITOR_OPTION.REMOVED;
                                // } else if( htmljson.DEFINE.DEBUG ){
                                    // onError( 'PROCESSING_INSTRUCTION Error! [' + JSON.stringify( currentJSONNode ) + ']' );
                                };
                            } else {
                                isStaticWebPage = false;
                            };
                        };
                        break;
                    case htmljson.NODE_TYPE.ELEMENT_NODE :
                    case htmljson.NODE_TYPE.ELEMENT_START_TAG :
                        if( m_isNumber( tagName ) ){
                            tagName   = arg1;
                            attrIndex = 2;
                        };
                        tagName = /** @type {string} */ (tagName);
                        attrs = currentJSONNode[ attrIndex ];
                        // attr
                        if( m_isAttributes( attrs ) ){
                            if( walkAttributes( /** @type {!HTMLJson} */ (currentJSONNode), attrIndex - 1, /** @type {!Attrs} */ (attrs) ) === 0 ){
                                currentJSONNode.splice( attrIndex, 1 );
                            };
                        };
                        isPreTag          = !!m_FAMILY_OF_PRE_ELEMENT[ tagName ];
                        // if( isPreTag && isTrimWhitespace ){
                            // pre タグの場合、最初と最後のテキストノードが空白文字のみなら削除, 最初のテキストノードの頭の改行文字を削除、最後のテキストノードの後ろの改行文字を削除
                            // 各行の改行の前の空白文字も削除
                        // };
                        isDescendantOfPre = isDescendantOfPre || isPreTag;
                        isTrimNewlines    = !!m_TRIM_NEWLINES_ELEMENTS[ tagName ];
                        break;
                    default :
                        if( htmljson.DEFINE.DEBUG ){
                            onError( 'Not html.json! [' + currentJSONNode + ']' );
                        };
                };

                statusStack.push( isDescendantOfPre, isTrimNewlines );
            },
            /**
             * 
             * @param {!HTMLJson | string | number} currentJSONNode 
             * @param {HTMLJson | null} parentJSONNode 
             * @param {number} myIndex
             * @param {number} depth
             * @return {number | void} VISITOR_OPTION.*
             */
            function( currentJSONNode, parentJSONNode, myIndex, depth ){
                if( depth * 2 + 2 < statusStack.length ){
                    statusStack.length = depth * 2 + 2;
                };

                switch( m_getNodeType( currentJSONNode ) ){
                    case htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER :
                    case htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER :
                        if( !keepEmptyCondCmt && currentJSONNode.length === 2 ){
                            /** @type {!HTMLJson} */ (parentJSONNode).splice( myIndex, 1 );
                            return htmljson.Traverser.VISITOR_OPTION.REMOVED;
                        };
                };
            }
        );

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
     * @param {!HTMLJson} currentJSONNode
     * @param {number} tagNameIndex
     * @param {!Attrs} attrs
     * @return {number} = attributes.length
     */
    function walkAttributes( currentJSONNode, tagNameIndex, attrs ){
        var numAttributes = 0, name, originalName, value, isInstruction;
        var classList, i, newClass;

        var tagName   = m_parseTagName( /** @type {string} */ (currentJSONNode[ tagNameIndex ]) );
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
                    isStaticWebPage = false;
                    ++numAttributes;
                    continue;
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
