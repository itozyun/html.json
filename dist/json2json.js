var z = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, aa = {xml:!0, svg:!0, math:!0}, ba = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, COMMAND:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0, area:!0, base:!0, basefont:!0, br:!0, bgsound:!0, col:!0, command:!0, frame:!0, hr:!0, img:!0, input:!0, 
isindex:!0, keygen:!0, link:!0, meta:!0, param:!0, source:!0, track:!0, embed:!0, wbr:!0};
var ca = {}, H;
function da(a) {
  function c(e, d) {
    function f(B, q, k) {
      return t ? t.h(B, q, k) : new ca(!1, 0, B, q, k);
    }
    var t = d === !!d ? null : d;
    d = e[0];
    var n = e[1], w = 1, F = d;
    switch(d) {
      case 9:
        var g = f(11, n);
        h(e, g);
        break;
      case 11:
        g = f(11);
        h(e, g);
        break;
      case 3:
        g = f(3, n);
        break;
      case 4:
        g = f(4, n);
        break;
      case 8:
        g = f(8, n);
        break;
      case 13:
        g = f(13, n);
        h(e, g);
        break;
      case 14:
        g = f(14, n);
        break;
      case 15:
        g = f(15);
        break;
      case 16:
        g = f(16, n);
        h(e, g);
        break;
      case 7:
        g = f(7, n);
        break;
      case 18:
        g = f(18, n);
        break;
      case 1:
      case 17:
        F = n, w = 2;
      default:
        L(F) && (g = f(1 === w ? 1 : d, F, e[w]), h(e, g));
    }
    return g;
  }
  function h(e, d) {
    for (var f = O(e), t; f < e.length; ++f) {
      t = e[f], Q(t) ? d.h(3, t) : R(t) && c(t, d);
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
    var t = e[0];
    e = e.slice(1);
    "function" === typeof c ? f = e.length ? c(t, e) : c(t) : f = e.length ? c[t](e) : c[t]();
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
    var f = d[0], t = d[1], n = f, w = 1;
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
        n = t, w = 2;
      default:
        if (L(n)) {
          if (f = V(d[w])) {
            a: {
              w = d[w];
              for (var F in w) {
                if (0 === F.indexOf(c)) {
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
    for (var f = O(d), t = d.length, n; f < t; ++f) {
      if (n = d[f], R(n) && h(n)) {
        return !0;
      }
    }
    return !1;
  }
  return !h(a);
}
;function Z(a, c, h, e, d, f) {
  function t(b, m, r, I, A, C) {
    var N = b[0], J = b[1], P = 1, K = N, M, fa;
    switch(N) {
      case 9:
      case 11:
        n(b, I, A, C);
        break;
      case 3:
        b = "" + J;
        if (!A && g) {
          if (C) {
            b = oa(na(b, "\n"), "\n");
          } else {
            b = b.split("\r\n").join("\n");
            q && (b = b.replace(/([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])\s([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])/g, "$1$2"));
            for (b = b.split("\t").join(" "); 0 <= b.indexOf("\n\n");) {
              b = b.split("\n\n").join("\n");
            }
            B && (M = "\n" === b.charAt(0) && /\n[ ]*$/.test(b));
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
        if (!k && m) {
          return m.splice(r, 1), -1;
        }
        break;
      case 8:
        if (!l && m) {
          return m.splice(r, 1), -1;
        }
        break;
      case 13:
        n(b, I, A, C);
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
        n(b, I, A, C);
        if (!x && m && 2 === b.length) {
          return m.splice(r, 1), -1;
        }
        break;
      case 7:
        if (w) {
          A = w;
          I = b[1];
          K = b.slice(2);
          var v;
          "function" === typeof A ? v = K.length ? A(I, K) : A(I) : v = K.length ? A[I](K) : A[I]();
          void 0 !== v && null !== v && "" !== v && (Q(v) ? m ? m.splice(r, 1, v) : (b.length = 0, b.push(3, b)) : R(v) && (11 === v[0] ? m ? (v.shift(), v.unshift(r, 1), m.splice.apply(m, v)) : (b.length = 0, b.push.apply(b, v)) : R(v[0]) ? m ? (v.unshift(r, 1), m.splice.apply(m, v)) : (b.length = 0, b.push(11), b.push.apply(b, v)) : m ? m.splice(r, 1, v) : (b.length = 0, b.push(11, v))));
          b = v;
          if (void 0 !== b) {
            if (null === b || "" === b) {
              return m ? m.splice(r, 1) : (a.length = 0, a.push(8, "")), -1;
            }
            if (!Q(b) && R(b)) {
              return -1;
            }
          } else {
            u = !1;
          }
        } else {
          F("onInstruction is void!");
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
            v = N[1];
            C = N[2];
            N = N[0];
            for (D in M) {
              J = D;
              var G = M[D];
              if (S = 0 === D.indexOf(p)) {
                var D = D.substr(p.length);
                "className" === D && (D = "class");
                w ? G = ma(!1, w, D, G, F) : F("onInstruction is void!");
                if (void 0 !== G) {
                  if (delete M[J], R(G)) {
                    L(G[0]) && (M[J] = G, u = !1, ++r);
                  } else if ((!z[D] || !1 !== G) && null !== G) {
                    if (L(G)) {
                      if ("id" === D) {
                        v = G;
                        continue;
                      } else if ("class" === D) {
                        J = G.split(" ");
                        for (G = J.length; G;) {
                          S = J[--G], -1 === (" " + C + " ").indexOf(" " + S + " ") && (C = (C ? " " : "") + S);
                        }
                        continue;
                      }
                    }
                    M[D] = G;
                    ++r;
                  }
                } else {
                  u = !1, ++r;
                }
              } else {
                ++r;
              }
            }
            D = N;
            v && (D += "#" + v);
            C && (D += "." + C);
            b[m] = D;
            0 === r && b.splice(P, 1);
          }
          E || (fa = E = E || aa[K] ? !0 : !1);
          P = !!la[K];
          n(b, I, P || A, !!ka[K]);
          fa && (E = !1);
        }
    }
    return 0;
  }
  function n(b, m, r, I) {
    var A = O(b);
    for (m.push(b); A < b.length; ++A) {
      var C = b[A];
      !Q(C) && R(C) && (C = t(C, b, A, m, r, I)) && (A += C, y = !0);
    }
    m.pop();
  }
  var w = c || null;
  c = "function" === typeof e ? e : null;
  var F = "function" === typeof d ? d : function() {
  };
  d = f || {};
  var g = -1 !== ["normal", !0, "aggressive"].indexOf(d.trimWhitespaces), B = "aggressive" === d.trimWhitespaces, q = !!d.removeNewlineBetweenFullWidthChars, k = !1 !== d.keepCDATASections, l = !1 !== d.keepComments, x = !0 === d.keepEmptyConditionalComment, p = d.instructionAttrPrefix || ":", E = !1, y = !1, u = !0;
  if (R(a)) {
    return t(a, null, 0, [], !1, !1), y && Y(a), c && qa(c, a) && (u = ra(a, p)), u;
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
  function e(q, k, l, x, p) {
    function E() {
      var I = "";
      g && (I = "</" + g + ">", g = "");
      return I;
    }
    k = "";
    var y = q[0], u = q[1], b = 1;
    l = y;
    var m;
    switch(y) {
      case 9:
        k = "<!DOCTYPE " + u + ">" + d(q, !1, p);
        break;
      case 11:
        k = d(q, x, p);
        break;
      case 3:
        k = E() + (p ? u : W("" + u));
        break;
      case 4:
        k = "<![CDATA[" + u + "]]\x3e";
        break;
      case 8:
        k = "\x3c!--" + u + "--\x3e";
        break;
      case 13:
        k = E() + "\x3c!--[" + u + "]>" + d(q, !0, p) + "<![endif]--\x3e";
        break;
      case 16:
        k = E() + "\x3c!--{" + u + "};" + d(q, !0, p) + "--\x3e";
        break;
      case 14:
        k = "\x3c!--[" + u + "]>\x3c!--\x3e";
        break;
      case 15:
        k = "\x3c!--<![endif]--\x3e";
        break;
      case 7:
        t("onInstruction is void!");
        break;
      case 18:
        k = "</" + u + ">";
        break;
      case 17:
        var r = !0;
      case 1:
        l = q[1], b = 2;
      default:
        l = pa(l), y = l[1], u = l[2], l = l[0], b = q[b], "P" !== g || ia[l] ? g = "" : k = E(), k += "<" + l, y && (k += " id=" + X(y, w, B || n)), u && (k += " class=" + X(u, w, B || n)), B || (m = B = B || aa[l] ? !0 : !1), V(b) && (k += f(b)), k = (q = d(q, ha[l], p || ja[l])) ? k + (">" + q) : r ? k + ">" : k + (B ? " />" : ">"), r ? g = "" : B && !q || ea[l] && (!x || "P" !== l) ? g = ba[l] ? "" : l : (k += "</" + l + ">", g = ""), m && (B = !1);
    }
    return k;
  }
  function d(q, k, l) {
    for (var x = [], p = O(q), E = -1, y; p < q.length; ++p) {
      y = q[p], Q(y) ? x[++E] = e([3, y], q, p, !1, l) : R(y) && (y = e(y, q, p, k, l), -1 === y ? --p : x[++E] = y);
    }
    return x.join("");
  }
  function f(q) {
    var k = "", l, x;
    for (l in q) {
      var p = q[l];
      (x = 0 === l.indexOf(F)) && (l = l.substr(F.length));
      "className" === l && (l = "class");
      x && t("onInstruction is void!");
      if (!(null == p || z[l] && !1 === p || (k += " " + l, z[l]))) {
        if ("style" === l && p && "object" === typeof p) {
          var E = void 0, y = "";
          for (E in p) {
            x = p[E];
            "0px" === x && (x = 0);
            for (var u, b = [], m = E.split(""), r = m.length; r;) {
              u = m[--r], "A" <= u && "Z" >= u && (u = "-" + u.toLowerCase()), b[r] = u;
            }
            y += ";" + b.join("") + ":" + W("" + x);
          }
          p = y.substr(1);
          if (!p) {
            continue;
          }
        }
        k += "=" + X(p, w, B || n);
      }
    }
    return k;
  }
  var t = "function" === typeof c ? c : function() {
  };
  c = h || {};
  var n = !0 === c.quotAlways, w = !0 === c.useSingleQuot, F = c.instructionAttrPrefix || ":", g, B = !1;
  if (R(a)) {
    return 7 === U(a) && (a = [11, a]), e(a, null, 0, !1, !1);
  }
}
;Z.gulp = function(a, c, h, e, d) {
  const f = require("plugin-error"), t = require("through2"), n = d || {}, w = n.outputStaticPagesAsHTML, F = n.staticPages && "object" === typeof n.staticPages ? n.staticPages : {};
  n.staticPages = F;
  return t.obj(function(g, B, q) {
    if (g.isNull()) {
      return q();
    }
    if (g.isStream()) {
      return this.emit("error", new f("json2json", "Streaming not supported")), q();
    }
    if (".json" === g.extname) {
      try {
        const k = JSON.parse(g.contents.toString(B)), l = Z(k, a, c, h, e, n);
        let x;
        if (w) {
          const p = g.path.split("\\").join("/").split(".");
          p.pop();
          F[p.join(".")] = l;
        }
        if (l && w) {
          x = sa(k, e, n);
          const p = "." + g.stem.split(".").pop();
          g.stem = g.stem.substr(0, g.stem.length - g.extname.length);
          g.extname = p;
        } else {
          x = JSON.stringify(k, null, n.prettify ? "    " : "");
        }
        g.contents = Buffer.from(x);
        this.push(g);
      } catch (k) {
        this.emit("error", new f("json2json", k));
      }
    } else {
      this.push(g);
    }
    q();
  });
};

