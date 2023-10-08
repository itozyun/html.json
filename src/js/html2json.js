// var JSDOM = require( 'jsdom' ).JSDOM,
var happyDOMWindow = require( 'happy-dom' ).Window;

var TRIM_LINEBREAKS = { script : !0, style : !0, textarea : !0 };
    
var returnByNodeList     = false;
var parentTreeIsInPreTag = false;

/**
 * @param {string} htmlString
 * @param {string|!Object=} opt_selector
 * @param {!Object=} opt_options
 */
p_html2json = function( htmlString, opt_selector, opt_options ){
    var json              = [],
        selector          = typeof opt_selector === 'string' ? opt_selector : '',
        
        options           = opt_selector && typeof opt_selector === 'object' ? opt_selector : opt_options || {},
        trimWhitespace    = options[ 'trimWhitespace' ],
        keepCDATASections  = !!options[ 'keepCDATASections' ],
        keepComments      = !!options[ 'keepComments' ],
        argumentBrackets  = options[ 'argumentBrackets' ] || '()',
        argOpeningBracket = argumentBrackets.substr( 0, argumentBrackets.length / 2 ),
        argClosingBracket = argumentBrackets.substr( argumentBrackets.length ),
        attrPrefix        = options[ 'instructionAttrPrefix' ] || DEFINE_HTML2JSON__INSTRUCTION_ATTR_PREFIX,

        isTrimAgressive   = trimWhitespace === 'agressive',

        window            = new happyDOMWindow(),
        document          = window.document,

        removeLineBreaksBetweenFullWidth
                          = !!options[ 'removeLineBreaksBetweenFullWidth' ],
        currentVNode, targetNodes, i = 0, l;

    trimWhitespace = trimWhitespace !== 'none' && trimWhitespace !== false;

    // https://github.com/capricorn86/happy-dom-performance-test/blob/3f1fd6c5d814e66c4a27ce21ed14c56799fb2de0/lib/happy-dom.test.js#L15
    document.write( htmlString );

    if( selector ){ // Document Fragment
        json.push( HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE );

        targetNodes = document.querySelectorAll( selector );

        for( l = targetNodes.length; i < l; ++i ){
            walkNode( targetNodes[ i ], json, parentTreeIsInPreTag || false, false );
        };
    } else {
        currentVNode = document.firstChild; // doctype or <html>
        if( !document.doctype && !document.getElementsByTagName( 'head' )[ 0 ].childNodes.length ){
            currentVNode = document.body.firstChild;
        };
        while( currentVNode ){
            walkNode( currentVNode, json, false, false );
            currentVNode = currentVNode.nextSibling;
        };
        if( !document.doctype && !returnByNodeList ){
            if( m_isStringOrNumber( json[ 0 ] ) ){
                json.unshift( HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE ); // Document Fragment
            } else if( json.length === 1 ){
                json = json[ 0 ];
            };
        };
    };
    m_mergeTextNodes( json );
    return json;

    /**
     * 
     * @param {!Node} currentVNode 
     * @param {!Array} parentJSONNode 
     * @param {boolean} inPreTag 
     * @param {boolean} trimLineBreaks
     */
    function walkNode( currentVNode, parentJSONNode, inPreTag, trimLineBreaks ){
        var textContent = currentVNode.data,
            functionNameAndArgs, currentJSONNode, childNodeList, nextNode;
            // console.log( currentVNode )
        switch( currentVNode.nodeType ){
            case 1 :
                var attributes  = {},
                    tagName     = currentVNode.tagName.toLowerCase(),
                    isPreTag    = tagName === 'pre',
                    vChildNodes = currentVNode.childNodes,
                    vdomAttrs   = currentVNode.attributes,
                    numAttrs    = vdomAttrs.length,
                    i, l, attribute, attrName, attrValue, className = '', textNode;

                for( i = 0, l = numAttrs; i < l ; ++i ){
                    attribute = vdomAttrs.item( i ),
                    attrName  = attribute.name,
                    attrValue = m_ATTRS_NO_VALUE[ attrName ] ? 1 : attribute.value;

                    if( attrName === 'id' ){
                        tagName += '#' + attrValue;
                        --numAttrs;
                        continue;
                    } else if( attrName === 'class' ){
                        className = '.' + attrValue;
                        --numAttrs;
                        continue;
                    } else if( attrName.indexOf( attrPrefix ) === 0 ){
                        functionNameAndArgs = codeToObject( attrValue );

                        if( functionNameAndArgs.args ){
                            attrValue = [ functionNameAndArgs.name ];
                            attrValue.push.apply( functionNameAndArgs.args );
                        } else {
                            attrValue = functionNameAndArgs.name;
                        };
                    } else if( m_isNumberString( attrValue ) ){
                        attrValue = + attrValue;
                    };
                    attributes[ attrName ] = attrValue;
                };
                tagName += className;

                if( isPreTag && trimWhitespace ){
                    // pre タグの場合、最初と最後のテキストノードが空白文字のみなら削除, 最初のテキストノードの頭の改行文字を削除、最後のテキストノードの後ろの改行文字を削除
                    while( textNode = getFirstTextNode( /** @type {!Element} */ (currentVNode) ) ){
                        if( !removeWhitespace( textNode.data ) ){
                            textNode.remove();
                        } else {
                            textContent = textNode.data;
                            while( textContent.charAt( 0 ) === '\n' ){ textContent = textContent.substr( 1 ); };
                            textNode.data = textContent;
                            break;
                        };
                    };
                    while( textNode = getLastTextNode( /** @type {!Element} */ (currentVNode) ) ){
                        if( !removeWhitespace( textNode.data ) ){
                            textNode.remove();
                        } else {
                            textContent = textNode.data;
                            while( textContent.charAt( textContent.length - 1 ) === '\n' ){ textContent = textContent.substr( 0, textContent.length - 1 ); };
                            textNode.data = textContent;
                            break;
                        };
                    };
                };

                currentJSONNode = numAttrs ? [ tagName, attributes ] : [ tagName ];

                for( i = 0; i < vChildNodes.length; ++i ){
                    walkNode( vChildNodes[ i ], currentJSONNode, isPreTag || inPreTag, TRIM_LINEBREAKS[ tagName ] );
                };
                parentJSONNode.push( currentJSONNode );
                break;
            // case 2 :
            case 3 :
                if( !inPreTag && !trimLineBreaks /** pre, script, style, textarea には実施しない */ && removeLineBreaksBetweenFullWidth ){
                    textContent = toNoLineBreaksBetweenFullWidth( textContent );
                };
                if( !inPreTag && trimWhitespace ){
                    if( trimLineBreaks ){
                        // 先頭と最後の改行文字を削除
                        textContent = trimChar( textContent, '\n' );
                    } else {
                        // タブは一つの半角スペースに
                        textContent = textContent.split( '\t' ).join( ' ' );

                        if( isTrimAgressive ){
                            // <b>1</b> / <b>3</b>
                            //         ^^^ / の両隣のスペースを削除するか？は改行の有無で判断する
                            var trimWhitespaceAggressively =
                                    // 先頭に改行がある場合 前方の全ての空白文字を削除
                                    textContent.charAt( 0 ) === '\n' &&
                                    // 最期が改行+空白文字の場合 後方の全ての空白文字を削除    
                                    !textContent.split( '\n' ).pop().split( ' ' ).join( '' );
                        };

                        // 改行文字を一つの半角スペースに
                        textContent = textContent.split( '\n' ).join( ' ' );

                        // 2つ以上の半角スペースを1つの半角スペースへ
                        while( 0 <= textContent.indexOf( '  ' ) ){
                            textContent = textContent.split( '  ' ).join( ' ' );
                        };

                        if( trimWhitespaceAggressively ){
                            // 先頭と最後の半角スペースを削除
                            textContent = trimChar( textContent, ' ' );
                        };
                        // 先頭または最後の半角スペースの保護には \u0020 を使う
                        textContent = textContent.split( '\\u0020' ).join( ' ' );
                    };
                };
                if( textContent ){
                    parentJSONNode.push( m_tryToNumber( textContent ) );
                };
                break;
            case 4 :
                if( keepCDATASections ){
                    // HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE
                    parentJSONNode.push( [ HTML_DOT_JSON__NODE_TYPE.CDATA_SECTION, m_tryToNumber( textContent ) ] );
                };
                break;
            case 8 :
                // console.log( textContent )
                if( textContent.indexOf( '?' ) === 0 && textContent.charAt( textContent.length - 1 ) === '?' ){
                    functionNameAndArgs = codeToObject( extractStringBetween( textContent, '?', '?', true ) );

                    currentJSONNode = [ HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION, functionNameAndArgs.name ];

                    if( functionNameAndArgs.args ){
                        currentJSONNode.push.apply( currentJSONNode, functionNameAndArgs.args );
                    };
                    parentJSONNode.push( currentJSONNode );
                } else if( textContent.indexOf( '[if' ) === 0 && 0 < textContent.indexOf( '<![endif]' ) ){
                    // HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER
                    returnByNodeList     = true;
                    parentTreeIsInPreTag = inPreTag;
                    // console.log( extractStringBetween( textContent, '>', '<![endif]' ) )
                    childNodeList = p_html2json( extractStringBetween( textContent, '>', '<![endif]', true ), options );
                    returnByNodeList = parentTreeIsInPreTag = false;

                    if( childNodeList.length || m_isNumber( childNodeList ) ){
                        currentJSONNode = [ HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER, getIECondition( textContent ) ];
                        m_isArray( childNodeList )
                            ? currentJSONNode.push.apply( currentJSONNode, childNodeList )
                            : currentJSONNode.push( childNodeList );  // conditional, unescapedText
                        parentJSONNode.push( currentJSONNode );
                    };
                } else if( textContent.indexOf( '[if' ) === 0 && 0 < textContent.indexOf( '><!' ) ){
                    // HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER
                    // 8:"[if !(IE)]><!"
                    currentJSONNode = [ HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER, getIECondition( textContent ) ];

                    while( nextNode = currentVNode.nextSibling ){
                        if( nextNode.nodeType === 8 && nextNode.data === '<![endif]' ){
                            nextNode.remove();
                            break;
                        };
                        walkNode( nextNode, currentJSONNode, inPreTag, trimLineBreaks );
                        nextNode.remove();
                    };
                    if( 2 < currentJSONNode.length ){
                        parentJSONNode.push( currentJSONNode );
                    };
                } else if( keepComments ){
                    // HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE
                    parentJSONNode.push( [ HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE, m_tryToNumber( textContent ) ] );
                };
                break;
            case 10 :
                var xmlDeclarationAndDocumentType =
                        htmlString.substr( 0, htmlString.indexOf( '>', htmlString.indexOf( '<!DOCTYPE ' ) ) + 1 );
                
                if( trimWhitespace ){
                    xmlDeclarationAndDocumentType = xmlDeclarationAndDocumentType
                        .split( '\n' ).join( ' ' )      // 宣言中の改行を半角スペースに
                        .split( '  ' ).join( ' ' )      // 2つ以上の半角スペースをスペースに
                        .split( '> <' ).join( '>\n<' ); // xml 宣言と doctype 宣言の間は改行
                };

                parentJSONNode.push( HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE, xmlDeclarationAndDocumentType );
                break;
        };
    };

    /**
     * 
     * @param {string} textContent 
     * @return {string} 
     */
    function getIECondition( textContent ){
        return extractStringBetween( textContent, '[', ']', false );
    };

    /**
     * 
     * @param {string} string 
     * @return {{ name : string, args : (!Array|void) }} 
     */
    function codeToObject( string ){
        var from = string.indexOf( argOpeningBracket );
        var name = trimChar( from === -1 ? string : string.substr( 0, from ), ' ' ); // 先頭と最後の半角スペースを削除
        var args = from === -1 ? [] : /** @type {!Array} */ (JSON.parse( '[' + string.substring( from + argOpeningBracket.length, string.lastIndexOf( argClosingBracket ) - 2 ) + ']' ));

        if( args.length ){
            return { name : name, args : args };
        };
        return { name : name };
    };

    /**
     * 
     * @param {string} string 
     * @param {string} fromString 
     * @param {string} toString 
     * @param {boolean} useLastIndexOf
     * @return {string} 
     */
    function extractStringBetween( string, fromString, toString, useLastIndexOf ){
        var from = string.indexOf( fromString ) + fromString.length,
            to   = useLastIndexOf ? string.lastIndexOf( toString ) : string.indexOf( toString, from );

        return string.substring( from, to );
    };

    /**
     * 
     * @param {!Element} htmlElement 
     * @return {!Text|void}
     */
    function getFirstTextNode( htmlElement ){
        var childNodes = htmlElement.childNodes,
            i = 0, l = childNodes.length, node;
        
        for( ; i < l; ++i ){
            node = childNodes[ i ];
            if( node.nodeType === 1 ){
                node = getFirstTextNode( /** @type {!Element} */ (node) );
            };
            if( node && node.nodeType === 3 ){
                return /** @type {!Text} */ (node);
            };
        };
    };

    /**
     * 
     * @param {!Element} htmlElement 
     * @return {!Text|void} 
     */
    function getLastTextNode( htmlElement ){
        var childNodes = htmlElement.childNodes,
            i = childNodes.length, node;
        
        for( ; i; ){
            node = childNodes[ --i ];
            if( node.nodeType === 1 ){
                node = getLastTextNode( /** @type {!Element} */ (node) );
            };
            if( node && node.nodeType === 3 ){
                return /** @type {!Text} */ (node);
            };
        };
    };

    /**
     * 
     * @param {string} string 
     * @return {string} 
     */
    function removeWhitespace( string ){
        return string.split( '\n' ).join( '' ).split( ' ' ).join( '' ).split( '\t' ).join( '' );
    };

    /**
     * 
     * @param {string} string 
     * @return {string} 
     */
    function trimChar( string, chr ){
        while( string.charAt( 0 ) === chr ){ string = string.substr( 1 ); };
        while( string.charAt( string.length - 1 ) === chr ){ string = string.substr( 0, string.length - 1 ); };

        return string;
    };

    /**
     * 
     * @param {string} string 
     * @return {string} 
     */
    function toNoLineBreaksBetweenFullWidth( string ){
        // この関数は、HTML文書を文字列として受け取り、全角文字に挟まれた改行コードを削除したHTML文書を文字列として返す
        // 正規表現を使って、全角文字に挟まれた改行コードを空文字に置換する
        // 全角文字の範囲は、Unicodeのコードポイントで指定する
        // \uFF01-\uFF60は全角記号や英数字、\u3040-\u309Fはひらがな、\u30A0-\u30FFはカタカナ、\u4E00-\u9FFFは漢字などを表す
        // \r\nや\nや\rなどの改行コードを表すために、\sというメタ文字を使う
        // gというフラグを使って、文字列全体に対して置換を行う
        return string.replace(/([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])\s([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])/g, "$1$2");
    };
};

module.exports = p_html2json;
