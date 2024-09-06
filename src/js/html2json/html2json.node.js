goog.provide( 'html2json.node' );

goog.require( 'html2json' );
goog.require( 'htmljson.NODE_TYPE' );

module.exports = html2json;

html2json.DOCUMENT_NODE                  = htmljson.NODE_TYPE.DOCUMENT_NODE;
html2json.DOCUMENT_FRAGMENT_NODE         = htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE;
html2json.ELEMENT_NODE                   = htmljson.NODE_TYPE.ELEMENT_NODE;
html2json.TEXT_NODE                      = htmljson.NODE_TYPE.TEXT_NODE;
html2json.CDATA_SECTION                  = htmljson.NODE_TYPE.CDATA_SECTION;
html2json.COMMENT_NODE                   = htmljson.NODE_TYPE.COMMENT_NODE;
html2json.CONDITIONAL_COMMENT_HIDE_LOWER = htmljson.NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER;
html2json.CONDITIONAL_COMMENT_SHOW_LOWER = htmljson.NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER;
html2json.NETSCAPE4_CONDITIONAL_COMMENT  = htmljson.NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT;
html2json.PROCESSING_INSTRUCTION         = htmljson.NODE_TYPE.PROCESSING_INSTRUCTION;
