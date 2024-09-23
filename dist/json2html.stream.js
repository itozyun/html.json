var p, aa = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, ba = {xml:!0, svg:!0, math:!0}, ca = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, COMMAND:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0, area:!0, base:!0, basefont:!0, br:!0, bgsound:!0, col:!0, command:!0, frame:!0, hr:!0, img:!0, input:!0, 
isindex:!0, keygen:!0, link:!0, meta:!0, param:!0, source:!0, track:!0, embed:!0, wbr:!0}, da = {HTML:!0, HEAD:!0, BODY:!0, P:!0, DT:!0, DD:!0, LI:!0, OPTION:!0, TBODY:!0, THEAD:!0, TFOOT:!0, TD:!0, TH:!0, TR:!0, RB:!0, RBC:!0, RP:!0, RT:!0, RTC:!0, OPTGROUP:!0, CAPTION:!0, COLGROUP:!0}, ea = {A:!0, AUDIO:!0, DEL:!0, INS:!0, MAP:!0, NOSCRIPT:!0, VIDEO:!0}, fa = {H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, ADDRESS:!0, BLOCKQUOTE:!0, DIV:!0, DL:!0, FIELDSET:!0, FORM:!0, HR:!0, LEGEND:!0, MENU:!0, NOSCRIPT:!0, 
OL:!0, P:!0, PRE:!0, UL:!0, CENTER:!0, DIR:!0, NOFRAMES:!0, MARQUEE:!0}, ha = {SCRIPT:!0, STYLE:!0, TEXTAREA:!0, TITLE:!0, PLAINTEXT:!0, XMP:!0, script:!0, style:!0, textarea:!0, title:!0, plaintext:!0, xmp:!0}, ia = !1, ja = !1, ka = !1;
function B(a) {
  return !(!a || a.pop !== [].pop);
}
function la(a) {
  return !(!a || "object" !== typeof a);
}
function E(a) {
  return "" + a === a;
}
function F(a) {
  return E(a) || a === +a;
}
function ma(a) {
  if (F(a)) {
    a = 3;
  } else if (B(a)) {
    if (E(a[0])) {
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
  void 0 !== n && null !== n && "" !== n && (F(n) ? c ? c.splice(f, 1, n) : (b.length = 0, b.push(3, b)) : B(n) && (11 === n[0] ? c ? (n.shift(), n.unshift(f, 1), c.splice.apply(c, n)) : (b.length = 0, b.push.apply(b, n)) : B(n[0]) ? c ? (n.unshift(f, 1), c.splice.apply(c, n)) : (b.length = 0, b.push(11), b.push.apply(b, n)) : c ? c.splice(f, 1, n) : (b.length = 0, b.push(11, n))));
  return n;
}
function oa(a, b, c, f) {
  var e;
  if (B(c) && E(c[0])) {
    var k = c[0];
    c = c.slice(1);
    "function" === typeof a ? e = c.length ? a(k, c) : a(k) : e = c.length ? a[k](c) : a[k]();
  } else {
    E(c) && ("function" === typeof a ? e = a(c) : e = a[c]());
  }
  return B(e) ? oa(a, b, e, f) : e;
}
function pa(a, b, c) {
  a = qa(a);
  var f;
  b && (b.h ? b.h.push(a) : b.h = [a]);
  if (B(c)) {
    var e = 1 === a.m || 17 === a.m;
    b = 0;
    for (f = c.length; b < f; b += 2) {
      var k = c[b], n = c[b + 1];
      if (k === +k) {
        if (k === a.m && !0 === n(a)) {
          break;
        }
      } else if (e && E(k) && k === a.D && !0 === n(a)) {
        break;
      }
    }
  } else {
    c(a);
  }
  return a;
}
function H(a) {
  return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
function J(a, b, c) {
  a = H("" + a);
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
        E(h) && (l = f(1 === n ? 1 : c, h, b[n]));
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
  function k(t, G, q, D, r, v) {
    function x() {
      var Aa = "";
      w && (Aa = "</" + w + ">", w = "");
      return Aa;
    }
    var A = d ? pa(t, q, d) : null;
    q = "";
    var Ba = t[0], I = t[1], Q = 1, z = Ba, Ca;
    switch(Ba) {
      case 9:
        q = "<!DOCTYPE " + I + ">" + n(t, A, !1, v);
        break;
      case 11:
        q = n(t, A, r, v);
        break;
      case 3:
        q = x() + (v ? I : H("" + I));
        break;
      case 4:
        q = "<![CDATA[" + I + "]]\x3e";
        break;
      case 8:
        q = "\x3c!--" + I + "--\x3e";
        break;
      case 13:
        q = x() + "\x3c!--[" + I + "]>" + n(t, A, !0, v) + "<![endif]--\x3e";
        break;
      case 16:
        q = x() + "\x3c!--{" + I + "};" + n(t, A, !0, v) + "--\x3e";
        break;
      case 14:
        q = "\x3c!--[" + I + "]>\x3c!--\x3e";
        break;
      case 15:
        q = "\x3c!--<![endif]--\x3e";
        break;
      case 7:
        if (l) {
          if (r = na(l, t, G, D), void 0 !== r && null !== r && "" !== r && (F(r) || B(r))) {
            return -1;
          }
        } else {
          y("onInstruction is void!");
        }
        break;
      case 18:
        q = "</" + I + ">";
        break;
      case 17:
        var Da = !0;
      case 1:
        z = t[1], Q = 2;
      default:
        z = sa(z), G = z[1], D = z[2], z = z[0], Q = t[Q], "P" !== w || fa[z] ? w = "" : q = x(), q += "<" + z, G && (q += " id=" + J(G, m, C || g)), D && (q += " class=" + J(D, m, C || g)), C || (Ca = C = C || ba[z] ? !0 : !1), !B(Q) && la(Q) && (q += h(Q)), q = (t = n(t, A, ea[z], v || ha[z])) ? q + (">" + t) : Da ? q + ">" : q + (C ? " />" : ">"), Da ? w = "" : C && !t || da[z] && (!r || "P" !== z) ? w = ca[z] ? "" : z : (q += "</" + z + ">", w = ""), Ca && (C = !1);
    }
    return q;
  }
  function n(t, G, q, D) {
    var r = [], v = t[0], x = v === +v ? 2 : 1;
    1 === ma(t) || 17 === v ? (v = t[x], x = !B(v) && la(v) ? x + 1 : x) : x = 11 === v ? 1 : 9 === v || 13 === v || 16 === v ? 2 : Infinity;
    v = -1;
    for (var A; x < t.length; ++x) {
      A = t[x], F(A) ? r[++v] = k([3, A], t, G, x, !1, D) : B(A) && (A = k(A, t, G, x, q, D), -1 === A ? --x : r[++v] = A);
    }
    return r.join("");
  }
  function h(t) {
    var G = "", q, D;
    for (q in t) {
      var r = t[q];
      (D = 0 === q.indexOf(u)) && (q = q.substr(u.length));
      "className" === q && (q = "class");
      D && (l ? r = oa(l, q, r, y) : y("onInstruction is void!"));
      if (!(null == r || aa[q] && !1 === r || (G += " " + q, aa[q]))) {
        if ("style" === q && la(r)) {
          D = void 0;
          var v = r, x = [], A = -1;
          for (D in v) {
            r = v[D], "0px" === r && (r = 0), x[++A] = ra(D) + ":" + H("" + r);
          }
          r = x.join(";").substr(1);
          if (!r) {
            continue;
          }
        }
        G += "=" + J(r, m, C || g);
      }
    }
    return G;
  }
  var l = b || null, d = c || null, y = "function" === typeof f ? f : function() {
  };
  b = e || {};
  var g = !0 === b.quotAlways, m = !0 === b.useSingleQuot, u = b.instructionAttrPrefix || ":", w, C = ka;
  if (B(a)) {
    return 7 === ma(a) && (a = [11, a]), k(a, null, null, 0, ia || !1, ja || !1);
  }
}
var K = {}, L = K.qa = 1, M = K.za = 2, N = K.ra = 3, O = K.Aa = 4, P = K.ia = 5, R = K.ja = 6, S = K.Ka = 7, va = K.ka = 8, wa = K.sa = 9, T = K.Da = 10, xa = K.wa = 11, U = K.Ba = 17, ya = K.Ca = 18, za = K.La = 33, Ea = K.Ma = 34, Fa = K.Na = 35, Ga = K.la = 49, Ha = K.ma = 50, Ia = K.na = 51, Ja = K.oa = 52, Ka = K.ta = 65, La = K.ua = 66, Ma = K.va = 67, Na = K.xa = 81, Oa = K.ya = 83, V = K.Ea = 97, Pa = K.Fa = 98, Qa = K.Ga = 99, Ra = K.Ha = 100, Sa = K.Ia = 101, Ta = K.Ja = 102, W = K.Oa = 
113, Ua = K.pa = 114, Va = K.OBJECT = 129, Wa = K.ha = 130;
function Xa() {
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
function Ya(a) {
  for (var b = Object.keys(K), c = 0, f = b.length; c < f; c++) {
    var e = b[c];
    if (K[e] === a) {
      return e;
    }
  }
  return a && "0x" + a.toString(16);
}
p = Xa.prototype;
p.O = function(a) {
  throw a;
};
function X(a, b, c) {
  a.h = ya;
  a.O(Error("Unexpected " + JSON.stringify(String.fromCharCode(b[c])) + " at position " + c + " in state " + Ya(a.h)));
}
function Y(a, b) {
  65536 <= a.m && (a.string += a.W.toString("utf8"), a.m = 0);
  a.W[a.m++] = b;
}
function Za(a, b, c, f) {
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
        this.o(L, "{");
      } else if (125 === b) {
        this.o(M, "}");
      } else if (91 === b) {
        this.o(N, "[");
      } else if (93 === b) {
        this.o(O, "]");
      } else if (58 === b) {
        this.o(P, ":");
      } else if (44 === b) {
        this.o(R, ",");
      } else if (116 === b) {
        this.h = za;
      } else if (102 === b) {
        this.h = Ga;
      } else if (110 === b) {
        this.h = Ka;
      } else if (34 === b) {
        this.string = "", this.m = 0, this.h = V;
      } else if (45 === b) {
        this.string = "-", this.h = Na;
      } else if (48 <= b && 64 > b) {
        this.string = String.fromCharCode(b), this.h = Oa;
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
        Za(this, this.aa[this.l]);
        this.l = this.N = 0;
        c = c + b - 1;
      } else if (0 === this.N && 128 <= b) {
        if (193 >= b || 244 < b) {
          return this.O(Error("Invalid UTF-8 character at position " + c + " in state " + Ya(this.h)));
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
          Za(this, a, c, c + this.l), c = c + this.l - 1;
        }
      } else if (34 === b) {
        this.h = U, this.string += this.W.toString("utf8", 0, this.m), this.m = 0, this.o(T, this.string), this.offset += Buffer.byteLength(this.string, "utf8") + 1, this.string = void 0;
      } else if (92 === b) {
        this.h = Pa;
      } else if (32 <= b) {
        Y(this, b);
      } else {
        return X(this, a, c);
      }
    } else if (this.h === Pa) {
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
        this.R = "", this.h = Qa;
      } else {
        return X(this, a, c);
      }
    } else if (this.h === Qa || this.h === Ra || this.h === Sa || this.h === Ta) {
      if (b = a[c], 48 <= b && 64 > b || 64 < b && 70 >= b || 96 < b && 102 >= b) {
        this.R += String.fromCharCode(b), this.h++ === Ta && (b = parseInt(this.R, 16), this.R = void 0, void 0 !== this.D && 56320 <= b && 57344 > b ? (Za(this, new Buffer(String.fromCharCode(this.D, b))), this.D = void 0) : void 0 === this.D && 55296 <= b && 56320 > b ? this.D = b : (void 0 !== this.D && (Za(this, new Buffer(String.fromCharCode(this.D))), this.D = void 0), Za(this, new Buffer(String.fromCharCode(b)))), this.h = V);
      } else {
        return X(this, a, c);
      }
    } else if (this.h === Na || this.h === Oa) {
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
          this.h = Oa;
          break;
        default:
          this.h = U;
          b = Number(this.string);
          if (isNaN(b)) {
            return X(this, a, c);
          }
          this.string.match(/[0-9]+/) == this.string && b.toString() != this.string ? this.o(T, this.string) : this.o(xa, b);
          this.offset += this.string.length - 1;
          this.string = void 0;
          c--;
      }
    } else if (this.h === za) {
      if (114 === a[c]) {
        this.h = Ea;
      } else {
        return X(this, a, c);
      }
    } else if (this.h === Ea) {
      if (117 === a[c]) {
        this.h = Fa;
      } else {
        return X(this, a, c);
      }
    } else if (this.h === Fa) {
      if (101 === a[c]) {
        this.h = U, this.o(S, !0), this.offset += 3;
      } else {
        return X(this, a, c);
      }
    } else if (this.h === Ga) {
      if (97 === a[c]) {
        this.h = Ha;
      } else {
        return X(this, a, c);
      }
    } else if (this.h === Ha) {
      if (108 === a[c]) {
        this.h = Ia;
      } else {
        return X(this, a, c);
      }
    } else if (this.h === Ia) {
      if (115 === a[c]) {
        this.h = Ja;
      } else {
        return X(this, a, c);
      }
    } else if (this.h === Ja) {
      if (101 === a[c]) {
        this.h = U, this.o(va, !1), this.offset += 4;
      } else {
        return X(this, a, c);
      }
    } else if (this.h === Ka) {
      if (117 === a[c]) {
        this.h = La;
      } else {
        return X(this, a, c);
      }
    } else if (this.h === La) {
      if (108 === a[c]) {
        this.h = Ma;
      } else {
        return X(this, a, c);
      }
    } else if (this.h === Ma) {
      if (108 === a[c]) {
        this.h = U, this.o(wa, null), this.offset += 3;
      } else {
        return X(this, a, c);
      }
    }
  }
};
p.o = function() {
};
function Z(a, b, c) {
  a.h = ya;
  a.O(Error("Unexpected " + Ya(b) + (c ? "(" + JSON.stringify(c) + ")" : "") + " in state " + Ya(a.j)));
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
  this.mode && (this.j = R);
};
p.o = function(a, b) {
  if (this.j === W) {
    if (a === T || a === xa || a === S || a === va || a === wa) {
      this.value && (this.value[this.key] = b), this.emit(b);
    } else if (a === L) {
      this.push(), this.value = this.value ? this.value[this.key] = {} : {}, this.key = void 0, this.j = Ua, this.mode = Va;
    } else if (a === N) {
      this.push(), this.value = this.value ? this.value[this.key] = [] : [], this.key = 0, this.mode = Wa, this.j = W;
    } else if (a === M) {
      if (this.mode === Va) {
        this.pop();
      } else {
        return Z(this, a, b);
      }
    } else if (a === O) {
      if (this.mode === Wa) {
        this.pop();
      } else {
        return Z(this, a, b);
      }
    } else {
      return Z(this, a, b);
    }
  } else if (this.j === Ua) {
    if (a === T) {
      this.key = b, this.j = P;
    } else if (a === M) {
      this.pop();
    } else {
      return Z(this, a, b);
    }
  } else if (this.j === P) {
    if (a === P) {
      this.j = W;
    } else {
      return Z(this, a, b);
    }
  } else if (this.j === R) {
    if (a === R) {
      this.mode === Wa ? (this.key++, this.j = W) : this.mode === Va && (this.j = Ua);
    } else if (a === O && this.mode === Wa || a === M && this.mode === Va) {
      this.pop();
    } else {
      return Z(this, a, b);
    }
  } else {
    return Z(this, a, b);
  }
};
var $a = require("stream");
function ab() {
  function a() {
    for (; k.length && !h.paused;) {
      var l = k.shift();
      if (null === l) {
        return h.emit("end");
      }
      h.emit("data", l);
    }
  }
  var b = bb, c = cb;
  b = b || function(l) {
    this.queue(l);
  };
  c = c || function() {
    this.queue(null);
  };
  var f = !1, e = !1, k = [], n = !1, h = new $a();
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
const db = Buffer.from && Buffer.from !== Uint8Array.from;
module.exports = function(a, b, c, f) {
  const e = new Xa(), k = ab();
  f = f || {};
  k._parser = e;
  e.K = k;
  e.F = e.o;
  e.o = eb;
  e.O = fb;
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
function bb(a) {
  "string" === typeof a && (a = db ? Buffer.from(a) : new Buffer(a));
  this._parser.write(a);
}
function cb(a) {
  a && this.write(a);
  43 !== this._parser.ba && this.emit("error", "Invalid html.json");
  this.queue(null);
  this._parser = this._parser.K = null;
}
function fb(a) {
  -1 < a.message.indexOf("at position") && (a.message = "Invalid JSON (" + a.message + ")");
  this.X(a.message);
  this.K.emit("error", a);
}
function eb(a, b) {
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
      if (aa[g.T]) {
        if (!1 !== u) {
          return " " + g.T;
        }
      } else {
        return " " + g.T + "=" + J(u, g.Z, g.G || g.Y);
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
        "" === w ? (m = u ? "" : ">", g.H = "", n()) : E(w) && (m = u ? "" : g.ca || g.G ? " />" : ">", (g.ca || g.G) && !u || da[w] && (!g.J || "P" !== w) ? g.H = ca[w] ? "" : w : (m += "</" + w + ">", g.H = ""), n());
    }
  }
  function n() {
    g.J = g.L = g.G = !1;
    for (let u = 0, w = l.length; u < w; ++u) {
      const C = l[u];
      13 === C || 16 === C ? g.J = !0 : E(C) && (u === w - 1 && (g.J = g.J || ea[C]), ha[C] && (g.L = !0), ba[C] && (g.G = !0));
    }
  }
  function h() {
    let u = "";
    g.H && (u = "</" + g.H + ">", g.H = "");
    return u;
  }
  if (a === P || a === R) {
    this.stack.length && this.F(a, b);
  } else {
    var l = this.ga, d = this.ba, y = !1, g = this;
    switch(d) {
      case 39:
        switch(a) {
          case N:
          case L:
            this.F(a, b);
            return;
          case O:
            if (0 === this.stack.length) {
              a = c();
              if (B(a)) {
                ia = this.J;
                ja = this.L;
                ka = this.ca || this.G;
                var m = ua(a, this.M, this.fa, this.X, {quotAlways:this.Y, useSingleQuot:this.Z, instructionAttrPrefix:this.$});
                ia = ja = ka = !1;
              } else {
                m = F(a) ? "" + a : "";
              }
              k(!!m);
              break;
            }
          case M:
            1 === this.stack.length && (this.v.push(this.value), this.value = null);
            this.F(a, b);
            return;
          case T:
          case xa:
          case S:
          case va:
          case wa:
            this.stack.length ? this.F(a, b) : this.v.push(b);
            return;
          default:
            d = -1;
        }break;
      case 36:
        switch(a) {
          case N:
          case L:
            this.F(a, b);
            return;
          case O:
            if (0 === this.stack.length) {
              m = e(f());
              d = 31;
              break;
            }
          case M:
            1 === this.stack.length && (this.v.push(this.value), this.value = null);
            this.F(a, b);
            return;
          case T:
            if (0 === this.stack.length && !this.C) {
              this.C = b;
              return;
            }
          case xa:
          case S:
          case va:
          case wa:
            this.stack.length ? this.F(a, b) : this.v.push(b);
            return;
          default:
            d = -1;
        }break;
      default:
        switch(a) {
          case N:
            switch(d) {
              case 30:
              case 41:
                y = E(l[l.length - 1]);
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
          case O:
            a = 30 === d || 41 === d ? 38 : 42 === d || 37 === d ? 37 : -1;
            break;
          case L:
            a = 30 === d ? 30 : 33 === d ? 33 : -1;
            break;
          case M:
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
                y = E(l[l.length - 1]);
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
          case xa:
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
                y = E(l[l.length - 1]);
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
          case S:
          case va:
          case wa:
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
            m = "<!DOCTYPE " + b + ">";
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
            y && (m += " id=" + J(y, this.Z, this.G || this.Y));
            u && (m += " class=" + J(u, this.Z, this.G || this.Y));
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
            m = h() + (g.L ? "" + b : H("" + b));
            d = 37;
            break;
          case 41:
            m = (y ? (y = !1, ">") : "") + h() + (g.L ? "" + b : H("" + b));
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
