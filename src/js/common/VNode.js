goog.provide( 'htmljson.VNode' );

goog.require( 'htmljson.base' );
goog.require( 'htmljson.NODE_TYPE' );

htmljson.VNode = VNode;

/**
 * @private
 * @param {!VNode} vnode 
 * @return {boolean} 
 */
function _canHasChildren( vnode ){
    return vnode._nodeType === htmljson.NODE_TYPE.ELEMENT_NODE || _isDocOrDocFragment( vnode );
};

/**
 * @private
 * @param {!VNode} vnode 
 * @return {boolean} 
 */
function _isDocOrDocFragment( vnode ){
    return vnode._nodeType === htmljson.NODE_TYPE.DOCUMENT_NODE ||
           vnode._nodeType === htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE;
};

/**
 * 
 * @param {!VNode | null} parent 
 * @param {number} insertPosition
 * @param {number} nodeType 
 * @param {string | number=} opt_tagOrNodeValue 
 * @param {!Object=} opt_attrs 
 */
function VNode( parent, insertPosition, nodeType, opt_tagOrNodeValue, opt_attrs ){
    var childNodes;

    if( htmljson.DEFINE.DEBUG ){
        switch( parent._nodeType ){
            case htmljson.NODE_TYPE.TEXT_NODE              :
            case htmljson.NODE_TYPE.COMMENT_NODE           :
            case htmljson.NODE_TYPE.CDATA_SECTION          :
            case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION :
                throw 'nodeType:' + parent._nodeType + ' は親になることが出来ません!';
        };
    };

    /** @type {!VNode | null} */
    this._parent = parent;
    /** @type {number} */
    this._nodeType = nodeType;

    if( parent ){
        if( htmljson.DEFINE.DEBUG ){
            if( _isDocOrDocFragment( this ) ){
                throw 'nodeType:' + parent._nodeType + ' は子になることが出来ません!';
            };
        };

        /** @type {!Array.<VNode>} */
        childNodes = parent._childNodes = parent._childNodes || [];
        if( 0 <= insertPosition && insertPosition < childNodes.length ){
            childNodes.splice( index, 0, this );
        } else {
            childNodes.push( this );
        };
    };

    switch( nodeType ){
        case htmljson.NODE_TYPE.ELEMENT_NODE           :
            /** @type {strng} */
            this._tagName = opt_tagOrNodeValue;
            /** @type {!Object | null | void} */
            this._attrs   = opt_attrs;
            break;
        case htmljson.NODE_TYPE.TEXT_NODE              :
        case htmljson.NODE_TYPE.COMMENT_NODE           :
        case htmljson.NODE_TYPE.DOCUMENT_NODE          :
        case htmljson.NODE_TYPE.CDATA_SECTION          :
        case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION :
            /** @type {strng | number} */
            this._data = opt_tagOrNodeValue;
            break;
    };
};

/**
 * 
 * @return {number}
 */
VNode.prototype.getJSON = function(){
    var json = [ this._nodeType ], childNodes = this._childNodes, i, l;

    switch( this._nodeType ){
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
    if( htmljson.DEFINE.DEBUG ){
        if( nodeType !== htmljson.NODE_TYPE.DOCUMENT_NODE || this._nodeType !== htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE ){
            throw 'nodeType の変更は DOCUMENT_FRAGMENT_NODE -> DOCUMENT_NODE だけをサポートします!';
        };
    };
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
        default :
            if( htmljson.DEFINE.DEBUG ){
                throw 'getData() をサポートしない nodeType です!'
            };
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
        default :
            if( htmljson.DEFINE.DEBUG ){
                throw 'setData() をサポートしない nodeType です!'
            };
    };
};

/**
 * 
 * @return {!Object | null}
 */
VNode.prototype.getAttributes = function(){
    if( htmljson.DEFINE.DEBUG ){
        if( this._nodeType !== htmljson.NODE_TYPE.ELEMENT_NODE ){
            throw 'getAttributes() をサポートしない nodeType です!';
        };
    };
    return m_isAttributes( this._attrs ) ? this._attrs : null;
};

/**
 * 
 * @return {string}
 */
VNode.prototype.getTagName = function(){
    if( htmljson.DEFINE.DEBUG ){
        if( this._nodeType !== htmljson.NODE_TYPE.ELEMENT_NODE ){
            throw 'getTagName() をサポートしない nodeType です!';
        };
    };
    return this._tagName;
};

/**
 * 
 * @return {!VNode | null}
 */
VNode.prototype.getParent = function(){
    if( htmljson.DEFINE.DEBUG ){
        if( _isDocOrDocFragment( this ) ){
            throw 'getParent() をサポートしない nodeType です!';
        };
    };
    return this._parent;
};

/**
 * 
 * @return {!VNode | null}
 */
VNode.prototype.getPrevNode = function(){
    if( htmljson.DEFINE.DEBUG ){
        if( _isDocOrDocFragment( this ) ){
            throw 'getNextNode() をサポートしない nodeType です!';
        };
    };
    return this._parent && this._parent.getChildNodeAt( this.getMyIndex() - 1 );
};

/**
 * 
 * @return {!VNode | null}
 */
VNode.prototype.getNextNode = function(){
    if( htmljson.DEFINE.DEBUG ){
        if( _isDocOrDocFragment( this ) ){
            throw 'getNextNode() をサポートしない nodeType です!';
        };
    };
    return this._parent && this._parent.getChildNodeAt( this.getMyIndex() + 1 );
};

/**
 * 
 * @return {number}
 */
VNode.prototype.getChildNodeLength = function(){
    if( htmljson.DEFINE.DEBUG ){
        if( !_canHasChildren( this ) ){
            throw 'getChildNodeLength() をサポートしない nodeType です!';
        };
    };
    return this._childNodes && this._childNodes.length;
};

/**
 * @return {!VNode | null}
 */
VNode.prototype.getFirstChild = function(){
    if( htmljson.DEFINE.DEBUG ){
        if( !_canHasChildren( this ) ){
            throw 'getFirstChild() をサポートしない nodeType です!';
        };
    };
    return this.getChildNodeAt( 0 );
};

/**
 * @return {!VNode | null}
 */
VNode.prototype.getLastChild = function(){
    if( htmljson.DEFINE.DEBUG ){
        if( !_canHasChildren( this ) ){
            throw 'getLastChild() をサポートしない nodeType です!';
        };
    };
    return this.getChildNodeAt( this.getChildNodeLength() - 1 );
};

/**
 * @param {number}
 * @return {!VNode | null}
 */
VNode.prototype.getChildNodeAt = function( index ){
    if( htmljson.DEFINE.DEBUG ){
        if( !_canHasChildren( this ) ){
            throw 'getChildNodeAt() をサポートしない nodeType です!';
        };
    };
    return this._childNodes && this._childNodes[ index ] || null;
};

/**
 * 
 * @return {number}
 */
VNode.prototype.getMyIndex = function(){
    if( htmljson.DEFINE.DEBUG ){
        if( _isDocOrDocFragment( this ) ){
            throw 'getMyIndex() をサポートしない nodeType です!';
        };
    };
    return this._parent ? this._parent._childNodes.indexOf( this ) : -1;
};

/**
 * 
 */
VNode.prototype.remove = function(){
    if( htmljson.DEFINE.DEBUG ){
        if( _isDocOrDocFragment( this ) ){
            throw 'remove() をサポートしない nodeType です!';
        };
    };
    var index = this.getMyIndex();

    if( 0 <= index ){
        this._parent._childNodes.splice( index, 1 );
        this._parent = null;
    };
};

/**
 * @param {number}
 * @return {!VNode | null}
 */
VNode.prototype.empty = function(){
    if( htmljson.DEFINE.DEBUG ){
        if( !_canHasChildren( this ) ){
            throw 'empty() をサポートしない nodeType です!';
        };
    };

    var childNodes = this._childNodes, i, l;

    if( childNodes ){
        for( i = childNodes.length; i; ){
            childNodes[ --i ].remove();
        };
    };
};

/*=============================================================================
 *
 *  insert*
 *
 */

/**
 * @param {...VNode} */
VNode.prototype.insertBefore = function(){
    if( htmljson.DEFINE.DEBUG ){
        if( _isDocOrDocFragment( this ) ){
            throw 'insertBefore() をサポートしない nodeType です!';
        };
    };
    this._parent && _insertAt( this._parent, this.getMyIndex(), arguments );
};
/**
 * @param {...VNode} */
VNode.prototype.insertFirst = function(){
    _insertAt( this, 0, arguments );
};
/**
 * @param {number} index
 * @param {...VNode} */
VNode.prototype.insertAt = function( index ){
    var args = [], i;

    for( i = arguments.length; 1 < i; ){
        args[ i - 2 ] = arguments[ --i ];
    };
    _insertAt( this, index, args );
};
/**
 * @param {...VNode} */
VNode.prototype.insertLast = function(){
    _insertAt( this, this.getChildNodeLength(), arguments );
};
/**
 * @param {...VNode} */
VNode.prototype.insertAfter = function(){
    if( htmljson.DEFINE.DEBUG ){
        if( _isDocOrDocFragment( this ) ){
            throw 'insertAfter() をサポートしない nodeType です!';
        };
    };
    this._parent && _insertAt( this._parent, this.getMyIndex() + 1, arguments )
};

/**
 * @param {!VNode} parent
 * @param {number} index
 * @param {Arguments} vnodes */
function _insertAt( parent, index, vnodes ){
    vnodes = /** @type {...VNode} */ (vnodes);

    var childNodes = parent._childNodes = parent._childNodes || [],
        l = childNodes.length,
        i = vnodes.length, vnode;

    index = index < l ? index : l; 

    for( ; i; ){
        vnode = vnodes[ --i ];
        if( htmljson.DEFINE.DEBUG && vnode.getNodeType() === htmljson.NODE_TYPE.DOCUMENT_NODE ){
            throw '_insertAt() をサポートしない nodeType です!';
        } else if( vnode.getNodeType() === htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE ){
            vnode.getChildNodeLength() && _insertAt( parent, index, vnode._childNodes );
        } else {
            vnode.remove();
            childNodes.splice( index, 0, vnode );
            vnode._parent = parent;
        };
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
    if( htmljson.DEFINE.DEBUG ){
        if( _isDocOrDocFragment( this ) ){
            throw 'insertElementBefore() をサポートしない nodeType です!';
        };
    };
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
        element.insertNodeFirst( htmljson.NODE_TYPE.TEXT_NODE, opt_textContent );
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
    if( htmljson.DEFINE.DEBUG ){
        if( _isDocOrDocFragment( this ) ){
            throw 'insertElementAfter() をサポートしない nodeType です!';
        };
    };
    return this._parent ? this._parent.insertElementAt( this.getMyIndex() + 1, tagName, opt_attrs, opt_textContent ) : null;
};


/*=============================================================================
 *
 *  insertNode*
 *
 */

/**
 * @param {number} nodeType
 * @param {string | number} nodeValueOrTag
 * @param {!Object=} opt_attrs 
 * @return {!VNode | null} */
VNode.prototype.insertNodeBefore = function( nodeType, nodeValueOrTag, opt_attrs ){
    if( htmljson.DEFINE.DEBUG ){
        if( _isDocOrDocFragment( this ) ){
            throw 'insertNodeBefore() をサポートしない nodeType です!';
        };
    };
    return this._parent ? this._parent.insertNodeAt( this.getMyIndex(), nodeType, nodeValueOrTag, opt_attrs ) : null;
};
/**
 * @param {number} nodeType
 * @param {string | number} nodeValueOrTag
 * @param {!Object=} opt_attrs 
 * @return {!VNode} */
VNode.prototype.insertNodeFirst = function( nodeType, nodeValueOrTag, opt_attrs ){
    return this.insertNodeAt( 0, nodeType, nodeValueOrTag, opt_attrs );
};
/**
 * 
 * @param {number} index
 * @param {number} nodeType
 * @param {string | number} nodeValueOrTag
 * @return {!VNode} */
VNode.prototype.insertNodeAt = function( index, nodeType, nodeValueOrTag, opt_attrs ){
    return new VNode( this, index, nodeType, nodeValueOrTag, opt_attrs );
};
/**
 * @param {number} nodeType
 * @param {string | number} nodeValueOrTag
 * @param {!Object=} opt_attrs 
 * @return {!VNode} */
VNode.prototype.insertNodeLast = function( nodeType, nodeValueOrTag, opt_attrs ){
    return this.insertNodeAt( this.getChildNodeLength(), nodeType, nodeValueOrTag, opt_attrs );
};
/**
 * @param {number} nodeType
 * @param {string | number} nodeValueOrTag
 * @param {!Object=} opt_attrs 
 * @return {!VNode | null} */
VNode.prototype.insertNodeAfter = function( nodeType, nodeValueOrTag, opt_attrs ){
    if( htmljson.DEFINE.DEBUG ){
        if( _isDocOrDocFragment( this ) ){
            throw 'insertNodeAfter() をサポートしない nodeType です!';
        };
    };
    return this._parent ? this._parent.insertNodeAt( this.getMyIndex() + 1, nodeType, nodeValueOrTag, opt_attrs ) : null;
};
