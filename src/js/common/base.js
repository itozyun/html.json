goog.provide( 'htmljson.base' );
goog.provide( 'InstructionHandler' );
goog.provide( 'EnterNodeHandler' );

goog.require( 'VNode' );
goog.require( 'htmlparser.isWhitespace' );
goog.require( 'htmljson.NODE_TYPE' );
goog.require( 'htmljson.DEFINE.USE_XML_NS' );
goog.require( 'htmljson.Traverser.VISITOR_OPTION' );
goog.requireType( 'htmljson.Traverser.EnterHandler' );
goog.require( 'htmljson.Traverser.traverseAllDescendantNodes' );

/**
 * @typedef {Object.<string, (string | number | boolean | null)>}
 */
var Styles;

/**
 * @typedef {Object.<string, (string | number | boolean | Styles | null)>}
 */
var Attrs;

/**
 * @typedef {Array.<number | string | boolean | !Object | !Array | null>}
 */
var InstructionArgs;

/**
 * @typedef {Array.<number | string | Attrs | InstructionArgs | Array.<number | string | Attrs | InstructionArgs | Array>>}
 */
var HTMLJson;

/**
 * @typedef {(function(string, ...InstructionArgs):(!HTMLJson | string | number | boolean | null | void) | !Object.<string, function(...InstructionArgs):(!HTMLJson | string | number | boolean | null | void)>)}
 */
var InstructionHandler;

/**
 * @typedef {function(!VNode) | !Array.<string | number | !function(!VNode):(boolean | void)>}
 */
var EnterNodeHandler;

/**
 * @see https://html.spec.whatwg.org/multipage/syntax.html#optional-tags
 * 
 *   xhtml では省略できないので m_P_END_TAG_LESS_TAGS[tagName.toUpaerCase()] はしない
 * 
 * @const {!Object.<string, boolean>} */
var m_OMITTABLE_END_TAGS = {
        HTML : true, HEAD     : true, BODY    :true, P        :true, DT    : true, DD : true,
        LI   : true, OPTION   : true, TBODY   :true, THEAD    :true, TFOOT : true, TD : true,
        TH   : true, TR       : true, RB      :true, RBC      :true, RP    : true, RT : true,
        RTC  : true, OPTGROUP : true, CAPTION :true, COLGROUP :true
    };

/**
 * @see https://html.spec.whatwg.org/multipage/syntax.html#optional-tags:the-a-element
 *   子である <p> の終了タグの省略ができない親タグの一覧
 * 
 *   xhtml では省略できないので m_P_END_TAG_LESS_TAGS[tagName.toUpaerCase()] はしない
 * @const {!Object.<string, boolean>}
 */
var m_CHILD_P_MUST_HAVE_END_TAG = { A : true, AUDIO : true, DEL : true, INS : true, MAP : true, NOSCRIPT : true, VIDEO : true };

/**
 * @const {!Object.<string, string>}
 */
var m_TAGNAME_TO_NAMESPACE = { xml : 'http://www.w3.org/1999/xhtml', svg : 'http://www.w3.org/2000/svg', math : 'http://www.w3.org/1998/Math/MathML' };

/** 
 * @see https://html.spec.whatwg.org/multipage/syntax.html#optional-tags:the-p-element
 *   </p> を省略できる後続のタグの一覧
 *   xhtml では省略できないので m_P_END_TAG_LESS_TAGS[tagName.toUpaerCase()] はしない
 * 
 * @const {!Object.<string, boolean>}
 */
var m_P_END_TAG_LESS_TAGS = {
        H1      : true, H2         : true, H3       : true, H4       : true, H5        : true, H6       : true,
        ADDRESS : true, BLOCKQUOTE : true, DIV      : true, DL       : true, FIELDSET  : true, FORM     : true,
        HR      : true, LEGEND     : true, MENU     : true, NOSCRIPT : true, OL        : true, P        : true,
        PRE     : true, /* TABLE   : true, */ // IE5 : <table> の直前の </p> を省略すると <table> が <p> の子になってレイアウトが崩れる
        UL      : true,
        CENTER  : true, DIR        : true, NOFRAMES : true, MARQUEE  : true //, legacy
    // HTML5 要素は IE~8 で無視されるので除外
    //  ARTICLE : true, ASIDE      : true, CANVAS   : true, DETAILS  : true, FIGCAPTION : true, FIGURE  : true,
    //  FOOTER  : true, HEADER     : true, HGROUP   : true, MAIN     : true, NAV        : true, SECTION : true
    };

/**
 * @const {!Object.<string, boolean>}
 */
var m_UNESCAPED_ELEMENTS = {
    SCRIPT : true, STYLE : true, TEXTAREA : true, TITLE : true, PLAINTEXT : true, XMP : true,
    script : true, style : true, textarea : true, title : true, plaintext : true, xmp : true
};

/**
 * @const {!Object.<string, boolean>}
 */
var m_TRIM_NEWLINES_ELEMENTS = {
    SCRIPT : true, STYLE : true, TEXTAREA : true,
    script : true, style : true, textarea : true
};

/**
 * @const {!Object.<string, boolean>}
 */
var m_FAMILY_OF_PRE_ELEMENT = {
    PRE : true, LISTING : true,
    pre : true, listing : true
};

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
 * @param {!InstructionHandler} onInstruction
 * @param {!HTMLJson} currentJSONNode 
 * @param {!function((string | !Error))=} opt_onError
 * @param {*=} opt_context
 * @return {!HTMLJson | string | number | boolean | null | void}
 */
function m_executeProcessingInstruction( onInstruction, currentJSONNode, opt_onError, opt_context ){
    var functionName = /** @type {string} */ (currentJSONNode[ 1 ]);
    var args         = currentJSONNode.slice( 2 );
    var result;

    if( typeof onInstruction === 'function' ){
        if( args.length ){
            result = onInstruction.call( opt_context, functionName, args );
        } else {
            result = onInstruction.call( opt_context, functionName );
        };
    } else if( onInstruction[ functionName ] ){
        if( args.length ){
            result = onInstruction[ functionName ].apply( opt_context || onInstruction, args );
        } else {
            result = onInstruction[ functionName ].call( opt_context || onInstruction );
        };
    };

    if( htmljson.DEFINE.DEBUG ){
        if( result != null && !m_isStringOrNumber( result ) && !m_isArray( result ) ){
            opt_onError && opt_onError( 'PROCESSING_INSTRUCTION Error! [' + JSON.stringify( currentJSONNode ) + ']' );
        };
    };
    if( result && m_isArray( result[ 0 ] ) ){ // nodeType を省略した DOCUMENT_FRAGMENT_NODE
        result.unshift( htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE );
    };
    return result;
};

/**
 * 
 * @param {!HTMLJson} parentJSONNode
 * @param {number} index
 * @param {!HTMLJson | string} htmlJson
 */
function m_replaceProcessingInstructionWithHTMLJson( parentJSONNode, index, htmlJson ){
    if( htmlJson[ 0 ] === htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE ){
        htmlJson = /** @type {!HTMLJson} */ (htmlJson);
        htmlJson.shift();
        htmlJson.unshift( index, 1 );
        parentJSONNode.splice.apply( parentJSONNode, htmlJson ); // <= parentJSONNode.splice( myIndex, 1, ...result );
    } else {
        parentJSONNode.splice( index, 1, htmlJson );
    };
};

/**
 * 
 * @param {!InstructionHandler} onInstruction
 * @param {string} attrName 
 * @param {!InstructionArgs | string} value 
 * @param {!function((string | !Error))=} opt_onError
 * @param {*=} opt_context
 * @return {!InstructionArgs | string | number | boolean | null | void}
 */
function m_executeInstructionAttr( onInstruction, attrName, value, opt_onError, opt_context ){
    var result, functionName, args, recursion;

    if( m_isArray( value ) && m_isString( value[ 0 ] ) ){
        value        = /** @type {!Array} */ (value);
        functionName = /** @type {string} */ (value[ 0 ]);
        args         = value.slice( 1 );

        if( typeof onInstruction === 'function' ){
            if( args.length ){
                result = onInstruction.call( opt_context, functionName, args );
            } else {
                result = onInstruction.call( opt_context, functionName );
            };
        } else if( onInstruction[ functionName ] ){
            if( args.length ){
                result = onInstruction[ functionName ].apply( opt_context || onInstruction, args );
            } else {
                result = onInstruction[ functionName ].call( opt_context || onInstruction );
            };
        };
    } else if( m_isString( value ) ){
        value = /** @type {string} */ (value);
        if( typeof onInstruction === 'function' ){
            result = onInstruction.call( opt_context, value  );
        } else if( onInstruction[ value ] ){
            result = onInstruction[ value ].call( opt_context || onInstruction );
        };
    } else if( htmljson.DEFINE.DEBUG ){
        opt_onError && opt_onError( 'Invalid InstructionAttr value! [' + attrName + '=' + value + ']' );
    };

    if( m_isArray( result ) ){
        recursion = m_executeInstructionAttr( onInstruction, attrName, /** @type {!InstructionArgs} */ (result), opt_onError, opt_context );

        if( recursion !== undefined ){
            result = recursion;
        };
    };
    return result;
};

function m_isEnterNodeHandler( v ){
    return m_isArray( v ) || typeof v === 'function';
};

/**
 * 
 * @param {!HTMLJson} currentJsonNode 
 * @param {VNode | null} parentVNode 
 * @param {!EnterNodeHandler} enterNodeHandler
 * @return {!VNode} 
 */
function m_executeEnterNodeHandler( currentJsonNode, parentVNode, enterNodeHandler ){
    var currentVNode = m_createVNodeFromHTMLJson( currentJsonNode, true );
    var i, l, selector, handler;

    VNode.currentRestrictedVNode = currentVNode;

    if( parentVNode ){
        if( parentVNode._childNodes ){
            parentVNode._childNodes.push( currentVNode );
        } else {
            parentVNode._childNodes = [ currentVNode ];
        };
    };

    if( !m_isArray( enterNodeHandler ) ){
        /** @type {!function(!VNode)} */ (enterNodeHandler)( currentVNode );
    } else {
        enterNodeHandler = /** @type {!Array.<string | number | !function(!VNode):(boolean | void)>} */ (enterNodeHandler);
        for( i = 0, l = enterNodeHandler.length; i < l; i += 2 ){
            selector = /** @type {string | number}                    */ (enterNodeHandler[ i + 0 ]);
            handler  = /** @type {!function(!VNode):(boolean | void)} */ (enterNodeHandler[ i + 1 ]);
            if( m_isNumber( selector ) ){
                if( selector === currentVNode._nodeType ){
                    if( handler( currentVNode ) === true ){
                        break;
                    };
                };
            } else if( selector === '*' ){
                if( handler( currentVNode ) === true ){
                    break;
                };
            } else if( m_isString( selector ) ){
                if( selector === currentVNode._tagName ){
                    if( handler( currentVNode ) === true ){
                        break;
                    };
                };
            } else if( htmljson.DEFINE.DEBUG ){
                throw 'onEnterNode: invalid selector found! ' + selector;
            };
        };
    };
    return currentVNode;
};

/**
 * 
 * @param {string} unsafeText 
 * @return {string}
 */
function m_escapeForHTML( unsafeText ){
    return unsafeText
               .split( '&lt;' ).join( '&amp;lt;' )
               .split( '&gt;' ).join( '&amp;gt;' )
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
    } else if( strValue === '' ){
        strValue = _ + _;
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
 * @param {!HTMLJson | string | number} htmlJsonNode
 * @return {number}
 */
function m_getChildNodeStartIndex( htmlJsonNode ){
    var nodeTypeOrTagName = htmlJsonNode[ 0 ];
    var nodeTYpe          = m_getNodeType( htmlJsonNode );
    var isElement         = nodeTYpe === htmljson.NODE_TYPE.ELEMENT_NODE || nodeTYpe === htmljson.NODE_TYPE.ELEMENT_START_TAG;
    var indexAttrs;

    if( isElement ){
        indexAttrs = m_isNumber( nodeTypeOrTagName ) ? 2 : 1;
        return m_isAttributes( htmlJsonNode[ indexAttrs ] ) ? indexAttrs + 1 : indexAttrs;
    };

    return nodeTypeOrTagName === htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE
               ? 1
          : nodeTypeOrTagName === htmljson.NODE_TYPE.DOCUMENT_NODE
            || nodeTypeOrTagName === htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER
            || nodeTypeOrTagName === htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER
               ? 2
               : Infinity;
};

/**
 * 
 * @param {!HTMLJson | string | number} htmlJsonNode string | number を与えても正しく動作する
 * @return {boolean}
 */
function m_hasChildren( htmlJsonNode ){
    return m_getChildNodeStartIndex( htmlJsonNode ) < htmlJsonNode.length;
};

/**
 * 
 * @param {!HTMLJson | string | number} htmlJsonNode string | number を与えても正しく動作する
 * @return {boolean}
 */
function m_canHasChildren( htmlJsonNode ){
    return [ htmljson.NODE_TYPE.DOCUMENT_NODE, htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE,
             htmljson.NODE_TYPE.ELEMENT_NODE , htmljson.NODE_TYPE.ELEMENT_START_TAG,
             htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER,
             htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER ].indexOf( m_getNodeType( htmlJsonNode ) ) !== -1;
};

/**
 * 連続する Text の結合
 * @param {!HTMLJson} rootHTMLJson 
 */
function m_normalizeTextNodes( rootHTMLJson ){
    function insertText(){
        lastParentJSONNode.splice( textNodeIndex, 0, /** @type {string | number} */ (m_tryToFiniteNumber( text )) );
        text = '';
    };
    var text = '', lastDepth, lastParentJSONNode, textNodeIndex;

    htmljson.Traverser.traverseAllDescendantNodes(
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
            if( text && lastDepth !== depth ){
                insertText();
                return htmljson.Traverser.VISITOR_OPTION.INSERTED_BEFORER;
            } else if( m_getNodeType( currentJSONNode ) === htmljson.NODE_TYPE.TEXT_NODE ){
                if( m_isStringOrNumber( currentJSONNode ) ){
                    text += currentJSONNode;
                } else {
                    text += currentJSONNode[ 1 ];
                };
                parentJSONNode.splice( myIndex, 1 );
                lastDepth          = depth;
                lastParentJSONNode = parentJSONNode;
                textNodeIndex      = myIndex;
                return htmljson.Traverser.VISITOR_OPTION.REMOVED;
            } else if( text ){
                insertText();
                return htmljson.Traverser.VISITOR_OPTION.INSERTED_BEFORER;
            };
        }
    );

    if( text ){
        insertText();
    };
};

/**
 * 
 * @param {string} string 
 * @return {string} 
 */
function m_normalizeNewlines( string ){
    return string.split( '\r\n' ).join( '\n' ).split( '\r' ).join( '\n' );
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
 * `div#main.default-color` -> `['DIV', 'main', 'default-color']`
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
 * @param {!Styles} styles 
 * @return {string}
 */
function m_toCSSTest( styles ){
    var cssText = [],
        i = -1, name, value;

    for( name in styles ){
        value = styles[ name ];
        value === '0px' && ( value = 0 );
        cssText[ ++i ] = m_toSnakeCase( name ) + ':' + m_escapeForHTML( '' + value );
    };
    return cssText.join( ';' ).substr( 1 );
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
    function saveCSSProperty( property, value ){
        styles[ property ] = value === '0px' ? 0 : m_tryToFiniteNumber( value );
        ++numProps;
    };

    var phase    = 0,
        l        = cssText.length,
        i        = 0,
        styles   = {},
        numProps = 0,
        chr, start, quot, property;

    while( i < l ){
        chr = cssText.charAt( i );
        switch( phase ){
            case 0 :
                if( !htmlparser.isWhitespace( chr ) ){
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
                if( !htmlparser.isWhitespace( chr ) ){
                    start = i;
                    phase = 3;
                };
                break;
            case 3 : // property:value;
                     //          ^^^^^
                if( quot === chr ){
                    quot = '';
                } else if( !quot ){
                    if( chr === '"' || chr === "'" ){
                        quot = chr;
                    } else if( chr === ';' ){
                        saveCSSProperty( property, cssText.substring( /** @type {number} */ (start), i ) );
                        phase = 0;
                    };
                };
                break;
        };
        if( phase === 3 ){
            saveCSSProperty( property, cssText.substring( /** @type {number} */ (start) ) );
        };
    };
    return numProps ? styles : null;
};

/**
 * @param {!HTMLJson} rootHTMLJson 非破壊
 * @param {boolean} isRestrictedMode
 * @return {!VNode}
 */
function m_createVNodeFromHTMLJson( rootHTMLJson, isRestrictedMode ){
    var vnodeRoot, parentNodeStack;

    htmljson.Traverser.traverseAllDescendantNodes(
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
            /**
             * @param {number} nodeType 
             * @param {(string | number)=} opt_nodeValueOrTag 
             * @param {(Attrs | InstructionArgs | null)=} opt_attrsOrArgs
             */
            function insertNode( nodeType, opt_nodeValueOrTag, opt_attrsOrArgs ){
                if( vnodeRoot ){
                    if( depth < parentNodeStack.length ){
                        parentNodeStack.length = depth;
                    };

                    var parentVNode  = parentNodeStack[ parentNodeStack.length - 1 ],
                        currentVNode = /** @type {!VNode} */ (parentVNode.insertNodeLast( nodeType, opt_nodeValueOrTag, opt_attrsOrArgs ));

                    if( m_hasChildren( /** @type {!HTMLJson} */ (currentJSONNode) ) ){
                        parentNodeStack[ depth ] = currentVNode;
                    };
                } else {
                    vnodeRoot = new VNode( isRestrictedMode, 0, nodeType, opt_nodeValueOrTag, opt_attrsOrArgs );
                    parentNodeStack = [ vnodeRoot ];
                };
            };

            if( m_isStringOrNumber( currentJSONNode ) ){
                insertNode( htmljson.NODE_TYPE.TEXT_NODE, /** @type {string | number} */ (currentJSONNode) );
            } else {
                currentJSONNode = /** @type {!HTMLJson} */ (currentJSONNode);

                var arg0      = currentJSONNode[ 0 ],
                    arg1      = currentJSONNode[ 1 ],
                    attrIndex = 1,
                    tagName   = arg0,
                    args, i, l;

                switch( arg0 ){
                    case htmljson.NODE_TYPE.DOCUMENT_NODE :
                    case htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER :
                    case htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER :
                        insertNode( arg0, /** @type {string} */ (arg1) );
                        break;
                    case htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE :
                        insertNode( arg0 );
                        break;
                    case htmljson.NODE_TYPE.TEXT_NODE :
                    case htmljson.NODE_TYPE.CDATA_SECTION :
                    case htmljson.NODE_TYPE.COMMENT_NODE :
                    case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START :
                    case htmljson.NODE_TYPE.ELEMENT_END_TAG :
                        insertNode( arg0, /** @type {string | number} */ (arg1) );
                        break;
                    case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_END :
                        insertNode( arg0 );
                        break;
                    case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION :
                        for( args = [], i = 2, l = currentJSONNode.length; i < l; ++i ){
                            args[ i - 2 ] = currentJSONNode[ i ];
                        };
                        insertNode( arg0, /** @type {string} */ (arg1), l - 2 ? args : null );
                        break;
                    case htmljson.NODE_TYPE.ELEMENT_NODE :
                    case htmljson.NODE_TYPE.ELEMENT_START_TAG :
                        tagName   = arg1;
                        attrIndex = 2;
                    default :
                        if( m_isString( tagName ) ){
                            insertNode( /** @type {number} */ (attrIndex === 1 ? htmljson.NODE_TYPE.ELEMENT_NODE : arg0), /** @type {string} */ (tagName), /** @type {Attr | void} */ (currentJSONNode[ attrIndex ] ) );
                        };
                };
            };
            if( isRestrictedMode ){
                return htmljson.Traverser.VISITOR_OPTION.BREAK;
            };
        }
    );
    return vnodeRoot;
};
