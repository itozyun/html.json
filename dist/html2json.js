var u = {CAPTION:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, 
AUDIO:!0, MAP:!0, AREA:!0, MATH:!0, SVG:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DD:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, 
DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, MATH:!0, SVG:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DT:{ADDRESS:!0, 
P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, MATH:!0, SVG:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, 
KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, P:{A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, MATH:!0, SVG:!0, LABEL:!0, INPUT:!0, BUTTON:!0, 
SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, HTML:{HEAD:!0, BODY:!0}, HEAD:{TITLE:!0, BASE:!0, BGSOUND:!0, LINK:!0, META:!0, STYLE:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLETE:!0}, COLGROUP:{COL:!0}, OPTGROUP:{OPTION:!0}, OPTION:{}, TBODY:{TR:!0}, TR:{TH:!0, TD:!0}, RBC:{RB:!0, RP:!0, RT:!0}};
u.LI = u.TD = u.DD;
u.TH = u.DT;
u.RB = u.RP = u.RT = u.P;
u.TFOOT = u.THEAD = u.TBODY;
u.RTC = u.RBC;
function aa(a, c) {
  var e = 0;
  function l() {
    e && (x(c.$, 3, a.substring(0, e)), a = a.substring(e), e = 0);
  }
  function m(v, C, D) {
    for (var q = 0, w = D.length, t = 2, k, H, p; t < w && 3 !== q;) {
      H = D.charAt(t);
      switch(q) {
        case 0:
          F[H] & 3 && (q = 1, p = t);
          break;
        case 1:
          F[H] & 4 ? q = 2 : ">" === H && (q = 3);
          1 !== q && (k = D.substring(p, t));
          break;
        case 2:
          ">" === H && (q = 3);
      }
      ++t;
    }
    return 3 === q ? I(v, C, A ? k : k.toUpperCase(), !1) ? 1 : t : 0;
  }
  function I(v, C, D, q) {
    var w = 0, t = v.length;
    if (D) {
      for (w = t; 0 <= w && v[--w] !== D;) {
      }
    }
    if (0 <= w) {
      for (; w < t;) {
        if (!0 === L(C, v[--t], q && !u[v[t]], !1)) {
          return !0;
        }
      }
      v.length = w;
    } else {
      if (!0 === L(C, D, !1, !0)) {
        return !0;
      }
    }
  }
  function J(v, C, D, q) {
    function w(N, B) {
      d[N] = ba[N.toLowerCase()] ? A ? B || N : !0 : B || "";
      ++h;
    }
    function t() {
      (n = "/>" === q.substr(p, 2)) && ++p;
      return n;
    }
    for (var k = 0, H = q.length, p = 1, d = {}, h = 0, n = !1, r, b, f, G, O, M; p < H && 9 > k;) {
      b = q.charAt(p);
      switch(k) {
        case 0:
          F[b] & 3 && (k = 1, f = p);
          break;
        case 1:
          if (F[b] & 4) {
            k = 2, r = q.substring(f, p);
          } else if (">" === b || t()) {
            k = 9, r = q.substring(f, p);
          }
          break;
        case 2:
          if (F[b] & 3) {
            k = 4, f = p;
          } else if (">" === b || t()) {
            k = 9;
          }
          break;
        case 4:
          if ("=" === b) {
            k = 6, G = q.substring(f, p);
          } else if (F[b] & 4) {
            k = 5, G = q.substring(f, p);
          } else if (">" === b || t()) {
            k = 9, w(q.substring(f, p));
          }
          break;
        case 5:
          if (F[b] & 3) {
            k = 4, w(G), f = p;
          } else if ("=" === b) {
            k = 6;
          } else if (">" === b || t()) {
            k = 9, w(G);
          }
          break;
        case 6:
          '"' === b || "'" === b ? (k = 7, O = b, f = p + 1) : F[b] & 4 || (k = 8, f = p);
          M = !1;
          break;
        case 7:
          M || b !== O || (k = 2, w(G, q.substring(f, p)));
          M = "\\" === b && !M;
          break;
        case 8:
          F[b] & 4 ? k = 2 : ">" === b ? k = 9 : !ca[G] && t() && (k = 9), 8 !== k && w(G, q.substring(f, p));
      }
      ++p;
    }
    if (9 === k) {
      k = r.toUpperCase();
      if (!A) {
        for (; C;) {
          if (u[C] && !u[C][k]) {
            if (I(v, D, C, !1)) {
              return 1;
            }
            C = v[v.length - 1];
          } else {
            break;
          }
        }
      }
      (n = n || da[k]) || (v[v.length] = A ? r : k);
      return !0 === ea(D, A ? r : k, h ? d : null, n) ? 1 : p;
    }
    return 0;
  }
  for (var E = [], A = !1, K = a.length - e, g, y; a;) {
    (g = y = E[E.length - 1]) && A && (y = g.toUpperCase());
    if (fa[y]) {
      if ("PLAINTEXT" === y) {
        x(c.$, 3, a), a = "";
      } else {
        if (g = a.toUpperCase().indexOf("</" + y), 0 <= g) {
          e = g;
          l();
          g = m(E, c, a);
          if (1 === g) {
            return;
          }
          if (g) {
            a = a.substring(g);
          } else {
            throw a;
          }
        } else {
          throw a;
        }
      }
    } else if (a.indexOf("<![CDATA[") === e) {
      if (l(), g = a.indexOf("]]\x3e"), -1 !== g) {
        x(c.$, 4, a.substring(9, g)), a = a.substring(g + 3);
      } else {
        throw a;
      }
    } else if (a.indexOf("\x3c!--") === e) {
      if (l(), g = a.indexOf("--\x3e"), -1 !== g) {
        x(c.$, 8, a.substring(4, g)), a = a.substring(g + 3);
      } else {
        throw a;
      }
    } else if (a.indexOf("</") === e) {
      l();
      g = m(E, c, a);
      if (1 === g) {
        return;
      }
      if (g) {
        a = a.substring(g);
      } else {
        throw a;
      }
    } else if ("<" === a.charAt(e) && F[a.charAt(e + 1)] & 3) {
      l();
      g = J(E, g, c, a);
      if (1 === g) {
        return;
      }
      if (g) {
        a = a.substring(g);
      } else {
        throw a;
      }
    } else {
      g = a.indexOf("<", e), -1 === g ? (x(c.$, 3, a), a = "") : e < g ? e = g : ++e;
    }
    g = a.length - e;
    if (g === K) {
      throw a;
    }
    K = g;
  }
  l();
  I(E, c, "", !0);
}
var da = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, ia:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0}, fa = {SCRIPT:!0, STYLE:!0, PLAINTEXT:!0, XMP:!0, TEXTAREA:!0}, ca = {action:!0, archive:!0, background:!0, cite:!0, classid:!0, codebase:!0, data:!0, href:!0, longdesc:!0, profile:!0, src:!0, usemap:!0}, ba = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, 
noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, F = {a:2, b:2, c:2, d:2, e:2, f:2, g:2, h:2, i:2, j:2, k:2, l:2, m:2, n:2, o:2, p:2, q:2, r:2, s:2, t:2, u:2, v:2, w:2, x:2, y:2, z:2, A:1, B:1, C:1, D:1, E:1, F:1, G:1, H:1, I:1, J:1, K:1, L:1, M:1, N:1, O:1, P:1, Q:1, R:1, S:1, T:1, U:1, V:1, W:1, X:1, Y:1, Z:1, "\b":4, "\f":4, "\n":4, "\r":4, "\t":4, " ":4};
var ha = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0};
function P(a) {
  return a === +a;
}
function Q(a) {
  return a === "" + +a && P(parseInt(a, 10));
}
function R(a) {
  if ("" + a === a || P(a)) {
    a = 3;
  } else {
    if (a && a.pop === [].pop) {
      var c = a[0];
      a = "" + c === c ? 1 : P(a[0]) ? a[0] : -1;
    } else {
      a = -1;
    }
  }
  return a;
}
function ia(a) {
  return !(a && a.pop === [].pop) && !(!a || "object" !== typeof a);
}
function ja(a) {
  var c = a[0];
  var e = 1 === c ? 2 : 1;
  e = 1 === R(a) ? ia(a[e]) ? e + 1 : e : 11 === c ? 1 : 9 === c || 13 === c || 14 === c ? 2 : Infinity;
  c = "";
  var l;
  if (e < a.length) {
    for (l = e; l < a.length;) {
      e = a[l];
      var m = R(e);
      3 === m ? (c = "" + e === e || P(e) ? c + e : c + e[1], a.splice(l, 1)) : (c && (a.splice(l, 0, Q(c) ? +c : c), c = ""), ++l, 1 === m && ja(e));
    }
    c && (a[l] = Q(c) ? +c : c);
  }
}
;function S(a) {
  return 9 === a.$ || 11 === a.$;
}
function T(a, c, e, l, m) {
  switch(a.$) {
    case 3:
    case 8:
    case 4:
    case 7:
    case 18:
      throw "nodeType:" + a.$ + " \u306f\u89aa\u306b\u306a\u308b\u3053\u3068\u304c\u51fa\u6765\u307e\u305b\u3093!";
  }
  this.ba = a;
  this.$ = e;
  if (a) {
    if (S(this)) {
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
  switch(e) {
    case 1:
    case 17:
      this.ea = m || null;
    case 18:
      this.ha = l;
      break;
    case 3:
    case 8:
    case 9:
    case 4:
    case 7:
      this.fa = l;
  }
}
function U(a) {
  return 17 === a.$ ? 1 : a.$;
}
T.prototype.close = function() {
  if (17 !== this.$) {
    throw "close() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  this.$ = 1;
};
function V(a) {
  switch(a.$) {
    case 3:
    case 4:
    case 7:
    case 8:
    case 9:
      return a.fa;
    default:
      throw "getData() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
}
function ka(a, c) {
  switch(a.$) {
    case 3:
    case 4:
    case 7:
    case 8:
    case 9:
      a.fa = c;
      break;
    default:
      throw "setData() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
}
function la(a) {
  if (1 !== a.$ && 17 !== a.$ && 18 !== a.$) {
    throw "getTagName() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  return a.ha;
}
T.prototype.getParent = function() {
  if (S(this)) {
    throw "getParent() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  return this.ba;
};
function W(a) {
  if (1 !== a.$ && 17 !== a.$ && !S(a)) {
    throw "getChildNodeLength() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  return a.aa && a.aa.length;
}
function X(a, c) {
  if (1 !== a.$ && 17 !== a.$ && !S(a)) {
    throw "getChildNodeAt() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  return a.aa && a.aa[c] || null;
}
T.prototype.remove = function() {
  if (S(this)) {
    throw "remove() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  if (S(this)) {
    throw "getMyIndex() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  var a = this.ba ? this.ba.aa.indexOf(this) : -1;
  0 <= a && (this.ba.aa.splice(a, 1), this.ba = null);
};
function x(a, c, e, l) {
  var m = W(a);
  return new T(a, m, c, e, l);
}
;function ma(a) {
  var c = new na();
  aa(a, c);
  return c.aa;
}
function na() {
  this.aa = new T(null, 0, 11);
}
function ea(a, c, e, l) {
  l ? (a = a.$, l = W(a), new T(a, l, 1, c, e)) : a.$ = x(a.$, 17, c, e);
}
function L(a, c, e, l) {
  if (l) {
    x(a.$, 18, c);
  } else if (!e) {
    if (c === la(a.$)) {
      a.$.close(), a.$ = a.$.getParent();
    } else {
      throw "End tag error! " + c;
    }
  }
}
;const oa = {script:!0, style:!0, textarea:!0};
let Y = !1;
function Z(a, c) {
  function e(d, h, n, r) {
    var b = V(d), f;
    switch(U(d)) {
      case 1:
        var G = {};
        b = la(d).toLowerCase();
        r = "pre" === b || "listing" === b;
        if (1 !== d.$ && 17 !== d.$) {
          throw "getAttributes() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
        }
        var O = ia(d.ea) ? d.ea : null;
        var M = 0, N = "";
        if (O) {
          for (f in O) {
            var B = ha[f] ? 1 : O[f];
            if ("id" === f) {
              b += "#" + B;
            } else if ("class" === f) {
              N = "." + B;
            } else {
              if (f.startsWith(k)) {
                var z = l(B);
                z.ca ? (B = [z.name], B.push.apply(z.ca)) : B = z.name;
              } else {
                Q(B) && (B = +B);
              }
              G[f] = B;
              ++M;
            }
          }
        }
        b += N;
        if (r && v) {
          for (; f = I(d);) {
            if (E(V(f))) {
              ka(f, A(V(f), "\n"));
              break;
            } else {
              f.remove();
            }
          }
          for (; f = J(d);) {
            if (E(V(f))) {
              ka(f, K(V(f), "\n"));
              break;
            } else {
              f.remove();
            }
          }
        }
        f = M ? [b, G] : [b];
        for (z = 0; z < W(d); ++z) {
          e(X(d, z), f, r || n, oa[b]);
        }
        h.push(f);
        break;
      case 3:
        if (!n && v) {
          if (r) {
            b = K(A(b, "\n"), "\n");
          } else {
            b = b.split("\r\n").join("\n");
            H && (b = b.replace(/([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])\s([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])/g, "$1$2"));
            for (b = b.split("\t").join(" "); 0 <= b.indexOf("\n\n");) {
              b = b.split("\n\n").join("\n");
            }
            b = K(b, "\n");
            C && (z = "\n" === b.charAt(0) && /\n[ ]*$/.test(b));
            for (b = b.split("\n").join(" "); 0 <= b.indexOf("  ");) {
              b = b.split("  ").join(" ");
            }
            z && (b = K(A(b, " "), " "));
            b = b.split("\\u0020").join(" ");
          }
        }
        b && h.push(Q(b) ? +b : b);
        break;
      case 4:
        D && h.push([4, Q(b) ? +b : b]);
        break;
      case 7:
        z = l(m(b, "?", "?", !0));
        f = [7, z.name];
        z.ca && f.push.apply(f, z.ca);
        h.push(f);
        break;
      case 8:
        if (b.startsWith("[if") && 0 < b.indexOf("<![endif]")) {
          if (Y = n, d = Z(m(b, ">", "<![endif]", !0), y), Y = !1, d.length || P(d)) {
            f = [13, m(b, "[", "]", !1)], d && d.pop === [].pop ? f.push.apply(f, d) : f.push(d), h.push(f);
          }
        } else {
          b.startsWith("[if") && 0 < b.indexOf("><!") ? (h.push([14, m(b, "[", "]", !1)]), p = !0) : "<![endif]" === b && p ? (h.push([15]), p = !1) : q && h.push([8, Q(b) ? +b : b]);
        }
        break;
      case 9:
        v && (b = b.split("\n").join(" ").split("  ").join(" "));
        h.push(9, b);
        break;
      case 11:
        h.push(11);
    }
  }
  function l(d) {
    var h = d.indexOf(w), n = K(A(-1 === h ? d : d.substr(0, h), " "), " ");
    d = -1 === h ? [] : JSON.parse("[" + d.substring(h + w.length, d.lastIndexOf(t) - 2) + "]");
    return d.length ? {name:n, ca:d} : {name:n};
  }
  function m(d, h, n, r) {
    h = d.indexOf(h) + h.length;
    n = r ? d.lastIndexOf(n) : d.indexOf(n, h);
    return d.substring(h, n);
  }
  function I(d) {
    for (var h = 0, n = W(d), r; h < n; ++h) {
      if (r = X(d, h), 1 === U(r) && (r = I(r)), r && 3 === U(r)) {
        return r;
      }
    }
  }
  function J(d) {
    for (var h = W(d), n; h;) {
      if (n = X(d, --h), 1 === U(n) && (n = J(n)), n && 3 === U(n)) {
        return n;
      }
    }
  }
  function E(d) {
    return d.split("\n").join("").split(" ").join("").split("\t").join("");
  }
  function A(d, h) {
    for (; d.charAt(0) === h;) {
      d = d.substr(1);
    }
    return d;
  }
  function K(d, h) {
    for (; d.charAt(d.length - 1) === h;) {
      d = d.substr(0, d.length - 1);
    }
    return d;
  }
  const g = [];
  a = ma(a);
  const y = c || {}, v = -1 === ["none", !1].indexOf(y.trimWhitespace), C = "agressive" === y.trimWhitespace, D = !!y.keepCDATASections, q = !!y.keepComments;
  c = y.argumentBrackets || "()";
  const w = c.substr(0, c.length / 2), t = c.substr(c.length), k = y.instructionAttrPrefix || ":", H = !!y.removeLineBreaksBetweenFullWidth;
  let p = !1;
  e(a, g, Y || !1, !1);
  ja(g);
  return g;
}
;Z.node = {};
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
  const c = require("plugin-error"), e = require("through2"), l = a && "object" === typeof a ? a : {};
  return e.la(function(m, I, J) {
    if (m.ja()) {
      return J();
    }
    if (m.ka()) {
      return this.emit("error", new c("html2json", "Streaming not supported")), J();
    }
    const E = performance.now();
    if (".html" === m.da || ".htm" === m.da || ".xhtml" === m.da || ".php" === m.da) {
      try {
        m.ga = Buffer.from(JSON.stringify(Z(m.ga.toString(I), a), null, l.prettify ? "    " : "")), console.log(m.path.split(process.cwd())[1].split("\\").join("/"), performance.now() - E), m.da = ".json", this.push(m);
      } catch (A) {
        this.emit("error", new c("html2json", A));
      }
    } else {
      this.push(m);
    }
    J();
  });
};

