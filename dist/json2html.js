var q = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, t = {link:!0, meta:!0, br:!0, hr:!0, img:!0, input:!0, area:!0, base:!0, col:!0, embed:!0, keygen:!0, param:!0, track:!0, wbr:!0, command:!0, basefont:!0, frame:!0, isindex:!0, bgsound:!0}, z = {html:!0, head:!0, body:!0, p:!0, dt:!0, dd:!0, li:!0, option:!0, tbody:!0, thead:!0, tfoot:!0, td:!0, th:!0, tr:!0, rb:!0, rbc:!0, rp:!0, rt:!0, 
rtc:!0, optgroup:!0, caption:!0, colgroup:!0}, E = {a:!0, audio:!0, del:!0, ins:!0, map:!0, noscript:!0, video:!0}, F = {xml:"http://www.w3.org/1999/xhtml", svg:"http://www.w3.org/2000/svg", math:"http://www.w3.org/1998/Math/MathML"}, G = {address:!0, article:!0, aside:!0, blockquote:!0, canvas:!0, details:!0, div:!0, dl:!0, fieldset:!0, figcaption:!0, figure:!0, footer:!0, form:!0, h1:!0, h2:!0, h3:!0, h4:!0, h5:!0, h6:!0, header:!0, hgroup:!0, hr:!0, legend:!0, main:!0, menu:!0, nav:!0, noscript:!0, 
ol:!0, p:!0, pre:!0, section:!0, ul:!0, center:!0, dir:!0, noframes:!0, marquee:!0}, H = {script:!0, style:!0, plaintext:!0, xmp:!0};
function I(a) {
  return !(!a || a.pop !== [].pop);
}
function J(a) {
  return !(!a || "object" !== typeof a);
}
function O(a) {
  return "" + a === a;
}
function P(a) {
  if (O(a) || a === +a) {
    a = 3;
  } else {
    if (I(a)) {
      if (O(a[0])) {
        a = 1;
      } else {
        var e = a[0];
        a = e === +e ? a[0] : -1;
      }
    } else {
      a = -1;
    }
  }
  return a;
}
function Q(a, e, b, p) {
  var d = e[1], k = e.slice(2);
  a = k.length ? a(d, k) : a(d);
  void 0 !== a && null !== a && "" !== a && (O(a) || a === +a ? b ? b.splice(p, 1, a) : (e.length = 0, e.push(3, e)) : I(a) && (11 === a[0] ? b ? (a.shift(), a.unshift(p, 1), b.splice.apply(b, a)) : (e.length = 0, e.push.apply(e, a)) : I(a[0]) ? b ? (a.unshift(p, 1), b.splice.apply(b, a)) : (e.length = 0, e.push(11), e.push.apply(e, a)) : b ? b.splice(p, 1, a) : (e.length = 0, e.push(11, a))));
  return a;
}
function R(a, e, b, p) {
  if (I(b) && O(b[0])) {
    var d = b[0];
    b = b.slice(1);
    d = b.length ? a(d, b) : a(d);
  } else {
    O(b) && (d = a(b));
  }
  return I(d) ? R(a, e, d, p) : d;
}
function S(a) {
  return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
function T(a, e, b) {
  a = S("" + a);
  var p = a.match('"'), d = a.match("'"), k = e ? "'" : '"';
  if (p && d) {
    a = e ? k + a.split("'").join("\\'") + k : k + a.split('"').join('\\"') + k;
  } else if (p) {
    a = "'" + a + "'";
  } else if (d) {
    a = e ? k + a.split("'").join("\\'") + k : k + a + k;
  } else if (b || a.match(/[^0-9a-z\.\-]/g) || 72 < a.length) {
    a = k + a + k;
  }
  return a;
}
function U(a) {
  var e = a.indexOf("#"), b = a.indexOf("."), p = "", d = "";
  e < b ? (p = a.split(".")[1], a = a.split(".")[0], 0 < e && (d = a.split("#")[1], a = a.split("#")[0])) : b < e && (d = a.split("#")[1], a = a.split("#")[0], 0 < b && (p = a.split(".")[1], a = a.split(".")[0]));
  return [a, d, p];
}
;function V(a, e, b, p) {
  function d(g, u, l, h, c) {
    function n() {
      var K = "";
      x && (K = "</" + x + ">", x = "");
      return K;
    }
    var f = "", v = g[0], r = g[1], w = 1, m = v, L;
    switch(v) {
      case 9:
        f = "<!DOCTYPE " + r + ">" + k(g, h, c);
        break;
      case 11:
        f = k(g, h, c);
        break;
      case 3:
        f = n() + (c ? r : S("" + r));
        break;
      case 4:
        f = "<![CDATA[" + r + "]]\x3e";
        break;
      case 8:
        f = "\x3c!--" + r + "--\x3e";
        break;
      case 13:
        f = n() + "\x3c!--[" + r + "]>" + k(g, !0, c) + "<![endif]--\x3e";
        break;
      case 16:
        f = n() + "\x3c!--{" + r + "};" + k(g, !0, c) + "--\x3e";
        break;
      case 14:
        f = "\x3c!--[" + r + "]>\x3c!--\x3e";
        break;
      case 15:
        f = "\x3c!--<![endif]--\x3e";
        break;
      case 7:
        h = Q(e, g, u, l);
        if (void 0 !== h && null !== h && "" !== h && (O(h) || h === +h || I(h))) {
          return -1;
        }
        break;
      case 18:
        f = "</" + r + ">";
        break;
      case 17:
        var M = !0;
      case 1:
        m = g[1], w = 2;
      default:
        m = U(m), u = m[1], l = m[2], m = m[0], "p" !== x || G[m] ? x = "" : f = n(), f += "<" + m, u && (f += " id=" + T(u, B, y)), l && (f += " class=" + T(l, B, y)), A || (L = A = A || F[m] ? !0 : !1), w = g[w], !I(w) && J(w) && (f += " " + C(w)), f = (g = k(g, h || E[m], c || H[m])) ? f + (">" + g) : M ? f + ">" : f + (A ? "/>" : ">"), M ? x = "" : A && !g || z[m] && !h ? x = t[m] ? "" : m : (f += "</" + m + ">", x = ""), L && (A = !1);
    }
    return f;
  }
  function k(g, u, l) {
    var h = "", c = g[0];
    var n = c === +c ? 2 : 1;
    1 === P(g) || 17 === c ? (c = g[n], n = !I(c) && J(c) ? n + 1 : n) : n = 11 === c ? 1 : 9 === c || 13 === c || 16 === c ? 2 : Infinity;
    for (; n < g.length; ++n) {
      c = g[n], O(c) || c === +c ? h += d([3, c], null, 0, u, l) : I(c) && (c = d(c, g, n, u, l), -1 === c ? --n : h += c);
    }
    return h;
  }
  function C(g) {
    var u = "", l, h;
    for (l in g) {
      var c = g[l];
      (h = 0 === l.indexOf(N)) && (l = l.substr(N.length));
      "className" === l && (l = "class");
      h && (c = R(e, l, c, D));
      if (!(null == c || q[l] && !1 === c || (u += " " + l, q[l]))) {
        if ("style" === l && J(c)) {
          var n = void 0, f = "";
          for (n in c) {
            h = c[n];
            "0px" === h && (h = 0);
            for (var v, r = [], w = n.split(""), m = w.length; m;) {
              v = w[--m], "A" <= v && "Z" >= v && (v = "-" + v.toLowerCase()), r[m] = v;
            }
            f += ";" + r.join("") + ":" + S("" + h);
          }
          c = f.substr(1);
          if (!c) {
            continue;
          }
        }
        u += "=" + T(c, B, y);
      }
    }
    return u.substr(1);
  }
  var D = "function" === typeof b ? b : function() {
  };
  b = b && "object" === typeof b ? b : p || {};
  var y = !0 === b.quotAlways, B = !0 === b.useSingleQuot, N = b.instructionAttrPrefix || ":", x, A = !1;
  if (I(a)) {
    return 7 === P(a) && (a = [11, a]), d(a, null, 0, !1, !1);
  }
}
;V.module = {};
module.exports = V;
V.DOCUMENT_NODE = 9;
V.DOCUMENT_FRAGMENT_NODE = 11;
V.ELEMENT_NODE = 1;
V.TEXT_NODE = 3;
V.CDATA_SECTION = 4;
V.PROCESSING_INSTRUCTION = 7;
V.COMMENT_NODE = 8;
V.COND_CMT_HIDE_LOWER = 13;
V.COND_CMT_SHOW_LOWER_START = 14;
V.COND_CMT_SHOW_LOWER_END = 15;
V.NETSCAPE4_COND_CMT_HIDE_LOWER = 16;
V.ELEMENT_START_TAG = 17;
V.ELEMENT_END_TAG = 18;
V.gulp = function(a, e, b) {
  const p = require("plugin-error");
  return require("through2").obj(function(d, k, C) {
    if (d.isNull()) {
      return C();
    }
    if (d.isStream()) {
      return this.emit("error", new p("json2html", "Streaming not supported")), C();
    }
    const D = "." + d.stem.split(".").pop();
    if (".json" === d.extname && [".html", ".htm", ".xhtml"].indexOf(D)) {
      try {
        const y = JSON.parse(d.contents.toString(k));
        if (I(y)) {
          const B = V(y, a, e, b);
          d.stem = d.stem.substr(0, d.stem.length - D.length);
          d.extname = D;
          d.contents = Buffer.from(B);
        }
        this.push(d);
      } catch (y) {
        this.emit("error", new p("json2html", y));
      }
    } else {
      this.push(d);
    }
    C();
  });
};

