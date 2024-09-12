goog.provide( 'VNode.createVNodeFromHTMLJson' );

goog.require( 'VNode' );
goog.require( 'htmljson.NODE_TYPE' );

/**
 * 
 * @param {!Array} rootHTMLJson
 * @param {boolean} isRestrictedMode
 * @return {!VNode}
 */
VNode.createVNodeFromHTMLJson = function( rootHTMLJson, isRestrictedMode ){
    return walkNode( rootHTMLJson, isRestrictedMode );

    /**
     * 
     * @param {!Array} currentJSONNode 
     * @param {!VNode | boolean} parentOrMode 
     * @param {number} myIndex
     * @return {!VNode}
     */
    function walkNode( currentJSONNode, parentOrMode ){
        /**
         * @param {number} nodeType 
         * @param {(string | number)=} opt_nodeValueOrTag 
         * @param {(Attrs | Array | null)=} opt_attrsOrArgs
         * @return {!VNode}
         */
        function insertNode( nodeType, opt_nodeValueOrTag, opt_attrsOrArgs ){
            if( parentVNode ){
                return parentVNode.insertNodeLast( nodeType, opt_nodeValueOrTag, opt_attrsOrArgs );
            } else {
                return new VNode( isRestrictedMode, 0, nodeType, opt_nodeValueOrTag, opt_attrsOrArgs );
            };
        };

        var parentVNode = m_isBoolean( parentOrMode ) ? null : parentOrMode;
            arg0        = currentJSONNode[ 0 ],
            arg1        = currentJSONNode[ 1 ],
            attrIndex   = 1,
            tagName     = arg0;

        switch( arg0 ){
            case htmljson.NODE_TYPE.DOCUMENT_NODE :
                vnode = insertNode( htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE, arg1 );
                walkChildNodes( currentJSONNode, vnode );
                break;
            case htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE :
                vnode = insertNode( htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE );
                walkChildNodes( currentJSONNode, vnode );
                break;
            case htmljson.NODE_TYPE.TEXT_NODE :
                vnode = insertNode( htmljson.NODE_TYPE.TEXT_NODE, arg1 );
                break;
            case htmljson.NODE_TYPE.CDATA_SECTION :
                vnode = insertNode( htmljson.NODE_TYPE.CDATA_SECTION, arg1 );
                break;
            case htmljson.NODE_TYPE.COMMENT_NODE :
                vnode = insertNode( htmljson.NODE_TYPE.COMMENT_NODE, arg1 );
                break;
            case htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER :
                vnode = insertNode( htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER, arg1 );
                walkChildNodes( currentJSONNode, vnode );
                break;
            case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START :
                vnode = insertNode( htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START, arg1 );
                break;
            case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_END :
                vnode = insertNode( htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_END );
                break;
            case htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER :
                vnode = insertNode( htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER, arg1 );
                walkChildNodes( currentJSONNode, vnode );
                break;
            case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION :
                vnode = insertNode( htmljson.NODE_TYPE.PROCESSING_INSTRUCTION, arg1 );
                // args currentJSONNode
                break;
            case htmljson.NODE_TYPE.ELEMENT_END_TAG :
                vnode = insertNode( htmljson.NODE_TYPE.ELEMENT_END_TAG, arg1 );
                break;
            case htmljson.NODE_TYPE.ELEMENT_NODE :
            case htmljson.NODE_TYPE.ELEMENT_START_TAG :
                tagName   = arg1;
                attrIndex = 2;
            default :
                if( m_isString( tagName ) ){
                    node = insertNode( m_isString( arg0 ) ? htmljson.NODE_TYPE.ELEMENT_NODE : arg0, tagName, currentJSONNode[ attrIndex ] );
                    walkChildNodes( currentJSONNode, node );
                };
        };
        return vnode;
    };

    /**
     * 
     * @param {!Array} currentJSONNode 
     * @param {!VNode} parentVNode 
     */
    function walkChildNodes( currentJSONNode, parentVNode ){
        var i = m_getChildNodeStartIndex( currentJSONNode ), childNode;

        for( ; i < currentJSONNode.length; ++i ){
            childNode = currentJSONNode[ i ];

            if( m_isStringOrNumber( childNode ) ){
                // TEXT_NODE
                parentVNode.insertNodeLast( htmljson.NODE_TYPE.TEXT_NODE, childNode );
            } else if( m_isArray( childNode ) ){
                walkNode( childNode, parentVNode );
            };
        };
    };
};