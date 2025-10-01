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
var htmlparser = {XML_ROOT_ELEMENTS:{xml:!0, svg:!0, math:!0}, BOOLEAN_ATTRIBUTES:{async:!0, autofocus:!0, checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, draggable:!0, hidden:!0, ismap:!0, loop:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, novalidate:!0, nowrap:!0, readonly:!0, required:!0, reversed:!0, scoped:!0, selected:!0}, VOID_ELEMENTS:{AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, COMMAND:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, 
META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0, area:!0, base:!0, basefont:!0, br:!0, bgsound:!0, col:!0, command:!0, frame:!0, hr:!0, img:!0, input:!0, isindex:!0, keygen:!0, link:!0, meta:!0, param:!0, source:!0, track:!0, embed:!0, wbr:!0}, RAW_TEXT_ELEMENTS:{SCRIPT:!0, STYLE:!0, TEXTAREA:!0, TITLE:!0, PLAINTEXT:!0, XMP:!0, LISTING:!0, script:!0, style:!0, textarea:!0, title:!0, plaintext:!0, xmp:!0, listing:!0}, ESCAPABLE_RAW_TEXT_ELEMENTS:{TEXTAREA:!0, TITLE:!0, textarea:!0, title:!0}}, 
$jscomp$scope$m1651817518$0$OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN = {CAPTION:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, 
PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DD:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, 
DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, 
DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DT:{ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, TABLE:!0, FORM:!0, 
LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, P:{A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, 
MAP:!0, AREA:!0, math:!0, svg:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, HTML:{HEAD:!0, BODY:!0}, HEAD:{TITLE:!0, BASE:!0, BGSOUND:!0, LINK:!0, META:!0, STYLE:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0}, COLGROUP:{COL:!0}, OPTGROUP:{OPTION:!0}, OPTION:{}, TBODY:{TR:!0}, TR:{TH:!0, TD:!0}, RBC:{RB:!0, RP:!0, RT:!0}};
$jscomp$scope$m1651817518$0$OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.LI = $jscomp$scope$m1651817518$0$OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.TD = $jscomp$scope$m1651817518$0$OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.DD;
$jscomp$scope$m1651817518$0$OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.TH = $jscomp$scope$m1651817518$0$OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.DT;
$jscomp$scope$m1651817518$0$OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.RB = $jscomp$scope$m1651817518$0$OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.RP = $jscomp$scope$m1651817518$0$OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.RT = $jscomp$scope$m1651817518$0$OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.P;
$jscomp$scope$m1651817518$0$OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.TFOOT = $jscomp$scope$m1651817518$0$OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.THEAD = $jscomp$scope$m1651817518$0$OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.TBODY;
$jscomp$scope$m1651817518$0$OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.RTC = $jscomp$scope$m1651817518$0$OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.RBC;
htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN = $jscomp$scope$m1651817518$0$OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN;
var htmljson = {NODE_TYPE:{ELEMENT_NODE:1, TEXT_NODE:3, CDATA_SECTION:4, PROCESSING_INSTRUCTION:7, COMMENT_NODE:8, DOCUMENT_NODE:9, DOCUMENT_FRAGMENT_NODE:11, COND_CMT_HIDE_LOWER:13, COND_CMT_SHOW_LOWER_START:14, COND_CMT_SHOW_LOWER_END:15, NETSCAPE4_COND_CMT_HIDE_LOWER:16, ELEMENT_START_TAG:17, ELEMENT_END_TAG:18}};
htmljson.PHASE = {ERROR:htmljson.NODE_TYPE.ELEMENT_NODE - 2, NODE_START:htmljson.NODE_TYPE.ELEMENT_NODE - 1, ENTER_ELEMENT_NODE:htmljson.NODE_TYPE.ELEMENT_NODE, ENTER_TEXT_NODE:htmljson.NODE_TYPE.TEXT_NODE, ENTER_CDATA_SECTION:htmljson.NODE_TYPE.CDATA_SECTION, ENTER_PROCESSING_INSTRUCTION:htmljson.NODE_TYPE.PROCESSING_INSTRUCTION, ENTER_COMMENT_NODE:htmljson.NODE_TYPE.COMMENT_NODE, ENTER_DOCUMENT_NODE:htmljson.NODE_TYPE.DOCUMENT_NODE, ENTER_DOCUMENT_FRAGMENT_NODE:htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE, 
ENTER_COND_CMT_HIDE_LOWER:htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER, ENTER_COND_CMT_SHOW_LOWER_START:htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START, ENTER_COND_CMT_SHOW_LOWER_END:htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_END, ENTER_NN4_COND_CMT_HIDE_LOWER:htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER, ENTER_ELEMENT_START_TAG:htmljson.NODE_TYPE.ELEMENT_START_TAG, ENTER_ELEMENT_END_TAG:htmljson.NODE_TYPE.ELEMENT_END_TAG, DOCUMENT_NODE_VALUE:htmljson.NODE_TYPE.ELEMENT_END_TAG + 1, TEXT_NODE_VALUE:htmljson.NODE_TYPE.ELEMENT_END_TAG + 
2, CDATA_SECTION_VALUE:htmljson.NODE_TYPE.ELEMENT_END_TAG + 3, COMMENT_NODE_VALUE:htmljson.NODE_TYPE.ELEMENT_END_TAG + 4, COND_CMT_HIDE_LOWER_FORMURA:htmljson.NODE_TYPE.ELEMENT_END_TAG + 5, COND_CMT_SHOW_LOWER_FORMURA:htmljson.NODE_TYPE.ELEMENT_END_TAG + 6, NN4_COND_CMT_SHOW_LOWER_FORMURA:htmljson.NODE_TYPE.ELEMENT_END_TAG + 7, INSTRUCTION_FUNC_NAME_SND_ARGS:htmljson.NODE_TYPE.ELEMENT_END_TAG + 8, TAG_NAME:htmljson.NODE_TYPE.ELEMENT_END_TAG + 9, TAG_NAME_WITHOUT_END_TAG:htmljson.NODE_TYPE.ELEMENT_END_TAG + 
10, TAG_NAME_WITHOUT_START_TAG:htmljson.NODE_TYPE.ELEMENT_END_TAG + 11, ATTRIBUTES_START:htmljson.NODE_TYPE.ELEMENT_END_TAG + 12, END_OF_NODE:htmljson.NODE_TYPE.ELEMENT_END_TAG + 13, END_START_TAG_AND_START_CHILD:htmljson.NODE_TYPE.ELEMENT_END_TAG + 14, END_START_TAG_AND_TEXT_DATA:htmljson.NODE_TYPE.ELEMENT_END_TAG + 15, LEAVE_EMPTY_NODE:htmljson.NODE_TYPE.ELEMENT_END_TAG + 16, LEAVE_NODE:htmljson.NODE_TYPE.ELEMENT_END_TAG + 17, END_OF_ATTRIBUTES:htmljson.NODE_TYPE.ELEMENT_END_TAG + 18, END_OF_STYLES:htmljson.NODE_TYPE.ELEMENT_END_TAG + 
19, TEXT_DATA:htmljson.NODE_TYPE.ELEMENT_END_TAG + 20, INSTRUCTION_ATTRIBUTE_FUNC_NAME:htmljson.NODE_TYPE.ELEMENT_END_TAG + 21};
htmljson.EXPECT = {ERROR:htmljson.PHASE.ERROR, NODE_START:htmljson.PHASE.NODE_START, DOCUMENT_NODE_VALUE:htmljson.PHASE.DOCUMENT_NODE_VALUE, TEXT_NODE_VALUE:htmljson.PHASE.TEXT_NODE_VALUE, CDATA_SECTION_VALUE:htmljson.PHASE.CDATA_SECTION_VALUE, COMMENT_NODE_VALUE:htmljson.PHASE.COMMENT_NODE_VALUE, COND_CMT_HIDE_LOWER_FORMURA:htmljson.PHASE.COND_CMT_HIDE_LOWER_FORMURA, COND_CMT_SHOW_LOWER_FORMURA:htmljson.PHASE.COND_CMT_SHOW_LOWER_FORMURA, NN4_COND_CMT_SHOW_LOWER_FORMURA:htmljson.PHASE.NN4_COND_CMT_SHOW_LOWER_FORMURA, 
INSTRUCTION_FUNC_NAME_SND_ARGS:htmljson.PHASE.INSTRUCTION_FUNC_NAME_SND_ARGS, TAG_NAME:htmljson.PHASE.TAG_NAME, TAG_NAME_WITHOUT_END_TAG:htmljson.PHASE.TAG_NAME_WITHOUT_END_TAG, TAG_NAME_WITHOUT_START_TAG:htmljson.PHASE.TAG_NAME_WITHOUT_START_TAG, ATTRIBUTES_START:htmljson.PHASE.ATTRIBUTES_START, END_OF_NODE:htmljson.PHASE.END_OF_NODE, NODE_TYPE:htmljson.PHASE.END_OF_NODE + 1, PROCESSING_INSTRUCTION_ARGS:htmljson.PHASE.END_OF_NODE + 2, IN_ATTRIBUTES:htmljson.PHASE.END_OF_NODE + 3, CHILD_NODES_START:htmljson.PHASE.END_OF_NODE + 
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
  for (var b = [], c = 0, e = a.length; c < e; ++c) {
    b[c] = a[c];
  }
  return b;
};
core.dateToJSON = function(a) {
  function b(d) {
    return 10 > d ? "0" + d : d;
  }
  function c(d) {
    d = "000" + d;
    return d.substr(d.length - 4);
  }
  function e(d) {
    d = "00000" + d;
    return d.substr(d.length - 6);
  }
  var f = a.getUTCFullYear();
  return (0 >= f ? "-" + e(-f) : 1e4 <= f ? "+" + e(f) : c(f)) + "-" + b(a.getUTCMonth() + 1) + "-" + b(a.getUTCDate()) + "T" + b(a.getUTCHours()) + ":" + b(a.getUTCMinutes()) + ":" + b(a.getUTCSeconds()) + "." + function(d) {
    d = "00" + d;
    return d.substr(d.length - 3);
  }(a.getUTCMilliseconds()) + "Z";
};
core.deepCopy = function(a) {
  function b(c) {
    var e = c, f;
    if (core.isArray(c)) {
      e = [];
      var d = 0;
      for (f = c.length; d < f; ++d) {
        e[d] = b(c[d]);
      }
    } else if (core.isObject(c)) {
      for (d in e = {}, c) {
        e[d] = b(c[d]);
      }
    }
    return e;
  }
  return b(a);
};
core.deepEqual = function(a, b) {
  function c(e, f) {
    var d = !1, g;
    if (e === f || core.isNaN(e) && core.isNaN(f)) {
      d = !0;
    } else {
      if (core.isArray(e) && core.isArray(f)) {
        d = !0;
        var h = e.length;
        if (h !== f.length) {
          d = !1;
        } else {
          for (g = 0; g < h; ++g) {
            if (!c(e[g], f[g])) {
              d = !1;
              break;
            }
          }
        }
      } else if (core.isObject(e) && core.isObject(f)) {
        d = !0;
        h = {};
        for (g in e) {
          if (c(e[g], f[g])) {
            h[g] = !0;
          } else {
            d = !1;
            break;
          }
        }
        if (d) {
          for (g in f) {
            if (!h[g]) {
              d = !1;
              break;
            }
          }
        }
      }
    }
    return d;
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
  function c(e, f, d) {
    if (void 0 !== e.__proto__) {
      var g = e.__proto__;
    } else {
      var h;
      g = e === d ? null : e === (h = e.constructor.prototype) ? d : h;
    }
    if (!g) {
      return core.hasProperty(e, f);
    }
    h = g[f];
    var n = e[f];
    n !== n !== (h !== h) ? f = !0 : n !== n ? (h = g, d = c(h, f, d), h[f] = !0, e = e[f], e = e !== e, d ? h[f] = NaN : delete h[f], f = e) : n !== h ? f = !0 : core.hasProperty(g, f) ? (d = c(g, f, d), g[f] = !h, e = n === e[f], d ? g[f] = h : delete g[f], f = e) : f = core.hasProperty(e, f);
    return f;
  }
  return c(a, b, Object.prototype);
};
core.toNumber = function(a) {
  return Number(a) === parseFloat(a) ? +a : NaN;
};
core.all = {};
var VNode = function(a, b, c, e, f) {
  if (core.isBoolean(a)) {
    var d = null;
    this._isRestrictedMode = a;
  } else {
    d = a, this._isRestrictedMode = d._isRestrictedMode;
  }
  if (htmljson.DEFINE.DEBUG && d) {
    switch(d._nodeType) {
      case htmljson.NODE_TYPE.TEXT_NODE:
      case htmljson.NODE_TYPE.COMMENT_NODE:
      case htmljson.NODE_TYPE.CDATA_SECTION:
      case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION:
      case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_END:
      case htmljson.NODE_TYPE.ELEMENT_END_TAG:
        throw "nodeType:" + d._nodeType + " \u306f\u89aa\u306b\u306a\u308b\u3053\u3068\u304c\u51fa\u6765\u307e\u305b\u3093!";
    }
    if (_isDocOrDocFragment(this)) {
      throw "nodeType:" + d._nodeType + " \u306f\u5b50\u306b\u306a\u308b\u3053\u3068\u304c\u51fa\u6765\u307e\u305b\u3093!";
    }
  }
  this._parent = d;
  this._nodeType = c;
  if (d) {
    if (d._childNodes || (d._childNodes = []), a = d._childNodes, 0 <= b && b < a.length) {
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
      this._attrs = f || null, b = m_parseTagName(e), this._id = b[1], this._className = b[2], e = b[0];
    case htmljson.NODE_TYPE.ELEMENT_END_TAG:
      this._tagName = e;
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
      this._nodeValue = e;
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
  var a = [this._nodeType], b = this._childNodes, c, e;
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
        for (c = 0, e = f.length; c < e; ++c) {
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
    for (c = 0, e = b.length; c < e; ++c) {
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
  _walkAllDescendantNodes(this, function(b) {
    if (b._nodeType === htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER || b._nodeType === htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER) {
      return _WALK.SKIP;
    }
    if (b._nodeType === htmljson.NODE_TYPE.ELEMENT_START_TAG || b._nodeType === htmljson.NODE_TYPE.ELEMENT_END_TAG) {
      return a = !1, _WALK.BREAK;
    }
  });
  return a;
};
VNode.prototype.walkNodes = function(a) {
  if (htmljson.DEFINE.DEBUG && _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode()) {
    throw "In Restricted Mode. VNode cannot execute walkNodes()!";
  }
  _walkAllDescendantNodes(this, a);
};
VNode.prototype.walkElements = function(a) {
  if (htmljson.DEFINE.DEBUG && _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode()) {
    throw "In Restricted Mode. VNode cannot execute walkElements()!";
  }
  _walkAllDescendantNodes(this, function(b) {
    if (b.isElement()) {
      return a(b);
    }
  });
};
VNode.prototype.walkText = function(a) {
  if (htmljson.DEFINE.DEBUG && _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode()) {
    throw "In Restricted Mode. VNode cannot execute walkText()!";
  }
  _walkAllDescendantNodes(this, function(b) {
    if (b._nodeType === htmljson.NODE_TYPE.TEXT_NODE) {
      return a(b);
    }
  });
};
VNode.prototype.contains = function(a) {
  if (htmljson.DEFINE.DEBUG && _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode()) {
    throw "In Restricted Mode. VNode cannot execute contains()!";
  }
  var b = !1;
  _walkAllDescendantNodes(this, function(c) {
    if (c === a) {
      return b = !0, _WALK.BREAK;
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
      return b = c, _WALK.BREAK;
    }
  });
  return b;
};
VNode.prototype.getElementListByTag = function(a) {
  if (htmljson.DEFINE.DEBUG && _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode()) {
    throw "In Restricted Mode. VNode cannot execute getElementListByTag()!";
  }
  var b = [], c = -1;
  this.walkElements(function(e) {
    e._tagName === a && (b[++c] = e);
  });
  return b;
};
VNode.prototype.getElementListByClass = function(a) {
  if (htmljson.DEFINE.DEBUG && _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode()) {
    throw "In Restricted Mode. VNode cannot execute getElementListByClass()!";
  }
  var b = [], c = -1;
  this.walkElements(function(e) {
    e.hasClassName(a) && (b[++c] = e);
  });
  return b;
};
VNode.prototype.getElementListByName = function(a) {
  if (htmljson.DEFINE.DEBUG && _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode()) {
    throw "In Restricted Mode. VNode cannot execute getElementListByName()!";
  }
  var b = [], c = -1;
  this.walkElements(function(e) {
    e.getAttr("name") === a && (b[++c] = e);
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
  this.walkText(function(b) {
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
  var c = [], e;
  for (e = arguments.length; 1 < e;) {
    c[e - 2] = arguments[--e];
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
  var e = a._childNodes = a._childNodes || [], f = e.length, d = c.length;
  b = b < f ? b : f;
  if (htmljson.DEFINE.DEBUG) {
    for (; d;) {
      if (htmljson.DEFINE.DEBUG && g && c[d - 1]._nodeType === htmljson.NODE_TYPE.ELEMENT_START_TAG) {
        throw "\u9589\u3058\u30bf\u30b0\u306e\u7121\u3044 Element \u306e\u6b21\u306b Node \u3092\u633f\u5165\u3059\u308b\u3053\u3068\u306f\u51fa\u6765\u307e\u305b\u3093!";
      }
      var g = c[--d];
      if (htmljson.DEFINE.DEBUG && g._nodeType === htmljson.NODE_TYPE.DOCUMENT_NODE) {
        throw "Document Node \u3092\u633f\u5165\u3059\u308b\u3053\u3068\u306f\u51fa\u6765\u307e\u305b\u3093!";
      }
    }
    d = c.length;
  }
  d && (VNode.treeIsUpdated = !0);
  for (; d;) {
    g = c[--d], g._nodeType === htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE ? g.getChildNodeCount() && _insertAt(a, b, g._childNodes) : (g.remove(), e.splice(b, 0, g), g._parent = a);
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
VNode.prototype.insertElementAt = function(a, b, c, e) {
  if (htmljson.DEFINE.DEBUG && _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode()) {
    throw "In Restricted Mode. VNode cannot execute insertElementAt()!";
  }
  a = new VNode(this, a, htmljson.NODE_TYPE.ELEMENT_NODE, b, c);
  null != e && a.insertNodeAt(0, htmljson.NODE_TYPE.TEXT_NODE, e);
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
VNode.prototype.insertNodeAt = function(a, b, c, e) {
  if (htmljson.DEFINE.DEBUG && _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode()) {
    throw "In Restricted Mode. VNode cannot execute insertNodeAt()!";
  }
  VNode.treeIsUpdated = !0;
  return new VNode(this, a, b, c, e);
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
var _RESTRICTED_MODE = {NO_RESTRICTIONS:0, NEW_NODE:1, CURRENT_NODE_IS_EMPTY:2, CURRENT_NODE_HAS_UNKNOWN_CHILDREN:3, CURRENT_NODE_REMOVED:4, READ_ONLY:5}, _WALK = {NONE:0, BREAK:1, SKIP:2};
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
function _walkAllDescendantNodes(a, b) {
  a = a._childNodes;
  var c = 0, e;
  if (a && (e = a.length)) {
    var f = [-1, a];
    do {
      var d = ++f[c];
      if (d = a[d]) {
        e = b(d);
        if (e === _WALK.BREAK) {
          break;
        }
        e !== _WALK.SKIP && (d = d._childNodes) && (e = d.length) && (c += 2, f[c + 0] = -1, f[c + 1] = a = d);
      } else {
        f.length = c, c -= 2, a = f[c + 1];
      }
    } while (0 <= c);
  }
}
;htmlparser.DEFINE = {};
htmlparser.typedef = {};
htmlparser.typedef.Handler = {};
htmlparser.DEFINE.USE_XML = !0;
htmlparser.DEFINE.USE_VML = !1;
htmlparser.DEFINE.USE_DOCUMENT_TYPE_NODE = !1;
htmlparser.DEFINE.USE_CDATA_SECTION = !0;
htmlparser.DEFINE.USE_PROCESSING_INSTRUCTION = !1;
htmlparser.DEFINE.TIME_SLICE_EXECUTION = !1;
htmlparser.DEFINE.STOP_PARSING = !0;
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
var $jscomp$scope$m1534190617$1$exec = function(a, b, c, e, f, d, g, h) {
  function n() {
    b = a.indexOf("<", b + 1);
    -1 === b && (b = a.length, w());
  }
  function w() {
    if (b) {
      var u = a.substring(0, b);
      c.onParseText(x && !htmlparser.ESCAPABLE_RAW_TEXT_ELEMENTS[D] ? u : G(u));
      a = a.substring(b);
      b = 0;
    }
  }
  function y(u) {
    c.onParseError && c.onParseError(u);
  }
  function G(u) {
    return u.split("&lt;").join("<").split("&gt;").join(">").split("&amp;lt;").join("&lt;").split("&amp;gt;").join("&gt;");
  }
  function I(u, q, B) {
    for (var t = 0, r = B.length, m = 3, k, z; m < r && 2 !== t;) {
      z = B.charAt(m);
      switch(t) {
        case 0:
          htmlparser.isWhitespace(z) ? t = 1 : ">" === z && (t = 2);
          t && (k = B.substring(2, m));
          break;
        case 1:
          ">" === z && (t = 2);
      }
      ++m;
    }
    return 2 === t ? !htmlparser.VOID_ELEMENTS[k] && K(u, q, d || g ? k : k.toUpperCase(), !1) && htmlparser.DEFINE.STOP_PARSING ? $jscomp$scope$m1534190617$0$PARSING_STOP : m : 0;
  }
  function K(u, q, B, t) {
    var r = 0, m = u.length;
    if (B) {
      for (r = m; 0 <= r && u[--r] !== B;) {
      }
    }
    if (0 <= r) {
      for (; r < m;) {
        if (!0 === q.onParseEndTag(u[--m], t && !$jscomp$scope$m1651817518$0$OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN[u[m]], !1) && htmlparser.DEFINE.STOP_PARSING) {
          return !0;
        }
        htmlparser.DEFINE.USE_XML && d && htmlparser.isXMLRootElement(u[m]) && (d = !!q.isXHTML);
      }
      u.length = r;
      if (htmlparser.DEFINE.USE_VML && g) {
        for (g = !1, m = r; m;) {
          if (htmlparser.isNamespacedTag(u[--m])) {
            g = !0;
            break;
          }
        }
      }
    } else {
      if (!0 === q.onParseEndTag(B, !1, !0) && htmlparser.DEFINE.STOP_PARSING) {
        return !0;
      }
    }
  }
  function J(u, q, B, t) {
    function r(Q, R) {
      function S(V) {
        return G(V).split('\\"').join('"').split("\\'").join("'").split("&quot;").join('"').split("&apos;").join("'");
      }
      H[Q] = !0 === R ? !0 : htmlparser.BOOLEAN_ATTRIBUTES[Q.toLowerCase()] ? d ? S(R || Q) : !0 : S(R || "");
      ++T;
    }
    function m() {
      (O = "/>" === t.substr(A, 2)) && ++A;
      return O;
    }
    for (var k = 1, z = t.length, A = 2, H = {}, T = 0, O = !1, F, M, L, N, U, P; A < z && 9 > k;) {
      F = t.charAt(A);
      switch(k) {
        case 1:
          if (htmlparser.isWhitespace(F)) {
            k = 2, M = t.substring(1, A);
          } else if (">" === F || m()) {
            k = 9, M = t.substring(1, A);
          }
          break;
        case 2:
          ">" === F || m() ? k = 9 : htmlparser.isWhitespace(F) || (k = 3, L = A);
          break;
        case 3:
          if ("=" === F) {
            k = 5, N = t.substring(L, A);
          } else if (htmlparser.isWhitespace(F)) {
            k = 4, N = t.substring(L, A);
          } else if (">" === F || m()) {
            k = 9, r(t.substring(L, A), !0);
          }
          break;
        case 4:
          "=" === F ? k = 5 : ">" === F || m() ? (k = 9, r(N, !0)) : htmlparser.isWhitespace(F) || (k = 3, r(N, !0), L = A);
          break;
        case 5:
          '"' === F || "'" === F ? (k = 6, U = F, L = A + 1) : htmlparser.isWhitespace(F) || (k = 7, L = A);
          P = !1;
          break;
        case 6:
          P || F !== U || (k = 2, r(N, t.substring(L, A)));
          P = "\\" === F && !P;
          break;
        case 7:
          htmlparser.isWhitespace(F) ? k = 2 : ">" === F && (k = 9), 7 !== k && r(N, t.substring(L, A));
      }
      ++A;
    }
    if (9 === k) {
      k = M.toUpperCase();
      htmlparser.DEFINE.USE_XML && !d && (d = htmlparser.isXMLRootElement(M));
      htmlparser.DEFINE.USE_VML && !g && (g = htmlparser.isNamespacedTag(M));
      if (!d && !g) {
        for (; q;) {
          if ($jscomp$scope$m1651817518$0$OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN[q] && !$jscomp$scope$m1651817518$0$OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN[q][k]) {
            if (K(u, B, q, !1) && htmlparser.DEFINE.STOP_PARSING) {
              return $jscomp$scope$m1534190617$0$PARSING_STOP;
            }
            q = u[u.length - 1];
          } else {
            break;
          }
        }
      }
      (O = O || !!htmlparser.VOID_ELEMENTS[k]) || (u[u.length] = d || g ? M : k);
      return !0 === B.onParseStartTag(d || g ? M : k, T ? H : null, O, A) && htmlparser.DEFINE.STOP_PARSING ? $jscomp$scope$m1534190617$0$PARSING_STOP : A;
    }
    return 0;
  }
  for (var v = e ? +new Date() : 0, C = c.intervalMs || 16, E = a.length - b, D, x, p, l; a;) {
    D = h[h.length - 1];
    x = htmlparser.RAW_TEXT_ELEMENTS[D];
    if (htmlparser.DEFINE.USE_PROCESSING_INSTRUCTION && a.indexOf("<?") === b) {
      if (w(), p = a.indexOf("?>"), -1 !== p) {
        c.onParseProcessingInstruction(G(a.substring(2, p))), a = a.substring(p + 2);
      } else {
        y(a);
        return;
      }
    } else if (a.indexOf("</", b) === b && htmlparser.isAlphabet(a.charAt(b + 2))) {
      if (x && ("PLAINTEXT" === D || "plaintext" === D ? l = !0 : a.indexOf(D.toLowerCase(), b) !== b + 2 && a.indexOf(D.toUpperCase(), b) !== b + 2 && (l = !0)), l) {
        n(), l = !1;
      } else {
        w();
        p = I(h, c, a);
        if (htmlparser.DEFINE.STOP_PARSING && p === $jscomp$scope$m1534190617$0$PARSING_STOP) {
          return;
        }
        if (p) {
          a = a.substring(p);
        } else {
          y(a);
          return;
        }
      }
    } else if (x) {
      n();
    } else if ("<" === a.charAt(b) && htmlparser.isAlphabet(a.charAt(b + 1))) {
      w();
      p = J(h, D, c, a);
      if (htmlparser.DEFINE.STOP_PARSING && p === $jscomp$scope$m1534190617$0$PARSING_STOP) {
        return;
      }
      if (p) {
        a = a.substring(p);
      } else {
        y(a);
        return;
      }
    } else if (a.indexOf("\x3c!--") === b) {
      if (w(), p = a.indexOf("--\x3e"), -1 !== p) {
        c.onParseComment(G(a.substring(4, p))), a = a.substring(p + 3);
      } else {
        y(a);
        return;
      }
    } else if (htmlparser.DEFINE.USE_CDATA_SECTION && a.indexOf("<![CDATA[") === b) {
      if (w(), p = a.indexOf("]]\x3e"), -1 !== p) {
        c.onParseCDATASection(G(a.substring(9, p))), a = a.substring(p + 3);
      } else {
        y(a);
        return;
      }
    } else if (htmlparser.DEFINE.USE_DOCUMENT_TYPE_NODE && a.indexOf("<!DOCTYPE ") === b) {
      if (w(), p = a.indexOf(">"), -1 !== p) {
        c.onParseDocType(a.substring(b, p + 1)), a = a.substring(p + 1);
      } else {
        y(a);
        return;
      }
    } else {
      n();
    }
    p = a.length - b;
    if (p === E) {
      y(a);
      return;
    }
    if (htmlparser.DEFINE.TIME_SLICE_EXECUTION && e && a && v + C <= +new Date()) {
      c.onParseProgress(1 - p / f, $jscomp$scope$m1534190617$1$exec, [a, b, c, e, f, d, g, h]);
      return;
    }
    E = p;
  }
  K(h, c, "", !0);
  htmlparser.DEFINE.TIME_SLICE_EXECUTION && e && c.onComplete();
}, $jscomp$scope$m1534190617$0$PARSING_STOP = 1;
htmlparser.exec = function(a, b) {
  $jscomp$scope$m1534190617$1$exec(a, 0, b, htmlparser.DEFINE.TIME_SLICE_EXECUTION && !!b.onComplete, a.length, htmlparser.DEFINE.USE_XML && !!b.isXHTML, !1, []);
};
htmljson.DEFINE = {};
htmljson.DEFINE.DEBUG = !1;
htmljson.DEFINE.USE_XML_NS = !1;
htmljson.DEFINE.USE_XHTML = !1;
htmljson.DEFINE.INSTRUCTION_ATTR_PREFIX = ":";
htmljson.Traverser = {};
htmljson.Traverser.EnterHandler = {};
htmljson.Traverser.LeaveHandler = {};
var VISITOR_OPTION = {REMOVED:-1, NONE:0, INSERTED_BEFORER:1, BREAK:Infinity, SKIP:-Infinity};
htmljson.Traverser.VISITOR_OPTION = VISITOR_OPTION;
htmljson.Traverser.traverseAllDescendantNodes = function(a, b, c) {
  var e = a, f = m_getChildNodeStartIndex(e), d = 0, g = b(a, null, -1, d / 3), h = [-1, a, f], n = !1;
  if (g === VISITOR_OPTION.BREAK || g === VISITOR_OPTION.SKIP) {
    return !1;
  }
  if (0 < e.length - f) {
    do {
      var w = ++h[d];
      var y = e[w + f];
      if (void 0 === y) {
        if (h.length = d, d -= 3, e = h[d + 1], f = h[d + 2], c && e) {
          w = h[d] + f;
          g = c(e[w], e, w, d / 3 + 1);
          if (g === VISITOR_OPTION.BREAK) {
            return n;
          }
          g !== VISITOR_OPTION.SKIP && (g <= VISITOR_OPTION.REMOVED || VISITOR_OPTION.INSERTED_BEFORER <= g) && (h[d] += g, n = !0);
        }
      } else {
        g = b(y, e, w + f, d / 3 + 1);
        if (g === VISITOR_OPTION.BREAK) {
          return n;
        }
        if (g !== VISITOR_OPTION.SKIP) {
          if (g <= VISITOR_OPTION.REMOVED) {
            h[d] += g, n = !0;
          } else {
            if (VISITOR_OPTION.INSERTED_BEFORER <= g && (h[d] += g, n = !0), m_hasChildren(y)) {
              d += 3, h[d + 0] = -1, h[d + 1] = e = y, h[d + 2] = f = m_getChildNodeStartIndex(y);
            } else if (c && e) {
              g = c(y, e, w + f, d / 3 + 1);
              if (g === VISITOR_OPTION.BREAK) {
                return n;
              }
              g !== VISITOR_OPTION.SKIP && (g <= VISITOR_OPTION.REMOVED || VISITOR_OPTION.INSERTED_BEFORER <= g) && (h[d] += g, n = !0);
            }
          }
        }
      }
    } while (0 <= d);
  }
  c && c(a, null, -1, 0);
  return n;
};
htmljson.base = {};
var Styles, Attrs, InstructionArgs, HTMLJson, InstructionHandler, EnterNodeHandler, m_OMITTABLE_END_TAGS = {HTML:!0, HEAD:!0, BODY:!0, P:!0, DT:!0, DD:!0, LI:!0, OPTION:!0, TBODY:!0, THEAD:!0, TFOOT:!0, TD:!0, TH:!0, TR:!0, RB:!0, RBC:!0, RP:!0, RT:!0, RTC:!0, OPTGROUP:!0, CAPTION:!0, COLGROUP:!0}, m_CHILD_P_MUST_HAVE_END_TAG = {A:!0, AUDIO:!0, DEL:!0, INS:!0, MAP:!0, NOSCRIPT:!0, VIDEO:!0}, m_TAGNAME_TO_NAMESPACE = {xml:"http://www.w3.org/1999/xhtml", svg:"http://www.w3.org/2000/svg", math:"http://www.w3.org/1998/Math/MathML"}, 
m_P_END_TAG_LESS_TAGS = {H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, ADDRESS:!0, BLOCKQUOTE:!0, DIV:!0, DL:!0, FIELDSET:!0, FORM:!0, HR:!0, LEGEND:!0, MENU:!0, NOSCRIPT:!0, OL:!0, P:!0, PRE:!0, UL:!0, CENTER:!0, DIR:!0, NOFRAMES:!0, MARQUEE:!0}, m_TRIM_NEWLINES_ELEMENTS = {SCRIPT:!0, STYLE:!0, TEXTAREA:!0, script:!0, style:!0, textarea:!0}, m_FAMILY_OF_PRE_ELEMENT = {PRE:!0, LISTING:!0, pre:!0, listing:!0};
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
function m_isXML(a) {
  return 0 === a.indexOf("<?xml ") || 0 <= a.toUpperCase().indexOf('<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML ');
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
function m_executeProcessingInstruction(a, b, c, e) {
  var f = b[1], d = b.slice(2), g;
  core.isFunction(a) ? g = d.length ? a.call(e, f, d) : a.call(e, f) : a[f] && (g = d.length ? a[f].apply(e || a, d) : a[f].call(e || a));
  htmljson.DEFINE.DEBUG && (null == g || m_isStringOrNumber(g) || core.isArray(g) || c && c("PROCESSING_INSTRUCTION Error! [" + JSON.stringify(b) + "]"));
  g && core.isArray(g[0]) && g.unshift(htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE);
  return g;
}
function m_replaceProcessingInstructionWithHTMLJson(a, b, c) {
  c[0] === htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE ? (c.shift(), c.unshift(b, 1), a.splice.apply(a, c)) : a.splice(b, 1, c);
}
function m_executeInstructionAttr(a, b, c, e, f) {
  var d;
  if (core.isArray(c) && core.isString(c[0])) {
    var g = c[0];
    c = c.slice(1);
    core.isFunction(a) ? d = c.length ? a.call(f, g, c) : a.call(f, g) : a[g] && (d = c.length ? a[g].apply(f || a, c) : a[g].call(f || a));
  } else {
    core.isString(c) ? core.isFunction(a) ? d = a.call(f, c) : a[c] && (d = a[c].call(f || a)) : htmljson.DEFINE.DEBUG && e && e("Invalid InstructionAttr value! [" + b + "=" + c + "]");
  }
  core.isArray(d) && (a = m_executeInstructionAttr(a, b, d, e, f), void 0 !== a && (d = a));
  return d;
}
function m_isEnterNodeHandler(a) {
  return core.isArray(a) || core.isFunction(a);
}
function m_executeEnterNodeHandler(a, b, c) {
  a = m_createVNodeFromHTMLJson(a, !0);
  var e;
  VNode.currentRestrictedVNode = a;
  b && (b._childNodes ? b._childNodes.push(a) : b._childNodes = [a]);
  if (core.isArray(c)) {
    for (b = 0, e = c.length; b < e; b += 2) {
      var f = c[b + 0];
      var d = c[b + 1];
      if (core.isNumber(f)) {
        if (f === a._nodeType && !0 === d(a)) {
          break;
        }
      } else if ("*" === f) {
        if (!0 === d(a)) {
          break;
        }
      } else if (core.isString(f)) {
        if (f === a._tagName && !0 === d(a)) {
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
  var b = a.indexOf("#"), c = a.indexOf("."), e = "", f = "";
  b < c ? (e = a.split(".")[1], a = a.split(".")[0], 0 < b && (f = a.split("#")[1], a = a.split("#")[0])) : c < b && (f = a.split("#")[1], a = a.split("#")[0], 0 < c && (e = a.split(".")[1], a = a.split(".")[0]));
  return [a, f, e];
}
function m_createTagName(a, b, c) {
  b && (a += "#" + b);
  c && (a += "." + c);
  return a;
}
function m_toSnakeCase(a) {
  var b = [];
  a = a.split("");
  for (var c = a.length, e; c;) {
    e = a[--c], "A" <= e && "Z" >= e && (e = "-" + e.toLowerCase()), b[c] = e;
  }
  return b.join("");
}
function m_escapeForHTML(a) {
  return a.split("&lt;").join("&amp;lt;").split("&gt;").join("&amp;gt;").split("<").join("&lt;").split(">").join("&gt;");
}
function m_toCSSTest(a) {
  var b = [], c = -1, e;
  for (e in a) {
    var f = a[e];
    "0px" === f && (f = 0);
    b[++c] = m_toSnakeCase(e) + ":" + m_escapeForHTML("" + f);
  }
  return b.join(";").substr(1);
}
function m_parseCSSText(a) {
  for (var b = 0, c = a.length, e = {}, f = 0, d, g, h, n; 0 < c;) {
    d = a.charAt(0);
    switch(b) {
      case 0:
        htmlparser.isWhitespace(d) || (g = 0, b = 1);
        break;
      case 1:
        ":" === d && (n = a.substring(g, 0), g = 0, b = 2);
        break;
      case 2:
        htmlparser.isWhitespace(d) || (g = 0, b = 3);
        break;
      case 3:
        h === d ? h = "" : h || ('"' === d || "'" === d ? h = d : ";" === d && (b = n, d = a.substring(g, 0), e[b] = "0px" === d ? 0 : m_tryToFiniteNumber(d), ++f, b = 0));
    }
    if (3 === b) {
      d = n;
      var w = a.substring(g);
      e[d] = "0px" === w ? 0 : m_tryToFiniteNumber(w);
      ++f;
    }
  }
  return f ? e : null;
}
function m_createVNodeFromHTMLJson(a, b) {
  var c, e;
  htmljson.Traverser.traverseAllDescendantNodes(a, function(f, d, g, h) {
    function n(I, K, J) {
      c ? (h < e.length && (e.length = h), I = e[e.length - 1].insertNodeLast(I, K, J), m_hasChildren(f) && (e[h] = I)) : (c = new VNode(b, 0, I, K, J), e = [c]);
    }
    if (m_isStringOrNumber(f)) {
      n(htmljson.NODE_TYPE.TEXT_NODE, f);
    } else {
      d = f[0];
      g = f[1];
      var w = 1, y = d, G;
      switch(d) {
        case htmljson.NODE_TYPE.DOCUMENT_NODE:
        case htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER:
        case htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER:
          n(d, g);
          break;
        case htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE:
          n(d);
          break;
        case htmljson.NODE_TYPE.TEXT_NODE:
        case htmljson.NODE_TYPE.CDATA_SECTION:
        case htmljson.NODE_TYPE.COMMENT_NODE:
        case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START:
        case htmljson.NODE_TYPE.ELEMENT_END_TAG:
          n(d, g);
          break;
        case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_END:
          n(d);
          break;
        case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION:
          w = [];
          y = 2;
          for (G = f.length; y < G; ++y) {
            w[y - 2] = f[y];
          }
          n(d, g, G - 2 ? w : null);
          break;
        case htmljson.NODE_TYPE.ELEMENT_NODE:
        case htmljson.NODE_TYPE.ELEMENT_START_TAG:
          y = g, w = 2;
        default:
          core.isString(y) && n(1 === w ? htmljson.NODE_TYPE.ELEMENT_NODE : d, y, f[w]);
      }
    }
    if (b) {
      return htmljson.Traverser.VISITOR_OPTION.BREAK;
    }
  });
  return c;
}
;var json2json = {main:function(a, b, c, e, f, d) {
  core.isArray(a) ? (a[0] !== htmljson.NODE_TYPE.DOCUMENT_NODE && a[0] !== htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE && (a = [htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE, a]), json2json.process(a, b, c, f, d), e && dispatchDocumentReadyEvent(e, a)) : htmljson.DEFINE.DEBUG && f && f("Invalid html.json document!");
}, process:function(a, b, c, e, f) {
  function d(v, C) {
    function E(q) {
      return q.split("\n").join("").split(" ").join("").split("\t").join("");
    }
    function D(q) {
      var B;
      htmljson.Traverser.traverseAllDescendantNodes(q, function(t, r, m, k) {
        m_getNodeType(t) === htmljson.NODE_TYPE.TEXT_NODE && (B = [t, r, m]);
      });
      return B;
    }
    var x, p;
    for (htmljson.Traverser.traverseAllDescendantNodes(v, function(q, B, t, r) {
      if (m_getNodeType(q) === htmljson.NODE_TYPE.TEXT_NODE) {
        q = "" + (m_isStringOrNumber(q) ? q : q[1]);
        if (E(q)) {
          return B.splice(t, 1, m_trimFirstChar(q, "\n")), htmljson.Traverser.VISITOR_OPTION.BREAK;
        }
        B.splice(t, 1);
        return htmljson.Traverser.VISITOR_OPTION.REMOVED;
      }
    }); x = D(v);) {
      var l = x[0];
      var u = x[1];
      x = x[2];
      l = "" + (m_isStringOrNumber(l) ? l : l[1]);
      if (E(l)) {
        u.splice(x, 1, m_trimLastChar(l, "\n"));
        break;
      } else {
        u.splice(x, 1);
      }
    }
    C && htmljson.Traverser.traverseAllDescendantNodes(v, function(q, B, t, r) {
      if (m_getNodeType(q) === htmljson.NODE_TYPE.TEXT_NODE) {
        r = "" + (m_isStringOrNumber(q) ? q : q[1]);
        for (var m = r.split("\n"), k = 0, z = m.length, A; k < z - 1; ++k) {
          for (r = m[k];;) {
            if (A = r.charAt(r.length - 1), "\t" === A || " " === A) {
              r = r.substr(0, r.length - 1);
            } else {
              break;
            }
          }
          m[k] = r;
        }
        r = m.join("\n");
        if ("\n" === r && p) {
          return q = p[0], m = p[1], k = p[2], m_isStringOrNumber(q) ? m[k] += r : q[1] += r, B.splice(t, 1), htmljson.Traverser.VISITOR_OPTION.REMOVED;
        }
        m_isStringOrNumber(q) ? B.splice(t, 1, q = r) : q[1] = r;
        p = [q, B, t];
      }
    });
  }
  c = f || {};
  var g = -1 !== ["normal", !0, "aggressive"].indexOf(c.trimWhitespaces), h = "aggressive" === c.trimWhitespaces, n = !!c.removeNewlineBetweenFullWidthChars, w = !1 !== c.keepCDATASections, y = !1 !== c.keepComments, G = !0 === c.keepEmptyConditionalComment, I = c.instructionAttrPrefix || htmljson.DEFINE.INSTRUCTION_ATTR_PREFIX, K, J;
  (htmljson.Traverser.traverseAllDescendantNodes(a, function(v, C, E, D) {
    D = v[0];
    var x = v[1], p = 1;
    switch(m_getNodeType(v)) {
      case htmljson.NODE_TYPE.DOCUMENT_NODE:
        g && (v[1] = x.split("\n").join(" ").split("  ").join(" "));
        break;
      case htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE:
        break;
      case htmljson.NODE_TYPE.TEXT_NODE:
        core.isArray(v) || (x = v);
        if (core.isString(x)) {
          if (!J && (x = m_normalizeNewlines(x), g)) {
            var l = x;
            n && (l = l.replace(/([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])\s([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])/g, "$1$2"));
            for (l = l.split("\t").join(" "); 0 <= l.indexOf("\n\n");) {
              l = l.split("\n\n").join("\n");
            }
            if (h) {
              var u = "\n" === l.charAt(0) && /\n[ ]*$/.test(l);
            }
            l = m_trimLastChar(l, "\n");
            for (l = l.split("\n").join(" "); 0 <= l.indexOf("  ");) {
              l = l.split("  ").join(" ");
            }
            u && (l = m_trimChar(l, " "));
            l = l.split("\\u0020").join(" ").split("&#x20;").join(" ").split("&#32;").join(" ");
            x = m_tryToFiniteNumber(l);
          }
          if ("" !== x) {
            C[E] = x;
          } else {
            return C.splice(E, 1), htmljson.Traverser.VISITOR_OPTION.REMOVED;
          }
        }
        break;
      case htmljson.NODE_TYPE.CDATA_SECTION:
        if (!w) {
          return C.splice(E, 1), htmljson.Traverser.VISITOR_OPTION.REMOVED;
        }
        break;
      case htmljson.NODE_TYPE.COMMENT_NODE:
        if (!y) {
          return C.splice(E, 1), htmljson.Traverser.VISITOR_OPTION.REMOVED;
        }
        break;
      case htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER:
        break;
      case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START:
        break;
      case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_END:
        l = C[E - 1];
        if (!G && l && l[0] === htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START) {
          return C.splice(E - 1, 2), 2 * htmljson.Traverser.VISITOR_OPTION.REMOVED;
        }
        break;
      case htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER:
        break;
      case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION:
        if (b && (l = m_executeProcessingInstruction(b, v, e), void 0 !== l)) {
          if (null === l || "" === l) {
            return C.splice(E, 1), htmljson.Traverser.VISITOR_OPTION.REMOVED;
          }
          if (core.isNumber(l)) {
            C.splice(E, 1, l), K = !0;
          } else if (core.isArray(l) || core.isString(l)) {
            return m_replaceProcessingInstructionWithHTMLJson(C, E, l), htmljson.Traverser.VISITOR_OPTION.REMOVED;
          }
        }
        break;
      case htmljson.NODE_TYPE.ELEMENT_NODE:
      case htmljson.NODE_TYPE.ELEMENT_START_TAG:
        core.isNumber(D) && (D = x, p = 2);
        D = m_parseTagName(D)[0];
        C = v[p];
        if (m_isAttributes(C)) {
          E = p - 1;
          u = 0;
          var q;
          x = m_parseTagName(v[E]);
          var B = x[1], t = x[2];
          x = x[0];
          for (k in C) {
            var r = k;
            var m = C[k];
            if (q = m_isInstructionAttr(I, k)) {
              var k = k.substr(I.length);
              "className" === k && (k = "class");
              if (b) {
                if (m = m_executeInstructionAttr(b, k, m, e), void 0 !== m) {
                  if (delete C[r], core.isArray(m)) {
                    core.isString(m[0]) ? (C[r] = m, ++u) : htmljson.DEFINE.DEBUG && e && e("Invalid dynamic attribute callback value! [" + r + "=" + m + "]");
                  } else if ((!htmlparser.BOOLEAN_ATTRIBUTES[k] || !1 !== m) && null !== m) {
                    if (core.isString(m)) {
                      if ("id" === k) {
                        B = m;
                        continue;
                      } else if ("class" === k) {
                        r = m.split(" ");
                        for (m = r.length; m;) {
                          q = r[--m], -1 === (" " + t + " ").indexOf(" " + q + " ") && (t = (t ? " " : "") + q);
                        }
                        continue;
                      }
                    }
                    C[k] = m;
                    ++u;
                  }
                } else {
                  ++u;
                }
              } else {
                ++u;
              }
            } else {
              ++u;
            }
          }
          v[E] = m_createTagName(x, B, t);
          0 === u && v.splice(p, 1);
        }
        if (m_FAMILY_OF_PRE_ELEMENT[D]) {
          d(v, h), J = v;
        } else if (m_TRIM_NEWLINES_ELEMENTS[D]) {
          v = J = v;
          k = m_getChildNodeStartIndex(v);
          D = v.length;
          for (var z, A, H; k < D; ++k) {
            p = v[k], m_getNodeType(p) === htmljson.NODE_TYPE.TEXT_NODE && (l = l || k, z = z || p, A = k, H = p);
          }
          l && (core.isArray(z) && (z = z[1]), core.isArray(H) && (H = H[1]), l === A ? core.isString(z) && (z = m_normalizeNewlines(z), z = m_trimChar(z, "\n"), v[l] = m_tryToFiniteNumber(z)) : (core.isString(z) && (z = m_normalizeNewlines(z), z = m_trimFirstChar(z, "\n"), v[l] = m_tryToFiniteNumber(z)), core.isString(H) && (H = m_normalizeNewlines(H), H = m_trimLastChar(H, "\n"), v[A] = m_tryToFiniteNumber(H))));
        }
        break;
      default:
        htmljson.DEFINE.DEBUG && e && e("Not html.json! [" + v + "]");
    }
  }, function(v, C, E, D) {
    if (!G) {
      switch(m_getNodeType(v)) {
        case htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER:
        case htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER:
          if (2 === v.length) {
            return C.splice(E, 1), htmljson.Traverser.VISITOR_OPTION.REMOVED;
          }
      }
    }
    J === v && (J = null);
  }) || K) && normalizeTextNodes(a);
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
    f.splice(d, 0, m_tryToFiniteNumber(c));
    c = "";
  }
  var c = "", e, f, d;
  htmljson.Traverser.traverseAllDescendantNodes(a, function(g, h, n, w) {
    if (c && e !== w) {
      return b(), htmljson.Traverser.VISITOR_OPTION.INSERTED_BEFORER;
    }
    if (m_getNodeType(g) === htmljson.NODE_TYPE.TEXT_NODE) {
      return c = m_isStringOrNumber(g) ? c + g : c + g[1], h.splice(n, 1), e = w, f = h, d = n, htmljson.Traverser.VISITOR_OPTION.REMOVED;
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
json2json.main.gulp = function(a, b, c, e, f) {
  const d = require("plugin-error"), g = require("through2"), h = f && f.prettify;
  return g.obj(function(n, w, y) {
    if (n.isNull()) {
      return y();
    }
    if (n.isStream()) {
      return this.emit("error", new d("json2json", "Streaming not supported")), y();
    }
    if (".json" === n.extname) {
      try {
        const G = JSON.parse(n.contents.toString(w));
        json2json.main(G, a, b, c, e, f);
        const I = JSON.stringify(G, null, h ? "    " : "");
        n.contents = Buffer.from(I);
      } catch (G) {
        this.emit("error", new d("json2json", G));
      }
    }
    y(null, n);
  });
};

