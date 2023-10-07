var require = function( name ){};

var module = { exports : function(){} };

var happyDOM = { Window : function(){} };

var NODE_TYPE = {
    DOCUMENT_NODE                  : 0,
    DOCUMENT_FRAGMENT_NODE         : 1,
    ELEMENT_NODE                   : 2,
    TEXT_NODE                      : 3,
    COMMENT_NODE                   : 4,
    CONDITIONAL_COMMENT_HIDE_LOWER : 5,
    CONDITIONAL_COMMENT_SHOW_LOWER : 6,
    PROCESSING_INSTRUCTION         : 7
};

/** @constructor */
function JSONParser(){};

JSONParser.prototype.onToken = function( token, value ){};
JSONParser.prototype.onError = function( error ){};
JSONParser.prototype.write = function( buffer ){};
JSONParser.prototype.stack = [];

JSONParser.C = {};
JSONParser.C.LEFT_BRACE    = 0x1;
JSONParser.C.RIGHT_BRACE   = 0x2;
JSONParser.C.LEFT_BRACKET  = 0x3;
JSONParser.C.RIGHT_BRACKET = 0x4;
JSONParser.C.COLON         = 0x5;
JSONParser.C.COMMA         = 0x6;
JSONParser.C.TRUE          = 0x7;
JSONParser.C.FALSE         = 0x8;
JSONParser.C.NULL          = 0x9;
JSONParser.C.STRING        = 0xa;
JSONParser.C.NUMBER        = 0xb;

/**
 * @constructor
 * @extends {stream.Writable}
 */
function Through(){};

Through.prototype.end     = function( data ){};
Through.prototype.destroy = function(){};
Through.prototype.pause   = function(){};
Through.prototype.resume  = function(){};
Through.prototype.queue   = function( data ){};
Through.prototype.push    = function( data ){};
