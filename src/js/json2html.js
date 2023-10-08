/**
 * @param {!Array} json
 * @param {!function(string, ...*):(!Array|string|number|null|void)} onInstruction
 * @param {!function(string)|!Object=} opt_onError
 * @param {!Object=} opt_options
 * @return {string|void} html string
 */
p_json2html = function( json, onInstruction, opt_onError, opt_options ){
    /** @const {number} */
    var REMOVED = -1;

    var errorHandler = typeof opt_onError === 'function' ? opt_onError : function( error ){};

    var options       = opt_onError && typeof opt_onError === 'object' ? opt_onError : opt_options || {},
        quotAlways    = !!options[ 'quotAlways' ],
        useSingleQuot = !!options[ 'useSingleQuot' ],
        attrPrefix    = options[ 'instructionAttrPrefix' ] || DEFINE_INSTRUCTION_ATTR_PREFIX;

    var omittedEndTagBefore, isXmlInHTML = m_isXMLDocument;

    if( p_isArray( json ) ){
        if( m_getNodeType( json ) === HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION ){
            json = [ HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, json ];
        };
        return /** @type {string} */ (walkNode( json, null, 0, m_noOmitEndTag || false, m_skipEscapeForHTML || false ));
    } else if( DEFINE_HTML2JSON__DEBUG ){
        errorHandler( 'Invalid html.json document!' );
    };

    /**
     * 
     * @param {!Array} currentJSONNode 
     * @param {!Array|null} parentJSONNode 
     * @param {number} myIndex 
     * @param {boolean} noOmitEndTag 
     * @param {boolean} skipEscapeForHTML 
     * @return {string|number} html string
     */
    function walkNode( currentJSONNode, parentJSONNode, myIndex, noOmitEndTag, skipEscapeForHTML ){
        var htmlString = '',
            arg0 = currentJSONNode[ 0 ],
            arg1 = currentJSONNode[ 1 ],
            attrIndex = 1, tagName = arg0, attrs,
            result,
            id, className, childNodesContents, isXMLRoot;

        switch( arg0 ){
            case HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE :
                if( DEFINE_HTML2JSON__USE_XHTML && p_isXMLDocument( arg1 ) ){
                    isXmlInHTML = true;
                };
                htmlString += arg1 + walkChildNodes( currentJSONNode, false, false );
                break;
            case HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE :
                htmlString += walkChildNodes( currentJSONNode, noOmitEndTag, skipEscapeForHTML );
                break;
            case HTML_DOT_JSON__NODE_TYPE.TEXT_NODE :
                if( omittedEndTagBefore ){
                    htmlString += '</' + omittedEndTagBefore + '>';
                    omittedEndTagBefore = '';
                };
                htmlString += skipEscapeForHTML ? arg1 : p_escapeForHTML( '' + arg1 );
                break;
            case HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE :
                if( p_isString( arg1 ) ){
                    htmlString += '<!--' + arg1 + '-->';
                } else if( DEFINE_HTML2JSON__DEBUG ){
                    errorHandler( 'COMMENT_NODE Error! [' + currentJSONNode + ']' );
                };
                break;
            case HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER :
                // 下の階層が隠れる条件付きコメント
                if( p_isString( arg1 ) ){
                    htmlString += '<!--[' + arg1 + ']>';
                } else if( DEFINE_HTML2JSON__DEBUG ){
                    errorHandler( 'CONDITIONAL_COMMENT_HIDE_LOWER Error! [' + currentJSONNode + ']' );
                };
                htmlString += walkChildNodes( currentJSONNode, true, skipEscapeForHTML ) + '<![endif]-->';
                break;
            case HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER :
                // 下の階層が見える条件付きコメント
                if( p_isString( arg1 ) ){
                    htmlString += '<!--[' + arg1 + ']><!-->';
                } else if( DEFINE_HTML2JSON__DEBUG ){
                    errorHandler( 'CONDITIONAL_COMMENT_SHOW_LOWER Error! [' + currentJSONNode + ']' );
                };
                htmlString += walkChildNodes( currentJSONNode, true, skipEscapeForHTML ) + '<!--<![endif]-->';
                break;
            case HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION :
                result = p_evaluteProcessingInstruction( onInstruction, currentJSONNode, parentJSONNode, myIndex, errorHandler );

                if( result !== undefined ){
                    if( result === null || result === '' ){
                        // empty
                    } else if( p_isStringOrNumber( result ) ){
                        return REMOVED;
                    } else if( p_isArray( result ) ){
                        return REMOVED;
                    // } else if( DEFINE_HTML2JSON__DEBUG ){
                        // errorHandler( 'PROCESSING_INSTRUCTION Error! [' + JSON.stringify( currentJSONNode ) + ']' );
                    };
                };
                break;
            case HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE :
                tagName   = currentJSONNode[ 1 ];
                attrIndex = 2;
            default :
                if( p_isString( tagName ) ){
                    tagName   = m_parseTagName( tagName );
                    id        = tagName[ 1 ];
                    className = tagName[ 2 ];
                    tagName   = tagName[ 0 ];
                    if( omittedEndTagBefore === 'p' && EXCLUDE_FROM_P[ tagName ] ){
                        htmlString += '</p>'
                    };
                    omittedEndTagBefore = '';

                    htmlString += '<' + tagName;

                    if( id ){
                        htmlString += ' id=' + p_quotAttributeValue( id, useSingleQuot, quotAlways );
                    };
                    if( className ){
                        htmlString += ' class=' + p_quotAttributeValue( className, useSingleQuot, quotAlways );;
                    };

                    // xml;
                    if( !isXmlInHTML ){
                        isXMLRoot = isXmlInHTML = isXML( tagName );
                    };

                    attrs = currentJSONNode[ attrIndex ];
                    // attr
                    if( p_isAttributes( attrs ) ){
                        htmlString += ' ' + walkAttributes( attrs );
                    };
                    // childNodes
                    childNodesContents = walkChildNodes( currentJSONNode, noOmitEndTag || NO_OMIT_END_TAG[ tagName ], skipEscapeForHTML || SKIP_HTML_ESCAPE[ tagName ] );

                    if( childNodesContents ){
                        htmlString += '>' + childNodesContents;
                    } else {
                        htmlString += isXmlInHTML ? '/>' : '>';
                    };

                    if( ( !isXmlInHTML || childNodesContents ) && ( !OMIT_END_TAG[ tagName ] || noOmitEndTag ) ){
                        htmlString += '</' + tagName + '>';
                        omittedEndTagBefore = '';
                    } else {
                        omittedEndTagBefore = EMPTY_ELEMENTS[ tagName ] ? '' : tagName;
                    };

                    if( isXMLRoot ){
                        isXmlInHTML = false;
                    };
                } else if( DEFINE_HTML2JSON__DEBUG ){
                    errorHandler( 'Not html.json! [' + currentJSONNode + ']' );
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
        } else if( IS_XML_ROOT[ tagName ] ){
            return true;
        };
        return DEFINE_HTML2JSON__USE_XML_NS ? p_isNamespacedTag( tagName ) : false; // v: vml
    };

    /**
     * 
     * @param {!Array} currentJSONNode 
     * @param {boolean} noOmitEndTag 
     * @param {boolean} skipEscapeForHTML 
     * @return {string}
     */
    function walkChildNodes( currentJSONNode, noOmitEndTag, skipEscapeForHTML ){
        var htmlString = '',
            i = m_getChildNodeStartIndex( currentJSONNode ),
            childNode, htmlPartString;

        for( ; i < currentJSONNode.length; ++i ){ // PROCESSING_INSTRUCTION で配列の長さが変化する
            childNode = currentJSONNode[ i ];

            if( p_isStringOrNumber( childNode ) ){
                htmlString += walkNode( [ HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, childNode ], null, 0, noOmitEndTag, skipEscapeForHTML );
            } else if( p_isArray( childNode ) ){
                htmlPartString = walkNode( childNode, currentJSONNode, i, noOmitEndTag, skipEscapeForHTML );
                if( htmlPartString === REMOVED ){
                    --i;
                } else {
                    htmlString += htmlPartString;
                };
            } else if( DEFINE_HTML2JSON__DEBUG ){
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
            isInstruction = p_isInstructionAttr( attrPrefix, name );
            isInstruction && ( name = name.substr( attrPrefix.length ) );
            name === 'className' && ( name = 'class' );

            if( isInstruction ){
                value = p_evaluteInstructionAttr( onInstruction, name, value, errorHandler );
            };

            if( p_ATTR_NO_VALUE[ name ] || ( value !== '' && value != null ) ){
                attrText += ' ' + name;

                if( !p_ATTR_NO_VALUE[ name ] ){
                    if( name === 'style' && p_isObject( value ) ){
                        value = toCSSTest( value );
                        if( !value ) continue;
                    };
                    attrText += '=' + p_quotAttributeValue( value, useSingleQuot, quotAlways );
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
            cssText += ';' + p_toSnakeCase( name ) + ':' + p_escapeForHTML( '' + value );
        };
        return cssText.substr( 1 );
    };
};

if( DEFINE_HTML2JSON__EXPORT_JSON2HTML ){
    module.exports = p_json2html;

    p_json2html.DOCUMENT_NODE                  = HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE;
    p_json2html.DOCUMENT_FRAGMENT_NODE         = HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE;
    p_json2html.ELEMENT_NODE                   = HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE;
    p_json2html.TEXT_NODE                      = HTML_DOT_JSON__NODE_TYPE.TEXT_NODE;
    p_json2html.COMMENT_NODE                   = HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE;
    p_json2html.CONDITIONAL_COMMENT_HIDE_LOWER = HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER;
    p_json2html.CONDITIONAL_COMMENT_SHOW_LOWER = HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER;
    p_json2html.PROCESSING_INSTRUCTION         = HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION;
};