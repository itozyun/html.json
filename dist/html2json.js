var DEFINE_HTML2JSON__EXPORT_JSON2HTML = !1, DEFINE_HTML2JSON__EXPORT_JSON2JSON = !1, DEFINE_HTML2JSON__DEBUG = !0, DEFINE_HTML2JSON__USE_XML_NS = !0, DEFINE_HTML2JSON__USE_XHTML = !0, DEFINE_INSTRUCTION_ATTR_PREFIX = ":", HTML_DOT_JSON__NODE_TYPE = {ELEMENT_NODE:1, TEXT_NODE:3, CDATA_SECTION:4, PROCESSING_INSTRUCTION:7, COMMENT_NODE:8, DOCUMENT_NODE:9, DOCUMENT_FRAGMENT_NODE:11, CONDITIONAL_COMMENT_HIDE_LOWER:13, CONDITIONAL_COMMENT_SHOW_LOWER:14, NETSCAPE4_CONDITIONAL_COMMENT:15};
const PHASE = {ERROR:HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE - 2, NODE_START:HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE - 1, ELEMENT_NODE_START:HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE, TEXT_NODE_START:HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, CDATA_SECTION_START:HTML_DOT_JSON__NODE_TYPE.CDATA_SECTION, PROCESSING_INSTRUCTION_START:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION, COMMENT_NODE_START:HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE, DOCUMENT_NODE_START:HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE, DOCUMENT_FRAGMENT_NODE_START:HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, 
COMMENT_HIDE_LOWER_START:HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER, COMMENT_SHOW_LOWER_START:HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER, NETSCAPE4_CONDITIONAL_COMMENT:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT, DOCUMENT_NODE_VALUE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 1, TEXT_NODE_VALUE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 2, CDATA_SECTION_VALUE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 3, COMMENT_NODE_VALUE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 
4, COMMENT_HIDE_LOWER_FORMURA:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 5, COMMENT_SHOW_LOWER_FORMURA:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 6, PROCESSING_INSTRUCTION_NAME:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 7, TAG_NAME:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 8, ATTRIBUTES_START:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 9, ATTRIBUTE_PROPERTY:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 10, ATTRIBUTE_VALUE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 
11, STYLES_START:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 12, CSS_PROPERTY:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 13, CSS_VALUE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 14, IN_INSTRUCTION_ATTRIBUTE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 15, END_OF_NODE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 16, CLOSE_EMPTY_ELEMENT:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 17, END_OF_ATTRIBUTES:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 
18, END_OF_STYLES:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 19, TEXT_DATA:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 20, INSTRUCTION_ATTRIBUTE_NAME:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 21}, EXPECT = {ERROR:PHASE.ERROR, NODE_START:PHASE.NODE_START, DOCUMENT_NODE_VALUE:PHASE.DOCUMENT_NODE_VALUE, TEXT_NODE_VALUE:PHASE.TEXT_NODE_VALUE, CDATA_SECTION_VALUE:PHASE.CDATA_SECTION_VALUE, COMMENT_NODE_VALUE:PHASE.COMMENT_NODE_VALUE, COMMENT_HIDE_LOWER_FORMURA:PHASE.COMMENT_HIDE_LOWER_FORMURA, 
COMMENT_SHOW_LOWER_FORMURA:PHASE.COMMENT_SHOW_LOWER_FORMURA, PROCESSING_INSTRUCTION_NAME:PHASE.PROCESSING_INSTRUCTION_NAME, TAG_NAME:PHASE.TAG_NAME, ATTRIBUTES_START:PHASE.ATTRIBUTES_START, ATTRIBUTE_PROPERTY:PHASE.ATTRIBUTE_PROPERTY, ATTRIBUTE_VALUE:PHASE.ATTRIBUTE_VALUE, STYLES_START:PHASE.STYLES_START, CSS_PROPERTY:PHASE.CSS_PROPERTY, CSS_VALUE:PHASE.CSS_VALUE, IN_INSTRUCTION_ATTRIBUTE:PHASE.IN_INSTRUCTION_ATTRIBUTE, END_OF_NODE:PHASE.END_OF_NODE, NODE_TYPE:PHASE.END_OF_NODE + 1, PROCESSING_INSTRUCTION_ARGS:PHASE.END_OF_NODE + 
2, INSTRUCTION_ATTRIBUTE_START:PHASE.END_OF_NODE + 3, CHILD_NODES_START:PHASE.END_OF_NODE + 4, IN_CHILD_NODES:PHASE.END_OF_NODE + 5, END_OF_DOCUMENT:PHASE.END_OF_NODE + 6};
(function() {
  var B;
  (function() {
    function w(c) {
      return c === +c;
    }
    function C(c) {
      return "" + c === c || w(c);
    }
    function x(c) {
      return c === "" + +c && w(parseInt(c, 10)) ? +c : c;
    }
    function G(c) {
      if (C(c)) {
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
          d = c[q], m = G(d), m === HTML_DOT_JSON__NODE_TYPE.TEXT_NODE ? (h = C(d) ? h + d : h + d[1], c.splice(q, 1)) : (h && (c.splice(q, 0, x(h)), h = ""), ++q, m === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE && H(d));
        }
        h && (c[q] = x(h));
      }
    }
    var Q = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, R = require("happy-dom").Window, S = {script:!0, style:!0, textarea:!0}, D = !1, E = !1;
    B = function(c, d, m) {
      function h(a, e, f, k) {
        var b = a.data;
        switch(a.nodeType) {
          case 1:
            var l = {};
            k = a.tagName.toLowerCase();
            var r = "pre" === k;
            var I = a.childNodes, J = a.attributes, z = J.length, K, L = "";
            b = 0;
            for (K = z; b < K; ++b) {
              var g = J.item(b);
              var y = g.name;
              var n = Q[y] ? 1 : g.value;
              "id" === y ? (k += "#" + n, --z) : "class" === y ? (L = "." + n, --z) : (0 === y.indexOf(T) ? (g = q(n), g.args ? (n = [g.name], n.push.apply(g.args)) : n = g.name) : n === "" + +n && w(parseInt(n, 10)) && (n = +n), l[y] = n);
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
            l = z ? [k, l] : [k];
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
            b && e.push(x(b));
            break;
          case 4:
            W && e.push([HTML_DOT_JSON__NODE_TYPE.CDATA_SECTION, x(b)]);
            break;
          case 8:
            if (0 === b.indexOf("?") && "?" === b.charAt(b.length - 1)) {
              g = q(A(b, "?", "?", !0)), l = [HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION, g.name], g.args && l.push.apply(l, g.args), e.push(l);
            } else if (0 === b.indexOf("[if") && 0 < b.indexOf("<![endif]")) {
              if (D = !0, E = f, a = B(A(b, ">", "<![endif]", !0), v), D = E = !1, a.length || w(a)) {
                l = [HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER, A(b, "[", "]", !1)], a && a.pop === [].pop ? l.push.apply(l, a) : l.push(a), e.push(l);
              }
            } else if (0 === b.indexOf("[if") && 0 < b.indexOf("><!")) {
              for (l = [HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER, A(b, "[", "]", !1)]; r = a.nextSibling;) {
                if (8 === r.nodeType && "<![endif]" === r.data) {
                  r.remove();
                  break;
                }
                h(r, l, f, k);
                r.remove();
              }
              2 < l.length && e.push(l);
            } else {
              X && e.push([HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE, x(b)]);
            }
            break;
          case 10:
            a = c.substr(0, c.indexOf(">", c.indexOf("<!DOCTYPE ")) + 1), u && (a = a.split("\n").join(" ").split("  ").join(" ").split("> <").join(">\n<")), e.push(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE, a);
        }
      }
      function q(a) {
        var e = a.indexOf(P), f = F(-1 === e ? a : a.substr(0, e), " ");
        a = -1 === e ? [] : JSON.parse("[" + a.substring(e + P.length, a.lastIndexOf(Y) - 2) + "]");
        return a.length ? {name:f, args:a} : {name:f};
      }
      function A(a, e, f, k) {
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
      var t = [], p = "string" === typeof d ? d : "", v = d && "object" === typeof d ? d : m || {}, u = v.trimWhitespace, W = !!v.keepCDataSection, X = !!v.keepComments;
      d = v.argumentBrackets || "()";
      var P = d.substr(0, d.length / 2), Y = d.substr(d.length), T = v.instructionAttrPrefix || DEFINE_INSTRUCTION_ATTR_PREFIX, V = "agressive" === u;
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
        m.doctype || D || (C(t[0]) ? t.unshift(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE) : 1 === t.length && (t = t[0]));
      }
      H(t);
      return t;
    };
    module.exports = B;
  })();
})();

