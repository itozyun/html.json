/**
 * 
 * @param {!Array} json 
 * @param {!function(string, ...*):(!Array|string|number|null|void)} onInstruction
 * @param {*} opt_useQuotAllways 
 * @param {*} opt_useConmma 
 * @param {!function(string)=} opt_onError
 * @return {string} html string
 */
p_json2html = function( json, onInstruction, opt_useQuotAllways, opt_useConmma, opt_onError ){
    var errorHandler = opt_onError || function(){},
        omittedCloseTagBefore, isInXMLTree = false;

    if( p_isArray( json ) ){
        return walkNode( json, null, 0, false, false );
    } else if( DEFINE_HTML2JSON__DEBUG ){
        errorHandler( 'Invalid html.json document!' );
    };

    function walkNode( array, parentArray, index, noOmitCloseTag, skipEscapeForHTML ){
        var htmlString = '',
            arg0 = array[ 0 ],
            arg1 = array[ 1 ],
            arg2 = array[ 2 ],
            offset = 0, dynamicNode, tagName, id, className, childNodesContents, isXMLRoot;

        switch( arg0 ){
            case HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE :
                htmlString += arg1 + walkChildNodes( arg2 );
                break;
            case HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE :
                htmlString += walkChildNodes( arg1, noOmitCloseTag, skipEscapeForHTML );
                break;
            case HTML_DOT_JSON__NODE_TYPE.TEXT_NODE :
                if( omittedCloseTagBefore ){
                    htmlString += '</' + omittedCloseTagBefore + '>';
                    omittedCloseTagBefore = '';
                };
                htmlString += skipEscapeForHTML ? arg1 : escapeForHTML( arg1 );
                break;
            case HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE :
                if( p_isString( arg1 ) ){
                    htmlString += '<!--' + arg1 + '-->';
                } else if( DEFINE_HTML2JSON__DEBUG ){
                    errorHandler( 'COMMENT_NODE Error! [' + array + ']' );
                };
                break;
            case HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER :
                // 下の階層が隠れる条件付きコメント
                if( p_isString( arg1 ) ){
                    htmlString += '<!--[' + arg1 + ']>';
                } else if( DEFINE_HTML2JSON__DEBUG ){
                    errorHandler( 'CONDITIONAL_COMMENT_HIDE_LOWER Error! [' + array + ']' );
                };
                htmlString += arg2 + '<![endif]-->';
                break;
            case HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER :
                // 下の階層が見える条件付きコメント
                if( p_isString( arg1 ) ){
                    htmlString += '<!--[' + arg1 + ']><!-->';
                } else if( DEFINE_HTML2JSON__DEBUG ){
                    errorHandler( 'CONDITIONAL_COMMENT_SHOW_LOWER Error! [' + array + ']' );
                };
                htmlString += walkChildNodes( arg2, noOmitCloseTag, skipEscapeForHTML ) + '<!--<![endif]-->';
                break;
            case HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION :
                if( p_isArray( arg2 ) ){
                    dynamicNode = onInstruction( arg1, arg2 );
                } else if( array.length === 3 ){
                    dynamicNode = onInstruction( arg1, [ arg2 ] );
                } else {
                    dynamicNode = onInstruction( arg1 );
                };
                if( dynamicNode !== undefined ){
                    if( dynamicNode === null || dynamicNode === '' ){

                    } else if( p_isString( dynamicNode ) || p_isNumber( dynamicNode ) ){
                        htmlString += walkNode( [ HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, '' + dynamicNode ], null, 0, noOmitCloseTag, skipEscapeForHTML );
                    } else if( p_isArray( dynamicNode ) ){
                        if( p_isArray( dynamicNode[ 0 ] ) ){
                            if( parentArray ){
                                parentArray.splice.apply( parentArray, [ index, 1 ].concat( dynamicNode ) );
                                return -1;
                            } else {
                                htmlString += walkNode( [ HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, dynamicNode ], null, 0, noOmitCloseTag, skipEscapeForHTML );
                            };
                        } else {
                            if( parentArray ){
                                parentArray.splice( index, 1, dynamicNode );
                                return -1;
                            } else {
                                htmlString += walkNode( dynamicNode, null, 0, noOmitCloseTag, skipEscapeForHTML );
                            };
                        };
                    } else if( DEFINE_HTML2JSON__DEBUG ){
                        errorHandler( 'DYNAMIC_CONTENTS Error! [' + array + ']' );
                    };
                };
                break;
            case HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE :
                arg0   = array[ 1 ];
                offset = 1;
            default :
                if( p_isString( arg0 ) ){
                    arg0      = parseTagName( arg0 );
                    tagName   = arg0._tagName;
                    id        = arg0._id;
                    className = arg0._className;
                    if( omittedCloseTagBefore === 'p' && EXCLUDE_FROM_P[ tagName ] ){
                        htmlString += '</p>'
                    };
                    omittedCloseTagBefore = '';

                    htmlString += '<' + tagName;

                    if( id ){
                        htmlString += ' ' + walkAttributes( { id : id } );
                    };
                    if( className ){
                        htmlString += ' ' + walkAttributes( { className : className } );
                    };

                    // xml;
                    if( !isInXMLTree ){
                        isXMLRoot = isInXMLTree = isXML( tagName );
                    };

                    if( 1 + offset <= array.length ){
                        arg1 = array[ 1 + offset ];
                        // attr
                        if( p_isAttributes( arg1 ) ){
                            htmlString += ' ' + walkAttributes( arg1 );
                            arg1 = array[ 2 + offset ];
                        };
                        // childNodes
                        if( arg1 ){
                            if( p_isArray( arg1 ) ){
                                childNodesContents = walkChildNodes( arg1, noOmitCloseTag || NO_OMIT_CLOSE[ tagName ], skipEscapeForHTML || SKIP_HTML_ESCAPE[ tagName ] );
                            // One TEXT_NODE
                            } else if( p_isString( arg1 ) ){
                                childNodesContents = walkNode( [ HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, arg1 ], null, 0, noOmitCloseTag, skipEscapeForHTML || SKIP_HTML_ESCAPE[ tagName ] );
                            } else if( DEFINE_HTML2JSON__DEBUG ){
                                errorHandler( 'Invalid childNodes! [' + arg1 + ']' );
                            };
                            htmlString += '>' + childNodesContents;
                        } else {
                            htmlString += isInXMLTree ? '/>' : '>';
                        };
                    } else {
                        htmlString += isInXMLTree ? '/>' : '>';
                    };

                    if( ( !isInXMLTree || childNodesContents ) && ( !OMIT_CLOSE_TAG[ tagName ] || noOmitCloseTag ) ){
                        htmlString += '</' + tagName + '>';
                        omittedCloseTagBefore = '';
                    } else {
                        omittedCloseTagBefore = EMPTY_ELEMENTS[ tagName ] ? '' : tagName;
                    };

                    if( isXMLRoot ){
                        isInXMLTree = false;
                    };
                } else if( DEFINE_HTML2JSON__DEBUG ){
                    errorHandler( 'Not html.json! [' + array + ']' );
                };
                break;
        };
        return htmlString;
    };

    function isXML( tagName ){
        if( isInXMLTree ){
            return true;
        } else if( IS_XML_ROOT[ tagName ] ){
            return true;
        };
        return DEFINE_HTML2JSON__USE_XML_NS ? 0 < tagName.indexOf( ':' ) : false; // v: vml
    };

    function walkChildNodes( childNodes, noOmitCloseTag, skipEscapeForHTML ){
        var htmlString = '', i, childNode, htmlPartString;

        for( i = 0; i < childNodes.length; ++i ){ // PROCESSING_INSTRUCTION で配列の長さが変化する
            childNode = childNodes[ i ];

            if( p_isStringOrNumber( childNode ) ){
                htmlString += walkNode( [ HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, arg1 ], null, 0, noOmitCloseTag, skipEscapeForHTML );
            } else if( p_isArray( childNode ) ){
                htmlPartString = walkNode( childNode, childNodes, i, noOmitCloseTag, skipEscapeForHTML );
                if( htmlPartString === -1 ){
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

    function escapeForHTML( unsafeText ){
        return unsafeText
                   .split( '&lt;' ).join( '<' )
                   .split( '&gt;' ).join( '>' )
                   .split( '&amp;' ).join( '&' )    // 既にエスケープ済かもしれないので、一旦エスケープの解除
                   .split( '&' ).join( '&amp;' )    // エスケープ
                   .split( '<' ).join( '&lt;' )
                   .split( '>' ).join( '&gt;' );
    };

    function walkAttributes( attrs ){
        var attrText = '',
            quot = opt_useConmma ? "'" : '"',
            name, value, isDynamic, strValue, hasQuot;
    
        for( name in attrs ){
            value = attrs[ name ];
            isDynamic = name.charAt( 0 ) === ':';
            isDynamic && ( name = name.substr( 1 ) );
            name === 'className' && ( name = 'class' );

            if( isDynamic ){
                if( p_isArray( value ) && p_isString( value[ 0 ] ) ){
                    if( p_isArray( value[ 1 ] ) ){
                        value = onInstruction( value[ 0 ], value[ 1 ] );
                    } else {
                        value = onInstruction( value[ 0 ], [ value[ 1 ] ] );
                    };
                } else if( p_isString( value ) ){
                    value = onInstruction( value );
                } else if( DEFINE_HTML2JSON__DEBUG ){
                    errorHandler( 'Invalid DYNAMIC_ATTRIBUTE value! [:' + name + '=' + value + ']' );
                };
            };
            if( p_ATTR_NO_VALUE[ name ] || ( value !== '' && value != null ) ){
                attrText += ' ' + name;

                if( !p_ATTR_NO_VALUE[ name ] ){
                    if( name === 'style' && p_isObject( value ) ){
                        value = walkStyleAttributes( value );
                        if( !value ) continue;
                    };
                    strValue = '' + value;
                    hasQuot = strValue.match( '"' );
                    if( hasQuot && strValue.match( "'" ) ){ // " と ' を含む
                        attrText += '="' + strValue.split( '\\"' ).join( '"' ) // 既にエスケープ済かもしれないので、一旦エスケープの解除
                                                   .split( '"' ).join( '\\"' ) // " のエスケープ
                                  + '"';
                    } else if( hasQuot ){ // " を含む
                        attrText += "='" + strValue + "'";
                    } else if( opt_useQuotAllways || strValue.match( /[^0-9a-z\.\-]/g ) || 72 < strValue.length ){
                        // http://openlab.ring.gr.jp/k16/htmllint/explain.html#quote-attribute-value
                        // 英数字、ピリオド "."、ハイフン "-" から成り(いずれも半角の)、72文字以内の文字列のときは引用符で囲む必要はありません
                        attrText += '=' + quot + strValue + quot;
                    } else {
                        attrText += '=' + escapeForHTML( strValue );
                    };
                };
            };
        };
        return attrText.substr( 1 );
    };

    function walkStyleAttributes( styles ){
        var cssText = '',
            name, value;
    
        for( name in styles ){
            value = styles[ name ];
            value === '0px' && ( value = 0 );
            cssText += ';' + name + ':' + value;
        };
        return cssText.substr( 1 );
    };

    function parseTagName( tagName ){
        var indexID = tagName.indexOf( '#' ),
            indexClassName = tagName.indexOf( '.' ),
            className, id;
        
        if( indexID < indexClassName ){
            className = tagName.split( '.' )[ 1 ];
            tagName   = tagName.split( '.' )[ 0 ];
            if( 0 < indexID ){
                id      = tagName.split( '#' )[ 1 ];
                tagName = tagName.split( '#' )[ 0 ];
            };
        } else if( indexClassName < indexID ){
            id      = tagName.split( '#' )[ 1 ];
            tagName = tagName.split( '#' )[ 0 ];
            if( 0 < indexClassName ){
                className = tagName.split( '.' )[ 1 ];
                tagName   = tagName.split( '.' )[ 0 ];
            };
        };

        return {
            _tagName   : tagName,
            _id        : id,
            _className : className
        }
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