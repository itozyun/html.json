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
    d && (z(c, m(a.substring(0, d))), a = a.substring(d), d = 0);
  }
  function m(u) {
    return u.split("&lt;").join("<").split("&gt;").join(">").split("&amp;").join("&");
  }
  function x(u, B, C) {
    for (var p = 0, y = C.length, t = 2, k, E, b; t < y && 3 !== p;) {
      E = C.charAt(t);
      switch(p) {
        case 0:
          F[E] & 3 && (p = 1, b = t);
          break;
        case 1:
          F[E] & 4 ? p = 2 : ">" === E && (p = 3);
          1 !== p && (k = C.substring(b, t));
          break;
        case 2:
          ">" === E && (p = 3);
      }
      ++t;
    }
    return 3 === p ? (I(u, B, A ? k : k.toUpperCase(), !1), t) : 0;
  }
  function I(u, B, C, p) {
    var y = 0, t = u.length;
    if (C) {
      for (y = t; 0 <= y && u[--y] !== C;) {
      }
    }
    if (0 <= y) {
      for (; y < t;) {
        ba(B, u[--t], p && !w[u[t]], !1), A && ca[u[t]] && (A = !!B.ca);
      }
      u.length = y;
    } else {
      ba(B, C, !1, !0);
    }
  }
  function Q(u, B, C, p) {
    function y(g, q) {
      h[g] = da[g.toLowerCase()] ? A ? m(q || g) : !0 : m(q || "");
      ++n;
    }
    function t() {
      (r = "/>" === p.substr(b, 2)) && ++b;
      return r;
    }
    for (var k = 0, E = p.length, b = 1, h = {}, n = 0, r = !1, K, e, v, G, J, D; b < E && 9 > k;) {
      e = p.charAt(b);
      switch(k) {
        case 0:
          F[e] & 3 && (k = 1, v = b);
          break;
        case 1:
          if (F[e] & 4) {
            k = 2, K = p.substring(v, b);
          } else if (">" === e || t()) {
            k = 9, K = p.substring(v, b);
          }
          break;
        case 2:
          if (":" === e) {
            k = 3, v = b;
          } else if (F[e] & 3) {
            k = 4, v = b;
          } else if (">" === e || t()) {
            k = 9;
          }
          break;
        case 3:
          k = F[e] & 3 ? 4 : 9;
          break;
        case 4:
          if ("=" === e) {
            k = 6, G = p.substring(v, b);
          } else if (F[e] & 4) {
            k = 5, G = p.substring(v, b);
          } else if (">" === e || t()) {
            k = 9, y(p.substring(v, b));
          }
          break;
        case 5:
          if (":" === e) {
            k = 3, y(G), v = b;
          } else if (F[e] & 3) {
            k = 4, y(G), v = b;
          } else if ("=" === e) {
            k = 6;
          } else if (">" === e || t()) {
            k = 9, y(G);
          }
          break;
        case 6:
          '"' === e || "'" === e ? (k = 7, J = e, v = b + 1) : F[e] & 4 || (k = 8, v = b);
          D = !1;
          break;
        case 7:
          D || e !== J || (k = 2, y(G, p.substring(v, b)));
          D = "\\" === e && !D;
          break;
        case 8:
          F[e] & 4 ? k = 2 : ">" === e ? k = 9 : !ea[G] && t() && (k = 9), 8 !== k && y(G, p.substring(v, b));
      }
      ++b;
    }
    if (9 === k) {
      k = K.toUpperCase();
      A ||= !!ca[K];
      if (!A) {
        for (; B;) {
          if (w[B] && !w[B][k]) {
            I(u, C, B, !1), B = u[u.length - 1];
          } else {
            break;
          }
        }
      }
      (r = r || !!fa[k]) || (u[u.length] = A ? K : k);
      ha(C, A ? K : k, n ? h : null, r);
      return b;
    }
    return 0;
  }
  for (var H = [], A = !!c.ca, T = a.length - d, f, O; a;) {
    (f = O = H[H.length - 1]) && A && (O = f.toUpperCase());
    if (ia[O]) {
      if ("PLAINTEXT" === O) {
        z(c, m(a)), a = "";
      } else {
        if (f = a.toUpperCase().indexOf("</" + O), 0 <= f) {
          if (d = f, l(), f = x(H, c, a)) {
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
        ka(c, m(a.substring(2, f))), a = a.substring(f + 2);
      } else {
        throw a;
      }
    } else if (a.indexOf("<![CDATA[") === d) {
      if (l(), f = a.indexOf("]]\x3e"), -1 !== f) {
        la(c, m(a.substring(9, f))), a = a.substring(f + 3);
      } else {
        throw a;
      }
    } else if (a.indexOf("\x3c!--") === d) {
      if (l(), f = a.indexOf("--\x3e"), -1 !== f) {
        ma(c, m(a.substring(4, f))), a = a.substring(f + 3);
      } else {
        throw a;
      }
    } else if (a.indexOf("</") === d) {
      if (l(), f = x(H, c, a)) {
        a = a.substring(f);
      } else {
        throw a;
      }
    } else if ("<" === a.charAt(d) && F[a.charAt(d + 1)] & 3) {
      if (l(), f = Q(H, f, c, a)) {
        a = a.substring(f);
      } else {
        throw a;
      }
    } else {
      f = a.indexOf("<", d), -1 === f ? (z(c, m(a)), a = "") : d < f ? d = f : ++d;
    }
    f = a.length - d;
    if (f === T) {
      throw a;
    }
    T = f;
  }
  l();
  I(H, c, "", !0);
}
var ca = {xml:!0, svg:!0, math:!0}, fa = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, ha:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0}, ia = {SCRIPT:!0, STYLE:!0, PLAINTEXT:!0, XMP:!0, TEXTAREA:!0}, ea = {action:!0, archive:!0, background:!0, cite:!0, classid:!0, codebase:!0, data:!0, href:!0, longdesc:!0, profile:!0, src:!0, usemap:!0}, da = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, 
ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, F = {a:2, b:2, c:2, d:2, e:2, f:2, g:2, h:2, i:2, j:2, k:2, l:2, m:2, n:2, o:2, p:2, q:2, r:2, s:2, t:2, u:2, v:2, w:2, x:2, y:2, z:2, A:1, B:1, C:1, D:1, E:1, F:1, G:1, H:1, I:1, J:1, K:1, L:1, M:1, N:1, O:1, P:1, Q:1, R:1, S:1, T:1, U:1, V:1, W:1, X:1, Y:1, Z:1, "\b":4, "\f":4, "\n":4, "\r":4, "\t":4, " ":4};
var na = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0};
function L(a) {
  return a === "" + +a && a === a && a !== "" + 1 / 0 && a !== "" + -1 / 0 ? +a : a;
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
      var m = oa(d);
      3 === m ? (c = "" + d === d || d === +d ? c + d : c + d[1], a.splice(l, 1)) : (c && (a.splice(l, 0, L(c)), c = ""), ++l, 1 !== m && 17 !== m && 13 !== m && 16 !== m || qa(d));
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
;function R(a, c, d, l, m) {
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
      this.fa = m || null;
    case 18:
      this.ea = l;
      break;
    case 3:
    case 4:
    case 7:
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
  c = new ra(c);
  aa(a, c);
  return c.aa;
}
function ra(a) {
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
;const sa = {script:!0, style:!0, textarea:!0};
function Z(a, c, d) {
  function l(b, h, n, r) {
    switch(b.$) {
      case 1:
      case 17:
        var K = {};
        var e = b.ea.toLowerCase();
        r = "pre" === e;
        var v = pa(b.fa) ? b.fa : null, G = 0, J;
        if (v) {
          for (J in v) {
            var D = na[J] ? 1 : v[J];
            if ("id" === J) {
              var g = D;
            } else if ("class" === J) {
              var q = D;
            } else {
              if (J.startsWith(y)) {
                var N = m(D);
                N.da ? (D = [N.name], T.apply(D, N.da)) : D = N.name;
              }
              K[J] = L(D);
              ++G;
            }
          }
        }
        g && (e += "#" + g);
        q && (e += "." + q);
        if (r && f) {
          for (; g = I(b);) {
            if (H(S(g))) {
              U(g, M(S(g), "\n"));
              break;
            } else {
              g.remove();
            }
          }
          for (; g = Q(b);) {
            if (H(S(g))) {
              U(g, P(S(g), "\n"));
              break;
            } else {
              g.remove();
            }
          }
        }
        g = G ? [e, K] : [e];
        for (q = 0; q < V(b); ++q) {
          l(W(b, q), g, r || n, sa[e]);
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
        B && h.push([4, L(e)]);
        break;
      case 7:
        e = S(b);
        N = m(e);
        g = [7, N.name];
        N.da && T.apply(g, N.da);
        h.push(g);
        break;
      case 8:
        e = S(b);
        if (e.startsWith("[if") && 0 < e.indexOf("<![endif]")) {
          b = Y(x(e, ">", "<![endif]", !0), !0);
          g = [13, x(e, "[", "]", !1)];
          for (q = 0; q < V(b); ++q) {
            l(W(b, q), g, n, r);
          }
          (2 < g.length || p) && h.push(g);
        } else if (e.startsWith("{") && 2 < e.indexOf("};")) {
          b = Y(e.substring(e.indexOf("};") + 2), !0);
          g = [16, x(e, "{", "};", !1)];
          for (q = 0; q < V(b); ++q) {
            l(W(b, q), g, n, r);
          }
          (2 < g.length || p) && h.push(g);
        } else {
          e.startsWith("[if") && 0 < e.indexOf("><!") ? (h.push([14, x(e, "[", "]", !1)]), E = !0) : "<![endif]" === e && E ? (n = h[h.length - 1], p || !n || 14 !== n[0] ? h.push([15]) : n && h.pop(), E = !1) : C && h.push([8, L(e)]);
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
          l(W(b, q), g, n, r);
        }
    }
  }
  function m(b) {
    var h = b.indexOf(t), n = P(M(-1 === h ? b : b.substr(0, h), " "), " ");
    b = -1 === h ? [] : JSON.parse("[" + b.substring(h + t.length, b.lastIndexOf(k) - 2) + "]");
    return b.length ? {name:n, da:b} : {name:n};
  }
  function x(b, h, n, r) {
    h = b.indexOf(h) + h.length;
    n = r ? b.lastIndexOf(n) : b.indexOf(n, h);
    return b.substring(h, n);
  }
  function I(b) {
    for (var h = 0, n = V(b), r; h < n; ++h) {
      if (r = W(b, h), 1 !== r.$ && 17 !== r.$ || (r = I(r)), r && 3 === r.$) {
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
  function H(b) {
    return b.split("\n").join("").split(" ").join("").split("\t").join("");
  }
  const A = [], T = A.push;
  a = Y(a, c);
  d = d || {};
  const f = -1 === ["none", !1].indexOf(d.trimWhitespaces), O = "aggressive" === d.trimWhitespaces, u = !!d.removeNewlineBetweenFullWidthChars, B = !0 === d.keepCDATASections, C = !0 === d.keepComments, p = !0 === d.keepEmptyConditionalComment, y = d.instructionAttrPrefix || ":";
  d = d.argumentBrackets || "()";
  const t = d.substr(0, d.length / 2), k = d.substr(d.length);
  let E = !1;
  l(a, A, !1, !1);
  qa(A[0]);
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
  return d(function(m, x, I) {
    if (m.isNull()) {
      return I();
    }
    if (m.isStream()) {
      return this.emit("error", new c("html2json", "Streaming not supported")), I();
    }
    const Q = performance.now();
    if (".html" === m.extname || ".htm" === m.extname || ".xhtml" === m.extname || ".php" === m.extname) {
      try {
        m.contents = Buffer.from(JSON.stringify(Z(m.contents.toString(x), !1, a), null, l.prettify ? "    " : "")), console.log(m.path.split(process.cwd())[1].split("\\").join("/"), performance.now() - Q), m.extname = ".json", this.push(m);
      } catch (H) {
        this.emit("error", new c("html2json", H));
      }
    } else {
      this.push(m);
    }
    I();
  });
};

