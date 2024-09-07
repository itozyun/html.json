goog.provide( 'htmljson.streamjson2html' );

goog.require( 'htmljson.NODE_TYPE' );
goog.require( 'htmljson.PHASE' );
goog.require( 'htmljson.EXPECT' );
goog.require( 'htmljson.DEFINE.INSTRUCTION_ATTR_PREFIX' );
goog.require( 'htmljson.DEFINE.USE_XHTML' );

// https://raw.githubusercontent.com/dominictarr/JSONStream/master/index.js

// const Parser = require( 'jsonparse' );

// const through = require( 'through' );

const bufferFrom = Buffer.from && Buffer.from !== Uint8Array.from;

/**
 * @param {!function(string, ...*):(!Array|string|number|boolean|null|void)} onInstruction
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
    parser._expect        = htmljson.EXPECT.NODE_START;
    parser._tree          = [];
    parser._args          = [];
    parser._onInstruction = onInstruction;
    parser._onerror       = typeof opt_onError === 'function' ? opt_onError : function( error ){};
    parser._quotAlways    = !!options[ 'quotAlways' ],
    parser._useSingleQuot = !!options[ 'useSingleQuot' ],
    parser._attrPrefix    = options[ 'instructionAttrPrefix' ] || htmljson.DEFINE.INSTRUCTION_ATTR_PREFIX;
    parser._cssText       = '';

    return parser._stream = stream;
};

module.exports.DOCUMENT_NODE                 = htmljson.NODE_TYPE.DOCUMENT_NODE;
module.exports.DOCUMENT_FRAGMENT_NODE        = htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE;
module.exports.ELEMENT_NODE                  = htmljson.NODE_TYPE.ELEMENT_NODE;
module.exports.TEXT_NODE                     = htmljson.NODE_TYPE.TEXT_NODE;
module.exports.CDATA_SECTION                 = htmljson.NODE_TYPE.CDATA_SECTION;
module.exports.PROCESSING_INSTRUCTION        = htmljson.NODE_TYPE.PROCESSING_INSTRUCTION;
module.exports.COMMENT_NODE                  = htmljson.NODE_TYPE.COMMENT_NODE;
module.exports.COND_CMT_HIDE_LOWER           = htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER;
module.exports.COND_CMT_SHOW_LOWER_START     = htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START;
module.exports.COND_CMT_SHOW_LOWER_END       = htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_END;
module.exports.NETSCAPE4_COND_CMT_HIDE_LOWER = htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER;
module.exports.ELEMENT_WITHOUT_END_TAG       = htmljson.NODE_TYPE.ELEMENT_WITHOUT_END_TAG;
module.exports.ELEMENT_WITHOUT_START_TAG     = htmljson.NODE_TYPE.ELEMENT_WITHOUT_START_TAG;

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
    if( this._parser._expect !== htmljson.EXPECT.END_OF_DOCUMENT ){
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

    function executeProcessingInstruction(){
        const result = self._args.length
                     ? self._onInstruction.call( self._stream, self._functionName, self._args )
                     : self._onInstruction.call( self._stream, self._functionName );

        self._functionName = null;
        self._args.length  = 0;
        return result;
    };

    function executeInstructionAttr(){
        self._args.unshift( self._functionName );

        const result = m_executeInstructionAttr( true, self._onInstruction.bind( self._stream ), self._attribute, self._args, self._onerror );

        self._functionName = null;
        self._args.length  = 0;
        return result;
    };

    function createAttributeNodeString( value ){
        if( value != null ){
            if( m_ATTRS_NO_VALUE[ self._attribute ] ){
                if( value !== false ){
                    return ' ' + self._attribute;
                };
            } else {
                return ' ' + self._attribute + '=' + m_quoteAttributeValue( value, self._useSingleQuot, self._quotAlways );
            };
        };
        return '';
    };

    function createEndTag( childNodesContents ){
        const currentNode = tree.pop();
        
        expect = tree.length ? htmljson.EXPECT.IN_CHILD_NODES : htmljson.EXPECT.END_OF_DOCUMENT;

        switch( currentNode ){
            //case htmljson.NODE_TYPE.DOCUMENT_NODE :
            //case htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE :
                // expect = htmljson.EXPECT.END_OF_DOCUMENT;
            //case htmljson.NODE_TYPE.TEXT_NODE :
            //case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION :
                //break;
            case htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER :
                queue = '<![endif]-->';
                break;
            case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START :
                queue = '<!--<![endif]-->';
                break;
            case htmljson.NODE_TYPE.CDATA_SECTION :
                queue = ']]>';
                break;
            case htmljson.NODE_TYPE.COMMENT_NODE :
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

            if( tagName === htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER || tagName === htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START ){
                self._endTagRequired = true;
            } else if( m_isString( tagName ) ){
                if( m_CHILDREN_MUST_HAVE_END_TAGS[ tagName ] ){
                    self._endTagRequired = true;
                };
                if( m_UNESCAPED_TAGS[ tagName ] ){
                    self._escapeForHTMLDisabled = true;
                };
                if( m_TAGNAME_TO_NAMESPACE[ tagName ] || m_isNamespacedTag( tagName ) ){
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
        case htmljson.EXPECT.PROCESSING_INSTRUCTION_ARGS :
            switch( token ){
                case /* Parser.C. */LEFT_BRACKET : // [
                case /* Parser.C. */LEFT_BRACE   : // {
                    this._createValue( token, value );
                    return;
                case /* Parser.C. */RIGHT_BRACKET : // ]
                    if( this.stack.length === 0 ){ // end of arguments
                        const result = executeProcessingInstruction();

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
                    expect = htmljson.EXPECT.ERROR;
                    break;
            };
            break;
        case htmljson.EXPECT.IN_INSTRUCTION_ATTRIBUTE :
            switch( token ){
                case /* Parser.C. */LEFT_BRACKET : // [
                case /* Parser.C. */LEFT_BRACE   : // {
                    this._createValue( token, value );
                    return;
                case /* Parser.C. */RIGHT_BRACKET : // ]
                    if( this.stack.length === 0 ){ // end of arguments
                        // !_functionName => error
                        queue  = createAttributeNodeString( executeInstructionAttr() );
                        expect = htmljson.EXPECT.ATTRIBUTE_PROPERTY;
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
                    expect = htmljson.EXPECT.ERROR;
                    break;
            };
            break;
        default :
        /** expect => phase */
            switch( token ){
                case /* Parser.C. */LEFT_BRACKET : // [
                    switch( expect ){
                        case htmljson.EXPECT.ATTRIBUTES_START  :
                        case htmljson.EXPECT.CHILD_NODES_START :
                            closeStartTag = true;
                        case htmljson.EXPECT.NODE_START     :
                        case htmljson.EXPECT.IN_CHILD_NODES :
                            phase = htmljson.PHASE.NODE_START;
                            break;
                        case htmljson.EXPECT.INSTRUCTION_ATTRIBUTE_START :
                            phase = htmljson.PHASE.IN_INSTRUCTION_ATTRIBUTE;
                            break;
                        default :
                            phase = htmljson.PHASE.ERROR;
                            break;
                    };
                    break;
                case /* Parser.C. */RIGHT_BRACKET : // ]
                    phase = expect === htmljson.EXPECT.ATTRIBUTES_START || expect === htmljson.EXPECT.CHILD_NODES_START
                                ? htmljson.PHASE.CLOSE_EMPTY_ELEMENT
                          : expect === htmljson.EXPECT.IN_CHILD_NODES || expect === htmljson.EXPECT.END_OF_NODE
                                ? htmljson.PHASE.END_OF_NODE
                                : htmljson.PHASE.ERROR;
                    break;
                case /* Parser.C. */LEFT_BRACE : // {
                    phase = expect === htmljson.EXPECT.ATTRIBUTES_START
                                ? htmljson.PHASE.ATTRIBUTES_START
                          : expect === htmljson.EXPECT.STYLES_START
                                ? htmljson.PHASE.STYLES_START
                                : htmljson.PHASE.ERROR;
                    break;
                case /* Parser.C. */RIGHT_BRACE : // }
                    phase = expect === htmljson.EXPECT.ATTRIBUTE_PROPERTY
                                ? htmljson.PHASE.END_OF_ATTRIBUTES
                          : expect === htmljson.EXPECT.CSS_PROPERTY
                                ? htmljson.PHASE.END_OF_STYLES
                                : htmljson.PHASE.ERROR;
                    break;
                case /* Parser.C. */STRING :
                    switch( expect ){
                        case htmljson.EXPECT.NODE_TYPE :
                        case htmljson.EXPECT.TAG_NAME  :
                            phase = htmljson.PHASE.TAG_NAME;
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
                        case htmljson.EXPECT.COND_CMT_SHOW_LOWER_FORMURA:
                            phase = htmljson.PHASE.COND_CMT_SHOW_LOWER_FORMURA;
                            break;
                        case htmljson.EXPECT.ATTRIBUTE_PROPERTY :
                            phase = htmljson.PHASE.ATTRIBUTE_PROPERTY;
                            break;
                        case htmljson.EXPECT.ATTRIBUTE_VALUE :
                            phase = htmljson.PHASE.ATTRIBUTE_VALUE;
                            break;
                        case htmljson.EXPECT.STYLES_START :
                            phase = htmljson.PHASE.STYLES_START;
                            break;
                        case htmljson.EXPECT.CSS_PROPERTY :
                            phase = htmljson.PHASE.CSS_PROPERTY;
                            break;
                        case htmljson.EXPECT.CSS_VALUE :
                            phase = htmljson.PHASE.CSS_VALUE;
                            break;
                        case htmljson.EXPECT.ATTRIBUTES_START  :
                        case htmljson.EXPECT.CHILD_NODES_START :
                            closeStartTag = true;
                        case htmljson.EXPECT.IN_CHILD_NODES :
                            phase = htmljson.PHASE.TEXT_DATA;
                            break;
                        case htmljson.EXPECT.PROCESSING_INSTRUCTION_NAME :
                            phase = htmljson.PHASE.PROCESSING_INSTRUCTION_NAME;
                            break;
                        case htmljson.EXPECT.INSTRUCTION_ATTRIBUTE_START :
                            phase = htmljson.PHASE.INSTRUCTION_ATTRIBUTE_NAME;
                            break;
                        default :
                            phase = htmljson.PHASE.ERROR;
                            break;
                    };
                    break;
                case /* Parser.C. */NUMBER :
                    switch( expect ){
                        case htmljson.EXPECT.NODE_TYPE :
                            phase = value; // nodeType
                            break;
                        case htmljson.EXPECT.ATTRIBUTE_VALUE :
                            phase = htmljson.PHASE.ATTRIBUTE_VALUE;
                            break;
                        case htmljson.EXPECT.CSS_VALUE :
                            phase = htmljson.PHASE.CSS_VALUE;
                            break;
                        case htmljson.EXPECT.TEXT_NODE_VALUE :
                            phase = htmljson.PHASE.TEXT_NODE_VALUE;
                            break;
                        case htmljson.EXPECT.ATTRIBUTES_START  :
                        case htmljson.EXPECT.CHILD_NODES_START :
                            closeStartTag = true;
                        case htmljson.EXPECT.IN_CHILD_NODES    :
                            phase = htmljson.PHASE.TEXT_DATA;
                            value += '';
                            break;
                        case htmljson.EXPECT.CDATA_SECTION_VALUE :
                            phase = htmljson.PHASE.CDATA_SECTION_VALUE;
                            value += '';
                            break;
                        case htmljson.EXPECT.COMMENT_NODE_VALUE:
                            phase = htmljson.PHASE.COMMENT_NODE_VALUE;
                            value += '';
                            break;
                        default :
                            phase = htmljson.PHASE.ERROR;
                            break;
                    };
                    break;
                case /* Parser.C. */TRUE :
                case /* Parser.C. */FALSE :
                case /* Parser.C. */NULL   :
                    phase = expect === htmljson.EXPECT.ATTRIBUTE_VALUE
                            ? htmljson.PHASE.ATTRIBUTE_VALUE
                            : htmljson.PHASE.ERROR;
                    break;
                default :
                    phase = htmljson.PHASE.ERROR;
            };
            // console.log( '. ' + phase );
        /** phase => expect */
            switch( phase ){
                case htmljson.PHASE.NODE_START : // [
                    queue  = closeParentStartTag();
                    expect = htmljson.EXPECT.NODE_TYPE;
                    break;
            /** <!DOCTYPE html> */
                case htmljson.PHASE.DOCUMENT_NODE_START:
                    expect = htmljson.EXPECT.DOCUMENT_NODE_VALUE;
                    tree.push( htmljson.NODE_TYPE.DOCUMENT_NODE );
                    break;
                case htmljson.PHASE.DOCUMENT_NODE_VALUE :
                    if( htmljson.DEFINE.USE_XHTML ){
                        this._isXMLDocument = m_isXML( value );
                    };
                    queue  = value;
                    expect = htmljson.EXPECT.CHILD_NODES_START;
                    break;
            /** DocumentFragment */
                case htmljson.PHASE.DOCUMENT_FRAGMENT_NODE_START :
                    expect = htmljson.EXPECT.CHILD_NODES_START ;
                    tree.push( htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE );
                    break;
            /** Element */
                case htmljson.PHASE.ELEMENT_NODE_START :
                    expect = htmljson.EXPECT.TAG_NAME;
                    break;
                case htmljson.PHASE.TAG_NAME :
                    let tagName = m_parseTagName( /** @type {string} */ (value) );
                    const id        = tagName[ 1 ];
                    const className = tagName[ 2 ];
                    tagName = tagName[ 0 ];
                
                    queue = ( this._omittedEndTagBefore === 'p'&& !m_P_END_TAG_LESS_TAGS[ tagName ] ? '</p>' : '' ) + '<' + tagName;

                    this._omittedEndTagBefore = '';

                    if( id ){
                        queue += ' id=' + m_quoteAttributeValue( id, this._useSingleQuot, this._quotAlways );
                    };
                    if( className ){
                        queue += ' class=' + m_quoteAttributeValue( className, this._useSingleQuot, this._quotAlways );;
                    };

                    if( !this._endTagRequired ){
                        this._endTagRequired = !!m_CHILDREN_MUST_HAVE_END_TAGS[ tagName ];
                    };
                    if( !this._escapeForHTMLDisabled ){
                        this._escapeForHTMLDisabled = !!m_UNESCAPED_TAGS[ tagName ];
                    };
                    tree.push( tagName );
                    updateFlags();
                    expect = htmljson.EXPECT.ATTRIBUTES_START;
                    break;
            /** Attribute */
                case htmljson.PHASE.ATTRIBUTES_START :
                    expect = htmljson.EXPECT.ATTRIBUTE_PROPERTY;
                    break;
                case htmljson.PHASE.ATTRIBUTE_PROPERTY :
                    if( m_isInstructionAttr( this._attrPrefix, /** @type {string} */ (value) ) ){
                        this._attribute = value.substr( this._attrPrefix.length );
                        expect = htmljson.EXPECT.INSTRUCTION_ATTRIBUTE_START;
                    } else {
                        this._attribute = value;
                        expect = value === 'style' ? htmljson.EXPECT.STYLES_START : htmljson.EXPECT.ATTRIBUTE_VALUE;
                    };
                    break;
                case htmljson.PHASE.IN_INSTRUCTION_ATTRIBUTE :
                    expect = htmljson.EXPECT.IN_INSTRUCTION_ATTRIBUTE;
                    break;
                case htmljson.PHASE.INSTRUCTION_ATTRIBUTE_NAME :
                    this._functionName = value;
                    value = executeInstructionAttr();
                case htmljson.PHASE.ATTRIBUTE_VALUE :
                    queue  = createAttributeNodeString( value );
                    expect = htmljson.EXPECT.ATTRIBUTE_PROPERTY;
                    break;
                case htmljson.PHASE.END_OF_ATTRIBUTES :
                    expect = htmljson.EXPECT.CHILD_NODES_START;
                    break;
            /** style */
                case htmljson.PHASE.STYLES_START :
                    expect = htmljson.EXPECT.CSS_PROPERTY;
                    break;
                case htmljson.PHASE.CSS_PROPERTY :
                    this._cssPropety = value;
                    expect = htmljson.EXPECT.CSS_VALUE;
                    break;
                case htmljson.PHASE.CSS_VALUE :
                    if( value !== '' && value !== null ){
                        this._cssText += ';' + m_toSnakeCase( this._cssPropety ) + ':' + value;
                    };
                    expect = htmljson.EXPECT.CSS_PROPERTY;
                    break;
                case htmljson.PHASE.END_OF_STYLES :
                    if( this._cssText ){
                        queue = createAttributeNodeString( this._cssText.substr( 1 ) );
                        this._cssText = '';
                    };
                    expect = htmljson.EXPECT.ATTRIBUTE_PROPERTY;
                    break;
            /** </endtag> */
                case htmljson.PHASE.END_OF_NODE :
                    createEndTag( true );
                    break;
                case htmljson.PHASE.CLOSE_EMPTY_ELEMENT :
                    createEndTag( false );
                    break;

            /** Text Node */
                case htmljson.PHASE.TEXT_NODE_START:
                    expect = htmljson.EXPECT.TEXT_NODE_VALUE;
                    tree.push( htmljson.NODE_TYPE.TEXT_NODE );
                    break;
                case htmljson.PHASE.TEXT_NODE_VALUE :
                    queue  = appendOmittedEndTagBasedOnFollowingNode() + escapeTextNodeValue( value );
                    expect = htmljson.EXPECT.END_OF_NODE;
                    break;
                /** Text */
                case htmljson.PHASE.TEXT_DATA :
                    queue  = closeParentStartTag() + appendOmittedEndTagBasedOnFollowingNode() + escapeTextNodeValue( value );
                    expect = htmljson.EXPECT.IN_CHILD_NODES;
                    break;
            /** <![CDATA[ ]]> */
                case htmljson.PHASE.CDATA_SECTION_START:
                    queue  = '<![CDATA[';
                    expect = htmljson.EXPECT.CDATA_SECTION_VALUE;
                    tree.push( htmljson.NODE_TYPE.CDATA_SECTION );
                    break;
                case htmljson.PHASE.CDATA_SECTION_VALUE:
                    queue  = value;
                    expect = htmljson.EXPECT.END_OF_NODE;
                    break;
            /** <!-- --> */
                case htmljson.PHASE.COMMENT_NODE_START:
                    queue  = '<!--';
                    expect = htmljson.EXPECT.COMMENT_NODE_VALUE;
                    tree.push( htmljson.NODE_TYPE.COMMENT_NODE );
                    break;
                case htmljson.PHASE.COMMENT_NODE_VALUE:
                    queue  = value;
                    expect = htmljson.EXPECT.END_OF_NODE;
                    break;
            /** <!--[if IE]> --> */
                case htmljson.PHASE.COND_CMT_HIDE_LOWER_START :
                    queue  = appendOmittedEndTagBasedOnFollowingNode() + '<!--[';
                    expect = htmljson.EXPECT.COND_CMT_HIDE_LOWER_FORMURA;
                    tree.push( htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER );
                    break;
                case htmljson.PHASE.COND_CMT_HIDE_LOWER_FORMURA :
                    queue = value + ']>';
                    expect = htmljson.EXPECT.CHILD_NODES_START;
                    break;
            /** <!--[if !IE]><!--> */
                case htmljson.PHASE.COND_CMT_SHOW_LOWER_START :
                    queue  = appendOmittedEndTagBasedOnFollowingNode() + '<!--[';
                    expect = htmljson.EXPECT.COND_CMT_SHOW_LOWER_FORMURA;
                    tree.push( htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START );
                    break;
                case htmljson.PHASE.COND_CMT_SHOW_LOWER_FORMURA :
                    queue  = value + ']><!-->';
                    expect = htmljson.EXPECT.CHILD_NODES_START;
                    break;
            /** <? func(...) ?> */
                case htmljson.PHASE.PROCESSING_INSTRUCTION_START :
                    expect = htmljson.EXPECT.PROCESSING_INSTRUCTION_NAME;
                    tree.push( htmljson.NODE_TYPE.PROCESSING_INSTRUCTION );
                    break;
                case htmljson.PHASE.PROCESSING_INSTRUCTION_NAME :
                    this._functionName = value;
                    expect = htmljson.EXPECT.PROCESSING_INSTRUCTION_ARGS;
                    break;

                default :
                    expect = htmljson.EXPECT.ERROR;
                    break;
            };
    };

    // console.log( '- ' + queue, expect, this._tree );

    if( expect === htmljson.EXPECT.ERROR ){
        this._onerror( 'Not html.json format!' );
        this._stream.emit( 'error', 'Not html.json format!' );
    } else {
        this._expect = expect;

        if( queue ){
            this._stream.queue( queue );
        };
    };
};
