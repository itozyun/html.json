var k = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, aa = {link:!0, meta:!0, br:!0, hr:!0, img:!0, input:!0, area:!0, base:!0, col:!0, embed:!0, keygen:!0, param:!0, track:!0, wbr:!0, command:!0, basefont:!0, frame:!0, isindex:!0, bgsound:!0}, ba = {html:!0, head:!0, body:!0, p:!0, dt:!0, dd:!0, li:!0, option:!0, tbody:!0, thead:!0, tfoot:!0, td:!0, th:!0, tr:!0, rb:!0, rbc:!0, rp:!0, rt:!0, 
rtc:!0, optgroup:!0, caption:!0, colgroup:!0}, ca = {a:!0, audio:!0, del:!0, ins:!0, map:!0, noscript:!0, video:!0}, da = {Ja:"http://www.w3.org/1999/xhtml", svg:"http://www.w3.org/2000/svg", math:"http://www.w3.org/1998/Math/MathML"}, ea = {address:!0, article:!0, aside:!0, blockquote:!0, canvas:!0, details:!0, div:!0, dl:!0, fieldset:!0, figcaption:!0, figure:!0, footer:!0, form:!0, h1:!0, h2:!0, h3:!0, h4:!0, h5:!0, h6:!0, header:!0, hgroup:!0, hr:!0, legend:!0, main:!0, menu:!0, nav:!0, noscript:!0, 
ol:!0, p:!0, pre:!0, section:!0, ul:!0, center:!0, dir:!0, noframes:!0, marquee:!0}, fa = {script:!0, style:!0, plaintext:!0, xmp:!0}, ha = !1, ia = !1, ja = !1;
function A(a) {
  return !(!a || a.pop !== [].pop);
}
function ka(a) {
  return !(!a || "object" !== typeof a);
}
function B(a) {
  return "" + a === a;
}
function C(a) {
  return B(a) || a === +a;
}
function la(a) {
  if (C(a)) {
    a = 3;
  } else if (A(a)) {
    if (B(a[0])) {
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
function ma(a, b, c, f) {
  var p = b[1], v = b.slice(2);
  a = v.length ? a(p, v) : a(p);
  void 0 !== a && null !== a && "" !== a && (C(a) ? c ? c.splice(f, 1, a) : (b.length = 0, b.push(3, b)) : A(a) && (11 === a[0] ? c ? (a.shift(), a.unshift(f, 1), c.splice.apply(c, a)) : (b.length = 0, b.push.apply(b, a)) : A(a[0]) ? c ? (a.unshift(f, 1), c.splice.apply(c, a)) : (b.length = 0, b.push(11), b.push.apply(b, a)) : c ? c.splice(f, 1, a) : (b.length = 0, b.push(11, a))));
  return a;
}
function na(a, b, c, f) {
  if (A(c) && B(c[0])) {
    var p = c[0];
    c = c.slice(1);
    p = c.length ? a(p, c) : a(p);
  } else {
    B(c) && (p = a(c));
  }
  return A(p) ? na(a, b, p, f) : p;
}
function D(a) {
  return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
function F(a, b, c) {
  a = D("" + a);
  if (a.match('"')) {
    a = a.match("'") ? b ? "'" + a.split("&apos;").join("'").split("'").join("&apos;") + "'" : '"' + a.split("&quot;").join('"').split('"').join("&quot;") + '"' : "'" + a + "'";
  } else if (c || a.match(/[^0-9a-z\.\-]/g) || 72 < a.length) {
    a = (b ? "'" : '"') + D(a) + (b ? "'" : '"');
  }
  return a;
}
function oa(a) {
  var b = [];
  a = a.split("");
  for (var c = a.length, f; c;) {
    f = a[--c], "A" <= f && "Z" >= f && (f = "-" + f.toLowerCase()), b[c] = f;
  }
  return b.join("");
}
function pa(a) {
  var b = a.indexOf("#"), c = a.indexOf(".");
  if (b < c) {
    var f = a.split(".")[1];
    a = a.split(".")[0];
    if (0 < b) {
      var p = a.split("#")[1];
      a = a.split("#")[0];
    }
  } else {
    c < b && (p = a.split("#")[1], a = a.split("#")[0], 0 < c && (f = a.split(".")[1], a = a.split(".")[0]));
  }
  return [a, p, f];
}
function qa(a, b, c, f) {
  function p(h, t, r, u, m) {
    function w() {
      e && (q += "</" + e + ">", e = "");
    }
    var q = "", ra = h[0], y = h[1], K = 1, x = ra, sa;
    switch(ra) {
      case 9:
        q = y + v(h, u, m);
        break;
      case 11:
        q = v(h, u, m);
        break;
      case 3:
        w();
        q += m ? y : D("" + y);
        break;
      case 4:
        B(y) && (q = "<![CDATA[" + y + "]]\x3e");
        break;
      case 8:
        B(y) && (q = "\x3c!--" + y + "--\x3e");
        break;
      case 13:
        w();
        B(y) && (q = "\x3c!--[" + y + "]>");
        q += v(h, !0, m) + "<![endif]--\x3e";
        break;
      case 16:
        w();
        B(y) && (q = "\x3c!--{" + y + "};");
        q += v(h, !0, m) + "--\x3e";
        break;
      case 14:
        B(y) && (q = "\x3c!--[" + y + "]>\x3c!--\x3e");
        q += v(h, u, m) + "\x3c!--<![endif]--\x3e";
        break;
      case 15:
        q = "\x3c!--<![endif]--\x3e";
        break;
      case 7:
        u = ma(b, h, t, r);
        if (void 0 !== u && null !== u && "" !== u && (C(u) || A(u))) {
          return -1;
        }
        break;
      case 18:
        B(y) && (q = "</" + y + ">");
        break;
      case 17:
        var ta = !0;
      case 1:
        x = h[1], K = 2;
      default:
        B(x) && (x = pa(x), t = x[1], r = x[2], x = x[0], "p" !== e || ea[x] || (q = "</p>"), e = "", q += "<" + x, t && (q += " id=" + F(t, d, n)), r && (q += " class=" + F(r, d, n)), l || (sa = l = l || da[x] ? !0 : !1), K = h[K], !A(K) && ka(K) && (q += " " + E(K)), q = (h = v(h, u || ca[x], m || fa[x])) ? q + (">" + h) : ta ? q + ">" : q + (l ? "/>" : ">"), ta ? e = "" : l && !h || ba[x] && !u ? e = aa[x] ? "" : x : (q += "</" + x + ">", e = ""), sa && (l = !1));
    }
    return q;
  }
  function v(h, t, r) {
    var u = "", m = h[0], w = 1 === m ? 2 : 1;
    for (1 === la(h) ? (m = h[w], w = !A(m) && ka(m) ? w + 1 : w) : w = 11 === m ? 1 : 9 === m || 13 === m || 14 === m ? 2 : Infinity; w < h.length; ++w) {
      m = h[w], C(m) ? u += p([3, m], null, 0, t, r) : A(m) && (m = p(m, h, w, t, r), -1 === m ? --w : u += m);
    }
    return u;
  }
  function E(h) {
    var t = "", r, u;
    for (r in h) {
      var m = h[r];
      (u = 0 === r.indexOf(z)) && (r = r.substr(z.length));
      "className" === r && (r = "class");
      u && (m = na(b, r, m, g));
      if (!(null == m || k[r] && !1 === m || (t += " " + r, k[r]))) {
        if ("style" === r && ka(m)) {
          var w = void 0, q = "";
          for (w in m) {
            u = m[w], "0px" === u && (u = 0), q += ";" + oa(w) + ":" + D("" + u);
          }
          m = q.substr(1);
          if (!m) {
            continue;
          }
        }
        t += "=" + F(m, d, n);
      }
    }
    return t.substr(1);
  }
  var g = "function" === typeof c ? c : function() {
  };
  c = c && "object" === typeof c ? c : f || {};
  var n = !!c.quotAlways, d = !!c.useSingleQuot, z = c.instructionAttrPrefix || ":", e, l = ja;
  if (A(a)) {
    return 7 === la(a) && (a = [11, a]), p(a, null, 0, ha || !1, ia || !1);
  }
}
var G = {}, H = G.ia = 1, I = G.sa = 2, J = G.ja = 3, L = G.ta = 4, M = G.aa = 5, N = G.ba = 6, O = G.Da = 7, P = G.ca = 8, Q = G.ka = 9, R = G.wa = 10, S = G.oa = 11, T = G.ua = 17, ua = G.va = 18, va = G.Ea = 33, wa = G.Fa = 34, xa = G.Ga = 35, ya = G.da = 49, za = G.ea = 50, Aa = G.fa = 51, Ba = G.ga = 52, Ca = G.la = 65, Da = G.ma = 66, Ea = G.na = 67, Fa = G.pa = 81, Ga = G.qa = 83, U = G.xa = 97, Ha = G.ya = 98, Ia = G.za = 99, Ja = G.Aa = 100, Ka = G.Ba = 101, La = G.Ca = 102, V = G.Ha = 113, 
Ma = G.ha = 114, W = G.ra = 129, X = G.$ = 130;
function Na() {
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
  for (var b = Object.keys(G), c = 0, f = b.length; c < f; c++) {
    var p = b[c];
    if (G[p] === a) {
      return p;
    }
  }
  return a && "0x" + a.toString(16);
}
var Z = Na.prototype;
Z.S = function(a) {
  throw a;
};
Z.e = function(a, b) {
  this.c = ua;
  this.S(Error("Unexpected " + JSON.stringify(String.fromCharCode(a[b])) + " at position " + b + " in state " + Y(this.c)));
};
Z.o = function(a) {
  65536 <= this.l && (this.string += this.L.toString("utf8"), this.l = 0);
  this.L[this.l++] = a;
};
Z.K = function(a, b, c) {
  var f = a.length;
  "number" === typeof b && (f = "number" === typeof c ? 0 > c ? a.length - b + c : c - b : a.length - b);
  0 > f && (f = 0);
  65536 < this.l + f && (this.string += this.L.toString("utf8", 0, this.l), this.l = 0);
  a.copy(this.L, this.l, b, c);
  this.l += f;
};
Z.write = function(a) {
  "string" === typeof a && (a = new Buffer(a));
  for (var b, c = 0, f = a.length; c < f; c++) {
    if (this.c === T) {
      if (b = a[c], this.offset++, 123 === b) {
        this.f(H, "{");
      } else if (125 === b) {
        this.f(I, "}");
      } else if (91 === b) {
        this.f(J, "[");
      } else if (93 === b) {
        this.f(L, "]");
      } else if (58 === b) {
        this.f(M, ":");
      } else if (44 === b) {
        this.f(N, ",");
      } else if (116 === b) {
        this.c = va;
      } else if (102 === b) {
        this.c = ya;
      } else if (110 === b) {
        this.c = Ca;
      } else if (34 === b) {
        this.string = "", this.l = 0, this.c = U;
      } else if (45 === b) {
        this.string = "-", this.c = Fa;
      } else if (48 <= b && 64 > b) {
        this.string = String.fromCharCode(b), this.c = Ga;
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
        this.c = Ha;
      } else if (32 <= b) {
        this.o(b);
      } else {
        return this.e(a, c);
      }
    } else if (this.c === Ha) {
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
        this.unicode = "", this.c = Ia;
      } else {
        return this.e(a, c);
      }
    } else if (this.c === Ia || this.c === Ja || this.c === Ka || this.c === La) {
      if (b = a[c], 48 <= b && 64 > b || 64 < b && 70 >= b || 96 < b && 102 >= b) {
        this.unicode += String.fromCharCode(b), this.c++ === La && (b = parseInt(this.unicode, 16), this.unicode = void 0, void 0 !== this.v && 56320 <= b && 57344 > b ? (this.K(new Buffer(String.fromCharCode(this.v, b))), this.v = void 0) : void 0 === this.v && 55296 <= b && 56320 > b ? this.v = b : (void 0 !== this.v && (this.K(new Buffer(String.fromCharCode(this.v))), this.v = void 0), this.K(new Buffer(String.fromCharCode(b)))), this.c = U);
      } else {
        return this.e(a, c);
      }
    } else if (this.c === Fa || this.c === Ga) {
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
          this.c = Ga;
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
    } else if (this.c === va) {
      if (114 === a[c]) {
        this.c = wa;
      } else {
        return this.e(a, c);
      }
    } else if (this.c === wa) {
      if (117 === a[c]) {
        this.c = xa;
      } else {
        return this.e(a, c);
      }
    } else if (this.c === xa) {
      if (101 === a[c]) {
        this.c = T, this.f(O, !0), this.offset += 3;
      } else {
        return this.e(a, c);
      }
    } else if (this.c === ya) {
      if (97 === a[c]) {
        this.c = za;
      } else {
        return this.e(a, c);
      }
    } else if (this.c === za) {
      if (108 === a[c]) {
        this.c = Aa;
      } else {
        return this.e(a, c);
      }
    } else if (this.c === Aa) {
      if (115 === a[c]) {
        this.c = Ba;
      } else {
        return this.e(a, c);
      }
    } else if (this.c === Ba) {
      if (101 === a[c]) {
        this.c = T, this.f(P, !1), this.offset += 4;
      } else {
        return this.e(a, c);
      }
    } else if (this.c === Ca) {
      if (117 === a[c]) {
        this.c = Da;
      } else {
        return this.e(a, c);
      }
    } else if (this.c === Da) {
      if (108 === a[c]) {
        this.c = Ea;
      } else {
        return this.e(a, c);
      }
    } else if (this.c === Ea) {
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
  this.c = ua;
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
      this.push(), this.value = this.value ? this.value[this.m] = {} : {}, this.m = void 0, this.h = Ma, this.mode = W;
    } else if (a === J) {
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
  } else if (this.h === Ma) {
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
      this.mode === X ? (this.m++, this.h = V) : this.mode === W && (this.h = Ma);
    } else if (a === L && this.mode === X || a === I && this.mode === W) {
      this.pop();
    } else {
      return this.C(a, b);
    }
  } else {
    return this.C(a, b);
  }
};
var Oa = require("stream");
function Pa() {
  function a() {
    for (; v.length && !g.D;) {
      var n = v.shift();
      if (null === n) {
        return g.emit("end");
      }
      g.emit("data", n);
    }
  }
  var b = Qa, c = Ra;
  b = b || function(n) {
    this.queue(n);
  };
  c = c || function() {
    this.queue(null);
  };
  var f = !1, p = !1, v = [], E = !1, g = new Oa();
  g.readable = g.writable = !0;
  g.D = !1;
  g.X = !0;
  g.write = function(n) {
    b.call(this, n);
    return !g.D;
  };
  g.queue = g.push = function(n) {
    if (E) {
      return g;
    }
    null === n && (E = !0);
    v.push(n);
    a();
    return g;
  };
  g.on("end", function() {
    g.readable = !1;
    !g.writable && g.X && process.nextTick(function() {
      g.destroy();
    });
  });
  g.end = function(n) {
    if (!f) {
      return f = !0, arguments.length && g.write(n), g.writable = !1, c.call(g), !g.readable && g.X && g.destroy(), g;
    }
  };
  g.destroy = function() {
    if (!p) {
      return f = p = !0, v.length = 0, g.writable = g.readable = !1, g.emit("close"), g;
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
const Sa = Buffer.from && Buffer.from !== Uint8Array.from;
module.exports = function(a, b, c) {
  const f = new Na(), p = Pa();
  c = b && "object" === typeof b ? b : c || {};
  p.R = f;
  f.w = f.f;
  f.f = Ta;
  f.S = Ua;
  f.U = 0;
  f.Z = [];
  f.n = [];
  f.N = a;
  f.O = "function" === typeof b ? b : function() {
  };
  f.P = !!c.quotAlways;
  f.Q = !!c.useSingleQuot;
  f.T = c.instructionAttrPrefix || ":";
  f.J = "";
  return f.B = p;
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
function Qa(a) {
  "string" === typeof a && (a = Sa ? Buffer.from(a) : new Buffer(a));
  this.R.write(a);
}
function Ra(a) {
  a && this.write(a);
  43 !== this.R.U && this.emit("error", "Invalid html.json");
  this.queue(null);
  this.R = this.R.B = null;
}
function Ua(a) {
  -1 < a.message.indexOf("at position") && (a.message = "Invalid JSON (" + a.message + ")");
  this.O(a.message);
  this.B.emit("error", a);
}
function Ta(a, b) {
  function c() {
    const h = e.n.length ? e.N.call(e.B, e.t, e.n) : e.N.call(e.B, e.t);
    e.t = null;
    e.n.length = 0;
    return h;
  }
  function f() {
    e.n.unshift(e.t);
    const h = na(e.N.bind(e.B), e.I, e.n, e.O);
    e.t = null;
    e.n.length = 0;
    return h;
  }
  function p(h) {
    if (null != h) {
      if (k[e.I]) {
        if (!1 !== h) {
          return " " + e.I;
        }
      } else {
        return " " + e.I + "=" + F(h, e.Q, e.P);
      }
    }
    return "";
  }
  function v(h) {
    const t = n.pop();
    d = n.length ? 42 : 43;
    switch(t) {
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
        "" === t ? (l = h ? "" : ">", e.A = "", E()) : B(t) && (l = h ? "" : e.W || e.M ? " />" : ">", (e.W || e.M) && !h || ba[t] && !e.F ? e.A = aa[t] ? "" : t : (l += "</" + t + ">", e.A = ""), E());
    }
  }
  function E() {
    e.F = e.G = e.M = !1;
    for (let h = 0, t = n.length; h < t; ++h) {
      const r = n[h];
      13 === r || 16 === r ? e.F = !0 : B(r) && (ca[r] && (e.F = !0), fa[r] && (e.G = !0), da[r] && (e.M = !0));
    }
  }
  function g() {
    let h = "";
    !z && e.A && (h = "</" + e.A + ">", e.A = "");
    return h;
  }
  if (a === M || a === N) {
    this.stack.length && this.w(a, b);
  } else {
    var n = this.Z, d = this.U, z = !1, e = this;
    switch(d) {
      case 39:
        switch(a) {
          case J:
          case H:
            this.w(a, b);
            return;
          case L:
            if (0 === this.stack.length) {
              a = c();
              if (A(a)) {
                ha = this.F;
                ia = this.G;
                ja = this.W || this.M;
                var l = qa(a, this.N, this.O, {quotAlways:this.P, useSingleQuot:this.Q, instructionAttrPrefix:this.T});
                ha = ia = ja = !1;
              } else {
                l = C(a) ? "" + a : "";
              }
              v(!!l);
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
          case J:
          case H:
            this.w(a, b);
            return;
          case L:
            if (0 === this.stack.length) {
              l = p(f());
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
          case J:
            switch(d) {
              case 30:
              case 41:
                z = !0;
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
                z = !0;
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
                z = !0;
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
            l = z ? (z = !1, ">") : "";
            d = 38;
            break;
          case 9:
            d = 19;
            n.push(9);
            break;
          case 19:
            l = b;
            d = 41;
            break;
          case 11:
            d = 41;
            n.push(11);
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
            const h = b[1], t = b[2];
            b = b[0];
            l = ("p" !== this.A || ea[b] ? "" : "</p>") + "<" + b;
            this.A = "";
            h && (l += " id=" + F(h, this.Q, this.P));
            t && (l += " class=" + F(t, this.Q, this.P));
            this.F || (this.F = !!ca[b]);
            this.G || (this.G = !!fa[b]);
            28 === a ? n.push("") : n.push(b);
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
            this.t = b, b = f();
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
            v(!0);
            break;
          case 38:
            v(!1);
            break;
          case 18:
            d = 29;
            n.push(18);
            break;
          case 29:
            l = "</" + b + ">";
            d = 37;
            break;
          case 3:
            d = 20;
            n.push(3);
            break;
          case 20:
            l = g() + (e.G ? "" + b : D("" + b));
            d = 37;
            break;
          case 41:
            l = (z ? (z = !1, ">") : "") + g() + (e.G ? "" + b : D("" + b));
            d = 42;
            break;
          case 4:
            l = "<![CDATA[";
            d = 21;
            n.push(4);
            break;
          case 21:
            l = b;
            d = 37;
            break;
          case 8:
            l = "\x3c!--";
            d = 22;
            n.push(8);
            break;
          case 22:
            l = b;
            d = 37;
            break;
          case 13:
            l = g() + "\x3c!--[";
            d = 23;
            n.push(13);
            break;
          case 23:
            l = b + "]>";
            d = 41;
            break;
          case 16:
            l = g() + "\x3c!--{";
            d = 25;
            n.push(16);
            break;
          case 25:
            l = b + "};";
            d = 41;
            break;
          case 14:
            l = "\x3c!--[";
            d = 24;
            n.push(14);
            break;
          case 24:
            l = b + "]>\x3c!--\x3e";
            d = 37;
            break;
          case 15:
            l = "\x3c!--<![endif]--\x3e";
            d = 37;
            n.push(15);
            break;
          case 7:
            d = 26;
            n.push(7);
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