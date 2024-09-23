var r = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, x = {xml:!0, svg:!0, math:!0}, B = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, COMMAND:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0, area:!0, base:!0, basefont:!0, br:!0, bgsound:!0, col:!0, command:!0, frame:!0, hr:!0, img:!0, input:!0, 
isindex:!0, keygen:!0, link:!0, meta:!0, param:!0, source:!0, track:!0, embed:!0, wbr:!0};
var J = {HTML:!0, HEAD:!0, BODY:!0, P:!0, DT:!0, DD:!0, LI:!0, OPTION:!0, TBODY:!0, THEAD:!0, TFOOT:!0, TD:!0, TH:!0, TR:!0, RB:!0, RBC:!0, RP:!0, RT:!0, RTC:!0, OPTGROUP:!0, CAPTION:!0, COLGROUP:!0}, K = {A:!0, AUDIO:!0, DEL:!0, INS:!0, MAP:!0, NOSCRIPT:!0, VIDEO:!0}, L = {H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, ADDRESS:!0, BLOCKQUOTE:!0, DIV:!0, DL:!0, FIELDSET:!0, FORM:!0, HR:!0, LEGEND:!0, MENU:!0, NOSCRIPT:!0, OL:!0, P:!0, PRE:!0, UL:!0, CENTER:!0, DIR:!0, NOFRAMES:!0, MARQUEE:!0}, M = {SCRIPT:!0, 
STYLE:!0, TEXTAREA:!0, TITLE:!0, PLAINTEXT:!0, XMP:!0, script:!0, style:!0, textarea:!0, title:!0, plaintext:!0, xmp:!0};
function N(a) {
  return !(!a || a.pop !== [].pop);
}
function O(a) {
  return !(!a || "object" !== typeof a);
}
function P(a) {
  return "" + a === a;
}
function T(a) {
  if (P(a) || a === +a) {
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
function U(a, b, c, h) {
  var g = b[1], d = b.slice(2), e;
  "function" === typeof a ? e = d.length ? a(g, d) : a(g) : e = d.length ? a[g](d) : a[g]();
  void 0 !== e && null !== e && "" !== e && (P(e) || e === +e ? c ? c.splice(h, 1, e) : (b.length = 0, b.push(3, b)) : N(e) && (11 === e[0] ? c ? (e.shift(), e.unshift(h, 1), c.splice.apply(c, e)) : (b.length = 0, b.push.apply(b, e)) : N(e[0]) ? c ? (e.unshift(h, 1), c.splice.apply(c, e)) : (b.length = 0, b.push(11), b.push.apply(b, e)) : c ? c.splice(h, 1, e) : (b.length = 0, b.push(11, e))));
  return e;
}
function V(a, b, c, h) {
  var g;
  if (N(c) && P(c[0])) {
    var d = c[0];
    c = c.slice(1);
    "function" === typeof a ? g = c.length ? a(d, c) : a(d) : g = c.length ? a[d](c) : a[d]();
  } else {
    P(c) && ("function" === typeof a ? g = a(c) : g = a[c]());
  }
  return N(g) ? V(a, b, g, h) : g;
}
function aa(a, b, c) {
  a = ba(a);
  var h;
  b && (b.h ? b.h.push(a) : b.h = [a]);
  if (N(c)) {
    var g = 1 === a.m || 17 === a.m;
    b = 0;
    for (h = c.length; b < h; b += 2) {
      var d = c[b];
      var e = c[b + 1];
      if (d === +d) {
        if (d === a.m && !0 === e(a)) {
          break;
        }
      } else if (g && P(d) && d === a.v && !0 === e(a)) {
        break;
      }
    }
  } else {
    c(a);
  }
  return a;
}
function W(a) {
  return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
function X(a, b, c) {
  a = W("" + a);
  var h = a.match('"'), g = a.match("'"), d = b ? "'" : '"';
  if (h && g) {
    a = b ? d + a.split("'").join("\\'") + d : d + a.split('"').join('\\"') + d;
  } else if (h) {
    a = "'" + a + "'";
  } else if (g) {
    a = b ? d + a.split("'").join("\\'") + d : d + a + d;
  } else if (c || a.match(/[^0-9a-z\.\-]/g) || 72 < a.length) {
    a = d + a + d;
  }
  return a;
}
function ca(a) {
  var b = a.indexOf("#"), c = a.indexOf("."), h = "", g = "";
  b < c ? (h = a.split(".")[1], a = a.split(".")[0], 0 < b && (g = a.split("#")[1], a = a.split("#")[0])) : c < b && (g = a.split("#")[1], a = a.split("#")[0], 0 < c && (h = a.split(".")[1], a = a.split(".")[0]));
  return [a, g, h];
}
function ba(a) {
  return function(b, c) {
    function h(u, C, H) {
      if (g) {
        var z = g;
        z.j ? (z.o = z.o || [], z.o.push([u, C, H]), u = null) : u = new Y(z, z.h && z.h.length, u, C);
      } else {
        u = new Y(!0, 0, u, C);
      }
      return u;
    }
    var g = c === !!c ? null : c;
    c = b[0];
    var d = b[1], e = 1, y = c;
    switch(c) {
      case 3:
      case 4:
      case 8:
      case 14:
      case 18:
        return h(c, d);
      case 15:
        return h(c);
      case 7:
        var v = [];
        e = 2;
        for (y = b.length; e < y; ++e) {
          v[e - 2] = b[e];
        }
        return h(c, d, y ? v : null);
      case 9:
      case 13:
      case 16:
        v = h(c, d);
        break;
      case 11:
        v = h(c);
        break;
      case 1:
      case 17:
        y = d, e = 2;
      default:
        P(y) && (v = h(1 === e ? 1 : c, y, b[e]));
    }
    return v;
  }(a, !0);
}
;function Y(a, b, c, h) {
  if (a === !!a) {
    var g = null;
    this.j = a;
  } else {
    g = a, this.j = g.j;
  }
  this.l = g;
  this.m = c;
  g && (g.h || (g.h = []), a = g.h, 0 <= b && b < a.length ? a.splice(b, 0, this) : a.push(this));
  switch(c) {
    case 1:
    case 17:
    case 18:
      this.v = h;
  }
}
Y.prototype.remove = function() {
  if (this.j) {
    return null;
  }
  var a = this.l ? this.l.h.indexOf(this) : -1;
  0 <= a && (this.l.h.splice(a, 1), this.l = null);
};
function Z(a, b, c, h, g) {
  function d(l, A, f, w, k, m) {
    function p() {
      var Q = "";
      F && (Q = "</" + F + ">", F = "");
      return Q;
    }
    var q = u ? aa(l, f, u) : null;
    f = "";
    var I = l[0], t = l[1], D = 1, n = I, G;
    switch(I) {
      case 9:
        f = "<!DOCTYPE " + t + ">" + e(l, q, !1, m);
        break;
      case 11:
        f = e(l, q, k, m);
        break;
      case 3:
        f = p() + (m ? t : W("" + t));
        break;
      case 4:
        f = "<![CDATA[" + t + "]]\x3e";
        break;
      case 8:
        f = "\x3c!--" + t + "--\x3e";
        break;
      case 13:
        f = p() + "\x3c!--[" + t + "]>" + e(l, q, !0, m) + "<![endif]--\x3e";
        break;
      case 16:
        f = p() + "\x3c!--{" + t + "};" + e(l, q, !0, m) + "--\x3e";
        break;
      case 14:
        f = "\x3c!--[" + t + "]>\x3c!--\x3e";
        break;
      case 15:
        f = "\x3c!--<![endif]--\x3e";
        break;
      case 7:
        if (v) {
          if (k = U(v, l, A, w), void 0 !== k && null !== k && "" !== k && (P(k) || k === +k || N(k))) {
            return -1;
          }
        } else {
          C("onInstruction is void!");
        }
        break;
      case 18:
        f = "</" + t + ">";
        break;
      case 17:
        var R = !0;
      case 1:
        n = l[1], D = 2;
      default:
        n = ca(n), A = n[1], w = n[2], n = n[0], D = l[D], "P" !== F || L[n] ? F = "" : f = p(), f += "<" + n, A && (f += " id=" + X(A, z, E || H)), w && (f += " class=" + X(w, z, E || H)), E || (G = E = E || x[n] ? !0 : !1), !N(D) && O(D) && (f += y(D)), f = (l = e(l, q, K[n], m || M[n])) ? f + (">" + l) : R ? f + ">" : f + (E ? " />" : ">"), R ? F = "" : E && !l || J[n] && (!k || "P" !== n) ? F = B[n] ? "" : n : (f += "</" + n + ">", F = ""), G && (E = !1);
    }
    return f;
  }
  function e(l, A, f, w) {
    var k = [], m = l[0];
    var p = m === +m ? 2 : 1;
    1 === T(l) || 17 === m ? (m = l[p], p = !N(m) && O(m) ? p + 1 : p) : p = 11 === m ? 1 : 9 === m || 13 === m || 16 === m ? 2 : Infinity;
    m = -1;
    for (var q; p < l.length; ++p) {
      q = l[p], P(q) || q === +q ? k[++m] = d([3, q], l, A, p, !1, w) : N(q) && (q = d(q, l, A, p, f, w), -1 === q ? --p : k[++m] = q);
    }
    return k.join("");
  }
  function y(l) {
    var A = "", f, w;
    for (f in l) {
      var k = l[f];
      (w = 0 === f.indexOf(S)) && (f = f.substr(S.length));
      "className" === f && (f = "class");
      w && (v ? k = V(v, f, k, C) : C("onInstruction is void!"));
      if (!(null == k || r[f] && !1 === k || (A += " " + f, r[f]))) {
        if ("style" === f && O(k)) {
          w = void 0;
          var m = k, p = [], q = -1;
          for (w in m) {
            k = m[w];
            "0px" === k && (k = 0);
            for (var I = ++q, t, D = [], n = w.split(""), G = n.length; G;) {
              t = n[--G], "A" <= t && "Z" >= t && (t = "-" + t.toLowerCase()), D[G] = t;
            }
            p[I] = D.join("") + ":" + W("" + k);
          }
          k = p.join(";").substr(1);
          if (!k) {
            continue;
          }
        }
        A += "=" + X(k, z, E || H);
      }
    }
    return A;
  }
  var v = b || null, u = c || null, C = "function" === typeof h ? h : function() {
  };
  b = g || {};
  var H = !0 === b.quotAlways, z = !0 === b.useSingleQuot, S = b.instructionAttrPrefix || ":", F, E = !1;
  if (N(a)) {
    return 7 === T(a) && (a = [11, a]), d(a, null, null, 0, !1, !1);
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
Z.gulp = function(a, b, c, h) {
  const g = require("plugin-error");
  return require("through2").obj(function(d, e, y) {
    if (d.isNull()) {
      return y();
    }
    if (d.isStream()) {
      return this.emit("error", new g("json2html", "Streaming not supported")), y();
    }
    const v = "." + d.stem.split(".").pop();
    if (".json" === d.extname && [".html", ".htm", ".xhtml"].indexOf(v)) {
      try {
        const u = JSON.parse(d.contents.toString(e));
        if (N(u)) {
          const C = Z(u, a, b, c, h);
          d.stem = d.stem.substr(0, d.stem.length - v.length);
          d.extname = v;
          d.contents = Buffer.from(C);
        }
        this.push(d);
      } catch (u) {
        this.emit("error", new g("json2html", u));
      }
    } else {
      this.push(d);
    }
    y();
  });
};

