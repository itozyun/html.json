// var JSDOM = require( 'jsdom' ).JSDOM,
var happyDOMWindow = require( 'happy-dom' ).Window;

var CLEANUP_ONLY_1ST_AND_LAST_LINEBREAKS = { script : !0, style : !0, textarea : !0 };
    
var returnWithoutStrictness = false;

/**
 * @param {string} htmlString
 * @param {string|!Object=} opt_selector
 * @param {!Object=} opt_options
 */
p_html2json = function( htmlString, opt_selector, opt_options ){
    var json                 = [],
        currentChildNodeList = json,

        selector             = typeof opt_selector === 'string' ? opt_selector : '',
        
        options              = opt_selector && typeof opt_selector === 'object' ? opt_selector : opt_options || {},
        trimWhitespace       = options[ 'trimWhitespace' ],
        keepCommnets         = !!options[ 'keepCommnets' ],
        argumentBrackets     = options[ 'argumentBrackets' ] || '()',
        argOpeningBracket    = argumentBrackets.substr( 0, argumentBrackets.length / 2 ),
        argClosingBracket    = argumentBrackets.substr( argumentBrackets.length ),

        isTrimAgressive      = trimWhitespace === 'agressive',

        window               = new happyDOMWindow(),
        document             = window.document,
        currentNode, targetNodes, i = 0, l;

    // https://github.com/capricorn86/happy-dom-performance-test/blob/3f1fd6c5d814e66c4a27ce21ed14c56799fb2de0/lib/happy-dom.test.js#L15
    document.write( htmlString );

    if( !selector && !document.doctype ){
        selector = 'body>*';
    };

    if( selector ){
        targetNodes = document.querySelectorAll( selector );

        for( l = targetNodes.length; i < l; ++i ){
            currentChildNodeList = walkNode( targetNodes[ i ], currentChildNodeList, false, false );
        };

        if( returnWithoutStrictness ){
            return json.length === 1 ? json[ 0 ] : json;
        } else if( 1 < json.length ){
            return [ HTML_JSON_TYPE_DOCUMENT_FRAGMENT_NODE, json ];
        } else if( p_isStringOrNumber( json[ 0 ] ) ){
            return [ HTML_JSON_TYPE_TEXT_NODE, json[ 0 ] ];
        } else if( json.length ){
            return json[ 0 ];
        } else {
            return [ HTML_JSON_TYPE_COMMENT_NODE, '' ];
        };
    } else {
        currentNode = document.firstChild;
        while( currentNode ){
            currentChildNodeList = walkNode( currentNode, currentChildNodeList, false, false );
            currentNode = currentNode.nextSibling;
        };
    };
    return json;

    /**
     * 
     * @param {!Node} currentNode 
     * @param {!Array} currentChildNodeList 
     * @param {boolean} underPreTag 
     * @param {boolean} cleanupOnly1stAndLastLineBreaks 
     * @return {!Array} 
     */
    function walkNode( currentNode, currentChildNodeList, underPreTag, cleanupOnly1stAndLastLineBreaks ){
        var returnChildNodeList,
            textContent = currentNode.data,
            functionNameAndArgs, nextNode;

        switch( currentNode.nodeType ){
            case 1 :
                var attributes     = {},
                    tagName        = currentNode.tagName.toLowerCase(),
                    isPreTag       = tagName === 'pre',
                    vdomChildNodes = currentNode.childNodes,
                    vdomAttrs      = currentNode.attributes,
                    numAttrs       = vdomAttrs.length,
                    i, l, attribute, attrName, attrValue, className = '', childNodeList, textNode;

                for( i = 0, l = numAttrs; i < l ; ++i ){
                    attribute = vdomAttrs.item( i ),
                    attrName  = attribute.name,
                    attrValue = p_ATTR_NO_VALUE[ attrName ] ? 1 : unescapeForJSON( attribute.value );

                    if( attrName === 'id' ){
                        tagName += '#' + attrValue;
                        --numAttrs;
                        continue;
                    } else if( attrName === 'class' ){
                        className = '.' + attrValue;
                        --numAttrs;
                        continue;
                    } else if( attrName.charAt( 0 ) === ':' ){
                        functionNameAndArgs = codeToObject( attrValue );

                        if( functionNameAndArgs.args ){
                            attrValue = [ functionNameAndArgs.name, functionNameAndArgs.args ];
                        } else {
                            attrValue = functionNameAndArgs.name;
                        };
                    } else if( attrValue === '' + parseInt( attrValue, 10 ) ){
                        attrValue = parseInt( attrValue, 10 );
                    };
                    attributes[ attrName ] = attrValue;
                };
                tagName += className;

                if( isPreTag && trimWhitespace ){
                    // pre タグの場合、最初と最後のテキストノードが空白文字のみなら削除, 最初のテキストノードの頭の改行文字を削除、最後のテキストノードの後ろの改行文字を削除
                    while( textNode = getFirstTextNode( currentNode ) ){
                        if( !removeWhitespace( textNode.data ) ){
                            textNode.remove();
                        } else {
                            textContent = textNode.data;
                            while( textContent.charAt( 0 ) === '\n' ){ textContent = textContent.substr( 1 ); };
                            textNode.data = textContent;
                            break;
                        };
                    };
                    while( textNode = getLastTextNode( currentNode ) ){
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

                if( tagName === 'noscript' ){
                    returnWithoutStrictness = true;
                    childNodeList = p_html2json( vdomChildNodes[ 0 ].data, 'body>*', options );
                    returnWithoutStrictness = false;
                } else {
                    childNodeList = [];
                    for( i = 0; i < vdomChildNodes.length; ++i ){
                        walkNode( vdomChildNodes[ i ], childNodeList, isPreTag || underPreTag, CLEANUP_ONLY_1ST_AND_LAST_LINEBREAKS[ tagName ] );
                    };
                };

                if( childNodeList.length === 1 && p_isStringOrNumber( childNodeList[ 0 ] ) ){
                    childNodeList = childNodeList[ 0 ];
                };

                if( childNodeList.length || p_isNumber( childNodeList ) ){
                    numAttrs
                        ? currentChildNodeList.push( [ tagName, attributes, childNodeList ] )
                        : currentChildNodeList.push( [ tagName, childNodeList ] );
                } else {
                    numAttrs
                        ? currentChildNodeList.push( [ tagName, attributes ] )
                        : currentChildNodeList.push( [ tagName ] );
                };
                break;
            // case 2 :
            case 3 :
                if( !underPreTag && trimWhitespace ){
                    if( cleanupOnly1stAndLastLineBreaks ){
                        // 先頭と最後の改行文字を削除
                        textContent = trimChar( textContent, '\n' );
                    } else {
                        // タブは一つの半角スペースに
                        textContent = textContent.split( '\t' ).join( ' ' );

                        if( isTrimAgressive ){
                            // <b>1</b> / <b>3</b>
                            //         ^^^ / の両隣のスペースを削除するか？は改行の有無で判断する
                            var removeWhitespaceAggressively =
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

                        if( removeWhitespaceAggressively ){
                            // 先頭と最後の半角スペースを削除
                            textContent = trimChar( textContent, ' ' );
                        };
                        // 先頭または最後の半角スペースの保護には \u0020 を使う
                        textContent = textContent.split( '\\u0020' ).join( ' ' );
                    };
                };
                if( textContent ){
                    currentChildNodeList.push( p_isNumberString( textContent ) ? ( + textContent ) : unescapeForJSON( textContent ) );
                };
                break;
            case 8 :
                if( textContent.indexOf( '?' ) === 0 && textContent.charAt( textContent.length - 1 ) === '?' ){
                    functionNameAndArgs = codeToObject( extractStringBetween( textContent, '?', '?' ) );

                    if( functionNameAndArgs.args ){
                        currentChildNodeList.push( [ HTML_JSON_TYPE_PROCESSING_INSTRUCTION, functionNameAndArgs.name, functionNameAndArgs.args ] );
                    } else {
                        currentChildNodeList.push( [ HTML_JSON_TYPE_PROCESSING_INSTRUCTION, functionNameAndArgs.name ] );
                    };
                } else if( textContent.indexOf( '[if' ) === 0 && 0 < textContent.indexOf( '<![endif]' ) ){
                    // HTML_JSON_TYPE_CONDITIONAL_COMMENT_HIDE_LOWER
                    returnWithoutStrictness = true;
                    childNodeList = p_html2json( extractStringBetween( textContent, '>', '<![endif]' ), 'body>*', options );
                    returnWithoutStrictness = false;

                    if( childNodeList.length ){
                        currentChildNodeList.push( [
                            HTML_JSON_TYPE_CONDITIONAL_COMMENT_HIDE_LOWER, // conditional, unescapedText
                            getIECondition( textContent ),
                            childNodeList
                        ] );
                    };
                } else if( textContent.indexOf( '[if' ) === 0 && 0 < textContent.indexOf( '><!' ) ){
                    // HTML_JSON_TYPE_CONDITIONAL_COMMENT_SHOW_LOWER
                    // 8:"[if !(IE)]><!"
                    childNodeList = [];

                    while( nextNode = currentNode.nextSibling ){
                        if( nextNode.nodeType === 8 && nextNode.data === '<![endif]' ){
                            nextNode.remove();
                            break;
                        };
                        walkNode( nextNode, childNodeList, underPreTag, false );
                        nextNode.remove();
                    };
                    if( childNodeList.length ){
                        currentChildNodeList.push( [
                            HTML_JSON_TYPE_CONDITIONAL_COMMENT_SHOW_LOWER,
                            getIECondition( textContent ),
                            childNodeList
                        ] );
                    };
                } else if( keepCommnets ){
                    // HTML_JSON_TYPE_COMMENT_NODE
                    currentChildNodeList.push( [ HTML_JSON_TYPE_COMMENT_NODE, textContent ] );
                };
                break;
            case 10 :
                var xmlDeclarationAndDocumentType =
                        htmlString.substr( 0, htmlString.indexOf( '>', htmlString.indexOf( '<!DOCTYPE ' ) ) + 1 )
                                    .split( '\n' ).join( ' ' )      // 宣言中の改行を半角スペースに
                                    .split( '  ' ).join( ' ' )      // 2つ以上の半角スペースをスペースに
                                    .split( '> <' ).join( '>\n<' ); // xml 宣言と doctype 宣言の間は半角スペースで

                currentChildNodeList.push( HTML_JSON_TYPE_DOCUMENT_NODE, xmlDeclarationAndDocumentType, returnChildNodeList = [] );
                break;
        };
        return returnChildNodeList || currentChildNodeList;
    };

    /**
     * 
     * @param {string} textContent 
     * @return {string} 
     */
    function getIECondition( textContent ){
        return extractStringBetween( textContent, '[', ']' );
    };

    /**
     * 
     * @param {*} string 
     * @return {{ name : string, args : (!Array|void) }} 
     */
    function codeToObject( string ){
        var from = string.indexOf( argOpeningBracket ),
            name = trimChar( from === -1 ? string : string.substr( 0, from ), ' ' ), // 先頭と最後の半角スペースを削除
            args = from === -1 ? [] : JSON.parse( '[' + string.substring( from + argOpeningBracket.length, string.lastIndexOf( argClosingBracket ) ) + ']' );

        if( args.length === 1 ){
            return { name : name, args : args[ 0 ] };
        } else if( args.length ){
            return { name : name, args : args };
        };
        return { name : name };
    };

    function unescapeForJSON( escapedText ){
        return escapedText
                   .split( '&' ).join( '&amp;' )    // 既にアンエスケープ済かもしれないので、一旦エスケープ
                   .split( '<' ).join( '&lt;' )
                   .split( '>' ).join( '&gt;' )
                   .split( '&amp;' ).join( '&' )    // エスケープ
                   .split( '&lt;' ).join( '<' )
                   .split( '&gt;' ).join( '>' );
    };

    /**
     * 
     * @param {string} string 
     * @param {string} fromString 
     * @param {string} toString 
     * @return {string} 
     */
    function extractStringBetween( string, fromString, toString ){
        var from = string.indexOf( fromString ) + fromString.length,
            to   = string.indexOf( toString, from );

        return string.substring( from, to );
    };

    /**
     * 
     * @param {!Element} htmlElement 
     * @return {!Node} 
     */
    function getFirstTextNode( htmlElement ){
        var childNodes = htmlElement.childNodes,
            i = 0, l = childNodes.length, node;
        
        for( ; i < l; ++i ){
            node = childNodes[ i ];
            if( node.nodeType === 1 ){
                node = getFirstTextNode( node );
            };
            if( node && node.nodeType === 3 ){
                return node;
            };
        };
    };

    /**
     * 
     * @param {!Element} htmlElement 
     * @return {!Node} 
     */
    function getLastTextNode( htmlElement ){
        var childNodes = htmlElement.childNodes,
            i = childNodes.length, node;
        
        for( ; i; ){
            node = childNodes[ --i ];
            if( node.nodeType === 1 ){
                node = getLastTextNode( node );
            };
            if( node && node.nodeType === 3 ){
                return node;
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
};

module.exports = p_html2json;
