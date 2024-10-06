goog.provide( 'json2html' );

goog.require( 'htmlparser.BOOLEAN_ATTRIBUTES' );
goog.require( 'htmlparser.isXMLRootElement' );
goog.require( 'htmlparser.isNamespacedTag' );
goog.require( 'htmljson.base' );
goog.require( 'htmljson.NODE_TYPE' );
goog.require( 'htmljson.DEFINE.INSTRUCTION_ATTR_PREFIX' );
goog.require( 'htmljson.DEFINE.USE_XHTML' );
goog.require( 'VNode' );

/**
 * @param {!HTMLJson} rootHTMLJson
 * @param {!InstructionHandler=} opt_onInstruction
 * @param {!EnterNodeHandler=} opt_onEnterNode
 * @param {!function((string | !Error))=} opt_onError
 * @param {!Object=} opt_options
 * @return {string | void} html string
 */
var json2html = function( rootHTMLJson, opt_onInstruction, opt_onEnterNode, opt_onError, opt_options ){
    /** @const {number} */
    var REMOVED = -1;

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

    var omittedEndTagBefore, isXmlInHTML = m_isXMLDocument;

    if( m_isArray( rootHTMLJson ) ){
        if( m_getNodeType( rootHTMLJson ) === htmljson.NODE_TYPE.PROCESSING_INSTRUCTION ){
            rootHTMLJson = [ htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE, rootHTMLJson ];
        };
        return /** @type {string} */ (walkNode( rootHTMLJson, null, null, 0, m_pEndTagRequired || false, m_escapeForHTMLDisabled || false ));
    } else if( htmljson.DEFINE.DEBUG ){
        onError( 'Invalid html.json document!' );
    };

    /**
     * 
     * @param {!HTMLJson} currentJSONNode 
     * @param {HTMLJson | null} parentJSONNode
     * @param {VNode | null} parentVNode
     * @param {number} myIndex 
     * @param {boolean} pEndTagRequired 
     * @param {boolean} escapeForHTMLDisabled 
     * @return {string | number} html string
     */
    function walkNode( currentJSONNode, parentJSONNode, parentVNode, myIndex, pEndTagRequired, escapeForHTMLDisabled ){
        function appendOmittedEndTagBasedOnFollowingNode(){
            var htmlString = '';

            if( omittedEndTagBefore ){
                htmlString = '</' + ( isXmlInHTML ? omittedEndTagBefore : omittedEndTagBefore.toLowerCase() ) + '>';
                omittedEndTagBefore = '';
            };
            return htmlString;
        };

        var currentVNode = onEnterNode ? m_executeEnterNodeHandler( currentJSONNode, parentVNode, onEnterNode ) : null,
            htmlString = /* currentVNode ? m_getHTMLStringBefore( currentVNode ) : */ '',
            arg0 = currentJSONNode[ 0 ],
            arg1 = currentJSONNode[ 1 ],
            attrIndex = 1, isElementWithoutEndTag, tagName = arg0, attrs,
            result,
            id, className, childNodesContents, isXMLRoot;

        if( currentVNode && currentVNode._removed ){
            // return m_getHTMLStringAfter( currentVNode );
        };

        switch( arg0 ){
            case htmljson.NODE_TYPE.DOCUMENT_NODE :
                if( htmljson.DEFINE.USE_XHTML && m_isXML( arg1 ) ){
                    isXmlInHTML = true;
                };
                htmlString = arg1 + walkChildNodes( currentJSONNode, currentVNode, false, escapeForHTMLDisabled );
                break;
            case htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE :
                htmlString = walkChildNodes( currentJSONNode, currentVNode, pEndTagRequired, escapeForHTMLDisabled );
                break;
            case htmljson.NODE_TYPE.TEXT_NODE :
                htmlString = appendOmittedEndTagBasedOnFollowingNode() + ( escapeForHTMLDisabled ? arg1 : m_escapeForHTML( '' + arg1 ) );
                break;
            case htmljson.NODE_TYPE.CDATA_SECTION :
                if( htmljson.DEFINE.DEBUG && !m_isString( arg1 ) ){
                    onError( 'CDATA_SECTION Error! [' + currentJSONNode + ']' );
                };
                htmlString = '<![CDATA[' + arg1 + ']]>';
                break;
            case htmljson.NODE_TYPE.COMMENT_NODE :
                if( htmljson.DEFINE.DEBUG && !m_isString( arg1 ) ){
                    onError( 'COMMENT_NODE Error! [' + currentJSONNode + ']' );
                };
                htmlString = '<!--' + arg1 + '-->';
                break;
            case htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER :
                // 下の階層が隠れる条件付きコメント
                if( htmljson.DEFINE.DEBUG && !m_isString( arg1 ) ){
                    onError( 'COND_CMT_HIDE_LOWER Error! [' + currentJSONNode + ']' );
                };
                htmlString = appendOmittedEndTagBasedOnFollowingNode() + '<!--[' + arg1 + ']>' + walkChildNodes( currentJSONNode, currentVNode, true, escapeForHTMLDisabled ) + '<![endif]-->';
                break;
            case htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER :
                // 下の階層が隠れる条件付きコメント
                if( htmljson.DEFINE.DEBUG && !m_isString( arg1 ) ){
                    onError( 'NETSCAPE4_COND_CMT_HIDE_LOWER Error! [' + currentJSONNode + ']' );
                };
                htmlString = appendOmittedEndTagBasedOnFollowingNode() + '<!--{' + arg1 + '};' + walkChildNodes( currentJSONNode, currentVNode, true, escapeForHTMLDisabled ) + '-->';
                break;
            case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START :
                // 下の階層が見える条件付きコメント
                if( htmljson.DEFINE.DEBUG && !m_isString( arg1 ) ){
                    onError( 'COND_CMT_SHOW_LOWER_START Error! [' + currentJSONNode + ']' );
                };
                htmlString = '<!--[' + arg1 + ']><!-->';
                break;
            case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_END :
                htmlString = '<!--<![endif]-->';
                break;
            case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION :
                if( onInstruction ){
                    result = m_executeProcessingInstruction( onInstruction, currentJSONNode, parentJSONNode, myIndex, onError );

                    if( result !== undefined ){
                        if( result === null || result === '' ){
                            // empty
                        } else if( m_isStringOrNumber( result ) ){
                            return REMOVED;
                        } else if( m_isArray( result ) ){
                            return REMOVED;
                        } else if( htmljson.DEFINE.DEBUG ){
                            onError( 'PROCESSING_INSTRUCTION Error! [' + JSON.stringify( currentJSONNode ) + '] result:' + JSON.stringify( result ) );
                        };
                    };
                } else {
                    onError( 'onInstruction is void!' );
                };
                break;
            case htmljson.NODE_TYPE.ELEMENT_END_TAG :
                if( htmljson.DEFINE.DEBUG && !m_isString( arg1 ) ){
                    onError( 'ELEMENT_END_TAG Error! [' + currentJSONNode + ']' );
                };
                htmlString = '</' + arg1 + '>';
                break;
            case htmljson.NODE_TYPE.ELEMENT_START_TAG :
                isElementWithoutEndTag = true;
            case htmljson.NODE_TYPE.ELEMENT_NODE :
                tagName   = currentJSONNode[ 1 ];
                attrIndex = 2;
            default :
                if( htmljson.DEFINE.DEBUG && !m_isString( tagName ) ){
                    onError( 'Not html.json! [' + currentJSONNode + ']' );
                };

                tagName   = m_parseTagName( /** @type {string} */ (tagName) );
                id        = tagName[ 1 ];
                className = tagName[ 2 ];
                tagName   = tagName[ 0 ];
                attrs     = currentJSONNode[ attrIndex ];

                if( omittedEndTagBefore === 'P' && !m_P_END_TAG_LESS_TAGS[ tagName ] ){
                    htmlString = appendOmittedEndTagBasedOnFollowingNode();
                } else {
                    omittedEndTagBefore = '';
                };

                // xml;
                if( !isXmlInHTML ){
                    isXMLRoot = isXmlInHTML = isXML( tagName );
                };

                htmlString += '<' + ( isXmlInHTML ? tagName : tagName.toLowerCase() );

                if( id ){
                    htmlString += ' id=' + m_quoteAttributeValue( id, useSingleQuot, isXmlInHTML || quotAlways );
                };
                if( className ){
                    htmlString += ' class=' + m_quoteAttributeValue( className, useSingleQuot, isXmlInHTML || quotAlways );;
                };

                // attr
                if( m_isAttributes( attrs ) ){
                    htmlString += walkAttributes( /** @type {!Attrs} */ (attrs) );
                };
                // childNodes
                childNodesContents = walkChildNodes( currentJSONNode, currentVNode, m_CHILD_P_MUST_HAVE_END_TAG[ tagName ], escapeForHTMLDisabled || m_UNESCAPED_ELEMENTS[ tagName ] );

                if( childNodesContents ){
                    htmlString += '>' + childNodesContents;
                } else if( isElementWithoutEndTag ){
                    htmlString += '>';
                } else {
                    htmlString += isXmlInHTML ? ' />' : '>';
                };

                if( isElementWithoutEndTag ){
                    omittedEndTagBefore = '';
                } if( !childNodesContents && htmlparser.VOID_ELEMENTS[ tagName ] ){
                    omittedEndTagBefore = '';
                } else if( ( !isXmlInHTML || childNodesContents ) && ( !m_OMITTABLE_END_TAGS[ tagName ] || ( pEndTagRequired && tagName === 'P' ) ) ){
                    htmlString += '</' + ( isXmlInHTML ? tagName : tagName.toLowerCase() ) + '>';
                    omittedEndTagBefore = '';
                } else {
                    omittedEndTagBefore = tagName;
                };

                if( isXMLRoot ){
                    isXmlInHTML = false;
                };
                break;
        };

        return htmlString;
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
        return htmlparser.isNamespacedTag( tagName ); // v: vml
    };

    /**
     * 
     * @param {!HTMLJson} currentJSONNode
     * @param {VNode | null} currentVNode
     * @param {boolean} pEndTagRequired 
     * @param {boolean} escapeForHTMLDisabled 
     * @return {string}
     */
    function walkChildNodes( currentJSONNode, currentVNode, pEndTagRequired, escapeForHTMLDisabled ){
        var htmlString = [],
            i = m_getChildNodeStartIndex( currentJSONNode ),
            j = -1,
            childNode, htmlPartString;

        for( ; i < currentJSONNode.length; ++i ){ // PROCESSING_INSTRUCTION で配列の長さが変化する
            childNode = currentJSONNode[ i ];

            if( m_isStringOrNumber( childNode ) ){
                htmlString[ ++j ] = walkNode( [ htmljson.NODE_TYPE.TEXT_NODE, childNode ], currentJSONNode, currentVNode, i, false, escapeForHTMLDisabled );
            } else if( m_isArray( childNode ) ){
                htmlPartString = walkNode( /** @type {!HTMLJson} */ (childNode), currentJSONNode, currentVNode, i, pEndTagRequired, escapeForHTMLDisabled );
                if( htmlPartString === REMOVED ){
                    --i;
                } else {
                    htmlString[ ++j ] = htmlPartString;
                };
            } else if( htmljson.DEFINE.DEBUG ){
                onError( 'Invalid html.json! [' + childNode + ']' );
            };
        };
        return htmlString.join( '' ); // + m_getHTMLStringAfter( currentVNode );
    };

    /**
     * 
     * @param {!Attrs} attrs 
     * @return {string} 先頭に ' ' 付き
     */
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
                } else {
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
};
