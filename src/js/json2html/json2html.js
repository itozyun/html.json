goog.provide( 'json2html' );

goog.require( 'htmljson.base' );
goog.require( 'htmljson.NODE_TYPE' );
goog.require( 'htmljson.DEFINE.INSTRUCTION_ATTR_PREFIX' );
goog.require( 'htmljson.DEFINE.USE_XHTML' );

/**
 * @param {!Array} json
 * @param {!function(string, ...*):(!Array|string|number|boolean|null|void)} onInstruction
 * @param {!function(string)|!Object=} opt_onError
 * @param {!Object=} opt_options
 * @return {string | void} html string
 */
var json2html = function( json, onInstruction, opt_onError, opt_options ){
    /** @const {number} */
    var REMOVED = -1;

    var errorHandler = typeof opt_onError === 'function' ? opt_onError : function( error ){};

    var options       = opt_onError && typeof opt_onError === 'object' ? opt_onError : opt_options || {},
        quotAlways    = !!options[ 'quotAlways' ],
        useSingleQuot = !!options[ 'useSingleQuot' ],
        attrPrefix    = options[ 'instructionAttrPrefix' ] || htmljson.DEFINE.INSTRUCTION_ATTR_PREFIX;

    var omittedEndTagBefore, isXmlInHTML = m_isXMLDocument;

    if( m_isArray( json ) ){
        if( m_getNodeType( json ) === htmljson.NODE_TYPE.PROCESSING_INSTRUCTION ){
            json = [ htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE, json ];
        };
        return /** @type {string} */ (walkNode( json, null, 0, m_endTagRequired || false, m_escapeForHTMLDisabled || false ));
    } else if( htmljson.DEFINE.DEBUG ){
        errorHandler( 'Invalid html.json document!' );
    };

    /**
     * 
     * @param {!Array} currentJSONNode 
     * @param {!Array|null} parentJSONNode 
     * @param {number} myIndex 
     * @param {boolean} endTagRequired 
     * @param {boolean} escapeForHTMLDisabled 
     * @return {string|number} html string
     */
    function walkNode( currentJSONNode, parentJSONNode, myIndex, endTagRequired, escapeForHTMLDisabled ){
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
                htmlString = '<!DOCTYPE ' + arg1 + '>' + walkChildNodes( currentJSONNode, endTagRequired, escapeForHTMLDisabled );
                break;
            case htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE :
                htmlString = walkChildNodes( currentJSONNode, endTagRequired, escapeForHTMLDisabled );
                break;
            case htmljson.NODE_TYPE.TEXT_NODE :
                appendOmittedEndTagBasedOnFollowingNode();
                htmlString += escapeForHTMLDisabled ? arg1 : m_escapeForHTML( '' + arg1 );
                break;
            case htmljson.NODE_TYPE.CDATA_SECTION :
                if( m_isString( arg1 ) ){
                    htmlString = '<![CDATA[' + arg1 + ']]>';
                } else if( htmljson.DEFINE.DEBUG ){
                    errorHandler( 'CDATA_SECTION Error! [' + currentJSONNode + ']' );
                };
                break;
            case htmljson.NODE_TYPE.COMMENT_NODE :
                if( m_isString( arg1 ) ){
                    htmlString = '<!--' + arg1 + '-->';
                } else if( htmljson.DEFINE.DEBUG ){
                    errorHandler( 'COMMENT_NODE Error! [' + currentJSONNode + ']' );
                };
                break;
            case htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER :
                // 下の階層が隠れる条件付きコメント
                appendOmittedEndTagBasedOnFollowingNode();
                if( m_isString( arg1 ) ){
                    htmlString = '<!--[' + arg1 + ']>';
                } else if( htmljson.DEFINE.DEBUG ){
                    errorHandler( 'COND_CMT_HIDE_LOWER Error! [' + currentJSONNode + ']' );
                };
                htmlString += walkChildNodes( currentJSONNode, true, escapeForHTMLDisabled ) + '<![endif]-->';
                break;
            case htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER :
                // 下の階層が隠れる条件付きコメント
                appendOmittedEndTagBasedOnFollowingNode();
                if( m_isString( arg1 ) ){
                    htmlString = '<!--{' + arg1 + '};';
                } else if( htmljson.DEFINE.DEBUG ){
                    errorHandler( 'NETSCAPE4_COND_CMT_HIDE_LOWER Error! [' + currentJSONNode + ']' );
                };
                htmlString += walkChildNodes( currentJSONNode, true, escapeForHTMLDisabled ) + '-->';
                break;
            case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START :
                // 下の階層が見える条件付きコメント
                if( m_isString( arg1 ) ){
                    htmlString = '<!--[' + arg1 + ']><!-->';
                } else if( htmljson.DEFINE.DEBUG ){
                    errorHandler( 'COND_CMT_SHOW_LOWER_START Error! [' + currentJSONNode + ']' );
                };
                break;
            case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_END :
                htmlString = '<!--<![endif]-->';
                break;
            case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION :
                result = m_executeProcessingInstruction( onInstruction, currentJSONNode, parentJSONNode, myIndex, errorHandler );

                if( result !== undefined ){
                    if( result === null || result === '' ){
                        // empty
                    } else if( m_isStringOrNumber( result ) ){
                        return REMOVED;
                    } else if( m_isArray( result ) ){
                        return REMOVED;
                    // } else if( htmljson.DEFINE.DEBUG ){
                        // errorHandler( 'PROCESSING_INSTRUCTION Error! [' + JSON.stringify( currentJSONNode ) + ']' );
                    };
                };
                break;
            case htmljson.NODE_TYPE.ELEMENT_END_TAG :
                if( m_isString( arg1 ) ){
                    htmlString = '</' + arg1 + '>';
                } else if( htmljson.DEFINE.DEBUG ){
                    errorHandler( 'ELEMENT_END_TAG Error! [' + currentJSONNode + ']' );
                };
                break;
            case htmljson.NODE_TYPE.ELEMENT_START_TAG :
                isElementWithoutEndTag = true;
            case htmljson.NODE_TYPE.ELEMENT_NODE :
                tagName   = currentJSONNode[ 1 ];
                attrIndex = 2;
            default :
                if( m_isString( tagName ) ){
                    tagName   = m_parseTagName( tagName );
                    id        = tagName[ 1 ];
                    className = tagName[ 2 ];
                    tagName   = tagName[ 0 ];
                    if( omittedEndTagBefore === 'p' && !m_P_END_TAG_LESS_TAGS[ tagName ] ){
                        htmlString = '</p>'
                    };
                    omittedEndTagBefore = '';

                    htmlString += '<' + tagName;

                    if( id ){
                        htmlString += ' id=' + m_quoteAttributeValue( id, useSingleQuot, quotAlways );
                    };
                    if( className ){
                        htmlString += ' class=' + m_quoteAttributeValue( className, useSingleQuot, quotAlways );;
                    };

                    // xml;
                    if( !isXmlInHTML ){
                        isXMLRoot = isXmlInHTML = isXML( tagName );
                    };

                    attrs = currentJSONNode[ attrIndex ];
                    // attr
                    if( m_isAttributes( attrs ) ){
                        htmlString += ' ' + walkAttributes( attrs );
                    };
                    // childNodes
                    childNodesContents = walkChildNodes( currentJSONNode, endTagRequired || m_DESCENDANTS_MUST_HAVE_END_TAGS[ tagName ], escapeForHTMLDisabled || m_UNESCAPED_TAGS[ tagName ] );

                    if( childNodesContents ){
                        htmlString += '>' + childNodesContents;
                    } else if( isElementWithoutEndTag ){
                        htmlString += '>';
                    } else {
                        htmlString += isXmlInHTML ? '/>' : '>';
                    };

                    if( isElementWithoutEndTag ){
                        omittedEndTagBefore = '';
                    } else if( ( !isXmlInHTML || childNodesContents ) && ( !m_OMITTABLE_END_TAGS[ tagName ] || endTagRequired ) ){
                        htmlString += '</' + tagName + '>';
                        omittedEndTagBefore = '';
                    } else {
                        omittedEndTagBefore = m_NO_CHILD_ELEMENTS[ tagName ] ? '' : tagName;
                    };

                    if( isXMLRoot ){
                        isXmlInHTML = false;
                    };
                } else if( htmljson.DEFINE.DEBUG ){
                    errorHandler( 'Not html.json! [' + currentJSONNode + ']' );
                };
                break;
        };

        function appendOmittedEndTagBasedOnFollowingNode(){
            if( omittedEndTagBefore ){
                htmlString += '</' + omittedEndTagBefore + '>';
                omittedEndTagBefore = '';
            };
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
        } else if( m_TAGNAME_TO_NAMESPACE[ tagName ] ){
            return true;
        };
        return m_isNamespacedTag( tagName ); // v: vml
    };

    /**
     * 
     * @param {!Array} currentJSONNode 
     * @param {boolean} endTagRequired 
     * @param {boolean} escapeForHTMLDisabled 
     * @return {string}
     */
    function walkChildNodes( currentJSONNode, endTagRequired, escapeForHTMLDisabled ){
        var htmlString = '',
            i = m_getChildNodeStartIndex( currentJSONNode ),
            childNode, htmlPartString;

        for( ; i < currentJSONNode.length; ++i ){ // PROCESSING_INSTRUCTION で配列の長さが変化する
            childNode = currentJSONNode[ i ];

            if( m_isStringOrNumber( childNode ) ){
                htmlString += walkNode( [ htmljson.NODE_TYPE.TEXT_NODE, childNode ], null, 0, endTagRequired, escapeForHTMLDisabled );
            } else if( m_isArray( childNode ) ){
                htmlPartString = walkNode( childNode, currentJSONNode, i, endTagRequired, escapeForHTMLDisabled );
                if( htmlPartString === REMOVED ){
                    --i;
                } else {
                    htmlString += htmlPartString;
                };
            } else if( htmljson.DEFINE.DEBUG ){
                errorHandler( 'Invalid html.json! [' + childNode + ']' );
            };
        };
        return htmlString;
    };

    /**
     * 
     * @param {!Object} attrs 
     * @return {string}
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
                value = m_executeInstructionAttr( true, onInstruction, name, value, errorHandler );
            };

            if( value != null && ( !m_ATTRS_NO_VALUE[ name ] || value !== false ) ){
                attrText += ' ' + name;

                if( !m_ATTRS_NO_VALUE[ name ] ){
                    if( name === 'style' && m_isObject( value ) ){
                        value = toCSSTest( value );
                        if( !value ) continue;
                    };
                    attrText += '=' + m_quoteAttributeValue( value, useSingleQuot, quotAlways );
                };
            };
        };
        return attrText.substr( 1 );
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
