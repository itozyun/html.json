goog.provide( 'json2html.main' );
goog.provide( 'json2html._main' );

goog.require( 'htmlparser.BOOLEAN_ATTRIBUTES' );
goog.require( 'htmlparser.isXMLRootElement' );
goog.require( 'htmlparser.isNamespacedTag' );
goog.require( 'htmljson.base' );
goog.require( 'htmljson.NODE_TYPE' );
goog.require( 'htmljson.DEFINE.INSTRUCTION_ATTR_PREFIX' );
goog.require( 'htmljson.DEFINE.USE_XHTML' );
goog.require( 'VNode' );
goog.require( 'htmljson.Traverser.VISITOR_OPTION' );
goog.requireType( 'htmljson.Traverser.EnterHandler' );
goog.requireType( 'htmljson.Traverser.LeaveHandler' );
goog.require( 'htmljson.Traverser.traverseAllDescendantNodes' );

// json2html.stream から json2html を呼ぶときに使用
var m_pEndTagRequired       = false;
var m_escapeForHTMLDisabled = false;
var m_isXMLDocument         = false;

/**
 * @param {!HTMLJson} rootHTMLJson
 * @param {!InstructionHandler=} opt_onInstruction
 * @param {!EnterNodeHandler=} opt_onEnterNode
 * @param {!function((string | !Error))=} opt_onError
 * @param {!Object=} opt_options
 * @return {string | void} html string
 */
json2html.main = function( rootHTMLJson, opt_onInstruction, opt_onEnterNode, opt_onError, opt_options ){
    if( htmljson.DEFINE.DEBUG && !m_isArray( rootHTMLJson ) ){
        opt_onError && opt_onError( 'Invalid html.json document!' );
    };

    if( rootHTMLJson[ 0 ] !== htmljson.NODE_TYPE.DOCUMENT_NODE && rootHTMLJson[ 0 ] !== htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE ){
        rootHTMLJson = [ htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE, rootHTMLJson ];
    };

    /** @const */
    var html = [];
    var j = -1;

    json2html._main(
        false,
        htmljson.Traverser.traverseAllDescendantNodes,
        {
            onChunk : function( chunk ){
                html[ ++j ] = chunk;
            }
        },
        rootHTMLJson,
        opt_onInstruction, opt_onEnterNode, opt_onError, opt_options
    );
    return html.join( '' );
};

/**
 * @package
 * @param {boolean} isInStreaming
 * @param {!function(!HTMLJson, !htmljson.Traverser.EnterHandler, !htmljson.Traverser.LeaveHandler):(boolean | void)} traverserOrStreamingHTMLJsonParser
 * @param {{onChunk : !function(string)}} json2htmlContext
 * @param {HTMLJson | null} rootHTMLJson
 * @param {!InstructionHandler=} opt_onInstruction
 * @param {!EnterNodeHandler=} opt_onEnterNode
 * @param {!function((string | !Error))=} opt_onError
 * @param {!Object=} opt_options
 */
json2html._main = function( isInStreaming, traverserOrStreamingHTMLJsonParser, json2htmlContext, rootHTMLJson, opt_onInstruction, opt_onEnterNode, opt_onError, opt_options ){
    function getHTMLTagName( tagName ){
        return tagName.toLowerCase(); // TODO upperCase
    };
    function appendOmittedEndTagBasedOnFollowingNode(){
        var htmlString = '';

        if( omittedEndTagBefore ){
            htmlString = '</' + getHTMLTagName( omittedEndTagBefore ) + '>';
            omittedEndTagBefore = '';
        };
        return htmlString;
    };

    /** @const */
    var onInstruction = opt_onInstruction || null;
    /** @const */
    var onEnterNode   = opt_onEnterNode || null;
    /** @const */
    var onError       = typeof opt_onError === 'function' ? opt_onError : function( error ){};
    /** @const */
    var options       = opt_options || {};
    /** @const */
    var quotAlways    = options[ 'quotAlways'            ] === true;
    /** @const */
    var useSingleQuot = options[ 'useSingleQuot'         ] === true;
    /** @const */
    var attrPrefix    = options[ 'instructionAttrPrefix' ] || htmljson.DEFINE.INSTRUCTION_ATTR_PREFIX;
    /** @const */
    var statusStack = [ m_isXMLDocument, null, m_pEndTagRequired || false, m_escapeForHTMLDisabled || false, false ];

    var omittedEndTagBefore;

    traverserOrStreamingHTMLJsonParser(
        rootHTMLJson,
        /**
         * 
         * @param {!HTMLJson | string | number} currentJSONNode 
         * @param {HTMLJson | null} parentJSONNode 
         * @param {number} myIndex
         * @param {number} depth
         * @param {boolean=} opt_hasUnknownChildren for json2html.stream
         * @return {number | void} VISITOR_OPTION.*
         */
        function( currentJSONNode, parentJSONNode, myIndex, depth, opt_hasUnknownChildren ){
            /**
             * @param {string} tagName 
             * @return {boolean} */
            function isXML( tagName ){
                if( isXmlInHTML ){
                    return true;
                } else if( htmlparser.isXMLRootElement( tagName ) ){
                    return true;
                };
                return htmlparser.isNamespacedTag( tagName ); // <v:vml>
            };
            /**
             * @param {!Attrs} attrs 
             * @return {string} 先頭に ' ' 付き */
            function walkAttributes( attrs ){
                var attrText = '',
                    name, value, isInstruction;
            
                for( name in attrs ){
                    value = attrs[ name ];
                    isInstruction = m_isInstructionAttr( attrPrefix, name );
                    isInstruction && ( name = name.substr( attrPrefix.length ) );
                    name === 'className' && ( name = 'class' );

                    if( isInstruction ){
                        if( onInstruction ){
                            value = m_executeInstructionAttr( true, onInstruction, name, /** @type {!InstructionArgs | string} */ (value), onError );
                        } else if( htmljson.DEFINE.DEBUG ){
                            onError( 'onInstruction is void!' );
                        };
                    };

                    if( value != null && ( !htmlparser.BOOLEAN_ATTRIBUTES[ name ] || value !== false ) ){
                        attrText += ' ' + name;

                        if( !htmlparser.BOOLEAN_ATTRIBUTES[ name ] && value !== true ){
                            if( name === 'style' && m_isObject( value ) ){
                                value = m_toCSSTest( /** @type {!Styles} */ (value) );
                                if( !value ) continue;
                            };
                            attrText += '=' + m_quoteAttributeValue( /** @type {!string | number | boolean} */ (value), useSingleQuot, isXmlInHTML || quotAlways );
                        };
                    };
                };
                return attrText;
            };

            var chunk = [], j = -1;
            var hasChildren = false;

            if( m_isArray( currentJSONNode ) ){
                if( !isInStreaming ){
                    hasChildren = 0 < currentJSONNode.length - m_getChildNodeStartIndex( /** @type {!HTMLJson} */ (currentJSONNode) );
                } else {
                    hasChildren = opt_hasUnknownChildren;
                };
            };

            var isXmlInHTML           = statusStack[ depth * 5 + 0 ],
                parentVNode           = statusStack[ depth * 5 + 1 ],
                pEndTagRequired       = statusStack[ depth * 5 + 2 ],
                escapeForHTMLDisabled = statusStack[ depth * 5 + 3 ];

            var currentVNode = onEnterNode ? m_executeEnterNodeHandler( /** @type {!HTMLJson} */ (currentJSONNode), parentVNode, onEnterNode ) : null,
                tagName      = currentJSONNode[ 0 ],
                arg1         = currentJSONNode[ 1 ],
                attrIndex    = 1,
                attrs, result, isElementWithoutEndTag, id, className;

            // if( currentVNode && currentVNode._removed ){
                // return m_getHTMLStringAfter( currentVNode );
            // };

            switch( m_getNodeType( currentJSONNode ) ){
                case htmljson.NODE_TYPE.DOCUMENT_NODE :
                    if( htmljson.DEFINE.USE_XHTML && m_isXML( arg1 ) ){
                        isXmlInHTML = true;
                    };
                    chunk[ ++j ] = arg1;
                    break;
                case htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE :
                    break;
                case htmljson.NODE_TYPE.TEXT_NODE :
                    if( !m_isArray( currentJSONNode ) ){
                        arg1 = currentJSONNode;
                    };
                    chunk[ ++j ] = appendOmittedEndTagBasedOnFollowingNode() + ( escapeForHTMLDisabled ? arg1 : m_escapeForHTML( '' + arg1 ) );
                    break;
                case htmljson.NODE_TYPE.CDATA_SECTION :
                    chunk[ ++j ] = '<![CDATA[' + m_escapeForHTML( '' + arg1 ) + ']]>';
                    break;
                case htmljson.NODE_TYPE.COMMENT_NODE :
                    chunk[ ++j ] = '<!--' + m_escapeForHTML( '' + arg1 ) + '-->';
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
                    chunk[ ++j ] = '<!--[' + arg1 + ']><!-->';
                    break;
                case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_END :
                    chunk[ ++j ] = '<!--<![endif]-->';
                    break;
                case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION :
                    if( onInstruction ){
                        result = m_executeProcessingInstruction( onInstruction, /** @type {!HTMLJson} */ (currentJSONNode), /** @type {!HTMLJson} */ (parentJSONNode), myIndex, onError );

                        if( result !== undefined ){
                            if( result === null || result === '' ){
                                // empty
                            } else if( m_isStringOrNumber( result ) ){
                                return htmljson.Traverser.VISITOR_OPTION.REMOVED;
                            } else if( m_isArray( result ) ){
                                return htmljson.Traverser.VISITOR_OPTION.REMOVED;
                            } else if( htmljson.DEFINE.DEBUG ){
                                onError( 'PROCESSING_INSTRUCTION Error! [' + JSON.stringify( currentJSONNode ) + '] result:' + JSON.stringify( result ) );
                            };
                        };
                    };
                    break;
                case htmljson.NODE_TYPE.ELEMENT_END_TAG :
                    chunk[ ++j ] = '</' + arg1 + '>';
                    break;
                case htmljson.NODE_TYPE.ELEMENT_START_TAG :
                    isElementWithoutEndTag = true;
                case htmljson.NODE_TYPE.ELEMENT_NODE :
                    if( m_isNumber( tagName ) ){
                        tagName   = arg1;
                        attrIndex = 2;
                    };

                    tagName   = m_parseTagName( /** @type {string} */ (tagName) );
                    id        = tagName[ 1 ];
                    className = tagName[ 2 ];
                    tagName   = tagName[ 0 ];
                    attrs     = currentJSONNode[ attrIndex ];

                    if( omittedEndTagBefore === 'P' && !m_P_END_TAG_LESS_TAGS[ tagName ] ){
                        chunk[ ++j ] = appendOmittedEndTagBasedOnFollowingNode();
                    } else {
                        omittedEndTagBefore = '';
                    };

                    // xml;
                    isXmlInHTML           = isXmlInHTML || isXML( tagName );
                    pEndTagRequired       = !!m_CHILD_P_MUST_HAVE_END_TAG[ tagName ]
                    escapeForHTMLDisabled = escapeForHTMLDisabled || !!m_UNESCAPED_ELEMENTS[ tagName ];

                    chunk[ ++j ] = '<' + ( isXmlInHTML ? tagName : getHTMLTagName( tagName ) );
                    if( id ){
                        chunk[ ++j ] = ' id=' + m_quoteAttributeValue( id, useSingleQuot, isXmlInHTML || quotAlways );
                    };
                    if( className ){
                        chunk[ ++j ] = ' class=' + m_quoteAttributeValue( className, useSingleQuot, isXmlInHTML || quotAlways );
                    };
                    // attr
                    if( m_isAttributes( attrs ) ){
                        chunk[ ++j ] = walkAttributes( /** @type {!Attrs} */ (attrs) );
                    };
                    // hasUnknownChildren
                    if( !isXmlInHTML || hasChildren || isElementWithoutEndTag ){
                        chunk[ ++j ] = '>';
                    } else {
                        chunk[ ++j ] = ' />';
                    };
                    break;
            };

            statusStack[ depth * 5 + 0 ] = isXmlInHTML;
            statusStack[ depth * 5 + 1 ] = currentVNode;
            statusStack[ depth * 5 + 2 ] = pEndTagRequired;
            statusStack[ depth * 5 + 3 ] = escapeForHTMLDisabled;
            statusStack[ depth * 5 + 4 ] = hasChildren;

            json2htmlContext.onChunk( chunk.join( '' ) );
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
            var chunk = [], j = -1;

            var isXmlInHTML           = statusStack[ depth * 5 + 0 ],
                // parentVNode           = statusStack[ depth * 5 + 1 ],
                pEndTagRequired       = statusStack[ depth * 5 + 2 ],
                // escapeForHTMLDisabled = statusStack[ depth * 5 + 3 ],
                hasChildren           = statusStack[ depth * 5 + 4 ],
                tagName               = currentJSONNode[ 0 ];

            if( depth * 5 + 5 < statusStack.length ){
                statusStack.length = depth * 5 + 5;
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
                    if( m_isNumber( tagName ) ){
                        tagName = currentJSONNode[ 1 ];
                    };
                    tagName = m_parseTagName( /** @type {string} */ (tagName) );
                    tagName = tagName[ 0 ];

                    if( !hasChildren && htmlparser.VOID_ELEMENTS[ tagName ] ){
                        omittedEndTagBefore = '';
                    } else if( ( !isXmlInHTML || hasChildren ) && ( !m_OMITTABLE_END_TAGS[ tagName ] || ( pEndTagRequired && tagName === 'P' ) ) ){
                        chunk[ ++j ] = '</' + ( isXmlInHTML ? tagName : getHTMLTagName( tagName ) ) + '>';
                        omittedEndTagBefore = '';
                    } else {
                        omittedEndTagBefore = tagName;
                    };
                    break;
            };
            json2htmlContext.onChunk( chunk.join( '' ) );
        }
    );
};
