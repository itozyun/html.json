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
  var f = 0;
  function l() {
    f && (z(b, m(a.substring(0, f))), a = a.substring(f), f = 0);
  }
  function m(u) {
    return u.split("&lt;").join("<").split("&gt;").join(">").split("&amp;").join("&");
  }
  function H(u, B, D) {
    for (var t = 0, w = D.length, v = 2, k, I, r; v < w && 3 !== t;) {
      I = D.charAt(v);
      switch(t) {
        case 0:
          E[I] & 3 && (t = 1, r = v);
          break;
        case 1:
          E[I] & 4 ? t = 2 : ">" === I && (t = 3);
          1 !== t && (k = D.substring(r, v));
          break;
        case 2:
          ">" === I && (t = 3);
      }
      ++v;
    }
    return 3 === t ? (G(u, B, A ? k : k.toUpperCase(), !1), v) : 0;
  }
  function G(u, B, D, t) {
    var w = 0, v = u.length;
    if (D) {
      for (w = v; 0 <= w && u[--w] !== D;) {
      }
    }
    if (0 <= w) {
      for (; w < v;) {
        ba(B, u[--v], t && !x[u[v]], !1), A && ca[u[v]] && (A = !!B.ca);
      }
      u.length = w;
    } else {
      ba(B, D, !1, !0);
    }
  }
  function P(u, B, D, t) {
    function w(Q, C) {
      d[Q] = da[Q.toLowerCase()] ? A ? m(C || Q) : !0 : m(C || "");
      ++h;
    }
    function v() {
      (p = "/>" === t.substr(r, 2)) && ++r;
      return p;
    }
    for (var k = 0, I = t.length, r = 1, d = {}, h = 0, p = !1, q, e, y, c, R, N; r < I && 9 > k;) {
      e = t.charAt(r);
      switch(k) {
        case 0:
          E[e] & 3 && (k = 1, y = r);
          break;
        case 1:
          if (E[e] & 4) {
            k = 2, q = t.substring(y, r);
          } else if (">" === e || v()) {
            k = 9, q = t.substring(y, r);
          }
          break;
        case 2:
          if (":" === e) {
            k = 3, y = r;
          } else if (E[e] & 3) {
            k = 4, y = r;
          } else if (">" === e || v()) {
            k = 9;
          }
          break;
        case 3:
          k = E[e] & 3 ? 4 : 9;
          break;
        case 4:
          if ("=" === e) {
            k = 6, c = t.substring(y, r);
          } else if (E[e] & 4) {
            k = 5, c = t.substring(y, r);
          } else if (">" === e || v()) {
            k = 9, w(t.substring(y, r));
          }
          break;
        case 5:
          if (":" === e) {
            k = 3, w(c), y = r;
          } else if (E[e] & 3) {
            k = 4, w(c), y = r;
          } else if ("=" === e) {
            k = 6;
          } else if (">" === e || v()) {
            k = 9, w(c);
          }
          break;
        case 6:
          '"' === e || "'" === e ? (k = 7, R = e, y = r + 1) : E[e] & 4 || (k = 8, y = r);
          N = !1;
          break;
        case 7:
          N || e !== R || (k = 2, w(c, t.substring(y, r)));
          N = "\\" === e && !N;
          break;
        case 8:
          E[e] & 4 ? k = 2 : ">" === e ? k = 9 : !ea[c] && v() && (k = 9), 8 !== k && w(c, t.substring(y, r));
      }
      ++r;
    }
    if (9 === k) {
      k = q.toUpperCase();
      A ||= !!ca[q];
      if (!A) {
        for (; B;) {
          if (x[B] && !x[B][k]) {
            G(u, D, B, !1), B = u[u.length - 1];
          } else {
            break;
          }
        }
      }
      (p = p || !!fa[k]) || (u[u.length] = A ? q : k);
      ha(D, A ? q : k, h ? d : null, p);
      return r;
    }
    return 0;
  }
  for (var F = [], A = !!b.ca, L = a.length - f, g, M; a;) {
    (g = M = F[F.length - 1]) && A && (M = g.toUpperCase());
    if (ia[M]) {
      if ("PLAINTEXT" === M) {
        z(b, m(a)), a = "";
      } else {
        if (g = a.toUpperCase().indexOf("</" + M), 0 <= g) {
          if (f = g, l(), g = H(F, b, a)) {
            a = a.substring(g);
          } else {
            throw a;
          }
        } else {
          throw a;
        }
      }
    } else if (a.indexOf("<!DOCTYPE ") === f) {
      if (l(), g = a.indexOf(">"), -1 !== g) {
        ja(b, a.substring(10, g)), a = a.substring(g + 1);
      } else {
        throw a;
      }
    } else if (a.indexOf("<?") === f) {
      if (l(), g = a.indexOf("?>"), -1 !== g) {
        ka(b, m(a.substring(2, g))), a = a.substring(g + 2);
      } else {
        throw a;
      }
    } else if (a.indexOf("<![CDATA[") === f) {
      if (l(), g = a.indexOf("]]\x3e"), -1 !== g) {
        la(b, m(a.substring(9, g))), a = a.substring(g + 3);
      } else {
        throw a;
      }
    } else if (a.indexOf("\x3c!--") === f) {
      if (l(), g = a.indexOf("--\x3e"), -1 !== g) {
        ma(b, m(a.substring(4, g))), a = a.substring(g + 3);
      } else {
        throw a;
      }
    } else if (a.indexOf("</") === f) {
      if (l(), g = H(F, b, a)) {
        a = a.substring(g);
      } else {
        throw a;
      }
    } else if ("<" === a.charAt(f) && E[a.charAt(f + 1)] & 3) {
      if (l(), g = P(F, g, b, a)) {
        a = a.substring(g);
      } else {
        throw a;
      }
    } else {
      g = a.indexOf("<", f), -1 === g ? (z(b, m(a)), a = "") : f < g ? f = g : ++f;
    }
    g = a.length - f;
    if (g === L) {
      throw a;
    }
    L = g;
  }
  l();
  G(F, b, "", !0);
}
var ca = {xml:!0, svg:!0, math:!0}, fa = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, ga:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0}, ia = {SCRIPT:!0, STYLE:!0, PLAINTEXT:!0, XMP:!0, TEXTAREA:!0}, ea = {action:!0, archive:!0, background:!0, cite:!0, classid:!0, codebase:!0, data:!0, href:!0, longdesc:!0, profile:!0, src:!0, usemap:!0}, da = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, 
ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, E = {a:2, b:2, c:2, d:2, e:2, f:2, g:2, h:2, i:2, j:2, k:2, l:2, m:2, n:2, o:2, p:2, q:2, r:2, s:2, t:2, u:2, v:2, w:2, x:2, y:2, z:2, A:1, B:1, C:1, D:1, E:1, F:1, G:1, H:1, I:1, J:1, K:1, L:1, M:1, N:1, O:1, P:1, Q:1, R:1, S:1, T:1, U:1, V:1, W:1, X:1, Y:1, Z:1, "\b":4, "\f":4, "\n":4, "\r":4, "\t":4, " ":4};
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
  var f = J(b) ? 2 : 1;
  f = 1 === oa(a) || 17 === b ? pa(a[f]) ? f + 1 : f : 11 === b ? 1 : 9 === b || 13 === b || 16 === b ? 2 : Infinity;
  b = "";
  var l;
  if (f < a.length) {
    for (l = f; l < a.length;) {
      f = a[l];
      var m = oa(f);
      3 === m ? (b = "" + f === f || J(f) ? b + f : b + f[1], a.splice(l, 1)) : (b && (a.splice(l, 0, K(b) ? +b : b), b = ""), ++l, 1 !== m && 17 !== m || qa(f));
    }
    b && (a[l] = K(b) ? +b : b);
  }
}
;function O(a, b, f, l, m) {
  this.ba = a;
  this.aa = f;
  a && (a.$ || (a.$ = []), a = a.$, 0 <= b && b < a.length ? a.splice(b, 0, this) : a.push(this));
  switch(f) {
    case 1:
    case 17:
      this.ea = m || null;
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
function U(a, b) {
  switch(a.aa) {
    case 3:
    case 4:
    case 7:
    case 8:
    case 9:
      a.fa = b;
  }
}
function V(a) {
  return a.$ && a.$.length;
}
function W(a, b) {
  return a.$ && a.$[b] || null;
}
O.prototype.remove = function() {
  var a = this.ba ? this.ba.$.indexOf(this) : -1;
  0 <= a && (this.ba.$.splice(a, 1), this.ba = null);
};
function X(a, b, f, l) {
  return new O(a, V(a), b, f, l);
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
  a.aa.aa = 9;
  U(a.aa, b);
}
function ha(a, b, f, l) {
  l ? (a = a.$, new O(a, V(a), 1, b, f)) : a.$ = X(a.$, 17, b, f);
}
function ba(a, b, f, l) {
  if (l) {
    a.ba && X(a.$, 18, b);
  } else if (!f || !a.ba) {
    if (b === a.$.ca) {
      a.$.close(), a.$ = a.$.ba;
    } else {
      throw "End tag error! " + b;
    }
  }
}
function z(a, b) {
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
function Z(a, b, f) {
  function l(d, h, p, q) {
    var e;
    switch(S(d)) {
      case 1:
      case 17:
        var y = {};
        q = d.ca.toLowerCase();
        var c = "pre" === q;
        var R = pa(d.ea) ? d.ea : null, N = 0, Q = "";
        if (R) {
          for (e in R) {
            var C = na[e] ? 1 : R[e];
            if ("id" === e) {
              q += "#" + C;
            } else if ("class" === e) {
              Q = "." + C;
            } else {
              if (e.startsWith(k)) {
                var n = m(C);
                n.da ? (C = [n.name], M.apply(C, n.da)) : C = n.name;
              } else {
                K(C) && (C = +C);
              }
              y[e] = C;
              ++N;
            }
          }
        }
        q += Q;
        if (c && u) {
          for (; e = G(d);) {
            if (F(T(e))) {
              U(e, A(T(e), "\n"));
              break;
            } else {
              e.remove();
            }
          }
          for (; e = P(d);) {
            if (F(T(e))) {
              U(e, L(T(e), "\n"));
              break;
            } else {
              e.remove();
            }
          }
        }
        e = N ? [q, y] : [q];
        for (n = 0; n < V(d); ++n) {
          l(W(d, n), e, c || p, sa[q]);
        }
        h.push(e);
        17 !== d.aa || e.unshift(17);
        break;
      case 18:
        h.push([18, d.ca.toLowerCase()]);
        break;
      case 3:
        c = T(d);
        if (!p && u) {
          if (q) {
            c = L(A(c, "\n"), "\n");
          } else {
            c = c.split("\r\n").join("\n");
            I && (c = c.replace(/([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])\s([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])/g, "$1$2"));
            for (c = c.split("\t").join(" "); 0 <= c.indexOf("\n\n");) {
              c = c.split("\n\n").join("\n");
            }
            c = L(c, "\n");
            B && (n = "\n" === c.charAt(0) && /\n[ ]*$/.test(c));
            for (c = c.split("\n").join(" "); 0 <= c.indexOf("  ");) {
              c = c.split("  ").join(" ");
            }
            n && (c = L(A(c, " "), " "));
            c = c.split("\\u0020").join(" ").split("&#x20;").join(" ");
          }
        }
        c && h.push(K(c) ? +c : c);
        break;
      case 4:
        c = T(d);
        D && h.push([4, K(c) ? +c : c]);
        break;
      case 7:
        c = T(d);
        n = m(c);
        e = [7, n.name];
        n.da && M.apply(e, n.da);
        h.push(e);
        break;
      case 8:
        c = T(d);
        if (c.startsWith("[if") && 0 < c.indexOf("<![endif]")) {
          d = Y(H(c, ">", "<![endif]", !0), !0);
          e = [13, H(c, "[", "]", !1)];
          for (n = 0; n < V(d); ++n) {
            l(W(d, n), e, p, q);
          }
          (2 < e.length || t) && h.push(e);
        } else if (c.startsWith("{") && 2 < c.indexOf("};")) {
          d = Y(H(c, "};", "--\x3e", !0), !0);
          e = [16, c.substring(0, c.indexOf("};"))];
          for (n = 0; n < V(d); ++n) {
            l(W(d, n), e, p, q);
          }
          (2 < e.length || t) && h.push(e);
        } else {
          c.startsWith("[if") && 0 < c.indexOf("><!") ? (h.push([14, H(c, "[", "]", !1)]), r = !0) : "<![endif]" === c && r ? (h.push([15]), r = !1) : t && h.push([8, K(c) ? +c : c]);
        }
        break;
      case 9:
        c = T(d);
        u && (c = c.split("\n").join(" ").split("  ").join(" "));
        e = [9, c];
        h.push(e);
        for (n = 0; n < V(d); ++n) {
          l(W(d, n), e, !1, !1);
        }
        break;
      case 11:
        for (e = [11], h.push(e), n = 0; n < V(d); ++n) {
          l(W(d, n), e, p, q);
        }
    }
  }
  function m(d) {
    var h = d.indexOf(w), p = L(A(-1 === h ? d : d.substr(0, h), " "), " ");
    d = -1 === h ? [] : JSON.parse("[" + d.substring(h + w.length, d.lastIndexOf(v) - 2) + "]");
    return d.length ? {name:p, da:d} : {name:p};
  }
  function H(d, h, p, q) {
    h = d.indexOf(h) + h.length;
    p = q ? d.lastIndexOf(p) : d.indexOf(p, h);
    return d.substring(h, p);
  }
  function G(d) {
    for (var h = 0, p = V(d), q; h < p; ++h) {
      if (q = W(d, h), 1 === S(q) && (q = G(q)), q && 3 === S(q)) {
        return q;
      }
    }
  }
  function P(d) {
    for (var h = V(d), p; h;) {
      if (p = W(d, --h), 1 === S(p) && (p = P(p)), p && 3 === S(p)) {
        return p;
      }
    }
  }
  function F(d) {
    return d.split("\n").join("").split(" ").join("").split("\t").join("");
  }
  function A(d, h) {
    for (; d.charAt(0) === h;) {
      d = d.substr(1);
    }
    return d;
  }
  function L(d, h) {
    for (; d.charAt(d.length - 1) === h;) {
      d = d.substr(0, d.length - 1);
    }
    return d;
  }
  const g = [], M = g.push;
  a = Y(a, b);
  f = f || {};
  const u = -1 === ["none", !1].indexOf(f.trimWhitespace), B = "agressive" === f.trimWhitespace, D = !!f.keepCDATASections, t = !!f.keepComments;
  b = f.argumentBrackets || "()";
  const w = b.substr(0, b.length / 2), v = b.substr(b.length), k = f.instructionAttrPrefix || ":", I = !!f.removeLineBreaksBetweenFullWidth;
  let r = !1;
  l(a, g, !1, !1);
  qa(g[0]);
  return g[0];
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
  const b = require("plugin-error"), f = require("through2"), l = a && "object" === typeof a ? a : {};
  return f(function(m, H, G) {
    if (m.isNull()) {
      return G();
    }
    if (m.isStream()) {
      return this.emit("error", new b("html2json", "Streaming not supported")), G();
    }
    const P = performance.now();
    if (".html" === m.extname || ".htm" === m.extname || ".xhtml" === m.extname || ".php" === m.extname) {
      try {
        m.contents = Buffer.from(JSON.stringify(Z(m.contents.toString(H), !1, a), null, l.prettify ? "    " : "")), console.log(m.path.split(process.cwd())[1].split("\\").join("/"), performance.now() - P), m.extname = ".json", this.push(m);
      } catch (F) {
        this.emit("error", new b("html2json", F));
      }
    } else {
      this.push(m);
    }
    G();
  });
};

