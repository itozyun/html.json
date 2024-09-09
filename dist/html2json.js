var x = {CAPTION:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, 
AUDIO:!0, MAP:!0, AREA:!0, MATH:!0, SVG:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DD:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, 
DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, MATH:!0, SVG:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DT:{ADDRESS:!0, 
P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, MATH:!0, SVG:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, 
KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, P:{A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, MATH:!0, SVG:!0, LABEL:!0, INPUT:!0, BUTTON:!0, 
SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, HTML:{HEAD:!0, BODY:!0}, HEAD:{TITLE:!0, BASE:!0, BGSOUND:!0, LINK:!0, META:!0, STYLE:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLETE:!0}, COLGROUP:{COL:!0}, OPTGROUP:{OPTION:!0}, OPTION:{}, TBODY:{TR:!0}, TR:{TH:!0, TD:!0}, RBC:{RB:!0, RP:!0, RT:!0}};
x.LI = x.TD = x.DD;
x.TH = x.DT;
x.RB = x.RP = x.RT = x.P;
x.TFOOT = x.THEAD = x.TBODY;
x.RTC = x.RBC;
function aa(a, b) {
  var e = 0;
  function m() {
    e && (y(b, p(a.substring(0, e))), a = a.substring(e), e = 0);
  }
  function p(v) {
    return v.split("&lt;").join("<").split("&gt;").join(">").split("&amp;").join("&");
  }
  function H(v, A, B) {
    for (var t = 0, w = B.length, u = 2, l, I, r; u < w && 3 !== t;) {
      I = B.charAt(u);
      switch(t) {
        case 0:
          C[I] & 3 && (t = 1, r = u);
          break;
        case 1:
          C[I] & 4 ? t = 2 : ">" === I && (t = 3);
          1 !== t && (l = B.substring(r, u));
          break;
        case 2:
          ">" === I && (t = 3);
      }
      ++u;
    }
    return 3 === t ? (F(v, A, z ? l : l.toUpperCase(), !1), u) : 0;
  }
  function F(v, A, B, t) {
    var w = 0, u = v.length;
    if (B) {
      for (w = u; 0 <= w && v[--w] !== B;) {
      }
    }
    if (0 <= w) {
      for (; w < u;) {
        ba(A, v[--u], t && !x[v[u]], !1), z && ca[v[u]] && (z = !!A.ca);
      }
      v.length = w;
    } else {
      ba(A, B, !1, !0);
    }
  }
  function P(v, A, B, t) {
    function w(Q, U) {
      R[Q] = da[Q.toLowerCase()] ? z ? p(U || Q) : !0 : p(U || "");
      ++c;
    }
    function u() {
      (h = "/>" === t.substr(r, 2)) && ++r;
      return h;
    }
    for (var l = 0, I = t.length, r = 1, R = {}, c = 0, h = !1, n, g, f, D, d, L; r < I && 9 > l;) {
      g = t.charAt(r);
      switch(l) {
        case 0:
          C[g] & 3 && (l = 1, f = r);
          break;
        case 1:
          if (C[g] & 4) {
            l = 2, n = t.substring(f, r);
          } else if (">" === g || u()) {
            l = 9, n = t.substring(f, r);
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
            l = 9, w(t.substring(f, r));
          }
          break;
        case 5:
          if (":" === g) {
            l = 3, w(D), f = r;
          } else if (C[g] & 3) {
            l = 4, w(D), f = r;
          } else if ("=" === g) {
            l = 6;
          } else if (">" === g || u()) {
            l = 9, w(D);
          }
          break;
        case 6:
          '"' === g || "'" === g ? (l = 7, d = g, f = r + 1) : C[g] & 4 || (l = 8, f = r);
          L = !1;
          break;
        case 7:
          L || g !== d || (l = 2, w(D, t.substring(f, r)));
          L = "\\" === g && !L;
          break;
        case 8:
          C[g] & 4 ? l = 2 : ">" === g ? l = 9 : !ea[D] && u() && (l = 9), 8 !== l && w(D, t.substring(f, r));
      }
      ++r;
    }
    if (9 === l) {
      l = n.toUpperCase();
      z ||= !!ca[n];
      if (!z) {
        for (; A;) {
          if (x[A] && !x[A][l]) {
            F(v, B, A, !1), A = v[v.length - 1];
          } else {
            break;
          }
        }
      }
      (h = h || !!fa[l]) || (v[v.length] = z ? n : l);
      ha(B, z ? n : l, c ? R : null, h);
      return r;
    }
    return 0;
  }
  for (var E = [], z = !!b.ca, M = a.length - e, k, N; a;) {
    (k = N = E[E.length - 1]) && z && (N = k.toUpperCase());
    if (ia[N]) {
      if ("PLAINTEXT" === N) {
        y(b, p(a)), a = "";
      } else {
        if (k = a.toUpperCase().indexOf("</" + N), 0 <= k) {
          if (e = k, m(), k = H(E, b, a)) {
            a = a.substring(k);
          } else {
            throw a;
          }
        } else {
          throw a;
        }
      }
    } else if (a.indexOf("<!DOCTYPE ") === e) {
      if (m(), k = a.indexOf(">"), -1 !== k) {
        ja(b, a.substring(10, k)), a = a.substring(k + 1);
      } else {
        throw a;
      }
    } else if (a.indexOf("<?") === e) {
      if (m(), k = a.indexOf("?>"), -1 !== k) {
        ka(b, p(a.substring(2, k))), a = a.substring(k + 2);
      } else {
        throw a;
      }
    } else if (a.indexOf("<![CDATA[") === e) {
      if (m(), k = a.indexOf("]]\x3e"), -1 !== k) {
        la(b, p(a.substring(9, k))), a = a.substring(k + 3);
      } else {
        throw a;
      }
    } else if (a.indexOf("\x3c!--") === e) {
      if (m(), k = a.indexOf("--\x3e"), -1 !== k) {
        ma(b, p(a.substring(4, k))), a = a.substring(k + 3);
      } else {
        throw a;
      }
    } else if (a.indexOf("</") === e) {
      if (m(), k = H(E, b, a)) {
        a = a.substring(k);
      } else {
        throw a;
      }
    } else if ("<" === a.charAt(e) && C[a.charAt(e + 1)] & 3) {
      if (m(), k = P(E, k, b, a)) {
        a = a.substring(k);
      } else {
        throw a;
      }
    } else {
      k = a.indexOf("<", e), -1 === k ? (y(b, p(a)), a = "") : e < k ? e = k : ++e;
    }
    k = a.length - e;
    if (k === M) {
      throw a;
    }
    M = k;
  }
  m();
  F(E, b, "", !0);
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
  var e = J(b) ? 2 : 1;
  e = 1 === oa(a) || 17 === b ? pa(a[e]) ? e + 1 : e : 11 === b ? 1 : 9 === b || 13 === b || 16 === b ? 2 : Infinity;
  b = "";
  var m;
  if (e < a.length) {
    for (m = e; m < a.length;) {
      e = a[m];
      var p = oa(e);
      3 === p ? (b = "" + e === e || J(e) ? b + e : b + e[1], a.splice(m, 1)) : (b && (a.splice(m, 0, K(b) ? +b : b), b = ""), ++m, 1 !== p && 17 !== p || qa(e));
    }
    b && (a[m] = K(b) ? +b : b);
  }
}
;function O(a, b, e, m, p) {
  this.ba = a;
  this.aa = e;
  a && (a.$ || (a.$ = []), a = a.$, 0 <= b && b < a.length ? a.splice(b, 0, this) : a.push(this));
  switch(e) {
    case 1:
    case 17:
      this.ea = p || null;
    case 18:
      this.ca = m;
      break;
    case 3:
    case 8:
    case 9:
    case 4:
    case 7:
      this.fa = m;
  }
}
function S(a) {
  return 17 === a.aa ? 1 : a.aa;
}
O.prototype.close = function() {
  this.aa = 1;
};
function T(a) {
  switch(a.aa) {
    case 3:
    case 4:
    case 7:
    case 8:
    case 9:
      return a.fa;
  }
}
function V(a, b) {
  switch(a.aa) {
    case 3:
    case 4:
    case 7:
    case 8:
    case 9:
      a.fa = b;
  }
}
function W(a) {
  return a.$ && a.$.length;
}
function X(a, b) {
  return a.$ && a.$[b] || null;
}
O.prototype.remove = function() {
  var a = this.ba ? this.ba.$.indexOf(this) : -1;
  0 <= a && (this.ba.$.splice(a, 1), this.ba = null);
};
function Y(a, b, e, m) {
  return new O(a, W(a), b, e, m);
}
;function ra(a, b) {
  b = new sa(b);
  aa(a, b);
  return b.aa;
}
function sa(a) {
  this.ba = a;
  this.$ = this.aa = new O(null, 0, 11);
}
function ja(a, b) {
  a.aa.aa = 9;
  V(a.aa, b);
}
function ha(a, b, e, m) {
  m ? (a = a.$, new O(a, W(a), 1, b, e)) : a.$ = Y(a.$, 17, b, e);
}
function ba(a, b, e, m) {
  if (m) {
    a.ba && Y(a.$, 18, b);
  } else if (!e || !a.ba) {
    if (b === a.$.ca) {
      a.$.close(), a.$ = a.$.ba;
    } else {
      throw "End tag error! " + b;
    }
  }
}
function y(a, b) {
  Y(a.$, 3, b);
}
function ma(a, b) {
  Y(a.$, 8, b);
}
function la(a, b) {
  Y(a.$, 4, b);
}
function ka(a, b) {
  Y(a.$, 7, b);
}
;const ta = {script:!0, style:!0, textarea:!0};
function Z(a, b, e) {
  function m(c, h, n, g) {
    var f;
    switch(S(c)) {
      case 1:
      case 17:
        var D = {};
        g = c.ca.toLowerCase();
        var d = "pre" === g;
        var L = pa(c.ea) ? c.ea : null, Q = 0, U = "";
        if (L) {
          for (f in L) {
            var G = na[f] ? 1 : L[f];
            if ("id" === f) {
              g += "#" + G;
            } else if ("class" === f) {
              U = "." + G;
            } else {
              if (f.startsWith(I)) {
                var q = p(G);
                q.da ? (G = [q.name], N.apply(G, q.da)) : G = q.name;
              } else {
                K(G) && (G = +G);
              }
              D[f] = G;
              ++Q;
            }
          }
        }
        g += U;
        if (d && v) {
          for (; f = F(c);) {
            if (E(T(f))) {
              V(f, z(T(f), "\n"));
              break;
            } else {
              f.remove();
            }
          }
          for (; f = P(c);) {
            if (E(T(f))) {
              V(f, M(T(f), "\n"));
              break;
            } else {
              f.remove();
            }
          }
        }
        f = Q ? [g, D] : [g];
        for (q = 0; q < W(c); ++q) {
          m(X(c, q), f, d || n, ta[g]);
        }
        h.push(f);
        17 !== c.aa || f.unshift(17);
        break;
      case 18:
        h.push([18, c.ca.toLowerCase()]);
        break;
      case 3:
        d = T(c);
        if (!n && v) {
          if (g) {
            d = M(z(d, "\n"), "\n");
          } else {
            d = d.split("\r\n").join("\n");
            r && (d = d.replace(/([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])\s([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])/g, "$1$2"));
            for (d = d.split("\t").join(" "); 0 <= d.indexOf("\n\n");) {
              d = d.split("\n\n").join("\n");
            }
            d = M(d, "\n");
            A && (q = "\n" === d.charAt(0) && /\n[ ]*$/.test(d));
            for (d = d.split("\n").join(" "); 0 <= d.indexOf("  ");) {
              d = d.split("  ").join(" ");
            }
            q && (d = M(z(d, " "), " "));
            d = d.split("\\u0020").join(" ").split("&#x20;").join(" ");
          }
        }
        d && h.push(K(d) ? +d : d);
        break;
      case 4:
        d = T(c);
        B && h.push([4, K(d) ? +d : d]);
        break;
      case 7:
        d = T(c);
        q = p(d);
        f = [7, q.name];
        q.da && N.apply(f, q.da);
        h.push(f);
        break;
      case 8:
        d = T(c);
        if (d.startsWith("[if") && 0 < d.indexOf("<![endif]")) {
          c = ra(H(d, ">", "<![endif]", !0), !0);
          f = [13, H(d, "[", "]", !1)];
          for (q = 0; q < W(c); ++q) {
            m(X(c, q), f, n, g);
          }
          (2 < f.length || w) && h.push(f);
        } else if (d.startsWith("{") && 2 < d.indexOf("};")) {
          c = ra(d.substring(d.indexOf("};") + 2), !0);
          f = [16, H(d, "{", "};", !1)];
          for (q = 0; q < W(c); ++q) {
            m(X(c, q), f, n, g);
          }
          (2 < f.length || w) && h.push(f);
        } else {
          d.startsWith("[if") && 0 < d.indexOf("><!") ? (h.push([14, H(d, "[", "]", !1)]), R = !0) : "<![endif]" === d && R ? (n = h[h.length - 1], w || !n || 14 !== n[0] ? h.push([15]) : n && h.pop(), R = !1) : t && h.push([8, K(d) ? +d : d]);
        }
        break;
      case 9:
        d = T(c);
        v && (d = d.split("\n").join(" ").split("  ").join(" "));
        f = [9, d];
        h.push(f);
        for (q = 0; q < W(c); ++q) {
          m(X(c, q), f, !1, !1);
        }
        break;
      case 11:
        for (f = [11], h.push(f), q = 0; q < W(c); ++q) {
          m(X(c, q), f, n, g);
        }
    }
  }
  function p(c) {
    var h = c.indexOf(u), n = M(z(-1 === h ? c : c.substr(0, h), " "), " ");
    c = -1 === h ? [] : JSON.parse("[" + c.substring(h + u.length, c.lastIndexOf(l) - 2) + "]");
    return c.length ? {name:n, da:c} : {name:n};
  }
  function H(c, h, n, g) {
    h = c.indexOf(h) + h.length;
    n = g ? c.lastIndexOf(n) : c.indexOf(n, h);
    return c.substring(h, n);
  }
  function F(c) {
    for (var h = 0, n = W(c), g; h < n; ++h) {
      if (g = X(c, h), 1 === S(g) && (g = F(g)), g && 3 === S(g)) {
        return g;
      }
    }
  }
  function P(c) {
    for (var h = W(c), n; h;) {
      if (n = X(c, --h), 1 === S(n) && (n = P(n)), n && 3 === S(n)) {
        return n;
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
  a = ra(a, b);
  e = e || {};
  const v = -1 === ["none", !1].indexOf(e.trimWhitespace), A = "agressive" === e.trimWhitespace, B = !!e.keepCDATASections, t = !!e.keepComments, w = !!e.keepEmptyConditionalComment;
  b = e.argumentBrackets || "()";
  const u = b.substr(0, b.length / 2), l = b.substr(b.length), I = e.instructionAttrPrefix || ":", r = !!e.removeLineBreaksBetweenFullWidth;
  let R = !1;
  m(a, k, !1, !1);
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
  const b = require("plugin-error"), e = require("through2"), m = a && "object" === typeof a ? a : {};
  return e(function(p, H, F) {
    if (p.isNull()) {
      return F();
    }
    if (p.isStream()) {
      return this.emit("error", new b("html2json", "Streaming not supported")), F();
    }
    const P = performance.now();
    if (".html" === p.extname || ".htm" === p.extname || ".xhtml" === p.extname || ".php" === p.extname) {
      try {
        p.contents = Buffer.from(JSON.stringify(Z(p.contents.toString(H), !1, a), null, m.prettify ? "    " : "")), console.log(p.path.split(process.cwd())[1].split("\\").join("/"), performance.now() - P), p.extname = ".json", this.push(p);
      } catch (E) {
        this.emit("error", new b("html2json", E));
      }
    } else {
      this.push(p);
    }
    F();
  });
};

