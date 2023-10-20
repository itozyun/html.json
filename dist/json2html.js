var DEFINE_HTML2JSON__EXPORT_JSON2HTML = !0, DEFINE_HTML2JSON__EXPORT_JSON2JSON = !1, DEFINE_HTML2JSON__DEBUG = !0, DEFINE_HTML2JSON__USE_XML_NS = !0, DEFINE_HTML2JSON__USE_XHTML = !0, DEFINE_HTML2JSON__GULP_PULGIN = !1, DEFINE_HTML2JSON__INSTRUCTION_ATTR_PREFIX = ":", HTML_DOT_JSON__NODE_TYPE = {ELEMENT_NODE:1, TEXT_NODE:3, CDATA_SECTION:4, PROCESSING_INSTRUCTION:7, COMMENT_NODE:8, DOCUMENT_NODE:9, DOCUMENT_FRAGMENT_NODE:11, CONDITIONAL_COMMENT_HIDE_LOWER:13, CONDITIONAL_COMMENT_SHOW_LOWER:14, NETSCAPE4_CONDITIONAL_COMMENT:15};
const DEFINE_HTML2JSON__PHASE = {ERROR:HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE - 2, NODE_START:HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE - 1, ELEMENT_NODE_START:HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE, TEXT_NODE_START:HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, CDATA_SECTION_START:HTML_DOT_JSON__NODE_TYPE.CDATA_SECTION, PROCESSING_INSTRUCTION_START:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION, COMMENT_NODE_START:HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE, DOCUMENT_NODE_START:HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE, 
DOCUMENT_FRAGMENT_NODE_START:HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, COMMENT_HIDE_LOWER_START:HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER, COMMENT_SHOW_LOWER_START:HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER, NETSCAPE4_CONDITIONAL_COMMENT:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT, DOCUMENT_NODE_VALUE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 1, TEXT_NODE_VALUE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 2, CDATA_SECTION_VALUE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 
3, COMMENT_NODE_VALUE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 4, COMMENT_HIDE_LOWER_FORMURA:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 5, COMMENT_SHOW_LOWER_FORMURA:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 6, PROCESSING_INSTRUCTION_NAME:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 7, TAG_NAME:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 8, ATTRIBUTES_START:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 9, ATTRIBUTE_PROPERTY:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 
10, ATTRIBUTE_VALUE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 11, STYLES_START:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 12, CSS_PROPERTY:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 13, CSS_VALUE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 14, IN_INSTRUCTION_ATTRIBUTE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 15, END_OF_NODE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 16, CLOSE_EMPTY_ELEMENT:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 
17, END_OF_ATTRIBUTES:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 18, END_OF_STYLES:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 19, TEXT_DATA:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 20, INSTRUCTION_ATTRIBUTE_NAME:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 21}, DEFINE_HTML2JSON__EXPECT = {ERROR:DEFINE_HTML2JSON__PHASE.ERROR, NODE_START:DEFINE_HTML2JSON__PHASE.NODE_START, DOCUMENT_NODE_VALUE:DEFINE_HTML2JSON__PHASE.DOCUMENT_NODE_VALUE, TEXT_NODE_VALUE:DEFINE_HTML2JSON__PHASE.TEXT_NODE_VALUE, 
CDATA_SECTION_VALUE:DEFINE_HTML2JSON__PHASE.CDATA_SECTION_VALUE, COMMENT_NODE_VALUE:DEFINE_HTML2JSON__PHASE.COMMENT_NODE_VALUE, COMMENT_HIDE_LOWER_FORMURA:DEFINE_HTML2JSON__PHASE.COMMENT_HIDE_LOWER_FORMURA, COMMENT_SHOW_LOWER_FORMURA:DEFINE_HTML2JSON__PHASE.COMMENT_SHOW_LOWER_FORMURA, PROCESSING_INSTRUCTION_NAME:DEFINE_HTML2JSON__PHASE.PROCESSING_INSTRUCTION_NAME, TAG_NAME:DEFINE_HTML2JSON__PHASE.TAG_NAME, ATTRIBUTES_START:DEFINE_HTML2JSON__PHASE.ATTRIBUTES_START, ATTRIBUTE_PROPERTY:DEFINE_HTML2JSON__PHASE.ATTRIBUTE_PROPERTY, 
ATTRIBUTE_VALUE:DEFINE_HTML2JSON__PHASE.ATTRIBUTE_VALUE, STYLES_START:DEFINE_HTML2JSON__PHASE.STYLES_START, CSS_PROPERTY:DEFINE_HTML2JSON__PHASE.CSS_PROPERTY, CSS_VALUE:DEFINE_HTML2JSON__PHASE.CSS_VALUE, IN_INSTRUCTION_ATTRIBUTE:DEFINE_HTML2JSON__PHASE.IN_INSTRUCTION_ATTRIBUTE, END_OF_NODE:DEFINE_HTML2JSON__PHASE.END_OF_NODE, NODE_TYPE:DEFINE_HTML2JSON__PHASE.END_OF_NODE + 1, PROCESSING_INSTRUCTION_ARGS:DEFINE_HTML2JSON__PHASE.END_OF_NODE + 2, INSTRUCTION_ATTRIBUTE_START:DEFINE_HTML2JSON__PHASE.END_OF_NODE + 
3, CHILD_NODES_START:DEFINE_HTML2JSON__PHASE.END_OF_NODE + 4, IN_CHILD_NODES:DEFINE_HTML2JSON__PHASE.END_OF_NODE + 5, END_OF_DOCUMENT:DEFINE_HTML2JSON__PHASE.END_OF_NODE + 6};
(function() {
  var q;
  (function() {
    function u(a) {
      return !(!a || a.pop !== [].pop);
    }
    function v(a) {
      return "" + a === a;
    }
    function A(a) {
      return v(a) || a === +a;
    }
    function N(a) {
      return 0 === a.indexOf("<?xml ") || 0 <= a.toUpperCase().indexOf('<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML ');
    }
    function H(a) {
      if (A(a)) {
        a = HTML_DOT_JSON__NODE_TYPE.TEXT_NODE;
      } else {
        if (u(a)) {
          if (v(a[0])) {
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
    function I(a) {
      return !u(a) && !(!a || "object" !== typeof a);
    }
    function O(a, b, d, g, r) {
      var n = b[1], B = b.slice(2);
      a = B.length ? a(n, B) : a(n);
      void 0 !== a && null !== a && "" !== a && (A(a) ? d ? d.splice(g, 1, a) : (b.length = 0, b.push(HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, b)) : u(a) ? a[0] === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE ? d ? (a.shift(), a.unshift(g, 1), d.splice.apply(d, a)) : (b.length = 0, b.push.apply(b, a)) : u(a[0]) ? d ? (a.unshift(g, 1), d.splice.apply(d, a)) : (b.length = 0, b.push(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE), b.push.apply(b, a)) : d ? d.splice(g, 1, a) : (b.length = 0, b.push(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, 
      a)) : DEFINE_HTML2JSON__DEBUG && r("PROCESSING_INSTRUCTION Error! [" + JSON.stringify(b) + "]"));
      return a;
    }
    function J(a, b, d, g, r) {
      if (u(g) && v(g[0])) {
        var n = g[0];
        g = g.slice(1);
        n = g.length ? b(n, g) : b(n);
      } else {
        v(g) ? n = b(g) : DEFINE_HTML2JSON__DEBUG && r("Invalid InstructionAttr value! [" + d + "=" + g + "]");
      }
      return a && u(n) ? J(!0, b, d, n, r) : n;
    }
    function C(a) {
      return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
    }
    function D(a, b, d) {
      a = C("" + a);
      if (a.match('"')) {
        a = a.match("'") ? b ? "'" + a.split("&apos;").join("'").split("'").join("&apos;") + "'" : '"' + a.split("&quot;").join('"').split('"').join("&quot;") + '"' : "'" + a + "'";
      } else if (d || a.match(/[^0-9a-z\.\-]/g) || 72 < a.length) {
        a = (b ? "'" : '"') + C(a) + (b ? "'" : '"');
      }
      return a;
    }
    function P(a) {
      var b = a.indexOf("#"), d = a.indexOf(".");
      if (b < d) {
        var g = a.split(".")[1];
        a = a.split(".")[0];
        if (0 < b) {
          var r = a.split("#")[1];
          a = a.split("#")[0];
        }
      } else {
        d < b && (r = a.split("#")[1], a = a.split("#")[0], 0 < d && (g = a.split(".")[1], a = a.split(".")[0]));
      }
      return [a, r, g];
    }
    var K = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, Q = {link:!0, meta:!0, br:!0, hr:!0, img:!0, input:!0, area:!0, base:!0, col:!0, embed:!0, keygen:!0, param:!0, track:!0, wbr:!0, command:!0, basefont:!0, frame:!0, isindex:!0, bgsound:!0}, R = {p:!0, dt:!0, dd:!0, li:!0, option:!0, thead:!0, tfoot:!0, th:!0, tr:!0, td:!0, rt:!0, rp:!0, optgroup:!0, caption:!0, colgroup:!0}, S = {a:!0, 
    audio:!0, del:!0, ins:!0, map:!0, noscript:!0, video:!0}, T = {svg:!0, math:!0}, U = {address:!0, article:!0, aside:!0, blockquote:!0, canvas:!0, details:!0, div:!0, dl:!0, fieldset:!0, figcaption:!0, figure:!0, footer:!0, form:!0, h1:!0, h2:!0, h3:!0, h4:!0, h5:!0, h6:!0, header:!0, hgroup:!0, hr:!0, legend:!0, main:!0, menu:!0, nav:!0, noscript:!0, ol:!0, p:!0, pre:!0, section:!0, ul:!0, center:!0, dir:!0, noframes:!0, marquee:!0}, V = {script:!0, style:!0, plaintext:!0, xmp:!0};
    q = function(a, b, d, g) {
      function r(e, t, h, k, c) {
        function m() {
          x && (f += "</" + x + ">", x = "");
        }
        var f = "", L = e[0], p = e[1], z = 1, l = L;
        switch(L) {
          case HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE:
            DEFINE_HTML2JSON__USE_XHTML && N(p) && (y = !0);
            f += p + n(e, !1, !1);
            break;
          case HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE:
            f += n(e, k, c);
            break;
          case HTML_DOT_JSON__NODE_TYPE.TEXT_NODE:
            m();
            f += c ? p : C("" + p);
            break;
          case HTML_DOT_JSON__NODE_TYPE.CDATA_SECTION:
            v(p) ? f += "<![CDATA[" + p + "]]\x3e" : DEFINE_HTML2JSON__DEBUG && w("CDATA_SECTION Error! [" + e + "]");
            break;
          case HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE:
            v(p) ? f += "\x3c!--" + p + "--\x3e" : DEFINE_HTML2JSON__DEBUG && w("COMMENT_NODE Error! [" + e + "]");
            break;
          case HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER:
            m();
            v(p) ? f += "\x3c!--[" + p + "]>" : DEFINE_HTML2JSON__DEBUG && w("CONDITIONAL_COMMENT_HIDE_LOWER Error! [" + e + "]");
            f += n(e, !0, c) + "<![endif]--\x3e";
            break;
          case HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER:
            m();
            v(p) ? f += "\x3c!--[" + p + "]>\x3c!--\x3e" : DEFINE_HTML2JSON__DEBUG && w("CONDITIONAL_COMMENT_SHOW_LOWER Error! [" + e + "]");
            f += n(e, !0, c) + "\x3c!--<![endif]--\x3e";
            break;
          case HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION:
            k = O(b, e, t, h, w);
            if (void 0 !== k && null !== k && "" !== k && (A(k) || u(k))) {
              return -1;
            }
            break;
          case HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE:
            l = e[1], z = 2;
          default:
            if (v(l)) {
              l = P(l);
              t = l[1];
              h = l[2];
              l = l[0];
              "p" !== x || U[l] || (f += "</p>");
              x = "";
              f += "<" + l;
              t && (f += " id=" + D(t, E, F));
              h && (f += " class=" + D(h, E, F));
              if (!y) {
                var G = y ? !0 : T[l] ? !0 : DEFINE_HTML2JSON__USE_XML_NS ? 0 < l.indexOf(":") : !1;
                G = y = G;
              }
              z = e[z];
              I(z) && (f += " " + B(z));
              f = (e = n(e, k || S[l], c || V[l])) ? f + (">" + e) : f + (y ? "/>" : ">");
              y && !e || R[l] && !k ? x = Q[l] ? "" : l : (f += "</" + l + ">", x = "");
              G && (y = !1);
            } else {
              DEFINE_HTML2JSON__DEBUG && w("Not html.json! [" + e + "]");
            }
        }
        return f;
      }
      function n(e, t, h) {
        var k = "";
        var c = e[0];
        var m = H(e) === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE, f = c === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE ? 2 : 1;
        for (c = m ? I(e[f]) ? f + 1 : f : c === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE ? 1 : c === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE || c === HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER || c === HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER ? 2 : Infinity; c < e.length; ++c) {
          m = e[c], A(m) ? k += r([HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, m], null, 0, t, h) : u(m) ? (m = r(m, e, c, t, h), -1 === m ? --c : k += m) : DEFINE_HTML2JSON__DEBUG && w("Invalid html.json! [" + m + "]");
        }
        return k;
      }
      function B(e) {
        var t = "", h, k;
        for (h in e) {
          var c = e[h];
          (k = 0 === h.indexOf(M)) && (h = h.substr(M.length));
          "className" === h && (h = "class");
          k && (c = J(!0, b, h, c, w));
          if (!(null == c || K[h] && !1 === c || (t += " " + h, K[h]))) {
            if ("style" === h && c && "object" === typeof c) {
              k = void 0;
              var m = c, f = "";
              for (k in m) {
                c = m[k], "0px" === c && (c = 0), f += ";" + k + ":" + C("" + c);
              }
              c = f.substr(1);
              if (!c) {
                continue;
              }
            }
            t += "=" + D(c, E, F);
          }
        }
        return t.substr(1);
      }
      var w = "function" === typeof d ? d : function(e) {
      };
      d = d && "object" === typeof d ? d : g || {};
      var F = !!d.quotAlways, E = !!d.useSingleQuot, M = d.instructionAttrPrefix || DEFINE_HTML2JSON__INSTRUCTION_ATTR_PREFIX, x, y = !1;
      if (u(a)) {
        return H(a) === HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION && (a = [HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, a]), r(a, null, 0, !1, !1);
      }
      DEFINE_HTML2JSON__DEBUG && w("Invalid html.json document!");
    };
    DEFINE_HTML2JSON__EXPORT_JSON2HTML && (module.exports = q, q.DOCUMENT_NODE = HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE, q.DOCUMENT_FRAGMENT_NODE = HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, q.ELEMENT_NODE = HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE, q.TEXT_NODE = HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, q.CDATA_SECTION = HTML_DOT_JSON__NODE_TYPE.CDATA_SECTION, q.COMMENT_NODE = HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE, q.CONDITIONAL_COMMENT_HIDE_LOWER = HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER, 
    q.CONDITIONAL_COMMENT_SHOW_LOWER = HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER, q.PROCESSING_INSTRUCTION = HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION);
  })();
})();

