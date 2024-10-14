goog.provide( 'VDocumentContext' );


/**
 * @constructor
 * 
 * @param {boolean} isRestrictedMode
 */
VDocumentContext = function( isRestrictedMode, vnodeMemorySize ){
    this.isRestrictedMode = isRestrictedMode;

    /**
     * 文書ツリーの変更検知用
     *
     * @type {boolean} */
    this.documentIsUpdated = false;
};

VDocumentContext.prototype.setCurrentNode = function( currentRestrictedVNode, parentRestrictedVNode ){
    if( !this.isRestrictedMode ){
        throw 'VDocumentContext is not RestrictedMode!';
    };
    /**
     * 制限モードの時に、操作が出来る現在ノード
     * 
     * @type {VNode | null} */
    this.currentRestrictedVNode = currentRestrictedVNode;
    /**
     * 制限モードの時に、操作が出来る現在ノードの親ノード
     * 
     * @type {VNode | null} */
    this.parentRestrictedVNode = parentRestrictedVNode;
    /**
     * 文書ツリーの変更検知用
     *
     * @type {boolean} */
    this.documentIsUpdated = false;
};

DOM_ACTION = {
    READ                 : 1,
    WRITE                : 2,
    CHILDREN             : 3,
    REMOVE               : 4,
    EMPTY                : 5,
    INSERT_PREV_OR_NEXT  : 4,
    INSERT_FIRST_OR_LAST : 5,
    WRAP                 : 6
}
