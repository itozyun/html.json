var DEFINE_HTML2JSON__EXPORT_JSON2HTML = !0, DEFINE_HTML2JSON__EXPORT_JSON2JSON = !1, DEFINE_HTML2JSON__DEBUG = !0, DEFINE_HTML2JSON__USE_XML_NS = !0, DEFINE_HTML2JSON__USE_XHTML = !0, DEFINE_INSTRUCTION_ATTR_PREFIX = ":", HTML_DOT_JSON__NODE_TYPE = {DOCUMENT_NODE:0, DOCUMENT_FRAGMENT_NODE:1, ELEMENT_NODE:2, TEXT_NODE:3, COMMENT_NODE:4, CONDITIONAL_COMMENT_HIDE_LOWER:5, CONDITIONAL_COMMENT_SHOW_LOWER:6, PROCESSING_INSTRUCTION:7};
(function() {
  var m;
  (function() {
    function p(h) {
      return h && h.pop === [].pop;
    }
    function q(h) {
      return "" + h === h;
    }
    function x(h) {
      return q(h) || h === h - 0;
    }
    function C(h) {
      return !p(h) && h && "object" === typeof h;
    }
    var D = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, I = {link:!0, meta:!0, br:!0, hr:!0, img:!0, input:!0, area:!0, base:!0, col:!0, embed:!0, keygen:!0, param:!0}, J = {p:!0, dt:!0, dd:!0, li:!0, option:!0, thead:!0, tfoot:!0, th:!0, tr:!0, td:!0, rt:!0, rp:!0, optgroup:!0, caption:!0, colgroup:!0, col:!0}, K = {a:!0, audio:!0, del:!0, ins:!0, map:!0, noscript:!0, video:!0}, L = {svg:!0, 
    math:!0}, M = {table:!0, img:!0, svg:!0, picture:!0, object:!0, embed:!0, video:!0, audio:!0, blockquot:!0, form:!0, fieldset:!0}, N = {script:!0, style:!0, plaintext:!0, xmp:!0, noscript:!0};
    m = function(h, y, n, O) {
      function z(c, f, g, b, e) {
        var a = "", k = c[0], l = c[1], v = 1, d = k;
        switch(k) {
          case HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE:
            DEFINE_HTML2JSON__USE_XHTML && 0 === l.indexOf("<?xml ") && (t = !0);
            a += l + w(c, !1, !1);
            break;
          case HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE:
            a += w(c, b, e);
            break;
          case HTML_DOT_JSON__NODE_TYPE.TEXT_NODE:
            u && (a += "</" + u + ">", u = "");
            a += e ? l : E("" + l);
            break;
          case HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE:
            q(l) ? a += "\x3c!--" + l + "--\x3e" : DEFINE_HTML2JSON__DEBUG && r("COMMENT_NODE Error! [" + c + "]");
            break;
          case HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER:
            q(l) ? a += "\x3c!--[" + l + "]>" : DEFINE_HTML2JSON__DEBUG && r("CONDITIONAL_COMMENT_HIDE_LOWER Error! [" + c + "]");
            a += w(c, b, e) + "<![endif]--\x3e";
            break;
          case HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER:
            q(l) ? a += "\x3c!--[" + l + "]>\x3c!--\x3e" : DEFINE_HTML2JSON__DEBUG && r("CONDITIONAL_COMMENT_SHOW_LOWER Error! [" + c + "]");
            a += w(c, b, e) + "\x3c!--<![endif]--\x3e";
            break;
          case HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION:
            b = c[1];
            e = c.slice(2);
            b = e.length ? y(b, e) : y(b);
            void 0 !== b && null !== b && "" !== b && (x(b) ? f ? f.splice(g, 1, b) : (c.length = 0, c.push(HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, c)) : p(b) && (b[0] === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE ? f ? (b.shift(), b.unshift(g, 1), f.splice.apply(f, b)) : (c.length = 0, c.push.apply(c, b)) : p(b[0]) ? f ? (b.unshift(g, 1), f.splice.apply(f, b)) : (c.length = 0, c.push(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE), c.push.apply(c, b)) : f ? f.splice(g, 1, b) : (c.length = 0, 
            c.push(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, b))));
            if (void 0 !== b && null !== b && "" !== b) {
              if (x(b) || p(b)) {
                return -1;
              }
              DEFINE_HTML2JSON__DEBUG && r("PROCESSING_INSTRUCTION Error! [" + JSON.stringify(c) + "]");
            }
            break;
          case HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE:
            d = c[1], v = 2;
          default:
            if (q(d)) {
              f = d.indexOf("#");
              g = d.indexOf(".");
              if (f < g) {
                var F = d.split(".")[1];
                d = d.split(".")[0];
                if (0 < f) {
                  var G = d.split("#")[1];
                  d = d.split("#")[0];
                }
              } else {
                g < f && (G = d.split("#")[1], d = d.split("#")[0], 0 < g && (F = d.split(".")[1], d = d.split(".")[0]));
              }
              d = {_tagName:d, _id:G, _className:F};
              f = d._id;
              g = d._className;
              d = d._tagName;
              "p" === u && M[d] && (a += "</p>");
              u = "";
              a += "<" + d;
              f && (a += " " + A({id:f}));
              g && (a += " " + A({className:g}));
              if (!t) {
                var B = t ? !0 : L[d] ? !0 : DEFINE_HTML2JSON__USE_XML_NS ? 0 < d.indexOf(":") : !1;
                B = t = B;
              }
              v = c[v];
              C(v) && (a += " " + A(v));
              a = (c = w(c, b || K[d], e || N[d])) ? a + (">" + c) : a + (t ? "/>" : ">");
              t && !c || J[d] && !b ? u = I[d] ? "" : d : (a += "</" + d + ">", u = "");
              B && (t = !1);
            } else {
              DEFINE_HTML2JSON__DEBUG && r("Not html.json! [" + c + "]");
            }
        }
        return a;
      }
      function w(c, f, g) {
        var b = "";
        var e = c[0];
        var a = x(c) ? HTML_DOT_JSON__NODE_TYPE.TEXT_NODE : p(c) ? q(c[0]) ? HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE : c[0] : -1;
        var k = e === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE ? 2 : 1;
        for (e = a === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE ? C(c[k]) ? k + 1 : k : e === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE ? 1 : 2; e < c.length; ++e) {
          a = c[e], x(a) ? b += z([HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, a], null, 0, f, g) : p(a) ? (a = z(a, c, e, f, g), -1 === a ? --e : b += a) : DEFINE_HTML2JSON__DEBUG && r("Invalid html.json! [" + a + "]");
        }
        return b;
      }
      function E(c) {
        return c.split("&lt;").join("<").split("&gt;").join(">").split("&amp;").join("&").split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
      }
      function A(c) {
        var f = "", g = P ? "'" : '"', b, e;
        for (b in c) {
          var a = c[b];
          (e = 0 === b.indexOf(H)) && (b = b.substr(H.length));
          "className" === b && (b = "class");
          if (e) {
            e = y;
            var k = b, l = r;
            p(a) && q(a[0]) ? (k = a[0], a = a.slice(1), a = a.length ? e(k, a) : e(k)) : q(a) ? a = e(a) : DEFINE_HTML2JSON__DEBUG && l("Invalid InstructionAttr value! [" + k + "=" + a + "]");
          }
          if (D[b] || "" !== a && null != a) {
            if (f += " " + b, !D[b]) {
              if ("style" === b && a && "object" === typeof a) {
                k = void 0;
                l = "";
                for (k in a) {
                  e = a[k], "0px" === e && (e = 0), l += ";" + k + ":" + e;
                }
                a = l.substr(1);
                if (!a) {
                  continue;
                }
              }
              a = "" + a;
              f = (e = a.match('"')) && a.match("'") ? f + ('="' + a.split('\\"').join('"').split('"').join('\\"') + '"') : e ? f + ("='" + a + "'") : Q || a.match(/[^0-9a-z\.\-]/g) || 72 < a.length ? f + ("=" + g + a + g) : f + ("=" + E(a));
            }
          }
        }
        return f.substr(1);
      }
      var r = "function" === typeof n ? n : function(c) {
      };
      n = n && "object" === typeof n ? n : O || {};
      var Q = !!n.useQuotAllways, P = !!n.useConmma, H = n.instructionAttrPrefix || DEFINE_INSTRUCTION_ATTR_PREFIX, u, t = !1;
      if (p(h)) {
        return z(h, null, 0, !1, !1);
      }
      DEFINE_HTML2JSON__DEBUG && r("Invalid html.json document!");
    };
    DEFINE_HTML2JSON__EXPORT_JSON2HTML && (module.exports = m, m.DOCUMENT_NODE = HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE, m.DOCUMENT_FRAGMENT_NODE = HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, m.ELEMENT_NODE = HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE, m.TEXT_NODE = HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, m.COMMENT_NODE = HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE, m.CONDITIONAL_COMMENT_HIDE_LOWER = HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER, m.CONDITIONAL_COMMENT_SHOW_LOWER = HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER, 
    m.PROCESSING_INSTRUCTION = HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION);
  })();
})();

