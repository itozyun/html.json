var DEFINE_HTML2JSON__EXPORT_JSON2HTML = !0, DEFINE_HTML2JSON__EXPORT_JSON2JSON = !1, DEFINE_HTML2JSON__DEBUG = !0, DEFINE_HTML2JSON__USE_XML_NS = !0, DEFINE_HTML2JSON__USE_XHTML = !0, DEFINE_HTML2JSON__INSTRUCTION_ATTR_PREFIX = ":", HTML_DOT_JSON__NODE_TYPE = {ELEMENT_NODE:1, TEXT_NODE:3, CDATA_SECTION:4, PROCESSING_INSTRUCTION:7, COMMENT_NODE:8, DOCUMENT_NODE:9, DOCUMENT_FRAGMENT_NODE:11, CONDITIONAL_COMMENT_HIDE_LOWER:13, CONDITIONAL_COMMENT_SHOW_LOWER:14, NETSCAPE4_CONDITIONAL_COMMENT:15};
const DEFINE_HTML2JSON__PHASE = {ERROR:HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE - 2, NODE_START:HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE - 1, ELEMENT_NODE_START:HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE, TEXT_NODE_START:HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, CDATA_SECTION_START:HTML_DOT_JSON__NODE_TYPE.CDATA_SECTION, PROCESSING_INSTRUCTION_START:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION, COMMENT_NODE_START:HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE, DOCUMENT_NODE_START:HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE, 
DOCUMENT_FRAGMENT_NODE_START:HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, COMMENT_HIDE_LOWER_START:HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER, COMMENT_SHOW_LOWER_START:HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER, NETSCAPE4_CONDITIONAL_COMMENT:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT, DOCUMENT_NODE_VALUE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 1, TEXT_NODE_VALUE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 2, CDATA_SECTION_VALUE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 
3, COMMENT_NODE_VALUE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 4, COMMENT_HIDE_LOWER_FORMURA:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 5, COMMENT_SHOW_LOWER_FORMURA:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 6, PROCESSING_INSTRUCTION_NAME:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 7, TAG_NAME:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 8, ATTRIBUTES_START:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 9, ATTRIBUTE_PROPERTY:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 
10, ATTRIBUTE_VALUE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 11, STYLES_START:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 12, CSS_PROPERTY:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 13, CSS_VALUE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 14, IN_INSTRUCTION_ATTRIBUTE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 15, END_OF_NODE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 16, CLOSE_EMPTY_ELEMENT:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 
17, END_OF_ATTRIBUTES:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 18, END_OF_STYLES:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 19, TEXT_DATA:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 20, INSTRUCTION_ATTRIBUTE_NAME:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 21}, DEFINE_HTML2JSON__EXPECT = {ERROR:DEFINE_HTML2JSON__PHASE.ERROR, NODE_START:DEFINE_HTML2JSON__PHASE.NODE_START, DOCUMENT_NODE_VALUE:DEFINE_HTML2JSON__PHASE.DOCUMENT_NODE_VALUE, TEXT_NODE_VALUE:DEFINE_HTML2JSON__PHASE.TEXT_NODE_VALUE, 
CDATA_SECTION_VALUE:DEFINE_HTML2JSON__PHASE.CDATA_SECTION_VALUE, COMMENT_NODE_VALUE:DEFINE_HTML2JSON__PHASE.COMMENT_NODE_VALUE, COMMENT_HIDE_LOWER_FORMURA:DEFINE_HTML2JSON__PHASE.COMMENT_HIDE_LOWER_FORMURA, COMMENT_SHOW_LOWER_FORMURA:DEFINE_HTML2JSON__PHASE.COMMENT_SHOW_LOWER_FORMURA, PROCESSING_INSTRUCTION_NAME:DEFINE_HTML2JSON__PHASE.PROCESSING_INSTRUCTION_NAME, TAG_NAME:DEFINE_HTML2JSON__PHASE.TAG_NAME, ATTRIBUTES_START:DEFINE_HTML2JSON__PHASE.ATTRIBUTES_START, ATTRIBUTE_PROPERTY:DEFINE_HTML2JSON__PHASE.ATTRIBUTE_PROPERTY, 
ATTRIBUTE_VALUE:DEFINE_HTML2JSON__PHASE.ATTRIBUTE_VALUE, STYLES_START:DEFINE_HTML2JSON__PHASE.STYLES_START, CSS_PROPERTY:DEFINE_HTML2JSON__PHASE.CSS_PROPERTY, CSS_VALUE:DEFINE_HTML2JSON__PHASE.CSS_VALUE, IN_INSTRUCTION_ATTRIBUTE:DEFINE_HTML2JSON__PHASE.IN_INSTRUCTION_ATTRIBUTE, END_OF_NODE:DEFINE_HTML2JSON__PHASE.END_OF_NODE, NODE_TYPE:DEFINE_HTML2JSON__PHASE.END_OF_NODE + 1, PROCESSING_INSTRUCTION_ARGS:DEFINE_HTML2JSON__PHASE.END_OF_NODE + 2, INSTRUCTION_ATTRIBUTE_START:DEFINE_HTML2JSON__PHASE.END_OF_NODE + 
3, CHILD_NODES_START:DEFINE_HTML2JSON__PHASE.END_OF_NODE + 4, IN_CHILD_NODES:DEFINE_HTML2JSON__PHASE.END_OF_NODE + 5, END_OF_DOCUMENT:DEFINE_HTML2JSON__PHASE.END_OF_NODE + 6};
(function() {
  var p;
  (function() {
    function v(a) {
      return !(!a || a.pop !== [].pop);
    }
    function t(a) {
      return "" + a === a;
    }
    function C(a) {
      return t(a) || a === +a;
    }
    function I(a) {
      if (C(a)) {
        a = HTML_DOT_JSON__NODE_TYPE.TEXT_NODE;
      } else {
        if (v(a)) {
          if (t(a[0])) {
            a = HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE;
          } else {
            var r = a[0];
            a = r === +r ? a[0] : -1;
          }
        } else {
          a = -1;
        }
      }
      return a;
    }
    function J(a) {
      return !v(a) && !(!a || "object" !== typeof a);
    }
    function D(a) {
      return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
    }
    function E(a, r, q) {
      a = D("" + a);
      if (a.match('"')) {
        a = a.match("'") ? r ? "'" + a.split("&apos;").join("'").split("'").join("&apos;") + "'" : '"' + a.split("&quot;").join('"').split('"').join("&quot;") + '"' : "'" + a + "'";
      } else if (q || a.match(/[^0-9a-z\.\-]/g) || 72 < a.length) {
        a = (r ? "'" : '"') + D(a) + (r ? "'" : '"');
      }
      return a;
    }
    var L = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, M = {link:!0, meta:!0, br:!0, hr:!0, img:!0, input:!0, area:!0, base:!0, col:!0, embed:!0, keygen:!0, param:!0}, N = {p:!0, dt:!0, dd:!0, li:!0, option:!0, thead:!0, tfoot:!0, th:!0, tr:!0, td:!0, rt:!0, rp:!0, optgroup:!0, caption:!0, colgroup:!0, col:!0}, O = {a:!0, audio:!0, del:!0, ins:!0, map:!0, noscript:!0, video:!0}, P = {svg:!0, 
    math:!0}, Q = {table:!0, img:!0, svg:!0, picture:!0, object:!0, embed:!0, video:!0, audio:!0, blockquot:!0, form:!0, fieldset:!0}, R = {script:!0, style:!0, plaintext:!0, xmp:!0, noscript:!0};
    p = function(a, r, q, S) {
      function F(c, g, h, m, b) {
        var e = "", w = c[0], k = c[1], z = 1, d = w;
        switch(w) {
          case HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE:
            if (m = DEFINE_HTML2JSON__USE_XHTML) {
              m = 0 === k.indexOf("<?xml ") || 0 <= k.toUpperCase().indexOf('<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML ');
            }
            m && (x = !0);
            e += k + B(c, !1, !1);
            break;
          case HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE:
            e += B(c, m, b);
            break;
          case HTML_DOT_JSON__NODE_TYPE.TEXT_NODE:
            y && (e += "</" + y + ">", y = "");
            e += b ? k : D("" + k);
            break;
          case HTML_DOT_JSON__NODE_TYPE.CDATA_SECTION:
            t(k) ? e += "<![CDATA[" + k + "]]\x3e" : DEFINE_HTML2JSON__DEBUG && u("CDATA_SECTION Error! [" + c + "]");
            break;
          case HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE:
            t(k) ? e += "\x3c!--" + k + "--\x3e" : DEFINE_HTML2JSON__DEBUG && u("COMMENT_NODE Error! [" + c + "]");
            break;
          case HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER:
            t(k) ? e += "\x3c!--[" + k + "]>" : DEFINE_HTML2JSON__DEBUG && u("CONDITIONAL_COMMENT_HIDE_LOWER Error! [" + c + "]");
            e += B(c, !0, b) + "<![endif]--\x3e";
            break;
          case HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER:
            t(k) ? e += "\x3c!--[" + k + "]>\x3c!--\x3e" : DEFINE_HTML2JSON__DEBUG && u("CONDITIONAL_COMMENT_SHOW_LOWER Error! [" + c + "]");
            e += B(c, !0, b) + "\x3c!--<![endif]--\x3e";
            break;
          case HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION:
            m = u;
            b = c[1];
            var A = c.slice(2);
            b = A.length ? r(b, A) : r(b);
            void 0 !== b && null !== b && "" !== b && (C(b) ? g ? g.splice(h, 1, b) : (c.length = 0, c.push(HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, c)) : v(b) ? b[0] === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE ? g ? (b.shift(), b.unshift(h, 1), g.splice.apply(g, b)) : (c.length = 0, c.push.apply(c, b)) : v(b[0]) ? g ? (b.unshift(h, 1), g.splice.apply(g, b)) : (c.length = 0, c.push(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE), c.push.apply(c, b)) : g ? g.splice(h, 1, b) : (c.length = 0, c.push(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, 
            b)) : DEFINE_HTML2JSON__DEBUG && m("PROCESSING_INSTRUCTION Error! [" + JSON.stringify(c) + "]"));
            if (void 0 !== b && null !== b && "" !== b && (C(b) || v(b))) {
              return -1;
            }
            break;
          case HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE:
            d = c[1], z = 2;
          default:
            if (t(d)) {
              g = d.indexOf("#");
              h = d.indexOf(".");
              if (g < h) {
                var f = d.split(".")[1];
                d = d.split(".")[0];
                if (0 < g) {
                  var n = d.split("#")[1];
                  d = d.split("#")[0];
                }
              } else {
                h < g && (n = d.split("#")[1], d = d.split("#")[0], 0 < h && (f = d.split(".")[1], d = d.split(".")[0]));
              }
              d = [d, n, f];
              g = d[1];
              h = d[2];
              d = d[0];
              "p" === y && Q[d] && (e += "</p>");
              y = "";
              e += "<" + d;
              g && (e += " id=" + E(g, G, H));
              h && (e += " class=" + E(h, G, H));
              x || (A = x ? !0 : P[d] ? !0 : DEFINE_HTML2JSON__USE_XML_NS ? 0 < d.indexOf(":") : !1, A = x = A);
              z = c[z];
              if (J(z)) {
                var l;
                g = "";
                for (l in z) {
                  if (f = z[l], (h = 0 === l.indexOf(K)) && (l = l.substr(K.length)), "className" === l && (l = "class"), h && (n = void 0, h = r, k = l, w = u, v(f) && t(f[0]) ? (n = f[0], f = f.slice(1), n = f.length ? h(n, f) : h(n)) : t(f) ? n = h(f) : DEFINE_HTML2JSON__DEBUG && w("Invalid InstructionAttr value! [" + k + "=" + f + "]"), f = n), "" !== f && null != f && (g += " " + l, !L[l])) {
                    if ("style" === l && f && "object" === typeof f) {
                      h = void 0;
                      n = f;
                      k = "";
                      for (h in n) {
                        f = n[h], "0px" === f && (f = 0), k += ";" + h + ":" + D("" + f);
                      }
                      f = k.substr(1);
                      if (!f) {
                        continue;
                      }
                    }
                    g += "=" + E(f, G, H);
                  }
                }
                l = g.substr(1);
                e += " " + l;
              }
              e = (c = B(c, m || O[d], b || R[d])) ? e + (">" + c) : e + (x ? "/>" : ">");
              x && !c || N[d] && !m ? y = M[d] ? "" : d : (e += "</" + d + ">", y = "");
              A && (x = !1);
            } else {
              DEFINE_HTML2JSON__DEBUG && u("Not html.json! [" + c + "]");
            }
        }
        return e;
      }
      function B(c, g, h) {
        var m = "";
        var b = c[0];
        var e = I(c) === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE, w = b === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE ? 2 : 1;
        for (b = e ? J(c[w]) ? w + 1 : w : b === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE ? 1 : b === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE || b === HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER || b === HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER ? 2 : Infinity; b < c.length; ++b) {
          e = c[b], C(e) ? m += F([HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, e], null, 0, g, h) : v(e) ? (e = F(e, c, b, g, h), -1 === e ? --b : m += e) : DEFINE_HTML2JSON__DEBUG && u("Invalid html.json! [" + e + "]");
        }
        return m;
      }
      var u = "function" === typeof q ? q : function(c) {
      };
      q = q && "object" === typeof q ? q : S || {};
      var H = !!q.quotAlways, G = !!q.useSingleQuot, K = q.instructionAttrPrefix || DEFINE_HTML2JSON__INSTRUCTION_ATTR_PREFIX, y, x = !1;
      if (v(a)) {
        return I(a) === HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION && (a = [HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, a]), F(a, null, 0, !1, !1);
      }
      DEFINE_HTML2JSON__DEBUG && u("Invalid html.json document!");
    };
    DEFINE_HTML2JSON__EXPORT_JSON2HTML && (module.exports = p, p.DOCUMENT_NODE = HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE, p.DOCUMENT_FRAGMENT_NODE = HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, p.ELEMENT_NODE = HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE, p.TEXT_NODE = HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, p.CDATA_SECTION = HTML_DOT_JSON__NODE_TYPE.CDATA_SECTION, p.COMMENT_NODE = HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE, p.CONDITIONAL_COMMENT_HIDE_LOWER = HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER, 
    p.CONDITIONAL_COMMENT_SHOW_LOWER = HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER, p.PROCESSING_INSTRUCTION = HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION);
  })();
})();

