goog.provide( 'html2json.module' );

goog.require( 'html2json.main' );
goog.require( 'htmljson.NODE_TYPE' );

module.exports = html2json.main;

html2json.main.DOCUMENT_NODE                 = htmljson.NODE_TYPE.DOCUMENT_NODE;
html2json.main.DOCUMENT_FRAGMENT_NODE        = htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE;
html2json.main.ELEMENT_NODE                  = htmljson.NODE_TYPE.ELEMENT_NODE;
html2json.main.TEXT_NODE                     = htmljson.NODE_TYPE.TEXT_NODE;
html2json.main.CDATA_SECTION                 = htmljson.NODE_TYPE.CDATA_SECTION;
html2json.main.PROCESSING_INSTRUCTION        = htmljson.NODE_TYPE.PROCESSING_INSTRUCTION;
html2json.main.COMMENT_NODE                  = htmljson.NODE_TYPE.COMMENT_NODE;
html2json.main.COND_CMT_HIDE_LOWER           = htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER;
html2json.main.COND_CMT_SHOW_LOWER_START     = htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START;
html2json.main.NETSCAPE4_COND_CMT_HIDE_LOWER = htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER;
html2json.main.ELEMENT_START_TAG             = htmljson.NODE_TYPE.ELEMENT_START_TAG;
html2json.main.ELEMENT_END_TAG               = htmljson.NODE_TYPE.ELEMENT_END_TAG;
