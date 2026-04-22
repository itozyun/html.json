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
htmlparser.DEFINE.USE_DOCUMENT_TYPE_NODE = !0;
htmlparser.DEFINE.USE_CDATA_SECTION = !0;
htmlparser.DEFINE.USE_PROCESSING_INSTRUCTION = !0;
htmlparser.DEFINE.USE_TRADITIONAL_TAGS = !1;
htmlparser.DEFINE.USE_PAUSE = !1;
htmlparser.XML_ROOT_ELEMENTS = {xml:!0, svg:!0, math:!0};
htmlparser.BOOLEAN_ATTRIBUTES = {async:!0, autofocus:!0, checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, draggable:!0, hidden:!0, ismap:!0, loop:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, novalidate:!0, nowrap:!0, readonly:!0, required:!0, reversed:!0, scoped:!0, selected:!0};
htmlparser.VOID_ELEMENTS = htmlparser.DEFINE.USE_TRADITIONAL_TAGS ? {area:!0, base:!0, col:!0, embed:!0, br:!0, hr:!0, img:!0, input:!0, link:!0, meta:!0, source:!0, track:!0, wbr:!0, basefont:!0, bgsound:!0, command:!0, frame:!0, isindex:!0, keygen:!0, param:!0, spacer:!0} : {area:!0, base:!0, col:!0, embed:!0, br:!0, hr:!0, img:!0, input:!0, link:!0, meta:!0, source:!0, track:!0, wbr:!0};
htmlparser.NON_TEXT_CHILD_ELEMENTS = htmlparser.DEFINE.USE_TRADITIONAL_TAGS ? {map:!0, datalist:!0, dl:!0, ol:!0, ul:!0, select:!0, optgroup:!0, table:!0, thead:!0, tfoot:!0, tbody:!0, colgroup:!0, tr:!0, dir:!0, frameset:!0, menu:!0} : {map:!0, datalist:!0, dl:!0, ol:!0, ul:!0, select:!0, optgroup:!0, table:!0, thead:!0, tfoot:!0, tbody:!0, colgroup:!0, tr:!0};
htmlparser.RAW_TEXT_ELEMENTS = htmlparser.DEFINE.USE_TRADITIONAL_TAGS ? {script:!0, style:!0, textarea:!0, title:!0, plaintext:!0, xmp:!0} : {script:!0, style:!0, textarea:!0, title:!0};
htmlparser.ESCAPABLE_RAW_TEXT_ELEMENTS = {textarea:!0, title:!0};
htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN = {caption:htmlparser.DEFINE.USE_TRADITIONAL_TAGS ? {article:!0, section:!0, nav:!0, aside:!0, h1:!0, h2:!0, h3:!0, h4:!0, h5:!0, h6:!0, header:!0, footer:!0, address:!0, p:!0, hr:!0, pre:!0, blockquote:!0, ol:!0, ul:!0, dl:!0, figure:!0, div:!0, a:!0, em:!0, strong:!0, small:!0, s:!0, cite:!0, q:!0, dfn:!0, abbr:!0, data:!0, time:!0, code:!0, "var":!0, samp:!0, kbd:!0, sub:!0, sup:!0, i:!0, b:!0, u:!0, mark:!0, ruby:!0, bdi:!0, bdo:!0, span:!0, 
br:!0, wbr:!0, ins:!0, del:!0, picture:!0, img:!0, iframe:!0, embed:!0, object:!0, video:!0, audio:!0, map:!0, area:!0, math:!0, svg:!0, form:!0, label:!0, input:!0, button:!0, select:!0, datalist:!0, textarea:!0, keygen:!0, output:!0, progress:!0, meter:!0, fieldset:!0, details:!0, dialog:!0, script:!0, noscript:!0, template:!0, canvas:!0} : {article:!0, section:!0, nav:!0, aside:!0, h1:!0, h2:!0, h3:!0, h4:!0, h5:!0, h6:!0, header:!0, footer:!0, address:!0, p:!0, hr:!0, pre:!0, blockquote:!0, ol:!0, 
ul:!0, dl:!0, figure:!0, div:!0, a:!0, em:!0, strong:!0, small:!0, s:!0, cite:!0, q:!0, dfn:!0, abbr:!0, data:!0, time:!0, code:!0, "var":!0, samp:!0, kbd:!0, sub:!0, sup:!0, i:!0, b:!0, u:!0, mark:!0, ruby:!0, bdi:!0, bdo:!0, span:!0, br:!0, wbr:!0, ins:!0, del:!0, picture:!0, img:!0, iframe:!0, embed:!0, object:!0, video:!0, audio:!0, map:!0, area:!0, math:!0, svg:!0, form:!0, label:!0, input:!0, button:!0, select:!0, datalist:!0, textarea:!0, output:!0, progress:!0, meter:!0, fieldset:!0, details:!0, 
dialog:!0, script:!0, noscript:!0, template:!0, canvas:!0}, dd:htmlparser.DEFINE.USE_TRADITIONAL_TAGS ? {article:!0, section:!0, nav:!0, aside:!0, h1:!0, h2:!0, h3:!0, h4:!0, h5:!0, h6:!0, header:!0, footer:!0, address:!0, p:!0, hr:!0, pre:!0, blockquote:!0, ol:!0, ul:!0, dl:!0, figure:!0, div:!0, a:!0, em:!0, strong:!0, small:!0, s:!0, cite:!0, q:!0, dfn:!0, abbr:!0, data:!0, time:!0, code:!0, "var":!0, samp:!0, kbd:!0, sub:!0, sup:!0, i:!0, b:!0, u:!0, mark:!0, ruby:!0, bdi:!0, bdo:!0, span:!0, 
br:!0, wbr:!0, ins:!0, del:!0, picture:!0, img:!0, iframe:!0, embed:!0, object:!0, video:!0, audio:!0, map:!0, area:!0, math:!0, svg:!0, table:!0, form:!0, label:!0, input:!0, button:!0, select:!0, datalist:!0, textarea:!0, keygen:!0, output:!0, progress:!0, meter:!0, fieldset:!0, details:!0, dialog:!0, script:!0, noscript:!0, template:!0, canvas:!0} : {article:!0, section:!0, nav:!0, aside:!0, h1:!0, h2:!0, h3:!0, h4:!0, h5:!0, h6:!0, header:!0, footer:!0, address:!0, p:!0, hr:!0, pre:!0, blockquote:!0, 
ol:!0, ul:!0, dl:!0, figure:!0, div:!0, a:!0, em:!0, strong:!0, small:!0, s:!0, cite:!0, q:!0, dfn:!0, abbr:!0, data:!0, time:!0, code:!0, "var":!0, samp:!0, kbd:!0, sub:!0, sup:!0, i:!0, b:!0, u:!0, mark:!0, ruby:!0, bdi:!0, bdo:!0, span:!0, br:!0, wbr:!0, ins:!0, del:!0, picture:!0, img:!0, iframe:!0, embed:!0, object:!0, video:!0, audio:!0, map:!0, area:!0, math:!0, svg:!0, table:!0, form:!0, label:!0, input:!0, button:!0, select:!0, datalist:!0, textarea:!0, output:!0, progress:!0, meter:!0, 
fieldset:!0, details:!0, dialog:!0, script:!0, noscript:!0, template:!0, canvas:!0}, dt:htmlparser.DEFINE.USE_TRADITIONAL_TAGS ? {address:!0, p:!0, hr:!0, pre:!0, blockquote:!0, ol:!0, ul:!0, dl:!0, figure:!0, div:!0, a:!0, em:!0, strong:!0, small:!0, s:!0, cite:!0, q:!0, dfn:!0, abbr:!0, data:!0, time:!0, code:!0, "var":!0, samp:!0, kbd:!0, sub:!0, sup:!0, i:!0, b:!0, u:!0, mark:!0, ruby:!0, bdi:!0, bdo:!0, span:!0, br:!0, wbr:!0, ins:!0, del:!0, picture:!0, img:!0, iframe:!0, embed:!0, object:!0, 
video:!0, audio:!0, map:!0, area:!0, math:!0, svg:!0, table:!0, form:!0, label:!0, input:!0, button:!0, select:!0, datalist:!0, textarea:!0, keygen:!0, output:!0, progress:!0, meter:!0, fieldset:!0, details:!0, dialog:!0, script:!0, noscript:!0, template:!0, canvas:!0} : {address:!0, p:!0, hr:!0, pre:!0, blockquote:!0, ol:!0, ul:!0, dl:!0, figure:!0, div:!0, a:!0, em:!0, strong:!0, small:!0, s:!0, cite:!0, q:!0, dfn:!0, abbr:!0, data:!0, time:!0, code:!0, "var":!0, samp:!0, kbd:!0, sub:!0, sup:!0, 
i:!0, b:!0, u:!0, mark:!0, ruby:!0, bdi:!0, bdo:!0, span:!0, br:!0, wbr:!0, ins:!0, del:!0, picture:!0, img:!0, iframe:!0, embed:!0, object:!0, video:!0, audio:!0, map:!0, area:!0, math:!0, svg:!0, table:!0, form:!0, label:!0, input:!0, button:!0, select:!0, datalist:!0, textarea:!0, output:!0, progress:!0, meter:!0, fieldset:!0, details:!0, dialog:!0, script:!0, noscript:!0, template:!0, canvas:!0}, p:htmlparser.DEFINE.USE_TRADITIONAL_TAGS ? {a:!0, em:!0, strong:!0, small:!0, s:!0, cite:!0, q:!0, 
dfn:!0, abbr:!0, data:!0, time:!0, code:!0, "var":!0, samp:!0, kbd:!0, sub:!0, sup:!0, i:!0, b:!0, u:!0, mark:!0, ruby:!0, bdi:!0, bdo:!0, span:!0, br:!0, wbr:!0, ins:!0, del:!0, picture:!0, img:!0, iframe:!0, embed:!0, object:!0, video:!0, audio:!0, map:!0, area:!0, math:!0, svg:!0, label:!0, input:!0, button:!0, select:!0, datalist:!0, textarea:!0, keygen:!0, output:!0, progress:!0, meter:!0, script:!0, noscript:!0, template:!0, canvas:!0} : {a:!0, em:!0, strong:!0, small:!0, s:!0, cite:!0, q:!0, 
dfn:!0, abbr:!0, data:!0, time:!0, code:!0, "var":!0, samp:!0, kbd:!0, sub:!0, sup:!0, i:!0, b:!0, u:!0, mark:!0, ruby:!0, bdi:!0, bdo:!0, span:!0, br:!0, wbr:!0, ins:!0, del:!0, picture:!0, img:!0, iframe:!0, embed:!0, object:!0, video:!0, audio:!0, map:!0, area:!0, math:!0, svg:!0, label:!0, input:!0, button:!0, select:!0, datalist:!0, textarea:!0, output:!0, progress:!0, meter:!0, script:!0, noscript:!0, template:!0, canvas:!0}, html:htmlparser.DEFINE.USE_TRADITIONAL_TAGS ? {head:!0, body:!0, 
frameset:!0} : {head:!0, body:!0}, head:htmlparser.DEFINE.USE_TRADITIONAL_TAGS ? {title:!0, base:!0, link:!0, meta:!0, style:!0, script:!0, noscript:!0, template:!0, bgsound:!0, isindex:!0} : {title:!0, base:!0, link:!0, meta:!0, style:!0, script:!0, noscript:!0, template:!0}, colgroup:{col:!0}, optgroup:{option:!0}, option:{}, tbody:{tr:!0}, tr:{th:!0, td:!0}};
htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.li = htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.td = htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.dd;
htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.th = htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.dt;
htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.rp = htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.rt = htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.p;
htmlparser.DEFINE.USE_TRADITIONAL_TAGS && (htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.rb = htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.rp, htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.rtc = htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.rbc = {rb:!0, rp:!0, rt:!0});
htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.tfoot = htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.thead = htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.tbody;
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
  return +a + "" === a && core.isNumber(+a);
}, isFiniteNumericString:function(a) {
  return core.isNumericString(a) && core.isFiniteNumber(+a);
}, isNumber:function(a) {
  return a === +a;
}, isFiniteNumber:function(a) {
  return core.isNumber(a) ? 0 === a - a : !1;
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
}};
function _copyPrimitivesAndListUncopiedIndexes(a, b) {
  for (var c = [], d = a.length, e = 0, f = -1, h; e < d; ++e) {
    h = a[e], core.isObject(h) ? c[++f] = e : b[e] = h;
  }
  return c;
}
function _copyPrimitivesAndListUncopiedKeys(a, b) {
  var c = [], d = -1, e;
  for (e in a) {
    var f = a[e];
    core.isObject(f) ? c[++d] = e : b[e] = f;
  }
  return c;
}
core.deepCopy = function(a) {
  var b = 0, c = core.isArray(a), d = c ? [] : {}, e = c ? _copyPrimitivesAndListUncopiedIndexes(a, d) : core.isObject(a) ? _copyPrimitivesAndListUncopiedKeys(a, d) : null, f, h;
  if (null === e) {
    return a;
  }
  for (a = [e, f = a, h = d]; 0 <= b;) {
    var k = e.shift();
    if (null != k) {
      var p = f[k];
      c = core.isArray(p);
      k = h[k] = c ? [] : {};
      c = c ? _copyPrimitivesAndListUncopiedIndexes(p, k) : _copyPrimitivesAndListUncopiedKeys(p, k);
      c.length && (b += 3, a.push(e = c, f = p, h = k));
    } else {
      a.length = b, b -= 3, e = a[b + 0], f = a[b + 1], h = a[b + 2];
    }
  }
  return d;
};
core.deepCopySafe = function(a) {
  var b = 0, c = core.isArray(a), d = c ? [] : {}, e = c ? _copyPrimitivesAndListUncopiedIndexes(a, d) : core.isObject(a) ? _copyPrimitivesAndListUncopiedKeys(a, d) : null, f = [a], h = [d], k = 1, p, x;
  if (null === e) {
    return a;
  }
  for (a = [e, p = a, x = d]; 0 <= b;) {
    var u = e.shift();
    if (null != u) {
      var z = p[u];
      a: {
        for (c = k; c;) {
          if (f[--c] === z) {
            c = h[c];
            break a;
          }
        }
        c = void 0;
      }
      c ? x[u] = c : (c = core.isArray(z), u = x[u] = c ? [] : {}, c = c ? _copyPrimitivesAndListUncopiedIndexes(z, u) : _copyPrimitivesAndListUncopiedKeys(z, u), f[k] = z, h[k] = u, k++, c.length && (b += 3, a.push(e = c, p = z, x = u)));
    } else {
      a.length = b, b -= 3, e = a[b + 0], p = a[b + 1], x = a[b + 2];
    }
  }
  return d;
};
htmljson.Traverser = {};
htmljson.Traverser.EnterHandler = {};
htmljson.Traverser.LeaveHandler = {};
var VISITOR_OPTION = {REMOVED:-1, NONE:0, INSERTED_BEFORER:1, BREAK:Infinity, SKIP:-Infinity};
htmljson.Traverser.VISITOR_OPTION = VISITOR_OPTION;
htmljson.Traverser.traverseAllDescendantNodes = function(a, b, c) {
  var d = a, e = m_getChildNodeStartIndex(d), f = 0, h = b(a, null, -1, f / 3), k = [-1, a, e], p = !1;
  if (h === VISITOR_OPTION.BREAK || h === VISITOR_OPTION.SKIP) {
    return !1;
  }
  if (0 < d.length - e) {
    do {
      var x = ++k[f];
      var u = d[x + e];
      if (null != u) {
        h = b(u, d, x + e, f / 3 + 1);
        if (h === VISITOR_OPTION.BREAK) {
          return p;
        }
        if (h !== VISITOR_OPTION.SKIP) {
          if (h <= VISITOR_OPTION.REMOVED) {
            k[f] += h, p = !0;
          } else {
            if (VISITOR_OPTION.INSERTED_BEFORER <= h && (k[f] += h, p = !0), m_hasChildren(u)) {
              f += 3, k[f + 0] = -1, k[f + 1] = d = u, k[f + 2] = e = m_getChildNodeStartIndex(u);
            } else if (c && d) {
              h = c(u, d, x + e, f / 3 + 1);
              if (h === VISITOR_OPTION.BREAK) {
                return p;
              }
              h !== VISITOR_OPTION.SKIP && (h <= VISITOR_OPTION.REMOVED || VISITOR_OPTION.INSERTED_BEFORER <= h) && (k[f] += h, p = !0);
            }
          }
        }
      } else {
        if (k.length = f, f -= 3, d = k[f + 1], e = k[f + 2], c && d) {
          x = k[f] + e;
          h = c(d[x], d, x, f / 3 + 1);
          if (h === VISITOR_OPTION.BREAK) {
            return p;
          }
          h !== VISITOR_OPTION.SKIP && (h <= VISITOR_OPTION.REMOVED || VISITOR_OPTION.INSERTED_BEFORER <= h) && (k[f] += h, p = !0);
        }
      }
    } while (0 <= f);
  }
  c && c(a, null, -1, 0);
  return p;
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
  var a = {div:!0, center:!0, fieldset:!0, blockquote:!0, form:!0, h1:!0, h2:!0, h3:!0, h4:!0, h5:!0, h6:!0, address:!0, p:!0, pre:!0, ul:!0, ol:!0, dl:!0, dir:!0, menu:!0, table:!0, hr:!0, textarea:!0, marquee:!0}, b = "";
  this.walkNodes(function(c) {
    if (c.isElement()) {
      var d = c._tagName;
      switch(d) {
        case "script":
        case "style":
        case "noscript":
          return htmljson.Traverser.VISITOR_OPTION.SKIP;
        case "img":
          return (d = c.getAttr("alt")) && (b += "[Image: " + d + "]"), htmljson.Traverser.VISITOR_OPTION.SKIP;
        case "li":
          "ol" === c.getParent()._tagName && (b += c.getMyIndex() + 1 + ".\t");
          break;
        case "dd":
          b += "\t";
          break;
        case "br":
          b += "\n";
          break;
        case "hr":
          b += "\n---";
          break;
        case "button":
          b += "[";
          break;
        case "blockquote":
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
        case "ul":
        case "ol":
        case "dl":
        case "table":
          break;
        case "th":
        case "td":
          c.getParent().getLastChild() !== c && (b += "\t");
          break;
        case "button":
          b += "]";
          break;
        case "li":
        case "dt":
        case "dd":
        case "tr":
        case "caption":
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
      if (htmljson.DEFINE.DEBUG && h && c[f - 1]._nodeType === htmljson.NODE_TYPE.ELEMENT_START_TAG) {
        throw "\u9589\u3058\u30bf\u30b0\u306e\u7121\u3044 Element \u306e\u6b21\u306b Node \u3092\u633f\u5165\u3059\u308b\u3053\u3068\u306f\u51fa\u6765\u307e\u305b\u3093!";
      }
      var h = c[--f];
      if (htmljson.DEFINE.DEBUG && h._nodeType === htmljson.NODE_TYPE.DOCUMENT_NODE) {
        throw "Document Node \u3092\u633f\u5165\u3059\u308b\u3053\u3068\u306f\u51fa\u6765\u307e\u305b\u3093!";
      }
    }
    f = c.length;
  }
  f && (VNode.treeIsUpdated = !0);
  for (; f;) {
    h = c[--f], h._nodeType === htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE ? h.getChildNodeCount() && _insertAt(a, b, h._childNodes) : (h.remove(), d.splice(b, 0, h), h._parent = a);
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
      var h = ++f[d];
      if (h = a.getChildNodeAt(h)) {
        var k = b(h);
        if (k === htmljson.Traverser.VISITOR_OPTION.BREAK) {
          break;
        }
        if (k !== htmljson.Traverser.VISITOR_OPTION.SKIP) {
          if (h.getChildNodeCount()) {
            d += 2, f[d + 0] = -1, f[d + 1] = a = h;
          } else if (c) {
            k = c(h);
            if (k === htmljson.Traverser.VISITOR_OPTION.BREAK) {
              break;
            }
            k !== htmljson.Traverser.VISITOR_OPTION.SKIP && (k <= htmljson.Traverser.VISITOR_OPTION.REMOVED || htmljson.Traverser.VISITOR_OPTION.INSERTED_BEFORER <= k) && (f[d] += k, e = !0);
          }
        }
      } else {
        if (c) {
          k = c(a);
          if (k === htmljson.Traverser.VISITOR_OPTION.BREAK) {
            break;
          }
          k !== htmljson.Traverser.VISITOR_OPTION.SKIP && (k <= htmljson.Traverser.VISITOR_OPTION.REMOVED || htmljson.Traverser.VISITOR_OPTION.INSERTED_BEFORER <= k) && (f[d] += k, e = !0);
        }
        f.length = d;
        d -= 2;
        a = f[d + 1];
      }
    } while (0 <= d);
  }
  return e;
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
var $jscomp$scope$m1534190617$0$exec = function(a, b, c, d, e) {
  function f() {
    v = a.indexOf("<", v + 1);
    if (-1 === v && (v = a.length, h() && htmlparser.DEFINE.USE_PAUSE)) {
      return !0;
    }
  }
  function h() {
    if (v) {
      var C = a.substr(0, v);
      a = a.substr(v);
      v = 0;
      if ((e || E && !htmlparser.NON_TEXT_CHILD_ELEMENTS[E]) && !0 === b.onParseText(J && !htmlparser.ESCAPABLE_RAW_TEXT_ELEMENTS[E] ? C : htmlparser.unescapeHTML(C)) && htmlparser.DEFINE.USE_PAUSE) {
        return k(), !0;
      }
    }
  }
  function k() {
    b.onParseProgress && b.onParseProgress(1 - a.length / d, $jscomp$scope$m1534190617$0$exec, [a, b, c, d, e]);
  }
  function p(C) {
    b.onParseError && b.onParseError(C);
  }
  function x(C) {
    for (var g = 0, r = a.length, m = 3, l, t; m < r && 2 !== g; ++m) {
      switch(l = a.charAt(m), g) {
        case 0:
          if (htmlparser.isWhitespace(l)) {
            g = 1;
            t = m;
            break;
          }
        case 1:
          ">" === l && (g = 2, t = m);
      }
    }
    if (2 === g) {
      g = a.substring(2, t), a = a.substr(m), htmlparser.DEFINE.USE_XHTML && htmlparser.isNamespacedTag(g) || (g = g.toLowerCase()), htmlparser.VOID_ELEMENTS[g] || u(C, g, !1);
    } else {
      return p(a), !0;
    }
  }
  function u(C, g, r) {
    var m = 0, l = C.length;
    if (g) {
      for (m = l; 0 <= m && C[--m] !== g;) {
      }
    }
    if (0 <= m) {
      for (; m < l;) {
        b.onParseEndTag(C[--l], r && !htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN[C[l]], !1);
      }
      C.length = m;
    } else {
      b.onParseEndTag(g, !1, !0);
    }
    E = c[c.length - 1] || "";
  }
  function z(C) {
    function g(K) {
      A = a.substring(1, K);
      htmlparser.DEFINE.USE_XHTML && htmlparser.isNamespacedTag(A) || (A = A.toLowerCase());
    }
    function r(K) {
      var M = a.substring(H, F);
      htmlparser.DEFINE.USE_XHTML && htmlparser.isNamespacedTag(A) || (M = M.toLowerCase());
      n = n || {};
      n[M] = null != K ? htmlparser.unescapeAttrValue(a.substring(D, K)) : !0;
    }
    function m() {
      (y = "/>" === a.substr(q, 2)) && ++q;
      return y;
    }
    for (var l = 1, t = a.length, q = 2, n = null, y = !1, w, H, F, D, A, N, L; q < t && 9 > l; ++q) {
      switch(w = a.charAt(q), l) {
        case 1:
          htmlparser.isWhitespace(w) ? (l = 2, g(q)) : ">" === w ? (l = 9, g(q)) : m() && (l = 9, g(q - 1));
          break;
        case 2:
          ">" === w || m() ? l = 9 : htmlparser.isWhitespace(w) || (l = 3, H = q);
          break;
        case 3:
          "=" === w ? (l = 5, F = q) : htmlparser.isWhitespace(w) ? (l = 4, F = q) : ">" === w ? (l = 9, F = q, r()) : m() && (l = 9, F = q - 1, r());
          break;
        case 4:
          "=" === w ? l = 5 : ">" === w || m() ? (l = 9, r()) : htmlparser.isWhitespace(w) || (l = 3, r(), H = q);
          break;
        case 5:
          '"' === w || "'" === w ? (l = 6, N = w, L = !1, D = q + 1) : htmlparser.isWhitespace(w) || (l = 7, D = q);
          break;
        case 6:
          L || w !== N || (l = 2, r(q));
          L = "\\" === w && !L;
          break;
        case 7:
          htmlparser.isWhitespace(w) ? (l = 2, r(q)) : ">" === w && (l = 9, r(q));
      }
    }
    if (9 === l) {
      if (!htmlparser.DEFINE.USE_XHTML || !htmlparser.isNamespacedTag(A)) {
        for (; E;) {
          if (htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN[E] && !htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN[E][A]) {
            u(C, E, !1);
          } else {
            break;
          }
        }
      }
      (y = y || !!htmlparser.VOID_ELEMENTS[A]) || (E = c[c.length] = A);
      a = a.substr(q);
      if (!0 === b.onParseStartTag(A, n, y, q) && htmlparser.DEFINE.USE_PAUSE) {
        return k(), !0;
      }
    } else {
      return p(a), !0;
    }
  }
  var v = -1, E = "", I;
  htmlparser.DEFINE.USE_PAUSE && (E = c[c.length - 1] || "");
  if (!f() || !htmlparser.DEFINE.USE_PAUSE) {
    for (; a;) {
      var J = htmlparser.RAW_TEXT_ELEMENTS[E];
      if (htmlparser.DEFINE.USE_XHTML && e && a.length === d && a.indexOf("<?xml ") === v) {
        a = a.substr(v);
        v = 0;
        var B = a.indexOf("?>");
        if (-1 !== B) {
          var G = a.substring(2, B);
          a = a.substr(B + 2);
          e = !1;
          if (!0 === b.onParseProcessingInstruction(G) && htmlparser.DEFINE.USE_PAUSE) {
            k();
            return;
          }
        } else {
          p(a);
          return;
        }
      } else if (htmlparser.DEFINE.USE_PROCESSING_INSTRUCTION && a.indexOf("<?") === v) {
        if (h() && htmlparser.DEFINE.USE_PAUSE) {
          return;
        }
        B = a.indexOf("?>");
        if (-1 !== B) {
          if (G = a.substring(2 + v, B), a = a.substr(B + 2), !0 === b.onParseProcessingInstruction(G) && htmlparser.DEFINE.USE_PAUSE) {
            k();
            return;
          }
        } else {
          p(a);
          return;
        }
      } else if (a.indexOf("</", v) === v && htmlparser.isAlphabet(a.charAt(v + 2))) {
        if (J && (htmlparser.DEFINE.USE_TRADITIONAL_TAGS && "plaintext" === E ? I = !0 : a.indexOf(E, v) !== v + 2 && a.indexOf(E.toUpperCase(), v) !== v + 2 && (I = !0)), I) {
          if (f() && htmlparser.DEFINE.USE_PAUSE) {
            return;
          }
          I = !1;
        } else {
          if (h() && htmlparser.DEFINE.USE_PAUSE || x(c)) {
            return;
          }
        }
      } else if (J) {
        if (f() && htmlparser.DEFINE.USE_PAUSE) {
          return;
        }
      } else if ("<" === a.charAt(v) && htmlparser.isAlphabet(a.charAt(v + 1))) {
        if (h() && htmlparser.DEFINE.USE_PAUSE || z(c)) {
          return;
        }
      } else if (a.indexOf("\x3c!--") === v) {
        if (h() && htmlparser.DEFINE.USE_PAUSE) {
          return;
        }
        B = a.indexOf("--\x3e");
        if (-1 !== B) {
          if (G = a.substring(4, B), a = a.substr(B + 3), !0 === b.onParseComment(htmlparser.unescapeHTML(G)) && htmlparser.DEFINE.USE_PAUSE) {
            k();
            return;
          }
        } else {
          p(a);
          return;
        }
      } else if (htmlparser.DEFINE.USE_CDATA_SECTION && a.indexOf("<![CDATA[") === v) {
        if (h() && htmlparser.DEFINE.USE_PAUSE) {
          return;
        }
        B = a.indexOf("]]\x3e");
        if (-1 !== B) {
          if (G = a.substring(9, B), a = a.substr(B + 3), !0 === b.onParseCDATASection(G) && htmlparser.DEFINE.USE_PAUSE) {
            k();
            return;
          }
        } else {
          p(a);
          return;
        }
      } else if (htmlparser.DEFINE.USE_DOCUMENT_TYPE_NODE && (a.indexOf("<!DOCTYPE ") === v || a.indexOf("<!doctype ") === v)) {
        if (a = a.substr(v), v = 0, B = a.indexOf(">"), -1 !== B) {
          if (G = a.substring(0, B + 1), a = a.substr(B + 1), e = !1, !0 === b.onParseDocType(G) && htmlparser.DEFINE.USE_PAUSE) {
            k();
            return;
          }
        } else {
          p(a);
          return;
        }
      } else {
        if (f() && htmlparser.DEFINE.USE_PAUSE) {
          return;
        }
      }
    }
    u(c, "", !0);
    htmlparser.DEFINE.USE_PAUSE && b.onParseComplete && b.onParseComplete();
  }
};
htmlparser.exec = function(a, b) {
  $jscomp$scope$m1534190617$0$exec(a, b, [], a.length, !0);
};
htmljson.DEFINE = {};
htmljson.DEFINE.DEBUG = !1;
htmljson.DEFINE.ENABLE_LEGACY_BROWSERS_SUPPORT = !0;
htmljson.DEFINE.USE_XML_IN_HTML = !0;
htmljson.DEFINE.INSTRUCTION_ATTR_PREFIX = ":";
htmljson.base = {};
var Styles, Attrs, InstructionArgs, HTMLJson, InstructionHandler, EnterNodeHandler, m_OMITTABLE_END_TAGS = htmlparser.DEFINE.USE_TRADITIONAL_TAGS ? {html:!0, head:!0, body:!0, p:!0, dt:!0, dd:!0, li:!0, option:!0, tbody:!0, thead:!0, tfoot:!0, td:!0, th:!0, tr:!0, rp:!0, rt:!0, optgroup:!0, caption:!0, colgroup:!0, rb:!0, rbc:!0, rtc:!0} : {html:!0, head:!0, body:!0, p:!0, dt:!0, dd:!0, li:!0, option:!0, tbody:!0, thead:!0, tfoot:!0, td:!0, th:!0, tr:!0, rp:!0, rt:!0, optgroup:!0, caption:!0, colgroup:!0}, 
m_FORCE_END_TAG = htmljson.DEFINE.ENABLE_LEGACY_BROWSERS_SUPPORT ? {source:!0} : {}, m_DESCENDANTS_MUST_HAVE_END_TAG = htmljson.DEFINE.ENABLE_LEGACY_BROWSERS_SUPPORT ? {a:!0} : {}, m_LASTCHILD_P_MUST_HAVE_END_TAG = htmljson.DEFINE.ENABLE_LEGACY_BROWSERS_SUPPORT ? {audio:!0, del:!0, ins:!0, map:!0, noscript:!0, video:!0} : {audio:!0, del:!0, ins:!0, map:!0, noscript:!0, video:!0, a:!0}, m_TAGNAME_TO_NAMESPACE = {xml:"http://www.w3.org/1999/xhtml", svg:"http://www.w3.org/2000/svg", math:"http://www.w3.org/1998/Math/MathML"}, 
m_P_END_TAG_LESS_TAGS = htmlparser.DEFINE.USE_TRADITIONAL_TAGS ? {h1:!0, h2:!0, h3:!0, h4:!0, h5:!0, h6:!0, address:!0, blockquote:!0, div:!0, dl:!0, fieldset:!0, form:!0, hr:!0, legend:!0, ul:!0, noscript:!0, ol:!0, p:!0, pre:!0, article:!0, aside:!0, canvas:!0, details:!0, figcaption:!0, figure:!0, footer:!0, header:!0, hgroup:!0, main:!0, nav:!0, section:!0, table:!htmljson.DEFINE.ENABLE_LEGACY_BROWSERS_SUPPORT, center:!0, dir:!0, noframes:!0, marquee:!0, menu:!0} : {h1:!0, h2:!0, h3:!0, h4:!0, 
h5:!0, h6:!0, address:!0, blockquote:!0, div:!0, dl:!0, fieldset:!0, form:!0, hr:!0, legend:!0, ul:!0, noscript:!0, ol:!0, p:!0, pre:!0, article:!0, aside:!0, canvas:!0, details:!0, figcaption:!0, figure:!0, footer:!0, header:!0, hgroup:!0, main:!0, nav:!0, section:!0, table:!htmljson.DEFINE.ENABLE_LEGACY_BROWSERS_SUPPORT}, m_TRIM_NEWLINES_ELEMENTS = {script:!0, style:!0, textarea:!0, title:!0}, m_FAMILY_OF_PRE_ELEMENT = htmlparser.DEFINE.USE_TRADITIONAL_TAGS ? {pre:!0, listing:!0} : {pre:!0}, m_SPECIAL_LAYOUT_ELEMENTS = 
{caption:!0, th:!0, td:!0, li:!0, dt:!0, dd:!0};
function m_isStringOrNumber(a) {
  return core.isString(a) || core.isNumber(a);
}
function m_tryToFiniteNumber(a) {
  return core.isFiniteNumericString(a) ? +a : a;
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
  var e = b[1], f = b.slice(2), h;
  core.isFunction(a) ? h = f.length ? a.call(d, e, f) : a.call(d, e) : a[e] && (h = f.length ? a[e].apply(d || a, f) : a[e].call(d || a));
  htmljson.DEFINE.DEBUG && (null == h || m_isStringOrNumber(h) || core.isArray(h) || c && c("PROCESSING_INSTRUCTION Error! [" + JSON.stringify(b) + "]"));
  (h = core.deepCopy(h)) && core.isArray(h[0]) && h.unshift(htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE);
  return h;
}
function m_replaceProcessingInstructionWithHTMLJson(a, b, c) {
  c[0] === htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE ? (c.splice(0, 1, b, 1), a.splice.apply(a, c)) : a.splice(b, 1, c);
}
function m_executeInstructionAttr(a, b, c, d, e) {
  var f;
  if (core.isArray(c) && core.isString(c[0])) {
    var h = c[0];
    c = c.slice(1);
    core.isFunction(a) ? f = c.length ? a.call(e, h, c) : a.call(e, h) : a[h] && (f = c.length ? a[h].apply(e || a, c) : a[h].call(e || a));
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
  return m_trimTrailingChar(m_trimLeadingChar(a, b), b);
}
function m_trimChars(a, b) {
  return m_trimTrailingChars(m_trimLeadingChars(a, b), b);
}
function m_trimLeadingChar(a, b) {
  for (; a.charAt(0) === b;) {
    a = a.substr(1);
  }
  return a;
}
function m_trimLeadingChars(a, b) {
  for (; a;) {
    var c = a.charAt(0);
    if (0 <= b.indexOf(c)) {
      a = a.substr(1);
    } else {
      break;
    }
  }
  return a;
}
function m_trimTrailingChar(a, b) {
  for (; a.charAt(a.length - 1) === b;) {
    a = a.substr(0, a.length - 1);
  }
  return a;
}
function m_trimTrailingChars(a, b) {
  for (; a;) {
    var c = a.charAt(a.length - 1);
    if (0 <= b.indexOf(c)) {
      a = a.substr(0, a.length - 1);
    } else {
      break;
    }
  }
  return a;
}
function m_getTagName(a) {
  var b = a[0];
  return (a = core.isString(b) ? b : b === htmljson.NODE_TYPE.ELEMENT_NODE || b === htmljson.NODE_TYPE.ELEMENT_START_TAG ? a[1] : "") ? m_parseTagName(a)[0] : a;
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
  function b(z, v) {
    f[m_trimTrailingChar(z, " ")] = "0px" === v ? 0 : m_tryToFiniteNumber(m_trimTrailingChar(v, " "));
    ++h;
  }
  for (var c = 0, d = a.length, e = 0, f = {}, h = 0, k, p, x = "", u; e < d; ++e) {
    k = a.charAt(e);
    switch(c) {
      case 0:
        if (htmlparser.isWhitespace(k)) {
          break;
        }
        p = e;
        c = 1;
      case 1:
        ":" === k && (u = a.substring(p, e), c = 2);
        break;
      case 2:
        if (htmlparser.isWhitespace(k)) {
          break;
        }
        p = e;
        c = 3;
      case 3:
        '"' === k || "'" === k ? (x = k, c = 4) : ";" === k && (b(u, a.substring(p, e)), c = 0);
        break;
      case 4:
        x === k && (x = "", c = 3);
    }
    3 <= c && b(u, a.substring(p));
  }
  return h ? f : null;
}
function m_createVNodeFromHTMLJson(a, b) {
  var c, d;
  htmljson.Traverser.traverseAllDescendantNodes(a, function(e, f, h, k) {
    function p(v, E, I) {
      c ? (k < d.length && (d.length = k), v = d[d.length - 1].insertNodeLast(v, E, I), m_hasChildren(e) && (d[k] = v)) : (c = new VNode(b, 0, v, E, I), d = [c]);
    }
    if (m_isStringOrNumber(e)) {
      p(htmljson.NODE_TYPE.TEXT_NODE, e);
    } else {
      f = e[0];
      h = e[1];
      var x = 1, u = f, z;
      switch(f) {
        case htmljson.NODE_TYPE.DOCUMENT_NODE:
        case htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER:
        case htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER:
          p(f, h);
          break;
        case htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE:
          p(f);
          break;
        case htmljson.NODE_TYPE.TEXT_NODE:
        case htmljson.NODE_TYPE.CDATA_SECTION:
        case htmljson.NODE_TYPE.COMMENT_NODE:
        case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START:
        case htmljson.NODE_TYPE.ELEMENT_END_TAG:
          p(f, h);
          break;
        case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_END:
          p(f);
          break;
        case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION:
          x = [];
          u = 2;
          for (z = e.length; u < z; ++u) {
            x[u - 2] = e[u];
          }
          p(f, h, z - 2 ? x : null);
          break;
        case htmljson.NODE_TYPE.ELEMENT_NODE:
        case htmljson.NODE_TYPE.ELEMENT_START_TAG:
          u = h, x = 2;
        default:
          core.isString(u) && p(1 === x ? htmljson.NODE_TYPE.ELEMENT_NODE : f, u, e[x]);
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
  function f(g, r, m) {
    function l(n, y) {
      for (; 0 <= g.indexOf(n);) {
        g = g.split(n).join(y);
      }
    }
    m && (g = g.replace(/([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])\s([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])/g, "$1$2"));
    g = g.split("\t").join(" ").split("\f").join(" ");
    l("\n\n", "\n");
    l("  ", " ");
    if (r) {
      var t = " \n" === g.substr(0, 2) || "\n" === g.charAt(0), q = "\n " === g.substr(g.length - 2) || "\n" === g.charAt(g.length - 1);
    }
    g = m_trimLeadingChar(g, "\n");
    g = m_trimTrailingChar(g, "\n");
    g = g.split("\n").join(" ");
    l("  ", " ");
    t && (g = m_trimLeadingChar(g, " "));
    q && (g = m_trimTrailingChar(g, " "));
    g = g.split("\\u0020").join(" ").split("&#x20;").join(" ").split("&#32;").join(" ");
    return m_tryToFiniteNumber(g);
  }
  function h(g) {
    var r;
    htmljson.Traverser.traverseAllDescendantNodes(g, function(m, l, t, q) {
      m_getNodeType(m) === htmljson.NODE_TYPE.TEXT_NODE && (r = [m, l, t]);
    });
    return r;
  }
  function k(g, r) {
    function m(n) {
      return n.split("\n").join("").split("\t").join("").split("\f").join("").split(" ").join("");
    }
    var l;
    for (htmljson.Traverser.traverseAllDescendantNodes(g, function(n, y, w, H) {
      if (m_getNodeType(n) === htmljson.NODE_TYPE.TEXT_NODE) {
        n = "" + (m_isStringOrNumber(n) ? n : n[1]);
        if (m(n)) {
          return y.splice(w, 1, r ? m_trimLeadingChar(n, "\n") : m_trimLeadingChars(n, "\n\t\f ")), htmljson.Traverser.VISITOR_OPTION.BREAK;
        }
        y.splice(w, 1);
        return htmljson.Traverser.VISITOR_OPTION.REMOVED;
      }
    }); l = h(g);) {
      var t = l[0];
      var q = l[1];
      l = l[2];
      t = "" + (m_isStringOrNumber(t) ? t : t[1]);
      if (m(t)) {
        q.splice(l, 1, r ? m_trimTrailingChar(t, "\n") : m_trimTrailingChars(t, "\n\t\f "));
        break;
      } else {
        q.splice(l, 1);
      }
    }
  }
  function p(g) {
    for (var r; htmljson.Traverser.traverseAllDescendantNodes(g, function(m, l, t, q) {
      if (m_getNodeType(m) === htmljson.NODE_TYPE.TEXT_NODE) {
        q = (q = h(g)) ? l === q[1] && t === q[2] : !1;
        var n = "" + (m_isStringOrNumber(m) ? m : m[1]);
        n = n.split("\n");
        for (var y = 0, w = n.length; y < w - (q ? 0 : 1); ++y) {
          n[y] = m_trimTrailingChars(n[y], "\t\f ");
        }
        n = n.join("\n");
        if ("\n" === n && r) {
          return m = r[0], q = r[1], y = r[2], m_isStringOrNumber(m) ? q[y] += n : m[1] += n, l.splice(t, 1), htmljson.Traverser.VISITOR_OPTION.REMOVED;
        }
        m_isStringOrNumber(m) ? l[t] = n : m[1] = n;
        r = [m, l, t];
      }
    });) {
    }
  }
  function x(g, r) {
    for (var m = m_getChildNodeStartIndex(g), l = g.length, t, q, n, y, w; m < l; ++m) {
      t = g[m], m_getNodeType(t) === htmljson.NODE_TYPE.TEXT_NODE && (q = q || m, n = n || t, y = m, w = t);
    }
    q && (core.isArray(n) && (n = n[1]), core.isArray(w) && (w = w[1]), q !== y || r ? (core.isString(n) && !r && (n = m_normalizeNewlines(n), n = m_trimLeadingChar(n, "\n"), g[q] = m_tryToFiniteNumber(n)), core.isString(w) && (w = m_normalizeNewlines(w), w = m_trimTrailingChar(w, "\n"), g[y] = m_tryToFiniteNumber(w))) : core.isString(n) && (n = m_normalizeNewlines(n), n = m_trimChar(n, "\n"), g[q] = m_tryToFiniteNumber(n)));
  }
  c = e || {};
  var u = -1 !== ["normal", !0, "aggressive"].indexOf(c.trimWhitespaces), z = "aggressive" === c.trimWhitespaces, v = !!c.removeNewlineBetweenFullWidthChars, E = !1 !== c.keepCDATASections, I = !1 !== c.keepComments, J = !0 === c.keepEmptyConditionalComment, B = c.instructionAttrPrefix || htmljson.DEFINE.INSTRUCTION_ATTR_PREFIX, G, C;
  (htmljson.Traverser.traverseAllDescendantNodes(a, function(g, r, m, l) {
    l = g[0];
    var t = g[1], q = 1;
    switch(m_getNodeType(g)) {
      case htmljson.NODE_TYPE.DOCUMENT_NODE:
        u && (g[1] = htmlparser.DEFINE.USE_XHTML ? t.split("\n").join(" ").split("  ").join(" ").split("?> <!").join("?>\n<!") : t.split("\n").join(" ").split("  ").join(" "));
        break;
      case htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE:
        break;
      case htmljson.NODE_TYPE.TEXT_NODE:
        core.isArray(g) || (t = g);
        if (core.isString(t)) {
          if (C || (t = m_normalizeNewlines(t), u && (t = f(t, z, v))), "" !== t) {
            r[m] = t;
          } else {
            return r.splice(m, 1), htmljson.Traverser.VISITOR_OPTION.REMOVED;
          }
        }
        break;
      case htmljson.NODE_TYPE.CDATA_SECTION:
        if (!E) {
          return r.splice(m, 1), htmljson.Traverser.VISITOR_OPTION.REMOVED;
        }
        break;
      case htmljson.NODE_TYPE.COMMENT_NODE:
        if (!I) {
          return r.splice(m, 1), htmljson.Traverser.VISITOR_OPTION.REMOVED;
        }
        break;
      case htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER:
        break;
      case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START:
        break;
      case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_END:
        g = r[m - 1];
        if (!J && g && g[0] === htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START) {
          return r.splice(m - 1, 2), 2 * htmljson.Traverser.VISITOR_OPTION.REMOVED;
        }
        break;
      case htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER:
        break;
      case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION:
        if (b && (g = m_executeProcessingInstruction(b, g, d), void 0 !== g)) {
          if (null === g || "" === g) {
            return r.splice(m, 1), htmljson.Traverser.VISITOR_OPTION.REMOVED;
          }
          if (m_isStringOrNumber(g)) {
            r.splice(m, 1, g), G = !0;
          } else if (core.isArray(g)) {
            return m_replaceProcessingInstructionWithHTMLJson(r, m, g), htmljson.Traverser.VISITOR_OPTION.REMOVED;
          }
        }
        break;
      case htmljson.NODE_TYPE.ELEMENT_NODE:
      case htmljson.NODE_TYPE.ELEMENT_START_TAG:
        core.isNumber(l) && (l = t, q = 2);
        l = m_parseTagName(l)[0];
        r = g[q];
        if (m_isAttributes(r)) {
          m = q - 1;
          t = 0;
          var n, y = m_parseTagName(g[m]), w = y[1], H = y[2];
          y = y[0];
          for (A in r) {
            var F = A;
            var D = r[A];
            if (n = m_isInstructionAttr(B, A)) {
              var A = A.substr(B.length);
              "className" === A && (A = "class");
              if (b) {
                if (D = m_executeInstructionAttr(b, A, D, d), void 0 !== D) {
                  if (delete r[F], core.isArray(D)) {
                    core.isString(D[0]) ? (r[F] = D, ++t) : htmljson.DEFINE.DEBUG && d && d("Invalid dynamic attribute callback value! [" + F + "=" + D + "]");
                  } else if ((!htmlparser.BOOLEAN_ATTRIBUTES[A] || !1 !== D) && null !== D) {
                    if (core.isString(D)) {
                      if ("id" === A) {
                        w = D;
                        continue;
                      } else if ("class" === A) {
                        F = D.split(" ");
                        for (D = F.length; D;) {
                          n = F[--D], -1 === (" " + H + " ").indexOf(" " + n + " ") && (H = (H ? " " : "") + n);
                        }
                        continue;
                      }
                    }
                    r[A] = D;
                    ++t;
                  }
                } else {
                  ++t;
                }
              } else {
                ++t;
              }
            } else {
              ++t;
            }
          }
          g[m] = m_createTagName(y, w, H);
          0 === t && g.splice(q, 1);
        }
        m_SPECIAL_LAYOUT_ELEMENTS[l] && z ? k(g, !1) : m_FAMILY_OF_PRE_ELEMENT[l] ? (k(g, !0), z && p(g), C = g) : m_TRIM_NEWLINES_ELEMENTS[l] ? x(C = g) : !htmlparser.DEFINE.USE_TRADITIONAL_TAGS || "xmp" !== l && "plaintext" !== l || x(g, !0);
        break;
      default:
        htmljson.DEFINE.DEBUG && d && d("Not html.json! [" + g + "]");
    }
  }, function(g, r, m, l) {
    if (!J) {
      switch(m_getNodeType(g)) {
        case htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER:
        case htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER:
          if (2 === g.length) {
            return r.splice(m, 1), htmljson.Traverser.VISITOR_OPTION.REMOVED;
          }
      }
    }
    C === g && (C = null);
  }) || G) && normalizeTextNodes(a);
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
  htmljson.Traverser.traverseAllDescendantNodes(a, function(h, k, p, x) {
    if (c && d !== x) {
      return b(), htmljson.Traverser.VISITOR_OPTION.INSERTED_BEFORER;
    }
    if (m_getNodeType(h) === htmljson.NODE_TYPE.TEXT_NODE) {
      return c = m_isStringOrNumber(h) ? c + h : c + h[1], k.splice(p, 1), d = x, e = k, f = p, htmljson.Traverser.VISITOR_OPTION.REMOVED;
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
  const f = require("plugin-error"), h = require("through2"), k = e && e.prettify;
  return h.obj(function(p, x, u) {
    if (p.isNull()) {
      return u();
    }
    if (p.isStream()) {
      return this.emit("error", new f("json2json", "Streaming not supported")), u();
    }
    if (".json" === p.extname) {
      try {
        const z = JSON.parse(p.contents.toString(x));
        json2json.main(z, a, b, c, d, e);
        const v = JSON.stringify(z, null, k ? "    " : "");
        p.contents = Buffer.from(v);
      } catch (z) {
        this.emit("error", new f("json2json", z));
      }
    }
    u(null, p);
  });
};

