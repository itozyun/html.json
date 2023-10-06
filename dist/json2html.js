var DEFINE_HTML2JSON__EXPORT_JSON2HTML = !0, DEFINE_HTML2JSON__EXPORT_JSON2JSON = !1, DEFINE_HTML2JSON__DEBUG = !0, DEFINE_HTML2JSON__USE_XML_NS = !0, DEFINE_HTML2JSON__USE_XHTML = !0, DEFINE_INSTRUCTION_ATTR_PREFIX = ":", HTML_DOT_JSON__NODE_TYPE = {DOCUMENT_NODE:0, DOCUMENT_FRAGMENT_NODE:1, ELEMENT_NODE:2, TEXT_NODE:3, COMMENT_NODE:4, CONDITIONAL_COMMENT_HIDE_LOWER:5, CONDITIONAL_COMMENT_SHOW_LOWER:6, PROCESSING_INSTRUCTION:7};
(function() {
  var r;
  (function() {
    function t(a) {
      return !(!a || a.pop !== [].pop);
    }
    function u(a) {
      return "" + a === a;
    }
    function C(a) {
      return u(a) || a === a - 0;
    }
    function H(a) {
      return C(a) ? HTML_DOT_JSON__NODE_TYPE.TEXT_NODE : t(a) ? u(a[0]) ? HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE : a[0] : -1;
    }
    function I(a) {
      return !t(a) && !(!a || "object" !== typeof a);
    }
    function J(a) {
      return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
    }
    function D(a, w, n) {
      a = "" + a;
      if (a.match('"')) {
        a = a.match("'") ? w ? "'" + a.split("&apos;").join("'").split("'").join("&apos;") + "'" : '"' + a.split("&quot;").join('"').split('"').join("&quot;") + '"' : "'" + a + "'";
      } else if (n || a.match(/[^0-9a-z\.\-]/g) || 72 < a.length) {
        a += (w ? '"' : "'") + J(a) + (w ? '"' : "'");
      }
      return a;
    }
    var K = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, M = {link:!0, meta:!0, br:!0, hr:!0, img:!0, input:!0, area:!0, base:!0, col:!0, embed:!0, keygen:!0, param:!0}, N = {p:!0, dt:!0, dd:!0, li:!0, option:!0, thead:!0, tfoot:!0, th:!0, tr:!0, td:!0, rt:!0, rp:!0, optgroup:!0, caption:!0, colgroup:!0, col:!0}, O = {a:!0, audio:!0, del:!0, ins:!0, map:!0, noscript:!0, video:!0}, P = {svg:!0, 
    math:!0}, Q = {table:!0, img:!0, svg:!0, picture:!0, object:!0, embed:!0, video:!0, audio:!0, blockquot:!0, form:!0, fieldset:!0}, R = {script:!0, style:!0, plaintext:!0, xmp:!0, noscript:!0};
    r = function(a, w, n, S) {
      function E(c, g, d, p, b) {
        var f = "", q = c[0], k = c[1], z = 1, e = q;
        switch(q) {
          case HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE:
            DEFINE_HTML2JSON__USE_XHTML && (0 === k.indexOf("<?xml ") || 0 <= k.toUpperCase().indexOf('<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML ')) && (x = !0);
            f += k + B(c, !1, !1);
            break;
          case HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE:
            f += B(c, p, b);
            break;
          case HTML_DOT_JSON__NODE_TYPE.TEXT_NODE:
            y && (f += "</" + y + ">", y = "");
            f += b ? k : J("" + k);
            break;
          case HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE:
            u(k) ? f += "\x3c!--" + k + "--\x3e" : DEFINE_HTML2JSON__DEBUG && v("COMMENT_NODE Error! [" + c + "]");
            break;
          case HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER:
            u(k) ? f += "\x3c!--[" + k + "]>" : DEFINE_HTML2JSON__DEBUG && v("CONDITIONAL_COMMENT_HIDE_LOWER Error! [" + c + "]");
            f += B(c, p, b) + "<![endif]--\x3e";
            break;
          case HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER:
            u(k) ? f += "\x3c!--[" + k + "]>\x3c!--\x3e" : DEFINE_HTML2JSON__DEBUG && v("CONDITIONAL_COMMENT_SHOW_LOWER Error! [" + c + "]");
            f += B(c, p, b) + "\x3c!--<![endif]--\x3e";
            break;
          case HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION:
            p = v;
            b = c[1];
            var A = c.slice(2);
            b = A.length ? w(b, A) : w(b);
            void 0 !== b && null !== b && "" !== b && (C(b) ? g ? g.splice(d, 1, b) : (c.length = 0, c.push(HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, c)) : t(b) ? b[0] === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE ? g ? (b.shift(), b.unshift(d, 1), g.splice.apply(g, b)) : (c.length = 0, c.push.apply(c, b)) : t(b[0]) ? g ? (b.unshift(d, 1), g.splice.apply(g, b)) : (c.length = 0, c.push(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE), c.push.apply(c, b)) : g ? g.splice(d, 1, b) : (c.length = 0, c.push(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, 
            b)) : DEFINE_HTML2JSON__DEBUG && p("PROCESSING_INSTRUCTION Error! [" + JSON.stringify(c) + "]"));
            if (void 0 !== b && null !== b && "" !== b && (C(b) || t(b))) {
              return -1;
            }
            break;
          case HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE:
            e = c[1], z = 2;
          default:
            if (u(e)) {
              g = e.indexOf("#");
              d = e.indexOf(".");
              if (g < d) {
                var m = e.split(".")[1];
                e = e.split(".")[0];
                if (0 < g) {
                  var l = e.split("#")[1];
                  e = e.split("#")[0];
                }
              } else {
                d < g && (l = e.split("#")[1], e = e.split("#")[0], 0 < d && (m = e.split(".")[1], e = e.split(".")[0]));
              }
              e = [e, l, m];
              g = e[1];
              d = e[2];
              e = e[0];
              "p" === y && Q[e] && (f += "</p>");
              y = "";
              f += "<" + e;
              g && (f += " id=" + D(g, F, G));
              d && (f += " class=" + D(d, F, G));
              x || (A = x ? !0 : P[e] ? !0 : DEFINE_HTML2JSON__USE_XML_NS ? 0 < e.indexOf(":") : !1, A = x = A);
              z = c[z];
              if (I(z)) {
                var h;
                g = "";
                for (h in z) {
                  if (d = z[h], (m = 0 === h.indexOf(L)) && (h = h.substr(L.length)), "className" === h && (h = "class"), m && (l = void 0, m = w, q = h, k = v, t(d) && u(d[0]) ? (l = d[0], d = d.slice(1), l = d.length ? m(l, d) : m(l)) : u(d) ? l = m(d) : DEFINE_HTML2JSON__DEBUG && k("Invalid InstructionAttr value! [" + q + "=" + d + "]"), d = l), K[h] || "" !== d && null != d) {
                    if (g += " " + h, !K[h]) {
                      if ("style" === h && d && "object" === typeof d) {
                        l = void 0;
                        q = "";
                        for (l in d) {
                          m = d[l], "0px" === m && (m = 0), q += ";" + l + ":" + m;
                        }
                        d = q.substr(1);
                        if (!d) {
                          continue;
                        }
                      }
                      g += "=" + D(d, F, G);
                    }
                  }
                }
                h = g.substr(1);
                f += " " + h;
              }
              f = (c = B(c, p || O[e], b || R[e])) ? f + (">" + c) : f + (x ? "/>" : ">");
              x && !c || N[e] && !p ? y = M[e] ? "" : e : (f += "</" + e + ">", y = "");
              A && (x = !1);
            } else {
              DEFINE_HTML2JSON__DEBUG && v("Not html.json! [" + c + "]");
            }
        }
        return f;
      }
      function B(c, g, d) {
        var p = "";
        var b = c[0];
        var f = H(c) === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE, q = b === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE ? 2 : 1;
        for (b = f ? I(c[q]) ? q + 1 : q : b === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE ? 1 : 2; b < c.length; ++b) {
          f = c[b], C(f) ? p += E([HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, f], null, 0, g, d) : t(f) ? (f = E(f, c, b, g, d), -1 === f ? --b : p += f) : DEFINE_HTML2JSON__DEBUG && v("Invalid html.json! [" + f + "]");
        }
        return p;
      }
      var v = "function" === typeof n ? n : function(c) {
      };
      n = n && "object" === typeof n ? n : S || {};
      var G = !!n.quotAlways, F = !!n.useSingleQuot, L = n.instructionAttrPrefix || DEFINE_INSTRUCTION_ATTR_PREFIX, y, x = !1;
      if (t(a)) {
        return H(a) === HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION && (a = [HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, a]), E(a, null, 0, !1, !1);
      }
      DEFINE_HTML2JSON__DEBUG && v("Invalid html.json document!");
    };
    DEFINE_HTML2JSON__EXPORT_JSON2HTML && (module.exports = r, r.DOCUMENT_NODE = HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE, r.DOCUMENT_FRAGMENT_NODE = HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, r.ELEMENT_NODE = HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE, r.TEXT_NODE = HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, r.COMMENT_NODE = HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE, r.CONDITIONAL_COMMENT_HIDE_LOWER = HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER, r.CONDITIONAL_COMMENT_SHOW_LOWER = HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER, 
    r.PROCESSING_INSTRUCTION = HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION);
  })();
})();

