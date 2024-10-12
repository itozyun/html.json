goog.provide( 'json2html.stream.module' );

goog.require( 'json2html.stream' );
goog.require( 'htmljson.NODE_TYPE' );

module.exports = json2html.stream;

json2html.stream.DOCUMENT_NODE                 = htmljson.NODE_TYPE.DOCUMENT_NODE;
json2html.stream.DOCUMENT_FRAGMENT_NODE        = htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE;
json2html.stream.ELEMENT_NODE                  = htmljson.NODE_TYPE.ELEMENT_NODE;
json2html.stream.TEXT_NODE                     = htmljson.NODE_TYPE.TEXT_NODE;
json2html.stream.CDATA_SECTION                 = htmljson.NODE_TYPE.CDATA_SECTION;
json2html.stream.PROCESSING_INSTRUCTION        = htmljson.NODE_TYPE.PROCESSING_INSTRUCTION;
json2html.stream.COMMENT_NODE                  = htmljson.NODE_TYPE.COMMENT_NODE;
json2html.stream.COND_CMT_HIDE_LOWER           = htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER;
json2html.stream.COND_CMT_SHOW_LOWER_START     = htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START;
json2html.stream.COND_CMT_SHOW_LOWER_END       = htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_END;
json2html.stream.NETSCAPE4_COND_CMT_HIDE_LOWER = htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER;
json2html.stream.ELEMENT_START_TAG             = htmljson.NODE_TYPE.ELEMENT_START_TAG;
json2html.stream.ELEMENT_END_TAG               = htmljson.NODE_TYPE.ELEMENT_END_TAG;
