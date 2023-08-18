/**
 * @param {!Array} json
 * @param {!OnReachDynamicContentCallback} onReachDynamicContent
 * @param {!OnErrorCallback=} opt_errorHandler
 * @return {boolean} isStaticWebPage
 */
p_json2json = function( json, onReachDynamicContent, opt_errorHandler ){
    var errorHandler = opt_errorHandler || function(){},
        isStaticWebPage = true;

    if( p_isArray( json ) ){
        walkNode( json, null );
        return isStaticWebPage;
    } else {
        errorHandler( 'Invalid html.json document!' );
    };

    function walkNode( array, parentArray, index ){
        var arg0 = array[ 0 ],
            arg1 = array[ 1 ],
            arg2 = array[ 2 ],
            offset = 0, dynamicNode;

        switch( arg0 ){
            case HTML_JSON_TYPE_DOCUMENT_NODE :
                walkChildNodes( arg2 );
                break;
            case HTML_JSON_TYPE_DOCUMENT_FRAGMENT_NODE :
                walkChildNodes( arg1 );
                break;
            case HTML_JSON_TYPE_TEXT_NODE :
                break;
            case HTML_JSON_TYPE_COMMENT_NODE :
                break;
            case HTML_JSON_TYPE_CONDITIONAL_COMMENT_HIDE_LOWER :
                break;
            case HTML_JSON_TYPE_CONDITIONAL_COMMENT_SHOW_LOWER :
                walkChildNodes( arg2 );
                break;
            case HTML_JSON_TYPE_DYNAMIC_CONTENTS :
                if( p_isArray( arg2 ) ){
                    dynamicNode = onReachDynamicContent( arg1, arg2 );
                } else if( array.length === 3 ){
                    dynamicNode = onReachDynamicContent( arg1, [ arg2 ] );
                } else {
                    dynamicNode = onReachDynamicContent( arg1 );
                };
                if( dynamicNode !== undefined ){
                    if( dynamicNode === null || dynamicNode === '' ){
                        if( parentArray ){
                            parentArray.splice( index, 1 );
                            return -1;
                        } else {
                            json.length = 0;
                            json.push( HTML_JSON_TYPE_COMMENT_NODE, '' );
                        };
                    } else if( p_isString( dynamicNode ) || p_isNumber( dynamicNode ) ){
                        if( parentArray ){
                            parentArray.splice( index, 1, '' + dynamicNode ); // TODO TextNode を纏める
                        } else {
                            json.length = 0;
                            json.push( HTML_JSON_TYPE_TEXT_NODE, '' + dynamicNode );
                        };
                    } else if( p_isArray( dynamicNode ) ){
                        if( dynamicNode[ 0 ] === HTML_JSON_TYPE_DOCUMENT_FRAGMENT_NODE ){
                            dynamicNode = dynamicNode[ 1 ];
                        };
                        if( !( 0 <= dynamicNode[ 0 ] ) ){ // isNodeList TODO documentFragment // json2json.toCompact, json2json.toStrict
                            if( parentArray ){
                                // console.log( '>> ', index, parentArray )
                                parentArray.splice.apply( parentArray, [ index, 1 ].concat( dynamicNode ) );
                                // console.log( '!!', index, parentArray )
                                // console.log( '----' )
                            } else {
                                json.length = 0;
                                json.push( HTML_JSON_TYPE_DOCUMENT_FRAGMENT_NODE, dynamicNode );
                            };
                        } else { // isHTMLJSON
                            if( parentArray ){
                                parentArray.splice( index, 1, dynamicNode );
                            } else {
                                json.length = 0;
                                json.push.apply( json, dynamicNode );
                            };
                        };
                        return -1;
                    } else {
                        errorHandler( 'DynamicNode Error! [' + array + ']' );
                    };
                } else {
                    isStaticWebPage = false;
                };
                break;
            case HTML_JSON_TYPE_ELEMENT_NODE :
                arg0   = array[ 1 ];
                offset = 1;
            default :
                if( p_isString( arg0 ) ){
                    if( 1 + offset <= array.length ){
                        arg1 = array[ 1 + offset ];
                        // attr
                        if( p_isObject( arg1 ) && !p_isArray( arg1 ) ){
                            walkAttributes( arg1 );
                            if( Object.keys( arg1 ).length === 0 ){
                                array.splice( 1 + offset, 1 );
                                arg1 = array[ 1 + offset ];
                            } else {
                                arg1 = array[ 2 + offset ];
                            };
                        };
                        // childNodes
                        if( p_isArray( arg1 ) ){
                            walkChildNodes( arg1 );
                        } else if( p_isString( arg1 ) ){

                        } else if( arg1 !== undefined ){
                            errorHandler( 'Invalid childNodes! [' + arg1 + ']' );
                        };
                    };
                } else {
                    errorHandler( 'Not html.json! [' + array + ']' );
                };
        };
    };

    function walkChildNodes( childNodes ){
        var i, childNodes, childNode;

        for( i = 0; i < childNodes.length; ++i ){ // HTML_JSON_TYPE_DYNAMIC_CONTENTS で配列が変化する
            childNode = childNodes[ i ];

            if( p_isString( childNode ) ){

            } else if( p_isArray( childNode ) ){
                if( walkNode( childNode, childNodes, i ) === -1 ){
                    --i; // node replaced
                };
            } else {
                errorHandler( 'Invalid html.json! [' + childNode + ']' );
            };
        };
    };

    function walkAttributes( attrs ){
        var name, originalName, value, isDynamic;
    
        for( name in attrs ){
            originalName = name;
            value = attrs[ name ];
            isDynamic = name.charAt( 0 ) === ':';
            isDynamic && ( name = name.substr( 1 ) );
            name === 'className' && ( name = 'class' );

            if( isDynamic ){
                if( p_isArray( value ) && p_isString( value[ 0 ] ) ){
                    if( p_isArray( value[ 1 ] ) ){
                        value = onReachDynamicContent( value[ 0 ], value[ 1 ] );
                    } else {
                        value = onReachDynamicContent( value[ 0 ], [ value[ 1 ] ] );
                    };
                } else if( p_isString( value ) ){
                    value = onReachDynamicContent( value );
                } else {
                    errorHandler( 'Invalid dynamic attribute value! [' + originalName + '=' + value + ']' );
                };
                if( value !== undefined ){
                    delete attrs[ originalName ];
                    if( p_isArray( value ) ){
                        if( value[ 0 ] === HTML_JSON_TYPE_DYNAMIC_CONTENTS ){
                            attrs[ originalName ] = value.length === 2 ? value[ 1 ] :
                                                    [ value[ 1 ], value[ 2 ].length === 1 ? value[ 2 ][ 0 ] : value[ 2 ] ];
                            isStaticWebPage = false;
                        } else {
                            errorHandler( 'Invalid dynamic attribute callback value! [' + originalName + '=' + value + ']' );
                        };
                    } else if( value !== null ){
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

    p_json2json.HTML_JSON_TYPE_DOCUMENT_NODE                  = HTML_JSON_TYPE_DOCUMENT_NODE;
    p_json2json.HTML_JSON_TYPE_DOCUMENT_FRAGMENT_NODE         = HTML_JSON_TYPE_DOCUMENT_FRAGMENT_NODE;
    p_json2json.HTML_JSON_TYPE_ELEMENT_NODE                   = HTML_JSON_TYPE_ELEMENT_NODE;
    p_json2json.HTML_JSON_TYPE_TEXT_NODE                      = HTML_JSON_TYPE_TEXT_NODE;
    p_json2json.HTML_JSON_TYPE_COMMENT_NODE                   = HTML_JSON_TYPE_COMMENT_NODE;
    p_json2json.HTML_JSON_TYPE_CONDITIONAL_COMMENT_HIDE_LOWER = HTML_JSON_TYPE_CONDITIONAL_COMMENT_HIDE_LOWER;
    p_json2json.HTML_JSON_TYPE_CONDITIONAL_COMMENT_SHOW_LOWER = HTML_JSON_TYPE_CONDITIONAL_COMMENT_SHOW_LOWER;
    p_json2json.HTML_JSON_TYPE_DYNAMIC_CONTENTS               = HTML_JSON_TYPE_DYNAMIC_CONTENTS;
};