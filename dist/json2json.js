var v = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, w = {link:!0, meta:!0, br:!0, hr:!0, img:!0, input:!0, area:!0, base:!0, col:!0, embed:!0, keygen:!0, param:!0, track:!0, wbr:!0, command:!0, basefont:!0, frame:!0, isindex:!0, bgsound:!0}, y = {html:!0, head:!0, body:!0, p:!0, dt:!0, dd:!0, li:!0, option:!0, tbody:!0, thead:!0, tfoot:!0, td:!0, th:!0, tr:!0, rb:!0, rbc:!0, rp:!0, rt:!0, 
rtc:!0, optgroup:!0, caption:!0, colgroup:!0}, E = {a:!0, audio:!0, del:!0, ins:!0, map:!0, noscript:!0, video:!0}, F = {xml:"http://www.w3.org/1999/xhtml", svg:"http://www.w3.org/2000/svg", math:"http://www.w3.org/1998/Math/MathML"}, H = {address:!0, article:!0, aside:!0, blockquote:!0, canvas:!0, details:!0, div:!0, dl:!0, fieldset:!0, figcaption:!0, figure:!0, footer:!0, form:!0, h1:!0, h2:!0, h3:!0, h4:!0, h5:!0, h6:!0, header:!0, hgroup:!0, hr:!0, legend:!0, main:!0, menu:!0, nav:!0, noscript:!0, 
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
function P(a, b, c, h) {
  var u = b[1], m = b.slice(2);
  a = m.length ? a(u, m) : a(u);
  void 0 !== a && null !== a && "" !== a && (N(a) ? c ? c.splice(h, 1, a) : (b.length = 0, b.push(3, b)) : J(a) && (11 === a[0] ? c ? (a.shift(), a.unshift(h, 1), c.splice.apply(c, a)) : (b.length = 0, b.push.apply(b, a)) : J(a[0]) ? c ? (a.unshift(h, 1), c.splice.apply(c, a)) : (b.length = 0, b.push(11), b.push.apply(b, a)) : c ? c.splice(h, 1, a) : (b.length = 0, b.push(11, a))));
  return a;
}
function S(a, b, c, h, u) {
  if (J(h) && L(h[0])) {
    var m = h[0];
    h = h.slice(1);
    m = h.length ? b(m, h) : b(m);
  } else {
    L(h) && (m = b(h));
  }
  return a && J(m) ? S(!0, b, c, m, u) : m;
}
function T(a) {
  return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
function U(a, b, c) {
  a = T("" + a);
  if (a.match('"')) {
    a = a.match("'") ? b ? "'" + a.split("&apos;").join("'").split("'").join("&apos;") + "'" : '"' + a.split("&quot;").join('"').split('"').join("&quot;") + '"' : "'" + a + "'";
  } else if (c || a.match(/[^0-9a-z\.\-]/g) || 72 < a.length) {
    a = (b ? "'" : '"') + T(a) + (b ? "'" : '"');
  }
  return a;
}
function V(a) {
  var b = a[0], c = M(b) ? 2 : 1;
  1 === O(a) || 17 === b ? (a = a[c], c = !J(a) && K(a) ? c + 1 : c) : c = 11 === b ? 1 : 9 === b || 13 === b || 16 === b ? 2 : Infinity;
  return c;
}
function W(a) {
  var b = V(a), c = "", h;
  if (b < a.length) {
    for (h = b; h < a.length;) {
      b = a[h];
      var u = O(b);
      3 === u ? (c = N(b) ? c + b : c + b[1], a.splice(h, 1)) : (c && (a.splice(h, 0, c === "" + +c && M(parseInt(c, 10)) ? +c : c), c = ""), ++h, 1 !== u && 17 !== u || W(b));
    }
    c && (a[h] = c === "" + +c && M(parseInt(c, 10)) ? +c : c);
  }
}
function X(a) {
  var b = a.indexOf("#"), c = a.indexOf(".");
  if (b < c) {
    var h = a.split(".")[1];
    a = a.split(".")[0];
    if (0 < b) {
      var u = a.split("#")[1];
      a = a.split("#")[0];
    }
  } else {
    c < b && (u = a.split("#")[1], a = a.split("#")[0], 0 < c && (h = a.split(".")[1], a = a.split(".")[0]));
  }
  return [a, u, h];
}
;function Y(a, b, c, h, u) {
  function m(k, d, f, g) {
    var n = k[0], e = k[1], x = 1, p = n;
    switch(n) {
      case 9:
        q(k, g);
        break;
      case 11:
        q(k, g);
        break;
      case 3:
        break;
      case 4:
        if (!z && d) {
          return d.splice(f, 1), -1;
        }
        break;
      case 8:
        if (!D && d) {
          return d.splice(f, 1), -1;
        }
        break;
      case 13:
        q(k, g);
        break;
      case 16:
        q(k, g);
        break;
      case 7:
        k = P(G, k, d, f);
        if (void 0 !== k) {
          B = !0;
          if (null === k || "" === k) {
            return d ? d.splice(f, 1) : (a.length = 0, a.push(8, "")), -1;
          }
          if (!N(k) && J(k)) {
            return -1;
          }
        } else {
          l = !1;
        }
        break;
      case 1:
      case 17:
        p = e, x = 2;
      default:
        if (L(p) && 1 + x <= k.length) {
          d = k[x];
          if (!J(d) && K(d)) {
            f = 0;
            for (var t in d) {
              n = t, e = d[t], (p = 0 === t.indexOf(A)) ? (t = t.substr(A.length), "className" === t && (t = "class"), e = S(!1, G, t, e, C), void 0 !== e ? (delete d[n], J(e) ? L(e[0]) && (d[n] = e, l = !1, ++f) : v[t] && !1 === e || null === e || (d[t] = e, ++f)) : (l = !1, ++f)) : ++f;
            }
            0 === f && k.splice(x, 1);
          }
          q(k, g);
        }
    }
    return 0;
  }
  function q(k, d) {
    var f = V(k);
    for (d.push(k); f < k.length; ++f) {
      var g = k[f];
      !N(g) && J(g) && (g = m(g, k, f, d)) && (f += g);
    }
    d.pop();
  }
  var G = "function" === typeof b ? b : function() {
  }, C = "function" === typeof h ? h : function() {
  };
  b = K(b) ? b : K(c) ? c : K(h) ? h : u || {};
  var z = !1 !== b.keepCDATASections, D = !1 !== b.keepComments, A = b.instructionAttrPrefix || ":", B = !1, l = !0;
  if (J(a)) {
    return m(a, null, 0, []), B && W(a), l;
  }
}
;Y.module = {};
module.exports = Y;
Y.DOCUMENT_NODE = 9;
Y.DOCUMENT_FRAGMENT_NODE = 11;
Y.ELEMENT_NODE = 1;
Y.TEXT_NODE = 3;
Y.CDATA_SECTION = 4;
Y.PROCESSING_INSTRUCTION = 7;
Y.COMMENT_NODE = 8;
Y.COND_CMT_HIDE_LOWER = 13;
Y.COND_CMT_SHOW_LOWER_START = 14;
Y.COND_CMT_SHOW_LOWER_END = 15;
Y.NETSCAPE4_COND_CMT_HIDE_LOWER = 16;
Y.ELEMENT_START_TAG = 17;
Y.ELEMENT_END_TAG = 18;
function Z(a, b, c, h) {
  function u(l, k, d, f, g) {
    function n() {
      A && (e += "</" + A + ">", A = "");
    }
    var e = "", x = l[0], p = l[1], t = 1, r = x, Q;
    switch(x) {
      case 9:
        e = "<!DOCTYPE " + p + ">" + m(l, f, g);
        break;
      case 11:
        e = m(l, f, g);
        break;
      case 3:
        n();
        e += g ? p : T("" + p);
        break;
      case 4:
        L(p) && (e = "<![CDATA[" + p + "]]\x3e");
        break;
      case 8:
        L(p) && (e = "\x3c!--" + p + "--\x3e");
        break;
      case 13:
        n();
        L(p) && (e = "\x3c!--[" + p + "]>");
        e += m(l, !0, g) + "<![endif]--\x3e";
        break;
      case 16:
        n();
        L(p) && (e = "\x3c!--{" + p + "};");
        e += m(l, !0, g) + "--\x3e";
        break;
      case 14:
        L(p) && (e = "\x3c!--[" + p + "]>\x3c!--\x3e");
        e += m(l, f, g) + "\x3c!--<![endif]--\x3e";
        break;
      case 15:
        e = "\x3c!--<![endif]--\x3e";
        break;
      case 7:
        f = P(b, l, k, d);
        if (void 0 !== f && null !== f && "" !== f && (N(f) || J(f))) {
          return -1;
        }
        break;
      case 18:
        L(p) && (e = "</" + p + ">");
        break;
      case 17:
        var R = !0;
      case 1:
        r = l[1], t = 2;
      default:
        L(r) && (r = X(r), k = r[1], d = r[2], r = r[0], "p" !== A || H[r] || (e = "</p>"), A = "", e += "<" + r, k && (e += " id=" + U(k, z, C)), d && (e += " class=" + U(d, z, C)), B || (Q = B = B || F[r] ? !0 : !1), t = l[t], !J(t) && K(t) && (e += " " + q(t)), e = (l = m(l, f || E[r], g || I[r])) ? e + (">" + l) : R ? e + ">" : e + (B ? "/>" : ">"), R ? A = "" : B && !l || y[r] && !f ? A = w[r] ? "" : r : (e += "</" + r + ">", A = ""), Q && (B = !1));
    }
    return e;
  }
  function m(l, k, d) {
    for (var f = "", g = V(l), n; g < l.length; ++g) {
      n = l[g], N(n) ? f += u([3, n], null, 0, k, d) : J(n) && (n = u(n, l, g, k, d), -1 === n ? --g : f += n);
    }
    return f;
  }
  function q(l) {
    var k = "", d, f;
    for (d in l) {
      var g = l[d];
      (f = 0 === d.indexOf(D)) && (d = d.substr(D.length));
      "className" === d && (d = "class");
      f && (g = S(!0, b, d, g, G));
      if (!(null == g || v[d] && !1 === g || (k += " " + d, v[d]))) {
        if ("style" === d && K(g)) {
          var n = void 0, e = "";
          for (n in g) {
            f = g[n];
            "0px" === f && (f = 0);
            for (var x, p = [], t = n.split(""), r = t.length; r;) {
              x = t[--r], "A" <= x && "Z" >= x && (x = "-" + x.toLowerCase()), p[r] = x;
            }
            e += ";" + p.join("") + ":" + T("" + f);
          }
          g = e.substr(1);
          if (!g) {
            continue;
          }
        }
        k += "=" + U(g, z, C);
      }
    }
    return k.substr(1);
  }
  var G = "function" === typeof c ? c : function() {
  };
  c = c && "object" === typeof c ? c : h || {};
  var C = !!c.quotAlways, z = !!c.useSingleQuot, D = c.instructionAttrPrefix || ":", A, B = !1;
  if (J(a)) {
    return 7 === O(a) && (a = [11, a]), u(a, null, 0, !1, !1);
  }
}
;Y.gulp = function(a, b, c) {
  const h = require("plugin-error"), u = require("through2"), m = b && "object" === typeof b ? b : c && "object" === typeof c ? c : {};
  return u(function(q, G, C) {
    if (q.isNull()) {
      return C();
    }
    if (q.isStream()) {
      return this.emit("error", new h("json2json", "Streaming not supported")), C();
    }
    if (".json" === q.extname) {
      try {
        const z = JSON.parse(q.contents.toString(G));
        let D;
        Y(z, a, b, c) && m.outputStaticPagesAsHTML ? (D = Z(z, a, b, c), q.extname = "." + q.stem.split(".").pop(), q.stem = q.stem.substr(0, q.stem.length - q.extname.length)) : D = JSON.stringify(z, null, m.prettify ? "    " : "");
        q.contents = Buffer.from(D);
        this.push(q);
      } catch (z) {
        this.emit("error", new h("json2json", z));
      }
    } else {
      this.push(q);
    }
    C();
  });
};

