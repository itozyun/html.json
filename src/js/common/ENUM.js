goog.provide( 'htmljson.NODE_TYPE' );
goog.provide( 'htmljson.PHASE' );
goog.provide( 'htmljson.EXPECT' );

/**
 * @enum {number}
 */
htmljson.NODE_TYPE = {
    ELEMENT_NODE                  :  1, // v
    // ATTRIBUTE_NODE                2
    TEXT_NODE                     :  3, // v
    CDATA_SECTION                 :  4, // v
    // EntityReference               5
    // Entity                        6
    PROCESSING_INSTRUCTION        :  7, // v
    COMMENT_NODE                  :  8, // v
    DOCUMENT_NODE                 :  9, // v
    // DOCUMENT_TYPE_NODE           10
    DOCUMENT_FRAGMENT_NODE        : 11, // v
    // Notation                     12
    COND_CMT_HIDE_LOWER           : 13,
    COND_CMT_SHOW_LOWER_START     : 14,
    COND_CMT_SHOW_LOWER_END       : 15,
    NETSCAPE4_COND_CMT_HIDE_LOWER : 16,
    ELEMENT_START_TAG             : 17,
    ELEMENT_END_TAG               : 18
};

/**
 * @enum {number}
 */
htmljson.PHASE = {
    // <-- copy to EXPECT
    ERROR                           : htmljson.NODE_TYPE.ELEMENT_NODE - 2,
    NODE_START                      : htmljson.NODE_TYPE.ELEMENT_NODE - 1,
    // copy to EXPECT -->

    ENTER_ELEMENT_NODE              : htmljson.NODE_TYPE.ELEMENT_NODE,
    ENTER_TEXT_NODE                 : htmljson.NODE_TYPE.TEXT_NODE,
    ENTER_CDATA_SECTION             : htmljson.NODE_TYPE.CDATA_SECTION,
    ENTER_PROCESSING_INSTRUCTION    : htmljson.NODE_TYPE.PROCESSING_INSTRUCTION,
    ENTER_COMMENT_NODE              : htmljson.NODE_TYPE.COMMENT_NODE,
    ENTER_DOCUMENT_NODE             : htmljson.NODE_TYPE.DOCUMENT_NODE,
    ENTER_DOCUMENT_FRAGMENT_NODE    : htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE,
    ENTER_COND_CMT_HIDE_LOWER       : htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER,
    ENTER_COND_CMT_SHOW_LOWER_START : htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START,
    ENTER_COND_CMT_SHOW_LOWER_END   : htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_END,
    ENTER_NN4_COND_CMT_HIDE_LOWER   : htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER,
    ENTER_ELEMENT_START_TAG         : htmljson.NODE_TYPE.ELEMENT_START_TAG,
    ENTER_ELEMENT_END_TAG           : htmljson.NODE_TYPE.ELEMENT_END_TAG,

    // <-- copy to EXPECT
    DOCUMENT_NODE_VALUE             : htmljson.NODE_TYPE.ELEMENT_END_TAG +  1,
    TEXT_NODE_VALUE                 : htmljson.NODE_TYPE.ELEMENT_END_TAG +  2,
    CDATA_SECTION_VALUE             : htmljson.NODE_TYPE.ELEMENT_END_TAG +  3,
    COMMENT_NODE_VALUE              : htmljson.NODE_TYPE.ELEMENT_END_TAG +  4,
    COND_CMT_HIDE_LOWER_FORMURA     : htmljson.NODE_TYPE.ELEMENT_END_TAG +  5,
    COND_CMT_SHOW_LOWER_FORMURA     : htmljson.NODE_TYPE.ELEMENT_END_TAG +  6,
    NN4_COND_CMT_SHOW_LOWER_FORMURA : htmljson.NODE_TYPE.ELEMENT_END_TAG +  7,
    INSTRUCTION_FUNC_NAME_AND_ARGS  : htmljson.NODE_TYPE.ELEMENT_END_TAG +  8,

    TAG_NAME                        : htmljson.NODE_TYPE.ELEMENT_END_TAG +  9,
    TAG_NAME_WITHOUT_END_TAG        : htmljson.NODE_TYPE.ELEMENT_END_TAG + 10,
    TAG_NAME_WITHOUT_START_TAG      : htmljson.NODE_TYPE.ELEMENT_END_TAG + 11,

    ATTRIBUTES_START                : htmljson.NODE_TYPE.ELEMENT_END_TAG + 12,

    END_OF_NODE                     : htmljson.NODE_TYPE.ELEMENT_END_TAG + 13,
    // copy to EXPECT -->

    END_START_TAG_AND_START_CHILD   : htmljson.NODE_TYPE.ELEMENT_END_TAG + 14,
    END_START_TAG_AND_TEXT_DATA     : htmljson.NODE_TYPE.ELEMENT_END_TAG + 15,
    LEAVE_EMPTY_NODE                : htmljson.NODE_TYPE.ELEMENT_END_TAG + 16,
    LEAVE_NODE                      : htmljson.NODE_TYPE.ELEMENT_END_TAG + 17,
    END_OF_ATTRIBUTES               : htmljson.NODE_TYPE.ELEMENT_END_TAG + 18,
    END_OF_STYLES                   : htmljson.NODE_TYPE.ELEMENT_END_TAG + 19,
    TEXT_DATA                       : htmljson.NODE_TYPE.ELEMENT_END_TAG + 20,
    INSTRUCTION_ATTRIBUTE_FUNC_NAME : htmljson.NODE_TYPE.ELEMENT_END_TAG + 21
};

/**
 * @enum {number}
 */
htmljson.EXPECT = {
    // <-- copy from PHASE
    ERROR                           : htmljson.PHASE.ERROR,
    NODE_START                      : htmljson.PHASE.NODE_START,

    DOCUMENT_NODE_VALUE             : htmljson.PHASE.DOCUMENT_NODE_VALUE, //
    TEXT_NODE_VALUE                 : htmljson.PHASE.TEXT_NODE_VALUE, //
    CDATA_SECTION_VALUE             : htmljson.PHASE.CDATA_SECTION_VALUE,
    COMMENT_NODE_VALUE              : htmljson.PHASE.COMMENT_NODE_VALUE, //
    COND_CMT_HIDE_LOWER_FORMURA     : htmljson.PHASE.COND_CMT_HIDE_LOWER_FORMURA, //
    COND_CMT_SHOW_LOWER_FORMURA     : htmljson.PHASE.COND_CMT_SHOW_LOWER_FORMURA, //
    NN4_COND_CMT_SHOW_LOWER_FORMURA : htmljson.PHASE.NN4_COND_CMT_SHOW_LOWER_FORMURA,
    INSTRUCTION_FUNC_NAME_AND_ARGS  : htmljson.PHASE.INSTRUCTION_FUNC_NAME_AND_ARGS, //

    TAG_NAME                        : htmljson.PHASE.TAG_NAME, //
    TAG_NAME_WITHOUT_END_TAG        : htmljson.PHASE.TAG_NAME_WITHOUT_END_TAG,
    TAG_NAME_WITHOUT_START_TAG      : htmljson.PHASE.TAG_NAME_WITHOUT_START_TAG,

    ATTRIBUTES_START                : htmljson.PHASE.ATTRIBUTES_START, //

    END_OF_NODE                     : htmljson.PHASE.END_OF_NODE, //
    // copy from PHASE -->

    NODE_TYPE                       : htmljson.PHASE.END_OF_NODE + 1,
    PROCESSING_INSTRUCTION_ARGS     : htmljson.PHASE.END_OF_NODE + 2,
    IN_ATTRIBUTES                   : htmljson.PHASE.END_OF_NODE + 3,
    CHILD_NODES_START               : htmljson.PHASE.END_OF_NODE + 4,
    IN_CHILD_NODES                  : htmljson.PHASE.END_OF_NODE + 5,
    END_OF_DOCUMENT                 : htmljson.PHASE.END_OF_NODE + 6
};
