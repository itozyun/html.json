var require = function( name ){};

/** @const */
var module = {};

module.exports;
module.exports.gulp = function(){};

var __NAME_PROTECTION__ = [
    {HTML:!0,HEAD:!0,BODY:!0,P:!0,DT:!0,DD:!0,LI:!0,OPTION:!0,TBODY:!0,THEAD:!0,TFOOT:!0,TD:!0,TH:!0,TR:!0,RB:!0,RBC:!0,RP:!0,RT:!0,RTC:!0,OPTGROUP:!0,CAPTION:!0,COLGROUP:!0},
    {A:!0,AUDIO:!0,DEL:!0,INS:!0,MAP:!0,NOSCRIPT:!0,VIDEO:!0},
    {
        H1:!0        , H2:!0        , H3:!0      , H4:!0      , H5:!0       , H6:!0    ,
        ADDRESS:!0   , BLOCKQUOTE:!0, DIV:!0     , DL:!0      , FIELDSET:!0 , FORM:!0  ,
        HR:!0        , LEGEND:!0    , MENU:!0    , NOSCRIPT:!0, OL:!0       , P:!0     ,
        PRE:!0       ,
        UL:!0        ,
        CENTER:!0    , DIR:!0       , NOFRAMES:!0, MARQUEE:!0
    },
    {SCRIPT:!0,STYLE:!0,PLAINTEXT:!0,XMP:!0},
    {SCRIPT:!0,STYLE:!0,TEXTAREA:!0},
    {PRE:!0,LISTING:!0}
];

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
