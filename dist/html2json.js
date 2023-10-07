var DEFINE_HTML2JSON__EXPORT_JSON2HTML = !1, DEFINE_HTML2JSON__EXPORT_JSON2JSON = !1, DEFINE_HTML2JSON__DEBUG = !0, DEFINE_HTML2JSON__USE_XML_NS = !0, DEFINE_HTML2JSON__USE_XHTML = !0, DEFINE_INSTRUCTION_ATTR_PREFIX = ":", HTML_DOT_JSON__NODE_TYPE = {DOCUMENT_NODE:0, DOCUMENT_FRAGMENT_NODE:1, ELEMENT_NODE:2, TEXT_NODE:3, COMMENT_NODE:4, CONDITIONAL_COMMENT_HIDE_LOWER:5, CONDITIONAL_COMMENT_SHOW_LOWER:6, PROCESSING_INSTRUCTION:7};
(function() {
  var A;
  (function() {
    function x(c) {
      return c === c - 0;
    }
    function B(c) {
      return "" + c === c || x(c);
    }
    function C(c) {
      return c === "" + +c && x(parseInt(c, 10)) ? +c : c;
    }
    function G(c) {
      if (B(c)) {
        c = HTML_DOT_JSON__NODE_TYPE.TEXT_NODE;
      } else {
        if (c && c.pop === [].pop) {
          var d = c[0];
          c = "" + d === d ? HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE : c[0];
        } else {
          c = -1;
        }
      }
      return c;
    }
    function H(c) {
      var d = c[0];
      var m = G(c) === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE, h = d === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE ? 2 : 1;
      h = m ? (d = c[h]) && d.pop === [].pop || !d || "object" !== typeof d ? h : h + 1 : d === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE ? 1 : 2;
      d = h;
      h = "";
      var q;
      if (d < c.length) {
        for (q = d; q < c.length;) {
          d = c[q], m = G(d), m === HTML_DOT_JSON__NODE_TYPE.TEXT_NODE ? (h = B(d) ? h + d : h + d[1], c.splice(q, 1)) : (h && (c.splice(q, 0, C(h)), h = ""), ++q, m === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE && H(d));
        }
        h && (c[q] = C(h));
      }
    }
    var Q = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, R = require("happy-dom").Window, S = {script:!0, style:!0, textarea:!0}, D = !1, E = !1;
    A = function(c, d, m) {
      function h(a, e, f, k) {
        var b = a.data;
        switch(a.nodeType) {
          case 1:
            var l = {};
            k = a.tagName.toLowerCase();
            var r = "pre" === k;
            var I = a.childNodes, J = a.attributes, y = J.length, K, L = "";
            b = 0;
            for (K = y; b < K; ++b) {
              var g = J.item(b);
              var w = g.name;
              var n = Q[w] ? 1 : g.value;
              "id" === w ? (k += "#" + n, --y) : "class" === w ? (L = "." + n, --y) : (0 === w.indexOf(T) ? (g = q(n), g.args ? (n = [g.name], n.push.apply(g.args)) : n = g.name) : n === "" + +n && x(parseInt(n, 10)) && (n = +n), l[w] = n);
            }
            k += L;
            if (r && u) {
              for (; g = M(a);) {
                if (N(g.data)) {
                  for (b = g.data; "\n" === b.charAt(0);) {
                    b = b.substr(1);
                  }
                  g.data = b;
                  break;
                } else {
                  g.remove();
                }
              }
              for (; g = O(a);) {
                if (N(g.data)) {
                  for (b = g.data; "\n" === b.charAt(b.length - 1);) {
                    b = b.substr(0, b.length - 1);
                  }
                  g.data = b;
                  break;
                } else {
                  g.remove();
                }
              }
            }
            l = y ? [k, l] : [k];
            for (b = 0; b < I.length; ++b) {
              h(I[b], l, r || f, S[k]);
            }
            e.push(l);
            break;
          case 3:
            f || k || !U || (b = b.replace(/([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])\s([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])/g, "$1$2"));
            if (!f && u) {
              if (k) {
                b = F(b, "\n");
              } else {
                b = b.split("\t").join(" ");
                V && (r = "\n" === b.charAt(0) && !b.split("\n").pop().split(" ").join(""));
                for (b = b.split("\n").join(" "); 0 <= b.indexOf("  ");) {
                  b = b.split("  ").join(" ");
                }
                r && (b = F(b, " "));
                b = b.split("\\u0020").join(" ");
              }
            }
            b && e.push(C(b));
            break;
          case 8:
            if (0 === b.indexOf("?") && "?" === b.charAt(b.length - 1)) {
              g = q(z(b, "?", "?", !0)), l = [HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION, g.name], g.args && l.push.apply(l, g.args), e.push(l);
            } else if (0 === b.indexOf("[if") && 0 < b.indexOf("<![endif]")) {
              if (D = !0, E = f, a = A(z(b, ">", "<![endif]", !0), v), D = E = !1, a.length || x(a)) {
                l = [HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER, z(b, "[", "]", !1)], a && a.pop === [].pop ? l.push.apply(l, a) : l.push(a), e.push(l);
              }
            } else if (0 === b.indexOf("[if") && 0 < b.indexOf("><!")) {
              for (l = [HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER, z(b, "[", "]", !1)]; r = a.nextSibling;) {
                if (8 === r.nodeType && "<![endif]" === r.data) {
                  r.remove();
                  break;
                }
                h(r, l, f, k);
                r.remove();
              }
              2 < l.length && e.push(l);
            } else {
              W && e.push([HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE, b]);
            }
            break;
          case 10:
            a = c.substr(0, c.indexOf(">", c.indexOf("<!DOCTYPE ")) + 1), u && (a = a.split("\n").join(" ").split("  ").join(" ").split("> <").join(">\n<")), e.push(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE, a);
        }
      }
      function q(a) {
        var e = a.indexOf(P), f = F(-1 === e ? a : a.substr(0, e), " ");
        a = -1 === e ? [] : JSON.parse("[" + a.substring(e + P.length, a.lastIndexOf(X)) + "]");
        return a.length ? {name:f, args:a} : {name:f};
      }
      function z(a, e, f, k) {
        e = a.indexOf(e) + e.length;
        f = k ? a.lastIndexOf(f) : a.indexOf(f, e);
        return a.substring(e, f);
      }
      function M(a) {
        a = a.childNodes;
        for (var e = 0, f = a.length, k; e < f; ++e) {
          if (k = a[e], 1 === k.nodeType && (k = M(k)), k && 3 === k.nodeType) {
            return k;
          }
        }
      }
      function O(a) {
        a = a.childNodes;
        for (var e = a.length, f; e;) {
          if (f = a[--e], 1 === f.nodeType && (f = O(f)), f && 3 === f.nodeType) {
            return f;
          }
        }
      }
      function N(a) {
        return a.split("\n").join("").split(" ").join("").split("\t").join("");
      }
      function F(a, e) {
        for (; a.charAt(0) === e;) {
          a = a.substr(1);
        }
        for (; a.charAt(a.length - 1) === e;) {
          a = a.substr(0, a.length - 1);
        }
        return a;
      }
      var t = [], p = "string" === typeof d ? d : "", v = d && "object" === typeof d ? d : m || {}, u = v.trimWhitespace, W = !!v.keepComments;
      d = v.argumentBrackets || "()";
      var P = d.substr(0, d.length / 2), X = d.substr(d.length), T = v.instructionAttrPrefix || DEFINE_INSTRUCTION_ATTR_PREFIX, V = "agressive" === u;
      m = (new R()).document;
      var U = !!v.removeLineBreaksBetweenFullWidth;
      d = 0;
      u = "none" !== u && !1 !== u;
      m.write(c);
      if (p) {
        for (t.push(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE), p = m.querySelectorAll(p), m = p.length; d < m; ++d) {
          h(p[d], t, E || !1, !1);
        }
      } else {
        p = m.firstChild;
        m.doctype || m.getElementsByTagName("head")[0].childNodes.length || (p = m.body.firstChild);
        for (; p;) {
          h(p, t, !1, !1), p = p.nextSibling;
        }
        m.doctype || D || (B(t[0]) ? t.unshift(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE) : 1 === t.length && (t = t[0]));
      }
      H(t);
      return t;
    };
    module.exports = A;
  })();
})();

