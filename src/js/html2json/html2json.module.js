goog.provide( 'html2json.module' );

goog.require( 'html2json' );
goog.require( 'htmljson.NODE_TYPE' );

module.exports = html2json;

html2json.DOCUMENT_NODE                 = htmljson.NODE_TYPE.DOCUMENT_NODE;
html2json.DOCUMENT_FRAGMENT_NODE        = htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE;
html2json.ELEMENT_NODE                  = htmljson.NODE_TYPE.ELEMENT_NODE;
html2json.TEXT_NODE                     = htmljson.NODE_TYPE.TEXT_NODE;
html2json.CDATA_SECTION                 = htmljson.NODE_TYPE.CDATA_SECTION;
html2json.PROCESSING_INSTRUCTION        = htmljson.NODE_TYPE.PROCESSING_INSTRUCTION;
html2json.COMMENT_NODE                  = htmljson.NODE_TYPE.COMMENT_NODE;
html2json.COND_CMT_HIDE_LOWER           = htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER;
html2json.COND_CMT_SHOW_LOWER_START     = htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START;
html2json.NETSCAPE4_COND_CMT_HIDE_LOWER = htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER;
html2json.ELEMENT_START_TAG             = htmljson.NODE_TYPE.ELEMENT_START_TAG;
html2json.ELEMENT_END_TAG               = htmljson.NODE_TYPE.ELEMENT_END_TAG;
