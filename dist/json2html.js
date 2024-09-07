var n = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, t = {link:!0, meta:!0, br:!0, hr:!0, img:!0, input:!0, area:!0, base:!0, col:!0, embed:!0, keygen:!0, param:!0, track:!0, wbr:!0, command:!0, basefont:!0, frame:!0, isindex:!0, bgsound:!0}, v = {html:!0, head:!0, body:!0, p:!0, dt:!0, dd:!0, li:!0, option:!0, tbody:!0, thead:!0, tfoot:!0, td:!0, th:!0, tr:!0, rb:!0, rbc:!0, rp:!0, rt:!0, 
rtc:!0, optgroup:!0, caption:!0, colgroup:!0}, D = {a:!0, audio:!0, del:!0, ins:!0, map:!0, noscript:!0, video:!0}, E = {xml:"http://www.w3.org/1999/xhtml", svg:"http://www.w3.org/2000/svg", math:"http://www.w3.org/1998/Math/MathML"}, F = {address:!0, article:!0, aside:!0, blockquote:!0, canvas:!0, details:!0, div:!0, dl:!0, fieldset:!0, figcaption:!0, figure:!0, footer:!0, form:!0, h1:!0, h2:!0, h3:!0, h4:!0, h5:!0, h6:!0, header:!0, hgroup:!0, hr:!0, legend:!0, main:!0, menu:!0, nav:!0, noscript:!0, 
ol:!0, p:!0, pre:!0, section:!0, ul:!0, center:!0, dir:!0, noframes:!0, marquee:!0}, H = {script:!0, style:!0, plaintext:!0, xmp:!0};
function I(a) {
  return !(!a || a.pop !== [].pop);
}
function J(a) {
  return !(!a || "object" !== typeof a);
}
function M(a) {
  return "" + a === a;
}
function N(a) {
  if (M(a) || a === +a) {
    a = 3;
  } else {
    if (I(a)) {
      if (M(a[0])) {
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
function O(a, d, b, p, e) {
  var w = d[1], z = d.slice(2);
  a = z.length ? a(w, z) : a(w);
  void 0 !== a && null !== a && "" !== a && (M(a) || a === +a ? b ? b.splice(p, 1, a) : (d.length = 0, d.push(3, d)) : I(a) ? 11 === a[0] ? b ? (a.shift(), a.unshift(p, 1), b.splice.apply(b, a)) : (d.length = 0, d.push.apply(d, a)) : I(a[0]) ? b ? (a.unshift(p, 1), b.splice.apply(b, a)) : (d.length = 0, d.push(11), d.push.apply(d, a)) : b ? b.splice(p, 1, a) : (d.length = 0, d.push(11, a)) : e("PROCESSING_INSTRUCTION Error! [" + JSON.stringify(d) + "]"));
  return a;
}
function P(a, d, b, p) {
  if (I(b) && M(b[0])) {
    var e = b[0];
    b = b.slice(1);
    e = b.length ? a(e, b) : a(e);
  } else {
    M(b) ? e = a(b) : p("Invalid InstructionAttr value! [" + d + "=" + b + "]");
  }
  return I(e) ? P(a, d, e, p) : e;
}
function Q(a) {
  return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
function R(a, d, b) {
  a = Q("" + a);
  if (a.match('"')) {
    a = a.match("'") ? d ? "'" + a.split("&apos;").join("'").split("'").join("&apos;") + "'" : '"' + a.split("&quot;").join('"').split('"').join("&quot;") + '"' : "'" + a + "'";
  } else if (b || a.match(/[^0-9a-z\.\-]/g) || 72 < a.length) {
    a = (d ? "'" : '"') + Q(a) + (d ? "'" : '"');
  }
  return a;
}
function S(a) {
  var d = a.indexOf("#"), b = a.indexOf(".");
  if (d < b) {
    var p = a.split(".")[1];
    a = a.split(".")[0];
    if (0 < d) {
      var e = a.split("#")[1];
      a = a.split("#")[0];
    }
  } else {
    b < d && (e = a.split("#")[1], a = a.split("#")[0], 0 < b && (p = a.split(".")[1], a = a.split(".")[0]));
  }
  return [a, e, p];
}
;function T(a, d, b, p) {
  function e(f, u, l, h, c) {
    function m() {
      A && (g += "</" + A + ">", A = "");
    }
    var g = "", x = f[0], q = f[1], y = 1, k = x, K;
    switch(x) {
      case 9:
        g += q + w(f, !1, !1);
        break;
      case 11:
        g += w(f, h, c);
        break;
      case 3:
        m();
        g += c ? q : Q("" + q);
        break;
      case 4:
        M(q) ? g += "<![CDATA[" + q + "]]\x3e" : r("CDATA_SECTION Error! [" + f + "]");
        break;
      case 8:
        M(q) ? g += "\x3c!--" + q + "--\x3e" : r("COMMENT_NODE Error! [" + f + "]");
        break;
      case 13:
        m();
        M(q) ? g += "\x3c!--[" + q + "]>" : r("COND_CMT_HIDE_LOWER Error! [" + f + "]");
        g += w(f, !0, c) + "<![endif]--\x3e";
        break;
      case 14:
        m();
        M(q) ? g += "\x3c!--[" + q + "]>\x3c!--\x3e" : r("COND_CMT_SHOW_LOWER_START Error! [" + f + "]");
        g += w(f, !0, c) + "\x3c!--<![endif]--\x3e";
        break;
      case 7:
        h = O(d, f, u, l, r);
        if (void 0 !== h && null !== h && "" !== h && (M(h) || h === +h || I(h))) {
          return -1;
        }
        break;
      case 1:
        k = f[1], y = 2;
      default:
        M(k) ? (k = S(k), u = k[1], l = k[2], k = k[0], "p" !== A || F[k] || (g += "</p>"), A = "", g += "<" + k, u && (g += " id=" + R(u, G, C)), l && (g += " class=" + R(l, G, C)), B || (K = B = B || E[k] ? !0 : !1), y = f[y], !I(y) && J(y) && (g += " " + z(y)), g = (f = w(f, h || D[k], c || H[k])) ? g + (">" + f) : g + (B ? "/>" : ">"), B && !f || v[k] && !h ? A = t[k] ? "" : k : (g += "</" + k + ">", A = ""), K && (B = !1)) : r("Not html.json! [" + f + "]");
    }
    return g;
  }
  function w(f, u, l) {
    var h = "", c = f[0];
    var m = 1 === c ? 2 : 1;
    1 === N(f) ? (c = f[m], m = !I(c) && J(c) ? m + 1 : m) : m = 11 === c ? 1 : 9 === c || 13 === c || 14 === c ? 2 : Infinity;
    for (; m < f.length; ++m) {
      c = f[m], M(c) || c === +c ? h += e([3, c], null, 0, u, l) : I(c) ? (c = e(c, f, m, u, l), -1 === c ? --m : h += c) : r("Invalid html.json! [" + c + "]");
    }
    return h;
  }
  function z(f) {
    var u = "", l, h;
    for (l in f) {
      var c = f[l];
      (h = 0 === l.indexOf(L)) && (l = l.substr(L.length));
      "className" === l && (l = "class");
      h && (c = P(d, l, c, r));
      if (!(null == c || n[l] && !1 === c || (u += " " + l, n[l]))) {
        if ("style" === l && J(c)) {
          var m = void 0, g = "";
          for (m in c) {
            h = c[m];
            "0px" === h && (h = 0);
            for (var x, q = [], y = m.split(""), k = y.length; k;) {
              x = y[--k], "A" <= x && "Z" >= x && (x = "-" + x.toLowerCase()), q[k] = x;
            }
            g += ";" + q.join("") + ":" + Q("" + h);
          }
          c = g.substr(1);
          if (!c) {
            continue;
          }
        }
        u += "=" + R(c, G, C);
      }
    }
    return u.substr(1);
  }
  var r = "function" === typeof b ? b : function() {
  };
  b = b && "object" === typeof b ? b : p || {};
  var C = !!b.quotAlways, G = !!b.useSingleQuot, L = b.instructionAttrPrefix || ":", A, B = !1;
  if (I(a)) {
    return 7 === N(a) && (a = [11, a]), e(a, null, 0, !1, !1);
  }
  r("Invalid html.json document!");
}
;T.node = {};
module.exports = T;
T.DOCUMENT_NODE = 9;
T.DOCUMENT_FRAGMENT_NODE = 11;
T.ELEMENT_NODE = 1;
T.TEXT_NODE = 3;
T.CDATA_SECTION = 4;
T.PROCESSING_INSTRUCTION = 7;
T.COMMENT_NODE = 8;
T.COND_CMT_HIDE_LOWER = 13;
T.COND_CMT_SHOW_LOWER_START = 14;
T.COND_CMT_SHOW_LOWER_END = 15;
T.NETSCAPE4_COND_CMT_HIDE_LOWER = 16;
T.ELEMENT_WITHOUT_END_TAG = 17;
T.ELEMENT_WITHOUT_START_TAG = 18;
T.gulp = function(a, d, b) {
  const p = require("plugin-error");
  return require("through2").A(function(e, w, z) {
    if (e.o()) {
      return z();
    }
    if (e.v()) {
      return this.m("error", new p("json2html", "Streaming not supported")), z();
    }
    if (".json" === e.j) {
      try {
        const r = JSON.parse(e.l.toString(w)), C = T(r, a, d, b);
        e.j = "." + e.h.split(".").pop();
        e.h = e.h.substr(0, e.h.length - e.j.length);
        e.l = Buffer.from(C);
        this.push(e);
      } catch (r) {
        this.m("error", new p("json2html", r));
      }
    } else {
      this.push(e);
    }
    z();
  });
};

