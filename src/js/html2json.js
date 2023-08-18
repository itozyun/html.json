var JSDOM = require( 'jsdom' ).JSDOM,
// copy to ./js-externs/externs.js
    CLEANUP_ONLY_1ST_AND_LAST_LINEBREAKS = {script:!0,style:!0,textarea:!0,noscript:!0};

p_html2json = function( htmlString, opt_keepCommnetNode, opt_argumentBrackets ){
    var json                 = [],
        argumentBracketStart = opt_argumentBrackets ? opt_argumentBrackets.substr( 0, opt_argumentBrackets.length / 2 ) : '(',
        argumentBracketEnd   = opt_argumentBrackets ? opt_argumentBrackets.substr( argumentBracketStart.length ) : ')',
        currentChildNodeList = json,
        jsdom                = new JSDOM( htmlString, { includeNodeLocations : true } ),
        document             = jsdom.window.document,
        currentNode          = document.firstChild,
        isDocument;

    while( currentNode ){
        currentChildNodeList = walkNode( currentNode, currentChildNodeList, false, false );
        currentNode = currentNode.nextSibling;
    };

    if( !isDocument ){
        if( 1 < json.length ){
            return [ HTML_JSON_TYPE_DOCUMENT_FRAGMENT_NODE, json ];
        } else if( p_isString( json[ 0 ] ) ){
            return [ HTML_JSON_TYPE_TEXT_NODE, json[ 0 ] ];
        } else if( json.length ){
            return json[ 0 ];
        } else {
            return [ HTML_JSON_TYPE_COMMENT_NODE, '' ];
        };
    };
    return json;

    function walkNode( currentNode, currentChildNodeList, underPreTag, cleanupOnly1stAndLastLineBreaks ){
        var returnChildNodeList,
            textContent      = currentNode.data,
            generatedByJsdom = !jsdom.nodeLocation( currentNode );

        switch( currentNode.nodeType ){
            case 1 :
                var attributes      = {},
                    childNodeList   = !generatedByJsdom ? [] : currentChildNodeList,
                    tagName         = currentNode.tagName.toLowerCase(),
                    isPreTag        = tagName === 'pre',
                    jsdomChildNodes = currentNode.childNodes,
                    jsdomAttrs      = currentNode.attributes,
                    numAttrs        = jsdomAttrs.length,
                    i, l, attribute, attrName, attrValue, className = '', textNode;

                for( i = 0, l = numAttrs; i < l ; ++i ){
                    attribute = jsdomAttrs.item( i ),
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
                        var functionNameAndArgs = parseFunctionCall( attrValue );

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

                if( isPreTag ){
                    // pre タグの場合、最初と最後のテキストノードが空白文字のみなら削除, 最初のテキストノードの頭の改行文字を削除、最後のテキストノードの後ろの改行文字を削除
                    while( textNode = getFirstTextNode( currentNode ) ){
                        if( !cleanupText( textNode.data ) ){
                            textNode.remove();
                        } else {
                            textContent = textNode.data;
                            while( textContent.charAt( 0 ) === '\n' ){ textContent = textContent.substr( 1 ); };
                            textNode.data = textContent;
                            break;
                        };
                    };
                    while( textNode = getLastTextNode( currentNode ) ){
                        if( !cleanupText( textNode.data ) ){
                            textNode.remove();
                        } else {
                            textContent = textNode.data;
                            while( textContent.charAt( textContent.length - 1 ) === '\n' ){ textContent = textContent.substr( 0, textContent.length - 1 ); };
                            textNode.data = textContent;
                            break;
                        };
                    };
                };
                for( i = 0; i < jsdomChildNodes.length; ++i ){
                    walkNode( jsdomChildNodes[ i ], childNodeList, isPreTag || underPreTag, CLEANUP_ONLY_1ST_AND_LAST_LINEBREAKS[ tagName ] );
                };
                if( childNodeList.length === 1 && p_isString( childNodeList[ 0 ] ) ){
                    childNodeList = childNodeList[ 0 ];
                };

                if( !generatedByJsdom ){
                    if( numAttrs && childNodeList.length ){
                        currentChildNodeList.push( [ tagName, attributes, childNodeList ] );
                    } else if( numAttrs ){
                        currentChildNodeList.push( [ tagName, attributes ] );
                    } else if( childNodeList.length ){
                        currentChildNodeList.push( [ tagName, childNodeList ] );
                    } else {
                        currentChildNodeList.push( [ tagName ] );
                    };
                };
                break;
            // case 2 :
            case 3 :
                if( !underPreTag ){
                    if( cleanupOnly1stAndLastLineBreaks ){
                        // 先頭と最後の改行文字を削除
                        textContent = removeFirstAndLastChars( textContent, '\n' );
                    } else {
                        // 改行文字を削除, タブは一つの半角スペースに
                        textContent = textContent.split( '\n' ).join( '' ).split( '\t' ).join( ' ' );

                        // 2つ以上の半角スペースを1つの半角スペースへ
                        while( textContent.match( '  ' ) ){ textContent = textContent.split( '  ' ).join( ' ' ); };

                        // 先頭と最後の半角スペースを削除
                        textContent = removeFirstAndLastChars( textContent, ' ' );

                        // 先頭または最後の半角スペースの保護には \u0020 を使う
                        textContent = textContent.split( '\\u0020' ).join( ' ' );
                    };
                };
                if( textContent ){
                    currentChildNodeList.push( unescapeForJSON( textContent ) );
                };
                break;
            case 8 :
                if( textContent.indexOf( '?' ) === 0 && textContent.charAt( textContent.length - 1 ) === '?' ){
                    var functionNameAndArgs = parseFunctionCall( pickupString( textContent, '?', '?' ) );

                    if( functionNameAndArgs.args ){
                        currentChildNodeList.push( [ HTML_JSON_TYPE_DYNAMIC_CONTENTS, functionNameAndArgs.name, functionNameAndArgs.args ] );
                    } else {
                        currentChildNodeList.push( [ HTML_JSON_TYPE_DYNAMIC_CONTENTS, functionNameAndArgs.name ] );
                    };
                } else if( textContent.indexOf( '[if' ) === 0 && 0 < textContent.indexOf( '<![endif]' ) ){
                    // この下に動的コンテンツを仕込むことは出来ません。動的コンテンツとして下の階層が隠れるコメントを書きだします
                    // "[if (lt IE 9)]><script>var __vml;</script><![endif]"
                    // HTML_JSON_TYPE_CONDITIONAL_COMMENT_HIDE_LOWER
                    currentChildNodeList.push( [
                        HTML_JSON_TYPE_CONDITIONAL_COMMENT_HIDE_LOWER, // conditional, unescapedText
                        getConditionalExpression( textContent ),
                        pickupString( textContent, '>', '<![endif]' )
                    ] );
                } else if( textContent.indexOf( '[if' ) === 0 && 0 < textContent.indexOf( '><!' ) ){
                    // HTML_JSON_TYPE_CONDITIONAL_COMMENT_SHOW_LOWER
                    // 8:"[if !(IE)]><!"
                    var childNodeList = [], nextNode;

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
                            getConditionalExpression( textContent ),
                            childNodeList
                        ] );
                    };
                } else if( opt_keepCommnetNode ){
                    // HTML_JSON_TYPE_COMMENT_NODE
                    currentChildNodeList.push( [ HTML_JSON_TYPE_COMMENT_NODE, textContent ] );
                };
                break;
            case 10 :
                if( !generatedByJsdom ){
                    var xmlDeclarationAndDocumentType =
                            htmlString.substr( 0, htmlString.indexOf( '>', htmlString.indexOf( '<!DOCTYPE ' ) ) + 1 )
                                      .split( '\n' ).join( ' ' )      // 宣言中の改行を半角スペースに
                                      .split( '  ' ).join( ' ' )      // 2つ以上の半角スペースをスペースに
                                      .split( '> <' ).join( '>\n<' ); // xml 宣言と doctype 宣言の間は半角スペースで

                    currentChildNodeList.push( HTML_JSON_TYPE_DOCUMENT_NODE, xmlDeclarationAndDocumentType, returnChildNodeList = [] );
                    isDocument = true;
                };
                break;
        };
        return returnChildNodeList || currentChildNodeList;
    };

    function getConditionalExpression( textContent ){
        return pickupString( textContent, '[', ']' );
    };

    function parseFunctionCall( string ){
        var from = string.indexOf( argumentBracketStart ),
            name = removeFirstAndLastChars( from === -1 ? string : string.substr( 0, from ), ' ' ), // 先頭と最後の半角スペースを削除
            args = from === -1 ? [] : JSON.parse( '[' + string.substring( from + argumentBracketStart.length, string.lastIndexOf( argumentBracketEnd ) ) + ']' );

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

    function pickupString( string, fromString, toString ){
        var from = string.indexOf( fromString ) + fromString.length,
            to   = string.indexOf( toString, from );

        return string.substring( from, to );
    };

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

    function cleanupText( string ){
        return string.split( '\n' ).join( '' ).split( ' ' ).join( '' ).split( '\t' ).join( '' );
    };

    function removeFirstAndLastChars( string, chr ){
        while( string.charAt( 0 ) === chr ){ string = string.substr( 1 ); };
        while( string.charAt( string.length - 1 ) === chr ){ string = string.substr( 0, string.length - 1 ); };

        return string;
    };
};

module.exports = p_html2json;