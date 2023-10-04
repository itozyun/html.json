// https://raw.githubusercontent.com/dominictarr/JSONStream/master/index.js
'use strict'

/** @constructor */
const Parser = require('jsonparse');

/** @constructor */
const through = require('through');

const bufferFrom = Buffer.from && Buffer.from !== Uint8Array.from;

/**
 * @enum {number}
 */
const EXPECT = {
    NODE_START                     : HTML_JSON_TYPE_DOCUMENT_NODE - 1,

    DOCUMENT_NODE_START            : HTML_JSON_TYPE_DOCUMENT_NODE,
    DOCUMENT_FRAGMENT_NODE_START   : HTML_JSON_TYPE_DOCUMENT_FRAGMENT_NODE,
    ELEMENT_NODE_START             : HTML_JSON_TYPE_ELEMENT_NODE,
    TEXT_NODE_START                : HTML_JSON_TYPE_TEXT_NODE,
    COMMENT_NODE_START             : HTML_JSON_TYPE_COMMENT_NODE,
    COMMENT_HIDE_LOWER_START       : HTML_JSON_TYPE_CONDITIONAL_COMMENT_HIDE_LOWER,
    COMMENT_SHOW_LOWER_START       : HTML_JSON_TYPE_CONDITIONAL_COMMENT_SHOW_LOWER,
    DYNAMIC_CONTENTS_START         : HTML_JSON_TYPE_PROCESSING_INSTRUCTION,

    NODE_TYPE_OR_TAG_NAME          : HTML_JSON_TYPE_PROCESSING_INSTRUCTION +  1,

    DOCUMENT_NODE_VALUE            : HTML_JSON_TYPE_PROCESSING_INSTRUCTION +  2,
    TEXT_NODE_VALUE                : HTML_JSON_TYPE_PROCESSING_INSTRUCTION +  3,
    COMMENT_NODE_VALUE             : HTML_JSON_TYPE_PROCESSING_INSTRUCTION +  4,
    COMMENT_HIDE_LOWER_FORMURA     : HTML_JSON_TYPE_PROCESSING_INSTRUCTION +  5,
    COMMENT_SHOW_LOWER_FORMURA     : HTML_JSON_TYPE_PROCESSING_INSTRUCTION +  6,

    TAG_NAME                       : HTML_JSON_TYPE_PROCESSING_INSTRUCTION +  7,
    IN_ELEMENT_NODE                : HTML_JSON_TYPE_PROCESSING_INSTRUCTION +  8,

    CLOSE_ELEMENT_WITH_NO_CHILD    : HTML_JSON_TYPE_PROCESSING_INSTRUCTION +  9,
    
    ATTRIBUTES_START               : HTML_JSON_TYPE_PROCESSING_INSTRUCTION + 10,
    ATTRIBUTE_PROPERTY             : HTML_JSON_TYPE_PROCESSING_INSTRUCTION + 11,
    ATTRIBUTE_VALUE                : HTML_JSON_TYPE_PROCESSING_INSTRUCTION + 12,

    DYNAMIC_ATTRIBUTE_START        : HTML_JSON_TYPE_PROCESSING_INSTRUCTION + 13,
    IN_DYNAMIC_ATTRIBUTE : HTML_JSON_TYPE_PROCESSING_INSTRUCTION + 14,

    STYLES                         : HTML_JSON_TYPE_PROCESSING_INSTRUCTION + 15,
    CSS_PROPERTY                   : HTML_JSON_TYPE_PROCESSING_INSTRUCTION + 16,
    CSS_VALUE                      : HTML_JSON_TYPE_PROCESSING_INSTRUCTION + 17,

    CHILD_NODES_START              : HTML_JSON_TYPE_PROCESSING_INSTRUCTION + 18,
    IN_CHILD_NODES                 : HTML_JSON_TYPE_PROCESSING_INSTRUCTION + 19,

    DYNAMIC_CONTENTS_FUNCTION_NAME : HTML_JSON_TYPE_PROCESSING_INSTRUCTION + 20,
    DYNAMIC_CONTENTS_FUNCTION_ARGUMENTS_START : HTML_JSON_TYPE_PROCESSING_INSTRUCTION + 20,
    IN_DYNAMIC_CONTENTS_FUNCTION_ARGUMENTS : HTML_JSON_TYPE_PROCESSING_INSTRUCTION + 18,

    END_OF_NODE                    : HTML_JSON_TYPE_PROCESSING_INSTRUCTION + 19,

    ERROR                          : HTML_JSON_TYPE_PROCESSING_INSTRUCTION + 19
};

/**
 * @enum {number}
 */
const PHASE = {
    NODE_START                     : HTML_JSON_TYPE_DOCUMENT_NODE - 1,//

    DOCUMENT_NODE_START            : HTML_JSON_TYPE_DOCUMENT_NODE, //
    DOCUMENT_FRAGMENT_NODE_START   : HTML_JSON_TYPE_DOCUMENT_FRAGMENT_NODE, //
    ELEMENT_NODE_START             : HTML_JSON_TYPE_ELEMENT_NODE, //
    TEXT_NODE_START                : HTML_JSON_TYPE_TEXT_NODE, //
    COMMENT_NODE_START             : HTML_JSON_TYPE_COMMENT_NODE, //
    COMMENT_HIDE_LOWER_START       : HTML_JSON_TYPE_CONDITIONAL_COMMENT_HIDE_LOWER, //
    COMMENT_SHOW_LOWER_START       : HTML_JSON_TYPE_CONDITIONAL_COMMENT_SHOW_LOWER, //
    DYNAMIC_CONTENTS_START         : HTML_JSON_TYPE_PROCESSING_INSTRUCTION, //

    NODE_TYPE_OR_TAG_NAME          : HTML_JSON_TYPE_PROCESSING_INSTRUCTION +  1,

    DOCUMENT_NODE_VALUE            : HTML_JSON_TYPE_PROCESSING_INSTRUCTION +  2, //
    TEXT_NODE_VALUE                : HTML_JSON_TYPE_PROCESSING_INSTRUCTION +  3, //
    COMMENT_NODE_VALUE             : HTML_JSON_TYPE_PROCESSING_INSTRUCTION +  4, //
    COMMENT_HIDE_LOWER_FORMURA     : HTML_JSON_TYPE_PROCESSING_INSTRUCTION +  5, //
    COMMENT_SHOW_LOWER_FORMURA     : HTML_JSON_TYPE_PROCESSING_INSTRUCTION +  6, //

    TAG_NAME                       : HTML_JSON_TYPE_PROCESSING_INSTRUCTION +  7, //
    IN_ELEMENT_NODE                : HTML_JSON_TYPE_PROCESSING_INSTRUCTION +  8, //

    CLOSE_ELEMENT_WITH_NO_CHILD    : HTML_JSON_TYPE_PROCESSING_INSTRUCTION +  9, //
    
    ATTRIBUTES_START               : HTML_JSON_TYPE_PROCESSING_INSTRUCTION + 10, //
    ATTRIBUTE_PROPERTY             : HTML_JSON_TYPE_PROCESSING_INSTRUCTION + 11, //
    ATTRIBUTE_VALUE                : HTML_JSON_TYPE_PROCESSING_INSTRUCTION + 12, //

    DYNAMIC_ATTRIBUTE_START        : HTML_JSON_TYPE_PROCESSING_INSTRUCTION + 12,
    IN_DYNAMIC_ATTRIBUTE : HTML_JSON_TYPE_PROCESSING_INSTRUCTION + 12,

    STYLES                         : HTML_JSON_TYPE_PROCESSING_INSTRUCTION + 13,
    CSS_PROPERTY                   : HTML_JSON_TYPE_PROCESSING_INSTRUCTION + 14, //
    CSS_VALUE                      : HTML_JSON_TYPE_PROCESSING_INSTRUCTION + 15, //
    END_OF_STYLES                  : 1, //

    CHILD_NODES_START              : HTML_JSON_TYPE_PROCESSING_INSTRUCTION + 16, //
    IN_CHILD_NODES                 : HTML_JSON_TYPE_PROCESSING_INSTRUCTION + 17, //

    DYNAMIC_CONTENTS_FUNCTION_NAME : HTML_JSON_TYPE_PROCESSING_INSTRUCTION + 18, //
    DYNAMIC_CONTENTS_FUNCTION_ARGUMENTS_START : 1,
    IN_DYNAMIC_CONTENTS_FUNCTION_ARGUMENTS : HTML_JSON_TYPE_PROCESSING_INSTRUCTION + 18,

    SINGLE_TEXT_NODE_VALUE : 1, //
    IN_CHILD_NODES_TEXT : 1, //

    END_OF_ELEMENT_HAS_CHILDREN : 1,//
    CHILD_NODES_END : 1, //
    END_OF_NODE                    : HTML_JSON_TYPE_PROCESSING_INSTRUCTION + 19, //

    ERROR                          : HTML_JSON_TYPE_PROCESSING_INSTRUCTION + 19 //
};



module.exports = function( onProcessingInstructionNodeOrAtttibutePropery ){
    const parser = new Parser();

    parser._createValue = parser.onToken;
    parser.onToken = onToken;
    parser.onError = onError;
    parser._expect  = EXPECT.NODE_START;
    parser._tree   = [];

    const stream = through( writeHandler, endHandler );
    stream._parser = parser;

    return parser._stream = stream;
};

/**
 * 
 * @param {!Buffer|string} chunk 
 */
function writeHandler( chunk ){
    if( 'string' === typeof chunk ){
        chunk = bufferFrom ? Buffer.from( chunk ) : new Buffer( chunk );
    };
    this._parser.write( chunk );
};

/**
 * 
 * @param {*} data 
 */
function endHandler( data ){
    if( data ){
        this.write( data );
    };
    if( this._parser._expect !== EXPECT.END_OF_DOCUMENT ){
        this.emit( 'error', 'Invalid html.json' );
    };

    this.queue( null );

    this._parser = this._parser._stream = null;
};

/**
 * 
 * @param {!Error} err 
 */
function onError( err ){
    if( -1 < err.message.indexOf( 'at position' ) ){
        err.message = 'Invalid JSON (' + err.message + ')';
    };
    this._stream.emit( 'error', err );
};


/**
 * @this {Parser}
 * @param {number} token 
 * @param {*} value 
 */
function onToken( token, value ){
    // parser._onToken( token, value );
    console.log( token + ' : ' + value );

    const tree = this._tree;
    let expect = this._expect;
    let queue = '';

    switch( expect ){
        case EXPECT.DYNAMIC_CONTENTS_FUNCTION_ARGUMENTS_START :
            switch( token ){
                case Parser.C.LEFT_BRACKET : // [
                case Parser.C.LEFT_BRACE   : // {
                    this._createValue( token, value );
                    expect = EXPECT.IN_DYNAMIC_CONTENTS_FUNCTION_ARGUMENTS;
                    break;
                case Parser.C.RIGHT_BRACKET : // ]
                    queue = json2html( onProcessingInstructionNodeOrAtttibutePropery( this._functionName, [] ) );
                    expect = EXPECT.END_OF_NODE;
                    break;
                case Parser.C.STRING :
                case Parser.C.NUMBER :
                case Parser.C.TRUE :
                case Parser.C.FALSE :
                case Parser.C.NULL   :
                    queue = json2html( onProcessingInstructionNodeOrAtttibutePropery( this._functionName, [ value ] ) );
                    expect = EXPECT.END_OF_NODE;
                    break;
                default :
                    expect = EXPECT.ERROR;
                    break;
            };
            return;
        case EXPECT.IN_DYNAMIC_CONTENTS_FUNCTION_ARGUMENTS :
            this._createValue( token, value );
            if( this.stack.length === 0 ){
                // end of arguments
                const args = this.value;
                this.value = null;
                queue = json2html( onProcessingInstructionNodeOrAtttibutePropery( this._functionName, Array.isArray( args ) ? args : [ args ] ) );
                expect = EXPECT.END_OF_NODE;
                break;
            };
            return;
        case EXPECT.DYNAMIC_ATTRIBUTE_START :
            switch( token ){
                case Parser.C.LEFT_BRACKET : // [
                    this._createValue( token, value );
                    expect = EXPECT.IN_DYNAMIC_ATTRIBUTE;
                    break;
                case Parser.C.STRING :
                    queue = wrapAttributeValue( onProcessingInstructionNodeOrAtttibutePropery( token, [], this._attribute ) );
                    expect = EXPECT.ATTRIBUTE_PROPERTY;
                    break;
                default :
                    expect = EXPECT.ERROR;
                    break;
            };
            break;
        case EXPECT.IN_DYNAMIC_ATTRIBUTE :
            this._createValue( token, value );
            if( this.stack.length === 0 ){
                // end of arguments
                const args = this.value;
                this.value = null;
                queue = onProcessingInstructionNodeOrAtttibutePropery( args.shift(), args, this._attribute );
                expect = EXPECT.ATTRIBUTE_PROPERTY;
                break;
            };
            return;
        default :
        /** expect => phase */
            switch( token ){
                case Parser.C.LEFT_BRACKET : // [
                    phase = expect === EXPECT.NODE_START
                                ? PHASE.NODE_START
                          : expect === EXPECT.CHILD_NODES_START
                                ? PHASE.IN_CHILD_NODES
                                : PHASE.ERROR;
                    break;
                case Parser.C.RIGHT_BRACKET : // ]
                    phase = expect === EXPECT.IN_ELEMENT_NODE
                                ? PHASE.CLOSE_ELEMENT_WITH_NO_CHILD
                          : expect === EXPECT.IN_CHILD_NODES
                                ? PHASE.CHILD_NODES_END
                          : expect === EXPECT.END_OF_ELEMENT_HAS_CHILDREN
                                ? PHASE.END_OF_ELEMENT_HAS_CHILDREN
                                : PHASE.ERROR;
                    break;
                case Parser.C.LEFT_BRACE : // {
                    phase = expect === EXPECT.IN_ELEMENT_NODE
                                ? PHASE.ATTRIBUTES_START
                          : expect === EXPECT.STYLES
                                ? PHASE.CSS_PROPERTY
                                : PHASE.ERROR;
                    break;
                case Parser.C.RIGHT_BRACE : // }
                    phase = expect === EXPECT.ATTRIBUTE_VALUE
                                ? PHASE.IN_ELEMENT_NODE
                          : expect === EXPECT.CSS_PROPERTY
                                ? PHASE.END_OF_STYLES
                                : PHASE.ERROR;
                    break;
                case Parser.C.STRING :
                    switch( expect ){
                        case EXPECT.NODE_TYPE_OR_TAG_NAME :
                        case EXPECT.ELEMENT_NODE_START :
                            phase = PHASE.TAG_NAME;
                            break;
                        case EXPECT.DOCUMENT_NODE_VALUE :
                            phase = PHASE.DOCUMENT_NODE_VALUE;
                            break;
                        case EXPECT.TEXT_NODE_VALUE :
                            phase = PHASE.TEXT_NODE_VALUE;
                            break;
                        case EXPECT.COMMENT_NODE_VALUE:
                            phase = PHASE.COMMENT_NODE_VALUE;
                            break;
                        case EXPECT.COMMENT_HIDE_LOWER_FORMURA:
                            phase = PHASE.COMMENT_HIDE_LOWER_FORMURA;
                            break;
                        case EXPECT.COMMENT_SHOW_LOWER_FORMURA:
                            phase = PHASE.COMMENT_SHOW_LOWER_FORMURA;
                            break;
                        case EXPECT.ATTRIBUTE_PROPERTY :
                            phase = PHASE.ATTRIBUTE_PROPERTY;
                            break;
                        case EXPECT.ATTRIBUTE_VALUE :
                        case EXPECT.STYLES :
                            phase = PHASE.ATTRIBUTE_VALUE;
                            break;
                        case EXPECT.CSS_PROPERTY :
                            phase = PHASE.CSS_PROPERTY;
                            break;
                        case EXPECT.CSS_VALUE :
                            phase = PHASE.CSS_VALUE;
                            break;
                        case EXPECT.IN_ELEMENT_NODE :
                        case EXPECT.CHILD_NODES_START :
                            phase = PHASE.SINGLE_TEXT_NODE_VALUE;
                            break;
                        case EXPECT.IN_CHILD_NODES :
                            phase = PHASE.IN_CHILD_NODES_TEXT;
                            break;
                        case EXPECT.DYNAMIC_CONTENTS_FUNCTION_NAME :
                            phase = PHASE.DYNAMIC_CONTENTS_FUNCTION_NAME;
                            break;
                        default :
                            phase = PHASE.ERROR;
                            break;
                    };
                case Parser.C.NUMBER :
                    switch( expect ){
                        case EXPECT.NODE_TYPE_OR_TAG_NAME :
                            phase = value; // nodeType
                            break;
                        case EXPECT.ATTRIBUTE_VALUE :
                            phase = PHASE.ATTRIBUTE_VALUE;
                            break;
                        case EXPECT.CSS_VALUE :
                            phase = PHASE.CSS_VALUE;
                            break;
                        case EXPECT.TEXT_NODE_VALUE :
                            phase = PHASE.TEXT_NODE_VALUE;
                            break;
                        case EXPECT.IN_ELEMENT_NODE :
                        case EXPECT.CHILD_NODES_START :
                            phase = PHASE.SINGLE_TEXT_NODE_VALUE;
                            break;
                        case EXPECT.IN_CHILD_NODES :
                            phase = PHASE.IN_CHILD_NODES_TEXT;
                            value += '';
                            break;
                        default :
                            phase = PHASE.ERROR;
                            break;
                    };
                    break;
                case Parser.C.TRUE :
                case Parser.C.FALSE :
                case Parser.C.NULL   :
                    phase = expect === EXPECT.ATTRIBUTE_VALUE
                            ? PHASE.ATTRIBUTE_VALUE
                            : PHASE.ERROR;
                    break;
                default :
                    phase = PHASE.ERROR;
            };
        /** phase => expect */
            switch( phase ){
                case PHASE.NODE_START : // [
                    expect = EXPECT.NODE_TYPE_OR_TAG_NAME;
                    break;
            /** <!DOCTYPE html> */
                case PHASE.DOCUMENT_NODE_START:
                    expect = EXPECT.DOCUMENT_NODE_VALUE;
                    tree.push( HTML_JSON_TYPE_DOCUMENT_NODE );
                    break;
                case PHASE.DOCUMENT_NODE_VALUE :
                    queue = value;
                    expect = EXPECT.CHILD_NODES_START;
                    break;
            /** DocumentFragment */
                case PHASE.DOCUMENT_FRAGMENT_NODE_START :
                    expect = EXPECT.CHILD_NODES_START ;
                    tree.push( HTML_JSON_TYPE_DOCUMENT_FRAGMENT_NODE );
                    break;
            /** Element */
                case PHASE.ELEMENT_NODE_START :
                    expect = EXPECT.TAG_NAME;
                    break;

                    case PHASE.TAG_NAME :
                        queue = '<' + value;
                        tree.push( value );
                        // #id
                        // .className
                        expect = EXPECT.IN_ELEMENT_NODE;
                        break;
                /** Attribute */
                    case PHASE.ATTRIBUTES_START :
                        expect = EXPECT.ATTRIBUTE_PROPERTY;
                        break;
                    case PHASE.ATTRIBUTE_PROPERTY :
                        if( value.charAt( 0 ) === ':' ){
                            this._attribute = value.substr( 1 );
                            expect = EXPECT.DYNAMIC_ATTRIBUTE_START;
                        } else {
                            this._attribute = value;
                            expect = value === 'style' ? EXPECT.STYLES : EXPECT.ATTRIBUTE_VALUE;
                        };
                        break;
                    case PHASE.ATTRIBUTE_VALUE :
                        if( value !== '' && value !== null ){
                            queue = this._attribute + '=' + wrapAttributeValue( value );
                        };
                        expect = EXPECT.ATTRIBUTE_PROPERTY;
                        break;
                /** style */
                    case PHASE.CSS_PROPERTY :
                        this._cssPropety = value;
                        expect = EXPECT.CSS_VALUE;
                        break;
                    case PHASE.CSS_VALUE :
                        if( value !== '' && value !== null ){
                            queue = toSnakeCase( this._cssPropety ) + ':' + value + ';';
                        };
                        expect = EXPECT.CSS_PROPERTY;
                        break;
                    case PHASE.END_OF_STYLES :
                        expect = EXPECT.IN_ELEMENT_NODE;
                        break;
                /** ChildnNodes */
                    case PHASE.CHILD_NODES_START :
                        expect = EXPECT.IN_CHILD_NODES;
                        break;
                    case PHASE.IN_CHILD_NODES_TEXT :
                        queue = escapeForHTML( value );
                        expect = EXPECT.IN_CHILD_NODES;
                        break;
                    case PHASE.SINGLE_TEXT_NODE_VALUE :
                        expect = tree.length ? EXPECT.END_OF_ELEMENT_HAS_CHILDREN : EXPECT.END_OF_DOCUMENT;
                        break;
                    case PHASE.CHILD_NODES_END :
                        expect = tree.length ? EXPECT.END_OF_ELEMENT_HAS_CHILDREN : EXPECT.END_OF_DOCUMENT;
                        break;
                /** </close-tag> */
                    case PHASE.CLOSE_ELEMENT_WITH_NO_CHILD :
                        queue = ( IS_XML_ELEMENT[ tagName ] ? '/>' : '>' ) + closeTag();
                        expect = tree.length ? EXPECT.IN_CHILD_NODES : EXPECT.END_OF_DOCUMENT;
                        break;
                    case PHASE.END_OF_ELEMENT_HAS_CHILDREN :
                        queue = closeTag();
                        expect = tree.length ? EXPECT.IN_CHILD_NODES : EXPECT.END_OF_DOCUMENT;
                        break;

            /** Text Node */
                case PHASE.TEXT_NODE_START:
                    expect = EXPECT.TEXT_NODE_VALUE;
                    break;
                case PHASE.TEXT_NODE_VALUE :
                    queue = escapeForHTML( value );
                    expect = EXPECT.END_OF_NODE;
                    break;
            /** <!-- --> */
                case PHASE.COMMENT_NODE_START:
                    queue = '<!--';
                    expect = EXPECT.COMMENT_NODE_VALUE;
                    break;
                case PHASE.COMMENT_NODE_VALUE:
                    queue = value + '-->';
                    expect = EXPECT.END_OF_NODE;
                    break;
            /** <!--[if IE]> --> */
                case PHASE.COMMENT_HIDE_LOWER_START :
                    queue = '<!--[';
                    expect = EXPECT.COMMENT_HIDE_LOWER_FORMURA;
                    tree.push( HTML_JSON_TYPE_CONDITIONAL_COMMENT_HIDE_LOWER );
                    break;
                case PHASE.COMMENT_HIDE_LOWER_FORMURA :
                    queue = value + ']>';
                    expect = EXPECT.CHILD_NODES_START;
                    break;
            /** <!--[if IE]><!--> */
                case PHASE.COMMENT_SHOW_LOWER_START :
                    queue = '<!--[';
                    expect = EXPECT.COMMENT_SHOW_LOWER_CONTENT;
                    tree.push( HTML_JSON_TYPE_CONDITIONAL_COMMENT_SHOW_LOWER );
                    break;
                case PHASE.COMMENT_SHOW_LOWER_FORMURA :
                    queue = value + ']><!-->';
                    expect = EXPECT.CHILD_NODES_START;
                    break;
            /** <? func(...) ?> */
                case PHASE.DYNAMIC_CONTENTS_START :
                    this._dynamicNode = { functionName : value };
                    expect = EXPECT.DYNAMIC_CONTENTS_FUNCTION_ARGUMENTS_START;
                    break;

            /** end of node */
                case PHASE.END_OF_NODE :
                    expect = tree.length ? EXPECT.IN_CHILD_NODES : EXPECT.END_OF_DOCUMENT;
                    break;

                default :
                    expect = EXPECT.ERROR;
                    break;
            };
    };

    if( expect === EXPECT.ERROR ){
        this._stream.emit( 'error', 'Not html.json format!' );
    };

    this._expect = expect;

    if( queue ){
        this._stream.queue( queue );
    };
};
