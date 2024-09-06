goog.provide( 'json2json.node' );

goog.require( 'json2json' );
goog.require( 'htmljson.NODE_TYPE' );

module.exports = json2json;

json2json.DOCUMENT_NODE                  = htmljson.NODE_TYPE.DOCUMENT_NODE;
json2json.DOCUMENT_FRAGMENT_NODE         = htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE;
json2json.ELEMENT_NODE                   = htmljson.NODE_TYPE.ELEMENT_NODE;
json2json.TEXT_NODE                      = htmljson.NODE_TYPE.TEXT_NODE;
json2json.CDATA_SECTION                  = htmljson.NODE_TYPE.CDATA_SECTION;
json2json.COMMENT_NODE                   = htmljson.NODE_TYPE.COMMENT_NODE;
json2json.CONDITIONAL_COMMENT_HIDE_LOWER = htmljson.NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER;
json2json.CONDITIONAL_COMMENT_SHOW_LOWER = htmljson.NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER;
json2json.NETSCAPE4_CONDITIONAL_COMMENT  = htmljson.NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT;
json2json.PROCESSING_INSTRUCTION         = htmljson.NODE_TYPE.PROCESSING_INSTRUCTION;
