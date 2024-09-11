goog.provide( 'htmljson.base' );

goog.require( 'htmljson.NODE_TYPE' );
goog.require( 'htmljson.DEFINE.USE_XML_NS' );

/**
 * @typedef {Object.<string, (string | number | boolean)>}
 */
var Styles;

/**
 * @typedef {Object.<string, (string | number | boolean | Styles)>}
 */
var Attrs;

var m_ATTRS_NO_VALUE      = {checked:!0,compact:!0,declare:!0,defer:!0,disabled:!0,ismap:!0,multiple:!0,nohref:!0,noresize:!0,noshade:!0,nowrap:!0,readonly:!0,selected:!0};

    // 子を持たない要素の一覧
var m_NO_CHILD_ELEMENTS   = {link:!0,meta:!0,br:!0,hr:!0,img:!0,input:!0,area:!0,base:!0,col:!0,embed:!0,keygen:!0,param:!0, /* ,source:!0 */ // for Opera 9
                            track:!0,wbr:!0,command:!0,basefont:!0,frame:!0,isindex:!0,bgsound:!0},
    // 終了タグを省略できるタグの一覧
    m_OMITTABLE_END_TAGS  = {html:!0,head:!0,body:!0,p:!0,dt:!0,dd:!0,li:!0,option:!0,tbody:!0,thead:!0,tfoot:!0,td:!0,th:!0,tr:!0,rb:!0,rbc:!0,rp:!0,rt:!0,rtc:!0,optgroup:!0,caption:!0,colgroup:!0},
    // 子孫が終了タグを省略できないタグの一覧
    m_DESCENDANTS_MUST_HAVE_END_TAGS
                          = {a:!0,audio:!0,del:!0,ins:!0,map:!0,noscript:!0,video:!0},
    m_TAGNAME_TO_NAMESPACE= {
        xml:  'http://www.w3.org/1999/xhtml',
        svg:  'http://www.w3.org/2000/svg',
        math: 'http://www.w3.org/1998/Math/MathML'
    },
    // </p> を省略できる後続のタグの一覧
    m_P_END_TAG_LESS_TAGS = {
                                address:!0,article:!0,aside:!0,blockquote:!0,canvas:!0,details:!0,div:!0,dl:!0,fieldset:!0,figcaption:!0,figure:!0,
                                footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,legend:!0,
                                main:!0,menu:!0,nav:!0,noscript:!0,ol:!0,p:!0,pre:!0,section:!0,
                                /* table:!0, */ // IE5 : <table> の直前の </p> を省略すると <table> が <p> の子になってレイアウトが崩れる
                                ul:!0,
                                center:!0,dir:!0,noframes:!0,marquee:!0
                            },
    // HTML エスケープをしない要素の一覧
    m_UNESCAPED_TAGS      = {script:!0,style:!0,plaintext:!0,xmp:!0},

    m_TRIM_LINEBREAKS     = {script:!0,style:!0,textarea:!0};

// stream-json2html => json2html で使用
var m_endTagRequired        = false;
var m_escapeForHTMLDisabled = false;
var m_isXMLDocument         = false;

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
 * @param {*} value 
 * @return {boolean}
 */
function m_isBoolean( value ){
    return value === !!value;
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
function m_isFiniteNumberString( v ){
    return v === '' + ( + v ) && // is number string
           v === v            && // not NaN
           v !== '' +  1/0    && // not  Infinity
           v !== '' + -1/0;      // not -Infinity
};

/**
 * 
 * @param {*} v
 * @return {*}
 */
function m_tryToFiniteNumber( v ){
    return m_isFiniteNumberString( v ) ? + v : v;
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

function m_isXML( xmlDeclarationAndDocumentType ){
    return xmlDeclarationAndDocumentType.indexOf( '<?xml ' ) === 0 || 0 <= xmlDeclarationAndDocumentType.toUpperCase().indexOf( '<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML ' );
};

function m_isNamespacedTag( tagName ){
    return htmljson.DEFINE.USE_XML_NS ? 0 < tagName.indexOf( ':' ) : false;
};

/**
 * 
 * @param {*} value 
 * @return {number} nodeType(htmljson.NODE_TYPE)
 */
function m_getNodeType( value ){
    return m_isStringOrNumber( value )
        ? htmljson.NODE_TYPE.TEXT_NODE
        : (
            m_isArray( value )
                ? m_isString( value[ 0 ] )
                     ? htmljson.NODE_TYPE.ELEMENT_NODE
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
 * @param {!function(string, ...*):(!Array|string|number|boolean|null|void)} onInstruction
 * @param {!Array} currentJSONNode 
 * @param {!Array|null} parentJSONNode 
 * @param {number} myIndex
 * @param {!function(string)} errorHandler 
 * @return {!Array|string|number|boolean|null|void}
 */
function m_executeProcessingInstruction( onInstruction, currentJSONNode, parentJSONNode, myIndex, errorHandler ){
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
                currentJSONNode.push( htmljson.NODE_TYPE.TEXT_NODE, currentJSONNode );
            };
        } else if( m_isArray( result ) ){
            result = /** @type {!Array} */ (result);

            if( result[ 0 ] === htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE ){
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
                    currentJSONNode.push( htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE );
                    currentJSONNode.push.apply( currentJSONNode, result );
                };
            } else {
                if( parentJSONNode ){
                    parentJSONNode.splice( myIndex, 1, result );
                } else {
                    currentJSONNode.length = 0;
                    currentJSONNode.push( htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE, result );
                };
            };
        } else if( htmljson.DEFINE.DEBUG ){
            errorHandler( 'PROCESSING_INSTRUCTION Error! [' + JSON.stringify( currentJSONNode ) + ']' );
        };
    };
    return result;
};

/**
 * 
 * @param {boolean} recursion
 * @param {!function(string, ...*):(!Array|string|number|boolean|null|void)} onInstruction
 * @param {string} name 
 * @param {!Array|string} value 
 * @param {!function(string)} errorHandler 
 * @return {!Array|string|number|boolean|null|void}
 */
function m_executeInstructionAttr( recursion, onInstruction, name, value, errorHandler ){
    var result;

    if( m_isArray( value ) && m_isString( value[ 0 ] ) ){
        value = /** @type {!Array} */ (value);
        var functionName = /** @type {string} */ (value[ 0 ]);
        var args         = value.slice( 1 );

        if( args.length ){
            result = onInstruction( functionName, args );
        } else {
            result = onInstruction( functionName );
        };
    } else if( m_isString( value ) ){
        result = onInstruction( /** @type {string} */ (value) );
    } else if( htmljson.DEFINE.DEBUG ){
        errorHandler( 'Invalid InstructionAttr value! [' + name + '=' + value + ']' );
    };

    if( recursion && m_isArray( result ) ){
        result = /** @type {!Array} */ (result);

        return m_executeInstructionAttr( true, onInstruction, name, result, errorHandler );
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
 * @param {string|number|boolean} value 
 * @param {boolean} useSingleQuot 
 * @param {boolean} quotAlways 
 * @return {string}
 */
function m_quoteAttributeValue( value, useSingleQuot, quotAlways ){
    var strValue          = m_escapeForHTML( '' + value );
    var containDoubleQuot = strValue.match( '"' );
    var containSingleQuot = strValue.match( "'" );
    var _                 = useSingleQuot ? "'" : '"';

    if( containDoubleQuot && containSingleQuot ){
        if( useSingleQuot ){
            strValue = _ + strValue.split( "'" ).join( "\\'" ) + _; // " のエスケープ
        } else {
            strValue = _ + strValue.split( '"' ).join( '\\"' ) + _; // " のエスケープ
        };
    } else if( containDoubleQuot ){
        strValue = "'" + strValue + "'";
    } else if( containSingleQuot ){
        if( useSingleQuot ){
            strValue = _ + strValue.split( "'" ).join( "\\'" ) + _; // " のエスケープ
        } else {
            strValue = _ + strValue + _;
        };
    } else if( quotAlways || strValue.match( /[^0-9a-z\.\-]/g ) || 72 < strValue.length ){
        // http://openlab.ring.gr.jp/k16/htmllint/explain.html#quote-attribute-value
        // 英数字、ピリオド "."、ハイフン "-" から成り(いずれも半角の)、72文字以内の文字列のときは引用符で囲む必要はありません
        strValue = _ + strValue + _;
    };
    return strValue;
};

/**
 * 
 * @param {string} cssProperty 
 * @return {string}
 */
function m_toSnakeCase( cssProperty ){
    var result = [],
        chars  = cssProperty.split( '' ),
        i      = chars.length,
        chr;

    while( i ){
        chr = chars[ --i ];
        if( 'A' <= chr && chr <= 'Z' ){
            chr = '-' + chr.toLowerCase();
        };
        result[ i ] = chr;
    };
    return result.join( '' );
};

/**
 * 
 * @param {!Array} htmlJsonNode
 * @return {number}
 */
function m_getChildNodeStartIndex( htmlJsonNode ){
    var nodeTypeOrTagName = htmlJsonNode[ 0 ];
    var isElement         = m_getNodeType( htmlJsonNode ) === htmljson.NODE_TYPE.ELEMENT_NODE || nodeTypeOrTagName === htmljson.NODE_TYPE.ELEMENT_START_TAG;
    var indexAttrs        = m_isNumber( nodeTypeOrTagName ) ? 2 : 1;

    return isElement ? (
                           m_isAttributes( htmlJsonNode[ indexAttrs ] )
                               ? indexAttrs + 1
                               : indexAttrs
                       )
          : nodeTypeOrTagName === htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE
               ? 1
          : nodeTypeOrTagName === htmljson.NODE_TYPE.DOCUMENT_NODE
            || nodeTypeOrTagName === htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER
            || nodeTypeOrTagName === htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER
               ? 2
               : Infinity;
};

/**
 * 連続する Text の結合
 * @param {!Array} htmlJsonNode 
 */
function m_normalizeTextNodes( htmlJsonNode ){
    var startIndex = m_getChildNodeStartIndex( htmlJsonNode );

    var node, nodeType, text = '', i;

    if( startIndex < htmlJsonNode.length ){
        for( i = startIndex; i < htmlJsonNode.length; ){
            node     = htmlJsonNode[ i ];
            nodeType = m_getNodeType( node );
            if( nodeType === htmljson.NODE_TYPE.TEXT_NODE ){
                if( m_isStringOrNumber( node ) ){
                    text += node;
                } else {
                    text += node[ 1 ];
                };
                htmlJsonNode.splice( i, 1 );
            } else {
                if( text ){
                    htmlJsonNode.splice( i, 0, m_tryToFiniteNumber( text ) );
                    text = '';
                };
                ++i;
                if( nodeType === htmljson.NODE_TYPE.ELEMENT_NODE               ||
                    nodeType === htmljson.NODE_TYPE.ELEMENT_START_TAG          ||
                    nodeType === htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER        ||
                    nodeType === htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER
                ){
                    m_normalizeTextNodes( node );
                };
            };
        };
        if( text ){
            htmlJsonNode[ i ] = m_tryToFiniteNumber( text );
        };
    };
};

/**
 * 
 * @param {string} nodeValue 
 * @param {boolean} isDescendantOfPre 
 * @param {boolean} isTrimNewlines 
 * @param {boolean} isTrimWhitespace 
 * @param {boolean} isAggressiveTrim 
 * @param {boolean} isRemoveNewlineBetweenFullWidthChars 
 * @return {string | number}
 */
function m_trimWhiteSpaces( nodeValue, isDescendantOfPre, isTrimNewlines, isTrimWhitespace, isAggressiveTrim, isRemoveNewlineBetweenFullWidthChars ){
    /**
     * 
     * @param {string} string 
     * @return {string} 
     */
    function removeNewlineBetweenFullWidthChars( string ){
        // この関数は、HTML文書を文字列として受け取り、全角文字に挟まれた改行コードを削除したHTML文書を文字列として返す
        // 正規表現を使って、全角文字に挟まれた改行コードを空文字に置換する
        // 全角文字の範囲は、Unicodeのコードポイントで指定する
        // \uFF01-\uFF60は全角記号や英数字、\u3040-\u309Fはひらがな、\u30A0-\u30FFはカタカナ、\u4E00-\u9FFFは漢字などを表す
        // \r\nや\nや\rなどの改行コードを表すために、\sというメタ文字を使う
        // gというフラグを使って、文字列全体に対して置換を行う
        return string.replace(/([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])\s([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])/g, "$1$2");
    };

    if( !isDescendantOfPre && isTrimWhitespace ){
        if( isTrimNewlines ){
            // 先頭と最後の改行文字を削除
            nodeValue = m_trimChar( /** @type {string} */ (nodeValue), '\n' );
        } else {
            nodeValue = nodeValue.split( '\r\n' ).join( '\n' );
            if( isRemoveNewlineBetweenFullWidthChars ){
                nodeValue = removeNewlineBetweenFullWidthChars( nodeValue );
            };

            // タブは一つの半角スペースに
            nodeValue = nodeValue.split( '\t' ).join( ' ' );

            // 2つ以上の改行を1つの改行へ
            while( 0 <= nodeValue.indexOf( '\n\n' ) ){
                nodeValue = nodeValue.split( '\n\n' ).join( '\n' );
            };

            if( isAggressiveTrim ){
                var isAggressiveTrimWhitespace =
                    // <b>1</b> / <b>3</b>
                    //         ^^^ `/` の両隣のスペースを削除するか？は改行の有無で判断する
                        // 先頭が改行、かつ
                        nodeValue.charAt( 0 ) === '\n' &&
                        // 最後が改行+0個以上の空白文字の場合  
                        /\n[ ]*$/.test( nodeValue );
            };

            // 最後の改行を削除
            nodeValue = m_trimLastChar( nodeValue, '\n' );

            // 改行文字を一つの半角スペースに
            nodeValue = nodeValue.split( '\n' ).join( ' ' );

            // 2つ以上の半角スペースを1つの半角スペースへ
            while( 0 <= nodeValue.indexOf( '  ' ) ){
                nodeValue = nodeValue.split( '  ' ).join( ' ' );
            };

            if( isAggressiveTrimWhitespace ){
                // 先頭と最後の半角スペースを削除
                nodeValue = m_trimChar( nodeValue, ' ' );
            };
            // 半角スペースの保護には \u0020 または &#x20; または &#32; を使う
            nodeValue = nodeValue.split( '\\u0020' ).join( ' ' ).split( '&#x20;' ).join( ' ' ).split( '&#32;' ).join( ' ' );
        };
    };
    return /** @type {number | string} */ (m_tryToFiniteNumber( nodeValue ));
};

/**
 * 
 * @param {string} string 
 * @return {string} 
 */
function m_trimChar( string, chr ){
    return m_trimLastChar( m_trimFirstChar( string, chr ), chr );
};

/**
 * 
 * @param {string} string 
 * @return {string} 
 */
function m_trimFirstChar( string, chr ){
    while( string.charAt( 0 ) === chr ){ string = string.substr( 1 ); };

    return string;
};

/**
 * 
 * @param {string} string 
 * @return {string} 
 */
function m_trimLastChar( string, chr ){
    while( string.charAt( string.length - 1 ) === chr ){ string = string.substr( 0, string.length - 1 ); };

    return string;
};

/**
 * `div#main.default-color` -> `['div', 'main', 'default-color']`
 * 
 * @param {string} tagName 
 * @return {!Array.<string>} [ tagName, id, className ]
 */
function m_parseTagName( tagName ){
    var indexID = tagName.indexOf( '#' ),
        indexClassName = tagName.indexOf( '.' ),
        className = '', id = '';
    
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

/**
 * 
 * @param {string} tagName 
 * @param {string | void} id 
 * @param {string | void} className
 * @return {string}
 */
function m_createTagName( tagName, id, className ){
    if( id ){
        tagName += '#' + id;
    };
    if( className ){
        tagName += '.' + className;
    };
    return tagName;
};

/**
 * cssText は : ; を区切り文字にするが、次のケースがあるため
 *   content:";"; content:":";
 *           ^^^          ^^^
 *   filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=70)
 *                ^
 *
 * 次のように処理しない
 *   propAndValues = cssText.split( ';' );
 *   cssProperty = propAndValues[ 0 ].split( ':' )[ 0 ];
 * 
 * @param {string} cssText
 * @return {Styles | null}
 */
function m_parseCSSText( cssText ){
    function isWhitespace( chr ){
        return chr === ' ' || chr === '\b' || chr === '\f' || chr === '\n' || chr === '\r' || chr === '\t';
    };

    function saveCSSProperty( value ){
        styles[ property ] = value === '0px' ? 0 : m_tryToFiniteNumber( value );
        ++numAttrs;
    };

    var phase    = 0,
        l        = cssText.length,
        i        = 1,
        styles   = {},
        numAttrs = 0,
        chr, start, quot, property;

    while( i < l ){
        chr = cssText.charAt( i );
        switch( phase ){
            case 0 :
                if( !isWhitespace( chr ) ){
                    start = i;
                    phase = 1;
                };
                break;
            case 1 : // property:value;
                     // ^^^^^^^^
                if( chr === ':' ){
                    property = cssText.substring( /** @type {number} */ (start), i );
                    start = i;
                    phase = 2;
                };
                break;
            case 2 :
                if( !isWhitespace( chr ) ){
                    start = i;
                    phase = 3;
                };
                break;
            case 3 : // property:value; or style="property:value"
                     //          ^^^^^
                if( quot === chr ){
                    quot = '';
                } else if( chr === '"' || chr === "'" ){
                    quot = chr;
                } else if( !quot && chr === ';' ){
                    saveCSSProperty( cssText.substring( /** @type {number} */ (start), i ) );
                    phase = 0;
                };
                break;
        };
        if( phase === 1 ){
            saveCSSProperty( cssText.substring( /** @type {number} */ (start) ) );
        };
    };
    return numAttrs ? styles : null;
};

