var v = {CAPTION:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, 
AUDIO:!0, MAP:!0, AREA:!0, MATH:!0, SVG:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DD:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, 
DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, MATH:!0, SVG:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DT:{ADDRESS:!0, 
P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, MATH:!0, SVG:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, 
KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, P:{A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, MATH:!0, SVG:!0, LABEL:!0, INPUT:!0, BUTTON:!0, 
SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, HTML:{HEAD:!0, BODY:!0}, HEAD:{TITLE:!0, BASE:!0, BGSOUND:!0, LINK:!0, META:!0, STYLE:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLETE:!0}, COLGROUP:{COL:!0}, OPTGROUP:{OPTION:!0}, OPTION:{}, TBODY:{TR:!0}, TR:{TH:!0, TD:!0}, RBC:{RB:!0, RP:!0, RT:!0}};
v.LI = v.TD = v.DD;
v.TH = v.DT;
v.RB = v.RP = v.RT = v.P;
v.TFOOT = v.THEAD = v.TBODY;
v.RTC = v.RBC;
function aa(a, c) {
  var d = 0;
  function m() {
    d && (x(c.$, 3, a.substring(0, d)), a = a.substring(d), d = 0);
  }
  function p(r, y, B) {
    for (var t = 0, w = B.length, u = 2, l, G, q; u < w && 3 !== t;) {
      G = B.charAt(u);
      switch(t) {
        case 0:
          C[G] & 3 && (t = 1, q = u);
          break;
        case 1:
          C[G] & 4 ? t = 2 : ">" === G && (t = 3);
          1 !== t && (l = B.substring(q, u));
          break;
        case 2:
          ">" === G && (t = 3);
      }
      ++u;
    }
    return 3 === t ? (E(r, y, z ? l : l.toUpperCase(), !1), u) : 0;
  }
  function E(r, y, B, t) {
    var w = 0, u = r.length;
    if (B) {
      for (w = u; 0 <= w && r[--w] !== B;) {
      }
    }
    if (0 <= w) {
      for (; w < u;) {
        ba(y, r[--u], t && !v[r[u]], !1), z && ca[r[u]] && (z = !!y.da);
      }
      r.length = w;
    } else {
      ba(y, B, !1, !0);
    }
  }
  function J(r, y, B, t) {
    function w(M, R) {
      N[M] = da[M.toLowerCase()] ? z ? R || M : !0 : R || "";
      ++e;
    }
    function u() {
      (g = "/>" === t.substr(q, 2)) && ++q;
      return g;
    }
    for (var l = 0, G = t.length, q = 1, N = {}, e = 0, g = !1, n, h, b, k, S, K; q < G && 9 > l;) {
      h = t.charAt(q);
      switch(l) {
        case 0:
          C[h] & 3 && (l = 1, b = q);
          break;
        case 1:
          if (C[h] & 4) {
            l = 2, n = t.substring(b, q);
          } else if (">" === h || u()) {
            l = 9, n = t.substring(b, q);
          }
          break;
        case 2:
          if (":" === h) {
            l = 3, b = q;
          } else if (C[h] & 3) {
            l = 4, b = q;
          } else if (">" === h || u()) {
            l = 9;
          }
          break;
        case 3:
          l = C[h] & 3 ? 4 : 9;
          break;
        case 4:
          if ("=" === h) {
            l = 6, k = t.substring(b, q);
          } else if (C[h] & 4) {
            l = 5, k = t.substring(b, q);
          } else if (">" === h || u()) {
            l = 9, w(t.substring(b, q));
          }
          break;
        case 5:
          if (":" === h) {
            l = 3, w(k), b = q;
          } else if (C[h] & 3) {
            l = 4, w(k), b = q;
          } else if ("=" === h) {
            l = 6;
          } else if (">" === h || u()) {
            l = 9, w(k);
          }
          break;
        case 6:
          '"' === h || "'" === h ? (l = 7, S = h, b = q + 1) : C[h] & 4 || (l = 8, b = q);
          K = !1;
          break;
        case 7:
          K || h !== S || (l = 2, w(k, t.substring(b, q)));
          K = "\\" === h && !K;
          break;
        case 8:
          C[h] & 4 ? l = 2 : ">" === h ? l = 9 : !ea[k] && u() && (l = 9), 8 !== l && w(k, t.substring(b, q));
      }
      ++q;
    }
    if (9 === l) {
      l = n.toUpperCase();
      z ||= !!ca[n];
      if (!z) {
        for (; y;) {
          if (v[y] && !v[y][l]) {
            E(r, B, y, !1), y = r[r.length - 1];
          } else {
            break;
          }
        }
      }
      (g = g || fa[l]) || (r[r.length] = z ? n : l);
      ha(B, z ? n : l, e ? N : null, g);
      return q;
    }
    return 0;
  }
  for (var D = [], z = !!c.da, L = a.length - d, f, H; a;) {
    (f = H = D[D.length - 1]) && z && (H = f.toUpperCase());
    if (ia[H]) {
      if ("PLAINTEXT" === H) {
        x(c.$, 3, a), a = "";
      } else {
        if (f = a.toUpperCase().indexOf("</" + H), 0 <= f) {
          if (d = f, m(), f = p(D, c, a)) {
            a = a.substring(f);
          } else {
            throw a;
          }
        } else {
          throw a;
        }
      }
    } else if (a.indexOf("<!DOCTYPE ") === d) {
      if (m(), f = a.indexOf(">"), -1 !== f) {
        ja(c, a.substring(10, f)), a = a.substring(f + 1);
      } else {
        throw a;
      }
    } else if (a.indexOf("<?") === d) {
      if (m(), f = a.indexOf("?>"), -1 !== f) {
        x(c.$, 7, a.substring(2, f)), a = a.substring(f + 2);
      } else {
        throw a;
      }
    } else if (a.indexOf("<![CDATA[") === d) {
      if (m(), f = a.indexOf("]]\x3e"), -1 !== f) {
        x(c.$, 4, a.substring(9, f)), a = a.substring(f + 3);
      } else {
        throw a;
      }
    } else if (a.indexOf("\x3c!--") === d) {
      if (m(), f = a.indexOf("--\x3e"), -1 !== f) {
        x(c.$, 8, a.substring(4, f)), a = a.substring(f + 3);
      } else {
        throw a;
      }
    } else if (a.indexOf("</") === d) {
      if (m(), f = p(D, c, a)) {
        a = a.substring(f);
      } else {
        throw a;
      }
    } else if ("<" === a.charAt(d) && C[a.charAt(d + 1)] & 3) {
      if (m(), f = J(D, f, c, a)) {
        a = a.substring(f);
      } else {
        throw a;
      }
    } else {
      f = a.indexOf("<", d), -1 === f ? (x(c.$, 3, a), a = "") : d < f ? d = f : ++d;
    }
    f = a.length - d;
    if (f === L) {
      throw a;
    }
    L = f;
  }
  m();
  E(D, c, "", !0);
}
var ca = {xml:!0, svg:!0, math:!0}, fa = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, ga:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0}, ia = {SCRIPT:!0, STYLE:!0, PLAINTEXT:!0, XMP:!0, TEXTAREA:!0}, ea = {action:!0, archive:!0, background:!0, cite:!0, classid:!0, codebase:!0, data:!0, href:!0, longdesc:!0, profile:!0, src:!0, usemap:!0}, da = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, 
ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, C = {a:2, b:2, c:2, d:2, e:2, f:2, g:2, h:2, i:2, j:2, k:2, l:2, m:2, n:2, o:2, p:2, q:2, r:2, s:2, t:2, u:2, v:2, w:2, x:2, y:2, z:2, A:1, B:1, C:1, D:1, E:1, F:1, G:1, H:1, I:1, J:1, K:1, L:1, M:1, N:1, O:1, P:1, Q:1, R:1, S:1, T:1, U:1, V:1, W:1, X:1, Y:1, Z:1, "\b":4, "\f":4, "\n":4, "\r":4, "\t":4, " ":4};
var ka = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0};
function I(a) {
  return a === +a;
}
function O(a) {
  return a === "" + +a && I(parseInt(a, 10));
}
function la(a) {
  if ("" + a === a || I(a)) {
    a = 3;
  } else {
    if (a && a.pop === [].pop) {
      var c = a[0];
      a = "" + c === c ? 1 : I(a[0]) ? a[0] : -1;
    } else {
      a = -1;
    }
  }
  return a;
}
function ma(a) {
  return !(a && a.pop === [].pop) && !(!a || "object" !== typeof a);
}
function na(a) {
  var c = a[0];
  var d = 1 === c ? 2 : 1;
  d = 1 === la(a) ? ma(a[d]) ? d + 1 : d : 11 === c ? 1 : 9 === c || 13 === c || 14 === c ? 2 : Infinity;
  c = "";
  var m;
  if (d < a.length) {
    for (m = d; m < a.length;) {
      d = a[m];
      var p = la(d);
      3 === p ? (c = "" + d === d || I(d) ? c + d : c + d[1], a.splice(m, 1)) : (c && (a.splice(m, 0, O(c) ? +c : c), c = ""), ++m, 1 === p && na(d));
    }
    c && (a[m] = O(c) ? +c : c);
  }
}
;function P(a) {
  return 9 === a.$ || 11 === a.$;
}
function Q(a, c, d, m, p) {
  switch(a.$) {
    case 3:
    case 8:
    case 4:
    case 7:
    case 18:
      throw "nodeType:" + a.$ + " \u306f\u89aa\u306b\u306a\u308b\u3053\u3068\u304c\u51fa\u6765\u307e\u305b\u3093!";
  }
  this.ba = a;
  this.$ = d;
  if (a) {
    if (P(this)) {
      throw "nodeType:" + a.$ + " \u306f\u5b50\u306b\u306a\u308b\u3053\u3068\u304c\u51fa\u6765\u307e\u305b\u3093!";
    }
    a.aa || (a.aa = []);
    a = a.aa;
    if (0 <= c && c < a.length) {
      if (1 <= c && 17 === a[c - 1].$) {
        throw "\u9589\u3058\u30bf\u30b0\u306e\u7121\u3044 Element \u306e\u6b21\u306b Node \u3092\u633f\u5165\u3059\u308b\u3053\u3068\u306f\u51fa\u6765\u307e\u305b\u3093!";
      }
      a.splice(c, 0, this);
    } else {
      if (a.length && 17 === a[a.length - 1].$) {
        throw "\u9589\u3058\u30bf\u30b0\u306e\u7121\u3044 Element \u306e\u6b21\u306b Node \u3092\u633f\u5165\u3059\u308b\u3053\u3068\u306f\u51fa\u6765\u307e\u305b\u3093!";
      }
      a.push(this);
    }
  }
  switch(d) {
    case 1:
    case 17:
      this.da = p || null;
    case 18:
      this.fa = m;
      break;
    case 3:
    case 8:
    case 9:
    case 4:
    case 7:
      this.ea = m;
  }
}
function T(a) {
  return 17 === a.$ ? 1 : a.$;
}
Q.prototype.close = function() {
  if (17 !== this.$) {
    throw "close() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  this.$ = 1;
};
function U(a) {
  switch(a.$) {
    case 3:
    case 4:
    case 7:
    case 8:
    case 9:
      return a.ea;
    default:
      throw "getData() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
}
function V(a, c) {
  switch(a.$) {
    case 3:
    case 4:
    case 7:
    case 8:
    case 9:
      a.ea = c;
      break;
    default:
      throw "setData() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
}
function oa(a) {
  if (1 !== a.$ && 17 !== a.$ && 18 !== a.$) {
    throw "getTagName() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  return a.fa;
}
Q.prototype.getParent = function() {
  if (P(this)) {
    throw "getParent() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  return this.ba;
};
function W(a) {
  if (1 !== a.$ && 17 !== a.$ && !P(a)) {
    throw "getChildNodeLength() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  return a.aa && a.aa.length;
}
function X(a, c) {
  if (1 !== a.$ && 17 !== a.$ && !P(a)) {
    throw "getChildNodeAt() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  return a.aa && a.aa[c] || null;
}
Q.prototype.remove = function() {
  if (P(this)) {
    throw "remove() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  if (P(this)) {
    throw "getMyIndex() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  var a = this.ba ? this.ba.aa.indexOf(this) : -1;
  0 <= a && (this.ba.aa.splice(a, 1), this.ba = null);
};
function x(a, c, d, m) {
  var p = W(a);
  return new Q(a, p, c, d, m);
}
;function pa(a, c) {
  c = new qa(c);
  aa(a, c);
  return c.aa;
}
function qa(a) {
  this.ba = a;
  this.aa = new Q(null, 0, 11);
}
function ja(a, c) {
  var d = a.aa;
  if (11 !== d.$) {
    throw "nodeType \u306e\u5909\u66f4\u306f DOCUMENT_FRAGMENT_NODE -> DOCUMENT_NODE \u3060\u3051\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u307e\u3059!";
  }
  d.$ = 9;
  V(a.aa, c);
}
function ha(a, c, d, m) {
  m ? (a = a.$, m = W(a), new Q(a, m, 1, c, d)) : a.$ = x(a.$, 17, c, d);
}
function ba(a, c, d, m) {
  if (m) {
    a.ba && x(a.$, 18, c);
  } else if (!d || !a.ba) {
    if (c === oa(a.$)) {
      a.$.close(), a.$ = a.$.getParent();
    } else {
      throw "End tag error! " + c;
    }
  }
}
;const ra = {script:!0, style:!0, textarea:!0};
let Y = !1;
function Z(a, c, d) {
  function m(e, g, n, h) {
    var b = U(e), k;
    switch(T(e)) {
      case 1:
        var S = {};
        b = oa(e).toLowerCase();
        h = "pre" === b || "listing" === b;
        if (1 !== e.$ && 17 !== e.$) {
          throw "getAttributes() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
        }
        var K = ma(e.da) ? e.da : null;
        var M = 0, R = "";
        if (K) {
          for (k in K) {
            var F = ka[k] ? 1 : K[k];
            if ("id" === k) {
              b += "#" + F;
            } else if ("class" === k) {
              R = "." + F;
            } else {
              if (k.startsWith(G)) {
                var A = p(F);
                A.ca ? (F = [A.name], F.push.apply(A.ca)) : F = A.name;
              } else {
                O(F) && (F = +F);
              }
              S[k] = F;
              ++M;
            }
          }
        }
        b += R;
        if (h && y) {
          for (; k = J(e);) {
            if (z(U(k))) {
              V(k, L(U(k), "\n"));
              break;
            } else {
              k.remove();
            }
          }
          for (; k = D(e);) {
            if (z(U(k))) {
              V(k, f(U(k), "\n"));
              break;
            } else {
              k.remove();
            }
          }
        }
        k = M ? [b, S] : [b];
        for (A = 0; A < W(e); ++A) {
          m(X(e, A), k, h || n, ra[b]);
        }
        g.push(k);
        break;
      case 3:
        if (!n && y) {
          if (h) {
            b = f(L(b, "\n"), "\n");
          } else {
            b = b.split("\r\n").join("\n");
            q && (b = b.replace(/([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])\s([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])/g, "$1$2"));
            for (b = b.split("\t").join(" "); 0 <= b.indexOf("\n\n");) {
              b = b.split("\n\n").join("\n");
            }
            b = f(b, "\n");
            B && (A = "\n" === b.charAt(0) && /\n[ ]*$/.test(b));
            for (b = b.split("\n").join(" "); 0 <= b.indexOf("  ");) {
              b = b.split("  ").join(" ");
            }
            A && (b = f(L(b, " "), " "));
            b = b.split("\\u0020").join(" ");
          }
        }
        b && g.push(O(b) ? +b : b);
        break;
      case 4:
        t && g.push([4, O(b) ? +b : b]);
        break;
      case 7:
        A = p(E(b, "?", "?", !0));
        k = [7, A.name];
        A.ca && k.push.apply(k, A.ca);
        g.push(k);
        break;
      case 8:
        if (b.startsWith("[if") && 0 < b.indexOf("<![endif]")) {
          if (Y = n, e = Z(E(b, ">", "<![endif]", !0), !0, r), Y = !1, e.length || I(e)) {
            k = [13, E(b, "[", "]", !1)], e && e.pop === [].pop ? k.push.apply(k, e) : k.push(e), g.push(k);
          }
        } else {
          b.startsWith("[if") && 0 < b.indexOf("><!") ? (g.push([14, E(b, "[", "]", !1)]), N = !0) : "<![endif]" === b && N ? (g.push([15]), N = !1) : w && g.push([8, O(b) ? +b : b]);
        }
        break;
      case 9:
        y && (b = b.split("\n").join(" ").split("  ").join(" "));
        g.push(9, b);
        break;
      case 11:
        g.push(11);
    }
  }
  function p(e) {
    var g = e.indexOf(u), n = f(L(-1 === g ? e : e.substr(0, g), " "), " ");
    e = -1 === g ? [] : JSON.parse("[" + e.substring(g + u.length, e.lastIndexOf(l) - 2) + "]");
    return e.length ? {name:n, ca:e} : {name:n};
  }
  function E(e, g, n, h) {
    g = e.indexOf(g) + g.length;
    n = h ? e.lastIndexOf(n) : e.indexOf(n, g);
    return e.substring(g, n);
  }
  function J(e) {
    for (var g = 0, n = W(e), h; g < n; ++g) {
      if (h = X(e, g), 1 === T(h) && (h = J(h)), h && 3 === T(h)) {
        return h;
      }
    }
  }
  function D(e) {
    for (var g = W(e), n; g;) {
      if (n = X(e, --g), 1 === T(n) && (n = D(n)), n && 3 === T(n)) {
        return n;
      }
    }
  }
  function z(e) {
    return e.split("\n").join("").split(" ").join("").split("\t").join("");
  }
  function L(e, g) {
    for (; e.charAt(0) === g;) {
      e = e.substr(1);
    }
    return e;
  }
  function f(e, g) {
    for (; e.charAt(e.length - 1) === g;) {
      e = e.substr(0, e.length - 1);
    }
    return e;
  }
  const H = [];
  a = pa(a, c);
  const r = d || {}, y = -1 === ["none", !1].indexOf(r.trimWhitespace), B = "agressive" === r.trimWhitespace, t = !!r.keepCDATASections, w = !!r.keepComments;
  d = r.argumentBrackets || "()";
  const u = d.substr(0, d.length / 2), l = d.substr(d.length), G = r.instructionAttrPrefix || ":", q = !!r.removeLineBreaksBetweenFullWidth;
  let N = !1;
  m(a, H, Y || !1, !1);
  na(H);
  return H;
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
Z.ELEMENT_WITHOUT_END_TAG = 17;
Z.ELEMENT_WITHOUT_START_TAG = 18;
Z.gulp = function(a) {
  const c = require("plugin-error"), d = require("through2"), m = a && "object" === typeof a ? a : {};
  return d(function(p, E, J) {
    if (p.isNull()) {
      return J();
    }
    if (p.isStream()) {
      return this.emit("error", new c("html2json", "Streaming not supported")), J();
    }
    const D = performance.now();
    if (".html" === p.extname || ".htm" === p.extname || ".xhtml" === p.extname || ".php" === p.extname) {
      try {
        p.contents = Buffer.from(JSON.stringify(Z(p.contents.toString(E), !1, a), null, m.prettify ? "    " : "")), console.log(p.path.split(process.cwd())[1].split("\\").join("/"), performance.now() - D), p.extname = ".json", this.push(p);
      } catch (z) {
        this.emit("error", new c("html2json", z));
      }
    } else {
      this.push(p);
    }
    J();
  });
};

