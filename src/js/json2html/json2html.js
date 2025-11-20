goog.provide( 'json2html.main' );
goog.provide( 'json2html.createJSON2HTMLTransformer' );

goog.require( 'htmlparser.BOOLEAN_ATTRIBUTES' );
goog.require( 'htmlparser.isXMLRootElement' );
goog.require( 'htmlparser.isNamespacedTag' );
goog.require( 'htmlparser.RAW_TEXT_ELEMENTS' );
goog.require( 'htmlparser.ESCAPABLE_RAW_TEXT_ELEMENTS' );
goog.require( 'htmlparser.escapeHTML' );
goog.require( 'htmlparser.VOID_ELEMENTS' );
goog.require( 'htmlparser.DEFINE' );
goog.require( 'htmljson.base' );
goog.require( 'htmljson.NODE_TYPE' );
goog.require( 'htmljson.DEFINE.INSTRUCTION_ATTR_PREFIX' );
goog.require( 'VNode' );
goog.require( 'htmljson.Traverser.VISITOR_OPTION' );
goog.requireType( 'htmljson.Traverser.EnterHandler' );
goog.requireType( 'htmljson.Traverser.LeaveHandler' );
goog.requireType( 'ThroughLike' );
goog.requireType( 'Through' );
goog.require( 'htmljson.Traverser.traverseAllDescendantNodes' );

/**
 * @param {!HTMLJson} rootHTMLJson
 * @param {!InstructionHandler=} opt_onInstruction
 * @param {!EnterNodeHandler=} opt_onEnterNode
 * @param {!function((string | !Error))=} opt_onError
 * @param {!Object=} opt_options
 * @return {string | void} html string
 */
json2html.main = function( rootHTMLJson, opt_onInstruction, opt_onEnterNode, opt_onError, opt_options ){
    if( htmljson.DEFINE.DEBUG && !core.isArray( rootHTMLJson ) ){
        opt_onError && opt_onError( 'Invalid html.json document!' );
    };

    if( rootHTMLJson[ 0 ] !== htmljson.NODE_TYPE.DOCUMENT_NODE && rootHTMLJson[ 0 ] !== htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE ){
        rootHTMLJson = [ htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE, rootHTMLJson ];
    };

    /** @const */
    var html = [];
    var j = -1;

    json2html.createJSON2HTMLTransformer(
        false,
        /** @type {!ThroughLike} */ ({
            queue : function( chunk ){
                html[ ++j ] = chunk;
            }
        }),
        /**
         * @param {!htmljson.Traverser.EnterHandler} onEnterNode
         * @param {!htmljson.Traverser.LeaveHandler=} opt_onLeaveNode
         */
        function( onEnterNode, opt_onLeaveNode ){
            htmljson.Traverser.traverseAllDescendantNodes(
                rootHTMLJson,
                onEnterNode,
                opt_onLeaveNode
            );
        },
        opt_onInstruction, opt_onEnterNode, opt_onError, opt_options
    );
    return html.join( '' );
};

/**
 * (a) package
 * @param {boolean} isInStreaming
 * @param {!ThroughLike} transformer
 * @param {!function(!htmljson.Traverser.EnterHandler, !htmljson.Traverser.LeaveHandler)} traverserOrHTMLJsonParser
 * @param {!InstructionHandler=} opt_onInstruction
 * @param {!EnterNodeHandler=} opt_onEnterNode
 * @param {!function((string | !Error))=} opt_onError
 * @param {!Object=} opt_options
 */
json2html.createJSON2HTMLTransformer = function( isInStreaming, transformer, traverserOrHTMLJsonParser, opt_onInstruction, opt_onEnterNode, opt_onError, opt_options ){
    function appendOmittedEndTagBasedOnFollowingNode(){
        var htmlString = '';

        if( omittedEndTagBefore ){
            htmlString = '</' + omittedEndTagBefore + '>';
            omittedEndTagBefore = '';
        };
        return htmlString;
    };
    /**
     * @param {string} value 
     * @param {boolean} useSingleQuote 
     * @param {boolean} useQuoteAlways 
     * @return {string}
     */
    function quoteAttributeValue( value, useSingleQuote, useQuoteAlways ){
        var strValue          = value;
        var containDoubleQuot = strValue.match( '"' );
        var containSingleQuot = strValue.match( "'" );
        var _                 = useSingleQuote ? "'" : '"';

        if( containDoubleQuot && containSingleQuot ){
            if( useSingleQuote ){
                strValue = _ + strValue.split( "'" ).join( "\\'" ) + _; // " のエスケープ
            } else {
                strValue = _ + strValue.split( '"' ).join( '\\"' ) + _; // " のエスケープ
            };
        } else if( containDoubleQuot ){
            strValue = "'" + strValue + "'";
        } else if( containSingleQuot ){
            if( useSingleQuote ){
                strValue = _ + strValue.split( "'" ).join( "\\'" ) + _; // " のエスケープ
            } else {
                strValue = _ + strValue + _;
            };
        } else if( useQuoteAlways || strValue.match( /[^0-9a-z\.\-]/g ) || 72 < strValue.length ){
            // http://openlab.ring.gr.jp/k16/htmllint/explain.html#quote-attribute-value
            // 英数字、ピリオド "."、ハイフン "-" から成り(いずれも半角の)、72文字以内の文字列のときは引用符で囲む必要はありません
            strValue = _ + strValue + _;
        } else if( strValue === '' ){
            strValue = _ + _;
        };
        return strValue;
    };

    /** @const */
    var options        = opt_options || {};
    /** @const */
    var useQuoteAlways = options[ 'useQuoteAlways'        ] === true;
    /** @const */
    var useSingleQuote = options[ 'useSingleQuote'        ] === true;
    /** @const */
    var attrPrefix     = options[ 'instructionAttrPrefix' ] || htmljson.DEFINE.INSTRUCTION_ATTR_PREFIX;
    /** @const */
    var statusStack    = [ false, null, false, false, false, false ];

    var omittedEndTagBefore;

    traverserOrHTMLJsonParser(
        /**
         * @param {!HTMLJson | string | number} currentJSONNode 
         * @param {HTMLJson | null} parentJSONNode 
         * @param {number} myIndex
         * @param {number} depth
         * @param {boolean=} opt_hasUnknownChildren for json2html.stream
         * @param {!Through=} opt_instructionContext
         * @return {number | !HTMLJson | void} number:VISITOR_OPTION.*, HTMLJson は json2html.stream のみ
         */
        function( currentJSONNode, parentJSONNode, myIndex, depth, opt_hasUnknownChildren, opt_instructionContext ){
            function processTextNode( nodeValue ){
                chunk[ ++j ] = appendOmittedEndTagBasedOnFollowingNode() + ( escapeForHTMLDisabled ? nodeValue : htmlparser.escapeHTML( '' + nodeValue ) );
            };

            var chunk = [], j = -1;

            var isXHTMLOrXML          = statusStack[ depth * 6 + 0 ],
                parentVNode           = statusStack[ depth * 6 + 1 ],
                endTagRequired        = statusStack[ depth * 6 + 2 ],
                escapeForHTMLDisabled = statusStack[ depth * 6 + 3 ],
                hasChildren           = false, // = statusStack[ depth * 6 + 4 ];
                isXHTMLOrXMLOrVML     = false; // = statusStack[ depth * 6 + 5 ];

            if( core.isArray( currentJSONNode ) ){
                if( !isInStreaming ){
                    hasChildren = m_hasChildren( /** @type {!HTMLJson} */ (currentJSONNode) );
                } else {
                    hasChildren = opt_hasUnknownChildren;
                };
            };

            var currentVNode = opt_onEnterNode ? m_executeEnterNodeHandler( /** @type {!HTMLJson} */ (currentJSONNode), parentVNode, opt_onEnterNode ) : null,
                tagName      = currentJSONNode[ 0 ],
                arg1         = currentJSONNode[ 1 ],
                attrIndex    = 1,
                isNewNodeGeneratedByInstruction, result,
                isElementWithoutEndTag,
                id, className, attrs, name, value, isInstruction, isBoolAttr;

            // if( currentVNode && currentVNode._removed ){
                // return m_getHTMLStringAfter( currentVNode );
            // };

            switch( m_getNodeType( currentJSONNode ) ){
                case htmljson.NODE_TYPE.DOCUMENT_NODE :
                    if( htmlparser.DEFINE.USE_XHTML && m_isXHTMLDocument( arg1 ) ){
                        isXHTMLOrXML = endTagRequired = true;
                    };
                    chunk[ ++j ] = arg1;
                    break;
                case htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE :
                    break;
                case htmljson.NODE_TYPE.TEXT_NODE :
                    if( !core.isArray( currentJSONNode ) ){
                        arg1 = currentJSONNode;
                    };
                    processTextNode( arg1 );
                    break;
                case htmljson.NODE_TYPE.CDATA_SECTION :
                    chunk[ ++j ] = '<![CDATA[' + htmlparser.escapeHTML( '' + arg1 ) + ']]>';
                    break;
                case htmljson.NODE_TYPE.COMMENT_NODE :
                    chunk[ ++j ] = '<!--' + htmlparser.escapeHTML( '' + arg1 ) + '-->';
                    break;
                case htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER :
                    // 下の階層が隠れる条件付きコメント
                    chunk[ ++j ] = appendOmittedEndTagBasedOnFollowingNode() + '<!--[' + arg1 + ']>';
                    break;
                case htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER :
                    // 下の階層が隠れる条件付きコメント
                    chunk[ ++j ] = appendOmittedEndTagBasedOnFollowingNode() + '<!--{' + arg1 + '};';
                    break;
                case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START :
                    // 下の階層が見える条件付きコメント
                    chunk[ ++j ] = appendOmittedEndTagBasedOnFollowingNode() + '<!--[' + arg1 + ']><!-->';
                    break;
                case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_END :
                    chunk[ ++j ] = appendOmittedEndTagBasedOnFollowingNode() + '<!--<![endif]-->';
                    break;
                case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION :
                    if( opt_onInstruction ){
                        result = m_executeProcessingInstruction( opt_onInstruction, /** @type {!HTMLJson} */ (currentJSONNode), opt_onError, opt_instructionContext );
                        isNewNodeGeneratedByInstruction = core.isArray( result );

                        if( isNewNodeGeneratedByInstruction ){
                            if( isInStreaming ){
                                return /** @type {!HTMLJson} */ (result);
                            } else {
                                m_replaceProcessingInstructionWithHTMLJson( /** @type {!HTMLJson} */ (parentJSONNode), myIndex, /** @type {!HTMLJson} */ (result) );
                                return htmljson.Traverser.VISITOR_OPTION.REMOVED;
                            };
                        } else if( m_isStringOrNumber( result ) && result !== '' ){
                            processTextNode( result );
                        };
                    };
                    break;
                case htmljson.NODE_TYPE.ELEMENT_END_TAG :
                    chunk[ ++j ] = '</' + arg1 + '>';
                    break;
                case htmljson.NODE_TYPE.ELEMENT_START_TAG :
                    isElementWithoutEndTag = true;
                case htmljson.NODE_TYPE.ELEMENT_NODE :
                    if( core.isNumber( tagName ) ){
                        tagName   = arg1;
                        attrIndex = 2;
                    };

                    tagName   = m_parseTagName( /** @type {string} */ (tagName) );
                    id        = tagName[ 1 ];
                    className = tagName[ 2 ];
                    tagName   = tagName[ 0 ];
                    attrs     = currentJSONNode[ attrIndex ];

                    if( omittedEndTagBefore === 'p' && !m_P_END_TAG_LESS_TAGS[ tagName ] ){
                        chunk[ ++j ] = appendOmittedEndTagBasedOnFollowingNode();
                    } else {
                        omittedEndTagBefore = '';
                    };

                    // xml;
                    isXHTMLOrXML          = isXHTMLOrXML || htmljson.DEFINE.USE_XML_IN_HTML && htmlparser.isXMLRootElement( tagName );
                    isXHTMLOrXMLOrVML     = isXHTMLOrXML || htmljson.DEFINE.USE_XML_IN_HTML && htmlparser.isNamespacedTag( tagName );
                    endTagRequired        = endTagRequired || isXHTMLOrXMLOrVML || !!m_DESCENDANTS_MUST_HAVE_END_TAG[ tagName ];
                    escapeForHTMLDisabled = escapeForHTMLDisabled || ( htmlparser.RAW_TEXT_ELEMENTS[ tagName ] && !htmlparser.ESCAPABLE_RAW_TEXT_ELEMENTS[ tagName ] );

                    chunk[ ++j ] = '<' + tagName;
                    if( id ){
                        chunk[ ++j ] = ' id=' + quoteAttributeValue( /** @type {string} */ (id), useSingleQuote, isXHTMLOrXMLOrVML || useQuoteAlways );
                    };
                    if( className ){
                        chunk[ ++j ] = ' class=' + quoteAttributeValue( /** @type {string} */ (className), useSingleQuote, isXHTMLOrXMLOrVML || useQuoteAlways );
                    };
                    // attr
                    if( m_isAttributes( attrs ) ){
                        for( name in attrs ){
                            value = attrs[ name ];
                            isInstruction = m_isInstructionAttr( attrPrefix, name );
                            isInstruction && ( name = name.substr( attrPrefix.length ) );
                            name === 'className' && ( name = 'class' );

                            if( isInstruction ){
                                if( opt_onInstruction ){
                                    value = m_executeInstructionAttr( opt_onInstruction, name, /** @type {!InstructionArgs | string} */ (value), opt_onError, opt_instructionContext );
                                    if( isInStreaming ){
                                        if( opt_instructionContext && opt_instructionContext.stopped ){
                                            return;
                                        };
                                    };
                                };
                            };

                            if( value != null ){
                                isBoolAttr = htmlparser.BOOLEAN_ATTRIBUTES[ name ];

                                if( !isBoolAttr || value !== false ){
                                    chunk[ ++j ] = ' ' + name;

                                    if( !isBoolAttr && value !== true ){
                                        if( name === 'style' && core.isObject( value ) ){
                                            value = htmlparser.escapeHTML( m_toCSSTest( /** @type {!Styles} */ (value) ) );
                                            if( !value ) continue;
                                        } else {
                                            value = htmlparser.escapeHTML( '' + value );
                                        };
                                        chunk[ ++j ] = '=' + quoteAttributeValue( value, useSingleQuote, isXHTMLOrXMLOrVML || useQuoteAlways );
                                    };
                                };
                            };
                        };
                    };
                    // hasUnknownChildren
                    if( !isXHTMLOrXMLOrVML || hasChildren || isElementWithoutEndTag ){
                        chunk[ ++j ] = '>';
                    } else {
                        chunk[ ++j ] = ' />';
                    };
                    break;
            };

            statusStack[ depth * 6 +  6 ] = isXHTMLOrXML;
            statusStack[ depth * 6 +  7 ] = currentVNode;
            statusStack[ depth * 6 +  8 ] = endTagRequired;
            statusStack[ depth * 6 +  9 ] = escapeForHTMLDisabled;
            statusStack[ depth * 6 + 10 ] = hasChildren;
            statusStack[ depth * 6 + 11 ] = isXHTMLOrXMLOrVML;

            j !== -1 && transformer.queue( chunk.join( '' ) );
        },
        /**
         * @param {!HTMLJson | string | number} currentJSONNode 
         * @param {HTMLJson | null} parentJSONNode 
         * @param {number} myIndex
         * @param {number} depth
         * @param {boolean=} opt_isLastChild
         * @return {number | void} VISITOR_OPTION.*
         */
        function( currentJSONNode, parentJSONNode, myIndex, depth, opt_isLastChild ){ // opt_isLastChild
            function isLastChild(){
                return isInStreaming ? opt_isLastChild : myIndex === parentJSONNode.length - 1;
            };
            function pEndTagRequired(){
                return isLastChild() && !!m_LASTCHILD_P_MUST_HAVE_END_TAG[ m_getTagName( /** @type {!HTMLJson} */ (parentJSONNode) ) ];
            };

            var chunk = [], j = -1, tagName;

            var
             // isXHTMLOrXML          = statusStack[ depth * 6 +  6 ],
             // parentVNode           = statusStack[ depth * 6 +  7 ],
                endTagRequired        = statusStack[ depth * 6 +  8 ],
             // escapeForHTMLDisabled = statusStack[ depth * 6 +  8 ],
                hasChildren           = statusStack[ depth * 6 + 10 ],
                isXHTMLOrXMLOrVML     = statusStack[ depth * 6 + 11 ];

            if( depth * 6 + 6 < statusStack.length ){
                statusStack.length = depth * 6 + 6;
            };

            switch( m_getNodeType( currentJSONNode ) ){
                case htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER :
                    // 下の階層が隠れる条件付きコメント
                    chunk[ ++j ] = appendOmittedEndTagBasedOnFollowingNode() + '<![endif]-->';
                    break;
                case htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER :
                    // 下の階層が隠れる条件付きコメント
                    chunk[ ++j ] = appendOmittedEndTagBasedOnFollowingNode() + '-->';
                    break;
                case htmljson.NODE_TYPE.ELEMENT_START_TAG :
                    omittedEndTagBefore = '';
                    break;
                case htmljson.NODE_TYPE.ELEMENT_NODE :
                    tagName = m_getTagName( /** @type {!HTMLJson} */ (currentJSONNode) );

                    if( !hasChildren && ( isXHTMLOrXMLOrVML || htmlparser.VOID_ELEMENTS[ tagName ] ) ){
                        omittedEndTagBefore = '';
                    } else if( ( !isXHTMLOrXMLOrVML || hasChildren ) && ( endTagRequired || !m_OMITTABLE_END_TAGS[ tagName ] || ( tagName === 'p' && pEndTagRequired() ) ) ){
                        chunk[ ++j ] = '</' + tagName + '>';
                        omittedEndTagBefore = '';
                    } else {
                        omittedEndTagBefore = tagName;
                    };
                    break;
            };
            j !== -1 && transformer.queue( chunk.join( '' ) );

            if( depth === 0 ){
                /** @suppress {const|checkTypes} */
                transformer = null;
            };
        }
    );
    /** @suppress {checkTypes} */
    traverserOrHTMLJsonParser = null;
};
