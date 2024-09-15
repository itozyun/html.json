var l, aa = {xml:!0, svg:!0, math:!0}, ba = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, ja:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0}, ca = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, da = {HTML:!0, HEAD:!0, BODY:!0, P:!0, DT:!0, DD:!0, LI:!0, OPTION:!0, TBODY:!0, THEAD:!0, TFOOT:!0, TD:!0, 
TH:!0, TR:!0, RB:!0, RBC:!0, RP:!0, RT:!0, RTC:!0, OPTGROUP:!0, CAPTION:!0, COLGROUP:!0}, ea = {A:!0, AUDIO:!0, DEL:!0, INS:!0, MAP:!0, NOSCRIPT:!0, VIDEO:!0}, fa = {H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, ADDRESS:!0, BLOCKQUOTE:!0, DIV:!0, DL:!0, FIELDSET:!0, FORM:!0, HR:!0, LEGEND:!0, MENU:!0, NOSCRIPT:!0, OL:!0, P:!0, PRE:!0, UL:!0, CENTER:!0, DIR:!0, NOFRAMES:!0, MARQUEE:!0}, ha = {SCRIPT:!0, STYLE:!0, PLAINTEXT:!0, XMP:!0}, ia = !1, ja = !1, ka = !1;
function y(a) {
  return !(!a || a.pop !== [].pop);
}
function la(a) {
  return !(!a || "object" !== typeof a);
}
function A(a) {
  return "" + a === a;
}
function B(a) {
  return A(a) || a === +a;
}
function ma(a) {
  if (B(a)) {
    a = 3;
  } else if (y(a)) {
    if (A(a[0])) {
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
  var m = b[1], q = b.slice(2);
  a = q.length ? a(m, q) : a(m);
  void 0 !== a && null !== a && "" !== a && (B(a) ? c ? c.splice(f, 1, a) : (b.length = 0, b.push(3, b)) : y(a) && (11 === a[0] ? c ? (a.shift(), a.unshift(f, 1), c.splice.apply(c, a)) : (b.length = 0, b.push.apply(b, a)) : y(a[0]) ? c ? (a.unshift(f, 1), c.splice.apply(c, a)) : (b.length = 0, b.push(11), b.push.apply(b, a)) : c ? c.splice(f, 1, a) : (b.length = 0, b.push(11, a))));
  return a;
}
function oa(a, b, c, f) {
  if (y(c) && A(c[0])) {
    var m = c[0];
    c = c.slice(1);
    m = c.length ? a(m, c) : a(m);
  } else {
    A(c) && (m = a(c));
  }
  return y(m) ? oa(a, b, m, f) : m;
}
function C(a) {
  return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
function E(a, b, c) {
  a = C("" + a);
  var f = a.match('"'), m = a.match("'"), q = b ? "'" : '"';
  if (f && m) {
    a = b ? q + a.split("'").join("\\'") + q : q + a.split('"').join('\\"') + q;
  } else if (f) {
    a = "'" + a + "'";
  } else if (m) {
    a = b ? q + a.split("'").join("\\'") + q : q + a + q;
  } else if (c || a.match(/[^0-9a-z\.\-]/g) || 72 < a.length) {
    a = q + a + q;
  }
  return a;
}
function pa(a) {
  var b = [];
  a = a.split("");
  for (var c = a.length, f; c;) {
    f = a[--c], "A" <= f && "Z" >= f && (f = "-" + f.toLowerCase()), b[c] = f;
  }
  return b.join("");
}
function qa(a) {
  var b = a.indexOf("#"), c = a.indexOf("."), f = "", m = "";
  b < c ? (f = a.split(".")[1], a = a.split(".")[0], 0 < b && (m = a.split("#")[1], a = a.split("#")[0])) : c < b && (m = a.split("#")[1], a = a.split("#")[0], 0 < c && (f = a.split(".")[1], a = a.split(".")[0]));
  return [a, m, f];
}
function ra(a, b, c, f) {
  function m(h, u, r, w, p) {
    function v() {
      var va = "";
      d && (va = "</" + d + ">", d = "");
      return va;
    }
    var t = "", wa = h[0], D = h[1], M = 1, x = wa, xa;
    switch(wa) {
      case 9:
        t = "<!DOCTYPE " + D + ">" + q(h, !1, p);
        break;
      case 11:
        t = q(h, w, p);
        break;
      case 3:
        t = v() + (p ? D : C("" + D));
        break;
      case 4:
        t = "<![CDATA[" + D + "]]\x3e";
        break;
      case 8:
        t = "\x3c!--" + D + "--\x3e";
        break;
      case 13:
        t = v() + "\x3c!--[" + D + "]>" + q(h, !0, p) + "<![endif]--\x3e";
        break;
      case 16:
        t = v() + "\x3c!--{" + D + "};" + q(h, !0, p) + "--\x3e";
        break;
      case 14:
        t = "\x3c!--[" + D + "]>\x3c!--\x3e";
        break;
      case 15:
        t = "\x3c!--<![endif]--\x3e";
        break;
      case 7:
        w = na(b, h, u, r);
        if (void 0 !== w && null !== w && "" !== w && (B(w) || y(w))) {
          return -1;
        }
        break;
      case 18:
        t = "</" + D + ">";
        break;
      case 17:
        var ya = !0;
      case 1:
        x = h[1], M = 2;
      default:
        x = qa(x), u = x[1], r = x[2], x = x[0], "P" !== d || fa[x] ? d = "" : t = v(), t += "<" + x, u && (t += " id=" + E(u, e, k || n)), r && (t += " class=" + E(r, e, k || n)), k || (xa = k = k || aa[x] ? !0 : !1), M = h[M], !y(M) && la(M) && (t += " " + G(M)), t = (h = q(h, ea[x], p || ha[k ? x.toUpperCase() : x])) ? t + (">" + h) : ya ? t + ">" : t + (k ? " />" : ">"), ya ? d = "" : k && !h || da[x] && (!w || "P" !== x) ? d = ba[x] ? "" : x : (t += "</" + x + ">", d = ""), xa && (k = !1);
    }
    return t;
  }
  function q(h, u, r) {
    var w = "", p = h[0], v = p === +p ? 2 : 1;
    for (1 === ma(h) || 17 === p ? (p = h[v], v = !y(p) && la(p) ? v + 1 : v) : v = 11 === p ? 1 : 9 === p || 13 === p || 16 === p ? 2 : Infinity; v < h.length; ++v) {
      p = h[v], B(p) ? w += m([3, p], h, v, !1, r) : y(p) && (p = m(p, h, v, u, r), -1 === p ? --v : w += p);
    }
    return w;
  }
  function G(h) {
    var u = "", r, w;
    for (r in h) {
      var p = h[r];
      (w = 0 === r.indexOf(z)) && (r = r.substr(z.length));
      "className" === r && (r = "class");
      w && (p = oa(b, r, p, g));
      if (!(null == p || ca[r] && !1 === p || (u += " " + r, ca[r]))) {
        if ("style" === r && la(p)) {
          var v = void 0, t = "";
          for (v in p) {
            w = p[v], "0px" === w && (w = 0), t += ";" + pa(v) + ":" + C("" + w);
          }
          p = t.substr(1);
          if (!p) {
            continue;
          }
        }
        u += "=" + E(p, e, k || n);
      }
    }
    return u.substr(1);
  }
  var g = "function" === typeof c ? c : function() {
  };
  c = c && "object" === typeof c ? c : f || {};
  var n = !0 === c.quotAlways, e = !0 === c.useSingleQuot, z = c.instructionAttrPrefix || ":", d, k = ka;
  if (y(a)) {
    return 7 === ma(a) && (a = [11, a]), m(a, null, 0, ia || !1, ja || !1);
  }
}
var F = {}, H = F.qa = 1, I = F.za = 2, J = F.ra = 3, K = F.Aa = 4, L = F.ha = 5, N = F.ia = 6, O = F.Ka = 7, P = F.ka = 8, Q = F.sa = 9, R = F.Da = 10, S = F.wa = 11, T = F.Ba = 17, sa = F.Ca = 18, ta = F.La = 33, ua = F.Ma = 34, za = F.Na = 35, Aa = F.la = 49, Ba = F.ma = 50, Ca = F.na = 51, Da = F.oa = 52, Ea = F.ta = 65, Fa = F.ua = 66, Ga = F.va = 67, Ha = F.xa = 81, Ia = F.ya = 83, U = F.Ea = 97, Ja = F.Fa = 98, Ka = F.Ga = 99, La = F.Ha = 100, Ma = F.Ia = 101, Na = F.Ja = 102, V = F.Oa = 113, 
Oa = F.pa = 114, Pa = F.OBJECT = 129, Qa = F.ga = 130;
function Ra() {
  this.h = T;
  this.string = this.value = void 0;
  this.T = Buffer.alloc ? Buffer.alloc(65536) : new Buffer(65536);
  this.o = 0;
  this.mode = this.key = this.F = this.N = void 0;
  this.stack = [];
  this.l = V;
  this.m = this.M = 0;
  this.ba = {2:new Buffer(2), 3:new Buffer(3), 4:new Buffer(4)};
  this.offset = -1;
}
function Sa(a) {
  for (var b = Object.keys(F), c = 0, f = b.length; c < f; c++) {
    var m = b[c];
    if (F[m] === a) {
      return m;
    }
  }
  return a && "0x" + a.toString(16);
}
l = Ra.prototype;
l.$ = function(a) {
  throw a;
};
function W(a, b, c) {
  a.h = sa;
  a.$(Error("Unexpected " + JSON.stringify(String.fromCharCode(b[c])) + " at position " + c + " in state " + Sa(a.h)));
}
function X(a, b) {
  65536 <= a.o && (a.string += a.T.toString("utf8"), a.o = 0);
  a.T[a.o++] = b;
}
function Y(a, b, c, f) {
  var m = b.length;
  "number" === typeof c && (m = "number" === typeof f ? 0 > f ? b.length - c + f : f - c : b.length - c);
  0 > m && (m = 0);
  65536 < a.o + m && (a.string += a.T.toString("utf8", 0, a.o), a.o = 0);
  b.copy(a.T, a.o, c, f);
  a.o += m;
}
l.write = function(a) {
  "string" === typeof a && (a = new Buffer(a));
  for (var b, c = 0, f = a.length; c < f; c++) {
    if (this.h === T) {
      if (b = a[c], this.offset++, 123 === b) {
        this.j(H, "{");
      } else if (125 === b) {
        this.j(I, "}");
      } else if (91 === b) {
        this.j(J, "[");
      } else if (93 === b) {
        this.j(K, "]");
      } else if (58 === b) {
        this.j(L, ":");
      } else if (44 === b) {
        this.j(N, ",");
      } else if (116 === b) {
        this.h = ta;
      } else if (102 === b) {
        this.h = Aa;
      } else if (110 === b) {
        this.h = Ea;
      } else if (34 === b) {
        this.string = "", this.o = 0, this.h = U;
      } else if (45 === b) {
        this.string = "-", this.h = Ha;
      } else if (48 <= b && 64 > b) {
        this.string = String.fromCharCode(b), this.h = Ia;
      } else {
        if (32 !== b && 9 !== b && 10 !== b && 13 !== b) {
          return W(this, a, c);
        }
      }
    } else if (this.h === U) {
      if (b = a[c], 0 < this.M) {
        for (b = 0; b < this.M; b++) {
          this.ba[this.m][this.m - this.M + b] = a[b];
        }
        Y(this, this.ba[this.m]);
        this.m = this.M = 0;
        c = c + b - 1;
      } else if (0 === this.M && 128 <= b) {
        if (193 >= b || 244 < b) {
          return this.$(Error("Invalid UTF-8 character at position " + c + " in state " + Sa(this.h)));
        }
        194 <= b && 223 >= b && (this.m = 2);
        224 <= b && 239 >= b && (this.m = 3);
        240 <= b && 244 >= b && (this.m = 4);
        if (this.m + c > a.length) {
          for (b = 0; b <= a.length - 1 - c; b++) {
            this.ba[this.m][b] = a[c + b];
          }
          this.M = c + this.m - a.length;
          c = a.length - 1;
        } else {
          Y(this, a, c, c + this.m), c = c + this.m - 1;
        }
      } else if (34 === b) {
        this.h = T, this.string += this.T.toString("utf8", 0, this.o), this.o = 0, this.j(R, this.string), this.offset += Buffer.byteLength(this.string, "utf8") + 1, this.string = void 0;
      } else if (92 === b) {
        this.h = Ja;
      } else if (32 <= b) {
        X(this, b);
      } else {
        return W(this, a, c);
      }
    } else if (this.h === Ja) {
      if (b = a[c], 34 === b) {
        X(this, b), this.h = U;
      } else if (92 === b) {
        X(this, 92), this.h = U;
      } else if (47 === b) {
        X(this, 47), this.h = U;
      } else if (98 === b) {
        X(this, 8), this.h = U;
      } else if (102 === b) {
        X(this, 12), this.h = U;
      } else if (110 === b) {
        X(this, 10), this.h = U;
      } else if (114 === b) {
        X(this, 13), this.h = U;
      } else if (116 === b) {
        X(this, 9), this.h = U;
      } else if (117 === b) {
        this.N = "", this.h = Ka;
      } else {
        return W(this, a, c);
      }
    } else if (this.h === Ka || this.h === La || this.h === Ma || this.h === Na) {
      if (b = a[c], 48 <= b && 64 > b || 64 < b && 70 >= b || 96 < b && 102 >= b) {
        this.N += String.fromCharCode(b), this.h++ === Na && (b = parseInt(this.N, 16), this.N = void 0, void 0 !== this.F && 56320 <= b && 57344 > b ? (Y(this, new Buffer(String.fromCharCode(this.F, b))), this.F = void 0) : void 0 === this.F && 55296 <= b && 56320 > b ? this.F = b : (void 0 !== this.F && (Y(this, new Buffer(String.fromCharCode(this.F))), this.F = void 0), Y(this, new Buffer(String.fromCharCode(b)))), this.h = U);
      } else {
        return W(this, a, c);
      }
    } else if (this.h === Ha || this.h === Ia) {
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
          this.h = Ia;
          break;
        default:
          this.h = T;
          b = Number(this.string);
          if (isNaN(b)) {
            return W(this, a, c);
          }
          this.string.match(/[0-9]+/) == this.string && b.toString() != this.string ? this.j(R, this.string) : this.j(S, b);
          this.offset += this.string.length - 1;
          this.string = void 0;
          c--;
      }
    } else if (this.h === ta) {
      if (114 === a[c]) {
        this.h = ua;
      } else {
        return W(this, a, c);
      }
    } else if (this.h === ua) {
      if (117 === a[c]) {
        this.h = za;
      } else {
        return W(this, a, c);
      }
    } else if (this.h === za) {
      if (101 === a[c]) {
        this.h = T, this.j(O, !0), this.offset += 3;
      } else {
        return W(this, a, c);
      }
    } else if (this.h === Aa) {
      if (97 === a[c]) {
        this.h = Ba;
      } else {
        return W(this, a, c);
      }
    } else if (this.h === Ba) {
      if (108 === a[c]) {
        this.h = Ca;
      } else {
        return W(this, a, c);
      }
    } else if (this.h === Ca) {
      if (115 === a[c]) {
        this.h = Da;
      } else {
        return W(this, a, c);
      }
    } else if (this.h === Da) {
      if (101 === a[c]) {
        this.h = T, this.j(P, !1), this.offset += 4;
      } else {
        return W(this, a, c);
      }
    } else if (this.h === Ea) {
      if (117 === a[c]) {
        this.h = Fa;
      } else {
        return W(this, a, c);
      }
    } else if (this.h === Fa) {
      if (108 === a[c]) {
        this.h = Ga;
      } else {
        return W(this, a, c);
      }
    } else if (this.h === Ga) {
      if (108 === a[c]) {
        this.h = T, this.j(Q, null), this.offset += 3;
      } else {
        return W(this, a, c);
      }
    }
  }
};
l.j = function() {
};
function Z(a, b, c) {
  a.h = sa;
  a.$(Error("Unexpected " + Sa(b) + (c ? "(" + JSON.stringify(c) + ")" : "") + " in state " + Sa(a.l)));
}
l.push = function() {
  this.stack.push({value:this.value, key:this.key, mode:this.mode});
};
l.pop = function() {
  var a = this.value, b = this.stack.pop();
  this.value = b.value;
  this.key = b.key;
  this.mode = b.mode;
  this.emit(a);
  this.mode || (this.l = V);
};
l.emit = function() {
  this.mode && (this.l = N);
};
l.j = function(a, b) {
  if (this.l === V) {
    if (a === R || a === S || a === O || a === P || a === Q) {
      this.value && (this.value[this.key] = b), this.emit(b);
    } else if (a === H) {
      this.push(), this.value = this.value ? this.value[this.key] = {} : {}, this.key = void 0, this.l = Oa, this.mode = Pa;
    } else if (a === J) {
      this.push(), this.value = this.value ? this.value[this.key] = [] : [], this.key = 0, this.mode = Qa, this.l = V;
    } else if (a === I) {
      if (this.mode === Pa) {
        this.pop();
      } else {
        return Z(this, a, b);
      }
    } else if (a === K) {
      if (this.mode === Qa) {
        this.pop();
      } else {
        return Z(this, a, b);
      }
    } else {
      return Z(this, a, b);
    }
  } else if (this.l === Oa) {
    if (a === R) {
      this.key = b, this.l = L;
    } else if (a === I) {
      this.pop();
    } else {
      return Z(this, a, b);
    }
  } else if (this.l === L) {
    if (a === L) {
      this.l = V;
    } else {
      return Z(this, a, b);
    }
  } else if (this.l === N) {
    if (a === N) {
      this.mode === Qa ? (this.key++, this.l = V) : this.mode === Pa && (this.l = Oa);
    } else if (a === K && this.mode === Qa || a === I && this.mode === Pa) {
      this.pop();
    } else {
      return Z(this, a, b);
    }
  } else {
    return Z(this, a, b);
  }
};
var Ta = require("stream");
function Ua() {
  function a() {
    for (; q.length && !g.paused;) {
      var n = q.shift();
      if (null === n) {
        return g.emit("end");
      }
      g.emit("data", n);
    }
  }
  var b = Va, c = Wa;
  b = b || function(n) {
    this.queue(n);
  };
  c = c || function() {
    this.queue(null);
  };
  var f = !1, m = !1, q = [], G = !1, g = new Ta();
  g.readable = g.writable = !0;
  g.paused = !1;
  g.da = !0;
  g.write = function(n) {
    b.call(this, n);
    return !g.paused;
  };
  g.queue = g.push = function(n) {
    if (G) {
      return g;
    }
    null === n && (G = !0);
    q.push(n);
    a();
    return g;
  };
  g.on("end", function() {
    g.readable = !1;
    !g.writable && g.da && process.nextTick(function() {
      g.destroy();
    });
  });
  g.end = function(n) {
    if (!f) {
      return f = !0, arguments.length && g.write(n), g.writable = !1, c.call(g), !g.readable && g.da && g.destroy(), g;
    }
  };
  g.destroy = function() {
    if (!m) {
      return f = m = !0, q.length = 0, g.writable = g.readable = !1, g.emit("close"), g;
    }
  };
  g.pause = function() {
    if (!g.paused) {
      return g.paused = !0, g;
    }
  };
  g.resume = function() {
    g.paused && (g.paused = !1, g.emit("resume"));
    a();
    g.paused || g.emit("drain");
    return g;
  };
  return g;
}
const Xa = Buffer.from && Buffer.from !== Uint8Array.from;
module.exports = function(a, b, c) {
  const f = new Ra(), m = Ua();
  c = b && "object" === typeof b ? b : c || {};
  m._parser = f;
  f.G = f.j;
  f.j = Ya;
  f.$ = Za;
  f.ca = 0;
  f.fa = [];
  f.v = [];
  f.W = a;
  f.X = "function" === typeof b ? b : function() {
  };
  f.Y = !!c.quotAlways;
  f.Z = !!c.useSingleQuot;
  f.aa = c.instructionAttrPrefix || ":";
  f.R = "";
  return f.K = m;
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
function Va(a) {
  "string" === typeof a && (a = Xa ? Buffer.from(a) : new Buffer(a));
  this._parser.write(a);
}
function Wa(a) {
  a && this.write(a);
  43 !== this._parser.ca && this.emit("error", "Invalid html.json");
  this.queue(null);
  this._parser = this._parser.K = null;
}
function Za(a) {
  -1 < a.message.indexOf("at position") && (a.message = "Invalid JSON (" + a.message + ")");
  this.X(a.message);
  this.K.emit("error", a);
}
function Ya(a, b) {
  function c() {
    const h = d.v.length ? d.W.call(d.K, d.D, d.v) : d.W.call(d.K, d.D);
    d.D = null;
    d.v.length = 0;
    return h;
  }
  function f() {
    d.v.unshift(d.D);
    const h = oa(d.W.bind(d.K), d.O, d.v, d.X);
    d.D = null;
    d.v.length = 0;
    return h;
  }
  function m(h) {
    if (null != h) {
      if (ca[d.O]) {
        if (!1 !== h) {
          return " " + d.O;
        }
      } else {
        return " " + d.O + "=" + E(h, d.Z, d.C || d.Y);
      }
    }
    return "";
  }
  function q(h) {
    const u = n.pop();
    e = n.length ? 42 : 43;
    switch(u) {
      case 13:
        k = "<![endif]--\x3e";
        break;
      case 4:
        k = "]]\x3e";
        break;
      case 16:
      case 8:
        k = "--\x3e";
        break;
      default:
        "" === u ? (k = h ? "" : ">", d.H = "", G()) : A(u) && (k = h ? "" : d.V || d.C ? " />" : ">", (d.V || d.C) && !h || da[u] && (!d.J || "P" !== u) ? d.H = ba[u] ? "" : u : (k += "</" + u + ">", d.H = ""), G());
    }
  }
  function G() {
    d.J = d.L = d.C = !1;
    for (let h = 0, u = n.length; h < u; ++h) {
      const r = n[h];
      13 === r || 16 === r ? d.J = !0 : A(r) && (h === u - 1 && (d.J = d.J || ea[r]), ha[d.V || d.C ? r.toUpperCase() : r] && (d.L = !0), aa[r] && (d.C = !0));
    }
  }
  function g() {
    let h = "";
    d.H && (h = "</" + d.H + ">", d.H = "");
    return h;
  }
  if (a === L || a === N) {
    this.stack.length && this.G(a, b);
  } else {
    var n = this.fa, e = this.ca, z = !1, d = this;
    switch(e) {
      case 39:
        switch(a) {
          case J:
          case H:
            this.G(a, b);
            return;
          case K:
            if (0 === this.stack.length) {
              a = c();
              if (y(a)) {
                ia = this.J;
                ja = this.L;
                ka = this.V || this.C;
                var k = ra(a, this.W, this.X, {quotAlways:this.Y, useSingleQuot:this.Z, instructionAttrPrefix:this.aa});
                ia = ja = ka = !1;
              } else {
                k = B(a) ? "" + a : "";
              }
              q(!!k);
              break;
            }
          case I:
            1 === this.stack.length && (this.v.push(this.value), this.value = null);
            this.G(a, b);
            return;
          case R:
          case S:
          case O:
          case P:
          case Q:
            this.stack.length ? this.G(a, b) : this.v.push(b);
            return;
          default:
            e = -1;
        }break;
      case 36:
        switch(a) {
          case J:
          case H:
            this.G(a, b);
            return;
          case K:
            if (0 === this.stack.length) {
              k = m(f());
              e = 31;
              break;
            }
          case I:
            1 === this.stack.length && (this.v.push(this.value), this.value = null);
            this.G(a, b);
            return;
          case R:
            if (0 === this.stack.length && !this.D) {
              this.D = b;
              return;
            }
          case S:
          case O:
          case P:
          case Q:
            this.stack.length ? this.G(a, b) : this.v.push(b);
            return;
          default:
            e = -1;
        }break;
      default:
        switch(a) {
          case J:
            switch(e) {
              case 30:
              case 41:
                z = A(n[n.length - 1]);
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
          case K:
            a = 30 === e || 41 === e ? 38 : 42 === e || 37 === e ? 37 : -1;
            break;
          case H:
            a = 30 === e ? 30 : 33 === e ? 33 : -1;
            break;
          case I:
            a = 31 === e ? 39 : 34 === e ? 40 : -1;
            break;
          case R:
            switch(e) {
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
                z = A(n[n.length - 1]);
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
          case S:
            switch(e) {
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
                z = A(n[n.length - 1]);
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
          case O:
          case P:
          case Q:
            a = 32 === e ? 32 : -1;
            break;
          default:
            a = -1;
        }switch(a) {
          case 0:
            k = z ? (z = !1, ">") : "";
            e = 38;
            break;
          case 9:
            e = 19;
            n.push(9);
            break;
          case 19:
            k = "<!DOCTYPE " + b + ">";
            e = 41;
            break;
          case 11:
            e = 41;
            n.push(11);
            break;
          case 1:
            e = 27;
            break;
          case 17:
            e = 28;
            break;
          case 27:
          case 28:
            b = qa(b);
            z = b[1];
            const h = b[2];
            b = b[0];
            "P" !== this.H || fa[b] ? this.H = k = "" : k = g();
            k += "<" + b;
            z && (k += " id=" + E(z, this.Z, this.C || this.Y));
            h && (k += " class=" + E(h, this.Z, this.C || this.Y));
            this.J || (this.J = !!ea[b]);
            this.L || (this.L = !!ha[d.V || d.C ? b.toUpperCase() : b]);
            28 === a ? n.push("") : n.push(b);
            G();
            e = 30;
            break;
          case 30:
            e = 31;
            break;
          case 31:
            0 === b.indexOf(this.aa) ? (this.O = b.substr(this.aa.length), e = 40) : (this.O = b, e = "style" === b ? 33 : 32);
            break;
          case 36:
            e = 36;
            break;
          case 42:
            this.D = b, b = f();
          case 32:
            k = m(b);
            e = 31;
            break;
          case 39:
            e = 41;
            break;
          case 33:
            e = 34;
            break;
          case 34:
            this.ea = b;
            e = 35;
            break;
          case 35:
            "" !== b && null !== b && (this.R += ";" + pa(this.ea) + ":" + b);
            e = 34;
            break;
          case 40:
            this.R && (k = m(this.R.substr(1)), this.R = "");
            e = 31;
            break;
          case 37:
            q(!0);
            break;
          case 38:
            q(!1);
            break;
          case 18:
            e = 29;
            n.push(18);
            break;
          case 29:
            k = "</" + b + ">";
            e = 37;
            break;
          case 3:
            e = 20;
            n.push(3);
            break;
          case 20:
            k = g() + (d.L ? "" + b : C("" + b));
            e = 37;
            break;
          case 41:
            k = (z ? (z = !1, ">") : "") + g() + (d.L ? "" + b : C("" + b));
            e = 42;
            break;
          case 4:
            k = "<![CDATA[";
            e = 21;
            n.push(4);
            break;
          case 21:
            k = b;
            e = 37;
            break;
          case 8:
            k = "\x3c!--";
            e = 22;
            n.push(8);
            break;
          case 22:
            k = b;
            e = 37;
            break;
          case 13:
            k = g() + "\x3c!--[";
            e = 23;
            n.push(13);
            break;
          case 23:
            k = b + "]>";
            e = 41;
            break;
          case 16:
            k = g() + "\x3c!--{";
            e = 25;
            n.push(16);
            break;
          case 25:
            k = b + "};";
            e = 41;
            break;
          case 14:
            k = "\x3c!--[";
            e = 24;
            n.push(14);
            break;
          case 24:
            k = b + "]>\x3c!--\x3e";
            e = 37;
            break;
          case 15:
            k = "\x3c!--<![endif]--\x3e";
            e = 37;
            n.push(15);
            break;
          case 7:
            e = 26;
            n.push(7);
            break;
          case 26:
            this.D = b;
            e = 39;
            break;
          default:
            e = -1;
        }
    }
    -1 === e ? (this.X("Not html.json format!"), this.K.emit("error", "Not html.json format!")) : (this.ca = e, k && this.K.queue(k));
  }
}
;
