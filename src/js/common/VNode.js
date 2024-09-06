goog.provide( 'htmljson.VNode' );

goog.require( 'htmljson.base' );
goog.require( 'htmljson.NODE_TYPE' );

htmljson.VNode = VNode;

/**
 * 
 * @param {!VNode | null} parent 
 * @param {number} insertPosition
 * @param {number} nodeType 
 * @param {string | number=} opt_tagOrData 
 * @param {!Object=} opt_attrs 
 */
function VNode( parent, insertPosition, nodeType, opt_tagOrData, opt_attrs ){
    /** @type {!VNode | null} */
    this._parent = parent;
    /** @type {number} */
    this._nodeType = nodeType;

    if( parent ){
        /** @type {!Array.<VNode>} */
        var childNodes = parent._childNodes = parent._childNodes || [];
        if( 0 <= insertPosition ){
            childNodes.splice( index, 0, this );
        } else {
            childNodes.push( this );
        };
    };

    switch( nodeType ){
        case htmljson.NODE_TYPE.ELEMENT_NODE           :
            /** @type {strng} */
            this._tagName = opt_tagOrData;
            /** @type {!Object | null | void} */
            this._attrs   = opt_attrs;
            break;
        case htmljson.NODE_TYPE.TEXT_NODE              :
        case htmljson.NODE_TYPE.COMMENT_NODE           :
        case htmljson.NODE_TYPE.DOCUMENT_NODE          :
        case htmljson.NODE_TYPE.CDATA_SECTION          :
        case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION :
            /** @type {strng | number} */
            this._data = opt_tagOrData;
            break;
    };
};

/**
 * 
 * @return {number}
 */
VNode.prototype.getJSON = function(){
    var json = [ this._nodeType ], childNodes = this._childNodes, i, l;

    switch( nodeType ){
        case htmljson.NODE_TYPE.ELEMENT_NODE           :
            json = [ this._tagName ];
            if( m_isAttributes( this._attrs ) ){
                json[ 1 ] = this._attrs;
            };
            break;
        case htmljson.NODE_TYPE.TEXT_NODE              :
        case htmljson.NODE_TYPE.COMMENT_NODE           :
        case htmljson.NODE_TYPE.DOCUMENT_NODE          :
        case htmljson.NODE_TYPE.CDATA_SECTION          :
        case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION :
            json[ 1 ] = this._data;
            break;
    };

    if( childNodes ){
        for( i = 0, l = childNodes.length; i < l; ++i ){
            json.push( childNodes[ i ].getJSON() );
        };
    };
    return json;
};

/**
 * 
 * @return {number}
 */
VNode.prototype.getNodeType = function(){
    return this._nodeType;
};

/**
 * 
 * @param {number} nodeType
 */
VNode.prototype.setNodeType = function( nodeType ){
    this._nodeType = nodeType;
};

/**
 * 
 * @return {string | number | void}
 */
VNode.prototype.getData = function(){
    switch( this._nodeType ){
        case htmljson.NODE_TYPE.TEXT_NODE              :
        case htmljson.NODE_TYPE.CDATA_SECTION          :
        case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION :
        case htmljson.NODE_TYPE.COMMENT_NODE           :
        case htmljson.NODE_TYPE.DOCUMENT_NODE          :
            return this._data;
    };
};

/**
 * 
 * @param {string | number | void}
 */
VNode.prototype.setData = function( data ){
    switch( this._nodeType ){
        case htmljson.NODE_TYPE.TEXT_NODE              :
        case htmljson.NODE_TYPE.CDATA_SECTION          :
        case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION :
        case htmljson.NODE_TYPE.COMMENT_NODE           :
        case htmljson.NODE_TYPE.DOCUMENT_NODE          :
            this._data = data;
            break;
    };
};

/**
 * 
 * @return {!Object | null}
 */
VNode.prototype.getAttributes = function(){
    return m_isAttributes( this._attrs ) ? this._attrs : null;
};

/**
 * 
 * @return {string}
 */
VNode.prototype.getTagName = function(){
    return this._tagName;
};

/**
 * 
 * @return {!VNode | null}
 */
VNode.prototype.getParent = function(){
    return this._parent;
};

/**
 * 
 * @return {!VNode | null}
 */
VNode.prototype.getNextNode = function(){
    return this._parent && this._parent.getChildNodeAt( this.getMyIndex() + 1 ) || null;
};

/**
 * 
 * @return {number}
 */
VNode.prototype.getChildNodeLength = function(){
    return this._childNodes && this._childNodes.length;
};

/**
 * @return {!VNode | null}
 */
VNode.prototype.getFirstChild = function(){
    return this.getChildNodeAt( 0 );
};

/**
 * @return {!VNode | null}
 */
VNode.prototype.getLastChild = function(){
    return this.getChildNodeAt( this.getChildNodeLength() - 1 );
};

/**
 * @param {number}
 * @return {!VNode | null}
 */
VNode.prototype.getChildNodeAt = function( index ){
    return this._childNodes && this._childNodes[ index ] || null;
};

/**
 * 
 * @return {number}
 */
VNode.prototype.getMyIndex = function(){
    return this._parent ? this._parent._childNodes.indexOf( this ) : -1;
};

/**
 * 
 */
VNode.prototype.remove = function(){
    var index = this.getMyIndex();

    if( 0 <= index ){
        this._parent._childNodes.splice( index, 1 );
        this._parent = null;
    };
};

/*=============================================================================
 *
 *  insertElement*
 *
 */

/**
 * @param {string} tagName 
 * @param {!Object=} opt_attrs 
 * @param {(string | number)=} opt_textContent  
 * @return {!VNode | null} */
VNode.prototype.insertElementBefore = function( tagName, opt_attrs, opt_textContent ){
    return this._parent ? this._parent.insertElementAt( this.getMyIndex(), tagName, opt_attrs, opt_textContent ) : null;
};
/**
 * @param {string} tagName 
 * @param {!Object=} opt_attrs 
 * @param {(string | number)=} opt_textContent 
 * @return {!VNode} */
VNode.prototype.insertElementFirst = function( tagName, opt_attrs, opt_textContent ){
    return this.insertElementAt( 0, tagName, opt_attrs, opt_textContent );
};
/**
 * @param {number} index
 * @param {string} tagName 
 * @param {!Object=} opt_attrs 
 * @param {(string | number)=} opt_textContent 
 * @return {!VNode} */
VNode.prototype.insertElementAt = function( index, tagName, opt_attrs, opt_textContent ){
    var element = new VNode( this, index, htmljson.NODE_TYPE.ELEMENT_NODE, tagName, opt_attrs );

    if( opt_textContent != null ){
        element.insertTextFirst( opt_textContent );
    };
    return element;
};
/**
 * @param {string} tagName 
 * @param {!Object=} opt_attrs 
 * @param {(string | number)=} opt_textContent 
 * @return {!VNode} */
VNode.prototype.insertElementLast = function( tagName, opt_attrs, opt_textContent ){
    return this.insertElementAt( this.getChildNodeLength(), tagName, opt_attrs, opt_textContent );
};
/**
 * @param {string} tagName 
 * @param {!Object=} opt_attrs 
 * @param {(string | number)=} opt_textContent
 * @return {!VNode | null} */
VNode.prototype.insertElementAfter = function( tagName, opt_attrs, opt_textContent ){
    return this._parent ? this._parent.insertElementAt( this.getMyIndex() + 1, tagName, opt_attrs, opt_textContent ) : null;
};


/*=============================================================================
 *
 *  insertText*
 *
 */

/**
 * @param {string | number} textContent
 * @return {!VNode | null} */
VNode.prototype.insertTextBefore = function( textContent ){
    return this._parent ? this._parent.insertTextAt( this.getMyIndex(), textContent ) : null;
};
/**
 * @param {string | number} textContent
 * @return {!VNode} */
VNode.prototype.insertTextFirst = function( textContent ){
    return this.insertTextAt( 0, textContent );
};
/**
 * @param {number} index
 * @param {string | number} textContent
 * @return {!VNode} */
VNode.prototype.insertTextAt = function( index, textContent ){
    return new VNode( this, index, htmljson.NODE_TYPE.TEXT_NODE, textContent );
};
/**
 * @param {string | number} textContent
 * @return {!VNode} */
VNode.prototype.insertTextLast = function( textContent ){
    return this.insertTextAt( this.getChildNodeLength(), textContent );
};
/**
 * @param {string | number} textContent
 * @return {!VNode | null} */
VNode.prototype.insertTextAfter = function( textContent ){
    return this._parent ? this._parent.insertTextAt( this.getMyIndex() + 1, textContent ) : null;
};

/*=============================================================================
 *
 *  insertComment*
 *
 */

/**
 * @param {string | number} data
 * @return {!VNode | null} */
VNode.prototype.insertCommentBefore = function( data ){
    return this._parent ? this._parent.insertCommentAt( this.getMyIndex(), data ) : null;
};
/**
 * @param {string | number} data
 * @return {!VNode} */
VNode.prototype.insertCommentFirst = function( data ){
    return this.insertCommentAt( 0, data );
};
/**
 * @param {number} index
 * @param {string | number} data
 * @return {!VNode} */
VNode.prototype.insertCommentAt = function( index, data ){
    return new VNode( this, index, htmljson.NODE_TYPE.COMMENT_NODE, data );
};
/**
 * @param {string | number} data
 * @return {!VNode} */
VNode.prototype.insertCommentLast = function( data ){
    return this.insertCommentAt( this.getChildNodeLength(), data );
};
/**
 * @param {string | number} data
 * @return {!VNode | null} */
VNode.prototype.insertCommentAfter = function( data ){
    return this._parent ? this._parent.insertCommentAt( this.getMyIndex() + 1, data ) : null;
};


/*=============================================================================
 *
 *  insertCDATASection*
 *
 */

/**
 * @param {string | number} data
 * @return {!VNode | null} */
VNode.prototype.insertCDATASectionBefore = function( data ){
    return this._parent ? this._parent.insertCDATASectionAt( this.getMyIndex(), data ) : null;
};
/**
 * @param {string | number} data
 * @return {!VNode} */
VNode.prototype.insertCDATASectionFirst = function( data ){
    return this.insertCDATASectionAt( 0, data );
};
/**
 * @param {number} index
 * @param {string | number} data
 * @return {!VNode} */
VNode.prototype.insertCDATASectionAt = function( index, data ){
    return new VNode( this, index, htmljson.NODE_TYPE.CDATA_SECTION, data );
};
/**
 * @param {string | number} data
 * @return {!VNode} */
VNode.prototype.insertCDATASectionLast = function( data ){
    return this.insertCDATASectionAt( this.getChildNodeLength(), data );
};
/**
 * @param {string | number} data
 * @return {!VNode | null} */
VNode.prototype.insertCDATASectionAfter = function( data ){
    return this._parent ? this._parent.insertCDATASectionAt( this.getMyIndex() + 1, data ) : null;
};


/*=============================================================================
 *
 *  insertProcessingInstruction*
 *
 */

/**
 * @param {string | number} data
 * @return {!VNode | null} */
VNode.prototype.insertProcessingInstructionBefore = function( data ){
    return this._parent ? this._parent.insertProcessingInstructionAt( this.getMyIndex(), data ) : null;
};

/**
 * @param {string | number} data
 * @return {!VNode} */
VNode.prototype.insertProcessingInstructionFirst = function( data ){
    return this.insertProcessingInstructionAt( 0, data );
};

/**
 * @param {number} index
 * @param {string | number} data
 * @return {!VNode} */
VNode.prototype.insertProcessingInstructionAt = function( index, data ){
    return new VNode( this, index, htmljson.NODE_TYPE.PROCESSING_INSTRUCTION, data );
};

/**
 * @param {string | number} data
 * @return {!VNode} */
VNode.prototype.insertProcessingInstructionLast = function( data ){
    return this.insertProcessingInstructionAt( this.getChildNodeLength(), data );
};

/**
 * @param {string | number} data
 * @return {!VNode | null} */
VNode.prototype.insertProcessingInstructionAfter = function( data ){
    return this._parent ? this._parent.insertProcessingInstructionAt( this.getMyIndex() + 1, data ) : null;
};