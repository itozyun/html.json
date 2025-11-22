goog.provide( 'HTMLJsonParser.create' );
goog.provide( 'HTMLJsonParser.writeHandler' );

goog.require( 'htmljson.base' );
goog.require( 'htmljson.NODE_TYPE' );
goog.require( 'htmljson.PHASE' );
goog.require( 'htmljson.EXPECT' );
goog.require( 'htmljson.DEFINE.DEBUG' );
goog.require( 'htmljson.DEFINE.INSTRUCTION_ATTR_PREFIX' );
goog.require( 'json2html.main' );

// https://raw.githubusercontent.com/dominictarr/JSONStream/master/index.js

goog.require( 'JsonParser' );
goog.require( 'JsonParser.C' );
goog.require( 'bufferFrom' );
goog.require( 'Through' );
goog.requireType( 'htmljson.Traverser.EnterHandler' );
goog.requireType( 'htmljson.Traverser.LeaveHandler' );

/**
 * @param {!function((string | !Error))=} opt_onError
 * @return {!Through}
 */
HTMLJsonParser.create = function( opt_onError ){
    const jsonParser = new JsonParser();
    const stream     = /** @type {!Through} */ (new Through( HTMLJsonParser.writeHandler, HTMLJsonParser.endHandler, 'json2html' ));

    /**
     * @suppress {checkTypes}
     * @type {JsonParser | null}  */
    stream._jsonParser = jsonParser;

    /** @type {Through | null} */
    jsonParser._through = stream;

    jsonParser._expect = htmljson.EXPECT.NODE_START;
    jsonParser._args   = [];

    jsonParser._documentFragmentAdded = false;

    /** @const */ jsonParser._createValue   = jsonParser.onToken;
    /** @const */ jsonParser.onToken        = HTMLJsonParser.onToken;
    /** @const */ jsonParser.onError        = HTMLJsonParser.onError; // error from JsonParser
    /** @const */ jsonParser._tree          = [];
    /** @const */ jsonParser._waitingTokens = [];
    /** @const */ jsonParser._onError       = opt_onError;
    /** @const */ jsonParser.writeLeaveNode = HTMLJsonParser.writeLeaveNode;

    stream.on( 'resume', HTMLJsonParser.resumeHandler );
    stream.stop = HTMLJsonParser.stopStream;
    stream.restart = HTMLJsonParser.restartStream;

    return stream;
};
/**
 * @this {!Through}
 */
HTMLJsonParser.stopStream = function(){
    if( !this.stopped ){
        this.stopped = true;
        this.pause();
    };
};
/**
 * @this {!Through}
 */
HTMLJsonParser.restartStream = function(){
    if( this.stopped ){
        this.stopped = false;
        this.resume();
    };
};

/**
 * @this {!Through}
 * @param {Buffer | string | number | boolean | null} chunk 
 */
HTMLJsonParser.writeHandler = function( chunk ){
    if( core.isNumber( chunk ) || core.isBoolean( chunk ) ){
        chunk = '' + chunk;
    };
    if( core.isString( chunk ) ){
        chunk = bufferFrom( chunk );
    };
    /** @suppress {missingProperties} */
    this._jsonParser.write( chunk );
};

/**
 * @private
 * @this {!Through}
 * @param {Buffer | string | number | boolean | null=} data 
 */
HTMLJsonParser.endHandler = function( data ){
    if( data != null ){
        this.write( data );
    };

    if( this._jsonParser._beforeLeaveNode ){
        this._jsonParser.writeLeaveNode( true );
    };

    /** @suppress {checkTypes} */
    var expect = this._jsonParser._expect;

    if( htmljson.DEFINE.DEBUG && expect !== htmljson.EXPECT.END_OF_DOCUMENT ){
        this.emit( 'error', 'Invalid html.json' );
    };

    this.queue( null );

    /** @suppress {checkTypes} */
    this._jsonParser = this._jsonParser._through = null;
};

/**
 * @private
 * @this {!Through}
 */
HTMLJsonParser.resumeHandler = function(){
    /** @suppress {checkTypes} */
    var jsonParser = this._jsonParser;
    var args = jsonParser._waitingTokens;

    if( args ){
        while( args.length && !this.stopped ){
            jsonParser.onToken( args.shift(), args.shift() );
        };
    };
};

/**
 * @private
 * @this {JsonParser}
 * @param {!Error} err 
 */
HTMLJsonParser.onError = function( err ){
    if( htmljson.DEFINE.DEBUG ){
        if( -1 < err.message.indexOf( 'at position' ) ){
            err.message = 'Invalid JSON (' + err.message + ')';
        };
        if( this._onError ){
            this._onError( err.message );
        };
        this._through.emit( 'error', err );
    };
};

/**
 * @private
 * @this {JsonParser}
 * @param {boolean} isLastChild 
 * @param {!HTMLJson=} opt_currentJsonNode
 * @return {number} htmljson.EXPECT
 */
HTMLJsonParser.writeLeaveNode = function( isLastChild, opt_currentJsonNode ){
    const tree = this._tree;
    let lastIndex         = tree.length - 1;
    let parentAndPosition = tree[ lastIndex ];

    if( !opt_currentJsonNode ){
        opt_currentJsonNode = parentAndPosition[ 0 ];
        tree.pop();
        --lastIndex;
        parentAndPosition = tree[ lastIndex ] || [ null, 0 ];
    };
    if( this.onLeaveNode ){
        this.onLeaveNode( opt_currentJsonNode, parentAndPosition[ 0 ], parentAndPosition[ 1 ], lastIndex + 1, isLastChild );
    };
    return this._expect = tree.length - ( + this._documentFragmentAdded ) ? htmljson.EXPECT.IN_CHILD_NODES : htmljson.EXPECT.END_OF_DOCUMENT;
};

/**
 * @private
 * @this {JsonParser}
 * @param {number} token 
 * @param {*} value 
 */
HTMLJsonParser.onToken = function( token, value ){
    function setNodeType( nodeType ){
        self._nodeType = nodeType;
    };
    function setNodeValue( nodeValue ){
        self._nodeValue = nodeValue;
    };
    /**
     * @param {boolean} hasUnknownChildren
     * @param {boolean=} opt_isLastChild hasUnknownChildren==false の時に bool 値が入っている
     * @return {boolean} stopped
     */
    function writeEnterNode( hasUnknownChildren, opt_isLastChild ){
        const nodeType  = self._nodeType;
        const nodeValue = self._nodeValue;

        switch( nodeType ){
            case htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE :
                return _enterNode( [ nodeType ], hasUnknownChildren );
            case htmljson.NODE_TYPE.ELEMENT_START_TAG :
            case htmljson.NODE_TYPE.ELEMENT_NODE :
                if( self._attrs ){
                    return _enterNode( [ nodeType, nodeValue, self._attrs ], hasUnknownChildren );
                };
            case htmljson.NODE_TYPE.DOCUMENT_NODE :
            case htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER :
            case htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER :
                return _enterNode( [ nodeType, nodeValue ], hasUnknownChildren );
            case htmljson.NODE_TYPE.TEXT_NODE :
            case htmljson.NODE_TYPE.CDATA_SECTION :
            case htmljson.NODE_TYPE.COMMENT_NODE :
            case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START :
            case htmljson.NODE_TYPE.ELEMENT_END_TAG :
                return _enterNode( [ nodeType, nodeValue ], false );
            case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_END :
                return _enterNode( [ nodeType ], false );
            case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION :
                return _enterNode( [ nodeType ].concat( self._args ), false );
        };
        return false;

    /**
     * @param {!HTMLJson} currentJsonNode 
     * @param {boolean} hasUnknownChildren 
     * @return {boolean} stopped
     */
    function _enterNode( currentJsonNode, hasUnknownChildren ){
        const tree = self._tree;
        const through = self._through;

        let lastIndex = tree.length - 1;
        if( lastIndex === -1 && currentJsonNode[ 0 ] !== htmljson.NODE_TYPE.DOCUMENT_NODE && currentJsonNode[ 0 ] !== htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE ){
            tree.push( [ [ htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE ], -1 ] );
            lastIndex = 0;
            self._documentFragmentAdded = true;
        };
        const parentAndPosition = tree[ lastIndex ] || [ null, -1 ];

        const result = self.onEnterNode( currentJsonNode, parentAndPosition[ 0 ], parentAndPosition[ 1 ] + 1, lastIndex + 1, hasUnknownChildren, opt_isLastChild, through );
// console.log( currentJsonNode )
        const stopped = through.stopped;

        if( stopped ){
            if( result !== VISITOR_OPTION.REMOVED ){
                // ProcessingInstruction が返した htmlJson ノード中に ProcessingInstruction or InstructionAttribute があって pause した場合、HTMLJsonParser で再処理しない
                // InstructionAttribute で pause した場合、HTMLJsonParser で再処理しない
                self._waitingTokens.push( token, value );
                if( !hasUnknownChildren ){
                    self._beforeEnterChildlessNode = true;
                };
            };
        } else {
            self._args.length = 0;
            self._attrs = null;
            ++parentAndPosition[ 1 ];
            if( hasUnknownChildren ){
                tree.push( [ currentJsonNode, -1 ] );
                self._expect = expect = htmljson.EXPECT.IN_CHILD_NODES;
            } else {
                expect = self.writeLeaveNode( /** @type {boolean} */ (opt_isLastChild), currentJsonNode );
            };
        };
        return stopped;
        };
    };

    // console.log( '> ' + token + ' : ' + value, this._tree, this.jsonStack.length );
    const self = this;
    let expect = this._expect;
    let phase;

    if( this._through.stopped ){
        this._waitingTokens.push( token, value );
        return;
    };
    // 子を持たない Node の場合、自身が lastChild か? を確認してから writeEnterNode(false, isLastChild) を呼ぶ
    if( this._beforeEnterChildlessNode ){
        if( token === JsonParser.C.COMMA || token === JsonParser.C.RIGHT_BRACKET ){
            this._beforeEnterChildlessNode = false;
            if( writeEnterNode( false, token === JsonParser.C.RIGHT_BRACKET ) ){
                return;
            };
        } else if( htmljson.DEFINE.DEBUG ){
            expect = htmljson.EXPECT.ERROR;
        };
    };
    // Node が lastChild か? を確認してから writeLeaveNode( isLastChild ) を呼ぶ
    if( this._beforeLeaveNode ){
        if( token === JsonParser.C.COMMA || token === JsonParser.C.RIGHT_BRACKET ){
            this._beforeLeaveNode = false;
            expect = this.writeLeaveNode( token === JsonParser.C.RIGHT_BRACKET );
        } else if( htmljson.DEFINE.DEBUG ){
            expect = htmljson.EXPECT.ERROR;
        };
    };
    if( token === JsonParser.C.COLON || token === JsonParser.C.COMMA ){
        if( this.jsonStack.length ){
            this._createValue( token, value );
        };
        return;
    };

    switch( expect ){
        case htmljson.EXPECT.INSTRUCTION_FUNC_NAME_AND_ARGS :
            switch( token ){
                case JsonParser.C.RIGHT_BRACKET : // ]
                    if( this.jsonStack.length === 0 ){ // end of arguments
                        if( htmljson.DEFINE.DEBUG ){
                            if( this._args.length === 0 ){
                                expect = htmljson.EXPECT.ERROR;
                                break;
                            };
                        };
                        this._beforeEnterChildlessNode = true;
                        break;
                    };
                case JsonParser.C.RIGHT_BRACE : // }
                    if( this.jsonStack.length === 1 ){
                        this._args.push( this.currentValue );
                        this.currentValue = null;
                    };
                case JsonParser.C.LEFT_BRACKET : // [
                case JsonParser.C.LEFT_BRACE   : // {
                    this._createValue( token, value );
                    break;
                default :
                // case JsonParser.C.STRING :
                // case JsonParser.C.NUMBER :
                // case JsonParser.C.TRUE   :
                // case JsonParser.C.FALSE  :
                // case JsonParser.C.NULL   :
                    if( this.jsonStack.length ){
                        this._createValue( token, value );
                    } else {
                        if( htmljson.DEFINE.DEBUG ){
                            if( this._args.length === 0 && !core.isString( value ) ){
                                expect = htmljson.EXPECT.ERROR;
                            };
                        };
                        this._args.push( value );
                    };
                    break;
            };
            break;
        case htmljson.EXPECT.IN_ATTRIBUTES :
            switch( token ){
                case JsonParser.C.RIGHT_BRACE   : // }
                    if( this.jsonStack.length === 1 ){ // end of arguments
                        this._attrs = this.currentValue;
                        this.currentValue = null;
                        expect = htmljson.EXPECT.CHILD_NODES_START;
                    };
                default :
                // case JsonParser.C.RIGHT_BRACKET : // ]
                // case JsonParser.C.LEFT_BRACKET : // [
                // case JsonParser.C.LEFT_BRACE   : // {
                // case JsonParser.C.STRING :
                // case JsonParser.C.NUMBER :
                // case JsonParser.C.TRUE   :
                // case JsonParser.C.FALSE  :
                // case JsonParser.C.NULL   :
                    this._createValue( token, value );
            };
            break;
        default :
        /** expect => phase */
            switch( token ){
                case JsonParser.C.LEFT_BRACKET : // [
                    switch( expect ){
                        case htmljson.EXPECT.ATTRIBUTES_START  :
                        case htmljson.EXPECT.CHILD_NODES_START :
                            phase = htmljson.PHASE.END_START_TAG_AND_START_CHILD;
                            break;
                        case htmljson.EXPECT.NODE_START     :
                        case htmljson.EXPECT.IN_CHILD_NODES :
                            phase = htmljson.PHASE.NODE_START;
                            break;
                        default :
                            phase = htmljson.PHASE.ERROR;
                            break;
                    };
                    break;
                case JsonParser.C.RIGHT_BRACKET : // ]
                    phase = expect === htmljson.EXPECT.ATTRIBUTES_START || expect === htmljson.EXPECT.CHILD_NODES_START
                                ? htmljson.PHASE.LEAVE_EMPTY_NODE
                          : expect === htmljson.EXPECT.IN_CHILD_NODES
                                ? htmljson.PHASE.LEAVE_NODE
                          : expect === htmljson.EXPECT.END_OF_NODE
                                ? htmljson.PHASE.END_OF_NODE
                                : htmljson.PHASE.ERROR;
                    break;
                case JsonParser.C.LEFT_BRACE : // {
                    phase = expect === htmljson.EXPECT.ATTRIBUTES_START
                                ? htmljson.PHASE.ATTRIBUTES_START
                                : htmljson.PHASE.ERROR;
                    break;
                case JsonParser.C.STRING :
                    switch( expect ){
                        case htmljson.EXPECT.NODE_TYPE :
                        case htmljson.EXPECT.TAG_NAME  :
                            phase = htmljson.PHASE.TAG_NAME;
                            break;
                        case htmljson.EXPECT.TAG_NAME_WITHOUT_END_TAG :
                            phase = htmljson.PHASE.TAG_NAME_WITHOUT_END_TAG;
                            break;
                        case htmljson.EXPECT.TAG_NAME_WITHOUT_START_TAG :
                            phase = htmljson.PHASE.TAG_NAME_WITHOUT_START_TAG;
                            break;
                        case htmljson.EXPECT.DOCUMENT_NODE_VALUE :
                            phase = htmljson.PHASE.DOCUMENT_NODE_VALUE;
                            break;
                        case htmljson.EXPECT.TEXT_NODE_VALUE :
                            phase = htmljson.PHASE.TEXT_NODE_VALUE;
                            break;
                        case htmljson.EXPECT.CDATA_SECTION_VALUE :
                            phase = htmljson.PHASE.CDATA_SECTION_VALUE;
                            break;
                        case htmljson.EXPECT.COMMENT_NODE_VALUE:
                            phase = htmljson.PHASE.COMMENT_NODE_VALUE;
                            break;
                        case htmljson.EXPECT.COND_CMT_HIDE_LOWER_FORMURA:
                            phase = htmljson.PHASE.COND_CMT_HIDE_LOWER_FORMURA;
                            break;
                        case htmljson.EXPECT.NN4_COND_CMT_SHOW_LOWER_FORMURA :
                            phase = htmljson.PHASE.NN4_COND_CMT_SHOW_LOWER_FORMURA;
                            break;
                        case htmljson.EXPECT.COND_CMT_SHOW_LOWER_FORMURA:
                            phase = htmljson.PHASE.COND_CMT_SHOW_LOWER_FORMURA;
                            break;
                        case htmljson.EXPECT.ATTRIBUTES_START  :
                        case htmljson.EXPECT.CHILD_NODES_START :
                            phase = htmljson.PHASE.END_START_TAG_AND_TEXT_DATA;
                            break;
                        case htmljson.EXPECT.IN_CHILD_NODES :
                            phase = htmljson.PHASE.TEXT_DATA;
                            break;
                        default :
                            phase = htmljson.PHASE.ERROR;
                            break;
                    };
                    break;
                case JsonParser.C.NUMBER :
                    switch( expect ){
                        case htmljson.EXPECT.NODE_TYPE :
                            phase = value; // nodeType
                            break;
                        case htmljson.EXPECT.TEXT_NODE_VALUE :
                            phase = htmljson.PHASE.TEXT_NODE_VALUE;
                            break;
                        case htmljson.EXPECT.ATTRIBUTES_START  :
                        case htmljson.EXPECT.CHILD_NODES_START :
                            phase = htmljson.PHASE.END_START_TAG_AND_TEXT_DATA;
                            break;
                        case htmljson.EXPECT.IN_CHILD_NODES    :
                            phase = htmljson.PHASE.TEXT_DATA;
                            // value += '';
                            break;
                        case htmljson.EXPECT.CDATA_SECTION_VALUE :
                            phase = htmljson.PHASE.CDATA_SECTION_VALUE;
                            // value += '';
                            break;
                        case htmljson.EXPECT.COMMENT_NODE_VALUE:
                            phase = htmljson.PHASE.COMMENT_NODE_VALUE;
                            // value += '';
                            break;
                        default :
                            phase = htmljson.PHASE.ERROR;
                            break;
                    };
                    break;
                default :
                // case JsonParser.C.RIGHT_BRACE : // }
                // case JsonParser.C.TRUE  :
                // case JsonParser.C.FALSE :
                // case JsonParser.C.NULL  :
                    phase = htmljson.PHASE.ERROR;
                    break;
            };
            // console.log( '. ' + phase );
        /** phase => expect */
            switch( phase ){
                case htmljson.PHASE.END_START_TAG_AND_START_CHILD :
                    if( writeEnterNode( true ) ){
                        return;
                    };
                case htmljson.PHASE.NODE_START : // [
                    expect = htmljson.EXPECT.NODE_TYPE;
                    break;
            /** <!DOCTYPE html> */
                case htmljson.PHASE.ENTER_DOCUMENT_NODE:
                    expect = htmljson.EXPECT.DOCUMENT_NODE_VALUE;
                    setNodeType( htmljson.NODE_TYPE.DOCUMENT_NODE );
                    break;
                case htmljson.PHASE.DOCUMENT_NODE_VALUE :
                    expect = htmljson.EXPECT.CHILD_NODES_START;
                    setNodeValue( value );
                    break;
            /** DocumentFragment */
                case htmljson.PHASE.ENTER_DOCUMENT_FRAGMENT_NODE :
                    expect = htmljson.EXPECT.CHILD_NODES_START ;
                    setNodeType( htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE );
                    break;
            /** Element */
                case htmljson.PHASE.ENTER_ELEMENT_NODE :
                    expect = htmljson.EXPECT.TAG_NAME;
                    break;
                case htmljson.PHASE.ENTER_ELEMENT_START_TAG :
                    expect = htmljson.EXPECT.TAG_NAME_WITHOUT_END_TAG;
                    setNodeType( htmljson.NODE_TYPE.ELEMENT_START_TAG );
                    break;
                case htmljson.PHASE.TAG_NAME :
                    setNodeType( htmljson.NODE_TYPE.ELEMENT_NODE );
                case htmljson.PHASE.TAG_NAME_WITHOUT_END_TAG :
                    expect = htmljson.EXPECT.ATTRIBUTES_START;
                    setNodeValue( value );
                    break;
            /** Attribute */
                case htmljson.PHASE.ATTRIBUTES_START :
                    expect = htmljson.EXPECT.IN_ATTRIBUTES;
                    this._attrs = {};
                    this._createValue( token, value );
                    break;
            /**  */
                case htmljson.PHASE.LEAVE_NODE :
                    this._beforeLeaveNode = true;
                    break;
                case htmljson.PHASE.END_OF_NODE :
                    this._beforeEnterChildlessNode = true;
                    break;
            /** canHasChildren な Node が子を持たずに終わった */
                case htmljson.PHASE.LEAVE_EMPTY_NODE :
                    this._beforeEnterChildlessNode = true;
                    break;

            /** </div> */
                case htmljson.PHASE.ENTER_ELEMENT_END_TAG :
                    expect = htmljson.EXPECT.TAG_NAME_WITHOUT_START_TAG;
                    setNodeType( htmljson.NODE_TYPE.ELEMENT_END_TAG );
                    break;
                case htmljson.PHASE.TAG_NAME_WITHOUT_START_TAG :
                    expect = htmljson.EXPECT.END_OF_NODE;
                    setNodeValue( value );
                    break;

            /** Text Node */
                case htmljson.PHASE.ENTER_TEXT_NODE:
                    expect = htmljson.EXPECT.TEXT_NODE_VALUE;
                    setNodeType( htmljson.NODE_TYPE.TEXT_NODE );
                    break;
                case htmljson.PHASE.TEXT_NODE_VALUE :
                    expect = htmljson.EXPECT.END_OF_NODE;
                    setNodeValue( value );
                    break;
                /** Text */
                case htmljson.PHASE.END_START_TAG_AND_TEXT_DATA :
                    if( writeEnterNode( true ) ){
                        return;
                    };
                case htmljson.PHASE.TEXT_DATA :
                    this._beforeEnterChildlessNode = true;
                    expect = htmljson.EXPECT.IN_CHILD_NODES;
                    setNodeType( htmljson.NODE_TYPE.TEXT_NODE );
                    setNodeValue( value );
                    break;
            /** <![CDATA[ ]]> */
                case htmljson.PHASE.ENTER_CDATA_SECTION:
                    expect = htmljson.EXPECT.CDATA_SECTION_VALUE;
                    setNodeType( htmljson.NODE_TYPE.CDATA_SECTION );
                    break;
                case htmljson.PHASE.CDATA_SECTION_VALUE:
                    expect = htmljson.EXPECT.END_OF_NODE;
                    setNodeValue( value );
                    break;
            /** <!-- --> */
                case htmljson.PHASE.ENTER_COMMENT_NODE:
                    expect = htmljson.EXPECT.COMMENT_NODE_VALUE;
                    setNodeType( htmljson.NODE_TYPE.COMMENT_NODE );
                    break;
                case htmljson.PHASE.COMMENT_NODE_VALUE:
                    expect = htmljson.EXPECT.END_OF_NODE;
                    setNodeValue( value );
                    break;
            /** <!--[if IE]> --> */
                case htmljson.PHASE.ENTER_COND_CMT_HIDE_LOWER :
                    expect = htmljson.EXPECT.COND_CMT_HIDE_LOWER_FORMURA;
                    setNodeType( htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER );
                    break;
                case htmljson.PHASE.COND_CMT_HIDE_LOWER_FORMURA :
                    expect = htmljson.EXPECT.CHILD_NODES_START;
                    setNodeValue( value );
                    break;
            /** <!--{true}; --> */
                case htmljson.PHASE.ENTER_NN4_COND_CMT_HIDE_LOWER :
                    expect = htmljson.EXPECT.NN4_COND_CMT_SHOW_LOWER_FORMURA;
                    setNodeType( htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER );
                    break;
                case htmljson.PHASE.NN4_COND_CMT_SHOW_LOWER_FORMURA :
                    expect = htmljson.EXPECT.CHILD_NODES_START;
                    setNodeValue( value );
                    break;
            /** <!--[if !IE]><!--> */
                case htmljson.PHASE.ENTER_COND_CMT_SHOW_LOWER_START :
                    expect = htmljson.EXPECT.COND_CMT_SHOW_LOWER_FORMURA;
                    setNodeType( htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START );
                    break;
                case htmljson.PHASE.COND_CMT_SHOW_LOWER_FORMURA :
                    expect = htmljson.EXPECT.END_OF_NODE;
                    setNodeValue( value );
                    break;
            /** <!--<![endif]--> */
                case htmljson.PHASE.ENTER_COND_CMT_SHOW_LOWER_END :
                    expect = htmljson.EXPECT.END_OF_NODE;
                    setNodeType( htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_END );
                    break;
            /** <? func(...) ?> */
                case htmljson.PHASE.ENTER_PROCESSING_INSTRUCTION :
                    expect = htmljson.EXPECT.INSTRUCTION_FUNC_NAME_AND_ARGS;
                    setNodeType( htmljson.NODE_TYPE.PROCESSING_INSTRUCTION );
                    break;

                default :
                    expect = htmljson.EXPECT.ERROR;
                    break;
            };
    };

    // console.log( '- ' + queue, expect, this._tree );

    if( expect === htmljson.EXPECT.ERROR ){
        if( htmljson.DEFINE.DEBUG ){
            if( this._onError ){
                this._onError( 'Not html.json format!' );
            };
            this._through.emit( 'error', 'Not html.json format!' );
        };
    } else {
        this._expect = expect;
    };
};
