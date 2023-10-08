var DEFINE_HTML2JSON__EXPORT_JSON2HTML = !1, DEFINE_HTML2JSON__EXPORT_JSON2JSON = !1, DEFINE_HTML2JSON__DEBUG = !0, DEFINE_HTML2JSON__USE_XML_NS = !0, DEFINE_HTML2JSON__USE_XHTML = !0, DEFINE_INSTRUCTION_ATTR_PREFIX = ":", HTML_DOT_JSON__NODE_TYPE = {DOCUMENT_NODE:0, DOCUMENT_FRAGMENT_NODE:1, ELEMENT_NODE:2, TEXT_NODE:3, COMMENT_NODE:4, CONDITIONAL_COMMENT_HIDE_LOWER:5, CONDITIONAL_COMMENT_SHOW_LOWER:6, PROCESSING_INSTRUCTION:7};
const EXPECT = {ERROR:HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE - 2, NODE_START:HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE - 1, DOCUMENT_NODE_VALUE:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 1, TEXT_NODE_VALUE:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 2, COMMENT_NODE_VALUE:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 3, COMMENT_HIDE_LOWER_FORMURA:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 4, COMMENT_SHOW_LOWER_FORMURA:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 5, PROCESSING_INSTRUCTION_NAME:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 
6, TAG_NAME:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 7, ATTRIBUTES_START:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 8, ATTRIBUTE_PROPERTY:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 9, ATTRIBUTE_VALUE:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 10, STYLES_START:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 11, CSS_PROPERTY:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 12, CSS_VALUE:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 13, IN_INSTRUCTION_ATTRIBUTE:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 
14, END_OF_NODE:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 15, NODE_TYPE:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 16, PROCESSING_INSTRUCTION_ARGS:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 17, INSTRUCTION_ATTRIBUTE_START:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 18, CHILD_NODES_START:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 19, IN_CHILD_NODES:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 20, END_OF_DOCUMENT:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 
21}, PHASE = {ERROR:EXPECT.ERROR, NODE_START:EXPECT.NODE_START, DOCUMENT_NODE_START:HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE, DOCUMENT_FRAGMENT_NODE_START:HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, ELEMENT_NODE_START:HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE, TEXT_NODE_START:HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, COMMENT_NODE_START:HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE, COMMENT_HIDE_LOWER_START:HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER, COMMENT_SHOW_LOWER_START:HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER, 
PROCESSING_INSTRUCTION_START:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION, DOCUMENT_NODE_VALUE:EXPECT.DOCUMENT_NODE_VALUE, TEXT_NODE_VALUE:EXPECT.TEXT_NODE_VALUE, COMMENT_NODE_VALUE:EXPECT.COMMENT_NODE_VALUE, COMMENT_HIDE_LOWER_FORMURA:EXPECT.COMMENT_HIDE_LOWER_FORMURA, COMMENT_SHOW_LOWER_FORMURA:EXPECT.COMMENT_SHOW_LOWER_FORMURA, PROCESSING_INSTRUCTION_NAME:EXPECT.PROCESSING_INSTRUCTION_NAME, TAG_NAME:EXPECT.TAG_NAME, ATTRIBUTES_START:EXPECT.ATTRIBUTES_START, ATTRIBUTE_PROPERTY:EXPECT.ATTRIBUTE_PROPERTY, 
ATTRIBUTE_VALUE:EXPECT.ATTRIBUTE_VALUE, STYLES_START:EXPECT.STYLES_START, CSS_PROPERTY:EXPECT.CSS_PROPERTY, CSS_VALUE:EXPECT.CSS_VALUE, IN_INSTRUCTION_ATTRIBUTE:EXPECT.IN_INSTRUCTION_ATTRIBUTE, END_OF_NODE:EXPECT.END_OF_NODE, CLOSE_EMPTY_ELEMENT:EXPECT.END_OF_NODE + 1, END_OF_ATTRIBUTES:EXPECT.END_OF_NODE + 2, END_OF_STYLES:EXPECT.END_OF_NODE + 3, TEXT_DATA:EXPECT.END_OF_NODE + 4, INSTRUCTION_ATTRIBUTE_NAME:EXPECT.END_OF_NODE + 5};
(function() {
  var A;
  (function() {
    function w(c) {
      return c === +c;
    }
    function B(c) {
      return "" + c === c || w(c);
    }
    function C(c) {
      return c === "" + +c && w(parseInt(c, 10)) ? +c : c;
    }
    function G(c) {
      if (B(c)) {
        c = HTML_DOT_JSON__NODE_TYPE.TEXT_NODE;
      } else {
        if (c && c.pop === [].pop) {
          var d = c[0];
          c = "" + d === d ? HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE : w(c[0]) ? c[0] : -1;
        } else {
          c = -1;
        }
      }
      return c;
    }
    function H(c) {
      var d = c[0];
      var m = G(c) === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE, h = d === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE ? 2 : 1;
      h = m ? (d = c[h]) && d.pop === [].pop || !d || "object" !== typeof d ? h : h + 1 : d === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE ? 1 : d === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE || d === HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER || d === HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER ? 2 : Infinity;
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
              var x = g.name;
              var n = Q[x] ? 1 : g.value;
              "id" === x ? (k += "#" + n, --y) : "class" === x ? (L = "." + n, --y) : (0 === x.indexOf(T) ? (g = q(n), g.args ? (n = [g.name], n.push.apply(g.args)) : n = g.name) : n === "" + +n && w(parseInt(n, 10)) && (n = +n), l[x] = n);
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
              if (D = !0, E = f, a = A(z(b, ">", "<![endif]", !0), v), D = E = !1, a.length || w(a)) {
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
        a = -1 === e ? [] : JSON.parse("[" + a.substring(e + P.length, a.lastIndexOf(X) - 2) + "]");
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

