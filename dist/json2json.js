var w = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, A = {link:!0, meta:!0, br:!0, hr:!0, img:!0, input:!0, area:!0, base:!0, col:!0, embed:!0, keygen:!0, param:!0, track:!0, wbr:!0, command:!0, basefont:!0, frame:!0, isindex:!0, bgsound:!0}, G = {html:!0, head:!0, body:!0, p:!0, dt:!0, dd:!0, li:!0, option:!0, tbody:!0, thead:!0, tfoot:!0, td:!0, th:!0, tr:!0, rb:!0, rbc:!0, rp:!0, rt:!0, 
rtc:!0, optgroup:!0, caption:!0, colgroup:!0}, H = {a:!0, audio:!0, del:!0, ins:!0, map:!0, noscript:!0, video:!0}, I = {xml:"http://www.w3.org/1999/xhtml", svg:"http://www.w3.org/2000/svg", math:"http://www.w3.org/1998/Math/MathML"}, L = {address:!0, article:!0, aside:!0, blockquote:!0, canvas:!0, details:!0, div:!0, dl:!0, fieldset:!0, figcaption:!0, figure:!0, footer:!0, form:!0, h1:!0, h2:!0, h3:!0, h4:!0, h5:!0, h6:!0, header:!0, hgroup:!0, hr:!0, legend:!0, main:!0, menu:!0, nav:!0, noscript:!0, 
ol:!0, p:!0, pre:!0, section:!0, ul:!0, center:!0, dir:!0, noframes:!0, marquee:!0}, M = {script:!0, style:!0, plaintext:!0, xmp:!0};
function N(a) {
  return !(!a || a.pop !== [].pop);
}
function O(a) {
  return !(!a || "object" !== typeof a);
}
function P(a) {
  return "" + a === a;
}
function Q(a) {
  return P(a) || a === +a;
}
function R(a) {
  if (Q(a)) {
    a = 3;
  } else {
    if (N(a)) {
      if (P(a[0])) {
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
function S(a, b, c, g) {
  var p = b[1], h = b.slice(2);
  a = h.length ? a(p, h) : a(p);
  void 0 !== a && null !== a && "" !== a && (Q(a) ? c ? c.splice(g, 1, a) : (b.length = 0, b.push(3, b)) : N(a) && (11 === a[0] ? c ? (a.shift(), a.unshift(g, 1), c.splice.apply(c, a)) : (b.length = 0, b.push.apply(b, a)) : N(a[0]) ? c ? (a.unshift(g, 1), c.splice.apply(c, a)) : (b.length = 0, b.push(11), b.push.apply(b, a)) : c ? c.splice(g, 1, a) : (b.length = 0, b.push(11, a))));
  return a;
}
function T(a, b, c, g, p) {
  if (N(g) && P(g[0])) {
    var h = g[0];
    g = g.slice(1);
    h = g.length ? b(h, g) : b(h);
  } else {
    P(g) && (h = b(g));
  }
  return a && N(h) ? T(!0, b, c, h, p) : h;
}
function U(a) {
  return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
function V(a, b, c) {
  a = U("" + a);
  var g = a.match('"'), p = a.match("'"), h = b ? "'" : '"';
  if (g && p) {
    a = b ? h + a.split("'").join("\\'") + h : h + a.split('"').join('\\"') + h;
  } else if (g) {
    a = "'" + a + "'";
  } else if (p) {
    a = b ? h + a.split("'").join("\\'") + h : h + a + h;
  } else if (c || a.match(/[^0-9a-z\.\-]/g) || 72 < a.length) {
    a = h + a + h;
  }
  return a;
}
function W(a) {
  var b = a[0], c = b === +b ? 2 : 1;
  1 === R(a) || 17 === b ? (a = a[c], c = !N(a) && O(a) ? c + 1 : c) : c = 11 === b ? 1 : 9 === b || 13 === b || 16 === b ? 2 : Infinity;
  return c;
}
function X(a) {
  var b = W(a), c = "", g;
  if (b < a.length) {
    for (g = b; g < a.length;) {
      b = a[g];
      var p = R(b);
      3 === p ? (c = Q(b) ? c + b : c + b[1], a.splice(g, 1)) : (c && (a.splice(g, 0, c === "" + +c ? +c : c), c = ""), ++g, 1 !== p && 17 !== p || X(b));
    }
    c && (a[g] = c === "" + +c ? +c : c);
  }
}
function Y(a) {
  var b = a.indexOf("#"), c = a.indexOf("."), g = "", p = "";
  b < c ? (g = a.split(".")[1], a = a.split(".")[0], 0 < b && (p = a.split("#")[1], a = a.split("#")[0])) : c < b && (p = a.split("#")[1], a = a.split("#")[0], 0 < c && (g = a.split(".")[1], a = a.split(".")[0]));
  return [a, p, g];
}
;function Z(a, b, c, g, p) {
  function h(d, f, e, l) {
    var k = d[0], x = d[1], t = 1, q = k;
    switch(k) {
      case 9:
        C(d, l);
        break;
      case 11:
        C(d, l);
        break;
      case 3:
        break;
      case 4:
        if (!J && f) {
          return f.splice(e, 1), -1;
        }
        break;
      case 8:
        if (!D && f) {
          return f.splice(e, 1), -1;
        }
        break;
      case 13:
        C(d, l);
        if (!u && f && 2 === d.length) {
          return f.splice(e, 1), -1;
        }
        break;
      case 15:
        d = f[e - 1];
        if (!u && d && 14 === d[0] && d) {
          return f.splice(e, 1), f.splice(e - 1, 1), -1;
        }
        break;
      case 16:
        C(d, l);
        if (!u && f && 2 === d.length) {
          return f.splice(e, 1), -1;
        }
        break;
      case 7:
        d = S(K, d, f, e);
        if (void 0 !== d) {
          m = !0;
          if (null === d || "" === d) {
            return f ? f.splice(e, 1) : (a.length = 0, a.push(8, "")), -1;
          }
          if (!Q(d) && N(d)) {
            return -1;
          }
        } else {
          y = !1;
        }
        break;
      case 1:
      case 17:
        q = x, t = 2;
      default:
        if (P(q) && 1 + t <= d.length) {
          q = d[t];
          if (!N(q) && O(q)) {
            f = t - 1;
            e = 0;
            var n, E = Y(d[f]);
            k = E[1];
            x = E[2];
            E = E[0];
            for (z in q) {
              var F = z;
              var v = q[z];
              if (n = 0 === z.indexOf(B)) {
                var z = z.substr(B.length);
                "className" === z && (z = "class");
                v = T(!1, K, z, v, r);
                if (void 0 !== v) {
                  if (delete q[F], N(v)) {
                    P(v[0]) && (q[F] = v, y = !1, ++e);
                  } else if ((!w[z] || !1 !== v) && null !== v) {
                    if (P(v)) {
                      if ("id" === z) {
                        k = v;
                        continue;
                      } else if ("class" === z) {
                        F = v.split(" ");
                        for (v = F.length; v;) {
                          n = F[--v], -1 === (" " + x + " ").indexOf(" " + n + " ") && (x = (x ? " " : "") + n);
                        }
                        continue;
                      }
                    }
                    q[z] = v;
                    ++e;
                  }
                } else {
                  y = !1, ++e;
                }
              } else {
                ++e;
              }
            }
            z = E;
            k && (z += "#" + k);
            x && (z += "." + x);
            d[f] = z;
            0 === e && d.splice(t, 1);
          }
          C(d, l);
        }
    }
    return 0;
  }
  function C(d, f) {
    var e = W(d);
    for (f.push(d); e < d.length; ++e) {
      var l = d[e];
      !Q(l) && N(l) && (l = h(l, d, e, f)) && (e += l);
    }
    f.pop();
  }
  var K = "function" === typeof b ? b : function() {
  }, r = "function" === typeof g ? g : function() {
  };
  b = O(b) ? b : O(c) ? c : O(g) ? g : p || {};
  var J = !1 !== b.keepCDATASections, D = !1 !== b.keepComments, u = !0 === b.keepEmptyConditionalComment, B = b.instructionAttrPrefix || ":", m = !1, y = !0;
  if (N(a)) {
    return h(a, null, 0, []), m && X(a), y;
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
function aa(a, b, c, g) {
  function p(m, y, d, f, e) {
    function l() {
      var v = "";
      u && (v = "</" + u + ">", u = "");
      return v;
    }
    var k = "", x = m[0], t = m[1], q = 1, n = x, E;
    switch(x) {
      case 9:
        k = "<!DOCTYPE " + t + ">" + h(m, f, e);
        break;
      case 11:
        k = h(m, f, e);
        break;
      case 3:
        k = l() + (e ? t : U("" + t));
        break;
      case 4:
        k = "<![CDATA[" + t + "]]\x3e";
        break;
      case 8:
        k = "\x3c!--" + t + "--\x3e";
        break;
      case 13:
        k = l() + "\x3c!--[" + t + "]>" + h(m, !0, e) + "<![endif]--\x3e";
        break;
      case 16:
        k = l() + "\x3c!--{" + t + "};" + h(m, !0, e) + "--\x3e";
        break;
      case 14:
        k = "\x3c!--[" + t + "]>\x3c!--\x3e";
        break;
      case 15:
        k = "\x3c!--<![endif]--\x3e";
        break;
      case 7:
        f = S(b, m, y, d);
        if (void 0 !== f && null !== f && "" !== f && (Q(f) || N(f))) {
          return -1;
        }
        break;
      case 18:
        k = "</" + t + ">";
        break;
      case 17:
        var F = !0;
      case 1:
        n = m[1], q = 2;
      default:
        n = Y(n), y = n[1], d = n[2], n = n[0], "p" !== u || L[n] ? u = "" : k = l(), k += "<" + n, y && (k += " id=" + V(y, J, r)), d && (k += " class=" + V(d, J, r)), B || (E = B = B || I[n] ? !0 : !1), q = m[q], !N(q) && O(q) && (k += " " + C(q)), k = (m = h(m, f || H[n], e || M[n])) ? k + (">" + m) : F ? k + ">" : k + (B ? "/>" : ">"), F ? u = "" : B && !m || G[n] && !f ? u = A[n] ? "" : n : (k += "</" + n + ">", u = ""), E && (B = !1);
    }
    return k;
  }
  function h(m, y, d) {
    for (var f = "", e = W(m), l; e < m.length; ++e) {
      l = m[e], Q(l) ? f += p([3, l], null, 0, y, d) : N(l) && (l = p(l, m, e, y, d), -1 === l ? --e : f += l);
    }
    return f;
  }
  function C(m) {
    var y = "", d, f;
    for (d in m) {
      var e = m[d];
      (f = 0 === d.indexOf(D)) && (d = d.substr(D.length));
      "className" === d && (d = "class");
      f && (e = T(!0, b, d, e, K));
      if (!(null == e || w[d] && !1 === e || (y += " " + d, w[d]))) {
        if ("style" === d && O(e)) {
          var l = void 0, k = "";
          for (l in e) {
            f = e[l];
            "0px" === f && (f = 0);
            for (var x, t = [], q = l.split(""), n = q.length; n;) {
              x = q[--n], "A" <= x && "Z" >= x && (x = "-" + x.toLowerCase()), t[n] = x;
            }
            k += ";" + t.join("") + ":" + U("" + f);
          }
          e = k.substr(1);
          if (!e) {
            continue;
          }
        }
        y += "=" + V(e, J, r);
      }
    }
    return y.substr(1);
  }
  var K = "function" === typeof c ? c : function() {
  };
  c = c && "object" === typeof c ? c : g || {};
  var r = !0 === c.quotAlways, J = !0 === c.useSingleQuot, D = c.instructionAttrPrefix || ":", u, B = !1;
  if (N(a)) {
    return 7 === R(a) && (a = [11, a]), p(a, null, 0, !1, !1);
  }
}
;Z.gulp = function(a, b, c) {
  const g = require("plugin-error"), p = require("through2"), h = b && "object" === typeof b ? b : c && "object" === typeof c ? c : {}, C = h.outputStaticPagesAsHTML, K = h.staticPages && "object" === typeof h.staticPages ? h.staticPages : {};
  h.staticPages = K;
  return p(function(r, J, D) {
    if (r.isNull()) {
      return D();
    }
    if (r.isStream()) {
      return this.emit("error", new g("json2json", "Streaming not supported")), D();
    }
    if (".json" === r.extname) {
      try {
        const u = JSON.parse(r.contents.toString(J)), B = Z(u, a, b, c);
        let m;
        C && (K[r.path.split("\\").join("/").split(".json").join("")] = B);
        B && C ? (m = aa(u, a, b, c), r.extname = "." + r.stem.split(".").pop(), r.stem = r.stem.substr(0, r.stem.length - r.extname.length)) : m = JSON.stringify(u, null, h.prettify ? "    " : "");
        r.contents = Buffer.from(m);
        this.push(r);
      } catch (u) {
        this.emit("error", new g("json2json", u));
      }
    } else {
      this.push(r);
    }
    D();
  });
};

