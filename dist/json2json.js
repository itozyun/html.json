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
    function O(a) {
      var b;
      if (b = a === "" + +a) {
        b = parseInt(a, 10), b = b === +b;
      }
      return b ? +a : a;
    }
    function S(a) {
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
    function P(a, b, c, l, p) {
      var r = b[1], C = b.slice(2);
      a = C.length ? a(r, C) : a(r);
      void 0 !== a && null !== a && "" !== a && (B(a) ? c ? c.splice(l, 1, a) : (b.length = 0, b.push(HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, b)) : t(a) ? a[0] === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE ? c ? (a.shift(), a.unshift(l, 1), c.splice.apply(c, a)) : (b.length = 0, b.push.apply(b, a)) : t(a[0]) ? c ? (a.unshift(l, 1), c.splice.apply(c, a)) : (b.length = 0, b.push(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE), b.push.apply(b, a)) : c ? c.splice(l, 1, a) : (b.length = 0, b.push(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, 
      a)) : DEFINE_HTML2JSON__DEBUG && p("PROCESSING_INSTRUCTION Error! [" + JSON.stringify(b) + "]"));
      return a;
    }
    function Q(a, b, c, l) {
      if (t(c) && z(c[0])) {
        b = c[0];
        c = c.slice(1);
        var p = c.length ? a(b, c) : a(b);
      } else {
        z(c) ? p = a(c) : DEFINE_HTML2JSON__DEBUG && l("Invalid InstructionAttr value! [" + b + "=" + c + "]");
      }
      return p;
    }
    function H(a) {
      return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
    }
    function L(a, b, c) {
      a = H("" + a);
      if (a.match('"')) {
        a = a.match("'") ? b ? "'" + a.split("&apos;").join("'").split("'").join("&apos;") + "'" : '"' + a.split("&quot;").join('"').split('"').join("&quot;") + '"' : "'" + a + "'";
      } else if (c || a.match(/[^0-9a-z\.\-]/g) || 72 < a.length) {
        a = (b ? "'" : '"') + H(a) + (b ? "'" : '"');
      }
      return a;
    }
    function M(a) {
      var b = a[0], c = J(a) === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE, l = b === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE ? 2 : 1;
      return c ? K(a[l]) ? l + 1 : l : b === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE ? 1 : b === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE || b === HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER || b === HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER ? 2 : Infinity;
    }
    function R(a) {
      var b = M(a), c = "", l;
      if (b < a.length) {
        for (l = b; l < a.length;) {
          b = a[l];
          var p = J(b);
          p === HTML_DOT_JSON__NODE_TYPE.TEXT_NODE ? (c = B(b) ? c + b : c + b[1], a.splice(l, 1)) : (c && (a.splice(l, 0, O(c)), c = ""), ++l, p === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE && R(b));
        }
        c && (a[l] = O(c));
      }
    }
    function T(a) {
      var b = a.indexOf("#"), c = a.indexOf(".");
      if (b < c) {
        var l = a.split(".")[1];
        a = a.split(".")[0];
        if (0 < b) {
          var p = a.split("#")[1];
          a = a.split("#")[0];
        }
      } else {
        c < b && (p = a.split("#")[1], a = a.split("#")[0], 0 < c && (l = a.split(".")[1], a = a.split(".")[0]));
      }
      return [a, p, l];
    }
    var U = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, V = {link:!0, meta:!0, br:!0, hr:!0, img:!0, input:!0, area:!0, base:!0, col:!0, embed:!0, keygen:!0, param:!0, track:!0, wbr:!0, command:!0, basefont:!0, frame:!0, isindex:!0, bgsound:!0}, W = {p:!0, dt:!0, dd:!0, li:!0, option:!0, thead:!0, tfoot:!0, th:!0, tr:!0, td:!0, rt:!0, rp:!0, optgroup:!0, caption:!0, colgroup:!0}, X = {a:!0, 
    audio:!0, del:!0, ins:!0, map:!0, noscript:!0, video:!0}, Y = {svg:!0, math:!0}, Z = {address:!0, article:!0, aside:!0, blockquote:!0, canvas:!0, details:!0, div:!0, dl:!0, fieldset:!0, figcaption:!0, figure:!0, footer:!0, form:!0, h1:!0, h2:!0, h3:!0, h4:!0, h5:!0, h6:!0, header:!0, hgroup:!0, hr:!0, legend:!0, main:!0, menu:!0, nav:!0, noscript:!0, ol:!0, p:!0, pre:!0, section:!0, ul:!0, center:!0, dir:!0, noframes:!0, marquee:!0}, aa = {script:!0, style:!0, plaintext:!0, xmp:!0};
    x = function(a, b, c, l) {
      function p(d, e, f, g, h) {
        function m() {
          A && (k += "</" + A + ">", A = "");
        }
        var k = "", u = d[0], v = d[1], D = 1, n = u;
        switch(u) {
          case HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE:
            DEFINE_HTML2JSON__USE_XHTML && S(v) && (w = !0);
            k += v + r(d, !1, !1);
            break;
          case HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE:
            k += r(d, g, h);
            break;
          case HTML_DOT_JSON__NODE_TYPE.TEXT_NODE:
            m();
            k += h ? v : H("" + v);
            break;
          case HTML_DOT_JSON__NODE_TYPE.CDATA_SECTION:
            z(v) ? k += "<![CDATA[" + v + "]]\x3e" : DEFINE_HTML2JSON__DEBUG && q("CDATA_SECTION Error! [" + d + "]");
            break;
          case HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE:
            z(v) ? k += "\x3c!--" + v + "--\x3e" : DEFINE_HTML2JSON__DEBUG && q("COMMENT_NODE Error! [" + d + "]");
            break;
          case HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER:
            m();
            z(v) ? k += "\x3c!--[" + v + "]>" : DEFINE_HTML2JSON__DEBUG && q("CONDITIONAL_COMMENT_HIDE_LOWER Error! [" + d + "]");
            k += r(d, !0, h) + "<![endif]--\x3e";
            break;
          case HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER:
            m();
            z(v) ? k += "\x3c!--[" + v + "]>\x3c!--\x3e" : DEFINE_HTML2JSON__DEBUG && q("CONDITIONAL_COMMENT_SHOW_LOWER Error! [" + d + "]");
            k += r(d, !0, h) + "\x3c!--<![endif]--\x3e";
            break;
          case HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION:
            g = P(b, d, e, f, q);
            if (void 0 !== g && null !== g && "" !== g && (B(g) || t(g))) {
              return -1;
            }
            break;
          case HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE:
            n = d[1], D = 2;
          default:
            if (z(n)) {
              n = T(n);
              e = n[1];
              f = n[2];
              n = n[0];
              "p" !== A || Z[n] || (k += "</p>");
              A = "";
              k += "<" + n;
              e && (k += " id=" + L(e, E, F));
              f && (k += " class=" + L(f, E, F));
              if (!w) {
                var N = w ? !0 : Y[n] ? !0 : DEFINE_HTML2JSON__USE_XML_NS ? 0 < n.indexOf(":") : !1;
                N = w = N;
              }
              D = d[D];
              K(D) && (k += " " + C(D));
              k = (d = r(d, g || X[n], h || aa[n])) ? k + (">" + d) : k + (w ? "/>" : ">");
              w && !d || W[n] && !g ? A = V[n] ? "" : n : (k += "</" + n + ">", A = "");
              N && (w = !1);
            } else {
              DEFINE_HTML2JSON__DEBUG && q("Not html.json! [" + d + "]");
            }
        }
        return k;
      }
      function r(d, e, f) {
        for (var g = "", h = M(d), m; h < d.length; ++h) {
          m = d[h], B(m) ? g += p([HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, m], null, 0, e, f) : t(m) ? (m = p(m, d, h, e, f), -1 === m ? --h : g += m) : DEFINE_HTML2JSON__DEBUG && q("Invalid html.json! [" + m + "]");
        }
        return g;
      }
      function C(d) {
        var e = "", f, g;
        for (f in d) {
          var h = d[f];
          (g = 0 === f.indexOf(G)) && (f = f.substr(G.length));
          "className" === f && (f = "class");
          g && (h = Q(b, f, h, q));
          if ("" !== h && null != h && (e += " " + f, !U[f])) {
            if ("style" === f && I(h)) {
              g = void 0;
              var m = h, k = "";
              for (g in m) {
                h = m[g], "0px" === h && (h = 0), k += ";" + g + ":" + H("" + h);
              }
              h = k.substr(1);
              if (!h) {
                continue;
              }
            }
            e += "=" + L(h, E, F);
          }
        }
        return e.substr(1);
      }
      var q = "function" === typeof c ? c : function(d) {
      };
      c = c && "object" === typeof c ? c : l || {};
      var F = !!c.quotAlways, E = !!c.useSingleQuot, G = c.instructionAttrPrefix || DEFINE_HTML2JSON__INSTRUCTION_ATTR_PREFIX, A, w = !1;
      if (t(a)) {
        return J(a) === HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION && (a = [HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, a]), p(a, null, 0, !1, !1);
      }
      DEFINE_HTML2JSON__DEBUG && q("Invalid html.json document!");
    };
    DEFINE_HTML2JSON__EXPORT_JSON2HTML && (module.exports = x, x.DOCUMENT_NODE = HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE, x.DOCUMENT_FRAGMENT_NODE = HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, x.ELEMENT_NODE = HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE, x.TEXT_NODE = HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, x.CDATA_SECTION = HTML_DOT_JSON__NODE_TYPE.CDATA_SECTION, x.COMMENT_NODE = HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE, x.CONDITIONAL_COMMENT_HIDE_LOWER = HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER, 
    x.CONDITIONAL_COMMENT_SHOW_LOWER = HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER, x.PROCESSING_INSTRUCTION = HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION);
    y = function(a, b, c, l) {
      function p(d, e, f) {
        var g = d[0], h = d[1], m = 1, k = g;
        switch(g) {
          case HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE:
            r(d);
            break;
          case HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE:
            r(d);
            break;
          case HTML_DOT_JSON__NODE_TYPE.TEXT_NODE:
            break;
          case HTML_DOT_JSON__NODE_TYPE.CDATA_SECTION:
            if (!F && e) {
              return e.splice(f, 1), -1;
            }
            break;
          case HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE:
            if (!E && e) {
              return e.splice(f, 1), -1;
            }
            break;
          case HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER:
            r(d);
            break;
          case HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER:
            r(d);
            break;
          case HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION:
            d = P(C, d, e, f, q);
            if (void 0 !== d) {
              A = !0;
              if (null === d || "" === d) {
                return e ? e.splice(f, 1) : (a.length = 0, a.push(HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE, "")), -1;
              }
              if (!B(d) && t(d)) {
                return -1;
              }
            } else {
              w = !1;
            }
            break;
          case HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE:
            k = h, m = 2;
          default:
            if (z(k)) {
              if (1 + m <= d.length) {
                e = d[m];
                if (K(e)) {
                  for (var u in e) {
                    f = u, g = e[u], (h = 0 === u.indexOf(G)) && (u = u.substr(G.length)), "className" === u && (u = "class"), h && (g = Q(C, u, g, q), void 0 !== g ? (delete e[f], t(g) ? z(g[0]) ? (e[f] = g, w = !1) : DEFINE_HTML2JSON__DEBUG && q("Invalid dynamic attribute callback value! [" + f + "=" + g + "]") : null !== g && "" !== g && (e[u] = g)) : w = !1);
                  }
                  0 === Object.keys(e).length && d.splice(m, 1);
                }
                r(d);
              }
            } else {
              DEFINE_HTML2JSON__DEBUG && q("Not html.json! [" + d + "]");
            }
        }
      }
      function r(d) {
        for (var e = M(d), f; e < d.length; ++e) {
          f = d[e], B(f) || (t(f) ? -1 === p(f, d, e) && --e : DEFINE_HTML2JSON__DEBUG && q("Invalid html.json! [" + f + "]"));
        }
      }
      var C = "function" === typeof b ? b : function(d, e) {
      }, q = "function" === typeof c ? c : function(d) {
      };
      b = I(c) ? c : l || {};
      var F = !1 !== b.keepCDATASections, E = !1 !== b.keepComments, G = b.instructionAttrPrefix || DEFINE_HTML2JSON__INSTRUCTION_ATTR_PREFIX, A = !1, w = !0;
      if (t(a)) {
        return p(a, null, 0), A && R(a), w;
      }
      DEFINE_HTML2JSON__DEBUG && q("Invalid html.json document!");
    };
    DEFINE_HTML2JSON__EXPORT_JSON2JSON && (module.exports = y, y.DOCUMENT_NODE = HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE, y.DOCUMENT_FRAGMENT_NODE = HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, y.ELEMENT_NODE = HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE, y.TEXT_NODE = HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, y.CDATA_SECTION = HTML_DOT_JSON__NODE_TYPE.CDATA_SECTION, y.COMMENT_NODE = HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE, y.CONDITIONAL_COMMENT_HIDE_LOWER = HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER, 
    y.CONDITIONAL_COMMENT_SHOW_LOWER = HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER, y.PROCESSING_INSTRUCTION = HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION);
  })();
})();

