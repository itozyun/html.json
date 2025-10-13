goog.provide( 'html2json.main' );

goog.requireType( 'htmlparser.typedef.Handler' );
goog.require( 'htmlparser.DEFINE' );
goog.require( 'htmlparser.BOOLEAN_ATTRIBUTES' );
goog.require( 'htmlparser.exec' );
goog.require( 'htmljson.base' );
goog.require( 'htmljson.NODE_TYPE' );
goog.require( 'htmljson.DEFINE.INSTRUCTION_ATTR_PREFIX' );
goog.require( 'json2json.process' );

/**
 * @param {string} htmlString
 * @param {boolean=} opt_allowInvalidTree
 * @param {!function((string | !Error))=} opt_onError
 * @param {!Object=} opt_options
 * @return {!HTMLJson}
 */
html2json.main = function( htmlString, opt_allowInvalidTree, opt_onError, opt_options ){
    const options          = opt_options || {},
          argumentBrackets = options[ 'argumentBrackets' ] || '()',
          attrPrefix       = options[ 'instructionAttrPrefix' ] || htmljson.DEFINE.INSTRUCTION_ATTR_PREFIX,
          rootHTMLJson     = createHTMLJsonFromHTML(
                  htmlString,
                  attrPrefix,
                  argumentBrackets.substr( 0, argumentBrackets.length / 2 ),
                  argumentBrackets.substr( argumentBrackets.length / 2 ),
                  !!opt_allowInvalidTree,
                  opt_onError
              );

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
};

/*-----------------------------------------------------------------------------
 *   private
 */

/**
 * @private
 * @param {string} string
 * @param {string} argOpeningBracket (
 * @param {string} argClosingBracket )
 * @param {!function((string | !Error))=} opt_onError
 * @return {!Array} */
function codeToObject( string, argOpeningBracket, argClosingBracket, opt_onError ){
    var from = string.indexOf( argOpeningBracket );
    var to   = string.lastIndexOf( argClosingBracket );
    var name = m_trimChar( from === -1 ? string : string.substr( 0, from ), ' ' ); // 先頭と最後の半角スペースを削除
    var args;

    if( from !== -1 ){
        try {
            // TODO arguments のパーサを書く… loose な json と等価のもの
            args = /** @type {!Array} */ (JSON.parse( '[' + string.substring( from + argOpeningBracket.length, to ) + ']' ));
        } catch( O_o ) {
            opt_onError && opt_onError( O_o );
        };
    };

    if( args && args.length ){
        return [ name, args ];
    };
    return [ name ];
};

/**
 * @private
 * @param {string} html
 * @param {boolean} allowInvalidTree
 * @param {!function((string | !Error))=} opt_onError
 * @return {!HTMLJson}
 */
function createHTMLJsonFromHTML( html, attrPrefix, argOpeningBracket, argClosingBracket, allowInvalidTree, opt_onError ){
    var handler = new HTML2JsonHandler( attrPrefix, argOpeningBracket, argClosingBracket, allowInvalidTree, opt_onError );

    htmlparser.exec( html, handler );

    return handler._rootNode;
};

/** 
 * @private
 * @constructor
 * @implements {htmlparser.typedef.Handler}
 * 
 * @param {string} attrPrefix :
 * @param {string} argOpeningBracket (
 * @param {string} argClosingBracket )
 * @param {boolean} allowInvalidTree
 * @param {!function((string | !Error))=} opt_onError
 */
function HTML2JsonHandler( attrPrefix, argOpeningBracket, argClosingBracket, allowInvalidTree, opt_onError ){
    this._attrPrefix        = attrPrefix;
    this._argOpeningBracket = argOpeningBracket;
    this._argClosingBracket = argClosingBracket;
    this._allowInvalidTree  = allowInvalidTree;
    this._onError           = opt_onError;

    /** @const {!HTMLJson} */
    this._rootNode = [ htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE ];
    /** @type {!HTMLJson} */
    this._currentNode = this._rootNode;
    /** @type {!Array.<!HTMLJson>} */
    this._tree = [ this._rootNode ];

    this._isCcShowLowerStarted = false;
};

HTML2JsonHandler.prototype.onParseError = function( msg ){
    if( this._onError ){
        this._onError( msg );
    } else if( htmljson.DEFINE.DEBUG ){
        throw 'HTML2JsonHandler#onParseError: error!' + msg;
    };
};

if( htmlparser.DEFINE.USE_DOCUMENT_TYPE_NODE ){
    HTML2JsonHandler.prototype.onParseDocType = function( doctype ){
        this._rootNode.splice( 0, 1, htmljson.NODE_TYPE.DOCUMENT_NODE, doctype );
    };
};

HTML2JsonHandler.prototype.onParseStartTag = function( tagName, attrs, empty, myIndex ){
    attrs = /** @type {Attrs} */ (attrs);

    var numAttrs = 0,
        attrName, attrValue, id, className, functionNameAndArgs, newHTMLJson;

    if( attrs ){
        for( attrName in attrs ){
            attrValue = /** @type {string | number} */ (htmlparser.BOOLEAN_ATTRIBUTES[ attrName ] ? 1 : attrs[ attrName ]);

            if( attrName === 'id' ){
                id = /** @type {string} */ (attrValue);
                delete attrs[ attrName ];
            } else if( attrName === 'class' ){
                className = /** @type {string} */ (attrValue);
                delete attrs[ attrName ];
            } else {
                if( attrName === 'style' ){
                    attrValue = m_parseCSSText( /** @type {string} */ (attrValue) );
                    if( !attrValue ){
                        delete attrs[ attrName ];
                        continue;
                    };
                    attrValue = m_toCSSTest( attrValue );
                } else if( attrName.startsWith( this._attrPrefix ) ){
                    functionNameAndArgs = codeToObject( /** @type {string} */ (attrValue), this._argOpeningBracket, this._argClosingBracket, this._onError );
    
                    if( functionNameAndArgs[ 1 ] ){
                        attrValue = [ functionNameAndArgs[ 0 ] ];
                        attrValue.push.apply( attrValue, functionNameAndArgs[ 1 ] );
                    } else {
                        attrValue = functionNameAndArgs[ 0 ];
                    };
                };
                attrs[ attrName ] = /** @type {string | number} */ (m_tryToFiniteNumber( attrValue ));
                ++numAttrs;
            };
        };
    };
    newHTMLJson = [ m_createTagName( tagName, id, className ) ];

    if( numAttrs ){
        newHTMLJson[ 1 ] = attrs;
    };

    this._currentNode.push( newHTMLJson );

    if( !empty ){
        newHTMLJson.unshift( htmljson.NODE_TYPE.ELEMENT_START_TAG  )
        this._currentNode = newHTMLJson;
        this._tree.push( newHTMLJson );
    };
};

HTML2JsonHandler.prototype.onParseEndTag = function( tagName, isInvalidEndTagOmission, isMissingStartTag ){
    if( isMissingStartTag ){
        if( this._allowInvalidTree ){
            this._currentNode.push( [ htmljson.NODE_TYPE.ELEMENT_END_TAG, tagName ] );
        };
    } else if( !isInvalidEndTagOmission || !this._allowInvalidTree ){
        if( tagName === m_parseTagName( /** @type {string} */ (this._currentNode[ 1 ]) )[ 0 ] ){
            this._currentNode.shift(); // htmljson.NODE_TYPE.ELEMENT_START_TAG を削除
            this._tree.pop();
            this._currentNode = this._tree[ this._tree.length - 1 ];
        } else {
            if( this._onError ){
                this._onError( 'End tag error! ' + tagName );
            } else if( htmljson.DEFINE.DEBUG ){
                throw 'HTML2JsonHandler#onParseEndTag: End tag error! ' + tagName;
            };
        };
    };
};

HTML2JsonHandler.prototype.onParseText = function( nodeValue ){
    if( nodeValue ){
        this._currentNode.push( [ htmljson.NODE_TYPE.TEXT_NODE, m_normalizeNewlines( nodeValue ) ] );
    };
};

HTML2JsonHandler.prototype.onParseComment = function( nodeValue ){
    /**
     * @param {string} nodeValue 
     * @return {string} */
    function getIECondition( nodeValue ){
        return extractStringBetween( nodeValue, '[', ']', false );
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
    var newHTMLJson;

    if( nodeValue.startsWith( '[if' ) && 0 < nodeValue.indexOf( '<![endif]' ) ){
        newHTMLJson = createHTMLJsonFromHTML(
            extractStringBetween( nodeValue, '>', '<![endif]', true ),
            this._attrPrefix,
            this._argOpeningBracket,
            this._argClosingBracket,
            true,
            this._onError
        );
        newHTMLJson.splice( 0, 1, htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER, getIECondition( nodeValue ) );
    } else if( nodeValue.startsWith( '{' ) && 2 < nodeValue.indexOf( '};' ) ){
        newHTMLJson = createHTMLJsonFromHTML(
            nodeValue.substring( nodeValue.indexOf( '};' ) + 2 ),
            this._attrPrefix,
            this._argOpeningBracket,
            this._argClosingBracket,
            true,
            this._onError
        );
        newHTMLJson.splice( 0, 1, htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER, extractStringBetween( nodeValue, '{', '};', false ) );
    } else if( nodeValue.startsWith( '[if' ) && 0 < nodeValue.indexOf( '><!' ) ){
        // 8:"[if !(IE)]><!"
        newHTMLJson = [ htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START, getIECondition( nodeValue ) ];
        this._isCcShowLowerStarted = true;
    } else if( nodeValue === '<![endif]' && this._isCcShowLowerStarted ){
        newHTMLJson = [ htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_END ];
        this._isCcShowLowerStarted = false;
    } else {
        newHTMLJson = [ htmljson.NODE_TYPE.COMMENT_NODE, m_tryToFiniteNumber( m_normalizeNewlines( nodeValue ) ) ];
    };
    this._currentNode.push( newHTMLJson );
};

if( htmlparser.DEFINE.USE_CDATA_SECTION ){
    HTML2JsonHandler.prototype.onParseCDATASection = function( nodeValue ){
        this._currentNode.push( [ htmljson.NODE_TYPE.CDATA_SECTION, m_tryToFiniteNumber( m_normalizeNewlines( nodeValue ) ) ] );
    };
};

if( htmlparser.DEFINE.USE_PROCESSING_INSTRUCTION ){
    HTML2JsonHandler.prototype.onParseProcessingInstruction = function( nodeValue ){
        var functionNameAndArgs = codeToObject( nodeValue, this._argOpeningBracket, this._argClosingBracket, this._onError ),
            newHTMLJson         = [ htmljson.NODE_TYPE.PROCESSING_INSTRUCTION, functionNameAndArgs[ 0 ] ];
    
        if( functionNameAndArgs[ 1 ] ){
            newHTMLJson.push.apply( newHTMLJson, functionNameAndArgs[ 1 ] );
        };
        this._currentNode.push( newHTMLJson );
    };
};
