var u = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, x = {link:!0, meta:!0, br:!0, hr:!0, img:!0, input:!0, area:!0, base:!0, col:!0, embed:!0, keygen:!0, param:!0, track:!0, wbr:!0, command:!0, basefont:!0, frame:!0, isindex:!0, bgsound:!0}, C = {html:!0, head:!0, body:!0, p:!0, dt:!0, dd:!0, li:!0, option:!0, tbody:!0, thead:!0, tfoot:!0, td:!0, th:!0, tr:!0, rb:!0, rbc:!0, rp:!0, rt:!0, 
rtc:!0, optgroup:!0, caption:!0, colgroup:!0}, D = {a:!0, audio:!0, del:!0, ins:!0, map:!0, noscript:!0, video:!0}, G = {xml:"http://www.w3.org/1999/xhtml", svg:"http://www.w3.org/2000/svg", math:"http://www.w3.org/1998/Math/MathML"}, H = {address:!0, article:!0, aside:!0, blockquote:!0, canvas:!0, details:!0, div:!0, dl:!0, fieldset:!0, figcaption:!0, figure:!0, footer:!0, form:!0, h1:!0, h2:!0, h3:!0, h4:!0, h5:!0, h6:!0, header:!0, hgroup:!0, hr:!0, legend:!0, main:!0, menu:!0, nav:!0, noscript:!0, 
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
  var p = b[1], h = b.slice(2);
  a = h.length ? a(p, h) : a(p);
  void 0 !== a && null !== a && "" !== a && (N(a) ? c ? c.splice(g, 1, a) : (b.length = 0, b.push(3, b)) : J(a) && (11 === a[0] ? c ? (a.shift(), a.unshift(g, 1), c.splice.apply(c, a)) : (b.length = 0, b.push.apply(b, a)) : J(a[0]) ? c ? (a.unshift(g, 1), c.splice.apply(c, a)) : (b.length = 0, b.push(11), b.push.apply(b, a)) : c ? c.splice(g, 1, a) : (b.length = 0, b.push(11, a))));
  return a;
}
function T(a, b, c, g, p) {
  if (J(g) && L(g[0])) {
    var h = g[0];
    g = g.slice(1);
    h = g.length ? b(h, g) : b(h);
  } else {
    L(g) && (h = b(g));
  }
  return a && J(h) ? T(!0, b, c, h, p) : h;
}
function U(a) {
  return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
function V(a, b, c) {
  a = U("" + a);
  var g = a.match('"'), p = a.match("'"), h = b ? "'" : '"';
  if (g && p) {
    a = b ? h + a.split("'").join("\\'") + h : h + a.split('"').join('\\"') + h;
  } else if (g) {
    a = "'" + a + "'";
  } else if (p) {
    a = b ? h + a.split("'").join("\\'") + h : h + a + h;
  } else if (c || a.match(/[^0-9a-z\.\-]/g) || 72 < a.length) {
    a = h + a + h;
  }
  return a;
}
function W(a) {
  var b = a[0], c = M(b) ? 2 : 1;
  1 === O(a) || 17 === b ? (a = a[c], c = !J(a) && K(a) ? c + 1 : c) : c = 11 === b ? 1 : 9 === b || 13 === b || 16 === b ? 2 : Infinity;
  return c;
}
function X(a) {
  var b = W(a), c = "", g;
  if (b < a.length) {
    for (g = b; g < a.length;) {
      b = a[g];
      var p = O(b);
      3 === p ? (c = N(b) ? c + b : c + b[1], a.splice(g, 1)) : (c && (a.splice(g, 0, c === "" + +c && M(parseInt(c, 10)) ? +c : c), c = ""), ++g, 1 !== p && 17 !== p || X(b));
    }
    c && (a[g] = c === "" + +c && M(parseInt(c, 10)) ? +c : c);
  }
}
function Y(a) {
  var b = a.indexOf("#"), c = a.indexOf(".");
  if (b < c) {
    var g = a.split(".")[1];
    a = a.split(".")[0];
    if (0 < b) {
      var p = a.split("#")[1];
      a = a.split("#")[0];
    }
  } else {
    c < b && (p = a.split("#")[1], a = a.split("#")[0], 0 < c && (g = a.split(".")[1], a = a.split(".")[0]));
  }
  return [a, p, g];
}
;function Z(a, b, c, g, p) {
  function h(d, e, f, m) {
    var l = d[0], q = d[1], v = 1, y = l;
    switch(l) {
      case 9:
        A(d, m);
        break;
      case 11:
        A(d, m);
        break;
      case 3:
        break;
      case 4:
        if (!E && e) {
          return e.splice(f, 1), -1;
        }
        break;
      case 8:
        if (!B && e) {
          return e.splice(f, 1), -1;
        }
        break;
      case 13:
        A(d, m);
        if (!t && e && 2 === d.length) {
          return e.splice(f, 1), -1;
        }
        break;
      case 15:
        d = e[f - 1];
        if (!t && d && 14 === d[0] && d) {
          return e.splice(f, 1), e.splice(f - 1, 1), -1;
        }
        break;
      case 16:
        A(d, m);
        if (!t && e && 2 === d.length) {
          return e.splice(f, 1), -1;
        }
        break;
      case 7:
        d = P(F, d, e, f);
        if (void 0 !== d) {
          n = !0;
          if (null === d || "" === d) {
            return e ? e.splice(f, 1) : (a.length = 0, a.push(8, "")), -1;
          }
          if (!N(d) && J(d)) {
            return -1;
          }
        } else {
          w = !1;
        }
        break;
      case 1:
      case 17:
        y = q, v = 2;
      default:
        if (L(y) && 1 + v <= d.length) {
          e = d[v];
          if (!J(e) && K(e)) {
            f = 0;
            for (var k in e) {
              l = k, q = e[k], (y = 0 === k.indexOf(z)) ? (k = k.substr(z.length), "className" === k && (k = "class"), q = T(!1, F, k, q, r), void 0 !== q ? (delete e[l], J(q) ? L(q[0]) && (e[l] = q, w = !1, ++f) : u[k] && !1 === q || null === q || (e[k] = q, ++f)) : (w = !1, ++f)) : ++f;
            }
            0 === f && d.splice(v, 1);
          }
          A(d, m);
        }
    }
    return 0;
  }
  function A(d, e) {
    var f = W(d);
    for (e.push(d); f < d.length; ++f) {
      var m = d[f];
      !N(m) && J(m) && (m = h(m, d, f, e)) && (f += m);
    }
    e.pop();
  }
  var F = "function" === typeof b ? b : function() {
  }, r = "function" === typeof g ? g : function() {
  };
  b = K(b) ? b : K(c) ? c : K(g) ? g : p || {};
  var E = !1 !== b.keepCDATASections, B = !1 !== b.keepComments, t = !0 === b.keepEmptyConditionalComment, z = b.instructionAttrPrefix || ":", n = !1, w = !0;
  if (J(a)) {
    return h(a, null, 0, []), n && X(a), w;
  }
}
;Z.module = {};
module.exports = Z;
Z.DOCUMENT_NODE = 9;
Z.DOCUMENT_FRAGMENT_NODE = 11;
Z.ELEMENT_NODE = 1;
Z.TEXT_NODE = 3;
Z.CDATA_SECTION = 4;
Z.PROCESSING_INSTRUCTION = 7;
Z.COMMENT_NODE = 8;
Z.COND_CMT_HIDE_LOWER = 13;
Z.COND_CMT_SHOW_LOWER_START = 14;
Z.COND_CMT_SHOW_LOWER_END = 15;
Z.NETSCAPE4_COND_CMT_HIDE_LOWER = 16;
Z.ELEMENT_START_TAG = 17;
Z.ELEMENT_END_TAG = 18;
function aa(a, b, c, g) {
  function p(n, w, d, e, f) {
    function m() {
      var Q = "";
      t && (Q = "</" + t + ">", t = "");
      return Q;
    }
    var l = "", q = n[0], v = n[1], y = 1, k = q, R;
    switch(q) {
      case 9:
        l = "<!DOCTYPE " + v + ">" + h(n, e, f);
        break;
      case 11:
        l = h(n, e, f);
        break;
      case 3:
        l = m() + (f ? v : U("" + v));
        break;
      case 4:
        l = "<![CDATA[" + v + "]]\x3e";
        break;
      case 8:
        l = "\x3c!--" + v + "--\x3e";
        break;
      case 13:
        l = m() + "\x3c!--[" + v + "]>" + h(n, !0, f) + "<![endif]--\x3e";
        break;
      case 16:
        l = m() + "\x3c!--{" + v + "};" + h(n, !0, f) + "--\x3e";
        break;
      case 14:
        l = "\x3c!--[" + v + "]>\x3c!--\x3e";
        break;
      case 15:
        l = "\x3c!--<![endif]--\x3e";
        break;
      case 7:
        e = P(b, n, w, d);
        if (void 0 !== e && null !== e && "" !== e && (N(e) || J(e))) {
          return -1;
        }
        break;
      case 18:
        l = "</" + v + ">";
        break;
      case 17:
        var S = !0;
      case 1:
        k = n[1], y = 2;
      default:
        k = Y(k), w = k[1], d = k[2], k = k[0], "p" !== t || H[k] ? t = "" : l = m(), l += "<" + k, w && (l += " id=" + V(w, E, r)), d && (l += " class=" + V(d, E, r)), z || (R = z = z || G[k] ? !0 : !1), y = n[y], !J(y) && K(y) && (l += " " + A(y)), l = (n = h(n, e || D[k], f || I[k])) ? l + (">" + n) : S ? l + ">" : l + (z ? "/>" : ">"), S ? t = "" : z && !n || C[k] && !e ? t = x[k] ? "" : k : (l += "</" + k + ">", t = ""), R && (z = !1);
    }
    return l;
  }
  function h(n, w, d) {
    for (var e = "", f = W(n), m; f < n.length; ++f) {
      m = n[f], N(m) ? e += p([3, m], null, 0, w, d) : J(m) && (m = p(m, n, f, w, d), -1 === m ? --f : e += m);
    }
    return e;
  }
  function A(n) {
    var w = "", d, e;
    for (d in n) {
      var f = n[d];
      (e = 0 === d.indexOf(B)) && (d = d.substr(B.length));
      "className" === d && (d = "class");
      e && (f = T(!0, b, d, f, F));
      if (!(null == f || u[d] && !1 === f || (w += " " + d, u[d]))) {
        if ("style" === d && K(f)) {
          var m = void 0, l = "";
          for (m in f) {
            e = f[m];
            "0px" === e && (e = 0);
            for (var q, v = [], y = m.split(""), k = y.length; k;) {
              q = y[--k], "A" <= q && "Z" >= q && (q = "-" + q.toLowerCase()), v[k] = q;
            }
            l += ";" + v.join("") + ":" + U("" + e);
          }
          f = l.substr(1);
          if (!f) {
            continue;
          }
        }
        w += "=" + V(f, E, r);
      }
    }
    return w.substr(1);
  }
  var F = "function" === typeof c ? c : function() {
  };
  c = c && "object" === typeof c ? c : g || {};
  var r = !0 === c.quotAlways, E = !0 === c.useSingleQuot, B = c.instructionAttrPrefix || ":", t, z = !1;
  if (J(a)) {
    return 7 === O(a) && (a = [11, a]), p(a, null, 0, !1, !1);
  }
}
;Z.gulp = function(a, b, c) {
  const g = require("plugin-error"), p = require("through2"), h = b && "object" === typeof b ? b : c && "object" === typeof c ? c : {}, A = h.outputStaticPagesAsHTML, F = h.staticPages && "object" === typeof h.staticPages ? h.staticPages : {};
  h.staticPages = F;
  return p(function(r, E, B) {
    if (r.isNull()) {
      return B();
    }
    if (r.isStream()) {
      return this.emit("error", new g("json2json", "Streaming not supported")), B();
    }
    if (".json" === r.extname) {
      try {
        const t = JSON.parse(r.contents.toString(E)), z = Z(t, a, b, c);
        let n;
        A && (F[r.path.split("\\").join("/").split(".json").join("")] = z);
        z && A ? (n = aa(t, a, b, c), r.extname = "." + r.stem.split(".").pop(), r.stem = r.stem.substr(0, r.stem.length - r.extname.length)) : n = JSON.stringify(t, null, h.prettify ? "    " : "");
        r.contents = Buffer.from(n);
        this.push(r);
      } catch (t) {
        this.emit("error", new g("json2json", t));
      }
    } else {
      this.push(r);
    }
    B();
  });
};

