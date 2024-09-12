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
function aa(a, c) {
  var d = 0;
  function l() {
    d && (A(c, k(a.substring(0, d))), a = a.substring(d), d = 0);
  }
  function k(w) {
    return w.split("&lt;").join("<").split("&gt;").join(">").split("&amp;").join("&");
  }
  function y(w, C, D) {
    for (var q = 0, z = D.length, t = 2, m, u, b; t < z && 3 !== q;) {
      u = D.charAt(t);
      switch(q) {
        case 0:
          J[u] & 3 && (q = 1, b = t);
          break;
        case 1:
          J[u] & 4 ? q = 2 : ">" === u && (q = 3);
          1 !== q && (m = D.substring(b, t));
          break;
        case 2:
          ">" === u && (q = 3);
      }
      ++t;
    }
    return 3 === q ? (G(w, C, B ? m : m.toUpperCase(), !1), t) : 0;
  }
  function G(w, C, D, q) {
    var z = 0, t = w.length;
    if (D) {
      for (z = t; 0 <= z && w[--z] !== D;) {
      }
    }
    if (0 <= z) {
      for (; z < t;) {
        ba(C, w[--t], q && !x[w[t]], !1), B && ca[w[t]] && (B = !!C.ca);
      }
      w.length = z;
    } else {
      ba(C, D, !1, !0);
    }
  }
  function Q(w, C, D, q) {
    function z(h, p) {
      n[h] = !0 === p ? !0 : da[h.toLowerCase()] ? B ? k(p || h) : !0 : k(p || "");
      ++v;
    }
    function t() {
      (M = "/>" === q.substr(e, 2)) && ++e;
      return M;
    }
    for (var m = 1, u = 1, b = q.length, e = 2, n = {}, v = 0, M = !1, f, r, H, I, E; e < b && 9 > m;) {
      r = q.charAt(e);
      switch(m) {
        case 1:
          if (J[r] & 4) {
            m = 2, f = q.substring(u, e);
          } else if (">" === r || t()) {
            m = 9, f = q.substring(u, e);
          }
          break;
        case 2:
          ">" === r || t() ? m = 9 : J[r] & 4 || (m = 3, u = e);
          break;
        case 3:
          if ("=" === r) {
            m = 5, H = q.substring(u, e);
          } else if (J[r] & 4) {
            m = 4, H = q.substring(u, e);
          } else if (">" === r || t()) {
            m = 9, z(q.substring(u, e), !0);
          }
          break;
        case 4:
          "=" === r ? m = 5 : ">" === r || t() ? (m = 9, z(H, !0)) : J[r] & 4 || (m = 3, z(H, !0), u = e);
          break;
        case 5:
          '"' === r || "'" === r ? (m = 6, I = r, u = e + 1) : J[r] & 4 || (m = 7, u = e);
          E = !1;
          break;
        case 6:
          E || r !== I || (m = 2, z(H, q.substring(u, e)));
          E = "\\" === r && !E;
          break;
        case 7:
          J[r] & 4 ? m = 2 : ">" === r ? m = 9 : !ea[H] && t() && (m = 9), 7 !== m && z(H, q.substring(u, e));
      }
      ++e;
    }
    if (9 === m) {
      m = f.toUpperCase();
      B ||= !!ca[f];
      if (!B) {
        for (; C;) {
          if (x[C] && !x[C][m]) {
            G(w, D, C, !1), C = w[w.length - 1];
          } else {
            break;
          }
        }
      }
      (M = M || !!fa[m]) || (w[w.length] = B ? f : m);
      ha(D, B ? f : m, v ? n : null, M);
      return e;
    }
    return 0;
  }
  for (var F = [], B = !!c.ca, T = a.length - d, g, O; a;) {
    (g = O = F[F.length - 1]) && B && (O = g.toUpperCase());
    if (ia[O]) {
      if ("PLAINTEXT" === O) {
        A(c, k(a)), a = "";
      } else {
        if (g = a.toUpperCase().indexOf("</" + O), 0 <= g) {
          if (d = g, l(), g = y(F, c, a)) {
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
        ka(c, k(a.substring(2, g))), a = a.substring(g + 2);
      } else {
        throw a;
      }
    } else if (a.indexOf("<![CDATA[") === d) {
      if (l(), g = a.indexOf("]]\x3e"), -1 !== g) {
        la(c, k(a.substring(9, g))), a = a.substring(g + 3);
      } else {
        throw a;
      }
    } else if (a.indexOf("\x3c!--") === d) {
      if (l(), g = a.indexOf("--\x3e"), -1 !== g) {
        ma(c, k(a.substring(4, g))), a = a.substring(g + 3);
      } else {
        throw a;
      }
    } else if (a.indexOf("</") === d) {
      if (l(), g = y(F, c, a)) {
        a = a.substring(g);
      } else {
        throw a;
      }
    } else if ("<" === a.charAt(d) && J[a.charAt(d + 1)] & 3) {
      if (l(), g = Q(F, g, c, a)) {
        a = a.substring(g);
      } else {
        throw a;
      }
    } else {
      g = a.indexOf("<", d), -1 === g ? (A(c, k(a)), a = "") : d < g ? d = g : ++d;
    }
    g = a.length - d;
    if (g === T) {
      throw a;
    }
    T = g;
  }
  l();
  G(F, c, "", !0);
}
var ca = {xml:!0, svg:!0, math:!0}, fa = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, ha:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0}, ia = {SCRIPT:!0, STYLE:!0, PLAINTEXT:!0, XMP:!0, TEXTAREA:!0}, ea = {action:!0, archive:!0, background:!0, cite:!0, classid:!0, codebase:!0, data:!0, href:!0, longdesc:!0, profile:!0, src:!0, usemap:!0}, da = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, 
ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, J = {a:2, b:2, c:2, d:2, e:2, f:2, g:2, h:2, i:2, j:2, k:2, l:2, m:2, n:2, o:2, p:2, q:2, r:2, s:2, t:2, u:2, v:2, w:2, x:2, y:2, z:2, A:1, B:1, C:1, D:1, E:1, F:1, G:1, H:1, I:1, J:1, K:1, L:1, M:1, N:1, O:1, P:1, Q:1, R:1, S:1, T:1, U:1, V:1, W:1, X:1, Y:1, Z:1, "\b":4, "\f":4, "\n":4, "\r":4, "\t":4, " ":4};
var na = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, oa = {script:!0, style:!0, textarea:!0};
function K(a) {
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
      3 === k ? (c = "" + d === d || d === +d ? c + d : c + d[1], a.splice(l, 1)) : (c && (a.splice(l, 0, K(c)), c = ""), ++l, 1 !== k && 17 !== k && 13 !== k && 16 !== k || ra(d));
    }
    c && (a[l] = K(c));
  }
}
function L(a, c) {
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
    var y = null;
    this.ca = a;
  } else {
    y = a, this.ca = y.ca;
  }
  this.ba = y;
  this.$ = d;
  y && (y.aa || (y.aa = []), a = y.aa, 0 <= c && c < a.length ? a.splice(c, 0, this) : a.push(this));
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
function A(a, c) {
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
  function l(b, e, n, v) {
    switch(b.$) {
      case 1:
      case 17:
        var M = {};
        var f = b.ea.toLowerCase();
        v = "pre" === f;
        var r = qa(b.fa) ? b.fa : null, H = 0, I;
        if (r) {
          for (I in r) {
            var E = na[I] ? 1 : r[I];
            if ("id" === I) {
              var h = E;
            } else if ("class" === I) {
              var p = E;
            } else {
              if (I.startsWith(z)) {
                var N = k(E);
                N.da ? (E = [N.name], T.apply(E, N.da)) : E = N.name;
              }
              M[I] = K(E);
              ++H;
            }
          }
        }
        h && (f += "#" + h);
        p && (f += "." + p);
        if (v && g) {
          for (; h = G(b);) {
            if (F(S(h))) {
              U(h, L(S(h), "\n"));
              break;
            } else {
              h.remove();
            }
          }
          for (; h = Q(b);) {
            if (F(S(h))) {
              U(h, P(S(h), "\n"));
              break;
            } else {
              h.remove();
            }
          }
        }
        h = H ? [f, M] : [f];
        for (p = 0; p < V(b); ++p) {
          l(W(b, p), h, v || n, !!oa[f]);
        }
        e.push(h);
        17 !== b.$ || h.unshift(17);
        break;
      case 18:
        e.push([18, b.ea.toLowerCase()]);
        break;
      case 3:
        b = "" + S(b);
        if (!n && g) {
          if (v) {
            b = P(L(b, "\n"), "\n");
          } else {
            b = b.split("\r\n").join("\n");
            w && (b = b.replace(/([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])\s([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])/g, "$1$2"));
            for (b = b.split("\t").join(" "); 0 <= b.indexOf("\n\n");) {
              b = b.split("\n\n").join("\n");
            }
            O && (f = "\n" === b.charAt(0) && /\n[ ]*$/.test(b));
            b = P(b, "\n");
            for (b = b.split("\n").join(" "); 0 <= b.indexOf("  ");) {
              b = b.split("  ").join(" ");
            }
            f && (b = P(L(b, " "), " "));
            b = b.split("\\u0020").join(" ").split("&#x20;").join(" ").split("&#32;").join(" ");
          }
        }
        (f = K(b)) && e.push(f);
        break;
      case 4:
        f = S(b);
        C && e.push([4, K(f)]);
        break;
      case 7:
        f = S(b);
        N = k(f);
        h = [7, N.name];
        N.da && T.apply(h, N.da);
        e.push(h);
        break;
      case 8:
        f = S(b);
        if (f.startsWith("[if") && 0 < f.indexOf("<![endif]")) {
          b = Y(y(f, ">", "<![endif]", !0), !0);
          h = [13, y(f, "[", "]", !1)];
          for (p = 0; p < V(b); ++p) {
            l(W(b, p), h, n, v);
          }
          (2 < h.length || q) && e.push(h);
        } else if (f.startsWith("{") && 2 < f.indexOf("};")) {
          b = Y(f.substring(f.indexOf("};") + 2), !0);
          h = [16, y(f, "{", "};", !1)];
          for (p = 0; p < V(b); ++p) {
            l(W(b, p), h, n, v);
          }
          (2 < h.length || q) && e.push(h);
        } else {
          f.startsWith("[if") && 0 < f.indexOf("><!") ? (e.push([14, y(f, "[", "]", !1)]), u = !0) : "<![endif]" === f && u ? (n = e[e.length - 1], q || !n || 14 !== n[0] ? e.push([15]) : n && e.pop(), u = !1) : D && e.push([8, K(f)]);
        }
        break;
      case 9:
        f = S(b);
        g && (f = f.split("\n").join(" ").split("  ").join(" "));
        h = [9, f];
        e.push(h);
        for (p = 0; p < V(b); ++p) {
          l(W(b, p), h, !1, !1);
        }
        break;
      case 11:
        for (h = [11], e.push(h), p = 0; p < V(b); ++p) {
          l(W(b, p), h, n, v);
        }
    }
  }
  function k(b) {
    var e = b.indexOf(t), n = P(L(-1 === e ? b : b.substr(0, e), " "), " ");
    b = -1 === e ? [] : JSON.parse("[" + b.substring(e + t.length, b.lastIndexOf(m) - 2) + "]");
    return b.length ? {name:n, da:b} : {name:n};
  }
  function y(b, e, n, v) {
    e = b.indexOf(e) + e.length;
    n = v ? b.lastIndexOf(n) : b.indexOf(n, e);
    return b.substring(e, n);
  }
  function G(b) {
    for (var e = 0, n = V(b), v; e < n; ++e) {
      if (v = W(b, e), 1 !== v.$ && 17 !== v.$ || (v = G(v)), v && 3 === v.$) {
        return v;
      }
    }
  }
  function Q(b) {
    for (var e = V(b), n; e;) {
      if (n = W(b, --e), 1 !== n.$ && 17 !== n.$ || (n = Q(n)), n && 3 === n.$) {
        return n;
      }
    }
  }
  function F(b) {
    return b.split("\n").join("").split(" ").join("").split("\t").join("");
  }
  const B = [], T = B.push;
  a = Y(a, c);
  d = d || {};
  const g = -1 === ["none", !1].indexOf(d.trimWhitespaces), O = "aggressive" === d.trimWhitespaces, w = !!d.removeNewlineBetweenFullWidthChars, C = !0 === d.keepCDATASections, D = !0 === d.keepComments, q = !0 === d.keepEmptyConditionalComment, z = d.instructionAttrPrefix || ":";
  d = d.argumentBrackets || "()";
  const t = d.substr(0, d.length / 2), m = d.substr(d.length);
  let u = !1;
  l(a, B, !1, !1);
  ra(B[0]);
  return B[0];
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
  return d.obj(function(k, y, G) {
    if (k.isNull()) {
      return G();
    }
    if (k.isStream()) {
      return this.emit("error", new c("html2json", "Streaming not supported")), G();
    }
    const Q = performance.now();
    if (".html" === k.extname || ".htm" === k.extname || ".xhtml" === k.extname || ".php" === k.extname) {
      try {
        k.contents = Buffer.from(JSON.stringify(Z(k.contents.toString(y), !1, a), null, l.prettify ? "    " : "")), console.log(k.path.split(process.cwd())[1].split("\\").join("/"), performance.now() - Q | 0), k.stem += k.extname, k.extname = ".json", this.push(k);
      } catch (F) {
        this.emit("error", new c("html2json", F));
      }
    } else {
      this.push(k);
    }
    G();
  });
};

