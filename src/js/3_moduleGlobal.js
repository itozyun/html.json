var m_ATTRS_NO_VALUE     = {checked:!0,compact:!0,declare:!0,defer:!0,disabled:!0,ismap:!0,multiple:!0,nohref:!0,noresize:!0,noshade:!0,nowrap:!0,readonly:!0,selected:!0};
var m_EMPTY_ELEMENTS     = {link:!0,meta:!0,br:!0,hr:!0,img:!0,input:!0,area:!0,base:!0,col:!0,embed:!0,keygen:!0,param:!0/* ,source:!0 */}, // TODO Opera 9 support
    m_OMIT_END_TAG       = {p:!0,dt:!0,dd:!0,li:!0,option:!0,thead:!0,tfoot:!0,th:!0,tr:!0,td:!0,rt:!0,rp:!0,optgroup:!0,caption:!0,colgroup:!0,col:!0},
    m_NEVER_OMIT_END_TAG = {a:!0,audio:!0,del:!0,ins:!0,map:!0,noscript:!0,video:!0},
    m_IS_XML_ROOT        = {svg:!0, math:!0},
    // IE5 : <table> の直前の </p> を省略すると <table> が <p> の子になってレイアウトが崩れる
    m_EXCLUDE_FROM_P     = {table:!0,img:!0,svg:!0,picture:!0,object:!0,embed:!0,video:!0,audio:!0,blockquot:!0,form:!0,fieldset:!0},
    m_SKIP_HTML_ESCAPE   = {script:!0,style:!0,plaintext:!0,xmp:!0,noscript:!0};

// stream-json2html => json2html で使用
var m_neverOmitEndTag   = false;
var m_skipEscapeForHTML = false;
var m_isXMLDocument     = false;

/**
 * 
 * @param {*} value 
 * @return {boolean}
 */
function m_isArray( value ){
    return !!( value && value.pop === [].pop );
};

/**
 * 
 * @param {*} value 
 * @return {boolean}
 */
function m_isObject( value ){
    return !!( value && typeof value === 'object' );
};

/**
 * 
 * @param {*} str 
 * @return {boolean}
 */
function m_isString( str ){
    return '' + str === str;
};

/**
 * 
 * @param {*} n 
 * @return {boolean}
 */
function m_isNumber( n ){
    return n === + n;
};

/**
 * 
 * @param {*} v 
 * @return {boolean}
 */
function m_isStringOrNumber( v ){
    return m_isString( v ) || m_isNumber( v );
};

/**
 * 
 * @param {*} v 
 * @return {boolean}
 */
function m_isNumberString( v ){
    return v === '' + ( + v ) && m_isNumber( parseInt( v, 10 ) );
};

/**
 * 
 * @param {*} v 
 * @return {*}
 */
function m_toNumber( v ){
    return m_isNumberString( v ) ? + v : v;
};

/**
 * 未使用
 * @param {*} value 
 * @return {boolean}
 */
function m_isNodeList( value ){
    return m_isArray( value ) && m_isArray( value[ 0 ] );
};

/**
 * 未使用
 * @param {*} value 
 * @return {boolean}
 */
function m_isStrictNode( value ){
    return m_isArray( value ) && ( m_isNumber( value[ 0 ] ) || m_isString( value[ 0 ] ) );
};

function m_isXMLDocument( xmlDeclarationAndDocumentType ){
    return xmlDeclarationAndDocumentType.indexOf( '<?xml ' ) === 0 || 0 <= xmlDeclarationAndDocumentType.toUpperCase().indexOf( '<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML ' );
};

function m_isNamespacedTag( tagName ){
    return 0 < tagName.indexOf( ':' );
};

/**
 * 
 * @param {*} value 
 * @return {number} nodeType(HTML_DOT_JSON__NODE_TYPE)
 */
function m_getNodeType( value ){
    return m_isStringOrNumber( value )
        ? HTML_DOT_JSON__NODE_TYPE.TEXT_NODE
        : (
            m_isArray( value )
                ? m_isString( value[ 0 ] )
                     ? HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE
                : m_isNumber( value[ 0 ] )
                     ? value[ 0 ]
                     : -1
                : -1
        );
};

/**
 * 
 * @param {*} value 
 * @return {boolean}
 */
function m_isAttributes( value ){
    return !m_isArray( value ) && m_isObject( value );
};

/**
 * 
 * @param {string} prefix 
 * @param {string} name 
 * @return {boolean}
 */
function m_isInstructionAttr( prefix, name ){
    return name.indexOf( prefix ) === 0;
};

/**
 * 
 * @param {!function(string, ...*):(!Array|string|number|null|void)} onInstruction
 * @param {!Array} currentJSONNode 
 * @param {!Array|null} parentJSONNode 
 * @param {number} myIndex
 * @param {!function(string)} errorHandler 
 * @return {!Array|string|number|null|void}
 */
function m_evaluteProcessingInstruction( onInstruction, currentJSONNode, parentJSONNode, myIndex, errorHandler ){
    var functionName = /** @type {string} */ (currentJSONNode[ 1 ]);
    var args         = currentJSONNode.slice( 2 );
    var result;

    if( args.length ){
        result = onInstruction( functionName, args );
    } else {
        result = onInstruction( functionName );
    };
    if( result !== undefined ){
        if( result === null || result === '' ){
            //
        } else if( m_isStringOrNumber( result ) ){
            if( parentJSONNode ){
                parentJSONNode.splice( myIndex, 1, result );
            } else {
                currentJSONNode.length = 0;
                currentJSONNode.push( HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, currentJSONNode );
            };
        } else if( m_isArray( result ) ){
            result = /** @type {!Array} */ (result);

            if( result[ 0 ] === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE ){
                if( parentJSONNode ){
                    result.shift();
                    result.unshift( myIndex, 1 );
                    parentJSONNode.splice.apply( parentJSONNode, result ); // <= parentJSONNode.splice( myIndex, 1, ...result );
                } else {
                    currentJSONNode.length = 0;
                    currentJSONNode.push.apply( currentJSONNode, result ); // <= [ DOCUMENT_FRAGMENT_NODE, ...result ]
                };
            } else if( m_isArray( result[ 0 ] ) ){ // nodeType を省略した DOCUMENT_FRAGMENT_NODE
                if( parentJSONNode ){
                    result.unshift( myIndex, 1 );
                    parentJSONNode.splice.apply( parentJSONNode, result ); // <= parentJSONNode.splice( myIndex, 1, ...result );
                } else {
                    currentJSONNode.length = 0;
                    currentJSONNode.push( HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE );
                    currentJSONNode.push.apply( currentJSONNode, result );
                };
            } else {
                if( parentJSONNode ){
                    parentJSONNode.splice( myIndex, 1, result );
                } else {
                    currentJSONNode.length = 0;
                    currentJSONNode.push( HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, result );
                };
            };
        } else if( DEFINE_HTML2JSON__DEBUG ){
            errorHandler( 'PROCESSING_INSTRUCTION Error! [' + JSON.stringify( currentJSONNode ) + ']' );
        };
    };
    return result;
};

/**
 * 
 * @param {!function(string, ...*):(!Array|string|number|null|void)} onInstruction
 * @param {string} name 
 * @param {string} value 
 * @param {!function(string)} errorHandler 
 * @return {!Array|string|number|null|void}
 */
function m_evaluteInstructionAttr( onInstruction, name, value, errorHandler ){
    var result;

    if( m_isArray( value ) && m_isString( value[ 0 ] ) ){
        var functionName = /** @type {string} */ (value[ 0 ]);
        var args         = value.slice( 1 );

        if( args.length ){
            result = onInstruction( functionName, args );
        } else {
            result = onInstruction( functionName );
        };
    } else if( m_isString( value ) ){
        result = onInstruction( value );
    } else if( DEFINE_HTML2JSON__DEBUG ){
        errorHandler( 'Invalid InstructionAttr value! [' + name + '=' + value + ']' );
    };
    return result;
};

/**
 * 
 * @param {string} unsafeText 
 * @return {string}
 */
function m_escapeForHTML( unsafeText ){
    return unsafeText
               /** .split( '&lt;' ).join( '<' )
               .split( '&gt;' ).join( '>' )
               .split( '&amp;' ).join( '&' ) */ // 既にエスケープ済かもしれないので、一旦エスケープの解除
               .split( '&' ).join( '&amp;' )    // エスケープ
               .split( '<' ).join( '&lt;' )
               .split( '>' ).join( '&gt;' );
};

/**
 * 
 * @param {string} value 
 * @param {boolean} useSingleQuot 
 * @param {boolean} quotAlways 
 * @return {string}
 */
function m_quotAttributeValue( value, useSingleQuot, quotAlways ){
    var strValue = m_escapeForHTML( '' + value );
    var containDoubleQuot = strValue.match( '"' );

    if( containDoubleQuot ){
        if( strValue.match( "'" ) ){ // " と ' を含む
            if( useSingleQuot ){
                strValue = "'" + strValue.split( '&apos;' ).join( "'" ) // 既にエスケープ済かもしれないので、一旦エスケープの解除
                                         .split( "'" ).join( '&apos;' ) // " のエスケープ
                         + "'";
            } else {
                strValue = '"' + strValue.split( '&quot;' ).join( '"' ) // 既にエスケープ済かもしれないので、一旦エスケープの解除
                                           .split( '"' ).join( '&quot;' ) // " のエスケープ
                         + '"';
            };
        } else {
            strValue = "'" + strValue + "'";
        };
    } else if( quotAlways || strValue.match( /[^0-9a-z\.\-]/g ) || 72 < strValue.length ){
        // http://openlab.ring.gr.jp/k16/htmllint/explain.html#quote-attribute-value
        // 英数字、ピリオド "."、ハイフン "-" から成り(いずれも半角の)、72文字以内の文字列のときは引用符で囲む必要はありません
        strValue = ( useSingleQuot ? "'" : '"' ) + m_escapeForHTML( strValue ) + ( useSingleQuot ? "'" : '"' );
    };
    return strValue;
};

function m_toSnakeCase( cssProperty ){
    return cssProperty; // TODO
};

/**
 * 
 * @param {!Array} htmlJsonNode
 * @return {number}
 */
function m_getChildNodeStartIndex( htmlJsonNode ){
    var nodeType   = htmlJsonNode[ 0 ];
    var isElement  = m_getNodeType( htmlJsonNode ) === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE;
    var indexAttrs = nodeType === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE ? 2 : 1;
    var startIndex = isElement
                        ? (
                            m_isAttributes( htmlJsonNode[ indexAttrs ] )
                                ? indexAttrs + 1
                                : indexAttrs
                            )
                        : nodeType === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE
                                ? 1
                        : nodeType === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE
                       || nodeType === HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER
                       || nodeType === HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER
                                ? 2
                                : Infinity;
    return startIndex;
};

/**
 * 連続する Text の結合
 * @param {!Array} htmlJsonNode 
 */
function m_mergeTextNodes( htmlJsonNode ){
    var startIndex = m_getChildNodeStartIndex( htmlJsonNode );

    var node, nodeType, text = '', i;

    if( startIndex < htmlJsonNode.length ){
        for( i = startIndex; i < htmlJsonNode.length; ){
            node     = htmlJsonNode[ i ];
            nodeType = m_getNodeType( node );
            if( nodeType === HTML_DOT_JSON__NODE_TYPE.TEXT_NODE ){
                if( m_isStringOrNumber( node ) ){
                    text += node;
                } else {
                    text += node[ 1 ];
                };
                htmlJsonNode.splice( i, 1 );
            } else {
                if( text ){
                    htmlJsonNode.splice( i, 0, m_toNumber( text ) );
                    text = '';
                };
                ++i;
                if( nodeType === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE ){
                    m_mergeTextNodes( node );
                };
            };
        };
        if( text ){
            htmlJsonNode[ i ] = m_toNumber( text );
        };
    };
};

/**
 * 
 * @param {string} tagName 
 * @return {!Array.<string>}
 */
function m_parseTagName( tagName ){
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
    return [ tagName, id, className ];
};