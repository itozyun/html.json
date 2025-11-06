goog.provide( 'VNode' );
goog.provide( 'VNode.currentRestrictedVNode' );
goog.provide( 'VNode.treeIsUpdated' );

goog.require( 'core.all' );
goog.require( 'htmljson.NODE_TYPE' );
goog.require( 'htmljson.Traverser.VISITOR_OPTION' );

/**
 * @constructor
 * 
 * @param {!VNode | boolean} parentOrMode
 * @param {number} insertPosition
 * @param {number} nodeType 
 * @param {(string | number)=} opt_nodeValueOrTag 
 * @param {(Attrs | InstructionArgs | null)=} opt_attrsOrArgs 
 */
VNode = function( parentOrMode, insertPosition, nodeType, opt_nodeValueOrTag, opt_attrsOrArgs ){
    var childNodes, parent, tagIdClassName;

    if( core.isBoolean( parentOrMode ) ){
        parent = null;
        this._isRestrictedMode = /** @type {boolean} */ (parentOrMode);
    } else {
        parent = /** @type {!VNode} */ (parentOrMode);
        this._isRestrictedMode = parent._isRestrictedMode;
    };

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
        case htmljson.NODE_TYPE.ELEMENT_NODE      :
        case htmljson.NODE_TYPE.ELEMENT_START_TAG :
            this._attrs        = /** @type {Attrs | null} */ (opt_attrsOrArgs || null);
            tagIdClassName     = m_parseTagName(  /** @type {string} */ (opt_nodeValueOrTag) );
            this._id           = tagIdClassName[ 1 ];
            this._className    = tagIdClassName[ 2 ];
            opt_nodeValueOrTag = tagIdClassName[ 0 ];
        case htmljson.NODE_TYPE.ELEMENT_END_TAG :
            this._tagName = /** @type {string} */ (opt_nodeValueOrTag);
            break;
        case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION :
            this._args = /** @type {InstructionArgs | null} */(opt_attrsOrArgs || null);
        case htmljson.NODE_TYPE.TEXT_NODE                     :
        case htmljson.NODE_TYPE.CDATA_SECTION                 :
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
 * 制限モードの時に、現在ノード
 * 
 * @type {VNode | null} */
VNode.currentRestrictedVNode = null;

/**
 * 制限モードの時に、操作が出来る現在ノード
 * 
 * @type {VNode | null} */
VNode.parentRestrictedVNode = null;

/**
 * 文書ツリーの変更検知用
 *
 * @type {boolean} */
VNode.treeIsUpdated = false;

/**
 * 
 * @return {number} _RESTRICTED_MODE.*
 */
VNode.prototype.getRestrictedMode = function(){
    if( !this._isRestrictedMode ){
        return _RESTRICTED_MODE.NO_RESTRICTIONS;
    };
    if( VNode.currentRestrictedVNode === this ){
        if( this._removed ){
            return _RESTRICTED_MODE.CURRENT_NODE_REMOVED;
        };
        if( !this._hasUnknownChildren ){
            return _RESTRICTED_MODE.CURRENT_NODE_IS_EMPTY;
        };
        return _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN;
    };
    if( VNode.currentRestrictedVNode._parent === this ){
        return _RESTRICTED_MODE.READ_ONLY;
    };
    return _RESTRICTED_MODE.NEW_NODE;
};

/**
 * 
 * @return {!HTMLJson}
 */
VNode.prototype.getHTMLJson = function(){
    if( htmljson.DEFINE.DEBUG ){
        if( this._isRestrictedMode ){
            throw 'restricted mode では getHTMLJSON() は非対応です!';
        };
    };

    var json = [ this._nodeType ], childNodes = this._childNodes, attrs, style, args, i, l;

    switch( this._nodeType ){
        case htmljson.NODE_TYPE.ELEMENT_NODE      :
            json.length = 0;
        case htmljson.NODE_TYPE.ELEMENT_START_TAG :
            json.push( m_createTagName( this._tagName, this._id, this._className ) );
            attrs = this._attrs;
            if( m_isAttributes( attrs ) ){
                json.push( attrs );
                style = attrs.style;
                if( style && core.isObject( style ) ){
                    attrs.style = m_toCSSTest( /** @type {!Styles} */ (style) );
                };
            };
            break;
        case htmljson.NODE_TYPE.ELEMENT_END_TAG :
            json[ 1 ] = this._tagName;
            break;
        case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION        :
            args = this._args;
            if( args ){
                for( i = 0, l = args.length; i < l; ++i ){
                    json[ 2 + i ] = args[ i ];
                };
            };
        case htmljson.NODE_TYPE.TEXT_NODE                     :
        case htmljson.NODE_TYPE.CDATA_SECTION                 :
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
            json.push( childNodes[ i ].getHTMLJson() );
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
        if( _RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode() ){
            throw 'In Restricted Mode. VNode cannot execute setNodeType()!';
        };
        if( nodeType !== htmljson.NODE_TYPE.DOCUMENT_NODE || this._nodeType !== htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE ){
            throw 'nodeType の変更は DOCUMENT_FRAGMENT_NODE -> DOCUMENT_NODE だけをサポートします!';
        };
    };
    _compareValuesAndSetUpdatedFlag( this._nodeType, nodeType );
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
    if( htmljson.DEFINE.DEBUG ){
        if( _RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode() ){
            throw 'In Restricted Mode. VNode cannot execute setNodeValue()!';
        };
    };

    switch( this._nodeType ){
        case htmljson.NODE_TYPE.TEXT_NODE              :
        case htmljson.NODE_TYPE.CDATA_SECTION          :
        case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION :
        case htmljson.NODE_TYPE.COMMENT_NODE           :
        case htmljson.NODE_TYPE.DOCUMENT_NODE          :
            _compareValuesAndSetUpdatedFlag( this._nodeValue, nodeValue );
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
    var result = true;

    _walkAllDescendantVNodes(
        this,
        function( vnode ){
            if( vnode._nodeType === htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER
                || vnode._nodeType === htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER
            ){
                return htmljson.Traverser.VISITOR_OPTION.SKIP;
            } else if( vnode._nodeType === htmljson.NODE_TYPE.ELEMENT_START_TAG
                       ||
                       vnode._nodeType === htmljson.NODE_TYPE.ELEMENT_END_TAG
            ){
                result = false;
                return htmljson.Traverser.VISITOR_OPTION.BREAK;
            };
        }
    );
    return result;
};

/*=============================================================================
 *
 *  walkNodes, walkElements, walkTextNodes, getElementByID, getElementListByTag
 *
 */

/**
 * 
 * @param {!function(!VNode):(number | void)} onEnterNode
 * @param {!function(!VNode):(number | void)=} opt_onLeaveNode
 * @return {boolean}
 */
VNode.prototype.walkNodes = function( onEnterNode, opt_onLeaveNode ){
    if( htmljson.DEFINE.DEBUG ){
        if( _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode() ){
            throw 'In Restricted Mode. VNode cannot execute walkNodes()!';
        };
    };

    return _walkAllDescendantVNodes( this, onEnterNode, opt_onLeaveNode );
};

/**
 * 
 * @param {!function(!VNode):(number | void)} onEnterNode
 * @param {!function(!VNode):(number | void)=} opt_onLeaveNode
 * @return {boolean}
 */
VNode.prototype.walkElements = function( onEnterNode, opt_onLeaveNode ){
    if( htmljson.DEFINE.DEBUG ){
        if( _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode() ){
            throw 'In Restricted Mode. VNode cannot execute walkElements()!';
        };
    };

    return _walkAllDescendantVNodes(
        this,
        function( vnode ){
            if( vnode.isElement() ){
                return onEnterNode( vnode );
            };
        },
        opt_onLeaveNode ? function( vnode ){
            if( vnode.isElement() ){
                return opt_onLeaveNode( vnode );
            };
        } : void 0
    );
};

/**
 * 
 * @param {!function(!VNode):(number | void)} onEnterNode
 * @param {!function(!VNode):(number | void)=} opt_onLeaveNode
 * @return {boolean}
 */
VNode.prototype.walkTextNodes = function( onEnterNode, opt_onLeaveNode ){
    if( htmljson.DEFINE.DEBUG ){
        if( _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode() ){
            throw 'In Restricted Mode. VNode cannot execute walkTextNodes()!';
        };
    };

    return _walkAllDescendantVNodes(
        this,
        function( vnode ){
            if( vnode._nodeType === htmljson.NODE_TYPE.TEXT_NODE ){
                return onEnterNode( vnode );
            };
        },
        opt_onLeaveNode ? function( vnode ){
            if( vnode._nodeType === htmljson.NODE_TYPE.TEXT_NODE ){
                return opt_onLeaveNode( vnode );
            };
        } : void 0
    );
};

/**
 * 
 * @param {!VNode} targetNode
 * @return {boolean}
 */
VNode.prototype.contains = function( targetNode ){
    if( htmljson.DEFINE.DEBUG ){
        if( _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode() ){
            throw 'In Restricted Mode. VNode cannot execute contains()!';
        };
    };

    var result = false;

    _walkAllDescendantVNodes(
        this,
        function( vnode ){
            if( vnode === targetNode ){
                result = true;
                return htmljson.Traverser.VISITOR_OPTION.BREAK;
            };
        }
    );
    return result;
};

/**
 * 
 * @param {string} id
 * @return {VNode | null}
 */
VNode.prototype.getElementByID = function( id ){
    if( htmljson.DEFINE.DEBUG ){
        if( _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode() ){
            throw 'In Restricted Mode. VNode cannot execute getElementByID()!';
        };
    };

    var result = null;

    this.walkElements(
        function( vnode ){
            if( vnode.getAttr( 'id' ) === id ){
                result = vnode;
                return htmljson.Traverser.VISITOR_OPTION.BREAK;
            };
        }
    );
    return result;
};

/**
 * 
 * @param {string} tagName
 * @return {!Array.<!VNode>}
 */
VNode.prototype.getElementListByTag = function( tagName ){
    if( htmljson.DEFINE.DEBUG ){
        if( _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode() ){
            throw 'In Restricted Mode. VNode cannot execute getElementListByTag()!';
        };
    };

    var elementList = [], i = -1;

    this.walkElements(
        function( vnode ){
            if( vnode._tagName === tagName ){ // TODO XMLDocument
                elementList[ ++i ] = vnode;
            };
        }
    );
    return elementList;
};

/**
 * 
 * @param {string} className
 * @return {!Array.<!VNode>}
 */
VNode.prototype.getElementListByClass = function( className ){
    if( htmljson.DEFINE.DEBUG ){
        if( _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode() ){
            throw 'In Restricted Mode. VNode cannot execute getElementListByClass()!';
        };
    };

    var elementList = [], i = -1;

    this.walkElements(
        function( vnode ){
            if( vnode.hasClassName( className ) ){
                elementList[ ++i ] = vnode;
            };
        }
    );
    return elementList;
};

/**
 * 
 * @param {string} name
 * @return {!Array.<!VNode>}
 */
VNode.prototype.getElementListByName = function( name ){
    if( htmljson.DEFINE.DEBUG ){
        if( _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode() ){
            throw 'In Restricted Mode. VNode cannot execute getElementListByName()!';
        };
    };

    var elementList = [], i = -1;

    this.walkElements(
        function( vnode ){
            if( vnode.getAttr( 'name' ) === name ){
                elementList[ ++i ] = vnode;
            };
        }
    );
    return elementList;
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
 * @param {string} tagName
 */
VNode.prototype.setTagName = function( tagName ){
    if( htmljson.DEFINE.DEBUG ){
        if( !this.isElement() && this._nodeType !== htmljson.NODE_TYPE.ELEMENT_END_TAG ){
            throw 'getTagName() をサポートしない nodeType です!';
        };
        if( _RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode() ){
            throw 'In Restricted Mode. VNode cannot execute setTagName()!';
        };
    };
    _compareValuesAndSetUpdatedFlag( this._tagName, tagName );
    this._tagName = tagName;
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
        if( _RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode() ){
            throw 'In Restricted Mode. VNode cannot execute addClassName()!';
        };
    };

    if( !this.hasClassName( className ) ){
        this._className = ( this._className ? ' ' : '' ) + className;

        VNode.treeIsUpdated = true;
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
        if( _RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode() ){
            throw 'In Restricted Mode. VNode cannot execute removeClassName()!';
        };
    };

    if( this.hasClassName( className ) ){
        var classList = this._className.split( ' ' );

        classList.splice( classList.indexOf( className ), 1 );

        this._className = classList.join( ' ' );

        VNode.treeIsUpdated = true;
    };
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
        if( _RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode() ){
            throw 'In Restricted Mode. VNode cannot execute setAttr()!';
        };
    };

    if( name === 'class' || name === 'className' ){
        _compareValuesAndSetUpdatedFlag( this._className, value );
        this._className = value;
    } else if( name === 'id' ){
        _compareValuesAndSetUpdatedFlag( this._id, value );
        this._id = value;
    } else {
        if( !m_isAttributes( this._attrs ) ){
            this._attrs = {};
        };
        _compareValuesAndSetUpdatedFlag( this._attrs[ name ], value );
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
        if( _RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode() ){
            throw 'In Restricted Mode. VNode cannot execute removeAttr()!';
        };
    };

    if( name === 'class' || name === 'className' ){
        _compareValuesAndSetUpdatedFlag( this._className, '' );
        this._className = '';
    } else if( name === 'id' ){
        _compareValuesAndSetUpdatedFlag( this._id, '' );
        this._id = '';
    } else if( m_isAttributes( this._attrs ) ){
        _compareValuesAndSetUpdatedFlag( this._attrs[ name ], undefined );
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

    if( style && core.isString( style ) ){
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
        if( _RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode() ){
            throw 'In Restricted Mode. VNode cannot execute setStyle()!';
        };
    };

    var style = this.getAttr( 'style' );

    if( style && core.isString( style ) ){
        style = m_parseCSSText( /** @type {string} */ (style) );
        this.setAttr( 'style', style );
    } else if( !style ){
        this.setAttr( 'style', style = {} );
    };
    var _value = value === '0px' ? 0 : m_tryToFiniteNumber( value );

    _compareValuesAndSetUpdatedFlag( style[ name ], _value );
    style[ name ] = _value;
};

/**
 * 
 * @param {string} name
 * @return {*}
 */
VNode.prototype.removeStyle = function( name ){
    if( htmljson.DEFINE.DEBUG ){
        if( !this.isElement() ){
            throw 'removeStyle() をサポートしない nodeType です!';
        };
        if( _RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode() ){
            throw 'In Restricted Mode. VNode cannot execute removeStyle()!';
        };
    };

    var style = this.getAttr( 'style' );

    if( style && core.isString( style ) ){
        style = m_parseCSSText( /** @type {string} */ (style) );
        this.setAttr( 'style', style );
    };
    if( style ){
        _compareValuesAndSetUpdatedFlag( style[ name ], undefined );
        delete style[ name ];
    };
};

/**
 * 
 * @return {string}
 */
VNode.prototype.getTextContent = function(){
    if( htmljson.DEFINE.DEBUG ){
        if( !this.isElement() && !_isDocOrDocFragment( this ) ){
            throw 'getTextContent() をサポートしない nodeType です!';
        };
        if( _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode() ){
            throw 'In Restricted Mode. VNode cannot execute getTextContent()!';
        };
    };
    var textContent = '';

    this.walkTextNodes(
        function( vnode ){
            textContent += vnode.getNodeValue();
        }
    );
    return textContent;
};

/**
 * 
 * @param {string} text
 */
VNode.prototype.setTextContent = function( text ){
    if( htmljson.DEFINE.DEBUG ){
        if( !this.isElement() ){
            throw 'getStyle() をサポートしない nodeType です!';
        };
        if( _RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode() ){
            throw 'In Restricted Mode. VNode cannot execute setTextContent()!';
        };
    };

    if( _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode() ){
        this._hasUnknownChildren = true;
    };

    this.empty();
    this.insertNodeFirst( htmljson.NODE_TYPE.TEXT_NODE, text );
};

/**
 * 
 * @return {string}
 */
VNode.prototype.getInnerText = function(){
    if( htmljson.DEFINE.DEBUG ){
        if( _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode() ){
            throw 'In Restricted Mode. VNode cannot execute getInnerText()!';
        };
    };
    var BLOCK_ELEMENTS = {
        'div'     : true, 'center' : true, 'fieldset' : true, 'blockquote' : true, 'form'     : true,
        'h1'      : true, 'h2'     : true, 'h3'       : true, 'h4'         : true, 'h5'       : true, 'h6'      : true,
        'address' : true, 'p'      : true, 'pre'      : true, 'ul'         : true, 'ol'       : true, 'dl'      : true,
        'dir'     : true, 'menu'   : true, 'table'    : true, 'hr'         : true, 'textarea' : true, 'marquee' : true
    };

    var innerText = '';

    this.walkNodes(
        function( vnode ){
            var tagName, alt, title;

            if( vnode.isElement() ){
                tagName = vnode._tagName;
                switch( tagName ){
                    case 'script'   :
                    case 'style'    :
                    case 'noscript' :
                        return htmljson.Traverser.VISITOR_OPTION.SKIP;
                    case 'img' :
                        alt = vnode.getAttr( 'alt' );
                        if( alt ){
                            innerText += '[Image: ' + alt + ']';
                        };
                        return htmljson.Traverser.VISITOR_OPTION.SKIP;
                    case 'li' :
                        if( vnode.getParent()._tagName === 'ol' ){
                            innerText += ( vnode.getMyIndex() + 1 ) + '.\t';
                        };
                        break;
                    case 'dd' :
                        innerText += '\t';
                        break;
                    case 'br' :
                        innerText += '\n';
                        break;
                    case 'hr' :
                        innerText += '\n---';
                        break;
                    case 'button' :
                        innerText += '[';
                        break;
                    case 'blockquote' :
                        title = vnode.getAttr( 'title' );
                        if( title ){
                            innerText += '\n' + title;
                        };
                    default :
                        if( BLOCK_ELEMENTS[ tagName ] ){
                            innerText += '\n';
                        };
                };
            } else if( vnode._nodeType === htmljson.NODE_TYPE.TEXT_NODE ){
                innerText += vnode.getNodeValue();
            };
        },
        function( vnode ){
            if( vnode.isElement() ){
                var tagName = vnode._tagName;

                switch( tagName ){
                    case 'ul' :
                    case 'ol' :
                    case 'dl' :
                    case 'table' :
                        break;
                    case 'th' :
                    case 'td' :
                        if( vnode.getParent().getLastChild() !== vnode ){
                            innerText += '\t';
                        };
                        break;
                    case 'button' :
                        innerText += ']';
                        break;
                    case 'li' :
                    case 'dt' :
                    case 'dd' :
                    case 'tr' :
                    case 'caption' :
                        innerText += '\n';
                        break;
                    default :
                        if( BLOCK_ELEMENTS[ tagName ] ){
                            innerText += '\n';
                        };
                };
            };
        }
    );
    return innerText;
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
        if( _RESTRICTED_MODE.CURRENT_NODE_IS_EMPTY <= this.getRestrictedMode() ){
            throw 'In Restricted Mode. VNode cannot execute getNextNode()!';
        };
    };

    /* if( _RESTRICTED_MODE.NEW_NODE <= this.getRestrictedMode() ){
        if( VNode.currentRestrictedParentVNode === this._parent ){

        };
    }; */

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
VNode.prototype.getChildNodeCount = function(){
    if( htmljson.DEFINE.DEBUG ){
        if( !_canHasChildren( this ) ){
            throw 'getChildNodeCount() をサポートしない nodeType です!';
        };
        if( _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode() ){
            throw 'In Restricted Mode. VNode cannot execute getChildNodeCount()!';
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

    if( _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode() ){
        // 
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
        if( _RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode() ){
            throw 'In Restricted Mode. VNode cannot execute getLastChild()!';
        };
    };

    if( _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode() ){
        // 
    };

    return this.getChildNodeAt( this.getChildNodeCount() - 1 );
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
        if( _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode() ){
            throw 'In Restricted Mode. VNode cannot execute getChildNodeAt()!';
        };
    };

    return this._childNodes && this._childNodes[ index ] || null;
};

/*=============================================================================
 *
 *  remove, empty, wrap, replace
 *
 */

/**
 * remove
 */
VNode.prototype.remove = function(){
    if( htmljson.DEFINE.DEBUG ){
        if( _isDocOrDocFragment( this ) ){
            throw 'remove() をサポートしない nodeType です!';
        };
        if( _RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode() ){
            throw 'In Restricted Mode. VNode cannot execute remove()!';
        };
    };

    if( _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode() ){
        this._removed = VNode.treeIsUpdated = true;
        return null;
    };

    var index = this.getMyIndex();

    if( 0 <= index ){
        this._parent._childNodes.splice( index, 1 );
        this._parent = null;
        VNode.treeIsUpdated = true;
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
        if( _RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode() ){ // jsonNodeIndex = 0 なら可能
            throw 'In Restricted Mode. VNode cannot execute empty()!';
        };
    };

    if( _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode() ){
        this._hasUnknownChildren = false;
        VNode.treeIsUpdated = true;
        if( this._nodesInsertedFirst ){
            this._nodesInsertedFirst.length = 0;
        };
        if( this._nodesInsertedLast ){
            this._nodesInsertedLast.length = 0;
        };
        return;
    };

    var childNodes = this._childNodes, i, l;

    if( childNodes ){
        for( i = childNodes.length; i; ){
            childNodes[ --i ].remove();
        };
    };
};

/**
 * @param {number} nodeType
 * @param {(string | number)=} opt_nodeValueOrTag
 * @param {(Attrs | InstructionArgs | null)=} opt_attrsOrArgs 
 * @return {!VNode | null} */
VNode.prototype.wrap = function( nodeType, opt_nodeValueOrTag, opt_attrsOrArgs ){
    if( htmljson.DEFINE.DEBUG ){
        if( this._isRestrictedMode && !_isCurrentVNode( this ) ){
            throw 'restricted mode では現在のノード以外への empty() は非対応です!';
        };
        if( _RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode() ){
            throw 'In Restricted Mode. VNode cannot execute wrap()!';
        };
    };

    var wrapperNode = this.insertNodeBefore( nodeType, opt_nodeValueOrTag, opt_attrsOrArgs );

    _insertAt( wrapperNode, 0, [ this ] );

    return wrapperNode;
};

/**
 * @param {number} nodeType
 * @param {(string | number)=} opt_nodeValueOrTag
 * @param {(Attrs | InstructionArgs | null)=} opt_attrsOrArgs 
 * @return {!VNode | null} */
VNode.prototype.replace = function( nodeType, opt_nodeValueOrTag, opt_attrsOrArgs ){
    if( htmljson.DEFINE.DEBUG ){
        if( _RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode() ){
            throw 'In Restricted Mode. VNode cannot execute replace()!';
        };
    };

    var wrapperNode = this.insertNodeBefore( nodeType, opt_nodeValueOrTag, opt_attrsOrArgs );

    this.remove();

    return wrapperNode;
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
        if( _RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode() ){
            throw 'In Restricted Mode. VNode cannot execute insertBefore()!';
        };
    };

    /* if( _prevNodeIsFreezed( this ) ){
        
    }; */

    this._parent && _insertAt( this._parent, this.getMyIndex(), arguments );
};
/**
 * @param {...VNode} ___vnode */
VNode.prototype.insertFirst = function( ___vnode ){
    if( htmljson.DEFINE.DEBUG ){
        if( _RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode() ){ // jsonNodeIndex=0 なら可能
            throw 'In Restricted Mode. VNode cannot execute insertFirst()!';
        };
    };

    _insertAt( this, 0, arguments );
};
/**
 * @param {number} index
 * @param {...VNode} ___vnode */
VNode.prototype.insertAt = function( index, ___vnode ){
    if( htmljson.DEFINE.DEBUG ){
        if( _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode() ){ // jsonNodeIndex=0 なら可能
            throw 'In Restricted Mode. VNode cannot execute insertAt()!';
        };
    };

    var args = [], i;

    for( i = arguments.length; 1 < i; ){
        args[ i - 2 ] = arguments[ --i ];
    };
    _insertAt( this, index, args );
};
/**
 * @param {...VNode} ___vnode */
VNode.prototype.insertLast = function( ___vnode ){
    if( htmljson.DEFINE.DEBUG ){
        if( _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode() ){
            throw 'In Restricted Mode. VNode cannot execute insertLast()!';
        };
    };

    _insertAt( this, this.getChildNodeCount(), arguments );
};
/**
 * @param {...VNode} ___vnode */
VNode.prototype.insertAfter = function( ___vnode ){
    if( htmljson.DEFINE.DEBUG ){
        if( _isDocOrDocFragment( this ) || this._nodeType === htmljson.NODE_TYPE.ELEMENT_START_TAG ){
            throw 'insertAfter() をサポートしない nodeType です!';
        };
        if( _RESTRICTED_MODE.CURRENT_NODE_REMOVED <= this.getRestrictedMode() ){
            throw 'In Restricted Mode. VNode cannot execute insertAfter()!';
        };
    };

    /* if( _nextNodeIsUnknown( this ) ){

    }; */

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
                // 逆順で処理しているので、vnode は現在のノード(vnodes[i-1])の nextSibling
                throw '閉じタグの無い Element の次に Node を挿入することは出来ません!';
            };
            vnode = vnodes[ --i ];
            if( htmljson.DEFINE.DEBUG && vnode._nodeType === htmljson.NODE_TYPE.DOCUMENT_NODE ){
                throw 'Document Node を挿入することは出来ません!';
            };
        };
        i = vnodes.length;
    };

    if( i ){
        VNode.treeIsUpdated = true;
    };

    for( ; i; ){
        vnode = vnodes[ --i ];
        if( vnode._nodeType === htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE ){
            vnode.getChildNodeCount() && _insertAt( parent, index, vnode._childNodes );
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
 * @param {(Attrs | null)=} opt_attrs 
 * @param {string=} opt_textContent  
 * @return {!VNode | null} */
VNode.prototype.insertElementBefore = function( tagName, opt_attrs, opt_textContent ){
    if( htmljson.DEFINE.DEBUG ){
        if( _isDocOrDocFragment( this ) ){
            throw 'insertElementBefore() をサポートしない nodeType です!';
        };
        if( _RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode() ){
            throw 'In Restricted Mode. VNode cannot execute insertFirst()!';
        };
    };

    if( _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode() ){
        this._nodesInsertedBefore = this._nodesInsertedBefore || [];
        this._nodesInsertedBefore.push( [ htmljson.NODE_TYPE.ELEMENT_NODE, tagName, opt_attrs, opt_textContent ] );
        VNode.treeIsUpdated = true;
        return null;
    };

    return this._parent ? this._parent.insertElementAt( this.getMyIndex(), tagName, opt_attrs, opt_textContent ) : null;
};
/**
 * @param {string} tagName 
 * @param {(Attrs | null)=} opt_attrs 
 * @param {string=} opt_textContent 
 * @return {VNode | null} */
VNode.prototype.insertElementFirst = function( tagName, opt_attrs, opt_textContent ){
    if( htmljson.DEFINE.DEBUG ){
        if( this._isRestrictedMode && !_isCurrentVNodeAndCanHaveChildren( this ) ){
            throw 'restricted mode では現在のノード以外への insertElementFirst() は非対応です!';
        };
    };

    if( _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode() ){
        this._nodesInsertedFirst = this._nodesInsertedFirst || [];
        this._nodesInsertedFirst.unshift( [ htmljson.NODE_TYPE.ELEMENT_NODE, tagName, opt_attrs, opt_textContent ] );
        VNode.treeIsUpdated = true;
        return null;
    };

    return this.insertElementAt( 0, tagName, opt_attrs, opt_textContent );
};
/**
 * @param {number} index
 * @param {string} tagName 
 * @param {(Attrs | null)=} opt_attrs 
 * @param {string=} opt_textContent 
 * @return {!VNode} */
VNode.prototype.insertElementAt = function( index, tagName, opt_attrs, opt_textContent ){
    if( htmljson.DEFINE.DEBUG ){
        if( _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode() ){
            throw 'In Restricted Mode. VNode cannot execute insertElementAt()!';
        };
    };

    var element = new VNode( this, index, htmljson.NODE_TYPE.ELEMENT_NODE, tagName, opt_attrs );

    if( opt_textContent != null ){
        element.insertNodeAt( 0, htmljson.NODE_TYPE.TEXT_NODE, opt_textContent );
    };

    VNode.treeIsUpdated = true;
    return element;
};
/**
 * @param {string} tagName 
 * @param {(Attrs | null)=} opt_attrs 
 * @param {string=} opt_textContent 
 * @return {VNode | null} */
VNode.prototype.insertElementLast = function( tagName, opt_attrs, opt_textContent ){
    if( htmljson.DEFINE.DEBUG ){
        if( _RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode() ){
            throw 'In Restricted Mode. VNode cannot execute insertElementLast()!';
        };
    };

    if( _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode() ){
        this._nodesInsertedLast = this._nodesInsertedLast || [];
        this._nodesInsertedLast.push( [ htmljson.NODE_TYPE.ELEMENT_NODE, tagName, opt_attrs, opt_textContent ] );
        VNode.treeIsUpdated = true;
        return null;
    };

    return this.insertElementAt( this.getChildNodeCount(), tagName, opt_attrs, opt_textContent );
};
/**
 * @param {string} tagName 
 * @param {(Attrs | null)=} opt_attrs 
 * @param {string=} opt_textContent
 * @return {!VNode | null} */
VNode.prototype.insertElementAfter = function( tagName, opt_attrs, opt_textContent ){
    if( htmljson.DEFINE.DEBUG ){
        if( _isDocOrDocFragment( this ) || this._nodeType === htmljson.NODE_TYPE.ELEMENT_START_TAG ){
            throw 'insertElementAfter() をサポートしない nodeType です!';
        };
        if( _RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode() ){
            throw 'In Restricted Mode. VNode cannot execute insertElementLast()!';
        };
    };

    if( _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode() ){
        this._nodesInsertedAfter = this._nodesInsertedAfter || [];
        this._nodesInsertedAfter.unshift( [ htmljson.NODE_TYPE.ELEMENT_NODE, tagName, opt_attrs, opt_textContent ] );
        VNode.treeIsUpdated = true;
        return null;
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
 * @param {(Attrs | InstructionArgs | null)=} opt_attrsOrArgs 
 * @return {!VNode | null} */
VNode.prototype.insertNodeBefore = function( nodeType, opt_nodeValueOrTag, opt_attrsOrArgs ){
    if( htmljson.DEFINE.DEBUG ){
        if( _isDocOrDocFragment( this ) ){
            throw 'insertNodeBefore() をサポートしない nodeType です!';
        };
        if( _RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode() ){
            throw 'In Restricted Mode. VNode cannot execute insertNodeBefore()!';
        };
    };

    if( this._isRestrictedMode ){
        this._nodesInsertedBefore = this._nodesInsertedBefore || [];
        this._nodesInsertedBefore.push( [ nodeType, opt_nodeValueOrTag, opt_attrsOrArgs ] );
        VNode.treeIsUpdated = true;
        return null;
    };

    return this._parent ? this._parent.insertNodeAt( this.getMyIndex(), nodeType, opt_nodeValueOrTag, opt_attrsOrArgs ) : null;
};
/**
 * @param {number} nodeType
 * @param {(string | number)=} opt_nodeValueOrTag
 * @param {(Attrs | InstructionArgs | null)=} opt_attrsOrArgs 
 * @return {VNode | null} */
VNode.prototype.insertNodeFirst = function( nodeType, opt_nodeValueOrTag, opt_attrsOrArgs ){
    if( htmljson.DEFINE.DEBUG ){
        if( _RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode() ){ // jsonNodeIndex=0 なら可能
            throw 'In Restricted Mode. VNode cannot execute insertNodeFirst()!';
        };
    };

    if( _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode() ){
        this._nodesInsertedFirst = this._nodesInsertedFirst || [];
        this._nodesInsertedFirst.unshift( [ nodeType, opt_nodeValueOrTag, opt_attrsOrArgs ] );
        VNode.treeIsUpdated = true;
        return null;
    };

    return this.insertNodeAt( 0, nodeType, opt_nodeValueOrTag, opt_attrsOrArgs );
};
/**
 * 
 * @param {number} index
 * @param {number} nodeType
 * @param {(string | number)=} opt_nodeValueOrTag
 * @param {(Attrs | InstructionArgs | null)=} opt_attrsOrArgs 
 * @return {!VNode} */
VNode.prototype.insertNodeAt = function( index, nodeType, opt_nodeValueOrTag, opt_attrsOrArgs ){
    if( htmljson.DEFINE.DEBUG ){
        if( _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode() ){
            throw 'In Restricted Mode. VNode cannot execute insertNodeAt()!';
        };
    };

    VNode.treeIsUpdated = true;
    return new VNode( this, index, nodeType, opt_nodeValueOrTag, opt_attrsOrArgs );
};
/**
 * @param {number} nodeType
 * @param {(string | number)=} opt_nodeValueOrTag
 * @param {(Attrs | InstructionArgs | null)=} opt_attrsOrArgs 
 * @return {VNode | null} */
VNode.prototype.insertNodeLast = function( nodeType, opt_nodeValueOrTag, opt_attrsOrArgs ){
    if( htmljson.DEFINE.DEBUG ){
        if( _RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode() ){
            throw 'In Restricted Mode. VNode cannot execute insertNodeFirst()!';
        };
    };

    if( _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode() ){
        this._nodesInsertedLast = this._nodesInsertedLast || [];
        this._nodesInsertedLast.push( [ nodeType, opt_nodeValueOrTag, opt_attrsOrArgs ] );
        VNode.treeIsUpdated = true;
        return null;
    };

    return this.insertNodeAt( this.getChildNodeCount(), nodeType, opt_nodeValueOrTag, opt_attrsOrArgs );
};
/**
 * @param {number} nodeType
 * @param {(string | number)=} opt_nodeValueOrTag
 * @param {(Attrs | InstructionArgs | null)=} opt_attrsOrArgs 
 * @return {!VNode | null} */
VNode.prototype.insertNodeAfter = function( nodeType, opt_nodeValueOrTag, opt_attrsOrArgs ){
    if( htmljson.DEFINE.DEBUG ){
        if( _isDocOrDocFragment( this ) || nodeType === htmljson.NODE_TYPE.ELEMENT_START_TAG ){
            throw 'insertNodeAfter() をサポートしない nodeType です!';
        };
        if( _RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode() ){
            throw 'In Restricted Mode. VNode cannot execute insertNodeFirst()!';
        };
    };

    if( _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode() ){
        this._nodesInsertedAfter = this._nodesInsertedAfter || [];
        this._nodesInsertedAfter.unshift( [ nodeType, opt_nodeValueOrTag, opt_attrsOrArgs ] );
        VNode.treeIsUpdated = true;
        return null;
    };

    return this._parent ? this._parent.insertNodeAt( this.getMyIndex() + 1, nodeType, opt_nodeValueOrTag, opt_attrsOrArgs ) : null;
};


/*=============================================================================
 *
 *  private
 *
 */

/**
 * @private
 * @enum {number}
 */
var _RESTRICTED_MODE = {
    NO_RESTRICTIONS                   : 0,
    NEW_NODE                          : 1,
    CURRENT_NODE_IS_EMPTY             : 2,
    CURRENT_NODE_HAS_UNKNOWN_CHILDREN : 3,
    CURRENT_NODE_REMOVED              : 4,
    READ_ONLY                         : 5
};

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
 * @private
 * @param {!VNode} vnode 
 * @return {boolean} 
 */
function _isCurrentVNode( vnode ){
    return vnode === VNode.currentRestrictedVNode && !vnode._removed;
};

/**
 * @private
 * @param {!VNode} vnode 
 * @return {boolean} 
 */
function _isCurrentVNodeAndCanHaveChildren( vnode ){
    return _isCurrentVNode( vnode ) && _canHasChildren( vnode );
};

/**
 * @private
 * @param {*} oldValue 
 * @param {*} newValue 
 */
function _compareValuesAndSetUpdatedFlag( oldValue, newValue ){
    if( oldValue !== newValue ){
        VNode.treeIsUpdated = true;
    };
};

/**
 * 再帰呼び出しを使わずに文書ツリーを遡っています
 * 
 * @param {!VNode} vnode
 * @param {!function(!VNode):(number | void)} onEnterNode コールバック内で要素の削除と追加はできません、index が狂います
 * @param {!function(!VNode):(number | void)=} opt_onLeaveNode コールバック内で要素の削除と追加はできません、index が狂います
 * @return {boolean} treeIsUpdated
 */
function _walkAllDescendantVNodes( vnode, onEnterNode, opt_onLeaveNode ){
    var parentNode    = vnode,
        depthX2       = 0,
        treeIsUpdated = false,
        combiList, currentIndex, childNode, operation;

    if( parentNode.getChildNodeCount() ){
        combiList = [ -1, parentNode ];
        do {
            currentIndex = ++combiList[ depthX2 ];
            childNode    = parentNode.getChildNodeAt( currentIndex );
            if( childNode ){
                operation = onEnterNode( childNode );
                if( operation === htmljson.Traverser.VISITOR_OPTION.BREAK ){
                    return treeIsUpdated;
                };
                if( operation !== htmljson.Traverser.VISITOR_OPTION.SKIP ){
                    if( childNode.getChildNodeCount() ){
                        depthX2 += 2;
                        combiList[ depthX2 + 0 ] = -1;
                        combiList[ depthX2 + 1 ] = parentNode = childNode;
                    } else if( opt_onLeaveNode ){
                        operation = opt_onLeaveNode( childNode );
                        if( operation === htmljson.Traverser.VISITOR_OPTION.BREAK ){
                            return treeIsUpdated;
                        } else if( operation !== htmljson.Traverser.VISITOR_OPTION.SKIP ){
                            if( operation <= htmljson.Traverser.VISITOR_OPTION.REMOVED || htmljson.Traverser.VISITOR_OPTION.INSERTED_BEFORER <= operation ){
                                combiList[ depthX2 ] += operation;
                                treeIsUpdated = true;
                            };
                        };
                    };
                };
            } else {
                if( opt_onLeaveNode ){
                    operation = opt_onLeaveNode( parentNode );
                    if( operation === htmljson.Traverser.VISITOR_OPTION.BREAK ){
                        return treeIsUpdated;
                    } else if( operation !== htmljson.Traverser.VISITOR_OPTION.SKIP ){
                        if( operation <= htmljson.Traverser.VISITOR_OPTION.REMOVED || htmljson.Traverser.VISITOR_OPTION.INSERTED_BEFORER <= operation ){
                            combiList[ depthX2 ] += operation;
                            treeIsUpdated = true;
                        };
                    };
                };
                combiList.length = depthX2;
                depthX2 -= 2;
                parentNode = combiList[ depthX2 + 1 ];
            };
        } while( 0 <= depthX2 );
    };
    return treeIsUpdated;
};
