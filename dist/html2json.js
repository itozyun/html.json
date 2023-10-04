var DEFINE_HTML2JSON__EXPORT_JSON2HTML = !1, DEFINE_HTML2JSON__EXPORT_JSON2JSON = !1, DEFINE_HTML2JSON__DEBUG = !0, DEFINE_HTML2JSON__USE_XML_NS = !0, HTML_JSON_TYPE_DOCUMENT_NODE = 0, HTML_JSON_TYPE_DOCUMENT_FRAGMENT_NODE = 1, HTML_JSON_TYPE_ELEMENT_NODE = 2, HTML_JSON_TYPE_TEXT_NODE = 3, HTML_JSON_TYPE_COMMENT_NODE = 4, HTML_JSON_TYPE_CONDITIONAL_COMMENT_HIDE_LOWER = 5, HTML_JSON_TYPE_CONDITIONAL_COMMENT_SHOW_LOWER = 6, HTML_JSON_TYPE_PROCESSING_INSTRUCTION = 7;
(function(T) {
  var v;
  (function() {
    function D(n) {
      return "" + n === n || n === n - 0;
    }
    var N = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, O = require("happy-dom").Window, P = {script:!0, style:!0, textarea:!0}, q = !1;
    v = function(n, h, p) {
      function w(b, c, e, f) {
        var a = b.data;
        switch(b.nodeType) {
          case 1:
            f = {};
            var l = b.tagName.toLowerCase(), E = "pre" === l, z = b.childNodes, d = b.attributes, r = d.length, F, G = "";
            a = 0;
            for (F = r; a < F; ++a) {
              var g = d.item(a);
              var t = g.name;
              g = N[t] ? 1 : H(g.value);
              "id" === t ? (l += "#" + g, --r) : "class" === t ? (G = "." + g, --r) : (":" === t.charAt(0) ? (g = I(g), g = g.args ? [g.name, g.args] : g.name) : g === "" + parseInt(g, 10) && (g = parseInt(g, 10)), f[t] = g);
            }
            l += G;
            if (E && A) {
              for (; d = J(b);) {
                if (K(d.data)) {
                  for (a = d.data; "\n" === a.charAt(0);) {
                    a = a.substr(1);
                  }
                  d.data = a;
                  break;
                } else {
                  d.remove();
                }
              }
              for (; d = L(b);) {
                if (K(d.data)) {
                  for (a = d.data; "\n" === a.charAt(a.length - 1);) {
                    a = a.substr(0, a.length - 1);
                  }
                  d.data = a;
                  break;
                } else {
                  d.remove();
                }
              }
            }
            if ("noscript" === l) {
              q = !0, d = v(z[0].data, "body>*", u), q = !1;
            } else {
              for (d = [], a = 0; a < z.length; ++a) {
                w(z[a], d, E || e, P[l]);
              }
            }
            1 === d.length && D(d[0]) && (d = d[0]);
            d.length || d === d - 0 ? r ? c.push([l, f, d]) : c.push([l, d]) : r ? c.push([l, f]) : c.push([l]);
            break;
          case 3:
            if (!e && A) {
              if (f) {
                a = B(a, "\n");
              } else {
                a = a.split("\t").join(" ");
                Q && (l = "\n" === a.charAt(0) && !a.split("\n").pop().split(" ").join(""));
                for (a = a.split("\n").join(" "); 0 <= a.indexOf("  ");) {
                  a = a.split("  ").join(" ");
                }
                l && (a = B(a, " "));
                a = a.split("\\u0020").join(" ");
              }
            }
            if (a) {
              b = c.push;
              e = a;
              if (f = "" + e === e) {
                e = +e, f = e === e - 0;
              }
              b.call(c, f ? +a : H(a));
            }
            break;
          case 8:
            if (0 === a.indexOf("?") && "?" === a.charAt(a.length - 1)) {
              g = I(x(a, "?", "?")), g.args ? c.push([HTML_JSON_TYPE_PROCESSING_INSTRUCTION, g.name, g.args]) : c.push([HTML_JSON_TYPE_PROCESSING_INSTRUCTION, g.name]);
            } else if (0 === a.indexOf("[if") && 0 < a.indexOf("<![endif]")) {
              q = !0, d = v(x(a, ">", "<![endif]"), "body>*", u), q = !1, d.length && c.push([HTML_JSON_TYPE_CONDITIONAL_COMMENT_HIDE_LOWER, x(a, "[", "]"), d]);
            } else if (0 === a.indexOf("[if") && 0 < a.indexOf("><!")) {
              for (d = []; f = b.nextSibling;) {
                if (8 === f.nodeType && "<![endif]" === f.data) {
                  f.remove();
                  break;
                }
                w(f, d, e, !1);
                f.remove();
              }
              d.length && c.push([HTML_JSON_TYPE_CONDITIONAL_COMMENT_SHOW_LOWER, x(a, "[", "]"), d]);
            } else {
              R && c.push([HTML_JSON_TYPE_COMMENT_NODE, a]);
            }
            break;
          case 10:
            var C = n.substr(0, n.indexOf(">", n.indexOf("<!DOCTYPE ")) + 1).split("\n").join(" ").split("  ").join(" ").split("> <").join(">\n<");
            c.push(HTML_JSON_TYPE_DOCUMENT_NODE, C, C = []);
        }
        return C || c;
      }
      function I(b) {
        var c = b.indexOf(M), e = B(-1 === c ? b : b.substr(0, c), " ");
        b = -1 === c ? [] : JSON.parse("[" + b.substring(c + M.length, b.lastIndexOf(S)) + "]");
        return 1 === b.length ? {name:e, args:b[0]} : b.length ? {name:e, args:b} : {name:e};
      }
      function H(b) {
        return b.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;").split("&amp;").join("&").split("&lt;").join("<").split("&gt;").join(">");
      }
      function x(b, c, e) {
        c = b.indexOf(c) + c.length;
        e = b.indexOf(e, c);
        return b.substring(c, e);
      }
      function J(b) {
        b = b.childNodes;
        for (var c = 0, e = b.length, f; c < e; ++c) {
          if (f = b[c], 1 === f.nodeType && (f = J(f)), f && 3 === f.nodeType) {
            return f;
          }
        }
      }
      function L(b) {
        b = b.childNodes;
        for (var c = b.length, e; c;) {
          if (e = b[--c], 1 === e.nodeType && (e = L(e)), e && 3 === e.nodeType) {
            return e;
          }
        }
      }
      function K(b) {
        return b.split("\n").join("").split(" ").join("").split("\t").join("");
      }
      function B(b, c) {
        for (; b.charAt(0) === c;) {
          b = b.substr(1);
        }
        for (; b.charAt(b.length - 1) === c;) {
          b = b.substr(0, b.length - 1);
        }
        return b;
      }
      var m = [], y = m, k = "string" === typeof h ? h : "", u = h && "object" === typeof h ? h : p || {}, A = u.trimWhitespace, R = !!u.keepCommnets;
      h = u.argumentBrackets || "()";
      var M = h.substr(0, h.length / 2), S = h.substr(h.length), Q = "agressive" === A;
      p = (new O()).document;
      h = 0;
      p.write(n);
      k || p.doctype || (k = "body>*");
      if (k) {
        k = p.querySelectorAll(k);
        for (p = k.length; h < p; ++h) {
          y = w(k[h], y, !1, !1);
        }
        return q ? 1 === m.length ? m[0] : m : 1 < m.length ? [HTML_JSON_TYPE_DOCUMENT_FRAGMENT_NODE, m] : D(m[0]) ? [HTML_JSON_TYPE_TEXT_NODE, m[0]] : m.length ? m[0] : [HTML_JSON_TYPE_COMMENT_NODE, ""];
      }
      for (k = p.firstChild; k;) {
        y = w(k, y, !1, !1), k = k.nextSibling;
      }
      return m;
    };
    module.exports = v;
  })();
})(void 0);

