var DEFINE_HTML2JSON__EXPORT_JSON2HTML = !1, DEFINE_HTML2JSON__EXPORT_JSON2JSON = !0, DEFINE_HTML2JSON__DEBUG = !0, DEFINE_HTML2JSON__USE_XML_NS = !0, DEFINE_HTML2JSON__USE_XHTML = !0, DEFINE_HTML2JSON__GULP_PULGIN = !0, DEFINE_HTML2JSON__INSTRUCTION_ATTR_PREFIX = ":", HTML_DOT_JSON__NODE_TYPE = {ELEMENT_NODE:1, TEXT_NODE:3, CDATA_SECTION:4, PROCESSING_INSTRUCTION:7, COMMENT_NODE:8, DOCUMENT_NODE:9, DOCUMENT_FRAGMENT_NODE:11, CONDITIONAL_COMMENT_HIDE_LOWER:13, CONDITIONAL_COMMENT_SHOW_LOWER:14, NETSCAPE4_CONDITIONAL_COMMENT:15};
const DEFINE_HTML2JSON__PHASE = {ERROR:HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE - 2, NODE_START:HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE - 1, ELEMENT_NODE_START:HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE, TEXT_NODE_START:HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, CDATA_SECTION_START:HTML_DOT_JSON__NODE_TYPE.CDATA_SECTION, PROCESSING_INSTRUCTION_START:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION, COMMENT_NODE_START:HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE, DOCUMENT_NODE_START:HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE, 
DOCUMENT_FRAGMENT_NODE_START:HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, COMMENT_HIDE_LOWER_START:HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER, COMMENT_SHOW_LOWER_START:HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER, NETSCAPE4_CONDITIONAL_COMMENT:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT, DOCUMENT_NODE_VALUE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 1, TEXT_NODE_VALUE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 2, CDATA_SECTION_VALUE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 
3, COMMENT_NODE_VALUE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 4, COMMENT_HIDE_LOWER_FORMURA:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 5, COMMENT_SHOW_LOWER_FORMURA:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 6, PROCESSING_INSTRUCTION_NAME:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 7, TAG_NAME:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 8, ATTRIBUTES_START:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 9, ATTRIBUTE_PROPERTY:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 
10, ATTRIBUTE_VALUE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 11, STYLES_START:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 12, CSS_PROPERTY:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 13, CSS_VALUE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 14, IN_INSTRUCTION_ATTRIBUTE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 15, END_OF_NODE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 16, CLOSE_EMPTY_ELEMENT:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 
17, END_OF_ATTRIBUTES:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 18, END_OF_STYLES:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 19, TEXT_DATA:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 20, INSTRUCTION_ATTRIBUTE_NAME:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 21}, DEFINE_HTML2JSON__EXPECT = {ERROR:DEFINE_HTML2JSON__PHASE.ERROR, NODE_START:DEFINE_HTML2JSON__PHASE.NODE_START, DOCUMENT_NODE_VALUE:DEFINE_HTML2JSON__PHASE.DOCUMENT_NODE_VALUE, TEXT_NODE_VALUE:DEFINE_HTML2JSON__PHASE.TEXT_NODE_VALUE, 
CDATA_SECTION_VALUE:DEFINE_HTML2JSON__PHASE.CDATA_SECTION_VALUE, COMMENT_NODE_VALUE:DEFINE_HTML2JSON__PHASE.COMMENT_NODE_VALUE, COMMENT_HIDE_LOWER_FORMURA:DEFINE_HTML2JSON__PHASE.COMMENT_HIDE_LOWER_FORMURA, COMMENT_SHOW_LOWER_FORMURA:DEFINE_HTML2JSON__PHASE.COMMENT_SHOW_LOWER_FORMURA, PROCESSING_INSTRUCTION_NAME:DEFINE_HTML2JSON__PHASE.PROCESSING_INSTRUCTION_NAME, TAG_NAME:DEFINE_HTML2JSON__PHASE.TAG_NAME, ATTRIBUTES_START:DEFINE_HTML2JSON__PHASE.ATTRIBUTES_START, ATTRIBUTE_PROPERTY:DEFINE_HTML2JSON__PHASE.ATTRIBUTE_PROPERTY, 
ATTRIBUTE_VALUE:DEFINE_HTML2JSON__PHASE.ATTRIBUTE_VALUE, STYLES_START:DEFINE_HTML2JSON__PHASE.STYLES_START, CSS_PROPERTY:DEFINE_HTML2JSON__PHASE.CSS_PROPERTY, CSS_VALUE:DEFINE_HTML2JSON__PHASE.CSS_VALUE, IN_INSTRUCTION_ATTRIBUTE:DEFINE_HTML2JSON__PHASE.IN_INSTRUCTION_ATTRIBUTE, END_OF_NODE:DEFINE_HTML2JSON__PHASE.END_OF_NODE, NODE_TYPE:DEFINE_HTML2JSON__PHASE.END_OF_NODE + 1, PROCESSING_INSTRUCTION_ARGS:DEFINE_HTML2JSON__PHASE.END_OF_NODE + 2, INSTRUCTION_ATTRIBUTE_START:DEFINE_HTML2JSON__PHASE.END_OF_NODE + 
3, CHILD_NODES_START:DEFINE_HTML2JSON__PHASE.END_OF_NODE + 4, IN_CHILD_NODES:DEFINE_HTML2JSON__PHASE.END_OF_NODE + 5, END_OF_DOCUMENT:DEFINE_HTML2JSON__PHASE.END_OF_NODE + 6};
(function() {
  var x, y;
  (function() {
    function t(a) {
      return !(!a || a.pop !== [].pop);
    }
    function I(a) {
      return !(!a || "object" !== typeof a);
    }
    function z(a) {
      return "" + a === a;
    }
    function B(a) {
      return z(a) || a === +a;
    }
    function Q(a) {
      var b;
      if (b = a === "" + +a) {
        b = parseInt(a, 10), b = b === +b;
      }
      return b ? +a : a;
    }
    function T(a) {
      return 0 === a.indexOf("<?xml ") || 0 <= a.toUpperCase().indexOf('<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML ');
    }
    function J(a) {
      if (B(a)) {
        a = HTML_DOT_JSON__NODE_TYPE.TEXT_NODE;
      } else {
        if (t(a)) {
          if (z(a[0])) {
            a = HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE;
          } else {
            var b = a[0];
            a = b === +b ? a[0] : -1;
          }
        } else {
          a = -1;
        }
      }
      return a;
    }
    function K(a) {
      return !t(a) && I(a);
    }
    function R(a, b, d, f, q) {
      var m = b[1], C = b.slice(2);
      a = C.length ? a(m, C) : a(m);
      void 0 !== a && null !== a && "" !== a && (B(a) ? d ? d.splice(f, 1, a) : (b.length = 0, b.push(HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, b)) : t(a) ? a[0] === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE ? d ? (a.shift(), a.unshift(f, 1), d.splice.apply(d, a)) : (b.length = 0, b.push.apply(b, a)) : t(a[0]) ? d ? (a.unshift(f, 1), d.splice.apply(d, a)) : (b.length = 0, b.push(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE), b.push.apply(b, a)) : d ? d.splice(f, 1, a) : (b.length = 0, b.push(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, 
      a)) : DEFINE_HTML2JSON__DEBUG && q("PROCESSING_INSTRUCTION Error! [" + JSON.stringify(b) + "]"));
      return a;
    }
    function L(a, b, d, f, q) {
      if (t(f) && z(f[0])) {
        var m = f[0];
        f = f.slice(1);
        m = f.length ? b(m, f) : b(m);
      } else {
        z(f) ? m = b(f) : DEFINE_HTML2JSON__DEBUG && q("Invalid InstructionAttr value! [" + d + "=" + f + "]");
      }
      return a && t(m) ? L(!0, b, d, m, q) : m;
    }
    function H(a) {
      return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
    }
    function M(a, b, d) {
      a = H("" + a);
      if (a.match('"')) {
        a = a.match("'") ? b ? "'" + a.split("&apos;").join("'").split("'").join("&apos;") + "'" : '"' + a.split("&quot;").join('"').split('"').join("&quot;") + '"' : "'" + a + "'";
      } else if (d || a.match(/[^0-9a-z\.\-]/g) || 72 < a.length) {
        a = (b ? "'" : '"') + H(a) + (b ? "'" : '"');
      }
      return a;
    }
    function N(a) {
      var b = a[0], d = J(a) === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE, f = b === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE ? 2 : 1;
      return d ? K(a[f]) ? f + 1 : f : b === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE ? 1 : b === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE || b === HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER || b === HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER ? 2 : Infinity;
    }
    function S(a) {
      var b = N(a), d = "", f;
      if (b < a.length) {
        for (f = b; f < a.length;) {
          b = a[f];
          var q = J(b);
          q === HTML_DOT_JSON__NODE_TYPE.TEXT_NODE ? (d = B(b) ? d + b : d + b[1], a.splice(f, 1)) : (d && (a.splice(f, 0, Q(d)), d = ""), ++f, q === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE && S(b));
        }
        d && (a[f] = Q(d));
      }
    }
    function U(a) {
      var b = a.indexOf("#"), d = a.indexOf(".");
      if (b < d) {
        var f = a.split(".")[1];
        a = a.split(".")[0];
        if (0 < b) {
          var q = a.split("#")[1];
          a = a.split("#")[0];
        }
      } else {
        d < b && (q = a.split("#")[1], a = a.split("#")[0], 0 < d && (f = a.split(".")[1], a = a.split(".")[0]));
      }
      return [a, q, f];
    }
    var O = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, V = {link:!0, meta:!0, br:!0, hr:!0, img:!0, input:!0, area:!0, base:!0, col:!0, embed:!0, keygen:!0, param:!0, track:!0, wbr:!0, command:!0, basefont:!0, frame:!0, isindex:!0, bgsound:!0}, W = {p:!0, dt:!0, dd:!0, li:!0, option:!0, thead:!0, tfoot:!0, th:!0, tr:!0, td:!0, rt:!0, rp:!0, optgroup:!0, caption:!0, colgroup:!0}, X = {a:!0, 
    audio:!0, del:!0, ins:!0, map:!0, noscript:!0, video:!0}, Y = {svg:!0, math:!0}, Z = {address:!0, article:!0, aside:!0, blockquote:!0, canvas:!0, details:!0, div:!0, dl:!0, fieldset:!0, figcaption:!0, figure:!0, footer:!0, form:!0, h1:!0, h2:!0, h3:!0, h4:!0, h5:!0, h6:!0, header:!0, hgroup:!0, hr:!0, legend:!0, main:!0, menu:!0, nav:!0, noscript:!0, ol:!0, p:!0, pre:!0, section:!0, ul:!0, center:!0, dir:!0, noframes:!0, marquee:!0}, aa = {script:!0, style:!0, plaintext:!0, xmp:!0};
    x = function(a, b, d, f) {
      function q(c, g, e, h, k) {
        function n() {
          A && (l += "</" + A + ">", A = "");
        }
        var l = "", u = c[0], v = c[1], D = 1, p = u;
        switch(u) {
          case HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE:
            DEFINE_HTML2JSON__USE_XHTML && T(v) && (w = !0);
            l += v + m(c, !1, !1);
            break;
          case HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE:
            l += m(c, h, k);
            break;
          case HTML_DOT_JSON__NODE_TYPE.TEXT_NODE:
            n();
            l += k ? v : H("" + v);
            break;
          case HTML_DOT_JSON__NODE_TYPE.CDATA_SECTION:
            z(v) ? l += "<![CDATA[" + v + "]]\x3e" : DEFINE_HTML2JSON__DEBUG && r("CDATA_SECTION Error! [" + c + "]");
            break;
          case HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE:
            z(v) ? l += "\x3c!--" + v + "--\x3e" : DEFINE_HTML2JSON__DEBUG && r("COMMENT_NODE Error! [" + c + "]");
            break;
          case HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER:
            n();
            z(v) ? l += "\x3c!--[" + v + "]>" : DEFINE_HTML2JSON__DEBUG && r("CONDITIONAL_COMMENT_HIDE_LOWER Error! [" + c + "]");
            l += m(c, !0, k) + "<![endif]--\x3e";
            break;
          case HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER:
            n();
            z(v) ? l += "\x3c!--[" + v + "]>\x3c!--\x3e" : DEFINE_HTML2JSON__DEBUG && r("CONDITIONAL_COMMENT_SHOW_LOWER Error! [" + c + "]");
            l += m(c, !0, k) + "\x3c!--<![endif]--\x3e";
            break;
          case HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION:
            h = R(b, c, g, e, r);
            if (void 0 !== h && null !== h && "" !== h && (B(h) || t(h))) {
              return -1;
            }
            break;
          case HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE:
            p = c[1], D = 2;
          default:
            if (z(p)) {
              p = U(p);
              g = p[1];
              e = p[2];
              p = p[0];
              "p" !== A || Z[p] || (l += "</p>");
              A = "";
              l += "<" + p;
              g && (l += " id=" + M(g, E, F));
              e && (l += " class=" + M(e, E, F));
              if (!w) {
                var P = w ? !0 : Y[p] ? !0 : DEFINE_HTML2JSON__USE_XML_NS ? 0 < p.indexOf(":") : !1;
                P = w = P;
              }
              D = c[D];
              K(D) && (l += " " + C(D));
              l = (c = m(c, h || X[p], k || aa[p])) ? l + (">" + c) : l + (w ? "/>" : ">");
              w && !c || W[p] && !h ? A = V[p] ? "" : p : (l += "</" + p + ">", A = "");
              P && (w = !1);
            } else {
              DEFINE_HTML2JSON__DEBUG && r("Not html.json! [" + c + "]");
            }
        }
        return l;
      }
      function m(c, g, e) {
        for (var h = "", k = N(c), n; k < c.length; ++k) {
          n = c[k], B(n) ? h += q([HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, n], null, 0, g, e) : t(n) ? (n = q(n, c, k, g, e), -1 === n ? --k : h += n) : DEFINE_HTML2JSON__DEBUG && r("Invalid html.json! [" + n + "]");
        }
        return h;
      }
      function C(c) {
        var g = "", e, h;
        for (e in c) {
          var k = c[e];
          (h = 0 === e.indexOf(G)) && (e = e.substr(G.length));
          "className" === e && (e = "class");
          h && (k = L(!0, b, e, k, r));
          if (!(null == k || O[e] && !1 === k || (g += " " + e, O[e]))) {
            if ("style" === e && I(k)) {
              h = void 0;
              var n = k, l = "";
              for (h in n) {
                k = n[h], "0px" === k && (k = 0), l += ";" + h + ":" + H("" + k);
              }
              k = l.substr(1);
              if (!k) {
                continue;
              }
            }
            g += "=" + M(k, E, F);
          }
        }
        return g.substr(1);
      }
      var r = "function" === typeof d ? d : function(c) {
      };
      d = d && "object" === typeof d ? d : f || {};
      var F = !!d.quotAlways, E = !!d.useSingleQuot, G = d.instructionAttrPrefix || DEFINE_HTML2JSON__INSTRUCTION_ATTR_PREFIX, A, w = !1;
      if (t(a)) {
        return J(a) === HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION && (a = [HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, a]), q(a, null, 0, !1, !1);
      }
      DEFINE_HTML2JSON__DEBUG && r("Invalid html.json document!");
    };
    DEFINE_HTML2JSON__EXPORT_JSON2HTML && (module.exports = x, x.DOCUMENT_NODE = HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE, x.DOCUMENT_FRAGMENT_NODE = HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, x.ELEMENT_NODE = HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE, x.TEXT_NODE = HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, x.CDATA_SECTION = HTML_DOT_JSON__NODE_TYPE.CDATA_SECTION, x.COMMENT_NODE = HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE, x.CONDITIONAL_COMMENT_HIDE_LOWER = HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER, 
    x.CONDITIONAL_COMMENT_SHOW_LOWER = HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER, x.PROCESSING_INSTRUCTION = HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION);
    y = function(a, b, d, f) {
      function q(c, g, e) {
        var h = c[0], k = c[1], n = 1, l = h;
        switch(h) {
          case HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE:
            m(c);
            break;
          case HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE:
            m(c);
            break;
          case HTML_DOT_JSON__NODE_TYPE.TEXT_NODE:
            break;
          case HTML_DOT_JSON__NODE_TYPE.CDATA_SECTION:
            if (!F && g) {
              return g.splice(e, 1), -1;
            }
            break;
          case HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE:
            if (!E && g) {
              return g.splice(e, 1), -1;
            }
            break;
          case HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER:
            m(c);
            break;
          case HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER:
            m(c);
            break;
          case HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION:
            c = R(C, c, g, e, r);
            if (void 0 !== c) {
              A = !0;
              if (null === c || "" === c) {
                return g ? g.splice(e, 1) : (a.length = 0, a.push(HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE, "")), -1;
              }
              if (!B(c) && t(c)) {
                return -1;
              }
            } else {
              w = !1;
            }
            break;
          case HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE:
            l = k, n = 2;
          default:
            if (z(l)) {
              if (1 + n <= c.length) {
                g = c[n];
                if (K(g)) {
                  for (var u in g) {
                    e = u, h = g[u], (k = 0 === u.indexOf(G)) && (u = u.substr(G.length)), "className" === u && (u = "class"), k && (h = L(!1, C, u, h, r), void 0 !== h ? (delete g[e], t(h) ? z(h[0]) ? (g[e] = h, w = !1) : DEFINE_HTML2JSON__DEBUG && r("Invalid dynamic attribute callback value! [" + e + "=" + h + "]") : O[u] && !1 === h || null !== h && (g[u] = h)) : w = !1);
                  }
                  0 === Object.keys(g).length && c.splice(n, 1);
                }
                m(c);
              }
            } else {
              DEFINE_HTML2JSON__DEBUG && r("Not html.json! [" + c + "]");
            }
        }
      }
      function m(c) {
        for (var g = N(c), e; g < c.length; ++g) {
          e = c[g], B(e) || (t(e) ? -1 === q(e, c, g) && --g : DEFINE_HTML2JSON__DEBUG && r("Invalid html.json! [" + e + "]"));
        }
      }
      var C = "function" === typeof b ? b : function(c, g) {
      }, r = "function" === typeof d ? d : function(c) {
      };
      b = I(d) ? d : f || {};
      var F = !1 !== b.keepCDATASections, E = !1 !== b.keepComments, G = b.instructionAttrPrefix || DEFINE_HTML2JSON__INSTRUCTION_ATTR_PREFIX, A = !1, w = !0;
      if (t(a)) {
        return q(a, null, 0), A && S(a), w;
      }
      DEFINE_HTML2JSON__DEBUG && r("Invalid html.json document!");
    };
    DEFINE_HTML2JSON__EXPORT_JSON2JSON && (module.exports = y, y.DOCUMENT_NODE = HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE, y.DOCUMENT_FRAGMENT_NODE = HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, y.ELEMENT_NODE = HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE, y.TEXT_NODE = HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, y.CDATA_SECTION = HTML_DOT_JSON__NODE_TYPE.CDATA_SECTION, y.COMMENT_NODE = HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE, y.CONDITIONAL_COMMENT_HIDE_LOWER = HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER, 
    y.CONDITIONAL_COMMENT_SHOW_LOWER = HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER, y.PROCESSING_INSTRUCTION = HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION);
  })();
})();

