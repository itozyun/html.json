var DEFINE_HTML2JSON__EXPORT_JSON2HTML = !0, DEFINE_HTML2JSON__EXPORT_JSON2JSON = !1, DEFINE_HTML2JSON__DEBUG = !0, DEFINE_HTML2JSON__USE_XML_NS = !0, DEFINE_HTML2JSON__USE_XHTML = !0, DEFINE_INSTRUCTION_ATTR_PREFIX = ":", HTML_DOT_JSON__NODE_TYPE = {DOCUMENT_NODE:0, DOCUMENT_FRAGMENT_NODE:1, ELEMENT_NODE:2, TEXT_NODE:3, COMMENT_NODE:4, CONDITIONAL_COMMENT_HIDE_LOWER:5, CONDITIONAL_COMMENT_SHOW_LOWER:6, PROCESSING_INSTRUCTION:7};
(function(I) {
  var q;
  (function() {
    function r(a) {
      return !(!a || a.pop !== [].pop);
    }
    function t(a) {
      return "" + a === a;
    }
    function C(a) {
      return t(a) || a === a - 0;
    }
    function J(a) {
      return C(a) ? HTML_DOT_JSON__NODE_TYPE.TEXT_NODE : r(a) ? t(a[0]) ? HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE : a[0] : -1;
    }
    function K(a) {
      return !r(a) && !(!a || "object" !== typeof a);
    }
    function D(a) {
      return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
    }
    function E(a, w, p) {
      a = D("" + a);
      if (a.match('"')) {
        a = a.match("'") ? w ? "'" + a.split("&apos;").join("'").split("'").join("&apos;") + "'" : '"' + a.split("&quot;").join('"').split('"').join("&quot;") + '"' : "'" + a + "'";
      } else if (p || a.match(/[^0-9a-z\.\-]/g) || 72 < a.length) {
        a += (w ? '"' : "'") + D(a) + (w ? '"' : "'");
      }
      return a;
    }
    var L = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, N = {link:!0, meta:!0, br:!0, hr:!0, img:!0, input:!0, area:!0, base:!0, col:!0, embed:!0, keygen:!0, param:!0}, O = {p:!0, dt:!0, dd:!0, li:!0, option:!0, thead:!0, tfoot:!0, th:!0, tr:!0, td:!0, rt:!0, rp:!0, optgroup:!0, caption:!0, colgroup:!0, col:!0}, P = {a:!0, audio:!0, del:!0, ins:!0, map:!0, noscript:!0, video:!0}, Q = {svg:!0, 
    math:!0}, R = {table:!0, img:!0, svg:!0, picture:!0, object:!0, embed:!0, video:!0, audio:!0, blockquot:!0, form:!0, fieldset:!0}, S = {script:!0, style:!0, plaintext:!0, xmp:!0, noscript:!0};
    q = function(a, w, p, T) {
      function F(c, g, h, l, b) {
        var e = "", u = c[0], k = c[1], z = 1, d = u;
        switch(u) {
          case HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE:
            if (l = DEFINE_HTML2JSON__USE_XHTML) {
              l = 0 === k.indexOf("<?xml ") || 0 <= k.toUpperCase().indexOf('<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML ');
            }
            l && (x = !0);
            e += k + B(c, !1, !1);
            break;
          case HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE:
            e += B(c, l, b);
            break;
          case HTML_DOT_JSON__NODE_TYPE.TEXT_NODE:
            y && (e += "</" + y + ">", y = "");
            e += b ? k : D("" + k);
            break;
          case HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE:
            t(k) ? e += "\x3c!--" + k + "--\x3e" : DEFINE_HTML2JSON__DEBUG && v("COMMENT_NODE Error! [" + c + "]");
            break;
          case HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER:
            t(k) ? e += "\x3c!--[" + k + "]>" : DEFINE_HTML2JSON__DEBUG && v("CONDITIONAL_COMMENT_HIDE_LOWER Error! [" + c + "]");
            e += B(c, l, b) + "<![endif]--\x3e";
            break;
          case HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER:
            t(k) ? e += "\x3c!--[" + k + "]>\x3c!--\x3e" : DEFINE_HTML2JSON__DEBUG && v("CONDITIONAL_COMMENT_SHOW_LOWER Error! [" + c + "]");
            e += B(c, l, b) + "\x3c!--<![endif]--\x3e";
            break;
          case HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION:
            l = v;
            b = c[1];
            var A = c.slice(2);
            b = A.length ? w(b, A) : w(b);
            b !== I && null !== b && "" !== b && (C(b) ? g ? g.splice(h, 1, b) : (c.length = 0, c.push(HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, c)) : r(b) ? b[0] === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE ? g ? (b.shift(), b.unshift(h, 1), g.splice.apply(g, b)) : (c.length = 0, c.push.apply(c, b)) : r(b[0]) ? g ? (b.unshift(h, 1), g.splice.apply(g, b)) : (c.length = 0, c.push(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE), c.push.apply(c, b)) : g ? g.splice(h, 1, b) : (c.length = 0, c.push(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, 
            b)) : DEFINE_HTML2JSON__DEBUG && l("PROCESSING_INSTRUCTION Error! [" + JSON.stringify(c) + "]"));
            if (b !== I && null !== b && "" !== b && (C(b) || r(b))) {
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
              "p" === y && R[d] && (e += "</p>");
              y = "";
              e += "<" + d;
              g && (e += " id=" + E(g, G, H));
              h && (e += " class=" + E(h, G, H));
              x || (A = x ? !0 : Q[d] ? !0 : DEFINE_HTML2JSON__USE_XML_NS ? 0 < d.indexOf(":") : !1, A = x = A);
              z = c[z];
              if (K(z)) {
                var m;
                g = "";
                for (m in z) {
                  if (f = z[m], (h = 0 === m.indexOf(M)) && (m = m.substr(M.length)), "className" === m && (m = "class"), h && (n = void 0, h = w, k = m, u = v, r(f) && t(f[0]) ? (n = f[0], f = f.slice(1), n = f.length ? h(n, f) : h(n)) : t(f) ? n = h(f) : DEFINE_HTML2JSON__DEBUG && u("Invalid InstructionAttr value! [" + k + "=" + f + "]"), f = n), L[m] || "" !== f && null != f) {
                    if (g += " " + m, !L[m]) {
                      if ("style" === m && f && "object" === typeof f) {
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
                m = g.substr(1);
                e += " " + m;
              }
              e = (c = B(c, l || P[d], b || S[d])) ? e + (">" + c) : e + (x ? "/>" : ">");
              x && !c || O[d] && !l ? y = N[d] ? "" : d : (e += "</" + d + ">", y = "");
              A && (x = !1);
            } else {
              DEFINE_HTML2JSON__DEBUG && v("Not html.json! [" + c + "]");
            }
        }
        return e;
      }
      function B(c, g, h) {
        var l = "";
        var b = c[0];
        var e = J(c) === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE, u = b === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE ? 2 : 1;
        for (b = e ? K(c[u]) ? u + 1 : u : b === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE ? 1 : 2; b < c.length; ++b) {
          e = c[b], C(e) ? l += F([HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, e], null, 0, g, h) : r(e) ? (e = F(e, c, b, g, h), -1 === e ? --b : l += e) : DEFINE_HTML2JSON__DEBUG && v("Invalid html.json! [" + e + "]");
        }
        return l;
      }
      var v = "function" === typeof p ? p : function(c) {
      };
      p = p && "object" === typeof p ? p : T || {};
      var H = !!p.quotAlways, G = !!p.useSingleQuot, M = p.instructionAttrPrefix || DEFINE_INSTRUCTION_ATTR_PREFIX, y, x = !1;
      if (r(a)) {
        return J(a) === HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION && (a = [HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, a]), F(a, null, 0, !1, !1);
      }
      DEFINE_HTML2JSON__DEBUG && v("Invalid html.json document!");
    };
    DEFINE_HTML2JSON__EXPORT_JSON2HTML && (module.exports = q, q.DOCUMENT_NODE = HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE, q.DOCUMENT_FRAGMENT_NODE = HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, q.ELEMENT_NODE = HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE, q.TEXT_NODE = HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, q.COMMENT_NODE = HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE, q.CONDITIONAL_COMMENT_HIDE_LOWER = HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER, q.CONDITIONAL_COMMENT_SHOW_LOWER = HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER, 
    q.PROCESSING_INSTRUCTION = HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION);
  })();
})(void 0);

