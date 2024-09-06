goog.provide( 'htmljson.NODE_TYPE' );
goog.provide( 'htmljson.PHASE' );
goog.provide( 'htmljson.EXPECT' );

/**
 * @enum {number}
 */
htmljson.NODE_TYPE = {
    ELEMENT_NODE                   :  1, // v
    // ATTRIBUTE_NODE                 2
    TEXT_NODE                      :  3, // v
    CDATA_SECTION                  :  4, // v
    // EntityReference                5
    // Entity                         6
    PROCESSING_INSTRUCTION         :  7, // v
    COMMENT_NODE                   :  8, // v
    DOCUMENT_NODE                  :  9, // v
    // DOCUMENT_TYPE_NODE            10
    DOCUMENT_FRAGMENT_NODE         : 11, // v
    // Notation                      12
    CONDITIONAL_COMMENT_HIDE_LOWER : 13,
    CONDITIONAL_COMMENT_SHOW_LOWER : 14,
    NETSCAPE4_CONDITIONAL_COMMENT  : 15
};

/**
 * @enum {number}
 */
htmljson.PHASE = {
    ERROR                          : htmljson.NODE_TYPE.ELEMENT_NODE - 2,
    NODE_START                     : htmljson.NODE_TYPE.ELEMENT_NODE - 1,

    ELEMENT_NODE_START             : htmljson.NODE_TYPE.ELEMENT_NODE,
    TEXT_NODE_START                : htmljson.NODE_TYPE.TEXT_NODE,
    CDATA_SECTION_START            : htmljson.NODE_TYPE.CDATA_SECTION,
    PROCESSING_INSTRUCTION_START   : htmljson.NODE_TYPE.PROCESSING_INSTRUCTION,
    COMMENT_NODE_START             : htmljson.NODE_TYPE.COMMENT_NODE,
    DOCUMENT_NODE_START            : htmljson.NODE_TYPE.DOCUMENT_NODE,
    DOCUMENT_FRAGMENT_NODE_START   : htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE,
    COMMENT_HIDE_LOWER_START       : htmljson.NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER,
    COMMENT_SHOW_LOWER_START       : htmljson.NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER,
    NETSCAPE4_CONDITIONAL_COMMENT  : htmljson.NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT,
    // <-- copy to EXPECT
    DOCUMENT_NODE_VALUE            : htmljson.NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT +  1,
    TEXT_NODE_VALUE                : htmljson.NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT +  2,
    CDATA_SECTION_VALUE            : htmljson.NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT +  3,
    COMMENT_NODE_VALUE             : htmljson.NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT +  4,
    COMMENT_HIDE_LOWER_FORMURA     : htmljson.NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT +  5,
    COMMENT_SHOW_LOWER_FORMURA     : htmljson.NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT +  6,
    PROCESSING_INSTRUCTION_NAME    : htmljson.NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT +  7,

    TAG_NAME                       : htmljson.NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT +  8,

    ATTRIBUTES_START               : htmljson.NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT +  9,
    ATTRIBUTE_PROPERTY             : htmljson.NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 10,
    ATTRIBUTE_VALUE                : htmljson.NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 11,

    STYLES_START                   : htmljson.NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 12,
    CSS_PROPERTY                   : htmljson.NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 13,
    CSS_VALUE                      : htmljson.NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 14,
    
    IN_INSTRUCTION_ATTRIBUTE       : htmljson.NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 15,

    END_OF_NODE                    : htmljson.NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 16,
    // copy to EXPECT -->
    CLOSE_EMPTY_ELEMENT            : htmljson.NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 17,
    END_OF_ATTRIBUTES              : htmljson.NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 18,
    END_OF_STYLES                  : htmljson.NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 19,
    TEXT_DATA                      : htmljson.NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 20,
    INSTRUCTION_ATTRIBUTE_NAME     : htmljson.NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 21
};

/**
 * @enum {number}
 */
htmljson.EXPECT = {
    // <-- copy from PHASE
    ERROR                          : htmljson.PHASE.ERROR,
    NODE_START                     : htmljson.PHASE.NODE_START,

    DOCUMENT_NODE_VALUE            : htmljson.PHASE.DOCUMENT_NODE_VALUE, //
    TEXT_NODE_VALUE                : htmljson.PHASE.TEXT_NODE_VALUE, //
    CDATA_SECTION_VALUE            : htmljson.PHASE.CDATA_SECTION_VALUE,
    COMMENT_NODE_VALUE             : htmljson.PHASE.COMMENT_NODE_VALUE, //
    COMMENT_HIDE_LOWER_FORMURA     : htmljson.PHASE.COMMENT_HIDE_LOWER_FORMURA, //
    COMMENT_SHOW_LOWER_FORMURA     : htmljson.PHASE.COMMENT_SHOW_LOWER_FORMURA, //
    PROCESSING_INSTRUCTION_NAME    : htmljson.PHASE.PROCESSING_INSTRUCTION_NAME, //

    TAG_NAME                       : htmljson.PHASE.TAG_NAME, //

    ATTRIBUTES_START               : htmljson.PHASE.ATTRIBUTES_START, //
    ATTRIBUTE_PROPERTY             : htmljson.PHASE.ATTRIBUTE_PROPERTY,
    ATTRIBUTE_VALUE                : htmljson.PHASE.ATTRIBUTE_VALUE,

    STYLES_START                   : htmljson.PHASE.STYLES_START,
    CSS_PROPERTY                   : htmljson.PHASE.CSS_PROPERTY, //
    CSS_VALUE                      : htmljson.PHASE.CSS_VALUE, //

    IN_INSTRUCTION_ATTRIBUTE       : htmljson.PHASE.IN_INSTRUCTION_ATTRIBUTE,

    END_OF_NODE                    : htmljson.PHASE.END_OF_NODE, //
    // copy from PHASE -->
    NODE_TYPE                      : htmljson.PHASE.END_OF_NODE + 1,
    PROCESSING_INSTRUCTION_ARGS    : htmljson.PHASE.END_OF_NODE + 2,
    INSTRUCTION_ATTRIBUTE_START    : htmljson.PHASE.END_OF_NODE + 3,
    CHILD_NODES_START              : htmljson.PHASE.END_OF_NODE + 4,
    IN_CHILD_NODES                 : htmljson.PHASE.END_OF_NODE + 5,
    END_OF_DOCUMENT                : htmljson.PHASE.END_OF_NODE + 6
};

