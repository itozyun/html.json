var ba = {xml:!0, svg:!0, math:!0}, ca = {async:!0, autofocus:!0, checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, draggable:!0, hidden:!0, ismap:!0, loop:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, novalidate:!0, nowrap:!0, readonly:!0, required:!0, reversed:!0, scoped:!0, selected:!0}, da = {area:!0, base:!0, col:!0, embed:!0, br:!0, hr:!0, img:!0, input:!0, link:!0, meta:!0, source:!0, track:!0, wbr:!0}, ea = {script:!0, style:!0, textarea:!0, title:!0}, fa = {textarea:!0, title:!0}, 
w = {caption:{article:!0, section:!0, nav:!0, aside:!0, h1:!0, h2:!0, h3:!0, h4:!0, h5:!0, h6:!0, header:!0, footer:!0, address:!0, p:!0, hr:!0, pre:!0, blockquote:!0, ol:!0, ul:!0, dl:!0, figure:!0, div:!0, a:!0, em:!0, strong:!0, small:!0, s:!0, cite:!0, q:!0, dfn:!0, abbr:!0, data:!0, time:!0, code:!0, "var":!0, samp:!0, kbd:!0, sub:!0, sup:!0, i:!0, b:!0, u:!0, mark:!0, ruby:!0, bdi:!0, bdo:!0, span:!0, br:!0, wbr:!0, ins:!0, del:!0, picture:!0, img:!0, iframe:!0, embed:!0, object:!0, video:!0, 
audio:!0, map:!0, area:!0, math:!0, svg:!0, form:!0, label:!0, input:!0, button:!0, select:!0, datalist:!0, textarea:!0, output:!0, progress:!0, meter:!0, fieldset:!0, details:!0, dialog:!0, script:!0, noscript:!0, template:!0, canvas:!0}, dd:{article:!0, section:!0, nav:!0, aside:!0, h1:!0, h2:!0, h3:!0, h4:!0, h5:!0, h6:!0, header:!0, footer:!0, address:!0, p:!0, hr:!0, pre:!0, blockquote:!0, ol:!0, ul:!0, dl:!0, figure:!0, div:!0, a:!0, em:!0, strong:!0, small:!0, s:!0, cite:!0, q:!0, dfn:!0, 
abbr:!0, data:!0, time:!0, code:!0, "var":!0, samp:!0, kbd:!0, sub:!0, sup:!0, i:!0, b:!0, u:!0, mark:!0, ruby:!0, bdi:!0, bdo:!0, span:!0, br:!0, wbr:!0, ins:!0, del:!0, picture:!0, img:!0, iframe:!0, embed:!0, object:!0, video:!0, audio:!0, map:!0, area:!0, math:!0, svg:!0, table:!0, form:!0, label:!0, input:!0, button:!0, select:!0, datalist:!0, textarea:!0, output:!0, progress:!0, meter:!0, fieldset:!0, details:!0, dialog:!0, script:!0, noscript:!0, template:!0, canvas:!0}, dt:{address:!0, p:!0, 
hr:!0, pre:!0, blockquote:!0, ol:!0, ul:!0, dl:!0, figure:!0, div:!0, a:!0, em:!0, strong:!0, small:!0, s:!0, cite:!0, q:!0, dfn:!0, abbr:!0, data:!0, time:!0, code:!0, "var":!0, samp:!0, kbd:!0, sub:!0, sup:!0, i:!0, b:!0, u:!0, mark:!0, ruby:!0, bdi:!0, bdo:!0, span:!0, br:!0, wbr:!0, ins:!0, del:!0, picture:!0, img:!0, iframe:!0, embed:!0, object:!0, video:!0, audio:!0, map:!0, area:!0, math:!0, svg:!0, table:!0, form:!0, label:!0, input:!0, button:!0, select:!0, datalist:!0, textarea:!0, output:!0, 
progress:!0, meter:!0, fieldset:!0, details:!0, dialog:!0, script:!0, noscript:!0, template:!0, canvas:!0}, p:{a:!0, em:!0, strong:!0, small:!0, s:!0, cite:!0, q:!0, dfn:!0, abbr:!0, data:!0, time:!0, code:!0, "var":!0, samp:!0, kbd:!0, sub:!0, sup:!0, i:!0, b:!0, u:!0, mark:!0, ruby:!0, bdi:!0, bdo:!0, span:!0, br:!0, wbr:!0, ins:!0, del:!0, picture:!0, img:!0, iframe:!0, embed:!0, object:!0, video:!0, audio:!0, map:!0, area:!0, math:!0, svg:!0, label:!0, input:!0, button:!0, select:!0, datalist:!0, 
textarea:!0, output:!0, progress:!0, meter:!0, script:!0, noscript:!0, template:!0, canvas:!0}, html:{head:!0, body:!0}, head:{title:!0, base:!0, link:!0, meta:!0, style:!0, script:!0, noscript:!0, template:!0}, colgroup:{col:!0}, optgroup:{option:!0}, option:{}, tbody:{tr:!0}, tr:{th:!0, td:!0}};
w.li = w.td = w.dd;
w.th = w.dt;
w.rp = w.rt = w.p;
w.tfoot = w.thead = w.tbody;
function z(a) {
  return a.split("&lt;").join("&amp;lt;").split("&gt;").join("&amp;gt;").split("<").join("&lt;").split(">").join("&gt;");
}
;function A(a) {
  return a === "" + a;
}
function F(a) {
  return !!a && "object" === typeof a;
}
function I(a) {
  return !!a && a.constructor === Array;
}
;function ha(a) {
  function d(b) {
    var f = b, c;
    if (I(b)) {
      f = [];
      var e = 0;
      for (c = b.length; e < c; ++e) {
        f[e] = d(b[e]);
      }
    } else if (F(b)) {
      for (e in f = {}, b) {
        f[e] = d(b[e]);
      }
    }
    return f;
  }
  return d(a);
}
;function J(a, d, b) {
  var f = a, c = K(f), e = 0, g = d(a, null, -1, e / 3), k = [-1, a, c];
  if (Infinity !== g && -Infinity !== g) {
    if (0 < f.length - c) {
      do {
        var p = ++k[e];
        var m = f[p + c];
        if (null != m) {
          g = d(m, f, p + c, e / 3 + 1);
          if (Infinity === g) {
            return;
          }
          if (-Infinity !== g) {
            if (-1 >= g) {
              k[e] += g;
            } else {
              if (1 <= g && (k[e] += g), K(m) < m.length) {
                e += 3, k[e] = -1, k[e + 1] = f = m, k[e + 2] = c = K(m);
              } else if (b && f) {
                g = b(m, f, p + c, e / 3 + 1);
                if (Infinity === g) {
                  return;
                }
                -Infinity !== g && (-1 >= g || 1 <= g) && (k[e] += g);
              }
            }
          }
        } else {
          if (k.length = e, e -= 3, f = k[e + 1], c = k[e + 2], b && f) {
            p = k[e] + c;
            g = b(f[p], f, p, e / 3 + 1);
            if (Infinity === g) {
              return;
            }
            -Infinity !== g && (-1 >= g || 1 <= g) && (k[e] += g);
          }
        }
      } while (0 <= e);
    }
    b && b(a, null, -1, 0);
  }
}
;function M(a, d, b, f) {
  if (!!a === a) {
    var c = null;
    this.l = a;
  } else {
    c = a, this.l = c.l;
  }
  this.j = c;
  this.m = b;
  c && (c.h || (c.h = []), a = c.h, 0 <= d && d < a.length ? a.splice(d, 0, this) : a.push(this));
  switch(b) {
    case 1:
    case 17:
      d = P(f), f = d[0];
    case 18:
      this.D = f;
  }
}
var Q = null;
function R(a) {
  return a.l ? Q === a ? a.B ? ia : a.F ? S : ja : Q.j === a ? ka : la : ma;
}
M.prototype.remove = function() {
  if (S <= R(this)) {
    return this.B = !0, null;
  }
  var a = this.j ? this.j.h.indexOf(this) : -1;
  0 <= a && (this.j.h.splice(a, 1), this.j = null);
};
M.prototype.wrap = function(a, d, b) {
  if (this.l) {
    this.o = this.o || [], this.o.push([a, d, b]), a = null;
  } else {
    if (this.j) {
      var f = (b = this.j) ? this.j.h.indexOf(this) : -1;
      a = new M(b, f, a, d);
    } else {
      a = null;
    }
  }
  W(a, 0, [this]);
  return a;
};
function W(a, d, b) {
  var f = a.h = a.h || [], c = f.length, e = b.length;
  for (d = d < c ? d : c; e;) {
    c = b[--e], 11 === c.m ? c.h && c.h.length && W(a, d, c.h) : (c.remove(), f.splice(d, 0, c), c.j = a);
  }
}
var ma = 0, la = 1, ja = 2, S = 3, ia = 4, ka = 5;
var na = {html:!0, head:!0, body:!0, p:!0, dt:!0, dd:!0, li:!0, option:!0, tbody:!0, thead:!0, tfoot:!0, td:!0, th:!0, tr:!0, rp:!0, rt:!0, optgroup:!0, caption:!0, colgroup:!0}, oa = {a:!0, audio:!0, del:!0, ins:!0, map:!0, noscript:!0, video:!0}, pa = {h1:!0, h2:!0, h3:!0, h4:!0, h5:!0, h6:!0, address:!0, blockquote:!0, div:!0, dl:!0, fieldset:!0, form:!0, hr:!0, legend:!0, ul:!0, noscript:!0, ol:!0, p:!0, pre:!0, article:!0, aside:!0, canvas:!0, details:!0, figcaption:!0, figure:!0, footer:!0, 
header:!0, hgroup:!0, main:!0, nav:!0, section:!0};
function X(a) {
  if (A(a) || a === +a) {
    a = 3;
  } else {
    if (I(a)) {
      if (A(a[0])) {
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
function qa(a, d, b) {
  var f = d[1];
  d = d.slice(2);
  var c;
  a && a.constructor === Function ? c = d.length ? a.call(b, f, d) : a.call(b, f) : a[f] && (c = d.length ? a[f].apply(b || a, d) : a[f].call(b || a));
  (c = ha(c)) && I(c[0]) && c.unshift(11);
  return c;
}
function ra(a, d, b) {
  11 === b[0] ? (b.shift(), b.unshift(d, 1), a.splice.apply(a, b)) : a.splice(d, 1, b);
}
function Y(a, d, b, f, c) {
  var e;
  if (I(b) && A(b[0])) {
    var g = b[0];
    b = b.slice(1);
    a && a.constructor === Function ? e = b.length ? a.call(c, g, b) : a.call(c, g) : a[g] && (e = b.length ? a[g].apply(c || a, b) : a[g].call(c || a));
  } else {
    A(b) && (a && a.constructor === Function ? e = a.call(c, b) : a[b] && (e = a[b].call(c || a)));
  }
  I(e) && (a = Y(a, d, e, f, c), void 0 !== a && (e = a));
  return e;
}
function sa(a, d, b) {
  a = ta(a);
  var f;
  Q = a;
  d && (d.h ? d.h.push(a) : d.h = [a]);
  if (I(b)) {
    for (d = 0, f = b.length; d < f; d += 2) {
      var c = b[d];
      var e = b[d + 1];
      if (c === +c) {
        if (c === a.m && !0 === e(a)) {
          break;
        }
      } else if ("*" === c) {
        if (!0 === e(a)) {
          break;
        }
      } else if (A(c) && c === a.D && !0 === e(a)) {
        break;
      }
    }
  } else {
    b(a);
  }
  return a;
}
function K(a) {
  var d = a[0], b = X(a);
  return 1 === b || 17 === b ? (d = d === +d ? 2 : 1, a = a[d], !I(a) && F(a) ? d + 1 : d) : 11 === d ? 1 : 9 === d || 13 === d || 16 === d ? 2 : Infinity;
}
function P(a) {
  var d = a.indexOf("#"), b = a.indexOf("."), f = "", c = "";
  d < b ? (f = a.split(".")[1], a = a.split(".")[0], 0 < d && (c = a.split("#")[1], a = a.split("#")[0])) : b < d && (c = a.split("#")[1], a = a.split("#")[0], 0 < b && (f = a.split(".")[1], a = a.split(".")[0]));
  return [a, c, f];
}
function ua(a) {
  var d = [], b = -1, f;
  for (f in a) {
    var c = a[f];
    "0px" === c && (c = 0);
    for (var e = ++b, g, k = [], p = f.split(""), m = p.length; m;) {
      g = p[--m], "A" <= g && "Z" >= g && (g = "-" + g.toLowerCase()), k[m] = g;
    }
    g = k.join("");
    d[e] = g + ":" + c;
  }
  return d.join(";");
}
function ta(a) {
  var d, b;
  J(a, function(f, c, e, g) {
    function k(q, y, h) {
      if (d) {
        g < b.length && (b.length = g);
        var l = b[b.length - 1];
        S <= R(l) ? (l.v = l.v || [], l.v.push([q, y, h]), q = null) : q = new M(l, l.h && l.h.length, q, y);
        K(f) < f.length && (b[g] = q);
      } else {
        d = new M(!0, 0, q, y), b = [d];
      }
    }
    if (A(f) || f === +f) {
      k(3, f);
    } else {
      c = f[0];
      e = f[1];
      var p = 1, m = c, G;
      switch(c) {
        case 9:
        case 13:
        case 16:
          k(c, e);
          break;
        case 11:
          k(c);
          break;
        case 3:
        case 4:
        case 8:
        case 14:
        case 18:
          k(c, e);
          break;
        case 15:
          k(c);
          break;
        case 7:
          p = [];
          m = 2;
          for (G = f.length; m < G; ++m) {
            p[m - 2] = f[m];
          }
          k(c, e, G - 2 ? p : null);
          break;
        case 1:
        case 17:
          m = e, p = 2;
        default:
          A(m) && k(1 === p ? 1 : c, m, f[p]);
      }
    }
    return Infinity;
  });
  return d;
}
;function Z(a, d, b, f, c) {
  9 !== a[0] && 11 !== a[0] && (a = [11, a]);
  var e = [], g = -1;
  va({h:function(k) {
    e[++g] = k;
  }}, function(k, p) {
    J(a, k, p);
  }, d, b, f, c);
  return e.join("");
}
function va(a, d, b, f, c, e) {
  function g() {
    var h = "";
    y && (h = "</" + y + ">", y = "");
    return h;
  }
  function k(h, l, v) {
    var r = h.match('"'), D = h.match("'"), t = l ? "'" : '"';
    r && D ? h = l ? t + h.split("'").join("\\'") + t : t + h.split('"').join('\\"') + t : r ? h = "'" + h + "'" : D ? h = l ? t + h.split("'").join("\\'") + t : t + h + t : v || h.match(/[^0-9a-z\.\-]/g) || 72 < h.length ? h = t + h + t : "" === h && (h = t + t);
    return h;
  }
  e = e || {};
  var p = !0 === e.useQuoteAlways, m = !0 === e.useSingleQuote, G = e.instructionAttrPrefix || ":", q = [!1, null, !1, !1, !1, !1], y;
  d(function(h, l, v, r, D, t) {
    function N(aa) {
      n[++u] = g() + (O ? aa : z("" + aa));
    }
    var n = [], u = -1;
    D = q[6 * r];
    var T = q[6 * r + 1], U = q[6 * r + 2], O = q[6 * r + 3], V = !1, H = !1;
    I(h) && (V = K(h) < h.length);
    T = f ? sa(h, T, f) : null;
    var x = h[0], C = h[1], L = 1, B;
    switch(X(h)) {
      case 9:
        n[++u] = C;
        break;
      case 3:
        I(h) || (C = h);
        N(C);
        break;
      case 4:
        n[++u] = "<![CDATA[" + z("" + C) + "]]\x3e";
        break;
      case 8:
        n[++u] = "\x3c!--" + z("" + C) + "--\x3e";
        break;
      case 13:
        n[++u] = g() + "\x3c!--[" + C + "]>";
        break;
      case 16:
        n[++u] = g() + "\x3c!--{" + C + "};";
        break;
      case 14:
        n[++u] = "\x3c!--[" + C + "]>\x3c!--\x3e";
        break;
      case 15:
        n[++u] = "\x3c!--<![endif]--\x3e";
        break;
      case 7:
        if (b) {
          var E = qa(b, h, t);
          if (t = I(E)) {
            return ra(l, v, E), -1;
          }
          (A(E) || E === +E) && "" !== E && N(E);
        }
        break;
      case 18:
        n[++u] = "</" + C + ">";
        break;
      case 17:
        E = !0;
      case 1:
        x === +x && (x = C, L = 2);
        x = P(x);
        l = x[1];
        v = x[2];
        x = x[0];
        h = h[L];
        "p" !== y || pa[x] ? y = "" : n[++u] = g();
        H = (D = D || !!ba[x]) || 0 < x.indexOf(":");
        U = U || !!oa[x];
        L = x;
        O = O || ea[L] && !fa[L];
        n[++u] = "<" + x;
        l && (n[++u] = " id=" + k(l, m, H || p));
        v && (n[++u] = " class=" + k(v, m, H || p));
        if (!I(h) && F(h)) {
          for (B in h) {
            if (l = h[B], (v = 0 === B.indexOf(G)) && (B = B.substr(G.length)), "className" === B && (B = "class"), v && b && (l = Y(b, B, l, c, t)), null != l && (v = ca[B], !v || !1 !== l)) {
              if (n[++u] = " " + B, !v && !0 !== l) {
                if ("style" === B && F(l)) {
                  if (l = z(ua(l)), !l) {
                    continue;
                  }
                } else {
                  l = z("" + l);
                }
                n[++u] = "=" + k(l, m, H || p);
              }
            }
          }
        }
        !H || V || E ? n[++u] = ">" : n[++u] = " />";
    }
    q[6 * r + 6] = D;
    q[6 * r + 7] = T;
    q[6 * r + 8] = U;
    q[6 * r + 9] = O;
    q[6 * r + 10] = V;
    q[6 * r + 11] = H;
    -1 !== u && a.h(n.join(""));
  }, function(h, l, v, r) {
    l = [];
    v = -1;
    var D = q[6 * r + 8], t = q[6 * r + 10], N = q[6 * r + 11], n = h[0];
    6 * r + 6 < q.length && (q.length = 6 * r + 6);
    switch(X(h)) {
      case 13:
        l[++v] = g() + "<![endif]--\x3e";
        break;
      case 16:
        l[++v] = g() + "--\x3e";
        break;
      case 17:
        y = "";
        break;
      case 1:
        n === +n && (n = h[1]), n = P(n)[0], !t && da[n] ? y = "" : N && !t || na[n] && (!D || "p" !== n) ? y = n : (l[++v] = "</" + n + ">", y = "");
    }
    -1 !== v && a.h(l.join(""));
    0 === r && (a = null);
  });
  d = null;
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
Z.gulp = function(a, d, b, f) {
  const c = require("plugin-error");
  return require("through2").obj(function(e, g, k) {
    if (e.isNull()) {
      return k();
    }
    if (e.isStream()) {
      return this.emit("error", new c("json2html", "Streaming not supported")), k();
    }
    const p = "." + e.stem.split(".").pop();
    if (".json" === e.extname && [".html", ".htm", ".xhtml", ".php"].indexOf(p)) {
      try {
        const m = JSON.parse(e.contents.toString(g));
        if (I(m)) {
          const G = Z(m, a, d, b, f);
          e.stem = e.stem.substr(0, e.stem.length - p.length);
          e.extname = p;
          e.contents = Buffer.from(G);
        }
      } catch (m) {
        this.emit("error", new c("json2html", m));
      }
    }
    k(null, e);
  });
};

