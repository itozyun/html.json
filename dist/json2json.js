var DEFINE_HTML2JSON__EXPORT_JSON2HTML = !1, DEFINE_HTML2JSON__EXPORT_JSON2JSON = !0, DEFINE_HTML2JSON__DEBUG = !0, DEFINE_HTML2JSON__USE_XML_NS = !0, DEFINE_HTML2JSON__USE_XHTML = !0, DEFINE_INSTRUCTION_ATTR_PREFIX = ":", HTML_DOT_JSON__NODE_TYPE = {DOCUMENT_NODE:0, DOCUMENT_FRAGMENT_NODE:1, ELEMENT_NODE:2, TEXT_NODE:3, COMMENT_NODE:4, CONDITIONAL_COMMENT_HIDE_LOWER:5, CONDITIONAL_COMMENT_SHOW_LOWER:6, PROCESSING_INSTRUCTION:7};
(function() {
  var m;
  (function() {
    function n(a) {
      return !(!a || a.pop !== [].pop);
    }
    function q(a) {
      return "" + a === a;
    }
    function z(a) {
      return a === a - 0;
    }
    function v(a) {
      return q(a) || z(a);
    }
    function A(a) {
      return q(a) && z(+a) && z(parseInt(a, 10)) ? +a : a;
    }
    function B(a) {
      return v(a) ? HTML_DOT_JSON__NODE_TYPE.TEXT_NODE : n(a) ? q(a[0]) ? HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE : a[0] : -1;
    }
    function C(a) {
      return !n(a) && !(!a || "object" !== typeof a);
    }
    function D(a) {
      var h = a[0], e = B(a) === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE, k = h === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE ? 2 : 1;
      return e ? C(a[k]) ? k + 1 : k : h === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE ? 1 : 2;
    }
    function E(a) {
      var h = D(a), e = "", k;
      if (h < a.length) {
        for (k = h; k < a.length;) {
          h = a[k];
          var w = B(h);
          w === HTML_DOT_JSON__NODE_TYPE.TEXT_NODE ? (e = v(h) ? e + h : e + h[1], a.splice(k, 1)) : (e && (a.splice(k, 0, A(e)), e = ""), ++k, w === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE && E(h));
        }
        e && (a[k] = A(e));
      }
    }
    m = function(a, h, e, k) {
      function w(c, d, f) {
        var l = c[0], p = c[1], t = 1, r = l;
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
            if (!H && d) {
              return d.splice(f, 1), -1;
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
            b = l.length ? h(b, l) : h(b);
            void 0 !== b && null !== b && "" !== b && (v(b) ? d ? d.splice(f, 1, b) : (c.length = 0, c.push(HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, c)) : n(b) ? b[0] === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE ? d ? (b.shift(), b.unshift(f, 1), d.splice.apply(d, b)) : (c.length = 0, c.push.apply(c, b)) : n(b[0]) ? d ? (b.unshift(f, 1), d.splice.apply(d, b)) : (c.length = 0, c.push(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE), c.push.apply(c, b)) : d ? d.splice(f, 1, b) : (c.length = 0, c.push(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, 
            b)) : DEFINE_HTML2JSON__DEBUG && t("PROCESSING_INSTRUCTION Error! [" + JSON.stringify(c) + "]"));
            if (void 0 !== b) {
              F = !0;
              if (null === b || "" === b) {
                return d ? d.splice(f, 1) : (a.length = 0, a.push(HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE, "")), -1;
              }
              if (!v(b) && n(b)) {
                return -1;
              }
            } else {
              y = !1;
            }
            break;
          case HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE:
            r = p, t = 2;
          default:
            if (q(r)) {
              if (1 + t <= c.length) {
                d = c[t];
                if (C(d)) {
                  for (b in d) {
                    f = b;
                    var g = d[b];
                    (l = 0 === b.indexOf(G)) && (b = b.substr(G.length));
                    "className" === b && (b = "class");
                    if (l) {
                      p = void 0;
                      l = h;
                      r = b;
                      var I = u;
                      n(g) && q(g[0]) ? (p = g[0], r = g.slice(1), p = r.length ? l(p, r) : l(p)) : q(g) ? p = l(g) : DEFINE_HTML2JSON__DEBUG && I("Invalid InstructionAttr value! [" + r + "=" + g + "]");
                      g = p;
                      void 0 !== g ? (delete d[f], n(g) ? q(g[0]) ? (d[f] = g, y = !1) : DEFINE_HTML2JSON__DEBUG && u("Invalid dynamic attribute callback value! [" + f + "=" + g + "]") : null !== g && "" !== g && (d[b] = g)) : y = !1;
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
        for (var d = D(c), f; d < c.length; ++d) {
          f = c[d], v(f) || (n(f) ? -1 === w(f, c, d) && --d : DEFINE_HTML2JSON__DEBUG && u("Invalid html.json! [" + f + "]"));
        }
      }
      var u = "function" === typeof e ? e : function(c) {
      };
      e = e && "object" === typeof e ? e : k || {};
      var H = !!e.keepComments, G = e.instructionAttrPrefix || DEFINE_INSTRUCTION_ATTR_PREFIX, F = !1, y = !0;
      if (n(a)) {
        return w(a, null, 0), F && E(a), y;
      }
      DEFINE_HTML2JSON__DEBUG && u("Invalid html.json document!");
    };
    DEFINE_HTML2JSON__EXPORT_JSON2JSON && (module.exports = m, m.DOCUMENT_NODE = HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE, m.DOCUMENT_FRAGMENT_NODE = HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, m.ELEMENT_NODE = HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE, m.TEXT_NODE = HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, m.COMMENT_NODE = HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE, m.CONDITIONAL_COMMENT_HIDE_LOWER = HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER, m.CONDITIONAL_COMMENT_SHOW_LOWER = HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER, 
    m.PROCESSING_INSTRUCTION = HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION);
  })();
})();

