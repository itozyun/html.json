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
    d && (z(c, k(a.substring(0, d))), a = a.substring(d), d = 0);
  }
  function k(v) {
    return v.split("&lt;").join("<").split("&gt;").join(">").split("&amp;").join("&");
  }
  function x(v, B, D) {
    for (var q = 1, y = D.length, u = 3, m, G; u < y && 3 !== q;) {
      G = D.charAt(u);
      switch(q) {
        case 1:
          K[G] & 4 ? q = 2 : ">" === G && (q = 3);
          1 !== q && (m = D.substring(2, u));
          break;
        case 2:
          ">" === G && (q = 3);
      }
      ++u;
    }
    return 3 === q ? (H(v, B, A ? m : m.toUpperCase(), !1), u) : 0;
  }
  function H(v, B, D, q) {
    var y = 0, u = v.length;
    if (D) {
      for (y = u; 0 <= y && v[--y] !== D;) {
      }
    }
    if (0 <= y) {
      for (; y < u;) {
        ba(B, v[--u], q && !w[v[u]], !1), A && ca[v[u]] && (A = !!B.ca);
      }
      v.length = y;
    } else {
      ba(B, D, !1, !0);
    }
  }
  function Q(v, B, D, q) {
    function y(g, p) {
      h[g] = !0 === p ? !0 : da[g.toLowerCase()] ? A ? k(p || g) : !0 : k(p || "");
      ++n;
    }
    function u() {
      (r = "/>" === q.substr(b, 2)) && ++b;
      return r;
    }
    for (var m = 1, G = q.length, b = 2, h = {}, n = 0, r = !1, t, e, C, I, J, E; b < G && 9 > m;) {
      t = q.charAt(b);
      switch(m) {
        case 1:
          if (K[t] & 4) {
            m = 2, e = q.substring(1, b);
          } else if (">" === t || u()) {
            m = 9, e = q.substring(1, b);
          }
          break;
        case 2:
          ">" === t || u() ? m = 9 : K[t] & 4 || (m = 3, C = b);
          break;
        case 3:
          if ("=" === t) {
            m = 5, I = q.substring(C, b);
          } else if (K[t] & 4) {
            m = 4, I = q.substring(C, b);
          } else if (">" === t || u()) {
            m = 9, y(q.substring(C, b), !0);
          }
          break;
        case 4:
          "=" === t ? m = 5 : ">" === t || u() ? (m = 9, y(I, !0)) : K[t] & 4 || (m = 3, y(I, !0), C = b);
          break;
        case 5:
          '"' === t || "'" === t ? (m = 6, J = t, C = b + 1) : K[t] & 4 || (m = 7, C = b);
          E = !1;
          break;
        case 6:
          E || t !== J || (m = 2, y(I, q.substring(C, b)));
          E = "\\" === t && !E;
          break;
        case 7:
          K[t] & 4 ? m = 2 : ">" === t ? m = 9 : !ea[I] && u() && (m = 9), 7 !== m && y(I, q.substring(C, b));
      }
      ++b;
    }
    if (9 === m) {
      m = e.toUpperCase();
      A ||= !!ca[e];
      if (!A) {
        for (; B;) {
          if (w[B] && !w[B][m]) {
            H(v, D, B, !1), B = v[v.length - 1];
          } else {
            break;
          }
        }
      }
      (r = r || !!fa[m]) || (v[v.length] = A ? e : m);
      ha(D, A ? e : m, n ? h : null, r);
      return b;
    }
    return 0;
  }
  for (var F = [], A = !!c.ca, T = a.length - d, f, O; a;) {
    (f = O = F[F.length - 1]) && A && (O = f.toUpperCase());
    if (ia[O]) {
      if ("PLAINTEXT" === O) {
        z(c, k(a)), a = "";
      } else {
        if (f = a.toUpperCase().indexOf("</" + O), 0 <= f) {
          if (d = f, l(), f = x(F, c, a)) {
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
        ka(c, k(a.substring(2, f))), a = a.substring(f + 2);
      } else {
        throw a;
      }
    } else if (a.indexOf("<![CDATA[") === d) {
      if (l(), f = a.indexOf("]]\x3e"), -1 !== f) {
        la(c, k(a.substring(9, f))), a = a.substring(f + 3);
      } else {
        throw a;
      }
    } else if (a.indexOf("\x3c!--") === d) {
      if (l(), f = a.indexOf("--\x3e"), -1 !== f) {
        ma(c, k(a.substring(4, f))), a = a.substring(f + 3);
      } else {
        throw a;
      }
    } else if (a.indexOf("</") === d && K[a.charAt(d + 2)] & 3) {
      if (l(), f = x(F, c, a)) {
        a = a.substring(f);
      } else {
        throw a;
      }
    } else if ("<" === a.charAt(d) && K[a.charAt(d + 1)] & 3) {
      if (l(), f = Q(F, f, c, a)) {
        a = a.substring(f);
      } else {
        throw a;
      }
    } else {
      f = a.indexOf("<", d), -1 === f ? (z(c, k(a)), a = "") : d < f ? d = f : ++d;
    }
    f = a.length - d;
    if (f === T) {
      throw a;
    }
    T = f;
  }
  l();
  H(F, c, "", !0);
}
var ca = {xml:!0, svg:!0, math:!0}, fa = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, ha:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0}, ia = {SCRIPT:!0, STYLE:!0, PLAINTEXT:!0, XMP:!0, TEXTAREA:!0}, ea = {action:!0, archive:!0, background:!0, cite:!0, classid:!0, codebase:!0, data:!0, href:!0, longdesc:!0, profile:!0, src:!0, usemap:!0}, da = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, 
ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, K = {a:2, b:2, c:2, d:2, e:2, f:2, g:2, h:2, i:2, j:2, k:2, l:2, m:2, n:2, o:2, p:2, q:2, r:2, s:2, t:2, u:2, v:2, w:2, x:2, y:2, z:2, A:1, B:1, C:1, D:1, E:1, F:1, G:1, H:1, I:1, J:1, K:1, L:1, M:1, N:1, O:1, P:1, Q:1, R:1, S:1, T:1, U:1, V:1, W:1, X:1, Y:1, Z:1, "\b":4, "\f":4, "\n":4, "\r":4, "\t":4, " ":4};
var na = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, oa = {script:!0, style:!0, textarea:!0};
function L(a) {
  return a === "" + +a && a === a && a !== "" + 1 / 0 && a !== "" + -1 / 0 ? +a : a;
}
function pa(a) {
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
function qa(a) {
  return !(a && a.pop === [].pop) && !(!a || "object" !== typeof a);
}
function ra(a) {
  var c = a[0];
  var d = c === +c ? 2 : 1;
  d = 1 === pa(a) || 17 === c ? qa(a[d]) ? d + 1 : d : 11 === c ? 1 : 9 === c || 13 === c || 16 === c ? 2 : Infinity;
  c = "";
  var l;
  if (d < a.length) {
    for (l = d; l < a.length;) {
      d = a[l];
      var k = pa(d);
      3 === k ? (c = "" + d === d || d === +d ? c + d : c + d[1], a.splice(l, 1)) : (c && (a.splice(l, 0, L(c)), c = ""), ++l, 1 !== k && 17 !== k && 13 !== k && 16 !== k || ra(d));
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
;function R(a, c, d, l, k) {
  if (a === !!a) {
    var x = null;
    this.ca = a;
  } else {
    x = a, this.ca = x.ca;
  }
  this.ba = x;
  this.$ = d;
  x && (x.aa || (x.aa = []), a = x.aa, 0 <= c && c < a.length ? a.splice(c, 0, this) : a.push(this));
  switch(d) {
    case 1:
    case 17:
      this.fa = k || null;
    case 18:
      this.ea = l;
      break;
    case 7:
    case 3:
    case 4:
    case 8:
    case 9:
    case 13:
    case 14:
    case 16:
      this.ga = l;
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
      return a.ga;
  }
}
function U(a, c) {
  switch(a.$) {
    case 3:
    case 4:
    case 7:
    case 8:
    case 9:
      a.ga = c;
  }
}
function V(a) {
  return a.aa && a.aa.length;
}
function W(a, c) {
  return a.aa && a.aa[c] || null;
}
R.prototype.remove = function() {
  var a = this.ba ? this.ba.aa.indexOf(this) : -1;
  0 <= a && (this.ba.aa.splice(a, 1), this.ba = null);
};
function X(a, c, d, l) {
  return a.ca ? null : new R(a, V(a), c, d, l);
}
;function Y(a, c) {
  c = new sa(c);
  aa(a, c);
  return c.aa;
}
function sa(a) {
  this.ba = a;
  this.$ = this.aa = new R(!1, 0, 11);
}
function ja(a, c) {
  a.aa.$ = 9;
  U(a.aa, c);
}
function ha(a, c, d, l) {
  l ? (a = a.$, a.ca || new R(a, V(a), 1, c, d)) : a.$ = X(a.$, 17, c, d);
}
function ba(a, c, d, l) {
  if (l) {
    a.ba && X(a.$, 18, c);
  } else if (!d || !a.ba) {
    if (c === a.$.ea) {
      a.$.$ = 1, a.$ = a.$.ba;
    } else {
      throw "End tag error! " + c;
    }
  }
}
function z(a, c) {
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
;function Z(a, c, d) {
  function l(b, h, n, r) {
    switch(b.$) {
      case 1:
      case 17:
        var t = {};
        var e = b.ea.toLowerCase();
        r = "pre" === e;
        var C = qa(b.fa) ? b.fa : null, I = 0, J;
        if (C) {
          for (J in C) {
            var E = na[J] ? 1 : C[J];
            if ("id" === J) {
              var g = E;
            } else if ("class" === J) {
              var p = E;
            } else {
              if (J.startsWith(y)) {
                var N = k(E);
                N.da ? (E = [N.name], T.apply(E, N.da)) : E = N.name;
              }
              t[J] = L(E);
              ++I;
            }
          }
        }
        g && (e += "#" + g);
        p && (e += "." + p);
        if (r && f) {
          for (; g = H(b);) {
            if (F(S(g))) {
              U(g, M(S(g), "\n"));
              break;
            } else {
              g.remove();
            }
          }
          for (; g = Q(b);) {
            if (F(S(g))) {
              U(g, P(S(g), "\n"));
              break;
            } else {
              g.remove();
            }
          }
        }
        g = I ? [e, t] : [e];
        for (p = 0; p < V(b); ++p) {
          l(W(b, p), g, r || n, !!oa[e]);
        }
        h.push(g);
        17 !== b.$ || g.unshift(17);
        break;
      case 18:
        h.push([18, b.ea.toLowerCase()]);
        break;
      case 3:
        b = "" + S(b);
        if (!n && f) {
          if (r) {
            b = P(M(b, "\n"), "\n");
          } else {
            b = b.split("\r\n").join("\n");
            v && (b = b.replace(/([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])\s([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])/g, "$1$2"));
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
        B && h.push([4, L(e)]);
        break;
      case 7:
        e = S(b);
        N = k(e);
        g = [7, N.name];
        N.da && T.apply(g, N.da);
        h.push(g);
        break;
      case 8:
        e = S(b);
        if (e.startsWith("[if") && 0 < e.indexOf("<![endif]")) {
          b = Y(x(e, ">", "<![endif]", !0), !0);
          g = [13, x(e, "[", "]", !1)];
          for (p = 0; p < V(b); ++p) {
            l(W(b, p), g, n, r);
          }
          (2 < g.length || q) && h.push(g);
        } else if (e.startsWith("{") && 2 < e.indexOf("};")) {
          b = Y(e.substring(e.indexOf("};") + 2), !0);
          g = [16, x(e, "{", "};", !1)];
          for (p = 0; p < V(b); ++p) {
            l(W(b, p), g, n, r);
          }
          (2 < g.length || q) && h.push(g);
        } else {
          e.startsWith("[if") && 0 < e.indexOf("><!") ? (h.push([14, x(e, "[", "]", !1)]), G = !0) : "<![endif]" === e && G ? (n = h[h.length - 1], q || !n || 14 !== n[0] ? h.push([15]) : n && h.pop(), G = !1) : D && h.push([8, L(e)]);
        }
        break;
      case 9:
        e = S(b);
        f && (e = e.split("\n").join(" ").split("  ").join(" "));
        g = [9, e];
        h.push(g);
        for (p = 0; p < V(b); ++p) {
          l(W(b, p), g, !1, !1);
        }
        break;
      case 11:
        for (g = [11], h.push(g), p = 0; p < V(b); ++p) {
          l(W(b, p), g, n, r);
        }
    }
  }
  function k(b) {
    var h = b.indexOf(u), n = P(M(-1 === h ? b : b.substr(0, h), " "), " ");
    b = -1 === h ? [] : JSON.parse("[" + b.substring(h + u.length, b.lastIndexOf(m) - 2) + "]");
    return b.length ? {name:n, da:b} : {name:n};
  }
  function x(b, h, n, r) {
    h = b.indexOf(h) + h.length;
    n = r ? b.lastIndexOf(n) : b.indexOf(n, h);
    return b.substring(h, n);
  }
  function H(b) {
    for (var h = 0, n = V(b), r; h < n; ++h) {
      if (r = W(b, h), 1 !== r.$ && 17 !== r.$ || (r = H(r)), r && 3 === r.$) {
        return r;
      }
    }
  }
  function Q(b) {
    for (var h = V(b), n; h;) {
      if (n = W(b, --h), 1 !== n.$ && 17 !== n.$ || (n = Q(n)), n && 3 === n.$) {
        return n;
      }
    }
  }
  function F(b) {
    return b.split("\n").join("").split(" ").join("").split("\t").join("");
  }
  const A = [], T = A.push;
  a = Y(a, c);
  d = d || {};
  const f = -1 === ["none", !1].indexOf(d.trimWhitespaces), O = "aggressive" === d.trimWhitespaces, v = !!d.removeNewlineBetweenFullWidthChars, B = !0 === d.keepCDATASections, D = !0 === d.keepComments, q = !0 === d.keepEmptyConditionalComment, y = d.instructionAttrPrefix || ":";
  d = d.argumentBrackets || "()";
  const u = d.substr(0, d.length / 2), m = d.substr(d.length);
  let G = !1;
  l(a, A, !1, !1);
  ra(A[0]);
  return A[0];
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
  return d.obj(function(k, x, H) {
    if (k.isNull()) {
      return H();
    }
    if (k.isStream()) {
      return this.emit("error", new c("html2json", "Streaming not supported")), H();
    }
    const Q = performance.now();
    if (".html" === k.extname || ".htm" === k.extname || ".xhtml" === k.extname || ".php" === k.extname) {
      try {
        k.contents = Buffer.from(JSON.stringify(Z(k.contents.toString(x), !1, a), null, l.prettify ? "    " : "")), console.log(k.path.split(process.cwd())[1].split("\\").join("/"), performance.now() - Q | 0), k.stem += k.extname, k.extname = ".json", this.push(k);
      } catch (F) {
        this.emit("error", new c("html2json", F));
      }
    } else {
      this.push(k);
    }
    H();
  });
};

