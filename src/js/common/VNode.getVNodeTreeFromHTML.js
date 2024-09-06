goog.require( 'htmljson.VNode.getVNodeTreeFromHTML' );

goog.require( 'htmlparser.exec' );
goog.requireType( 'htmlparser.typedef.Handler' );
goog.require( 'htmljson.VNode' );
goog.require( 'htmljson.NODE_TYPE' );

/**
 * 
 * @param {string} html 
 * @return {!VNode}
 */
htmljson.VNode.getVNodeTreeFromHTML = function getVNodeTreeFromHTML( html ){
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
    /** @const {!Array.<!VNode>} */
    this._stack = [];
};

Handler.prototype.onParseError = function( msg ){ throw msg; };

Handler.prototype.onParseDocType = function( doctype ){
    this._rootNode.setNodeType( htmljson.NODE_TYPE.DOCUMENT_NODE );
    this._rootNode.setData( '<!DOCTYPE ' + doctype + '>' );
};

Handler.prototype.onParseStartTag = function( tag, attrs, empty, myIndex ){
    var attrObj, i, attr, value;

    if( attrs ){
        attrObj = {};
        for( i = 0; i < attrs.length; i += 2 ){
            attr  = attrs[ i ];
            value = attrs[ i + 1 ];
            attrObj[ attr ] = value;
        };
        if( i === 0 ){
            attrs = null;
        };
    };

    vnode = this._currentNode.insertElementLast( tag, attrObj );

    if( !empty ){
        stack.push( this._currentNode );
        this._currentNode = vnode;
    };
};

Handler.prototype.onParseEndTag = function( tag, missingEndTag, noStartTag ){
    if( noStartTag ){
        this._currentNode.insertNoEscapeTextLast( '</' + tag + '>' );
    } else if( !missingEndTag ){
        if( tag === this._currentNode.getTagName() ){
            this._currentNode = stack.pop();
        } else {
            // error
        };
    };
};

Handler.prototype.onParseText = function( text ){
    this._currentNode.insertTextLast( text );
};

Handler.prototype.onParseComment = function( comment ){
    this._currentNode.insertCommentLast( comment );
};

Handler.prototype.onParseCDATASection = function( data ){
    this._currentNode.insertCDATASectionLast( data );
};

Handler.prototype.onParseProcessingInstruction = function( data ){
    this._currentNode.insertProcessingInstructionLast( data );
};
