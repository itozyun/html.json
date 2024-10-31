goog.provide( 'isStaticDocument' );

goog.require( 'htmljson.NODE_TYPE' );
goog.require( 'htmljson.base' );
goog.require( 'htmljson.Traverser.VISITOR_OPTION' );
goog.require( 'htmljson.Traverser.traverseAllDescendantNodes' );

/**
 * @param {!HTMLJson} rootHTMLJson
 * @param {string} attrPrefix :
 * @return {boolean}
 */
var isStaticDocument = function( rootHTMLJson, attrPrefix ){
    var isStaticWebPage = true;

    htmljson.Traverser.traverseAllDescendantNodes(
        rootHTMLJson,
        /**
         * 
         * @param {!HTMLJson | string | number} currentJSONNode 
         * @param {HTMLJson | null} parentJSONNode 
         * @param {number} myIndex
         * @param {number} depth
         * @return {number | void} VISITOR_OPTION.*
         */
        function( currentJSONNode, parentJSONNode, myIndex, depth ){
            var tagName   = currentJSONNode[ 0 ],
                attrIndex = 1,
                attrs, name;

            switch( m_getNodeType( currentJSONNode ) ){
                case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION :
                    isStaticWebPage = false;
                    return htmljson.Traverser.VISITOR_OPTION.BREAK;
                case htmljson.NODE_TYPE.ELEMENT_NODE :
                case htmljson.NODE_TYPE.ELEMENT_START_TAG :
                    if( m_isNumber( tagName ) ){
                        attrIndex = 2;
                    };
                    attrs = currentJSONNode[ attrIndex ];
                    // attr
                    if( m_isAttributes( attrs ) ){
                        for( name in attrs ){
                            if( m_isInstructionAttr( attrPrefix, name ) ){
                                isStaticWebPage = false;
                                return htmljson.Traverser.VISITOR_OPTION.BREAK;
                            };
                        };
                    };
                    break;
            };
        }
    );
    return isStaticWebPage;
};
