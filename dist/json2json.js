var w = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, A = {xml:!0, svg:!0, math:!0}, aa = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, COMMAND:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0, area:!0, base:!0, basefont:!0, br:!0, bgsound:!0, col:!0, command:!0, frame:!0, hr:!0, img:!0, input:!0, 
isindex:!0, keygen:!0, link:!0, meta:!0, param:!0, source:!0, track:!0, embed:!0, wbr:!0};
var ba = {HTML:!0, HEAD:!0, BODY:!0, P:!0, DT:!0, DD:!0, LI:!0, OPTION:!0, TBODY:!0, THEAD:!0, TFOOT:!0, TD:!0, TH:!0, TR:!0, RB:!0, RBC:!0, RP:!0, RT:!0, RTC:!0, OPTGROUP:!0, CAPTION:!0, COLGROUP:!0}, ca = {A:!0, AUDIO:!0, DEL:!0, INS:!0, MAP:!0, NOSCRIPT:!0, VIDEO:!0}, da = {H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, ADDRESS:!0, BLOCKQUOTE:!0, DIV:!0, DL:!0, FIELDSET:!0, FORM:!0, HR:!0, LEGEND:!0, MENU:!0, NOSCRIPT:!0, OL:!0, P:!0, PRE:!0, UL:!0, CENTER:!0, DIR:!0, NOFRAMES:!0, MARQUEE:!0}, fa = 
{SCRIPT:!0, STYLE:!0, TEXTAREA:!0, TITLE:!0, PLAINTEXT:!0, XMP:!0, script:!0, style:!0, textarea:!0, title:!0, plaintext:!0, xmp:!0}, ha = {SCRIPT:!0, STYLE:!0, TEXTAREA:!0, script:!0, style:!0, textarea:!0}, ia = {PRE:!0, LISTING:!0, pre:!0, listing:!0};
function H(a) {
  return !(!a || a.pop !== [].pop);
}
function I(a) {
  return !(!a || "object" !== typeof a);
}
function J(a) {
  return "" + a === a;
}
function R(a) {
  return J(a) || a === +a;
}
function S(a) {
  return a === "" + +a && a === a && a !== "" + 1 / 0 && a !== "" + -1 / 0;
}
function T(a) {
  if (R(a)) {
    a = 3;
  } else {
    if (H(a)) {
      if (J(a[0])) {
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
function ja(a, c, d, f) {
  var n = c[1], g = c.slice(2);
  a = g.length ? a(n, g) : a(n);
  void 0 !== a && null !== a && "" !== a && (R(a) ? d ? d.splice(f, 1, a) : (c.length = 0, c.push(3, c)) : H(a) && (11 === a[0] ? d ? (a.shift(), a.unshift(f, 1), d.splice.apply(d, a)) : (c.length = 0, c.push.apply(c, a)) : H(a[0]) ? d ? (a.unshift(f, 1), d.splice.apply(d, a)) : (c.length = 0, c.push(11), c.push.apply(c, a)) : d ? d.splice(f, 1, a) : (c.length = 0, c.push(11, a))));
  return a;
}
function U(a, c, d, f, n) {
  if (H(f) && J(f[0])) {
    var g = f[0];
    f = f.slice(1);
    g = f.length ? c(g, f) : c(g);
  } else {
    J(f) && (g = c(f));
  }
  return a && H(g) ? U(!0, c, d, g, n) : g;
}
function V(a) {
  return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
function W(a, c, d) {
  a = V("" + a);
  var f = a.match('"'), n = a.match("'"), g = c ? "'" : '"';
  if (f && n) {
    a = c ? g + a.split("'").join("\\'") + g : g + a.split('"').join('\\"') + g;
  } else if (f) {
    a = "'" + a + "'";
  } else if (n) {
    a = c ? g + a.split("'").join("\\'") + g : g + a + g;
  } else if (d || a.match(/[^0-9a-z\.\-]/g) || 72 < a.length) {
    a = g + a + g;
  }
  return a;
}
function X(a) {
  var c = a[0], d = c === +c ? 2 : 1;
  1 === T(a) || 17 === c ? (a = a[d], d = !H(a) && I(a) ? d + 1 : d) : d = 11 === c ? 1 : 9 === c || 13 === c || 16 === c ? 2 : Infinity;
  return d;
}
function ka(a) {
  var c = X(a), d = "", f;
  if (c < a.length) {
    for (f = c; f < a.length;) {
      c = a[f];
      var n = T(c);
      3 === n ? (d = R(c) ? d + c : d + c[1], a.splice(f, 1)) : (d && (a.splice(f, 0, S(d) ? +d : d), d = ""), ++f, 1 !== n && 17 !== n && 13 !== n && 16 !== n || ka(c));
    }
    d && (a[f] = S(d) ? +d : d);
  }
}
function la(a, c) {
  for (; a.charAt(0) === c;) {
    a = a.substr(1);
  }
  return a;
}
function Y(a, c) {
  for (; a.charAt(a.length - 1) === c;) {
    a = a.substr(0, a.length - 1);
  }
  return a;
}
function ma(a) {
  var c = a.indexOf("#"), d = a.indexOf("."), f = "", n = "";
  c < d ? (f = a.split(".")[1], a = a.split(".")[0], 0 < c && (n = a.split("#")[1], a = a.split("#")[0])) : d < c && (n = a.split("#")[1], a = a.split("#")[0], 0 < d && (f = a.split(".")[1], a = a.split(".")[0]));
  return [a, n, f];
}
;function Z(a, c, d, f, n) {
  function g(b, h, k, x, e, v) {
    var E = b[0], C = b[1], K = 1, O = E, ea;
    switch(E) {
      case 9:
        F(b, x, e, v);
        break;
      case 11:
        F(b, x, e, v);
        break;
      case 3:
        b = "" + C;
        if (!e && L) {
          if (v) {
            b = Y(la(b, "\n"), "\n");
          } else {
            b = b.split("\r\n").join("\n");
            y && (b = b.replace(/([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])\s([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])/g, "$1$2"));
            for (b = b.split("\t").join(" "); 0 <= b.indexOf("\n\n");) {
              b = b.split("\n\n").join("\n");
            }
            if (G) {
              var M = "\n" === b.charAt(0) && /\n[ ]*$/.test(b);
            }
            b = Y(b, "\n");
            for (b = b.split("\n").join(" "); 0 <= b.indexOf("  ");) {
              b = b.split("  ").join(" ");
            }
            M && (b = Y(la(b, " "), " "));
            b = b.split("\\u0020").join(" ").split("&#x20;").join(" ").split("&#32;").join(" ");
          }
        }
        C = S(b) ? +b : b;
        if ("" !== C) {
          h[k] = C;
        } else {
          return h.splice(k, 1), -1;
        }
        break;
      case 4:
        if (!D && h) {
          return h.splice(k, 1), -1;
        }
        break;
      case 8:
        if (!l && h) {
          return h.splice(k, 1), -1;
        }
        break;
      case 13:
        F(b, x, e, v);
        if (!u && h && 2 === b.length) {
          return h.splice(k, 1), -1;
        }
        break;
      case 15:
        e = h[k - 1];
        if (!u && e && 14 === e[0] && e) {
          return h.splice(k - 1, 2), -2;
        }
        break;
      case 16:
        F(b, x, e, v);
        if (!u && h && 2 === b.length) {
          return h.splice(k, 1), -1;
        }
        break;
      case 7:
        e = ja(N, b, h, k);
        if (void 0 !== e) {
          if (null === e || "" === e) {
            return h ? h.splice(k, 1) : (a.length = 0, a.push(8, "")), -1;
          }
          if (!R(e) && H(e)) {
            return -1;
          }
        } else {
          r = !1;
        }
        break;
      case 1:
      case 17:
        O = C, K = 2;
      default:
        if (J(O) && 1 + K <= b.length) {
          E = b[K];
          if (!H(E) && I(E)) {
            h = K - 1;
            k = 0;
            var Q;
            C = ma(b[h]);
            v = C[1];
            M = C[2];
            C = C[0];
            for (z in E) {
              var P = z;
              var B = E[z];
              if (Q = 0 === z.indexOf(q)) {
                var z = z.substr(q.length);
                "className" === z && (z = "class");
                B = U(!1, N, z, B, t);
                if (void 0 !== B) {
                  if (delete E[P], H(B)) {
                    J(B[0]) && (E[P] = B, r = !1, ++k);
                  } else if ((!w[z] || !1 !== B) && null !== B) {
                    if (J(B)) {
                      if ("id" === z) {
                        v = B;
                        continue;
                      } else if ("class" === z) {
                        P = B.split(" ");
                        for (B = P.length; B;) {
                          Q = P[--B], -1 === (" " + M + " ").indexOf(" " + Q + " ") && (M = (M ? " " : "") + Q);
                        }
                        continue;
                      }
                    }
                    E[z] = B;
                    ++k;
                  }
                } else {
                  r = !1, ++k;
                }
              } else {
                ++k;
              }
            }
            z = C;
            v && (z += "#" + v);
            M && (z += "." + M);
            b[h] = z;
            0 === k && b.splice(K, 1);
          }
          p || (ea = p = p || A[O] ? !0 : !1);
          K = !!ia[O];
          F(b, x, K || e, !!ha[O]);
          ea && (p = !1);
        }
    }
    return 0;
  }
  function F(b, h, k, x) {
    var e = X(b);
    for (h.push(b); e < b.length; ++e) {
      var v = b[e];
      !R(v) && H(v) && (v = g(v, b, e, h, k, x)) && (e += v, m = !0);
    }
    h.pop();
  }
  var N = "function" === typeof c ? c : function() {
  }, t = "function" === typeof f ? f : function() {
  };
  c = I(c) ? c : I(d) ? d : I(f) ? f : n || {};
  var L = -1 !== ["normal", !0, "aggressive"].indexOf(c.trimWhitespaces), G = "aggressive" === c.trimWhitespaces, y = !!c.removeNewlineBetweenFullWidthChars, D = !1 !== c.keepCDATASections, l = !1 !== c.keepComments, u = !0 === c.keepEmptyConditionalComment, q = c.instructionAttrPrefix || ":", p = !1, m = !1, r = !0;
  if (H(a)) {
    return g(a, null, 0, [], !1, !1), m && ka(a), r;
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
function na(a, c, d, f) {
  function n(l, u, q, p, m) {
    function r() {
      var C = "";
      y && (C = "</" + y + ">", y = "");
      return C;
    }
    var b = "", h = l[0], k = l[1], x = 1, e = h, v;
    switch(h) {
      case 9:
        b = "<!DOCTYPE " + k + ">" + g(l, !1, m);
        break;
      case 11:
        b = g(l, p, m);
        break;
      case 3:
        b = r() + (m ? k : V("" + k));
        break;
      case 4:
        b = "<![CDATA[" + k + "]]\x3e";
        break;
      case 8:
        b = "\x3c!--" + k + "--\x3e";
        break;
      case 13:
        b = r() + "\x3c!--[" + k + "]>" + g(l, !0, m) + "<![endif]--\x3e";
        break;
      case 16:
        b = r() + "\x3c!--{" + k + "};" + g(l, !0, m) + "--\x3e";
        break;
      case 14:
        b = "\x3c!--[" + k + "]>\x3c!--\x3e";
        break;
      case 15:
        b = "\x3c!--<![endif]--\x3e";
        break;
      case 7:
        p = ja(c, l, u, q);
        if (void 0 !== p && null !== p && "" !== p && (R(p) || H(p))) {
          return -1;
        }
        break;
      case 18:
        b = "</" + k + ">";
        break;
      case 17:
        var E = !0;
      case 1:
        e = l[1], x = 2;
      default:
        e = ma(e), u = e[1], q = e[2], e = e[0], "P" !== y || da[e] ? y = "" : b = r(), b += "<" + e, u && (b += " id=" + W(u, L, D || t)), q && (b += " class=" + W(q, L, D || t)), D || (v = D = D || A[e] ? !0 : !1), x = l[x], !H(x) && I(x) && (b += " " + F(x)), b = (l = g(l, ca[e], m || fa[e])) ? b + (">" + l) : E ? b + ">" : b + (D ? " />" : ">"), E ? y = "" : D && !l || ba[e] && (!p || "P" !== e) ? y = aa[e] ? "" : e : (b += "</" + e + ">", y = ""), v && (D = !1);
    }
    return b;
  }
  function g(l, u, q) {
    for (var p = "", m = X(l), r; m < l.length; ++m) {
      r = l[m], R(r) ? p += n([3, r], l, m, !1, q) : H(r) && (r = n(r, l, m, u, q), -1 === r ? --m : p += r);
    }
    return p;
  }
  function F(l) {
    var u = "", q, p;
    for (q in l) {
      var m = l[q];
      (p = 0 === q.indexOf(G)) && (q = q.substr(G.length));
      "className" === q && (q = "class");
      p && (m = U(!0, c, q, m, N));
      if (!(null == m || w[q] && !1 === m || (u += " " + q, w[q]))) {
        if ("style" === q && I(m)) {
          var r = void 0, b = "";
          for (r in m) {
            p = m[r];
            "0px" === p && (p = 0);
            for (var h, k = [], x = r.split(""), e = x.length; e;) {
              h = x[--e], "A" <= h && "Z" >= h && (h = "-" + h.toLowerCase()), k[e] = h;
            }
            b += ";" + k.join("") + ":" + V("" + p);
          }
          m = b.substr(1);
          if (!m) {
            continue;
          }
        }
        u += "=" + W(m, L, D || t);
      }
    }
    return u.substr(1);
  }
  var N = "function" === typeof d ? d : function() {
  };
  d = d && "object" === typeof d ? d : f || {};
  var t = !0 === d.quotAlways, L = !0 === d.useSingleQuot, G = d.instructionAttrPrefix || ":", y, D = !1;
  if (H(a)) {
    return 7 === T(a) && (a = [11, a]), n(a, null, 0, !1, !1);
  }
}
;Z.gulp = function(a, c, d) {
  const f = require("plugin-error"), n = require("through2"), g = c && "object" === typeof c ? c : d && "object" === typeof d ? d : {}, F = g.outputStaticPagesAsHTML, N = g.staticPages && "object" === typeof g.staticPages ? g.staticPages : {};
  g.staticPages = N;
  return n.obj(function(t, L, G) {
    if (t.isNull()) {
      return G();
    }
    if (t.isStream()) {
      return this.emit("error", new f("json2json", "Streaming not supported")), G();
    }
    if (".json" === t.extname) {
      try {
        const y = JSON.parse(t.contents.toString(L)), D = Z(y, a, c, d);
        let l;
        if (F) {
          const u = t.path.split("\\").join("/").split(".");
          u.pop();
          N[u.join(".")] = D;
        }
        if (D && F) {
          l = na(y, a, c, d);
          const u = "." + t.stem.split(".").pop();
          t.stem = t.stem.substr(0, t.stem.length - t.extname.length);
          t.extname = u;
        } else {
          l = JSON.stringify(y, null, g.prettify ? "    " : "");
        }
        t.contents = Buffer.from(l);
        this.push(t);
      } catch (y) {
        this.emit("error", new f("json2json", y));
      }
    } else {
      this.push(t);
    }
    G();
  });
};

