var A = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, aa = {xml:!0, svg:!0, math:!0}, ba = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, COMMAND:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0, area:!0, base:!0, basefont:!0, br:!0, bgsound:!0, col:!0, command:!0, frame:!0, hr:!0, img:!0, input:!0, 
isindex:!0, keygen:!0, link:!0, meta:!0, param:!0, source:!0, track:!0, embed:!0, wbr:!0};
var ca = {}, H;
function da(a) {
  function c(e, d) {
    function f(C, p, g) {
      return u ? u.h(C, p, g) : new ca(!1, 0, C, p, g);
    }
    var u = d === !!d ? null : d;
    d = e[0];
    var q = e[1], t = 1, z = d;
    switch(d) {
      case 9:
      case 13:
      case 16:
        var k = f(d, q);
        h(e, k);
        break;
      case 11:
        k = f(d);
        h(e, k);
        break;
      case 3:
      case 4:
      case 8:
      case 14:
      case 18:
        k = f(d, q);
        break;
      case 15:
        k = f(d);
        break;
      case 7:
        k = [];
        t = 2;
        for (z = e.length; t < z; ++t) {
          k[t - 2] = e[t];
        }
        k = f(d, q, z ? k : null);
        break;
      case 1:
      case 17:
        z = q, t = 2;
      default:
        L(z) && (k = f(1 === t ? 1 : d, z, e[t]), h(e, k));
    }
    return k;
  }
  function h(e, d) {
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
function ma(a, c, h, e, d) {
  var f;
  if (R(e) && L(e[0])) {
    var u = e[0];
    e = e.slice(1);
    "function" === typeof c ? f = e.length ? c(u, e) : c(u) : f = e.length ? c[u](e) : c[u]();
  } else {
    L(e) && ("function" === typeof c ? f = c(e) : f = c[e]());
  }
  return a && R(f) ? ma(!0, c, h, f, d) : f;
}
function W(a) {
  return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
function X(a, c, h) {
  a = W("" + a);
  var e = a.match('"'), d = a.match("'"), f = c ? "'" : '"';
  if (e && d) {
    a = c ? f + a.split("'").join("\\'") + f : f + a.split('"').join('\\"') + f;
  } else if (e) {
    a = "'" + a + "'";
  } else if (d) {
    a = c ? f + a.split("'").join("\\'") + f : f + a + f;
  } else if (h || a.match(/[^0-9a-z\.\-]/g) || 72 < a.length) {
    a = f + a + f;
  }
  return a;
}
function O(a) {
  var c = a[0], h = c === +c ? 2 : 1;
  return 1 === U(a) || 17 === c ? V(a[h]) ? h + 1 : h : 11 === c ? 1 : 9 === c || 13 === c || 16 === c ? 2 : Infinity;
}
function Y(a) {
  var c = O(a), h = "", e;
  if (c < a.length) {
    for (e = c; e < a.length;) {
      c = a[e];
      var d = U(c);
      3 === d ? (h = Q(c) ? h + c : h + c[1], a.splice(e, 1)) : (h && (a.splice(e, 0, T(h) ? +h : h), h = ""), ++e, 1 !== d && 17 !== d && 13 !== d && 16 !== d || Y(c));
    }
    h && (a[e] = T(h) ? +h : h);
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
  var c = a.indexOf("#"), h = a.indexOf("."), e = "", d = "";
  c < h ? (e = a.split(".")[1], a = a.split(".")[0], 0 < c && (d = a.split("#")[1], a = a.split("#")[0])) : h < c && (d = a.split("#")[1], a = a.split("#")[0], 0 < h && (e = a.split(".")[1], a = a.split(".")[0]));
  return [a, d, e];
}
function qa(a, c) {
  var h = da(c);
  H = !1;
  a(h);
  if (a = H) {
    H = !1, c.length = 0, c.push.apply(c, h.j()), Y(c);
  }
  return a;
}
function ra(a, c) {
  function h(d) {
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
              for (var z in t) {
                if (0 === z.indexOf(c)) {
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
      if (q = d[f], R(q) && h(q)) {
        return !0;
      }
    }
    return !1;
  }
  return !h(a);
}
;function Z(a, c, h, e, d, f) {
  function u(b, m, r, I, B, D) {
    var N = b[0], J = b[1], P = 1, K = N, M, fa;
    switch(N) {
      case 9:
      case 11:
        q(b, I, B, D);
        break;
      case 3:
        b = "" + J;
        if (!B && k) {
          if (D) {
            b = oa(na(b, "\n"), "\n");
          } else {
            b = b.split("\r\n").join("\n");
            p && (b = b.replace(/([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])\s([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])/g, "$1$2"));
            for (b = b.split("\t").join(" "); 0 <= b.indexOf("\n\n");) {
              b = b.split("\n\n").join("\n");
            }
            C && (M = "\n" === b.charAt(0) && /\n[ ]*$/.test(b));
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
          m[r] = J;
        } else {
          return m.splice(r, 1), -1;
        }
        break;
      case 4:
        if (!g && m) {
          return m.splice(r, 1), -1;
        }
        break;
      case 8:
        if (!l && m) {
          return m.splice(r, 1), -1;
        }
        break;
      case 13:
        q(b, I, B, D);
        if (!x && m && 2 === b.length) {
          return m.splice(r, 1), -1;
        }
        break;
      case 15:
        b = m[r - 1];
        if (!x && b && 14 === b[0] && b) {
          return m.splice(r - 1, 2), -2;
        }
        break;
      case 16:
        q(b, I, B, D);
        if (!x && m && 2 === b.length) {
          return m.splice(r, 1), -1;
        }
        break;
      case 7:
        if (t) {
          B = t;
          I = b[1];
          K = b.slice(2);
          var w;
          "function" === typeof B ? w = K.length ? B(I, K) : B(I) : w = K.length ? B[I](K) : B[I]();
          void 0 !== w && null !== w && "" !== w && (Q(w) ? m ? m.splice(r, 1, w) : (b.length = 0, b.push(3, b)) : R(w) && (11 === w[0] ? m ? (w.shift(), w.unshift(r, 1), m.splice.apply(m, w)) : (b.length = 0, b.push.apply(b, w)) : R(w[0]) ? m ? (w.unshift(r, 1), m.splice.apply(m, w)) : (b.length = 0, b.push(11), b.push.apply(b, w)) : m ? m.splice(r, 1, w) : (b.length = 0, b.push(11, w))));
          b = w;
          if (void 0 !== b) {
            if (null === b || "" === b) {
              return m ? m.splice(r, 1) : (a.length = 0, a.push(8, "")), -1;
            }
            if (!Q(b) && R(b)) {
              return -1;
            }
          } else {
            v = !1;
          }
        } else {
          z("onInstruction is void!");
        }
        break;
      case 1:
      case 17:
        K = J, P = 2;
      default:
        if (L(K) && 1 + P <= b.length) {
          M = b[P];
          if (V(M)) {
            m = P - 1;
            r = 0;
            var S;
            N = pa(b[m]);
            w = N[1];
            D = N[2];
            N = N[0];
            for (E in M) {
              J = E;
              var G = M[E];
              if (S = 0 === E.indexOf(n)) {
                var E = E.substr(n.length);
                "className" === E && (E = "class");
                t ? G = ma(!1, t, E, G, z) : z("onInstruction is void!");
                if (void 0 !== G) {
                  if (delete M[J], R(G)) {
                    L(G[0]) && (M[J] = G, v = !1, ++r);
                  } else if ((!A[E] || !1 !== G) && null !== G) {
                    if (L(G)) {
                      if ("id" === E) {
                        w = G;
                        continue;
                      } else if ("class" === E) {
                        J = G.split(" ");
                        for (G = J.length; G;) {
                          S = J[--G], -1 === (" " + D + " ").indexOf(" " + S + " ") && (D = (D ? " " : "") + S);
                        }
                        continue;
                      }
                    }
                    M[E] = G;
                    ++r;
                  }
                } else {
                  v = !1, ++r;
                }
              } else {
                ++r;
              }
            }
            E = N;
            w && (E += "#" + w);
            D && (E += "." + D);
            b[m] = E;
            0 === r && b.splice(P, 1);
          }
          F || (fa = F = F || aa[K] ? !0 : !1);
          P = !!la[K];
          q(b, I, P || B, !!ka[K]);
          fa && (F = !1);
        }
    }
    return 0;
  }
  function q(b, m, r, I) {
    var B = O(b);
    for (m.push(b); B < b.length; ++B) {
      var D = b[B];
      !Q(D) && R(D) && (D = u(D, b, B, m, r, I)) && (B += D, y = !0);
    }
    m.pop();
  }
  var t = c || null;
  c = "function" === typeof e ? e : null;
  var z = "function" === typeof d ? d : function() {
  };
  d = f || {};
  var k = -1 !== ["normal", !0, "aggressive"].indexOf(d.trimWhitespaces), C = "aggressive" === d.trimWhitespaces, p = !!d.removeNewlineBetweenFullWidthChars, g = !1 !== d.keepCDATASections, l = !1 !== d.keepComments, x = !0 === d.keepEmptyConditionalComment, n = d.instructionAttrPrefix || ":", F = !1, y = !1, v = !0;
  if (R(a)) {
    return u(a, null, 0, [], !1, !1), y && Y(a), c && qa(c, a) && (v = ra(a, n)), v;
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
function sa(a, c, h) {
  function e(p, g, l, x, n) {
    function F() {
      var I = "";
      k && (I = "</" + k + ">", k = "");
      return I;
    }
    g = "";
    var y = p[0], v = p[1], b = 1;
    l = y;
    var m;
    switch(y) {
      case 9:
        g = "<!DOCTYPE " + v + ">" + d(p, !1, n);
        break;
      case 11:
        g = d(p, x, n);
        break;
      case 3:
        g = F() + (n ? v : W("" + v));
        break;
      case 4:
        g = "<![CDATA[" + v + "]]\x3e";
        break;
      case 8:
        g = "\x3c!--" + v + "--\x3e";
        break;
      case 13:
        g = F() + "\x3c!--[" + v + "]>" + d(p, !0, n) + "<![endif]--\x3e";
        break;
      case 16:
        g = F() + "\x3c!--{" + v + "};" + d(p, !0, n) + "--\x3e";
        break;
      case 14:
        g = "\x3c!--[" + v + "]>\x3c!--\x3e";
        break;
      case 15:
        g = "\x3c!--<![endif]--\x3e";
        break;
      case 7:
        u("onInstruction is void!");
        break;
      case 18:
        g = "</" + v + ">";
        break;
      case 17:
        var r = !0;
      case 1:
        l = p[1], b = 2;
      default:
        l = pa(l), y = l[1], v = l[2], l = l[0], b = p[b], "P" !== k || ia[l] ? k = "" : g = F(), g += "<" + l, y && (g += " id=" + X(y, t, C || q)), v && (g += " class=" + X(v, t, C || q)), C || (m = C = C || aa[l] ? !0 : !1), V(b) && (g += f(b)), g = (p = d(p, ha[l], n || ja[l])) ? g + (">" + p) : r ? g + ">" : g + (C ? " />" : ">"), r ? k = "" : C && !p || ea[l] && (!x || "P" !== l) ? k = ba[l] ? "" : l : (g += "</" + l + ">", k = ""), m && (C = !1);
    }
    return g;
  }
  function d(p, g, l) {
    for (var x = [], n = O(p), F = -1, y; n < p.length; ++n) {
      y = p[n], Q(y) ? x[++F] = e([3, y], p, n, !1, l) : R(y) && (y = e(y, p, n, g, l), -1 === y ? --n : x[++F] = y);
    }
    return x.join("");
  }
  function f(p) {
    var g = "", l, x;
    for (l in p) {
      var n = p[l];
      (x = 0 === l.indexOf(z)) && (l = l.substr(z.length));
      "className" === l && (l = "class");
      x && u("onInstruction is void!");
      if (!(null == n || A[l] && !1 === n || (g += " " + l, A[l]))) {
        if ("style" === l && n && "object" === typeof n) {
          var F = void 0, y = "";
          for (F in n) {
            x = n[F];
            "0px" === x && (x = 0);
            for (var v, b = [], m = F.split(""), r = m.length; r;) {
              v = m[--r], "A" <= v && "Z" >= v && (v = "-" + v.toLowerCase()), b[r] = v;
            }
            y += ";" + b.join("") + ":" + W("" + x);
          }
          n = y.substr(1);
          if (!n) {
            continue;
          }
        }
        g += "=" + X(n, t, C || q);
      }
    }
    return g;
  }
  var u = "function" === typeof c ? c : function() {
  };
  c = h || {};
  var q = !0 === c.quotAlways, t = !0 === c.useSingleQuot, z = c.instructionAttrPrefix || ":", k, C = !1;
  if (R(a)) {
    return 7 === U(a) && (a = [11, a]), e(a, null, 0, !1, !1);
  }
}
;Z.gulp = function(a, c, h, e, d) {
  const f = require("plugin-error"), u = require("through2"), q = d || {}, t = q.outputStaticPagesAsHTML, z = q.staticPages && "object" === typeof q.staticPages ? q.staticPages : {};
  q.staticPages = z;
  return u.obj(function(k, C, p) {
    if (k.isNull()) {
      return p();
    }
    if (k.isStream()) {
      return this.emit("error", new f("json2json", "Streaming not supported")), p();
    }
    if (".json" === k.extname) {
      try {
        const g = JSON.parse(k.contents.toString(C)), l = Z(g, a, c, h, e, q);
        let x;
        if (t) {
          const n = k.path.split("\\").join("/").split(".");
          n.pop();
          z[n.join(".")] = l;
        }
        if (l && t) {
          x = sa(g, e, q);
          const n = "." + k.stem.split(".").pop();
          k.stem = k.stem.substr(0, k.stem.length - k.extname.length);
          k.extname = n;
        } else {
          x = JSON.stringify(g, null, q.prettify ? "    " : "");
        }
        k.contents = Buffer.from(x);
        this.push(k);
      } catch (g) {
        this.emit("error", new f("json2json", g));
      }
    } else {
      this.push(k);
    }
    p();
  });
};

