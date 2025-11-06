var aa = {xml:!0, svg:!0, math:!0}, ba = {async:!0, autofocus:!0, checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, draggable:!0, hidden:!0, ismap:!0, loop:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, novalidate:!0, nowrap:!0, readonly:!0, required:!0, reversed:!0, scoped:!0, selected:!0}, ca = {area:!0, base:!0, col:!0, embed:!0, br:!0, hr:!0, img:!0, input:!0, link:!0, meta:!0, source:!0, track:!0, wbr:!0}, da = {script:!0, style:!0, textarea:!0, title:!0}, ea = {textarea:!0, title:!0}, 
x = {caption:{article:!0, section:!0, nav:!0, aside:!0, h1:!0, h2:!0, h3:!0, h4:!0, h5:!0, h6:!0, header:!0, footer:!0, address:!0, p:!0, hr:!0, pre:!0, blockquote:!0, ol:!0, ul:!0, dl:!0, figure:!0, div:!0, a:!0, em:!0, strong:!0, small:!0, s:!0, cite:!0, q:!0, dfn:!0, abbr:!0, data:!0, time:!0, code:!0, "var":!0, samp:!0, kbd:!0, sub:!0, sup:!0, i:!0, b:!0, u:!0, mark:!0, ruby:!0, bdi:!0, bdo:!0, span:!0, br:!0, wbr:!0, ins:!0, del:!0, picture:!0, img:!0, iframe:!0, embed:!0, object:!0, video:!0, 
audio:!0, map:!0, area:!0, math:!0, svg:!0, form:!0, label:!0, input:!0, button:!0, select:!0, datalist:!0, textarea:!0, output:!0, progress:!0, meter:!0, fieldset:!0, details:!0, dialog:!0, script:!0, noscript:!0, template:!0, canvas:!0}, dd:{article:!0, section:!0, nav:!0, aside:!0, h1:!0, h2:!0, h3:!0, h4:!0, h5:!0, h6:!0, header:!0, footer:!0, address:!0, p:!0, hr:!0, pre:!0, blockquote:!0, ol:!0, ul:!0, dl:!0, figure:!0, div:!0, a:!0, em:!0, strong:!0, small:!0, s:!0, cite:!0, q:!0, dfn:!0, 
abbr:!0, data:!0, time:!0, code:!0, "var":!0, samp:!0, kbd:!0, sub:!0, sup:!0, i:!0, b:!0, u:!0, mark:!0, ruby:!0, bdi:!0, bdo:!0, span:!0, br:!0, wbr:!0, ins:!0, del:!0, picture:!0, img:!0, iframe:!0, embed:!0, object:!0, video:!0, audio:!0, map:!0, area:!0, math:!0, svg:!0, table:!0, form:!0, label:!0, input:!0, button:!0, select:!0, datalist:!0, textarea:!0, output:!0, progress:!0, meter:!0, fieldset:!0, details:!0, dialog:!0, script:!0, noscript:!0, template:!0, canvas:!0}, dt:{address:!0, p:!0, 
hr:!0, pre:!0, blockquote:!0, ol:!0, ul:!0, dl:!0, figure:!0, div:!0, a:!0, em:!0, strong:!0, small:!0, s:!0, cite:!0, q:!0, dfn:!0, abbr:!0, data:!0, time:!0, code:!0, "var":!0, samp:!0, kbd:!0, sub:!0, sup:!0, i:!0, b:!0, u:!0, mark:!0, ruby:!0, bdi:!0, bdo:!0, span:!0, br:!0, wbr:!0, ins:!0, del:!0, picture:!0, img:!0, iframe:!0, embed:!0, object:!0, video:!0, audio:!0, map:!0, area:!0, math:!0, svg:!0, table:!0, form:!0, label:!0, input:!0, button:!0, select:!0, datalist:!0, textarea:!0, output:!0, 
progress:!0, meter:!0, fieldset:!0, details:!0, dialog:!0, script:!0, noscript:!0, template:!0, canvas:!0}, p:{a:!0, em:!0, strong:!0, small:!0, s:!0, cite:!0, q:!0, dfn:!0, abbr:!0, data:!0, time:!0, code:!0, "var":!0, samp:!0, kbd:!0, sub:!0, sup:!0, i:!0, b:!0, u:!0, mark:!0, ruby:!0, bdi:!0, bdo:!0, span:!0, br:!0, wbr:!0, ins:!0, del:!0, picture:!0, img:!0, iframe:!0, embed:!0, object:!0, video:!0, audio:!0, map:!0, area:!0, math:!0, svg:!0, label:!0, input:!0, button:!0, select:!0, datalist:!0, 
textarea:!0, output:!0, progress:!0, meter:!0, script:!0, noscript:!0, template:!0, canvas:!0}, html:{head:!0, body:!0}, head:{title:!0, base:!0, link:!0, meta:!0, style:!0, script:!0, noscript:!0, template:!0}, colgroup:{col:!0}, optgroup:{option:!0}, option:{}, tbody:{tr:!0}, tr:{th:!0, td:!0}};
x.li = x.td = x.dd;
x.th = x.dt;
x.rp = x.rt = x.p;
x.tfoot = x.thead = x.tbody;
function A(a) {
  return a.split("&lt;").join("&amp;lt;").split("&gt;").join("&amp;gt;").split("<").join("&lt;").split(">").join("&gt;");
}
;function B(a) {
  return a === "" + a;
}
function F(a) {
  return !!a && "object" === typeof a;
}
function H(a) {
  return !!a && a.constructor === Array;
}
;function fa(a) {
  function d(b) {
    var f = b, c;
    if (H(b)) {
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
;function I(a, d, b) {
  var f = a, c = J(f), e = 0, g = d(a, null, -1, e / 3), k = [-1, a, c];
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
              if (1 <= g && (k[e] += g), J(m) < m.length) {
                e += 3, k[e] = -1, k[e + 1] = f = m, k[e + 2] = c = J(m);
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
      d = O(f), f = d[0];
    case 18:
      this.D = f;
  }
}
var P = null;
function Q(a) {
  return a.l ? P === a ? a.B ? ha : a.F ? R : ia : P.j === a ? ja : ka : la;
}
M.prototype.remove = function() {
  if (R <= Q(this)) {
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
  V(a, 0, [this]);
  return a;
};
function V(a, d, b) {
  var f = a.h = a.h || [], c = f.length, e = b.length;
  for (d = d < c ? d : c; e;) {
    c = b[--e], 11 === c.m ? c.h && c.h.length && V(a, d, c.h) : (c.remove(), f.splice(d, 0, c), c.j = a);
  }
}
var la = 0, ka = 1, ia = 2, R = 3, ha = 4, ja = 5;
var ma = {html:!0, head:!0, body:!0, p:!0, dt:!0, dd:!0, li:!0, option:!0, tbody:!0, thead:!0, tfoot:!0, td:!0, th:!0, tr:!0, rp:!0, rt:!0, optgroup:!0, caption:!0, colgroup:!0}, na = {a:!0, audio:!0, del:!0, ins:!0, map:!0, noscript:!0, video:!0}, oa = {h1:!0, h2:!0, h3:!0, h4:!0, h5:!0, h6:!0, address:!0, blockquote:!0, div:!0, dl:!0, fieldset:!0, form:!0, hr:!0, legend:!0, ul:!0, noscript:!0, ol:!0, p:!0, pre:!0, article:!0, aside:!0, canvas:!0, details:!0, figcaption:!0, figure:!0, footer:!0, 
header:!0, hgroup:!0, main:!0, nav:!0, section:!0};
function W(a) {
  if (B(a) || a === +a) {
    a = 3;
  } else {
    if (H(a)) {
      if (B(a[0])) {
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
function pa(a, d, b) {
  var f = d[1];
  d = d.slice(2);
  var c;
  a && a.constructor === Function ? c = d.length ? a.call(b, f, d) : a.call(b, f) : a[f] && (c = d.length ? a[f].apply(b || a, d) : a[f].call(b || a));
  (c = fa(c)) && H(c[0]) && c.unshift(11);
  return c;
}
function qa(a, d, b) {
  11 === b[0] ? (b.shift(), b.unshift(d, 1), a.splice.apply(a, b)) : a.splice(d, 1, b);
}
function X(a, d, b, f, c) {
  var e;
  if (H(b) && B(b[0])) {
    var g = b[0];
    b = b.slice(1);
    a && a.constructor === Function ? e = b.length ? a.call(c, g, b) : a.call(c, g) : a[g] && (e = b.length ? a[g].apply(c || a, b) : a[g].call(c || a));
  } else {
    B(b) && (a && a.constructor === Function ? e = a.call(c, b) : a[b] && (e = a[b].call(c || a)));
  }
  H(e) && (a = X(a, d, e, f, c), void 0 !== a && (e = a));
  return e;
}
function ra(a, d, b) {
  a = sa(a);
  var f;
  P = a;
  d && (d.h ? d.h.push(a) : d.h = [a]);
  if (H(b)) {
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
      } else if (B(c) && c === a.D && !0 === e(a)) {
        break;
      }
    }
  } else {
    b(a);
  }
  return a;
}
function J(a) {
  var d = a[0], b = W(a);
  return 1 === b || 17 === b ? (d = d === +d ? 2 : 1, a = a[d], !H(a) && F(a) ? d + 1 : d) : 11 === d ? 1 : 9 === d || 13 === d || 16 === d ? 2 : Infinity;
}
function O(a) {
  var d = a.indexOf("#"), b = a.indexOf("."), f = "", c = "";
  d < b ? (f = a.split(".")[1], a = a.split(".")[0], 0 < d && (c = a.split("#")[1], a = a.split("#")[0])) : b < d && (c = a.split("#")[1], a = a.split("#")[0], 0 < b && (f = a.split(".")[1], a = a.split(".")[0]));
  return [a, c, f];
}
function ta(a) {
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
function sa(a) {
  var d, b;
  I(a, function(f, c, e, g) {
    function k(r, y, h) {
      if (d) {
        g < b.length && (b.length = g);
        var q = b[b.length - 1];
        R <= Q(q) ? (q.v = q.v || [], q.v.push([r, y, h]), r = null) : r = new M(q, q.h && q.h.length, r, y);
        J(f) < f.length && (b[g] = r);
      } else {
        d = new M(!0, 0, r, y), b = [d];
      }
    }
    if (B(f) || f === +f) {
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
          B(m) && k(1 === p ? 1 : c, m, f[p]);
      }
    }
    return Infinity;
  });
  return d;
}
;function Y(a, d, b, f, c) {
  9 !== a[0] && 11 !== a[0] && (a = [11, a]);
  var e = [], g = -1;
  ua({h:function(k) {
    e[++g] = k;
  }}, function(k, p) {
    I(a, k, p);
  }, d, b, f, c);
  return e.join("");
}
function ua(a, d, b, f, c, e) {
  function g() {
    var h = "";
    y && (h = "</" + y + ">", y = "");
    return h;
  }
  function k(h, q, w) {
    var t = h.match('"'), D = h.match("'"), u = q ? "'" : '"';
    t && D ? h = q ? u + h.split("'").join("\\'") + u : u + h.split('"').join('\\"') + u : t ? h = "'" + h + "'" : D ? h = q ? u + h.split("'").join("\\'") + u : u + h + u : w || h.match(/[^0-9a-z\.\-]/g) || 72 < h.length ? h = u + h + u : "" === h && (h = u + u);
    return h;
  }
  e = e || {};
  var p = !0 === e.useQuoteAlways, m = !0 === e.useSingleQuote, G = e.instructionAttrPrefix || ":", r = [!1, null, !1, !1, !1], y;
  d(function(h, q, w, t, D, u) {
    function K(Z) {
      l[++v] = g() + (N ? Z : A("" + Z));
    }
    var l = [], v = -1;
    D = !1;
    H(h) && (D = J(h) < h.length);
    var S = r[5 * t], T = r[5 * t + 1], U = r[5 * t + 2], N = r[5 * t + 3];
    T = f ? ra(h, T, f) : null;
    var n = h[0], z = h[1], L = 1, C;
    switch(W(h)) {
      case 9:
        l[++v] = z;
        break;
      case 3:
        H(h) || (z = h);
        K(z);
        break;
      case 4:
        l[++v] = "<![CDATA[" + A("" + z) + "]]\x3e";
        break;
      case 8:
        l[++v] = "\x3c!--" + A("" + z) + "--\x3e";
        break;
      case 13:
        l[++v] = g() + "\x3c!--[" + z + "]>";
        break;
      case 16:
        l[++v] = g() + "\x3c!--{" + z + "};";
        break;
      case 14:
        l[++v] = "\x3c!--[" + z + "]>\x3c!--\x3e";
        break;
      case 15:
        l[++v] = "\x3c!--<![endif]--\x3e";
        break;
      case 7:
        if (b) {
          var E = pa(b, h, u);
          if (u = H(E)) {
            return qa(q, w, E), -1;
          }
          (B(E) || E === +E) && "" !== E && K(E);
        }
        break;
      case 18:
        l[++v] = "</" + z + ">";
        break;
      case 17:
        E = !0;
      case 1:
        n === +n && (n = z, L = 2);
        n = O(n);
        w = n[1];
        z = n[2];
        n = n[0];
        h = h[L];
        "p" !== y || oa[n] ? y = "" : l[++v] = g();
        q = (S = S || !!aa[n]) || 0 < n.indexOf(":");
        U = U || !!na[n];
        L = n;
        N = N || da[L] && !ea[L];
        l[++v] = "<" + n;
        w && (l[++v] = " id=" + k(w, m, q || p));
        z && (l[++v] = " class=" + k(z, m, q || p));
        if (!H(h) && F(h)) {
          for (C in h) {
            if (n = h[C], (w = 0 === C.indexOf(G)) && (C = C.substr(G.length)), "className" === C && (C = "class"), w && b && (n = X(b, C, n, c, u)), null != n && (w = ba[C], !w || !1 !== n)) {
              if (l[++v] = " " + C, !w && !0 !== n) {
                if ("style" === C && F(n)) {
                  if (n = A(ta(n)), !n) {
                    continue;
                  }
                } else {
                  n = A("" + n);
                }
                l[++v] = "=" + k(n, m, q || p);
              }
            }
          }
        }
        !q || D || E ? l[++v] = ">" : l[++v] = " />";
    }
    r[5 * t + 5] = S;
    r[5 * t + 6] = T;
    r[5 * t + 7] = U;
    r[5 * t + 8] = N;
    r[5 * t + 9] = D;
    -1 !== v && a.h(l.join(""));
  }, function(h, q, w, t) {
    q = [];
    w = -1;
    var D = r[5 * t + 5], u = r[5 * t + 7], K = r[5 * t + 9], l = h[0];
    5 * t + 5 < r.length && (r.length = 5 * t + 5);
    switch(W(h)) {
      case 13:
        q[++w] = g() + "<![endif]--\x3e";
        break;
      case 16:
        q[++w] = g() + "--\x3e";
        break;
      case 17:
        y = "";
        break;
      case 1:
        l === +l && (l = h[1]), l = O(l)[0], h = D || 0 < l.indexOf(":"), !K && ca[l] ? y = "" : h && !K || ma[l] && (!u || "p" !== l) ? y = l : (q[++w] = "</" + l + ">", y = "");
    }
    -1 !== w && a.h(q.join(""));
    0 === t && (a = null);
  });
  d = null;
}
;module.exports = Y;
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
Y.gulp = function(a, d, b, f) {
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
        if (H(m)) {
          const G = Y(m, a, d, b, f);
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

