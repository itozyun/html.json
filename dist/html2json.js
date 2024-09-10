var w = {CAPTION:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, 
AUDIO:!0, MAP:!0, AREA:!0, MATH:!0, SVG:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DD:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, 
DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, MATH:!0, SVG:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DT:{ADDRESS:!0, 
P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, MATH:!0, SVG:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, 
KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, P:{A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, MATH:!0, SVG:!0, LABEL:!0, INPUT:!0, BUTTON:!0, 
SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, HTML:{HEAD:!0, BODY:!0}, HEAD:{TITLE:!0, BASE:!0, BGSOUND:!0, LINK:!0, META:!0, STYLE:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLETE:!0}, COLGROUP:{COL:!0}, OPTGROUP:{OPTION:!0}, OPTION:{}, TBODY:{TR:!0}, TR:{TH:!0, TD:!0}, RBC:{RB:!0, RP:!0, RT:!0}};
w.LI = w.TD = w.DD;
w.TH = w.DT;
w.RB = w.RP = w.RT = w.P;
w.TFOOT = w.THEAD = w.TBODY;
w.RTC = w.RBC;
function aa(a, b) {
  var d = 0;
  function n() {
    d && (y(b, p(a.substring(0, d))), a = a.substring(d), d = 0);
  }
  function p(v) {
    return v.split("&lt;").join("<").split("&gt;").join(">").split("&amp;").join("&");
  }
  function I(v, A, B) {
    for (var t = 0, x = B.length, u = 2, l, F, r; u < x && 3 !== t;) {
      F = B.charAt(u);
      switch(t) {
        case 0:
          C[F] & 3 && (t = 1, r = u);
          break;
        case 1:
          C[F] & 4 ? t = 2 : ">" === F && (t = 3);
          1 !== t && (l = B.substring(r, u));
          break;
        case 2:
          ">" === F && (t = 3);
      }
      ++u;
    }
    return 3 === t ? (G(v, A, z ? l : l.toUpperCase(), !1), u) : 0;
  }
  function G(v, A, B, t) {
    var x = 0, u = v.length;
    if (B) {
      for (x = u; 0 <= x && v[--x] !== B;) {
      }
    }
    if (0 <= x) {
      for (; x < u;) {
        ba(A, v[--u], t && !w[v[u]], !1), z && ca[v[u]] && (z = !!A.ca);
      }
      v.length = x;
    } else {
      ba(A, B, !1, !0);
    }
  }
  function P(v, A, B, t) {
    function x(Q, U) {
      R[Q] = da[Q.toLowerCase()] ? z ? p(U || Q) : !0 : p(U || "");
      ++c;
    }
    function u() {
      (h = "/>" === t.substr(r, 2)) && ++r;
      return h;
    }
    for (var l = 0, F = t.length, r = 1, R = {}, c = 0, h = !1, m, g, f, D, e, L; r < F && 9 > l;) {
      g = t.charAt(r);
      switch(l) {
        case 0:
          C[g] & 3 && (l = 1, f = r);
          break;
        case 1:
          if (C[g] & 4) {
            l = 2, m = t.substring(f, r);
          } else if (">" === g || u()) {
            l = 9, m = t.substring(f, r);
          }
          break;
        case 2:
          if (":" === g) {
            l = 3, f = r;
          } else if (C[g] & 3) {
            l = 4, f = r;
          } else if (">" === g || u()) {
            l = 9;
          }
          break;
        case 3:
          l = C[g] & 3 ? 4 : 9;
          break;
        case 4:
          if ("=" === g) {
            l = 6, D = t.substring(f, r);
          } else if (C[g] & 4) {
            l = 5, D = t.substring(f, r);
          } else if (">" === g || u()) {
            l = 9, x(t.substring(f, r));
          }
          break;
        case 5:
          if (":" === g) {
            l = 3, x(D), f = r;
          } else if (C[g] & 3) {
            l = 4, x(D), f = r;
          } else if ("=" === g) {
            l = 6;
          } else if (">" === g || u()) {
            l = 9, x(D);
          }
          break;
        case 6:
          '"' === g || "'" === g ? (l = 7, e = g, f = r + 1) : C[g] & 4 || (l = 8, f = r);
          L = !1;
          break;
        case 7:
          L || g !== e || (l = 2, x(D, t.substring(f, r)));
          L = "\\" === g && !L;
          break;
        case 8:
          C[g] & 4 ? l = 2 : ">" === g ? l = 9 : !ea[D] && u() && (l = 9), 8 !== l && x(D, t.substring(f, r));
      }
      ++r;
    }
    if (9 === l) {
      l = m.toUpperCase();
      z ||= !!ca[m];
      if (!z) {
        for (; A;) {
          if (w[A] && !w[A][l]) {
            G(v, B, A, !1), A = v[v.length - 1];
          } else {
            break;
          }
        }
      }
      (h = h || !!fa[l]) || (v[v.length] = z ? m : l);
      ha(B, z ? m : l, c ? R : null, h);
      return r;
    }
    return 0;
  }
  for (var E = [], z = !!b.ca, M = a.length - d, k, N; a;) {
    (k = N = E[E.length - 1]) && z && (N = k.toUpperCase());
    if (ia[N]) {
      if ("PLAINTEXT" === N) {
        y(b, p(a)), a = "";
      } else {
        if (k = a.toUpperCase().indexOf("</" + N), 0 <= k) {
          if (d = k, n(), k = I(E, b, a)) {
            a = a.substring(k);
          } else {
            throw a;
          }
        } else {
          throw a;
        }
      }
    } else if (a.indexOf("<!DOCTYPE ") === d) {
      if (n(), k = a.indexOf(">"), -1 !== k) {
        ja(b, a.substring(10, k)), a = a.substring(k + 1);
      } else {
        throw a;
      }
    } else if (a.indexOf("<?") === d) {
      if (n(), k = a.indexOf("?>"), -1 !== k) {
        ka(b, p(a.substring(2, k))), a = a.substring(k + 2);
      } else {
        throw a;
      }
    } else if (a.indexOf("<![CDATA[") === d) {
      if (n(), k = a.indexOf("]]\x3e"), -1 !== k) {
        la(b, p(a.substring(9, k))), a = a.substring(k + 3);
      } else {
        throw a;
      }
    } else if (a.indexOf("\x3c!--") === d) {
      if (n(), k = a.indexOf("--\x3e"), -1 !== k) {
        ma(b, p(a.substring(4, k))), a = a.substring(k + 3);
      } else {
        throw a;
      }
    } else if (a.indexOf("</") === d) {
      if (n(), k = I(E, b, a)) {
        a = a.substring(k);
      } else {
        throw a;
      }
    } else if ("<" === a.charAt(d) && C[a.charAt(d + 1)] & 3) {
      if (n(), k = P(E, k, b, a)) {
        a = a.substring(k);
      } else {
        throw a;
      }
    } else {
      k = a.indexOf("<", d), -1 === k ? (y(b, p(a)), a = "") : d < k ? d = k : ++d;
    }
    k = a.length - d;
    if (k === M) {
      throw a;
    }
    M = k;
  }
  n();
  G(E, b, "", !0);
}
var ca = {xml:!0, svg:!0, math:!0}, fa = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, ga:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0}, ia = {SCRIPT:!0, STYLE:!0, PLAINTEXT:!0, XMP:!0, TEXTAREA:!0}, ea = {action:!0, archive:!0, background:!0, cite:!0, classid:!0, codebase:!0, data:!0, href:!0, longdesc:!0, profile:!0, src:!0, usemap:!0}, da = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, 
ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, C = {a:2, b:2, c:2, d:2, e:2, f:2, g:2, h:2, i:2, j:2, k:2, l:2, m:2, n:2, o:2, p:2, q:2, r:2, s:2, t:2, u:2, v:2, w:2, x:2, y:2, z:2, A:1, B:1, C:1, D:1, E:1, F:1, G:1, H:1, I:1, J:1, K:1, L:1, M:1, N:1, O:1, P:1, Q:1, R:1, S:1, T:1, U:1, V:1, W:1, X:1, Y:1, Z:1, "\b":4, "\f":4, "\n":4, "\r":4, "\t":4, " ":4};
var na = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0};
function J(a) {
  return a === +a;
}
function K(a) {
  return a === "" + +a && J(parseInt(a, 10));
}
function oa(a) {
  if ("" + a === a || J(a)) {
    a = 3;
  } else {
    if (a && a.pop === [].pop) {
      var b = a[0];
      a = "" + b === b ? 1 : J(a[0]) ? a[0] : -1;
    } else {
      a = -1;
    }
  }
  return a;
}
function pa(a) {
  return !(a && a.pop === [].pop) && !(!a || "object" !== typeof a);
}
function qa(a) {
  var b = a[0];
  var d = J(b) ? 2 : 1;
  d = 1 === oa(a) || 17 === b ? pa(a[d]) ? d + 1 : d : 11 === b ? 1 : 9 === b || 13 === b || 16 === b ? 2 : Infinity;
  b = "";
  var n;
  if (d < a.length) {
    for (n = d; n < a.length;) {
      d = a[n];
      var p = oa(d);
      3 === p ? (b = "" + d === d || J(d) ? b + d : b + d[1], a.splice(n, 1)) : (b && (a.splice(n, 0, K(b) ? +b : b), b = ""), ++n, 1 !== p && 17 !== p || qa(d));
    }
    b && (a[n] = K(b) ? +b : b);
  }
}
;function O(a, b, d, n, p) {
  this.ba = a;
  this.$ = d;
  a && (a.aa || (a.aa = []), a = a.aa, 0 <= b && b < a.length ? a.splice(b, 0, this) : a.push(this));
  switch(d) {
    case 1:
    case 17:
      this.ea = p || null;
    case 18:
      this.ca = n;
      break;
    case 3:
    case 8:
    case 9:
    case 4:
    case 7:
      this.fa = n;
  }
}
O.prototype.close = function() {
  this.$ = 1;
};
function S(a) {
  switch(a.$) {
    case 3:
    case 4:
    case 7:
    case 8:
    case 9:
      return a.fa;
  }
}
function T(a, b) {
  switch(a.$) {
    case 3:
    case 4:
    case 7:
    case 8:
    case 9:
      a.fa = b;
  }
}
function V(a) {
  return a.aa && a.aa.length;
}
function W(a, b) {
  return a.aa && a.aa[b] || null;
}
O.prototype.remove = function() {
  var a = this.ba ? this.ba.aa.indexOf(this) : -1;
  0 <= a && (this.ba.aa.splice(a, 1), this.ba = null);
};
function X(a, b, d, n) {
  return new O(a, V(a), b, d, n);
}
;function Y(a, b) {
  b = new ra(b);
  aa(a, b);
  return b.aa;
}
function ra(a) {
  this.ba = a;
  this.$ = this.aa = new O(null, 0, 11);
}
function ja(a, b) {
  a.aa.$ = 9;
  T(a.aa, b);
}
function ha(a, b, d, n) {
  n ? (a = a.$, new O(a, V(a), 1, b, d)) : a.$ = X(a.$, 17, b, d);
}
function ba(a, b, d, n) {
  if (n) {
    a.ba && X(a.$, 18, b);
  } else if (!d || !a.ba) {
    if (b === a.$.ca) {
      a.$.close(), a.$ = a.$.ba;
    } else {
      throw "End tag error! " + b;
    }
  }
}
function y(a, b) {
  X(a.$, 3, b);
}
function ma(a, b) {
  X(a.$, 8, b);
}
function la(a, b) {
  X(a.$, 4, b);
}
function ka(a, b) {
  X(a.$, 7, b);
}
;const sa = {script:!0, style:!0, textarea:!0};
function Z(a, b, d) {
  function n(c, h, m, g) {
    var f;
    switch(c.$) {
      case 1:
      case 17:
        var D = {};
        g = c.ca.toLowerCase();
        var e = "pre" === g;
        var L = pa(c.ea) ? c.ea : null, Q = 0, U = "";
        if (L) {
          for (f in L) {
            var H = na[f] ? 1 : L[f];
            if ("id" === f) {
              g += "#" + H;
            } else if ("class" === f) {
              U = "." + H;
            } else {
              if (f.startsWith(l)) {
                var q = p(H);
                q.da ? (H = [q.name], N.apply(H, q.da)) : H = q.name;
              } else {
                K(H) && (H = +H);
              }
              D[f] = H;
              ++Q;
            }
          }
        }
        g += U;
        if (e && v) {
          for (; f = G(c);) {
            if (E(S(f))) {
              T(f, z(S(f), "\n"));
              break;
            } else {
              f.remove();
            }
          }
          for (; f = P(c);) {
            if (E(S(f))) {
              T(f, M(S(f), "\n"));
              break;
            } else {
              f.remove();
            }
          }
        }
        f = Q ? [g, D] : [g];
        for (q = 0; q < V(c); ++q) {
          n(W(c, q), f, e || m, sa[g]);
        }
        h.push(f);
        17 !== c.$ || f.unshift(17);
        break;
      case 18:
        h.push([18, c.ca.toLowerCase()]);
        break;
      case 3:
        e = S(c);
        if (!m && v) {
          if (g) {
            e = M(z(e, "\n"), "\n");
          } else {
            e = e.split("\r\n").join("\n");
            B && (e = e.replace(/([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])\s([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])/g, "$1$2"));
            for (e = e.split("\t").join(" "); 0 <= e.indexOf("\n\n");) {
              e = e.split("\n\n").join("\n");
            }
            A && (q = "\n" === e.charAt(0) && /\n[ ]*$/.test(e));
            e = M(e, "\n");
            for (e = e.split("\n").join(" "); 0 <= e.indexOf("  ");) {
              e = e.split("  ").join(" ");
            }
            q && (e = M(z(e, " "), " "));
            e = e.split("\\u0020").join(" ").split("&#x20;").join(" ").split("&#32;").join(" ");
          }
        }
        e && h.push(K(e) ? +e : e);
        break;
      case 4:
        e = S(c);
        t && h.push([4, K(e) ? +e : e]);
        break;
      case 7:
        e = S(c);
        q = p(e);
        f = [7, q.name];
        q.da && N.apply(f, q.da);
        h.push(f);
        break;
      case 8:
        e = S(c);
        if (e.startsWith("[if") && 0 < e.indexOf("<![endif]")) {
          c = Y(I(e, ">", "<![endif]", !0), !0);
          f = [13, I(e, "[", "]", !1)];
          for (q = 0; q < V(c); ++q) {
            n(W(c, q), f, m, g);
          }
          (2 < f.length || u) && h.push(f);
        } else if (e.startsWith("{") && 2 < e.indexOf("};")) {
          c = Y(e.substring(e.indexOf("};") + 2), !0);
          f = [16, I(e, "{", "};", !1)];
          for (q = 0; q < V(c); ++q) {
            n(W(c, q), f, m, g);
          }
          (2 < f.length || u) && h.push(f);
        } else {
          e.startsWith("[if") && 0 < e.indexOf("><!") ? (h.push([14, I(e, "[", "]", !1)]), R = !0) : "<![endif]" === e && R ? (m = h[h.length - 1], u || !m || 14 !== m[0] ? h.push([15]) : m && h.pop(), R = !1) : x && h.push([8, K(e) ? +e : e]);
        }
        break;
      case 9:
        e = S(c);
        v && (e = e.split("\n").join(" ").split("  ").join(" "));
        f = [9, e];
        h.push(f);
        for (q = 0; q < V(c); ++q) {
          n(W(c, q), f, !1, !1);
        }
        break;
      case 11:
        for (f = [11], h.push(f), q = 0; q < V(c); ++q) {
          n(W(c, q), f, m, g);
        }
    }
  }
  function p(c) {
    var h = c.indexOf(F), m = M(z(-1 === h ? c : c.substr(0, h), " "), " ");
    c = -1 === h ? [] : JSON.parse("[" + c.substring(h + F.length, c.lastIndexOf(r) - 2) + "]");
    return c.length ? {name:m, da:c} : {name:m};
  }
  function I(c, h, m, g) {
    h = c.indexOf(h) + h.length;
    m = g ? c.lastIndexOf(m) : c.indexOf(m, h);
    return c.substring(h, m);
  }
  function G(c) {
    for (var h = 0, m = V(c), g; h < m; ++h) {
      if (g = W(c, h), 1 !== g.$ && 17 !== g.$ || (g = G(g)), g && 3 === g.$) {
        return g;
      }
    }
  }
  function P(c) {
    for (var h = V(c), m; h;) {
      if (m = W(c, --h), 1 !== m.$ && 17 !== m.$ || (m = P(m)), m && 3 === m.$) {
        return m;
      }
    }
  }
  function E(c) {
    return c.split("\n").join("").split(" ").join("").split("\t").join("");
  }
  function z(c, h) {
    for (; c.charAt(0) === h;) {
      c = c.substr(1);
    }
    return c;
  }
  function M(c, h) {
    for (; c.charAt(c.length - 1) === h;) {
      c = c.substr(0, c.length - 1);
    }
    return c;
  }
  const k = [], N = k.push;
  a = Y(a, b);
  d = d || {};
  const v = -1 === ["none", !1].indexOf(d.trimWhitespace), A = "agressive" === d.trimWhitespace, B = !!d.removeLineBreaksBetweenFullWidth, t = !0 === d.keepCDATASections, x = !0 === d.keepComments, u = !0 === d.keepEmptyConditionalComment, l = d.instructionAttrPrefix || ":";
  d = d.argumentBrackets || "()";
  const F = d.substr(0, d.length / 2), r = d.substr(d.length);
  let R = !1;
  n(a, k, !1, !1);
  qa(k[0]);
  return k[0];
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
Z.NETSCAPE4_COND_CMT_HIDE_LOWER = 16;
Z.ELEMENT_START_TAG = 17;
Z.ELEMENT_END_TAG = 18;
Z.gulp = function(a) {
  const b = require("plugin-error"), d = require("through2"), n = a && "object" === typeof a ? a : {};
  return d(function(p, I, G) {
    if (p.isNull()) {
      return G();
    }
    if (p.isStream()) {
      return this.emit("error", new b("html2json", "Streaming not supported")), G();
    }
    const P = performance.now();
    if (".html" === p.extname || ".htm" === p.extname || ".xhtml" === p.extname || ".php" === p.extname) {
      try {
        p.contents = Buffer.from(JSON.stringify(Z(p.contents.toString(I), !1, a), null, n.prettify ? "    " : "")), console.log(p.path.split(process.cwd())[1].split("\\").join("/"), performance.now() - P), p.extname = ".json", this.push(p);
      } catch (E) {
        this.emit("error", new b("html2json", E));
      }
    } else {
      this.push(p);
    }
    G();
  });
};

