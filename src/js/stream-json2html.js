// https://raw.githubusercontent.com/dominictarr/JSONStream/master/index.js

// const Parser = require( 'jsonparse' );

// const through = require( 'through' );

const bufferFrom = Buffer.from && Buffer.from !== Uint8Array.from;

/**
 * @param {!function(string, ...*):(!Array|string|number|null|void)} onInstruction
 * @param {!function(string)|!Object=} opt_onError
 * @param {!Object=} opt_options
 * @return {!Through}
 */
module.exports = function( onInstruction, opt_onError, opt_options ){
    const parser  = new Parser();
    const stream  = /** @type {!Through} */ (through( writeHandler, endHandler ));
    const options = opt_onError && typeof opt_onError === 'object' ? opt_onError : opt_options || {};

    stream._parser = parser;

    parser._createValue   = parser.onToken;
    parser.onToken        = onToken;
    parser.onError        = onError;
    parser._expect        = EXPECT.NODE_START;
    parser._tree          = [];
    parser._args          = [];
    parser._onInstruction = onInstruction;
    parser._onerror       = typeof opt_onError === 'function' ? opt_onError : function( error ){};
    parser._quotAlways    = !!options[ 'quotAlways' ],
    parser._useSingleQuot = !!options[ 'useSingleQuot' ],
    parser._attrPrefix    = options[ 'instructionAttrPrefix' ] || DEFINE_INSTRUCTION_ATTR_PREFIX;
    parser._cssText       = '';

    return parser._stream = stream;
};

module.exports.DOCUMENT_NODE                  = HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE;
module.exports.DOCUMENT_FRAGMENT_NODE         = HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE;
module.exports.ELEMENT_NODE                   = HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE;
module.exports.TEXT_NODE                      = HTML_DOT_JSON__NODE_TYPE.TEXT_NODE;
module.exports.CDATA_SECTION                  = HTML_DOT_JSON__NODE_TYPE.CDATA_SECTION;
module.exports.COMMENT_NODE                   = HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE;
module.exports.CONDITIONAL_COMMENT_HIDE_LOWER = HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER;
module.exports.CONDITIONAL_COMMENT_SHOW_LOWER = HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER;
module.exports.PROCESSING_INSTRUCTION         = HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION;

/**
 * @this {!Through}
 * @param {!Buffer|string} chunk 
 */
function writeHandler( chunk ){
    if( 'string' === typeof chunk ){
        chunk = bufferFrom ? Buffer.from( chunk ) : new Buffer( chunk );
    };
    this._parser.write( chunk );
};

/**
 * @this {!Through}
 * @param {Buffer|null|string} data 
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
 * @this {Parser}
 * @param {!Error} err 
 */
function onError( err ){
    if( -1 < err.message.indexOf( 'at position' ) ){
        err.message = 'Invalid JSON (' + err.message + ')';
    };
    this._onerror( err.message );
    this._stream.emit( 'error', err );
};


/**
 * @this {Parser}
 * @param {number} token 
 * @param {*} value 
 */
function onToken( token, value ){
    if( token === /* Parser.C. */COLON || token === /* Parser.C. */COMMA ){
        if( this.stack.length ){
            this._createValue( token, value );
        };
        return;
    };

    // console.log( '> ' + token + ' : ' + value, this._expect, this._tree, this._args );

    const tree = this._tree;
    let expect = this._expect;
    let phase, queue;
    let closeStartTag = false;

    const self = this;

    function executeInstruction(){
        const result = self._args.length
                     ? self._onInstruction.call( self._stream, self._functionName, self._args )
                     : self._onInstruction.call( self._stream, self._functionName );

        self._functionName = null;
        self._args.length  = 0;
        return result;
    };

    function createAttributeNodeString( value ){
        if( value !== '' && value !== null ){
            return ' ' + self._attribute + '=' + p_quotAttributeValue( value, self._useSingleQuot, self._quotAlways );
        };
        return '';
    };

    function createEndTag( childNodesContents ){
        const currentNode = tree.pop();
        
        expect = tree.length ? EXPECT.IN_CHILD_NODES : EXPECT.END_OF_DOCUMENT;

        switch( currentNode ){
            //case HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE :
            //case HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE :
                // expect = EXPECT.END_OF_DOCUMENT;
            //case HTML_DOT_JSON__NODE_TYPE.TEXT_NODE :
            //case HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION :
                //break;
            case HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER :
                queue = '<![endif]-->';
                break;
            case HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER :
                queue = '<!--<![endif]-->';
                break;
            case HTML_DOT_JSON__NODE_TYPE.CDATA_SECTION :
                queue = ']]>';
                break;
            case HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE :
                queue = '-->';
                break;
            default :
                if( p_isString( currentNode ) ){
                    const tagName = currentNode;

                    if( !childNodesContents ){
                        queue = self._isXMLDocument || self._isXmlInHTML ? ' />' : '>';
                    } else {
                        queue = '';
                    };
                    if(
                        ( !( self._isXMLDocument || self._isXmlInHTML ) || childNodesContents ) // XML ではない、または、子を持つ
                        &&
                        ( !OMIT_END_TAG[ tagName ] || self._noOmitEndTag ) // 閉じタグを省略しない、または親要素によって省略できない
                    ){
                        queue += '</' + tagName + '>';
                        self._omittedEndTagBefore = '';
                    } else {
                        self._omittedEndTagBefore = EMPTY_ELEMENTS[ tagName ] ? '' : tagName;
                    };
                    // update flags
                    updateFlags();
                };
                break;
        };
    };

    function updateFlags(){
        self._noOmitEndTag = self._skipEscapeForHTML = self._isXmlInHTML = false;

        for( let i = 0, l = tree.length; i < l; ++i ){
            const tagName = tree[ i ];

            if( tagName === HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER || tagName === HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER ){
                self._noOmitEndTag = true;
            } else if( p_isString( tagName ) ){
                if( NO_OMIT_END_TAG[ tagName ] ){
                    self._noOmitEndTag = true;
                };
                if( SKIP_HTML_ESCAPE[ tagName ] ){
                    self._skipEscapeForHTML = true;
                };
                if( IS_XML_ROOT[ tagName ] || p_isNamespacedTag( tagName ) ){
                    self._isXmlInHTML = true;
                };
            };
        };
    };

    function closeParentStartTag(){
        return closeStartTag && p_isString( tree[ tree.length - 1 ] ) ? '>' : '';
    };

    function appendOmittedEndTagBasedOnFollowingNode(){
        let html = '';

        if( !closeStartTag && self._omittedEndTagBefore ){
            html = '</' + self._omittedEndTagBefore + '>';
            self._omittedEndTagBefore = '';
        };
        return html;
    };

    function escapeTextNodeValue( value ){
        return self._skipEscapeForHTML ? '' + value : p_escapeForHTML( '' + value );
    };

    switch( expect ){
        case EXPECT.PROCESSING_INSTRUCTION_ARGS :
            switch( token ){
                case /* Parser.C. */LEFT_BRACKET : // [
                case /* Parser.C. */LEFT_BRACE   : // {
                    this._createValue( token, value );
                    return;
                case /* Parser.C. */RIGHT_BRACKET : // ]
                    if( this.stack.length === 0 ){ // end of arguments
                        const result = executeInstruction();

                        if( p_isArray( result ) ){
                            m_noOmitEndTag    = this._noOmitEndTag;
                            m_skipEscapeForHTML = this._skipEscapeForHTML;
                            m_isXMLDocument     = this._isXMLDocument || this._isXmlInHTML;
                            queue = p_json2html(
                                result,
                                this._onInstruction,
                                this._onerror,
                                {
                                    'quotAlways'            : this._quotAlways,
                                    'useSingleQuot'         : this._useSingleQuot,
                                    'instructionAttrPrefix' : this._attrPrefix
                                }
                            );
                            m_noOmitEndTag = m_skipEscapeForHTML = m_isXMLDocument = false;
                        } else {
                            queue = p_isStringOrNumber( result ) ? '' + result : '';
                        };
                        createEndTag( !!queue );
                        break;
                    };
                case /* Parser.C. */RIGHT_BRACE : // }
                    if( this.stack.length === 1 ){
                        this._args.push( this.value );
                        this.value = null;
                    };
                    this._createValue( token, value );
                    return;
                case /* Parser.C. */STRING :
                case /* Parser.C. */NUMBER :
                case /* Parser.C. */TRUE   :
                case /* Parser.C. */FALSE  :
                case /* Parser.C. */NULL   :
                    if( this.stack.length ){
                        this._createValue( token, value );
                    } else {
                        this._args.push( value );
                    };
                    return;
                default :
                    expect = EXPECT.ERROR;
                    break;
            };
            break;
        case EXPECT.IN_INSTRUCTION_ATTRIBUTE :
            switch( token ){
                case /* Parser.C. */LEFT_BRACKET : // [
                case /* Parser.C. */LEFT_BRACE   : // {
                    this._createValue( token, value );
                    return;
                case /* Parser.C. */RIGHT_BRACKET : // ]
                    if( this.stack.length === 0 ){ // end of arguments
                        // !_functionName => error
                        queue  = createAttributeNodeString( executeInstruction() );
                        expect = EXPECT.ATTRIBUTE_PROPERTY;
                        break;
                    };
                case /* Parser.C. */RIGHT_BRACE   : // }
                    if( this.stack.length === 1 ){
                        this._args.push( this.value );
                        this.value = null;
                    };
                    this._createValue( token, value );
                    return;
                case /* Parser.C. */STRING :
                    if( this.stack.length === 0 && !this._functionName ){
                        // _args.length => error
                        this._functionName = value;
                        return;
                    };
                case /* Parser.C. */NUMBER :
                case /* Parser.C. */TRUE :
                case /* Parser.C. */FALSE :
                case /* Parser.C. */NULL   :
                    if( this.stack.length ){
                        this._createValue( token, value );
                    } else {
                        this._args.push( value );
                    };
                    return;
                default :
                    expect = EXPECT.ERROR;
                    break;
            };
            break;
        default :
        /** expect => phase */
            switch( token ){
                case /* Parser.C. */LEFT_BRACKET : // [
                    switch( expect ){
                        case EXPECT.ATTRIBUTES_START  :
                        case EXPECT.CHILD_NODES_START :
                            closeStartTag = true;
                        case EXPECT.NODE_START     :
                        case EXPECT.IN_CHILD_NODES :
                            phase = PHASE.NODE_START;
                            break;
                        case EXPECT.INSTRUCTION_ATTRIBUTE_START :
                            phase = PHASE.IN_INSTRUCTION_ATTRIBUTE;
                            break;
                        default :
                            phase = PHASE.ERROR;
                            break;
                    };
                    break;
                case /* Parser.C. */RIGHT_BRACKET : // ]
                    phase = expect === EXPECT.ATTRIBUTES_START || expect === EXPECT.CHILD_NODES_START
                                ? PHASE.CLOSE_EMPTY_ELEMENT
                          : expect === EXPECT.IN_CHILD_NODES || expect === EXPECT.END_OF_NODE
                                ? PHASE.END_OF_NODE
                                : PHASE.ERROR;
                    break;
                case /* Parser.C. */LEFT_BRACE : // {
                    phase = expect === EXPECT.ATTRIBUTES_START
                                ? PHASE.ATTRIBUTES_START
                          : expect === EXPECT.STYLES_START
                                ? PHASE.STYLES_START
                                : PHASE.ERROR;
                    break;
                case /* Parser.C. */RIGHT_BRACE : // }
                    phase = expect === EXPECT.ATTRIBUTE_PROPERTY
                                ? PHASE.END_OF_ATTRIBUTES
                          : expect === EXPECT.CSS_PROPERTY
                                ? PHASE.END_OF_STYLES
                                : PHASE.ERROR;
                    break;
                case /* Parser.C. */STRING :
                    switch( expect ){
                        case EXPECT.NODE_TYPE :
                        case EXPECT.TAG_NAME  :
                            phase = PHASE.TAG_NAME;
                            break;
                        case EXPECT.DOCUMENT_NODE_VALUE :
                            phase = PHASE.DOCUMENT_NODE_VALUE;
                            break;
                        case EXPECT.TEXT_NODE_VALUE :
                            phase = PHASE.TEXT_NODE_VALUE;
                            break;
                        case EXPECT.CDATA_SECTION_VALUE :
                            phase = PHASE.CDATA_SECTION_VALUE;
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
                            phase = PHASE.ATTRIBUTE_VALUE;
                            break;
                        case EXPECT.STYLES_START :
                            phase = PHASE.STYLES_START;
                            break;
                        case EXPECT.CSS_PROPERTY :
                            phase = PHASE.CSS_PROPERTY;
                            break;
                        case EXPECT.CSS_VALUE :
                            phase = PHASE.CSS_VALUE;
                            break;
                        case EXPECT.ATTRIBUTES_START  :
                        case EXPECT.CHILD_NODES_START :
                            closeStartTag = true;
                        case EXPECT.IN_CHILD_NODES :
                            phase = PHASE.TEXT_DATA;
                            break;
                        case EXPECT.PROCESSING_INSTRUCTION_NAME :
                            phase = PHASE.PROCESSING_INSTRUCTION_NAME;
                            break;
                        case EXPECT.INSTRUCTION_ATTRIBUTE_START :
                            phase = PHASE.INSTRUCTION_ATTRIBUTE_NAME;
                            break;
                        default :
                            phase = PHASE.ERROR;
                            break;
                    };
                    break;
                case /* Parser.C. */NUMBER :
                    switch( expect ){
                        case EXPECT.NODE_TYPE :
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
                        case EXPECT.ATTRIBUTES_START  :
                        case EXPECT.CHILD_NODES_START :
                            closeStartTag = true;
                        case EXPECT.IN_CHILD_NODES    :
                            phase = PHASE.TEXT_DATA;
                            value += '';
                            break;
                        case EXPECT.CDATA_SECTION_VALUE :
                            phase = PHASE.CDATA_SECTION_VALUE;
                            value += '';
                            break;
                        case EXPECT.COMMENT_NODE_VALUE:
                            phase = PHASE.COMMENT_NODE_VALUE;
                            value += '';
                            break;
                        default :
                            phase = PHASE.ERROR;
                            break;
                    };
                    break;
                case /* Parser.C. */TRUE :
                case /* Parser.C. */FALSE :
                case /* Parser.C. */NULL   :
                    phase = expect === EXPECT.ATTRIBUTE_VALUE
                            ? PHASE.ATTRIBUTE_VALUE
                            : PHASE.ERROR;
                    break;
                default :
                    phase = PHASE.ERROR;
            };
            // console.log( '. ' + phase );
        /** phase => expect */
            switch( phase ){
                case PHASE.NODE_START : // [
                    queue = closeParentStartTag();
                    expect = EXPECT.NODE_TYPE;
                    break;
            /** <!DOCTYPE html> */
                case PHASE.DOCUMENT_NODE_START:
                    expect = EXPECT.DOCUMENT_NODE_VALUE;
                    tree.push( HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE );
                    break;
                case PHASE.DOCUMENT_NODE_VALUE :
                    if( DEFINE_HTML2JSON__USE_XHTML ){
                        this._isXMLDocument = p_isXMLDocument( value );
                    };
                    queue  = value;
                    expect = EXPECT.CHILD_NODES_START;
                    break;
            /** DocumentFragment */
                case PHASE.DOCUMENT_FRAGMENT_NODE_START :
                    expect = EXPECT.CHILD_NODES_START ;
                    tree.push( HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE );
                    break;
            /** Element */
                case PHASE.ELEMENT_NODE_START :
                    expect = EXPECT.TAG_NAME;
                    break;
                case PHASE.TAG_NAME :
                    let tagName = m_parseTagName( /** @type {string} */ (value) );
                    const id        = tagName[ 1 ];
                    const className = tagName[ 2 ];
                    tagName = tagName[ 0 ];
                
                    queue = ( this._omittedEndTagBefore === 'p'&& EXCLUDE_FROM_P[ tagName ] ? '</p>' : '' ) + '<' + tagName;

                    this._omittedEndTagBefore = '';

                    if( id ){
                        queue += ' id=' + p_quotAttributeValue( id, this._useSingleQuot, this._quotAlways );
                    };
                    if( className ){
                        queue += ' class=' + p_quotAttributeValue( className, this._useSingleQuot, this._quotAlways );;
                    };

                    if( !this._noOmitEndTag ){
                        this._noOmitEndTag = !!NO_OMIT_END_TAG[ tagName ];
                    };
                    if( !this._skipEscapeForHTML ){
                        this._skipEscapeForHTML = !!SKIP_HTML_ESCAPE[ tagName ];
                    };
                    tree.push( tagName );
                    updateFlags();
                    expect = EXPECT.ATTRIBUTES_START;
                    break;
            /** Attribute */
                case PHASE.ATTRIBUTES_START :
                    expect = EXPECT.ATTRIBUTE_PROPERTY;
                    break;
                case PHASE.ATTRIBUTE_PROPERTY :
                    if( p_isInstructionAttr( this._attrPrefix, /** @type {string} */ (value) ) ){
                        this._attribute = value.substr( this._attrPrefix.length );
                        expect = EXPECT.INSTRUCTION_ATTRIBUTE_START;
                    } else {
                        this._attribute = value;
                        expect = value === 'style' ? EXPECT.STYLES_START : EXPECT.ATTRIBUTE_VALUE;
                    };
                    break;
                case PHASE.IN_INSTRUCTION_ATTRIBUTE :
                    expect = EXPECT.IN_INSTRUCTION_ATTRIBUTE;
                    break;
                case PHASE.INSTRUCTION_ATTRIBUTE_NAME :
                    this._functionName = value;
                    value = executeInstruction();
                case PHASE.ATTRIBUTE_VALUE :
                    queue  = createAttributeNodeString( value );
                    expect = EXPECT.ATTRIBUTE_PROPERTY;
                    break;
                case PHASE.END_OF_ATTRIBUTES :
                    expect = EXPECT.CHILD_NODES_START;
                    break;
            /** style */
                case PHASE.STYLES_START :
                    expect = EXPECT.CSS_PROPERTY;
                    break;
                case PHASE.CSS_PROPERTY :
                    this._cssPropety = value;
                    expect = EXPECT.CSS_VALUE;
                    break;
                case PHASE.CSS_VALUE :
                    if( value !== '' && value !== null ){
                        this._cssText += ';' + p_toSnakeCase( this._cssPropety ) + ':' + value;
                    };
                    expect = EXPECT.CSS_PROPERTY;
                    break;
                case PHASE.END_OF_STYLES :
                    if( this._cssText ){
                        queue = createAttributeNodeString( this._cssText.substr( 1 ) );
                        this._cssText = '';
                    };
                    expect = EXPECT.ATTRIBUTE_PROPERTY;
                    break;
            /** </endtag> */
                case PHASE.END_OF_NODE :
                    createEndTag( true );
                    break;
                case PHASE.CLOSE_EMPTY_ELEMENT :
                    createEndTag( false );
                    break;

            /** Text Node */
                case PHASE.TEXT_NODE_START:
                    expect = EXPECT.TEXT_NODE_VALUE;
                    tree.push( HTML_DOT_JSON__NODE_TYPE.TEXT_NODE );
                    break;
                case PHASE.TEXT_NODE_VALUE :
                    queue  = appendOmittedEndTagBasedOnFollowingNode() + escapeTextNodeValue( value );
                    expect = EXPECT.END_OF_NODE;
                    break;
                /** Text */
                case PHASE.TEXT_DATA :
                    queue  = closeParentStartTag() + appendOmittedEndTagBasedOnFollowingNode() + escapeTextNodeValue( value );
                    expect = EXPECT.IN_CHILD_NODES;
                    break;
            /** <![CDATA[ ]]> */
                case PHASE.CDATA_SECTION_START:
                    queue = '<![CDATA[';
                    expect = EXPECT.CDATA_SECTION_VALUE;
                    tree.push( HTML_DOT_JSON__NODE_TYPE.CDATA_SECTION );
                    break;
                case PHASE.CDATA_SECTION_VALUE:
                    queue = value;
                    expect = EXPECT.END_OF_NODE;
                    break;
            /** <!-- --> */
                case PHASE.COMMENT_NODE_START:
                    queue = '<!--';
                    expect = EXPECT.COMMENT_NODE_VALUE;
                    tree.push( HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE );
                    break;
                case PHASE.COMMENT_NODE_VALUE:
                    queue = value;
                    expect = EXPECT.END_OF_NODE;
                    break;
            /** <!--[if IE]> --> */
                case PHASE.COMMENT_HIDE_LOWER_START :
                    queue = '<!--[';
                    expect = EXPECT.COMMENT_HIDE_LOWER_FORMURA;
                    tree.push( HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER );
                    break;
                case PHASE.COMMENT_HIDE_LOWER_FORMURA :
                    queue = value + ']>';
                    expect = EXPECT.CHILD_NODES_START;
                    break;
            /** <!--[if IE]><!--> */
                case PHASE.COMMENT_SHOW_LOWER_START :
                    queue = '<!--[';
                    expect = EXPECT.COMMENT_SHOW_LOWER_FORMURA;
                    tree.push( HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER );
                    break;
                case PHASE.COMMENT_SHOW_LOWER_FORMURA :
                    queue = value + ']><!-->';
                    expect = EXPECT.CHILD_NODES_START;
                    break;
            /** <? func(...) ?> */
                case PHASE.PROCESSING_INSTRUCTION_START :
                    expect = EXPECT.PROCESSING_INSTRUCTION_NAME;
                    tree.push( HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION );
                    break;
                case PHASE.PROCESSING_INSTRUCTION_NAME :
                    this._functionName = value;
                    expect = EXPECT.PROCESSING_INSTRUCTION_ARGS;
                    break;

                default :
                    expect = EXPECT.ERROR;
                    break;
            };
    };

    // console.log( '- ' + queue, expect, this._tree );

    if( expect === EXPECT.ERROR ){
        this._onerror( 'Not html.json format!' );
        this._stream.emit( 'error', 'Not html.json format!' );
    } else {
        this._expect = expect;

        if( queue ){
            this._stream.queue( queue );
        };
    };
};
