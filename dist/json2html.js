var r = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, u = {xml:!0, svg:!0, math:!0}, B = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, COMMAND:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0, area:!0, base:!0, basefont:!0, br:!0, bgsound:!0, col:!0, command:!0, frame:!0, hr:!0, img:!0, input:!0, 
isindex:!0, keygen:!0, link:!0, meta:!0, param:!0, source:!0, track:!0, embed:!0, wbr:!0};
var H = {HTML:!0, HEAD:!0, BODY:!0, P:!0, DT:!0, DD:!0, LI:!0, OPTION:!0, TBODY:!0, THEAD:!0, TFOOT:!0, TD:!0, TH:!0, TR:!0, RB:!0, RBC:!0, RP:!0, RT:!0, RTC:!0, OPTGROUP:!0, CAPTION:!0, COLGROUP:!0}, I = {A:!0, AUDIO:!0, DEL:!0, INS:!0, MAP:!0, NOSCRIPT:!0, VIDEO:!0}, J = {H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, ADDRESS:!0, BLOCKQUOTE:!0, DIV:!0, DL:!0, FIELDSET:!0, FORM:!0, HR:!0, LEGEND:!0, MENU:!0, NOSCRIPT:!0, OL:!0, P:!0, PRE:!0, UL:!0, CENTER:!0, DIR:!0, NOFRAMES:!0, MARQUEE:!0}, L = {SCRIPT:!0, 
STYLE:!0, TEXTAREA:!0, TITLE:!0, PLAINTEXT:!0, XMP:!0, script:!0, style:!0, textarea:!0, title:!0, plaintext:!0, xmp:!0};
function M(a) {
  return !(!a || a.pop !== [].pop);
}
function N(a) {
  return !(!a || "object" !== typeof a);
}
function Q(a) {
  return "" + a === a;
}
function R(a) {
  if (Q(a) || a === +a) {
    a = 3;
  } else {
    if (M(a)) {
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
function S(a, c, f, q) {
  var h = c[1], b = c.slice(2), g;
  "function" === typeof a ? g = b.length ? a(h, b) : a(h) : g = b.length ? a[h](b) : a[h]();
  void 0 !== g && null !== g && "" !== g && (Q(g) || g === +g ? f ? f.splice(q, 1, g) : (c.length = 0, c.push(3, c)) : M(g) && (11 === g[0] ? f ? (g.shift(), g.unshift(q, 1), f.splice.apply(f, g)) : (c.length = 0, c.push.apply(c, g)) : M(g[0]) ? f ? (g.unshift(q, 1), f.splice.apply(f, g)) : (c.length = 0, c.push(11), c.push.apply(c, g)) : f ? f.splice(q, 1, g) : (c.length = 0, c.push(11, g))));
  return g;
}
function T(a, c, f, q) {
  var h;
  if (M(f) && Q(f[0])) {
    var b = f[0];
    f = f.slice(1);
    "function" === typeof a ? h = f.length ? a(b, f) : a(b) : h = f.length ? a[b](f) : a[b]();
  } else {
    Q(f) && ("function" === typeof a ? h = a(f) : h = a[f]());
  }
  return M(h) ? T(a, c, h, q) : h;
}
function U(a) {
  return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
function V(a, c, f) {
  a = U("" + a);
  var q = a.match('"'), h = a.match("'"), b = c ? "'" : '"';
  if (q && h) {
    a = c ? b + a.split("'").join("\\'") + b : b + a.split('"').join('\\"') + b;
  } else if (q) {
    a = "'" + a + "'";
  } else if (h) {
    a = c ? b + a.split("'").join("\\'") + b : b + a + b;
  } else if (f || a.match(/[^0-9a-z\.\-]/g) || 72 < a.length) {
    a = b + a + b;
  }
  return a;
}
function W(a) {
  var c = a.indexOf("#"), f = a.indexOf("."), q = "", h = "";
  c < f ? (q = a.split(".")[1], a = a.split(".")[0], 0 < c && (h = a.split("#")[1], a = a.split("#")[0])) : f < c && (h = a.split("#")[1], a = a.split("#")[0], 0 < f && (q = a.split(".")[1], a = a.split(".")[0]));
  return [a, h, q];
}
;function X(a, c, f, q, h) {
  function b(k, w, m, l, e) {
    function p() {
      var O = "";
      y && (O = "</" + y + ">", y = "");
      return O;
    }
    var d = "", G = k[0], v = k[1], t = 1, n = G, D;
    switch(G) {
      case 9:
        d = "<!DOCTYPE " + v + ">" + g(k, !1, e);
        break;
      case 11:
        d = g(k, l, e);
        break;
      case 3:
        d = p() + (e ? v : U("" + v));
        break;
      case 4:
        d = "<![CDATA[" + v + "]]\x3e";
        break;
      case 8:
        d = "\x3c!--" + v + "--\x3e";
        break;
      case 13:
        d = p() + "\x3c!--[" + v + "]>" + g(k, !0, e) + "<![endif]--\x3e";
        break;
      case 16:
        d = p() + "\x3c!--{" + v + "};" + g(k, !0, e) + "--\x3e";
        break;
      case 14:
        d = "\x3c!--[" + v + "]>\x3c!--\x3e";
        break;
      case 15:
        d = "\x3c!--<![endif]--\x3e";
        break;
      case 7:
        if (z) {
          if (l = S(z, k, w, m), void 0 !== l && null !== l && "" !== l && (Q(l) || l === +l || M(l))) {
            return -1;
          }
        } else {
          A("onInstruction is void!");
        }
        break;
      case 18:
        d = "</" + v + ">";
        break;
      case 17:
        var C = !0;
      case 1:
        n = k[1], t = 2;
      default:
        n = W(n), w = n[1], m = n[2], n = n[0], t = k[t], "P" !== y || J[n] ? y = "" : d = p(), d += "<" + n, w && (d += " id=" + V(w, K, x || E)), m && (d += " class=" + V(m, K, x || E)), x || (D = x = x || u[n] ? !0 : !1), !M(t) && N(t) && (d += F(t)), d = (k = g(k, I[n], e || L[n])) ? d + (">" + k) : C ? d + ">" : d + (x ? " />" : ">"), C ? y = "" : x && !k || H[n] && (!l || "P" !== n) ? y = B[n] ? "" : n : (d += "</" + n + ">", y = ""), D && (x = !1);
    }
    return d;
  }
  function g(k, w, m) {
    var l = [], e = k[0];
    var p = e === +e ? 2 : 1;
    1 === R(k) || 17 === e ? (e = k[p], p = !M(e) && N(e) ? p + 1 : p) : p = 11 === e ? 1 : 9 === e || 13 === e || 16 === e ? 2 : Infinity;
    e = -1;
    for (var d; p < k.length; ++p) {
      d = k[p], Q(d) || d === +d ? l[++e] = b([3, d], k, p, !1, m) : M(d) && (d = b(d, k, p, w, m), -1 === d ? --p : l[++e] = d);
    }
    return l.join("");
  }
  function F(k) {
    var w = "", m, l;
    for (m in k) {
      var e = k[m];
      (l = 0 === m.indexOf(P)) && (m = m.substr(P.length));
      "className" === m && (m = "class");
      l && (z ? e = T(z, m, e, A) : A("onInstruction is void!"));
      if (!(null == e || r[m] && !1 === e || (w += " " + m, r[m]))) {
        if ("style" === m && N(e)) {
          l = void 0;
          var p = e, d = [], G = -1;
          for (l in p) {
            e = p[l];
            "0px" === e && (e = 0);
            for (var v = ++G, t, n = [], D = l.split(""), C = D.length; C;) {
              t = D[--C], "A" <= t && "Z" >= t && (t = "-" + t.toLowerCase()), n[C] = t;
            }
            d[v] = n.join("") + ":" + U("" + e);
          }
          e = d.join(";").substr(1);
          if (!e) {
            continue;
          }
        }
        w += "=" + V(e, K, x || E);
      }
    }
    return w;
  }
  var z = c || null, A = "function" === typeof q ? q : function() {
  };
  c = h || {};
  var E = !0 === c.quotAlways, K = !0 === c.useSingleQuot, P = c.instructionAttrPrefix || ":", y, x = !1;
  if (M(a)) {
    return 7 === R(a) && (a = [11, a]), b(a, null, 0, !1, !1);
  }
}
;X.module = {};
module.exports = X;
X.DOCUMENT_NODE = 9;
X.DOCUMENT_FRAGMENT_NODE = 11;
X.ELEMENT_NODE = 1;
X.TEXT_NODE = 3;
X.CDATA_SECTION = 4;
X.PROCESSING_INSTRUCTION = 7;
X.COMMENT_NODE = 8;
X.COND_CMT_HIDE_LOWER = 13;
X.COND_CMT_SHOW_LOWER_START = 14;
X.COND_CMT_SHOW_LOWER_END = 15;
X.NETSCAPE4_COND_CMT_HIDE_LOWER = 16;
X.ELEMENT_START_TAG = 17;
X.ELEMENT_END_TAG = 18;
X.gulp = function(a, c, f, q) {
  const h = require("plugin-error");
  return require("through2").obj(function(b, g, F) {
    if (b.isNull()) {
      return F();
    }
    if (b.isStream()) {
      return this.emit("error", new h("json2html", "Streaming not supported")), F();
    }
    const z = "." + b.stem.split(".").pop();
    if (".json" === b.extname && [".html", ".htm", ".xhtml"].indexOf(z)) {
      try {
        const A = JSON.parse(b.contents.toString(g));
        if (M(A)) {
          const E = X(A, a, c, f, q);
          b.stem = b.stem.substr(0, b.stem.length - z.length);
          b.extname = z;
          b.contents = Buffer.from(E);
        }
        this.push(b);
      } catch (A) {
        this.emit("error", new h("json2html", A));
      }
    } else {
      this.push(b);
    }
    F();
  });
};

