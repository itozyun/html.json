goog.require( 'htmljson.VNode.createVNodeFromHTML' );

goog.require( 'htmlparser.exec' );
goog.requireType( 'htmlparser.typedef.Handler' );

goog.require( 'htmljson.VNode' );
goog.require( 'htmljson.NODE_TYPE' );

/**
 * 
 * @param {string} html 
 * @return {!VNode}
 */
htmljson.VNode.createVNodeFromHTML = function( html ){
    var handler = new Handler;

    htmlparser.exec( html, handler );

    return handler._rootNode;
};

/** 
 * @private
 * @extends {htmlparser.typedef.Handler}
 * @constructor
 */
function Handler(){
    /** @const {!VNode} */
    this._rootNode = new VNode( null, 0, htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE );
    /** @type {!VNode} */
    this._current = this._rootNode;
};

Handler.prototype.onParseError = function( msg ){ throw msg; };

Handler.prototype.onParseDocType = function( doctype ){
    this._rootNode.setNodeType( htmljson.NODE_TYPE.DOCUMENT_NODE );
    this._rootNode.setData( doctype );
};

Handler.prototype.onParseStartTag = function( tag, attrs, empty, myIndex ){
    if( empty ){
        this._currentNode.insertElementLast( tag, attrs );
    } else {
        this._currentNode = this._currentNode.insertNodeLast( htmljson.NODE_TYPE.ELEMENT_WITHOUT_END_TAG, tag, attrs );
    };
};

Handler.prototype.onParseEndTag = function( tag, missingEndTag, noStartTag ){
    if( noStartTag ){
        this._currentNode.insertNodeLast( htmljson.NODE_TYPE.ELEMENT_WITHOUT_START_TAG, tag );
    } else if( !missingEndTag ){
        if( tag === this._currentNode.getTagName() ){
            this._currentNode.close();
            this._currentNode = this._currentNode.getParent();
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
