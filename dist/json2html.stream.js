var p, aa = {xml:!0, svg:!0, math:!0}, ba = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, ca = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, COMMAND:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0, area:!0, base:!0, basefont:!0, br:!0, bgsound:!0, col:!0, command:!0, frame:!0, hr:!0, img:!0, input:!0, 
isindex:!0, keygen:!0, link:!0, meta:!0, param:!0, source:!0, track:!0, embed:!0, wbr:!0}, B = {CAPTION:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, 
WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DD:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, 
UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, 
FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DT:{ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, 
svg:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, P:{A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, 
OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, HTML:{HEAD:!0, BODY:!0}, HEAD:{TITLE:!0, BASE:!0, BGSOUND:!0, LINK:!0, META:!0, STYLE:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLETE:!0}, COLGROUP:{COL:!0}, OPTGROUP:{OPTION:!0}, OPTION:{}, TBODY:{TR:!0}, TR:{TH:!0, TD:!0}, RBC:{RB:!0, RP:!0, RT:!0}};
B.LI = B.TD = B.DD;
B.TH = B.DT;
B.RB = B.RP = B.RT = B.P;
B.TFOOT = B.THEAD = B.TBODY;
B.RTC = B.RBC;
var da = {HTML:!0, HEAD:!0, BODY:!0, P:!0, DT:!0, DD:!0, LI:!0, OPTION:!0, TBODY:!0, THEAD:!0, TFOOT:!0, TD:!0, TH:!0, TR:!0, RB:!0, RBC:!0, RP:!0, RT:!0, RTC:!0, OPTGROUP:!0, CAPTION:!0, COLGROUP:!0}, ea = {A:!0, AUDIO:!0, DEL:!0, INS:!0, MAP:!0, NOSCRIPT:!0, VIDEO:!0}, fa = {H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, ADDRESS:!0, BLOCKQUOTE:!0, DIV:!0, DL:!0, FIELDSET:!0, FORM:!0, HR:!0, LEGEND:!0, MENU:!0, NOSCRIPT:!0, OL:!0, P:!0, PRE:!0, UL:!0, CENTER:!0, DIR:!0, NOFRAMES:!0, MARQUEE:!0}, ha = 
{SCRIPT:!0, STYLE:!0, TEXTAREA:!0, TITLE:!0, PLAINTEXT:!0, XMP:!0, script:!0, style:!0, textarea:!0, title:!0, plaintext:!0, xmp:!0}, ia = !1, ja = !1, ka = !1;
function C(a) {
  return !(!a || a.pop !== [].pop);
}
function la(a) {
  return !(!a || "object" !== typeof a);
}
function F(a) {
  return "" + a === a;
}
function G(a) {
  return F(a) || a === +a;
}
function ma(a) {
  if (G(a)) {
    a = 3;
  } else if (C(a)) {
    if (F(a[0])) {
      a = 1;
    } else {
      var b = a[0];
      a = b === +b ? a[0] : -1;
    }
  } else {
    a = -1;
  }
  return a;
}
function na(a, b, c, f) {
  var e = b[1], k = b.slice(2), n;
  "function" === typeof a ? n = k.length ? a(e, k) : a(e) : n = k.length ? a[e](k) : a[e]();
  void 0 !== n && null !== n && "" !== n && (G(n) ? c ? c.splice(f, 1, n) : (b.length = 0, b.push(3, b)) : C(n) && (11 === n[0] ? c ? (n.shift(), n.unshift(f, 1), c.splice.apply(c, n)) : (b.length = 0, b.push.apply(b, n)) : C(n[0]) ? c ? (n.unshift(f, 1), c.splice.apply(c, n)) : (b.length = 0, b.push(11), b.push.apply(b, n)) : c ? c.splice(f, 1, n) : (b.length = 0, b.push(11, n))));
  return n;
}
function oa(a, b, c, f) {
  var e;
  if (C(c) && F(c[0])) {
    var k = c[0];
    c = c.slice(1);
    "function" === typeof a ? e = c.length ? a(k, c) : a(k) : e = c.length ? a[k](c) : a[k]();
  } else {
    F(c) && ("function" === typeof a ? e = a(c) : e = a[c]());
  }
  return C(e) ? oa(a, b, e, f) : e;
}
function pa(a, b, c) {
  a = qa(a);
  var f;
  b && (b.h ? b.h.push(a) : b.h = [a]);
  if (C(c)) {
    var e = 1 === a.m || 17 === a.m;
    b = 0;
    for (f = c.length; b < f; b += 2) {
      var k = c[b], n = c[b + 1];
      if (k === +k) {
        if (k === a.m && !0 === n(a)) {
          break;
        }
      } else if (e && F(k) && k === a.D && !0 === n(a)) {
        break;
      }
    }
  } else {
    c(a);
  }
  return a;
}
function I(a) {
  return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
function K(a, b, c) {
  a = I("" + a);
  var f = a.match('"'), e = a.match("'"), k = b ? "'" : '"';
  if (f && e) {
    a = b ? k + a.split("'").join("\\'") + k : k + a.split('"').join('\\"') + k;
  } else if (f) {
    a = "'" + a + "'";
  } else if (e) {
    a = b ? k + a.split("'").join("\\'") + k : k + a + k;
  } else if (c || a.match(/[^0-9a-z\.\-]/g) || 72 < a.length) {
    a = k + a + k;
  }
  return a;
}
function ra(a) {
  var b = [];
  a = a.split("");
  for (var c = a.length, f; c;) {
    f = a[--c], "A" <= f && "Z" >= f && (f = "-" + f.toLowerCase()), b[c] = f;
  }
  return b.join("");
}
function sa(a) {
  var b = a.indexOf("#"), c = a.indexOf("."), f = "", e = "";
  b < c ? (f = a.split(".")[1], a = a.split(".")[0], 0 < b && (e = a.split("#")[1], a = a.split("#")[0])) : c < b && (e = a.split("#")[1], a = a.split("#")[0], 0 < c && (f = a.split(".")[1], a = a.split(".")[0]));
  return [a, e, f];
}
function qa(a) {
  return function(b, c) {
    function f(d, y, g) {
      if (e) {
        var m = e;
        m.j ? (m.C = m.C || [], m.C.push([d, y, g]), d = null) : d = new ta(m, m.h && m.h.length, d, y, g);
      } else {
        d = new ta(!0, 0, d, y, g);
      }
      return d;
    }
    var e = c === !!c ? null : c;
    c = b[0];
    var k = b[1], n = 1, h = c;
    switch(c) {
      case 3:
      case 4:
      case 8:
      case 14:
      case 18:
        return f(c, k);
      case 15:
        return f(c);
      case 7:
        var l = [];
        n = 2;
        for (h = b.length; n < h; ++n) {
          l[n - 2] = b[n];
        }
        return f(c, k, h ? l : null);
      case 9:
      case 13:
      case 16:
        l = f(c, k);
        break;
      case 11:
        l = f(c);
        break;
      case 1:
      case 17:
        h = k, n = 2;
      default:
        F(h) && (l = f(1 === n ? 1 : c, h, b[n]));
    }
    return l;
  }(a, !0);
}
function ta(a, b, c, f, e) {
  if (a === !!a) {
    var k = null;
    this.j = a;
  } else {
    k = a, this.j = k.j;
  }
  this.l = k;
  this.m = c;
  k && (k.h || (k.h = []), a = k.h, 0 <= b && b < a.length ? a.splice(b, 0, this) : a.push(this));
  switch(c) {
    case 1:
    case 17:
    case 18:
      this.D = f;
      break;
    case 7:
      this.v = e || null;
  }
}
ta.prototype.remove = function() {
  if (this.j) {
    return null;
  }
  var a = this.l ? this.l.h.indexOf(this) : -1;
  0 <= a && (this.l.h.splice(a, 1), this.l = null);
};
function ua(a, b, c, f, e) {
  function k(t, H, q, E, r, v) {
    function x() {
      var Ba = "";
      w && (Ba = "</" + w + ">", w = "");
      return Ba;
    }
    var D = d ? pa(t, q, d) : null;
    q = "";
    var Ca = t[0], J = t[1], R = 1, z = Ca, Da;
    switch(Ca) {
      case 9:
        q = J + n(t, D, !1, v);
        break;
      case 11:
        q = n(t, D, r, v);
        break;
      case 3:
        q = x() + (v ? J : I("" + J));
        break;
      case 4:
        q = "<![CDATA[" + J + "]]\x3e";
        break;
      case 8:
        q = "\x3c!--" + J + "--\x3e";
        break;
      case 13:
        q = x() + "\x3c!--[" + J + "]>" + n(t, D, !0, v) + "<![endif]--\x3e";
        break;
      case 16:
        q = x() + "\x3c!--{" + J + "};" + n(t, D, !0, v) + "--\x3e";
        break;
      case 14:
        q = "\x3c!--[" + J + "]>\x3c!--\x3e";
        break;
      case 15:
        q = "\x3c!--<![endif]--\x3e";
        break;
      case 7:
        if (l) {
          if (r = na(l, t, H, E), void 0 !== r && null !== r && "" !== r && (G(r) || C(r))) {
            return -1;
          }
        } else {
          y("onInstruction is void!");
        }
        break;
      case 18:
        q = "</" + J + ">";
        break;
      case 17:
        var Ea = !0;
      case 1:
        z = t[1], R = 2;
      default:
        z = sa(z), H = z[1], E = z[2], z = z[0], R = t[R], "P" !== w || fa[z] ? w = "" : q = x(), q += "<" + z, H && (q += " id=" + K(H, m, A || g)), E && (q += " class=" + K(E, m, A || g)), A || (Da = A = A || aa[z] ? !0 : 0 < z.indexOf(":")), !C(R) && la(R) && (q += h(R)), q = (t = n(t, D, ea[z], v || ha[z])) ? q + (">" + t) : Ea ? q + ">" : q + (A ? " />" : ">"), Ea ? w = "" : A && !t || da[z] && (!r || "P" !== z) ? w = ca[z] ? "" : z : (q += "</" + z + ">", w = ""), Da && (A = !1);
    }
    return q;
  }
  function n(t, H, q, E) {
    var r = [], v = t[0], x = v === +v ? 2 : 1;
    1 === ma(t) || 17 === v ? (v = t[x], x = !C(v) && la(v) ? x + 1 : x) : x = 11 === v ? 1 : 9 === v || 13 === v || 16 === v ? 2 : Infinity;
    v = -1;
    for (var D; x < t.length; ++x) {
      D = t[x], G(D) ? r[++v] = k([3, D], t, H, x, !1, E) : C(D) && (D = k(D, t, H, x, q, E), -1 === D ? --x : r[++v] = D);
    }
    return r.join("");
  }
  function h(t) {
    var H = "", q, E;
    for (q in t) {
      var r = t[q];
      (E = 0 === q.indexOf(u)) && (q = q.substr(u.length));
      "className" === q && (q = "class");
      E && (l ? r = oa(l, q, r, y) : y("onInstruction is void!"));
      if (!(null == r || ba[q] && !1 === r || (H += " " + q, ba[q]))) {
        if ("style" === q && la(r)) {
          E = void 0;
          var v = r, x = [], D = -1;
          for (E in v) {
            r = v[E], "0px" === r && (r = 0), x[++D] = ra(E) + ":" + I("" + r);
          }
          r = x.join(";").substr(1);
          if (!r) {
            continue;
          }
        }
        H += "=" + K(r, m, A || g);
      }
    }
    return H;
  }
  var l = b || null, d = c || null, y = "function" === typeof f ? f : function() {
  };
  b = e || {};
  var g = !0 === b.quotAlways, m = !0 === b.useSingleQuot, u = b.instructionAttrPrefix || ":", w, A = ka;
  if (C(a)) {
    return 7 === ma(a) && (a = [11, a]), k(a, null, null, 0, ia || !1, ja || !1);
  }
}
var L = {}, M = L.qa = 1, N = L.za = 2, O = L.ra = 3, P = L.Aa = 4, Q = L.ia = 5, S = L.ja = 6, va = L.Ka = 7, wa = L.ka = 8, xa = L.sa = 9, T = L.Da = 10, ya = L.wa = 11, U = L.Ba = 17, za = L.Ca = 18, Aa = L.La = 33, Fa = L.Ma = 34, Ga = L.Na = 35, Ha = L.la = 49, Ia = L.ma = 50, Ja = L.na = 51, Ka = L.oa = 52, La = L.ta = 65, Ma = L.ua = 66, Na = L.va = 67, Oa = L.xa = 81, Pa = L.ya = 83, V = L.Ea = 97, Qa = L.Fa = 98, Ra = L.Ga = 99, Sa = L.Ha = 100, Ta = L.Ia = 101, Ua = L.Ja = 102, W = L.Oa = 
113, Va = L.pa = 114, Wa = L.OBJECT = 129, Xa = L.ha = 130;
function Ya() {
  this.h = U;
  this.string = this.value = void 0;
  this.W = Buffer.alloc ? Buffer.alloc(65536) : new Buffer(65536);
  this.m = 0;
  this.mode = this.key = this.D = this.R = void 0;
  this.stack = [];
  this.j = W;
  this.l = this.N = 0;
  this.aa = {2:new Buffer(2), 3:new Buffer(3), 4:new Buffer(4)};
  this.offset = -1;
}
function Za(a) {
  for (var b = Object.keys(L), c = 0, f = b.length; c < f; c++) {
    var e = b[c];
    if (L[e] === a) {
      return e;
    }
  }
  return a && "0x" + a.toString(16);
}
p = Ya.prototype;
p.O = function(a) {
  throw a;
};
function X(a, b, c) {
  a.h = za;
  a.O(Error("Unexpected " + JSON.stringify(String.fromCharCode(b[c])) + " at position " + c + " in state " + Za(a.h)));
}
function Y(a, b) {
  65536 <= a.m && (a.string += a.W.toString("utf8"), a.m = 0);
  a.W[a.m++] = b;
}
function $a(a, b, c, f) {
  var e = b.length;
  "number" === typeof c && (e = "number" === typeof f ? 0 > f ? b.length - c + f : f - c : b.length - c);
  0 > e && (e = 0);
  65536 < a.m + e && (a.string += a.W.toString("utf8", 0, a.m), a.m = 0);
  b.copy(a.W, a.m, c, f);
  a.m += e;
}
p.write = function(a) {
  "string" === typeof a && (a = new Buffer(a));
  for (var b, c = 0, f = a.length; c < f; c++) {
    if (this.h === U) {
      if (b = a[c], this.offset++, 123 === b) {
        this.o(M, "{");
      } else if (125 === b) {
        this.o(N, "}");
      } else if (91 === b) {
        this.o(O, "[");
      } else if (93 === b) {
        this.o(P, "]");
      } else if (58 === b) {
        this.o(Q, ":");
      } else if (44 === b) {
        this.o(S, ",");
      } else if (116 === b) {
        this.h = Aa;
      } else if (102 === b) {
        this.h = Ha;
      } else if (110 === b) {
        this.h = La;
      } else if (34 === b) {
        this.string = "", this.m = 0, this.h = V;
      } else if (45 === b) {
        this.string = "-", this.h = Oa;
      } else if (48 <= b && 64 > b) {
        this.string = String.fromCharCode(b), this.h = Pa;
      } else {
        if (32 !== b && 9 !== b && 10 !== b && 13 !== b) {
          return X(this, a, c);
        }
      }
    } else if (this.h === V) {
      if (b = a[c], 0 < this.N) {
        for (b = 0; b < this.N; b++) {
          this.aa[this.l][this.l - this.N + b] = a[b];
        }
        $a(this, this.aa[this.l]);
        this.l = this.N = 0;
        c = c + b - 1;
      } else if (0 === this.N && 128 <= b) {
        if (193 >= b || 244 < b) {
          return this.O(Error("Invalid UTF-8 character at position " + c + " in state " + Za(this.h)));
        }
        194 <= b && 223 >= b && (this.l = 2);
        224 <= b && 239 >= b && (this.l = 3);
        240 <= b && 244 >= b && (this.l = 4);
        if (this.l + c > a.length) {
          for (b = 0; b <= a.length - 1 - c; b++) {
            this.aa[this.l][b] = a[c + b];
          }
          this.N = c + this.l - a.length;
          c = a.length - 1;
        } else {
          $a(this, a, c, c + this.l), c = c + this.l - 1;
        }
      } else if (34 === b) {
        this.h = U, this.string += this.W.toString("utf8", 0, this.m), this.m = 0, this.o(T, this.string), this.offset += Buffer.byteLength(this.string, "utf8") + 1, this.string = void 0;
      } else if (92 === b) {
        this.h = Qa;
      } else if (32 <= b) {
        Y(this, b);
      } else {
        return X(this, a, c);
      }
    } else if (this.h === Qa) {
      if (b = a[c], 34 === b) {
        Y(this, b), this.h = V;
      } else if (92 === b) {
        Y(this, 92), this.h = V;
      } else if (47 === b) {
        Y(this, 47), this.h = V;
      } else if (98 === b) {
        Y(this, 8), this.h = V;
      } else if (102 === b) {
        Y(this, 12), this.h = V;
      } else if (110 === b) {
        Y(this, 10), this.h = V;
      } else if (114 === b) {
        Y(this, 13), this.h = V;
      } else if (116 === b) {
        Y(this, 9), this.h = V;
      } else if (117 === b) {
        this.R = "", this.h = Ra;
      } else {
        return X(this, a, c);
      }
    } else if (this.h === Ra || this.h === Sa || this.h === Ta || this.h === Ua) {
      if (b = a[c], 48 <= b && 64 > b || 64 < b && 70 >= b || 96 < b && 102 >= b) {
        this.R += String.fromCharCode(b), this.h++ === Ua && (b = parseInt(this.R, 16), this.R = void 0, void 0 !== this.D && 56320 <= b && 57344 > b ? ($a(this, new Buffer(String.fromCharCode(this.D, b))), this.D = void 0) : void 0 === this.D && 55296 <= b && 56320 > b ? this.D = b : (void 0 !== this.D && ($a(this, new Buffer(String.fromCharCode(this.D))), this.D = void 0), $a(this, new Buffer(String.fromCharCode(b)))), this.h = V);
      } else {
        return X(this, a, c);
      }
    } else if (this.h === Oa || this.h === Pa) {
      switch(b = a[c], b) {
        case 48:
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
        case 46:
        case 101:
        case 69:
        case 43:
        case 45:
          this.string += String.fromCharCode(b);
          this.h = Pa;
          break;
        default:
          this.h = U;
          b = Number(this.string);
          if (isNaN(b)) {
            return X(this, a, c);
          }
          this.string.match(/[0-9]+/) == this.string && b.toString() != this.string ? this.o(T, this.string) : this.o(ya, b);
          this.offset += this.string.length - 1;
          this.string = void 0;
          c--;
      }
    } else if (this.h === Aa) {
      if (114 === a[c]) {
        this.h = Fa;
      } else {
        return X(this, a, c);
      }
    } else if (this.h === Fa) {
      if (117 === a[c]) {
        this.h = Ga;
      } else {
        return X(this, a, c);
      }
    } else if (this.h === Ga) {
      if (101 === a[c]) {
        this.h = U, this.o(va, !0), this.offset += 3;
      } else {
        return X(this, a, c);
      }
    } else if (this.h === Ha) {
      if (97 === a[c]) {
        this.h = Ia;
      } else {
        return X(this, a, c);
      }
    } else if (this.h === Ia) {
      if (108 === a[c]) {
        this.h = Ja;
      } else {
        return X(this, a, c);
      }
    } else if (this.h === Ja) {
      if (115 === a[c]) {
        this.h = Ka;
      } else {
        return X(this, a, c);
      }
    } else if (this.h === Ka) {
      if (101 === a[c]) {
        this.h = U, this.o(wa, !1), this.offset += 4;
      } else {
        return X(this, a, c);
      }
    } else if (this.h === La) {
      if (117 === a[c]) {
        this.h = Ma;
      } else {
        return X(this, a, c);
      }
    } else if (this.h === Ma) {
      if (108 === a[c]) {
        this.h = Na;
      } else {
        return X(this, a, c);
      }
    } else if (this.h === Na) {
      if (108 === a[c]) {
        this.h = U, this.o(xa, null), this.offset += 3;
      } else {
        return X(this, a, c);
      }
    }
  }
};
p.o = function() {
};
function Z(a, b, c) {
  a.h = za;
  a.O(Error("Unexpected " + Za(b) + (c ? "(" + JSON.stringify(c) + ")" : "") + " in state " + Za(a.j)));
}
p.push = function() {
  this.stack.push({value:this.value, key:this.key, mode:this.mode});
};
p.pop = function() {
  var a = this.value, b = this.stack.pop();
  this.value = b.value;
  this.key = b.key;
  this.mode = b.mode;
  this.emit(a);
  this.mode || (this.j = W);
};
p.emit = function() {
  this.mode && (this.j = S);
};
p.o = function(a, b) {
  if (this.j === W) {
    if (a === T || a === ya || a === va || a === wa || a === xa) {
      this.value && (this.value[this.key] = b), this.emit(b);
    } else if (a === M) {
      this.push(), this.value = this.value ? this.value[this.key] = {} : {}, this.key = void 0, this.j = Va, this.mode = Wa;
    } else if (a === O) {
      this.push(), this.value = this.value ? this.value[this.key] = [] : [], this.key = 0, this.mode = Xa, this.j = W;
    } else if (a === N) {
      if (this.mode === Wa) {
        this.pop();
      } else {
        return Z(this, a, b);
      }
    } else if (a === P) {
      if (this.mode === Xa) {
        this.pop();
      } else {
        return Z(this, a, b);
      }
    } else {
      return Z(this, a, b);
    }
  } else if (this.j === Va) {
    if (a === T) {
      this.key = b, this.j = Q;
    } else if (a === N) {
      this.pop();
    } else {
      return Z(this, a, b);
    }
  } else if (this.j === Q) {
    if (a === Q) {
      this.j = W;
    } else {
      return Z(this, a, b);
    }
  } else if (this.j === S) {
    if (a === S) {
      this.mode === Xa ? (this.key++, this.j = W) : this.mode === Wa && (this.j = Va);
    } else if (a === P && this.mode === Xa || a === N && this.mode === Wa) {
      this.pop();
    } else {
      return Z(this, a, b);
    }
  } else {
    return Z(this, a, b);
  }
};
var ab = require("stream");
function bb() {
  function a() {
    for (; k.length && !h.paused;) {
      var l = k.shift();
      if (null === l) {
        return h.emit("end");
      }
      h.emit("data", l);
    }
  }
  var b = cb, c = db;
  b = b || function(l) {
    this.queue(l);
  };
  c = c || function() {
    this.queue(null);
  };
  var f = !1, e = !1, k = [], n = !1, h = new ab();
  h.readable = h.writable = !0;
  h.paused = !1;
  h.da = !0;
  h.write = function(l) {
    b.call(this, l);
    return !h.paused;
  };
  h.queue = h.push = function(l) {
    if (n) {
      return h;
    }
    null === l && (n = !0);
    k.push(l);
    a();
    return h;
  };
  h.on("end", function() {
    h.readable = !1;
    !h.writable && h.da && process.nextTick(function() {
      h.destroy();
    });
  });
  h.end = function(l) {
    if (!f) {
      return f = !0, arguments.length && h.write(l), h.writable = !1, c.call(h), !h.readable && h.da && h.destroy(), h;
    }
  };
  h.destroy = function() {
    if (!e) {
      return f = e = !0, k.length = 0, h.writable = h.readable = !1, h.emit("close"), h;
    }
  };
  h.pause = function() {
    if (!h.paused) {
      return h.paused = !0, h;
    }
  };
  h.resume = function() {
    h.paused && (h.paused = !1, h.emit("resume"));
    a();
    h.paused || h.emit("drain");
    return h;
  };
  return h;
}
const eb = Buffer.from && Buffer.from !== Uint8Array.from;
module.exports = function(a, b, c, f) {
  const e = new Ya(), k = bb();
  f = f || {};
  k._parser = e;
  e.K = k;
  e.F = e.o;
  e.o = fb;
  e.O = gb;
  e.ba = 0;
  e.ga = [];
  e.v = [];
  e.M = a || null;
  e.fa = b || null;
  e.X = "function" === typeof c ? c : function() {
  };
  e.Y = !!f.quotAlways;
  e.Z = !!f.useSingleQuot;
  e.$ = f.instructionAttrPrefix || ":";
  e.V = "";
  return k;
};
module.exports.DOCUMENT_NODE = 9;
module.exports.DOCUMENT_FRAGMENT_NODE = 11;
module.exports.ELEMENT_NODE = 1;
module.exports.TEXT_NODE = 3;
module.exports.CDATA_SECTION = 4;
module.exports.PROCESSING_INSTRUCTION = 7;
module.exports.COMMENT_NODE = 8;
module.exports.COND_CMT_HIDE_LOWER = 13;
module.exports.COND_CMT_SHOW_LOWER_START = 14;
module.exports.COND_CMT_SHOW_LOWER_END = 15;
module.exports.NETSCAPE4_COND_CMT_HIDE_LOWER = 16;
module.exports.ELEMENT_START_TAG = 17;
module.exports.ELEMENT_END_TAG = 18;
function cb(a) {
  "string" === typeof a && (a = eb ? Buffer.from(a) : new Buffer(a));
  this._parser.write(a);
}
function db(a) {
  a && this.write(a);
  43 !== this._parser.ba && this.emit("error", "Invalid html.json");
  this.queue(null);
  this._parser = this._parser.K = null;
}
function gb(a) {
  -1 < a.message.indexOf("at position") && (a.message = "Invalid JSON (" + a.message + ")");
  this.X(a.message);
  this.K.emit("error", a);
}
function fb(a, b) {
  function c() {
    if (g.M) {
      const u = g.v.length ? g.M.call(g.K, g.C, g.v) : g.M.call(g.K, g.C);
      g.C = null;
      g.v.length = 0;
      return u;
    }
    g.O("onInstruction is void!");
    return "";
  }
  function f() {
    if (g.M) {
      g.v.unshift(g.C);
      const u = oa(g.M.bind(g.K), g.T, g.v, g.X);
      g.C = null;
      g.v.length = 0;
      return u;
    }
    g.O("onInstruction is void!");
    return "";
  }
  function e(u) {
    if (null != u) {
      if (ba[g.T]) {
        if (!1 !== u) {
          return " " + g.T;
        }
      } else {
        return " " + g.T + "=" + K(u, g.Z, g.G || g.Y);
      }
    }
    return "";
  }
  function k(u) {
    const w = l.pop();
    d = l.length ? 42 : 43;
    switch(w) {
      case 13:
        m = "<![endif]--\x3e";
        break;
      case 4:
        m = "]]\x3e";
        break;
      case 16:
      case 8:
        m = "--\x3e";
        break;
      default:
        "" === w ? (m = u ? "" : ">", g.H = "", n()) : F(w) && (m = u ? "" : g.ca || g.G ? " />" : ">", (g.ca || g.G) && !u || da[w] && (!g.J || "P" !== w) ? g.H = ca[w] ? "" : w : (m += "</" + w + ">", g.H = ""), n());
    }
  }
  function n() {
    g.J = g.L = g.G = !1;
    for (let u = 0, w = l.length; u < w; ++u) {
      const A = l[u];
      13 === A || 16 === A ? g.J = !0 : F(A) && (u === w - 1 && (g.J = g.J || ea[A]), ha[A] && (g.L = !0), aa[A] || 0 < A.indexOf(":")) && (g.G = !0);
    }
  }
  function h() {
    let u = "";
    g.H && (u = "</" + g.H + ">", g.H = "");
    return u;
  }
  if (a === Q || a === S) {
    this.stack.length && this.F(a, b);
  } else {
    var l = this.ga, d = this.ba, y = !1, g = this;
    switch(d) {
      case 39:
        switch(a) {
          case O:
          case M:
            this.F(a, b);
            return;
          case P:
            if (0 === this.stack.length) {
              a = c();
              if (C(a)) {
                ia = this.J;
                ja = this.L;
                ka = this.ca || this.G;
                var m = ua(a, this.M, this.fa, this.X, {quotAlways:this.Y, useSingleQuot:this.Z, instructionAttrPrefix:this.$});
                ia = ja = ka = !1;
              } else {
                m = G(a) ? "" + a : "";
              }
              k(!!m);
              break;
            }
          case N:
            1 === this.stack.length && (this.v.push(this.value), this.value = null);
            this.F(a, b);
            return;
          case T:
          case ya:
          case va:
          case wa:
          case xa:
            this.stack.length ? this.F(a, b) : this.v.push(b);
            return;
          default:
            d = -1;
        }break;
      case 36:
        switch(a) {
          case O:
          case M:
            this.F(a, b);
            return;
          case P:
            if (0 === this.stack.length) {
              m = e(f());
              d = 31;
              break;
            }
          case N:
            1 === this.stack.length && (this.v.push(this.value), this.value = null);
            this.F(a, b);
            return;
          case T:
            if (0 === this.stack.length && !this.C) {
              this.C = b;
              return;
            }
          case ya:
          case va:
          case wa:
          case xa:
            this.stack.length ? this.F(a, b) : this.v.push(b);
            return;
          default:
            d = -1;
        }break;
      default:
        switch(a) {
          case O:
            switch(d) {
              case 30:
              case 41:
                y = F(l[l.length - 1]);
              case 0:
              case 42:
                a = 0;
                break;
              case 40:
                a = 36;
                break;
              default:
                a = -1;
            }break;
          case P:
            a = 30 === d || 41 === d ? 38 : 42 === d || 37 === d ? 37 : -1;
            break;
          case M:
            a = 30 === d ? 30 : 33 === d ? 33 : -1;
            break;
          case N:
            a = 31 === d ? 39 : 34 === d ? 40 : -1;
            break;
          case T:
            switch(d) {
              case 38:
              case 27:
                a = 27;
                break;
              case 28:
                a = 28;
                break;
              case 29:
                a = 29;
                break;
              case 19:
                a = 19;
                break;
              case 20:
                a = 20;
                break;
              case 21:
                a = 21;
                break;
              case 22:
                a = 22;
                break;
              case 23:
                a = 23;
                break;
              case 25:
                a = 25;
                break;
              case 24:
                a = 24;
                break;
              case 31:
                a = 31;
                break;
              case 32:
                a = 32;
                break;
              case 33:
                a = 33;
                break;
              case 34:
                a = 34;
                break;
              case 35:
                a = 35;
                break;
              case 30:
              case 41:
                y = F(l[l.length - 1]);
              case 42:
                a = 41;
                break;
              case 26:
                a = 26;
                break;
              case 40:
                a = 42;
                break;
              default:
                a = -1;
            }break;
          case ya:
            switch(d) {
              case 38:
                a = b;
                break;
              case 32:
                a = 32;
                break;
              case 35:
                a = 35;
                break;
              case 20:
                a = 20;
                break;
              case 30:
              case 41:
                y = F(l[l.length - 1]);
              case 42:
                a = 41;
                break;
              case 21:
                a = 21;
                break;
              case 22:
                a = 22;
                break;
              default:
                a = -1;
            }break;
          case va:
          case wa:
          case xa:
            a = 32 === d ? 32 : -1;
            break;
          default:
            a = -1;
        }switch(a) {
          case 0:
            m = y ? (y = !1, ">") : "";
            d = 38;
            break;
          case 9:
            d = 19;
            l.push(9);
            break;
          case 19:
            m = b;
            d = 41;
            break;
          case 11:
            d = 41;
            l.push(11);
            break;
          case 1:
            d = 27;
            break;
          case 17:
            d = 28;
            break;
          case 27:
          case 28:
            b = sa(b);
            y = b[1];
            const u = b[2];
            b = b[0];
            "P" !== this.H || fa[b] ? this.H = m = "" : m = h();
            m += "<" + b;
            y && (m += " id=" + K(y, this.Z, this.G || this.Y));
            u && (m += " class=" + K(u, this.Z, this.G || this.Y));
            this.J || (this.J = !!ea[b]);
            this.L || (this.L = !!ha[b]);
            28 === a ? l.push("") : l.push(b);
            n();
            d = 30;
            break;
          case 30:
            d = 31;
            break;
          case 31:
            0 === b.indexOf(this.$) ? (this.T = b.substr(this.$.length), d = 40) : (this.T = b, d = "style" === b ? 33 : 32);
            break;
          case 36:
            d = 36;
            break;
          case 42:
            this.C = b, b = f();
          case 32:
            m = e(b);
            d = 31;
            break;
          case 39:
            d = 41;
            break;
          case 33:
            d = 34;
            break;
          case 34:
            this.ea = b;
            d = 35;
            break;
          case 35:
            "" !== b && null !== b && (this.V += ";" + ra(this.ea) + ":" + b);
            d = 34;
            break;
          case 40:
            this.V && (m = e(this.V.substr(1)), this.V = "");
            d = 31;
            break;
          case 37:
            k(!0);
            break;
          case 38:
            k(!1);
            break;
          case 18:
            d = 29;
            l.push(18);
            break;
          case 29:
            m = "</" + b + ">";
            d = 37;
            break;
          case 3:
            d = 20;
            l.push(3);
            break;
          case 20:
            m = h() + (g.L ? "" + b : I("" + b));
            d = 37;
            break;
          case 41:
            m = (y ? (y = !1, ">") : "") + h() + (g.L ? "" + b : I("" + b));
            d = 42;
            break;
          case 4:
            m = "<![CDATA[";
            d = 21;
            l.push(4);
            break;
          case 21:
            m = b;
            d = 37;
            break;
          case 8:
            m = "\x3c!--";
            d = 22;
            l.push(8);
            break;
          case 22:
            m = b;
            d = 37;
            break;
          case 13:
            m = h() + "\x3c!--[";
            d = 23;
            l.push(13);
            break;
          case 23:
            m = b + "]>";
            d = 41;
            break;
          case 16:
            m = h() + "\x3c!--{";
            d = 25;
            l.push(16);
            break;
          case 25:
            m = b + "};";
            d = 41;
            break;
          case 14:
            m = "\x3c!--[";
            d = 24;
            l.push(14);
            break;
          case 24:
            m = b + "]>\x3c!--\x3e";
            d = 37;
            break;
          case 15:
            m = "\x3c!--<![endif]--\x3e";
            d = 37;
            l.push(15);
            break;
          case 7:
            d = 26;
            l.push(7);
            break;
          case 26:
            this.C = b;
            d = 39;
            break;
          default:
            d = -1;
        }
    }
    -1 === d ? (this.X("Not html.json format!"), this.K.emit("error", "Not html.json format!")) : (this.ba = d, m && this.K.queue(m));
  }
}
;
