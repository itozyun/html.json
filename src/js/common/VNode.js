goog.provide( 'VNode' );

goog.require( 'htmljson.base' );
goog.require( 'htmljson.NODE_TYPE' );

/**
 * @private
 * @param {!VNode} vnode 
 * @return {boolean} 
 */
function _canHasChildren( vnode ){
    return vnode._nodeType === htmljson.NODE_TYPE.ELEMENT_NODE ||
           vnode._nodeType === htmljson.NODE_TYPE.ELEMENT_START_TAG ||
           vnode._nodeType === htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER ||
           vnode._nodeType === htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER ||
           _isDocOrDocFragment( vnode );
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
 * @constructor
 * 
 * @param {!VNode | null} parent 
 * @param {number} insertPosition
 * @param {number} nodeType 
 * @param {(string | number)=} opt_nodeValueOrTag 
 * @param {(Attrs | null)=} opt_attrs 
 */
var VNode = function( parent, insertPosition, nodeType, opt_nodeValueOrTag, opt_attrs ){
    var childNodes;

    if( htmljson.DEFINE.DEBUG ){
        if( parent ){
            switch( parent._nodeType ){
                case htmljson.NODE_TYPE.TEXT_NODE               :
                case htmljson.NODE_TYPE.COMMENT_NODE            :
                case htmljson.NODE_TYPE.CDATA_SECTION           :
                case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION  :
                case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_END :
                case htmljson.NODE_TYPE.ELEMENT_END_TAG         :
                    throw 'nodeType:' + parent._nodeType + ' は親になることが出来ません!';
            };
            if( _isDocOrDocFragment( this ) ){
                throw 'nodeType:' + parent._nodeType + ' は子になることが出来ません!';
            };
        };
    };

    /** @type {!VNode | null} */
    this._parent = parent;
    /** @type {number} */
    this._nodeType = nodeType;

    if( parent ){
        if( !parent._childNodes ){
            /** @type {!Array.<!VNode>} */
            parent._childNodes = [];
        };
        childNodes = parent._childNodes;
        if( 0 <= insertPosition && insertPosition < childNodes.length ){
            if( htmljson.DEFINE.DEBUG ){
                if( 1 <= insertPosition && childNodes[ insertPosition - 1 ]._nodeType === htmljson.NODE_TYPE.ELEMENT_START_TAG ){
                    throw '閉じタグの無い Element の次に Node を挿入することは出来ません!';
                };
            };
            childNodes.splice( insertPosition, 0, this );
        } else {
            if( htmljson.DEFINE.DEBUG ){
                if( childNodes.length && childNodes[ childNodes.length - 1 ]._nodeType === htmljson.NODE_TYPE.ELEMENT_START_TAG ){
                    throw '閉じタグの無い Element の次に Node を挿入することは出来ません!';
                };
            };
            childNodes.push( this );
        };
    };

    switch( nodeType ){
        case htmljson.NODE_TYPE.ELEMENT_NODE            :
        case htmljson.NODE_TYPE.ELEMENT_START_TAG :
            /** @type {Attrs | null} */
            this._attrs   = opt_attrs || null;
        case htmljson.NODE_TYPE.ELEMENT_END_TAG :
            this._tagName = /** @type {string} */ (opt_nodeValueOrTag);
            break;
        case htmljson.NODE_TYPE.TEXT_NODE                     :
        case htmljson.NODE_TYPE.CDATA_SECTION                 :
        case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION        :
        case htmljson.NODE_TYPE.COMMENT_NODE                  :
        case htmljson.NODE_TYPE.DOCUMENT_NODE                 :
        case htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER           :
        case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START     :
        case htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER :
            this._nodeValue = /** @type {string | number} */ (opt_nodeValueOrTag);
            break;
    };
};

/**
 * 
 * @return {!Array}
 */
VNode.prototype.getJSON = function(){
    var json = [ this._nodeType ], childNodes = this._childNodes, i, l;

    switch( this._nodeType ){
        case htmljson.NODE_TYPE.ELEMENT_NODE           :
            json.length = 0;
        case htmljson.NODE_TYPE.ELEMENT_START_TAG :
            json.push( this._tagName );
            if( m_isAttributes( this._attrs ) ){
                json.push( this._attrs );
            };
            break;
        case htmljson.NODE_TYPE.ELEMENT_END_TAG :
            json[ 1 ] = this._tagName;
            break;
        case htmljson.NODE_TYPE.TEXT_NODE                     :
        case htmljson.NODE_TYPE.CDATA_SECTION                 :
        case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION        :
        case htmljson.NODE_TYPE.COMMENT_NODE                  :
        case htmljson.NODE_TYPE.DOCUMENT_NODE                 :
        case htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER           :
        case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START     :
        case htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER :
            json[ 1 ] = this._nodeValue;
            break;
    };

    if( childNodes ){
        for( i = 0, l = childNodes.length; i < l; ++i ){
            json.push( childNodes[ i ].getJSON() );
        };
    };
    return json;
};

/*=============================================================================
 *
 *  nodeType
 *
 */

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

/*=============================================================================
 *
 *  nodeValue
 *
 */

/**
 * 
 * @return {string | number | void}
 */
VNode.prototype.getNodeValue = function(){
    switch( this._nodeType ){
        case htmljson.NODE_TYPE.TEXT_NODE                     :
        case htmljson.NODE_TYPE.CDATA_SECTION                 :
        case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION        :
        case htmljson.NODE_TYPE.COMMENT_NODE                  :
        case htmljson.NODE_TYPE.DOCUMENT_NODE                 :
        case htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER           :
        case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START     :
        case htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER :
            return this._nodeValue;
        default :
            if( htmljson.DEFINE.DEBUG ){
                throw 'getNodeValue() をサポートしない nodeType です!'
            };
    };
};

/**
 * 
 * @param {string} nodeValue
 */
VNode.prototype.setNodeValue = function( nodeValue ){
    switch( this._nodeType ){
        case htmljson.NODE_TYPE.TEXT_NODE              :
        case htmljson.NODE_TYPE.CDATA_SECTION          :
        case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION :
        case htmljson.NODE_TYPE.COMMENT_NODE           :
        case htmljson.NODE_TYPE.DOCUMENT_NODE          :
            this._nodeValue = nodeValue;
            break;
        default :
            if( htmljson.DEFINE.DEBUG ){
                throw 'setNodeValue() をサポートしない nodeType です!'
            };
    };
};

/*=============================================================================
 *
 *  valid element, start tag, end tag
 *
 */

/**
 * 
 * @return {boolean}
 */
VNode.prototype.isElement = function(){
    return this._nodeType === htmljson.NODE_TYPE.ELEMENT_NODE ||
           this._nodeType === htmljson.NODE_TYPE.ELEMENT_START_TAG;
};

/**
 * 
 */
VNode.prototype.finalize = function(){
    if( htmljson.DEFINE.DEBUG ){
        if( this._nodeType !== htmljson.NODE_TYPE.ELEMENT_START_TAG ){
            throw 'close() をサポートしない nodeType です!';
        };
    };
    this._nodeType = htmljson.NODE_TYPE.ELEMENT_NODE;
};

/**
 * @return {boolean}
 */
VNode.prototype.isClosed = function(){
    return this._nodeType !== htmljson.NODE_TYPE.ELEMENT_START_TAG;
};

/**
 * 
 * @return {boolean}
 */
VNode.prototype.isValid = function(){
    var childNodes = this._childNodes, i, l, childNode;

    if( childNodes ){
        for( i = 0, l = childNodes.length; i < l; ++i ){
            childNode = childNodes[ i ];
            if( childNode._nodeType === htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER
                || childNode._nodeType === htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER
            ){
                continue;
            } else if( !childNode.isValid() ){
                return false;
            };
        };
    };
    return this._nodeType !== htmljson.NODE_TYPE.ELEMENT_START_TAG &&
           this._nodeType !== htmljson.NODE_TYPE.ELEMENT_END_TAG;
};

/*=============================================================================
 *
 *  only element
 *
 */

/**
 * 
 * @return {string}
 */
VNode.prototype.getTagName = function(){
    if( htmljson.DEFINE.DEBUG ){
        if( !this.isElement() && this._nodeType !== htmljson.NODE_TYPE.ELEMENT_END_TAG ){
            throw 'getTagName() をサポートしない nodeType です!';
        };
    };
    return this._tagName;
};

/**
 * 
 * @return {string}
 */
VNode.prototype.getClassName = function(){
    if( htmljson.DEFINE.DEBUG ){
        if( !this.isElement() ){
            throw 'getClassName() をサポートしない nodeType です!';
        };
    };
    return this._className;
};

/**
 * 
 * @param {string} className
 * @return {boolean}
 */
VNode.prototype.hasClassName = function( className ){
    if( htmljson.DEFINE.DEBUG ){
        if( !this.isElement() ){
            throw 'hasClassName() をサポートしない nodeType です!';
        };
        if( className.indexOf( ' ' ) !== -1 ){
            throw 'hasClassName() は半角文字を含む className をサポートしません!';
        };
    };
    return 0 <= ( ' ' + this._className + ' ' ).indexOf( ' ' + className + ' ' );
};

/**
 * 
 * @param {string} className
 */
VNode.prototype.addClassName = function( className ){
    if( htmljson.DEFINE.DEBUG ){
        if( !this.isElement() ){
            throw 'addClassName() をサポートしない nodeType です!';
        };
        if( className.indexOf( ' ' ) !== -1 ){
            throw 'addClassName() は半角文字を含む className をサポートしません!';
        };
    };
    if( !this.hasClassName( className ) ){
        this._className = ( this._className ? ' ' : '' ) + className;
    };
};

/**
 * 
 * @param {string} className
 */
VNode.prototype.removeClassName = function( className ){
    if( htmljson.DEFINE.DEBUG ){
        if( !this.isElement() ){
            throw 'removeClassName() をサポートしない nodeType です!';
        };
        if( className.indexOf( ' ' ) !== -1 ){
            throw 'removeClassName() は半角文字を含む className をサポートしません!';
        };
    };
    if( this.hasClassName( className ) ){
        var classList = this._className.split( ' ' );

        classList.splice( classList.indexOf( className ), 1 );

        this._className = classList.join( ' ' );
    };
};

/**
 * 
 * @return {Attrs | null}
 */
VNode.prototype.getAttrs = function(){
    if( htmljson.DEFINE.DEBUG ){
        if( !this.isElement() ){
            throw 'getAttrs() をサポートしない nodeType です!';
        };
    };
    return m_isAttributes( this._attrs ) ? this._attrs : null;
};

/**
 * 
 * @return {boolean}
 */
VNode.prototype.hasAttr = function( name ){
    if( htmljson.DEFINE.DEBUG ){
        if( !this.isElement() ){
            throw 'hasAttr() をサポートしない nodeType です!';
        };
    };
    if( name === 'class' || name === 'className' ){
        return !!this._className;
    } else if( name === 'id' ){
        return !!this._id;
    } else {
        if( m_isAttributes( this._attrs ) ){
            return this._attrs[ name ] != null;
        };
    };
    return  false;
};

/**
 * 
 * @param {string} name
 * @return {*}
 */
VNode.prototype.getAttr = function( name ){
    if( htmljson.DEFINE.DEBUG ){
        if( !this.isElement() ){
            throw 'getAttr() をサポートしない nodeType です!';
        };
    };
    if( name === 'class' || name === 'className' ){
        return this._className;
    } else if( name === 'id' ){
        return this._id;
    } else {
        if( m_isAttributes( this._attrs ) ){
            return this._attrs[ name ];
        };
    };
};

/**
 * 
 * @param {string} name
 * @param {string | boolean | number | Styles} value
 */
VNode.prototype.setAttr = function( name, value ){
    if( htmljson.DEFINE.DEBUG ){
        if( !this.isElement() ){
            throw 'setAttr() をサポートしない nodeType です!';
        };
    };
    if( name === 'class' || name === 'className' ){
        this._className = value;
    } else if( name === 'id' ){
        this._id = value;
    } else {
        if( !m_isAttributes( this._attrs ) ){
            this._attrs = {};
        };
        this._attrs[ name ] = value;
    };
};

/**
 * 
 * @param {string} name
 */
VNode.prototype.removeAttr = function( name ){
    if( htmljson.DEFINE.DEBUG ){
        if( !this.isElement() ){
            throw 'removeAttr() をサポートしない nodeType です!';
        };
    };
    if( name === 'class' || name === 'className' ){
        this._className = '';
    } else if( name === 'id' ){
        this._id = '';
    } else if( m_isAttributes( this._attrs ) ){
        delete this._attrs[ name ];
    };
};

/**
 * 
 * @param {string} name
 * @return {*}
 */
VNode.prototype.getStyle = function( name ){
    if( htmljson.DEFINE.DEBUG ){
        if( !this.isElement() ){
            throw 'getStyle() をサポートしない nodeType です!';
        };
    };
    var style = this.getAttr( 'style' );

    if( style && m_isString( style ) ){
        style = m_parseCSSText( /** @type {string} */ (style) );
        this.setAttr( 'style', style );
    };
    if( style ){
        return style[ name ];
    };
};

/**
 * 
 * @param {string} name
 * @param {string | number | boolean} value
 */
VNode.prototype.setStyle = function( name, value ){
    if( htmljson.DEFINE.DEBUG ){
        if( !this.isElement() ){
            throw 'setStyle() をサポートしない nodeType です!';
        };
    };
    var style = this.getAttr( 'style' );

    if( style && m_isString( style ) ){
        style = m_parseCSSText( /** @type {string} */ (style) );
        this.setAttr( 'style', style );
    } else if( !style ){
        this.setAttr( 'style', style = {} );
    };
    style[ name ] = value === '0px' ? 0 : m_tryToNumber( value );
};

/**
 * 
 * @param {string} name
 * @return {*}
 */
VNode.prototype.removeStyle = function( name ){
    if( htmljson.DEFINE.DEBUG ){
        if( !this.isElement() ){
            throw 'getStyle() をサポートしない nodeType です!';
        };
    };
    var style = this.getAttr( 'style' );

    if( style && m_isString( style ) ){
        style = m_parseCSSText( /** @type {string} */ (style) );
        this.setAttr( 'style', style );
    };
    if( style ){
        delete style[ name ];
    };
};


/*=============================================================================
 *
 *  parent, siblings
 *
 */

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
            throw 'getPrevNode() をサポートしない nodeType です!';
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
        if( this._nodeType === htmljson.NODE_TYPE.ELEMENT_START_TAG || _isDocOrDocFragment( this ) ){
            throw 'getNextNode() をサポートしない nodeType です!';
        };
    };
    return this._parent && this._parent.getChildNodeAt( this.getMyIndex() + 1 );
};

/*=============================================================================
 *
 *  child nodes
 *
 */

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
 * @param {number} index
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

/*=============================================================================
 *
 *  remove node
 *
 */

/**
 * 
 */
VNode.prototype.detach = function(){
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
 * 
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
            childNodes[ --i ].detach();
        };
    };
};

/*=============================================================================
 *
 *  insert*
 *
 */

/**
 * @param {...VNode} ___vnode */
VNode.prototype.insertBefore = function( ___vnode ){
    if( htmljson.DEFINE.DEBUG ){
        if( _isDocOrDocFragment( this ) ){
            throw 'insertBefore() をサポートしない nodeType です!';
        };
    };
    this._parent && _insertAt( this._parent, this.getMyIndex(), arguments );
};
/**
 * @param {...VNode} ___vnode */
VNode.prototype.insertFirst = function( ___vnode ){
    _insertAt( this, 0, arguments );
};
/**
 * @param {number} index
 * @param {...VNode} ___vnode */
VNode.prototype.insertAt = function( index, ___vnode ){
    var args = [], i;

    for( i = arguments.length; 1 < i; ){
        args[ i - 2 ] = arguments[ --i ];
    };
    _insertAt( this, index, args );
};
/**
 * @param {...VNode} ___vnode */
VNode.prototype.insertLast = function( ___vnode ){
    _insertAt( this, this.getChildNodeLength(), arguments );
};
/**
 * @param {...VNode} ___vnode */
VNode.prototype.insertAfter = function( ___vnode ){
    if( htmljson.DEFINE.DEBUG ){
        if( _isDocOrDocFragment( this ) ){
            throw 'insertAfter() をサポートしない nodeType です!';
        };
    };
    this._parent && _insertAt( this._parent, this.getMyIndex() + 1, arguments )
};

/**
 * @private
 * @param {!VNode} parent
 * @param {number} index
 * @param {!Arguments | !Array} vnodes */
function _insertAt( parent, index, vnodes ){
    vnodes = /** @type {!Array.<!VNode>} */ (vnodes);

    var childNodes = parent._childNodes = parent._childNodes || [],
        l = childNodes.length,
        i = vnodes.length,
        vnode;

    index = index < l ? index : l; 

    if( htmljson.DEFINE.DEBUG ){
        for( ; i; ){
            if( htmljson.DEFINE.DEBUG && vnode && vnodes[ i - 1 ]._nodeType === htmljson.NODE_TYPE.ELEMENT_START_TAG ){
                // 逆順に処理しているので、vnode は現在のノード(vnodes[i-1])の nextSibling
                throw '閉じタグの無い Element の次に Node を挿入することは出来ません!';
            };
            vnode = vnodes[ --i ];
            if( htmljson.DEFINE.DEBUG && vnode._nodeType === htmljson.NODE_TYPE.DOCUMENT_NODE ){
                throw 'Document Node を挿入することは出来ません!';
            };
        };
        i = vnodes.length;
    };

    for( ; i; ){
        vnode = vnodes[ --i ];
        if( vnode._nodeType === htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE ){
            vnode.getChildNodeLength() && _insertAt( parent, index, vnode._childNodes );
        } else {
            vnode.detach();
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
 * @param {(Attrs | null)=} opt_attrs 
 * @param {string=} opt_textContent  
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
 * @param {(Attrs | null)=} opt_attrs 
 * @param {string=} opt_textContent 
 * @return {!VNode} */
VNode.prototype.insertElementFirst = function( tagName, opt_attrs, opt_textContent ){
    return this.insertElementAt( 0, tagName, opt_attrs, opt_textContent );
};
/**
 * @param {number} index
 * @param {string} tagName 
 * @param {(Attrs | null)=} opt_attrs 
 * @param {string=} opt_textContent 
 * @return {!VNode} */
VNode.prototype.insertElementAt = function( index, tagName, opt_attrs, opt_textContent ){
    var element = new VNode( this, index, htmljson.NODE_TYPE.ELEMENT_NODE, tagName, opt_attrs );

    if( opt_textContent != null ){
        element.insertNodeAt( 0, htmljson.NODE_TYPE.TEXT_NODE, opt_textContent );
    };
    return element;
};
/**
 * @param {string} tagName 
 * @param {(Attrs | null)=} opt_attrs 
 * @param {string=} opt_textContent 
 * @return {!VNode} */
VNode.prototype.insertElementLast = function( tagName, opt_attrs, opt_textContent ){
    return this.insertElementAt( this.getChildNodeLength(), tagName, opt_attrs, opt_textContent );
};
/**
 * @param {string} tagName 
 * @param {(Attrs | null)=} opt_attrs 
 * @param {string=} opt_textContent
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
 * @param {(string | number)=} opt_nodeValueOrTag
 * @param {(Attrs | null)=} opt_attrs 
 * @return {!VNode | null} */
VNode.prototype.insertNodeBefore = function( nodeType, opt_nodeValueOrTag, opt_attrs ){
    if( htmljson.DEFINE.DEBUG ){
        if( _isDocOrDocFragment( this ) ){
            throw 'insertNodeBefore() をサポートしない nodeType です!';
        };
    };
    return this._parent ? this._parent.insertNodeAt( this.getMyIndex(), nodeType, opt_nodeValueOrTag, opt_attrs ) : null;
};
/**
 * @param {number} nodeType
 * @param {(string | number)=} opt_nodeValueOrTag
 * @param {(Attrs | null)=} opt_attrs 
 * @return {!VNode} */
VNode.prototype.insertNodeFirst = function( nodeType, opt_nodeValueOrTag, opt_attrs ){
    return this.insertNodeAt( 0, nodeType, opt_nodeValueOrTag, opt_attrs );
};
/**
 * 
 * @param {number} index
 * @param {number} nodeType
 * @param {(string | number)=} opt_nodeValueOrTag
 * @param {(Attrs | null)=} opt_attrs 
 * @return {!VNode} */
VNode.prototype.insertNodeAt = function( index, nodeType, opt_nodeValueOrTag, opt_attrs ){
    return new VNode( this, index, nodeType, opt_nodeValueOrTag, opt_attrs );
};
/**
 * @param {number} nodeType
 * @param {(string | number)=} opt_nodeValueOrTag
 * @param {(Attrs | null)=} opt_attrs 
 * @return {!VNode} */
VNode.prototype.insertNodeLast = function( nodeType, opt_nodeValueOrTag, opt_attrs ){
    return this.insertNodeAt( this.getChildNodeLength(), nodeType, opt_nodeValueOrTag, opt_attrs );
};
/**
 * @param {number} nodeType
 * @param {(string | number)=} opt_nodeValueOrTag
 * @param {(Attrs | null)=} opt_attrs 
 * @return {!VNode | null} */
VNode.prototype.insertNodeAfter = function( nodeType, opt_nodeValueOrTag, opt_attrs ){
    if( htmljson.DEFINE.DEBUG ){
        if( _isDocOrDocFragment( this ) || nodeType === htmljson.NODE_TYPE.ELEMENT_START_TAG ){
            throw 'insertNodeAfter() をサポートしない nodeType です!';
        };
    };
    return this._parent ? this._parent.insertNodeAt( this.getMyIndex() + 1, nodeType, opt_nodeValueOrTag, opt_attrs ) : null;
};
