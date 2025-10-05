goog.provide( 'json2json.main' );
goog.provide( 'json2json.process' );

goog.require( 'htmlparser.BOOLEAN_ATTRIBUTES' );
goog.require( 'htmljson.NODE_TYPE' );
goog.require( 'htmljson.base' );
goog.require( 'htmljson.DEFINE.INSTRUCTION_ATTR_PREFIX' );
goog.require( 'htmlparser.isXMLRootElement' );
goog.require( 'htmlparser.isNamespacedTag' );
goog.require( 'VNode' );
goog.require( 'htmljson.Traverser.VISITOR_OPTION' );
goog.requireType( 'htmljson.Traverser.EnterHandler' );
goog.requireType( 'htmljson.Traverser.LeaveHandler' );
goog.require( 'htmljson.Traverser.traverseAllDescendantNodes' );

/**
 * @param {!HTMLJson} rootHTMLJson
 * @param {!InstructionHandler=} opt_onInstruction
 * @param {!EnterNodeHandler=} opt_onEnterNode
 * @param {!function(!VNode)=} opt_onDocumentReady
 * @param {!function((string | !Error))=} opt_onError
 * @param {!Object=} opt_options
 */
json2json.main = function( rootHTMLJson, opt_onInstruction, opt_onEnterNode, opt_onDocumentReady, opt_onError, opt_options ){
    if( core.isArray( rootHTMLJson ) ){
        if( rootHTMLJson[ 0 ] !== htmljson.NODE_TYPE.DOCUMENT_NODE && rootHTMLJson[ 0 ] !== htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE ){
            rootHTMLJson = [ htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE, rootHTMLJson ];
        };

        json2json.process( rootHTMLJson, opt_onInstruction, opt_onEnterNode, opt_onError, opt_options );

        if( opt_onDocumentReady ){
            dispatchDocumentReadyEvent( opt_onDocumentReady, rootHTMLJson );
        };
    } else if( htmljson.DEFINE.DEBUG ){
        opt_onError && opt_onError( 'Invalid html.json document!' );
    };
};

/**
 * @param {!HTMLJson} rootHTMLJson
 * @param {!InstructionHandler=} opt_onInstruction
 * @param {!EnterNodeHandler=} opt_onEnterNode
 * @param {!function((string | !Error))=} opt_onError
 * @param {!Object=} opt_options
 */
json2json.process = function( rootHTMLJson, opt_onInstruction, opt_onEnterNode, opt_onError, opt_options ){
    /** @const */
    var options           = opt_options || {};
    /** @const */
    var isTrimWhitespace  = [ 'normal', true, 'aggressive' ].indexOf( options[ 'trimWhitespaces' ] ) !== -1;
    /** @const */
    var isAggressiveTrim  = options[ 'trimWhitespaces' ] === 'aggressive';
    /** @const */
    var isRemoveNewlineBetweenFullWidthChars
                          = !!options[ 'removeNewlineBetweenFullWidthChars' ];
    /** @const */
    var keepCDATASections = options[ 'keepCDATASections'           ] !== false;
    /** @const */
    var keepComments      = options[ 'keepComments'                ] !== false;
    /** @const */
    var keepEmptyCondCmt  = options[ 'keepEmptyConditionalComment' ] === true;
    /** @const */
    var attrPrefix        = options[ 'instructionAttrPrefix'       ] || htmljson.DEFINE.INSTRUCTION_ATTR_PREFIX;

    var isTreeModified, isTreeModifiedByInstruction;
    var skippingTextHTMLJson;

    isTreeModified = htmljson.Traverser.traverseAllDescendantNodes(
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
            var tagName           = currentJSONNode[ 0 ],
                arg1              = currentJSONNode[ 1 ],
                attrIndex         = 1,
                prevJSONNode, attrs, result;

            switch( m_getNodeType( currentJSONNode ) ){
                case htmljson.NODE_TYPE.DOCUMENT_NODE :
                    if( isTrimWhitespace ){
                        currentJSONNode[ 1 ] = arg1.split( '\n' ).join( ' ' )  // 宣言中の改行を半角スペースに
                                                   .split( '  ' ).join( ' ' ); // 2つ以上の半角スペースをスペースに
                    }
                    break;
                case htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE :
                    break;
                case htmljson.NODE_TYPE.TEXT_NODE :
                    if( !core.isArray( currentJSONNode ) ){
                        arg1 = currentJSONNode;
                    };
                    if( core.isString( arg1 ) ){
                        arg1 = /** @type {string} */ (arg1);
                        if( !skippingTextHTMLJson ){
                            arg1 = m_normalizeNewlines( arg1 );
                            if( isTrimWhitespace ){
                                arg1 = trimWhiteSpaces( arg1, isAggressiveTrim, isRemoveNewlineBetweenFullWidthChars );
                            };
                        };
                        if( arg1 !== '' ){
                            parentJSONNode[ myIndex ] = arg1;
                        } else {
                            parentJSONNode.splice( myIndex, 1 );
                            return htmljson.Traverser.VISITOR_OPTION.REMOVED;
                        };
                    };
                    return;
                case htmljson.NODE_TYPE.CDATA_SECTION :
                    if( !keepCDATASections ){
                        /** @type {!HTMLJson} */ (parentJSONNode).splice( myIndex, 1 );
                        return htmljson.Traverser.VISITOR_OPTION.REMOVED;
                    };
                    break;
                case htmljson.NODE_TYPE.COMMENT_NODE :
                    if( !keepComments ){
                        /** @type {!HTMLJson} */ (parentJSONNode).splice( myIndex, 1 );
                        return htmljson.Traverser.VISITOR_OPTION.REMOVED;
                    };
                    break;
                case htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER :
                    break;
                case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START :
                    break;
                case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_END :
                    prevJSONNode = parentJSONNode[ myIndex - 1 ];

                    if( !keepEmptyCondCmt && prevJSONNode && prevJSONNode[ 0 ] === htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START ){
                        parentJSONNode.splice( myIndex - 1, 2 );
                        return htmljson.Traverser.VISITOR_OPTION.REMOVED * 2;
                    };
                    break;
                case htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER :
                    break;
                case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION :
                    if( opt_onInstruction ){
                        result = m_executeProcessingInstruction( opt_onInstruction, /** @type {!HTMLJson} */ (currentJSONNode), opt_onError );

                        if( result !== undefined ){
                            parentJSONNode = /** @type {!HTMLJson} */ (parentJSONNode);
                            if( result === null || result === '' ){
                                parentJSONNode.splice( myIndex, 1 );
                                return htmljson.Traverser.VISITOR_OPTION.REMOVED;
                            } else if( m_isStringOrNumber( result ) ){
                                parentJSONNode.splice( myIndex, 1, /** @type {string | number} */ (result) );
                                isTreeModifiedByInstruction = true;
                            } else if( core.isArray( result ) ){
                                m_replaceProcessingInstructionWithHTMLJson( parentJSONNode, myIndex, /** @type {!HTMLJson} */ (result) );
                                return htmljson.Traverser.VISITOR_OPTION.REMOVED;
                            };
                        };
                    };
                    break;
                case htmljson.NODE_TYPE.ELEMENT_NODE :
                case htmljson.NODE_TYPE.ELEMENT_START_TAG :
                    if( core.isNumber( tagName ) ){
                        tagName   = arg1;
                        attrIndex = 2;
                    };
                    tagName = m_parseTagName( /** @type {string} */ (tagName) )[ 0 ];
                    attrs = currentJSONNode[ attrIndex ];
                    // attr
                    if( m_isAttributes( attrs ) ){
                        if( walkAttributes( /** @type {!HTMLJson} */ (currentJSONNode), attrIndex - 1, /** @type {!Attrs} */ (attrs) ) === 0 ){
                            currentJSONNode.splice( attrIndex, 1 );
                        };
                    };
                    if( m_FAMILY_OF_PRE_ELEMENT[ tagName ] ){
                        trimWhitespaceInPre( /** @type {!HTMLJson} */ (currentJSONNode), isAggressiveTrim );
                        skippingTextHTMLJson = currentJSONNode;
                    } else if( m_TRIM_NEWLINES_ELEMENTS[ tagName ] ){
                        trimNewLines( skippingTextHTMLJson = currentJSONNode );
                    };
                    break;
                default :
                    if( htmljson.DEFINE.DEBUG ){
                        opt_onError && opt_onError( 'Not html.json! [' + currentJSONNode + ']' );
                    };
            };
        },
        /**
         * 
         * @param {!HTMLJson | string | number} currentJSONNode 
         * @param {HTMLJson | null} parentJSONNode 
         * @param {number} myIndex
         * @param {number} depth
         * @return {number | void} VISITOR_OPTION.*
         */
        function( currentJSONNode, parentJSONNode, myIndex, depth ){
            if( !keepEmptyCondCmt ){
                switch( m_getNodeType( currentJSONNode ) ){
                    case htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER :
                    case htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER :
                        if( currentJSONNode.length === 2 ){
                            /** @type {!HTMLJson} */ (parentJSONNode).splice( myIndex, 1 );
                            return htmljson.Traverser.VISITOR_OPTION.REMOVED;
                        };
                };
            };
            if( skippingTextHTMLJson === currentJSONNode ){
                skippingTextHTMLJson = null;
            };
        }
    );

    if( isTreeModified || isTreeModifiedByInstruction ){
        normalizeTextNodes( rootHTMLJson );
    };

    /**
     * @param {!HTMLJson} currentJSONNode
     * @param {number} tagNameIndex
     * @param {!Attrs} attrs
     * @return {number} = attributes.length
     */
    function walkAttributes( currentJSONNode, tagNameIndex, attrs ){
        var numAttributes = 0, name, originalName, value, isInstruction;
        var classList, i, newClass;

        var tagName   = m_parseTagName( /** @type {string} */ (currentJSONNode[ tagNameIndex ]) );
        var id        = tagName[ 1 ];
        var className = tagName[ 2 ];
        tagName = tagName[ 0 ];
    
        for( name in attrs ){
            originalName = name;
            value = attrs[ name ];
            isInstruction = m_isInstructionAttr( attrPrefix, name );

            if( isInstruction ){
                name = name.substr( attrPrefix.length );
                name === 'className' && ( name = 'class' );
                if( opt_onInstruction ){
                    value = m_executeInstructionAttr( opt_onInstruction, name, /** @type {!InstructionArgs | string} */ (value), opt_onError );
                } else {
                    ++numAttributes;
                    continue;
                };
                if( value !== undefined ){
                    delete attrs[ originalName ];
                    if( core.isArray( value ) ){
                        if( core.isString( value[ 0 ] ) ){
                            attrs[ originalName ] = value;
                            ++numAttributes;
                        } else if( htmljson.DEFINE.DEBUG ){
                            opt_onError && opt_onError( 'Invalid dynamic attribute callback value! [' + originalName + '=' + value + ']' );
                        };
                    } else if( htmlparser.BOOLEAN_ATTRIBUTES[ name ] && value === false ){

                    } else if( value !== null ){
                        if( core.isString( value ) ){
                            value = /** @type {string} */ (value);
                            if( name === 'id' ){
                                id = value;
                                continue;
                            } else if( name === 'class' ){
                                for( classList = value.split( ' ' ), i = classList.length; i; ){
                                    newClass = classList[ --i ];
                                    if( ( ' ' + className + ' ' ).indexOf( ' ' + newClass + ' ' ) === -1 ){
                                        className = ( className ? ' ' : '' ) + newClass;
                                    };
                                };
                                continue;
                            };
                        };
                        attrs[ name ] = value;
                        ++numAttributes;
                    };
                } else {
                    ++numAttributes;
                };
            } else {
                ++numAttributes;
            };
        };

        currentJSONNode[ tagNameIndex ] = m_createTagName( tagName, id, className );
        return numAttributes;
    };

    /**
     * 
     * @param {string} nodeValue
     * @param {boolean} isAggressiveTrim 
     * @param {boolean} isRemoveNewlineBetweenFullWidthChars 
     * @return {string | number}
     */
    function trimWhiteSpaces( nodeValue, isAggressiveTrim, isRemoveNewlineBetweenFullWidthChars ){
        /**
         * 
         * @param {string} string 
         * @return {string} 
         */
        function removeNewlineBetweenFullWidthChars( string ){
            // この関数は、HTML文書を文字列として受け取り、全角文字に挟まれた改行コードを削除したHTML文書を文字列として返す
            // 正規表現を使って、全角文字に挟まれた改行コードを空文字に置換する
            // 全角文字の範囲は、Unicodeのコードポイントで指定する
            // \uFF01-\uFF60は全角記号や英数字、\u3040-\u309Fはひらがな、\u30A0-\u30FFはカタカナ、\u4E00-\u9FFFは漢字などを表す
            // \r\nや\nや\rなどの改行コードを表すために、\sというメタ文字を使う
            // gというフラグを使って、文字列全体に対して置換を行う
            return string.replace(/([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])\s([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])/g, "$1$2");
        };
        function continuousToSingle( continuous, single ){
            while( 0 <= nodeValue.indexOf( continuous ) ){
                nodeValue = nodeValue.split( continuous ).join( single );
            };
        };
        function toSingleHalfWidthSpace(){
            // 2つ以上の半角スペースを1つの半角スペースへ
            continuousToSingle( '  ', ' ' );
        };

        if( isRemoveNewlineBetweenFullWidthChars ){
            nodeValue = removeNewlineBetweenFullWidthChars( nodeValue );
        };

        // タブは一つの半角スペースに
        nodeValue = nodeValue.split( '\t' ).join( ' ' );

        // 2つ以上の改行を1つの改行へ
        continuousToSingle( '\n\n', '\n' );

        toSingleHalfWidthSpace();

        if( isAggressiveTrim ){
            if( nodeValue.substr( nodeValue.length - 2 ) === '\n ' ){
                nodeValue = m_trimLastChar( nodeValue, ' ' );
            };
            if( nodeValue.charAt( nodeValue.length - 1 ) === '\n' ){
                var isAggressiveTrimWhitespace =
                    // <b>1</b> / <b>3</b>
                    //         ^^^ `/` の両隣のスペースを削除するか？は改行の有無で判断する
                        // 先頭が改行、かつ
                        nodeValue.charAt( 0 ) === '\n';
                        // 最後が改行と0~1つの半角スペース
            };
        };

        // 最後の改行を削除
        nodeValue = m_trimLastChar( nodeValue, '\n' );

        // 改行文字を一つの半角スペースに
        nodeValue = nodeValue.split( '\n' ).join( ' ' );

        toSingleHalfWidthSpace();

        if( isAggressiveTrimWhitespace ){
            // 先頭と最後の半角スペースを削除
            nodeValue = m_trimChar( nodeValue, ' ' );
        };
        // 半角スペースの保護には \u0020 または &#x20; または &#32; を使う
        nodeValue = nodeValue.split( '\\u0020' ).join( ' ' ).split( '&#x20;' ).join( ' ' ).split( '&#32;' ).join( ' ' );

        return /** @type {number | string} */ (m_tryToFiniteNumber( nodeValue ));
    };

    /**
     * pre タグ内のテキスト最小化
     * 
     * 1. 最初のテキストノードが空白文字のみなら削除
     * 2. 最初のテキストノードの頭の改行文字を削除
     * 3. 最後のテキストノードが空白文字のみなら削除
     * 4. 最後のテキストノードの後ろの改行文字を削除
     * 5. 各行の改行の前の空白文字("\t", " ")も削除(trimWhitespaces:aggressive のみ)
     *    obj.prop = 1;   \n
     *                 ^^^
     * 6. テキストノードが改行1文字だけの場合、直前のテキストノードに含める(trimWhitespaces:aggressive のみ)
     *    <u>obj.prop = 1;</u>\n
     *    ↓
     *    <u>obj.prop = 1;\n</u>
     * 
     * @param {!HTMLJson} htmlJsonPre
     * @param {boolean} isAggressiveTrim
     */
    function trimWhitespaceInPre( htmlJsonPre, isAggressiveTrim ){
        /**
         * 
         * @param {string} string 
         * @return {string} 
         */
        function removeWhitespaces( string ){
            return string.split( '\n' ).join( '' ).split( ' ' ).join( '' ).split( '\t' ).join( '' );
        };
        function getLastTextNode( htmlJsonTarget ){
            var nodeAndPosition;

            htmljson.Traverser.traverseAllDescendantNodes(
                htmlJsonTarget,
                function( currentJSONNode, parentJSONNode, myIndex, depth ){
                    if( m_getNodeType( currentJSONNode ) === htmljson.NODE_TYPE.TEXT_NODE ){
                        nodeAndPosition = [ currentJSONNode, parentJSONNode, myIndex ];
                    };
                }
            );
            return nodeAndPosition;
        };
        function isLastTextNode( htmlJsonTarget, parentJSONNode, myIndex ){
            var nodeAndPosition = getLastTextNode( htmlJsonTarget );

            return nodeAndPosition ? parentJSONNode === nodeAndPosition[ 1 ] && myIndex === nodeAndPosition[ 2 ] : false;
        };

        var nodeAndPosition, htmlJsonText, htmlJsonParent, index, text, prevTextAndPosition;

        htmljson.Traverser.traverseAllDescendantNodes(
            htmlJsonPre,
            function( currentJSONNode, parentJSONNode, myIndex, depth ){
                if( m_getNodeType( currentJSONNode ) === htmljson.NODE_TYPE.TEXT_NODE ){
                    var text = '' + ( m_isStringOrNumber( currentJSONNode ) ? currentJSONNode : currentJSONNode[ 1 ] );

                    if( !removeWhitespaces( text ) ){
                        // 1. 最初のテキストノードが空白文字のみなら削除
                        parentJSONNode.splice( myIndex, 1 );
                        return htmljson.Traverser.VISITOR_OPTION.REMOVED;
                    } else {
                        // 2. 最初のテキストノードの頭の改行文字を削除
                        parentJSONNode.splice( myIndex, 1, m_trimFirstChar( text, '\n' ) );
                        return htmljson.Traverser.VISITOR_OPTION.BREAK;
                    };
                };
            }
        );

        while( nodeAndPosition = getLastTextNode( htmlJsonPre ) ){
            htmlJsonText   = nodeAndPosition[ 0 ];
            htmlJsonParent = nodeAndPosition[ 1 ];
            index          = nodeAndPosition[ 2 ];

            text = '' + ( m_isStringOrNumber( htmlJsonText ) ? htmlJsonText : htmlJsonText[ 1 ] );

            if( !removeWhitespaces( text ) ){
                // 3. 最後のテキストノードが空白文字のみなら削除
                htmlJsonParent.splice( index, 1 );
            } else {
                // 4. 最後のテキストノードの後ろの改行文字を削除
                htmlJsonParent.splice( index, 1, m_trimLastChar( text, '\n' ) );
                break;
            };
        };

        if( isAggressiveTrim ){
            while(
                htmljson.Traverser.traverseAllDescendantNodes(
                    htmlJsonPre,
                    function( currentJSONNode, parentJSONNode, myIndex, depth ){
                        if( m_getNodeType( currentJSONNode ) === htmljson.NODE_TYPE.TEXT_NODE ){
                            var isLast = isLastTextNode( htmlJsonPre, parentJSONNode, myIndex );
                            var text   = '' + ( m_isStringOrNumber( currentJSONNode ) ? currentJSONNode : currentJSONNode[ 1 ] );
                            var texts  = text.split( '\n' );
                            var i = 0, l = texts.length, charLast;
                            var prevText, prevTextParent, prevTextIndex;

                            for( ; i < l - ( isLast ? 0 : 1 ); ++i ){
                                text = texts[ i ];
                                // 5. 各行の改行の前の空白文字("\t", " ")も削除
                                //    </pre> の直前の行の後ろの空白文字("\t", " ")も削除
                                while( true ){
                                    charLast = text.charAt( text.length - 1 );
                                    if( charLast === '\t' || charLast === ' ' ){
                                        text = text.substr( 0, text.length - 1 );
                                    } else {
                                        break;
                                    };
                                };
                                texts[ i ] = text;
                            };
                            text = texts.join( '\n' );

                            // 6. テキストノードが改行1文字だけの場合、直前のテキストノードに含める
                            if( text === '\n' && prevTextAndPosition ){
                                prevText       = prevTextAndPosition[ 0 ];
                                prevTextParent = prevTextAndPosition[ 1 ];
                                prevTextIndex  = prevTextAndPosition[ 2 ];

                                if( m_isStringOrNumber( prevText ) ){
                                    prevTextParent[ prevTextIndex ] += text;
                                } else {
                                    prevText[ 1 ] += text;
                                };
                                parentJSONNode.splice( myIndex, 1 ); // remove
                                return htmljson.Traverser.VISITOR_OPTION.REMOVED;
                            };

                            if( m_isStringOrNumber( currentJSONNode ) ){
                                parentJSONNode[ myIndex ] = text;
                            } else {
                                currentJSONNode[ 1 ] = text;
                            };
                            prevTextAndPosition = [ currentJSONNode, parentJSONNode, myIndex ];
                        };
                    }
                )
            ){};
        };
    };

    function trimNewLines( htmlJson ){
        var i = m_getChildNodeStartIndex( htmlJson ),
            l = htmlJson.length,
            child, firstTextIndex, firstText, lastTextIndex, lastText;

        for( ; i < l; ++i ){
            child = htmlJson[ i ];
            if( m_getNodeType( child ) === htmljson.NODE_TYPE.TEXT_NODE ){
                firstTextIndex = firstTextIndex || i;
                firstText      = firstText || child;
                lastTextIndex  = i;
                lastText       = child;
            };
        };

        if( firstTextIndex ){
            if( core.isArray( firstText ) ){
                firstText = firstText[ 1 ];
            };
            if( core.isArray( lastText ) ){
                lastText = lastText[ 1 ];
            };

            if( firstTextIndex === lastTextIndex ){
                if( core.isString( firstText ) ){
                    firstText = /** @type {string} */ (firstText);
                    firstText = m_normalizeNewlines( firstText );
                    // 先頭と最後の改行文字を削除
                    firstText = m_trimChar( /** @type {string} */ (firstText), '\n' );
                    htmlJson[ firstTextIndex ] = m_tryToFiniteNumber( firstText );
                };
            } else {
                if( core.isString( firstText ) ){
                    firstText = /** @type {string} */ (firstText);
                    firstText = m_normalizeNewlines( firstText );
                    // 先頭の改行文字を削除
                    firstText = m_trimFirstChar( /** @type {string} */ (firstText), '\n' );
                    htmlJson[ firstTextIndex ] = m_tryToFiniteNumber( firstText );
                };

                if( core.isString( lastText ) ){
                    lastText = /** @type {string} */ (lastText);
                    lastText = m_normalizeNewlines( lastText );
                    // 最後の改行文字を削除
                    lastText = m_trimLastChar( /** @type {string} */ (lastText), '\n' );
                    htmlJson[ lastTextIndex ] = m_tryToFiniteNumber( lastText );
                };
            };
        };
    };
};

/**
 * @private
 * @param {!function(!VNode)} onDocumentReady
 * @param {!HTMLJson} rootHTMLJson
 * @return {boolean} isUpdated
 */
function dispatchDocumentReadyEvent( onDocumentReady, rootHTMLJson ){
    var rootVNode = m_createVNodeFromHTMLJson( rootHTMLJson, false );

    VNode.treeIsUpdated = false;

    onDocumentReady( rootVNode );

    var isUpdated = VNode.treeIsUpdated;

    if( isUpdated ){
        VNode.treeIsUpdated = false;
        rootHTMLJson.length = 0;
        rootHTMLJson.push.apply( rootHTMLJson, rootVNode.getHTMLJson() );
        normalizeTextNodes( rootHTMLJson );
    };

    return isUpdated;
};

/**
 * @private
 * 連続する Text の結合
 * @param {!HTMLJson} rootHTMLJson 
 */
function normalizeTextNodes( rootHTMLJson ){
    function insertText(){
        lastParentJSONNode.splice( textNodeIndex, 0, /** @type {string | number} */ (m_tryToFiniteNumber( text )) );
        text = '';
    };
    var text = '', lastDepth, lastParentJSONNode, textNodeIndex;

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
            if( text && lastDepth !== depth ){
                insertText();
                return htmljson.Traverser.VISITOR_OPTION.INSERTED_BEFORER;
            } else if( m_getNodeType( currentJSONNode ) === htmljson.NODE_TYPE.TEXT_NODE ){
                if( m_isStringOrNumber( currentJSONNode ) ){
                    text += currentJSONNode;
                } else {
                    text += currentJSONNode[ 1 ];
                };
                parentJSONNode.splice( myIndex, 1 );
                lastDepth          = depth;
                lastParentJSONNode = parentJSONNode;
                textNodeIndex      = myIndex;
                return htmljson.Traverser.VISITOR_OPTION.REMOVED;
            } else if( text ){
                insertText();
                return htmljson.Traverser.VISITOR_OPTION.INSERTED_BEFORER;
            };
        }
    );

    if( text ){
        insertText();
    };
};