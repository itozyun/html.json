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
  var e = 0;
  function n() {
    e && (y(c.$, 3, a.substring(0, e)), a = a.substring(e), e = 0);
  }
  function q(v, t, z) {
    for (var r = 0, x = z.length, u = 2, k, H, p; u < x && 3 !== r;) {
      H = z.charAt(u);
      switch(r) {
        case 0:
          C[H] & 3 && (r = 1, p = u);
          break;
        case 1:
          C[H] & 4 ? r = 2 : ">" === H && (r = 3);
          1 !== r && (k = z.substring(p, u));
          break;
        case 2:
          ">" === H && (r = 3);
      }
      ++u;
    }
    return 3 === r ? (E(v, t, A ? k : k.toUpperCase(), !1), u) : 0;
  }
  function E(v, t, z, r) {
    var x = 0, u = v.length;
    if (z) {
      for (x = u; 0 <= x && v[--x] !== z;) {
      }
    }
    if (0 <= x) {
      for (; x < u;) {
        I(t, v[--u], r && !w[v[u]], !1), A && O[v[u]] && (A = !!t.da);
      }
      v.length = x;
    } else {
      I(t, z, !1, !0);
    }
  }
  function J(v, t, z, r) {
    function x(K, Q) {
      V[K] = ba[K.toLowerCase()] ? A ? Q || K : !0 : Q || "";
      ++N;
    }
    function u() {
      (d = "/>" === r.substr(p, 2)) && ++p;
      return d;
    }
    for (var k = 0, H = r.length, p = 1, V = {}, N = 0, d = !1, h, f, l, b, m, L; p < H && 9 > k;) {
      f = r.charAt(p);
      switch(k) {
        case 0:
          C[f] & 3 && (k = 1, l = p);
          break;
        case 1:
          if (C[f] & 4) {
            k = 2, h = r.substring(l, p);
          } else if (">" === f || u()) {
            k = 9, h = r.substring(l, p);
          }
          break;
        case 2:
          if (":" === f) {
            k = 3, l = p;
          } else if (C[f] & 3) {
            k = 4, l = p;
          } else if (">" === f || u()) {
            k = 9;
          }
          break;
        case 3:
          k = C[f] & 3 ? 4 : 9;
          break;
        case 4:
          if ("=" === f) {
            k = 6, b = r.substring(l, p);
          } else if (C[f] & 4) {
            k = 5, b = r.substring(l, p);
          } else if (">" === f || u()) {
            k = 9, x(r.substring(l, p));
          }
          break;
        case 5:
          if (":" === f) {
            k = 3, x(b), l = p;
          } else if (C[f] & 3) {
            k = 4, x(b), l = p;
          } else if ("=" === f) {
            k = 6;
          } else if (">" === f || u()) {
            k = 9, x(b);
          }
          break;
        case 6:
          '"' === f || "'" === f ? (k = 7, m = f, l = p + 1) : C[f] & 4 || (k = 8, l = p);
          L = !1;
          break;
        case 7:
          L || f !== m || (k = 2, x(b, r.substring(l, p)));
          L = "\\" === f && !L;
          break;
        case 8:
          C[f] & 4 ? k = 2 : ">" === f ? k = 9 : !ca[b] && u() && (k = 9), 8 !== k && x(b, r.substring(l, p));
      }
      ++p;
    }
    if (9 === k) {
      k = h.toUpperCase();
      A ||= !!O[h];
      if (!A) {
        for (; t;) {
          if (w[t] && !w[t][k]) {
            E(v, z, t, !1), t = v[v.length - 1];
          } else {
            break;
          }
        }
      }
      (d = d || ea[k]) || (v[v.length] = A ? h : k);
      fa(z, A ? h : k, N ? V : null, d);
      return p;
    }
    return 0;
  }
  for (var D = [], A = !!c.da, M = a.length - e, g, F; a;) {
    (g = F = D[D.length - 1]) && A && (F = g.toUpperCase());
    if (ha[F]) {
      if ("PLAINTEXT" === F) {
        y(c.$, 3, a), a = "";
      } else {
        if (g = a.toUpperCase().indexOf("</" + F), 0 <= g) {
          if (e = g, n(), g = q(D, c, a)) {
            a = a.substring(g);
          } else {
            throw a;
          }
        } else {
          throw a;
        }
      }
    } else if (a.indexOf("<!DOCTYPE ") === e) {
      if (n(), g = a.indexOf(">"), -1 !== g) {
        ia(c, a.substring(10, g)), a = a.substring(g + 1);
      } else {
        throw a;
      }
    } else if (a.indexOf("<?") === e) {
      if (n(), g = a.indexOf("?>"), -1 !== g) {
        y(c.$, 7, a.substring(2, g)), a = a.substring(g + 2);
      } else {
        throw a;
      }
    } else if (a.indexOf("<![CDATA[") === e) {
      if (n(), g = a.indexOf("]]\x3e"), -1 !== g) {
        y(c.$, 4, a.substring(9, g)), a = a.substring(g + 3);
      } else {
        throw a;
      }
    } else if (a.indexOf("\x3c!--") === e) {
      if (n(), g = a.indexOf("--\x3e"), -1 !== g) {
        y(c.$, 8, a.substring(4, g)), a = a.substring(g + 3);
      } else {
        throw a;
      }
    } else if (a.indexOf("</") === e) {
      if (n(), g = q(D, c, a)) {
        a = a.substring(g);
      } else {
        throw a;
      }
    } else if ("<" === a.charAt(e) && C[a.charAt(e + 1)] & 3) {
      if (n(), g = J(D, g, c, a)) {
        a = a.substring(g);
      } else {
        throw a;
      }
    } else {
      g = a.indexOf("<", e), -1 === g ? (y(c.$, 3, a), a = "") : e < g ? e = g : ++e;
    }
    g = a.length - e;
    if (g === M) {
      throw a;
    }
    M = g;
  }
  n();
  E(D, c, "", !0);
}
var O = {xml:!0, svg:!0, math:!0}, ea = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, ga:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0}, ha = {SCRIPT:!0, STYLE:!0, PLAINTEXT:!0, XMP:!0, TEXTAREA:!0}, ca = {action:!0, archive:!0, background:!0, cite:!0, classid:!0, codebase:!0, data:!0, href:!0, longdesc:!0, profile:!0, src:!0, usemap:!0}, ba = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, 
ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, C = {a:2, b:2, c:2, d:2, e:2, f:2, g:2, h:2, i:2, j:2, k:2, l:2, m:2, n:2, o:2, p:2, q:2, r:2, s:2, t:2, u:2, v:2, w:2, x:2, y:2, z:2, A:1, B:1, C:1, D:1, E:1, F:1, G:1, H:1, I:1, J:1, K:1, L:1, M:1, N:1, O:1, P:1, Q:1, R:1, S:1, T:1, U:1, V:1, W:1, X:1, Y:1, Z:1, "\b":4, "\f":4, "\n":4, "\r":4, "\t":4, " ":4};
var ja = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0};
function P(a) {
  return a === +a;
}
function R(a) {
  return a === "" + +a && P(parseInt(a, 10));
}
function ka(a) {
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
function la(a) {
  return !(a && a.pop === [].pop) && !(!a || "object" !== typeof a);
}
function ma(a) {
  var c = a[0];
  var e = 1 === c ? 2 : 1;
  e = 1 === ka(a) ? la(a[e]) ? e + 1 : e : 11 === c ? 1 : 9 === c || 13 === c || 14 === c ? 2 : Infinity;
  c = "";
  var n;
  if (e < a.length) {
    for (n = e; n < a.length;) {
      e = a[n];
      var q = ka(e);
      3 === q ? (c = "" + e === e || P(e) ? c + e : c + e[1], a.splice(n, 1)) : (c && (a.splice(n, 0, R(c) ? +c : c), c = ""), ++n, 1 === q && ma(e));
    }
    c && (a[n] = R(c) ? +c : c);
  }
}
;function S(a, c, e, n, q) {
  this.ba = a;
  this.aa = e;
  a && (a.$ || (a.$ = []), a = a.$, 0 <= c && c < a.length ? a.splice(c, 0, this) : a.push(this));
  switch(e) {
    case 1:
    case 17:
      this.da = q || null;
    case 18:
      this.ea = n;
      break;
    case 3:
    case 8:
    case 9:
    case 4:
    case 7:
      this.fa = n;
  }
}
function T(a) {
  return 17 === a.aa ? 1 : a.aa;
}
S.prototype.close = function() {
  this.aa = 1;
};
function U(a) {
  switch(a.aa) {
    case 3:
    case 4:
    case 7:
    case 8:
    case 9:
      return a.fa;
  }
}
function W(a, c) {
  switch(a.aa) {
    case 3:
    case 4:
    case 7:
    case 8:
    case 9:
      a.fa = c;
  }
}
S.prototype.getParent = function() {
  return this.ba;
};
function X(a) {
  return a.$ && a.$.length;
}
S.prototype.remove = function() {
  var a = this.ba ? this.ba.$.indexOf(this) : -1;
  0 <= a && (this.ba.$.splice(a, 1), this.ba = null);
};
function y(a, c, e, n) {
  return new S(a, X(a), c, e, n);
}
;function na(a, c) {
  c = new oa(c);
  aa(a, c);
  return c.aa;
}
function oa(a) {
  this.ba = a;
  this.aa = new S(null, 0, 11);
}
function ia(a, c) {
  a.aa.aa = 9;
  W(a.aa, c);
}
function fa(a, c, e, n) {
  n ? (a = a.$, new S(a, X(a), 1, c, e)) : a.$ = y(a.$, 17, c, e);
}
function I(a, c, e, n) {
  if (n) {
    a.ba && y(a.$, 18, c);
  } else if (!e || !a.ba) {
    if (c === a.$.ea) {
      a.$.close(), a.$ = a.$.getParent();
    } else {
      throw "End tag error! " + c;
    }
  }
}
;const pa = {script:!0, style:!0, textarea:!0};
let Y = !1;
function Z(a, c, e) {
  function n(d, h, f, l) {
    var b = U(d), m;
    switch(T(d)) {
      case 1:
      case 17:
        var L = {};
        b = d.ea.toLowerCase();
        l = "pre" === b || "listing" === b;
        var K = la(d.da) ? d.da : null, Q = 0, da = "";
        if (K) {
          for (m in K) {
            var G = ja[m] ? 1 : K[m];
            if ("id" === m) {
              b += "#" + G;
            } else if ("class" === m) {
              da = "." + G;
            } else {
              if (m.startsWith(p)) {
                var B = q(G);
                B.ca ? (G = [B.name], v.apply(G, B.ca)) : G = B.name;
              } else {
                R(G) && (G = +G);
              }
              L[m] = G;
              ++Q;
            }
          }
        }
        b += da;
        if (l && z) {
          for (; m = J(d);) {
            if (A(U(m))) {
              W(m, M(U(m), "\n"));
              break;
            } else {
              m.remove();
            }
          }
          for (; m = D(d);) {
            if (A(U(m))) {
              W(m, g(U(m), "\n"));
              break;
            } else {
              m.remove();
            }
          }
        }
        m = Q ? [b, L] : [b];
        for (B = 0; B < X(d); ++B) {
          n(d.$ && d.$[B] || null, m, l || f, pa[b]);
        }
        h.push(m);
        17 !== d.aa || m.unshift(17);
        break;
      case 18:
        h.push([18, d.ea.toLowerCase()]);
        break;
      case 3:
        if (!f && z) {
          if (l) {
            b = g(M(b, "\n"), "\n");
          } else {
            b = b.split("\r\n").join("\n");
            V && (b = b.replace(/([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])\s([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])/g, "$1$2"));
            for (b = b.split("\t").join(" "); 0 <= b.indexOf("\n\n");) {
              b = b.split("\n\n").join("\n");
            }
            b = g(b, "\n");
            r && (B = "\n" === b.charAt(0) && /\n[ ]*$/.test(b));
            for (b = b.split("\n").join(" "); 0 <= b.indexOf("  ");) {
              b = b.split("  ").join(" ");
            }
            B && (b = g(M(b, " "), " "));
            b = b.split("\\u0020").join(" ").split("&#20;").join(" ");
          }
        }
        b && h.push(R(b) ? +b : b);
        break;
      case 4:
        x && h.push([4, R(b) ? +b : b]);
        break;
      case 7:
        B = q(E(b, "?", "?", !0));
        m = [7, B.name];
        B.ca && v.apply(m, B.ca);
        h.push(m);
        break;
      case 8:
        if (b.startsWith("[if") && 0 < b.indexOf("<![endif]")) {
          if (Y = f, d = Z(E(b, ">", "<![endif]", !0), !0, t), Y = !1, d.length || P(d)) {
            m = [13, E(b, "[", "]", !1)], d && d.pop === [].pop ? v.apply(m, d) : m.push(d), h.push(m);
          }
        } else {
          b.startsWith("[if") && 0 < b.indexOf("><!") ? (h.push([14, E(b, "[", "]", !1)]), N = !0) : "<![endif]" === b && N ? (h.push([15]), N = !1) : u && h.push([8, R(b) ? +b : b]);
        }
        break;
      case 9:
        z && (b = b.split("\n").join(" ").split("  ").join(" "));
        h.push(9, b);
        break;
      case 11:
        h.push(11);
    }
  }
  function q(d) {
    var h = d.indexOf(k), f = g(M(-1 === h ? d : d.substr(0, h), " "), " ");
    d = -1 === h ? [] : JSON.parse("[" + d.substring(h + k.length, d.lastIndexOf(H) - 2) + "]");
    return d.length ? {name:f, ca:d} : {name:f};
  }
  function E(d, h, f, l) {
    h = d.indexOf(h) + h.length;
    f = l ? d.lastIndexOf(f) : d.indexOf(f, h);
    return d.substring(h, f);
  }
  function J(d) {
    for (var h = 0, f = X(d), l; h < f; ++h) {
      if (l = d.$ && d.$[h] || null, 1 === T(l) && (l = J(l)), l && 3 === T(l)) {
        return l;
      }
    }
  }
  function D(d) {
    for (var h = X(d), f; h;) {
      f = d;
      var l = --h;
      f = f.$ && f.$[l] || null;
      1 === T(f) && (f = D(f));
      if (f && 3 === T(f)) {
        return f;
      }
    }
  }
  function A(d) {
    return d.split("\n").join("").split(" ").join("").split("\t").join("");
  }
  function M(d, h) {
    for (; d.charAt(0) === h;) {
      d = d.substr(1);
    }
    return d;
  }
  function g(d, h) {
    for (; d.charAt(d.length - 1) === h;) {
      d = d.substr(0, d.length - 1);
    }
    return d;
  }
  const F = [], v = F.push;
  a = na(a, c);
  const t = e || {}, z = -1 === ["none", !1].indexOf(t.trimWhitespace), r = "agressive" === t.trimWhitespace, x = !!t.keepCDATASections, u = !!t.keepComments;
  e = t.argumentBrackets || "()";
  const k = e.substr(0, e.length / 2), H = e.substr(e.length), p = t.instructionAttrPrefix || ":", V = !!t.removeLineBreaksBetweenFullWidth;
  let N = !1;
  n(a, F, Y || !1, !1);
  ma(F);
  return F;
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
  const c = require("plugin-error"), e = require("through2"), n = a && "object" === typeof a ? a : {};
  return e(function(q, E, J) {
    if (q.isNull()) {
      return J();
    }
    if (q.isStream()) {
      return this.emit("error", new c("html2json", "Streaming not supported")), J();
    }
    const D = performance.now();
    if (".html" === q.extname || ".htm" === q.extname || ".xhtml" === q.extname || ".php" === q.extname) {
      try {
        q.contents = Buffer.from(JSON.stringify(Z(q.contents.toString(E), !1, a), null, n.prettify ? "    " : "")), console.log(q.path.split(process.cwd())[1].split("\\").join("/"), performance.now() - D), q.extname = ".json", this.push(q);
      } catch (A) {
        this.emit("error", new c("html2json", A));
      }
    } else {
      this.push(q);
    }
    J();
  });
};

