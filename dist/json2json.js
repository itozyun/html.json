var DEFINE_HTML2JSON__EXPORT_JSON2HTML = !1, DEFINE_HTML2JSON__EXPORT_JSON2JSON = !0, DEFINE_HTML2JSON__DEBUG = !0, DEFINE_HTML2JSON__USE_XML_NS = !0, DEFINE_HTML2JSON__USE_XHTML = !0, HTML_DOT_JSON__NODE_TYPE = {DOCUMENT_NODE:0, DOCUMENT_FRAGMENT_NODE:1, ELEMENT_NODE:2, TEXT_NODE:3, COMMENT_NODE:4, CONDITIONAL_COMMENT_HIDE_LOWER:5, CONDITIONAL_COMMENT_SHOW_LOWER:6, PROCESSING_INSTRUCTION:7};
(function() {
  var l;
  (function() {
    function m(a) {
      return a && a.pop === [].pop;
    }
    function q(a) {
      return "" + a === a;
    }
    function w(a) {
      return a === a - 0;
    }
    function u(a) {
      return q(a) || w(a);
    }
    function x(a) {
      return q(a) && w(+a) && w(parseInt(a, 10)) ? +a : a;
    }
    function y(a) {
      return u(a) ? HTML_DOT_JSON__NODE_TYPE.TEXT_NODE : m(a) ? q(a[0]) ? HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE : a[0] : -1;
    }
    function z(a) {
      return !m(a) && a && "object" === typeof a;
    }
    function A(a) {
      var f = a[0], k = y(a) === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE, h = f === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE ? 2 : 1;
      return k ? z(a[h]) ? h + 1 : h : f === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE ? 1 : 2;
    }
    function B(a) {
      var f = A(a), k = "", h;
      if (f < a.length) {
        for (h = f; h < a.length;) {
          f = a[h];
          var n = y(f);
          n === HTML_DOT_JSON__NODE_TYPE.TEXT_NODE ? (k = u(f) ? k + f : k + f[1], a.splice(h, 1)) : (k && (a.splice(h, 0, x(k)), k = ""), ++h, n === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE && B(f));
        }
        k && (a[h] = x(k));
      }
    }
    l = function(a, f, k) {
      function h(e, b, g) {
        var r = e[0], d = e[1], c = 1, C = r;
        switch(r) {
          case HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE:
            n(e);
            break;
          case HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE:
            n(e);
            break;
          case HTML_DOT_JSON__NODE_TYPE.TEXT_NODE:
            break;
          case HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE:
            break;
          case HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER:
            n(e);
            break;
          case HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER:
            n(e);
            break;
          case HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION:
            c = e.slice(2);
            c = c.length ? f(d, c) : f(d);
            if (void 0 !== c) {
              if (D = !0, null === c || "" === c) {
                b ? b.splice(g, 1) : (a.length = 0, a.push(HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE, ""));
              } else if (u(c)) {
                b ? b.splice(g, 1, c) : (a.length = 0, a.push(HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, c));
              } else {
                if (m(c)) {
                  return c[0] === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE ? b ? (c.shift(), c.unshift(g, 1), b.splice.apply(b, c)) : (a.length = 0, a.push.apply(a, c)) : m(c[0]) ? b ? (c.unshift(g, 1), b.splice.apply(b, c)) : (a.length = 0, a.push(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE), a.push.apply(a, c)) : b ? b.splice(g, 1, c) : (a.length = 0, a.push(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, c)), -1;
                }
                DEFINE_HTML2JSON__DEBUG && t("DynamicNode Error! [" + e + "]");
              }
            } else {
              v = !1;
            }
            break;
          case HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE:
            C = d, c = 2;
          default:
            if (q(C)) {
              if (1 + c <= e.length) {
                b = e[c];
                if (z(b)) {
                  for (var p in b) {
                    g = p, d = b[p], (r = ":" === p.charAt(0)) && (p = p.substr(1)), "className" === p && (p = "class"), r && (m(d) && q(d[0]) ? (r = d[0], d = d.slice(1), d = d.length ? f(r, d) : f(r)) : q(d) ? d = f(d) : DEFINE_HTML2JSON__DEBUG && t("Invalid dynamic attribute value! [" + g + "=" + d + "]"), void 0 !== d ? (delete b[g], m(d) ? q(d[0]) ? (b[g] = d, v = !1) : DEFINE_HTML2JSON__DEBUG && t("Invalid dynamic attribute callback value! [" + g + "=" + d + "]") : null !== d && "" !== d && 
                    (b[p] = d)) : v = !1);
                  }
                  0 === Object.keys(b).length && e.splice(c, 1);
                }
                n(e);
              }
            } else {
              DEFINE_HTML2JSON__DEBUG && t("Not html.json! [" + e + "]");
            }
        }
      }
      function n(e) {
        for (var b = A(e), g; b < e.length; ++b) {
          g = e[b], u(g) || (m(g) ? -1 === h(g, e, b) && --b : DEFINE_HTML2JSON__DEBUG && t("Invalid html.json! [" + g + "]"));
        }
      }
      var t = k || function() {
      }, D = !1, v = !0;
      if (m(a)) {
        return h(a, null, 0), D && B(a), v;
      }
      DEFINE_HTML2JSON__DEBUG && t("Invalid html.json document!");
    };
    DEFINE_HTML2JSON__EXPORT_JSON2JSON && (module.exports = l, l.DOCUMENT_NODE = HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE, l.DOCUMENT_FRAGMENT_NODE = HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, l.ELEMENT_NODE = HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE, l.TEXT_NODE = HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, l.COMMENT_NODE = HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE, l.CONDITIONAL_COMMENT_HIDE_LOWER = HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER, l.CONDITIONAL_COMMENT_SHOW_LOWER = HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER, 
    l.PROCESSING_INSTRUCTION = HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION);
  })();
})();

