var B = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, aa = {xml:!0, svg:!0, math:!0}, ba = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, COMMAND:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0, area:!0, base:!0, basefont:!0, br:!0, bgsound:!0, col:!0, command:!0, frame:!0, hr:!0, img:!0, input:!0, 
isindex:!0, keygen:!0, link:!0, meta:!0, param:!0, source:!0, track:!0, embed:!0, wbr:!0};
var ca = {}, I;
function da(a) {
  function c(e, d) {
    function f(D, p, h) {
      return u ? u.h(D, p, h) : new ca(!1, 0, D, p, h);
    }
    var u = d === !!d ? null : d;
    d = e[0];
    var q = e[1], t = 1, A = d;
    switch(d) {
      case 9:
      case 13:
      case 16:
        var l = f(d, q);
        k(e, l);
        break;
      case 11:
        l = f(d);
        k(e, l);
        break;
      case 3:
      case 4:
      case 8:
      case 14:
      case 18:
        l = f(d, q);
        break;
      case 15:
        l = f(d);
        break;
      case 7:
        l = [];
        t = 2;
        for (A = e.length; t < A; ++t) {
          l[t - 2] = e[t];
        }
        l = f(d, q, A ? l : null);
        break;
      case 1:
      case 17:
        A = q, t = 2;
      default:
        L(A) && (l = f(1 === t ? 1 : d, A, e[t]), k(e, l));
    }
    return l;
  }
  function k(e, d) {
    for (var f = O(e), u; f < e.length; ++f) {
      u = e[f], Q(u) ? d.h(3, u) : R(u) && c(u, d);
    }
  }
  return c(a, !1);
}
;var ea = {HTML:!0, HEAD:!0, BODY:!0, P:!0, DT:!0, DD:!0, LI:!0, OPTION:!0, TBODY:!0, THEAD:!0, TFOOT:!0, TD:!0, TH:!0, TR:!0, RB:!0, RBC:!0, RP:!0, RT:!0, RTC:!0, OPTGROUP:!0, CAPTION:!0, COLGROUP:!0}, ha = {A:!0, AUDIO:!0, DEL:!0, INS:!0, MAP:!0, NOSCRIPT:!0, VIDEO:!0}, ia = {H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, ADDRESS:!0, BLOCKQUOTE:!0, DIV:!0, DL:!0, FIELDSET:!0, FORM:!0, HR:!0, LEGEND:!0, MENU:!0, NOSCRIPT:!0, OL:!0, P:!0, PRE:!0, UL:!0, CENTER:!0, DIR:!0, NOFRAMES:!0, MARQUEE:!0}, ja = 
{SCRIPT:!0, STYLE:!0, TEXTAREA:!0, TITLE:!0, PLAINTEXT:!0, XMP:!0, script:!0, style:!0, textarea:!0, title:!0, plaintext:!0, xmp:!0}, ka = {SCRIPT:!0, STYLE:!0, TEXTAREA:!0, script:!0, style:!0, textarea:!0}, la = {PRE:!0, LISTING:!0, pre:!0, listing:!0};
function R(a) {
  return !(!a || a.pop !== [].pop);
}
function L(a) {
  return "" + a === a;
}
function Q(a) {
  return L(a) || a === +a;
}
function T(a) {
  return a === "" + +a && a === a && a !== "" + 1 / 0 && a !== "" + -1 / 0;
}
function U(a) {
  if (Q(a)) {
    a = 3;
  } else {
    if (R(a)) {
      if (L(a[0])) {
        a = 1;
      } else {
        var c = a[0];
        a = c === +c ? a[0] : -1;
      }
    } else {
      a = -1;
    }
  }
  return a;
}
function V(a) {
  return !R(a) && !(!a || "object" !== typeof a);
}
function ma(a, c, k, e, d) {
  var f;
  if (R(e) && L(e[0])) {
    var u = e[0];
    e = e.slice(1);
    "function" === typeof c ? f = e.length ? c(u, e) : c(u) : f = e.length ? c[u](e) : c[u]();
  } else {
    L(e) && ("function" === typeof c ? f = c(e) : f = c[e]());
  }
  return a && R(f) ? ma(!0, c, k, f, d) : f;
}
function W(a) {
  return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
function X(a, c, k) {
  a = W("" + a);
  var e = a.match('"'), d = a.match("'"), f = c ? "'" : '"';
  if (e && d) {
    a = c ? f + a.split("'").join("\\'") + f : f + a.split('"').join('\\"') + f;
  } else if (e) {
    a = "'" + a + "'";
  } else if (d) {
    a = c ? f + a.split("'").join("\\'") + f : f + a + f;
  } else if (k || a.match(/[^0-9a-z\.\-]/g) || 72 < a.length) {
    a = f + a + f;
  }
  return a;
}
function O(a) {
  var c = a[0], k = c === +c ? 2 : 1;
  return 1 === U(a) || 17 === c ? V(a[k]) ? k + 1 : k : 11 === c ? 1 : 9 === c || 13 === c || 16 === c ? 2 : Infinity;
}
function Y(a) {
  var c = O(a), k = "", e;
  if (c < a.length) {
    for (e = c; e < a.length;) {
      c = a[e];
      var d = U(c);
      3 === d ? (k = Q(c) ? k + c : k + c[1], a.splice(e, 1)) : (k && (a.splice(e, 0, T(k) ? +k : k), k = ""), ++e, 1 !== d && 17 !== d && 13 !== d && 16 !== d || Y(c));
    }
    k && (a[e] = T(k) ? +k : k);
  }
}
function na(a, c) {
  for (; a.charAt(0) === c;) {
    a = a.substr(1);
  }
  return a;
}
function oa(a, c) {
  for (; a.charAt(a.length - 1) === c;) {
    a = a.substr(0, a.length - 1);
  }
  return a;
}
function pa(a) {
  var c = a.indexOf("#"), k = a.indexOf("."), e = "", d = "";
  c < k ? (e = a.split(".")[1], a = a.split(".")[0], 0 < c && (d = a.split("#")[1], a = a.split("#")[0])) : k < c && (d = a.split("#")[1], a = a.split("#")[0], 0 < k && (e = a.split(".")[1], a = a.split(".")[0]));
  return [a, d, e];
}
function qa(a, c) {
  var k = da(c);
  I = !1;
  a(k);
  if (a = I) {
    I = !1, c.length = 0, c.push.apply(c, k.j()), Y(c);
  }
  return a;
}
function ra(a, c) {
  function k(d) {
    var f = d[0], u = d[1], q = f, t = 1;
    switch(f) {
      case 9:
      case 11:
      case 13:
      case 16:
        return e(d);
      case 7:
        return !0;
      case 1:
      case 17:
        q = u, t = 2;
      default:
        if (L(q)) {
          if (f = V(d[t])) {
            a: {
              t = d[t];
              for (var A in t) {
                if (0 === A.indexOf(c)) {
                  f = !0;
                  break a;
                }
              }
              f = !1;
            }
          }
          return f ? !0 : e(d);
        }
    }
    return !1;
  }
  function e(d) {
    for (var f = O(d), u = d.length, q; f < u; ++f) {
      if (q = d[f], R(q) && k(q)) {
        return !0;
      }
    }
    return !1;
  }
  return !k(a);
}
;function Z(a, c, k, e, d, f) {
  function u(b, g, r, C, w, E) {
    var N = b[0], J = b[1], P = 1, K = N, M, fa;
    switch(N) {
      case 9:
      case 11:
        q(b, C, w, E);
        break;
      case 3:
        b = "" + J;
        if (!w && l) {
          if (E) {
            b = oa(na(b, "\n"), "\n");
          } else {
            b = b.split("\r\n").join("\n");
            p && (b = b.replace(/([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])\s([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])/g, "$1$2"));
            for (b = b.split("\t").join(" "); 0 <= b.indexOf("\n\n");) {
              b = b.split("\n\n").join("\n");
            }
            D && (M = "\n" === b.charAt(0) && /\n[ ]*$/.test(b));
            b = oa(b, "\n");
            for (b = b.split("\n").join(" "); 0 <= b.indexOf("  ");) {
              b = b.split("  ").join(" ");
            }
            M && (b = oa(na(b, " "), " "));
            b = b.split("\\u0020").join(" ").split("&#x20;").join(" ").split("&#32;").join(" ");
          }
        }
        J = T(b) ? +b : b;
        if ("" !== J) {
          g[r] = J;
        } else {
          return g.splice(r, 1), -1;
        }
        break;
      case 4:
        if (!h && g) {
          return g.splice(r, 1), -1;
        }
        break;
      case 8:
        if (!m && g) {
          return g.splice(r, 1), -1;
        }
        break;
      case 13:
        q(b, C, w, E);
        if (!x && g && 2 === b.length) {
          return g.splice(r, 1), -1;
        }
        break;
      case 15:
        b = g[r - 1];
        if (!x && b && 14 === b[0] && b) {
          return g.splice(r - 1, 2), -2;
        }
        break;
      case 16:
        q(b, C, w, E);
        if (!x && g && 2 === b.length) {
          return g.splice(r, 1), -1;
        }
        break;
      case 7:
        if (t) {
          w = t;
          C = b[1];
          K = b.slice(2);
          var v;
          "function" === typeof w ? v = K.length ? w(C, K) : w(C) : v = K.length ? w[C](K) : w[C]();
          void 0 !== v && null !== v && "" !== v && (Q(v) ? g ? g.splice(r, 1, v) : (b.length = 0, b.push(3, b)) : R(v) && (11 === v[0] ? g ? (v.shift(), v.unshift(r, 1), g.splice.apply(g, v)) : (b.length = 0, b.push.apply(b, v)) : R(v[0]) ? g ? (v.unshift(r, 1), g.splice.apply(g, v)) : (b.length = 0, b.push(11), b.push.apply(b, v)) : g ? g.splice(r, 1, v) : (b.length = 0, b.push(11, v))));
          b = v;
          if (void 0 !== b) {
            if (null === b || "" === b) {
              return g ? g.splice(r, 1) : (a.length = 0, a.push(8, "")), -1;
            }
            if (!Q(b) && R(b)) {
              return -1;
            }
          } else {
            y = !1;
          }
        } else {
          A("onInstruction is void!");
        }
        break;
      case 1:
      case 17:
        K = J, P = 2;
      default:
        if (L(K) && 1 + P <= b.length) {
          M = b[P];
          if (V(M)) {
            g = P - 1;
            r = 0;
            var S;
            N = pa(b[g]);
            v = N[1];
            E = N[2];
            N = N[0];
            for (F in M) {
              J = F;
              var G = M[F];
              if (S = 0 === F.indexOf(n)) {
                var F = F.substr(n.length);
                "className" === F && (F = "class");
                t ? G = ma(!1, t, F, G, A) : A("onInstruction is void!");
                if (void 0 !== G) {
                  if (delete M[J], R(G)) {
                    L(G[0]) && (M[J] = G, y = !1, ++r);
                  } else if ((!B[F] || !1 !== G) && null !== G) {
                    if (L(G)) {
                      if ("id" === F) {
                        v = G;
                        continue;
                      } else if ("class" === F) {
                        J = G.split(" ");
                        for (G = J.length; G;) {
                          S = J[--G], -1 === (" " + E + " ").indexOf(" " + S + " ") && (E = (E ? " " : "") + S);
                        }
                        continue;
                      }
                    }
                    M[F] = G;
                    ++r;
                  }
                } else {
                  y = !1, ++r;
                }
              } else {
                ++r;
              }
            }
            F = N;
            v && (F += "#" + v);
            E && (F += "." + E);
            b[g] = F;
            0 === r && b.splice(P, 1);
          }
          H || (fa = H = H || aa[K] ? !0 : !1);
          P = !!la[K];
          q(b, C, P || w, !!ka[K]);
          fa && (H = !1);
        }
    }
    return 0;
  }
  function q(b, g, r, C) {
    var w = O(b);
    for (g.push(b); w < b.length; ++w) {
      var E = b[w];
      !Q(E) && R(E) && (E = u(E, b, w, g, r, C)) && (w += E, z = !0);
    }
    g.pop();
  }
  var t = c || null;
  c = "function" === typeof e ? e : null;
  var A = "function" === typeof d ? d : function() {
  };
  d = f || {};
  var l = -1 !== ["normal", !0, "aggressive"].indexOf(d.trimWhitespaces), D = "aggressive" === d.trimWhitespaces, p = !!d.removeNewlineBetweenFullWidthChars, h = !1 !== d.keepCDATASections, m = !1 !== d.keepComments, x = !0 === d.keepEmptyConditionalComment, n = d.instructionAttrPrefix || ":", H = !1, z = !1, y = !0;
  if (R(a)) {
    return u(a, null, 0, [], !1, !1), z && Y(a), c && qa(c, a) && (y = ra(a, n)), y;
  }
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
Z.COND_CMT_SHOW_LOWER_END = 15;
Z.NETSCAPE4_COND_CMT_HIDE_LOWER = 16;
Z.ELEMENT_START_TAG = 17;
Z.ELEMENT_END_TAG = 18;
function sa(a, c, k) {
  function e(p, h, m, x, n) {
    function H() {
      var C = "";
      l && (C = "</" + l + ">", l = "");
      return C;
    }
    h = "";
    var z = p[0], y = p[1], b = 1;
    m = z;
    var g;
    switch(z) {
      case 9:
        h = "<!DOCTYPE " + y + ">" + d(p, !1, n);
        break;
      case 11:
        h = d(p, x, n);
        break;
      case 3:
        h = H() + (n ? y : W("" + y));
        break;
      case 4:
        h = "<![CDATA[" + y + "]]\x3e";
        break;
      case 8:
        h = "\x3c!--" + y + "--\x3e";
        break;
      case 13:
        h = H() + "\x3c!--[" + y + "]>" + d(p, !0, n) + "<![endif]--\x3e";
        break;
      case 16:
        h = H() + "\x3c!--{" + y + "};" + d(p, !0, n) + "--\x3e";
        break;
      case 14:
        h = "\x3c!--[" + y + "]>\x3c!--\x3e";
        break;
      case 15:
        h = "\x3c!--<![endif]--\x3e";
        break;
      case 7:
        u("onInstruction is void!");
        break;
      case 18:
        h = "</" + y + ">";
        break;
      case 17:
        var r = !0;
      case 1:
        m = p[1], b = 2;
      default:
        m = pa(m), z = m[1], y = m[2], m = m[0], b = p[b], "P" !== l || ia[m] ? l = "" : h = H(), h += "<" + m, z && (h += " id=" + X(z, t, D || q)), y && (h += " class=" + X(y, t, D || q)), D || (g = D = D || aa[m] ? !0 : !1), V(b) && (h += f(b)), h = (p = d(p, ha[m], n || ja[m])) ? h + (">" + p) : r ? h + ">" : h + (D ? " />" : ">"), r ? l = "" : D && !p || ea[m] && (!x || "P" !== m) ? l = ba[m] ? "" : m : (h += "</" + m + ">", l = ""), g && (D = !1);
    }
    return h;
  }
  function d(p, h, m) {
    for (var x = [], n = O(p), H = -1, z; n < p.length; ++n) {
      z = p[n], Q(z) ? x[++H] = e([3, z], p, n, !1, m) : R(z) && (z = e(z, p, n, h, m), -1 === z ? --n : x[++H] = z);
    }
    return x.join("");
  }
  function f(p) {
    var h = "", m, x;
    for (m in p) {
      var n = p[m];
      (x = 0 === m.indexOf(A)) && (m = m.substr(A.length));
      "className" === m && (m = "class");
      x && u("onInstruction is void!");
      if (!(null == n || B[m] && !1 === n || (h += " " + m, B[m]))) {
        if ("style" === m && n && "object" === typeof n) {
          x = void 0;
          var H = n, z = [], y = -1;
          for (x in H) {
            n = H[x];
            "0px" === n && (n = 0);
            for (var b = ++y, g, r = [], C = x.split(""), w = C.length; w;) {
              g = C[--w], "A" <= g && "Z" >= g && (g = "-" + g.toLowerCase()), r[w] = g;
            }
            z[b] = r.join("") + ":" + W("" + n);
          }
          n = z.join(";").substr(1);
          if (!n) {
            continue;
          }
        }
        h += "=" + X(n, t, D || q);
      }
    }
    return h;
  }
  var u = "function" === typeof c ? c : function() {
  };
  c = k || {};
  var q = !0 === c.quotAlways, t = !0 === c.useSingleQuot, A = c.instructionAttrPrefix || ":", l, D = !1;
  if (R(a)) {
    return 7 === U(a) && (a = [11, a]), e(a, null, 0, !1, !1);
  }
}
;Z.gulp = function(a, c, k, e, d) {
  const f = require("plugin-error"), u = require("through2"), q = d || {}, t = q.outputStaticPagesAsHTML, A = q.staticPages && "object" === typeof q.staticPages ? q.staticPages : {};
  q.staticPages = A;
  return u.obj(function(l, D, p) {
    if (l.isNull()) {
      return p();
    }
    if (l.isStream()) {
      return this.emit("error", new f("json2json", "Streaming not supported")), p();
    }
    if (".json" === l.extname) {
      try {
        const h = JSON.parse(l.contents.toString(D)), m = Z(h, a, c, k, e, q);
        let x;
        if (t) {
          const n = l.path.split("\\").join("/").split(".");
          n.pop();
          A[n.join(".")] = m;
        }
        if (m && t) {
          x = sa(h, e, q);
          const n = "." + l.stem.split(".").pop();
          l.stem = l.stem.substr(0, l.stem.length - l.extname.length);
          l.extname = n;
        } else {
          x = JSON.stringify(h, null, q.prettify ? "    " : "");
        }
        l.contents = Buffer.from(x);
        this.push(l);
      } catch (h) {
        this.emit("error", new f("json2json", h));
      }
    } else {
      this.push(l);
    }
    p();
  });
};

