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
  function b(f) {
    return 10 > f ? "0" + f : f;
  }
  function c(f) {
    f = "000" + f;
    return f.substr(f.length - 4);
  }
  function d(f) {
    f = "00000" + f;
    return f.substr(f.length - 6);
  }
  var e = a.getUTCFullYear();
  return (0 >= e ? "-" + d(-e) : 1e4 <= e ? "+" + d(e) : c(e)) + "-" + b(a.getUTCMonth() + 1) + "-" + b(a.getUTCDate()) + "T" + b(a.getUTCHours()) + ":" + b(a.getUTCMinutes()) + ":" + b(a.getUTCSeconds()) + "." + function(f) {
    f = "00" + f;
    return f.substr(f.length - 3);
  }(a.getUTCMilliseconds()) + "Z";
};
core.deepCopy = function(a) {
  function b(c) {
    var d = c, e;
    if (core.isArray(c)) {
      d = [];
      var f = 0;
      for (e = c.length; f < e; ++f) {
        d[f] = b(c[f]);
      }
    } else if (core.isObject(c)) {
      for (f in d = {}, c) {
        d[f] = b(c[f]);
      }
    }
    return d;
  }
  return b(a);
};
core.deepEqual = function(a, b) {
  function c(d, e) {
    var f = !1, g;
    if (d === e || core.isNaN(d) && core.isNaN(e)) {
      f = !0;
    } else {
      if (core.isArray(d) && core.isArray(e)) {
        f = !0;
        var h = d.length;
        if (h !== e.length) {
          f = !1;
        } else {
          for (g = 0; g < h; ++g) {
            if (!c(d[g], e[g])) {
              f = !1;
              break;
            }
          }
        }
      } else if (core.isObject(d) && core.isObject(e)) {
        f = !0;
        h = {};
        for (g in d) {
          if (c(d[g], e[g])) {
            h[g] = !0;
          } else {
            f = !1;
            break;
          }
        }
        if (f) {
          for (g in e) {
            if (!h[g]) {
              f = !1;
              break;
            }
          }
        }
      }
    }
    return f;
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
  function c(d, e, f) {
    if (void 0 !== d.__proto__) {
      var g = d.__proto__;
    } else {
      var h;
      g = d === f ? null : d === (h = d.constructor.prototype) ? f : h;
    }
    if (!g) {
      return core.hasProperty(d, e);
    }
    h = g[e];
    var m = d[e];
    m !== m !== (h !== h) ? e = !0 : m !== m ? (h = g, f = c(h, e, f), h[e] = !0, d = d[e], d = d !== d, f ? h[e] = NaN : delete h[e], e = d) : m !== h ? e = !0 : core.hasProperty(g, e) ? (f = c(g, e, f), g[e] = !h, d = m === d[e], f ? g[e] = h : delete g[e], e = d) : e = core.hasProperty(d, e);
    return e;
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
  var d = a, e = m_getChildNodeStartIndex(d), f = 0, g = b(a, null, -1, f / 3), h = [-1, a, e], m = !1;
  if (g === VISITOR_OPTION.BREAK || g === VISITOR_OPTION.SKIP) {
    return !1;
  }
  if (0 < d.length - e) {
    do {
      var x = ++h[f];
      var y = d[x + e];
      if (null != y) {
        g = b(y, d, x + e, f / 3 + 1);
        if (g === VISITOR_OPTION.BREAK) {
          return m;
        }
        if (g !== VISITOR_OPTION.SKIP) {
          if (g <= VISITOR_OPTION.REMOVED) {
            h[f] += g, m = !0;
          } else {
            if (VISITOR_OPTION.INSERTED_BEFORER <= g && (h[f] += g, m = !0), m_hasChildren(y)) {
              f += 3, h[f + 0] = -1, h[f + 1] = d = y, h[f + 2] = e = m_getChildNodeStartIndex(y);
            } else if (c && d) {
              g = c(y, d, x + e, f / 3 + 1);
              if (g === VISITOR_OPTION.BREAK) {
                return m;
              }
              g !== VISITOR_OPTION.SKIP && (g <= VISITOR_OPTION.REMOVED || VISITOR_OPTION.INSERTED_BEFORER <= g) && (h[f] += g, m = !0);
            }
          }
        }
      } else {
        if (h.length = f, f -= 3, d = h[f + 1], e = h[f + 2], c && d) {
          x = h[f] + e;
          g = c(d[x], d, x, f / 3 + 1);
          if (g === VISITOR_OPTION.BREAK) {
            return m;
          }
          g !== VISITOR_OPTION.SKIP && (g <= VISITOR_OPTION.REMOVED || VISITOR_OPTION.INSERTED_BEFORER <= g) && (h[f] += g, m = !0);
        }
      }
    } while (0 <= f);
  }
  c && c(a, null, -1, 0);
  return m;
};
var VNode = function(a, b, c, d, e) {
  if (core.isBoolean(a)) {
    var f = null;
    this._isRestrictedMode = a;
  } else {
    f = a, this._isRestrictedMode = f._isRestrictedMode;
  }
  if (htmljson.DEFINE.DEBUG && f) {
    switch(f._nodeType) {
      case htmljson.NODE_TYPE.TEXT_NODE:
      case htmljson.NODE_TYPE.COMMENT_NODE:
      case htmljson.NODE_TYPE.CDATA_SECTION:
      case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION:
      case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_END:
      case htmljson.NODE_TYPE.ELEMENT_END_TAG:
        throw "nodeType:" + f._nodeType + " \u306f\u89aa\u306b\u306a\u308b\u3053\u3068\u304c\u51fa\u6765\u307e\u305b\u3093!";
    }
    if (_isDocOrDocFragment(this)) {
      throw "nodeType:" + f._nodeType + " \u306f\u5b50\u306b\u306a\u308b\u3053\u3068\u304c\u51fa\u6765\u307e\u305b\u3093!";
    }
  }
  this._parent = f;
  this._nodeType = c;
  if (f) {
    if (f._childNodes || (f._childNodes = []), a = f._childNodes, 0 <= b && b < a.length) {
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
      this._attrs = e || null, b = m_parseTagName(d), this._id = b[1], this._className = b[2], d = b[0];
    case htmljson.NODE_TYPE.ELEMENT_END_TAG:
      this._tagName = d;
      break;
    case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION:
      this._args = e || null;
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
      var e = this._attrs;
      m_isAttributes(e) && (a.push(e), (c = e.style) && core.isObject(c) && (e.style = m_toCSSTest(c)));
      break;
    case htmljson.NODE_TYPE.ELEMENT_END_TAG:
      a[1] = this._tagName;
      break;
    case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION:
      if (e = this._args) {
        for (c = 0, d = e.length; c < d; ++c) {
          a[2 + c] = e[c];
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
  var d = a._childNodes = a._childNodes || [], e = d.length, f = c.length;
  b = b < e ? b : e;
  if (htmljson.DEFINE.DEBUG) {
    for (; f;) {
      if (htmljson.DEFINE.DEBUG && g && c[f - 1]._nodeType === htmljson.NODE_TYPE.ELEMENT_START_TAG) {
        throw "\u9589\u3058\u30bf\u30b0\u306e\u7121\u3044 Element \u306e\u6b21\u306b Node \u3092\u633f\u5165\u3059\u308b\u3053\u3068\u306f\u51fa\u6765\u307e\u305b\u3093!";
      }
      var g = c[--f];
      if (htmljson.DEFINE.DEBUG && g._nodeType === htmljson.NODE_TYPE.DOCUMENT_NODE) {
        throw "Document Node \u3092\u633f\u5165\u3059\u308b\u3053\u3068\u306f\u51fa\u6765\u307e\u305b\u3093!";
      }
    }
    f = c.length;
  }
  f && (VNode.treeIsUpdated = !0);
  for (; f;) {
    g = c[--f], g._nodeType === htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE ? g.getChildNodeCount() && _insertAt(a, b, g._childNodes) : (g.remove(), d.splice(b, 0, g), g._parent = a);
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
  var d = 0, e = !1;
  if (a.getChildNodeCount()) {
    var f = [-1, a];
    do {
      var g = ++f[d];
      if (g = a.getChildNodeAt(g)) {
        var h = b(g);
        if (h === htmljson.Traverser.VISITOR_OPTION.BREAK) {
          break;
        }
        if (h !== htmljson.Traverser.VISITOR_OPTION.SKIP) {
          if (g.getChildNodeCount()) {
            d += 2, f[d + 0] = -1, f[d + 1] = a = g;
          } else if (c) {
            h = c(g);
            if (h === htmljson.Traverser.VISITOR_OPTION.BREAK) {
              break;
            }
            h !== htmljson.Traverser.VISITOR_OPTION.SKIP && (h <= htmljson.Traverser.VISITOR_OPTION.REMOVED || htmljson.Traverser.VISITOR_OPTION.INSERTED_BEFORER <= h) && (f[d] += h, e = !0);
          }
        }
      } else {
        if (c) {
          h = c(a);
          if (h === htmljson.Traverser.VISITOR_OPTION.BREAK) {
            break;
          }
          h !== htmljson.Traverser.VISITOR_OPTION.SKIP && (h <= htmljson.Traverser.VISITOR_OPTION.REMOVED || htmljson.Traverser.VISITOR_OPTION.INSERTED_BEFORER <= h) && (f[d] += h, e = !0);
        }
        f.length = d;
        d -= 2;
        a = f[d + 1];
      }
    } while (0 <= d);
  }
  return e;
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
htmlparser.unescapeHTML = function(a) {
  return a.split("&lt;").join("<").split("&gt;").join(">").split("&amp;lt;").join("&lt;").split("&amp;gt;").join("&gt;");
};
htmlparser.escapeHTML = function(a) {
  return a.split("&lt;").join("&amp;lt;").split("&gt;").join("&amp;gt;").split("<").join("&lt;").split(">").join("&gt;");
};
htmlparser.unescapeAttrValue = function(a) {
  return htmlparser.unescapeHTML(a).split('\\"').join('"').split("\\'").join("'");
};
var $jscomp$scope$m1534190617$1$exec = function(a, b, c, d, e, f, g, h) {
  function m() {
    e = a.indexOf("<", e + 1);
    if (-1 === e && (e = a.length, x() && htmlparser.DEFINE.STOP_PARSING)) {
      return !0;
    }
  }
  function x() {
    if (e) {
      var l = a.substr(0, e);
      if (!0 === b.onParseText(C && !htmlparser.ESCAPABLE_RAW_TEXT_ELEMENTS[k] ? l : htmlparser.unescapeHTML(l)) && htmlparser.DEFINE.STOP_PARSING) {
        return !0;
      }
      a = a.substr(e);
      e = 0;
    }
  }
  function y(l) {
    b.onParseError && b.onParseError(l);
  }
  function G(l, A, u) {
    for (var B = 0, n = u.length, w = 3, p, t; w < n && 2 !== B;) {
      t = u.charAt(w);
      switch(B) {
        case 0:
          htmlparser.isWhitespace(t) ? B = 1 : ">" === t && (B = 2);
          B && (p = u.substring(2, w));
          break;
        case 1:
          ">" === t && (B = 2);
      }
      ++w;
    }
    return 2 === B ? !htmlparser.VOID_ELEMENTS[p] && F(l, A, g || h ? p : p.toUpperCase(), !1) && htmlparser.DEFINE.STOP_PARSING ? $jscomp$scope$m1534190617$0$PARSING_STOP : w : 0;
  }
  function F(l, A, u, B) {
    var n = 0, w = l.length;
    if (u) {
      for (n = w; 0 <= n && l[--n] !== u;) {
      }
    }
    if (0 <= n) {
      for (; n < w;) {
        if (!0 === A.onParseEndTag(l[--w], B && !$jscomp$scope$m1651817518$0$OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN[l[w]], !1) && htmlparser.DEFINE.STOP_PARSING) {
          return !0;
        }
        htmlparser.DEFINE.USE_XML && g && htmlparser.isXMLRootElement(l[w]) && (g = !!A.isXHTML);
      }
      l.length = n;
      if (htmlparser.DEFINE.USE_VML && h) {
        for (h = !1, w = n; w;) {
          if (htmlparser.isNamespacedTag(l[--w])) {
            h = !0;
            break;
          }
        }
      }
    } else {
      if (!0 === A.onParseEndTag(u, !1, !0) && htmlparser.DEFINE.STOP_PARSING) {
        return !0;
      }
    }
  }
  function J(l, A, u, B) {
    function n(P, Q) {
      z[P] = !0 === Q ? !0 : htmlparser.BOOLEAN_ATTRIBUTES[P.toLowerCase()] ? g ? htmlparser.unescapeAttrValue(Q || P) : !0 : htmlparser.unescapeAttrValue(Q || "");
      ++D;
    }
    function w() {
      (H = "/>" === B.substr(r, 2)) && ++r;
      return H;
    }
    for (var p = 1, t = B.length, r = 2, z = {}, D = 0, H = !1, v, K, I, N, R, O; r < t && 9 > p;) {
      v = B.charAt(r);
      switch(p) {
        case 1:
          if (htmlparser.isWhitespace(v)) {
            p = 2, K = B.substring(1, r);
          } else if (">" === v || w()) {
            p = 9, K = B.substring(1, r);
          }
          break;
        case 2:
          ">" === v || w() ? p = 9 : htmlparser.isWhitespace(v) || (p = 3, I = r);
          break;
        case 3:
          if ("=" === v) {
            p = 5, N = B.substring(I, r);
          } else if (htmlparser.isWhitespace(v)) {
            p = 4, N = B.substring(I, r);
          } else if (">" === v || w()) {
            p = 9, n(B.substring(I, r), !0);
          }
          break;
        case 4:
          "=" === v ? p = 5 : ">" === v || w() ? (p = 9, n(N, !0)) : htmlparser.isWhitespace(v) || (p = 3, n(N, !0), I = r);
          break;
        case 5:
          '"' === v || "'" === v ? (p = 6, R = v, I = r + 1) : htmlparser.isWhitespace(v) || (p = 7, I = r);
          O = !1;
          break;
        case 6:
          O || v !== R || (p = 2, n(N, B.substring(I, r)));
          O = "\\" === v && !O;
          break;
        case 7:
          htmlparser.isWhitespace(v) ? p = 2 : ">" === v && (p = 9), 7 !== p && n(N, B.substring(I, r));
      }
      ++r;
    }
    if (9 === p) {
      p = K.toUpperCase();
      htmlparser.DEFINE.USE_XML && !g && (g = htmlparser.isXMLRootElement(K));
      htmlparser.DEFINE.USE_VML && !h && (h = htmlparser.isNamespacedTag(K));
      t = g || h;
      if (!t) {
        for (; A;) {
          if ($jscomp$scope$m1651817518$0$OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN[A] && !$jscomp$scope$m1651817518$0$OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN[A][p]) {
            if (F(l, u, A, !1) && htmlparser.DEFINE.STOP_PARSING) {
              return $jscomp$scope$m1534190617$0$PARSING_STOP;
            }
            A = l[l.length - 1];
          } else {
            break;
          }
        }
      }
      (H = H || !!htmlparser.VOID_ELEMENTS[p]) || (l[l.length] = t ? K : p);
      return !0 === u.onParseStartTag(t ? K : p, D ? z : null, H, r) && htmlparser.DEFINE.STOP_PARSING ? $jscomp$scope$m1534190617$0$PARSING_STOP : r;
    }
    return 0;
  }
  for (var L = f ? +new Date() : 0, M = b.intervalMs || 16, k, C, q, E; a;) {
    k = c[c.length - 1];
    C = htmlparser.RAW_TEXT_ELEMENTS[k];
    if (htmlparser.DEFINE.USE_PROCESSING_INSTRUCTION && a.indexOf("<?") === e) {
      if (x() && htmlparser.DEFINE.STOP_PARSING) {
        return;
      }
      q = a.indexOf("?>");
      if (-1 !== q) {
        if (!0 === b.onParseProcessingInstruction(htmlparser.unescapeHTML(a.substring(2, q))) && htmlparser.DEFINE.STOP_PARSING) {
          return;
        }
        a = a.substr(q + 2);
      } else {
        y(a);
        return;
      }
    } else if (a.indexOf("</", e) === e && htmlparser.isAlphabet(a.charAt(e + 2))) {
      if (C && ("PLAINTEXT" === k || "plaintext" === k ? E = !0 : a.indexOf(k.toLowerCase(), e) !== e + 2 && a.indexOf(k.toUpperCase(), e) !== e + 2 && (E = !0)), E) {
        if (m() && htmlparser.DEFINE.STOP_PARSING) {
          return;
        }
        E = !1;
      } else {
        if (x() && htmlparser.DEFINE.STOP_PARSING) {
          return;
        }
        q = G(c, b, a);
        if (htmlparser.DEFINE.STOP_PARSING && q === $jscomp$scope$m1534190617$0$PARSING_STOP) {
          return;
        }
        if (q) {
          a = a.substr(q);
        } else {
          y(a);
          return;
        }
      }
    } else if (C) {
      if (m() && htmlparser.DEFINE.STOP_PARSING) {
        return;
      }
    } else if ("<" === a.charAt(e) && htmlparser.isAlphabet(a.charAt(e + 1))) {
      if (x() && htmlparser.DEFINE.STOP_PARSING) {
        return;
      }
      q = J(c, k, b, a);
      if (htmlparser.DEFINE.STOP_PARSING && q === $jscomp$scope$m1534190617$0$PARSING_STOP) {
        return;
      }
      if (q) {
        a = a.substr(q);
      } else {
        y(a);
        return;
      }
    } else if (a.indexOf("\x3c!--") === e) {
      if (x() && htmlparser.DEFINE.STOP_PARSING) {
        return;
      }
      q = a.indexOf("--\x3e");
      if (-1 !== q) {
        if (!0 === b.onParseComment(htmlparser.unescapeHTML(a.substring(4, q))) && htmlparser.DEFINE.STOP_PARSING) {
          return;
        }
        a = a.substr(q + 3);
      } else {
        y(a);
        return;
      }
    } else if (htmlparser.DEFINE.USE_CDATA_SECTION && a.indexOf("<![CDATA[") === e) {
      if (x() && htmlparser.DEFINE.STOP_PARSING) {
        return;
      }
      q = a.indexOf("]]\x3e");
      if (-1 !== q) {
        if (!0 === b.onParseCDATASection(htmlparser.unescapeHTML(a.substring(9, q))) && htmlparser.DEFINE.STOP_PARSING) {
          return;
        }
        a = a.substr(q + 3);
      } else {
        y(a);
        return;
      }
    } else if (htmlparser.DEFINE.USE_DOCUMENT_TYPE_NODE && a.indexOf("<!DOCTYPE ") === e) {
      if (x() && htmlparser.DEFINE.STOP_PARSING) {
        return;
      }
      q = a.indexOf(">");
      if (-1 !== q) {
        if (!0 === b.onParseDocType(a.substring(e, q + 1)) && htmlparser.DEFINE.STOP_PARSING) {
          return;
        }
        a = a.substr(q + 1);
      } else {
        y(a);
        return;
      }
    } else {
      if (m() && htmlparser.DEFINE.STOP_PARSING) {
        return;
      }
    }
    if (htmlparser.DEFINE.TIME_SLICE_EXECUTION && f && a && L + M <= +new Date()) {
      b.onParseProgress(1 - (a.length - e) / d, $jscomp$scope$m1534190617$1$exec, [a, b, c, d, e, f, g, h]);
      return;
    }
  }
  F(c, b, "", !0);
  htmlparser.DEFINE.TIME_SLICE_EXECUTION && f && b.onParseComplete && b.onParseComplete();
}, $jscomp$scope$m1534190617$0$PARSING_STOP = 1;
htmlparser.exec = function(a, b) {
  $jscomp$scope$m1534190617$1$exec(a, b, [], a.length, 0, htmlparser.DEFINE.TIME_SLICE_EXECUTION && !!b.onParseProgress, htmlparser.DEFINE.USE_XML && !!b.isXHTML, !1);
};
htmljson.DEFINE = {};
htmljson.DEFINE.DEBUG = !1;
htmljson.DEFINE.USE_XML_NS = !1;
htmljson.DEFINE.USE_XHTML = !1;
htmljson.DEFINE.INSTRUCTION_ATTR_PREFIX = ":";
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
function m_executeProcessingInstruction(a, b, c, d) {
  var e = b[1], f = b.slice(2), g;
  core.isFunction(a) ? g = f.length ? a.call(d, e, f) : a.call(d, e) : a[e] && (g = f.length ? a[e].apply(d || a, f) : a[e].call(d || a));
  htmljson.DEFINE.DEBUG && (null == g || m_isStringOrNumber(g) || core.isArray(g) || c && c("PROCESSING_INSTRUCTION Error! [" + JSON.stringify(b) + "]"));
  (g = core.deepCopy(g)) && core.isArray(g[0]) && g.unshift(htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE);
  return g;
}
function m_replaceProcessingInstructionWithHTMLJson(a, b, c) {
  c[0] === htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE ? (c.shift(), c.unshift(b, 1), a.splice.apply(a, c)) : a.splice(b, 1, c);
}
function m_executeInstructionAttr(a, b, c, d, e) {
  var f;
  if (core.isArray(c) && core.isString(c[0])) {
    var g = c[0];
    c = c.slice(1);
    core.isFunction(a) ? f = c.length ? a.call(e, g, c) : a.call(e, g) : a[g] && (f = c.length ? a[g].apply(e || a, c) : a[g].call(e || a));
  } else {
    core.isString(c) ? core.isFunction(a) ? f = a.call(e, c) : a[c] && (f = a[c].call(e || a)) : htmljson.DEFINE.DEBUG && d && d("Invalid InstructionAttr value! [" + b + "=" + c + "]");
  }
  core.isArray(f) && (a = m_executeInstructionAttr(a, b, f, d, e), void 0 !== a && (f = a));
  return f;
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
      var e = c[b + 0];
      var f = c[b + 1];
      if (core.isNumber(e)) {
        if (e === a._nodeType && !0 === f(a)) {
          break;
        }
      } else if ("*" === e) {
        if (!0 === f(a)) {
          break;
        }
      } else if (core.isString(e)) {
        if (e === a._tagName && !0 === f(a)) {
          break;
        }
      } else if (htmljson.DEFINE.DEBUG) {
        throw "onEnterNode: invalid selector found! " + e;
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
  var b = a.indexOf("#"), c = a.indexOf("."), d = "", e = "";
  b < c ? (d = a.split(".")[1], a = a.split(".")[0], 0 < b && (e = a.split("#")[1], a = a.split("#")[0])) : c < b && (e = a.split("#")[1], a = a.split("#")[0], 0 < c && (d = a.split(".")[1], a = a.split(".")[0]));
  return [a, e, d];
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
    var e = a[d];
    "0px" === e && (e = 0);
    b[++c] = m_toSnakeCase(d) + ":" + e;
  }
  return b.join(";");
}
function m_parseCSSText(a) {
  function b(G, F) {
    f[m_trimLastChar(G, " ")] = "0px" === F ? 0 : m_tryToFiniteNumber(m_trimLastChar(F, " "));
    ++g;
  }
  for (var c = 0, d = a.length, e = 0, f = {}, g = 0, h, m, x = "", y; e < d; ++e) {
    h = a.charAt(e);
    switch(c) {
      case 0:
        if (htmlparser.isWhitespace(h)) {
          break;
        }
        m = e;
        c = 1;
      case 1:
        ":" === h && (y = a.substring(m, e), c = 2);
        break;
      case 2:
        if (htmlparser.isWhitespace(h)) {
          break;
        }
        m = e;
        c = 3;
      case 3:
        '"' === h || "'" === h ? (x = h, c = 4) : ";" === h && (b(y, a.substring(m, e)), c = 0);
        break;
      case 4:
        x === h && (x = "", c = 3);
    }
    3 <= c && b(y, a.substring(m));
  }
  return g ? f : null;
}
function m_createVNodeFromHTMLJson(a, b) {
  var c, d;
  htmljson.Traverser.traverseAllDescendantNodes(a, function(e, f, g, h) {
    function m(F, J, L) {
      c ? (h < d.length && (d.length = h), F = d[d.length - 1].insertNodeLast(F, J, L), m_hasChildren(e) && (d[h] = F)) : (c = new VNode(b, 0, F, J, L), d = [c]);
    }
    if (m_isStringOrNumber(e)) {
      m(htmljson.NODE_TYPE.TEXT_NODE, e);
    } else {
      f = e[0];
      g = e[1];
      var x = 1, y = f, G;
      switch(f) {
        case htmljson.NODE_TYPE.DOCUMENT_NODE:
        case htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER:
        case htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER:
          m(f, g);
          break;
        case htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE:
          m(f);
          break;
        case htmljson.NODE_TYPE.TEXT_NODE:
        case htmljson.NODE_TYPE.CDATA_SECTION:
        case htmljson.NODE_TYPE.COMMENT_NODE:
        case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START:
        case htmljson.NODE_TYPE.ELEMENT_END_TAG:
          m(f, g);
          break;
        case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_END:
          m(f);
          break;
        case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION:
          x = [];
          y = 2;
          for (G = e.length; y < G; ++y) {
            x[y - 2] = e[y];
          }
          m(f, g, G - 2 ? x : null);
          break;
        case htmljson.NODE_TYPE.ELEMENT_NODE:
        case htmljson.NODE_TYPE.ELEMENT_START_TAG:
          y = g, x = 2;
        default:
          core.isString(y) && m(1 === x ? htmljson.NODE_TYPE.ELEMENT_NODE : f, y, e[x]);
      }
    }
    if (b) {
      return htmljson.Traverser.VISITOR_OPTION.BREAK;
    }
  });
  return c;
}
;var json2json = {main:function(a, b, c, d, e, f) {
  core.isArray(a) ? (a[0] !== htmljson.NODE_TYPE.DOCUMENT_NODE && a[0] !== htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE && (a = [htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE, a]), json2json.process(a, b, c, e, f), d && dispatchDocumentReadyEvent(d, a)) : htmljson.DEFINE.DEBUG && e && e("Invalid html.json document!");
}, process:function(a, b, c, d, e) {
  function f(k, C, q) {
    function E(A, u) {
      for (; 0 <= k.indexOf(A);) {
        k = k.split(A).join(u);
      }
    }
    q && (k = k.replace(/([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])\s([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])/g, "$1$2"));
    k = k.split("\t").join(" ");
    E("\n\n", "\n");
    E("  ", " ");
    if (C && ("\n " === k.substr(k.length - 2) && (k = m_trimLastChar(k, " ")), "\n" === k.charAt(k.length - 1))) {
      var l = "\n" === k.charAt(0);
    }
    k = m_trimLastChar(k, "\n");
    k = k.split("\n").join(" ");
    E("  ", " ");
    l && (k = m_trimChar(k, " "));
    k = k.split("\\u0020").join(" ").split("&#x20;").join(" ").split("&#32;").join(" ");
    return m_tryToFiniteNumber(k);
  }
  function g(k, C) {
    function q(n) {
      return n.split("\n").join("").split(" ").join("").split("\t").join("");
    }
    function E(n) {
      var w;
      htmljson.Traverser.traverseAllDescendantNodes(n, function(p, t, r, z) {
        m_getNodeType(p) === htmljson.NODE_TYPE.TEXT_NODE && (w = [p, t, r]);
      });
      return w;
    }
    var l, A;
    for (htmljson.Traverser.traverseAllDescendantNodes(k, function(n, w, p, t) {
      if (m_getNodeType(n) === htmljson.NODE_TYPE.TEXT_NODE) {
        n = "" + (m_isStringOrNumber(n) ? n : n[1]);
        if (q(n)) {
          return w.splice(p, 1, m_trimFirstChar(n, "\n")), htmljson.Traverser.VISITOR_OPTION.BREAK;
        }
        w.splice(p, 1);
        return htmljson.Traverser.VISITOR_OPTION.REMOVED;
      }
    }); l = E(k);) {
      var u = l[0];
      var B = l[1];
      l = l[2];
      u = "" + (m_isStringOrNumber(u) ? u : u[1]);
      if (q(u)) {
        B.splice(l, 1, m_trimLastChar(u, "\n"));
        break;
      } else {
        B.splice(l, 1);
      }
    }
    if (C) {
      for (; htmljson.Traverser.traverseAllDescendantNodes(k, function(n, w, p, t) {
        if (m_getNodeType(n) === htmljson.NODE_TYPE.TEXT_NODE) {
          var r = (t = E(k)) ? w === t[1] && p === t[2] : !1;
          t = "" + (m_isStringOrNumber(n) ? n : n[1]);
          for (var z = t.split("\n"), D = 0, H = z.length, v; D < H - (r ? 0 : 1); ++D) {
            for (t = z[D];;) {
              if (v = t.charAt(t.length - 1), "\t" === v || " " === v) {
                t = t.substr(0, t.length - 1);
              } else {
                break;
              }
            }
            z[D] = t;
          }
          t = z.join("\n");
          if ("\n" === t && A) {
            return n = A[0], r = A[1], z = A[2], m_isStringOrNumber(n) ? r[z] += t : n[1] += t, w.splice(p, 1), htmljson.Traverser.VISITOR_OPTION.REMOVED;
          }
          m_isStringOrNumber(n) ? w[p] = t : n[1] = t;
          A = [n, w, p];
        }
      });) {
      }
    }
  }
  c = e || {};
  var h = -1 !== ["normal", !0, "aggressive"].indexOf(c.trimWhitespaces), m = "aggressive" === c.trimWhitespaces, x = !!c.removeNewlineBetweenFullWidthChars, y = !1 !== c.keepCDATASections, G = !1 !== c.keepComments, F = !0 === c.keepEmptyConditionalComment, J = c.instructionAttrPrefix || htmljson.DEFINE.INSTRUCTION_ATTR_PREFIX, L, M;
  (htmljson.Traverser.traverseAllDescendantNodes(a, function(k, C, q, E) {
    E = k[0];
    var l = k[1], A = 1;
    switch(m_getNodeType(k)) {
      case htmljson.NODE_TYPE.DOCUMENT_NODE:
        h && (k[1] = l.split("\n").join(" ").split("  ").join(" "));
        break;
      case htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE:
        break;
      case htmljson.NODE_TYPE.TEXT_NODE:
        core.isArray(k) || (l = k);
        if (core.isString(l)) {
          if (M || (l = m_normalizeNewlines(l), h && (l = f(l, m, x))), "" !== l) {
            C[q] = l;
          } else {
            return C.splice(q, 1), htmljson.Traverser.VISITOR_OPTION.REMOVED;
          }
        }
        break;
      case htmljson.NODE_TYPE.CDATA_SECTION:
        if (!y) {
          return C.splice(q, 1), htmljson.Traverser.VISITOR_OPTION.REMOVED;
        }
        break;
      case htmljson.NODE_TYPE.COMMENT_NODE:
        if (!G) {
          return C.splice(q, 1), htmljson.Traverser.VISITOR_OPTION.REMOVED;
        }
        break;
      case htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER:
        break;
      case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START:
        break;
      case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_END:
        var u = C[q - 1];
        if (!F && u && u[0] === htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START) {
          return C.splice(q - 1, 2), 2 * htmljson.Traverser.VISITOR_OPTION.REMOVED;
        }
        break;
      case htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER:
        break;
      case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION:
        if (b && (u = m_executeProcessingInstruction(b, k, d), void 0 !== u)) {
          if (null === u || "" === u) {
            return C.splice(q, 1), htmljson.Traverser.VISITOR_OPTION.REMOVED;
          }
          if (m_isStringOrNumber(u)) {
            C.splice(q, 1, u), L = !0;
          } else if (core.isArray(u)) {
            return m_replaceProcessingInstructionWithHTMLJson(C, q, u), htmljson.Traverser.VISITOR_OPTION.REMOVED;
          }
        }
        break;
      case htmljson.NODE_TYPE.ELEMENT_NODE:
      case htmljson.NODE_TYPE.ELEMENT_START_TAG:
        core.isNumber(E) && (E = l, A = 2);
        E = m_parseTagName(E)[0];
        C = k[A];
        if (m_isAttributes(C)) {
          q = A - 1;
          l = 0;
          var B, n = m_parseTagName(k[q]), w = n[1], p = n[2];
          n = n[0];
          for (z in C) {
            var t = z;
            var r = C[z];
            if (B = m_isInstructionAttr(J, z)) {
              var z = z.substr(J.length);
              "className" === z && (z = "class");
              if (b) {
                if (r = m_executeInstructionAttr(b, z, r, d), void 0 !== r) {
                  if (delete C[t], core.isArray(r)) {
                    core.isString(r[0]) ? (C[t] = r, ++l) : htmljson.DEFINE.DEBUG && d && d("Invalid dynamic attribute callback value! [" + t + "=" + r + "]");
                  } else if ((!htmlparser.BOOLEAN_ATTRIBUTES[z] || !1 !== r) && null !== r) {
                    if (core.isString(r)) {
                      if ("id" === z) {
                        w = r;
                        continue;
                      } else if ("class" === z) {
                        t = r.split(" ");
                        for (r = t.length; r;) {
                          B = t[--r], -1 === (" " + p + " ").indexOf(" " + B + " ") && (p = (p ? " " : "") + B);
                        }
                        continue;
                      }
                    }
                    C[z] = r;
                    ++l;
                  }
                } else {
                  ++l;
                }
              } else {
                ++l;
              }
            } else {
              ++l;
            }
          }
          k[q] = m_createTagName(n, w, p);
          0 === l && k.splice(A, 1);
        }
        if (m_FAMILY_OF_PRE_ELEMENT[E]) {
          g(k, m), M = k;
        } else if (m_TRIM_NEWLINES_ELEMENTS[E]) {
          k = M = k;
          z = m_getChildNodeStartIndex(k);
          E = k.length;
          for (var D, H, v; z < E; ++z) {
            A = k[z], m_getNodeType(A) === htmljson.NODE_TYPE.TEXT_NODE && (u = u || z, D = D || A, H = z, v = A);
          }
          u && (core.isArray(D) && (D = D[1]), core.isArray(v) && (v = v[1]), u === H ? core.isString(D) && (D = m_normalizeNewlines(D), D = m_trimChar(D, "\n"), k[u] = m_tryToFiniteNumber(D)) : (core.isString(D) && (D = m_normalizeNewlines(D), D = m_trimFirstChar(D, "\n"), k[u] = m_tryToFiniteNumber(D)), core.isString(v) && (v = m_normalizeNewlines(v), v = m_trimLastChar(v, "\n"), k[H] = m_tryToFiniteNumber(v))));
        }
        break;
      default:
        htmljson.DEFINE.DEBUG && d && d("Not html.json! [" + k + "]");
    }
  }, function(k, C, q, E) {
    if (!F) {
      switch(m_getNodeType(k)) {
        case htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER:
        case htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER:
          if (2 === k.length) {
            return C.splice(q, 1), htmljson.Traverser.VISITOR_OPTION.REMOVED;
          }
      }
    }
    M === k && (M = null);
  }) || L) && normalizeTextNodes(a);
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
    e.splice(f, 0, m_tryToFiniteNumber(c));
    c = "";
  }
  var c = "", d, e, f;
  htmljson.Traverser.traverseAllDescendantNodes(a, function(g, h, m, x) {
    if (c && d !== x) {
      return b(), htmljson.Traverser.VISITOR_OPTION.INSERTED_BEFORER;
    }
    if (m_getNodeType(g) === htmljson.NODE_TYPE.TEXT_NODE) {
      return c = m_isStringOrNumber(g) ? c + g : c + g[1], h.splice(m, 1), d = x, e = h, f = m, htmljson.Traverser.VISITOR_OPTION.REMOVED;
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
json2json.main.gulp = function(a, b, c, d, e) {
  const f = require("plugin-error"), g = require("through2"), h = e && e.prettify;
  return g.obj(function(m, x, y) {
    if (m.isNull()) {
      return y();
    }
    if (m.isStream()) {
      return this.emit("error", new f("json2json", "Streaming not supported")), y();
    }
    if (".json" === m.extname) {
      try {
        const G = JSON.parse(m.contents.toString(x));
        json2json.main(G, a, b, c, d, e);
        const F = JSON.stringify(G, null, h ? "    " : "");
        m.contents = Buffer.from(F);
      } catch (G) {
        this.emit("error", new f("json2json", G));
      }
    }
    y(null, m);
  });
};

