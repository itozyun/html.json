goog.provide( 'htmljson.Traverser.VISITOR_OPTION' );
goog.provide( 'htmljson.Traverser.EnterHandler' );
goog.provide( 'htmljson.Traverser.LeaveHandler' );
goog.provide( 'htmljson.Traverser.traverseAllDescendantNodes' );

// goog.require( 'htmljson.base' );
goog.requireType( 'Through' );
// htmljson.Traverser = {};

/**
 * @enum {number}
 */
var VISITOR_OPTION = {
    REMOVED          : -1,
    NONE             : 0,
    INSERTED_BEFORER : 1,
    BREAK            : Infinity,
    SKIP             : -Infinity
};

htmljson.Traverser.VISITOR_OPTION = VISITOR_OPTION;

/**
 * @typedef {function((!HTMLJson | string | number), (HTMLJson | null), number, number, boolean=, !Through=):(number | !HTMLJson | void)}
 */
htmljson.Traverser.EnterHandler;

/**
 * @typedef {function((!HTMLJson | string | number), (HTMLJson | null), number, number, boolean=):(number | void)}
 */
htmljson.Traverser.LeaveHandler;

/**
 * 再帰呼び出しを使わずに html.json ツリーを遡っています
 * 
 * @param {!HTMLJson} rootHTMLJson
 * @param {!htmljson.Traverser.EnterHandler} onEnterNode
 * @param {!htmljson.Traverser.LeaveHandler=} opt_onLeaveNode
 * @return {boolean} treeIsUpdated
 */
htmljson.Traverser.traverseAllDescendantNodes = function( rootHTMLJson, onEnterNode, opt_onLeaveNode ){
    var parentNode     = rootHTMLJson,
        childNodeStart = m_getChildNodeStartIndex( parentNode ),
        depthX3        = 0,
        operation      = onEnterNode( rootHTMLJson, null, -1, depthX3 / 3 ),
        currentIndex   = -1,
        tuple          = [ currentIndex, rootHTMLJson, childNodeStart ],
        treeIsUpdated  = false,
        childNode;

    if( operation === VISITOR_OPTION.BREAK || operation === VISITOR_OPTION.SKIP ){
        return false;
    };

    if( 0 < parentNode.length - childNodeStart ){
        while( true ){
            ++currentIndex;
            childNode = parentNode[ currentIndex + childNodeStart ];
            if( childNode != null ){
                operation = onEnterNode( childNode, parentNode, currentIndex + childNodeStart, depthX3 / 3 + 1 );
                if( operation === VISITOR_OPTION.BREAK ){
                    return treeIsUpdated;
                } else if( operation === VISITOR_OPTION.SKIP ){
                    continue;
                } else if( operation <= VISITOR_OPTION.REMOVED ){
                    currentIndex += operation;
                    treeIsUpdated = true;
                    continue;
                } else {
                    if( VISITOR_OPTION.INSERTED_BEFORER <= operation ){
                        currentIndex += operation;
                        treeIsUpdated = true;
                    };
                    if( m_hasChildren( childNode ) ){
                        tuple[ depthX3 + 0 ] = currentIndex;
                        depthX3 += 3;
                        tuple[ depthX3 + 0 ] = currentIndex   = -1;
                        tuple[ depthX3 + 1 ] = parentNode     = childNode;
                        tuple[ depthX3 + 2 ] = childNodeStart = m_getChildNodeStartIndex( childNode );
                        continue;
                    } else if( !opt_onLeaveNode ){
                        continue;
                    };
                };
            } else {
                if( depthX3 === 0 ){
                    break;
                };
                tuple.length = depthX3;
                depthX3 -= 3;
                currentIndex   = tuple[ depthX3 + 0 ];
                parentNode     = tuple[ depthX3 + 1 ];
                childNodeStart = tuple[ depthX3 + 2 ];
                if( !opt_onLeaveNode ){
                    continue;
                };
                childNode = parentNode[ currentIndex + childNodeStart ];
            };
            operation = opt_onLeaveNode( childNode, parentNode, currentIndex + childNodeStart, depthX3 / 3 + 1 );
            if( operation === VISITOR_OPTION.BREAK ){
                return treeIsUpdated;
            } else if( operation !== VISITOR_OPTION.SKIP ){
                if( operation <= VISITOR_OPTION.REMOVED || VISITOR_OPTION.INSERTED_BEFORER <= operation ){
                    currentIndex += operation;
                    treeIsUpdated = true;
                };
            };
        };
    };
    if( opt_onLeaveNode ){
        opt_onLeaveNode( rootHTMLJson, null, -1, 0 / 3 );
    };
    return treeIsUpdated;
};
