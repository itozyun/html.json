var DEFINE_HTML2JSON__EXPORT_JSON2HTML = !1, DEFINE_HTML2JSON__EXPORT_JSON2JSON = !1, DEFINE_HTML2JSON__DEBUG = !0, DEFINE_HTML2JSON__USE_XML_NS = !0, DEFINE_HTML2JSON__USE_XHTML = !0, DEFINE_HTML2JSON__GULP_PULGIN = !0, DEFINE_HTML2JSON__INSTRUCTION_ATTR_PREFIX = ":", HTML_DOT_JSON__NODE_TYPE = {ELEMENT_NODE:1, TEXT_NODE:3, CDATA_SECTION:4, PROCESSING_INSTRUCTION:7, COMMENT_NODE:8, DOCUMENT_NODE:9, DOCUMENT_FRAGMENT_NODE:11, CONDITIONAL_COMMENT_HIDE_LOWER:13, CONDITIONAL_COMMENT_SHOW_LOWER:14, NETSCAPE4_CONDITIONAL_COMMENT:15};
const HTML2JSON__PHASE = {ERROR:HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE - 2, NODE_START:HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE - 1, ELEMENT_NODE_START:HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE, TEXT_NODE_START:HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, CDATA_SECTION_START:HTML_DOT_JSON__NODE_TYPE.CDATA_SECTION, PROCESSING_INSTRUCTION_START:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION, COMMENT_NODE_START:HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE, DOCUMENT_NODE_START:HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE, DOCUMENT_FRAGMENT_NODE_START:HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, 
COMMENT_HIDE_LOWER_START:HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER, COMMENT_SHOW_LOWER_START:HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER, NETSCAPE4_CONDITIONAL_COMMENT:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT, DOCUMENT_NODE_VALUE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 1, TEXT_NODE_VALUE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 2, CDATA_SECTION_VALUE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 3, COMMENT_NODE_VALUE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 
4, COMMENT_HIDE_LOWER_FORMURA:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 5, COMMENT_SHOW_LOWER_FORMURA:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 6, PROCESSING_INSTRUCTION_NAME:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 7, TAG_NAME:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 8, ATTRIBUTES_START:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 9, ATTRIBUTE_PROPERTY:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 10, ATTRIBUTE_VALUE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 
11, STYLES_START:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 12, CSS_PROPERTY:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 13, CSS_VALUE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 14, IN_INSTRUCTION_ATTRIBUTE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 15, END_OF_NODE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 16, CLOSE_EMPTY_ELEMENT:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 17, END_OF_ATTRIBUTES:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 
18, END_OF_STYLES:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 19, TEXT_DATA:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 20, INSTRUCTION_ATTRIBUTE_NAME:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 21}, HTML2JSON__EXPECT = {ERROR:HTML2JSON__PHASE.ERROR, NODE_START:HTML2JSON__PHASE.NODE_START, DOCUMENT_NODE_VALUE:HTML2JSON__PHASE.DOCUMENT_NODE_VALUE, TEXT_NODE_VALUE:HTML2JSON__PHASE.TEXT_NODE_VALUE, CDATA_SECTION_VALUE:HTML2JSON__PHASE.CDATA_SECTION_VALUE, COMMENT_NODE_VALUE:HTML2JSON__PHASE.COMMENT_NODE_VALUE, 
COMMENT_HIDE_LOWER_FORMURA:HTML2JSON__PHASE.COMMENT_HIDE_LOWER_FORMURA, COMMENT_SHOW_LOWER_FORMURA:HTML2JSON__PHASE.COMMENT_SHOW_LOWER_FORMURA, PROCESSING_INSTRUCTION_NAME:HTML2JSON__PHASE.PROCESSING_INSTRUCTION_NAME, TAG_NAME:HTML2JSON__PHASE.TAG_NAME, ATTRIBUTES_START:HTML2JSON__PHASE.ATTRIBUTES_START, ATTRIBUTE_PROPERTY:HTML2JSON__PHASE.ATTRIBUTE_PROPERTY, ATTRIBUTE_VALUE:HTML2JSON__PHASE.ATTRIBUTE_VALUE, STYLES_START:HTML2JSON__PHASE.STYLES_START, CSS_PROPERTY:HTML2JSON__PHASE.CSS_PROPERTY, CSS_VALUE:HTML2JSON__PHASE.CSS_VALUE, 
IN_INSTRUCTION_ATTRIBUTE:HTML2JSON__PHASE.IN_INSTRUCTION_ATTRIBUTE, END_OF_NODE:HTML2JSON__PHASE.END_OF_NODE, NODE_TYPE:HTML2JSON__PHASE.END_OF_NODE + 1, PROCESSING_INSTRUCTION_ARGS:HTML2JSON__PHASE.END_OF_NODE + 2, INSTRUCTION_ATTRIBUTE_START:HTML2JSON__PHASE.END_OF_NODE + 3, CHILD_NODES_START:HTML2JSON__PHASE.END_OF_NODE + 4, IN_CHILD_NODES:HTML2JSON__PHASE.END_OF_NODE + 5, END_OF_DOCUMENT:HTML2JSON__PHASE.END_OF_NODE + 6};
(function() {
  var z;
  (function() {
    function A(c) {
      return c === +c;
    }
    function I(c) {
      return "" + c === c || A(c);
    }
    function B(c) {
      return c === "" + +c && A(parseInt(c, 10)) ? +c : c;
    }
    function L(c) {
      if (I(c)) {
        c = HTML_DOT_JSON__NODE_TYPE.TEXT_NODE;
      } else {
        if (c && c.pop === [].pop) {
          var d = c[0];
          c = "" + d === d ? HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE : A(c[0]) ? c[0] : -1;
        } else {
          c = -1;
        }
      }
      return c;
    }
    function M(c) {
      var d = c[0];
      var h = L(c) === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE, g = d === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE ? 2 : 1;
      g = h ? (d = c[g]) && d.pop === [].pop || !d || "object" !== typeof d ? g : g + 1 : d === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE ? 1 : d === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE || d === HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER || d === HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER ? 2 : Infinity;
      d = g;
      g = "";
      var p;
      if (d < c.length) {
        for (p = d; p < c.length;) {
          d = c[p], h = L(d), h === HTML_DOT_JSON__NODE_TYPE.TEXT_NODE ? (g = I(d) ? g + d : g + d[1], c.splice(p, 1)) : (g && (c.splice(p, 0, B(g)), g = ""), ++p, h === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE && M(d));
        }
        g && (c[p] = B(g));
      }
    }
    var R = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, S = require("happy-dom").Window, T = {script:!0, style:!0, textarea:!0}, J = !1, K = !1, U = {};
    z = function(c, d, h) {
      function g(a, e, f, k) {
        var b = a.data;
        switch(a.nodeType) {
          case 1:
            var l = {};
            k = a.tagName.toLowerCase();
            b = "pre" === k;
            var E = a.childNodes, N = a.attributes, F = N.length, O, P = "";
            var m = 0;
            for (O = F; m < O; ++m) {
              var r = N.item(m);
              var C = r.name;
              var q = R[C] ? 1 : r.value;
              "id" === C ? (k += "#" + q, --F) : "class" === C ? (P = "." + q, --F) : (C.startsWith(V) ? (r = p(q), r.args ? (q = [r.name], q.push.apply(r.args)) : q = r.name) : q === "" + +q && A(parseInt(q, 10)) && (q = +q), l[C] = q);
            }
            k += P;
            if (b && v) {
              for (; m = G(a);) {
                if (H(m.data)) {
                  m.data = x(m.data, "\n");
                  break;
                } else {
                  m.remove();
                }
              }
              for (; m = y(a);) {
                if (H(m.data)) {
                  m.data = D(m.data, "\n");
                  break;
                } else {
                  m.remove();
                }
              }
            }
            l = F ? [k, l] : [k];
            for (m = 0; m < E.length; ++m) {
              g(E[m], l, b || f, T[k]);
            }
            e.push(l);
            break;
          case 3:
            if (!f && v) {
              if (k) {
                b = D(x(b, "\n"), "\n");
              } else {
                b = b.split("\r\n").join("\n");
                W && (b = b.replace(/([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])\s([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])/g, "$1$2"));
                for (b = b.split("\t").join(" "); 0 <= b.indexOf("\n\n");) {
                  b = b.split("\n\n").join("\n");
                }
                b = D(b, "\n");
                X && (E = "\n" === b.charAt(0) && /\n[ ]*$/.test(b));
                for (b = b.split("\n").join(" "); 0 <= b.indexOf("  ");) {
                  b = b.split("  ").join(" ");
                }
                E && (b = D(x(b, " "), " "));
                b = b.split("\\u0020").join(" ");
              }
            }
            b && e.push(B(b));
            break;
          case 4:
            Y && e.push([HTML_DOT_JSON__NODE_TYPE.CDATA_SECTION, B(b)]);
            break;
          case 8:
            if (b.startsWith("?") && "?" === b.charAt(b.length - 1)) {
              r = p(n(b, "?", "?", !0)), l = [HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION, r.name], r.args && l.push.apply(l, r.args), e.push(l);
            } else if (b.startsWith("[if") && 0 < b.indexOf("<![endif]")) {
              if (J = !0, K = f, a = z(n(b, ">", "<![endif]", !0), w), J = K = !1, a.length || A(a)) {
                l = [HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER, n(b, "[", "]", !1)], a && a.pop === [].pop ? l.push.apply(l, a) : l.push(a), e.push(l);
              }
            } else if (b.startsWith("[if") && 0 < b.indexOf("><!")) {
              for (l = [HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER, n(b, "[", "]", !1)]; b = a.nextSibling;) {
                if (8 === b.nodeType && "<![endif]" === b.data) {
                  b.remove();
                  break;
                }
                g(b, l, f, k);
                b.remove();
              }
              2 < l.length && e.push(l);
            } else {
              Z && e.push([HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE, B(b)]);
            }
            break;
          case 10:
            a = c.substr(0, c.indexOf(">", c.indexOf("<!DOCTYPE ")) + 1), v && (a = a.split("\n").join(" ").split("  ").join(" ").split("> <").join(">\n<")), e.push(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE, a);
        }
      }
      function p(a) {
        var e = a.indexOf(Q);
        var f = -1 === e ? a : a.substr(0, e);
        f = D(x(f, " "), " ");
        a = -1 === e ? [] : JSON.parse("[" + a.substring(e + Q.length, a.lastIndexOf(aa) - 2) + "]");
        return a.length ? {name:f, args:a} : {name:f};
      }
      function n(a, e, f, k) {
        e = a.indexOf(e) + e.length;
        f = k ? a.lastIndexOf(f) : a.indexOf(f, e);
        return a.substring(e, f);
      }
      function G(a) {
        a = a.childNodes;
        for (var e = 0, f = a.length, k; e < f; ++e) {
          if (k = a[e], 1 === k.nodeType && (k = G(k)), k && 3 === k.nodeType) {
            return k;
          }
        }
      }
      function y(a) {
        a = a.childNodes;
        for (var e = a.length, f; e;) {
          if (f = a[--e], 1 === f.nodeType && (f = y(f)), f && 3 === f.nodeType) {
            return f;
          }
        }
      }
      function H(a) {
        return a.split("\n").join("").split(" ").join("").split("\t").join("");
      }
      function x(a, e) {
        for (; a.charAt(0) === e;) {
          a = a.substr(1);
        }
        return a;
      }
      function D(a, e) {
        for (; a.charAt(a.length - 1) === e;) {
          a = a.substr(0, a.length - 1);
        }
        return a;
      }
      var u = [], t = "string" === typeof d ? d : "", w = d && "object" === typeof d ? d : h || {}, v = w.trimWhitespace, Y = !!w.keepCDATASections, Z = !!w.keepComments;
      d = w.argumentBrackets || "()";
      var Q = d.substr(0, d.length / 2), aa = d.substr(d.length), V = w.instructionAttrPrefix || DEFINE_HTML2JSON__INSTRUCTION_ATTR_PREFIX, X = "agressive" === v;
      h = (new S(U)).document;
      var W = !!w.removeLineBreaksBetweenFullWidth;
      d = 0;
      v = "none" !== v && !1 !== v;
      h.write(c);
      if (t) {
        for (u.push(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE), t = h.querySelectorAll(t), h = t.length; d < h; ++d) {
          g(t[d], u, K || !1, !1);
        }
      } else {
        t = h.firstChild;
        h.doctype || h.getElementsByTagName("head")[0].childNodes.length || (t = h.body.firstChild);
        for (; t;) {
          g(t, u, !1, !1), t = t.nextSibling;
        }
        h.doctype || J || (I(u[0]) ? u.unshift(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE) : 1 === u.length && (u = u[0]));
      }
      M(u);
      return u;
    };
    module.exports = z;
    DEFINE_HTML2JSON__GULP_PULGIN && (z.gulp = function(c, d) {
      const h = require("plugin-error"), g = require("through2"), p = c && "object" === typeof c ? c : d && "object" === typeof d ? d : {};
      return g.obj(function(n, G, y) {
        if (n.isNull()) {
          return y();
        }
        if (n.isStream()) {
          return this.emit("error", new h("html2json", "Streaming not supported")), y();
        }
        const H = performance.now();
        if (".html" === n.extname || ".htm" === n.extname || ".xhtml" === n.extname || ".php" === n.extname) {
          try {
            n.contents = Buffer.from(JSON.stringify(z(n.contents.toString(G), c, d), null, p.prettify ? "    " : "")), console.log(n.path.split(process.cwd())[1].split("\\").join("/"), performance.now() - H), n.extname = ".json", this.push(n);
          } catch (x) {
            this.emit("error", new h("html2json", x));
          }
        } else {
          this.push(n);
        }
        y();
      });
    });
  })();
})();

