var ca = {xml:!0, svg:!0, math:!0}, da = {async:!0, autofocus:!0, checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, draggable:!0, hidden:!0, ismap:!0, loop:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, novalidate:!0, nowrap:!0, readonly:!0, required:!0, reversed:!0, scoped:!0, selected:!0}, ea = {area:!0, base:!0, col:!0, embed:!0, br:!0, hr:!0, img:!0, input:!0, link:!0, meta:!0, source:!0, track:!0, wbr:!0}, fa = {script:!0, style:!0, textarea:!0, title:!0}, ha = {textarea:!0, title:!0}, 
v = {caption:{article:!0, section:!0, nav:!0, aside:!0, h1:!0, h2:!0, h3:!0, h4:!0, h5:!0, h6:!0, header:!0, footer:!0, address:!0, p:!0, hr:!0, pre:!0, blockquote:!0, ol:!0, ul:!0, dl:!0, figure:!0, div:!0, a:!0, em:!0, strong:!0, small:!0, s:!0, cite:!0, q:!0, dfn:!0, abbr:!0, data:!0, time:!0, code:!0, "var":!0, samp:!0, kbd:!0, sub:!0, sup:!0, i:!0, b:!0, u:!0, mark:!0, ruby:!0, bdi:!0, bdo:!0, span:!0, br:!0, wbr:!0, ins:!0, del:!0, picture:!0, img:!0, iframe:!0, embed:!0, object:!0, video:!0, 
audio:!0, map:!0, area:!0, math:!0, svg:!0, form:!0, label:!0, input:!0, button:!0, select:!0, datalist:!0, textarea:!0, output:!0, progress:!0, meter:!0, fieldset:!0, details:!0, dialog:!0, script:!0, noscript:!0, template:!0, canvas:!0}, dd:{article:!0, section:!0, nav:!0, aside:!0, h1:!0, h2:!0, h3:!0, h4:!0, h5:!0, h6:!0, header:!0, footer:!0, address:!0, p:!0, hr:!0, pre:!0, blockquote:!0, ol:!0, ul:!0, dl:!0, figure:!0, div:!0, a:!0, em:!0, strong:!0, small:!0, s:!0, cite:!0, q:!0, dfn:!0, 
abbr:!0, data:!0, time:!0, code:!0, "var":!0, samp:!0, kbd:!0, sub:!0, sup:!0, i:!0, b:!0, u:!0, mark:!0, ruby:!0, bdi:!0, bdo:!0, span:!0, br:!0, wbr:!0, ins:!0, del:!0, picture:!0, img:!0, iframe:!0, embed:!0, object:!0, video:!0, audio:!0, map:!0, area:!0, math:!0, svg:!0, table:!0, form:!0, label:!0, input:!0, button:!0, select:!0, datalist:!0, textarea:!0, output:!0, progress:!0, meter:!0, fieldset:!0, details:!0, dialog:!0, script:!0, noscript:!0, template:!0, canvas:!0}, dt:{address:!0, p:!0, 
hr:!0, pre:!0, blockquote:!0, ol:!0, ul:!0, dl:!0, figure:!0, div:!0, a:!0, em:!0, strong:!0, small:!0, s:!0, cite:!0, q:!0, dfn:!0, abbr:!0, data:!0, time:!0, code:!0, "var":!0, samp:!0, kbd:!0, sub:!0, sup:!0, i:!0, b:!0, u:!0, mark:!0, ruby:!0, bdi:!0, bdo:!0, span:!0, br:!0, wbr:!0, ins:!0, del:!0, picture:!0, img:!0, iframe:!0, embed:!0, object:!0, video:!0, audio:!0, map:!0, area:!0, math:!0, svg:!0, table:!0, form:!0, label:!0, input:!0, button:!0, select:!0, datalist:!0, textarea:!0, output:!0, 
progress:!0, meter:!0, fieldset:!0, details:!0, dialog:!0, script:!0, noscript:!0, template:!0, canvas:!0}, p:{a:!0, em:!0, strong:!0, small:!0, s:!0, cite:!0, q:!0, dfn:!0, abbr:!0, data:!0, time:!0, code:!0, "var":!0, samp:!0, kbd:!0, sub:!0, sup:!0, i:!0, b:!0, u:!0, mark:!0, ruby:!0, bdi:!0, bdo:!0, span:!0, br:!0, wbr:!0, ins:!0, del:!0, picture:!0, img:!0, iframe:!0, embed:!0, object:!0, video:!0, audio:!0, map:!0, area:!0, math:!0, svg:!0, label:!0, input:!0, button:!0, select:!0, datalist:!0, 
textarea:!0, output:!0, progress:!0, meter:!0, script:!0, noscript:!0, template:!0, canvas:!0}, html:{head:!0, body:!0}, head:{title:!0, base:!0, link:!0, meta:!0, style:!0, script:!0, noscript:!0, template:!0}, colgroup:{col:!0}, optgroup:{option:!0}, option:{}, tbody:{tr:!0}, tr:{th:!0, td:!0}};
v.li = v.td = v.dd;
v.th = v.dt;
v.rp = v.rt = v.p;
v.tfoot = v.thead = v.tbody;
function z(a) {
  return a.split("&lt;").join("&amp;lt;").split("&gt;").join("&amp;gt;").split("<").join("&lt;").split(">").join("&gt;");
}
;function B(a) {
  return a === "" + a;
}
function E(a) {
  return !!a && "object" === typeof a;
}
function I(a) {
  return !!a && a.constructor === Array;
}
;function ia(a) {
  function b(c) {
    var f = c, d;
    if (I(c)) {
      f = [];
      var e = 0;
      for (d = c.length; e < d; ++e) {
        f[e] = b(c[e]);
      }
    } else if (E(c)) {
      for (e in f = {}, c) {
        f[e] = b(c[e]);
      }
    }
    return f;
  }
  return b(a);
}
;function J(a, b, c) {
  var f = a, d = K(f), e = 0, g = b(a, null, -1, e / 3), k = [-1, a, d];
  if (Infinity !== g && -Infinity !== g) {
    if (0 < f.length - d) {
      do {
        var n = ++k[e];
        var m = f[n + d];
        if (null != m) {
          g = b(m, f, n + d, e / 3 + 1);
          if (Infinity === g) {
            return;
          }
          if (-Infinity !== g) {
            if (-1 >= g) {
              k[e] += g;
            } else {
              if (1 <= g && (k[e] += g), K(m) < m.length) {
                e += 3, k[e] = -1, k[e + 1] = f = m, k[e + 2] = d = K(m);
              } else if (c && f) {
                g = c(m, f, n + d, e / 3 + 1);
                if (Infinity === g) {
                  return;
                }
                -Infinity !== g && (-1 >= g || 1 <= g) && (k[e] += g);
              }
            }
          }
        } else {
          if (k.length = e, e -= 3, f = k[e + 1], d = k[e + 2], c && f) {
            n = k[e] + d;
            g = c(f[n], f, n, e / 3 + 1);
            if (Infinity === g) {
              return;
            }
            -Infinity !== g && (-1 >= g || 1 <= g) && (k[e] += g);
          }
        }
      } while (0 <= e);
    }
    c && c(a, null, -1, 0);
  }
}
;function L(a, b, c, f) {
  if (!!a === a) {
    var d = null;
    this.l = a;
  } else {
    d = a, this.l = d.l;
  }
  this.j = d;
  this.m = c;
  d && (d.h || (d.h = []), a = d.h, 0 <= b && b < a.length ? a.splice(b, 0, this) : a.push(this));
  switch(c) {
    case 1:
    case 17:
      b = O(f), f = b[0];
    case 18:
      this.D = f;
  }
}
var P = null;
function Q(a) {
  return a.l ? P === a ? a.B ? ja : a.F ? R : ka : P.j === a ? la : ma : na;
}
L.prototype.remove = function() {
  if (R <= Q(this)) {
    return this.B = !0, null;
  }
  var a = this.j ? this.j.h.indexOf(this) : -1;
  0 <= a && (this.j.h.splice(a, 1), this.j = null);
};
L.prototype.wrap = function(a, b, c) {
  if (this.l) {
    this.o = this.o || [], this.o.push([a, b, c]), a = null;
  } else {
    if (this.j) {
      var f = (c = this.j) ? this.j.h.indexOf(this) : -1;
      a = new L(c, f, a, b);
    } else {
      a = null;
    }
  }
  V(a, 0, [this]);
  return a;
};
function V(a, b, c) {
  var f = a.h = a.h || [], d = f.length, e = c.length;
  for (b = b < d ? b : d; e;) {
    d = c[--e], 11 === d.m ? d.h && d.h.length && V(a, b, d.h) : (d.remove(), f.splice(b, 0, d), d.j = a);
  }
}
var na = 0, ma = 1, ka = 2, R = 3, ja = 4, la = 5;
var oa = {html:!0, head:!0, body:!0, p:!0, dt:!0, dd:!0, li:!0, option:!0, tbody:!0, thead:!0, tfoot:!0, td:!0, th:!0, tr:!0, rp:!0, rt:!0, optgroup:!0, caption:!0, colgroup:!0}, pa = {audio:!0, del:!0, ins:!0, map:!0, noscript:!0, video:!0}, qa = {a:!0}, ra = {h1:!0, h2:!0, h3:!0, h4:!0, h5:!0, h6:!0, address:!0, blockquote:!0, div:!0, dl:!0, fieldset:!0, form:!0, hr:!0, legend:!0, ul:!0, noscript:!0, ol:!0, p:!0, pre:!0, article:!0, aside:!0, canvas:!0, details:!0, figcaption:!0, figure:!0, footer:!0, 
header:!0, hgroup:!0, main:!0, nav:!0, section:!0};
function W(a) {
  if (B(a) || a === +a) {
    a = 3;
  } else {
    if (I(a)) {
      if (B(a[0])) {
        a = 1;
      } else {
        var b = a[0];
        a = b === +b ? a[0] : -1;
      }
    } else {
      a = -1;
    }
  }
  return a;
}
function sa(a, b, c) {
  var f = b[1];
  b = b.slice(2);
  var d;
  a && a.constructor === Function ? d = b.length ? a.call(c, f, b) : a.call(c, f) : a[f] && (d = b.length ? a[f].apply(c || a, b) : a[f].call(c || a));
  (d = ia(d)) && I(d[0]) && d.unshift(11);
  return d;
}
function ta(a, b, c) {
  11 === c[0] ? (c.shift(), c.unshift(b, 1), a.splice.apply(a, c)) : a.splice(b, 1, c);
}
function X(a, b, c, f, d) {
  var e;
  if (I(c) && B(c[0])) {
    var g = c[0];
    c = c.slice(1);
    a && a.constructor === Function ? e = c.length ? a.call(d, g, c) : a.call(d, g) : a[g] && (e = c.length ? a[g].apply(d || a, c) : a[g].call(d || a));
  } else {
    B(c) && (a && a.constructor === Function ? e = a.call(d, c) : a[c] && (e = a[c].call(d || a)));
  }
  I(e) && (a = X(a, b, e, f, d), void 0 !== a && (e = a));
  return e;
}
function ua(a, b, c) {
  a = va(a);
  var f;
  P = a;
  b && (b.h ? b.h.push(a) : b.h = [a]);
  if (I(c)) {
    for (b = 0, f = c.length; b < f; b += 2) {
      var d = c[b];
      var e = c[b + 1];
      if (d === +d) {
        if (d === a.m && !0 === e(a)) {
          break;
        }
      } else if ("*" === d) {
        if (!0 === e(a)) {
          break;
        }
      } else if (B(d) && d === a.D && !0 === e(a)) {
        break;
      }
    }
  } else {
    c(a);
  }
  return a;
}
function K(a) {
  var b = a[0], c = W(a);
  return 1 === c || 17 === c ? (b = b === +b ? 2 : 1, a = a[b], !I(a) && E(a) ? b + 1 : b) : 11 === b ? 1 : 9 === b || 13 === b || 16 === b ? 2 : Infinity;
}
function Y(a) {
  var b = a[0];
  return (a = B(b) ? b : 1 === b || 17 === b ? a[1] : "") ? O(a)[0] : a;
}
function O(a) {
  var b = a.indexOf("#"), c = a.indexOf("."), f = "", d = "";
  b < c ? (f = a.split(".")[1], a = a.split(".")[0], 0 < b && (d = a.split("#")[1], a = a.split("#")[0])) : c < b && (d = a.split("#")[1], a = a.split("#")[0], 0 < c && (f = a.split(".")[1], a = a.split(".")[0]));
  return [a, d, f];
}
function wa(a) {
  var b = [], c = -1, f;
  for (f in a) {
    var d = a[f];
    "0px" === d && (d = 0);
    for (var e = ++c, g, k = [], n = f.split(""), m = n.length; m;) {
      g = n[--m], "A" <= g && "Z" >= g && (g = "-" + g.toLowerCase()), k[m] = g;
    }
    g = k.join("");
    b[e] = g + ":" + d;
  }
  return b.join(";");
}
function va(a) {
  var b, c;
  J(a, function(f, d, e, g) {
    function k(p, x, h) {
      if (b) {
        g < c.length && (c.length = g);
        var l = c[c.length - 1];
        R <= Q(l) ? (l.v = l.v || [], l.v.push([p, x, h]), p = null) : p = new L(l, l.h && l.h.length, p, x);
        K(f) < f.length && (c[g] = p);
      } else {
        b = new L(!0, 0, p, x), c = [b];
      }
    }
    if (B(f) || f === +f) {
      k(3, f);
    } else {
      d = f[0];
      e = f[1];
      var n = 1, m = d, G;
      switch(d) {
        case 9:
        case 13:
        case 16:
          k(d, e);
          break;
        case 11:
          k(d);
          break;
        case 3:
        case 4:
        case 8:
        case 14:
        case 18:
          k(d, e);
          break;
        case 15:
          k(d);
          break;
        case 7:
          n = [];
          m = 2;
          for (G = f.length; m < G; ++m) {
            n[m - 2] = f[m];
          }
          k(d, e, G - 2 ? n : null);
          break;
        case 1:
        case 17:
          m = e, n = 2;
        default:
          B(m) && k(1 === n ? 1 : d, m, f[n]);
      }
    }
    return Infinity;
  });
  return b;
}
;function Z(a, b, c, f, d) {
  9 !== a[0] && 11 !== a[0] && (a = [11, a]);
  var e = [], g = -1;
  xa({h:function(k) {
    e[++g] = k;
  }}, function(k, n) {
    J(a, k, n);
  }, b, c, f, d);
  return e.join("");
}
function xa(a, b, c, f, d, e) {
  function g() {
    var h = "";
    x && (h = "</" + x + ">", x = "");
    return h;
  }
  function k(h, l, y) {
    var u = h.match('"'), A = h.match("'"), q = l ? "'" : '"';
    u && A ? h = l ? q + h.split("'").join("\\'") + q : q + h.split('"').join('\\"') + q : u ? h = "'" + h + "'" : A ? h = l ? q + h.split("'").join("\\'") + q : q + h + q : y || h.match(/[^0-9a-z\.\-]/g) || 72 < h.length ? h = q + h + q : "" === h && (h = q + q);
    return h;
  }
  e = e || {};
  var n = !0 === e.useQuoteAlways, m = !0 === e.useSingleQuote, G = e.instructionAttrPrefix || ":", p = [!1, null, !1, !1, !1, !1], x;
  b(function(h, l, y, u, A, q) {
    function M(aa) {
      r[++t] = g() + (N ? aa : z("" + aa));
    }
    var r = [], t = -1;
    A = p[6 * u];
    var S = p[6 * u + 1], T = p[6 * u + 2], N = p[6 * u + 3], U = !1, H = !1;
    I(h) && (U = K(h) < h.length);
    S = f ? ua(h, S, f) : null;
    var w = h[0], D = h[1], ba = 1, C;
    switch(W(h)) {
      case 9:
        r[++t] = D;
        break;
      case 3:
        I(h) || (D = h);
        M(D);
        break;
      case 4:
        r[++t] = "<![CDATA[" + z("" + D) + "]]\x3e";
        break;
      case 8:
        r[++t] = "\x3c!--" + z("" + D) + "--\x3e";
        break;
      case 13:
        r[++t] = g() + "\x3c!--[" + D + "]>";
        break;
      case 16:
        r[++t] = g() + "\x3c!--{" + D + "};";
        break;
      case 14:
        r[++t] = g() + "\x3c!--[" + D + "]>\x3c!--\x3e";
        break;
      case 15:
        r[++t] = g() + "\x3c!--<![endif]--\x3e";
        break;
      case 7:
        if (c) {
          var F = sa(c, h, q);
          if (q = I(F)) {
            return ta(l, y, F), -1;
          }
          (B(F) || F === +F) && "" !== F && M(F);
        }
        break;
      case 18:
        r[++t] = "</" + D + ">";
        break;
      case 17:
        F = !0;
      case 1:
        w === +w && (w = D, ba = 2);
        w = O(w);
        l = w[1];
        y = w[2];
        w = w[0];
        h = h[ba];
        "p" !== x || ra[w] ? x = "" : r[++t] = g();
        H = (A = A || !!ca[w]) || 0 < w.indexOf(":");
        T = T || H || !!qa[w];
        N = N || fa[w] && !ha[w];
        r[++t] = "<" + w;
        l && (r[++t] = " id=" + k(l, m, H || n));
        y && (r[++t] = " class=" + k(y, m, H || n));
        if (!I(h) && E(h)) {
          for (C in h) {
            if (l = h[C], (y = 0 === C.indexOf(G)) && (C = C.substr(G.length)), "className" === C && (C = "class"), y && c && (l = X(c, C, l, d, q)), null != l && (y = da[C], !y || !1 !== l)) {
              if (r[++t] = " " + C, !y && !0 !== l) {
                if ("style" === C && E(l)) {
                  if (l = z(wa(l)), !l) {
                    continue;
                  }
                } else {
                  l = z("" + l);
                }
                r[++t] = "=" + k(l, m, H || n);
              }
            }
          }
        }
        !H || U || F ? r[++t] = ">" : r[++t] = " />";
    }
    p[6 * u + 6] = A;
    p[6 * u + 7] = S;
    p[6 * u + 8] = T;
    p[6 * u + 9] = N;
    p[6 * u + 10] = U;
    p[6 * u + 11] = H;
    -1 !== t && a.h(r.join(""));
  }, function(h, l, y, u) {
    var A = [], q = -1, M = p[6 * u + 8], r = p[6 * u + 10], t = p[6 * u + 11];
    6 * u + 6 < p.length && (p.length = 6 * u + 6);
    switch(W(h)) {
      case 13:
        A[++q] = g() + "<![endif]--\x3e";
        break;
      case 16:
        A[++q] = g() + "--\x3e";
        break;
      case 17:
        x = "";
        break;
      case 1:
        h = Y(h), r || !t && !ea[h] ? t && !r || !(M || !oa[h] || "p" === h && y === l.length - 1 && pa[Y(l)]) ? x = h : (A[++q] = "</" + h + ">", x = "") : x = "";
    }
    -1 !== q && a.h(A.join(""));
    0 === u && (a = null);
  });
  b = null;
}
;module.exports = Z;
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
Z.gulp = function(a, b, c, f) {
  const d = require("plugin-error");
  return require("through2").obj(function(e, g, k) {
    if (e.isNull()) {
      return k();
    }
    if (e.isStream()) {
      return this.emit("error", new d("json2html", "Streaming not supported")), k();
    }
    const n = "." + e.stem.split(".").pop();
    if (".json" === e.extname && [".html", ".htm", ".xhtml", ".php"].indexOf(n)) {
      try {
        const m = JSON.parse(e.contents.toString(g));
        if (I(m)) {
          const G = Z(m, a, b, c, f);
          e.stem = e.stem.substr(0, e.stem.length - n.length);
          e.extname = n;
          e.contents = Buffer.from(G);
        }
      } catch (m) {
        this.emit("error", new d("json2html", m));
      }
    }
    k(null, e);
  });
};

