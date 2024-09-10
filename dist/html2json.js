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
    d && (y(c, p(a.substring(0, d))), a = a.substring(d), d = 0);
  }
  function p(v) {
    return v.split("&lt;").join("<").split("&gt;").join(">").split("&amp;").join("&");
  }
  function I(v, B, C) {
    for (var t = 0, x = C.length, u = 2, k, E, b; u < x && 3 !== t;) {
      E = C.charAt(u);
      switch(t) {
        case 0:
          F[E] & 3 && (t = 1, b = u);
          break;
        case 1:
          F[E] & 4 ? t = 2 : ">" === E && (t = 3);
          1 !== t && (k = C.substring(b, u));
          break;
        case 2:
          ">" === E && (t = 3);
      }
      ++u;
    }
    return 3 === t ? (H(v, B, z ? k : k.toUpperCase(), !1), u) : 0;
  }
  function H(v, B, C, t) {
    var x = 0, u = v.length;
    if (C) {
      for (x = u; 0 <= x && v[--x] !== C;) {
      }
    }
    if (0 <= x) {
      for (; x < u;) {
        ba(B, v[--u], t && !w[v[u]], !1), z && ca[v[u]] && (z = !!B.ca);
      }
      v.length = x;
    } else {
      ba(B, C, !1, !0);
    }
  }
  function O(v, B, C, t) {
    function x(A, m) {
      h[A] = da[A.toLowerCase()] ? z ? p(m || A) : !0 : p(m || "");
      ++n;
    }
    function u() {
      (q = "/>" === t.substr(b, 2)) && ++b;
      return q;
    }
    for (var k = 0, E = t.length, b = 1, h = {}, n = 0, q = !1, f, r, e, D, R, L; b < E && 9 > k;) {
      r = t.charAt(b);
      switch(k) {
        case 0:
          F[r] & 3 && (k = 1, e = b);
          break;
        case 1:
          if (F[r] & 4) {
            k = 2, f = t.substring(e, b);
          } else if (">" === r || u()) {
            k = 9, f = t.substring(e, b);
          }
          break;
        case 2:
          if (":" === r) {
            k = 3, e = b;
          } else if (F[r] & 3) {
            k = 4, e = b;
          } else if (">" === r || u()) {
            k = 9;
          }
          break;
        case 3:
          k = F[r] & 3 ? 4 : 9;
          break;
        case 4:
          if ("=" === r) {
            k = 6, D = t.substring(e, b);
          } else if (F[r] & 4) {
            k = 5, D = t.substring(e, b);
          } else if (">" === r || u()) {
            k = 9, x(t.substring(e, b));
          }
          break;
        case 5:
          if (":" === r) {
            k = 3, x(D), e = b;
          } else if (F[r] & 3) {
            k = 4, x(D), e = b;
          } else if ("=" === r) {
            k = 6;
          } else if (">" === r || u()) {
            k = 9, x(D);
          }
          break;
        case 6:
          '"' === r || "'" === r ? (k = 7, R = r, e = b + 1) : F[r] & 4 || (k = 8, e = b);
          L = !1;
          break;
        case 7:
          L || r !== R || (k = 2, x(D, t.substring(e, b)));
          L = "\\" === r && !L;
          break;
        case 8:
          F[r] & 4 ? k = 2 : ">" === r ? k = 9 : !ea[D] && u() && (k = 9), 8 !== k && x(D, t.substring(e, b));
      }
      ++b;
    }
    if (9 === k) {
      k = f.toUpperCase();
      z ||= !!ca[f];
      if (!z) {
        for (; B;) {
          if (w[B] && !w[B][k]) {
            H(v, C, B, !1), B = v[v.length - 1];
          } else {
            break;
          }
        }
      }
      (q = q || !!fa[k]) || (v[v.length] = z ? f : k);
      ha(C, z ? f : k, n ? h : null, q);
      return b;
    }
    return 0;
  }
  for (var G = [], z = !!c.ca, S = a.length - d, g, M; a;) {
    (g = M = G[G.length - 1]) && z && (M = g.toUpperCase());
    if (ia[M]) {
      if ("PLAINTEXT" === M) {
        y(c, p(a)), a = "";
      } else {
        if (g = a.toUpperCase().indexOf("</" + M), 0 <= g) {
          if (d = g, l(), g = I(G, c, a)) {
            a = a.substring(g);
          } else {
            throw a;
          }
        } else {
          throw a;
        }
      }
    } else if (a.indexOf("<!DOCTYPE ") === d) {
      if (l(), g = a.indexOf(">"), -1 !== g) {
        ja(c, a.substring(10, g)), a = a.substring(g + 1);
      } else {
        throw a;
      }
    } else if (a.indexOf("<?") === d) {
      if (l(), g = a.indexOf("?>"), -1 !== g) {
        ka(c, p(a.substring(2, g))), a = a.substring(g + 2);
      } else {
        throw a;
      }
    } else if (a.indexOf("<![CDATA[") === d) {
      if (l(), g = a.indexOf("]]\x3e"), -1 !== g) {
        la(c, p(a.substring(9, g))), a = a.substring(g + 3);
      } else {
        throw a;
      }
    } else if (a.indexOf("\x3c!--") === d) {
      if (l(), g = a.indexOf("--\x3e"), -1 !== g) {
        ma(c, p(a.substring(4, g))), a = a.substring(g + 3);
      } else {
        throw a;
      }
    } else if (a.indexOf("</") === d) {
      if (l(), g = I(G, c, a)) {
        a = a.substring(g);
      } else {
        throw a;
      }
    } else if ("<" === a.charAt(d) && F[a.charAt(d + 1)] & 3) {
      if (l(), g = O(G, g, c, a)) {
        a = a.substring(g);
      } else {
        throw a;
      }
    } else {
      g = a.indexOf("<", d), -1 === g ? (y(c, p(a)), a = "") : d < g ? d = g : ++d;
    }
    g = a.length - d;
    if (g === S) {
      throw a;
    }
    S = g;
  }
  l();
  H(G, c, "", !0);
}
var ca = {xml:!0, svg:!0, math:!0}, fa = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, ga:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0}, ia = {SCRIPT:!0, STYLE:!0, PLAINTEXT:!0, XMP:!0, TEXTAREA:!0}, ea = {action:!0, archive:!0, background:!0, cite:!0, classid:!0, codebase:!0, data:!0, href:!0, longdesc:!0, profile:!0, src:!0, usemap:!0}, da = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, 
ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, F = {a:2, b:2, c:2, d:2, e:2, f:2, g:2, h:2, i:2, j:2, k:2, l:2, m:2, n:2, o:2, p:2, q:2, r:2, s:2, t:2, u:2, v:2, w:2, x:2, y:2, z:2, A:1, B:1, C:1, D:1, E:1, F:1, G:1, H:1, I:1, J:1, K:1, L:1, M:1, N:1, O:1, P:1, Q:1, R:1, S:1, T:1, U:1, V:1, W:1, X:1, Y:1, Z:1, "\b":4, "\f":4, "\n":4, "\r":4, "\t":4, " ":4};
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
      var c = a[0];
      a = "" + c === c ? 1 : J(a[0]) ? a[0] : -1;
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
  var d = J(c) ? 2 : 1;
  d = 1 === oa(a) || 17 === c ? pa(a[d]) ? d + 1 : d : 11 === c ? 1 : 9 === c || 13 === c || 16 === c ? 2 : Infinity;
  c = "";
  var l;
  if (d < a.length) {
    for (l = d; l < a.length;) {
      d = a[l];
      var p = oa(d);
      3 === p ? (c = "" + d === d || J(d) ? c + d : c + d[1], a.splice(l, 1)) : (c && (a.splice(l, 0, K(c) ? +c : c), c = ""), ++l, 1 !== p && 17 !== p || qa(d));
    }
    c && (a[l] = K(c) ? +c : c);
  }
}
function N(a, c) {
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
;function Q(a, c, d, l, p) {
  this.ba = a;
  this.$ = d;
  a && (a.aa || (a.aa = []), a = a.aa, 0 <= c && c < a.length ? a.splice(c, 0, this) : a.push(this));
  switch(d) {
    case 1:
    case 17:
      this.ea = p || null;
    case 18:
      this.ca = l;
      break;
    case 3:
    case 8:
    case 9:
    case 4:
    case 7:
      this.fa = l;
  }
}
function T(a) {
  switch(a.$) {
    case 3:
    case 4:
    case 7:
    case 8:
    case 9:
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
  return new Q(a, V(a), c, d, l);
}
;function Y(a, c) {
  c = new sa(c);
  aa(a, c);
  return c.aa;
}
function sa(a) {
  this.ba = a;
  this.$ = this.aa = new Q(null, 0, 11);
}
function ja(a, c) {
  a.aa.$ = 9;
  U(a.aa, c);
}
function ha(a, c, d, l) {
  l ? (a = a.$, new Q(a, V(a), 1, c, d)) : a.$ = X(a.$, 17, c, d);
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
  function l(b, h, n, q) {
    var f;
    switch(b.$) {
      case 1:
      case 17:
        var r = {};
        q = b.ca.toLowerCase();
        var e = "pre" === q;
        var D = pa(b.ea) ? b.ea : null, R = 0, L = "";
        if (D) {
          for (f in D) {
            var A = na[f] ? 1 : D[f];
            if ("id" === f) {
              q += "#" + A;
            } else if ("class" === f) {
              L = "." + A;
            } else {
              if (f.startsWith(x)) {
                var m = p(A);
                m.da ? (A = [m.name], S.apply(A, m.da)) : A = m.name;
              } else {
                K(A) && (A = +A);
              }
              r[f] = A;
              ++R;
            }
          }
        }
        q += L;
        if (e && g) {
          for (; f = H(b);) {
            if (G(T(f))) {
              U(f, N(T(f), "\n"));
              break;
            } else {
              ra(f);
            }
          }
          for (; f = O(b);) {
            if (G(T(f))) {
              U(f, P(T(f), "\n"));
              break;
            } else {
              ra(f);
            }
          }
        }
        f = R ? [q, r] : [q];
        for (m = 0; m < V(b); ++m) {
          l(W(b, m), f, e || n, ta[q]);
        }
        h.push(f);
        17 !== b.$ || f.unshift(17);
        break;
      case 18:
        h.push([18, b.ca.toLowerCase()]);
        break;
      case 3:
        b = "" + T(b);
        if (!n && g) {
          if (q) {
            b = P(N(b, "\n"), "\n");
          } else {
            b = b.split("\r\n").join("\n");
            v && (b = b.replace(/([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])\s([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])/g, "$1$2"));
            for (b = b.split("\t").join(" "); 0 <= b.indexOf("\n\n");) {
              b = b.split("\n\n").join("\n");
            }
            M && (e = "\n" === b.charAt(0) && /\n[ ]*$/.test(b));
            b = P(b, "\n");
            for (b = b.split("\n").join(" "); 0 <= b.indexOf("  ");) {
              b = b.split("  ").join(" ");
            }
            e && (b = P(N(b, " "), " "));
            b = b.split("\\u0020").join(" ").split("&#x20;").join(" ").split("&#32;").join(" ");
          }
        }
        (e = K(b) ? +b : b) && h.push(e);
        break;
      case 4:
        e = T(b);
        B && h.push([4, K(e) ? +e : e]);
        break;
      case 7:
        e = T(b);
        m = p(e);
        f = [7, m.name];
        m.da && S.apply(f, m.da);
        h.push(f);
        break;
      case 8:
        e = T(b);
        if (e.startsWith("[if") && 0 < e.indexOf("<![endif]")) {
          b = Y(I(e, ">", "<![endif]", !0), !0);
          f = [13, I(e, "[", "]", !1)];
          for (m = 0; m < V(b); ++m) {
            l(W(b, m), f, n, q);
          }
          (2 < f.length || t) && h.push(f);
        } else if (e.startsWith("{") && 2 < e.indexOf("};")) {
          b = Y(e.substring(e.indexOf("};") + 2), !0);
          f = [16, I(e, "{", "};", !1)];
          for (m = 0; m < V(b); ++m) {
            l(W(b, m), f, n, q);
          }
          (2 < f.length || t) && h.push(f);
        } else {
          e.startsWith("[if") && 0 < e.indexOf("><!") ? (h.push([14, I(e, "[", "]", !1)]), E = !0) : "<![endif]" === e && E ? (n = h[h.length - 1], t || !n || 14 !== n[0] ? h.push([15]) : n && h.pop(), E = !1) : C && h.push([8, K(e) ? +e : e]);
        }
        break;
      case 9:
        e = T(b);
        g && (e = e.split("\n").join(" ").split("  ").join(" "));
        f = [9, e];
        h.push(f);
        for (m = 0; m < V(b); ++m) {
          l(W(b, m), f, !1, !1);
        }
        break;
      case 11:
        for (f = [11], h.push(f), m = 0; m < V(b); ++m) {
          l(W(b, m), f, n, q);
        }
    }
  }
  function p(b) {
    var h = b.indexOf(u), n = P(N(-1 === h ? b : b.substr(0, h), " "), " ");
    b = -1 === h ? [] : JSON.parse("[" + b.substring(h + u.length, b.lastIndexOf(k) - 2) + "]");
    return b.length ? {name:n, da:b} : {name:n};
  }
  function I(b, h, n, q) {
    h = b.indexOf(h) + h.length;
    n = q ? b.lastIndexOf(n) : b.indexOf(n, h);
    return b.substring(h, n);
  }
  function H(b) {
    for (var h = 0, n = V(b), q; h < n; ++h) {
      if (q = W(b, h), 1 !== q.$ && 17 !== q.$ || (q = H(q)), q && 3 === q.$) {
        return q;
      }
    }
  }
  function O(b) {
    for (var h = V(b), n; h;) {
      if (n = W(b, --h), 1 !== n.$ && 17 !== n.$ || (n = O(n)), n && 3 === n.$) {
        return n;
      }
    }
  }
  function G(b) {
    return b.split("\n").join("").split(" ").join("").split("\t").join("");
  }
  const z = [], S = z.push;
  a = Y(a, c);
  d = d || {};
  const g = -1 === ["none", !1].indexOf(d.trimWhitespaces), M = "aggressive" === d.trimWhitespaces, v = !!d.removeLineBreaksBetweenFullWidth, B = !0 === d.keepCDATASections, C = !0 === d.keepComments, t = !0 === d.keepEmptyConditionalComment, x = d.instructionAttrPrefix || ":";
  d = d.argumentBrackets || "()";
  const u = d.substr(0, d.length / 2), k = d.substr(d.length);
  let E = !1;
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
  return d(function(p, I, H) {
    if (p.isNull()) {
      return H();
    }
    if (p.isStream()) {
      return this.emit("error", new c("html2json", "Streaming not supported")), H();
    }
    const O = performance.now();
    if (".html" === p.extname || ".htm" === p.extname || ".xhtml" === p.extname || ".php" === p.extname) {
      try {
        p.contents = Buffer.from(JSON.stringify(Z(p.contents.toString(I), !1, a), null, l.prettify ? "    " : "")), console.log(p.path.split(process.cwd())[1].split("\\").join("/"), performance.now() - O), p.extname = ".json", this.push(p);
      } catch (G) {
        this.emit("error", new c("html2json", G));
      }
    } else {
      this.push(p);
    }
    H();
  });
};

