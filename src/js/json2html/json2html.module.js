goog.provide( 'json2html.module' );

goog.require( 'json2html' );
goog.require( 'htmljson.NODE_TYPE' );

module.exports = json2html;

json2html.DOCUMENT_NODE                 = htmljson.NODE_TYPE.DOCUMENT_NODE;
json2html.DOCUMENT_FRAGMENT_NODE        = htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE;
json2html.ELEMENT_NODE                  = htmljson.NODE_TYPE.ELEMENT_NODE;
json2html.TEXT_NODE                     = htmljson.NODE_TYPE.TEXT_NODE;
json2html.CDATA_SECTION                 = htmljson.NODE_TYPE.CDATA_SECTION;
json2html.PROCESSING_INSTRUCTION        = htmljson.NODE_TYPE.PROCESSING_INSTRUCTION;
json2html.COMMENT_NODE                  = htmljson.NODE_TYPE.COMMENT_NODE;
json2html.COND_CMT_HIDE_LOWER           = htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER;
json2html.COND_CMT_SHOW_LOWER_START     = htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START;
json2html.COND_CMT_SHOW_LOWER_END       = htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_END;
json2html.NETSCAPE4_COND_CMT_HIDE_LOWER = htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER;
json2html.ELEMENT_WITHOUT_END_TAG       = htmljson.NODE_TYPE.ELEMENT_WITHOUT_END_TAG;
json2html.ELEMENT_WITHOUT_START_TAG     = htmljson.NODE_TYPE.ELEMENT_WITHOUT_START_TAG;
