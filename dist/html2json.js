var DEFINE_HTML2JSON__EXPORT_JSON2HTML = !1, DEFINE_HTML2JSON__EXPORT_JSON2JSON = !1, DEFINE_HTML2JSON__DEBUG = !0, DEFINE_HTML2JSON__USE_XML_NS = !0, HTML_JSON_TYPE_DOCUMENT_NODE = 0, HTML_JSON_TYPE_DOCUMENT_FRAGMENT_NODE = 1, HTML_JSON_TYPE_ELEMENT_NODE = 2, HTML_JSON_TYPE_TEXT_NODE = 3, HTML_JSON_TYPE_COMMENT_NODE = 4, HTML_JSON_TYPE_CONDITIONAL_COMMENT_HIDE_LOWER = 5, HTML_JSON_TYPE_CONDITIONAL_COMMENT_SHOW_LOWER = 6, HTML_JSON_TYPE_PROCESSING_INSTRUCTION = 7;
(function(U) {
  function C(n) {
    return "" + n === n || n === n - 0;
  }
  var O = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, P = require("happy-dom").Window, Q = {script:!0, style:!0, textarea:!0, noscript:!0}, y = !1;
  var M = function(n, h, p) {
    function u(a, c, e, d) {
      var b = a.data;
      switch(a.nodeType) {
        case 1:
          var l = {};
          d = [];
          var q = a.tagName.toLowerCase(), D = "pre" === q, E = a.childNodes;
          b = a.attributes;
          var r = b.length, F, G = "";
          var g = 0;
          for (F = r; g < F; ++g) {
            var f = b.item(g);
            var t = f.name;
            f = O[t] ? 1 : H(f.value);
            "id" === t ? (q += "#" + f, --r) : "class" === t ? (G = "." + f, --r) : (":" === t.charAt(0) ? (f = I(f), f = f.args ? [f.name, f.args] : f.name) : f === "" + parseInt(f, 10) && (f = parseInt(f, 10)), l[t] = f);
          }
          q += G;
          if (D && z) {
            for (; g = J(a);) {
              if (K(g.data)) {
                for (b = g.data; "\n" === b.charAt(0);) {
                  b = b.substr(1);
                }
                g.data = b;
                break;
              } else {
                g.remove();
              }
            }
            for (; g = L(a);) {
              if (K(g.data)) {
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
          for (g = 0; g < E.length; ++g) {
            u(E[g], d, D || e, Q[q]);
          }
          1 === d.length && C(d[0]) && (d = d[0]);
          r && (d.length || d === d - 0) ? c.push([q, l, d]) : r ? c.push([q, l]) : d.length || d === d - 0 ? c.push([q, d]) : c.push([q]);
          break;
        case 3:
          if (!e && z) {
            if (d) {
              b = A(b, "\n");
            } else {
              b = b.split("\t").join(" ");
              R && (l = "\n" === b.charAt(0) && !b.split("\n").pop().split(" ").join(""));
              for (b = b.split("\n").join(" "); 0 <= b.indexOf("  ");) {
                b = b.split("  ").join(" ");
              }
              l && (b = A(b, " "));
              b = b.split("\\u0020").join(" ");
            }
          }
          if (b) {
            a = c.push;
            e = b;
            if (d = "" + e === e) {
              e = +e, d = e === e - 0;
            }
            a.call(c, d ? +b : H(b));
          }
          break;
        case 8:
          if (0 === b.indexOf("?") && "?" === b.charAt(b.length - 1)) {
            f = I(v(b, "?", "?")), f.args ? c.push([HTML_JSON_TYPE_PROCESSING_INSTRUCTION, f.name, f.args]) : c.push([HTML_JSON_TYPE_PROCESSING_INSTRUCTION, f.name]);
          } else if (0 === b.indexOf("[if") && 0 < b.indexOf("<![endif]")) {
            y = !0, d = M(v(b, ">", "<![endif]"), "body>*", w), y = !1, d.length && c.push([HTML_JSON_TYPE_CONDITIONAL_COMMENT_HIDE_LOWER, v(b, "[", "]"), d]);
          } else if (0 === b.indexOf("[if") && 0 < b.indexOf("><!")) {
            for (d = []; l = a.nextSibling;) {
              if (8 === l.nodeType && "<![endif]" === l.data) {
                l.remove();
                break;
              }
              u(l, d, e, !1);
              l.remove();
            }
            d.length && c.push([HTML_JSON_TYPE_CONDITIONAL_COMMENT_SHOW_LOWER, v(b, "[", "]"), d]);
          } else {
            S && c.push([HTML_JSON_TYPE_COMMENT_NODE, b]);
          }
          break;
        case 10:
          var B = n.substr(0, n.indexOf(">", n.indexOf("<!DOCTYPE ")) + 1).split("\n").join(" ").split("  ").join(" ").split("> <").join(">\n<");
          c.push(HTML_JSON_TYPE_DOCUMENT_NODE, B, B = []);
      }
      return B || c;
    }
    function I(a) {
      var c = a.indexOf(N), e = A(-1 === c ? a : a.substr(0, c), " ");
      a = -1 === c ? [] : JSON.parse("[" + a.substring(c + N.length, a.lastIndexOf(T)) + "]");
      return 1 === a.length ? {name:e, args:a[0]} : a.length ? {name:e, args:a} : {name:e};
    }
    function H(a) {
      return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;").split("&amp;").join("&").split("&lt;").join("<").split("&gt;").join(">");
    }
    function v(a, c, e) {
      c = a.indexOf(c) + c.length;
      e = a.indexOf(e, c);
      return a.substring(c, e);
    }
    function J(a) {
      a = a.childNodes;
      for (var c = 0, e = a.length, d; c < e; ++c) {
        if (d = a[c], 1 === d.nodeType && (d = J(d)), d && 3 === d.nodeType) {
          return d;
        }
      }
    }
    function L(a) {
      a = a.childNodes;
      for (var c = a.length, e; c;) {
        if (e = a[--c], 1 === e.nodeType && (e = L(e)), e && 3 === e.nodeType) {
          return e;
        }
      }
    }
    function K(a) {
      return a.split("\n").join("").split(" ").join("").split("\t").join("");
    }
    function A(a, c) {
      for (; a.charAt(0) === c;) {
        a = a.substr(1);
      }
      for (; a.charAt(a.length - 1) === c;) {
        a = a.substr(0, a.length - 1);
      }
      return a;
    }
    var m = [], x = m, k = "string" === typeof h ? h : "", w = h && "object" === typeof h ? h : p || {}, z = w.trimWhitespace, S = !!w.keepCommnets;
    h = w.argumentBrackets || "()";
    var N = h.substr(0, h.length / 2), T = h.substr(h.length), R = "agressive" === z;
    p = (new P()).document;
    h = 0;
    p.write(n);
    k || p.doctype || (k = "body>*");
    if (k) {
      k = p.querySelectorAll(k);
      for (p = k.length; h < p; ++h) {
        x = u(k[h], x, !1, !1);
      }
      return y ? 1 === m.length ? m[0] : m : 1 < m.length ? [HTML_JSON_TYPE_DOCUMENT_FRAGMENT_NODE, m] : C(m[0]) ? [HTML_JSON_TYPE_TEXT_NODE, m[0]] : m.length ? m[0] : [HTML_JSON_TYPE_COMMENT_NODE, ""];
    }
    for (k = p.firstChild; k;) {
      x = u(k, x, !1, !1), k = k.nextSibling;
    }
    return m;
  };
  module.exports = M;
})(void 0);

