var r = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, u = {xml:!0, svg:!0, math:!0}, C = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, COMMAND:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0, area:!0, base:!0, basefont:!0, br:!0, bgsound:!0, col:!0, command:!0, frame:!0, hr:!0, img:!0, input:!0, 
isindex:!0, keygen:!0, link:!0, meta:!0, param:!0, source:!0, track:!0, embed:!0, wbr:!0};
var F = {HTML:!0, HEAD:!0, BODY:!0, P:!0, DT:!0, DD:!0, LI:!0, OPTION:!0, TBODY:!0, THEAD:!0, TFOOT:!0, TD:!0, TH:!0, TR:!0, RB:!0, RBC:!0, RP:!0, RT:!0, RTC:!0, OPTGROUP:!0, CAPTION:!0, COLGROUP:!0}, G = {A:!0, AUDIO:!0, DEL:!0, INS:!0, MAP:!0, NOSCRIPT:!0, VIDEO:!0}, H = {H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, ADDRESS:!0, BLOCKQUOTE:!0, DIV:!0, DL:!0, FIELDSET:!0, FORM:!0, HR:!0, LEGEND:!0, MENU:!0, NOSCRIPT:!0, OL:!0, P:!0, PRE:!0, UL:!0, CENTER:!0, DIR:!0, NOFRAMES:!0, MARQUEE:!0}, J = {SCRIPT:!0, 
STYLE:!0, TEXTAREA:!0, TITLE:!0, PLAINTEXT:!0, XMP:!0, script:!0, style:!0, textarea:!0, title:!0, plaintext:!0, xmp:!0};
function K(a) {
  return !(!a || a.pop !== [].pop);
}
function L(a) {
  return !(!a || "object" !== typeof a);
}
function Q(a) {
  return "" + a === a;
}
function R(a) {
  if (Q(a) || a === +a) {
    a = 3;
  } else {
    if (K(a)) {
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
function S(a, c, e, q) {
  var h = c[1], b = c.slice(2), g;
  "function" === typeof a ? g = b.length ? a(h, b) : a(h) : g = b.length ? a[h](b) : a[h]();
  void 0 !== g && null !== g && "" !== g && (Q(g) || g === +g ? e ? e.splice(q, 1, g) : (c.length = 0, c.push(3, c)) : K(g) && (11 === g[0] ? e ? (g.shift(), g.unshift(q, 1), e.splice.apply(e, g)) : (c.length = 0, c.push.apply(c, g)) : K(g[0]) ? e ? (g.unshift(q, 1), e.splice.apply(e, g)) : (c.length = 0, c.push(11), c.push.apply(c, g)) : e ? e.splice(q, 1, g) : (c.length = 0, c.push(11, g))));
  return g;
}
function T(a, c, e, q) {
  var h;
  if (K(e) && Q(e[0])) {
    var b = e[0];
    e = e.slice(1);
    "function" === typeof a ? h = e.length ? a(b, e) : a(b) : h = e.length ? a[b](e) : a[b]();
  } else {
    Q(e) && ("function" === typeof a ? h = a(e) : h = a[e]());
  }
  return K(h) ? T(a, c, h, q) : h;
}
function U(a) {
  return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
function V(a, c, e) {
  a = U("" + a);
  var q = a.match('"'), h = a.match("'"), b = c ? "'" : '"';
  if (q && h) {
    a = c ? b + a.split("'").join("\\'") + b : b + a.split('"').join('\\"') + b;
  } else if (q) {
    a = "'" + a + "'";
  } else if (h) {
    a = c ? b + a.split("'").join("\\'") + b : b + a + b;
  } else if (e || a.match(/[^0-9a-z\.\-]/g) || 72 < a.length) {
    a = b + a + b;
  }
  return a;
}
function W(a) {
  var c = a.indexOf("#"), e = a.indexOf("."), q = "", h = "";
  c < e ? (q = a.split(".")[1], a = a.split(".")[0], 0 < c && (h = a.split("#")[1], a = a.split("#")[0])) : e < c && (h = a.split("#")[1], a = a.split("#")[0], 0 < e && (q = a.split(".")[1], a = a.split(".")[0]));
  return [a, h, q];
}
;function X(a, c, e, q, h) {
  function b(k, v, n, l, f) {
    function p() {
      var M = "";
      z && (M = "</" + z + ">", z = "");
      return M;
    }
    var d = "", w = k[0], t = k[1], x = 1, m = w, N;
    switch(w) {
      case 9:
        d = "<!DOCTYPE " + t + ">" + g(k, !1, f);
        break;
      case 11:
        d = g(k, l, f);
        break;
      case 3:
        d = p() + (f ? t : U("" + t));
        break;
      case 4:
        d = "<![CDATA[" + t + "]]\x3e";
        break;
      case 8:
        d = "\x3c!--" + t + "--\x3e";
        break;
      case 13:
        d = p() + "\x3c!--[" + t + "]>" + g(k, !0, f) + "<![endif]--\x3e";
        break;
      case 16:
        d = p() + "\x3c!--{" + t + "};" + g(k, !0, f) + "--\x3e";
        break;
      case 14:
        d = "\x3c!--[" + t + "]>\x3c!--\x3e";
        break;
      case 15:
        d = "\x3c!--<![endif]--\x3e";
        break;
      case 7:
        if (A) {
          if (l = S(A, k, v, n), void 0 !== l && null !== l && "" !== l && (Q(l) || l === +l || K(l))) {
            return -1;
          }
        } else {
          B("onInstruction is void!");
        }
        break;
      case 18:
        d = "</" + t + ">";
        break;
      case 17:
        var O = !0;
      case 1:
        m = k[1], x = 2;
      default:
        m = W(m), v = m[1], n = m[2], m = m[0], x = k[x], "P" !== z || H[m] ? z = "" : d = p(), d += "<" + m, v && (d += " id=" + V(v, I, y || D)), n && (d += " class=" + V(n, I, y || D)), y || (N = y = y || u[m] ? !0 : !1), !K(x) && L(x) && (d += E(x)), d = (k = g(k, G[m], f || J[m])) ? d + (">" + k) : O ? d + ">" : d + (y ? " />" : ">"), O ? z = "" : y && !k || F[m] && (!l || "P" !== m) ? z = C[m] ? "" : m : (d += "</" + m + ">", z = ""), N && (y = !1);
    }
    return d;
  }
  function g(k, v, n) {
    var l = [], f = k[0];
    var p = f === +f ? 2 : 1;
    1 === R(k) || 17 === f ? (f = k[p], p = !K(f) && L(f) ? p + 1 : p) : p = 11 === f ? 1 : 9 === f || 13 === f || 16 === f ? 2 : Infinity;
    f = -1;
    for (var d; p < k.length; ++p) {
      d = k[p], Q(d) || d === +d ? l[++f] = b([3, d], k, p, !1, n) : K(d) && (d = b(d, k, p, v, n), -1 === d ? --p : l[++f] = d);
    }
    return l.join("");
  }
  function E(k) {
    var v = "", n, l;
    for (n in k) {
      var f = k[n];
      (l = 0 === n.indexOf(P)) && (n = n.substr(P.length));
      "className" === n && (n = "class");
      l && (A ? f = T(A, n, f, B) : B("onInstruction is void!"));
      if (!(null == f || r[n] && !1 === f || (v += " " + n, r[n]))) {
        if ("style" === n && L(f)) {
          var p = void 0, d = "";
          for (p in f) {
            l = f[p];
            "0px" === l && (l = 0);
            for (var w, t = [], x = p.split(""), m = x.length; m;) {
              w = x[--m], "A" <= w && "Z" >= w && (w = "-" + w.toLowerCase()), t[m] = w;
            }
            d += ";" + t.join("") + ":" + U("" + l);
          }
          f = d.substr(1);
          if (!f) {
            continue;
          }
        }
        v += "=" + V(f, I, y || D);
      }
    }
    return v;
  }
  var A = c || null, B = "function" === typeof q ? q : function() {
  };
  c = h || {};
  var D = !0 === c.quotAlways, I = !0 === c.useSingleQuot, P = c.instructionAttrPrefix || ":", z, y = !1;
  if (K(a)) {
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
X.gulp = function(a, c, e, q) {
  const h = require("plugin-error");
  return require("through2").obj(function(b, g, E) {
    if (b.isNull()) {
      return E();
    }
    if (b.isStream()) {
      return this.emit("error", new h("json2html", "Streaming not supported")), E();
    }
    const A = "." + b.stem.split(".").pop();
    if (".json" === b.extname && [".html", ".htm", ".xhtml"].indexOf(A)) {
      try {
        const B = JSON.parse(b.contents.toString(g));
        if (K(B)) {
          const D = X(B, a, c, e, q);
          b.stem = b.stem.substr(0, b.stem.length - A.length);
          b.extname = A;
          b.contents = Buffer.from(D);
        }
        this.push(b);
      } catch (B) {
        this.emit("error", new h("json2html", B));
      }
    } else {
      this.push(b);
    }
    E();
  });
};

