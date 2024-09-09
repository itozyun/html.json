var r = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, t = {link:!0, meta:!0, br:!0, hr:!0, img:!0, input:!0, area:!0, base:!0, col:!0, embed:!0, keygen:!0, param:!0, track:!0, wbr:!0, command:!0, basefont:!0, frame:!0, isindex:!0, bgsound:!0}, v = {html:!0, head:!0, body:!0, p:!0, dt:!0, dd:!0, li:!0, option:!0, tbody:!0, thead:!0, tfoot:!0, td:!0, th:!0, tr:!0, rb:!0, rbc:!0, rp:!0, rt:!0, 
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
        var e = a[0];
        a = e === +e ? a[0] : -1;
      }
    } else {
      a = -1;
    }
  }
  return a;
}
function P(a, e, b, q) {
  var d = e[1], k = e.slice(2);
  a = k.length ? a(d, k) : a(d);
  void 0 !== a && null !== a && "" !== a && (N(a) || a === +a ? b ? b.splice(q, 1, a) : (e.length = 0, e.push(3, e)) : I(a) && (11 === a[0] ? b ? (a.shift(), a.unshift(q, 1), b.splice.apply(b, a)) : (e.length = 0, e.push.apply(e, a)) : I(a[0]) ? b ? (a.unshift(q, 1), b.splice.apply(b, a)) : (e.length = 0, e.push(11), e.push.apply(e, a)) : b ? b.splice(q, 1, a) : (e.length = 0, e.push(11, a))));
  return a;
}
function Q(a, e, b, q) {
  if (I(b) && N(b[0])) {
    var d = b[0];
    b = b.slice(1);
    d = b.length ? a(d, b) : a(d);
  } else {
    N(b) && (d = a(b));
  }
  return I(d) ? Q(a, e, d, q) : d;
}
function R(a) {
  return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
function S(a, e, b) {
  a = R("" + a);
  var q = a.match('"'), d = a.match("'"), k = e ? "'" : '"';
  if (q && d) {
    a = e ? k + a.split("'").join("\\'") + k : k + a.split('"').join('\\"') + k;
  } else if (q) {
    a = "'" + a + "'";
  } else if (d) {
    a = e ? k + a.split("'").join("\\'") + k : k + a + k;
  } else if (b || a.match(/[^0-9a-z\.\-]/g) || 72 < a.length) {
    a = k + a + k;
  }
  return a;
}
function T(a) {
  var e = a.indexOf("#"), b = a.indexOf(".");
  if (e < b) {
    var q = a.split(".")[1];
    a = a.split(".")[0];
    if (0 < e) {
      var d = a.split("#")[1];
      a = a.split("#")[0];
    }
  } else {
    b < e && (d = a.split("#")[1], a = a.split("#")[0], 0 < b && (q = a.split(".")[1], a = a.split(".")[0]));
  }
  return [a, d, q];
}
;function U(a, e, b, q) {
  function d(g, u, m, h, c) {
    function n() {
      y && (f += "</" + y + ">", y = "");
    }
    var f = "", w = g[0], p = g[1], x = 1, l = w, K;
    switch(w) {
      case 9:
        f = "<!DOCTYPE " + p + ">" + k(g, h, c);
        break;
      case 11:
        f = k(g, h, c);
        break;
      case 3:
        n();
        f += c ? p : R("" + p);
        break;
      case 4:
        N(p) && (f = "<![CDATA[" + p + "]]\x3e");
        break;
      case 8:
        N(p) && (f = "\x3c!--" + p + "--\x3e");
        break;
      case 13:
        n();
        N(p) && (f = "\x3c!--[" + p + "]>");
        f += k(g, !0, c) + "<![endif]--\x3e";
        break;
      case 16:
        n();
        N(p) && (f = "\x3c!--{" + p + "};");
        f += k(g, !0, c) + "--\x3e";
        break;
      case 14:
        N(p) && (f = "\x3c!--[" + p + "]>\x3c!--\x3e");
        break;
      case 15:
        f = "\x3c!--<![endif]--\x3e";
        break;
      case 7:
        h = P(e, g, u, m);
        if (void 0 !== h && null !== h && "" !== h && (N(h) || h === +h || I(h))) {
          return -1;
        }
        break;
      case 18:
        N(p) && (f = "</" + p + ">");
        break;
      case 17:
        var L = !0;
      case 1:
        l = g[1], x = 2;
      default:
        N(l) && (l = T(l), u = l[1], m = l[2], l = l[0], "p" !== y || F[l] || (f = "</p>"), y = "", f += "<" + l, u && (f += " id=" + S(u, G, A)), m && (f += " class=" + S(m, G, A)), z || (K = z = z || E[l] ? !0 : !1), x = g[x], !I(x) && J(x) && (f += " " + B(x)), f = (g = k(g, h || D[l], c || H[l])) ? f + (">" + g) : L ? f + ">" : f + (z ? "/>" : ">"), L ? y = "" : z && !g || v[l] && !h ? y = t[l] ? "" : l : (f += "</" + l + ">", y = ""), K && (z = !1));
    }
    return f;
  }
  function k(g, u, m) {
    var h = "", c = g[0];
    var n = c === +c ? 2 : 1;
    1 === O(g) || 17 === c ? (c = g[n], n = !I(c) && J(c) ? n + 1 : n) : n = 11 === c ? 1 : 9 === c || 13 === c || 16 === c ? 2 : Infinity;
    for (; n < g.length; ++n) {
      c = g[n], N(c) || c === +c ? h += d([3, c], null, 0, u, m) : I(c) && (c = d(c, g, n, u, m), -1 === c ? --n : h += c);
    }
    return h;
  }
  function B(g) {
    var u = "", m, h;
    for (m in g) {
      var c = g[m];
      (h = 0 === m.indexOf(M)) && (m = m.substr(M.length));
      "className" === m && (m = "class");
      h && (c = Q(e, m, c, C));
      if (!(null == c || r[m] && !1 === c || (u += " " + m, r[m]))) {
        if ("style" === m && J(c)) {
          var n = void 0, f = "";
          for (n in c) {
            h = c[n];
            "0px" === h && (h = 0);
            for (var w, p = [], x = n.split(""), l = x.length; l;) {
              w = x[--l], "A" <= w && "Z" >= w && (w = "-" + w.toLowerCase()), p[l] = w;
            }
            f += ";" + p.join("") + ":" + R("" + h);
          }
          c = f.substr(1);
          if (!c) {
            continue;
          }
        }
        u += "=" + S(c, G, A);
      }
    }
    return u.substr(1);
  }
  var C = "function" === typeof b ? b : function() {
  };
  b = b && "object" === typeof b ? b : q || {};
  var A = !!b.quotAlways, G = !!b.useSingleQuot, M = b.instructionAttrPrefix || ":", y, z = !1;
  if (I(a)) {
    return 7 === O(a) && (a = [11, a]), d(a, null, 0, !1, !1);
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
U.gulp = function(a, e, b) {
  const q = require("plugin-error");
  return require("through2")(function(d, k, B) {
    if (d.isNull()) {
      return B();
    }
    if (d.isStream()) {
      return this.emit("error", new q("json2html", "Streaming not supported")), B();
    }
    if (".json" === d.extname) {
      try {
        const C = JSON.parse(d.contents.toString(k)), A = U(C, a, e, b);
        d.extname = "." + d.stem.split(".").pop();
        d.stem = d.stem.substr(0, d.stem.length - d.extname.length);
        d.contents = Buffer.from(A);
        this.push(d);
      } catch (C) {
        this.emit("error", new q("json2html", C));
      }
    } else {
      this.push(d);
    }
    B();
  });
};

