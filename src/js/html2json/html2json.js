goog.provide( 'html2json' );

goog.requireType( 'htmlparser.typedef.Handler' );
goog.require( 'htmlparser.BOOLEAN_ATTRIBUTES' );
goog.require( 'htmlparser.exec' );
goog.require( 'htmljson.base' );
goog.require( 'htmljson.NODE_TYPE' );
goog.require( 'htmljson.DEFINE.INSTRUCTION_ATTR_PREFIX' );
goog.require( 'VNode' );

/**
 * @param {string} htmlString
 * @param {boolean} allowInvalidTree
 * @param {!Object=} opt_options
 * @return {!HTMLJson}
 */
html2json = function( htmlString, allowInvalidTree, opt_options ){
    const
        json              = [],
        _aryPush          = json.push,
        vnode             = _createVNodeFromHTML( htmlString, allowInvalidTree ),
        options           = opt_options || {},

        isTrimWhitespace  = [ 'none', false ].indexOf( options[ 'trimWhitespaces' ] ) === -1,
        isAggressiveTrim  = options[ 'trimWhitespaces' ] === 'aggressive',
        isRemoveNewlineBetweenFullWidthChars
                          = !!options[ 'removeNewlineBetweenFullWidthChars' ],

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
     * @param {!HTMLJson} parentJSONNode 
     * @param {boolean} isDescendantOfPre 
     * @param {boolean} isTrimNewlines
     */
    function walkNode( currentVNode, parentJSONNode, isDescendantOfPre, isTrimNewlines ){
        var nodeValue, functionNameAndArgs, currentJSONNode, prevJSONNode, vDocFragment;
            // console.log( currentVNode )
        switch( currentVNode.getNodeType() ){
            case htmljson.NODE_TYPE.ELEMENT_NODE :
            case htmljson.NODE_TYPE.ELEMENT_START_TAG :
                var attrs       = {},
                    tagName     = currentVNode.getTagName(),
                    isPreTag    = !!m_FAMILY_OF_PRE_ELEMENT[ tagName ],
                    attributes  = currentVNode._attrs,
                    numAttrs    = 0,
                    i, attrName, attrValue, id, className, textNode;

                if( attributes ){
                    for( attrName in attributes ){
                        attrValue = /** @type {string} */ (htmlparser.BOOLEAN_ATTRIBUTES[ attrName ] ? 1 : attributes[ attrName ]);

                        if( attrName === 'id' ){
                            id = attrValue;
                            continue;
                        } else if( attrName === 'class' ){
                            className = attrValue;
                            continue;
                        } else if( attrName.startsWith( attrPrefix ) ){
                            functionNameAndArgs = codeToObject( attrValue );
    
                            if( functionNameAndArgs.args ){
                                attrValue = [ functionNameAndArgs.funcName ];
                                _aryPush.apply( attrValue, functionNameAndArgs.args );
                            } else {
                                attrValue = functionNameAndArgs.funcName;
                            };
                        };
                        attrs[ attrName ] = /** @type {number | string} */ (m_tryToFiniteNumber( attrValue ));
                        ++numAttrs;
                    };
                };
                tagName = m_createTagName( tagName, id, className );

                if( isPreTag && isTrimWhitespace ){
                    // pre タグの場合、最初と最後のテキストノードが空白文字のみなら削除, 最初のテキストノードの頭の改行文字を削除、最後のテキストノードの後ろの改行文字を削除
                    while( textNode = getFirstTextNode( currentVNode ) ){
                        if( !removeWhitespaces( /** @type {string} */ (textNode.getNodeValue()) ) ){
                            textNode.remove();
                        } else {
                            textNode.setNodeValue( m_trimFirstChar( /** @type {string} */ (textNode.getNodeValue()), '\n' ) );
                            break;
                        };
                    };
                    while( textNode = getLastTextNode( currentVNode ) ){
                        if( !removeWhitespaces( /** @type {string} */ (textNode.getNodeValue()) ) ){
                            textNode.remove();
                        } else {
                            textNode.setNodeValue( m_trimLastChar( /** @type {string} */ (textNode.getNodeValue()), '\n' ) );
                            break;
                        };
                    };
                };

                currentJSONNode = numAttrs ? [ tagName, attrs ] : [ tagName ];

                for( i = 0; i < currentVNode.getChildNodeCount(); ++i ){
                    walkNode( /** @type {!VNode} */ (currentVNode.getChildNodeAt( i )), currentJSONNode, isPreTag || isDescendantOfPre, !!m_TRIM_NEWLINES_ELEMENTS[ tagName ] );
                };
                parentJSONNode.push( currentJSONNode );

                if( !currentVNode.isClosed() ){
                    currentJSONNode.unshift( htmljson.NODE_TYPE.ELEMENT_START_TAG );
                };
                break;
            case htmljson.NODE_TYPE.ELEMENT_END_TAG :
                parentJSONNode.push( [ htmljson.NODE_TYPE.ELEMENT_END_TAG, currentVNode.getTagName() ] );
                break;
            case htmljson.NODE_TYPE.TEXT_NODE :
                nodeValue = m_trimWhiteSpaces( '' + currentVNode.getNodeValue(), isDescendantOfPre, isTrimNewlines, isTrimWhitespace, isAggressiveTrim, isRemoveNewlineBetweenFullWidthChars );
                if( nodeValue ){
                    parentJSONNode.push( nodeValue );
                };
                break;
            case htmljson.NODE_TYPE.CDATA_SECTION :
                if( keepCDATASections ){
                    nodeValue = currentVNode.getNodeValue();
                    parentJSONNode.push( [ htmljson.NODE_TYPE.CDATA_SECTION, m_tryToFiniteNumber( /** @type {string} */ (nodeValue) ) ] );
                };
                break;
            case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION :
                nodeValue = currentVNode.getNodeValue();
                functionNameAndArgs = codeToObject( /** @type {string} */ (nodeValue) );

                currentJSONNode = [ htmljson.NODE_TYPE.PROCESSING_INSTRUCTION, functionNameAndArgs.funcName ];

                if( functionNameAndArgs.args ){
                    _aryPush.apply( currentJSONNode, functionNameAndArgs.args );
                };
                parentJSONNode.push( currentJSONNode );
                break;
            case htmljson.NODE_TYPE.COMMENT_NODE :
                nodeValue = /** @type {string} */ (currentVNode.getNodeValue());
                if( nodeValue.startsWith( '[if' ) && 0 < nodeValue.indexOf( '<![endif]' ) ){
                    // htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER
                    vDocFragment    = _createVNodeFromHTML( extractStringBetween( nodeValue, '>', '<![endif]', true ), true );
                    currentJSONNode = [ htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER, getIECondition( nodeValue ) ];

                    for( i = 0; i < vDocFragment.getChildNodeCount(); ++i ){
                        walkNode( /** @type {!VNode} */ (vDocFragment.getChildNodeAt( i )), currentJSONNode, isDescendantOfPre, isTrimNewlines );
                    };
                    if( 2 < currentJSONNode.length || keepEmptyCondCmt ){
                        parentJSONNode.push( currentJSONNode );
                    };
                } else if( nodeValue.startsWith( '{' ) && 2 < nodeValue.indexOf( '};' ) ){
                    // htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER
                    vDocFragment    = _createVNodeFromHTML( nodeValue.substring( nodeValue.indexOf( '};' ) + 2 ), true );
                    currentJSONNode = [ htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER, extractStringBetween( nodeValue, '{', '};', false ) ];

                    for( i = 0; i < vDocFragment.getChildNodeCount(); ++i ){
                        walkNode( /** @type {!VNode} */ (vDocFragment.getChildNodeAt( i )), currentJSONNode, isDescendantOfPre, isTrimNewlines );
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
                    parentJSONNode.push( [ htmljson.NODE_TYPE.COMMENT_NODE, m_tryToFiniteNumber( nodeValue ) ] );
                };
                break;
            case htmljson.NODE_TYPE.DOCUMENT_NODE :
                nodeValue = currentVNode.getNodeValue();
                if( isTrimWhitespace ){
                    nodeValue = nodeValue
                        .split( '\n' ).join( ' ' )  // 宣言中の改行を半角スペースに
                        .split( '  ' ).join( ' ' ); // 2つ以上の半角スペースをスペースに
                };
                currentJSONNode = [ htmljson.NODE_TYPE.DOCUMENT_NODE, nodeValue ];
                parentJSONNode.push( currentJSONNode );
                for( i = 0; i < currentVNode.getChildNodeCount(); ++i ){
                    walkNode( /** @type {!VNode} */ (currentVNode.getChildNodeAt( i )), currentJSONNode, false, false );
                };
                break;
            case htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE :
                currentJSONNode = [ htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE ];
                parentJSONNode.push( currentJSONNode );
                for( i = 0; i < currentVNode.getChildNodeCount(); ++i ){
                    walkNode( /** @type {!VNode} */ (currentVNode.getChildNodeAt( i )), currentJSONNode, isDescendantOfPre, isTrimNewlines );
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
     * @return {{ funcName : string, args : (!Array|void) }} 
     */
    function codeToObject( string ){
        var from = string.indexOf( argOpeningBracket );
        var name = m_trimChar( from === -1 ? string : string.substr( 0, from ), ' ' ); // 先頭と最後の半角スペースを削除
        var args = from === -1 ? [] : /** @type {!Array} */ (JSON.parse( '[' + string.substring( from + argOpeningBracket.length, string.lastIndexOf( argClosingBracket ) - 2 ) + ']' ));

        if( args.length ){
            return { funcName : name, args : args };
        };
        return { funcName : name };
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
        for( var i = 0, l = vElement.getChildNodeCount(), node; i < l; ++i ){
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
        for( var i = vElement.getChildNodeCount(), node; i; ){
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
    function removeWhitespaces( string ){
        return string.split( '\n' ).join( '' ).split( ' ' ).join( '' ).split( '\t' ).join( '' );
    };
};

/*-----------------------------------------------------------------------------
 *   private
 */

/**
 * 
 * @param {string} html
 * @param {boolean} allowInvalidTree
 * @return {!VNode}
 */
function _createVNodeFromHTML( html, allowInvalidTree ){
    var handler = new Handler( allowInvalidTree );

    htmlparser.exec( html, handler );

    return handler._rootNode;
};

/** 
 * @private
 * @extends {htmlparser.typedef.Handler}
 * @constructor
 * @param {boolean} allowInvalidTree
 */
function Handler( allowInvalidTree ){
    this._allowInvalidTree = allowInvalidTree;

    /** @const {!VNode} */
    this._rootNode = new VNode( false, 0, htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE );
    /** @type {!VNode} */
    this._currentNode = this._rootNode;
};

Handler.prototype.onParseError = function( msg ){
    throw msg;
};

Handler.prototype.onParseDocType = function( doctype ){
    this._rootNode.setNodeType( htmljson.NODE_TYPE.DOCUMENT_NODE );
    this._rootNode.setNodeValue( doctype );
};

Handler.prototype.onParseStartTag = function( tag, attrs, empty, myIndex ){
    if( empty ){
        this._currentNode.insertElementLast( tag, attrs );
    } else {
        this._currentNode = /** @type {!VNode} */ (this._currentNode.insertNodeLast( htmljson.NODE_TYPE.ELEMENT_START_TAG, tag, attrs ));
    };
};

Handler.prototype.onParseEndTag = function( tag, missingEndTag, noStartTag ){
    if( noStartTag ){
        if( this._allowInvalidTree ){
            this._currentNode.insertNodeLast( htmljson.NODE_TYPE.ELEMENT_END_TAG, tag );
        };
    } else if( !missingEndTag || !this._allowInvalidTree ){
        if( tag === this._currentNode.getTagName() ){
            this._currentNode.finalize();
            this._currentNode = /** @type {!VNode} */ (this._currentNode.getParent());
        } else {
            throw 'End tag error! ' + tag;
        };
    };
};

Handler.prototype.onParseText = function( nodeValue ){
    this._currentNode.insertNodeLast( htmljson.NODE_TYPE.TEXT_NODE, nodeValue );
};

Handler.prototype.onParseComment = function( nodeValue ){
    this._currentNode.insertNodeLast( htmljson.NODE_TYPE.COMMENT_NODE, nodeValue );
};

Handler.prototype.onParseCDATASection = function( nodeValue ){
    this._currentNode.insertNodeLast( htmljson.NODE_TYPE.CDATA_SECTION, nodeValue );
};

Handler.prototype.onParseProcessingInstruction = function( nodeValue ){
    this._currentNode.insertNodeLast( htmljson.NODE_TYPE.PROCESSING_INSTRUCTION, nodeValue );
};
