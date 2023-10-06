var
/** @define {boolean} */
    DEFINE_HTML2JSON__EXPORT_JSON2HTML = false,
/** @define {boolean} */
    DEFINE_HTML2JSON__EXPORT_JSON2JSON = false,
/** @define {boolean} */
    DEFINE_HTML2JSON__DEBUG            = false,
/** @define {boolean} */
    DEFINE_HTML2JSON__USE_XML_NS       = true,
/** @define {boolean} */
    DEFINE_HTML2JSON__USE_XHTML        = true;

/** @define {string} */
var DEFINE_INSTRUCTION_ATTR_PREFIX     = ':';

/**
 * @enum {number}
 */
var HTML_DOT_JSON__NODE_TYPE = {
    DOCUMENT_NODE                  : 0, // <- 10
    DOCUMENT_FRAGMENT_NODE         : 1, // <- 11
    ELEMENT_NODE                   : 2, // <-  1
    TEXT_NODE                      : 3,
    COMMENT_NODE                   : 4, // <-  8
    CONDITIONAL_COMMENT_HIDE_LOWER : 5,
    CONDITIONAL_COMMENT_SHOW_LOWER : 6,
    PROCESSING_INSTRUCTION         : 7
};
