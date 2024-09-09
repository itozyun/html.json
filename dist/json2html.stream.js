var k = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, aa = {link:!0, meta:!0, br:!0, hr:!0, img:!0, input:!0, area:!0, base:!0, col:!0, embed:!0, keygen:!0, param:!0, track:!0, wbr:!0, command:!0, basefont:!0, frame:!0, isindex:!0, bgsound:!0}, ba = {html:!0, head:!0, body:!0, p:!0, dt:!0, dd:!0, li:!0, option:!0, tbody:!0, thead:!0, tfoot:!0, td:!0, th:!0, tr:!0, rb:!0, rbc:!0, rp:!0, rt:!0, 
rtc:!0, optgroup:!0, caption:!0, colgroup:!0}, ca = {a:!0, audio:!0, del:!0, ins:!0, map:!0, noscript:!0, video:!0}, da = {Ja:"http://www.w3.org/1999/xhtml", svg:"http://www.w3.org/2000/svg", math:"http://www.w3.org/1998/Math/MathML"}, ea = {address:!0, article:!0, aside:!0, blockquote:!0, canvas:!0, details:!0, div:!0, dl:!0, fieldset:!0, figcaption:!0, figure:!0, footer:!0, form:!0, h1:!0, h2:!0, h3:!0, h4:!0, h5:!0, h6:!0, header:!0, hgroup:!0, hr:!0, legend:!0, main:!0, menu:!0, nav:!0, noscript:!0, 
ol:!0, p:!0, pre:!0, section:!0, ul:!0, center:!0, dir:!0, noframes:!0, marquee:!0}, fa = {script:!0, style:!0, plaintext:!0, xmp:!0}, ha = !1, ia = !1, ja = !1;
function z(a) {
  return !(!a || a.pop !== [].pop);
}
function ka(a) {
  return !(!a || "object" !== typeof a);
}
function A(a) {
  return "" + a === a;
}
function B(a) {
  return A(a) || a === +a;
}
function la(a) {
  if (B(a)) {
    a = 3;
  } else if (z(a)) {
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
function ma(a, b, c, e) {
  var p = b[1], q = b.slice(2);
  a = q.length ? a(p, q) : a(p);
  void 0 !== a && null !== a && "" !== a && (B(a) ? c ? c.splice(e, 1, a) : (b.length = 0, b.push(3, b)) : z(a) && (11 === a[0] ? c ? (a.shift(), a.unshift(e, 1), c.splice.apply(c, a)) : (b.length = 0, b.push.apply(b, a)) : z(a[0]) ? c ? (a.unshift(e, 1), c.splice.apply(c, a)) : (b.length = 0, b.push(11), b.push.apply(b, a)) : c ? c.splice(e, 1, a) : (b.length = 0, b.push(11, a))));
  return a;
}
function na(a, b, c, e) {
  if (z(c) && A(c[0])) {
    var p = c[0];
    c = c.slice(1);
    p = c.length ? a(p, c) : a(p);
  } else {
    A(c) && (p = a(c));
  }
  return z(p) ? na(a, b, p, e) : p;
}
function C(a) {
  return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
function F(a, b, c) {
  a = C("" + a);
  var e = a.match('"'), p = a.match("'"), q = b ? "'" : '"';
  if (e && p) {
    a = b ? q + a.split("'").join("\\'") + q : q + a.split('"').join('\\"') + q;
  } else if (e) {
    a = "'" + a + "'";
  } else if (p) {
    a = b ? q + a.split("'").join("\\'") + q : q + a + q;
  } else if (c || a.match(/[^0-9a-z\.\-]/g) || 72 < a.length) {
    a = q + a + q;
  }
  return a;
}
function oa(a) {
  var b = [];
  a = a.split("");
  for (var c = a.length, e; c;) {
    e = a[--c], "A" <= e && "Z" >= e && (e = "-" + e.toLowerCase()), b[c] = e;
  }
  return b.join("");
}
function pa(a) {
  var b = a.indexOf("#"), c = a.indexOf(".");
  if (b < c) {
    var e = a.split(".")[1];
    a = a.split(".")[0];
    if (0 < b) {
      var p = a.split("#")[1];
      a = a.split("#")[0];
    }
  } else {
    c < b && (p = a.split("#")[1], a = a.split("#")[0], 0 < c && (e = a.split(".")[1], a = a.split(".")[0]));
  }
  return [a, p, e];
}
function qa(a, b, c, e) {
  function p(h, u, r, v, n) {
    function w() {
      var ra = "";
      f && (ra = "</" + f + ">", f = "");
      return ra;
    }
    var t = "", sa = h[0], D = h[1], J = 1, x = sa, ta;
    switch(sa) {
      case 9:
        t = "<!DOCTYPE " + D + ">" + q(h, v, n);
        break;
      case 11:
        t = q(h, v, n);
        break;
      case 3:
        t = w() + (n ? D : C("" + D));
        break;
      case 4:
        t = "<![CDATA[" + D + "]]\x3e";
        break;
      case 8:
        t = "\x3c!--" + D + "--\x3e";
        break;
      case 13:
        t = w() + "\x3c!--[" + D + "]>" + q(h, !0, n) + "<![endif]--\x3e";
        break;
      case 16:
        t = w() + "\x3c!--{" + D + "};" + q(h, !0, n) + "--\x3e";
        break;
      case 14:
        t = "\x3c!--[" + D + "]>\x3c!--\x3e";
        break;
      case 15:
        t = "\x3c!--<![endif]--\x3e";
        break;
      case 7:
        v = ma(b, h, u, r);
        if (void 0 !== v && null !== v && "" !== v && (B(v) || z(v))) {
          return -1;
        }
        break;
      case 18:
        t = "</" + D + ">";
        break;
      case 17:
        var ua = !0;
      case 1:
        x = h[1], J = 2;
      default:
        x = pa(x), u = x[1], r = x[2], x = x[0], "p" !== f || ea[x] ? f = "" : t = w(), t += "<" + x, u && (t += " id=" + F(u, d, m)), r && (t += " class=" + F(r, d, m)), l || (ta = l = l || da[x] ? !0 : !1), J = h[J], !z(J) && ka(J) && (t += " " + E(J)), t = (h = q(h, v || ca[x], n || fa[x])) ? t + (">" + h) : ua ? t + ">" : t + (l ? "/>" : ">"), ua ? f = "" : l && !h || ba[x] && !v ? f = aa[x] ? "" : x : (t += "</" + x + ">", f = ""), ta && (l = !1);
    }
    return t;
  }
  function q(h, u, r) {
    var v = "", n = h[0], w = n === +n ? 2 : 1;
    for (1 === la(h) || 17 === n ? (n = h[w], w = !z(n) && ka(n) ? w + 1 : w) : w = 11 === n ? 1 : 9 === n || 13 === n || 16 === n ? 2 : Infinity; w < h.length; ++w) {
      n = h[w], B(n) ? v += p([3, n], null, 0, u, r) : z(n) && (n = p(n, h, w, u, r), -1 === n ? --w : v += n);
    }
    return v;
  }
  function E(h) {
    var u = "", r, v;
    for (r in h) {
      var n = h[r];
      (v = 0 === r.indexOf(y)) && (r = r.substr(y.length));
      "className" === r && (r = "class");
      v && (n = na(b, r, n, g));
      if (!(null == n || k[r] && !1 === n || (u += " " + r, k[r]))) {
        if ("style" === r && ka(n)) {
          var w = void 0, t = "";
          for (w in n) {
            v = n[w], "0px" === v && (v = 0), t += ";" + oa(w) + ":" + C("" + v);
          }
          n = t.substr(1);
          if (!n) {
            continue;
          }
        }
        u += "=" + F(n, d, m);
      }
    }
    return u.substr(1);
  }
  var g = "function" === typeof c ? c : function() {
  };
  c = c && "object" === typeof c ? c : e || {};
  var m = !!c.quotAlways, d = !!c.useSingleQuot, y = c.instructionAttrPrefix || ":", f, l = ja;
  if (z(a)) {
    return 7 === la(a) && (a = [11, a]), p(a, null, 0, ha || !1, ia || !1);
  }
}
var G = {}, H = G.ia = 1, I = G.sa = 2, K = G.ja = 3, L = G.ta = 4, M = G.aa = 5, N = G.ba = 6, O = G.Da = 7, P = G.ca = 8, Q = G.ka = 9, R = G.wa = 10, S = G.oa = 11, T = G.ua = 17, va = G.va = 18, wa = G.Ea = 33, xa = G.Fa = 34, ya = G.Ga = 35, za = G.da = 49, Aa = G.ea = 50, Ba = G.fa = 51, Ca = G.ga = 52, Da = G.la = 65, Ea = G.ma = 66, Fa = G.na = 67, Ga = G.pa = 81, Ha = G.qa = 83, U = G.xa = 97, Ia = G.ya = 98, Ja = G.za = 99, Ka = G.Aa = 100, La = G.Ba = 101, Ma = G.Ca = 102, V = G.Ha = 113, 
Na = G.ha = 114, W = G.ra = 129, X = G.$ = 130;
function Oa() {
  this.c = T;
  this.string = this.value = void 0;
  this.L = Buffer.alloc ? Buffer.alloc(65536) : new Buffer(65536);
  this.l = 0;
  this.mode = this.m = this.v = this.unicode = void 0;
  this.stack = [];
  this.h = V;
  this.j = this.H = 0;
  this.V = {2:new Buffer(2), 3:new Buffer(3), 4:new Buffer(4)};
  this.offset = -1;
}
function Y(a) {
  for (var b = Object.keys(G), c = 0, e = b.length; c < e; c++) {
    var p = b[c];
    if (G[p] === a) {
      return p;
    }
  }
  return a && "0x" + a.toString(16);
}
var Z = Oa.prototype;
Z.S = function(a) {
  throw a;
};
Z.e = function(a, b) {
  this.c = va;
  this.S(Error("Unexpected " + JSON.stringify(String.fromCharCode(a[b])) + " at position " + b + " in state " + Y(this.c)));
};
Z.o = function(a) {
  65536 <= this.l && (this.string += this.L.toString("utf8"), this.l = 0);
  this.L[this.l++] = a;
};
Z.K = function(a, b, c) {
  var e = a.length;
  "number" === typeof b && (e = "number" === typeof c ? 0 > c ? a.length - b + c : c - b : a.length - b);
  0 > e && (e = 0);
  65536 < this.l + e && (this.string += this.L.toString("utf8", 0, this.l), this.l = 0);
  a.copy(this.L, this.l, b, c);
  this.l += e;
};
Z.write = function(a) {
  "string" === typeof a && (a = new Buffer(a));
  for (var b, c = 0, e = a.length; c < e; c++) {
    if (this.c === T) {
      if (b = a[c], this.offset++, 123 === b) {
        this.f(H, "{");
      } else if (125 === b) {
        this.f(I, "}");
      } else if (91 === b) {
        this.f(K, "[");
      } else if (93 === b) {
        this.f(L, "]");
      } else if (58 === b) {
        this.f(M, ":");
      } else if (44 === b) {
        this.f(N, ",");
      } else if (116 === b) {
        this.c = wa;
      } else if (102 === b) {
        this.c = za;
      } else if (110 === b) {
        this.c = Da;
      } else if (34 === b) {
        this.string = "", this.l = 0, this.c = U;
      } else if (45 === b) {
        this.string = "-", this.c = Ga;
      } else if (48 <= b && 64 > b) {
        this.string = String.fromCharCode(b), this.c = Ha;
      } else {
        if (32 !== b && 9 !== b && 10 !== b && 13 !== b) {
          return this.e(a, c);
        }
      }
    } else if (this.c === U) {
      if (b = a[c], 0 < this.H) {
        for (b = 0; b < this.H; b++) {
          this.V[this.j][this.j - this.H + b] = a[b];
        }
        this.K(this.V[this.j]);
        this.j = this.H = 0;
        c = c + b - 1;
      } else if (0 === this.H && 128 <= b) {
        if (193 >= b || 244 < b) {
          return this.S(Error("Invalid UTF-8 character at position " + c + " in state " + Y(this.c)));
        }
        194 <= b && 223 >= b && (this.j = 2);
        224 <= b && 239 >= b && (this.j = 3);
        240 <= b && 244 >= b && (this.j = 4);
        if (this.j + c > a.length) {
          for (b = 0; b <= a.length - 1 - c; b++) {
            this.V[this.j][b] = a[c + b];
          }
          this.H = c + this.j - a.length;
          c = a.length - 1;
        } else {
          this.K(a, c, c + this.j), c = c + this.j - 1;
        }
      } else if (34 === b) {
        this.c = T, this.string += this.L.toString("utf8", 0, this.l), this.l = 0, this.f(R, this.string), this.offset += Buffer.byteLength(this.string, "utf8") + 1, this.string = void 0;
      } else if (92 === b) {
        this.c = Ia;
      } else if (32 <= b) {
        this.o(b);
      } else {
        return this.e(a, c);
      }
    } else if (this.c === Ia) {
      if (b = a[c], 34 === b) {
        this.o(b), this.c = U;
      } else if (92 === b) {
        this.o(92), this.c = U;
      } else if (47 === b) {
        this.o(47), this.c = U;
      } else if (98 === b) {
        this.o(8), this.c = U;
      } else if (102 === b) {
        this.o(12), this.c = U;
      } else if (110 === b) {
        this.o(10), this.c = U;
      } else if (114 === b) {
        this.o(13), this.c = U;
      } else if (116 === b) {
        this.o(9), this.c = U;
      } else if (117 === b) {
        this.unicode = "", this.c = Ja;
      } else {
        return this.e(a, c);
      }
    } else if (this.c === Ja || this.c === Ka || this.c === La || this.c === Ma) {
      if (b = a[c], 48 <= b && 64 > b || 64 < b && 70 >= b || 96 < b && 102 >= b) {
        this.unicode += String.fromCharCode(b), this.c++ === Ma && (b = parseInt(this.unicode, 16), this.unicode = void 0, void 0 !== this.v && 56320 <= b && 57344 > b ? (this.K(new Buffer(String.fromCharCode(this.v, b))), this.v = void 0) : void 0 === this.v && 55296 <= b && 56320 > b ? this.v = b : (void 0 !== this.v && (this.K(new Buffer(String.fromCharCode(this.v))), this.v = void 0), this.K(new Buffer(String.fromCharCode(b)))), this.c = U);
      } else {
        return this.e(a, c);
      }
    } else if (this.c === Ga || this.c === Ha) {
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
          this.c = Ha;
          break;
        default:
          this.c = T;
          b = Number(this.string);
          if (isNaN(b)) {
            return this.e(a, c);
          }
          this.string.match(/[0-9]+/) == this.string && b.toString() != this.string ? this.f(R, this.string) : this.f(S, b);
          this.offset += this.string.length - 1;
          this.string = void 0;
          c--;
      }
    } else if (this.c === wa) {
      if (114 === a[c]) {
        this.c = xa;
      } else {
        return this.e(a, c);
      }
    } else if (this.c === xa) {
      if (117 === a[c]) {
        this.c = ya;
      } else {
        return this.e(a, c);
      }
    } else if (this.c === ya) {
      if (101 === a[c]) {
        this.c = T, this.f(O, !0), this.offset += 3;
      } else {
        return this.e(a, c);
      }
    } else if (this.c === za) {
      if (97 === a[c]) {
        this.c = Aa;
      } else {
        return this.e(a, c);
      }
    } else if (this.c === Aa) {
      if (108 === a[c]) {
        this.c = Ba;
      } else {
        return this.e(a, c);
      }
    } else if (this.c === Ba) {
      if (115 === a[c]) {
        this.c = Ca;
      } else {
        return this.e(a, c);
      }
    } else if (this.c === Ca) {
      if (101 === a[c]) {
        this.c = T, this.f(P, !1), this.offset += 4;
      } else {
        return this.e(a, c);
      }
    } else if (this.c === Da) {
      if (117 === a[c]) {
        this.c = Ea;
      } else {
        return this.e(a, c);
      }
    } else if (this.c === Ea) {
      if (108 === a[c]) {
        this.c = Fa;
      } else {
        return this.e(a, c);
      }
    } else if (this.c === Fa) {
      if (108 === a[c]) {
        this.c = T, this.f(Q, null), this.offset += 3;
      } else {
        return this.e(a, c);
      }
    }
  }
};
Z.f = function() {
};
Z.C = function(a, b) {
  this.c = va;
  this.S(Error("Unexpected " + Y(a) + (b ? "(" + JSON.stringify(b) + ")" : "") + " in state " + Y(this.h)));
};
Z.push = function() {
  this.stack.push({value:this.value, m:this.m, mode:this.mode});
};
Z.pop = function() {
  var a = this.value, b = this.stack.pop();
  this.value = b.value;
  this.m = b.m;
  this.mode = b.mode;
  this.emit(a);
  this.mode || (this.h = V);
};
Z.emit = function() {
  this.mode && (this.h = N);
};
Z.Ia = function() {
};
Z.f = function(a, b) {
  if (this.h === V) {
    if (a === R || a === S || a === O || a === P || a === Q) {
      this.value && (this.value[this.m] = b), this.emit(b);
    } else if (a === H) {
      this.push(), this.value = this.value ? this.value[this.m] = {} : {}, this.m = void 0, this.h = Na, this.mode = W;
    } else if (a === K) {
      this.push(), this.value = this.value ? this.value[this.m] = [] : [], this.m = 0, this.mode = X, this.h = V;
    } else if (a === I) {
      if (this.mode === W) {
        this.pop();
      } else {
        return this.C(a, b);
      }
    } else if (a === L) {
      if (this.mode === X) {
        this.pop();
      } else {
        return this.C(a, b);
      }
    } else {
      return this.C(a, b);
    }
  } else if (this.h === Na) {
    if (a === R) {
      this.m = b, this.h = M;
    } else if (a === I) {
      this.pop();
    } else {
      return this.C(a, b);
    }
  } else if (this.h === M) {
    if (a === M) {
      this.h = V;
    } else {
      return this.C(a, b);
    }
  } else if (this.h === N) {
    if (a === N) {
      this.mode === X ? (this.m++, this.h = V) : this.mode === W && (this.h = Na);
    } else if (a === L && this.mode === X || a === I && this.mode === W) {
      this.pop();
    } else {
      return this.C(a, b);
    }
  } else {
    return this.C(a, b);
  }
};
var Pa = require("stream");
function Qa() {
  function a() {
    for (; q.length && !g.D;) {
      var m = q.shift();
      if (null === m) {
        return g.emit("end");
      }
      g.emit("data", m);
    }
  }
  var b = Ra, c = Sa;
  b = b || function(m) {
    this.queue(m);
  };
  c = c || function() {
    this.queue(null);
  };
  var e = !1, p = !1, q = [], E = !1, g = new Pa();
  g.readable = g.writable = !0;
  g.D = !1;
  g.X = !0;
  g.write = function(m) {
    b.call(this, m);
    return !g.D;
  };
  g.queue = g.push = function(m) {
    if (E) {
      return g;
    }
    null === m && (E = !0);
    q.push(m);
    a();
    return g;
  };
  g.on("end", function() {
    g.readable = !1;
    !g.writable && g.X && process.nextTick(function() {
      g.destroy();
    });
  });
  g.end = function(m) {
    if (!e) {
      return e = !0, arguments.length && g.write(m), g.writable = !1, c.call(g), !g.readable && g.X && g.destroy(), g;
    }
  };
  g.destroy = function() {
    if (!p) {
      return e = p = !0, q.length = 0, g.writable = g.readable = !1, g.emit("close"), g;
    }
  };
  g.pause = function() {
    if (!g.D) {
      return g.D = !0, g;
    }
  };
  g.resume = function() {
    g.D && (g.D = !1, g.emit("resume"));
    a();
    g.D || g.emit("drain");
    return g;
  };
  return g;
}
const Ta = Buffer.from && Buffer.from !== Uint8Array.from;
module.exports = function(a, b, c) {
  const e = new Oa(), p = Qa();
  c = b && "object" === typeof b ? b : c || {};
  p.R = e;
  e.w = e.f;
  e.f = Ua;
  e.S = Va;
  e.U = 0;
  e.Z = [];
  e.n = [];
  e.N = a;
  e.O = "function" === typeof b ? b : function() {
  };
  e.P = !!c.quotAlways;
  e.Q = !!c.useSingleQuot;
  e.T = c.instructionAttrPrefix || ":";
  e.J = "";
  return e.B = p;
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
function Ra(a) {
  "string" === typeof a && (a = Ta ? Buffer.from(a) : new Buffer(a));
  this.R.write(a);
}
function Sa(a) {
  a && this.write(a);
  43 !== this.R.U && this.emit("error", "Invalid html.json");
  this.queue(null);
  this.R = this.R.B = null;
}
function Va(a) {
  -1 < a.message.indexOf("at position") && (a.message = "Invalid JSON (" + a.message + ")");
  this.O(a.message);
  this.B.emit("error", a);
}
function Ua(a, b) {
  function c() {
    const h = f.n.length ? f.N.call(f.B, f.t, f.n) : f.N.call(f.B, f.t);
    f.t = null;
    f.n.length = 0;
    return h;
  }
  function e() {
    f.n.unshift(f.t);
    const h = na(f.N.bind(f.B), f.I, f.n, f.O);
    f.t = null;
    f.n.length = 0;
    return h;
  }
  function p(h) {
    if (null != h) {
      if (k[f.I]) {
        if (!1 !== h) {
          return " " + f.I;
        }
      } else {
        return " " + f.I + "=" + F(h, f.Q, f.P);
      }
    }
    return "";
  }
  function q(h) {
    const u = m.pop();
    d = m.length ? 42 : 43;
    switch(u) {
      case 13:
        l = "<![endif]--\x3e";
        break;
      case 4:
        l = "]]\x3e";
        break;
      case 16:
      case 8:
        l = "--\x3e";
        break;
      default:
        "" === u ? (l = h ? "" : ">", f.A = "", E()) : A(u) && (l = h ? "" : f.W || f.M ? " />" : ">", (f.W || f.M) && !h || ba[u] && !f.F ? f.A = aa[u] ? "" : u : (l += "</" + u + ">", f.A = ""), E());
    }
  }
  function E() {
    f.F = f.G = f.M = !1;
    for (let h = 0, u = m.length; h < u; ++h) {
      const r = m[h];
      13 === r || 16 === r ? f.F = !0 : A(r) && (ca[r] && (f.F = !0), fa[r] && (f.G = !0), da[r] && (f.M = !0));
    }
  }
  function g() {
    let h = "";
    f.A && (h = "</" + f.A + ">", f.A = "");
    return h;
  }
  if (a === M || a === N) {
    this.stack.length && this.w(a, b);
  } else {
    var m = this.Z, d = this.U, y = !1, f = this;
    switch(d) {
      case 39:
        switch(a) {
          case K:
          case H:
            this.w(a, b);
            return;
          case L:
            if (0 === this.stack.length) {
              a = c();
              if (z(a)) {
                ha = this.F;
                ia = this.G;
                ja = this.W || this.M;
                var l = qa(a, this.N, this.O, {quotAlways:this.P, useSingleQuot:this.Q, instructionAttrPrefix:this.T});
                ha = ia = ja = !1;
              } else {
                l = B(a) ? "" + a : "";
              }
              q(!!l);
              break;
            }
          case I:
            1 === this.stack.length && (this.n.push(this.value), this.value = null);
            this.w(a, b);
            return;
          case R:
          case S:
          case O:
          case P:
          case Q:
            this.stack.length ? this.w(a, b) : this.n.push(b);
            return;
          default:
            d = -1;
        }break;
      case 36:
        switch(a) {
          case K:
          case H:
            this.w(a, b);
            return;
          case L:
            if (0 === this.stack.length) {
              l = p(e());
              d = 31;
              break;
            }
          case I:
            1 === this.stack.length && (this.n.push(this.value), this.value = null);
            this.w(a, b);
            return;
          case R:
            if (0 === this.stack.length && !this.t) {
              this.t = b;
              return;
            }
          case S:
          case O:
          case P:
          case Q:
            this.stack.length ? this.w(a, b) : this.n.push(b);
            return;
          default:
            d = -1;
        }break;
      default:
        switch(a) {
          case K:
            switch(d) {
              case 30:
              case 41:
                y = A(m[m.length - 1]);
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
          case L:
            a = 30 === d || 41 === d ? 38 : 42 === d || 37 === d ? 37 : -1;
            break;
          case H:
            a = 30 === d ? 30 : 33 === d ? 33 : -1;
            break;
          case I:
            a = 31 === d ? 39 : 34 === d ? 40 : -1;
            break;
          case R:
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
                y = A(m[m.length - 1]);
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
                y = A(m[m.length - 1]);
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
            a = 32 === d ? 32 : -1;
            break;
          default:
            a = -1;
        }switch(a) {
          case 0:
            l = y ? (y = !1, ">") : "";
            d = 38;
            break;
          case 9:
            d = 19;
            m.push(9);
            break;
          case 19:
            l = "<!DOCTYPE " + b + ">";
            d = 41;
            break;
          case 11:
            d = 41;
            m.push(11);
            break;
          case 1:
            d = 27;
            break;
          case 17:
            d = 28;
            break;
          case 27:
          case 28:
            b = pa(b);
            y = b[1];
            const h = b[2];
            b = b[0];
            "p" !== this.A || ea[b] ? this.A = l = "" : l = g();
            l += "<" + b;
            y && (l += " id=" + F(y, this.Q, this.P));
            h && (l += " class=" + F(h, this.Q, this.P));
            this.F || (this.F = !!ca[b]);
            this.G || (this.G = !!fa[b]);
            28 === a ? m.push("") : m.push(b);
            E();
            d = 30;
            break;
          case 30:
            d = 31;
            break;
          case 31:
            0 === b.indexOf(this.T) ? (this.I = b.substr(this.T.length), d = 40) : (this.I = b, d = "style" === b ? 33 : 32);
            break;
          case 36:
            d = 36;
            break;
          case 42:
            this.t = b, b = e();
          case 32:
            l = p(b);
            d = 31;
            break;
          case 39:
            d = 41;
            break;
          case 33:
            d = 34;
            break;
          case 34:
            this.Y = b;
            d = 35;
            break;
          case 35:
            "" !== b && null !== b && (this.J += ";" + oa(this.Y) + ":" + b);
            d = 34;
            break;
          case 40:
            this.J && (l = p(this.J.substr(1)), this.J = "");
            d = 31;
            break;
          case 37:
            q(!0);
            break;
          case 38:
            q(!1);
            break;
          case 18:
            d = 29;
            m.push(18);
            break;
          case 29:
            l = "</" + b + ">";
            d = 37;
            break;
          case 3:
            d = 20;
            m.push(3);
            break;
          case 20:
            l = g() + (f.G ? "" + b : C("" + b));
            d = 37;
            break;
          case 41:
            l = (y ? (y = !1, ">") : "") + g() + (f.G ? "" + b : C("" + b));
            d = 42;
            break;
          case 4:
            l = "<![CDATA[";
            d = 21;
            m.push(4);
            break;
          case 21:
            l = b;
            d = 37;
            break;
          case 8:
            l = "\x3c!--";
            d = 22;
            m.push(8);
            break;
          case 22:
            l = b;
            d = 37;
            break;
          case 13:
            l = g() + "\x3c!--[";
            d = 23;
            m.push(13);
            break;
          case 23:
            l = b + "]>";
            d = 41;
            break;
          case 16:
            l = g() + "\x3c!--{";
            d = 25;
            m.push(16);
            break;
          case 25:
            l = b + "};";
            d = 41;
            break;
          case 14:
            l = "\x3c!--[";
            d = 24;
            m.push(14);
            break;
          case 24:
            l = b + "]>\x3c!--\x3e";
            d = 37;
            break;
          case 15:
            l = "\x3c!--<![endif]--\x3e";
            d = 37;
            m.push(15);
            break;
          case 7:
            d = 26;
            m.push(7);
            break;
          case 26:
            this.t = b;
            d = 39;
            break;
          default:
            d = -1;
        }
    }
    -1 === d ? (this.O("Not html.json format!"), this.B.emit("error", "Not html.json format!")) : (this.U = d, l && this.B.queue(l));
  }
}
;
