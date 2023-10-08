var require = function( name ){};

var module = { exports : function(){} };

var exports;

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