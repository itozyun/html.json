var
/** @define {boolean} */
    DEFINE_HTML2JSON__EXPORT_JSON2HTML = false,
/** @define {boolean} */
    DEFINE_HTML2JSON__EXPORT_JSON2JSON = false,
/** @define {boolean} */
    DEFINE_HTML2JSON__DEBUG            = false,
/** @define {boolean} */
    DEFINE_HTML2JSON__USE_XML_NS       = true;

var HTML_JSON_TYPE_DOCUMENT_NODE                  = 0, // <- 10
    HTML_JSON_TYPE_DOCUMENT_FRAGMENT_NODE         = 1, // <- 11
    HTML_JSON_TYPE_ELEMENT_NODE                   = 2, // <-  1
    HTML_JSON_TYPE_TEXT_NODE                      = 3,
    HTML_JSON_TYPE_COMMENT_NODE                   = 4, // <-  8
    HTML_JSON_TYPE_CONDITIONAL_COMMENT_HIDE_LOWER = 5,
    HTML_JSON_TYPE_CONDITIONAL_COMMENT_SHOW_LOWER = 6,
    HTML_JSON_TYPE_PROCESSING_INSTRUCTION         = 7;