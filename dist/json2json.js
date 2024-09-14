var w = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, aa = {link:!0, meta:!0, br:!0, hr:!0, img:!0, input:!0, area:!0, base:!0, col:!0, embed:!0, keygen:!0, param:!0, track:!0, wbr:!0, command:!0, basefont:!0, frame:!0, isindex:!0, bgsound:!0}, ba = {html:!0, head:!0, body:!0, p:!0, dt:!0, dd:!0, li:!0, option:!0, tbody:!0, thead:!0, tfoot:!0, td:!0, th:!0, tr:!0, rb:!0, rbc:!0, rp:!0, rt:!0, 
rtc:!0, optgroup:!0, caption:!0, colgroup:!0}, ca = {a:!0, audio:!0, del:!0, ins:!0, map:!0, noscript:!0, video:!0}, da = {xml:"http://www.w3.org/1999/xhtml", svg:"http://www.w3.org/2000/svg", math:"http://www.w3.org/1998/Math/MathML"}, ea = {address:!0, article:!0, aside:!0, blockquote:!0, canvas:!0, details:!0, div:!0, dl:!0, fieldset:!0, figcaption:!0, figure:!0, footer:!0, form:!0, h1:!0, h2:!0, h3:!0, h4:!0, h5:!0, h6:!0, header:!0, hgroup:!0, hr:!0, legend:!0, main:!0, menu:!0, nav:!0, noscript:!0, 
ol:!0, p:!0, pre:!0, section:!0, ul:!0, center:!0, dir:!0, noframes:!0, marquee:!0}, fa = {script:!0, style:!0, plaintext:!0, xmp:!0}, ha = {script:!0, style:!0, textarea:!0};
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
    var C = c[0], B = c[1], F = 1, O = C;
    switch(C) {
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
        if (!D && e) {
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
        if (!u && e && 2 === c.length) {
          return e.splice(l, 1), -1;
        }
        break;
      case 15:
        k = e[l - 1];
        if (!u && k && 14 === k[0] && k) {
          return e.splice(l - 1, 2), -2;
        }
        break;
      case 16:
        E(c, t, k, h);
        if (!u && e && 2 === c.length) {
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
          C = c[F];
          if (!z(C) && H(C)) {
            e = F - 1;
            l = 0;
            var P;
            B = ja(c[e]);
            h = B[1];
            L = B[2];
            B = B[0];
            for (y in C) {
              var N = y;
              var A = C[y];
              if (P = 0 === y.indexOf(r)) {
                var y = y.substr(r.length);
                "className" === y && (y = "class");
                A = T(!1, M, y, A, v);
                if (void 0 !== A) {
                  if (delete C[N], z(A)) {
                    I(A[0]) && (C[N] = A, m = !1, ++l);
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
                    C[y] = A;
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
          E(c, t, "p" === O || k, !!ha[O]);
        }
    }
    return 0;
  }
  function E(c, e, l, t) {
    var k = W(c);
    for (e.push(c); k < c.length; ++k) {
      var h = c[k];
      !J(h) && z(h) && (h = g(h, c, k, e, l, t)) && (k += h, q = !0);
    }
    e.pop();
  }
  var M = "function" === typeof b ? b : function() {
  }, v = "function" === typeof f ? f : function() {
  };
  b = H(b) ? b : H(d) ? d : H(f) ? f : p || {};
  var K = -1 !== ["normal", !0, "aggressive"].indexOf(b.trimWhitespaces), G = "aggressive" === b.trimWhitespaces, x = !!b.removeNewlineBetweenFullWidthChars, D = !1 !== b.keepCDATASections, n = !1 !== b.keepComments, u = !0 === b.keepEmptyConditionalComment, r = b.instructionAttrPrefix || ":", q = !1, m = !0;
  if (z(a)) {
    return g(a, null, 0, [], !1, !1), q && X(a), m;
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
  function p(n, u, r, q, m) {
    function c() {
      var F = "";
      x && (F = "</" + x + ">", x = "");
      return F;
    }
    var e = "", l = n[0], t = n[1], k = 1, h = l, C;
    switch(l) {
      case 9:
        e = "<!DOCTYPE " + t + ">" + g(n, q, m);
        break;
      case 11:
        e = g(n, q, m);
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
        q = S(b, n, u, r);
        if (void 0 !== q && null !== q && "" !== q && (J(q) || z(q))) {
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
        h = ja(h), u = h[1], r = h[2], h = h[0], "p" !== x || ea[h] ? x = "" : e = c(), e += "<" + h, u && (e += " id=" + V(u, K, v)), r && (e += " class=" + V(r, K, v)), D || (C = D = D || da[h] ? !0 : !1), k = n[k], !z(k) && H(k) && (e += " " + E(k)), e = (n = g(n, q || ca[h], m || fa[h])) ? e + (">" + n) : B ? e + ">" : e + (D ? "/>" : ">"), B ? x = "" : D && !n || ba[h] && !q ? x = aa[h] ? "" : h : (e += "</" + h + ">", x = ""), C && (D = !1);
    }
    return e;
  }
  function g(n, u, r) {
    for (var q = "", m = W(n), c; m < n.length; ++m) {
      c = n[m], J(c) ? q += p([3, c], null, 0, u, r) : z(c) && (c = p(c, n, m, u, r), -1 === c ? --m : q += c);
    }
    return q;
  }
  function E(n) {
    var u = "", r, q;
    for (r in n) {
      var m = n[r];
      (q = 0 === r.indexOf(G)) && (r = r.substr(G.length));
      "className" === r && (r = "class");
      q && (m = T(!0, b, r, m, M));
      if (!(null == m || w[r] && !1 === m || (u += " " + r, w[r]))) {
        if ("style" === r && H(m)) {
          var c = void 0, e = "";
          for (c in m) {
            q = m[c];
            "0px" === q && (q = 0);
            for (var l, t = [], k = c.split(""), h = k.length; h;) {
              l = k[--h], "A" <= l && "Z" >= l && (l = "-" + l.toLowerCase()), t[h] = l;
            }
            e += ";" + t.join("") + ":" + U("" + q);
          }
          m = e.substr(1);
          if (!m) {
            continue;
          }
        }
        u += "=" + V(m, K, v);
      }
    }
    return u.substr(1);
  }
  var M = "function" === typeof d ? d : function() {
  };
  d = d && "object" === typeof d ? d : f || {};
  var v = !0 === d.quotAlways, K = !0 === d.useSingleQuot, G = d.instructionAttrPrefix || ":", x, D = !1;
  if (z(a)) {
    return 7 === R(a) && (a = [11, a]), p(a, null, 0, !1, !1);
  }
}
;Z.gulp = function(a, b, d) {
  const f = require("plugin-error"), p = require("through2"), g = b && "object" === typeof b ? b : d && "object" === typeof d ? d : {}, E = g.outputStaticPagesAsHTML, M = g.staticPages && "object" === typeof g.staticPages ? g.staticPages : {};
  g.staticPages = M;
  return p.obj(function(v, K, G) {
    if (v.isNull()) {
      return G();
    }
    if (v.isStream()) {
      return this.emit("error", new f("json2json", "Streaming not supported")), G();
    }
    if (".json" === v.extname) {
      try {
        const x = JSON.parse(v.contents.toString(K)), D = Z(x, a, b, d);
        let n;
        if (E) {
          const u = v.path.split("\\").join("/").split(".");
          u.pop();
          M[u.join(".")] = D;
        }
        if (D && E) {
          n = ka(x, a, b, d);
          const u = "." + v.stem.split(".").pop();
          v.stem = v.stem.substr(0, v.stem.length - v.extname.length);
          v.extname = u;
        } else {
          n = JSON.stringify(x, null, g.prettify ? "    " : "");
        }
        v.contents = Buffer.from(n);
        this.push(v);
      } catch (x) {
        this.emit("error", new f("json2json", x));
      }
    } else {
      this.push(v);
    }
    G();
  });
};

