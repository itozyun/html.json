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
  function b(D, l) {
    for (var z = [], G = D.length, E = 0, h = -1, r; E < G; ++E) {
      r = D[E], core.isObject(r) ? z[++h] = E : l[E] = r;
    }
    return z;
  }
  function c(D, l) {
    var z = [], G = -1, E;
    for (E in D) {
      var h = D[E];
      core.isObject(h) ? z[++G] = E : l[E] = h;
    }
    return z;
  }
  var d = 0, e = core.isArray(a), f = e ? [] : {}, g = e ? b(a, f) : core.isObject(a) ? c(a, f) : null, k, n;
  if (null === g) {
    return a;
  }
  for (a = [g, k = a, n = f]; 0 <= d;) {
    var v = g.shift();
    if (null != v) {
      var w = k[v];
      e = core.isArray(w);
      v = n[v] = e ? [] : {};
      e = e ? b(w, v) : c(w, v);
      e.length && (d += 3, a.push(g = e, k = w, n = v));
    } else {
      a.length = d, d -= 3, g = a[d + 0], k = a[d + 1], n = a[d + 2];
    }
  }
  return f;
};
core.equal = function(a, b) {
  return a === b || core.isNaN(a) && core.isNaN(b);
};
core.deepEqual = function(a, b) {
  function c(v, w) {
    function D(t) {
      var x = [], m = -1, J;
      for (J in t) {
        x[++m] = J;
      }
      return x.sort();
    }
    var l = null, z = core.isArray(v), G = core.isArray(w), E = -1, h;
    if (z && G) {
      if (z = v.length, z === w.length) {
        for (l = [], h = 0; h < z; ++h) {
          var r = v[h];
          if (!core.equal(r, w[h])) {
            if (core.isObject(r)) {
              l[++E] = h;
            } else {
              l = !1;
              break;
            }
          }
        }
      } else {
        l = !1;
      }
    } else if (z || G) {
      l = !1;
    } else if (core.isObject(v) && core.isObject(w)) {
      G = D(v);
      var y = D(w);
      z = G.length;
      if (z === y.length) {
        for (l = [], h = 0; h < z; ++h) {
          var u = G[h];
          if (u !== y[h]) {
            l = !1;
            break;
          }
          r = v[u];
          if (!core.equal(r, w[u])) {
            if (core.isObject(r)) {
              l[++E] = u;
            } else {
              l = !1;
              break;
            }
          }
        }
      } else {
        l = !1;
      }
    }
    return l;
  }
  var d = 0, e = c(a, b), f = null === e ? core.equal(a, b) : !!e, g, k;
  if (e) {
    for (a = [e, g = a, k = b]; 0 <= d && f;) {
      if (e = e.pop(), null != e) {
        b = g[e];
        var n = k[e];
        (e = c(b, n)) ? e.length && (d += 3, a.push(e, g = b, k = n)) : f = !1;
      } else {
        a.length = d, d -= 3, e = a[d + 0], g = a[d + 1], k = a[d + 2];
      }
    }
  }
  return f;
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
      var k;
      g = d === f ? null : d === (k = d.constructor.prototype) ? f : k;
    }
    if (!g) {
      return core.hasProperty(d, e);
    }
    k = g[e];
    var n = d[e];
    core.isNaN(n) !== core.isNaN(k) ? e = !0 : core.isNaN(n) ? (k = g, f = c(k, e, f), k[e] = !0, d = core.isNaN(d[e]), f ? k[e] = NaN : delete k[e], e = d) : n !== k ? e = !0 : core.hasProperty(g, e) ? (f = c(g, e, f), g[e] = !k, d = n === d[e], f ? g[e] = k : delete g[e], e = d) : e = core.hasProperty(d, e);
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
  var d = a, e = m_getChildNodeStartIndex(d), f = 0, g = b(a, null, -1, f / 3), k = [-1, a, e], n = !1;
  if (g === VISITOR_OPTION.BREAK || g === VISITOR_OPTION.SKIP) {
    return !1;
  }
  if (0 < d.length - e) {
    do {
      var v = ++k[f];
      var w = d[v + e];
      if (null != w) {
        g = b(w, d, v + e, f / 3 + 1);
        if (g === VISITOR_OPTION.BREAK) {
          return n;
        }
        if (g !== VISITOR_OPTION.SKIP) {
          if (g <= VISITOR_OPTION.REMOVED) {
            k[f] += g, n = !0;
          } else {
            if (VISITOR_OPTION.INSERTED_BEFORER <= g && (k[f] += g, n = !0), m_hasChildren(w)) {
              f += 3, k[f + 0] = -1, k[f + 1] = d = w, k[f + 2] = e = m_getChildNodeStartIndex(w);
            } else if (c && d) {
              g = c(w, d, v + e, f / 3 + 1);
              if (g === VISITOR_OPTION.BREAK) {
                return n;
              }
              g !== VISITOR_OPTION.SKIP && (g <= VISITOR_OPTION.REMOVED || VISITOR_OPTION.INSERTED_BEFORER <= g) && (k[f] += g, n = !0);
            }
          }
        }
      } else {
        if (k.length = f, f -= 3, d = k[f + 1], e = k[f + 2], c && d) {
          v = k[f] + e;
          g = c(d[v], d, v, f / 3 + 1);
          if (g === VISITOR_OPTION.BREAK) {
            return n;
          }
          g !== VISITOR_OPTION.SKIP && (g <= VISITOR_OPTION.REMOVED || VISITOR_OPTION.INSERTED_BEFORER <= g) && (k[f] += g, n = !0);
        }
      }
    } while (0 <= f);
  }
  c && c(a, null, -1, 0);
  return n;
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
        var k = b(g);
        if (k === htmljson.Traverser.VISITOR_OPTION.BREAK) {
          break;
        }
        if (k !== htmljson.Traverser.VISITOR_OPTION.SKIP) {
          if (g.getChildNodeCount()) {
            d += 2, f[d + 0] = -1, f[d + 1] = a = g;
          } else if (c) {
            k = c(g);
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
    l = a.indexOf("<", l + 1);
    if (-1 === l && (l = a.length, g() && htmlparser.DEFINE.USE_PAUSE)) {
      return !0;
    }
  }
  function g() {
    if (l) {
      var y = a.substr(0, l);
      a = a.substr(l);
      l = 0;
      if ((e || z && !htmlparser.NON_TEXT_CHILD_ELEMENTS[z]) && !0 === b.onParseText(E && !htmlparser.ESCAPABLE_RAW_TEXT_ELEMENTS[z] ? y : htmlparser.unescapeHTML(y)) && htmlparser.DEFINE.USE_PAUSE) {
        return k(), !0;
      }
    }
  }
  function k() {
    b.onParseProgress && b.onParseProgress(1 - a.length / d, $jscomp$scope$m1534190617$0$exec, [a, b, c, d, e]);
  }
  function n(y) {
    b.onParseError && b.onParseError(y);
  }
  function v(y) {
    for (var u = 0, t = a.length, x = 3, m, J; x < t && 2 !== u; ++x) {
      switch(m = a.charAt(x), u) {
        case 0:
          if (htmlparser.isWhitespace(m)) {
            u = 1;
            J = x;
            break;
          }
        case 1:
          ">" === m && (u = 2, J = x);
      }
    }
    if (2 === u) {
      u = a.substring(2, J), a = a.substr(x), htmlparser.DEFINE.USE_XHTML && htmlparser.isNamespacedTag(u) || (u = u.toLowerCase()), htmlparser.VOID_ELEMENTS[u] || w(y, u, !1);
    } else {
      return n(a), !0;
    }
  }
  function w(y, u, t) {
    var x = 0, m = y.length;
    if (u) {
      for (x = m; 0 <= x && y[--x] !== u;) {
      }
    }
    if (0 <= x) {
      for (; x < m;) {
        b.onParseEndTag(y[--m], t && !htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN[y[m]], !1);
      }
      y.length = x;
    } else {
      b.onParseEndTag(u, !1, !0);
    }
    z = c[c.length - 1] || "";
  }
  function D(y) {
    function u(L) {
      K = a.substring(1, L);
      htmlparser.DEFINE.USE_XHTML && htmlparser.isNamespacedTag(K) || (K = K.toLowerCase());
    }
    function t(L) {
      var N = a.substring(B, A);
      htmlparser.DEFINE.USE_XHTML && htmlparser.isNamespacedTag(K) || (N = N.toLowerCase());
      H = H || {};
      H[N] = null != L ? htmlparser.unescapeAttrValue(a.substring(C, L)) : !0;
    }
    function x() {
      (F = "/>" === a.substr(p, 2)) && ++p;
      return F;
    }
    for (var m = 1, J = a.length, p = 2, H = null, F = !1, q, B, A, C, K, I, M; p < J && 9 > m; ++p) {
      switch(q = a.charAt(p), m) {
        case 1:
          htmlparser.isWhitespace(q) ? (m = 2, u(p)) : ">" === q ? (m = 9, u(p)) : x() && (m = 9, u(p - 1));
          break;
        case 2:
          ">" === q || x() ? m = 9 : htmlparser.isWhitespace(q) || (m = 3, B = p);
          break;
        case 3:
          "=" === q ? (m = 5, A = p) : htmlparser.isWhitespace(q) ? (m = 4, A = p) : ">" === q ? (m = 9, A = p, t()) : x() && (m = 9, A = p - 1, t());
          break;
        case 4:
          "=" === q ? m = 5 : ">" === q || x() ? (m = 9, t()) : htmlparser.isWhitespace(q) || (m = 3, t(), B = p);
          break;
        case 5:
          '"' === q || "'" === q ? (m = 6, I = q, M = !1, C = p + 1) : htmlparser.isWhitespace(q) || (m = 7, C = p);
          break;
        case 6:
          M || q !== I || (m = 2, t(p));
          M = "\\" === q && !M;
          break;
        case 7:
          htmlparser.isWhitespace(q) ? (m = 2, t(p)) : ">" === q && (m = 9, t(p));
      }
    }
    if (9 === m) {
      if (!htmlparser.DEFINE.USE_XHTML || !htmlparser.isNamespacedTag(K)) {
        for (; z;) {
          if (htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN[z] && !htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN[z][K]) {
            w(y, z, !1);
          } else {
            break;
          }
        }
      }
      (F = F || !!htmlparser.VOID_ELEMENTS[K]) || (z = c[c.length] = K);
      a = a.substr(p);
      if (!0 === b.onParseStartTag(K, H, F, p) && htmlparser.DEFINE.USE_PAUSE) {
        return k(), !0;
      }
    } else {
      return n(a), !0;
    }
  }
  var l = -1, z = "", G;
  htmlparser.DEFINE.USE_PAUSE && (z = c[c.length - 1] || "");
  if (!f() || !htmlparser.DEFINE.USE_PAUSE) {
    for (; a;) {
      var E = htmlparser.RAW_TEXT_ELEMENTS[z];
      if (htmlparser.DEFINE.USE_XHTML && e && a.length === d && a.indexOf("<?xml ") === l) {
        a = a.substr(l);
        l = 0;
        var h = a.indexOf("?>");
        if (-1 !== h) {
          var r = a.substring(2, h);
          a = a.substr(h + 2);
          e = !1;
          if (!0 === b.onParseProcessingInstruction(r) && htmlparser.DEFINE.USE_PAUSE) {
            k();
            return;
          }
        } else {
          n(a);
          return;
        }
      } else if (htmlparser.DEFINE.USE_PROCESSING_INSTRUCTION && a.indexOf("<?") === l) {
        if (g() && htmlparser.DEFINE.USE_PAUSE) {
          return;
        }
        h = a.indexOf("?>");
        if (-1 !== h) {
          if (r = a.substring(2 + l, h), a = a.substr(h + 2), !0 === b.onParseProcessingInstruction(r) && htmlparser.DEFINE.USE_PAUSE) {
            k();
            return;
          }
        } else {
          n(a);
          return;
        }
      } else if (a.indexOf("</", l) === l && htmlparser.isAlphabet(a.charAt(l + 2))) {
        if (E && (htmlparser.DEFINE.USE_TRADITIONAL_TAGS && "plaintext" === z ? G = !0 : a.indexOf(z, l) !== l + 2 && a.indexOf(z.toUpperCase(), l) !== l + 2 && (G = !0)), G) {
          if (f() && htmlparser.DEFINE.USE_PAUSE) {
            return;
          }
          G = !1;
        } else {
          if (g() && htmlparser.DEFINE.USE_PAUSE || v(c)) {
            return;
          }
        }
      } else if (E) {
        if (f() && htmlparser.DEFINE.USE_PAUSE) {
          return;
        }
      } else if ("<" === a.charAt(l) && htmlparser.isAlphabet(a.charAt(l + 1))) {
        if (g() && htmlparser.DEFINE.USE_PAUSE || D(c)) {
          return;
        }
      } else if (a.indexOf("\x3c!--") === l) {
        if (g() && htmlparser.DEFINE.USE_PAUSE) {
          return;
        }
        h = a.indexOf("--\x3e");
        if (-1 !== h) {
          if (r = a.substring(4, h), a = a.substr(h + 3), !0 === b.onParseComment(htmlparser.unescapeHTML(r)) && htmlparser.DEFINE.USE_PAUSE) {
            k();
            return;
          }
        } else {
          n(a);
          return;
        }
      } else if (htmlparser.DEFINE.USE_CDATA_SECTION && a.indexOf("<![CDATA[") === l) {
        if (g() && htmlparser.DEFINE.USE_PAUSE) {
          return;
        }
        h = a.indexOf("]]\x3e");
        if (-1 !== h) {
          if (r = a.substring(9, h), a = a.substr(h + 3), !0 === b.onParseCDATASection(r) && htmlparser.DEFINE.USE_PAUSE) {
            k();
            return;
          }
        } else {
          n(a);
          return;
        }
      } else if (htmlparser.DEFINE.USE_DOCUMENT_TYPE_NODE && (a.indexOf("<!DOCTYPE ") === l || a.indexOf("<!doctype ") === l)) {
        if (a = a.substr(l), l = 0, h = a.indexOf(">"), -1 !== h) {
          if (r = a.substring(0, h + 1), a = a.substr(h + 1), e = !1, !0 === b.onParseDocType(r) && htmlparser.DEFINE.USE_PAUSE) {
            k();
            return;
          }
        } else {
          n(a);
          return;
        }
      } else {
        if (f() && htmlparser.DEFINE.USE_PAUSE) {
          return;
        }
      }
    }
    w(c, "", !0);
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
h5:!0, h6:!0, address:!0, blockquote:!0, div:!0, dl:!0, fieldset:!0, form:!0, hr:!0, legend:!0, ul:!0, noscript:!0, ol:!0, p:!0, pre:!0, article:!0, aside:!0, canvas:!0, details:!0, figcaption:!0, figure:!0, footer:!0, header:!0, hgroup:!0, main:!0, nav:!0, section:!0, table:!htmljson.DEFINE.ENABLE_LEGACY_BROWSERS_SUPPORT}, m_TRIM_NEWLINES_ELEMENTS = {script:!0, style:!0, textarea:!0}, m_FAMILY_OF_PRE_ELEMENT = htmlparser.DEFINE.USE_TRADITIONAL_TAGS ? {pre:!0, listing:!0} : {pre:!0};
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
  function b(D, l) {
    f[m_trimLastChar(D, " ")] = "0px" === l ? 0 : m_tryToFiniteNumber(m_trimLastChar(l, " "));
    ++g;
  }
  for (var c = 0, d = a.length, e = 0, f = {}, g = 0, k, n, v = "", w; e < d; ++e) {
    k = a.charAt(e);
    switch(c) {
      case 0:
        if (htmlparser.isWhitespace(k)) {
          break;
        }
        n = e;
        c = 1;
      case 1:
        ":" === k && (w = a.substring(n, e), c = 2);
        break;
      case 2:
        if (htmlparser.isWhitespace(k)) {
          break;
        }
        n = e;
        c = 3;
      case 3:
        '"' === k || "'" === k ? (v = k, c = 4) : ";" === k && (b(w, a.substring(n, e)), c = 0);
        break;
      case 4:
        v === k && (v = "", c = 3);
    }
    3 <= c && b(w, a.substring(n));
  }
  return g ? f : null;
}
function m_createVNodeFromHTMLJson(a, b) {
  var c, d;
  htmljson.Traverser.traverseAllDescendantNodes(a, function(e, f, g, k) {
    function n(l, z, G) {
      c ? (k < d.length && (d.length = k), l = d[d.length - 1].insertNodeLast(l, z, G), m_hasChildren(e) && (d[k] = l)) : (c = new VNode(b, 0, l, z, G), d = [c]);
    }
    if (m_isStringOrNumber(e)) {
      n(htmljson.NODE_TYPE.TEXT_NODE, e);
    } else {
      f = e[0];
      g = e[1];
      var v = 1, w = f, D;
      switch(f) {
        case htmljson.NODE_TYPE.DOCUMENT_NODE:
        case htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER:
        case htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER:
          n(f, g);
          break;
        case htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE:
          n(f);
          break;
        case htmljson.NODE_TYPE.TEXT_NODE:
        case htmljson.NODE_TYPE.CDATA_SECTION:
        case htmljson.NODE_TYPE.COMMENT_NODE:
        case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START:
        case htmljson.NODE_TYPE.ELEMENT_END_TAG:
          n(f, g);
          break;
        case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_END:
          n(f);
          break;
        case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION:
          v = [];
          w = 2;
          for (D = e.length; w < D; ++w) {
            v[w - 2] = e[w];
          }
          n(f, g, D - 2 ? v : null);
          break;
        case htmljson.NODE_TYPE.ELEMENT_NODE:
        case htmljson.NODE_TYPE.ELEMENT_START_TAG:
          w = g, v = 2;
        default:
          core.isString(w) && n(1 === v ? htmljson.NODE_TYPE.ELEMENT_NODE : f, w, e[v]);
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
  function f(h, r, y) {
    function u(x, m) {
      for (; 0 <= h.indexOf(x);) {
        h = h.split(x).join(m);
      }
    }
    y && (h = h.replace(/([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])\s([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])/g, "$1$2"));
    h = h.split("\t").join(" ");
    u("\n\n", "\n");
    u("  ", " ");
    if (r && ("\n " === h.substr(h.length - 2) && (h = m_trimLastChar(h, " ")), "\n" === h.charAt(h.length - 1))) {
      var t = "\n" === h.charAt(0);
    }
    h = m_trimLastChar(h, "\n");
    h = h.split("\n").join(" ");
    u("  ", " ");
    t && (h = m_trimChar(h, " "));
    h = h.split("\\u0020").join(" ").split("&#x20;").join(" ").split("&#32;").join(" ");
    return m_tryToFiniteNumber(h);
  }
  function g(h, r) {
    function y(p) {
      return p.split("\n").join("").split(" ").join("").split("\t").join("");
    }
    function u(p) {
      var H;
      htmljson.Traverser.traverseAllDescendantNodes(p, function(F, q, B, A) {
        m_getNodeType(F) === htmljson.NODE_TYPE.TEXT_NODE && (H = [F, q, B]);
      });
      return H;
    }
    var t, x;
    for (htmljson.Traverser.traverseAllDescendantNodes(h, function(p, H, F, q) {
      if (m_getNodeType(p) === htmljson.NODE_TYPE.TEXT_NODE) {
        p = "" + (m_isStringOrNumber(p) ? p : p[1]);
        if (y(p)) {
          return H.splice(F, 1, m_trimFirstChar(p, "\n")), htmljson.Traverser.VISITOR_OPTION.BREAK;
        }
        H.splice(F, 1);
        return htmljson.Traverser.VISITOR_OPTION.REMOVED;
      }
    }); t = u(h);) {
      var m = t[0];
      var J = t[1];
      t = t[2];
      m = "" + (m_isStringOrNumber(m) ? m : m[1]);
      if (y(m)) {
        J.splice(t, 1, m_trimLastChar(m, "\n"));
        break;
      } else {
        J.splice(t, 1);
      }
    }
    if (r) {
      for (; htmljson.Traverser.traverseAllDescendantNodes(h, function(p, H, F, q) {
        if (m_getNodeType(p) === htmljson.NODE_TYPE.TEXT_NODE) {
          var B = (q = u(h)) ? H === q[1] && F === q[2] : !1;
          q = "" + (m_isStringOrNumber(p) ? p : p[1]);
          for (var A = q.split("\n"), C = 0, K = A.length, I; C < K - (B ? 0 : 1); ++C) {
            for (q = A[C];;) {
              if (I = q.charAt(q.length - 1), "\t" === I || " " === I) {
                q = q.substr(0, q.length - 1);
              } else {
                break;
              }
            }
            A[C] = q;
          }
          q = A.join("\n");
          if ("\n" === q && x) {
            return p = x[0], B = x[1], A = x[2], m_isStringOrNumber(p) ? B[A] += q : p[1] += q, H.splice(F, 1), htmljson.Traverser.VISITOR_OPTION.REMOVED;
          }
          m_isStringOrNumber(p) ? H[F] = q : p[1] = q;
          x = [p, H, F];
        }
      });) {
      }
    }
  }
  c = e || {};
  var k = -1 !== ["normal", !0, "aggressive"].indexOf(c.trimWhitespaces), n = "aggressive" === c.trimWhitespaces, v = !!c.removeNewlineBetweenFullWidthChars, w = !1 !== c.keepCDATASections, D = !1 !== c.keepComments, l = !0 === c.keepEmptyConditionalComment, z = c.instructionAttrPrefix || htmljson.DEFINE.INSTRUCTION_ATTR_PREFIX, G, E;
  (htmljson.Traverser.traverseAllDescendantNodes(a, function(h, r, y, u) {
    u = h[0];
    var t = h[1], x = 1;
    switch(m_getNodeType(h)) {
      case htmljson.NODE_TYPE.DOCUMENT_NODE:
        k && (h[1] = htmlparser.DEFINE.USE_XHTML ? t.split("\n").join(" ").split("  ").join(" ").split("?> <!").join("?>\n<!") : t.split("\n").join(" ").split("  ").join(" "));
        break;
      case htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE:
        break;
      case htmljson.NODE_TYPE.TEXT_NODE:
        core.isArray(h) || (t = h);
        if (core.isString(t)) {
          if (E || (t = m_normalizeNewlines(t), k && (t = f(t, n, v))), "" !== t) {
            r[y] = t;
          } else {
            return r.splice(y, 1), htmljson.Traverser.VISITOR_OPTION.REMOVED;
          }
        }
        break;
      case htmljson.NODE_TYPE.CDATA_SECTION:
        if (!w) {
          return r.splice(y, 1), htmljson.Traverser.VISITOR_OPTION.REMOVED;
        }
        break;
      case htmljson.NODE_TYPE.COMMENT_NODE:
        if (!D) {
          return r.splice(y, 1), htmljson.Traverser.VISITOR_OPTION.REMOVED;
        }
        break;
      case htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER:
        break;
      case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START:
        break;
      case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_END:
        var m = r[y - 1];
        if (!l && m && m[0] === htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START) {
          return r.splice(y - 1, 2), 2 * htmljson.Traverser.VISITOR_OPTION.REMOVED;
        }
        break;
      case htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER:
        break;
      case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION:
        if (b && (m = m_executeProcessingInstruction(b, h, d), void 0 !== m)) {
          if (null === m || "" === m) {
            return r.splice(y, 1), htmljson.Traverser.VISITOR_OPTION.REMOVED;
          }
          if (m_isStringOrNumber(m)) {
            r.splice(y, 1, m), G = !0;
          } else if (core.isArray(m)) {
            return m_replaceProcessingInstructionWithHTMLJson(r, y, m), htmljson.Traverser.VISITOR_OPTION.REMOVED;
          }
        }
        break;
      case htmljson.NODE_TYPE.ELEMENT_NODE:
      case htmljson.NODE_TYPE.ELEMENT_START_TAG:
        core.isNumber(u) && (u = t, x = 2);
        u = m_parseTagName(u)[0];
        r = h[x];
        if (m_isAttributes(r)) {
          y = x - 1;
          t = 0;
          var J, p = m_parseTagName(h[y]), H = p[1], F = p[2];
          p = p[0];
          for (A in r) {
            var q = A;
            var B = r[A];
            if (J = m_isInstructionAttr(z, A)) {
              var A = A.substr(z.length);
              "className" === A && (A = "class");
              if (b) {
                if (B = m_executeInstructionAttr(b, A, B, d), void 0 !== B) {
                  if (delete r[q], core.isArray(B)) {
                    core.isString(B[0]) ? (r[q] = B, ++t) : htmljson.DEFINE.DEBUG && d && d("Invalid dynamic attribute callback value! [" + q + "=" + B + "]");
                  } else if ((!htmlparser.BOOLEAN_ATTRIBUTES[A] || !1 !== B) && null !== B) {
                    if (core.isString(B)) {
                      if ("id" === A) {
                        H = B;
                        continue;
                      } else if ("class" === A) {
                        q = B.split(" ");
                        for (B = q.length; B;) {
                          J = q[--B], -1 === (" " + F + " ").indexOf(" " + J + " ") && (F = (F ? " " : "") + J);
                        }
                        continue;
                      }
                    }
                    r[A] = B;
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
          h[y] = m_createTagName(p, H, F);
          0 === t && h.splice(x, 1);
        }
        if (m_FAMILY_OF_PRE_ELEMENT[u]) {
          g(h, n), E = h;
        } else if (m_TRIM_NEWLINES_ELEMENTS[u]) {
          h = E = h;
          A = m_getChildNodeStartIndex(h);
          u = h.length;
          for (var C, K, I; A < u; ++A) {
            x = h[A], m_getNodeType(x) === htmljson.NODE_TYPE.TEXT_NODE && (m = m || A, C = C || x, K = A, I = x);
          }
          m && (core.isArray(C) && (C = C[1]), core.isArray(I) && (I = I[1]), m === K ? core.isString(C) && (C = m_normalizeNewlines(C), C = m_trimChar(C, "\n"), h[m] = m_tryToFiniteNumber(C)) : (core.isString(C) && (C = m_normalizeNewlines(C), C = m_trimFirstChar(C, "\n"), h[m] = m_tryToFiniteNumber(C)), core.isString(I) && (I = m_normalizeNewlines(I), I = m_trimLastChar(I, "\n"), h[K] = m_tryToFiniteNumber(I))));
        }
        break;
      default:
        htmljson.DEFINE.DEBUG && d && d("Not html.json! [" + h + "]");
    }
  }, function(h, r, y, u) {
    if (!l) {
      switch(m_getNodeType(h)) {
        case htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER:
        case htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER:
          if (2 === h.length) {
            return r.splice(y, 1), htmljson.Traverser.VISITOR_OPTION.REMOVED;
          }
      }
    }
    E === h && (E = null);
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
  htmljson.Traverser.traverseAllDescendantNodes(a, function(g, k, n, v) {
    if (c && d !== v) {
      return b(), htmljson.Traverser.VISITOR_OPTION.INSERTED_BEFORER;
    }
    if (m_getNodeType(g) === htmljson.NODE_TYPE.TEXT_NODE) {
      return c = m_isStringOrNumber(g) ? c + g : c + g[1], k.splice(n, 1), d = v, e = k, f = n, htmljson.Traverser.VISITOR_OPTION.REMOVED;
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
  const f = require("plugin-error"), g = require("through2"), k = e && e.prettify;
  return g.obj(function(n, v, w) {
    if (n.isNull()) {
      return w();
    }
    if (n.isStream()) {
      return this.emit("error", new f("json2json", "Streaming not supported")), w();
    }
    if (".json" === n.extname) {
      try {
        const D = JSON.parse(n.contents.toString(v));
        json2json.main(D, a, b, c, d, e);
        const l = JSON.stringify(D, null, k ? "    " : "");
        n.contents = Buffer.from(l);
      } catch (D) {
        this.emit("error", new f("json2json", D));
      }
    }
    w(null, n);
  });
};

