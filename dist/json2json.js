var v = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, x = {link:!0, meta:!0, br:!0, hr:!0, img:!0, input:!0, area:!0, base:!0, col:!0, embed:!0, keygen:!0, param:!0, track:!0, wbr:!0, command:!0, basefont:!0, frame:!0, isindex:!0, bgsound:!0}, z = {html:!0, head:!0, body:!0, p:!0, dt:!0, dd:!0, li:!0, option:!0, tbody:!0, thead:!0, tfoot:!0, td:!0, th:!0, tr:!0, rb:!0, rbc:!0, rp:!0, rt:!0, 
rtc:!0, optgroup:!0, caption:!0, colgroup:!0}, D = {a:!0, audio:!0, del:!0, ins:!0, map:!0, noscript:!0, video:!0}, E = {xml:"http://www.w3.org/1999/xhtml", svg:"http://www.w3.org/2000/svg", math:"http://www.w3.org/1998/Math/MathML"}, H = {address:!0, article:!0, aside:!0, blockquote:!0, canvas:!0, details:!0, div:!0, dl:!0, fieldset:!0, figcaption:!0, figure:!0, footer:!0, form:!0, h1:!0, h2:!0, h3:!0, h4:!0, h5:!0, h6:!0, header:!0, hgroup:!0, hr:!0, legend:!0, main:!0, menu:!0, nav:!0, noscript:!0, 
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
function P(a, b, c, g) {
  var n = b[1], h = b.slice(2);
  a = h.length ? a(n, h) : a(n);
  void 0 !== a && null !== a && "" !== a && (N(a) ? c ? c.splice(g, 1, a) : (b.length = 0, b.push(3, b)) : J(a) && (11 === a[0] ? c ? (a.shift(), a.unshift(g, 1), c.splice.apply(c, a)) : (b.length = 0, b.push.apply(b, a)) : J(a[0]) ? c ? (a.unshift(g, 1), c.splice.apply(c, a)) : (b.length = 0, b.push(11), b.push.apply(b, a)) : c ? c.splice(g, 1, a) : (b.length = 0, b.push(11, a))));
  return a;
}
function S(a, b, c, g, n) {
  if (J(g) && L(g[0])) {
    var h = g[0];
    g = g.slice(1);
    h = g.length ? b(h, g) : b(h);
  } else {
    L(g) && (h = b(g));
  }
  return a && J(h) ? S(!0, b, c, h, n) : h;
}
function T(a) {
  return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
function U(a, b, c) {
  a = T("" + a);
  var g = a.match('"'), n = a.match("'"), h = b ? "'" : '"';
  if (g && n) {
    a = b ? h + a.split("'").join("\\'") + h : h + a.split('"').join('\\"') + h;
  } else if (g) {
    a = "'" + a + "'";
  } else if (n) {
    a = b ? h + a.split("'").join("\\'") + h : h + a + h;
  } else if (c || a.match(/[^0-9a-z\.\-]/g) || 72 < a.length) {
    a = h + a + h;
  }
  return a;
}
function V(a) {
  var b = a[0], c = M(b) ? 2 : 1;
  1 === O(a) || 17 === b ? (a = a[c], c = !J(a) && K(a) ? c + 1 : c) : c = 11 === b ? 1 : 9 === b || 13 === b || 16 === b ? 2 : Infinity;
  return c;
}
function W(a) {
  var b = V(a), c = "", g;
  if (b < a.length) {
    for (g = b; g < a.length;) {
      b = a[g];
      var n = O(b);
      3 === n ? (c = N(b) ? c + b : c + b[1], a.splice(g, 1)) : (c && (a.splice(g, 0, c === "" + +c && M(parseInt(c, 10)) ? +c : c), c = ""), ++g, 1 !== n && 17 !== n || W(b));
    }
    c && (a[g] = c === "" + +c && M(parseInt(c, 10)) ? +c : c);
  }
}
function X(a) {
  var b = a.indexOf("#"), c = a.indexOf(".");
  if (b < c) {
    var g = a.split(".")[1];
    a = a.split(".")[0];
    if (0 < b) {
      var n = a.split("#")[1];
      a = a.split("#")[0];
    }
  } else {
    c < b && (n = a.split("#")[1], a = a.split("#")[0], 0 < c && (g = a.split(".")[1], a = a.split(".")[0]));
  }
  return [a, n, g];
}
;function Y(a, b, c, g, n) {
  function h(l, d, f, k) {
    var p = l[0], e = l[1], y = 1, q = p;
    switch(p) {
      case 9:
        B(l, k);
        break;
      case 11:
        B(l, k);
        break;
      case 3:
        break;
      case 4:
        if (!F && d) {
          return d.splice(f, 1), -1;
        }
        break;
      case 8:
        if (!C && d) {
          return d.splice(f, 1), -1;
        }
        break;
      case 13:
        B(l, k);
        break;
      case 16:
        B(l, k);
        break;
      case 7:
        l = P(G, l, d, f);
        if (void 0 !== l) {
          A = !0;
          if (null === l || "" === l) {
            return d ? d.splice(f, 1) : (a.length = 0, a.push(8, "")), -1;
          }
          if (!N(l) && J(l)) {
            return -1;
          }
        } else {
          m = !1;
        }
        break;
      case 1:
      case 17:
        q = e, y = 2;
      default:
        if (L(q) && 1 + y <= l.length) {
          d = l[y];
          if (!J(d) && K(d)) {
            f = 0;
            for (var t in d) {
              p = t, e = d[t], (q = 0 === t.indexOf(w)) ? (t = t.substr(w.length), "className" === t && (t = "class"), e = S(!1, G, t, e, u), void 0 !== e ? (delete d[p], J(e) ? L(e[0]) && (d[p] = e, m = !1, ++f) : v[t] && !1 === e || null === e || (d[t] = e, ++f)) : (m = !1, ++f)) : ++f;
            }
            0 === f && l.splice(y, 1);
          }
          B(l, k);
        }
    }
    return 0;
  }
  function B(l, d) {
    var f = V(l);
    for (d.push(l); f < l.length; ++f) {
      var k = l[f];
      !N(k) && J(k) && (k = h(k, l, f, d)) && (f += k);
    }
    d.pop();
  }
  var G = "function" === typeof b ? b : function() {
  }, u = "function" === typeof g ? g : function() {
  };
  b = K(b) ? b : K(c) ? c : K(g) ? g : n || {};
  var F = !1 !== b.keepCDATASections, C = !1 !== b.keepComments, w = b.instructionAttrPrefix || ":", A = !1, m = !0;
  if (J(a)) {
    return h(a, null, 0, []), A && W(a), m;
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
function Z(a, b, c, g) {
  function n(m, l, d, f, k) {
    function p() {
      w && (e += "</" + w + ">", w = "");
    }
    var e = "", y = m[0], q = m[1], t = 1, r = y, Q;
    switch(y) {
      case 9:
        e = "<!DOCTYPE " + q + ">" + h(m, f, k);
        break;
      case 11:
        e = h(m, f, k);
        break;
      case 3:
        p();
        e += k ? q : T("" + q);
        break;
      case 4:
        L(q) && (e = "<![CDATA[" + q + "]]\x3e");
        break;
      case 8:
        L(q) && (e = "\x3c!--" + q + "--\x3e");
        break;
      case 13:
        p();
        L(q) && (e = "\x3c!--[" + q + "]>");
        e += h(m, !0, k) + "<![endif]--\x3e";
        break;
      case 16:
        p();
        L(q) && (e = "\x3c!--{" + q + "};");
        e += h(m, !0, k) + "--\x3e";
        break;
      case 14:
        L(q) && (e = "\x3c!--[" + q + "]>\x3c!--\x3e");
        e += h(m, f, k) + "\x3c!--<![endif]--\x3e";
        break;
      case 15:
        e = "\x3c!--<![endif]--\x3e";
        break;
      case 7:
        f = P(b, m, l, d);
        if (void 0 !== f && null !== f && "" !== f && (N(f) || J(f))) {
          return -1;
        }
        break;
      case 18:
        L(q) && (e = "</" + q + ">");
        break;
      case 17:
        var R = !0;
      case 1:
        r = m[1], t = 2;
      default:
        L(r) && (r = X(r), l = r[1], d = r[2], r = r[0], "p" !== w || H[r] || (e = "</p>"), w = "", e += "<" + r, l && (e += " id=" + U(l, F, u)), d && (e += " class=" + U(d, F, u)), A || (Q = A = A || E[r] ? !0 : !1), t = m[t], !J(t) && K(t) && (e += " " + B(t)), e = (m = h(m, f || D[r], k || I[r])) ? e + (">" + m) : R ? e + ">" : e + (A ? "/>" : ">"), R ? w = "" : A && !m || z[r] && !f ? w = x[r] ? "" : r : (e += "</" + r + ">", w = ""), Q && (A = !1));
    }
    return e;
  }
  function h(m, l, d) {
    for (var f = "", k = V(m), p; k < m.length; ++k) {
      p = m[k], N(p) ? f += n([3, p], null, 0, l, d) : J(p) && (p = n(p, m, k, l, d), -1 === p ? --k : f += p);
    }
    return f;
  }
  function B(m) {
    var l = "", d, f;
    for (d in m) {
      var k = m[d];
      (f = 0 === d.indexOf(C)) && (d = d.substr(C.length));
      "className" === d && (d = "class");
      f && (k = S(!0, b, d, k, G));
      if (!(null == k || v[d] && !1 === k || (l += " " + d, v[d]))) {
        if ("style" === d && K(k)) {
          var p = void 0, e = "";
          for (p in k) {
            f = k[p];
            "0px" === f && (f = 0);
            for (var y, q = [], t = p.split(""), r = t.length; r;) {
              y = t[--r], "A" <= y && "Z" >= y && (y = "-" + y.toLowerCase()), q[r] = y;
            }
            e += ";" + q.join("") + ":" + T("" + f);
          }
          k = e.substr(1);
          if (!k) {
            continue;
          }
        }
        l += "=" + U(k, F, u);
      }
    }
    return l.substr(1);
  }
  var G = "function" === typeof c ? c : function() {
  };
  c = c && "object" === typeof c ? c : g || {};
  var u = !!c.quotAlways, F = !!c.useSingleQuot, C = c.instructionAttrPrefix || ":", w, A = !1;
  if (J(a)) {
    return 7 === O(a) && (a = [11, a]), n(a, null, 0, !1, !1);
  }
}
;Y.gulp = function(a, b, c) {
  const g = require("plugin-error"), n = require("through2"), h = b && "object" === typeof b ? b : c && "object" === typeof c ? c : {}, B = h.outputStaticPagesAsHTML, G = h.staticPages && "object" === typeof h.staticPages ? h.staticPages : {};
  h.staticPages = G;
  return n(function(u, F, C) {
    if (u.isNull()) {
      return C();
    }
    if (u.isStream()) {
      return this.emit("error", new g("json2json", "Streaming not supported")), C();
    }
    if (".json" === u.extname) {
      try {
        const w = JSON.parse(u.contents.toString(F)), A = Y(w, a, b, c);
        let m;
        B && (G[u.path.split("\\").join("/").split(".json").join("")] = A);
        A && B ? (m = Z(w, a, b, c), u.extname = "." + u.stem.split(".").pop(), u.stem = u.stem.substr(0, u.stem.length - u.extname.length)) : m = JSON.stringify(w, null, h.prettify ? "    " : "");
        u.contents = Buffer.from(m);
        this.push(u);
      } catch (w) {
        this.emit("error", new g("json2json", w));
      }
    } else {
      this.push(u);
    }
    C();
  });
};

