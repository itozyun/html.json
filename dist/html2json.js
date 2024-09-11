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
function aa(a, c) {
  var d = 0;
  function l() {
    d && (y(c, n(a.substring(0, d))), a = a.substring(d), d = 0);
  }
  function n(u) {
    return u.split("&lt;").join("<").split("&gt;").join(">").split("&amp;").join("&");
  }
  function J(u, A, B) {
    for (var p = 0, x = B.length, t = 2, k, D, b; t < x && 3 !== p;) {
      D = B.charAt(t);
      switch(p) {
        case 0:
          E[D] & 3 && (p = 1, b = t);
          break;
        case 1:
          E[D] & 4 ? p = 2 : ">" === D && (p = 3);
          1 !== p && (k = B.substring(b, t));
          break;
        case 2:
          ">" === D && (p = 3);
      }
      ++t;
    }
    return 3 === p ? (H(u, A, z ? k : k.toUpperCase(), !1), t) : 0;
  }
  function H(u, A, B, p) {
    var x = 0, t = u.length;
    if (B) {
      for (x = t; 0 <= x && u[--x] !== B;) {
      }
    }
    if (0 <= x) {
      for (; x < t;) {
        ba(A, u[--t], p && !w[u[t]], !1), z && ca[u[t]] && (z = !!A.ca);
      }
      u.length = x;
    } else {
      ba(A, B, !1, !0);
    }
  }
  function Q(u, A, B, p) {
    function x(g, q) {
      h[g] = da[g.toLowerCase()] ? z ? n(q || g) : !0 : n(q || "");
      ++m;
    }
    function t() {
      (r = "/>" === p.substr(b, 2)) && ++b;
      return r;
    }
    for (var k = 0, D = p.length, b = 1, h = {}, m = 0, r = !1, K, e, v, F, I, C; b < D && 9 > k;) {
      e = p.charAt(b);
      switch(k) {
        case 0:
          E[e] & 3 && (k = 1, v = b);
          break;
        case 1:
          if (E[e] & 4) {
            k = 2, K = p.substring(v, b);
          } else if (">" === e || t()) {
            k = 9, K = p.substring(v, b);
          }
          break;
        case 2:
          if (":" === e) {
            k = 3, v = b;
          } else if (E[e] & 3) {
            k = 4, v = b;
          } else if (">" === e || t()) {
            k = 9;
          }
          break;
        case 3:
          k = E[e] & 3 ? 4 : 9;
          break;
        case 4:
          if ("=" === e) {
            k = 6, F = p.substring(v, b);
          } else if (E[e] & 4) {
            k = 5, F = p.substring(v, b);
          } else if (">" === e || t()) {
            k = 9, x(p.substring(v, b));
          }
          break;
        case 5:
          if (":" === e) {
            k = 3, x(F), v = b;
          } else if (E[e] & 3) {
            k = 4, x(F), v = b;
          } else if ("=" === e) {
            k = 6;
          } else if (">" === e || t()) {
            k = 9, x(F);
          }
          break;
        case 6:
          '"' === e || "'" === e ? (k = 7, I = e, v = b + 1) : E[e] & 4 || (k = 8, v = b);
          C = !1;
          break;
        case 7:
          C || e !== I || (k = 2, x(F, p.substring(v, b)));
          C = "\\" === e && !C;
          break;
        case 8:
          E[e] & 4 ? k = 2 : ">" === e ? k = 9 : !ea[F] && t() && (k = 9), 8 !== k && x(F, p.substring(v, b));
      }
      ++b;
    }
    if (9 === k) {
      k = K.toUpperCase();
      z ||= !!ca[K];
      if (!z) {
        for (; A;) {
          if (w[A] && !w[A][k]) {
            H(u, B, A, !1), A = u[u.length - 1];
          } else {
            break;
          }
        }
      }
      (r = r || !!fa[k]) || (u[u.length] = z ? K : k);
      ha(B, z ? K : k, m ? h : null, r);
      return b;
    }
    return 0;
  }
  for (var G = [], z = !!c.ca, T = a.length - d, f, O; a;) {
    (f = O = G[G.length - 1]) && z && (O = f.toUpperCase());
    if (ia[O]) {
      if ("PLAINTEXT" === O) {
        y(c, n(a)), a = "";
      } else {
        if (f = a.toUpperCase().indexOf("</" + O), 0 <= f) {
          if (d = f, l(), f = J(G, c, a)) {
            a = a.substring(f);
          } else {
            throw a;
          }
        } else {
          throw a;
        }
      }
    } else if (a.indexOf("<!DOCTYPE ") === d) {
      if (l(), f = a.indexOf(">"), -1 !== f) {
        ja(c, a.substring(10, f)), a = a.substring(f + 1);
      } else {
        throw a;
      }
    } else if (a.indexOf("<?") === d) {
      if (l(), f = a.indexOf("?>"), -1 !== f) {
        ka(c, n(a.substring(2, f))), a = a.substring(f + 2);
      } else {
        throw a;
      }
    } else if (a.indexOf("<![CDATA[") === d) {
      if (l(), f = a.indexOf("]]\x3e"), -1 !== f) {
        la(c, n(a.substring(9, f))), a = a.substring(f + 3);
      } else {
        throw a;
      }
    } else if (a.indexOf("\x3c!--") === d) {
      if (l(), f = a.indexOf("--\x3e"), -1 !== f) {
        ma(c, n(a.substring(4, f))), a = a.substring(f + 3);
      } else {
        throw a;
      }
    } else if (a.indexOf("</") === d) {
      if (l(), f = J(G, c, a)) {
        a = a.substring(f);
      } else {
        throw a;
      }
    } else if ("<" === a.charAt(d) && E[a.charAt(d + 1)] & 3) {
      if (l(), f = Q(G, f, c, a)) {
        a = a.substring(f);
      } else {
        throw a;
      }
    } else {
      f = a.indexOf("<", d), -1 === f ? (y(c, n(a)), a = "") : d < f ? d = f : ++d;
    }
    f = a.length - d;
    if (f === T) {
      throw a;
    }
    T = f;
  }
  l();
  H(G, c, "", !0);
}
var ca = {xml:!0, svg:!0, math:!0}, fa = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, ga:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0}, ia = {SCRIPT:!0, STYLE:!0, PLAINTEXT:!0, XMP:!0, TEXTAREA:!0}, ea = {action:!0, archive:!0, background:!0, cite:!0, classid:!0, codebase:!0, data:!0, href:!0, longdesc:!0, profile:!0, src:!0, usemap:!0}, da = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, 
ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, E = {a:2, b:2, c:2, d:2, e:2, f:2, g:2, h:2, i:2, j:2, k:2, l:2, m:2, n:2, o:2, p:2, q:2, r:2, s:2, t:2, u:2, v:2, w:2, x:2, y:2, z:2, A:1, B:1, C:1, D:1, E:1, F:1, G:1, H:1, I:1, J:1, K:1, L:1, M:1, N:1, O:1, P:1, Q:1, R:1, S:1, T:1, U:1, V:1, W:1, X:1, Y:1, Z:1, "\b":4, "\f":4, "\n":4, "\r":4, "\t":4, " ":4};
var na = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0};
function L(a) {
  return a === "" + +a ? +a : a;
}
function oa(a) {
  if ("" + a === a || a === +a) {
    a = 3;
  } else {
    if (a && a.pop === [].pop) {
      var c = a[0];
      "" + c === c ? a = 1 : (c = a[0], a = c === +c ? a[0] : -1);
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
  var c = a[0];
  var d = c === +c ? 2 : 1;
  d = 1 === oa(a) || 17 === c ? pa(a[d]) ? d + 1 : d : 11 === c ? 1 : 9 === c || 13 === c || 16 === c ? 2 : Infinity;
  c = "";
  var l;
  if (d < a.length) {
    for (l = d; l < a.length;) {
      d = a[l];
      var n = oa(d);
      3 === n ? (c = "" + d === d || d === +d ? c + d : c + d[1], a.splice(l, 1)) : (c && (a.splice(l, 0, L(c)), c = ""), ++l, 1 !== n && 17 !== n || qa(d));
    }
    c && (a[l] = L(c));
  }
}
function M(a, c) {
  for (; a.charAt(0) === c;) {
    a = a.substr(1);
  }
  return a;
}
function P(a, c) {
  for (; a.charAt(a.length - 1) === c;) {
    a = a.substr(0, a.length - 1);
  }
  return a;
}
;function R(a, c, d, l, n) {
  this.ba = a;
  this.$ = d;
  a && (a.aa || (a.aa = []), a = a.aa, 0 <= c && c < a.length ? a.splice(c, 0, this) : a.push(this));
  switch(d) {
    case 1:
    case 17:
      this.ea = n || null;
    case 18:
      this.ca = l;
      break;
    case 3:
    case 4:
    case 7:
    case 8:
    case 9:
    case 13:
    case 14:
    case 16:
      this.fa = l;
  }
}
function S(a) {
  switch(a.$) {
    case 3:
    case 4:
    case 7:
    case 8:
    case 9:
    case 13:
    case 14:
    case 16:
      return a.fa;
  }
}
function U(a, c) {
  switch(a.$) {
    case 3:
    case 4:
    case 7:
    case 8:
    case 9:
      a.fa = c;
  }
}
function V(a) {
  return a.aa && a.aa.length;
}
function W(a, c) {
  return a.aa && a.aa[c] || null;
}
function ra(a) {
  var c = a.ba ? a.ba.aa.indexOf(a) : -1;
  0 <= c && (a.ba.aa.splice(c, 1), a.ba = null);
}
function X(a, c, d, l) {
  return new R(a, V(a), c, d, l);
}
;function Y(a, c) {
  c = new sa(c);
  aa(a, c);
  return c.aa;
}
function sa(a) {
  this.ba = a;
  this.$ = this.aa = new R(null, 0, 11);
}
function ja(a, c) {
  a.aa.$ = 9;
  U(a.aa, c);
}
function ha(a, c, d, l) {
  l ? (a = a.$, new R(a, V(a), 1, c, d)) : a.$ = X(a.$, 17, c, d);
}
function ba(a, c, d, l) {
  if (l) {
    a.ba && X(a.$, 18, c);
  } else if (!d || !a.ba) {
    if (c === a.$.ca) {
      a.$.$ = 1, a.$ = a.$.ba;
    } else {
      throw "End tag error! " + c;
    }
  }
}
function y(a, c) {
  X(a.$, 3, c);
}
function ma(a, c) {
  X(a.$, 8, c);
}
function la(a, c) {
  X(a.$, 4, c);
}
function ka(a, c) {
  X(a.$, 7, c);
}
;const ta = {script:!0, style:!0, textarea:!0};
function Z(a, c, d) {
  function l(b, h, m, r) {
    switch(b.$) {
      case 1:
      case 17:
        var K = {};
        var e = b.ca.toLowerCase();
        r = "pre" === e;
        var v = pa(b.ea) ? b.ea : null, F = 0, I;
        if (v) {
          for (I in v) {
            var C = na[I] ? 1 : v[I];
            if ("id" === I) {
              var g = C;
            } else if ("class" === I) {
              var q = C;
            } else {
              if (I.startsWith(x)) {
                var N = n(C);
                N.da ? (C = [N.name], T.apply(C, N.da)) : C = N.name;
              }
              K[I] = L(C);
              ++F;
            }
          }
        }
        g && (e += "#" + g);
        q && (e += "." + q);
        if (r && f) {
          for (; g = H(b);) {
            if (G(S(g))) {
              U(g, M(S(g), "\n"));
              break;
            } else {
              ra(g);
            }
          }
          for (; g = Q(b);) {
            if (G(S(g))) {
              U(g, P(S(g), "\n"));
              break;
            } else {
              ra(g);
            }
          }
        }
        g = F ? [e, K] : [e];
        for (q = 0; q < V(b); ++q) {
          l(W(b, q), g, r || m, ta[e]);
        }
        h.push(g);
        17 !== b.$ || g.unshift(17);
        break;
      case 18:
        h.push([18, b.ca.toLowerCase()]);
        break;
      case 3:
        b = "" + S(b);
        if (!m && f) {
          if (r) {
            b = P(M(b, "\n"), "\n");
          } else {
            b = b.split("\r\n").join("\n");
            u && (b = b.replace(/([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])\s([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])/g, "$1$2"));
            for (b = b.split("\t").join(" "); 0 <= b.indexOf("\n\n");) {
              b = b.split("\n\n").join("\n");
            }
            O && (e = "\n" === b.charAt(0) && /\n[ ]*$/.test(b));
            b = P(b, "\n");
            for (b = b.split("\n").join(" "); 0 <= b.indexOf("  ");) {
              b = b.split("  ").join(" ");
            }
            e && (b = P(M(b, " "), " "));
            b = b.split("\\u0020").join(" ").split("&#x20;").join(" ").split("&#32;").join(" ");
          }
        }
        (e = L(b)) && h.push(e);
        break;
      case 4:
        e = S(b);
        A && h.push([4, L(e)]);
        break;
      case 7:
        e = S(b);
        N = n(e);
        g = [7, N.name];
        N.da && T.apply(g, N.da);
        h.push(g);
        break;
      case 8:
        e = S(b);
        if (e.startsWith("[if") && 0 < e.indexOf("<![endif]")) {
          b = Y(J(e, ">", "<![endif]", !0), !0);
          g = [13, J(e, "[", "]", !1)];
          for (q = 0; q < V(b); ++q) {
            l(W(b, q), g, m, r);
          }
          (2 < g.length || p) && h.push(g);
        } else if (e.startsWith("{") && 2 < e.indexOf("};")) {
          b = Y(e.substring(e.indexOf("};") + 2), !0);
          g = [16, J(e, "{", "};", !1)];
          for (q = 0; q < V(b); ++q) {
            l(W(b, q), g, m, r);
          }
          (2 < g.length || p) && h.push(g);
        } else {
          e.startsWith("[if") && 0 < e.indexOf("><!") ? (h.push([14, J(e, "[", "]", !1)]), D = !0) : "<![endif]" === e && D ? (m = h[h.length - 1], p || !m || 14 !== m[0] ? h.push([15]) : m && h.pop(), D = !1) : B && h.push([8, L(e)]);
        }
        break;
      case 9:
        e = S(b);
        f && (e = e.split("\n").join(" ").split("  ").join(" "));
        g = [9, e];
        h.push(g);
        for (q = 0; q < V(b); ++q) {
          l(W(b, q), g, !1, !1);
        }
        break;
      case 11:
        for (g = [11], h.push(g), q = 0; q < V(b); ++q) {
          l(W(b, q), g, m, r);
        }
    }
  }
  function n(b) {
    var h = b.indexOf(t), m = P(M(-1 === h ? b : b.substr(0, h), " "), " ");
    b = -1 === h ? [] : JSON.parse("[" + b.substring(h + t.length, b.lastIndexOf(k) - 2) + "]");
    return b.length ? {name:m, da:b} : {name:m};
  }
  function J(b, h, m, r) {
    h = b.indexOf(h) + h.length;
    m = r ? b.lastIndexOf(m) : b.indexOf(m, h);
    return b.substring(h, m);
  }
  function H(b) {
    for (var h = 0, m = V(b), r; h < m; ++h) {
      if (r = W(b, h), 1 !== r.$ && 17 !== r.$ || (r = H(r)), r && 3 === r.$) {
        return r;
      }
    }
  }
  function Q(b) {
    for (var h = V(b), m; h;) {
      if (m = W(b, --h), 1 !== m.$ && 17 !== m.$ || (m = Q(m)), m && 3 === m.$) {
        return m;
      }
    }
  }
  function G(b) {
    return b.split("\n").join("").split(" ").join("").split("\t").join("");
  }
  const z = [], T = z.push;
  a = Y(a, c);
  d = d || {};
  const f = -1 === ["none", !1].indexOf(d.trimWhitespaces), O = "aggressive" === d.trimWhitespaces, u = !!d.removeNewlineBetweenFullWidthChars, A = !0 === d.keepCDATASections, B = !0 === d.keepComments, p = !0 === d.keepEmptyConditionalComment, x = d.instructionAttrPrefix || ":";
  d = d.argumentBrackets || "()";
  const t = d.substr(0, d.length / 2), k = d.substr(d.length);
  let D = !1;
  l(a, z, !1, !1);
  qa(z[0]);
  return z[0];
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
  const c = require("plugin-error"), d = require("through2"), l = a && "object" === typeof a ? a : {};
  return d(function(n, J, H) {
    if (n.isNull()) {
      return H();
    }
    if (n.isStream()) {
      return this.emit("error", new c("html2json", "Streaming not supported")), H();
    }
    const Q = performance.now();
    if (".html" === n.extname || ".htm" === n.extname || ".xhtml" === n.extname || ".php" === n.extname) {
      try {
        n.contents = Buffer.from(JSON.stringify(Z(n.contents.toString(J), !1, a), null, l.prettify ? "    " : "")), console.log(n.path.split(process.cwd())[1].split("\\").join("/"), performance.now() - Q), n.extname = ".json", this.push(n);
      } catch (G) {
        this.emit("error", new c("html2json", G));
      }
    } else {
      this.push(n);
    }
    H();
  });
};

