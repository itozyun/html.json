goog.provide( 'htmljson.Traverser.VISITOR_OPTION' );
goog.provide( 'htmljson.Traverser.EnterHandler' );
goog.provide( 'htmljson.Traverser.LeaveHandler' );
goog.provide( 'htmljson.Traverser.traverseAllDescendantNodes' );

// goog.require( 'htmljson.base' );

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
 * @typedef {function((!HTMLJson | string | number), (HTMLJson | null), number, number, boolean=):(number | void)}
 */
htmljson.Traverser.EnterHandler;

/**
 * @typedef {function((!HTMLJson | string | number), (HTMLJson | null), number, number):(number | void)}
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
        torioList      = [ -1, rootHTMLJson, childNodeStart ],
        treeIsUpdated  = false,
        currentIndex, childNode, _childNodeStart;

    if( operation === VISITOR_OPTION.BREAK || operation === VISITOR_OPTION.SKIP ){
        return false;
    };

    if( 0 < parentNode.length - childNodeStart ){
        do {
            currentIndex = ++torioList[ depthX3 ];
            childNode    = parentNode[ currentIndex + childNodeStart ];
            if( childNode === undefined ){
                torioList.length = depthX3;
                depthX3 -= 3;
                parentNode     = torioList[ depthX3 + 1 ];
                childNodeStart = torioList[ depthX3 + 2 ];
                if( opt_onLeaveNode ){
                    if( parentNode ){
                        currentIndex = torioList[ depthX3 ] + childNodeStart;
                        operation    = opt_onLeaveNode( parentNode[ currentIndex ], parentNode, currentIndex, depthX3 / 3 + 1 );
                        if( operation === VISITOR_OPTION.BREAK ){
                            return treeIsUpdated;
                        } else if( operation !== VISITOR_OPTION.SKIP ){
                            if( operation <= VISITOR_OPTION.REMOVED || VISITOR_OPTION.INSERTED_BEFORER <= operation ){
                                torioList[ depthX3 ] += operation;
                                treeIsUpdated = true;
                            };
                        };
                    };
                };
            } else {
                operation = onEnterNode( childNode, parentNode, currentIndex + childNodeStart, depthX3 / 3 + 1 );
                if( operation === VISITOR_OPTION.BREAK ){
                    return treeIsUpdated;
                };
                if( operation !== VISITOR_OPTION.SKIP ){
                    if( operation <= VISITOR_OPTION.REMOVED ){
                        torioList[ depthX3 ] += operation;
                        treeIsUpdated = true;
                    } else {
                        if( VISITOR_OPTION.INSERTED_BEFORER <= operation ){
                            torioList[ depthX3 ] += operation;
                            treeIsUpdated = true;
                        };
                        _childNodeStart = m_getChildNodeStartIndex( childNode );
                        if( 0 < childNode.length - _childNodeStart ){
                            depthX3 += 3;
                            torioList[ depthX3 + 0 ] = -1;
                            torioList[ depthX3 + 1 ] = parentNode     = childNode;
                            torioList[ depthX3 + 2 ] = childNodeStart = _childNodeStart;
                        } else if( opt_onLeaveNode ){
                            if( parentNode ){
                                operation = opt_onLeaveNode( childNode, parentNode, currentIndex + childNodeStart, depthX3 / 3 + 1 );
                                if( operation === VISITOR_OPTION.BREAK ){
                                    return treeIsUpdated;
                                } else if( operation !== VISITOR_OPTION.SKIP ){
                                    if( operation <= VISITOR_OPTION.REMOVED || VISITOR_OPTION.INSERTED_BEFORER <= operation ){
                                        torioList[ depthX3 ] += operation;
                                        treeIsUpdated = true;
                                    };
                                };
                            };
                        };
                    };
                };
            };
        } while( 0 <= depthX3 );
    };
    if( opt_onLeaveNode ){
        opt_onLeaveNode( rootHTMLJson, null, -1, 0 / 3 );
    };
    return treeIsUpdated;
};
