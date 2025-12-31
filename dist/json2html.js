var ca = {xml:!0, svg:!0, math:!0}, da = {async:!0, autofocus:!0, checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, draggable:!0, hidden:!0, ismap:!0, loop:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, novalidate:!0, nowrap:!0, readonly:!0, required:!0, reversed:!0, scoped:!0, selected:!0}, ea = {area:!0, base:!0, col:!0, embed:!0, br:!0, hr:!0, img:!0, input:!0, link:!0, meta:!0, source:!0, track:!0, wbr:!0}, fa = {script:!0, style:!0, textarea:!0, title:!0}, ha = {textarea:!0, title:!0}, 
y = {caption:{article:!0, section:!0, nav:!0, aside:!0, h1:!0, h2:!0, h3:!0, h4:!0, h5:!0, h6:!0, header:!0, footer:!0, address:!0, p:!0, hr:!0, pre:!0, blockquote:!0, ol:!0, ul:!0, dl:!0, figure:!0, div:!0, a:!0, em:!0, strong:!0, small:!0, s:!0, cite:!0, q:!0, dfn:!0, abbr:!0, data:!0, time:!0, code:!0, "var":!0, samp:!0, kbd:!0, sub:!0, sup:!0, i:!0, b:!0, u:!0, mark:!0, ruby:!0, bdi:!0, bdo:!0, span:!0, br:!0, wbr:!0, ins:!0, del:!0, picture:!0, img:!0, iframe:!0, embed:!0, object:!0, video:!0, 
audio:!0, map:!0, area:!0, math:!0, svg:!0, form:!0, label:!0, input:!0, button:!0, select:!0, datalist:!0, textarea:!0, output:!0, progress:!0, meter:!0, fieldset:!0, details:!0, dialog:!0, script:!0, noscript:!0, template:!0, canvas:!0}, dd:{article:!0, section:!0, nav:!0, aside:!0, h1:!0, h2:!0, h3:!0, h4:!0, h5:!0, h6:!0, header:!0, footer:!0, address:!0, p:!0, hr:!0, pre:!0, blockquote:!0, ol:!0, ul:!0, dl:!0, figure:!0, div:!0, a:!0, em:!0, strong:!0, small:!0, s:!0, cite:!0, q:!0, dfn:!0, 
abbr:!0, data:!0, time:!0, code:!0, "var":!0, samp:!0, kbd:!0, sub:!0, sup:!0, i:!0, b:!0, u:!0, mark:!0, ruby:!0, bdi:!0, bdo:!0, span:!0, br:!0, wbr:!0, ins:!0, del:!0, picture:!0, img:!0, iframe:!0, embed:!0, object:!0, video:!0, audio:!0, map:!0, area:!0, math:!0, svg:!0, table:!0, form:!0, label:!0, input:!0, button:!0, select:!0, datalist:!0, textarea:!0, output:!0, progress:!0, meter:!0, fieldset:!0, details:!0, dialog:!0, script:!0, noscript:!0, template:!0, canvas:!0}, dt:{address:!0, p:!0, 
hr:!0, pre:!0, blockquote:!0, ol:!0, ul:!0, dl:!0, figure:!0, div:!0, a:!0, em:!0, strong:!0, small:!0, s:!0, cite:!0, q:!0, dfn:!0, abbr:!0, data:!0, time:!0, code:!0, "var":!0, samp:!0, kbd:!0, sub:!0, sup:!0, i:!0, b:!0, u:!0, mark:!0, ruby:!0, bdi:!0, bdo:!0, span:!0, br:!0, wbr:!0, ins:!0, del:!0, picture:!0, img:!0, iframe:!0, embed:!0, object:!0, video:!0, audio:!0, map:!0, area:!0, math:!0, svg:!0, table:!0, form:!0, label:!0, input:!0, button:!0, select:!0, datalist:!0, textarea:!0, output:!0, 
progress:!0, meter:!0, fieldset:!0, details:!0, dialog:!0, script:!0, noscript:!0, template:!0, canvas:!0}, p:{a:!0, em:!0, strong:!0, small:!0, s:!0, cite:!0, q:!0, dfn:!0, abbr:!0, data:!0, time:!0, code:!0, "var":!0, samp:!0, kbd:!0, sub:!0, sup:!0, i:!0, b:!0, u:!0, mark:!0, ruby:!0, bdi:!0, bdo:!0, span:!0, br:!0, wbr:!0, ins:!0, del:!0, picture:!0, img:!0, iframe:!0, embed:!0, object:!0, video:!0, audio:!0, map:!0, area:!0, math:!0, svg:!0, label:!0, input:!0, button:!0, select:!0, datalist:!0, 
textarea:!0, output:!0, progress:!0, meter:!0, script:!0, noscript:!0, template:!0, canvas:!0}, html:{head:!0, body:!0}, head:{title:!0, base:!0, link:!0, meta:!0, style:!0, script:!0, noscript:!0, template:!0}, colgroup:{col:!0}, optgroup:{option:!0}, option:{}, tbody:{tr:!0}, tr:{th:!0, td:!0}};
y.li = y.td = y.dd;
y.th = y.dt;
y.rp = y.rt = y.p;
y.tfoot = y.thead = y.tbody;
function A(a) {
  return a.split("&lt;").join("&amp;lt;").split("&gt;").join("&amp;gt;").split("<").join("&lt;").split(">").join("&gt;");
}
;function C(a) {
  return a === "" + a;
}
function F(a) {
  return !!a && "object" === typeof a;
}
function I(a) {
  return !!a && a.constructor === Array;
}
;function ia(a) {
  function c(p, w) {
    for (var h = [], m = p.length, r = 0, q = -1, x; r < m; ++r) {
      x = p[r], F(x) ? h[++q] = r : w[r] = x;
    }
    return h;
  }
  function d(p, w) {
    var h = [], m = -1, r;
    for (r in p) {
      var q = p[r];
      F(q) ? h[++m] = r : w[r] = q;
    }
    return h;
  }
  var f = 0, b = I(a), e = b ? [] : {}, g = b ? c(a, e) : F(a) ? d(a, e) : null, k, n;
  if (null === g) {
    return a;
  }
  for (a = [g, k = a, n = e]; 0 <= f;) {
    var l = g.shift();
    if (null != l) {
      var B = k[l];
      b = I(B);
      l = n[l] = b ? [] : {};
      b = b ? c(B, l) : d(B, l);
      b.length && (f += 3, a.push(g = b, k = B, n = l));
    } else {
      a.length = f, f -= 3, g = a[f], k = a[f + 1], n = a[f + 2];
    }
  }
  return e;
}
;function J(a, c, d) {
  var f = a, b = K(f), e = 0, g = c(a, null, -1, e / 3), k = [-1, a, b];
  if (Infinity !== g && -Infinity !== g) {
    if (0 < f.length - b) {
      do {
        var n = ++k[e];
        var l = f[n + b];
        if (null != l) {
          g = c(l, f, n + b, e / 3 + 1);
          if (Infinity === g) {
            return;
          }
          if (-Infinity !== g) {
            if (-1 >= g) {
              k[e] += g;
            } else {
              if (1 <= g && (k[e] += g), K(l) < l.length) {
                e += 3, k[e] = -1, k[e + 1] = f = l, k[e + 2] = b = K(l);
              } else if (d && f) {
                g = d(l, f, n + b, e / 3 + 1);
                if (Infinity === g) {
                  return;
                }
                -Infinity !== g && (-1 >= g || 1 <= g) && (k[e] += g);
              }
            }
          }
        } else {
          if (k.length = e, e -= 3, f = k[e + 1], b = k[e + 2], d && f) {
            n = k[e] + b;
            g = d(f[n], f, n, e / 3 + 1);
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
;function L(a, c, d, f) {
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
      c = O(f), f = c[0];
    case 18:
      this.B = f;
  }
}
var P = null;
function Q(a) {
  return a.l ? P === a ? a.A ? ja : a.D ? R : ka : P.j === a ? la : ma : na;
}
L.prototype.remove = function() {
  if (R <= Q(this)) {
    return this.A = !0, null;
  }
  var a = this.j ? this.j.h.indexOf(this) : -1;
  0 <= a && (this.j.h.splice(a, 1), this.j = null);
};
L.prototype.wrap = function(a, c, d) {
  if (this.l) {
    this.o = this.o || [], this.o.push([a, c, d]), a = null;
  } else {
    if (this.j) {
      var f = (d = this.j) ? this.j.h.indexOf(this) : -1;
      a = new L(d, f, a, c);
    } else {
      a = null;
    }
  }
  V(a, 0, [this]);
  return a;
};
function V(a, c, d) {
  var f = a.h = a.h || [], b = f.length, e = d.length;
  for (c = c < b ? c : b; e;) {
    b = d[--e], 11 === b.m ? b.h && b.h.length && V(a, c, b.h) : (b.remove(), f.splice(c, 0, b), b.j = a);
  }
}
var na = 0, ma = 1, ka = 2, R = 3, ja = 4, la = 5;
var oa = {html:!0, head:!0, body:!0, p:!0, dt:!0, dd:!0, li:!0, option:!0, tbody:!0, thead:!0, tfoot:!0, td:!0, th:!0, tr:!0, rp:!0, rt:!0, optgroup:!0, caption:!0, colgroup:!0}, pa = {source:!0}, qa = {a:!0}, ra = {audio:!0, del:!0, ins:!0, map:!0, noscript:!0, video:!0}, sa = {h1:!0, h2:!0, h3:!0, h4:!0, h5:!0, h6:!0, address:!0, blockquote:!0, div:!0, dl:!0, fieldset:!0, form:!0, hr:!0, legend:!0, ul:!0, noscript:!0, ol:!0, p:!0, pre:!0, article:!0, aside:!0, canvas:!0, details:!0, figcaption:!0, 
figure:!0, footer:!0, header:!0, hgroup:!0, main:!0, nav:!0, section:!0, table:!1};
function W(a) {
  if (C(a) || a === +a) {
    a = 3;
  } else {
    if (I(a)) {
      if (C(a[0])) {
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
function ta(a, c, d) {
  var f = c[1];
  c = c.slice(2);
  var b;
  a && a.constructor === Function ? b = c.length ? a.call(d, f, c) : a.call(d, f) : a[f] && (b = c.length ? a[f].apply(d || a, c) : a[f].call(d || a));
  (b = ia(b)) && I(b[0]) && b.unshift(11);
  return b;
}
function ua(a, c, d) {
  11 === d[0] ? (d.shift(), d.unshift(c, 1), a.splice.apply(a, d)) : a.splice(c, 1, d);
}
function X(a, c, d, f, b) {
  var e;
  if (I(d) && C(d[0])) {
    var g = d[0];
    d = d.slice(1);
    a && a.constructor === Function ? e = d.length ? a.call(b, g, d) : a.call(b, g) : a[g] && (e = d.length ? a[g].apply(b || a, d) : a[g].call(b || a));
  } else {
    C(d) && (a && a.constructor === Function ? e = a.call(b, d) : a[d] && (e = a[d].call(b || a)));
  }
  I(e) && (a = X(a, c, e, f, b), void 0 !== a && (e = a));
  return e;
}
function va(a, c, d) {
  a = wa(a);
  var f;
  P = a;
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
      } else if (C(b) && b === a.B && !0 === e(a)) {
        break;
      }
    }
  } else {
    d(a);
  }
  return a;
}
function K(a) {
  var c = a[0], d = W(a);
  return 1 === d || 17 === d ? (c = c === +c ? 2 : 1, a = a[c], !I(a) && F(a) ? c + 1 : c) : 11 === c ? 1 : 9 === c || 13 === c || 16 === c ? 2 : Infinity;
}
function Y(a) {
  var c = a[0];
  return (a = C(c) ? c : 1 === c || 17 === c ? a[1] : "") ? O(a)[0] : a;
}
function O(a) {
  var c = a.indexOf("#"), d = a.indexOf("."), f = "", b = "";
  c < d ? (f = a.split(".")[1], a = a.split(".")[0], 0 < c && (b = a.split("#")[1], a = a.split("#")[0])) : d < c && (b = a.split("#")[1], a = a.split("#")[0], 0 < d && (f = a.split(".")[1], a = a.split(".")[0]));
  return [a, b, f];
}
function xa(a) {
  var c = [], d = -1, f;
  for (f in a) {
    var b = a[f];
    "0px" === b && (b = 0);
    for (var e = ++d, g, k = [], n = f.split(""), l = n.length; l;) {
      g = n[--l], "A" <= g && "Z" >= g && (g = "-" + g.toLowerCase()), k[l] = g;
    }
    g = k.join("");
    c[e] = g + ":" + b;
  }
  return c.join(";");
}
function wa(a) {
  var c, d;
  J(a, function(f, b, e, g) {
    function k(p, w, h) {
      if (c) {
        g < d.length && (d.length = g);
        var m = d[d.length - 1];
        R <= Q(m) ? (m.v = m.v || [], m.v.push([p, w, h]), p = null) : p = new L(m, m.h && m.h.length, p, w);
        K(f) < f.length && (d[g] = p);
      } else {
        c = new L(!0, 0, p, w), d = [c];
      }
    }
    if (C(f) || f === +f) {
      k(3, f);
    } else {
      b = f[0];
      e = f[1];
      var n = 1, l = b, B;
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
          n = [];
          l = 2;
          for (B = f.length; l < B; ++l) {
            n[l - 2] = f[l];
          }
          k(b, e, B - 2 ? n : null);
          break;
        case 1:
        case 17:
          l = e, n = 2;
        default:
          C(l) && k(1 === n ? 1 : b, l, f[n]);
      }
    }
    return Infinity;
  });
  return c;
}
;function Z(a, c, d, f, b) {
  9 !== a[0] && 11 !== a[0] && (a = [11, a]);
  var e = [], g = -1;
  ya({h:function(k) {
    e[++g] = k;
  }}, function(k, n) {
    J(a, k, n);
  }, c, d, f, b);
  return e.join("");
}
function ya(a, c, d, f, b, e) {
  function g() {
    var h = "";
    w && (h = "</" + w + ">", w = "");
    return h;
  }
  function k(h, m, r) {
    var q = h.match('"'), x = h.match("'"), t = m ? "'" : '"';
    q && x ? h = m ? t + h.split("'").join("\\'") + t : t + h.split('"').join('\\"') + t : q ? h = "'" + h + "'" : x ? h = m ? t + h.split("'").join("\\'") + t : t + h + t : r || h.match(/[^0-9a-z\.\-]/g) || 72 < h.length ? h = t + h + t : "" === h && (h = t + t);
    return h;
  }
  e = e || {};
  var n = !0 === e.useQuoteAlways, l = !0 === e.useSingleQuote, B = e.instructionAttrPrefix || ":", p = [!1, null, !1, !1, !1, !1], w;
  c(function(h, m, r, q, x, t) {
    function M(aa) {
      u[++v] = g() + (N ? aa : A("" + aa));
    }
    var u = [], v = -1;
    x = p[6 * q];
    var S = p[6 * q + 1], T = p[6 * q + 2], N = p[6 * q + 3], U = !1, H = !1;
    I(h) && (U = K(h) < h.length);
    S = f ? va(h, S, f) : null;
    var z = h[0], E = h[1], ba = 1, D;
    switch(W(h)) {
      case 9:
        u[++v] = E;
        break;
      case 3:
        I(h) || (E = h);
        M(E);
        break;
      case 4:
        u[++v] = "<![CDATA[" + A("" + E) + "]]\x3e";
        break;
      case 8:
        u[++v] = "\x3c!--" + A("" + E) + "--\x3e";
        break;
      case 13:
        u[++v] = g() + "\x3c!--[" + E + "]>";
        break;
      case 16:
        u[++v] = g() + "\x3c!--{" + E + "};";
        break;
      case 14:
        u[++v] = g() + "\x3c!--[" + E + "]>\x3c!--\x3e";
        break;
      case 15:
        u[++v] = g() + "\x3c!--<![endif]--\x3e";
        break;
      case 7:
        if (d) {
          var G = ta(d, h, t);
          if (t = I(G)) {
            return ua(m, r, G), -1;
          }
          (C(G) || G === +G) && "" !== G && M(G);
        }
        break;
      case 18:
        u[++v] = "</" + E + ">";
        break;
      case 17:
        G = !0;
      case 1:
        z === +z && (z = E, ba = 2);
        z = O(z);
        m = z[1];
        r = z[2];
        z = z[0];
        h = h[ba];
        "p" !== w || sa[z] ? w = "" : u[++v] = g();
        H = (x = x || !!ca[z]) || 0 < z.indexOf(":");
        T = T || H || !!qa[z];
        N = N || fa[z] && !ha[z];
        u[++v] = "<" + z;
        m && (u[++v] = " id=" + k(m, l, H || n));
        r && (u[++v] = " class=" + k(r, l, H || n));
        if (!I(h) && F(h)) {
          for (D in h) {
            if (m = h[D], (r = 0 === D.indexOf(B)) && (D = D.substr(B.length)), "className" === D && (D = "class"), r && d && (m = X(d, D, m, b, t)), null != m && (r = da[D], !r || !1 !== m)) {
              if (u[++v] = " " + D, !r && !0 !== m) {
                if ("style" === D && F(m)) {
                  if (m = A(xa(m)), !m) {
                    continue;
                  }
                } else {
                  m = A("" + m);
                }
                u[++v] = "=" + k(m, l, H || n);
              }
            }
          }
        }
        !H || U || G ? u[++v] = ">" : u[++v] = " />";
    }
    p[6 * q + 6] = x;
    p[6 * q + 7] = S;
    p[6 * q + 8] = T;
    p[6 * q + 9] = N;
    p[6 * q + 10] = U;
    p[6 * q + 11] = H;
    -1 !== v && a.h(u.join(""));
  }, function(h, m, r, q) {
    var x = [], t = -1, M = p[6 * q + 8], u = p[6 * q + 10], v = p[6 * q + 11];
    6 * q + 6 < p.length && (p.length = 6 * q + 6);
    switch(W(h)) {
      case 13:
        x[++t] = g() + "<![endif]--\x3e";
        break;
      case 16:
        x[++t] = g() + "--\x3e";
        break;
      case 17:
        w = "";
        break;
      case 1:
        h = Y(h), !u && (v || ea[h] && !pa[h]) ? w = "" : v && !u || !(M || !oa[h] || "p" === h && r === m.length - 1 && ra[Y(m)]) ? w = h : (x[++t] = "</" + h + ">", w = "");
    }
    -1 !== t && a.h(x.join(""));
    0 === q && (a = null);
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
    const n = "." + e.stem.split(".").pop();
    if (".json" === e.extname && [".html", ".htm", ".xhtml", ".php"].indexOf(n)) {
      try {
        const l = JSON.parse(e.contents.toString(g));
        if (I(l)) {
          const B = Z(l, a, c, d, f);
          e.stem = e.stem.substr(0, e.stem.length - n.length);
          e.extname = n;
          e.contents = Buffer.from(B);
        }
      } catch (l) {
        this.emit("error", new b("json2html", l));
      }
    }
    k(null, e);
  });
};

