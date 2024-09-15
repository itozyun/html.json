var q = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, t = {xml:!0, svg:!0, math:!0}, A = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, COMMAND:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0, area:!0, base:!0, basefont:!0, br:!0, bgsound:!0, col:!0, command:!0, frame:!0, hr:!0, img:!0, input:!0, 
isindex:!0, keygen:!0, link:!0, meta:!0, param:!0, source:!0, track:!0, embed:!0, wbr:!0};
var E = {HTML:!0, HEAD:!0, BODY:!0, P:!0, DT:!0, DD:!0, LI:!0, OPTION:!0, TBODY:!0, THEAD:!0, TFOOT:!0, TD:!0, TH:!0, TR:!0, RB:!0, RBC:!0, RP:!0, RT:!0, RTC:!0, OPTGROUP:!0, CAPTION:!0, COLGROUP:!0}, F = {A:!0, AUDIO:!0, DEL:!0, INS:!0, MAP:!0, NOSCRIPT:!0, VIDEO:!0}, G = {H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, ADDRESS:!0, BLOCKQUOTE:!0, DIV:!0, DL:!0, FIELDSET:!0, FORM:!0, HR:!0, LEGEND:!0, MENU:!0, NOSCRIPT:!0, OL:!0, P:!0, PRE:!0, UL:!0, CENTER:!0, DIR:!0, NOFRAMES:!0, MARQUEE:!0}, H = {SCRIPT:!0, 
STYLE:!0, TEXTAREA:!0, TITLE:!0, PLAINTEXT:!0, XMP:!0, script:!0, style:!0, textarea:!0, title:!0, plaintext:!0, xmp:!0};
function I(a) {
  return !(!a || a.pop !== [].pop);
}
function J(a) {
  return !(!a || "object" !== typeof a);
}
function O(a) {
  return "" + a === a;
}
function P(a) {
  if (O(a) || a === +a) {
    a = 3;
  } else {
    if (I(a)) {
      if (O(a[0])) {
        a = 1;
      } else {
        var e = a[0];
        a = e === +e ? a[0] : -1;
      }
    } else {
      a = -1;
    }
  }
  return a;
}
function Q(a, e, b, p) {
  var d = e[1], h = e.slice(2);
  a = h.length ? a(d, h) : a(d);
  void 0 !== a && null !== a && "" !== a && (O(a) || a === +a ? b ? b.splice(p, 1, a) : (e.length = 0, e.push(3, e)) : I(a) && (11 === a[0] ? b ? (a.shift(), a.unshift(p, 1), b.splice.apply(b, a)) : (e.length = 0, e.push.apply(e, a)) : I(a[0]) ? b ? (a.unshift(p, 1), b.splice.apply(b, a)) : (e.length = 0, e.push(11), e.push.apply(e, a)) : b ? b.splice(p, 1, a) : (e.length = 0, e.push(11, a))));
  return a;
}
function R(a, e, b, p) {
  if (I(b) && O(b[0])) {
    var d = b[0];
    b = b.slice(1);
    d = b.length ? a(d, b) : a(d);
  } else {
    O(b) && (d = a(b));
  }
  return I(d) ? R(a, e, d, p) : d;
}
function S(a) {
  return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
function T(a, e, b) {
  a = S("" + a);
  var p = a.match('"'), d = a.match("'"), h = e ? "'" : '"';
  if (p && d) {
    a = e ? h + a.split("'").join("\\'") + h : h + a.split('"').join('\\"') + h;
  } else if (p) {
    a = "'" + a + "'";
  } else if (d) {
    a = e ? h + a.split("'").join("\\'") + h : h + a + h;
  } else if (b || a.match(/[^0-9a-z\.\-]/g) || 72 < a.length) {
    a = h + a + h;
  }
  return a;
}
function U(a) {
  var e = a.indexOf("#"), b = a.indexOf("."), p = "", d = "";
  e < b ? (p = a.split(".")[1], a = a.split(".")[0], 0 < e && (d = a.split("#")[1], a = a.split("#")[0])) : b < e && (d = a.split("#")[1], a = a.split("#")[0], 0 < b && (p = a.split(".")[1], a = a.split(".")[0]));
  return [a, d, p];
}
;function V(a, e, b, p) {
  function d(f, u, m, k, c) {
    function n() {
      var K = "";
      y && (K = "</" + y + ">", y = "");
      return K;
    }
    var g = "", v = f[0], r = f[1], w = 1, l = v, L;
    switch(v) {
      case 9:
        g = "<!DOCTYPE " + r + ">" + h(f, !1, c);
        break;
      case 11:
        g = h(f, k, c);
        break;
      case 3:
        g = n() + (c ? r : S("" + r));
        break;
      case 4:
        g = "<![CDATA[" + r + "]]\x3e";
        break;
      case 8:
        g = "\x3c!--" + r + "--\x3e";
        break;
      case 13:
        g = n() + "\x3c!--[" + r + "]>" + h(f, !0, c) + "<![endif]--\x3e";
        break;
      case 16:
        g = n() + "\x3c!--{" + r + "};" + h(f, !0, c) + "--\x3e";
        break;
      case 14:
        g = "\x3c!--[" + r + "]>\x3c!--\x3e";
        break;
      case 15:
        g = "\x3c!--<![endif]--\x3e";
        break;
      case 7:
        k = Q(e, f, u, m);
        if (void 0 !== k && null !== k && "" !== k && (O(k) || k === +k || I(k))) {
          return -1;
        }
        break;
      case 18:
        g = "</" + r + ">";
        break;
      case 17:
        var M = !0;
      case 1:
        l = f[1], w = 2;
      default:
        l = U(l), u = l[1], m = l[2], l = l[0], "P" !== y || G[l] ? y = "" : g = n(), g += "<" + l, u && (g += " id=" + T(u, B, x || z)), m && (g += " class=" + T(m, B, x || z)), x || (L = x = x || t[l] ? !0 : !1), w = f[w], !I(w) && J(w) && (g += " " + C(w)), g = (f = h(f, F[l], c || H[l])) ? g + (">" + f) : M ? g + ">" : g + (x ? " />" : ">"), M ? y = "" : x && !f || E[l] && (!k || "P" !== l) ? y = A[l] ? "" : l : (g += "</" + l + ">", y = ""), L && (x = !1);
    }
    return g;
  }
  function h(f, u, m) {
    var k = "", c = f[0];
    var n = c === +c ? 2 : 1;
    1 === P(f) || 17 === c ? (c = f[n], n = !I(c) && J(c) ? n + 1 : n) : n = 11 === c ? 1 : 9 === c || 13 === c || 16 === c ? 2 : Infinity;
    for (; n < f.length; ++n) {
      c = f[n], O(c) || c === +c ? k += d([3, c], f, n, !1, m) : I(c) && (c = d(c, f, n, u, m), -1 === c ? --n : k += c);
    }
    return k;
  }
  function C(f) {
    var u = "", m, k;
    for (m in f) {
      var c = f[m];
      (k = 0 === m.indexOf(N)) && (m = m.substr(N.length));
      "className" === m && (m = "class");
      k && (c = R(e, m, c, D));
      if (!(null == c || q[m] && !1 === c || (u += " " + m, q[m]))) {
        if ("style" === m && J(c)) {
          var n = void 0, g = "";
          for (n in c) {
            k = c[n];
            "0px" === k && (k = 0);
            for (var v, r = [], w = n.split(""), l = w.length; l;) {
              v = w[--l], "A" <= v && "Z" >= v && (v = "-" + v.toLowerCase()), r[l] = v;
            }
            g += ";" + r.join("") + ":" + S("" + k);
          }
          c = g.substr(1);
          if (!c) {
            continue;
          }
        }
        u += "=" + T(c, B, x || z);
      }
    }
    return u.substr(1);
  }
  var D = "function" === typeof b ? b : function() {
  };
  b = b && "object" === typeof b ? b : p || {};
  var z = !0 === b.quotAlways, B = !0 === b.useSingleQuot, N = b.instructionAttrPrefix || ":", y, x = !1;
  if (I(a)) {
    return 7 === P(a) && (a = [11, a]), d(a, null, 0, !1, !1);
  }
}
;V.module = {};
module.exports = V;
V.DOCUMENT_NODE = 9;
V.DOCUMENT_FRAGMENT_NODE = 11;
V.ELEMENT_NODE = 1;
V.TEXT_NODE = 3;
V.CDATA_SECTION = 4;
V.PROCESSING_INSTRUCTION = 7;
V.COMMENT_NODE = 8;
V.COND_CMT_HIDE_LOWER = 13;
V.COND_CMT_SHOW_LOWER_START = 14;
V.COND_CMT_SHOW_LOWER_END = 15;
V.NETSCAPE4_COND_CMT_HIDE_LOWER = 16;
V.ELEMENT_START_TAG = 17;
V.ELEMENT_END_TAG = 18;
V.gulp = function(a, e, b) {
  const p = require("plugin-error");
  return require("through2").obj(function(d, h, C) {
    if (d.isNull()) {
      return C();
    }
    if (d.isStream()) {
      return this.emit("error", new p("json2html", "Streaming not supported")), C();
    }
    const D = "." + d.stem.split(".").pop();
    if (".json" === d.extname && [".html", ".htm", ".xhtml"].indexOf(D)) {
      try {
        const z = JSON.parse(d.contents.toString(h));
        if (I(z)) {
          const B = V(z, a, e, b);
          d.stem = d.stem.substr(0, d.stem.length - D.length);
          d.extname = D;
          d.contents = Buffer.from(B);
        }
        this.push(d);
      } catch (z) {
        this.emit("error", new p("json2html", z));
      }
    } else {
      this.push(d);
    }
    C();
  });
};

