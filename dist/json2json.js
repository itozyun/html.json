var DEFINE_HTML2JSON__EXPORT_JSON2HTML = !1, DEFINE_HTML2JSON__EXPORT_JSON2JSON = !0, DEFINE_HTML2JSON__DEBUG = !0, DEFINE_HTML2JSON__USE_XML_NS = !0, DEFINE_HTML2JSON__USE_XHTML = !0, DEFINE_INSTRUCTION_ATTR_PREFIX = ":", HTML_DOT_JSON__NODE_TYPE = {DOCUMENT_NODE:0, DOCUMENT_FRAGMENT_NODE:1, ELEMENT_NODE:2, TEXT_NODE:3, COMMENT_NODE:4, CONDITIONAL_COMMENT_HIDE_LOWER:5, CONDITIONAL_COMMENT_SHOW_LOWER:6, PROCESSING_INSTRUCTION:7};
const EXPECT = {ERROR:HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE - 2, NODE_START:HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE - 1, DOCUMENT_NODE_VALUE:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 1, TEXT_NODE_VALUE:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 2, COMMENT_NODE_VALUE:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 3, COMMENT_HIDE_LOWER_FORMURA:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 4, COMMENT_SHOW_LOWER_FORMURA:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 5, PROCESSING_INSTRUCTION_NAME:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 
6, TAG_NAME:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 7, ATTRIBUTES_START:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 8, ATTRIBUTE_PROPERTY:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 9, ATTRIBUTE_VALUE:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 10, STYLES_START:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 11, CSS_PROPERTY:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 12, CSS_VALUE:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 13, IN_INSTRUCTION_ATTRIBUTE:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 
14, END_OF_NODE:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 15, NODE_TYPE:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 16, PROCESSING_INSTRUCTION_ARGS:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 17, INSTRUCTION_ATTRIBUTE_START:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 18, CHILD_NODES_START:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 19, IN_CHILD_NODES:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 20, END_OF_DOCUMENT:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 
21}, PHASE = {ERROR:EXPECT.ERROR, NODE_START:EXPECT.NODE_START, DOCUMENT_NODE_START:HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE, DOCUMENT_FRAGMENT_NODE_START:HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, ELEMENT_NODE_START:HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE, TEXT_NODE_START:HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, COMMENT_NODE_START:HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE, COMMENT_HIDE_LOWER_START:HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER, COMMENT_SHOW_LOWER_START:HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER, 
PROCESSING_INSTRUCTION_START:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION, DOCUMENT_NODE_VALUE:EXPECT.DOCUMENT_NODE_VALUE, TEXT_NODE_VALUE:EXPECT.TEXT_NODE_VALUE, COMMENT_NODE_VALUE:EXPECT.COMMENT_NODE_VALUE, COMMENT_HIDE_LOWER_FORMURA:EXPECT.COMMENT_HIDE_LOWER_FORMURA, COMMENT_SHOW_LOWER_FORMURA:EXPECT.COMMENT_SHOW_LOWER_FORMURA, PROCESSING_INSTRUCTION_NAME:EXPECT.PROCESSING_INSTRUCTION_NAME, TAG_NAME:EXPECT.TAG_NAME, ATTRIBUTES_START:EXPECT.ATTRIBUTES_START, ATTRIBUTE_PROPERTY:EXPECT.ATTRIBUTE_PROPERTY, 
ATTRIBUTE_VALUE:EXPECT.ATTRIBUTE_VALUE, STYLES_START:EXPECT.STYLES_START, CSS_PROPERTY:EXPECT.CSS_PROPERTY, CSS_VALUE:EXPECT.CSS_VALUE, IN_INSTRUCTION_ATTRIBUTE:EXPECT.IN_INSTRUCTION_ATTRIBUTE, END_OF_NODE:EXPECT.END_OF_NODE, CLOSE_EMPTY_ELEMENT:EXPECT.END_OF_NODE + 1, END_OF_ATTRIBUTES:EXPECT.END_OF_NODE + 2, END_OF_STYLES:EXPECT.END_OF_NODE + 3, TEXT_DATA:EXPECT.END_OF_NODE + 4, INSTRUCTION_ATTRIBUTE_NAME:EXPECT.END_OF_NODE + 5};
(function() {
  var m;
  (function() {
    function n(a) {
      return !(!a || a.pop !== [].pop);
    }
    function r(a) {
      return "" + a === a;
    }
    function v(a) {
      return r(a) || a === +a;
    }
    function z(a) {
      var d;
      if (d = a === "" + +a) {
        d = parseInt(a, 10), d = d === +d;
      }
      return d ? +a : a;
    }
    function A(a) {
      if (v(a)) {
        a = HTML_DOT_JSON__NODE_TYPE.TEXT_NODE;
      } else {
        if (n(a)) {
          if (r(a[0])) {
            a = HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE;
          } else {
            var d = a[0];
            a = d === +d ? a[0] : -1;
          }
        } else {
          a = -1;
        }
      }
      return a;
    }
    function B(a) {
      return !n(a) && !(!a || "object" !== typeof a);
    }
    function C(a) {
      var d = a[0], f = A(a) === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE, k = d === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE ? 2 : 1;
      return f ? B(a[k]) ? k + 1 : k : d === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE ? 1 : d === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE || d === HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER || d === HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER ? 2 : Infinity;
    }
    function D(a) {
      var d = C(a), f = "", k;
      if (d < a.length) {
        for (k = d; k < a.length;) {
          d = a[k];
          var w = A(d);
          w === HTML_DOT_JSON__NODE_TYPE.TEXT_NODE ? (f = v(d) ? f + d : f + d[1], a.splice(k, 1)) : (f && (a.splice(k, 0, z(f)), f = ""), ++k, w === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE && D(d));
        }
        f && (a[k] = z(f));
      }
    }
    m = function(a, d, f, k) {
      function w(c, e, g) {
        var l = c[0], p = c[1], t = 1, q = l;
        switch(l) {
          case HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE:
            x(c);
            break;
          case HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE:
            x(c);
            break;
          case HTML_DOT_JSON__NODE_TYPE.TEXT_NODE:
            break;
          case HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE:
            if (!G && e) {
              return e.splice(g, 1), -1;
            }
            break;
          case HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER:
            x(c);
            break;
          case HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER:
            x(c);
            break;
          case HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION:
            t = u;
            var b = c[1];
            l = c.slice(2);
            b = l.length ? d(b, l) : d(b);
            void 0 !== b && null !== b && "" !== b && (v(b) ? e ? e.splice(g, 1, b) : (c.length = 0, c.push(HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, c)) : n(b) ? b[0] === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE ? e ? (b.shift(), b.unshift(g, 1), e.splice.apply(e, b)) : (c.length = 0, c.push.apply(c, b)) : n(b[0]) ? e ? (b.unshift(g, 1), e.splice.apply(e, b)) : (c.length = 0, c.push(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE), c.push.apply(c, b)) : e ? e.splice(g, 1, b) : (c.length = 0, c.push(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, 
            b)) : DEFINE_HTML2JSON__DEBUG && t("PROCESSING_INSTRUCTION Error! [" + JSON.stringify(c) + "]"));
            if (void 0 !== b) {
              E = !0;
              if (null === b || "" === b) {
                return e ? e.splice(g, 1) : (a.length = 0, a.push(HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE, "")), -1;
              }
              if (!v(b) && n(b)) {
                return -1;
              }
            } else {
              y = !1;
            }
            break;
          case HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE:
            q = p, t = 2;
          default:
            if (r(q)) {
              if (1 + t <= c.length) {
                e = c[t];
                if (B(e)) {
                  for (b in e) {
                    g = b;
                    var h = e[b];
                    (l = 0 === b.indexOf(F)) && (b = b.substr(F.length));
                    "className" === b && (b = "class");
                    if (l) {
                      p = void 0;
                      l = d;
                      q = b;
                      var H = u;
                      n(h) && r(h[0]) ? (p = h[0], q = h.slice(1), p = q.length ? l(p, q) : l(p)) : r(h) ? p = l(h) : DEFINE_HTML2JSON__DEBUG && H("Invalid InstructionAttr value! [" + q + "=" + h + "]");
                      h = p;
                      void 0 !== h ? (delete e[g], n(h) ? r(h[0]) ? (e[g] = h, y = !1) : DEFINE_HTML2JSON__DEBUG && u("Invalid dynamic attribute callback value! [" + g + "=" + h + "]") : null !== h && "" !== h && (e[b] = h)) : y = !1;
                    }
                  }
                  0 === Object.keys(e).length && c.splice(t, 1);
                }
                x(c);
              }
            } else {
              DEFINE_HTML2JSON__DEBUG && u("Not html.json! [" + c + "]");
            }
        }
      }
      function x(c) {
        for (var e = C(c), g; e < c.length; ++e) {
          g = c[e], v(g) || (n(g) ? -1 === w(g, c, e) && --e : DEFINE_HTML2JSON__DEBUG && u("Invalid html.json! [" + g + "]"));
        }
      }
      var u = "function" === typeof f ? f : function(c) {
      };
      f = f && "object" === typeof f ? f : k || {};
      var G = !!f.keepComments, F = f.instructionAttrPrefix || DEFINE_INSTRUCTION_ATTR_PREFIX, E = !1, y = !0;
      if (n(a)) {
        return w(a, null, 0), E && D(a), y;
      }
      DEFINE_HTML2JSON__DEBUG && u("Invalid html.json document!");
    };
    DEFINE_HTML2JSON__EXPORT_JSON2JSON && (module.exports = m, m.DOCUMENT_NODE = HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE, m.DOCUMENT_FRAGMENT_NODE = HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, m.ELEMENT_NODE = HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE, m.TEXT_NODE = HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, m.COMMENT_NODE = HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE, m.CONDITIONAL_COMMENT_HIDE_LOWER = HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER, m.CONDITIONAL_COMMENT_SHOW_LOWER = HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER, 
    m.PROCESSING_INSTRUCTION = HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION);
  })();
})();

