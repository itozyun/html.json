var DEFINE_HTML2JSON__EXPORT_JSON2HTML = !1, DEFINE_HTML2JSON__EXPORT_JSON2JSON = !1, DEFINE_HTML2JSON__DEBUG = !0, DEFINE_HTML2JSON__USE_XML_NS = !0, DEFINE_HTML2JSON__USE_XHTML = !0, HTML_JSON_TYPE_DOCUMENT_NODE = 0, HTML_JSON_TYPE_DOCUMENT_FRAGMENT_NODE = 1, HTML_JSON_TYPE_ELEMENT_NODE = 2, HTML_JSON_TYPE_TEXT_NODE = 3, HTML_JSON_TYPE_COMMENT_NODE = 4, HTML_JSON_TYPE_CONDITIONAL_COMMENT_HIDE_LOWER = 5, HTML_JSON_TYPE_CONDITIONAL_COMMENT_SHOW_LOWER = 6, HTML_JSON_TYPE_PROCESSING_INSTRUCTION = 7;
(function(T) {
  var z;
  (function() {
    function u(l) {
      return l === l - 0;
    }
    function M(l) {
      return "" + l === l || u(l);
    }
    var N = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, O = require("happy-dom").Window, P = {script:!0, style:!0, textarea:!0}, A = !1, B = !1;
    z = function(l, h, n) {
      function v(a, c, d, f) {
        var b = a.data;
        switch(a.nodeType) {
          case 1:
            var g = {};
            f = a.tagName.toLowerCase();
            var p = "pre" === f;
            var D = a.childNodes, E = a.attributes, w = E.length, F, G = "";
            b = 0;
            for (F = w; b < F; ++b) {
              var e = E.item(b);
              var t = e.name;
              var k = N[t] ? 1 : e.value;
              "id" === t ? (f += "#" + k, --w) : "class" === t ? (G = "." + k, --w) : (":" === t.charAt(0) ? (e = H(k), e.args ? (k = [e.name], k.push.apply(e.args)) : k = e.name) : "" + k === k && u(+k) && (k = +k), g[t] = k);
            }
            f += G;
            if (p && r) {
              for (; e = I(a);) {
                if (J(e.data)) {
                  for (b = e.data; "\n" === b.charAt(0);) {
                    b = b.substr(1);
                  }
                  e.data = b;
                  break;
                } else {
                  e.remove();
                }
              }
              for (; e = K(a);) {
                if (J(e.data)) {
                  for (b = e.data; "\n" === b.charAt(b.length - 1);) {
                    b = b.substr(0, b.length - 1);
                  }
                  e.data = b;
                  break;
                } else {
                  e.remove();
                }
              }
            }
            g = w ? [f, g] : [f];
            for (b = 0; b < D.length; ++b) {
              v(D[b], g, p || d, P[f]);
            }
            c.push(g);
            break;
          case 3:
            if (!d && r) {
              if (f) {
                b = C(b, "\n");
              } else {
                b = b.split("\t").join(" ");
                Q && (p = "\n" === b.charAt(0) && !b.split("\n").pop().split(" ").join(""));
                for (b = b.split("\n").join(" "); 0 <= b.indexOf("  ");) {
                  b = b.split("  ").join(" ");
                }
                p && (b = C(b, " "));
                b = b.split("\\u0020").join(" ");
              }
            }
            b && c.push("" + b === b && u(+b) ? +b : b);
            break;
          case 8:
            if (0 === b.indexOf("?") && "?" === b.charAt(b.length - 1)) {
              e = H(x(b, "?", "?", !0)), g = [HTML_JSON_TYPE_PROCESSING_INSTRUCTION, e.name], e.args && g.push.apply(g, e.args), c.push(g);
            } else if (0 === b.indexOf("[if") && 0 < b.indexOf("<![endif]")) {
              if (A = !0, B = d, a = z(x(b, ">", "<![endif]", !0), y), A = B = !1, a.length || u(a)) {
                g = [HTML_JSON_TYPE_CONDITIONAL_COMMENT_HIDE_LOWER, x(b, "[", "]", !1)], a && a.pop === [].pop ? g.push.apply(g, a) : g.push(a), c.push(g);
              }
            } else if (0 === b.indexOf("[if") && 0 < b.indexOf("><!")) {
              for (g = [HTML_JSON_TYPE_CONDITIONAL_COMMENT_SHOW_LOWER, x(b, "[", "]", !1)]; p = a.nextSibling;) {
                if (8 === p.nodeType && "<![endif]" === p.data) {
                  p.remove();
                  break;
                }
                v(p, g, d, f);
                p.remove();
              }
              2 < g.length && c.push(g);
            } else {
              R && c.push([HTML_JSON_TYPE_COMMENT_NODE, b]);
            }
            break;
          case 10:
            a = l.substr(0, l.indexOf(">", l.indexOf("<!DOCTYPE ")) + 1), r && (a = a.split("\n").join(" ").split("  ").join(" ").split("> <").join(">\n<")), c.push(HTML_JSON_TYPE_DOCUMENT_NODE, a);
        }
      }
      function H(a) {
        var c = a.indexOf(L), d = C(-1 === c ? a : a.substr(0, c), " ");
        a = -1 === c ? [] : JSON.parse("[" + a.substring(c + L.length, a.lastIndexOf(S)) + "]");
        return a.length ? {name:d, args:a} : {name:d};
      }
      function x(a, c, d, f) {
        c = a.indexOf(c) + c.length;
        d = f ? a.lastIndexOf(d) : a.indexOf(d, c);
        return a.substring(c, d);
      }
      function I(a) {
        a = a.childNodes;
        for (var c = 0, d = a.length, f; c < d; ++c) {
          if (f = a[c], 1 === f.nodeType && (f = I(f)), f && 3 === f.nodeType) {
            return f;
          }
        }
      }
      function K(a) {
        a = a.childNodes;
        for (var c = a.length, d; c;) {
          if (d = a[--c], 1 === d.nodeType && (d = K(d)), d && 3 === d.nodeType) {
            return d;
          }
        }
      }
      function J(a) {
        return a.split("\n").join("").split(" ").join("").split("\t").join("");
      }
      function C(a, c) {
        for (; a.charAt(0) === c;) {
          a = a.substr(1);
        }
        for (; a.charAt(a.length - 1) === c;) {
          a = a.substr(0, a.length - 1);
        }
        return a;
      }
      var q = [], m = "string" === typeof h ? h : "", y = h && "object" === typeof h ? h : n || {}, r = y.trimWhitespace, R = !!y.keepComments;
      h = y.argumentBrackets || "()";
      var L = h.substr(0, h.length / 2), S = h.substr(h.length), Q = "agressive" === r;
      n = (new O()).document;
      h = 0;
      r = "none" !== r && !1 !== r;
      n.write(l);
      if (m) {
        for (q.push(HTML_JSON_TYPE_DOCUMENT_FRAGMENT_NODE), m = n.querySelectorAll(m), n = m.length; h < n; ++h) {
          v(m[h], q, B || !1, !1);
        }
      } else {
        m = n.doctype;
        n.doctype || (m = n.body.firstChild);
        for (; m;) {
          v(m, q, !1, !1), m = m.nextSibling;
        }
        n.doctype || A || (M(q[0]) ? q.unshift(HTML_JSON_TYPE_DOCUMENT_FRAGMENT_NODE) : 1 === q.length && (q = q[0]));
      }
      return q;
    };
    module.exports = z;
  })();
})(void 0);

