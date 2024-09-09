var p = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, q = {link:!0, meta:!0, br:!0, hr:!0, img:!0, input:!0, area:!0, base:!0, col:!0, embed:!0, keygen:!0, param:!0, track:!0, wbr:!0, command:!0, basefont:!0, frame:!0, isindex:!0, bgsound:!0}, v = {html:!0, head:!0, body:!0, p:!0, dt:!0, dd:!0, li:!0, option:!0, tbody:!0, thead:!0, tfoot:!0, td:!0, th:!0, tr:!0, rb:!0, rbc:!0, rp:!0, rt:!0, 
rtc:!0, optgroup:!0, caption:!0, colgroup:!0}, D = {a:!0, audio:!0, del:!0, ins:!0, map:!0, noscript:!0, video:!0}, E = {xml:"http://www.w3.org/1999/xhtml", svg:"http://www.w3.org/2000/svg", math:"http://www.w3.org/1998/Math/MathML"}, F = {address:!0, article:!0, aside:!0, blockquote:!0, canvas:!0, details:!0, div:!0, dl:!0, fieldset:!0, figcaption:!0, figure:!0, footer:!0, form:!0, h1:!0, h2:!0, h3:!0, h4:!0, h5:!0, h6:!0, header:!0, hgroup:!0, hr:!0, legend:!0, main:!0, menu:!0, nav:!0, noscript:!0, 
ol:!0, p:!0, pre:!0, section:!0, ul:!0, center:!0, dir:!0, noframes:!0, marquee:!0}, H = {script:!0, style:!0, plaintext:!0, xmp:!0};
function I(a) {
  return !(!a || a.pop !== [].pop);
}
function J(a) {
  return !(!a || "object" !== typeof a);
}
function N(a) {
  return "" + a === a;
}
function O(a) {
  if (N(a) || a === +a) {
    a = 3;
  } else {
    if (I(a)) {
      if (N(a[0])) {
        a = 1;
      } else {
        var d = a[0];
        a = d === +d ? a[0] : -1;
      }
    } else {
      a = -1;
    }
  }
  return a;
}
function P(a, d, c, r) {
  var e = d[1], t = d.slice(2);
  a = t.length ? a(e, t) : a(e);
  void 0 !== a && null !== a && "" !== a && (N(a) || a === +a ? c ? c.splice(r, 1, a) : (d.length = 0, d.push(3, d)) : I(a) && (11 === a[0] ? c ? (a.shift(), a.unshift(r, 1), c.splice.apply(c, a)) : (d.length = 0, d.push.apply(d, a)) : I(a[0]) ? c ? (a.unshift(r, 1), c.splice.apply(c, a)) : (d.length = 0, d.push(11), d.push.apply(d, a)) : c ? c.splice(r, 1, a) : (d.length = 0, d.push(11, a))));
  return a;
}
function Q(a, d, c, r) {
  if (I(c) && N(c[0])) {
    var e = c[0];
    c = c.slice(1);
    e = c.length ? a(e, c) : a(e);
  } else {
    N(c) && (e = a(c));
  }
  return I(e) ? Q(a, d, e, r) : e;
}
function R(a) {
  return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
function S(a, d, c) {
  a = R("" + a);
  if (a.match('"')) {
    a = a.match("'") ? d ? "'" + a.split("&apos;").join("'").split("'").join("&apos;") + "'" : '"' + a.split("&quot;").join('"').split('"').join("&quot;") + '"' : "'" + a + "'";
  } else if (c || a.match(/[^0-9a-z\.\-]/g) || 72 < a.length) {
    a = (d ? "'" : '"') + R(a) + (d ? "'" : '"');
  }
  return a;
}
function T(a) {
  var d = a.indexOf("#"), c = a.indexOf(".");
  if (d < c) {
    var r = a.split(".")[1];
    a = a.split(".")[0];
    if (0 < d) {
      var e = a.split("#")[1];
      a = a.split("#")[0];
    }
  } else {
    c < d && (e = a.split("#")[1], a = a.split("#")[0], 0 < c && (r = a.split(".")[1], a = a.split(".")[0]));
  }
  return [a, e, r];
}
;function U(a, d, c, r) {
  function e(g, u, l, h, b) {
    function m() {
      y && (f += "</" + y + ">", y = "");
    }
    var f = "", w = g[0], n = g[1], x = 1, k = w, K;
    switch(w) {
      case 9:
        f = "<!DOCTYPE " + n + ">" + t(g, h, b);
        break;
      case 11:
        f = t(g, h, b);
        break;
      case 3:
        m();
        f += b ? n : R("" + n);
        break;
      case 4:
        N(n) && (f = "<![CDATA[" + n + "]]\x3e");
        break;
      case 8:
        N(n) && (f = "\x3c!--" + n + "--\x3e");
        break;
      case 13:
        m();
        N(n) && (f = "\x3c!--[" + n + "]>");
        f += t(g, !0, b) + "<![endif]--\x3e";
        break;
      case 16:
        m();
        N(n) && (f = "\x3c!--{" + n + "};");
        f += t(g, !0, b) + "--\x3e";
        break;
      case 14:
        N(n) && (f = "\x3c!--[" + n + "]>\x3c!--\x3e");
        f += t(g, h, b) + "\x3c!--<![endif]--\x3e";
        break;
      case 15:
        f = "\x3c!--<![endif]--\x3e";
        break;
      case 7:
        h = P(d, g, u, l);
        if (void 0 !== h && null !== h && "" !== h && (N(h) || h === +h || I(h))) {
          return -1;
        }
        break;
      case 18:
        N(n) && (f = "</" + n + ">");
        break;
      case 17:
        var L = !0;
      case 1:
        k = g[1], x = 2;
      default:
        N(k) && (k = T(k), u = k[1], l = k[2], k = k[0], "p" !== y || F[k] || (f = "</p>"), y = "", f += "<" + k, u && (f += " id=" + S(u, G, A)), l && (f += " class=" + S(l, G, A)), z || (K = z = z || E[k] ? !0 : !1), x = g[x], !I(x) && J(x) && (f += " " + B(x)), f = (g = t(g, h || D[k], b || H[k])) ? f + (">" + g) : L ? f + ">" : f + (z ? "/>" : ">"), L ? y = "" : z && !g || v[k] && !h ? y = q[k] ? "" : k : (f += "</" + k + ">", y = ""), K && (z = !1));
    }
    return f;
  }
  function t(g, u, l) {
    var h = "", b = g[0];
    var m = b === +b ? 2 : 1;
    1 === O(g) || 17 === b ? (b = g[m], m = !I(b) && J(b) ? m + 1 : m) : m = 11 === b ? 1 : 9 === b || 13 === b || 16 === b ? 2 : Infinity;
    for (; m < g.length; ++m) {
      b = g[m], N(b) || b === +b ? h += e([3, b], null, 0, u, l) : I(b) && (b = e(b, g, m, u, l), -1 === b ? --m : h += b);
    }
    return h;
  }
  function B(g) {
    var u = "", l, h;
    for (l in g) {
      var b = g[l];
      (h = 0 === l.indexOf(M)) && (l = l.substr(M.length));
      "className" === l && (l = "class");
      h && (b = Q(d, l, b, C));
      if (!(null == b || p[l] && !1 === b || (u += " " + l, p[l]))) {
        if ("style" === l && J(b)) {
          var m = void 0, f = "";
          for (m in b) {
            h = b[m];
            "0px" === h && (h = 0);
            for (var w, n = [], x = m.split(""), k = x.length; k;) {
              w = x[--k], "A" <= w && "Z" >= w && (w = "-" + w.toLowerCase()), n[k] = w;
            }
            f += ";" + n.join("") + ":" + R("" + h);
          }
          b = f.substr(1);
          if (!b) {
            continue;
          }
        }
        u += "=" + S(b, G, A);
      }
    }
    return u.substr(1);
  }
  var C = "function" === typeof c ? c : function() {
  };
  c = c && "object" === typeof c ? c : r || {};
  var A = !!c.quotAlways, G = !!c.useSingleQuot, M = c.instructionAttrPrefix || ":", y, z = !1;
  if (I(a)) {
    return 7 === O(a) && (a = [11, a]), e(a, null, 0, !1, !1);
  }
}
;U.module = {};
module.exports = U;
U.DOCUMENT_NODE = 9;
U.DOCUMENT_FRAGMENT_NODE = 11;
U.ELEMENT_NODE = 1;
U.TEXT_NODE = 3;
U.CDATA_SECTION = 4;
U.PROCESSING_INSTRUCTION = 7;
U.COMMENT_NODE = 8;
U.COND_CMT_HIDE_LOWER = 13;
U.COND_CMT_SHOW_LOWER_START = 14;
U.COND_CMT_SHOW_LOWER_END = 15;
U.NETSCAPE4_COND_CMT_HIDE_LOWER = 16;
U.ELEMENT_START_TAG = 17;
U.ELEMENT_END_TAG = 18;
U.gulp = function(a, d, c) {
  const r = require("plugin-error");
  return require("through2")(function(e, t, B) {
    if (e.isNull()) {
      return B();
    }
    if (e.isStream()) {
      return this.emit("error", new r("json2html", "Streaming not supported")), B();
    }
    if (".json" === e.extname) {
      try {
        const C = JSON.parse(e.contents.toString(t)), A = U(C, a, d, c);
        e.extname = "." + e.stem.split(".").pop();
        e.stem = e.stem.substr(0, e.stem.length - e.extname.length);
        e.contents = Buffer.from(A);
        this.push(e);
      } catch (C) {
        this.emit("error", new r("json2html", C));
      }
    } else {
      this.push(e);
    }
    B();
  });
};

