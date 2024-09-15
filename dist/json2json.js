var aa = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, j:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0}, w = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0};
var ba = {HTML:!0, HEAD:!0, BODY:!0, P:!0, DT:!0, DD:!0, LI:!0, OPTION:!0, TBODY:!0, THEAD:!0, TFOOT:!0, TD:!0, TH:!0, TR:!0, RB:!0, RBC:!0, RP:!0, RT:!0, RTC:!0, OPTGROUP:!0, CAPTION:!0, COLGROUP:!0}, ca = {A:!0, AUDIO:!0, DEL:!0, INS:!0, MAP:!0, NOSCRIPT:!0, VIDEO:!0}, da = {xml:"http://www.w3.org/1999/xhtml", svg:"http://www.w3.org/2000/svg", math:"http://www.w3.org/1998/Math/MathML"}, ea = {H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, ADDRESS:!0, BLOCKQUOTE:!0, DETAILS:!0, DIV:!0, DL:!0, FIELDSET:!0, 
FORM:!0, HR:!0, m:!0, NOSCRIPT:!0, OL:!0, P:!0, PRE:!0, UL:!0, h:!0, l:!0, v:!0, o:!0}, fa = {SCRIPT:!0, STYLE:!0, PLAINTEXT:!0, XMP:!0}, ha = {SCRIPT:!0, STYLE:!0, TEXTAREA:!0};
function z(a) {
  return !(!a || a.pop !== [].pop);
}
function H(a) {
  return !(!a || "object" !== typeof a);
}
function I(a) {
  return "" + a === a;
}
function J(a) {
  return I(a) || a === +a;
}
function Q(a) {
  return a === "" + +a && a === a && a !== "" + 1 / 0 && a !== "" + -1 / 0;
}
function R(a) {
  if (J(a)) {
    a = 3;
  } else {
    if (z(a)) {
      if (I(a[0])) {
        a = 1;
      } else {
        var b = a[0];
        a = b === +b ? a[0] : -1;
      }
    } else {
      a = -1;
    }
  }
  return a;
}
function S(a, b, d, f) {
  var p = b[1], g = b.slice(2);
  a = g.length ? a(p, g) : a(p);
  void 0 !== a && null !== a && "" !== a && (J(a) ? d ? d.splice(f, 1, a) : (b.length = 0, b.push(3, b)) : z(a) && (11 === a[0] ? d ? (a.shift(), a.unshift(f, 1), d.splice.apply(d, a)) : (b.length = 0, b.push.apply(b, a)) : z(a[0]) ? d ? (a.unshift(f, 1), d.splice.apply(d, a)) : (b.length = 0, b.push(11), b.push.apply(b, a)) : d ? d.splice(f, 1, a) : (b.length = 0, b.push(11, a))));
  return a;
}
function T(a, b, d, f, p) {
  if (z(f) && I(f[0])) {
    var g = f[0];
    f = f.slice(1);
    g = f.length ? b(g, f) : b(g);
  } else {
    I(f) && (g = b(f));
  }
  return a && z(g) ? T(!0, b, d, g, p) : g;
}
function U(a) {
  return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
function V(a, b, d) {
  a = U("" + a);
  var f = a.match('"'), p = a.match("'"), g = b ? "'" : '"';
  if (f && p) {
    a = b ? g + a.split("'").join("\\'") + g : g + a.split('"').join('\\"') + g;
  } else if (f) {
    a = "'" + a + "'";
  } else if (p) {
    a = b ? g + a.split("'").join("\\'") + g : g + a + g;
  } else if (d || a.match(/[^0-9a-z\.\-]/g) || 72 < a.length) {
    a = g + a + g;
  }
  return a;
}
function W(a) {
  var b = a[0], d = b === +b ? 2 : 1;
  1 === R(a) || 17 === b ? (a = a[d], d = !z(a) && H(a) ? d + 1 : d) : d = 11 === b ? 1 : 9 === b || 13 === b || 16 === b ? 2 : Infinity;
  return d;
}
function X(a) {
  var b = W(a), d = "", f;
  if (b < a.length) {
    for (f = b; f < a.length;) {
      b = a[f];
      var p = R(b);
      3 === p ? (d = J(b) ? d + b : d + b[1], a.splice(f, 1)) : (d && (a.splice(f, 0, Q(d) ? +d : d), d = ""), ++f, 1 !== p && 17 !== p && 13 !== p && 16 !== p || X(b));
    }
    d && (a[f] = Q(d) ? +d : d);
  }
}
function ia(a, b) {
  for (; a.charAt(0) === b;) {
    a = a.substr(1);
  }
  return a;
}
function Y(a, b) {
  for (; a.charAt(a.length - 1) === b;) {
    a = a.substr(0, a.length - 1);
  }
  return a;
}
function ja(a) {
  var b = a.indexOf("#"), d = a.indexOf("."), f = "", p = "";
  b < d ? (f = a.split(".")[1], a = a.split(".")[0], 0 < b && (p = a.split("#")[1], a = a.split("#")[0])) : d < b && (p = a.split("#")[1], a = a.split("#")[0], 0 < d && (f = a.split(".")[1], a = a.split(".")[0]));
  return [a, p, f];
}
;function Z(a, b, d, f, p) {
  function g(c, e, l, t, k, h) {
    var D = c[0], B = c[1], F = 1, O = D;
    switch(D) {
      case 9:
        E(c, t, k, h);
        break;
      case 11:
        E(c, t, k, h);
        break;
      case 3:
        c = "" + B;
        if (!k && K) {
          if (h) {
            c = Y(ia(c, "\n"), "\n");
          } else {
            c = c.split("\r\n").join("\n");
            x && (c = c.replace(/([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])\s([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])/g, "$1$2"));
            for (c = c.split("\t").join(" "); 0 <= c.indexOf("\n\n");) {
              c = c.split("\n\n").join("\n");
            }
            if (G) {
              var L = "\n" === c.charAt(0) && /\n[ ]*$/.test(c);
            }
            c = Y(c, "\n");
            for (c = c.split("\n").join(" "); 0 <= c.indexOf("  ");) {
              c = c.split("  ").join(" ");
            }
            L && (c = Y(ia(c, " "), " "));
            c = c.split("\\u0020").join(" ").split("&#x20;").join(" ").split("&#32;").join(" ");
          }
        }
        B = Q(c) ? +c : c;
        if ("" !== B) {
          e[l] = B;
        } else {
          return e.splice(l, 1), -1;
        }
        break;
      case 4:
        if (!C && e) {
          return e.splice(l, 1), -1;
        }
        break;
      case 8:
        if (!n && e) {
          return e.splice(l, 1), -1;
        }
        break;
      case 13:
        E(c, t, k, h);
        if (!v && e && 2 === c.length) {
          return e.splice(l, 1), -1;
        }
        break;
      case 15:
        k = e[l - 1];
        if (!v && k && 14 === k[0] && k) {
          return e.splice(l - 1, 2), -2;
        }
        break;
      case 16:
        E(c, t, k, h);
        if (!v && e && 2 === c.length) {
          return e.splice(l, 1), -1;
        }
        break;
      case 7:
        k = S(M, c, e, l);
        if (void 0 !== k) {
          if (null === k || "" === k) {
            return e ? e.splice(l, 1) : (a.length = 0, a.push(8, "")), -1;
          }
          if (!J(k) && z(k)) {
            return -1;
          }
        } else {
          m = !1;
        }
        break;
      case 1:
      case 17:
        O = B, F = 2;
      default:
        if (I(O) && 1 + F <= c.length) {
          D = c[F];
          if (!z(D) && H(D)) {
            e = F - 1;
            l = 0;
            var P;
            B = ja(c[e]);
            h = B[1];
            L = B[2];
            B = B[0];
            for (y in D) {
              var N = y;
              var A = D[y];
              if (P = 0 === y.indexOf(q)) {
                var y = y.substr(q.length);
                "className" === y && (y = "class");
                A = T(!1, M, y, A, u);
                if (void 0 !== A) {
                  if (delete D[N], z(A)) {
                    I(A[0]) && (D[N] = A, m = !1, ++l);
                  } else if ((!w[y] || !1 !== A) && null !== A) {
                    if (I(A)) {
                      if ("id" === y) {
                        h = A;
                        continue;
                      } else if ("class" === y) {
                        N = A.split(" ");
                        for (A = N.length; A;) {
                          P = N[--A], -1 === (" " + L + " ").indexOf(" " + P + " ") && (L = (L ? " " : "") + P);
                        }
                        continue;
                      }
                    }
                    D[y] = A;
                    ++l;
                  }
                } else {
                  m = !1, ++l;
                }
              } else {
                ++l;
              }
            }
            y = B;
            h && (y += "#" + h);
            L && (y += "." + L);
            c[e] = y;
            0 === l && c.splice(F, 1);
          }
          E(c, t, "P" === O || k, !!ha[O]);
        }
    }
    return 0;
  }
  function E(c, e, l, t) {
    var k = W(c);
    for (e.push(c); k < c.length; ++k) {
      var h = c[k];
      !J(h) && z(h) && (h = g(h, c, k, e, l, t)) && (k += h, r = !0);
    }
    e.pop();
  }
  var M = "function" === typeof b ? b : function() {
  }, u = "function" === typeof f ? f : function() {
  };
  b = H(b) ? b : H(d) ? d : H(f) ? f : p || {};
  var K = -1 !== ["normal", !0, "aggressive"].indexOf(b.trimWhitespaces), G = "aggressive" === b.trimWhitespaces, x = !!b.removeNewlineBetweenFullWidthChars, C = !1 !== b.keepCDATASections, n = !1 !== b.keepComments, v = !0 === b.keepEmptyConditionalComment, q = b.instructionAttrPrefix || ":", r = !1, m = !0;
  if (z(a)) {
    return g(a, null, 0, [], !1, !1), r && X(a), m;
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
function ka(a, b, d, f) {
  function p(n, v, q, r, m) {
    function c() {
      var F = "";
      x && (F = "</" + x + ">", x = "");
      return F;
    }
    var e = "", l = n[0], t = n[1], k = 1, h = l, D;
    switch(l) {
      case 9:
        e = "<!DOCTYPE " + t + ">" + g(n, !1, m);
        break;
      case 11:
        e = g(n, r, m);
        break;
      case 3:
        e = c() + (m ? t : U("" + t));
        break;
      case 4:
        e = "<![CDATA[" + t + "]]\x3e";
        break;
      case 8:
        e = "\x3c!--" + t + "--\x3e";
        break;
      case 13:
        e = c() + "\x3c!--[" + t + "]>" + g(n, !0, m) + "<![endif]--\x3e";
        break;
      case 16:
        e = c() + "\x3c!--{" + t + "};" + g(n, !0, m) + "--\x3e";
        break;
      case 14:
        e = "\x3c!--[" + t + "]>\x3c!--\x3e";
        break;
      case 15:
        e = "\x3c!--<![endif]--\x3e";
        break;
      case 7:
        r = S(b, n, v, q);
        if (void 0 !== r && null !== r && "" !== r && (J(r) || z(r))) {
          return -1;
        }
        break;
      case 18:
        e = "</" + t + ">";
        break;
      case 17:
        var B = !0;
      case 1:
        h = n[1], k = 2;
      default:
        h = ja(h), v = h[1], q = h[2], h = h[0], "P" !== x || ea[h] ? x = "" : e = c(), e += "<" + h, v && (e += " id=" + V(v, K, C || u)), q && (e += " class=" + V(q, K, C || u)), C || (D = C = C || da[h] ? !0 : !1), k = n[k], !z(k) && H(k) && (e += " " + E(k)), e = (n = g(n, ca[h], m || fa[h])) ? e + (">" + n) : B ? e + ">" : e + (C ? " />" : ">"), B ? x = "" : C && !n || ba[h] && (!r || "P" !== h) ? x = aa[h] ? "" : h : (e += "</" + h + ">", x = ""), D && (C = !1);
    }
    return e;
  }
  function g(n, v, q) {
    for (var r = "", m = W(n), c; m < n.length; ++m) {
      c = n[m], J(c) ? r += p([3, c], null, 0, !1, q) : z(c) && (c = p(c, n, m, v, q), -1 === c ? --m : r += c);
    }
    return r;
  }
  function E(n) {
    var v = "", q, r;
    for (q in n) {
      var m = n[q];
      (r = 0 === q.indexOf(G)) && (q = q.substr(G.length));
      "className" === q && (q = "class");
      r && (m = T(!0, b, q, m, M));
      if (!(null == m || w[q] && !1 === m || (v += " " + q, w[q]))) {
        if ("style" === q && H(m)) {
          var c = void 0, e = "";
          for (c in m) {
            r = m[c];
            "0px" === r && (r = 0);
            for (var l, t = [], k = c.split(""), h = k.length; h;) {
              l = k[--h], "A" <= l && "Z" >= l && (l = "-" + l.toLowerCase()), t[h] = l;
            }
            e += ";" + t.join("") + ":" + U("" + r);
          }
          m = e.substr(1);
          if (!m) {
            continue;
          }
        }
        v += "=" + V(m, K, C || u);
      }
    }
    return v.substr(1);
  }
  var M = "function" === typeof d ? d : function() {
  };
  d = d && "object" === typeof d ? d : f || {};
  var u = !0 === d.quotAlways, K = !0 === d.useSingleQuot, G = d.instructionAttrPrefix || ":", x, C = !1;
  if (z(a)) {
    return 7 === R(a) && (a = [11, a]), p(a, null, 0, !1, !1);
  }
}
;Z.gulp = function(a, b, d) {
  const f = require("plugin-error"), p = require("through2"), g = b && "object" === typeof b ? b : d && "object" === typeof d ? d : {}, E = g.outputStaticPagesAsHTML, M = g.staticPages && "object" === typeof g.staticPages ? g.staticPages : {};
  g.staticPages = M;
  return p.obj(function(u, K, G) {
    if (u.isNull()) {
      return G();
    }
    if (u.isStream()) {
      return this.emit("error", new f("json2json", "Streaming not supported")), G();
    }
    if (".json" === u.extname) {
      try {
        const x = JSON.parse(u.contents.toString(K)), C = Z(x, a, b, d);
        let n;
        if (E) {
          const v = u.path.split("\\").join("/").split(".");
          v.pop();
          M[v.join(".")] = C;
        }
        if (C && E) {
          n = ka(x, a, b, d);
          const v = "." + u.stem.split(".").pop();
          u.stem = u.stem.substr(0, u.stem.length - u.extname.length);
          u.extname = v;
        } else {
          n = JSON.stringify(x, null, g.prettify ? "    " : "");
        }
        u.contents = Buffer.from(n);
        this.push(u);
      } catch (x) {
        this.emit("error", new f("json2json", x));
      }
    } else {
      this.push(u);
    }
    G();
  });
};

