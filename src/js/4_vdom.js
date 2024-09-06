/**
 * 
 * @param {!Array | string | number} JSONNode 
 * @param {!Array.<!Array>} ancestorJSONNodes 
 * @param {boolean} isCurrentNode
 */
function VNode( JSONNode, ancestorJSONNodes, isCurrentNode ){
    this._jsonNode = JSONNode;
    this._ancestorJSONNodes = ancestorJSONNodes;
    this._isCurrentNode = isCurrentNode;
};

/**
 * 
 * @return {number}
 */
VNode.prototype.getNodeType = function(){
    return m_getNodeType( this._jsonNode );
};

/**
 * 
 * @return {string | number | void}
 */
VNode.prototype.getData = function(){
    switch( this.getNodeType() ){
        //case HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE                   :
        //    return;
        case HTML_DOT_JSON__NODE_TYPE.TEXT_NODE                      :
        //     return m_isArray( this._jsonNode ) ? this._jsonNode[ 1 ] : this._jsonNode;
        case HTML_DOT_JSON__NODE_TYPE.CDATA_SECTION                  :
        //    return this._jsonNode[ 1 ];
        //case HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION         :
        //    return;
        case HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE                   :
        //    return this._jsonNode[ 1 ];
        //case HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE                  :
        //    return;
        //case HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE         :
        //    return;
        case HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER :
        case HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER :
        case HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT  :
            return this._jsonNode[ 1 ];
    };
};

/**
 * 
 * @return {!Object | null}
 */
VNode.prototype.getAttributes = function(){
    return m_isAttributes( this._jsonNode[ 1 ] ) ? this._jsonNode[ 1 ] : null;
};

/**
 * 
 * @return {string}
 */
VNode.prototype.getTagName = function(){
    var json = this._jsonNode;
    var json0 = json[ 0 ];

    return m_parseTagName( json0 === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE ? json[ 1 ] : json0 )[ 0 ];
};

/**
 * 
 * @return {!VNode | null}
 */
VNode.prototype.getParent = function(){
    var ancestor = m_copyArray( this._ancestorJSONNodes );
    var parent   = ancestor.pop();

    return parent && 0 <= parent.indexOf( this._jsonNode ) ? new VNode( parent, ancestor, false ) : null;
};


/**
 * 
 * @return {!VNode | null}
 */
VNode.prototype.getNextNode = function(){
    return this.getParent().getChildNodeAt( this.getMyIndex() + 1 ) || null;
};

/**
 * 
 * @return {number}
 */
VNode.prototype.getChildNodeLength = function(){
    var json = this._jsonNode;

    return json.length - m_getChildNodeStartIndex( json );
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
VNode.prototype.getLastChild = function( index ){
    return this.getChildNodeAt( this.getChildNodeLength() - 1 );
};

/**
 * @param {number}
 * @return {!VNode | null}
 */
VNode.prototype.getChildNodeAt = function( index ){
    var ret = null;
    var json = this._jsonNode;
    var _index = m_getChildNodeStartIndex( json ) + index;
    var ancestor;
    var newJSONNode;

    if( _index < json.length ){
        ancestor = m_copyArray( this._ancestorJSONNodes );
        ancestor.push( json );

        newJSONNode = json[ _index ];

        if( m_isStringOrNumber( newJSONNode ) ){
            newJSONNode = [ HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, newJSONNode ];
            json.splice( _index, 1, newJSONNode );
        };

        ret = new VNode( newJSONNode, ancestor, false );
    };
    return ret;
};

/**
 * 
 * @return {number}
 */
VNode.prototype.getMyIndex = function(){
    var ancestor = this._ancestorJSONNodes;
    var parentJSON = ancestor[ ancestor.length - 1 ];

    return parentJSON ? parentJSON.indexOf( this._jsonNode ) - m_getChildNodeStartIndex( parentJSON ) : -1;
};

/**
 * 
 * 
 */
VNode.prototype.remove = function(){
    var ancestor = this._ancestorJSONNodes;
    var parentJSON = ancestor[ ancestor.length - 1 ];
    var _index = parentJSON.indexOf( this._jsonNode );

    parentJson.splice( _index, 1 );

    ancestor.length = 0;
};

/**
 * 
 * @param {string} tagName 
 * @param {!Object=} opt_attrs 
 * @param {(string | number)=} opt_textContent  
 * @return {!VNode}
 */
VNode.prototype.insertElementBefore = function( tagName, opt_attrs, opt_textContent ){
    return this.getParent().insertElementAt( this.getMyIndex(), tagName, opt_attrs, opt_textContent );
};

/**
 * 
 * @param {string} tagName 
 * @param {!Object=} opt_attrs 
 * @param {(string | number)=} opt_textContent 
 * @return {!VNode}
 */
VNode.prototype.insertElementFirst = function( tagName, opt_attrs, opt_textContent ){
    return this.insertElementAt( 0, tagName, opt_attrs, opt_textContent );
};

/**
 * 
 * @param {number} index
 * @param {string} tagName 
 * @param {!Object=} opt_attrs 
 * @param {(string | number)=} opt_textContent 
 * @return {!VNode}
 */
VNode.prototype.insertElementAt = function( index, tagName, opt_attrs, opt_textContent ){
    var json = this._jsonNode;
    var _index = m_getChildNodeStartIndex( json ) + index;
    var newJSONNode = [ tagName ];
    var ancestor = m_copyArray( this._ancestorJSONNodes );

    if( m_isAttributes( opt_attrs ) ){
        newJSONNode.push( opt_attrs );
    };
    if( m_isStringOrNumber( opt_textContent ) ){
        newJSONNode.push( opt_textContent );
    };

    if( _index < json.length ){
        json.splice( _index, 0, newJSONNode );
    } else {
        json.push( newJSONNode );
    };

    ancestor.push( json );

    return new VNode( newJSONNode, ancestor, false );
};

/**
 * 
 * @param {string} tagName 
 * @param {!Object=} opt_attrs 
 * @param {(string | number)=} opt_textContent 
 * @return {!VNode} 
 */
VNode.prototype.insertElementLast = function( tagName, opt_attrs, opt_textContent ){
    return this.insertElementAt( this.getChildNodeLength(), tagName, opt_attrs, opt_textContent );
};

/**
 * 
 * @param {string} tagName 
 * @param {!Object=} opt_attrs 
 * @param {(string | number)=} opt_textContent  
 */
VNode.prototype.insertElementAfter = function( tagName, opt_attrs, opt_textContent ){
    return this.getParent().insertElementAt( this.getMyIndex() + 1, tagName, opt_attrs, opt_textContent );
};

/**
 * 
 * @param {string | number} textContent
 * @return {!VNode} 
 */
VNode.prototype.insertTextBefore = function( textContent ){
    return this.getParent().insertTextAt( this.getMyIndex(), textContent );
};

/**
 *
 * @param {string | number} textContent
 * @return {!VNode} 
 */
VNode.prototype.insertTextFirst = function( textContent ){
    return this.insertTextAt( 0, textContent );
};

/**
 * 
 * @param {number} index
 * @param {string | number} textContent
 * @return {!VNode} 
 */
VNode.prototype.insertTextAt = function( index, textContent ){
    var json = this._jsonNode;
    var _index = m_getChildNodeStartIndex( json ) + index;
    var newJSONNode = [ HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, textContent ];
    var ancestor = m_copyArray( this._ancestorJSONNodes );

    if( _index < json.length ){
        json.splice( _index, 0, newJSONNode );
    } else {
        json.push( newJSONNode );
    };

    ancestor.push( json );

    return new VNode( newJSONNode, ancestor, false );
};

/**
 *
 * @param {string | number} textContent
 * @return {!VNode} 
 */
VNode.prototype.insertTextAtLast = function( textContent ){
    return this.insertTextAt( this.getChildNodeLength(), textContent );
};

/**
 * @param {string | number} textContent
 * @return {!VNode} 
 */
VNode.prototype.insertTextAfter = function( textContent ){
    return this.getParent().insertTextAt( this.getMyIndex() + 1, textContent );
};
