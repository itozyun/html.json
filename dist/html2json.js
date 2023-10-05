var DEFINE_HTML2JSON__EXPORT_JSON2HTML = !1, DEFINE_HTML2JSON__EXPORT_JSON2JSON = !1, DEFINE_HTML2JSON__DEBUG = !0, DEFINE_HTML2JSON__USE_XML_NS = !0, DEFINE_HTML2JSON__USE_XHTML = !0, HTML_JSON_TYPE_DOCUMENT_NODE = 0, HTML_JSON_TYPE_DOCUMENT_FRAGMENT_NODE = 1, HTML_JSON_TYPE_ELEMENT_NODE = 2, HTML_JSON_TYPE_TEXT_NODE = 3, HTML_JSON_TYPE_COMMENT_NODE = 4, HTML_JSON_TYPE_CONDITIONAL_COMMENT_HIDE_LOWER = 5, HTML_JSON_TYPE_CONDITIONAL_COMMENT_SHOW_LOWER = 6, HTML_JSON_TYPE_PROCESSING_INSTRUCTION = 7;
(function(U) {
  var z;
  (function() {
    function E(k) {
      return "" + k === k || k === k - 0;
    }
    function u(k) {
      var h;
      if (h = "" + k === k) {
        k = +k, h = k === k - 0;
      }
      return h;
    }
    var O = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, P = require("happy-dom").Window, Q = {script:!0, style:!0, textarea:!0}, A = !1, B = !1;
    z = function(k, h, m) {
      function v(a, c, d, e) {
        var b = a.data;
        switch(a.nodeType) {
          case 1:
            var g = {};
            e = a.tagName.toLowerCase();
            var n = "pre" === e;
            var F = a.childNodes, G = a.attributes, w = G.length, H, I = "";
            b = 0;
            for (H = w; b < H; ++b) {
              var f = G.item(b);
              var t = f.name;
              var p = O[t] ? 1 : f.value;
              "id" === t ? (e += "#" + p, --w) : "class" === t ? (I = "." + p, --w) : (":" === t.charAt(0) ? (f = J(p), f.args ? (p = [f.name], p.push.apply(f.args)) : p = f.name) : u(p) && (p = +p), g[t] = p);
            }
            e += I;
            if (n && r) {
              for (; f = K(a);) {
                if (L(f.data)) {
                  for (b = f.data; "\n" === b.charAt(0);) {
                    b = b.substr(1);
                  }
                  f.data = b;
                  break;
                } else {
                  f.remove();
                }
              }
              for (; f = M(a);) {
                if (L(f.data)) {
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
            g = w ? [e, g] : [e];
            for (b = 0; b < F.length; ++b) {
              v(F[b], g, n || d, Q[e]);
            }
            C(g);
            c.push(g);
            break;
          case 3:
            if (!d && r) {
              if (e) {
                b = D(b, "\n");
              } else {
                b = b.split("\t").join(" ");
                R && (n = "\n" === b.charAt(0) && !b.split("\n").pop().split(" ").join(""));
                for (b = b.split("\n").join(" "); 0 <= b.indexOf("  ");) {
                  b = b.split("  ").join(" ");
                }
                n && (b = D(b, " "));
                b = b.split("\\u0020").join(" ");
              }
            }
            b && c.push(u(b) ? +b : b);
            break;
          case 8:
            if (0 === b.indexOf("?") && "?" === b.charAt(b.length - 1)) {
              f = J(x(b, "?", "?", !0)), g = [HTML_JSON_TYPE_PROCESSING_INSTRUCTION, f.name], f.args && g.push.apply(g, f.args), c.push(g);
            } else if (0 === b.indexOf("[if") && 0 < b.indexOf("<![endif]")) {
              if (A = !0, B = d, a = z(x(b, ">", "<![endif]", !0), y), A = B = !1, a.length || a === a - 0) {
                g = [HTML_JSON_TYPE_CONDITIONAL_COMMENT_HIDE_LOWER, x(b, "[", "]", !1)], a && a.pop === [].pop ? g.push.apply(g, a) : g.push(a), c.push(g);
              }
            } else if (0 === b.indexOf("[if") && 0 < b.indexOf("><!")) {
              for (g = [HTML_JSON_TYPE_CONDITIONAL_COMMENT_SHOW_LOWER, x(b, "[", "]", !1)]; n = a.nextSibling;) {
                if (8 === n.nodeType && "<![endif]" === n.data) {
                  n.remove();
                  break;
                }
                v(n, g, d, e);
                n.remove();
              }
              C(g);
              2 < g.length && c.push(g);
            } else {
              S && c.push([HTML_JSON_TYPE_COMMENT_NODE, b]);
            }
            break;
          case 10:
            a = k.substr(0, k.indexOf(">", k.indexOf("<!DOCTYPE ")) + 1), r && (a = a.split("\n").join(" ").split("  ").join(" ").split("> <").join(">\n<")), c.push(HTML_JSON_TYPE_DOCUMENT_NODE, a);
        }
      }
      function J(a) {
        var c = a.indexOf(N), d = D(-1 === c ? a : a.substr(0, c), " ");
        a = -1 === c ? [] : JSON.parse("[" + a.substring(c + N.length, a.lastIndexOf(T)) + "]");
        return a.length ? {name:d, args:a} : {name:d};
      }
      function x(a, c, d, e) {
        c = a.indexOf(c) + c.length;
        d = e ? a.lastIndexOf(d) : a.indexOf(d, c);
        return a.substring(c, d);
      }
      function K(a) {
        a = a.childNodes;
        for (var c = 0, d = a.length, e; c < d; ++c) {
          if (e = a[c], 1 === e.nodeType && (e = K(e)), e && 3 === e.nodeType) {
            return e;
          }
        }
      }
      function M(a) {
        a = a.childNodes;
        for (var c = a.length, d; c;) {
          if (d = a[--c], 1 === d.nodeType && (d = M(d)), d && 3 === d.nodeType) {
            return d;
          }
        }
      }
      function L(a) {
        return a.split("\n").join("").split(" ").join("").split("\t").join("");
      }
      function D(a, c) {
        for (; a.charAt(0) === c;) {
          a = a.substr(1);
        }
        for (; a.charAt(a.length - 1) === c;) {
          a = a.substr(0, a.length - 1);
        }
        return a;
      }
      function C(a) {
        var c = a[0], d = c === HTML_JSON_TYPE_ELEMENT_NODE ? 2 : 1;
        if (c === HTML_JSON_TYPE_ELEMENT_NODE || "" + c === c) {
          if (c = (c = a[d]) && "object" === typeof c) {
            c = a[d], c = !(c && c.pop === [].pop);
          }
          d = c ? d + 1 : d;
        } else {
          d = c === HTML_JSON_TYPE_DOCUMENT_FRAGMENT_NODE ? 1 : 2;
        }
        c = d;
        d = "";
        var e;
        if (c + 1 < a.length) {
          for (e = c; e < a.length;) {
            c = a[e], E(c) ? (d += c, a.splice(e, 1)) : (d && (a[e] = u(d) ? +d : d, d = ""), ++e);
          }
          d && (a[e] = u(d) ? +d : d);
        }
      }
      var q = [], l = "string" === typeof h ? h : "", y = h && "object" === typeof h ? h : m || {}, r = y.trimWhitespace, S = !!y.keepComments;
      h = y.argumentBrackets || "()";
      var N = h.substr(0, h.length / 2), T = h.substr(h.length), R = "agressive" === r;
      m = (new P()).document;
      h = 0;
      r = "none" !== r && !1 !== r;
      m.write(k);
      if (l) {
        for (q.push(HTML_JSON_TYPE_DOCUMENT_FRAGMENT_NODE), l = m.querySelectorAll(l), m = l.length; h < m; ++h) {
          v(l[h], q, B || !1, !1);
        }
      } else {
        l = m.doctype;
        m.doctype || (l = m.body.firstChild);
        for (; l;) {
          v(l, q, !1, !1), l = l.nextSibling;
        }
        m.doctype || A || (E(q[0]) ? q.unshift(HTML_JSON_TYPE_DOCUMENT_FRAGMENT_NODE) : 1 === q.length && (q = q[0]));
      }
      C(q);
      return q;
    };
    module.exports = z;
  })();
})(void 0);

