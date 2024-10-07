goog.provide( 'json2json.module' );

goog.require( 'json2json.main' );
goog.require( 'htmljson.NODE_TYPE' );

module.exports = json2json.main;

json2json.main.DOCUMENT_NODE                 = htmljson.NODE_TYPE.DOCUMENT_NODE;
json2json.main.DOCUMENT_FRAGMENT_NODE        = htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE;
json2json.main.ELEMENT_NODE                  = htmljson.NODE_TYPE.ELEMENT_NODE;
json2json.main.TEXT_NODE                     = htmljson.NODE_TYPE.TEXT_NODE;
json2json.main.CDATA_SECTION                 = htmljson.NODE_TYPE.CDATA_SECTION;
json2json.main.PROCESSING_INSTRUCTION        = htmljson.NODE_TYPE.PROCESSING_INSTRUCTION;
json2json.main.COMMENT_NODE                  = htmljson.NODE_TYPE.COMMENT_NODE;
json2json.main.COND_CMT_HIDE_LOWER           = htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER;
json2json.main.COND_CMT_SHOW_LOWER_START     = htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START;
json2json.main.COND_CMT_SHOW_LOWER_END       = htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_END;
json2json.main.NETSCAPE4_COND_CMT_HIDE_LOWER = htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER;
json2json.main.ELEMENT_START_TAG             = htmljson.NODE_TYPE.ELEMENT_START_TAG;
json2json.main.ELEMENT_END_TAG               = htmljson.NODE_TYPE.ELEMENT_END_TAG;
