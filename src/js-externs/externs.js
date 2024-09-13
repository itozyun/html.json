var require = function( name ){};

/** @const */
var module = {};

module.exports;
module.exports.gulp = function(){};

var NODE_TYPE = {
    ELEMENT_NODE                  :  1, // v
    // ATTRIBUTE_NODE                2
    TEXT_NODE                     :  3, // v
    CDATA_SECTION                 :  4, // v
    // EntityReference               5
    // Entity                        6
    PROCESSING_INSTRUCTION        :  7, // v
    COMMENT_NODE                  :  8, // v
    DOCUMENT_NODE                 :  9, // v
    // DOCUMENT_TYPE_NODE           10
    DOCUMENT_FRAGMENT_NODE        : 11, // v
    // Notation                     12
    COND_CMT_HIDE_LOWER           : 13,
    COND_CMT_SHOW_LOWER_START     : 14,
    COND_CMT_SHOW_LOWER_END       : 15,
    NETSCAPE4_COND_CMT_HIDE_LOWER : 16,
    ELEMENT_START_TAG             : 17,
    ELEMENT_END_TAG               : 18
};

/**
 * @constructor
 */
function Vinyl(){};

Vinyl.prototype.isNull   = function(){};
Vinyl.prototype.isStream = function(){};
Vinyl.prototype.extname;
Vinyl.prototype.contents;
Vinyl.prototype.path;
Vinyl.prototype.base;
Vinyl.prototype.stem;
Vinyl.prototype.stat = {};
Vinyl.prototype.stat.birthtimeMs = 0;
Vinyl.prototype.stat.ctimeMs = 0;


function through2(){};
through2.obj = function(){};

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

/** {Parser} */
Through.prototype._parser;
