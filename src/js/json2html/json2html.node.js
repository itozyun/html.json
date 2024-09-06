goog.provide( 'json2html.node' );

goog.require( 'json2html' );
goog.require( 'htmljson.NODE_TYPE' );

module.exports = json2html;

json2html.DOCUMENT_NODE                  = htmljson.NODE_TYPE.DOCUMENT_NODE;
json2html.DOCUMENT_FRAGMENT_NODE         = htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE;
json2html.ELEMENT_NODE                   = htmljson.NODE_TYPE.ELEMENT_NODE;
json2html.TEXT_NODE                      = htmljson.NODE_TYPE.TEXT_NODE;
json2html.CDATA_SECTION                  = htmljson.NODE_TYPE.CDATA_SECTION;
json2html.COMMENT_NODE                   = htmljson.NODE_TYPE.COMMENT_NODE;
json2html.CONDITIONAL_COMMENT_HIDE_LOWER = htmljson.NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER;
json2html.CONDITIONAL_COMMENT_SHOW_LOWER = htmljson.NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER;
json2html.NETSCAPE4_CONDITIONAL_COMMENT  = htmljson.NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT;
json2html.PROCESSING_INSTRUCTION         = htmljson.NODE_TYPE.PROCESSING_INSTRUCTION;
