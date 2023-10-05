var DEFINE_HTML2JSON__EXPORT_JSON2HTML = !1, DEFINE_HTML2JSON__EXPORT_JSON2JSON = !1, DEFINE_HTML2JSON__DEBUG = !0, DEFINE_HTML2JSON__USE_XML_NS = !0, DEFINE_HTML2JSON__USE_XHTML = !0, HTML_DOT_JSON__NODE_TYPE = {DOCUMENT_NODE:0, DOCUMENT_FRAGMENT_NODE:1, ELEMENT_NODE:2, TEXT_NODE:3, COMMENT_NODE:4, CONDITIONAL_COMMENT_HIDE_LOWER:5, CONDITIONAL_COMMENT_SHOW_LOWER:6, PROCESSING_INSTRUCTION:7};
(function() {
  var z;
  (function() {
    function u(g) {
      return g === g - 0;
    }
    function F(g) {
      return "" + g === g || u(g);
    }
    function G(g) {
      return "" + g === g && u(+g) && u(parseInt(g, 10));
    }
    function A(g) {
      return G(g) ? +g : g;
    }
    var Q = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, R = require("happy-dom").Window, S = {script:!0, style:!0, textarea:!0}, B = !1, C = !1;
    z = function(g, k, m) {
      function v(a, c, d, e) {
        var b = a.data;
        switch(a.nodeType) {
          case 1:
            var h = {};
            e = a.tagName.toLowerCase();
            var n = "pre" === e;
            var H = a.childNodes, I = a.attributes, w = I.length, J, K = "";
            b = 0;
            for (J = w; b < J; ++b) {
              var f = I.item(b);
              var t = f.name;
              var p = Q[t] ? 1 : f.value;
              "id" === t ? (e += "#" + p, --w) : "class" === t ? (K = "." + p, --w) : (":" === t.charAt(0) ? (f = L(p), f.args ? (p = [f.name], p.push.apply(f.args)) : p = f.name) : G(p) && (p = +p), h[t] = p);
            }
            e += K;
            if (n && r) {
              for (; f = M(a);) {
                if (N(f.data)) {
                  for (b = f.data; "\n" === b.charAt(0);) {
                    b = b.substr(1);
                  }
                  f.data = b;
                  break;
                } else {
                  f.remove();
                }
              }
              for (; f = O(a);) {
                if (N(f.data)) {
                  for (b = f.data; "\n" === b.charAt(b.length - 1);) {
                    b = b.substr(0, b.length - 1);
                  }
                  f.data = b;
                  break;
                } else {
                  f.remove();
                }
              }
            }
            h = w ? [e, h] : [e];
            for (b = 0; b < H.length; ++b) {
              v(H[b], h, n || d, S[e]);
            }
            D(h);
            c.push(h);
            break;
          case 3:
            if (!d && r) {
              if (e) {
                b = E(b, "\n");
              } else {
                b = b.split("\t").join(" ");
                T && (n = "\n" === b.charAt(0) && !b.split("\n").pop().split(" ").join(""));
                for (b = b.split("\n").join(" "); 0 <= b.indexOf("  ");) {
                  b = b.split("  ").join(" ");
                }
                n && (b = E(b, " "));
                b = b.split("\\u0020").join(" ");
              }
            }
            b && c.push(A(b));
            break;
          case 8:
            if (0 === b.indexOf("?") && "?" === b.charAt(b.length - 1)) {
              f = L(x(b, "?", "?", !0)), h = [HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION, f.name], f.args && h.push.apply(h, f.args), c.push(h);
            } else if (0 === b.indexOf("[if") && 0 < b.indexOf("<![endif]")) {
              if (B = !0, C = d, a = z(x(b, ">", "<![endif]", !0), y), B = C = !1, a.length || u(a)) {
                h = [HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER, x(b, "[", "]", !1)], a && a.pop === [].pop ? h.push.apply(h, a) : h.push(a), c.push(h);
              }
            } else if (0 === b.indexOf("[if") && 0 < b.indexOf("><!")) {
              for (h = [HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER, x(b, "[", "]", !1)]; n = a.nextSibling;) {
                if (8 === n.nodeType && "<![endif]" === n.data) {
                  n.remove();
                  break;
                }
                v(n, h, d, e);
                n.remove();
              }
              D(h);
              2 < h.length && c.push(h);
            } else {
              U && c.push([HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE, b]);
            }
            break;
          case 10:
            a = g.substr(0, g.indexOf(">", g.indexOf("<!DOCTYPE ")) + 1), r && (a = a.split("\n").join(" ").split("  ").join(" ").split("> <").join(">\n<")), c.push(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE, a);
        }
      }
      function L(a) {
        var c = a.indexOf(P), d = E(-1 === c ? a : a.substr(0, c), " ");
        a = -1 === c ? [] : JSON.parse("[" + a.substring(c + P.length, a.lastIndexOf(V)) + "]");
        return a.length ? {name:d, args:a} : {name:d};
      }
      function x(a, c, d, e) {
        c = a.indexOf(c) + c.length;
        d = e ? a.lastIndexOf(d) : a.indexOf(d, c);
        return a.substring(c, d);
      }
      function M(a) {
        a = a.childNodes;
        for (var c = 0, d = a.length, e; c < d; ++c) {
          if (e = a[c], 1 === e.nodeType && (e = M(e)), e && 3 === e.nodeType) {
            return e;
          }
        }
      }
      function O(a) {
        a = a.childNodes;
        for (var c = a.length, d; c;) {
          if (d = a[--c], 1 === d.nodeType && (d = O(d)), d && 3 === d.nodeType) {
            return d;
          }
        }
      }
      function N(a) {
        return a.split("\n").join("").split(" ").join("").split("\t").join("");
      }
      function E(a, c) {
        for (; a.charAt(0) === c;) {
          a = a.substr(1);
        }
        for (; a.charAt(a.length - 1) === c;) {
          a = a.substr(0, a.length - 1);
        }
        return a;
      }
      function D(a) {
        var c = a[0], d = c === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE ? 2 : 1;
        if (c === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE || "" + c === c) {
          if (c = (c = a[d]) && "object" === typeof c) {
            c = a[d], c = !(c && c.pop === [].pop);
          }
          d = c ? d + 1 : d;
        } else {
          d = c === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE ? 1 : 2;
        }
        c = d;
        d = "";
        var e;
        if (c + 1 < a.length) {
          for (e = c; e < a.length;) {
            c = a[e], F(c) ? (d += c, a.splice(e, 1)) : (d && (a[e] = A(d), d = ""), ++e);
          }
          d && (a[e] = A(d));
        }
      }
      var q = [], l = "string" === typeof k ? k : "", y = k && "object" === typeof k ? k : m || {}, r = y.trimWhitespace, U = !!y.keepComments;
      k = y.argumentBrackets || "()";
      var P = k.substr(0, k.length / 2), V = k.substr(k.length), T = "agressive" === r;
      m = (new R()).document;
      k = 0;
      r = "none" !== r && !1 !== r;
      m.write(g);
      if (l) {
        for (q.push(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE), l = m.querySelectorAll(l), m = l.length; k < m; ++k) {
          v(l[k], q, C || !1, !1);
        }
      } else {
        l = m.doctype;
        m.doctype || (l = m.body.firstChild);
        for (; l;) {
          v(l, q, !1, !1), l = l.nextSibling;
        }
        m.doctype || B || (F(q[0]) ? q.unshift(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE) : 1 === q.length && (q = q[0]));
      }
      D(q);
      return q;
    };
    module.exports = z;
  })();
})();

