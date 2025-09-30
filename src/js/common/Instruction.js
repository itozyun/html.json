


/**
 * 
 * @param {string} prefix 
 * @param {string} name 
 * @return {boolean}
 */
function m_isInstructionAttr( prefix, name ){
    return name.indexOf( prefix ) === 0;
};

/**
 * 
 * @param {!InstructionHandler} onInstruction
 * @param {!HTMLJson} currentJSONNode 
 * @param {!function((string | !Error))=} opt_onError
 * @param {*=} opt_context
 * @return {!HTMLJson | string | number | boolean | null | void}
 */
function m_executeProcessingInstruction( onInstruction, currentJSONNode, opt_onError, opt_context ){
    var functionName = /** @type {string} */ (currentJSONNode[ 1 ]);
    var args         = currentJSONNode.slice( 2 );
    var result;

    if( typeof onInstruction === 'function' ){
        if( args.length ){
            result = onInstruction.call( opt_context, functionName, args );
        } else {
            result = onInstruction.call( opt_context, functionName );
        };
    } else if( onInstruction[ functionName ] ){
        if( args.length ){
            result = onInstruction[ functionName ].apply( opt_context || onInstruction, args );
        } else {
            result = onInstruction[ functionName ].call( opt_context || onInstruction );
        };
    };

    if( htmljson.DEFINE.DEBUG ){
        if( result != null && !m_isStringOrNumber( result ) && !core.isArray( result ) ){
            opt_onError && opt_onError( 'PROCESSING_INSTRUCTION Error! [' + JSON.stringify( currentJSONNode ) + ']' );
        };
    };
    if( result && core.isArray( result[ 0 ] ) ){ // nodeType を省略した DOCUMENT_FRAGMENT_NODE
        result.unshift( htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE );
    };
    return result;
};

/**
 * 
 * @param {!InstructionHandler} onInstruction
 * @param {string} attrName 
 * @param {!InstructionArgs | string} value 
 * @param {!function((string | !Error))=} opt_onError
 * @param {*=} opt_context
 * @return {!InstructionArgs | string | number | boolean | null | void}
 */
function m_executeInstructionAttr( onInstruction, attrName, value, opt_onError, opt_context ){
    var result, functionName, args, recursion;

    if( core.isArray( value ) && core.isString( value[ 0 ] ) ){
        value        = /** @type {!Array} */ (value);
        functionName = /** @type {string} */ (value[ 0 ]);
        args         = value.slice( 1 );

        if( typeof onInstruction === 'function' ){
            if( args.length ){
                result = onInstruction.call( opt_context, functionName, args );
            } else {
                result = onInstruction.call( opt_context, functionName );
            };
        } else if( onInstruction[ functionName ] ){
            if( args.length ){
                result = onInstruction[ functionName ].apply( opt_context || onInstruction, args );
            } else {
                result = onInstruction[ functionName ].call( opt_context || onInstruction );
            };
        };
    } else if( core.isString( value ) ){
        value = /** @type {string} */ (value);
        if( typeof onInstruction === 'function' ){
            result = onInstruction.call( opt_context, value  );
        } else if( onInstruction[ value ] ){
            result = onInstruction[ value ].call( opt_context || onInstruction );
        };
    } else if( htmljson.DEFINE.DEBUG ){
        opt_onError && opt_onError( 'Invalid InstructionAttr value! [' + attrName + '=' + value + ']' );
    };

    if( core.isArray( result ) ){
        recursion = m_executeInstructionAttr( onInstruction, attrName, /** @type {!InstructionArgs} */ (result), opt_onError, opt_context );

        if( recursion !== undefined ){
            result = recursion;
        };
    };
    return result;
};