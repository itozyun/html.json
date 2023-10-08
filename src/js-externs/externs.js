var require = function( name ){};

var module = { exports : function(){} };

var exports;

var happyDOM = { Window : function(){} };

var NODE_TYPE = {
    ELEMENT_NODE                   : 1,
    TEXT_NODE                      : 3,
    CDATA_SECTION                  : 4,
    PROCESSING_INSTRUCTION         : 7,
    COMMENT_NODE                   : 8,
    DOCUMENT_NODE                  : 9,
    DOCUMENT_FRAGMENT_NODE         : 11,
    CONDITIONAL_COMMENT_HIDE_LOWER : 13,
    CONDITIONAL_COMMENT_SHOW_LOWER : 14
};

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

/** @type {Parser} */
Through.prototype._parser;