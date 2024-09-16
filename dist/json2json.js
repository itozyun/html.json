var y = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, E = {xml:!0, svg:!0, math:!0}, aa = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, COMMAND:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0, area:!0, base:!0, basefont:!0, br:!0, bgsound:!0, col:!0, command:!0, frame:!0, hr:!0, img:!0, input:!0, 
isindex:!0, keygen:!0, link:!0, meta:!0, param:!0, source:!0, track:!0, embed:!0, wbr:!0};
var ba = {HTML:!0, HEAD:!0, BODY:!0, P:!0, DT:!0, DD:!0, LI:!0, OPTION:!0, TBODY:!0, THEAD:!0, TFOOT:!0, TD:!0, TH:!0, TR:!0, RB:!0, RBC:!0, RP:!0, RT:!0, RTC:!0, OPTGROUP:!0, CAPTION:!0, COLGROUP:!0}, ca = {A:!0, AUDIO:!0, DEL:!0, INS:!0, MAP:!0, NOSCRIPT:!0, VIDEO:!0}, da = {H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, ADDRESS:!0, BLOCKQUOTE:!0, DIV:!0, DL:!0, FIELDSET:!0, FORM:!0, HR:!0, LEGEND:!0, MENU:!0, NOSCRIPT:!0, OL:!0, P:!0, PRE:!0, UL:!0, CENTER:!0, DIR:!0, NOFRAMES:!0, MARQUEE:!0}, fa = 
{SCRIPT:!0, STYLE:!0, TEXTAREA:!0, TITLE:!0, PLAINTEXT:!0, XMP:!0, script:!0, style:!0, textarea:!0, title:!0, plaintext:!0, xmp:!0}, ha = {SCRIPT:!0, STYLE:!0, TEXTAREA:!0, script:!0, style:!0, textarea:!0}, ia = {PRE:!0, LISTING:!0, pre:!0, listing:!0};
function N(a) {
  return !(!a || a.pop !== [].pop);
}
function P(a) {
  return !(!a || "object" !== typeof a);
}
function Q(a) {
  return "" + a === a;
}
function S(a) {
  return Q(a) || a === +a;
}
function T(a) {
  return a === "" + +a && a === a && a !== "" + 1 / 0 && a !== "" + -1 / 0;
}
function U(a) {
  if (S(a)) {
    a = 3;
  } else {
    if (N(a)) {
      if (Q(a[0])) {
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
function ja(a, c, h, g, n) {
  var p;
  if (N(g) && Q(g[0])) {
    var G = g[0];
    g = g.slice(1);
    "function" === typeof c ? p = g.length ? c(G, g) : c(G) : p = g.length ? c[G](g) : c[G]();
  } else {
    Q(g) && ("function" === typeof c ? p = c(g) : p = c[g]());
  }
  return a && N(p) ? ja(!0, c, h, p, n) : p;
}
function V(a) {
  return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
function W(a, c, h) {
  a = V("" + a);
  var g = a.match('"'), n = a.match("'"), p = c ? "'" : '"';
  if (g && n) {
    a = c ? p + a.split("'").join("\\'") + p : p + a.split('"').join('\\"') + p;
  } else if (g) {
    a = "'" + a + "'";
  } else if (n) {
    a = c ? p + a.split("'").join("\\'") + p : p + a + p;
  } else if (h || a.match(/[^0-9a-z\.\-]/g) || 72 < a.length) {
    a = p + a + p;
  }
  return a;
}
function X(a) {
  var c = a[0], h = c === +c ? 2 : 1;
  1 === U(a) || 17 === c ? (a = a[h], h = !N(a) && P(a) ? h + 1 : h) : h = 11 === c ? 1 : 9 === c || 13 === c || 16 === c ? 2 : Infinity;
  return h;
}
function ka(a) {
  var c = X(a), h = "", g;
  if (c < a.length) {
    for (g = c; g < a.length;) {
      c = a[g];
      var n = U(c);
      3 === n ? (h = S(c) ? h + c : h + c[1], a.splice(g, 1)) : (h && (a.splice(g, 0, T(h) ? +h : h), h = ""), ++g, 1 !== n && 17 !== n && 13 !== n && 16 !== n || ka(c));
    }
    h && (a[g] = T(h) ? +h : h);
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
  var c = a.indexOf("#"), h = a.indexOf("."), g = "", n = "";
  c < h ? (g = a.split(".")[1], a = a.split(".")[0], 0 < c && (n = a.split("#")[1], a = a.split("#")[0])) : h < c && (n = a.split("#")[1], a = a.split("#")[0], 0 < h && (g = a.split(".")[1], a = a.split(".")[0]));
  return [a, n, g];
}
;function Z(a, c, h, g, n, p) {
  function G(b, e, l, C, w, z) {
    var M = b[0], H = b[1], O = 1, J = M, K, ea;
    switch(M) {
      case 9:
        x(b, C, w, z);
        break;
      case 11:
        x(b, C, w, z);
        break;
      case 3:
        b = "" + H;
        if (!w && q) {
          if (z) {
            b = Y(la(b, "\n"), "\n");
          } else {
            b = b.split("\r\n").join("\n");
            m && (b = b.replace(/([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])\s([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])/g, "$1$2"));
            for (b = b.split("\t").join(" "); 0 <= b.indexOf("\n\n");) {
              b = b.split("\n\n").join("\n");
            }
            F && (K = "\n" === b.charAt(0) && /\n[ ]*$/.test(b));
            b = Y(b, "\n");
            for (b = b.split("\n").join(" "); 0 <= b.indexOf("  ");) {
              b = b.split("  ").join(" ");
            }
            K && (b = Y(la(b, " "), " "));
            b = b.split("\\u0020").join(" ").split("&#x20;").join(" ").split("&#32;").join(" ");
          }
        }
        H = T(b) ? +b : b;
        if ("" !== H) {
          e[l] = H;
        } else {
          return e.splice(l, 1), -1;
        }
        break;
      case 4:
        if (!f && e) {
          return e.splice(l, 1), -1;
        }
        break;
      case 8:
        if (!d && e) {
          return e.splice(l, 1), -1;
        }
        break;
      case 13:
        x(b, C, w, z);
        if (!u && e && 2 === b.length) {
          return e.splice(l, 1), -1;
        }
        break;
      case 15:
        b = e[l - 1];
        if (!u && b && 14 === b[0] && b) {
          return e.splice(l - 1, 2), -2;
        }
        break;
      case 16:
        x(b, C, w, z);
        if (!u && e && 2 === b.length) {
          return e.splice(l, 1), -1;
        }
        break;
      case 7:
        if (I) {
          w = I;
          C = b[1];
          J = b.slice(2);
          var r;
          "function" === typeof w ? r = J.length ? w(C, J) : w(C) : r = J.length ? w[C](J) : w[C]();
          void 0 !== r && null !== r && "" !== r && (S(r) ? e ? e.splice(l, 1, r) : (b.length = 0, b.push(3, b)) : N(r) && (11 === r[0] ? e ? (r.shift(), r.unshift(l, 1), e.splice.apply(e, r)) : (b.length = 0, b.push.apply(b, r)) : N(r[0]) ? e ? (r.unshift(l, 1), e.splice.apply(e, r)) : (b.length = 0, b.push(11), b.push.apply(b, r)) : e ? e.splice(l, 1, r) : (b.length = 0, b.push(11, r))));
          b = r;
          if (void 0 !== b) {
            if (null === b || "" === b) {
              return e ? e.splice(l, 1) : (a.length = 0, a.push(8, "")), -1;
            }
            if (!S(b) && N(b)) {
              return -1;
            }
          } else {
            t = !1;
          }
        } else {
          L("onInstruction is void!");
        }
        break;
      case 1:
      case 17:
        J = H, O = 2;
      default:
        if (Q(J) && 1 + O <= b.length) {
          K = b[O];
          if (!N(K) && P(K)) {
            e = O - 1;
            l = 0;
            var R;
            M = ma(b[e]);
            r = M[1];
            z = M[2];
            M = M[0];
            for (A in K) {
              H = A;
              var D = K[A];
              if (R = 0 === A.indexOf(k)) {
                var A = A.substr(k.length);
                "className" === A && (A = "class");
                I ? D = ja(!1, I, A, D, L) : L("onInstruction is void!");
                if (void 0 !== D) {
                  if (delete K[H], N(D)) {
                    Q(D[0]) && (K[H] = D, t = !1, ++l);
                  } else if ((!y[A] || !1 !== D) && null !== D) {
                    if (Q(D)) {
                      if ("id" === A) {
                        r = D;
                        continue;
                      } else if ("class" === A) {
                        H = D.split(" ");
                        for (D = H.length; D;) {
                          R = H[--D], -1 === (" " + z + " ").indexOf(" " + R + " ") && (z = (z ? " " : "") + R);
                        }
                        continue;
                      }
                    }
                    K[A] = D;
                    ++l;
                  }
                } else {
                  t = !1, ++l;
                }
              } else {
                ++l;
              }
            }
            A = M;
            r && (A += "#" + r);
            z && (A += "." + z);
            b[e] = A;
            0 === l && b.splice(O, 1);
          }
          B || (ea = B = B || E[J] ? !0 : !1);
          O = !!ia[J];
          x(b, C, O || w, !!ha[J]);
          ea && (B = !1);
        }
    }
    return 0;
  }
  function x(b, e, l, C) {
    var w = X(b);
    for (e.push(b); w < b.length; ++w) {
      var z = b[w];
      !S(z) && N(z) && (z = G(z, b, w, e, l, C)) && (w += z, v = !0);
    }
    e.pop();
  }
  var I = c || null, L = "function" === typeof n ? n : function() {
  };
  c = p || {};
  var q = -1 !== ["normal", !0, "aggressive"].indexOf(c.trimWhitespaces), F = "aggressive" === c.trimWhitespaces, m = !!c.removeNewlineBetweenFullWidthChars, f = !1 !== c.keepCDATASections, d = !1 !== c.keepComments, u = !0 === c.keepEmptyConditionalComment, k = c.instructionAttrPrefix || ":", B = !1, v = !1, t = !0;
  if (N(a)) {
    return G(a, null, 0, [], !1, !1), v && ka(a), t;
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
function na(a, c, h) {
  function g(m, f, d, u, k) {
    function B() {
      var C = "";
      q && (C = "</" + q + ">", q = "");
      return C;
    }
    f = "";
    var v = m[0], t = m[1], b = 1;
    d = v;
    var e;
    switch(v) {
      case 9:
        f = "<!DOCTYPE " + t + ">" + n(m, !1, k);
        break;
      case 11:
        f = n(m, u, k);
        break;
      case 3:
        f = B() + (k ? t : V("" + t));
        break;
      case 4:
        f = "<![CDATA[" + t + "]]\x3e";
        break;
      case 8:
        f = "\x3c!--" + t + "--\x3e";
        break;
      case 13:
        f = B() + "\x3c!--[" + t + "]>" + n(m, !0, k) + "<![endif]--\x3e";
        break;
      case 16:
        f = B() + "\x3c!--{" + t + "};" + n(m, !0, k) + "--\x3e";
        break;
      case 14:
        f = "\x3c!--[" + t + "]>\x3c!--\x3e";
        break;
      case 15:
        f = "\x3c!--<![endif]--\x3e";
        break;
      case 7:
        G("onInstruction is void!");
        break;
      case 18:
        f = "</" + t + ">";
        break;
      case 17:
        var l = !0;
      case 1:
        d = m[1], b = 2;
      default:
        d = ma(d), v = d[1], t = d[2], d = d[0], b = m[b], "P" !== q || da[d] ? q = "" : f = B(), f += "<" + d, v && (f += " id=" + W(v, I, F || x)), t && (f += " class=" + W(t, I, F || x)), F || (e = F = F || E[d] ? !0 : !1), !N(b) && P(b) && (f += p(b)), f = (m = n(m, ca[d], k || fa[d])) ? f + (">" + m) : l ? f + ">" : f + (F ? " />" : ">"), l ? q = "" : F && !m || ba[d] && (!u || "P" !== d) ? q = aa[d] ? "" : d : (f += "</" + d + ">", q = ""), e && (F = !1);
    }
    return f;
  }
  function n(m, f, d) {
    for (var u = [], k = X(m), B = -1, v; k < m.length; ++k) {
      v = m[k], S(v) ? u[++B] = g([3, v], m, k, !1, d) : N(v) && (v = g(v, m, k, f, d), -1 === v ? --k : u[++B] = v);
    }
    return u.join("");
  }
  function p(m) {
    var f = "", d, u;
    for (d in m) {
      var k = m[d];
      (u = 0 === d.indexOf(L)) && (d = d.substr(L.length));
      "className" === d && (d = "class");
      u && G("onInstruction is void!");
      if (!(null == k || y[d] && !1 === k || (f += " " + d, y[d]))) {
        if ("style" === d && P(k)) {
          var B = void 0, v = "";
          for (B in k) {
            u = k[B];
            "0px" === u && (u = 0);
            for (var t, b = [], e = B.split(""), l = e.length; l;) {
              t = e[--l], "A" <= t && "Z" >= t && (t = "-" + t.toLowerCase()), b[l] = t;
            }
            v += ";" + b.join("") + ":" + V("" + u);
          }
          k = v.substr(1);
          if (!k) {
            continue;
          }
        }
        f += "=" + W(k, I, F || x);
      }
    }
    return f;
  }
  var G = "function" === typeof c ? c : function() {
  };
  c = h || {};
  var x = !0 === c.quotAlways, I = !0 === c.useSingleQuot, L = c.instructionAttrPrefix || ":", q, F = !1;
  if (N(a)) {
    return 7 === U(a) && (a = [11, a]), g(a, null, 0, !1, !1);
  }
}
;Z.gulp = function(a, c, h, g, n) {
  const p = require("plugin-error"), G = require("through2"), x = n || {}, I = x.outputStaticPagesAsHTML, L = x.staticPages && "object" === typeof x.staticPages ? x.staticPages : {};
  x.staticPages = L;
  return G.obj(function(q, F, m) {
    if (q.isNull()) {
      return m();
    }
    if (q.isStream()) {
      return this.emit("error", new p("json2json", "Streaming not supported")), m();
    }
    if (".json" === q.extname) {
      try {
        const f = JSON.parse(q.contents.toString(F)), d = Z(f, a, c, h, g, x);
        let u;
        if (I) {
          const k = q.path.split("\\").join("/").split(".");
          k.pop();
          L[k.join(".")] = d;
        }
        if (d && I) {
          u = na(f, g, x);
          const k = "." + q.stem.split(".").pop();
          q.stem = q.stem.substr(0, q.stem.length - q.extname.length);
          q.extname = k;
        } else {
          u = JSON.stringify(f, null, x.prettify ? "    " : "");
        }
        q.contents = Buffer.from(u);
        this.push(q);
      } catch (f) {
        this.emit("error", new p("json2json", f));
      }
    } else {
      this.push(q);
    }
    m();
  });
};

