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
    parser._expect        = DEFINE_HTML2JSON__EXPECT.NODE_START;
    parser._tree          = [];
    parser._args          = [];
    parser._onInstruction = onInstruction;
    parser._onerror       = typeof opt_onError === 'function' ? opt_onError : function( error ){};
    parser._quotAlways    = !!options[ 'quotAlways' ],
    parser._useSingleQuot = !!options[ 'useSingleQuot' ],
    parser._attrPrefix    = options[ 'instructionAttrPrefix' ] || DEFINE_HTML2JSON__INSTRUCTION_ATTR_PREFIX;
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
    if( this._parser._expect !== DEFINE_HTML2JSON__EXPECT.END_OF_DOCUMENT ){
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
            if( m_ATTRS_NO_VALUE[ self._attribute ] ){
                return ' ' + self._attribute;
            } else {
                return ' ' + self._attribute + '=' + m_quotAttributeValue( value, self._useSingleQuot, self._quotAlways );
            };
        };
        return '';
    };

    function createEndTag( childNodesContents ){
        const currentNode = tree.pop();
        
        expect = tree.length ? DEFINE_HTML2JSON__EXPECT.IN_CHILD_NODES : DEFINE_HTML2JSON__EXPECT.END_OF_DOCUMENT;

        switch( currentNode ){
            //case HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE :
            //case HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE :
                // expect = DEFINE_HTML2JSON__EXPECT.END_OF_DOCUMENT;
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
                if( m_isString( currentNode ) ){
                    const tagName = currentNode;

                    if( !childNodesContents ){
                        queue = self._isXMLDocument || self._isXmlInHTML ? ' />' : '>';
                    } else {
                        queue = '';
                    };
                    if(
                        ( !( self._isXMLDocument || self._isXmlInHTML ) || childNodesContents ) // XML ではない、または、子を持つ
                        &&
                        ( !m_OMITTABLE_END_TAGS[ tagName ] || self._endTagRequired ) // 閉じタグを省略しない、または親要素によって省略できない
                    ){
                        queue += '</' + tagName + '>';
                        self._omittedEndTagBefore = '';
                    } else {
                        self._omittedEndTagBefore = m_NO_CHILD_ELEMENTS[ tagName ] ? '' : tagName;
                    };
                    // update flags
                    updateFlags();
                };
                break;
        };
    };

    function updateFlags(){
        self._endTagRequired = self._escapeForHTMLDisabled = self._isXmlInHTML = false;

        for( let i = 0, l = tree.length; i < l; ++i ){
            const tagName = tree[ i ];

            if( tagName === HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER || tagName === HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER ){
                self._endTagRequired = true;
            } else if( m_isString( tagName ) ){
                if( m_CHILDREN_MUST_HAVE_END_TAGS[ tagName ] ){
                    self._endTagRequired = true;
                };
                if( m_UNESCAPED_TAGS[ tagName ] ){
                    self._escapeForHTMLDisabled = true;
                };
                if( m_IS_XML_ROOT[ tagName ] || m_isNamespacedTag( tagName ) ){
                    self._isXmlInHTML = true;
                };
            };
        };
    };

    function closeParentStartTag(){
        return closeStartTag && m_isString( tree[ tree.length - 1 ] ) ? '>' : '';
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
        return self._escapeForHTMLDisabled ? '' + value : m_escapeForHTML( '' + value );
    };

    switch( expect ){
        case DEFINE_HTML2JSON__EXPECT.PROCESSING_INSTRUCTION_ARGS :
            switch( token ){
                case /* Parser.C. */LEFT_BRACKET : // [
                case /* Parser.C. */LEFT_BRACE   : // {
                    this._createValue( token, value );
                    return;
                case /* Parser.C. */RIGHT_BRACKET : // ]
                    if( this.stack.length === 0 ){ // end of arguments
                        const result = executeInstruction();

                        if( m_isArray( result ) ){
                            m_endTagRequired   = this._endTagRequired;
                            m_escapeForHTMLDisabled = this._escapeForHTMLDisabled;
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
                            m_endTagRequired = m_escapeForHTMLDisabled = m_isXMLDocument = false;
                        } else {
                            queue = m_isStringOrNumber( result ) ? '' + result : '';
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
                    expect = DEFINE_HTML2JSON__EXPECT.ERROR;
                    break;
            };
            break;
        case DEFINE_HTML2JSON__EXPECT.IN_INSTRUCTION_ATTRIBUTE :
            switch( token ){
                case /* Parser.C. */LEFT_BRACKET : // [
                case /* Parser.C. */LEFT_BRACE   : // {
                    this._createValue( token, value );
                    return;
                case /* Parser.C. */RIGHT_BRACKET : // ]
                    if( this.stack.length === 0 ){ // end of arguments
                        // !_functionName => error
                        queue  = createAttributeNodeString( executeInstruction() );
                        expect = DEFINE_HTML2JSON__EXPECT.ATTRIBUTE_PROPERTY;
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
                    expect = DEFINE_HTML2JSON__EXPECT.ERROR;
                    break;
            };
            break;
        default :
        /** expect => phase */
            switch( token ){
                case /* Parser.C. */LEFT_BRACKET : // [
                    switch( expect ){
                        case DEFINE_HTML2JSON__EXPECT.ATTRIBUTES_START  :
                        case DEFINE_HTML2JSON__EXPECT.CHILD_NODES_START :
                            closeStartTag = true;
                        case DEFINE_HTML2JSON__EXPECT.NODE_START     :
                        case DEFINE_HTML2JSON__EXPECT.IN_CHILD_NODES :
                            phase = DEFINE_HTML2JSON__PHASE.NODE_START;
                            break;
                        case DEFINE_HTML2JSON__EXPECT.INSTRUCTION_ATTRIBUTE_START :
                            phase = DEFINE_HTML2JSON__PHASE.IN_INSTRUCTION_ATTRIBUTE;
                            break;
                        default :
                            phase = DEFINE_HTML2JSON__PHASE.ERROR;
                            break;
                    };
                    break;
                case /* Parser.C. */RIGHT_BRACKET : // ]
                    phase = expect === DEFINE_HTML2JSON__EXPECT.ATTRIBUTES_START || expect === DEFINE_HTML2JSON__EXPECT.CHILD_NODES_START
                                ? DEFINE_HTML2JSON__PHASE.CLOSE_EMPTY_ELEMENT
                          : expect === DEFINE_HTML2JSON__EXPECT.IN_CHILD_NODES || expect === DEFINE_HTML2JSON__EXPECT.END_OF_NODE
                                ? DEFINE_HTML2JSON__PHASE.END_OF_NODE
                                : DEFINE_HTML2JSON__PHASE.ERROR;
                    break;
                case /* Parser.C. */LEFT_BRACE : // {
                    phase = expect === DEFINE_HTML2JSON__EXPECT.ATTRIBUTES_START
                                ? DEFINE_HTML2JSON__PHASE.ATTRIBUTES_START
                          : expect === DEFINE_HTML2JSON__EXPECT.STYLES_START
                                ? DEFINE_HTML2JSON__PHASE.STYLES_START
                                : DEFINE_HTML2JSON__PHASE.ERROR;
                    break;
                case /* Parser.C. */RIGHT_BRACE : // }
                    phase = expect === DEFINE_HTML2JSON__EXPECT.ATTRIBUTE_PROPERTY
                                ? DEFINE_HTML2JSON__PHASE.END_OF_ATTRIBUTES
                          : expect === DEFINE_HTML2JSON__EXPECT.CSS_PROPERTY
                                ? DEFINE_HTML2JSON__PHASE.END_OF_STYLES
                                : DEFINE_HTML2JSON__PHASE.ERROR;
                    break;
                case /* Parser.C. */STRING :
                    switch( expect ){
                        case DEFINE_HTML2JSON__EXPECT.NODE_TYPE :
                        case DEFINE_HTML2JSON__EXPECT.TAG_NAME  :
                            phase = DEFINE_HTML2JSON__PHASE.TAG_NAME;
                            break;
                        case DEFINE_HTML2JSON__EXPECT.DOCUMENT_NODE_VALUE :
                            phase = DEFINE_HTML2JSON__PHASE.DOCUMENT_NODE_VALUE;
                            break;
                        case DEFINE_HTML2JSON__EXPECT.TEXT_NODE_VALUE :
                            phase = DEFINE_HTML2JSON__PHASE.TEXT_NODE_VALUE;
                            break;
                        case DEFINE_HTML2JSON__EXPECT.CDATA_SECTION_VALUE :
                            phase = DEFINE_HTML2JSON__PHASE.CDATA_SECTION_VALUE;
                            break;
                        case DEFINE_HTML2JSON__EXPECT.COMMENT_NODE_VALUE:
                            phase = DEFINE_HTML2JSON__PHASE.COMMENT_NODE_VALUE;
                            break;
                        case DEFINE_HTML2JSON__EXPECT.COMMENT_HIDE_LOWER_FORMURA:
                            phase = DEFINE_HTML2JSON__PHASE.COMMENT_HIDE_LOWER_FORMURA;
                            break;
                        case DEFINE_HTML2JSON__EXPECT.COMMENT_SHOW_LOWER_FORMURA:
                            phase = DEFINE_HTML2JSON__PHASE.COMMENT_SHOW_LOWER_FORMURA;
                            break;
                        case DEFINE_HTML2JSON__EXPECT.ATTRIBUTE_PROPERTY :
                            phase = DEFINE_HTML2JSON__PHASE.ATTRIBUTE_PROPERTY;
                            break;
                        case DEFINE_HTML2JSON__EXPECT.ATTRIBUTE_VALUE :
                            phase = DEFINE_HTML2JSON__PHASE.ATTRIBUTE_VALUE;
                            break;
                        case DEFINE_HTML2JSON__EXPECT.STYLES_START :
                            phase = DEFINE_HTML2JSON__PHASE.STYLES_START;
                            break;
                        case DEFINE_HTML2JSON__EXPECT.CSS_PROPERTY :
                            phase = DEFINE_HTML2JSON__PHASE.CSS_PROPERTY;
                            break;
                        case DEFINE_HTML2JSON__EXPECT.CSS_VALUE :
                            phase = DEFINE_HTML2JSON__PHASE.CSS_VALUE;
                            break;
                        case DEFINE_HTML2JSON__EXPECT.ATTRIBUTES_START  :
                        case DEFINE_HTML2JSON__EXPECT.CHILD_NODES_START :
                            closeStartTag = true;
                        case DEFINE_HTML2JSON__EXPECT.IN_CHILD_NODES :
                            phase = DEFINE_HTML2JSON__PHASE.TEXT_DATA;
                            break;
                        case DEFINE_HTML2JSON__EXPECT.PROCESSING_INSTRUCTION_NAME :
                            phase = DEFINE_HTML2JSON__PHASE.PROCESSING_INSTRUCTION_NAME;
                            break;
                        case DEFINE_HTML2JSON__EXPECT.INSTRUCTION_ATTRIBUTE_START :
                            phase = DEFINE_HTML2JSON__PHASE.INSTRUCTION_ATTRIBUTE_NAME;
                            break;
                        default :
                            phase = DEFINE_HTML2JSON__PHASE.ERROR;
                            break;
                    };
                    break;
                case /* Parser.C. */NUMBER :
                    switch( expect ){
                        case DEFINE_HTML2JSON__EXPECT.NODE_TYPE :
                            phase = value; // nodeType
                            break;
                        case DEFINE_HTML2JSON__EXPECT.ATTRIBUTE_VALUE :
                            phase = DEFINE_HTML2JSON__PHASE.ATTRIBUTE_VALUE;
                            break;
                        case DEFINE_HTML2JSON__EXPECT.CSS_VALUE :
                            phase = DEFINE_HTML2JSON__PHASE.CSS_VALUE;
                            break;
                        case DEFINE_HTML2JSON__EXPECT.TEXT_NODE_VALUE :
                            phase = DEFINE_HTML2JSON__PHASE.TEXT_NODE_VALUE;
                            break;
                        case DEFINE_HTML2JSON__EXPECT.ATTRIBUTES_START  :
                        case DEFINE_HTML2JSON__EXPECT.CHILD_NODES_START :
                            closeStartTag = true;
                        case DEFINE_HTML2JSON__EXPECT.IN_CHILD_NODES    :
                            phase = DEFINE_HTML2JSON__PHASE.TEXT_DATA;
                            value += '';
                            break;
                        case DEFINE_HTML2JSON__EXPECT.CDATA_SECTION_VALUE :
                            phase = DEFINE_HTML2JSON__PHASE.CDATA_SECTION_VALUE;
                            value += '';
                            break;
                        case DEFINE_HTML2JSON__EXPECT.COMMENT_NODE_VALUE:
                            phase = DEFINE_HTML2JSON__PHASE.COMMENT_NODE_VALUE;
                            value += '';
                            break;
                        default :
                            phase = DEFINE_HTML2JSON__PHASE.ERROR;
                            break;
                    };
                    break;
                case /* Parser.C. */TRUE :
                case /* Parser.C. */FALSE :
                case /* Parser.C. */NULL   :
                    phase = expect === DEFINE_HTML2JSON__EXPECT.ATTRIBUTE_VALUE
                            ? DEFINE_HTML2JSON__PHASE.ATTRIBUTE_VALUE
                            : DEFINE_HTML2JSON__PHASE.ERROR;
                    break;
                default :
                    phase = DEFINE_HTML2JSON__PHASE.ERROR;
            };
            // console.log( '. ' + phase );
        /** phase => expect */
            switch( phase ){
                case DEFINE_HTML2JSON__PHASE.NODE_START : // [
                    queue  = closeParentStartTag();
                    expect = DEFINE_HTML2JSON__EXPECT.NODE_TYPE;
                    break;
            /** <!DOCTYPE html> */
                case DEFINE_HTML2JSON__PHASE.DOCUMENT_NODE_START:
                    expect = DEFINE_HTML2JSON__EXPECT.DOCUMENT_NODE_VALUE;
                    tree.push( HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE );
                    break;
                case DEFINE_HTML2JSON__PHASE.DOCUMENT_NODE_VALUE :
                    if( DEFINE_HTML2JSON__USE_XHTML ){
                        this._isXMLDocument = m_isXML( value );
                    };
                    queue  = value;
                    expect = DEFINE_HTML2JSON__EXPECT.CHILD_NODES_START;
                    break;
            /** DocumentFragment */
                case DEFINE_HTML2JSON__PHASE.DOCUMENT_FRAGMENT_NODE_START :
                    expect = DEFINE_HTML2JSON__EXPECT.CHILD_NODES_START ;
                    tree.push( HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE );
                    break;
            /** Element */
                case DEFINE_HTML2JSON__PHASE.ELEMENT_NODE_START :
                    expect = DEFINE_HTML2JSON__EXPECT.TAG_NAME;
                    break;
                case DEFINE_HTML2JSON__PHASE.TAG_NAME :
                    let tagName = m_parseTagName( /** @type {string} */ (value) );
                    const id        = tagName[ 1 ];
                    const className = tagName[ 2 ];
                    tagName = tagName[ 0 ];
                
                    queue = ( this._omittedEndTagBefore === 'p'&& !m_P_END_TAG_LESS_TAGS[ tagName ] ? '</p>' : '' ) + '<' + tagName;

                    this._omittedEndTagBefore = '';

                    if( id ){
                        queue += ' id=' + m_quotAttributeValue( id, this._useSingleQuot, this._quotAlways );
                    };
                    if( className ){
                        queue += ' class=' + m_quotAttributeValue( className, this._useSingleQuot, this._quotAlways );;
                    };

                    if( !this._endTagRequired ){
                        this._endTagRequired = !!m_CHILDREN_MUST_HAVE_END_TAGS[ tagName ];
                    };
                    if( !this._escapeForHTMLDisabled ){
                        this._escapeForHTMLDisabled = !!m_UNESCAPED_TAGS[ tagName ];
                    };
                    tree.push( tagName );
                    updateFlags();
                    expect = DEFINE_HTML2JSON__EXPECT.ATTRIBUTES_START;
                    break;
            /** Attribute */
                case DEFINE_HTML2JSON__PHASE.ATTRIBUTES_START :
                    expect = DEFINE_HTML2JSON__EXPECT.ATTRIBUTE_PROPERTY;
                    break;
                case DEFINE_HTML2JSON__PHASE.ATTRIBUTE_PROPERTY :
                    if( m_isInstructionAttr( this._attrPrefix, /** @type {string} */ (value) ) ){
                        this._attribute = value.substr( this._attrPrefix.length );
                        expect = DEFINE_HTML2JSON__EXPECT.INSTRUCTION_ATTRIBUTE_START;
                    } else {
                        this._attribute = value;
                        expect = value === 'style' ? DEFINE_HTML2JSON__EXPECT.STYLES_START : DEFINE_HTML2JSON__EXPECT.ATTRIBUTE_VALUE;
                    };
                    break;
                case DEFINE_HTML2JSON__PHASE.IN_INSTRUCTION_ATTRIBUTE :
                    expect = DEFINE_HTML2JSON__EXPECT.IN_INSTRUCTION_ATTRIBUTE;
                    break;
                case DEFINE_HTML2JSON__PHASE.INSTRUCTION_ATTRIBUTE_NAME :
                    this._functionName = value;
                    value = executeInstruction();
                case DEFINE_HTML2JSON__PHASE.ATTRIBUTE_VALUE :
                    queue  = createAttributeNodeString( value );
                    expect = DEFINE_HTML2JSON__EXPECT.ATTRIBUTE_PROPERTY;
                    break;
                case DEFINE_HTML2JSON__PHASE.END_OF_ATTRIBUTES :
                    expect = DEFINE_HTML2JSON__EXPECT.CHILD_NODES_START;
                    break;
            /** style */
                case DEFINE_HTML2JSON__PHASE.STYLES_START :
                    expect = DEFINE_HTML2JSON__EXPECT.CSS_PROPERTY;
                    break;
                case DEFINE_HTML2JSON__PHASE.CSS_PROPERTY :
                    this._cssPropety = value;
                    expect = DEFINE_HTML2JSON__EXPECT.CSS_VALUE;
                    break;
                case DEFINE_HTML2JSON__PHASE.CSS_VALUE :
                    if( value !== '' && value !== null ){
                        this._cssText += ';' + m_toSnakeCase( this._cssPropety ) + ':' + value;
                    };
                    expect = DEFINE_HTML2JSON__EXPECT.CSS_PROPERTY;
                    break;
                case DEFINE_HTML2JSON__PHASE.END_OF_STYLES :
                    if( this._cssText ){
                        queue = createAttributeNodeString( this._cssText.substr( 1 ) );
                        this._cssText = '';
                    };
                    expect = DEFINE_HTML2JSON__EXPECT.ATTRIBUTE_PROPERTY;
                    break;
            /** </endtag> */
                case DEFINE_HTML2JSON__PHASE.END_OF_NODE :
                    createEndTag( true );
                    break;
                case DEFINE_HTML2JSON__PHASE.CLOSE_EMPTY_ELEMENT :
                    createEndTag( false );
                    break;

            /** Text Node */
                case DEFINE_HTML2JSON__PHASE.TEXT_NODE_START:
                    expect = DEFINE_HTML2JSON__EXPECT.TEXT_NODE_VALUE;
                    tree.push( HTML_DOT_JSON__NODE_TYPE.TEXT_NODE );
                    break;
                case DEFINE_HTML2JSON__PHASE.TEXT_NODE_VALUE :
                    queue  = appendOmittedEndTagBasedOnFollowingNode() + escapeTextNodeValue( value );
                    expect = DEFINE_HTML2JSON__EXPECT.END_OF_NODE;
                    break;
                /** Text */
                case DEFINE_HTML2JSON__PHASE.TEXT_DATA :
                    queue  = closeParentStartTag() + appendOmittedEndTagBasedOnFollowingNode() + escapeTextNodeValue( value );
                    expect = DEFINE_HTML2JSON__EXPECT.IN_CHILD_NODES;
                    break;
            /** <![CDATA[ ]]> */
                case DEFINE_HTML2JSON__PHASE.CDATA_SECTION_START:
                    queue  = '<![CDATA[';
                    expect = DEFINE_HTML2JSON__EXPECT.CDATA_SECTION_VALUE;
                    tree.push( HTML_DOT_JSON__NODE_TYPE.CDATA_SECTION );
                    break;
                case DEFINE_HTML2JSON__PHASE.CDATA_SECTION_VALUE:
                    queue  = value;
                    expect = DEFINE_HTML2JSON__EXPECT.END_OF_NODE;
                    break;
            /** <!-- --> */
                case DEFINE_HTML2JSON__PHASE.COMMENT_NODE_START:
                    queue  = '<!--';
                    expect = DEFINE_HTML2JSON__EXPECT.COMMENT_NODE_VALUE;
                    tree.push( HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE );
                    break;
                case DEFINE_HTML2JSON__PHASE.COMMENT_NODE_VALUE:
                    queue  = value;
                    expect = DEFINE_HTML2JSON__EXPECT.END_OF_NODE;
                    break;
            /** <!--[if IE]> --> */
                case DEFINE_HTML2JSON__PHASE.COMMENT_HIDE_LOWER_START :
                    queue  = appendOmittedEndTagBasedOnFollowingNode() + '<!--[';
                    expect = DEFINE_HTML2JSON__EXPECT.COMMENT_HIDE_LOWER_FORMURA;
                    tree.push( HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER );
                    break;
                case DEFINE_HTML2JSON__PHASE.COMMENT_HIDE_LOWER_FORMURA :
                    queue = value + ']>';
                    expect = DEFINE_HTML2JSON__EXPECT.CHILD_NODES_START;
                    break;
            /** <!--[if IE]><!--> */
                case DEFINE_HTML2JSON__PHASE.COMMENT_SHOW_LOWER_START :
                    queue  = appendOmittedEndTagBasedOnFollowingNode() + '<!--[';
                    expect = DEFINE_HTML2JSON__EXPECT.COMMENT_SHOW_LOWER_FORMURA;
                    tree.push( HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER );
                    break;
                case DEFINE_HTML2JSON__PHASE.COMMENT_SHOW_LOWER_FORMURA :
                    queue  = value + ']><!-->';
                    expect = DEFINE_HTML2JSON__EXPECT.CHILD_NODES_START;
                    break;
            /** <? func(...) ?> */
                case DEFINE_HTML2JSON__PHASE.PROCESSING_INSTRUCTION_START :
                    expect = DEFINE_HTML2JSON__EXPECT.PROCESSING_INSTRUCTION_NAME;
                    tree.push( HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION );
                    break;
                case DEFINE_HTML2JSON__PHASE.PROCESSING_INSTRUCTION_NAME :
                    this._functionName = value;
                    expect = DEFINE_HTML2JSON__EXPECT.PROCESSING_INSTRUCTION_ARGS;
                    break;

                default :
                    expect = DEFINE_HTML2JSON__EXPECT.ERROR;
                    break;
            };
    };

    // console.log( '- ' + queue, expect, this._tree );

    if( expect === DEFINE_HTML2JSON__EXPECT.ERROR ){
        this._onerror( 'Not html.json format!' );
        this._stream.emit( 'error', 'Not html.json format!' );
    } else {
        this._expect = expect;

        if( queue ){
            this._stream.queue( queue );
        };
    };
};
