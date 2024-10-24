goog.provide( 'html2json.main' );

goog.requireType( 'htmlparser.typedef.Handler' );
goog.require( 'htmlparser.BOOLEAN_ATTRIBUTES' );
goog.require( 'htmlparser.exec' );
goog.require( 'htmljson.base' );
goog.require( 'htmljson.NODE_TYPE' );
goog.require( 'htmljson.DEFINE.INSTRUCTION_ATTR_PREFIX' );
goog.require( 'json2json.process' );
goog.require( 'VNode' );

/**
 * @param {string} htmlString
 * @param {boolean} allowInvalidTree
 * @param {!function((string | !Error))=} opt_onError
 * @param {!Object=} opt_options
 * @return {!HTMLJson}
 */
html2json.main = function( htmlString, allowInvalidTree, opt_onError, opt_options ){
    const
        _aryPush          = [].push,
        rootVNode         = _createVNodeFromHTML( htmlString, allowInvalidTree, opt_onError ),
        options           = opt_options || {},
        attrPrefix        = options[ 'instructionAttrPrefix' ] || htmljson.DEFINE.INSTRUCTION_ATTR_PREFIX,
        argumentBrackets  = options[ 'argumentBrackets'      ] || '()',
        argOpeningBracket = argumentBrackets.substr( 0, argumentBrackets.length / 2 ),
        argClosingBracket = argumentBrackets.substr( argumentBrackets.length / 2 );

    let isCcShowLowerStarted = false, rootHTMLJson;

    walkNode( rootVNode, null );

    if( options[ 'trimWhitespaces' ] == null ){
        options[ 'trimWhitespaces' ] = true;
    };
    if( options[ 'keepCDATASections' ] == null ){
        options[ 'keepCDATASections' ] = false;
    };
    if( options[ 'keepComments' ] == null ){
        options[ 'keepComments' ] = false;
    };
    if( options[ 'keepEmptyConditionalComment' ] == null ){
        options[ 'keepEmptyConditionalComment' ] = false;
    };
    json2json.process( rootHTMLJson, undefined, undefined, opt_onError, options );

    return rootHTMLJson;

    /**
     * 
     * @param {!VNode} currentVNode 
     * @param {!HTMLJson | null} parentHTMLJson
     */
    function walkNode( currentVNode, parentHTMLJson ){
        var nodeValue, functionNameAndArgs, currentHTMLJson, vDocFragment,
            attrs, tagName, attributes, numAttrs,
            i, attrName, attrValue, id, className;

            // console.log( currentVNode )
        switch( currentVNode.getNodeType() ){
            case htmljson.NODE_TYPE.ELEMENT_NODE :
            case htmljson.NODE_TYPE.ELEMENT_START_TAG :
                attrs      = {};
                tagName    = currentVNode.getTagName();
                attributes = currentVNode._attrs;
                numAttrs   = 0;

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

                currentHTMLJson = numAttrs ? [ tagName, attrs ] : [ tagName ];

                for( i = 0; i < currentVNode.getChildNodeCount(); ++i ){
                    walkNode( /** @type {!VNode} */ (currentVNode.getChildNodeAt( i )), currentHTMLJson );
                };
                parentHTMLJson.push( currentHTMLJson );

                if( !currentVNode.isClosed() ){
                    currentHTMLJson.unshift( htmljson.NODE_TYPE.ELEMENT_START_TAG );
                };
                break;
            case htmljson.NODE_TYPE.ELEMENT_END_TAG :
                parentHTMLJson.push( [ htmljson.NODE_TYPE.ELEMENT_END_TAG, currentVNode.getTagName() ] );
                break;
            case htmljson.NODE_TYPE.TEXT_NODE :
                nodeValue = currentVNode.getNodeValue();
                if( nodeValue !== '' ){
                    parentHTMLJson.push( nodeValue );
                };
                break;
            case htmljson.NODE_TYPE.CDATA_SECTION :
                parentHTMLJson.push(
                    [
                        htmljson.NODE_TYPE.CDATA_SECTION,
                        m_tryToFiniteNumber( /** @type {string} */ (currentVNode.getNodeValue()) )
                    ]
                );
                break;
            case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION :
                nodeValue = currentVNode.getNodeValue();
                functionNameAndArgs = codeToObject( /** @type {string} */ (nodeValue) );

                currentHTMLJson = [ htmljson.NODE_TYPE.PROCESSING_INSTRUCTION, functionNameAndArgs.funcName ];

                if( functionNameAndArgs.args ){
                    _aryPush.apply( currentHTMLJson, functionNameAndArgs.args );
                };
                parentHTMLJson.push( currentHTMLJson );
                break;
            case htmljson.NODE_TYPE.COMMENT_NODE :
                nodeValue = /** @type {string} */ (currentVNode.getNodeValue());

                if( nodeValue.startsWith( '[if' ) && 0 < nodeValue.indexOf( '<![endif]' ) ){
                    vDocFragment    = _createVNodeFromHTML( extractStringBetween( nodeValue, '>', '<![endif]', true ), true, opt_onError );
                    currentHTMLJson = [ htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER, getIECondition( nodeValue ) ];

                    for( i = 0; i < vDocFragment.getChildNodeCount(); ++i ){
                        walkNode( /** @type {!VNode} */ (vDocFragment.getChildNodeAt( i )), currentHTMLJson );
                    };
                    parentHTMLJson.push( currentHTMLJson );
                } else if( nodeValue.startsWith( '{' ) && 2 < nodeValue.indexOf( '};' ) ){
                    vDocFragment    = _createVNodeFromHTML( nodeValue.substring( nodeValue.indexOf( '};' ) + 2 ), true, opt_onError );
                    currentHTMLJson = [ htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER, extractStringBetween( nodeValue, '{', '};', false ) ];

                    for( i = 0; i < vDocFragment.getChildNodeCount(); ++i ){
                        walkNode( /** @type {!VNode} */ (vDocFragment.getChildNodeAt( i )), currentHTMLJson );
                    };
                    parentHTMLJson.push( currentHTMLJson );
                } else if( nodeValue.startsWith( '[if' ) && 0 < nodeValue.indexOf( '><!' ) ){
                    // 8:"[if !(IE)]><!"
                    parentHTMLJson.push( [ htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START, getIECondition( nodeValue ) ] );
                    isCcShowLowerStarted = true;
                } else if( nodeValue === '<![endif]' && isCcShowLowerStarted ){
                    parentHTMLJson.push( [ htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_END ] );
                    isCcShowLowerStarted = false;
                } else {
                    parentHTMLJson.push( [ htmljson.NODE_TYPE.COMMENT_NODE, m_tryToFiniteNumber( nodeValue ) ] );
                };
                break;
            case htmljson.NODE_TYPE.DOCUMENT_NODE :
                rootHTMLJson = [ htmljson.NODE_TYPE.DOCUMENT_NODE, currentVNode.getNodeValue() ];
                for( i = 0; i < currentVNode.getChildNodeCount(); ++i ){
                    walkNode( /** @type {!VNode} */ (currentVNode.getChildNodeAt( i )), rootHTMLJson );
                };
                break;
            case htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE :
                rootHTMLJson = [ htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE ];
                for( i = 0; i < currentVNode.getChildNodeCount(); ++i ){
                    walkNode( /** @type {!VNode} */ (currentVNode.getChildNodeAt( i )), rootHTMLJson );
                };
                break;
        };
    };

    /**
     * @param {string} nodeValue 
     * @return {string} */
    function getIECondition( nodeValue ){
        return extractStringBetween( nodeValue, '[', ']', false );
    };

    /**
     * @param {string} string 
     * @return {{ funcName : string, args : (!Array | void) }} */
    function codeToObject( string ){
        var from = string.indexOf( argOpeningBracket );
        var to   = string.lastIndexOf( argClosingBracket );
        var name = m_trimChar( from === -1 ? string : string.substr( 0, from ), ' ' ); // 先頭と最後の半角スペースを削除
        var args = from === -1 ? [] : /** @type {!Array} */ (JSON.parse( '[' + string.substring( from + argOpeningBracket.length, to ) + ']' ));

        if( args.length ){
            return { funcName : name, args : args };
        };
        return { funcName : name };
    };

    /**
     * @param {string} string 
     * @param {string} fromString 
     * @param {string} toString 
     * @param {boolean} useLastIndexOf
     * @return {string} */
    function extractStringBetween( string, fromString, toString, useLastIndexOf ){
        var from = string.indexOf( fromString ) + fromString.length,
            to   = useLastIndexOf ? string.lastIndexOf( toString ) : string.indexOf( toString, from );

        return string.substring( from, to );
    };

    /**
     * 
     * @param {string} html
     * @param {boolean} allowInvalidTree
     * @param {!function((string | !Error))=} opt_onError
     * @return {!VNode}
     */
    function _createVNodeFromHTML( html, allowInvalidTree, opt_onError ){
        var handler = new Handler( allowInvalidTree, opt_onError );

        htmlparser.exec( html, handler );

        return handler._rootNode;
    };
};

/*-----------------------------------------------------------------------------
 *   private
 */

/** 
 * @private
 * @extends {htmlparser.typedef.Handler}
 * @constructor
 * @param {boolean} allowInvalidTree
 * @param {!function((string | !Error))=} opt_onError
 */
function Handler( allowInvalidTree, opt_onError ){
    this._allowInvalidTree = allowInvalidTree;

    /** @const {!VNode} */
    this._rootNode = new VNode( false, 0, htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE );
    /** @type {!VNode} */
    this._currentNode = this._rootNode;

    this._onError = opt_onError;
};

Handler.prototype.onParseError = function( msg ){
    if( this._onError ){
        this._onError( msg );
    } else if( htmljson.DEFINE.DEBUG ){
        throw 'Handler.prototype.onParseError: error!' + msg;
    };
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
            if( this._onError ){
                this._onError( 'End tag error! ' + tag );
            } else if( htmljson.DEFINE.DEBUG ){
                throw 'Handler.prototype.onParseEndTag: End tag error! ' + tag;
            };
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
