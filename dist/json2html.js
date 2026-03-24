var aa = {xml:!0, svg:!0, math:!0}, ba = {async:!0, autofocus:!0, checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, draggable:!0, hidden:!0, ismap:!0, loop:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, novalidate:!0, nowrap:!0, readonly:!0, required:!0, reversed:!0, scoped:!0, selected:!0}, ea = {area:!0, base:!0, col:!0, embed:!0, br:!0, hr:!0, img:!0, input:!0, link:!0, meta:!0, source:!0, track:!0, wbr:!0}, fa = {script:!0, style:!0, textarea:!0, title:!0}, ha = {textarea:!0, title:!0}, 
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
function x(a) {
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
;function J(a, c) {
  for (var d = [], f = a.length, b = 0, e = -1, g; b < f; ++b) {
    g = a[b], E(g) ? d[++e] = b : c[b] = g;
  }
  return d;
}
function K(a, c) {
  var d = [], f = -1, b;
  for (b in a) {
    var e = a[b];
    E(e) ? d[++f] = b : c[b] = e;
  }
  return d;
}
;function L(a, c, d) {
  var f = a, b = O(f), e = 0, g = c(a, null, -1, e / 3), k = [-1, a, b];
  if (Infinity !== g && -Infinity !== g) {
    if (0 < f.length - b) {
      do {
        var m = ++k[e];
        var n = f[m + b];
        if (null != n) {
          g = c(n, f, m + b, e / 3 + 1);
          if (Infinity === g) {
            return;
          }
          if (-Infinity !== g) {
            if (-1 >= g) {
              k[e] += g;
            } else {
              if (1 <= g && (k[e] += g), O(n) < n.length) {
                e += 3, k[e] = -1, k[e + 1] = f = n, k[e + 2] = b = O(n);
              } else if (d && f) {
                g = d(n, f, m + b, e / 3 + 1);
                if (Infinity === g) {
                  return;
                }
                -Infinity !== g && (-1 >= g || 1 <= g) && (k[e] += g);
              }
            }
          }
        } else {
          if (k.length = e, e -= 3, f = k[e + 1], b = k[e + 2], d && f) {
            m = k[e] + b;
            g = d(f[m], f, m, e / 3 + 1);
            if (Infinity === g) {
              return;
            }
            -Infinity !== g && (-1 >= g || 1 <= g) && (k[e] += g);
          }
        }
      } while (0 <= e);
    }
    d && d(a, null, -1, 0);
  }
}
;function P(a, c, d, f) {
  if (!!a === a) {
    var b = null;
    this.l = a;
  } else {
    b = a, this.l = b.l;
  }
  this.j = b;
  this.m = d;
  b && (b.h || (b.h = []), a = b.h, 0 <= c && c < a.length ? a.splice(c, 0, this) : a.push(this));
  switch(d) {
    case 1:
    case 17:
      c = Q(f), f = c[0];
    case 18:
      this.B = f;
  }
}
var R = null;
function V(a) {
  return a.l ? R === a ? a.A ? ia : a.D ? W : ja : R.j === a ? ka : la : ma;
}
P.prototype.remove = function() {
  if (W <= V(this)) {
    return this.A = !0, null;
  }
  var a = this.j ? this.j.h.indexOf(this) : -1;
  0 <= a && (this.j.h.splice(a, 1), this.j = null);
};
P.prototype.wrap = function(a, c, d) {
  if (this.l) {
    this.o = this.o || [], this.o.push([a, c, d]), a = null;
  } else {
    if (this.j) {
      var f = (d = this.j) ? this.j.h.indexOf(this) : -1;
      a = new P(d, f, a, c);
    } else {
      a = null;
    }
  }
  X(a, 0, [this]);
  return a;
};
function X(a, c, d) {
  var f = a.h = a.h || [], b = f.length, e = d.length;
  for (c = c < b ? c : b; e;) {
    b = d[--e], 11 === b.m ? b.h && b.h.length && X(a, c, b.h) : (b.remove(), f.splice(c, 0, b), b.j = a);
  }
}
var ma = 0, la = 1, ja = 2, W = 3, ia = 4, ka = 5;
var na = {html:!0, head:!0, body:!0, p:!0, dt:!0, dd:!0, li:!0, option:!0, tbody:!0, thead:!0, tfoot:!0, td:!0, th:!0, tr:!0, rp:!0, rt:!0, optgroup:!0, caption:!0, colgroup:!0}, oa = {source:!0}, pa = {a:!0}, qa = {audio:!0, del:!0, ins:!0, map:!0, noscript:!0, video:!0}, ra = {h1:!0, h2:!0, h3:!0, h4:!0, h5:!0, h6:!0, address:!0, blockquote:!0, div:!0, dl:!0, fieldset:!0, form:!0, hr:!0, legend:!0, ul:!0, noscript:!0, ol:!0, p:!0, pre:!0, article:!0, aside:!0, canvas:!0, details:!0, figcaption:!0, 
figure:!0, footer:!0, header:!0, hgroup:!0, main:!0, nav:!0, section:!0, table:!1};
function Y(a) {
  if (B(a) || a === +a) {
    a = 3;
  } else {
    if (I(a)) {
      if (B(a[0])) {
        a = 1;
      } else {
        var c = a[0];
        a = c === +c ? a[0] : -1;
      }
    } else {
      a = -1;
    }
  }
  return a;
}
function sa(a, c, d) {
  var f = c[1];
  c = c.slice(2);
  var b;
  a && a.constructor === Function ? b = c.length ? a.call(d, f, c) : a.call(d, f) : a[f] && (b = c.length ? a[f].apply(d || a, c) : a[f].call(d || a));
  c = b;
  a = 0;
  d = (b = I(c)) ? [] : {};
  f = b ? J(c, d) : E(c) ? K(c, d) : null;
  var e, g;
  if (null === f) {
    b = c;
  } else {
    for (c = [f, e = c, g = d]; 0 <= a;) {
      var k = f.shift();
      if (null != k) {
        var m = e[k];
        b = I(m);
        k = g[k] = b ? [] : {};
        b = b ? J(m, k) : K(m, k);
        b.length && (a += 3, c.push(f = b, e = m, g = k));
      } else {
        c.length = a, a -= 3, f = c[a], e = c[a + 1], g = c[a + 2];
      }
    }
    b = d;
  }
  b && I(b[0]) && b.unshift(11);
  return b;
}
function ta(a, c, d) {
  11 === d[0] ? (d.shift(), d.unshift(c, 1), a.splice.apply(a, d)) : a.splice(c, 1, d);
}
function ua(a, c, d, f, b) {
  var e;
  if (I(d) && B(d[0])) {
    var g = d[0];
    d = d.slice(1);
    a && a.constructor === Function ? e = d.length ? a.call(b, g, d) : a.call(b, g) : a[g] && (e = d.length ? a[g].apply(b || a, d) : a[g].call(b || a));
  } else {
    B(d) && (a && a.constructor === Function ? e = a.call(b, d) : a[d] && (e = a[d].call(b || a)));
  }
  I(e) && (a = ua(a, c, e, f, b), void 0 !== a && (e = a));
  return e;
}
function va(a, c, d) {
  a = wa(a);
  var f;
  R = a;
  c && (c.h ? c.h.push(a) : c.h = [a]);
  if (I(d)) {
    for (c = 0, f = d.length; c < f; c += 2) {
      var b = d[c];
      var e = d[c + 1];
      if (b === +b) {
        if (b === a.m && !0 === e(a)) {
          break;
        }
      } else if ("*" === b) {
        if (!0 === e(a)) {
          break;
        }
      } else if (B(b) && b === a.B && !0 === e(a)) {
        break;
      }
    }
  } else {
    d(a);
  }
  return a;
}
function O(a) {
  var c = a[0], d = Y(a);
  return 1 === d || 17 === d ? (c = c === +c ? 2 : 1, a = a[c], !I(a) && E(a) ? c + 1 : c) : 11 === c ? 1 : 9 === c || 13 === c || 16 === c ? 2 : Infinity;
}
function xa(a) {
  var c = a[0];
  return (a = B(c) ? c : 1 === c || 17 === c ? a[1] : "") ? Q(a)[0] : a;
}
function Q(a) {
  var c = a.indexOf("#"), d = a.indexOf("."), f = "", b = "";
  c < d ? (f = a.split(".")[1], a = a.split(".")[0], 0 < c && (b = a.split("#")[1], a = a.split("#")[0])) : d < c && (b = a.split("#")[1], a = a.split("#")[0], 0 < d && (f = a.split(".")[1], a = a.split(".")[0]));
  return [a, b, f];
}
function ya(a) {
  var c = [], d = -1, f;
  for (f in a) {
    var b = a[f];
    "0px" === b && (b = 0);
    for (var e = ++d, g, k = [], m = f.split(""), n = m.length; n;) {
      g = m[--n], "A" <= g && "Z" >= g && (g = "-" + g.toLowerCase()), k[n] = g;
    }
    g = k.join("");
    c[e] = g + ":" + b;
  }
  return c.join(";");
}
function wa(a) {
  var c, d;
  L(a, function(f, b, e, g) {
    function k(p, y, h) {
      if (c) {
        g < d.length && (d.length = g);
        var l = d[d.length - 1];
        W <= V(l) ? (l.v = l.v || [], l.v.push([p, y, h]), p = null) : p = new P(l, l.h && l.h.length, p, y);
        O(f) < f.length && (d[g] = p);
      } else {
        c = new P(!0, 0, p, y), d = [c];
      }
    }
    if (B(f) || f === +f) {
      k(3, f);
    } else {
      b = f[0];
      e = f[1];
      var m = 1, n = b, G;
      switch(b) {
        case 9:
        case 13:
        case 16:
          k(b, e);
          break;
        case 11:
          k(b);
          break;
        case 3:
        case 4:
        case 8:
        case 14:
        case 18:
          k(b, e);
          break;
        case 15:
          k(b);
          break;
        case 7:
          m = [];
          n = 2;
          for (G = f.length; n < G; ++n) {
            m[n - 2] = f[n];
          }
          k(b, e, G - 2 ? m : null);
          break;
        case 1:
        case 17:
          n = e, m = 2;
        default:
          B(n) && k(1 === m ? 1 : b, n, f[m]);
      }
    }
    return Infinity;
  });
  return c;
}
;function Z(a, c, d, f, b) {
  9 !== a[0] && 11 !== a[0] && (a = [11, a]);
  var e = [], g = -1;
  za({h:function(k) {
    e[++g] = k;
  }}, function(k, m) {
    L(a, k, m);
  }, c, d, f, b);
  return e.join("");
}
function za(a, c, d, f, b, e) {
  function g() {
    var h = "";
    y && (h = "</" + y + ">", y = "");
    return h;
  }
  function k(h, l, z) {
    var u = h.match('"'), A = h.match("'"), q = l ? "'" : '"';
    u && A ? h = l ? q + h.split("'").join("\\'") + q : q + h.split('"').join('\\"') + q : u ? h = "'" + h + "'" : A ? h = l ? q + h.split("'").join("\\'") + q : q + h + q : z || h.match(/[^0-9a-z\.\-]/g) || 72 < h.length ? h = q + h + q : "" === h && (h = q + q);
    return h;
  }
  e = e || {};
  var m = !0 === e.useQuoteAlways, n = !0 === e.useSingleQuote, G = e.instructionAttrPrefix || ":", p = [!1, null, !1, !1, !1, !1], y;
  c(function(h, l, z, u, A, q) {
    function M(ca) {
      r[++t] = g() + (N ? ca : x("" + ca));
    }
    var r = [], t = -1;
    A = p[6 * u];
    var S = p[6 * u + 1], T = p[6 * u + 2], N = p[6 * u + 3], U = !1, H = !1;
    I(h) && (U = O(h) < h.length);
    S = f ? va(h, S, f) : null;
    var w = h[0], D = h[1], da = 1, C;
    switch(Y(h)) {
      case 9:
        r[++t] = D;
        break;
      case 3:
        I(h) || (D = h);
        M(D);
        break;
      case 4:
        r[++t] = "<![CDATA[" + x("" + D) + "]]\x3e";
        break;
      case 8:
        r[++t] = "\x3c!--" + x("" + D) + "--\x3e";
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
        if (d) {
          var F = sa(d, h, q);
          if (q = I(F)) {
            return ta(l, z, F), -1;
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
        w === +w && (w = D, da = 2);
        w = Q(w);
        l = w[1];
        z = w[2];
        w = w[0];
        h = h[da];
        "p" !== y || ra[w] ? y = "" : r[++t] = g();
        H = (A = A || !!aa[w]) || 0 < w.indexOf(":");
        T = T || H || !!pa[w];
        N = N || fa[w] && !ha[w];
        r[++t] = "<" + w;
        l && (r[++t] = " id=" + k(l, n, H || m));
        z && (r[++t] = " class=" + k(z, n, H || m));
        if (!I(h) && E(h)) {
          for (C in h) {
            if (l = h[C], (z = 0 === C.indexOf(G)) && (C = C.substr(G.length)), "className" === C && (C = "class"), z && d && (l = ua(d, C, l, b, q)), null != l && (z = ba[C], !z || !1 !== l)) {
              if (r[++t] = " " + C, !z && !0 !== l) {
                if ("style" === C && E(l)) {
                  if (l = x(ya(l)), !l) {
                    continue;
                  }
                } else {
                  l = x("" + l);
                }
                r[++t] = "=" + k(l, n, H || m);
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
  }, function(h, l, z, u) {
    var A = [], q = -1, M = p[6 * u + 8], r = p[6 * u + 10], t = p[6 * u + 11];
    6 * u + 6 < p.length && (p.length = 6 * u + 6);
    switch(Y(h)) {
      case 13:
        A[++q] = g() + "<![endif]--\x3e";
        break;
      case 16:
        A[++q] = g() + "--\x3e";
        break;
      case 17:
        y = "";
        break;
      case 1:
        h = xa(h), !r && (t || ea[h] && !oa[h]) ? y = "" : t && !r || !(M || !na[h] || "p" === h && z === l.length - 1 && qa[xa(l)]) ? y = h : (A[++q] = "</" + h + ">", y = "");
    }
    -1 !== q && a.h(A.join(""));
    0 === u && (a = null);
  });
  c = null;
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
Z.gulp = function(a, c, d, f) {
  const b = require("plugin-error");
  return require("through2").obj(function(e, g, k) {
    if (e.isNull()) {
      return k();
    }
    if (e.isStream()) {
      return this.emit("error", new b("json2html", "Streaming not supported")), k();
    }
    const m = "." + e.stem.split(".").pop();
    if (".json" === e.extname && [".html", ".htm", ".xhtml", ".php"].indexOf(m)) {
      try {
        const n = JSON.parse(e.contents.toString(g));
        if (I(n)) {
          const G = Z(n, a, c, d, f);
          e.stem = e.stem.substr(0, e.stem.length - m.length);
          e.extname = m;
          e.contents = Buffer.from(G);
        }
      } catch (n) {
        this.emit("error", new b("json2html", n));
      }
    }
    k(null, e);
  });
};

