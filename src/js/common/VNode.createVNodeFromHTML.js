goog.provide( 'htmljson.createVNodeFromHTML' );

goog.require( 'htmlparser.exec' );
goog.requireType( 'htmlparser.typedef.Handler' );

goog.require( 'VNode' );
goog.require( 'htmljson.NODE_TYPE' );

/**
 * 
 * @param {string} html
 * @param {boolean} allowInvalidTree
 * @return {!VNode}
 */
htmljson.createVNodeFromHTML = function( html, allowInvalidTree ){
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

Handler.prototype.onParseError = function( msg ){ throw msg; };

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
