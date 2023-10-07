var DEFINE_HTML2JSON__EXPORT_JSON2HTML = !1, DEFINE_HTML2JSON__EXPORT_JSON2JSON = !0, DEFINE_HTML2JSON__DEBUG = !0, DEFINE_HTML2JSON__USE_XML_NS = !0, DEFINE_HTML2JSON__USE_XHTML = !0, DEFINE_INSTRUCTION_ATTR_PREFIX = ":", HTML_DOT_JSON__NODE_TYPE = {DOCUMENT_NODE:0, DOCUMENT_FRAGMENT_NODE:1, ELEMENT_NODE:2, TEXT_NODE:3, COMMENT_NODE:4, CONDITIONAL_COMMENT_HIDE_LOWER:5, CONDITIONAL_COMMENT_SHOW_LOWER:6, PROCESSING_INSTRUCTION:7};
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
      return r(a) || a === a - 0;
    }
    function z(a) {
      var e;
      if (e = a === "" + +a) {
        e = parseInt(a, 10), e = e === e - 0;
      }
      return e ? +a : a;
    }
    function A(a) {
      return v(a) ? HTML_DOT_JSON__NODE_TYPE.TEXT_NODE : n(a) ? r(a[0]) ? HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE : a[0] : -1;
    }
    function B(a) {
      return !n(a) && !(!a || "object" !== typeof a);
    }
    function C(a) {
      var e = a[0], f = A(a) === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE, k = e === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE ? 2 : 1;
      return f ? B(a[k]) ? k + 1 : k : e === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE ? 1 : 2;
    }
    function D(a) {
      var e = C(a), f = "", k;
      if (e < a.length) {
        for (k = e; k < a.length;) {
          e = a[k];
          var w = A(e);
          w === HTML_DOT_JSON__NODE_TYPE.TEXT_NODE ? (f = v(e) ? f + e : f + e[1], a.splice(k, 1)) : (f && (a.splice(k, 0, z(f)), f = ""), ++k, w === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE && D(e));
        }
        f && (a[k] = z(f));
      }
    }
    m = function(a, e, f, k) {
      function w(c, d, g) {
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
            if (!G && d) {
              return d.splice(g, 1), -1;
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
            b = l.length ? e(b, l) : e(b);
            void 0 !== b && null !== b && "" !== b && (v(b) ? d ? d.splice(g, 1, b) : (c.length = 0, c.push(HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, c)) : n(b) ? b[0] === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE ? d ? (b.shift(), b.unshift(g, 1), d.splice.apply(d, b)) : (c.length = 0, c.push.apply(c, b)) : n(b[0]) ? d ? (b.unshift(g, 1), d.splice.apply(d, b)) : (c.length = 0, c.push(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE), c.push.apply(c, b)) : d ? d.splice(g, 1, b) : (c.length = 0, c.push(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, 
            b)) : DEFINE_HTML2JSON__DEBUG && t("PROCESSING_INSTRUCTION Error! [" + JSON.stringify(c) + "]"));
            if (void 0 !== b) {
              E = !0;
              if (null === b || "" === b) {
                return d ? d.splice(g, 1) : (a.length = 0, a.push(HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE, "")), -1;
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
                d = c[t];
                if (B(d)) {
                  for (b in d) {
                    g = b;
                    var h = d[b];
                    (l = 0 === b.indexOf(F)) && (b = b.substr(F.length));
                    "className" === b && (b = "class");
                    if (l) {
                      p = void 0;
                      l = e;
                      q = b;
                      var H = u;
                      n(h) && r(h[0]) ? (p = h[0], q = h.slice(1), p = q.length ? l(p, q) : l(p)) : r(h) ? p = l(h) : DEFINE_HTML2JSON__DEBUG && H("Invalid InstructionAttr value! [" + q + "=" + h + "]");
                      h = p;
                      void 0 !== h ? (delete d[g], n(h) ? r(h[0]) ? (d[g] = h, y = !1) : DEFINE_HTML2JSON__DEBUG && u("Invalid dynamic attribute callback value! [" + g + "=" + h + "]") : null !== h && "" !== h && (d[b] = h)) : y = !1;
                    }
                  }
                  0 === Object.keys(d).length && c.splice(t, 1);
                }
                x(c);
              }
            } else {
              DEFINE_HTML2JSON__DEBUG && u("Not html.json! [" + c + "]");
            }
        }
      }
      function x(c) {
        for (var d = C(c), g; d < c.length; ++d) {
          g = c[d], v(g) || (n(g) ? -1 === w(g, c, d) && --d : DEFINE_HTML2JSON__DEBUG && u("Invalid html.json! [" + g + "]"));
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

