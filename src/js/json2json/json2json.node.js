goog.provide( 'json2json.node' );

goog.require( 'json2json' );
goog.require( 'htmljson.NODE_TYPE' );

module.exports = json2json;

json2json.DOCUMENT_NODE                 = htmljson.NODE_TYPE.DOCUMENT_NODE;
json2json.DOCUMENT_FRAGMENT_NODE        = htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE;
json2json.ELEMENT_NODE                  = htmljson.NODE_TYPE.ELEMENT_NODE;
json2json.TEXT_NODE                     = htmljson.NODE_TYPE.TEXT_NODE;
json2json.CDATA_SECTION                 = htmljson.NODE_TYPE.CDATA_SECTION;
json2json.PROCESSING_INSTRUCTION        = htmljson.NODE_TYPE.PROCESSING_INSTRUCTION;
json2json.COMMENT_NODE                  = htmljson.NODE_TYPE.COMMENT_NODE;
json2json.COND_CMT_HIDE_LOWER           = htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER;
json2json.COND_CMT_SHOW_LOWER_START     = htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START;
json2json.COND_CMT_SHOW_LOWER_END       = htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_END;
json2json.NETSCAPE4_COND_CMT_HIDE_LOWER = htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER;
json2json.ELEMENT_WITHOUT_END_TAG       = htmljson.NODE_TYPE.ELEMENT_WITHOUT_END_TAG;
json2json.ELEMENT_WITHOUT_START_TAG     = htmljson.NODE_TYPE.ELEMENT_WITHOUT_START_TAG;
