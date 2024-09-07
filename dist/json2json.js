var v = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, w = {link:!0, meta:!0, br:!0, hr:!0, img:!0, input:!0, area:!0, base:!0, col:!0, embed:!0, keygen:!0, param:!0, track:!0, wbr:!0, command:!0, basefont:!0, frame:!0, isindex:!0, bgsound:!0}, A = {html:!0, head:!0, body:!0, p:!0, dt:!0, dd:!0, li:!0, option:!0, tbody:!0, thead:!0, tfoot:!0, td:!0, th:!0, tr:!0, rb:!0, rbc:!0, rp:!0, rt:!0, 
rtc:!0, optgroup:!0, caption:!0, colgroup:!0}, F = {a:!0, audio:!0, del:!0, ins:!0, map:!0, noscript:!0, video:!0}, G = {xml:"http://www.w3.org/1999/xhtml", svg:"http://www.w3.org/2000/svg", math:"http://www.w3.org/1998/Math/MathML"}, H = {address:!0, article:!0, aside:!0, blockquote:!0, canvas:!0, details:!0, div:!0, dl:!0, fieldset:!0, figcaption:!0, figure:!0, footer:!0, form:!0, h1:!0, h2:!0, h3:!0, h4:!0, h5:!0, h6:!0, header:!0, hgroup:!0, hr:!0, legend:!0, main:!0, menu:!0, nav:!0, noscript:!0, 
ol:!0, p:!0, pre:!0, section:!0, ul:!0, center:!0, dir:!0, noframes:!0, marquee:!0}, I = {script:!0, style:!0, plaintext:!0, xmp:!0};
function J(a) {
  return !(!a || a.pop !== [].pop);
}
function K(a) {
  return !(!a || "object" !== typeof a);
}
function L(a) {
  return "" + a === a;
}
function M(a) {
  return a === +a;
}
function N(a) {
  return L(a) || M(a);
}
function O(a) {
  return N(a) ? 3 : J(a) ? L(a[0]) ? 1 : M(a[0]) ? a[0] : -1 : -1;
}
function P(a, c, b, f, t) {
  var p = c[1], m = c.slice(2);
  a = m.length ? a(p, m) : a(p);
  void 0 !== a && null !== a && "" !== a && (N(a) ? b ? b.splice(f, 1, a) : (c.length = 0, c.push(3, c)) : J(a) ? 11 === a[0] ? b ? (a.shift(), a.unshift(f, 1), b.splice.apply(b, a)) : (c.length = 0, c.push.apply(c, a)) : J(a[0]) ? b ? (a.unshift(f, 1), b.splice.apply(b, a)) : (c.length = 0, c.push(11), c.push.apply(c, a)) : b ? b.splice(f, 1, a) : (c.length = 0, c.push(11, a)) : t("PROCESSING_INSTRUCTION Error! [" + JSON.stringify(c) + "]"));
  return a;
}
function R(a, c, b, f, t) {
  if (J(f) && L(f[0])) {
    var p = f[0];
    f = f.slice(1);
    p = f.length ? c(p, f) : c(p);
  } else {
    L(f) ? p = c(f) : t("Invalid InstructionAttr value! [" + b + "=" + f + "]");
  }
  return a && J(p) ? R(!0, c, b, p, t) : p;
}
function S(a) {
  return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
function T(a, c, b) {
  a = S("" + a);
  if (a.match('"')) {
    a = a.match("'") ? c ? "'" + a.split("&apos;").join("'").split("'").join("&apos;") + "'" : '"' + a.split("&quot;").join('"').split('"').join("&quot;") + '"' : "'" + a + "'";
  } else if (b || a.match(/[^0-9a-z\.\-]/g) || 72 < a.length) {
    a = (c ? "'" : '"') + S(a) + (c ? "'" : '"');
  }
  return a;
}
function U(a) {
  var c = a[0], b = 1 === c ? 2 : 1;
  1 === O(a) ? (a = a[b], b = !J(a) && K(a) ? b + 1 : b) : b = 11 === c ? 1 : 9 === c || 13 === c || 14 === c ? 2 : Infinity;
  return b;
}
function V(a) {
  var c = U(a), b = "", f;
  if (c < a.length) {
    for (f = c; f < a.length;) {
      c = a[f];
      var t = O(c);
      3 === t ? (b = N(c) ? b + c : b + c[1], a.splice(f, 1)) : (b && (a.splice(f, 0, b === "" + +b && M(parseInt(b, 10)) ? +b : b), b = ""), ++f, 1 === t && V(c));
    }
    b && (a[f] = b === "" + +b && M(parseInt(b, 10)) ? +b : b);
  }
}
function W(a) {
  var c = a.indexOf("#"), b = a.indexOf(".");
  if (c < b) {
    var f = a.split(".")[1];
    a = a.split(".")[0];
    if (0 < c) {
      var t = a.split("#")[1];
      a = a.split("#")[0];
    }
  } else {
    b < c && (t = a.split("#")[1], a = a.split("#")[0], 0 < b && (f = a.split(".")[1], a = a.split(".")[0]));
  }
  return [a, t, f];
}
;function X(a, c, b, f, t) {
  function p(g, d, e, k) {
    var n = g[0], h = g[1], x = 1, u = n;
    switch(n) {
      case 9:
        m(g, k);
        break;
      case 11:
        m(g, k);
        break;
      case 3:
        break;
      case 4:
        if (!B && d) {
          return d.splice(e, 1), -1;
        }
        break;
      case 8:
        if (!E && d) {
          return d.splice(e, 1), -1;
        }
        break;
      case 13:
        m(g, k);
        break;
      case 14:
        m(g, k);
        break;
      case 7:
        g = P(y, g, d, e, z);
        if (void 0 !== g) {
          D = !0;
          if (null === g || "" === g) {
            return d ? d.splice(e, 1) : (a.length = 0, a.push(8, "")), -1;
          }
          if (!N(g) && J(g)) {
            return -1;
          }
        } else {
          l = !1;
        }
        break;
      case 1:
        u = h, x = 2;
      default:
        if (L(u)) {
          if (1 + x <= g.length) {
            d = g[x];
            if (!J(d) && K(d)) {
              e = 0;
              for (var r in d) {
                n = r, h = d[r], (u = 0 === r.indexOf(C)) ? (r = r.substr(C.length), "className" === r && (r = "class"), h = R(!1, y, r, h, z), void 0 !== h ? (delete d[n], J(h) ? L(h[0]) ? (d[n] = h, l = !1, ++e) : z("Invalid dynamic attribute callback value! [" + n + "=" + h + "]") : v[r] && !1 === h || null === h || (d[r] = h, ++e)) : (l = !1, ++e)) : ++e;
              }
              0 === e && g.splice(x, 1);
            }
            m(g, k);
          }
        } else {
          z("Not html.json! [" + g + "]");
        }
    }
    return 0;
  }
  function m(g, d) {
    var e = U(g);
    for (d.push(g); e < g.length; ++e) {
      var k = g[e];
      N(k) || (J(k) ? (k = p(k, g, e, d)) && (e += k) : z("Invalid html.json! [" + k + "]"));
    }
    d.pop();
  }
  var y = "function" === typeof c ? c : function() {
  }, z = "function" === typeof f ? f : function() {
  };
  c = K(c) ? c : K(b) ? b : K(f) ? f : t || {};
  var B = !1 !== c.keepCDATASections, E = !1 !== c.keepComments, C = c.instructionAttrPrefix || ":", D = !1, l = !0;
  if (J(a)) {
    return p(a, null, 0, []), D && V(a), l;
  }
  z("Invalid html.json document!");
}
;X.node = {};
module.exports = X;
X.DOCUMENT_NODE = 9;
X.DOCUMENT_FRAGMENT_NODE = 11;
X.ELEMENT_NODE = 1;
X.TEXT_NODE = 3;
X.CDATA_SECTION = 4;
X.PROCESSING_INSTRUCTION = 7;
X.COMMENT_NODE = 8;
X.COND_CMT_HIDE_LOWER = 13;
X.COND_CMT_SHOW_LOWER_START = 14;
X.COND_CMT_SHOW_LOWER_END = 15;
X.NETSCAPE4_COND_CMT_HIDE_LOWER = 16;
X.ELEMENT_WITHOUT_END_TAG = 17;
X.ELEMENT_WITHOUT_START_TAG = 18;
function Y(a, c, b, f) {
  function t(l, g, d, e, k) {
    function n() {
      C && (h += "</" + C + ">", C = "");
    }
    var h = "", x = l[0], u = l[1], r = 1, q = x, Q;
    switch(x) {
      case 9:
        h += u + p(l, !1, !1);
        break;
      case 11:
        h += p(l, e, k);
        break;
      case 3:
        n();
        h += k ? u : S("" + u);
        break;
      case 4:
        L(u) ? h += "<![CDATA[" + u + "]]\x3e" : y("CDATA_SECTION Error! [" + l + "]");
        break;
      case 8:
        L(u) ? h += "\x3c!--" + u + "--\x3e" : y("COMMENT_NODE Error! [" + l + "]");
        break;
      case 13:
        n();
        L(u) ? h += "\x3c!--[" + u + "]>" : y("COND_CMT_HIDE_LOWER Error! [" + l + "]");
        h += p(l, !0, k) + "<![endif]--\x3e";
        break;
      case 14:
        n();
        L(u) ? h += "\x3c!--[" + u + "]>\x3c!--\x3e" : y("COND_CMT_SHOW_LOWER_START Error! [" + l + "]");
        h += p(l, !0, k) + "\x3c!--<![endif]--\x3e";
        break;
      case 7:
        e = P(c, l, g, d, y);
        if (void 0 !== e && null !== e && "" !== e && (N(e) || J(e))) {
          return -1;
        }
        break;
      case 1:
        q = l[1], r = 2;
      default:
        L(q) ? (q = W(q), g = q[1], d = q[2], q = q[0], "p" !== C || H[q] || (h += "</p>"), C = "", h += "<" + q, g && (h += " id=" + T(g, B, z)), d && (h += " class=" + T(d, B, z)), D || (Q = D = D || G[q] ? !0 : !1), r = l[r], !J(r) && K(r) && (h += " " + m(r)), h = (l = p(l, e || F[q], k || I[q])) ? h + (">" + l) : h + (D ? "/>" : ">"), D && !l || A[q] && !e ? C = w[q] ? "" : q : (h += "</" + q + ">", C = ""), Q && (D = !1)) : y("Not html.json! [" + l + "]");
    }
    return h;
  }
  function p(l, g, d) {
    for (var e = "", k = U(l), n; k < l.length; ++k) {
      n = l[k], N(n) ? e += t([3, n], null, 0, g, d) : J(n) ? (n = t(n, l, k, g, d), -1 === n ? --k : e += n) : y("Invalid html.json! [" + n + "]");
    }
    return e;
  }
  function m(l) {
    var g = "", d, e;
    for (d in l) {
      var k = l[d];
      (e = 0 === d.indexOf(E)) && (d = d.substr(E.length));
      "className" === d && (d = "class");
      e && (k = R(!0, c, d, k, y));
      if (!(null == k || v[d] && !1 === k || (g += " " + d, v[d]))) {
        if ("style" === d && K(k)) {
          var n = void 0, h = "";
          for (n in k) {
            e = k[n];
            "0px" === e && (e = 0);
            for (var x, u = [], r = n.split(""), q = r.length; q;) {
              x = r[--q], "A" <= x && "Z" >= x && (x = "-" + x.toLowerCase()), u[q] = x;
            }
            h += ";" + u.join("") + ":" + S("" + e);
          }
          k = h.substr(1);
          if (!k) {
            continue;
          }
        }
        g += "=" + T(k, B, z);
      }
    }
    return g.substr(1);
  }
  var y = "function" === typeof b ? b : function() {
  };
  b = b && "object" === typeof b ? b : f || {};
  var z = !!b.quotAlways, B = !!b.useSingleQuot, E = b.instructionAttrPrefix || ":", C, D = !1;
  if (J(a)) {
    return 7 === O(a) && (a = [11, a]), t(a, null, 0, !1, !1);
  }
  y("Invalid html.json document!");
}
;X.gulp = function(a, c, b) {
  const f = require("plugin-error"), t = require("through2"), p = c && "object" === typeof c ? c : b && "object" === typeof b ? b : {};
  return t.A(function(m, y, z) {
    if (m.o()) {
      return z();
    }
    if (m.v()) {
      return this.m("error", new f("json2json", "Streaming not supported")), z();
    }
    if (".json" === m.j) {
      try {
        const B = JSON.parse(m.l.toString(y));
        let E;
        X(B, a, c, b) && p.outputStaticPagesAsHTML ? (E = Y(B, a, c, b), m.j = "." + m.h.split(".").pop(), m.h = m.h.substr(0, m.h.length - m.j.length)) : E = JSON.stringify(B, null, p.prettify ? "    " : "");
        m.l = Buffer.from(E);
        this.push(m);
      } catch (B) {
        this.m("error", new f("json2json", B));
      }
    } else {
      this.push(m);
    }
    z();
  });
};

