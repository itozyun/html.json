/**
 * @param {!Array} json
 * @param {!function(string, ...*):(!Array|string|number|null|void)} onInstruction
 * @param {!function(string)=} opt_onError
 * @return {boolean|void} isStaticWebPage
 */
p_json2json = function( json, onInstruction, opt_onError ){
    /** @const {number} */
    var REMOVED = -1;

    var errorHandler = opt_onError || function(){},
        isTreeUpdated = false,
        isStaticWebPage = true;

    if( p_isArray( json ) ){
        walkNode( json, null, 0 );
        if( isTreeUpdated ){
            m_mergeTextNodes( json );
        };
        return isStaticWebPage; // TODO 連続する Text の結合
    } else if( DEFINE_HTML2JSON__DEBUG ){
        errorHandler( 'Invalid html.json document!' );
    };

    /**
     * 
     * @param {!Array} currentJSONNode 
     * @param {!Array|null} parentJSONNode 
     * @param {number} myIndex
     */
    function walkNode( currentJSONNode, parentJSONNode, myIndex ){
        var arg0 = currentJSONNode[ 0 ],
            arg1 = currentJSONNode[ 1 ],
            attrIndex = 1, tagName = arg0, attrs, functionName, args, result;

        switch( arg0 ){
            case HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE :
                walkChildNodes( currentJSONNode );
                break;
            case HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE :
                walkChildNodes( currentJSONNode );
                break;
            case HTML_DOT_JSON__NODE_TYPE.TEXT_NODE :
                break;
            case HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE :
                break;
            case HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER :
                walkChildNodes( currentJSONNode );
                break;
            case HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER :
                walkChildNodes( currentJSONNode );
                break;
            case HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION :
                functionName = arg1;
                args         = currentJSONNode.slice( 2 );
                if( args.length ){
                    result = onInstruction( functionName, args );
                } else {
                    result = onInstruction( functionName );
                };
                if( result !== undefined ){
                    isTreeUpdated = true;

                    if( result === null || result === '' ){
                        if( parentJSONNode ){
                            parentJSONNode.splice( myIndex, 1 );
                        } else {
                            json.length = 0;
                            json.push( HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE, '' );
                        };
                    } else if( p_isStringOrNumber( result ) ){
                        if( parentJSONNode ){
                            parentJSONNode.splice( myIndex, 1, result );
                        } else {
                            json.length = 0;
                            json.push( HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, result );
                        };
                    } else if( p_isArray( result ) ){
                        result = /** @type {!Array} */ (result);

                        if( result[ 0 ] === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE ){
                            if( parentJSONNode ){
                                result.shift();
                                result.unshift( myIndex, 1 );
                                // console.log( '>> ', myIndex, parentJSONNode )
                                parentJSONNode.splice.apply( parentJSONNode, result ); // <= parentJSONNode.splice( myIndex, 1, ...result );
                                // console.log( '!!', myIndex, parentJSONNode )
                                // console.log( '----' )
                            } else {
                                json.length = 0;
                                json.push.apply( json, result ); // <= [ DOCUMENT_FRAGMENT_NODE, ...result ]
                            };
                        } else if( p_isArray( result[ 0 ] ) ){ // nodeType を省略した DOCUMENT_FRAGMENT_NODE
                            if( parentJSONNode ){
                                result.unshift( myIndex, 1 );
                                parentJSONNode.splice.apply( parentJSONNode, result ); // <= parentJSONNode.splice( myIndex, 1, ...result );
                            } else {
                                json.length = 0;
                                json.push( HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE );
                                json.push.apply( json, result );
                            };
                        } else {
                            if( parentJSONNode ){
                                parentJSONNode.splice( myIndex, 1, result );
                            } else {
                                json.length = 0;
                                json.push( HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, result );
                            };
                        };
                        return REMOVED;
                    } else if( DEFINE_HTML2JSON__DEBUG ){
                        errorHandler( 'DynamicNode Error! [' + currentJSONNode + ']' );
                    };
                } else {
                    isStaticWebPage = false;
                };
                break;
            case HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE :
                tagName   = arg1;
                attrIndex = 2;
            default :
                if( p_isString( tagName ) ){
                    if( 1 + attrIndex <= currentJSONNode.length ){
                        attrs = currentJSONNode[ attrIndex ];
                        // attr
                        if( p_isAttributes( attrs ) ){
                            walkAttributes( attrs );
                            if( Object.keys( attrs ).length === 0 ){
                                currentJSONNode.splice( attrIndex, 1 );
                            };
                        };
                        // childNodes
                        walkChildNodes( currentJSONNode );
                    };
                } else if( DEFINE_HTML2JSON__DEBUG ){
                    errorHandler( 'Not html.json! [' + currentJSONNode + ']' );
                };
        };
    };

    /**
     * 
     * @param {!Array} currentJSONNode 
     */
    function walkChildNodes( currentJSONNode ){
        var i = m_getChildNodeStartIndex( currentJSONNode ), childNode;

        for( ; i < currentJSONNode.length; ++i ){ // PROCESSING_INSTRUCTION で配列が変化する
            childNode = currentJSONNode[ i ];

            if( p_isStringOrNumber( childNode ) ){

            } else if( p_isArray( childNode ) ){
                if( walkNode( childNode, currentJSONNode, i ) === REMOVED ){
                    --i; // node replaced
                };
            } else if( DEFINE_HTML2JSON__DEBUG ){
                errorHandler( 'Invalid html.json! [' + childNode + ']' );
            };
        };
    };

    /**
     * @param {!Object} attrs 
     */
    function walkAttributes( attrs ){
        var name, originalName, value, isInstruction, functionName, args;
    
        for( name in attrs ){
            originalName = name;
            value = attrs[ name ];
            isInstruction = name.charAt( 0 ) === ':';
            isInstruction && ( name = name.substr( 1 ) );
            name === 'className' && ( name = 'class' );

            if( isInstruction ){
                if( p_isArray( value ) && p_isString( value[ 0 ] ) ){
                    functionName = value[ 0 ];
                    args         = value.slice( 1 );
                    if( args.length ){
                        value = onInstruction( functionName, args );
                    } else {
                        value = onInstruction( functionName );
                    };
                } else if( p_isString( value ) ){
                    value = onInstruction( value );
                } else if( DEFINE_HTML2JSON__DEBUG ){
                    errorHandler( 'Invalid dynamic attribute value! [' + originalName + '=' + value + ']' );
                };
                if( value !== undefined ){
                    delete attrs[ originalName ];
                    if( p_isArray( value ) ){
                        if( p_isString( value[ 0 ] ) ){
                            attrs[ originalName ] = value;
                            isStaticWebPage = false;
                        } else if( DEFINE_HTML2JSON__DEBUG ){
                            errorHandler( 'Invalid dynamic attribute callback value! [' + originalName + '=' + value + ']' );
                        };
                    } else if( value !== null && value !== '' ){
                        attrs[ name ] = value;
                    };
                } else {
                    isStaticWebPage = false;
                };
            };
        };
    };
};

if( DEFINE_HTML2JSON__EXPORT_JSON2JSON ){
    module.exports = p_json2json;

    p_json2json.DOCUMENT_NODE                  = HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE;
    p_json2json.DOCUMENT_FRAGMENT_NODE         = HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE;
    p_json2json.ELEMENT_NODE                   = HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE;
    p_json2json.TEXT_NODE                      = HTML_DOT_JSON__NODE_TYPE.TEXT_NODE;
    p_json2json.COMMENT_NODE                   = HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE;
    p_json2json.CONDITIONAL_COMMENT_HIDE_LOWER = HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER;
    p_json2json.CONDITIONAL_COMMENT_SHOW_LOWER = HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER;
    p_json2json.PROCESSING_INSTRUCTION         = HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION;
};