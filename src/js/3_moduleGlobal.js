var p_ATTR_NO_VALUE = {checked:!0,compact:!0,declare:!0,defer:!0,disabled:!0,ismap:!0,multiple:!0,nohref:!0,noresize:!0,noshade:!0,nowrap:!0,readonly:!0,selected:!0};


var EMPTY_ELEMENTS   = {link:!0,meta:!0,br:!0,hr:!0,img:!0,input:!0,area:!0,base:!0,col:!0,embed:!0,keygen:!0,param:!0/* ,source:!0 */}, // TODO Opera 9 support
    OMIT_CLOSE_TAG   = {p:!0,dt:!0,dd:!0,li:!0,option:!0,thead:!0,tfoot:!0,th:!0,tr:!0,td:!0,rt:!0,rp:!0,optgroup:!0,caption:!0,colgroup:!0,col:!0},
    NO_OMIT_CLOSE    = {a:!0,audio:!0,del:!0,ins:!0,map:!0,noscript:!0,video:!0},
    IS_XML_ROOT      = {svg:!0, math:!0},
    // IE5 : <table> の直前の </p> を省略すると <table> が <p> の子になってレイアウトが崩れる
    EXCLUDE_FROM_P   = {table:!0,img:!0,svg:!0,picture:!0,object:!0,embed:!0,video:!0,audio:!0,blockquot:!0,form:!0,fieldset:!0},
    SKIP_HTML_ESCAPE = {script:!0,style:!0,plaintext:!0,xmp:!0,noscript:!0};
    // Special Elements (can contain anything)

function p_isArray( value ){
    return value && value.pop === [].pop;
};

function p_isObject( value ){
    return value && typeof value === 'object';
};

function p_isString( str ){
    return '' + str === str;
};

function p_isNumber( n ){
    return n === n - 0;
};

function p_isStringOrNumber( v ){
    return p_isString( v ) || p_isNumber( v );
};

function p_isNumberString( v ){
    return p_isString( v ) && p_isNumber( + v ) && p_isNumber( parseInt( v, 10 ) );
};

function p_toNumber( v ){
    return p_isNumberString( v ) ? + v : v;
};

function p_isNodeList( value ){
    return p_isArray( value ) && p_isArray( value[ 0 ] );
};

function p_isNode( value ){
    return p_isArray( value ) && ( p_isNumber( value[ 0 ] ) || p_isString( value[ 0 ] ) );
};

function m_getNodeType( value ){
    return p_isStringOrNumber( value )
        ? HTML_DOT_JSON__NODE_TYPE.TEXT_NODE
        : (
            p_isArray( value )
                ? p_isString( value[ 0 ] )
                     ? HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE
                     : value[ 0 ]
                : -1
        );
};

function p_isAttributes( value ){
    return !p_isArray( value ) && p_isObject( value );
};

function p_isInstructionAttr( prefix, name ){
    return name.indexOf( prefix ) === 0;
};

function p_evaluteProcessingInstruction( onInstruction, currentJSONNode, parentJSONNode, myIndex ){
    var functionName = currentJSONNode[ 1 ];
    var args         = currentJSONNode.slice( 2 );
    var result;

    if( args.length ){
        result = onInstruction( functionName, args );
    } else {
        result = onInstruction( functionName );
    };
    if( result !== undefined ){
        if( result === null || result === '' ){
            //
        } else if( p_isStringOrNumber( result ) ){
            if( parentJSONNode ){
                parentJSONNode.splice( myIndex, 1, result );
            } else {
                currentJSONNode.length = 0;
                currentJSONNode.push( HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, currentJSONNode );
            };
        } else if( p_isArray( result ) ){
            result = /** @type {!Array} */ (result);

            if( result[ 0 ] === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE ){
                if( parentJSONNode ){
                    result.shift();
                    result.unshift( myIndex, 1 );
                    parentJSONNode.splice.apply( parentJSONNode, result ); // <= parentJSONNode.splice( myIndex, 1, ...result );
                } else {
                    currentJSONNode.length = 0;
                    currentJSONNode.push.apply( currentJSONNode, result ); // <= [ DOCUMENT_FRAGMENT_NODE, ...result ]
                };
            } else if( p_isArray( result[ 0 ] ) ){ // nodeType を省略した DOCUMENT_FRAGMENT_NODE
                if( parentJSONNode ){
                    result.unshift( myIndex, 1 );
                    parentJSONNode.splice.apply( parentJSONNode, result ); // <= parentJSONNode.splice( myIndex, 1, ...result );
                } else {
                    currentJSONNode.length = 0;
                    currentJSONNode.push( HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE );
                    currentJSONNode.push.apply( currentJSONNode, result );
                };
            } else {
                if( parentJSONNode ){
                    parentJSONNode.splice( myIndex, 1, result );
                } else {
                    currentJSONNode.length = 0;
                    currentJSONNode.push( HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, result );
                };
            };
        // } else if( DEFINE_HTML2JSON__DEBUG ){
        //    error
        };
    };
    return result;
};

function p_evaluteInstructionAttr( onInstruction, name, value, errorHandler ){
    if( p_isArray( value ) && p_isString( value[ 0 ] ) ){
        var functionName = value[ 0 ];
        var args         = value.slice( 1 );
        if( args.length ){
            value = onInstruction( functionName, args );
        } else {
            value = onInstruction( functionName );
        };
    } else if( p_isString( value ) ){
        value = onInstruction( value );
    } else if( DEFINE_HTML2JSON__DEBUG ){
        errorHandler( 'Invalid InstructionAttr value! [' + name + '=' + value + ']' );
    };
    return value;
};

/**
 * 
 * @param {!Array} htmlJsonNode
 * @return {number}
 */
function m_getChildNodeStartIndex( htmlJsonNode ){
    var nodeType   = htmlJsonNode[ 0 ];
    var isElement  = m_getNodeType( htmlJsonNode ) === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE;
    var indexAttrs = nodeType === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE ? 2 : 1;
    var startIndex = isElement
                        ? (
                            p_isAttributes( htmlJsonNode[ indexAttrs ] )
                                ? indexAttrs + 1
                                : indexAttrs
                            )
                        : (
                            nodeType === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE
                                ? 1
                                : 2
                            );
    return startIndex;
};

/**
 * 連続する Text の結合
 * @param {!Array} htmlJsonNode 
 */
function m_mergeTextNodes( htmlJsonNode ){
    var startIndex = m_getChildNodeStartIndex( htmlJsonNode );

    var node, nodeType, text = '', i;

    if( startIndex < htmlJsonNode.length ){
        for( i = startIndex; i < htmlJsonNode.length; ){
            node     = htmlJsonNode[ i ];
            nodeType = m_getNodeType( node );
            if( nodeType === HTML_DOT_JSON__NODE_TYPE.TEXT_NODE ){
                if( p_isStringOrNumber( node ) ){
                    text += node;
                } else {
                    text += node[ 1 ];
                };
                htmlJsonNode.splice( i, 1 );
            } else {
                if( text ){
                    htmlJsonNode.splice( i, 0, p_toNumber( text ) );
                    text = '';
                };
                ++i;
                if( nodeType === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE ){
                    m_mergeTextNodes( node );
                };
            };
        };
        if( text ){
            htmlJsonNode[ i ] = p_toNumber( text );
        };
    };
};
