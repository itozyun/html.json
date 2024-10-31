goog.provide( 'json2html.stream' );

goog.requireType( 'htmljson.Traverser.EnterHandler' );
goog.requireType( 'htmljson.Traverser.LeaveHandler' );
goog.requireType( 'ThroughLike' );
goog.requireType( 'Through' );
goog.require( 'json2html.createJSON2HTMLTransformaer' );
goog.require( 'HTMLJsonParser.create' );

/**
 * @param {!InstructionHandler=} opt_onInstruction
 * @param {!EnterNodeHandler=} opt_onEnterNode
 * @param {!function((string | !Error))=} opt_onError
 * @param {!Object=} opt_options
 * @return {!Through}
 */
json2html.stream = function( opt_onInstruction, opt_onEnterNode, opt_onError, opt_options ){
    const through = HTMLJsonParser.create( opt_onError );

    json2html.createJSON2HTMLTransformaer(
        true,
        through,
        /**
         * @param {!htmljson.Traverser.EnterHandler} onEnterNode
         * @param {!htmljson.Traverser.LeaveHandler=} opt_onLeaveNode
         */
        function( onEnterNode, opt_onLeaveNode ){
            /**
             * HTMLJsonParser の onEnterNode から呼ばれる
             * インストラクションが返した htmlJson を処理中の pause をこのレイヤーで吸収する
             * この parentJSONNode は currentJSONNode を子に持たない, 接続されていない
             * 
             * @param {!HTMLJson | string | number} currentJSONNode 
             * @param {HTMLJson | null} parentJSONNode 
             * @param {number} myIndex
             * @param {number} depth
             * @param {boolean=} opt_hasUnknownChildren for json2html.stream
             * @param {!Through=} through
             * @return {number | void} VISITOR_OPTION.*
             */
            function asyncProcessResolver( currentJSONNode, parentJSONNode, myIndex, depth, opt_hasUnknownChildren, through ){
                if( unprocessedHTMLJson ){
                    if( processSync( unprocessedHTMLJson, through, onEnterNode, onLeaveNode ) ){
                        return;
                    } else {
                        unprocessedHTMLJson = null;
                    };
                };

                var result = onEnterNode( currentJSONNode, parentJSONNode, myIndex, depth, opt_hasUnknownChildren, through ),
                    isNewNodeGeneratedByInstruction = m_isArray( result ), // ProcessingInstruction の場合だけ HTMLJson(Array) が返る
                    i, l;

                if( through.stopped ){
                    if( htmljson.DEFINE.DEBUG ){
                        if( result != null ){
                            throw 'ProcessingInstruction のハンドラで htmlJson の返却と stop の両方を行うことは出来ません!';
                        };
                    };
                    // ProcessingInstruction で pause した( HTMLJson の return 無し )
                    // InstructionAttribute で pause した
                    return;
                } else if( isNewNodeGeneratedByInstruction ){
                    parentJSONNode = /** @type {!HTMLJson} */ (parentJSONNode);
                    result = /** @type {!HTMLJson} */ (result);

                    // parentJSONNode に新しい htmlJson ノードを接続する
                    if( result[ 0 ] === htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE ){
                        for( i = 1, l = result.length; i < l; ++i ){
                            parentJSONNode.push( result[ i ] );
                        };
                    } else {
                        parentJSONNode.push( result );
                    };

                    if( processSync( parentJSONNode, through, onEnterNode, onLeaveNode ) ){
                        unprocessedHTMLJson = parentJSONNode;
                    };
                };
                return VISITOR_OPTION.REMOVED; // processSync で stop したが、もともとの ProcessingInstruction(currentJSONNode) は既に処理済
            };

            /** @type {HTMLJson | null} この node は currentJSONNode を子に持つ, 接続されている */
            var unprocessedHTMLJson;

            var onLeaveNode = opt_onLeaveNode;

            /** @const */ through._jsonParser.onEnterNode = asyncProcessResolver;
            /** @const */ through._jsonParser.onLeaveNode = onLeaveNode;
        },
        opt_onInstruction, opt_onEnterNode, opt_onError, opt_options
    );
    return through;
};

/**
 * @param {!HTMLJson} unprocessedHTMLJson
 * @param {!Through} through
 * @param {!htmljson.Traverser.EnterHandler} onEnterNode
 * @param {!htmljson.Traverser.LeaveHandler=} onLeaveNode
 * @return {boolean} aborted */
function processSync( unprocessedHTMLJson, through, onEnterNode, onLeaveNode ){
    var aborted;

    // 同期で html 文字列化する
    htmljson.Traverser.traverseAllDescendantNodes(
        unprocessedHTMLJson,
        function( currentNode, parentNode, myIndex, depth ){
            if( currentNode !== unprocessedHTMLJson && !currentNode.entered ){
                var result = onEnterNode( currentNode, parentNode, myIndex, depth, m_hasChildren( currentNode ), through ),
                    isNewNodeGeneratedByInstruction = m_isArray( result );
                
                if( through.stopped ){
                    if( htmljson.DEFINE.DEBUG ){
                        if( isNewNodeGeneratedByInstruction ){
                            throw 'ProcessingInstruction のハンドラで htmlJson の返却と stop の両方を行うことは出来ません!';
                        };
                    };
                    aborted = true;
                    return VISITOR_OPTION.BREAK;
                } else if( isNewNodeGeneratedByInstruction ){
                    m_replaceProcessingInstructionWithHTMLJson( /** @type {!HTMLJson} */ (parentNode), myIndex, /** @type {!HTMLJson} */ (result) );
                    return VISITOR_OPTION.REMOVED;
                } else if( m_isStringOrNumber( currentNode ) ){
                    parentNode.splice( myIndex, 1 );
                    return VISITOR_OPTION.REMOVED;
                } else {
                    currentNode.entered = true;
                };
            };
        },
        function( currentNode, parentNode, myIndex, depth ){
            if( currentNode !== unprocessedHTMLJson && !currentNode.left && m_canHasChildren( currentNode ) ){
                onLeaveNode( currentNode, parentNode, myIndex, depth );
                currentNode.left = true;
            };
        }
    );
    return aborted;
};