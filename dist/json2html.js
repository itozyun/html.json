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
  var n;
  (function() {
    function u(a) {
      return !(!a || a.pop !== [].pop);
    }
    function q(a) {
      return "" + a === a;
    }
    function A(a) {
      return q(a) || a === +a;
    }
    function L(a) {
      return 0 === a.indexOf("<?xml ") || 0 <= a.toUpperCase().indexOf('<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML ');
    }
    function I(a) {
      if (A(a)) {
        a = HTML_DOT_JSON__NODE_TYPE.TEXT_NODE;
      } else {
        if (u(a)) {
          if (q(a[0])) {
            a = HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE;
          } else {
            var c = a[0];
            a = c === +c ? a[0] : -1;
          }
        } else {
          a = -1;
        }
      }
      return a;
    }
    function J(a) {
      return !u(a) && !(!a || "object" !== typeof a);
    }
    function M(a, c, f, r, v) {
      var w = c[1], B = c.slice(2);
      a = B.length ? a(w, B) : a(w);
      void 0 !== a && null !== a && "" !== a && (A(a) ? f ? f.splice(r, 1, a) : (c.length = 0, c.push(HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, c)) : u(a) ? a[0] === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE ? f ? (a.shift(), a.unshift(r, 1), f.splice.apply(f, a)) : (c.length = 0, c.push.apply(c, a)) : u(a[0]) ? f ? (a.unshift(r, 1), f.splice.apply(f, a)) : (c.length = 0, c.push(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE), c.push.apply(c, a)) : f ? f.splice(r, 1, a) : (c.length = 0, c.push(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, 
      a)) : DEFINE_HTML2JSON__DEBUG && v("PROCESSING_INSTRUCTION Error! [" + JSON.stringify(c) + "]"));
      return a;
    }
    function C(a) {
      return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
    }
    function E(a, c, f) {
      a = C("" + a);
      if (a.match('"')) {
        a = a.match("'") ? c ? "'" + a.split("&apos;").join("'").split("'").join("&apos;") + "'" : '"' + a.split("&quot;").join('"').split('"').join("&quot;") + '"' : "'" + a + "'";
      } else if (f || a.match(/[^0-9a-z\.\-]/g) || 72 < a.length) {
        a = (c ? "'" : '"') + C(a) + (c ? "'" : '"');
      }
      return a;
    }
    function N(a) {
      var c = a.indexOf("#"), f = a.indexOf(".");
      if (c < f) {
        var r = a.split(".")[1];
        a = a.split(".")[0];
        if (0 < c) {
          var v = a.split("#")[1];
          a = a.split("#")[0];
        }
      } else {
        f < c && (v = a.split("#")[1], a = a.split("#")[0], 0 < f && (r = a.split(".")[1], a = a.split(".")[0]));
      }
      return [a, v, r];
    }
    var O = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, P = {link:!0, meta:!0, br:!0, hr:!0, img:!0, input:!0, area:!0, base:!0, col:!0, embed:!0, keygen:!0, param:!0, track:!0, wbr:!0, command:!0, basefont:!0, frame:!0, isindex:!0, bgsound:!0}, Q = {p:!0, dt:!0, dd:!0, li:!0, option:!0, thead:!0, tfoot:!0, th:!0, tr:!0, td:!0, rt:!0, rp:!0, optgroup:!0, caption:!0, colgroup:!0}, R = {a:!0, 
    audio:!0, del:!0, ins:!0, map:!0, noscript:!0, video:!0}, S = {svg:!0, math:!0}, T = {address:!0, article:!0, aside:!0, blockquote:!0, canvas:!0, details:!0, div:!0, dl:!0, fieldset:!0, figcaption:!0, figure:!0, footer:!0, form:!0, h1:!0, h2:!0, h3:!0, h4:!0, h5:!0, h6:!0, header:!0, hgroup:!0, hr:!0, legend:!0, main:!0, menu:!0, nav:!0, noscript:!0, ol:!0, p:!0, pre:!0, section:!0, ul:!0, center:!0, dir:!0, noframes:!0, marquee:!0}, U = {script:!0, style:!0, plaintext:!0, xmp:!0};
    n = function(a, c, f, r) {
      function v(d, p, k, g, b) {
        function h() {
          x && (e += "</" + x + ">", x = "");
        }
        var e = "", D = d[0], m = d[1], z = 1, l = D;
        switch(D) {
          case HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE:
            DEFINE_HTML2JSON__USE_XHTML && L(m) && (y = !0);
            e += m + w(d, !1, !1);
            break;
          case HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE:
            e += w(d, g, b);
            break;
          case HTML_DOT_JSON__NODE_TYPE.TEXT_NODE:
            h();
            e += b ? m : C("" + m);
            break;
          case HTML_DOT_JSON__NODE_TYPE.CDATA_SECTION:
            q(m) ? e += "<![CDATA[" + m + "]]\x3e" : DEFINE_HTML2JSON__DEBUG && t("CDATA_SECTION Error! [" + d + "]");
            break;
          case HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE:
            q(m) ? e += "\x3c!--" + m + "--\x3e" : DEFINE_HTML2JSON__DEBUG && t("COMMENT_NODE Error! [" + d + "]");
            break;
          case HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER:
            h();
            q(m) ? e += "\x3c!--[" + m + "]>" : DEFINE_HTML2JSON__DEBUG && t("CONDITIONAL_COMMENT_HIDE_LOWER Error! [" + d + "]");
            e += w(d, !0, b) + "<![endif]--\x3e";
            break;
          case HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER:
            h();
            q(m) ? e += "\x3c!--[" + m + "]>\x3c!--\x3e" : DEFINE_HTML2JSON__DEBUG && t("CONDITIONAL_COMMENT_SHOW_LOWER Error! [" + d + "]");
            e += w(d, !0, b) + "\x3c!--<![endif]--\x3e";
            break;
          case HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION:
            g = M(c, d, p, k, t);
            if (void 0 !== g && null !== g && "" !== g && (A(g) || u(g))) {
              return -1;
            }
            break;
          case HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE:
            l = d[1], z = 2;
          default:
            if (q(l)) {
              l = N(l);
              p = l[1];
              k = l[2];
              l = l[0];
              "p" !== x || T[l] || (e += "</p>");
              x = "";
              e += "<" + l;
              p && (e += " id=" + E(p, F, G));
              k && (e += " class=" + E(k, F, G));
              if (!y) {
                var H = y ? !0 : S[l] ? !0 : DEFINE_HTML2JSON__USE_XML_NS ? 0 < l.indexOf(":") : !1;
                H = y = H;
              }
              z = d[z];
              J(z) && (e += " " + B(z));
              e = (d = w(d, g || R[l], b || U[l])) ? e + (">" + d) : e + (y ? "/>" : ">");
              y && !d || Q[l] && !g ? x = P[l] ? "" : l : (e += "</" + l + ">", x = "");
              H && (y = !1);
            } else {
              DEFINE_HTML2JSON__DEBUG && t("Not html.json! [" + d + "]");
            }
        }
        return e;
      }
      function w(d, p, k) {
        var g = "";
        var b = d[0];
        var h = I(d) === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE, e = b === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE ? 2 : 1;
        for (b = h ? J(d[e]) ? e + 1 : e : b === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE ? 1 : b === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE || b === HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER || b === HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER ? 2 : Infinity; b < d.length; ++b) {
          h = d[b], A(h) ? g += v([HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, h], null, 0, p, k) : u(h) ? (h = v(h, d, b, p, k), -1 === h ? --b : g += h) : DEFINE_HTML2JSON__DEBUG && t("Invalid html.json! [" + h + "]");
        }
        return g;
      }
      function B(d) {
        var p = "", k, g;
        for (k in d) {
          var b = d[k];
          (g = 0 === k.indexOf(K)) && (k = k.substr(K.length));
          "className" === k && (k = "class");
          if (g) {
            var h = void 0;
            g = c;
            var e = k, D = t;
            u(b) && q(b[0]) ? (h = b[0], b = b.slice(1), h = b.length ? g(h, b) : g(h)) : q(b) ? h = g(b) : DEFINE_HTML2JSON__DEBUG && D("Invalid InstructionAttr value! [" + e + "=" + b + "]");
            b = h;
          }
          if ("" !== b && null != b && (p += " " + k, !O[k])) {
            if ("style" === k && b && "object" === typeof b) {
              g = void 0;
              h = b;
              e = "";
              for (g in h) {
                b = h[g], "0px" === b && (b = 0), e += ";" + g + ":" + C("" + b);
              }
              b = e.substr(1);
              if (!b) {
                continue;
              }
            }
            p += "=" + E(b, F, G);
          }
        }
        return p.substr(1);
      }
      var t = "function" === typeof f ? f : function(d) {
      };
      f = f && "object" === typeof f ? f : r || {};
      var G = !!f.quotAlways, F = !!f.useSingleQuot, K = f.instructionAttrPrefix || DEFINE_HTML2JSON__INSTRUCTION_ATTR_PREFIX, x, y = !1;
      if (u(a)) {
        return I(a) === HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION && (a = [HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, a]), v(a, null, 0, !1, !1);
      }
      DEFINE_HTML2JSON__DEBUG && t("Invalid html.json document!");
    };
    DEFINE_HTML2JSON__EXPORT_JSON2HTML && (module.exports = n, n.DOCUMENT_NODE = HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE, n.DOCUMENT_FRAGMENT_NODE = HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, n.ELEMENT_NODE = HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE, n.TEXT_NODE = HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, n.CDATA_SECTION = HTML_DOT_JSON__NODE_TYPE.CDATA_SECTION, n.COMMENT_NODE = HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE, n.CONDITIONAL_COMMENT_HIDE_LOWER = HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER, 
    n.CONDITIONAL_COMMENT_SHOW_LOWER = HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER, n.PROCESSING_INSTRUCTION = HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION);
  })();
})();

