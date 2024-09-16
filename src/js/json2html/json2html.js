goog.provide( 'json2html' );

goog.requireType( 'VNode' );
goog.require( 'htmlparser.BOOLEAN_ATTRIBUTES' );
goog.require( 'htmlparser.XML_ROOT_ELEMENTS' );
goog.require( 'htmljson.base' );
goog.require( 'htmljson.NODE_TYPE' );
goog.require( 'htmljson.DEFINE.INSTRUCTION_ATTR_PREFIX' );
goog.require( 'htmljson.DEFINE.USE_XHTML' );

/**
 * @param {!Array} json
 * @param {!InstructionHandler=} opt_onInstruction
 * @param {!function(!VNode) | !Object.<(string | number), function(!VNode)>=} opt_onEnterNode
 * @param {!function(string) | !Object=} opt_onError
 * @param {!Object=} opt_options
 * @return {string | void} html string
 */
var json2html = function( json, opt_onInstruction, opt_onEnterNode, opt_onError, opt_options ){
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

    if( m_isArray( json ) ){
        if( m_getNodeType( json ) === htmljson.NODE_TYPE.PROCESSING_INSTRUCTION ){
            json = [ htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE, json ];
        };
        return /** @type {string} */ (walkNode( json, null, 0, m_pEndTagRequired || false, m_escapeForHTMLDisabled || false ));
    } else if( htmljson.DEFINE.DEBUG ){
        onError( 'Invalid html.json document!' );
    };

    /**
     * 
     * @param {!Array} currentJSONNode 
     * @param {!Array|null} parentJSONNode 
     * @param {number} myIndex 
     * @param {boolean} pEndTagRequired 
     * @param {boolean} escapeForHTMLDisabled 
     * @return {string | number} html string
     */
    function walkNode( currentJSONNode, parentJSONNode, myIndex, pEndTagRequired, escapeForHTMLDisabled ){
        function appendOmittedEndTagBasedOnFollowingNode(){
            var htmlString = '';

            if( omittedEndTagBefore ){
                htmlString = '</' + omittedEndTagBefore + '>';
                omittedEndTagBefore = '';
            };
            return htmlString;
        };

        var htmlString = '',
            arg0 = currentJSONNode[ 0 ],
            arg1 = currentJSONNode[ 1 ],
            attrIndex = 1, isElementWithoutEndTag, tagName = arg0, attrs,
            result,
            id, className, childNodesContents, isXMLRoot;

        switch( arg0 ){
            case htmljson.NODE_TYPE.DOCUMENT_NODE :
                if( htmljson.DEFINE.USE_XHTML && m_isXML( arg1 ) ){
                    isXmlInHTML = true;
                };
                htmlString = '<!DOCTYPE ' + arg1 + '>' + walkChildNodes( currentJSONNode, false, escapeForHTMLDisabled );
                break;
            case htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE :
                htmlString = walkChildNodes( currentJSONNode, pEndTagRequired, escapeForHTMLDisabled );
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
                htmlString = appendOmittedEndTagBasedOnFollowingNode() + '<!--[' + arg1 + ']>' + walkChildNodes( currentJSONNode, true, escapeForHTMLDisabled ) + '<![endif]-->';
                break;
            case htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER :
                // 下の階層が隠れる条件付きコメント
                if( htmljson.DEFINE.DEBUG && !m_isString( arg1 ) ){
                    onError( 'NETSCAPE4_COND_CMT_HIDE_LOWER Error! [' + currentJSONNode + ']' );
                };
                htmlString = appendOmittedEndTagBasedOnFollowingNode() + '<!--{' + arg1 + '};' + walkChildNodes( currentJSONNode, true, escapeForHTMLDisabled ) + '-->';
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

                tagName   = m_parseTagName( tagName );
                id        = tagName[ 1 ];
                className = tagName[ 2 ];
                tagName   = tagName[ 0 ];
                attrs     = currentJSONNode[ attrIndex ];

                if( omittedEndTagBefore === 'P' && !m_P_END_TAG_LESS_TAGS[ tagName ] ){
                    htmlString = appendOmittedEndTagBasedOnFollowingNode();
                } else {
                    omittedEndTagBefore = '';
                };

                htmlString += '<' + tagName;

                if( id ){
                    htmlString += ' id=' + m_quoteAttributeValue( id, useSingleQuot, isXmlInHTML || quotAlways );
                };
                if( className ){
                    htmlString += ' class=' + m_quoteAttributeValue( className, useSingleQuot, isXmlInHTML || quotAlways );;
                };

                // xml;
                if( !isXmlInHTML ){
                    isXMLRoot = isXmlInHTML = isXML( tagName );
                };

                // attr
                if( m_isAttributes( attrs ) ){
                    htmlString += walkAttributes( attrs );
                };
                // childNodes
                childNodesContents = walkChildNodes( currentJSONNode, m_CHILD_P_MUST_HAVE_END_TAG[ tagName ], escapeForHTMLDisabled || m_UNESCAPED_ELEMENTS[ tagName ] );

                if( childNodesContents ){
                    htmlString += '>' + childNodesContents;
                } else if( isElementWithoutEndTag ){
                    htmlString += '>';
                } else {
                    htmlString += isXmlInHTML ? ' />' : '>';
                };

                if( isElementWithoutEndTag ){
                    omittedEndTagBefore = '';
                } else if( ( !isXmlInHTML || childNodesContents ) && ( !m_OMITTABLE_END_TAGS[ tagName ] || ( pEndTagRequired && tagName === 'P' ) ) ){
                    htmlString += '</' + tagName + '>';
                    omittedEndTagBefore = '';
                } else {
                    omittedEndTagBefore = htmlparser.VOID_ELEMENTS[ tagName ] ? '' : tagName;
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
        } else if( htmlparser.XML_ROOT_ELEMENTS[ tagName ] ){
            return true;
        };
        return m_isNamespacedTag( tagName ); // v: vml
    };

    /**
     * 
     * @param {!Array} currentJSONNode 
     * @param {boolean} pEndTagRequired 
     * @param {boolean} escapeForHTMLDisabled 
     * @return {string}
     */
    function walkChildNodes( currentJSONNode, pEndTagRequired, escapeForHTMLDisabled ){
        var htmlString = [],
            i = m_getChildNodeStartIndex( currentJSONNode ),
            j = -1,
            childNode, htmlPartString;

        for( ; i < currentJSONNode.length; ++i ){ // PROCESSING_INSTRUCTION で配列の長さが変化する
            childNode = currentJSONNode[ i ];

            if( m_isStringOrNumber( childNode ) ){
                htmlString[ ++j ] = walkNode( [ htmljson.NODE_TYPE.TEXT_NODE, childNode ], currentJSONNode, i, false, escapeForHTMLDisabled );
            } else if( m_isArray( childNode ) ){
                htmlPartString = walkNode( childNode, currentJSONNode, i, pEndTagRequired, escapeForHTMLDisabled );
                if( htmlPartString === REMOVED ){
                    --i;
                } else {
                    htmlString[ ++j ] = htmlPartString;
                };
            } else if( htmljson.DEFINE.DEBUG ){
                onError( 'Invalid html.json! [' + childNode + ']' );
            };
        };
        return htmlString.join( '' );
    };

    /**
     * 
     * @param {!Object} attrs 
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
                    value = m_executeInstructionAttr( true, onInstruction, name, value, onError );
                } else {
                    onError( 'onInstruction is void!' );
                };
            };

            if( value != null && ( !htmlparser.BOOLEAN_ATTRIBUTES[ name ] || value !== false ) ){
                attrText += ' ' + name;

                if( !htmlparser.BOOLEAN_ATTRIBUTES[ name ] ){
                    if( name === 'style' && m_isObject( value ) ){
                        value = toCSSTest( value );
                        if( !value ) continue;
                    };
                    attrText += '=' + m_quoteAttributeValue( value, useSingleQuot, isXmlInHTML || quotAlways );
                };
            };
        };
        return attrText;
    };

    /**
     * @param {!Object} styles 
     * @return {string}
     */
    function toCSSTest( styles ){
        var cssText = '',
            name, value;
    
        for( name in styles ){
            value = styles[ name ];
            value === '0px' && ( value = 0 );
            cssText += ';' + m_toSnakeCase( name ) + ':' + m_escapeForHTML( '' + value );
        };
        return cssText.substr( 1 );
    };
};
