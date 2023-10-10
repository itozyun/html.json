var DEFINE_HTML2JSON__EXPORT_JSON2HTML = !1, DEFINE_HTML2JSON__EXPORT_JSON2JSON = !1, DEFINE_HTML2JSON__DEBUG = !0, DEFINE_HTML2JSON__USE_XML_NS = !0, DEFINE_HTML2JSON__USE_XHTML = !0, DEFINE_HTML2JSON__GULP_PULGIN = !0, DEFINE_HTML2JSON__INSTRUCTION_ATTR_PREFIX = ":", HTML_DOT_JSON__NODE_TYPE = {ELEMENT_NODE:1, TEXT_NODE:3, CDATA_SECTION:4, PROCESSING_INSTRUCTION:7, COMMENT_NODE:8, DOCUMENT_NODE:9, DOCUMENT_FRAGMENT_NODE:11, CONDITIONAL_COMMENT_HIDE_LOWER:13, CONDITIONAL_COMMENT_SHOW_LOWER:14, NETSCAPE4_CONDITIONAL_COMMENT:15};
const DEFINE_HTML2JSON__PHASE = {ERROR:HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE - 2, NODE_START:HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE - 1, ELEMENT_NODE_START:HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE, TEXT_NODE_START:HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, CDATA_SECTION_START:HTML_DOT_JSON__NODE_TYPE.CDATA_SECTION, PROCESSING_INSTRUCTION_START:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION, COMMENT_NODE_START:HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE, DOCUMENT_NODE_START:HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE, 
DOCUMENT_FRAGMENT_NODE_START:HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, COMMENT_HIDE_LOWER_START:HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER, COMMENT_SHOW_LOWER_START:HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER, NETSCAPE4_CONDITIONAL_COMMENT:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT, DOCUMENT_NODE_VALUE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 1, TEXT_NODE_VALUE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 2, CDATA_SECTION_VALUE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 
3, COMMENT_NODE_VALUE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 4, COMMENT_HIDE_LOWER_FORMURA:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 5, COMMENT_SHOW_LOWER_FORMURA:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 6, PROCESSING_INSTRUCTION_NAME:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 7, TAG_NAME:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 8, ATTRIBUTES_START:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 9, ATTRIBUTE_PROPERTY:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 
10, ATTRIBUTE_VALUE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 11, STYLES_START:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 12, CSS_PROPERTY:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 13, CSS_VALUE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 14, IN_INSTRUCTION_ATTRIBUTE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 15, END_OF_NODE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 16, CLOSE_EMPTY_ELEMENT:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 
17, END_OF_ATTRIBUTES:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 18, END_OF_STYLES:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 19, TEXT_DATA:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 20, INSTRUCTION_ATTRIBUTE_NAME:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 21}, DEFINE_HTML2JSON__EXPECT = {ERROR:DEFINE_HTML2JSON__PHASE.ERROR, NODE_START:DEFINE_HTML2JSON__PHASE.NODE_START, DOCUMENT_NODE_VALUE:DEFINE_HTML2JSON__PHASE.DOCUMENT_NODE_VALUE, TEXT_NODE_VALUE:DEFINE_HTML2JSON__PHASE.TEXT_NODE_VALUE, 
CDATA_SECTION_VALUE:DEFINE_HTML2JSON__PHASE.CDATA_SECTION_VALUE, COMMENT_NODE_VALUE:DEFINE_HTML2JSON__PHASE.COMMENT_NODE_VALUE, COMMENT_HIDE_LOWER_FORMURA:DEFINE_HTML2JSON__PHASE.COMMENT_HIDE_LOWER_FORMURA, COMMENT_SHOW_LOWER_FORMURA:DEFINE_HTML2JSON__PHASE.COMMENT_SHOW_LOWER_FORMURA, PROCESSING_INSTRUCTION_NAME:DEFINE_HTML2JSON__PHASE.PROCESSING_INSTRUCTION_NAME, TAG_NAME:DEFINE_HTML2JSON__PHASE.TAG_NAME, ATTRIBUTES_START:DEFINE_HTML2JSON__PHASE.ATTRIBUTES_START, ATTRIBUTE_PROPERTY:DEFINE_HTML2JSON__PHASE.ATTRIBUTE_PROPERTY, 
ATTRIBUTE_VALUE:DEFINE_HTML2JSON__PHASE.ATTRIBUTE_VALUE, STYLES_START:DEFINE_HTML2JSON__PHASE.STYLES_START, CSS_PROPERTY:DEFINE_HTML2JSON__PHASE.CSS_PROPERTY, CSS_VALUE:DEFINE_HTML2JSON__PHASE.CSS_VALUE, IN_INSTRUCTION_ATTRIBUTE:DEFINE_HTML2JSON__PHASE.IN_INSTRUCTION_ATTRIBUTE, END_OF_NODE:DEFINE_HTML2JSON__PHASE.END_OF_NODE, NODE_TYPE:DEFINE_HTML2JSON__PHASE.END_OF_NODE + 1, PROCESSING_INSTRUCTION_ARGS:DEFINE_HTML2JSON__PHASE.END_OF_NODE + 2, INSTRUCTION_ATTRIBUTE_START:DEFINE_HTML2JSON__PHASE.END_OF_NODE + 
3, CHILD_NODES_START:DEFINE_HTML2JSON__PHASE.END_OF_NODE + 4, IN_CHILD_NODES:DEFINE_HTML2JSON__PHASE.END_OF_NODE + 5, END_OF_DOCUMENT:DEFINE_HTML2JSON__PHASE.END_OF_NODE + 6};
(function() {
  var y;
  (function() {
    function z(c) {
      return c === +c;
    }
    function G(c) {
      return "" + c === c || z(c);
    }
    function A(c) {
      return c === "" + +c && z(parseInt(c, 10)) ? +c : c;
    }
    function J(c) {
      if (G(c)) {
        c = HTML_DOT_JSON__NODE_TYPE.TEXT_NODE;
      } else {
        if (c && c.pop === [].pop) {
          var d = c[0];
          c = "" + d === d ? HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE : z(c[0]) ? c[0] : -1;
        } else {
          c = -1;
        }
      }
      return c;
    }
    function K(c) {
      var d = c[0];
      var k = J(c) === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE, f = d === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE ? 2 : 1;
      f = k ? (d = c[f]) && d.pop === [].pop || !d || "object" !== typeof d ? f : f + 1 : d === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE ? 1 : d === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE || d === HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER || d === HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER ? 2 : Infinity;
      d = f;
      f = "";
      var p;
      if (d < c.length) {
        for (p = d; p < c.length;) {
          d = c[p], k = J(d), k === HTML_DOT_JSON__NODE_TYPE.TEXT_NODE ? (f = G(d) ? f + d : f + d[1], c.splice(p, 1)) : (f && (c.splice(p, 0, A(f)), f = ""), ++p, k === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE && K(d));
        }
        f && (c[p] = A(f));
      }
    }
    var Q = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, R = require("happy-dom").Window, S = {script:!0, style:!0, textarea:!0}, H = !1, I = !1, T = {};
    y = function(c, d, k) {
      function f(b, e, g, l) {
        var a = b.data;
        switch(b.nodeType) {
          case 1:
            var m = {};
            l = b.tagName.toLowerCase();
            var q = "pre" === l;
            var L = b.childNodes, M = b.attributes, D = M.length, N, O = "";
            a = 0;
            for (N = D; a < N; ++a) {
              var h = M.item(a);
              var B = h.name;
              var r = Q[B] ? 1 : h.value;
              "id" === B ? (l += "#" + r, --D) : "class" === B ? (O = "." + r, --D) : (0 === B.indexOf(U) ? (h = p(r), h.args ? (r = [h.name], r.push.apply(h.args)) : r = h.name) : r === "" + +r && z(parseInt(r, 10)) && (r = +r), m[B] = r);
            }
            l += O;
            if (q && v) {
              for (; h = E(b);) {
                if (F(h.data)) {
                  for (a = h.data; "\n" === a.charAt(0);) {
                    a = a.substr(1);
                  }
                  h.data = a;
                  break;
                } else {
                  h.remove();
                }
              }
              for (; h = x(b);) {
                if (F(h.data)) {
                  for (a = h.data; "\n" === a.charAt(a.length - 1);) {
                    a = a.substr(0, a.length - 1);
                  }
                  h.data = a;
                  break;
                } else {
                  h.remove();
                }
              }
            }
            m = D ? [l, m] : [l];
            for (a = 0; a < L.length; ++a) {
              f(L[a], m, q || g, S[l]);
            }
            e.push(m);
            break;
          case 3:
            if (!g && v) {
              if (l) {
                a = C(a, "\n");
              } else {
                a = a.split("\r\n").join("\n");
                V && (a = a.replace(/([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])\s([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])/g, "$1$2"));
                for (a = a.split("\t").join(" "); 0 <= a.indexOf("\n\n");) {
                  a = a.split("\n\n").join("\n");
                }
                W && (b = a.charAt(0), q = "\n" === b && /\n[ ]*$/.test(a), "\n" !== b && " " !== b && "\n" === a.charAt(a.length - 1) && (q = !0));
                q || " " !== a.charAt(a.length - 2) && "\n" === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1));
                for (a = a.split("\n").join(" "); 0 <= a.indexOf("  ");) {
                  a = a.split("  ").join(" ");
                }
                q && (a = C(a, " "));
                a = a.split("\\u0020").join(" ");
              }
            }
            a && e.push(A(a));
            break;
          case 4:
            X && e.push([HTML_DOT_JSON__NODE_TYPE.CDATA_SECTION, A(a)]);
            break;
          case 8:
            if (0 === a.indexOf("?") && "?" === a.charAt(a.length - 1)) {
              h = p(n(a, "?", "?", !0)), m = [HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION, h.name], h.args && m.push.apply(m, h.args), e.push(m);
            } else if (0 === a.indexOf("[if") && 0 < a.indexOf("<![endif]")) {
              if (H = !0, I = g, b = y(n(a, ">", "<![endif]", !0), w), H = I = !1, b.length || z(b)) {
                m = [HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER, n(a, "[", "]", !1)], b && b.pop === [].pop ? m.push.apply(m, b) : m.push(b), e.push(m);
              }
            } else if (0 === a.indexOf("[if") && 0 < a.indexOf("><!")) {
              for (m = [HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER, n(a, "[", "]", !1)]; q = b.nextSibling;) {
                if (8 === q.nodeType && "<![endif]" === q.data) {
                  q.remove();
                  break;
                }
                f(q, m, g, l);
                q.remove();
              }
              2 < m.length && e.push(m);
            } else {
              Y && e.push([HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE, A(a)]);
            }
            break;
          case 10:
            b = c.substr(0, c.indexOf(">", c.indexOf("<!DOCTYPE ")) + 1), v && (b = b.split("\n").join(" ").split("  ").join(" ").split("> <").join(">\n<")), e.push(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE, b);
        }
      }
      function p(b) {
        var e = b.indexOf(P), g = C(-1 === e ? b : b.substr(0, e), " ");
        b = -1 === e ? [] : JSON.parse("[" + b.substring(e + P.length, b.lastIndexOf(Z) - 2) + "]");
        return b.length ? {name:g, args:b} : {name:g};
      }
      function n(b, e, g, l) {
        e = b.indexOf(e) + e.length;
        g = l ? b.lastIndexOf(g) : b.indexOf(g, e);
        return b.substring(e, g);
      }
      function E(b) {
        b = b.childNodes;
        for (var e = 0, g = b.length, l; e < g; ++e) {
          if (l = b[e], 1 === l.nodeType && (l = E(l)), l && 3 === l.nodeType) {
            return l;
          }
        }
      }
      function x(b) {
        b = b.childNodes;
        for (var e = b.length, g; e;) {
          if (g = b[--e], 1 === g.nodeType && (g = x(g)), g && 3 === g.nodeType) {
            return g;
          }
        }
      }
      function F(b) {
        return b.split("\n").join("").split(" ").join("").split("\t").join("");
      }
      function C(b, e) {
        for (; b.charAt(0) === e;) {
          b = b.substr(1);
        }
        for (; b.charAt(b.length - 1) === e;) {
          b = b.substr(0, b.length - 1);
        }
        return b;
      }
      var u = [], t = "string" === typeof d ? d : "", w = d && "object" === typeof d ? d : k || {}, v = w.trimWhitespace, X = !!w.keepCDATASections, Y = !!w.keepComments;
      d = w.argumentBrackets || "()";
      var P = d.substr(0, d.length / 2), Z = d.substr(d.length), U = w.instructionAttrPrefix || DEFINE_HTML2JSON__INSTRUCTION_ATTR_PREFIX, W = "agressive" === v;
      k = (new R(T)).document;
      var V = !!w.removeLineBreaksBetweenFullWidth;
      d = 0;
      v = "none" !== v && !1 !== v;
      k.write(c);
      if (t) {
        for (u.push(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE), t = k.querySelectorAll(t), k = t.length; d < k; ++d) {
          f(t[d], u, I || !1, !1);
        }
      } else {
        t = k.firstChild;
        k.doctype || k.getElementsByTagName("head")[0].childNodes.length || (t = k.body.firstChild);
        for (; t;) {
          f(t, u, !1, !1), t = t.nextSibling;
        }
        k.doctype || H || (G(u[0]) ? u.unshift(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE) : 1 === u.length && (u = u[0]));
      }
      K(u);
      return u;
    };
    module.exports = y;
    DEFINE_HTML2JSON__GULP_PULGIN && (y.gulp = function(c, d) {
      const k = require("plugin-error"), f = require("through2"), p = c && "object" === typeof c ? c : d && "object" === typeof d ? d : {};
      return f.obj(function(n, E, x) {
        if (n.isNull()) {
          return x();
        }
        if (n.isStream()) {
          return this.emit("error", new k("html2json", "Streaming not supported")), x();
        }
        const F = performance.now();
        if (".html" === n.extname || ".htm" === n.extname || ".xhtml" === n.extname || ".php" === n.extname) {
          try {
            n.contents = Buffer.from(JSON.stringify(y(n.contents.toString(E), c, d), null, p.prettify ? "    " : "")), console.log(n.path.split(process.cwd())[1].split("\\").join("/"), performance.now() - F), n.extname = ".json", this.push(n);
          } catch (C) {
            this.emit("error", new k("html2json", C));
          }
        } else {
          this.push(n);
        }
        x();
      });
    });
  })();
})();

