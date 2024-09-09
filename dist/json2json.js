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
function P(a, b, c, e) {
  var p = b[1], g = b.slice(2);
  a = g.length ? a(p, g) : a(p);
  void 0 !== a && null !== a && "" !== a && (N(a) ? c ? c.splice(e, 1, a) : (b.length = 0, b.push(3, b)) : J(a) && (11 === a[0] ? c ? (a.shift(), a.unshift(e, 1), c.splice.apply(c, a)) : (b.length = 0, b.push.apply(b, a)) : J(a[0]) ? c ? (a.unshift(e, 1), c.splice.apply(c, a)) : (b.length = 0, b.push(11), b.push.apply(b, a)) : c ? c.splice(e, 1, a) : (b.length = 0, b.push(11, a))));
  return a;
}
function T(a, b, c, e, p) {
  if (J(e) && L(e[0])) {
    var g = e[0];
    e = e.slice(1);
    g = e.length ? b(g, e) : b(g);
  } else {
    L(e) && (g = b(e));
  }
  return a && J(g) ? T(!0, b, c, g, p) : g;
}
function U(a) {
  return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
function V(a, b, c) {
  a = U("" + a);
  var e = a.match('"'), p = a.match("'"), g = b ? "'" : '"';
  if (e && p) {
    a = b ? g + a.split("'").join("\\'") + g : g + a.split('"').join('\\"') + g;
  } else if (e) {
    a = "'" + a + "'";
  } else if (p) {
    a = b ? g + a.split("'").join("\\'") + g : g + a + g;
  } else if (c || a.match(/[^0-9a-z\.\-]/g) || 72 < a.length) {
    a = g + a + g;
  }
  return a;
}
function W(a) {
  var b = a[0], c = M(b) ? 2 : 1;
  1 === O(a) || 17 === b ? (a = a[c], c = !J(a) && K(a) ? c + 1 : c) : c = 11 === b ? 1 : 9 === b || 13 === b || 16 === b ? 2 : Infinity;
  return c;
}
function X(a) {
  var b = W(a), c = "", e;
  if (b < a.length) {
    for (e = b; e < a.length;) {
      b = a[e];
      var p = O(b);
      3 === p ? (c = N(b) ? c + b : c + b[1], a.splice(e, 1)) : (c && (a.splice(e, 0, c === "" + +c && M(parseInt(c, 10)) ? +c : c), c = ""), ++e, 1 !== p && 17 !== p || X(b));
    }
    c && (a[e] = c === "" + +c && M(parseInt(c, 10)) ? +c : c);
  }
}
function Y(a) {
  var b = a.indexOf("#"), c = a.indexOf(".");
  if (b < c) {
    var e = a.split(".")[1];
    a = a.split(".")[0];
    if (0 < b) {
      var p = a.split("#")[1];
      a = a.split("#")[0];
    }
  } else {
    c < b && (p = a.split("#")[1], a = a.split("#")[0], 0 < c && (e = a.split(".")[1], a = a.split(".")[0]));
  }
  return [a, p, e];
}
;function Z(a, b, c, e, p) {
  function g(k, d, f, l) {
    var n = k[0], h = k[1], y = 1, w = n;
    switch(n) {
      case 9:
        A(k, l);
        break;
      case 11:
        A(k, l);
        break;
      case 3:
        break;
      case 4:
        if (!E && d) {
          return d.splice(f, 1), -1;
        }
        break;
      case 8:
        if (!B && d) {
          return d.splice(f, 1), -1;
        }
        break;
      case 13:
        A(k, l);
        break;
      case 16:
        A(k, l);
        break;
      case 7:
        k = P(F, k, d, f);
        if (void 0 !== k) {
          z = !0;
          if (null === k || "" === k) {
            return d ? d.splice(f, 1) : (a.length = 0, a.push(8, "")), -1;
          }
          if (!N(k) && J(k)) {
            return -1;
          }
        } else {
          m = !1;
        }
        break;
      case 1:
      case 17:
        w = h, y = 2;
      default:
        if (L(w) && 1 + y <= k.length) {
          d = k[y];
          if (!J(d) && K(d)) {
            f = 0;
            for (var q in d) {
              n = q, h = d[q], (w = 0 === q.indexOf(v)) ? (q = q.substr(v.length), "className" === q && (q = "class"), h = T(!1, F, q, h, r), void 0 !== h ? (delete d[n], J(h) ? L(h[0]) && (d[n] = h, m = !1, ++f) : u[q] && !1 === h || null === h || (d[q] = h, ++f)) : (m = !1, ++f)) : ++f;
            }
            0 === f && k.splice(y, 1);
          }
          A(k, l);
        }
    }
    return 0;
  }
  function A(k, d) {
    var f = W(k);
    for (d.push(k); f < k.length; ++f) {
      var l = k[f];
      !N(l) && J(l) && (l = g(l, k, f, d)) && (f += l);
    }
    d.pop();
  }
  var F = "function" === typeof b ? b : function() {
  }, r = "function" === typeof e ? e : function() {
  };
  b = K(b) ? b : K(c) ? c : K(e) ? e : p || {};
  var E = !1 !== b.keepCDATASections, B = !1 !== b.keepComments, v = b.instructionAttrPrefix || ":", z = !1, m = !0;
  if (J(a)) {
    return g(a, null, 0, []), z && X(a), m;
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
function aa(a, b, c, e) {
  function p(m, k, d, f, l) {
    function n() {
      var Q = "";
      v && (Q = "</" + v + ">", v = "");
      return Q;
    }
    var h = "", y = m[0], w = m[1], q = 1, t = y, R;
    switch(y) {
      case 9:
        h = "<!DOCTYPE " + w + ">" + g(m, f, l);
        break;
      case 11:
        h = g(m, f, l);
        break;
      case 3:
        h = n() + (l ? w : U("" + w));
        break;
      case 4:
        h = "<![CDATA[" + w + "]]\x3e";
        break;
      case 8:
        h = "\x3c!--" + w + "--\x3e";
        break;
      case 13:
        h = n() + "\x3c!--[" + w + "]>" + g(m, !0, l) + "<![endif]--\x3e";
        break;
      case 16:
        h = n() + "\x3c!--{" + w + "};" + g(m, !0, l) + "--\x3e";
        break;
      case 14:
        h = "\x3c!--[" + w + "]>\x3c!--\x3e";
        break;
      case 15:
        h = "\x3c!--<![endif]--\x3e";
        break;
      case 7:
        f = P(b, m, k, d);
        if (void 0 !== f && null !== f && "" !== f && (N(f) || J(f))) {
          return -1;
        }
        break;
      case 18:
        h = "</" + w + ">";
        break;
      case 17:
        var S = !0;
      case 1:
        t = m[1], q = 2;
      default:
        t = Y(t), k = t[1], d = t[2], t = t[0], "p" !== v || H[t] ? v = "" : h = n(), h += "<" + t, k && (h += " id=" + V(k, E, r)), d && (h += " class=" + V(d, E, r)), z || (R = z = z || G[t] ? !0 : !1), q = m[q], !J(q) && K(q) && (h += " " + A(q)), h = (m = g(m, f || D[t], l || I[t])) ? h + (">" + m) : S ? h + ">" : h + (z ? "/>" : ">"), S ? v = "" : z && !m || C[t] && !f ? v = x[t] ? "" : t : (h += "</" + t + ">", v = ""), R && (z = !1);
    }
    return h;
  }
  function g(m, k, d) {
    for (var f = "", l = W(m), n; l < m.length; ++l) {
      n = m[l], N(n) ? f += p([3, n], null, 0, k, d) : J(n) && (n = p(n, m, l, k, d), -1 === n ? --l : f += n);
    }
    return f;
  }
  function A(m) {
    var k = "", d, f;
    for (d in m) {
      var l = m[d];
      (f = 0 === d.indexOf(B)) && (d = d.substr(B.length));
      "className" === d && (d = "class");
      f && (l = T(!0, b, d, l, F));
      if (!(null == l || u[d] && !1 === l || (k += " " + d, u[d]))) {
        if ("style" === d && K(l)) {
          var n = void 0, h = "";
          for (n in l) {
            f = l[n];
            "0px" === f && (f = 0);
            for (var y, w = [], q = n.split(""), t = q.length; t;) {
              y = q[--t], "A" <= y && "Z" >= y && (y = "-" + y.toLowerCase()), w[t] = y;
            }
            h += ";" + w.join("") + ":" + U("" + f);
          }
          l = h.substr(1);
          if (!l) {
            continue;
          }
        }
        k += "=" + V(l, E, r);
      }
    }
    return k.substr(1);
  }
  var F = "function" === typeof c ? c : function() {
  };
  c = c && "object" === typeof c ? c : e || {};
  var r = !!c.quotAlways, E = !!c.useSingleQuot, B = c.instructionAttrPrefix || ":", v, z = !1;
  if (J(a)) {
    return 7 === O(a) && (a = [11, a]), p(a, null, 0, !1, !1);
  }
}
;Z.gulp = function(a, b, c) {
  const e = require("plugin-error"), p = require("through2"), g = b && "object" === typeof b ? b : c && "object" === typeof c ? c : {}, A = g.outputStaticPagesAsHTML, F = g.staticPages && "object" === typeof g.staticPages ? g.staticPages : {};
  g.staticPages = F;
  return p(function(r, E, B) {
    if (r.isNull()) {
      return B();
    }
    if (r.isStream()) {
      return this.emit("error", new e("json2json", "Streaming not supported")), B();
    }
    if (".json" === r.extname) {
      try {
        const v = JSON.parse(r.contents.toString(E)), z = Z(v, a, b, c);
        let m;
        A && (F[r.path.split("\\").join("/").split(".json").join("")] = z);
        z && A ? (m = aa(v, a, b, c), r.extname = "." + r.stem.split(".").pop(), r.stem = r.stem.substr(0, r.stem.length - r.extname.length)) : m = JSON.stringify(v, null, g.prettify ? "    " : "");
        r.contents = Buffer.from(m);
        this.push(r);
      } catch (v) {
        this.emit("error", new e("json2json", v));
      }
    } else {
      this.push(r);
    }
    B();
  });
};

