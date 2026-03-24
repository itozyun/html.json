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
function _copyPrimitivesAndListUncopiedIndexes(a, b) {
  for (var c = [], d = a.length, e = 0, f = -1, g; e < d; ++e) {
    g = a[e], core.isObject(g) ? c[++f] = e : b[e] = g;
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
  var b = 0, c = core.isArray(a), d = c ? [] : {}, e = c ? _copyPrimitivesAndListUncopiedIndexes(a, d) : core.isObject(a) ? _copyPrimitivesAndListUncopiedKeys(a, d) : null, f, g;
  if (null === e) {
    return a;
  }
  for (a = [e, f = a, g = d]; 0 <= b;) {
    var h = e.shift();
    if (null != h) {
      var l = f[h];
      c = core.isArray(l);
      h = g[h] = c ? [] : {};
      c = c ? _copyPrimitivesAndListUncopiedIndexes(l, h) : _copyPrimitivesAndListUncopiedKeys(l, h);
      c.length && (b += 3, a.push(e = c, f = l, g = h));
    } else {
      a.length = b, b -= 3, e = a[b + 0], f = a[b + 1], g = a[b + 2];
    }
  }
  return d;
};
core.deepCopySafe = function(a) {
  var b = 0, c = core.isArray(a), d = c ? [] : {}, e = c ? _copyPrimitivesAndListUncopiedIndexes(a, d) : core.isObject(a) ? _copyPrimitivesAndListUncopiedKeys(a, d) : null, f = [a], g = [d], h = 1, l, w;
  if (null === e) {
    return a;
  }
  for (a = [e, l = a, w = d]; 0 <= b;) {
    var r = e.shift();
    if (null != r) {
      var y = l[r];
      a: {
        for (c = h; c;) {
          if (f[--c] === y) {
            c = g[c];
            break a;
          }
        }
        c = void 0;
      }
      c ? w[r] = c : (c = core.isArray(y), r = w[r] = c ? [] : {}, c = c ? _copyPrimitivesAndListUncopiedIndexes(y, r) : _copyPrimitivesAndListUncopiedKeys(y, r), f[h] = y, g[h] = r, h++, c.length && (b += 3, a.push(e = c, l = y, w = r)));
    } else {
      a.length = b, b -= 3, e = a[b + 0], l = a[b + 1], w = a[b + 2];
    }
  }
  return d;
};
core.equal = function(a, b) {
  return a === b || core.isNaN(a) && core.isNaN(b);
};
function _getUntestedValueIndexesOrKeys(a, b) {
  function c(y) {
    var q = [], C = -1, F;
    for (F in y) {
      q[++C] = F;
    }
    return q.sort();
  }
  var d = null, e = core.isArray(a), f = core.isArray(b), g = -1, h;
  if (e && f) {
    if (e = a.length, e === b.length) {
      for (d = [], h = 0; h < e; ++h) {
        var l = a[h];
        if (!core.equal(l, b[h])) {
          if (core.isObject(l)) {
            d[++g] = h;
          } else {
            d = !1;
            break;
          }
        }
      }
    } else {
      d = !1;
    }
  } else if (e || f) {
    d = !1;
  } else if (core.isObject(a) && core.isObject(b)) {
    f = c(a);
    var w = c(b);
    e = f.length;
    if (e === w.length) {
      for (d = [], h = 0; h < e; ++h) {
        var r = f[h];
        if (r !== w[h]) {
          d = !1;
          break;
        }
        l = a[r];
        if (!core.equal(l, b[r])) {
          if (core.isObject(l)) {
            d[++g] = r;
          } else {
            d = !1;
            break;
          }
        }
      }
    } else {
      d = !1;
    }
  }
  return d;
}
core.deepEqual = function(a, b) {
  var c = 0, d = _getUntestedValueIndexesOrKeys(a, b), e = null === d ? core.equal(a, b) : !!d, f, g, h;
  if (d) {
    for (a = [d, f = a, g = b]; 0 <= c && e;) {
      var l = d.pop();
      null != l ? (b = f[l], l = g[l], (h = _getUntestedValueIndexesOrKeys(b, l)) ? h.length && (c += 3, a.push(d = h, f = b, g = l)) : e = !1) : (a.length = c, c -= 3, d = a[c + 0], f = a[c + 1], g = a[c + 2]);
    }
  }
  return e;
};
core.deepEqualSafe = function(a, b) {
  var c = 0, d = _getUntestedValueIndexesOrKeys(a, b), e = null === d ? core.equal(a, b) : !!d, f = [a], g = [b], h = 1, l, w, r;
  if (d) {
    for (a = [d, l = a, w = b]; 0 <= c && e;) {
      var y = d.pop();
      if (null != y) {
        if (b = l[y], y = w[y], r = _getUntestedValueIndexesOrKeys(b, y)) {
          if (r.length) {
            var q;
            a: {
              for (q = h; q;) {
                if (f[--q] === b) {
                  q = g[q] === y;
                  break a;
                }
              }
              q = !1;
            }
            q || (f[h] = b, g[h] = y, h++, c += 3, a.push(d = r, l = b, w = y));
          }
        } else {
          e = !1;
        }
      } else {
        a.length = c, c -= 3, d = a[c + 0], l = a[c + 1], w = a[c + 2];
      }
    }
  }
  return e;
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
    var l = d[e];
    core.isNaN(l) !== core.isNaN(h) ? e = !0 : core.isNaN(l) ? (h = g, f = c(h, e, f), h[e] = !0, d = core.isNaN(d[e]), f ? h[e] = NaN : delete h[e], e = d) : l !== h ? e = !0 : core.hasProperty(g, e) ? (f = c(g, e, f), g[e] = !h, d = l === d[e], f ? g[e] = h : delete g[e], e = d) : e = core.hasProperty(d, e);
    return e;
  }
  return c(a, b, Object.prototype);
};
core.toNumber = function(a) {
  return core.isBoolean(a) || null == a || core.isString(a) && "" + +a !== a ? NaN : +a;
};
core.toFiniteNumber = function(a) {
  a = core.toNumber(a);
  return core.isFiniteNumber(a) ? a : NaN;
};
core.all = {};
htmljson.Traverser = {};
htmljson.Traverser.EnterHandler = {};
htmljson.Traverser.LeaveHandler = {};
var VISITOR_OPTION = {REMOVED:-1, NONE:0, INSERTED_BEFORER:1, BREAK:Infinity, SKIP:-Infinity};
htmljson.Traverser.VISITOR_OPTION = VISITOR_OPTION;
htmljson.Traverser.traverseAllDescendantNodes = function(a, b, c) {
  var d = a, e = m_getChildNodeStartIndex(d), f = 0, g = b(a, null, -1, f / 3), h = [-1, a, e], l = !1;
  if (g === VISITOR_OPTION.BREAK || g === VISITOR_OPTION.SKIP) {
    return !1;
  }
  if (0 < d.length - e) {
    do {
      var w = ++h[f];
      var r = d[w + e];
      if (null != r) {
        g = b(r, d, w + e, f / 3 + 1);
        if (g === VISITOR_OPTION.BREAK) {
          return l;
        }
        if (g !== VISITOR_OPTION.SKIP) {
          if (g <= VISITOR_OPTION.REMOVED) {
            h[f] += g, l = !0;
          } else {
            if (VISITOR_OPTION.INSERTED_BEFORER <= g && (h[f] += g, l = !0), m_hasChildren(r)) {
              f += 3, h[f + 0] = -1, h[f + 1] = d = r, h[f + 2] = e = m_getChildNodeStartIndex(r);
            } else if (c && d) {
              g = c(r, d, w + e, f / 3 + 1);
              if (g === VISITOR_OPTION.BREAK) {
                return l;
              }
              g !== VISITOR_OPTION.SKIP && (g <= VISITOR_OPTION.REMOVED || VISITOR_OPTION.INSERTED_BEFORER <= g) && (h[f] += g, l = !0);
            }
          }
        }
      } else {
        if (h.length = f, f -= 3, d = h[f + 1], e = h[f + 2], c && d) {
          w = h[f] + e;
          g = c(d[w], d, w, f / 3 + 1);
          if (g === VISITOR_OPTION.BREAK) {
            return l;
          }
          g !== VISITOR_OPTION.SKIP && (g <= VISITOR_OPTION.REMOVED || VISITOR_OPTION.INSERTED_BEFORER <= g) && (h[f] += g, l = !0);
        }
      }
    } while (0 <= f);
  }
  c && c(a, null, -1, 0);
  return l;
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
    q = a.indexOf("<", q + 1);
    if (-1 === q && (q = a.length, g() && htmlparser.DEFINE.USE_PAUSE)) {
      return !0;
    }
  }
  function g() {
    if (q) {
      var D = a.substr(0, q);
      a = a.substr(q);
      q = 0;
      if ((e || C && !htmlparser.NON_TEXT_CHILD_ELEMENTS[C]) && !0 === b.onParseText(J && !htmlparser.ESCAPABLE_RAW_TEXT_ELEMENTS[C] ? D : htmlparser.unescapeHTML(D)) && htmlparser.DEFINE.USE_PAUSE) {
        return h(), !0;
      }
    }
  }
  function h() {
    b.onParseProgress && b.onParseProgress(1 - a.length / d, $jscomp$scope$m1534190617$0$exec, [a, b, c, d, e]);
  }
  function l(D) {
    b.onParseError && b.onParseError(D);
  }
  function w(D) {
    for (var k = 0, u = a.length, n = 3, m, v; n < u && 2 !== k; ++n) {
      switch(m = a.charAt(n), k) {
        case 0:
          if (htmlparser.isWhitespace(m)) {
            k = 1;
            v = n;
            break;
          }
        case 1:
          ">" === m && (k = 2, v = n);
      }
    }
    if (2 === k) {
      k = a.substring(2, v), a = a.substr(n), htmlparser.DEFINE.USE_XHTML && htmlparser.isNamespacedTag(k) || (k = k.toLowerCase()), htmlparser.VOID_ELEMENTS[k] || r(D, k, !1);
    } else {
      return l(a), !0;
    }
  }
  function r(D, k, u) {
    var n = 0, m = D.length;
    if (k) {
      for (n = m; 0 <= n && D[--n] !== k;) {
      }
    }
    if (0 <= n) {
      for (; n < m;) {
        b.onParseEndTag(D[--m], u && !htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN[D[m]], !1);
      }
      D.length = n;
    } else {
      b.onParseEndTag(k, !1, !0);
    }
    C = c[c.length - 1] || "";
  }
  function y(D) {
    function k(K) {
      A = a.substring(1, K);
      htmlparser.DEFINE.USE_XHTML && htmlparser.isNamespacedTag(A) || (A = A.toLowerCase());
    }
    function u(K) {
      var M = a.substring(I, G);
      htmlparser.DEFINE.USE_XHTML && htmlparser.isNamespacedTag(A) || (M = M.toLowerCase());
      p = p || {};
      p[M] = null != K ? htmlparser.unescapeAttrValue(a.substring(E, K)) : !0;
    }
    function n() {
      (z = "/>" === a.substr(t, 2)) && ++t;
      return z;
    }
    for (var m = 1, v = a.length, t = 2, p = null, z = !1, x, I, G, E, A, N, L; t < v && 9 > m; ++t) {
      switch(x = a.charAt(t), m) {
        case 1:
          htmlparser.isWhitespace(x) ? (m = 2, k(t)) : ">" === x ? (m = 9, k(t)) : n() && (m = 9, k(t - 1));
          break;
        case 2:
          ">" === x || n() ? m = 9 : htmlparser.isWhitespace(x) || (m = 3, I = t);
          break;
        case 3:
          "=" === x ? (m = 5, G = t) : htmlparser.isWhitespace(x) ? (m = 4, G = t) : ">" === x ? (m = 9, G = t, u()) : n() && (m = 9, G = t - 1, u());
          break;
        case 4:
          "=" === x ? m = 5 : ">" === x || n() ? (m = 9, u()) : htmlparser.isWhitespace(x) || (m = 3, u(), I = t);
          break;
        case 5:
          '"' === x || "'" === x ? (m = 6, N = x, L = !1, E = t + 1) : htmlparser.isWhitespace(x) || (m = 7, E = t);
          break;
        case 6:
          L || x !== N || (m = 2, u(t));
          L = "\\" === x && !L;
          break;
        case 7:
          htmlparser.isWhitespace(x) ? (m = 2, u(t)) : ">" === x && (m = 9, u(t));
      }
    }
    if (9 === m) {
      if (!htmlparser.DEFINE.USE_XHTML || !htmlparser.isNamespacedTag(A)) {
        for (; C;) {
          if (htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN[C] && !htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN[C][A]) {
            r(D, C, !1);
          } else {
            break;
          }
        }
      }
      (z = z || !!htmlparser.VOID_ELEMENTS[A]) || (C = c[c.length] = A);
      a = a.substr(t);
      if (!0 === b.onParseStartTag(A, p, z, t) && htmlparser.DEFINE.USE_PAUSE) {
        return h(), !0;
      }
    } else {
      return l(a), !0;
    }
  }
  var q = -1, C = "", F;
  htmlparser.DEFINE.USE_PAUSE && (C = c[c.length - 1] || "");
  if (!f() || !htmlparser.DEFINE.USE_PAUSE) {
    for (; a;) {
      var J = htmlparser.RAW_TEXT_ELEMENTS[C];
      if (htmlparser.DEFINE.USE_XHTML && e && a.length === d && a.indexOf("<?xml ") === q) {
        a = a.substr(q);
        q = 0;
        var B = a.indexOf("?>");
        if (-1 !== B) {
          var H = a.substring(2, B);
          a = a.substr(B + 2);
          e = !1;
          if (!0 === b.onParseProcessingInstruction(H) && htmlparser.DEFINE.USE_PAUSE) {
            h();
            return;
          }
        } else {
          l(a);
          return;
        }
      } else if (htmlparser.DEFINE.USE_PROCESSING_INSTRUCTION && a.indexOf("<?") === q) {
        if (g() && htmlparser.DEFINE.USE_PAUSE) {
          return;
        }
        B = a.indexOf("?>");
        if (-1 !== B) {
          if (H = a.substring(2 + q, B), a = a.substr(B + 2), !0 === b.onParseProcessingInstruction(H) && htmlparser.DEFINE.USE_PAUSE) {
            h();
            return;
          }
        } else {
          l(a);
          return;
        }
      } else if (a.indexOf("</", q) === q && htmlparser.isAlphabet(a.charAt(q + 2))) {
        if (J && (htmlparser.DEFINE.USE_TRADITIONAL_TAGS && "plaintext" === C ? F = !0 : a.indexOf(C, q) !== q + 2 && a.indexOf(C.toUpperCase(), q) !== q + 2 && (F = !0)), F) {
          if (f() && htmlparser.DEFINE.USE_PAUSE) {
            return;
          }
          F = !1;
        } else {
          if (g() && htmlparser.DEFINE.USE_PAUSE || w(c)) {
            return;
          }
        }
      } else if (J) {
        if (f() && htmlparser.DEFINE.USE_PAUSE) {
          return;
        }
      } else if ("<" === a.charAt(q) && htmlparser.isAlphabet(a.charAt(q + 1))) {
        if (g() && htmlparser.DEFINE.USE_PAUSE || y(c)) {
          return;
        }
      } else if (a.indexOf("\x3c!--") === q) {
        if (g() && htmlparser.DEFINE.USE_PAUSE) {
          return;
        }
        B = a.indexOf("--\x3e");
        if (-1 !== B) {
          if (H = a.substring(4, B), a = a.substr(B + 3), !0 === b.onParseComment(htmlparser.unescapeHTML(H)) && htmlparser.DEFINE.USE_PAUSE) {
            h();
            return;
          }
        } else {
          l(a);
          return;
        }
      } else if (htmlparser.DEFINE.USE_CDATA_SECTION && a.indexOf("<![CDATA[") === q) {
        if (g() && htmlparser.DEFINE.USE_PAUSE) {
          return;
        }
        B = a.indexOf("]]\x3e");
        if (-1 !== B) {
          if (H = a.substring(9, B), a = a.substr(B + 3), !0 === b.onParseCDATASection(H) && htmlparser.DEFINE.USE_PAUSE) {
            h();
            return;
          }
        } else {
          l(a);
          return;
        }
      } else if (htmlparser.DEFINE.USE_DOCUMENT_TYPE_NODE && (a.indexOf("<!DOCTYPE ") === q || a.indexOf("<!doctype ") === q)) {
        if (a = a.substr(q), q = 0, B = a.indexOf(">"), -1 !== B) {
          if (H = a.substring(0, B + 1), a = a.substr(B + 1), e = !1, !0 === b.onParseDocType(H) && htmlparser.DEFINE.USE_PAUSE) {
            h();
            return;
          }
        } else {
          l(a);
          return;
        }
      } else {
        if (f() && htmlparser.DEFINE.USE_PAUSE) {
          return;
        }
      }
    }
    r(c, "", !0);
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
  function b(y, q) {
    f[m_trimTrailingChar(y, " ")] = "0px" === q ? 0 : m_tryToFiniteNumber(m_trimTrailingChar(q, " "));
    ++g;
  }
  for (var c = 0, d = a.length, e = 0, f = {}, g = 0, h, l, w = "", r; e < d; ++e) {
    h = a.charAt(e);
    switch(c) {
      case 0:
        if (htmlparser.isWhitespace(h)) {
          break;
        }
        l = e;
        c = 1;
      case 1:
        ":" === h && (r = a.substring(l, e), c = 2);
        break;
      case 2:
        if (htmlparser.isWhitespace(h)) {
          break;
        }
        l = e;
        c = 3;
      case 3:
        '"' === h || "'" === h ? (w = h, c = 4) : ";" === h && (b(r, a.substring(l, e)), c = 0);
        break;
      case 4:
        w === h && (w = "", c = 3);
    }
    3 <= c && b(r, a.substring(l));
  }
  return g ? f : null;
}
function m_createVNodeFromHTMLJson(a, b) {
  var c, d;
  htmljson.Traverser.traverseAllDescendantNodes(a, function(e, f, g, h) {
    function l(q, C, F) {
      c ? (h < d.length && (d.length = h), q = d[d.length - 1].insertNodeLast(q, C, F), m_hasChildren(e) && (d[h] = q)) : (c = new VNode(b, 0, q, C, F), d = [c]);
    }
    if (m_isStringOrNumber(e)) {
      l(htmljson.NODE_TYPE.TEXT_NODE, e);
    } else {
      f = e[0];
      g = e[1];
      var w = 1, r = f, y;
      switch(f) {
        case htmljson.NODE_TYPE.DOCUMENT_NODE:
        case htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER:
        case htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER:
          l(f, g);
          break;
        case htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE:
          l(f);
          break;
        case htmljson.NODE_TYPE.TEXT_NODE:
        case htmljson.NODE_TYPE.CDATA_SECTION:
        case htmljson.NODE_TYPE.COMMENT_NODE:
        case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START:
        case htmljson.NODE_TYPE.ELEMENT_END_TAG:
          l(f, g);
          break;
        case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_END:
          l(f);
          break;
        case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION:
          w = [];
          r = 2;
          for (y = e.length; r < y; ++r) {
            w[r - 2] = e[r];
          }
          l(f, g, y - 2 ? w : null);
          break;
        case htmljson.NODE_TYPE.ELEMENT_NODE:
        case htmljson.NODE_TYPE.ELEMENT_START_TAG:
          r = g, w = 2;
        default:
          core.isString(r) && l(1 === w ? htmljson.NODE_TYPE.ELEMENT_NODE : f, r, e[w]);
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
  function f(k, u, n) {
    function m(p, z) {
      for (; 0 <= k.indexOf(p);) {
        k = k.split(p).join(z);
      }
    }
    n && (k = k.replace(/([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])\s([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])/g, "$1$2"));
    k = k.split("\t").join(" ").split("\f").join(" ");
    m("\n\n", "\n");
    m("  ", " ");
    if (u) {
      var v = " \n" === k.substr(0, 2) || "\n" === k.charAt(0), t = "\n " === k.substr(k.length - 2) || "\n" === k.charAt(k.length - 1);
    }
    k = m_trimLeadingChar(k, "\n");
    k = m_trimTrailingChar(k, "\n");
    k = k.split("\n").join(" ");
    m("  ", " ");
    v && (k = m_trimLeadingChar(k, " "));
    t && (k = m_trimTrailingChar(k, " "));
    k = k.split("\\u0020").join(" ").split("&#x20;").join(" ").split("&#32;").join(" ");
    return m_tryToFiniteNumber(k);
  }
  function g(k) {
    var u;
    htmljson.Traverser.traverseAllDescendantNodes(k, function(n, m, v, t) {
      m_getNodeType(n) === htmljson.NODE_TYPE.TEXT_NODE && (u = [n, m, v]);
    });
    return u;
  }
  function h(k, u) {
    function n(p) {
      return p.split("\n").join("").split("\t").join("").split("\f").join("").split(" ").join("");
    }
    var m;
    for (htmljson.Traverser.traverseAllDescendantNodes(k, function(p, z, x, I) {
      if (m_getNodeType(p) === htmljson.NODE_TYPE.TEXT_NODE) {
        p = "" + (m_isStringOrNumber(p) ? p : p[1]);
        if (n(p)) {
          return z.splice(x, 1, u ? m_trimLeadingChar(p, "\n") : m_trimLeadingChars(p, "\n\t\f ")), htmljson.Traverser.VISITOR_OPTION.BREAK;
        }
        z.splice(x, 1);
        return htmljson.Traverser.VISITOR_OPTION.REMOVED;
      }
    }); m = g(k);) {
      var v = m[0];
      var t = m[1];
      m = m[2];
      v = "" + (m_isStringOrNumber(v) ? v : v[1]);
      if (n(v)) {
        t.splice(m, 1, u ? m_trimTrailingChar(v, "\n") : m_trimTrailingChars(v, "\n\t\f "));
        break;
      } else {
        t.splice(m, 1);
      }
    }
  }
  function l(k) {
    for (var u; htmljson.Traverser.traverseAllDescendantNodes(k, function(n, m, v, t) {
      if (m_getNodeType(n) === htmljson.NODE_TYPE.TEXT_NODE) {
        t = (t = g(k)) ? m === t[1] && v === t[2] : !1;
        var p = "" + (m_isStringOrNumber(n) ? n : n[1]);
        p = p.split("\n");
        for (var z = 0, x = p.length; z < x - (t ? 0 : 1); ++z) {
          p[z] = m_trimTrailingChars(p[z], "\t\f ");
        }
        p = p.join("\n");
        if ("\n" === p && u) {
          return n = u[0], t = u[1], z = u[2], m_isStringOrNumber(n) ? t[z] += p : n[1] += p, m.splice(v, 1), htmljson.Traverser.VISITOR_OPTION.REMOVED;
        }
        m_isStringOrNumber(n) ? m[v] = p : n[1] = p;
        u = [n, m, v];
      }
    });) {
    }
  }
  function w(k, u) {
    for (var n = m_getChildNodeStartIndex(k), m = k.length, v, t, p, z, x; n < m; ++n) {
      v = k[n], m_getNodeType(v) === htmljson.NODE_TYPE.TEXT_NODE && (t = t || n, p = p || v, z = n, x = v);
    }
    t && (core.isArray(p) && (p = p[1]), core.isArray(x) && (x = x[1]), t !== z || u ? (core.isString(p) && !u && (p = m_normalizeNewlines(p), p = m_trimLeadingChar(p, "\n"), k[t] = m_tryToFiniteNumber(p)), core.isString(x) && (x = m_normalizeNewlines(x), x = m_trimTrailingChar(x, "\n"), k[z] = m_tryToFiniteNumber(x))) : core.isString(p) && (p = m_normalizeNewlines(p), p = m_trimChar(p, "\n"), k[t] = m_tryToFiniteNumber(p)));
  }
  c = e || {};
  var r = -1 !== ["normal", !0, "aggressive"].indexOf(c.trimWhitespaces), y = "aggressive" === c.trimWhitespaces, q = !!c.removeNewlineBetweenFullWidthChars, C = !1 !== c.keepCDATASections, F = !1 !== c.keepComments, J = !0 === c.keepEmptyConditionalComment, B = c.instructionAttrPrefix || htmljson.DEFINE.INSTRUCTION_ATTR_PREFIX, H, D;
  (htmljson.Traverser.traverseAllDescendantNodes(a, function(k, u, n, m) {
    m = k[0];
    var v = k[1], t = 1;
    switch(m_getNodeType(k)) {
      case htmljson.NODE_TYPE.DOCUMENT_NODE:
        r && (k[1] = htmlparser.DEFINE.USE_XHTML ? v.split("\n").join(" ").split("  ").join(" ").split("?> <!").join("?>\n<!") : v.split("\n").join(" ").split("  ").join(" "));
        break;
      case htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE:
        break;
      case htmljson.NODE_TYPE.TEXT_NODE:
        core.isArray(k) || (v = k);
        if (core.isString(v)) {
          if (D || (v = m_normalizeNewlines(v), r && (v = f(v, y, q))), "" !== v) {
            u[n] = v;
          } else {
            return u.splice(n, 1), htmljson.Traverser.VISITOR_OPTION.REMOVED;
          }
        }
        break;
      case htmljson.NODE_TYPE.CDATA_SECTION:
        if (!C) {
          return u.splice(n, 1), htmljson.Traverser.VISITOR_OPTION.REMOVED;
        }
        break;
      case htmljson.NODE_TYPE.COMMENT_NODE:
        if (!F) {
          return u.splice(n, 1), htmljson.Traverser.VISITOR_OPTION.REMOVED;
        }
        break;
      case htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER:
        break;
      case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START:
        break;
      case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_END:
        k = u[n - 1];
        if (!J && k && k[0] === htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START) {
          return u.splice(n - 1, 2), 2 * htmljson.Traverser.VISITOR_OPTION.REMOVED;
        }
        break;
      case htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER:
        break;
      case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION:
        if (b && (k = m_executeProcessingInstruction(b, k, d), void 0 !== k)) {
          if (null === k || "" === k) {
            return u.splice(n, 1), htmljson.Traverser.VISITOR_OPTION.REMOVED;
          }
          if (m_isStringOrNumber(k)) {
            u.splice(n, 1, k), H = !0;
          } else if (core.isArray(k)) {
            return m_replaceProcessingInstructionWithHTMLJson(u, n, k), htmljson.Traverser.VISITOR_OPTION.REMOVED;
          }
        }
        break;
      case htmljson.NODE_TYPE.ELEMENT_NODE:
      case htmljson.NODE_TYPE.ELEMENT_START_TAG:
        core.isNumber(m) && (m = v, t = 2);
        m = m_parseTagName(m)[0];
        u = k[t];
        if (m_isAttributes(u)) {
          n = t - 1;
          v = 0;
          var p, z = m_parseTagName(k[n]), x = z[1], I = z[2];
          z = z[0];
          for (A in u) {
            var G = A;
            var E = u[A];
            if (p = m_isInstructionAttr(B, A)) {
              var A = A.substr(B.length);
              "className" === A && (A = "class");
              if (b) {
                if (E = m_executeInstructionAttr(b, A, E, d), void 0 !== E) {
                  if (delete u[G], core.isArray(E)) {
                    core.isString(E[0]) ? (u[G] = E, ++v) : htmljson.DEFINE.DEBUG && d && d("Invalid dynamic attribute callback value! [" + G + "=" + E + "]");
                  } else if ((!htmlparser.BOOLEAN_ATTRIBUTES[A] || !1 !== E) && null !== E) {
                    if (core.isString(E)) {
                      if ("id" === A) {
                        x = E;
                        continue;
                      } else if ("class" === A) {
                        G = E.split(" ");
                        for (E = G.length; E;) {
                          p = G[--E], -1 === (" " + I + " ").indexOf(" " + p + " ") && (I = (I ? " " : "") + p);
                        }
                        continue;
                      }
                    }
                    u[A] = E;
                    ++v;
                  }
                } else {
                  ++v;
                }
              } else {
                ++v;
              }
            } else {
              ++v;
            }
          }
          k[n] = m_createTagName(z, x, I);
          0 === v && k.splice(t, 1);
        }
        m_SPECIAL_LAYOUT_ELEMENTS[m] && y ? h(k, !1) : m_FAMILY_OF_PRE_ELEMENT[m] ? (h(k, !0), y && l(k), D = k) : m_TRIM_NEWLINES_ELEMENTS[m] ? w(D = k) : !htmlparser.DEFINE.USE_TRADITIONAL_TAGS || "xmp" !== m && "plaintext" !== m || w(k, !0);
        break;
      default:
        htmljson.DEFINE.DEBUG && d && d("Not html.json! [" + k + "]");
    }
  }, function(k, u, n, m) {
    if (!J) {
      switch(m_getNodeType(k)) {
        case htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER:
        case htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER:
          if (2 === k.length) {
            return u.splice(n, 1), htmljson.Traverser.VISITOR_OPTION.REMOVED;
          }
      }
    }
    D === k && (D = null);
  }) || H) && normalizeTextNodes(a);
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
  htmljson.Traverser.traverseAllDescendantNodes(a, function(g, h, l, w) {
    if (c && d !== w) {
      return b(), htmljson.Traverser.VISITOR_OPTION.INSERTED_BEFORER;
    }
    if (m_getNodeType(g) === htmljson.NODE_TYPE.TEXT_NODE) {
      return c = m_isStringOrNumber(g) ? c + g : c + g[1], h.splice(l, 1), d = w, e = h, f = l, htmljson.Traverser.VISITOR_OPTION.REMOVED;
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
  return g.obj(function(l, w, r) {
    if (l.isNull()) {
      return r();
    }
    if (l.isStream()) {
      return this.emit("error", new f("json2json", "Streaming not supported")), r();
    }
    if (".json" === l.extname) {
      try {
        const y = JSON.parse(l.contents.toString(w));
        json2json.main(y, a, b, c, d, e);
        const q = JSON.stringify(y, null, h ? "    " : "");
        l.contents = Buffer.from(q);
      } catch (y) {
        this.emit("error", new f("json2json", y));
      }
    }
    r(null, l);
  });
};

