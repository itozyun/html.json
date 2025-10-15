var goog = goog || {};
goog.provide = function(a) {
};
goog.require = function(a) {
};
goog.requireType = function(a) {
};
goog.scope = function(a) {
};
goog.define = function(a, b) {
};
var htmlparser = {DEFINE:{}};
htmlparser.DEFINE.USE_XHTML = !1;
htmlparser.DEFINE.USE_XML_IN_HTML = !0;
htmlparser.DEFINE.USE_VML = !1;
htmlparser.DEFINE.USE_DOCUMENT_TYPE_NODE = !0;
htmlparser.DEFINE.USE_CDATA_SECTION = !0;
htmlparser.DEFINE.USE_PROCESSING_INSTRUCTION = !0;
htmlparser.DEFINE.USE_TRADITIONAL_TAGS = !1;
htmlparser.DEFINE.USE_PAUSE = !1;
htmlparser.XML_ROOT_ELEMENTS = {xml:!0, svg:!0, math:!0};
htmlparser.BOOLEAN_ATTRIBUTES = {async:!0, autofocus:!0, checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, draggable:!0, hidden:!0, ismap:!0, loop:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, novalidate:!0, nowrap:!0, readonly:!0, required:!0, reversed:!0, scoped:!0, selected:!0};
htmlparser.VOID_ELEMENTS = htmlparser.DEFINE.USE_TRADITIONAL_TAGS ? {AREA:!0, BASE:!0, COL:!0, EMBED:!0, BR:!0, HR:!0, IMG:!0, INPUT:!0, LINK:!0, META:!0, SOURCE:!0, TRACK:!0, WBR:!0, BASEFONT:!0, BGSOUND:!0, COMMAND:!0, FRAME:!0, ISINDEX:!0, KEYGEN:!0, PARAM:!0, SPACER:!0} : {AREA:!0, BASE:!0, COL:!0, EMBED:!0, BR:!0, HR:!0, IMG:!0, INPUT:!0, LINK:!0, META:!0, SOURCE:!0, TRACK:!0, WBR:!0};
htmlparser.NON_TEXT_CHILD_ELEMENTS = htmlparser.DEFINE.USE_TRADITIONAL_TAGS ? {MAP:!0, DATALIST:!0, DL:!0, OL:!0, UL:!0, SELECT:!0, OPTGROUP:!0, TABLE:!0, THEAD:!0, TFOOT:!0, TBODY:!0, COLGROUP:!0, TR:!0, HEAD:!0, DIR:!0, FRAMESET:!0, MENU:!0} : {MAP:!0, DATALIST:!0, DL:!0, OL:!0, UL:!0, SELECT:!0, OPTGROUP:!0, TABLE:!0, THEAD:!0, TFOOT:!0, TBODY:!0, COLGROUP:!0, TR:!0, HEAD:!0};
htmlparser.RAW_TEXT_ELEMENTS = htmlparser.DEFINE.USE_TRADITIONAL_TAGS ? {SCRIPT:!0, STYLE:!0, TEXTAREA:!0, TITLE:!0, LISTING:!0, PLAINTEXT:!0, XMP:!0} : {SCRIPT:!0, STYLE:!0, TEXTAREA:!0, TITLE:!0};
htmlparser.ESCAPABLE_RAW_TEXT_ELEMENTS = htmlparser.DEFINE.USE_TRADITIONAL_TAGS ? {TEXTAREA:!0, TITLE:!0, LISTING:!0} : {TEXTAREA:!0, TITLE:!0};
htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN = {CAPTION:htmlparser.DEFINE.USE_TRADITIONAL_TAGS ? {ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, 
WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0} : {ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, 
DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, 
SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DD:htmlparser.DEFINE.USE_TRADITIONAL_TAGS ? {ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, 
INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0} : {ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, 
UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, 
DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DT:htmlparser.DEFINE.USE_TRADITIONAL_TAGS ? {ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, 
MAP:!0, AREA:!0, math:!0, svg:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0} : {ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, 
RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, P:htmlparser.DEFINE.USE_TRADITIONAL_TAGS ? {A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, 
TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0} : {A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, 
TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, HTML:htmlparser.DEFINE.USE_TRADITIONAL_TAGS ? {HEAD:!0, BODY:!0, FRAMESET:!0} : {HEAD:!0, BODY:!0}, 
HEAD:htmlparser.DEFINE.USE_TRADITIONAL_TAGS ? {TITLE:!0, BASE:!0, LINK:!0, META:!0, STYLE:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, BGSOUND:!0, ISINDEX:!0} : {TITLE:!0, BASE:!0, LINK:!0, META:!0, STYLE:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0}, COLGROUP:{COL:!0}, OPTGROUP:{OPTION:!0}, OPTION:{}, TBODY:{TR:!0}, TR:{TH:!0, TD:!0}};
htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.LI = htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.TD = htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.DD;
htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.TH = htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.DT;
htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.RP = htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.RT = htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.P;
htmlparser.DEFINE.USE_TRADITIONAL_TAGS && (htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.RB = htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.RP, htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.RTC = htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.RBC = {RB:!0, RP:!0, RT:!0});
htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.TFOOT = htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.THEAD = htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.TBODY;
var htmljson = {NODE_TYPE:{ELEMENT_NODE:1, TEXT_NODE:3, CDATA_SECTION:4, PROCESSING_INSTRUCTION:7, COMMENT_NODE:8, DOCUMENT_NODE:9, DOCUMENT_FRAGMENT_NODE:11, COND_CMT_HIDE_LOWER:13, COND_CMT_SHOW_LOWER_START:14, COND_CMT_SHOW_LOWER_END:15, NETSCAPE4_COND_CMT_HIDE_LOWER:16, ELEMENT_START_TAG:17, ELEMENT_END_TAG:18}};
htmljson.PHASE = {ERROR:htmljson.NODE_TYPE.ELEMENT_NODE - 2, NODE_START:htmljson.NODE_TYPE.ELEMENT_NODE - 1, ENTER_ELEMENT_NODE:htmljson.NODE_TYPE.ELEMENT_NODE, ENTER_TEXT_NODE:htmljson.NODE_TYPE.TEXT_NODE, ENTER_CDATA_SECTION:htmljson.NODE_TYPE.CDATA_SECTION, ENTER_PROCESSING_INSTRUCTION:htmljson.NODE_TYPE.PROCESSING_INSTRUCTION, ENTER_COMMENT_NODE:htmljson.NODE_TYPE.COMMENT_NODE, ENTER_DOCUMENT_NODE:htmljson.NODE_TYPE.DOCUMENT_NODE, ENTER_DOCUMENT_FRAGMENT_NODE:htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE, 
ENTER_COND_CMT_HIDE_LOWER:htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER, ENTER_COND_CMT_SHOW_LOWER_START:htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START, ENTER_COND_CMT_SHOW_LOWER_END:htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_END, ENTER_NN4_COND_CMT_HIDE_LOWER:htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER, ENTER_ELEMENT_START_TAG:htmljson.NODE_TYPE.ELEMENT_START_TAG, ENTER_ELEMENT_END_TAG:htmljson.NODE_TYPE.ELEMENT_END_TAG, DOCUMENT_NODE_VALUE:htmljson.NODE_TYPE.ELEMENT_END_TAG + 1, TEXT_NODE_VALUE:htmljson.NODE_TYPE.ELEMENT_END_TAG + 
2, CDATA_SECTION_VALUE:htmljson.NODE_TYPE.ELEMENT_END_TAG + 3, COMMENT_NODE_VALUE:htmljson.NODE_TYPE.ELEMENT_END_TAG + 4, COND_CMT_HIDE_LOWER_FORMURA:htmljson.NODE_TYPE.ELEMENT_END_TAG + 5, COND_CMT_SHOW_LOWER_FORMURA:htmljson.NODE_TYPE.ELEMENT_END_TAG + 6, NN4_COND_CMT_SHOW_LOWER_FORMURA:htmljson.NODE_TYPE.ELEMENT_END_TAG + 7, INSTRUCTION_FUNC_NAME_AND_ARGS:htmljson.NODE_TYPE.ELEMENT_END_TAG + 8, TAG_NAME:htmljson.NODE_TYPE.ELEMENT_END_TAG + 9, TAG_NAME_WITHOUT_END_TAG:htmljson.NODE_TYPE.ELEMENT_END_TAG + 
10, TAG_NAME_WITHOUT_START_TAG:htmljson.NODE_TYPE.ELEMENT_END_TAG + 11, ATTRIBUTES_START:htmljson.NODE_TYPE.ELEMENT_END_TAG + 12, END_OF_NODE:htmljson.NODE_TYPE.ELEMENT_END_TAG + 13, END_START_TAG_AND_START_CHILD:htmljson.NODE_TYPE.ELEMENT_END_TAG + 14, END_START_TAG_AND_TEXT_DATA:htmljson.NODE_TYPE.ELEMENT_END_TAG + 15, LEAVE_EMPTY_NODE:htmljson.NODE_TYPE.ELEMENT_END_TAG + 16, LEAVE_NODE:htmljson.NODE_TYPE.ELEMENT_END_TAG + 17, END_OF_ATTRIBUTES:htmljson.NODE_TYPE.ELEMENT_END_TAG + 18, END_OF_STYLES:htmljson.NODE_TYPE.ELEMENT_END_TAG + 
19, TEXT_DATA:htmljson.NODE_TYPE.ELEMENT_END_TAG + 20, INSTRUCTION_ATTRIBUTE_FUNC_NAME:htmljson.NODE_TYPE.ELEMENT_END_TAG + 21};
htmljson.EXPECT = {ERROR:htmljson.PHASE.ERROR, NODE_START:htmljson.PHASE.NODE_START, DOCUMENT_NODE_VALUE:htmljson.PHASE.DOCUMENT_NODE_VALUE, TEXT_NODE_VALUE:htmljson.PHASE.TEXT_NODE_VALUE, CDATA_SECTION_VALUE:htmljson.PHASE.CDATA_SECTION_VALUE, COMMENT_NODE_VALUE:htmljson.PHASE.COMMENT_NODE_VALUE, COND_CMT_HIDE_LOWER_FORMURA:htmljson.PHASE.COND_CMT_HIDE_LOWER_FORMURA, COND_CMT_SHOW_LOWER_FORMURA:htmljson.PHASE.COND_CMT_SHOW_LOWER_FORMURA, NN4_COND_CMT_SHOW_LOWER_FORMURA:htmljson.PHASE.NN4_COND_CMT_SHOW_LOWER_FORMURA, 
INSTRUCTION_FUNC_NAME_AND_ARGS:htmljson.PHASE.INSTRUCTION_FUNC_NAME_AND_ARGS, TAG_NAME:htmljson.PHASE.TAG_NAME, TAG_NAME_WITHOUT_END_TAG:htmljson.PHASE.TAG_NAME_WITHOUT_END_TAG, TAG_NAME_WITHOUT_START_TAG:htmljson.PHASE.TAG_NAME_WITHOUT_START_TAG, ATTRIBUTES_START:htmljson.PHASE.ATTRIBUTES_START, END_OF_NODE:htmljson.PHASE.END_OF_NODE, NODE_TYPE:htmljson.PHASE.END_OF_NODE + 1, PROCESSING_INSTRUCTION_ARGS:htmljson.PHASE.END_OF_NODE + 2, IN_ATTRIBUTES:htmljson.PHASE.END_OF_NODE + 3, CHILD_NODES_START:htmljson.PHASE.END_OF_NODE + 
4, IN_CHILD_NODES:htmljson.PHASE.END_OF_NODE + 5, END_OF_DOCUMENT:htmljson.PHASE.END_OF_NODE + 6};
var core = {isNullOrUndefined:function(a) {
  return null == a;
}, isString:function(a) {
  return a === "" + a;
}, isNumericString:function(a) {
  return +a + "" === a && "NaN" !== a;
}, isNumber:function(a) {
  return a === +a;
}, isFiniteNumber:function(a) {
  return core.isNumber(a) && a !== a + 1;
}, isNaN:function(a) {
  return a !== a;
}, isBoolean:function(a) {
  return !!a === a;
}, isObject:function(a) {
  return !!a && "object" === typeof a;
}, isArray:function(a) {
  return !!a && a.constructor === Array;
}, isFunction:function(a) {
  return !!a && a.constructor === Function;
}, isDate:function(a) {
  return !!a && a.constructor === Date;
}, isRegExp:function(a) {
  return !!a && a.constructor === core._globalThis.RegExp;
}};
core._globalThis = "undefined" !== typeof window ? window : "undefined" !== typeof self ? self : "undefined" !== typeof global ? global : this;
core.cloneArray = function(a) {
  for (var b = [], c = 0, d = a.length; c < d; ++c) {
    b[c] = a[c];
  }
  return b;
};
core.dateToJSON = function(a) {
  function b(e) {
    return 10 > e ? "0" + e : e;
  }
  function c(e) {
    e = "000" + e;
    return e.substr(e.length - 4);
  }
  function d(e) {
    e = "00000" + e;
    return e.substr(e.length - 6);
  }
  var f = a.getUTCFullYear();
  return (0 >= f ? "-" + d(-f) : 1e4 <= f ? "+" + d(f) : c(f)) + "-" + b(a.getUTCMonth() + 1) + "-" + b(a.getUTCDate()) + "T" + b(a.getUTCHours()) + ":" + b(a.getUTCMinutes()) + ":" + b(a.getUTCSeconds()) + "." + function(e) {
    e = "00" + e;
    return e.substr(e.length - 3);
  }(a.getUTCMilliseconds()) + "Z";
};
core.deepCopy = function(a) {
  function b(c) {
    var d = c, f;
    if (core.isArray(c)) {
      d = [];
      var e = 0;
      for (f = c.length; e < f; ++e) {
        d[e] = b(c[e]);
      }
    } else if (core.isObject(c)) {
      for (e in d = {}, c) {
        d[e] = b(c[e]);
      }
    }
    return d;
  }
  return b(a);
};
core.deepEqual = function(a, b) {
  function c(d, f) {
    var e = !1, g;
    if (d === f || core.isNaN(d) && core.isNaN(f)) {
      e = !0;
    } else {
      if (core.isArray(d) && core.isArray(f)) {
        e = !0;
        var h = d.length;
        if (h !== f.length) {
          e = !1;
        } else {
          for (g = 0; g < h; ++g) {
            if (!c(d[g], f[g])) {
              e = !1;
              break;
            }
          }
        }
      } else if (core.isObject(d) && core.isObject(f)) {
        e = !0;
        h = {};
        for (g in d) {
          if (c(d[g], f[g])) {
            h[g] = !0;
          } else {
            e = !1;
            break;
          }
        }
        if (e) {
          for (g in f) {
            if (!h[g]) {
              e = !1;
              break;
            }
          }
        }
      }
    }
    return e;
  }
  return c(a, b);
};
core.hasProperty = function(a, b) {
  if (void 0 !== a[b]) {
    return !0;
  }
  for (var c in a) {
    if (c === b) {
      return !0;
    }
  }
  return !1;
};
core.hasOwnProperty = function(a, b) {
  function c(d, f, e) {
    if (void 0 !== d.__proto__) {
      var g = d.__proto__;
    } else {
      var h;
      g = d === e ? null : d === (h = d.constructor.prototype) ? e : h;
    }
    if (!g) {
      return core.hasProperty(d, f);
    }
    h = g[f];
    var p = d[f];
    p !== p !== (h !== h) ? f = !0 : p !== p ? (h = g, e = c(h, f, e), h[f] = !0, d = d[f], d = d !== d, e ? h[f] = NaN : delete h[f], f = d) : p !== h ? f = !0 : core.hasProperty(g, f) ? (e = c(g, f, e), g[f] = !h, d = p === d[f], e ? g[f] = h : delete g[f], f = d) : f = core.hasProperty(d, f);
    return f;
  }
  return c(a, b, Object.prototype);
};
core.toNumber = function(a) {
  return Number(a) === parseFloat(a) ? +a : NaN;
};
core.all = {};
htmljson.Traverser = {};
htmljson.Traverser.EnterHandler = {};
htmljson.Traverser.LeaveHandler = {};
var VISITOR_OPTION = {REMOVED:-1, NONE:0, INSERTED_BEFORER:1, BREAK:Infinity, SKIP:-Infinity};
htmljson.Traverser.VISITOR_OPTION = VISITOR_OPTION;
htmljson.Traverser.traverseAllDescendantNodes = function(a, b, c) {
  var d = a, f = m_getChildNodeStartIndex(d), e = 0, g = b(a, null, -1, e / 3), h = [-1, a, f], p = !1;
  if (g === VISITOR_OPTION.BREAK || g === VISITOR_OPTION.SKIP) {
    return !1;
  }
  if (0 < d.length - f) {
    do {
      var A = ++h[e];
      var w = d[A + f];
      if (null != w) {
        g = b(w, d, A + f, e / 3 + 1);
        if (g === VISITOR_OPTION.BREAK) {
          return p;
        }
        if (g !== VISITOR_OPTION.SKIP) {
          if (g <= VISITOR_OPTION.REMOVED) {
            h[e] += g, p = !0;
          } else {
            if (VISITOR_OPTION.INSERTED_BEFORER <= g && (h[e] += g, p = !0), m_hasChildren(w)) {
              e += 3, h[e + 0] = -1, h[e + 1] = d = w, h[e + 2] = f = m_getChildNodeStartIndex(w);
            } else if (c && d) {
              g = c(w, d, A + f, e / 3 + 1);
              if (g === VISITOR_OPTION.BREAK) {
                return p;
              }
              g !== VISITOR_OPTION.SKIP && (g <= VISITOR_OPTION.REMOVED || VISITOR_OPTION.INSERTED_BEFORER <= g) && (h[e] += g, p = !0);
            }
          }
        }
      } else {
        if (h.length = e, e -= 3, d = h[e + 1], f = h[e + 2], c && d) {
          A = h[e] + f;
          g = c(d[A], d, A, e / 3 + 1);
          if (g === VISITOR_OPTION.BREAK) {
            return p;
          }
          g !== VISITOR_OPTION.SKIP && (g <= VISITOR_OPTION.REMOVED || VISITOR_OPTION.INSERTED_BEFORER <= g) && (h[e] += g, p = !0);
        }
      }
    } while (0 <= e);
  }
  c && c(a, null, -1, 0);
  return p;
};
var VNode = function(a, b, c, d, f) {
  if (core.isBoolean(a)) {
    var e = null;
    this._isRestrictedMode = a;
  } else {
    e = a, this._isRestrictedMode = e._isRestrictedMode;
  }
  if (htmljson.DEFINE.DEBUG && e) {
    switch(e._nodeType) {
      case htmljson.NODE_TYPE.TEXT_NODE:
      case htmljson.NODE_TYPE.COMMENT_NODE:
      case htmljson.NODE_TYPE.CDATA_SECTION:
      case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION:
      case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_END:
      case htmljson.NODE_TYPE.ELEMENT_END_TAG:
        throw "nodeType:" + e._nodeType + " \u306f\u89aa\u306b\u306a\u308b\u3053\u3068\u304c\u51fa\u6765\u307e\u305b\u3093!";
    }
    if (_isDocOrDocFragment(this)) {
      throw "nodeType:" + e._nodeType + " \u306f\u5b50\u306b\u306a\u308b\u3053\u3068\u304c\u51fa\u6765\u307e\u305b\u3093!";
    }
  }
  this._parent = e;
  this._nodeType = c;
  if (e) {
    if (e._childNodes || (e._childNodes = []), a = e._childNodes, 0 <= b && b < a.length) {
      if (htmljson.DEFINE.DEBUG && 1 <= b && a[b - 1]._nodeType === htmljson.NODE_TYPE.ELEMENT_START_TAG) {
        throw "\u9589\u3058\u30bf\u30b0\u306e\u7121\u3044 Element \u306e\u6b21\u306b Node \u3092\u633f\u5165\u3059\u308b\u3053\u3068\u306f\u51fa\u6765\u307e\u305b\u3093!";
      }
      a.splice(b, 0, this);
    } else {
      if (htmljson.DEFINE.DEBUG && a.length && a[a.length - 1]._nodeType === htmljson.NODE_TYPE.ELEMENT_START_TAG) {
        throw "\u9589\u3058\u30bf\u30b0\u306e\u7121\u3044 Element \u306e\u6b21\u306b Node \u3092\u633f\u5165\u3059\u308b\u3053\u3068\u306f\u51fa\u6765\u307e\u305b\u3093!";
      }
      a.push(this);
    }
  }
  switch(c) {
    case htmljson.NODE_TYPE.ELEMENT_NODE:
    case htmljson.NODE_TYPE.ELEMENT_START_TAG:
      this._attrs = f || null, b = m_parseTagName(d), this._id = b[1], this._className = b[2], d = b[0];
    case htmljson.NODE_TYPE.ELEMENT_END_TAG:
      this._tagName = d;
      break;
    case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION:
      this._args = f || null;
    case htmljson.NODE_TYPE.TEXT_NODE:
    case htmljson.NODE_TYPE.CDATA_SECTION:
    case htmljson.NODE_TYPE.COMMENT_NODE:
    case htmljson.NODE_TYPE.DOCUMENT_NODE:
    case htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER:
    case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START:
    case htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER:
      this._nodeValue = d;
  }
};
VNode.currentRestrictedVNode = null;
VNode.parentRestrictedVNode = null;
VNode.treeIsUpdated = !1;
VNode.prototype.getRestrictedMode = function() {
  return this._isRestrictedMode ? VNode.currentRestrictedVNode === this ? this._removed ? _RESTRICTED_MODE.CURRENT_NODE_REMOVED : this._hasUnknownChildren ? _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN : _RESTRICTED_MODE.CURRENT_NODE_IS_EMPTY : VNode.currentRestrictedVNode._parent === this ? _RESTRICTED_MODE.READ_ONLY : _RESTRICTED_MODE.NEW_NODE : _RESTRICTED_MODE.NO_RESTRICTIONS;
};
VNode.prototype.getHTMLJson = function() {
  if (htmljson.DEFINE.DEBUG && this._isRestrictedMode) {
    throw "restricted mode \u3067\u306f getHTMLJSON() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  var a = [this._nodeType], b = this._childNodes, c, d;
  switch(this._nodeType) {
    case htmljson.NODE_TYPE.ELEMENT_NODE:
      a.length = 0;
    case htmljson.NODE_TYPE.ELEMENT_START_TAG:
      a.push(m_createTagName(this._tagName, this._id, this._className));
      var f = this._attrs;
      m_isAttributes(f) && (a.push(f), (c = f.style) && core.isObject(c) && (f.style = m_toCSSTest(c)));
      break;
    case htmljson.NODE_TYPE.ELEMENT_END_TAG:
      a[1] = this._tagName;
      break;
    case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION:
      if (f = this._args) {
        for (c = 0, d = f.length; c < d; ++c) {
          a[2 + c] = f[c];
        }
      }
    case htmljson.NODE_TYPE.TEXT_NODE:
    case htmljson.NODE_TYPE.CDATA_SECTION:
    case htmljson.NODE_TYPE.COMMENT_NODE:
    case htmljson.NODE_TYPE.DOCUMENT_NODE:
    case htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER:
    case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START:
    case htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER:
      a[1] = this._nodeValue;
  }
  if (b) {
    for (c = 0, d = b.length; c < d; ++c) {
      a.push(b[c].getHTMLJson());
    }
  }
  return a;
};
VNode.prototype.getNodeType = function() {
  return this._nodeType;
};
VNode.prototype.setNodeType = function(a) {
  if (htmljson.DEFINE.DEBUG) {
    if (_RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode()) {
      throw "In Restricted Mode. VNode cannot execute setNodeType()!";
    }
    if (a !== htmljson.NODE_TYPE.DOCUMENT_NODE || this._nodeType !== htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE) {
      throw "nodeType \u306e\u5909\u66f4\u306f DOCUMENT_FRAGMENT_NODE -> DOCUMENT_NODE \u3060\u3051\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u307e\u3059!";
    }
  }
  _compareValuesAndSetUpdatedFlag(this._nodeType, a);
  this._nodeType = a;
};
VNode.prototype.getNodeValue = function() {
  switch(this._nodeType) {
    case htmljson.NODE_TYPE.TEXT_NODE:
    case htmljson.NODE_TYPE.CDATA_SECTION:
    case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION:
    case htmljson.NODE_TYPE.COMMENT_NODE:
    case htmljson.NODE_TYPE.DOCUMENT_NODE:
    case htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER:
    case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START:
    case htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER:
      return this._nodeValue;
    default:
      if (htmljson.DEFINE.DEBUG) {
        throw "getNodeValue() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
      }
  }
};
VNode.prototype.setNodeValue = function(a) {
  if (htmljson.DEFINE.DEBUG && _RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode()) {
    throw "In Restricted Mode. VNode cannot execute setNodeValue()!";
  }
  switch(this._nodeType) {
    case htmljson.NODE_TYPE.TEXT_NODE:
    case htmljson.NODE_TYPE.CDATA_SECTION:
    case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION:
    case htmljson.NODE_TYPE.COMMENT_NODE:
    case htmljson.NODE_TYPE.DOCUMENT_NODE:
      _compareValuesAndSetUpdatedFlag(this._nodeValue, a);
      this._nodeValue = a;
      break;
    default:
      if (htmljson.DEFINE.DEBUG) {
        throw "setNodeValue() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
      }
  }
};
VNode.prototype.isElement = function() {
  return this._nodeType === htmljson.NODE_TYPE.ELEMENT_NODE || this._nodeType === htmljson.NODE_TYPE.ELEMENT_START_TAG;
};
VNode.prototype.isClosed = function() {
  return this._nodeType !== htmljson.NODE_TYPE.ELEMENT_START_TAG;
};
VNode.prototype.isValid = function() {
  var a = !0;
  _walkAllDescendantVNodes(this, function(b) {
    if (b._nodeType === htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER || b._nodeType === htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER) {
      return htmljson.Traverser.VISITOR_OPTION.SKIP;
    }
    if (b._nodeType === htmljson.NODE_TYPE.ELEMENT_START_TAG || b._nodeType === htmljson.NODE_TYPE.ELEMENT_END_TAG) {
      return a = !1, htmljson.Traverser.VISITOR_OPTION.BREAK;
    }
  });
  return a;
};
VNode.prototype.walkNodes = function(a, b) {
  if (htmljson.DEFINE.DEBUG && _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode()) {
    throw "In Restricted Mode. VNode cannot execute walkNodes()!";
  }
  return _walkAllDescendantVNodes(this, a, b);
};
VNode.prototype.walkElements = function(a, b) {
  if (htmljson.DEFINE.DEBUG && _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode()) {
    throw "In Restricted Mode. VNode cannot execute walkElements()!";
  }
  return _walkAllDescendantVNodes(this, function(c) {
    if (c.isElement()) {
      return a(c);
    }
  }, b ? function(c) {
    if (c.isElement()) {
      return b(c);
    }
  } : void 0);
};
VNode.prototype.walkTextNodes = function(a, b) {
  if (htmljson.DEFINE.DEBUG && _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode()) {
    throw "In Restricted Mode. VNode cannot execute walkTextNodes()!";
  }
  return _walkAllDescendantVNodes(this, function(c) {
    if (c._nodeType === htmljson.NODE_TYPE.TEXT_NODE) {
      return a(c);
    }
  }, b ? function(c) {
    if (c._nodeType === htmljson.NODE_TYPE.TEXT_NODE) {
      return b(c);
    }
  } : void 0);
};
VNode.prototype.contains = function(a) {
  if (htmljson.DEFINE.DEBUG && _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode()) {
    throw "In Restricted Mode. VNode cannot execute contains()!";
  }
  var b = !1;
  _walkAllDescendantVNodes(this, function(c) {
    if (c === a) {
      return b = !0, htmljson.Traverser.VISITOR_OPTION.BREAK;
    }
  });
  return b;
};
VNode.prototype.getElementByID = function(a) {
  if (htmljson.DEFINE.DEBUG && _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode()) {
    throw "In Restricted Mode. VNode cannot execute getElementByID()!";
  }
  var b = null;
  this.walkElements(function(c) {
    if (c.getAttr("id") === a) {
      return b = c, htmljson.Traverser.VISITOR_OPTION.BREAK;
    }
  });
  return b;
};
VNode.prototype.getElementListByTag = function(a) {
  if (htmljson.DEFINE.DEBUG && _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode()) {
    throw "In Restricted Mode. VNode cannot execute getElementListByTag()!";
  }
  var b = [], c = -1;
  this.walkElements(function(d) {
    d._tagName === a && (b[++c] = d);
  });
  return b;
};
VNode.prototype.getElementListByClass = function(a) {
  if (htmljson.DEFINE.DEBUG && _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode()) {
    throw "In Restricted Mode. VNode cannot execute getElementListByClass()!";
  }
  var b = [], c = -1;
  this.walkElements(function(d) {
    d.hasClassName(a) && (b[++c] = d);
  });
  return b;
};
VNode.prototype.getElementListByName = function(a) {
  if (htmljson.DEFINE.DEBUG && _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode()) {
    throw "In Restricted Mode. VNode cannot execute getElementListByName()!";
  }
  var b = [], c = -1;
  this.walkElements(function(d) {
    d.getAttr("name") === a && (b[++c] = d);
  });
  return b;
};
VNode.prototype.getTagName = function() {
  if (htmljson.DEFINE.DEBUG && !this.isElement() && this._nodeType !== htmljson.NODE_TYPE.ELEMENT_END_TAG) {
    throw "getTagName() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  return this._tagName;
};
VNode.prototype.setTagName = function(a) {
  if (htmljson.DEFINE.DEBUG) {
    if (!this.isElement() && this._nodeType !== htmljson.NODE_TYPE.ELEMENT_END_TAG) {
      throw "getTagName() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (_RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode()) {
      throw "In Restricted Mode. VNode cannot execute setTagName()!";
    }
  }
  _compareValuesAndSetUpdatedFlag(this._tagName, a);
  this._tagName = a;
};
VNode.prototype.getClassName = function() {
  if (htmljson.DEFINE.DEBUG && !this.isElement()) {
    throw "getClassName() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  return this._className;
};
VNode.prototype.hasClassName = function(a) {
  if (htmljson.DEFINE.DEBUG) {
    if (!this.isElement()) {
      throw "hasClassName() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (-1 !== a.indexOf(" ")) {
      throw "hasClassName() \u306f\u534a\u89d2\u6587\u5b57\u3092\u542b\u3080 className \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u307e\u305b\u3093!";
    }
  }
  return 0 <= (" " + this._className + " ").indexOf(" " + a + " ");
};
VNode.prototype.addClassName = function(a) {
  if (htmljson.DEFINE.DEBUG) {
    if (!this.isElement()) {
      throw "addClassName() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (-1 !== a.indexOf(" ")) {
      throw "addClassName() \u306f\u534a\u89d2\u6587\u5b57\u3092\u542b\u3080 className \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u307e\u305b\u3093!";
    }
    if (_RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode()) {
      throw "In Restricted Mode. VNode cannot execute addClassName()!";
    }
  }
  this.hasClassName(a) || (this._className = (this._className ? " " : "") + a, VNode.treeIsUpdated = !0);
};
VNode.prototype.removeClassName = function(a) {
  if (htmljson.DEFINE.DEBUG) {
    if (!this.isElement()) {
      throw "removeClassName() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (-1 !== a.indexOf(" ")) {
      throw "removeClassName() \u306f\u534a\u89d2\u6587\u5b57\u3092\u542b\u3080 className \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u307e\u305b\u3093!";
    }
    if (_RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode()) {
      throw "In Restricted Mode. VNode cannot execute removeClassName()!";
    }
  }
  if (this.hasClassName(a)) {
    var b = this._className.split(" ");
    b.splice(b.indexOf(a), 1);
    this._className = b.join(" ");
    VNode.treeIsUpdated = !0;
  }
};
VNode.prototype.hasAttr = function(a) {
  if (htmljson.DEFINE.DEBUG && !this.isElement()) {
    throw "hasAttr() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  return "class" === a || "className" === a ? !!this._className : "id" === a ? !!this._id : m_isAttributes(this._attrs) ? null != this._attrs[a] : !1;
};
VNode.prototype.getAttr = function(a) {
  if (htmljson.DEFINE.DEBUG && !this.isElement()) {
    throw "getAttr() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  if ("class" === a || "className" === a) {
    return this._className;
  }
  if ("id" === a) {
    return this._id;
  }
  if (m_isAttributes(this._attrs)) {
    return this._attrs[a];
  }
};
VNode.prototype.setAttr = function(a, b) {
  if (htmljson.DEFINE.DEBUG) {
    if (!this.isElement()) {
      throw "setAttr() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (_RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode()) {
      throw "In Restricted Mode. VNode cannot execute setAttr()!";
    }
  }
  "class" === a || "className" === a ? (_compareValuesAndSetUpdatedFlag(this._className, b), this._className = b) : "id" === a ? (_compareValuesAndSetUpdatedFlag(this._id, b), this._id = b) : (m_isAttributes(this._attrs) || (this._attrs = {}), _compareValuesAndSetUpdatedFlag(this._attrs[a], b), this._attrs[a] = b);
};
VNode.prototype.removeAttr = function(a) {
  if (htmljson.DEFINE.DEBUG) {
    if (!this.isElement()) {
      throw "removeAttr() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (_RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode()) {
      throw "In Restricted Mode. VNode cannot execute removeAttr()!";
    }
  }
  "class" === a || "className" === a ? (_compareValuesAndSetUpdatedFlag(this._className, ""), this._className = "") : "id" === a ? (_compareValuesAndSetUpdatedFlag(this._id, ""), this._id = "") : m_isAttributes(this._attrs) && (_compareValuesAndSetUpdatedFlag(this._attrs[a], void 0), delete this._attrs[a]);
};
VNode.prototype.getStyle = function(a) {
  if (htmljson.DEFINE.DEBUG && !this.isElement()) {
    throw "getStyle() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  var b = this.getAttr("style");
  b && core.isString(b) && (b = m_parseCSSText(b), this.setAttr("style", b));
  if (b) {
    return b[a];
  }
};
VNode.prototype.setStyle = function(a, b) {
  if (htmljson.DEFINE.DEBUG) {
    if (!this.isElement()) {
      throw "setStyle() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (_RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode()) {
      throw "In Restricted Mode. VNode cannot execute setStyle()!";
    }
  }
  var c = this.getAttr("style");
  c && core.isString(c) ? (c = m_parseCSSText(c), this.setAttr("style", c)) : c || this.setAttr("style", c = {});
  b = "0px" === b ? 0 : m_tryToFiniteNumber(b);
  _compareValuesAndSetUpdatedFlag(c[a], b);
  c[a] = b;
};
VNode.prototype.removeStyle = function(a) {
  if (htmljson.DEFINE.DEBUG) {
    if (!this.isElement()) {
      throw "removeStyle() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (_RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode()) {
      throw "In Restricted Mode. VNode cannot execute removeStyle()!";
    }
  }
  var b = this.getAttr("style");
  b && core.isString(b) && (b = m_parseCSSText(b), this.setAttr("style", b));
  b && (_compareValuesAndSetUpdatedFlag(b[a], void 0), delete b[a]);
};
VNode.prototype.getTextContent = function() {
  if (htmljson.DEFINE.DEBUG) {
    if (!this.isElement() && !_isDocOrDocFragment(this)) {
      throw "getTextContent() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (_RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode()) {
      throw "In Restricted Mode. VNode cannot execute getTextContent()!";
    }
  }
  var a = "";
  this.walkTextNodes(function(b) {
    a += b.getNodeValue();
  });
  return a;
};
VNode.prototype.setTextContent = function(a) {
  if (htmljson.DEFINE.DEBUG) {
    if (!this.isElement()) {
      throw "getStyle() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (_RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode()) {
      throw "In Restricted Mode. VNode cannot execute setTextContent()!";
    }
  }
  _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode() && (this._hasUnknownChildren = !0);
  this.empty();
  this.insertNodeFirst(htmljson.NODE_TYPE.TEXT_NODE, a);
};
VNode.prototype.getInnerText = function() {
  if (htmljson.DEFINE.DEBUG && _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode()) {
    throw "In Restricted Mode. VNode cannot execute getInnerText()!";
  }
  var a = {DIV:!0, CENTER:!0, FIELDSET:!0, BLOCKQUOTE:!0, FORM:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, ADDRESS:!0, P:!0, PRE:!0, UL:!0, OL:!0, DL:!0, DIR:!0, MENU:!0, TABLE:!0, HR:!0, TEXTAREA:!0, MARQUEE:!0}, b = "";
  this.walkNodes(function(c) {
    if (c.isElement()) {
      var d = c._tagName;
      switch(d) {
        case "SCRIPT":
        case "STYLE":
        case "NOSCRIPT":
          return htmljson.Traverser.VISITOR_OPTION.SKIP;
        case "IMG":
          return (d = c.getAttr("alt")) && (b += "[Image: " + d + "]"), htmljson.Traverser.VISITOR_OPTION.SKIP;
        case "LI":
          "OL" === c.getParent()._tagName && (b += c.getMyIndex() + 1 + ".\t");
          break;
        case "DD":
          b += "\t";
          break;
        case "BR":
          b += "\n";
          break;
        case "HR":
          b += "\n---";
          break;
        case "BUTTON":
          b += "[";
          break;
        case "BLOCKQUOTE":
          (c = c.getAttr("title")) && (b += "\n" + c);
        default:
          a[d] && (b += "\n");
      }
    } else {
      c._nodeType === htmljson.NODE_TYPE.TEXT_NODE && (b += c.getNodeValue());
    }
  }, function(c) {
    if (c.isElement()) {
      var d = c._tagName;
      switch(d) {
        case "UL":
        case "OL":
        case "DL":
        case "TABLE":
          break;
        case "TH":
        case "TD":
          c.getParent().getLastChild() !== c && (b += "\t");
          break;
        case "BUTTON":
          b += "]";
          break;
        case "LI":
        case "DT":
        case "DD":
        case "TR":
        case "CAPTION":
          b += "\n";
          break;
        default:
          a[d] && (b += "\n");
      }
    }
  });
  return b;
};
VNode.prototype.getParent = function() {
  if (htmljson.DEFINE.DEBUG && _isDocOrDocFragment(this)) {
    throw "getParent() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  return this._parent;
};
VNode.prototype.getPrevNode = function() {
  if (htmljson.DEFINE.DEBUG && _isDocOrDocFragment(this)) {
    throw "getPrevNode() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  return this._parent && this._parent.getChildNodeAt(this.getMyIndex() - 1);
};
VNode.prototype.getNextNode = function() {
  if (htmljson.DEFINE.DEBUG) {
    if (this._nodeType === htmljson.NODE_TYPE.ELEMENT_START_TAG || _isDocOrDocFragment(this)) {
      throw "getNextNode() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (_RESTRICTED_MODE.CURRENT_NODE_IS_EMPTY <= this.getRestrictedMode()) {
      throw "In Restricted Mode. VNode cannot execute getNextNode()!";
    }
  }
  return this._parent && this._parent.getChildNodeAt(this.getMyIndex() + 1);
};
VNode.prototype.getMyIndex = function() {
  if (htmljson.DEFINE.DEBUG && _isDocOrDocFragment(this)) {
    throw "getMyIndex() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  return this._parent ? this._parent._childNodes.indexOf(this) : -1;
};
VNode.prototype.getChildNodeCount = function() {
  if (htmljson.DEFINE.DEBUG) {
    if (!_canHasChildren(this)) {
      throw "getChildNodeCount() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (_RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode()) {
      throw "In Restricted Mode. VNode cannot execute getChildNodeCount()!";
    }
  }
  return this._childNodes && this._childNodes.length;
};
VNode.prototype.getFirstChild = function() {
  if (htmljson.DEFINE.DEBUG && !_canHasChildren(this)) {
    throw "getFirstChild() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  this.getRestrictedMode();
  return this.getChildNodeAt(0);
};
VNode.prototype.getLastChild = function() {
  if (htmljson.DEFINE.DEBUG) {
    if (!_canHasChildren(this)) {
      throw "getLastChild() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (_RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode()) {
      throw "In Restricted Mode. VNode cannot execute getLastChild()!";
    }
  }
  this.getRestrictedMode();
  return this.getChildNodeAt(this.getChildNodeCount() - 1);
};
VNode.prototype.getChildNodeAt = function(a) {
  if (htmljson.DEFINE.DEBUG) {
    if (!_canHasChildren(this)) {
      throw "getChildNodeAt() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (_RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode()) {
      throw "In Restricted Mode. VNode cannot execute getChildNodeAt()!";
    }
  }
  return this._childNodes && this._childNodes[a] || null;
};
VNode.prototype.remove = function() {
  if (htmljson.DEFINE.DEBUG) {
    if (_isDocOrDocFragment(this)) {
      throw "remove() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (_RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode()) {
      throw "In Restricted Mode. VNode cannot execute remove()!";
    }
  }
  if (_RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode()) {
    return this._removed = VNode.treeIsUpdated = !0, null;
  }
  var a = this.getMyIndex();
  0 <= a && (this._parent._childNodes.splice(a, 1), this._parent = null, VNode.treeIsUpdated = !0);
};
VNode.prototype.empty = function() {
  if (htmljson.DEFINE.DEBUG) {
    if (!_canHasChildren(this)) {
      throw "empty() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (_RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode()) {
      throw "In Restricted Mode. VNode cannot execute empty()!";
    }
  }
  if (_RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode()) {
    this._hasUnknownChildren = !1, VNode.treeIsUpdated = !0, this._nodesInsertedFirst && (this._nodesInsertedFirst.length = 0), this._nodesInsertedLast && (this._nodesInsertedLast.length = 0);
  } else {
    var a = this._childNodes, b;
    if (a) {
      for (b = a.length; b;) {
        a[--b].remove();
      }
    }
  }
};
VNode.prototype.wrap = function(a, b, c) {
  if (htmljson.DEFINE.DEBUG) {
    if (this._isRestrictedMode && !_isCurrentVNode(this)) {
      throw "restricted mode \u3067\u306f\u73fe\u5728\u306e\u30ce\u30fc\u30c9\u4ee5\u5916\u3078\u306e empty() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
    }
    if (_RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode()) {
      throw "In Restricted Mode. VNode cannot execute wrap()!";
    }
  }
  a = this.insertNodeBefore(a, b, c);
  _insertAt(a, 0, [this]);
  return a;
};
VNode.prototype.replace = function(a, b, c) {
  if (htmljson.DEFINE.DEBUG && _RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode()) {
    throw "In Restricted Mode. VNode cannot execute replace()!";
  }
  a = this.insertNodeBefore(a, b, c);
  this.remove();
  return a;
};
VNode.prototype.insertBefore = function(a) {
  if (htmljson.DEFINE.DEBUG) {
    if (_isDocOrDocFragment(this)) {
      throw "insertBefore() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (_RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode()) {
      throw "In Restricted Mode. VNode cannot execute insertBefore()!";
    }
  }
  this._parent && _insertAt(this._parent, this.getMyIndex(), arguments);
};
VNode.prototype.insertFirst = function(a) {
  if (htmljson.DEFINE.DEBUG && _RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode()) {
    throw "In Restricted Mode. VNode cannot execute insertFirst()!";
  }
  _insertAt(this, 0, arguments);
};
VNode.prototype.insertAt = function(a, b) {
  if (htmljson.DEFINE.DEBUG && _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode()) {
    throw "In Restricted Mode. VNode cannot execute insertAt()!";
  }
  var c = [], d;
  for (d = arguments.length; 1 < d;) {
    c[d - 2] = arguments[--d];
  }
  _insertAt(this, a, c);
};
VNode.prototype.insertLast = function(a) {
  if (htmljson.DEFINE.DEBUG && _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode()) {
    throw "In Restricted Mode. VNode cannot execute insertLast()!";
  }
  _insertAt(this, this.getChildNodeCount(), arguments);
};
VNode.prototype.insertAfter = function(a) {
  if (htmljson.DEFINE.DEBUG) {
    if (_isDocOrDocFragment(this) || this._nodeType === htmljson.NODE_TYPE.ELEMENT_START_TAG) {
      throw "insertAfter() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (_RESTRICTED_MODE.CURRENT_NODE_REMOVED <= this.getRestrictedMode()) {
      throw "In Restricted Mode. VNode cannot execute insertAfter()!";
    }
  }
  this._parent && _insertAt(this._parent, this.getMyIndex() + 1, arguments);
};
function _insertAt(a, b, c) {
  var d = a._childNodes = a._childNodes || [], f = d.length, e = c.length;
  b = b < f ? b : f;
  if (htmljson.DEFINE.DEBUG) {
    for (; e;) {
      if (htmljson.DEFINE.DEBUG && g && c[e - 1]._nodeType === htmljson.NODE_TYPE.ELEMENT_START_TAG) {
        throw "\u9589\u3058\u30bf\u30b0\u306e\u7121\u3044 Element \u306e\u6b21\u306b Node \u3092\u633f\u5165\u3059\u308b\u3053\u3068\u306f\u51fa\u6765\u307e\u305b\u3093!";
      }
      var g = c[--e];
      if (htmljson.DEFINE.DEBUG && g._nodeType === htmljson.NODE_TYPE.DOCUMENT_NODE) {
        throw "Document Node \u3092\u633f\u5165\u3059\u308b\u3053\u3068\u306f\u51fa\u6765\u307e\u305b\u3093!";
      }
    }
    e = c.length;
  }
  e && (VNode.treeIsUpdated = !0);
  for (; e;) {
    g = c[--e], g._nodeType === htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE ? g.getChildNodeCount() && _insertAt(a, b, g._childNodes) : (g.remove(), d.splice(b, 0, g), g._parent = a);
  }
}
VNode.prototype.insertElementBefore = function(a, b, c) {
  if (htmljson.DEFINE.DEBUG) {
    if (_isDocOrDocFragment(this)) {
      throw "insertElementBefore() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (_RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode()) {
      throw "In Restricted Mode. VNode cannot execute insertFirst()!";
    }
  }
  return _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode() ? (this._nodesInsertedBefore = this._nodesInsertedBefore || [], this._nodesInsertedBefore.push([htmljson.NODE_TYPE.ELEMENT_NODE, a, b, c]), VNode.treeIsUpdated = !0, null) : this._parent ? this._parent.insertElementAt(this.getMyIndex(), a, b, c) : null;
};
VNode.prototype.insertElementFirst = function(a, b, c) {
  if (htmljson.DEFINE.DEBUG && this._isRestrictedMode && !_isCurrentVNodeAndCanHaveChildren(this)) {
    throw "restricted mode \u3067\u306f\u73fe\u5728\u306e\u30ce\u30fc\u30c9\u4ee5\u5916\u3078\u306e insertElementFirst() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  return _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode() ? (this._nodesInsertedFirst = this._nodesInsertedFirst || [], this._nodesInsertedFirst.unshift([htmljson.NODE_TYPE.ELEMENT_NODE, a, b, c]), VNode.treeIsUpdated = !0, null) : this.insertElementAt(0, a, b, c);
};
VNode.prototype.insertElementAt = function(a, b, c, d) {
  if (htmljson.DEFINE.DEBUG && _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode()) {
    throw "In Restricted Mode. VNode cannot execute insertElementAt()!";
  }
  a = new VNode(this, a, htmljson.NODE_TYPE.ELEMENT_NODE, b, c);
  null != d && a.insertNodeAt(0, htmljson.NODE_TYPE.TEXT_NODE, d);
  VNode.treeIsUpdated = !0;
  return a;
};
VNode.prototype.insertElementLast = function(a, b, c) {
  if (htmljson.DEFINE.DEBUG && _RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode()) {
    throw "In Restricted Mode. VNode cannot execute insertElementLast()!";
  }
  return _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode() ? (this._nodesInsertedLast = this._nodesInsertedLast || [], this._nodesInsertedLast.push([htmljson.NODE_TYPE.ELEMENT_NODE, a, b, c]), VNode.treeIsUpdated = !0, null) : this.insertElementAt(this.getChildNodeCount(), a, b, c);
};
VNode.prototype.insertElementAfter = function(a, b, c) {
  if (htmljson.DEFINE.DEBUG) {
    if (_isDocOrDocFragment(this) || this._nodeType === htmljson.NODE_TYPE.ELEMENT_START_TAG) {
      throw "insertElementAfter() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (_RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode()) {
      throw "In Restricted Mode. VNode cannot execute insertElementLast()!";
    }
  }
  return _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode() ? (this._nodesInsertedAfter = this._nodesInsertedAfter || [], this._nodesInsertedAfter.unshift([htmljson.NODE_TYPE.ELEMENT_NODE, a, b, c]), VNode.treeIsUpdated = !0, null) : this._parent ? this._parent.insertElementAt(this.getMyIndex() + 1, a, b, c) : null;
};
VNode.prototype.insertNodeBefore = function(a, b, c) {
  if (htmljson.DEFINE.DEBUG) {
    if (_isDocOrDocFragment(this)) {
      throw "insertNodeBefore() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (_RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode()) {
      throw "In Restricted Mode. VNode cannot execute insertNodeBefore()!";
    }
  }
  return this._isRestrictedMode ? (this._nodesInsertedBefore = this._nodesInsertedBefore || [], this._nodesInsertedBefore.push([a, b, c]), VNode.treeIsUpdated = !0, null) : this._parent ? this._parent.insertNodeAt(this.getMyIndex(), a, b, c) : null;
};
VNode.prototype.insertNodeFirst = function(a, b, c) {
  if (htmljson.DEFINE.DEBUG && _RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode()) {
    throw "In Restricted Mode. VNode cannot execute insertNodeFirst()!";
  }
  return _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode() ? (this._nodesInsertedFirst = this._nodesInsertedFirst || [], this._nodesInsertedFirst.unshift([a, b, c]), VNode.treeIsUpdated = !0, null) : this.insertNodeAt(0, a, b, c);
};
VNode.prototype.insertNodeAt = function(a, b, c, d) {
  if (htmljson.DEFINE.DEBUG && _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode()) {
    throw "In Restricted Mode. VNode cannot execute insertNodeAt()!";
  }
  VNode.treeIsUpdated = !0;
  return new VNode(this, a, b, c, d);
};
VNode.prototype.insertNodeLast = function(a, b, c) {
  if (htmljson.DEFINE.DEBUG && _RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode()) {
    throw "In Restricted Mode. VNode cannot execute insertNodeFirst()!";
  }
  return _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode() ? (this._nodesInsertedLast = this._nodesInsertedLast || [], this._nodesInsertedLast.push([a, b, c]), VNode.treeIsUpdated = !0, null) : this.insertNodeAt(this.getChildNodeCount(), a, b, c);
};
VNode.prototype.insertNodeAfter = function(a, b, c) {
  if (htmljson.DEFINE.DEBUG) {
    if (_isDocOrDocFragment(this) || a === htmljson.NODE_TYPE.ELEMENT_START_TAG) {
      throw "insertNodeAfter() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (_RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode()) {
      throw "In Restricted Mode. VNode cannot execute insertNodeFirst()!";
    }
  }
  return _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode() ? (this._nodesInsertedAfter = this._nodesInsertedAfter || [], this._nodesInsertedAfter.unshift([a, b, c]), VNode.treeIsUpdated = !0, null) : this._parent ? this._parent.insertNodeAt(this.getMyIndex() + 1, a, b, c) : null;
};
var _RESTRICTED_MODE = {NO_RESTRICTIONS:0, NEW_NODE:1, CURRENT_NODE_IS_EMPTY:2, CURRENT_NODE_HAS_UNKNOWN_CHILDREN:3, CURRENT_NODE_REMOVED:4, READ_ONLY:5};
function _canHasChildren(a) {
  return a._nodeType === htmljson.NODE_TYPE.ELEMENT_NODE || a._nodeType === htmljson.NODE_TYPE.ELEMENT_START_TAG || a._nodeType === htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER || a._nodeType === htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER || _isDocOrDocFragment(a);
}
function _isDocOrDocFragment(a) {
  return a._nodeType === htmljson.NODE_TYPE.DOCUMENT_NODE || a._nodeType === htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE;
}
function _isCurrentVNode(a) {
  return a === VNode.currentRestrictedVNode && !a._removed;
}
function _isCurrentVNodeAndCanHaveChildren(a) {
  return _isCurrentVNode(a) && _canHasChildren(a);
}
function _compareValuesAndSetUpdatedFlag(a, b) {
  a !== b && (VNode.treeIsUpdated = !0);
}
function _walkAllDescendantVNodes(a, b, c) {
  var d = 0, f = !1;
  if (a.getChildNodeCount()) {
    var e = [-1, a];
    do {
      var g = ++e[d];
      if (g = a.getChildNodeAt(g)) {
        var h = b(g);
        if (h === htmljson.Traverser.VISITOR_OPTION.BREAK) {
          break;
        }
        if (h !== htmljson.Traverser.VISITOR_OPTION.SKIP) {
          if (g.getChildNodeCount()) {
            d += 2, e[d + 0] = -1, e[d + 1] = a = g;
          } else if (c) {
            h = c(g);
            if (h === htmljson.Traverser.VISITOR_OPTION.BREAK) {
              break;
            }
            h !== htmljson.Traverser.VISITOR_OPTION.SKIP && (h <= htmljson.Traverser.VISITOR_OPTION.REMOVED || htmljson.Traverser.VISITOR_OPTION.INSERTED_BEFORER <= h) && (e[d] += h, f = !0);
          }
        }
      } else {
        if (c) {
          h = c(a);
          if (h === htmljson.Traverser.VISITOR_OPTION.BREAK) {
            break;
          }
          h !== htmljson.Traverser.VISITOR_OPTION.SKIP && (h <= htmljson.Traverser.VISITOR_OPTION.REMOVED || htmljson.Traverser.VISITOR_OPTION.INSERTED_BEFORER <= h) && (e[d] += h, f = !0);
        }
        e.length = d;
        d -= 2;
        a = e[d + 1];
      }
    } while (0 <= d);
  }
  return f;
}
;htmlparser.typedef = {};
htmlparser.typedef.Handler = {};
htmlparser._CHAR_KINDS = {IS_UPPERCASE_ALPHABETS:1, IS_LOWERCASE_ALPHABETS:2, IS_WHITESPACE:4};
htmlparser._CHARS = {a:2, b:2, c:2, d:2, e:2, f:2, g:2, h:2, i:2, j:2, k:2, l:2, m:2, n:2, o:2, p:2, q:2, r:2, s:2, t:2, u:2, v:2, w:2, x:2, y:2, z:2, A:1, B:1, C:1, D:1, E:1, F:1, G:1, H:1, I:1, J:1, K:1, L:1, M:1, N:1, O:1, P:1, Q:1, R:1, S:1, T:1, U:1, V:1, W:1, X:1, Y:1, Z:1, "\t":4, "\n":4, "\f":4, "\r":4, " ":4};
htmlparser.isWhitespace = function(a) {
  return htmlparser._CHARS[a] & htmlparser._CHAR_KINDS.IS_WHITESPACE;
};
htmlparser.isAlphabet = function(a) {
  return htmlparser._CHARS[a] & htmlparser._CHAR_KINDS.IS_UPPERCASE_ALPHABETS + htmlparser._CHAR_KINDS.IS_LOWERCASE_ALPHABETS;
};
htmlparser.isXMLRootElement = function(a) {
  return !!htmlparser.XML_ROOT_ELEMENTS[a];
};
htmlparser.isNamespacedTag = function(a) {
  return 0 < a.indexOf(":");
};
htmlparser.unescapeHTML = function(a) {
  return a.split("&lt;").join("<").split("&gt;").join(">").split("&amp;lt;").join("&lt;").split("&amp;gt;").join("&gt;");
};
htmlparser.escapeHTML = function(a) {
  return a.split("&lt;").join("&amp;lt;").split("&gt;").join("&amp;gt;").split("<").join("&lt;").split(">").join("&gt;");
};
htmlparser.unescapeAttrValue = function(a) {
  return htmlparser.unescapeHTML(a).split('\\"').join('"').split("\\'").join("'");
};
var $jscomp$scope$m1534190617$0$exec = function(a, b, c, d, f, e, g, h) {
  function p() {
    z = g || h ? "" : c ? B.toUpperCase() : B;
  }
  function A() {
    k = a.indexOf("<", k + 1);
    if (-1 === k && (k = a.length, w() && htmlparser.DEFINE.USE_PAUSE)) {
      return !0;
    }
  }
  function w() {
    if (k) {
      var C = a.substr(0, k);
      a = a.substr(k);
      k = 0;
      if ((e || B && !htmlparser.NON_TEXT_CHILD_ELEMENTS[z]) && !0 === b.onParseText(x && !htmlparser.ESCAPABLE_RAW_TEXT_ELEMENTS[z] ? C : htmlparser.unescapeHTML(C)) && htmlparser.DEFINE.USE_PAUSE) {
        return F(), !0;
      }
    }
  }
  function F() {
    b.onParseProgress && b.onParseProgress(1 - a.length / f, $jscomp$scope$m1534190617$0$exec, [a, b, c, d, f, e, g, h]);
  }
  function G(C) {
    b.onParseError && b.onParseError(C);
  }
  function L(C) {
    for (var l = 0, E = a.length, m = 3, q, n; m < E && 2 !== l; ++m) {
      switch(q = a.charAt(m), l) {
        case 0:
          htmlparser.isWhitespace(q) ? l = 1 : ">" === q && (l = 2);
          l && (n = a.substring(2, m));
          break;
        case 1:
          ">" === q && (l = 2);
      }
    }
    if (2 === l) {
      a = a.substr(m), g || h ? I(C, n, !1) : (l = n.toUpperCase(), htmlparser.VOID_ELEMENTS[l] || I(C, c ? n : l, !1));
    } else {
      return G(a), !0;
    }
  }
  function I(C, l, E) {
    var m = 0, q = C.length;
    if (l) {
      for (m = q; 0 <= m && C[--m] !== l;) {
      }
    }
    if (0 <= m) {
      for (; m < q;) {
        l = b;
        var n = l.onParseEndTag, y = C[--q], u;
        if (u = E) {
          u = C[q], c && (u = u.toUpperCase()), u = !htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN[u];
        }
        n.call(l, y, u, !1);
        htmlparser.DEFINE.USE_XML_IN_HTML && g && htmlparser.isXMLRootElement(C[q]) && (g = !1);
      }
      C.length = m;
      if (htmlparser.DEFINE.USE_VML && h) {
        for (h = !1, q = m; q;) {
          if (htmlparser.isNamespacedTag(C[--q])) {
            h = !0;
            break;
          }
        }
      }
    } else {
      b.onParseEndTag(l, !1, !0);
    }
    B = d[d.length - 1] || "";
    p();
  }
  function M(C) {
    function l(P, Q) {
      y[P] = !0 === Q ? g ? P : Q : htmlparser.BOOLEAN_ATTRIBUTES[P.toLowerCase()] ? g ? htmlparser.unescapeAttrValue(Q || P) : !0 : htmlparser.unescapeAttrValue(Q || "");
      ++u;
    }
    function E() {
      (H = "/>" === a.substr(n, 2)) && ++n;
      return H;
    }
    for (var m = 1, q = a.length, n = 2, y = {}, u = 0, H = !1, r, K, J, N, S, R, O; n < q && 9 > m; ++n) {
      switch(r = a.charAt(n), m) {
        case 1:
          htmlparser.isWhitespace(r) ? (m = 2, K = a.substring(1, n)) : ">" === r ? (m = 9, K = a.substring(1, n)) : E() && (m = 9, K = a.substring(1, n - 1));
          break;
        case 2:
          ">" === r || E() ? m = 9 : htmlparser.isWhitespace(r) || (m = 3, J = n);
          break;
        case 3:
          "=" === r ? (m = 5, N = a.substring(J, n)) : htmlparser.isWhitespace(r) ? (m = 4, N = a.substring(J, n)) : ">" === r ? (m = 9, l(a.substring(J, n), !0)) : E() && (m = 9, l(a.substring(J, n - 1), !0));
          break;
        case 4:
          "=" === r ? m = 5 : ">" === r || E() ? (m = 9, l(N, !0)) : htmlparser.isWhitespace(r) || (m = 3, l(N, !0), J = n);
          break;
        case 5:
          '"' === r || "'" === r ? (m = 6, S = r, J = n + 1) : htmlparser.isWhitespace(r) || (m = 7, J = n);
          R = !1;
          break;
        case 6:
          R || r !== S || (m = 2, l(N, a.substring(J, n)));
          R = "\\" === r && !R;
          break;
        case 7:
          htmlparser.isWhitespace(r) ? m = 2 : ">" === r && (m = 9), 7 !== m && l(N, a.substring(J, n));
      }
    }
    if (9 === m) {
      htmlparser.DEFINE.USE_XML_IN_HTML && !g && (g = htmlparser.isXMLRootElement(K));
      htmlparser.DEFINE.USE_VML && !h && (h = htmlparser.isNamespacedTag(K));
      m = g || h;
      if (m) {
        H || (B = d[d.length] = K, p());
      } else {
        for (O = K.toUpperCase(); B;) {
          if (htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN[z] && !htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN[z][O]) {
            I(C, B, !1);
          } else {
            break;
          }
        }
        H = H || !!htmlparser.VOID_ELEMENTS[O];
        H || (B = d[d.length] = c ? K : O, p());
      }
      a = a.substr(n);
      if (!0 === b.onParseStartTag(c || m ? K : O, u ? y : null, H, n) && htmlparser.DEFINE.USE_PAUSE) {
        return F(), !0;
      }
    } else {
      return G(a), !0;
    }
  }
  var k = -1, z, D;
  var B = d[d.length - 1] || "";
  p();
  for (A(); a;) {
    var x = htmlparser.RAW_TEXT_ELEMENTS[z];
    if (htmlparser.DEFINE.USE_PROCESSING_INSTRUCTION && a.indexOf("<?") === k) {
      htmlparser.DEFINE.USE_XHTML && e && a.length === f && a.indexOf("<?xml ") === k && (e = !1, c = !0);
      if (w() && htmlparser.DEFINE.USE_PAUSE) {
        return;
      }
      var v = a.indexOf("?>");
      if (-1 !== v) {
        var t = a.substring(2, v);
        a = a.substr(v + 2);
        if (!0 === b.onParseProcessingInstruction(htmlparser.unescapeHTML(t)) && htmlparser.DEFINE.USE_PAUSE) {
          F();
          return;
        }
      } else {
        G(a);
        return;
      }
    } else if (a.indexOf("</", k) === k && htmlparser.isAlphabet(a.charAt(k + 2))) {
      if (x && (htmlparser.DEFINE.USE_TRADITIONAL_TAGS && "PLAINTEXT" === z ? D = !0 : a.indexOf(c ? B : B.toLowerCase(), k) !== k + 2 && a.indexOf(z, k) !== k + 2 && (D = !0)), D) {
        if (A() && htmlparser.DEFINE.USE_PAUSE) {
          return;
        }
        D = !1;
      } else {
        if (w() && htmlparser.DEFINE.USE_PAUSE || L(d)) {
          return;
        }
      }
    } else if (x) {
      if (A() && htmlparser.DEFINE.USE_PAUSE) {
        return;
      }
    } else if ("<" === a.charAt(k) && htmlparser.isAlphabet(a.charAt(k + 1))) {
      if (w() && htmlparser.DEFINE.USE_PAUSE || M(d)) {
        return;
      }
    } else if (a.indexOf("\x3c!--") === k) {
      if (w() && htmlparser.DEFINE.USE_PAUSE) {
        return;
      }
      v = a.indexOf("--\x3e");
      if (-1 !== v) {
        if (t = a.substring(4, v), a = a.substr(v + 3), !0 === b.onParseComment(htmlparser.unescapeHTML(t)) && htmlparser.DEFINE.USE_PAUSE) {
          F();
          return;
        }
      } else {
        G(a);
        return;
      }
    } else if (htmlparser.DEFINE.USE_CDATA_SECTION && a.indexOf("<![CDATA[") === k) {
      if (w() && htmlparser.DEFINE.USE_PAUSE) {
        return;
      }
      v = a.indexOf("]]\x3e");
      if (-1 !== v) {
        if (t = a.substring(9, v), a = a.substr(v + 3), !0 === b.onParseCDATASection(htmlparser.unescapeHTML(t)) && htmlparser.DEFINE.USE_PAUSE) {
          F();
          return;
        }
      } else {
        G(a);
        return;
      }
    } else if (htmlparser.DEFINE.USE_DOCUMENT_TYPE_NODE && (a.indexOf("<!DOCTYPE ") === k || a.indexOf("<!doctype ") === k)) {
      if (a = a.substr(k), k = 0, v = a.indexOf(">"), -1 !== v) {
        if (t = a.substring(0, v + 1), a = a.substr(v + 1), htmlparser.DEFINE.USE_XHTML && e && (c = 0 < t.indexOf("-//W3C//DTD XHTML ")), e = !1, !0 === b.onParseDocType(t) && htmlparser.DEFINE.USE_PAUSE) {
          F();
          return;
        }
      } else {
        G(a);
        return;
      }
    } else {
      if (A() && htmlparser.DEFINE.USE_PAUSE) {
        return;
      }
    }
  }
  I(d, "", !0);
  htmlparser.DEFINE.USE_PAUSE && b.onParseComplete && b.onParseComplete();
};
htmlparser.exec = function(a, b, c) {
  $jscomp$scope$m1534190617$0$exec(a, b, htmlparser.DEFINE.USE_XHTML && !!c, [], a.length, !0, !1, !1);
};
htmljson.base = {};
var Styles, Attrs, InstructionArgs, HTMLJson, InstructionHandler, EnterNodeHandler, m_OMITTABLE_END_TAGS = htmlparser.DEFINE.USE_TRADITIONAL_TAGS ? {HTML:!0, HEAD:!0, BODY:!0, P:!0, DT:!0, DD:!0, LI:!0, OPTION:!0, TBODY:!0, THEAD:!0, TFOOT:!0, TD:!0, TH:!0, TR:!0, RP:!0, RT:!0, OPTGROUP:!0, CAPTION:!0, COLGROUP:!0, RB:!0, RBC:!0, RTC:!0} : {HTML:!0, HEAD:!0, BODY:!0, P:!0, DT:!0, DD:!0, LI:!0, OPTION:!0, TBODY:!0, THEAD:!0, TFOOT:!0, TD:!0, TH:!0, TR:!0, RP:!0, RT:!0, OPTGROUP:!0, CAPTION:!0, COLGROUP:!0}, 
m_CHILD_P_MUST_HAVE_END_TAG = {A:!0, AUDIO:!0, DEL:!0, INS:!0, MAP:!0, NOSCRIPT:!0, VIDEO:!0}, m_TAGNAME_TO_NAMESPACE = {xml:"http://www.w3.org/1999/xhtml", svg:"http://www.w3.org/2000/svg", math:"http://www.w3.org/1998/Math/MathML"}, m_P_END_TAG_LESS_TAGS = htmlparser.DEFINE.USE_TRADITIONAL_TAGS ? {H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, ADDRESS:!0, BLOCKQUOTE:!0, DIV:!0, DL:!0, FIELDSET:!0, FORM:!0, HR:!0, LEGEND:!0, UL:!0, NOSCRIPT:!0, OL:!0, P:!0, PRE:!0, CENTER:!0, DIR:!0, NOFRAMES:!0, MARQUEE:!0, 
MENU:!0} : {H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, ADDRESS:!0, BLOCKQUOTE:!0, DIV:!0, DL:!0, FIELDSET:!0, FORM:!0, HR:!0, LEGEND:!0, UL:!0, NOSCRIPT:!0, OL:!0, P:!0, PRE:!0}, m_TRIM_NEWLINES_ELEMENTS = {SCRIPT:!0, STYLE:!0, TEXTAREA:!0, script:!0, style:!0, textarea:!0}, m_FAMILY_OF_PRE_ELEMENT = htmlparser.DEFINE.USE_TRADITIONAL_TAGS ? {PRE:!0, LISTING:!0, pre:!0, listing:!0} : {PRE:!0, pre:!0};
function m_isStringOrNumber(a) {
  return core.isString(a) || core.isNumber(a);
}
function m_isFiniteNumericString(a) {
  return a === "" + +a && core.isFiniteNumber(+a);
}
function m_tryToFiniteNumber(a) {
  return m_isFiniteNumericString(a) ? +a : a;
}
function m_isNodeList(a) {
  return core.isArray(a) && core.isArray(a[0]);
}
function m_isStrictNode(a) {
  return core.isArray(a) && (core.isNumber(a[0]) || core.isString(a[0]));
}
function m_isXHTMLDocument(a) {
  return 0 === a.indexOf("<?xml ") || 0 <= a.indexOf(' PUBLIC "-//W3C//DTD XHTML ');
}
function m_getNodeType(a) {
  return m_isStringOrNumber(a) ? htmljson.NODE_TYPE.TEXT_NODE : core.isArray(a) ? core.isString(a[0]) ? htmljson.NODE_TYPE.ELEMENT_NODE : core.isNumber(a[0]) ? a[0] : -1 : -1;
}
function m_isAttributes(a) {
  return !core.isArray(a) && core.isObject(a);
}
function m_isInstructionAttr(a, b) {
  return 0 === b.indexOf(a);
}
function m_executeProcessingInstruction(a, b, c, d) {
  var f = b[1], e = b.slice(2), g;
  core.isFunction(a) ? g = e.length ? a.call(d, f, e) : a.call(d, f) : a[f] && (g = e.length ? a[f].apply(d || a, e) : a[f].call(d || a));
  htmljson.DEFINE.DEBUG && (null == g || m_isStringOrNumber(g) || core.isArray(g) || c && c("PROCESSING_INSTRUCTION Error! [" + JSON.stringify(b) + "]"));
  (g = core.deepCopy(g)) && core.isArray(g[0]) && g.unshift(htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE);
  return g;
}
function m_replaceProcessingInstructionWithHTMLJson(a, b, c) {
  c[0] === htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE ? (c.shift(), c.unshift(b, 1), a.splice.apply(a, c)) : a.splice(b, 1, c);
}
function m_executeInstructionAttr(a, b, c, d, f) {
  var e;
  if (core.isArray(c) && core.isString(c[0])) {
    var g = c[0];
    c = c.slice(1);
    core.isFunction(a) ? e = c.length ? a.call(f, g, c) : a.call(f, g) : a[g] && (e = c.length ? a[g].apply(f || a, c) : a[g].call(f || a));
  } else {
    core.isString(c) ? core.isFunction(a) ? e = a.call(f, c) : a[c] && (e = a[c].call(f || a)) : htmljson.DEFINE.DEBUG && d && d("Invalid InstructionAttr value! [" + b + "=" + c + "]");
  }
  core.isArray(e) && (a = m_executeInstructionAttr(a, b, e, d, f), void 0 !== a && (e = a));
  return e;
}
function m_isEnterNodeHandler(a) {
  return core.isArray(a) || core.isFunction(a);
}
function m_executeEnterNodeHandler(a, b, c) {
  a = m_createVNodeFromHTMLJson(a, !0);
  var d;
  VNode.currentRestrictedVNode = a;
  b && (b._childNodes ? b._childNodes.push(a) : b._childNodes = [a]);
  if (core.isArray(c)) {
    for (b = 0, d = c.length; b < d; b += 2) {
      var f = c[b + 0];
      var e = c[b + 1];
      if (core.isNumber(f)) {
        if (f === a._nodeType && !0 === e(a)) {
          break;
        }
      } else if ("*" === f) {
        if (!0 === e(a)) {
          break;
        }
      } else if (core.isString(f)) {
        if (f === a._tagName && !0 === e(a)) {
          break;
        }
      } else if (htmljson.DEFINE.DEBUG) {
        throw "onEnterNode: invalid selector found! " + f;
      }
    }
  } else {
    c(a);
  }
  return a;
}
function m_getChildNodeStartIndex(a) {
  var b = a[0], c = m_getNodeType(a);
  return c === htmljson.NODE_TYPE.ELEMENT_NODE || c === htmljson.NODE_TYPE.ELEMENT_START_TAG ? (b = core.isNumber(b) ? 2 : 1, m_isAttributes(a[b]) ? b + 1 : b) : b === htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE ? 1 : b === htmljson.NODE_TYPE.DOCUMENT_NODE || b === htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER || b === htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER ? 2 : Infinity;
}
function m_hasChildren(a) {
  return m_getChildNodeStartIndex(a) < a.length;
}
function m_canHasChildren(a) {
  return -1 !== [htmljson.NODE_TYPE.DOCUMENT_NODE, htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE, htmljson.NODE_TYPE.ELEMENT_NODE, htmljson.NODE_TYPE.ELEMENT_START_TAG, htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER, htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER].indexOf(m_getNodeType(a));
}
function m_normalizeNewlines(a) {
  return a.split("\r\n").join("\n").split("\r").join("\n");
}
function m_trimChar(a, b) {
  return m_trimLastChar(m_trimFirstChar(a, b), b);
}
function m_trimFirstChar(a, b) {
  for (; a.charAt(0) === b;) {
    a = a.substr(1);
  }
  return a;
}
function m_trimLastChar(a, b) {
  for (; a.charAt(a.length - 1) === b;) {
    a = a.substr(0, a.length - 1);
  }
  return a;
}
function m_parseTagName(a) {
  var b = a.indexOf("#"), c = a.indexOf("."), d = "", f = "";
  b < c ? (d = a.split(".")[1], a = a.split(".")[0], 0 < b && (f = a.split("#")[1], a = a.split("#")[0])) : c < b && (f = a.split("#")[1], a = a.split("#")[0], 0 < c && (d = a.split(".")[1], a = a.split(".")[0]));
  return [a, f, d];
}
function m_createTagName(a, b, c) {
  b && (a += "#" + b);
  c && (a += "." + c);
  return a;
}
function m_toSnakeCase(a) {
  var b = [];
  a = a.split("");
  for (var c = a.length, d; c;) {
    d = a[--c], "A" <= d && "Z" >= d && (d = "-" + d.toLowerCase()), b[c] = d;
  }
  return b.join("");
}
function m_toCSSTest(a) {
  var b = [], c = -1, d;
  for (d in a) {
    var f = a[d];
    "0px" === f && (f = 0);
    b[++c] = m_toSnakeCase(d) + ":" + f;
  }
  return b.join(";");
}
function m_parseCSSText(a) {
  function b(F, G) {
    e[m_trimLastChar(F, " ")] = "0px" === G ? 0 : m_tryToFiniteNumber(m_trimLastChar(G, " "));
    ++g;
  }
  for (var c = 0, d = a.length, f = 0, e = {}, g = 0, h, p, A = "", w; f < d; ++f) {
    h = a.charAt(f);
    switch(c) {
      case 0:
        if (htmlparser.isWhitespace(h)) {
          break;
        }
        p = f;
        c = 1;
      case 1:
        ":" === h && (w = a.substring(p, f), c = 2);
        break;
      case 2:
        if (htmlparser.isWhitespace(h)) {
          break;
        }
        p = f;
        c = 3;
      case 3:
        '"' === h || "'" === h ? (A = h, c = 4) : ";" === h && (b(w, a.substring(p, f)), c = 0);
        break;
      case 4:
        A === h && (A = "", c = 3);
    }
    3 <= c && b(w, a.substring(p));
  }
  return g ? e : null;
}
function m_createVNodeFromHTMLJson(a, b) {
  var c, d;
  htmljson.Traverser.traverseAllDescendantNodes(a, function(f, e, g, h) {
    function p(G, L, I) {
      c ? (h < d.length && (d.length = h), G = d[d.length - 1].insertNodeLast(G, L, I), m_hasChildren(f) && (d[h] = G)) : (c = new VNode(b, 0, G, L, I), d = [c]);
    }
    if (m_isStringOrNumber(f)) {
      p(htmljson.NODE_TYPE.TEXT_NODE, f);
    } else {
      e = f[0];
      g = f[1];
      var A = 1, w = e, F;
      switch(e) {
        case htmljson.NODE_TYPE.DOCUMENT_NODE:
        case htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER:
        case htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER:
          p(e, g);
          break;
        case htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE:
          p(e);
          break;
        case htmljson.NODE_TYPE.TEXT_NODE:
        case htmljson.NODE_TYPE.CDATA_SECTION:
        case htmljson.NODE_TYPE.COMMENT_NODE:
        case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START:
        case htmljson.NODE_TYPE.ELEMENT_END_TAG:
          p(e, g);
          break;
        case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_END:
          p(e);
          break;
        case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION:
          A = [];
          w = 2;
          for (F = f.length; w < F; ++w) {
            A[w - 2] = f[w];
          }
          p(e, g, F - 2 ? A : null);
          break;
        case htmljson.NODE_TYPE.ELEMENT_NODE:
        case htmljson.NODE_TYPE.ELEMENT_START_TAG:
          w = g, A = 2;
        default:
          core.isString(w) && p(1 === A ? htmljson.NODE_TYPE.ELEMENT_NODE : e, w, f[A]);
      }
    }
    if (b) {
      return htmljson.Traverser.VISITOR_OPTION.BREAK;
    }
  });
  return c;
}
;htmljson.DEFINE = {};
htmljson.DEFINE.DEBUG = !1;
htmljson.DEFINE.INSTRUCTION_ATTR_PREFIX = ":";
var json2json = {main:function(a, b, c, d, f, e) {
  core.isArray(a) ? (a[0] !== htmljson.NODE_TYPE.DOCUMENT_NODE && a[0] !== htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE && (a = [htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE, a]), json2json.process(a, b, c, f, e), d && dispatchDocumentReadyEvent(d, a)) : htmljson.DEFINE.DEBUG && f && f("Invalid html.json document!");
}, process:function(a, b, c, d, f) {
  function e(k, z, D) {
    function B(v, t) {
      for (; 0 <= k.indexOf(v);) {
        k = k.split(v).join(t);
      }
    }
    D && (k = k.replace(/([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])\s([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])/g, "$1$2"));
    k = k.split("\t").join(" ");
    B("\n\n", "\n");
    B("  ", " ");
    if (z && ("\n " === k.substr(k.length - 2) && (k = m_trimLastChar(k, " ")), "\n" === k.charAt(k.length - 1))) {
      var x = "\n" === k.charAt(0);
    }
    k = m_trimLastChar(k, "\n");
    k = k.split("\n").join(" ");
    B("  ", " ");
    x && (k = m_trimChar(k, " "));
    k = k.split("\\u0020").join(" ").split("&#x20;").join(" ").split("&#32;").join(" ");
    return m_tryToFiniteNumber(k);
  }
  function g(k, z) {
    function D(l) {
      return l.split("\n").join("").split(" ").join("").split("\t").join("");
    }
    function B(l) {
      var E;
      htmljson.Traverser.traverseAllDescendantNodes(l, function(m, q, n, y) {
        m_getNodeType(m) === htmljson.NODE_TYPE.TEXT_NODE && (E = [m, q, n]);
      });
      return E;
    }
    var x, v;
    for (htmljson.Traverser.traverseAllDescendantNodes(k, function(l, E, m, q) {
      if (m_getNodeType(l) === htmljson.NODE_TYPE.TEXT_NODE) {
        l = "" + (m_isStringOrNumber(l) ? l : l[1]);
        if (D(l)) {
          return E.splice(m, 1, m_trimFirstChar(l, "\n")), htmljson.Traverser.VISITOR_OPTION.BREAK;
        }
        E.splice(m, 1);
        return htmljson.Traverser.VISITOR_OPTION.REMOVED;
      }
    }); x = B(k);) {
      var t = x[0];
      var C = x[1];
      x = x[2];
      t = "" + (m_isStringOrNumber(t) ? t : t[1]);
      if (D(t)) {
        C.splice(x, 1, m_trimLastChar(t, "\n"));
        break;
      } else {
        C.splice(x, 1);
      }
    }
    if (z) {
      for (; htmljson.Traverser.traverseAllDescendantNodes(k, function(l, E, m, q) {
        if (m_getNodeType(l) === htmljson.NODE_TYPE.TEXT_NODE) {
          var n = (q = B(k)) ? E === q[1] && m === q[2] : !1;
          q = "" + (m_isStringOrNumber(l) ? l : l[1]);
          for (var y = q.split("\n"), u = 0, H = y.length, r; u < H - (n ? 0 : 1); ++u) {
            for (q = y[u];;) {
              if (r = q.charAt(q.length - 1), "\t" === r || " " === r) {
                q = q.substr(0, q.length - 1);
              } else {
                break;
              }
            }
            y[u] = q;
          }
          q = y.join("\n");
          if ("\n" === q && v) {
            return l = v[0], n = v[1], y = v[2], m_isStringOrNumber(l) ? n[y] += q : l[1] += q, E.splice(m, 1), htmljson.Traverser.VISITOR_OPTION.REMOVED;
          }
          m_isStringOrNumber(l) ? E[m] = q : l[1] = q;
          v = [l, E, m];
        }
      });) {
      }
    }
  }
  c = f || {};
  var h = -1 !== ["normal", !0, "aggressive"].indexOf(c.trimWhitespaces), p = "aggressive" === c.trimWhitespaces, A = !!c.removeNewlineBetweenFullWidthChars, w = !1 !== c.keepCDATASections, F = !1 !== c.keepComments, G = !0 === c.keepEmptyConditionalComment, L = c.instructionAttrPrefix || htmljson.DEFINE.INSTRUCTION_ATTR_PREFIX, I, M;
  (htmljson.Traverser.traverseAllDescendantNodes(a, function(k, z, D, B) {
    B = k[0];
    var x = k[1], v = 1;
    switch(m_getNodeType(k)) {
      case htmljson.NODE_TYPE.DOCUMENT_NODE:
        h && (k[1] = htmlparser.DEFINE.USE_XHTML ? x.split("\n").join(" ").split("  ").join(" ").split("?> <!").join("?>\n<!") : x.split("\n").join(" ").split("  ").join(" "));
        break;
      case htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE:
        break;
      case htmljson.NODE_TYPE.TEXT_NODE:
        core.isArray(k) || (x = k);
        if (core.isString(x)) {
          if (M || (x = m_normalizeNewlines(x), h && (x = e(x, p, A))), "" !== x) {
            z[D] = x;
          } else {
            return z.splice(D, 1), htmljson.Traverser.VISITOR_OPTION.REMOVED;
          }
        }
        break;
      case htmljson.NODE_TYPE.CDATA_SECTION:
        if (!w) {
          return z.splice(D, 1), htmljson.Traverser.VISITOR_OPTION.REMOVED;
        }
        break;
      case htmljson.NODE_TYPE.COMMENT_NODE:
        if (!F) {
          return z.splice(D, 1), htmljson.Traverser.VISITOR_OPTION.REMOVED;
        }
        break;
      case htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER:
        break;
      case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START:
        break;
      case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_END:
        var t = z[D - 1];
        if (!G && t && t[0] === htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START) {
          return z.splice(D - 1, 2), 2 * htmljson.Traverser.VISITOR_OPTION.REMOVED;
        }
        break;
      case htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER:
        break;
      case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION:
        if (b && (t = m_executeProcessingInstruction(b, k, d), void 0 !== t)) {
          if (null === t || "" === t) {
            return z.splice(D, 1), htmljson.Traverser.VISITOR_OPTION.REMOVED;
          }
          if (m_isStringOrNumber(t)) {
            z.splice(D, 1, t), I = !0;
          } else if (core.isArray(t)) {
            return m_replaceProcessingInstructionWithHTMLJson(z, D, t), htmljson.Traverser.VISITOR_OPTION.REMOVED;
          }
        }
        break;
      case htmljson.NODE_TYPE.ELEMENT_NODE:
      case htmljson.NODE_TYPE.ELEMENT_START_TAG:
        core.isNumber(B) && (B = x, v = 2);
        B = m_parseTagName(B)[0];
        z = k[v];
        if (m_isAttributes(z)) {
          D = v - 1;
          x = 0;
          var C, l = m_parseTagName(k[D]), E = l[1], m = l[2];
          l = l[0];
          for (y in z) {
            var q = y;
            var n = z[y];
            if (C = m_isInstructionAttr(L, y)) {
              var y = y.substr(L.length);
              "className" === y && (y = "class");
              if (b) {
                if (n = m_executeInstructionAttr(b, y, n, d), void 0 !== n) {
                  if (delete z[q], core.isArray(n)) {
                    core.isString(n[0]) ? (z[q] = n, ++x) : htmljson.DEFINE.DEBUG && d && d("Invalid dynamic attribute callback value! [" + q + "=" + n + "]");
                  } else if ((!htmlparser.BOOLEAN_ATTRIBUTES[y] || !1 !== n) && null !== n) {
                    if (core.isString(n)) {
                      if ("id" === y) {
                        E = n;
                        continue;
                      } else if ("class" === y) {
                        q = n.split(" ");
                        for (n = q.length; n;) {
                          C = q[--n], -1 === (" " + m + " ").indexOf(" " + C + " ") && (m = (m ? " " : "") + C);
                        }
                        continue;
                      }
                    }
                    z[y] = n;
                    ++x;
                  }
                } else {
                  ++x;
                }
              } else {
                ++x;
              }
            } else {
              ++x;
            }
          }
          k[D] = m_createTagName(l, E, m);
          0 === x && k.splice(v, 1);
        }
        if (m_FAMILY_OF_PRE_ELEMENT[B]) {
          g(k, p), M = k;
        } else if (m_TRIM_NEWLINES_ELEMENTS[B]) {
          k = M = k;
          y = m_getChildNodeStartIndex(k);
          B = k.length;
          for (var u, H, r; y < B; ++y) {
            v = k[y], m_getNodeType(v) === htmljson.NODE_TYPE.TEXT_NODE && (t = t || y, u = u || v, H = y, r = v);
          }
          t && (core.isArray(u) && (u = u[1]), core.isArray(r) && (r = r[1]), t === H ? core.isString(u) && (u = m_normalizeNewlines(u), u = m_trimChar(u, "\n"), k[t] = m_tryToFiniteNumber(u)) : (core.isString(u) && (u = m_normalizeNewlines(u), u = m_trimFirstChar(u, "\n"), k[t] = m_tryToFiniteNumber(u)), core.isString(r) && (r = m_normalizeNewlines(r), r = m_trimLastChar(r, "\n"), k[H] = m_tryToFiniteNumber(r))));
        }
        break;
      default:
        htmljson.DEFINE.DEBUG && d && d("Not html.json! [" + k + "]");
    }
  }, function(k, z, D, B) {
    if (!G) {
      switch(m_getNodeType(k)) {
        case htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER:
        case htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER:
          if (2 === k.length) {
            return z.splice(D, 1), htmljson.Traverser.VISITOR_OPTION.REMOVED;
          }
      }
    }
    M === k && (M = null);
  }) || I) && normalizeTextNodes(a);
}};
function dispatchDocumentReadyEvent(a, b) {
  var c = m_createVNodeFromHTMLJson(b, !1);
  VNode.treeIsUpdated = !1;
  a(c);
  if (a = VNode.treeIsUpdated) {
    VNode.treeIsUpdated = !1, b.length = 0, b.push.apply(b, c.getHTMLJson()), normalizeTextNodes(b);
  }
  return a;
}
function normalizeTextNodes(a) {
  function b() {
    f.splice(e, 0, m_tryToFiniteNumber(c));
    c = "";
  }
  var c = "", d, f, e;
  htmljson.Traverser.traverseAllDescendantNodes(a, function(g, h, p, A) {
    if (c && d !== A) {
      return b(), htmljson.Traverser.VISITOR_OPTION.INSERTED_BEFORER;
    }
    if (m_getNodeType(g) === htmljson.NODE_TYPE.TEXT_NODE) {
      return c = m_isStringOrNumber(g) ? c + g : c + g[1], h.splice(p, 1), d = A, f = h, e = p, htmljson.Traverser.VISITOR_OPTION.REMOVED;
    }
    if (c) {
      return b(), htmljson.Traverser.VISITOR_OPTION.INSERTED_BEFORER;
    }
  });
  c && b();
}
;json2json.module = {};
module.exports = json2json.main;
json2json.main.DOCUMENT_NODE = htmljson.NODE_TYPE.DOCUMENT_NODE;
json2json.main.DOCUMENT_FRAGMENT_NODE = htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE;
json2json.main.ELEMENT_NODE = htmljson.NODE_TYPE.ELEMENT_NODE;
json2json.main.TEXT_NODE = htmljson.NODE_TYPE.TEXT_NODE;
json2json.main.CDATA_SECTION = htmljson.NODE_TYPE.CDATA_SECTION;
json2json.main.PROCESSING_INSTRUCTION = htmljson.NODE_TYPE.PROCESSING_INSTRUCTION;
json2json.main.COMMENT_NODE = htmljson.NODE_TYPE.COMMENT_NODE;
json2json.main.COND_CMT_HIDE_LOWER = htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER;
json2json.main.COND_CMT_SHOW_LOWER_START = htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START;
json2json.main.COND_CMT_SHOW_LOWER_END = htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_END;
json2json.main.NETSCAPE4_COND_CMT_HIDE_LOWER = htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER;
json2json.main.ELEMENT_START_TAG = htmljson.NODE_TYPE.ELEMENT_START_TAG;
json2json.main.ELEMENT_END_TAG = htmljson.NODE_TYPE.ELEMENT_END_TAG;
json2json.gulp = {};
json2json.main.gulp = function(a, b, c, d, f) {
  const e = require("plugin-error"), g = require("through2"), h = f && f.prettify;
  return g.obj(function(p, A, w) {
    if (p.isNull()) {
      return w();
    }
    if (p.isStream()) {
      return this.emit("error", new e("json2json", "Streaming not supported")), w();
    }
    if (".json" === p.extname) {
      try {
        const F = JSON.parse(p.contents.toString(A));
        json2json.main(F, a, b, c, d, f);
        const G = JSON.stringify(F, null, h ? "    " : "");
        p.contents = Buffer.from(G);
      } catch (F) {
        this.emit("error", new e("json2json", F));
      }
    }
    w(null, p);
  });
};

