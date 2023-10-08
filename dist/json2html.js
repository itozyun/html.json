var DEFINE_HTML2JSON__EXPORT_JSON2HTML = !0, DEFINE_HTML2JSON__EXPORT_JSON2JSON = !1, DEFINE_HTML2JSON__DEBUG = !0, DEFINE_HTML2JSON__USE_XML_NS = !0, DEFINE_HTML2JSON__USE_XHTML = !0, DEFINE_INSTRUCTION_ATTR_PREFIX = ":", HTML_DOT_JSON__NODE_TYPE = {DOCUMENT_NODE:0, DOCUMENT_FRAGMENT_NODE:1, ELEMENT_NODE:2, TEXT_NODE:3, COMMENT_NODE:4, CONDITIONAL_COMMENT_HIDE_LOWER:5, CONDITIONAL_COMMENT_SHOW_LOWER:6, PROCESSING_INSTRUCTION:7};
const EXPECT = {ERROR:HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE - 2, NODE_START:HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE - 1, DOCUMENT_NODE_VALUE:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 1, TEXT_NODE_VALUE:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 2, COMMENT_NODE_VALUE:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 3, COMMENT_HIDE_LOWER_FORMURA:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 4, COMMENT_SHOW_LOWER_FORMURA:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 5, PROCESSING_INSTRUCTION_NAME:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 
6, TAG_NAME:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 7, ATTRIBUTES_START:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 8, ATTRIBUTE_PROPERTY:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 9, ATTRIBUTE_VALUE:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 10, STYLES_START:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 11, CSS_PROPERTY:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 12, CSS_VALUE:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 13, IN_INSTRUCTION_ATTRIBUTE:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 
14, END_OF_NODE:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 15, NODE_TYPE:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 16, PROCESSING_INSTRUCTION_ARGS:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 17, INSTRUCTION_ATTRIBUTE_START:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 18, CHILD_NODES_START:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 19, IN_CHILD_NODES:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 20, END_OF_DOCUMENT:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 
21}, PHASE = {ERROR:EXPECT.ERROR, NODE_START:EXPECT.NODE_START, DOCUMENT_NODE_START:HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE, DOCUMENT_FRAGMENT_NODE_START:HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, ELEMENT_NODE_START:HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE, TEXT_NODE_START:HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, COMMENT_NODE_START:HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE, COMMENT_HIDE_LOWER_START:HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER, COMMENT_SHOW_LOWER_START:HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER, 
PROCESSING_INSTRUCTION_START:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION, DOCUMENT_NODE_VALUE:EXPECT.DOCUMENT_NODE_VALUE, TEXT_NODE_VALUE:EXPECT.TEXT_NODE_VALUE, COMMENT_NODE_VALUE:EXPECT.COMMENT_NODE_VALUE, COMMENT_HIDE_LOWER_FORMURA:EXPECT.COMMENT_HIDE_LOWER_FORMURA, COMMENT_SHOW_LOWER_FORMURA:EXPECT.COMMENT_SHOW_LOWER_FORMURA, PROCESSING_INSTRUCTION_NAME:EXPECT.PROCESSING_INSTRUCTION_NAME, TAG_NAME:EXPECT.TAG_NAME, ATTRIBUTES_START:EXPECT.ATTRIBUTES_START, ATTRIBUTE_PROPERTY:EXPECT.ATTRIBUTE_PROPERTY, 
ATTRIBUTE_VALUE:EXPECT.ATTRIBUTE_VALUE, STYLES_START:EXPECT.STYLES_START, CSS_PROPERTY:EXPECT.CSS_PROPERTY, CSS_VALUE:EXPECT.CSS_VALUE, IN_INSTRUCTION_ATTRIBUTE:EXPECT.IN_INSTRUCTION_ATTRIBUTE, END_OF_NODE:EXPECT.END_OF_NODE, CLOSE_EMPTY_ELEMENT:EXPECT.END_OF_NODE + 1, END_OF_ATTRIBUTES:EXPECT.END_OF_NODE + 2, END_OF_STYLES:EXPECT.END_OF_NODE + 3, TEXT_DATA:EXPECT.END_OF_NODE + 4, INSTRUCTION_ATTRIBUTE_NAME:EXPECT.END_OF_NODE + 5};
(function() {
  var q;
  (function() {
    function t(a) {
      return !(!a || a.pop !== [].pop);
    }
    function u(a) {
      return "" + a === a;
    }
    function C(a) {
      return u(a) || a === +a;
    }
    function I(a) {
      if (C(a)) {
        a = HTML_DOT_JSON__NODE_TYPE.TEXT_NODE;
      } else {
        if (t(a)) {
          if (u(a[0])) {
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
      return !t(a) && !(!a || "object" !== typeof a);
    }
    function D(a) {
      return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
    }
    function E(a, r, p) {
      a = D("" + a);
      if (a.match('"')) {
        a = a.match("'") ? r ? "'" + a.split("&apos;").join("'").split("'").join("&apos;") + "'" : '"' + a.split("&quot;").join('"').split('"').join("&quot;") + '"' : "'" + a + "'";
      } else if (p || a.match(/[^0-9a-z\.\-]/g) || 72 < a.length) {
        a = (r ? '"' : "'") + D(a) + (r ? '"' : "'");
      }
      return a;
    }
    var K = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, M = {link:!0, meta:!0, br:!0, hr:!0, img:!0, input:!0, area:!0, base:!0, col:!0, embed:!0, keygen:!0, param:!0}, N = {p:!0, dt:!0, dd:!0, li:!0, option:!0, thead:!0, tfoot:!0, th:!0, tr:!0, td:!0, rt:!0, rp:!0, optgroup:!0, caption:!0, colgroup:!0, col:!0}, O = {a:!0, audio:!0, del:!0, ins:!0, map:!0, noscript:!0, video:!0}, P = {svg:!0, 
    math:!0}, Q = {table:!0, img:!0, svg:!0, picture:!0, object:!0, embed:!0, video:!0, audio:!0, blockquot:!0, form:!0, fieldset:!0}, R = {script:!0, style:!0, plaintext:!0, xmp:!0, noscript:!0};
    q = function(a, r, p, S) {
      function F(c, g, h, m, b) {
        var e = "", v = c[0], k = c[1], z = 1, d = v;
        switch(v) {
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
          case HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE:
            u(k) ? e += "\x3c!--" + k + "--\x3e" : DEFINE_HTML2JSON__DEBUG && w("COMMENT_NODE Error! [" + c + "]");
            break;
          case HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER:
            u(k) ? e += "\x3c!--[" + k + "]>" : DEFINE_HTML2JSON__DEBUG && w("CONDITIONAL_COMMENT_HIDE_LOWER Error! [" + c + "]");
            e += B(c, !0, b) + "<![endif]--\x3e";
            break;
          case HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER:
            u(k) ? e += "\x3c!--[" + k + "]>\x3c!--\x3e" : DEFINE_HTML2JSON__DEBUG && w("CONDITIONAL_COMMENT_SHOW_LOWER Error! [" + c + "]");
            e += B(c, !0, b) + "\x3c!--<![endif]--\x3e";
            break;
          case HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION:
            m = w;
            b = c[1];
            var A = c.slice(2);
            b = A.length ? r(b, A) : r(b);
            void 0 !== b && null !== b && "" !== b && (C(b) ? g ? g.splice(h, 1, b) : (c.length = 0, c.push(HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, c)) : t(b) ? b[0] === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE ? g ? (b.shift(), b.unshift(h, 1), g.splice.apply(g, b)) : (c.length = 0, c.push.apply(c, b)) : t(b[0]) ? g ? (b.unshift(h, 1), g.splice.apply(g, b)) : (c.length = 0, c.push(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE), c.push.apply(c, b)) : g ? g.splice(h, 1, b) : (c.length = 0, c.push(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, 
            b)) : DEFINE_HTML2JSON__DEBUG && m("PROCESSING_INSTRUCTION Error! [" + JSON.stringify(c) + "]"));
            if (void 0 !== b && null !== b && "" !== b && (C(b) || t(b))) {
              return -1;
            }
            break;
          case HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE:
            d = c[1], z = 2;
          default:
            if (u(d)) {
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
                  if (f = z[l], (h = 0 === l.indexOf(L)) && (l = l.substr(L.length)), "className" === l && (l = "class"), h && (n = void 0, h = r, k = l, v = w, t(f) && u(f[0]) ? (n = f[0], f = f.slice(1), n = f.length ? h(n, f) : h(n)) : u(f) ? n = h(f) : DEFINE_HTML2JSON__DEBUG && v("Invalid InstructionAttr value! [" + k + "=" + f + "]"), f = n), K[l] || "" !== f && null != f) {
                    if (g += " " + l, !K[l]) {
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
                }
                l = g.substr(1);
                e += " " + l;
              }
              e = (c = B(c, m || O[d], b || R[d])) ? e + (">" + c) : e + (x ? "/>" : ">");
              x && !c || N[d] && !m ? y = M[d] ? "" : d : (e += "</" + d + ">", y = "");
              A && (x = !1);
            } else {
              DEFINE_HTML2JSON__DEBUG && w("Not html.json! [" + c + "]");
            }
        }
        return e;
      }
      function B(c, g, h) {
        var m = "";
        var b = c[0];
        var e = I(c) === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE, v = b === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE ? 2 : 1;
        for (b = e ? J(c[v]) ? v + 1 : v : b === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE ? 1 : b === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE || b === HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER || b === HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER ? 2 : Infinity; b < c.length; ++b) {
          e = c[b], C(e) ? m += F([HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, e], null, 0, g, h) : t(e) ? (e = F(e, c, b, g, h), -1 === e ? --b : m += e) : DEFINE_HTML2JSON__DEBUG && w("Invalid html.json! [" + e + "]");
        }
        return m;
      }
      var w = "function" === typeof p ? p : function(c) {
      };
      p = p && "object" === typeof p ? p : S || {};
      var H = !!p.quotAlways, G = !!p.useSingleQuot, L = p.instructionAttrPrefix || DEFINE_INSTRUCTION_ATTR_PREFIX, y, x = !1;
      if (t(a)) {
        return I(a) === HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION && (a = [HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, a]), F(a, null, 0, !1, !1);
      }
      DEFINE_HTML2JSON__DEBUG && w("Invalid html.json document!");
    };
    DEFINE_HTML2JSON__EXPORT_JSON2HTML && (module.exports = q, q.DOCUMENT_NODE = HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE, q.DOCUMENT_FRAGMENT_NODE = HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, q.ELEMENT_NODE = HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE, q.TEXT_NODE = HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, q.COMMENT_NODE = HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE, q.CONDITIONAL_COMMENT_HIDE_LOWER = HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER, q.CONDITIONAL_COMMENT_SHOW_LOWER = HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER, 
    q.PROCESSING_INSTRUCTION = HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION);
  })();
})();

