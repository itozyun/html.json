var DEFINE_HTML2JSON__EXPORT_JSON2HTML = !1, DEFINE_HTML2JSON__EXPORT_JSON2JSON = !0, DEFINE_HTML2JSON__DEBUG = !0, DEFINE_HTML2JSON__USE_XML_NS = !0, DEFINE_HTML2JSON__USE_XHTML = !0, DEFINE_INSTRUCTION_ATTR_PREFIX = ":", HTML_DOT_JSON__NODE_TYPE = {DOCUMENT_NODE:0, DOCUMENT_FRAGMENT_NODE:1, ELEMENT_NODE:2, TEXT_NODE:3, COMMENT_NODE:4, CONDITIONAL_COMMENT_HIDE_LOWER:5, CONDITIONAL_COMMENT_SHOW_LOWER:6, PROCESSING_INSTRUCTION:7};
(function() {
  var m;
  (function() {
    function n(a) {
      return a && a.pop === [].pop;
    }
    function q(a) {
      return "" + a === a;
    }
    function y(a) {
      return a === a - 0;
    }
    function u(a) {
      return q(a) || y(a);
    }
    function z(a) {
      return q(a) && y(+a) && y(parseInt(a, 10)) ? +a : a;
    }
    function A(a) {
      return u(a) ? HTML_DOT_JSON__NODE_TYPE.TEXT_NODE : n(a) ? q(a[0]) ? HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE : a[0] : -1;
    }
    function B(a) {
      return !n(a) && a && "object" === typeof a;
    }
    function C(a) {
      var h = a[0], f = A(a) === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE, k = h === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE ? 2 : 1;
      return f ? B(a[k]) ? k + 1 : k : h === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE ? 1 : 2;
    }
    function D(a) {
      var h = C(a), f = "", k;
      if (h < a.length) {
        for (k = h; k < a.length;) {
          h = a[k];
          var v = A(h);
          v === HTML_DOT_JSON__NODE_TYPE.TEXT_NODE ? (f = u(h) ? f + h : f + h[1], a.splice(k, 1)) : (f && (a.splice(k, 0, z(f)), f = ""), ++k, v === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE && D(h));
        }
        f && (a[k] = z(f));
      }
    }
    m = function(a, h, f, k) {
      function v(b, d, g) {
        var p = b[0], r = b[1], c = 1, e = p;
        switch(p) {
          case HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE:
            w(b);
            break;
          case HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE:
            w(b);
            break;
          case HTML_DOT_JSON__NODE_TYPE.TEXT_NODE:
            break;
          case HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE:
            if (!G && d) {
              return d.splice(g, 1), -1;
            }
            break;
          case HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER:
            w(b);
            break;
          case HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER:
            w(b);
            break;
          case HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION:
            c = b[1];
            var l = b.slice(2);
            c = l.length ? h(c, l) : h(c);
            void 0 !== c && null !== c && "" !== c && (u(c) ? d ? d.splice(g, 1, c) : (b.length = 0, b.push(HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, b)) : n(c) && (c[0] === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE ? d ? (c.shift(), c.unshift(g, 1), d.splice.apply(d, c)) : (b.length = 0, b.push.apply(b, c)) : n(c[0]) ? d ? (c.unshift(g, 1), d.splice.apply(d, c)) : (b.length = 0, b.push(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE), b.push.apply(b, c)) : d ? d.splice(g, 1, c) : (b.length = 0, 
            b.push(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, c))));
            if (void 0 !== c) {
              E = !0;
              if (null === c || "" === c) {
                return d ? d.splice(g, 1) : (a.length = 0, a.push(HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE, "")), -1;
              }
              if (!u(c)) {
                if (n(c)) {
                  return -1;
                }
                DEFINE_HTML2JSON__DEBUG && t("PROCESSING_INSTRUCTION Error! [" + JSON.stringify(b) + "]");
              }
            } else {
              x = !1;
            }
            break;
          case HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE:
            e = r, c = 2;
          default:
            if (q(e)) {
              if (1 + c <= b.length) {
                d = b[c];
                if (B(d)) {
                  for (l in d) {
                    if (g = l, e = d[l], (p = 0 === l.indexOf(F)) && (l = l.substr(F.length)), "className" === l && (l = "class"), p) {
                      p = h;
                      r = l;
                      var H = t;
                      n(e) && q(e[0]) ? (r = e[0], e = e.slice(1), e = e.length ? p(r, e) : p(r)) : q(e) ? e = p(e) : DEFINE_HTML2JSON__DEBUG && H("Invalid InstructionAttr value! [" + r + "=" + e + "]");
                      void 0 !== e ? (delete d[g], n(e) ? q(e[0]) ? (d[g] = e, x = !1) : DEFINE_HTML2JSON__DEBUG && t("Invalid dynamic attribute callback value! [" + g + "=" + e + "]") : null !== e && "" !== e && (d[l] = e)) : x = !1;
                    }
                  }
                  0 === Object.keys(d).length && b.splice(c, 1);
                }
                w(b);
              }
            } else {
              DEFINE_HTML2JSON__DEBUG && t("Not html.json! [" + b + "]");
            }
        }
      }
      function w(b) {
        for (var d = C(b), g; d < b.length; ++d) {
          g = b[d], u(g) || (n(g) ? -1 === v(g, b, d) && --d : DEFINE_HTML2JSON__DEBUG && t("Invalid html.json! [" + g + "]"));
        }
      }
      var t = "function" === typeof f ? f : function(b) {
      };
      f = f && "object" === typeof f ? f : k || {};
      var G = !!f.keepComments, F = f.instructionAttrPrefix || DEFINE_INSTRUCTION_ATTR_PREFIX, E = !1, x = !0;
      if (n(a)) {
        return v(a, null, 0), E && D(a), x;
      }
      DEFINE_HTML2JSON__DEBUG && t("Invalid html.json document!");
    };
    DEFINE_HTML2JSON__EXPORT_JSON2JSON && (module.exports = m, m.DOCUMENT_NODE = HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE, m.DOCUMENT_FRAGMENT_NODE = HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, m.ELEMENT_NODE = HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE, m.TEXT_NODE = HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, m.COMMENT_NODE = HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE, m.CONDITIONAL_COMMENT_HIDE_LOWER = HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER, m.CONDITIONAL_COMMENT_SHOW_LOWER = HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER, 
    m.PROCESSING_INSTRUCTION = HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION);
  })();
})();

