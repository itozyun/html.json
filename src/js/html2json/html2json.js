goog.provide( 'html2json' );

goog.requireType( 'VNode' );
goog.require( 'htmljson.createVNodeFromHTML' );
goog.require( 'htmljson.base' );
goog.require( 'htmljson.NODE_TYPE' );
goog.require( 'htmljson.DEFINE.INSTRUCTION_ATTR_PREFIX' );

const TRIM_LINEBREAKS = { script : !0, style : !0, textarea : !0 };

/**
 * @param {string} htmlString
 * @param {boolean} allowInvalidTree
 * @param {!Object=} opt_options
 */
html2json = function( htmlString, allowInvalidTree, opt_options ){
    const
        json              = [],
        _aryPush          = json.push,
        vnode             = htmljson.createVNodeFromHTML( htmlString, allowInvalidTree ),
        options           = opt_options || {},

        trimWhitespace    = [ 'none', false ].indexOf( options[ 'trimWhitespace' ] ) === -1,
        isTrimAgressive   = options[ 'trimWhitespace' ] === 'agressive',
        removeLineBreaksBetweenFullWidth
                          = !!options[ 'removeLineBreaksBetweenFullWidth' ],

        keepCDATASections = options[ 'keepCDATASections'           ] === true,
        keepComments      = options[ 'keepComments'                ] === true,
        keepEmptyCondCmt  = options[ 'keepEmptyConditionalComment' ] === true,
        attrPrefix        = options[ 'instructionAttrPrefix'       ] || htmljson.DEFINE.INSTRUCTION_ATTR_PREFIX,

        argumentBrackets  = options[ 'argumentBrackets' ] || '()',
        argOpeningBracket = argumentBrackets.substr( 0, argumentBrackets.length / 2 ),
        argClosingBracket = argumentBrackets.substr( argumentBrackets.length );

    let isCcShowLowerStarted = false;

    walkNode( vnode, json, false, false );

    m_normalizeTextNodes( json[ 0 ] );
    return json[ 0 ];

    /**
     * 
     * @param {!VNode} currentVNode 
     * @param {!Array} parentJSONNode 
     * @param {boolean} insidePreTag 
     * @param {boolean} lineBreaksTrimmed
     */
    function walkNode( currentVNode, parentJSONNode, insidePreTag, lineBreaksTrimmed ){
        var nodeValue, functionNameAndArgs, currentJSONNode, prevJSONNode, vDocFragment;
            // console.log( currentVNode )
        switch( currentVNode.getNodeType() ){
            case htmljson.NODE_TYPE.ELEMENT_NODE :
            case htmljson.NODE_TYPE.ELEMENT_START_TAG :
                var attrs       = {},
                    tagName     = currentVNode.getTagName().toLowerCase(),
                    isPreTag    = tagName === 'pre',
                    attributes  = currentVNode.getAttributes(),
                    numAttrs    = 0,
                    i, attrName, attrValue, className = '', textNode;

                if( attributes ){
                    for( attrName in attributes ){
                        attrValue = m_ATTRS_NO_VALUE[ attrName ] ? 1 : attributes[ attrName ];

                        if( attrName === 'id' ){
                            tagName += '#' + attrValue;
                            continue;
                        } else if( attrName === 'class' ){
                            className = '.' + attrValue;
                            continue;
                        } else if( attrName.startsWith( attrPrefix ) ){
                            attrValue = /** @type {string} */ (attrValue);
                            functionNameAndArgs = codeToObject( attrValue );
    
                            if( functionNameAndArgs.args ){
                                attrValue = [ functionNameAndArgs.name ];
                                _aryPush.apply( attrValue, functionNameAndArgs.args );
                            } else {
                                attrValue = functionNameAndArgs.name;
                            };
                        } else if( m_isNumberString( attrValue ) ){
                            attrValue = + attrValue;
                        };
                        attrs[ attrName ] = attrValue;
                        ++numAttrs;
                    };
                };
                tagName += className;

                if( isPreTag && trimWhitespace ){
                    // pre タグの場合、最初と最後のテキストノードが空白文字のみなら削除, 最初のテキストノードの頭の改行文字を削除、最後のテキストノードの後ろの改行文字を削除
                    while( textNode = getFirstTextNode( currentVNode ) ){
                        if( !removeWhitespace( /** @type {string} */ (textNode.getData()) ) ){
                            textNode.remove();
                        } else {
                            textNode.setData( trimFirstChar( /** @type {string} */ (textNode.getData()), '\n' ) );
                            break;
                        };
                    };
                    while( textNode = getLastTextNode( currentVNode ) ){
                        if( !removeWhitespace( /** @type {string} */ (textNode.getData()) ) ){
                            textNode.remove();
                        } else {
                            textNode.setData( trimLastChar( /** @type {string} */ (textNode.getData()), '\n' ) );
                            break;
                        };
                    };
                };

                currentJSONNode = numAttrs ? [ tagName, attrs ] : [ tagName ];

                for( i = 0; i < currentVNode.getChildNodeLength(); ++i ){
                    walkNode( /** @type {!VNode} */ (currentVNode.getChildNodeAt( i )), currentJSONNode, isPreTag || insidePreTag, TRIM_LINEBREAKS[ tagName ] );
                };
                parentJSONNode.push( currentJSONNode );

                if( !currentVNode.closed() ){
                    currentJSONNode.unshift( htmljson.NODE_TYPE.ELEMENT_START_TAG );
                };
                break;
            case htmljson.NODE_TYPE.ELEMENT_END_TAG :
                parentJSONNode.push( [ htmljson.NODE_TYPE.ELEMENT_END_TAG, currentVNode.getTagName().toLowerCase() ] );
                break;
            case htmljson.NODE_TYPE.TEXT_NODE :
                nodeValue = currentVNode.getData();
                if( !insidePreTag && trimWhitespace ){
                    if( lineBreaksTrimmed ){
                        // 先頭と最後の改行文字を削除
                        nodeValue = trimChar( /** @type {string} */ (nodeValue), '\n' );
                    } else {
                        nodeValue = nodeValue.split( '\r\n' ).join( '\n' );
                        if( removeLineBreaksBetweenFullWidth ){
                            nodeValue = toNoLineBreaksBetweenFullWidth( nodeValue );
                        };

                        // タブは一つの半角スペースに
                        nodeValue = nodeValue.split( '\t' ).join( ' ' );

                        // 2つ以上の改行を1つの改行へ
                        while( 0 <= nodeValue.indexOf( '\n\n' ) ){
                            nodeValue = nodeValue.split( '\n\n' ).join( '\n' );
                        };

                        if( isTrimAgressive ){
                            var trimWhitespaceAggressively =
                                // <b>1</b> / <b>3</b>
                                //         ^^^ `/` の両隣のスペースを削除するか？は改行の有無で判断する
                                    // 先頭が改行、かつ
                                    nodeValue.charAt( 0 ) === '\n' &&
                                    // 最後が改行+0個以上の空白文字の場合  
                                    /\n[ ]*$/.test( nodeValue );
                        };

                        // 最後の改行を削除
                        nodeValue = trimLastChar( nodeValue, '\n' );

                        // 改行文字を一つの半角スペースに
                        nodeValue = nodeValue.split( '\n' ).join( ' ' );

                        // 2つ以上の半角スペースを1つの半角スペースへ
                        while( 0 <= nodeValue.indexOf( '  ' ) ){
                            nodeValue = nodeValue.split( '  ' ).join( ' ' );
                        };

                        if( trimWhitespaceAggressively ){
                            // 先頭と最後の半角スペースを削除
                            nodeValue = trimChar( nodeValue, ' ' );
                        };
                        // 半角スペースの保護には \u0020 または &#x20; または &#32; を使う
                        nodeValue = nodeValue.split( '\\u0020' ).join( ' ' ).split( '&#x20;' ).join( ' ' ).split( '&#32;' ).join( ' ' );
                    };
                };
                if( nodeValue ){
                    parentJSONNode.push( m_tryToNumber( nodeValue ) );
                };
                break;
            case htmljson.NODE_TYPE.CDATA_SECTION :
                nodeValue = currentVNode.getData();
                if( keepCDATASections ){
                    // htmljson.NODE_TYPE.COMMENT_NODE
                    parentJSONNode.push( [ htmljson.NODE_TYPE.CDATA_SECTION, m_tryToNumber( /** @type {string} */ (nodeValue) ) ] );
                };
                break;
            case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION :
                nodeValue = currentVNode.getData();
                functionNameAndArgs = codeToObject( /** @type {string} */ (nodeValue) );

                currentJSONNode = [ htmljson.NODE_TYPE.PROCESSING_INSTRUCTION, functionNameAndArgs.name ];

                if( functionNameAndArgs.args ){
                    _aryPush.apply( currentJSONNode, functionNameAndArgs.args );
                };
                parentJSONNode.push( currentJSONNode );
                break;
            case htmljson.NODE_TYPE.COMMENT_NODE :
                nodeValue = currentVNode.getData();
                if( nodeValue.startsWith( '[if' ) && 0 < nodeValue.indexOf( '<![endif]' ) ){
                    // htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER
                    vDocFragment    = htmljson.createVNodeFromHTML( extractStringBetween( nodeValue, '>', '<![endif]', true ), true );
                    currentJSONNode = [ htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER, getIECondition( nodeValue ) ];

                    for( i = 0; i < vDocFragment.getChildNodeLength(); ++i ){
                        walkNode( /** @type {!VNode} */ (vDocFragment.getChildNodeAt( i )), currentJSONNode, insidePreTag, lineBreaksTrimmed );
                    };
                    if( 2 < currentJSONNode.length || keepEmptyCondCmt ){
                        parentJSONNode.push( currentJSONNode );
                    };
                } else if( nodeValue.startsWith( '{' ) && 2 < nodeValue.indexOf( '};' ) ){
                    // htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER
                    vDocFragment    = htmljson.createVNodeFromHTML( nodeValue.substring( nodeValue.indexOf( '};' ) + 2 ), true );
                    currentJSONNode = [ htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER, extractStringBetween( nodeValue, '{', '};', false ) ];

                    for( i = 0; i < vDocFragment.getChildNodeLength(); ++i ){
                        walkNode( /** @type {!VNode} */ (vDocFragment.getChildNodeAt( i )), currentJSONNode, insidePreTag, lineBreaksTrimmed );
                    };
                    if( 2 < currentJSONNode.length || keepEmptyCondCmt ){
                        parentJSONNode.push( currentJSONNode );
                    };
                } else if( nodeValue.startsWith( '[if' ) && 0 < nodeValue.indexOf( '><!' ) ){
                    // htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START
                    // 8:"[if !(IE)]><!"
                    parentJSONNode.push( [ htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START, getIECondition( nodeValue ) ] );
                    isCcShowLowerStarted = true;
                } else if( nodeValue === '<![endif]' && isCcShowLowerStarted ){
                    prevJSONNode = parentJSONNode[ parentJSONNode.length -1 ];

                    if( keepEmptyCondCmt || !prevJSONNode || prevJSONNode[ 0 ] !== htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START ){
                        parentJSONNode.push( [ htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_END ] );
                    } else if( prevJSONNode ){
                        parentJSONNode.pop();
                    };
                    isCcShowLowerStarted = false;
                } else if( keepComments ){
                    // htmljson.NODE_TYPE.COMMENT_NODE
                    parentJSONNode.push( [ htmljson.NODE_TYPE.COMMENT_NODE, m_tryToNumber( nodeValue ) ] );
                };
                break;
            case htmljson.NODE_TYPE.DOCUMENT_NODE :
                nodeValue = currentVNode.getData();
                if( trimWhitespace ){
                    nodeValue = nodeValue
                        .split( '\n' ).join( ' ' )  // 宣言中の改行を半角スペースに
                        .split( '  ' ).join( ' ' ); // 2つ以上の半角スペースをスペースに
                };
                currentJSONNode = [ htmljson.NODE_TYPE.DOCUMENT_NODE, nodeValue ];
                parentJSONNode.push( currentJSONNode );
                for( i = 0; i < currentVNode.getChildNodeLength(); ++i ){
                    walkNode( /** @type {!VNode} */ (currentVNode.getChildNodeAt( i )), currentJSONNode, false, false );
                };
                break;
            case htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE :
                currentJSONNode = [ htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE ];
                parentJSONNode.push( currentJSONNode );
                for( i = 0; i < currentVNode.getChildNodeLength(); ++i ){
                    walkNode( /** @type {!VNode} */ (currentVNode.getChildNodeAt( i )), currentJSONNode, insidePreTag, lineBreaksTrimmed );
                };
                break;
        };
    };

    /**
     * 
     * @param {string} nodeValue 
     * @return {string} 
     */
    function getIECondition( nodeValue ){
        return extractStringBetween( nodeValue, '[', ']', false );
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
     * @param {!VNode} vElement 
     * @return {!VNode | void}
     */
    function getFirstTextNode( vElement ){
        for( var i = 0, l = vElement.getChildNodeLength(), node; i < l; ++i ){
            node = vElement.getChildNodeAt( i );
            if( node.isElement() ){
                node = getFirstTextNode( node );
            };
            if( node && node.getNodeType() === 3 ){
                return node;
            };
        };
    };

    /**
     * 
     * @param {!VNode} vElement 
     * @return {!VNode | void}
     */
    function getLastTextNode( vElement ){
        for( var i = vElement.getChildNodeLength(), node; i; ){
            node = vElement.getChildNodeAt( --i );
            if( node.isElement() ){
                node = getLastTextNode( node );
            };
            if( node && node.getNodeType() === 3 ){
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
        return trimLastChar( trimFirstChar( string, chr ), chr );
    };

    /**
     * 
     * @param {string} string 
     * @return {string} 
     */
    function trimFirstChar( string, chr ){
        while( string.charAt( 0 ) === chr ){ string = string.substr( 1 ); };

        return string;
    };

    /**
     * 
     * @param {string} string 
     * @return {string} 
     */
    function trimLastChar( string, chr ){
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
