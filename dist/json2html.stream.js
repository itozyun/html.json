var l, aa = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, ba = {link:!0, meta:!0, br:!0, hr:!0, img:!0, input:!0, area:!0, base:!0, col:!0, embed:!0, keygen:!0, param:!0, track:!0, wbr:!0, command:!0, basefont:!0, frame:!0, isindex:!0, bgsound:!0}, ca = {html:!0, head:!0, body:!0, p:!0, dt:!0, dd:!0, li:!0, option:!0, tbody:!0, thead:!0, tfoot:!0, td:!0, th:!0, tr:!0, rb:!0, rbc:!0, rp:!0, 
rt:!0, rtc:!0, optgroup:!0, caption:!0, colgroup:!0}, da = {a:!0, audio:!0, del:!0, ins:!0, map:!0, noscript:!0, video:!0}, ea = {xml:"http://www.w3.org/1999/xhtml", svg:"http://www.w3.org/2000/svg", math:"http://www.w3.org/1998/Math/MathML"}, fa = {address:!0, article:!0, aside:!0, blockquote:!0, canvas:!0, details:!0, div:!0, dl:!0, fieldset:!0, figcaption:!0, figure:!0, footer:!0, form:!0, h1:!0, h2:!0, h3:!0, h4:!0, h5:!0, h6:!0, header:!0, hgroup:!0, hr:!0, legend:!0, main:!0, menu:!0, nav:!0, 
noscript:!0, ol:!0, p:!0, pre:!0, section:!0, ul:!0, center:!0, dir:!0, noframes:!0, marquee:!0}, ha = {script:!0, style:!0, plaintext:!0, xmp:!0}, ia = !1, ja = !1, ka = !1;
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
function na(a, b, c, e) {
  var m = b[1], q = b.slice(2);
  a = q.length ? a(m, q) : a(m);
  void 0 !== a && null !== a && "" !== a && (B(a) ? c ? c.splice(e, 1, a) : (b.length = 0, b.push(3, b)) : y(a) && (11 === a[0] ? c ? (a.shift(), a.unshift(e, 1), c.splice.apply(c, a)) : (b.length = 0, b.push.apply(b, a)) : y(a[0]) ? c ? (a.unshift(e, 1), c.splice.apply(c, a)) : (b.length = 0, b.push(11), b.push.apply(b, a)) : c ? c.splice(e, 1, a) : (b.length = 0, b.push(11, a))));
  return a;
}
function oa(a, b, c, e) {
  if (y(c) && A(c[0])) {
    var m = c[0];
    c = c.slice(1);
    m = c.length ? a(m, c) : a(m);
  } else {
    A(c) && (m = a(c));
  }
  return y(m) ? oa(a, b, m, e) : m;
}
function C(a) {
  return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
function E(a, b, c) {
  a = C("" + a);
  var e = a.match('"'), m = a.match("'"), q = b ? "'" : '"';
  if (e && m) {
    a = b ? q + a.split("'").join("\\'") + q : q + a.split('"').join('\\"') + q;
  } else if (e) {
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
  for (var c = a.length, e; c;) {
    e = a[--c], "A" <= e && "Z" >= e && (e = "-" + e.toLowerCase()), b[c] = e;
  }
  return b.join("");
}
function qa(a) {
  var b = a.indexOf("#"), c = a.indexOf(".");
  if (b < c) {
    var e = a.split(".")[1];
    a = a.split(".")[0];
    if (0 < b) {
      var m = a.split("#")[1];
      a = a.split("#")[0];
    }
  } else {
    c < b && (m = a.split("#")[1], a = a.split("#")[0], 0 < c && (e = a.split(".")[1], a = a.split(".")[0]));
  }
  return [a, m, e];
}
function ra(a, b, c, e) {
  function m(h, u, r, v, p) {
    function w() {
      var va = "";
      f && (va = "</" + f + ">", f = "");
      return va;
    }
    var t = "", wa = h[0], D = h[1], M = 1, x = wa, xa;
    switch(wa) {
      case 9:
        t = "<!DOCTYPE " + D + ">" + q(h, v, p);
        break;
      case 11:
        t = q(h, v, p);
        break;
      case 3:
        t = w() + (p ? D : C("" + D));
        break;
      case 4:
        t = "<![CDATA[" + D + "]]\x3e";
        break;
      case 8:
        t = "\x3c!--" + D + "--\x3e";
        break;
      case 13:
        t = w() + "\x3c!--[" + D + "]>" + q(h, !0, p) + "<![endif]--\x3e";
        break;
      case 16:
        t = w() + "\x3c!--{" + D + "};" + q(h, !0, p) + "--\x3e";
        break;
      case 14:
        t = "\x3c!--[" + D + "]>\x3c!--\x3e";
        break;
      case 15:
        t = "\x3c!--<![endif]--\x3e";
        break;
      case 7:
        v = na(b, h, u, r);
        if (void 0 !== v && null !== v && "" !== v && (B(v) || y(v))) {
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
        x = qa(x), u = x[1], r = x[2], x = x[0], "p" !== f || fa[x] ? f = "" : t = w(), t += "<" + x, u && (t += " id=" + E(u, d, n)), r && (t += " class=" + E(r, d, n)), k || (xa = k = k || ea[x] ? !0 : !1), M = h[M], !y(M) && la(M) && (t += " " + G(M)), t = (h = q(h, v || da[x], p || ha[x])) ? t + (">" + h) : ya ? t + ">" : t + (k ? "/>" : ">"), ya ? f = "" : k && !h || ca[x] && !v ? f = ba[x] ? "" : x : (t += "</" + x + ">", f = ""), xa && (k = !1);
    }
    return t;
  }
  function q(h, u, r) {
    var v = "", p = h[0], w = p === +p ? 2 : 1;
    for (1 === ma(h) || 17 === p ? (p = h[w], w = !y(p) && la(p) ? w + 1 : w) : w = 11 === p ? 1 : 9 === p || 13 === p || 16 === p ? 2 : Infinity; w < h.length; ++w) {
      p = h[w], B(p) ? v += m([3, p], null, 0, u, r) : y(p) && (p = m(p, h, w, u, r), -1 === p ? --w : v += p);
    }
    return v;
  }
  function G(h) {
    var u = "", r, v;
    for (r in h) {
      var p = h[r];
      (v = 0 === r.indexOf(z)) && (r = r.substr(z.length));
      "className" === r && (r = "class");
      v && (p = oa(b, r, p, g));
      if (!(null == p || aa[r] && !1 === p || (u += " " + r, aa[r]))) {
        if ("style" === r && la(p)) {
          var w = void 0, t = "";
          for (w in p) {
            v = p[w], "0px" === v && (v = 0), t += ";" + pa(w) + ":" + C("" + v);
          }
          p = t.substr(1);
          if (!p) {
            continue;
          }
        }
        u += "=" + E(p, d, n);
      }
    }
    return u.substr(1);
  }
  var g = "function" === typeof c ? c : function() {
  };
  c = c && "object" === typeof c ? c : e || {};
  var n = !0 === c.quotAlways, d = !0 === c.useSingleQuot, z = c.instructionAttrPrefix || ":", f, k = ka;
  if (y(a)) {
    return 7 === ma(a) && (a = [11, a]), m(a, null, 0, ia || !1, ja || !1);
  }
}
var F = {}, H = F.ja = 1, I = F.ta = 2, J = F.ka = 3, K = F.ua = 4, L = F.ba = 5, N = F.ca = 6, O = F.Ea = 7, P = F.da = 8, Q = F.la = 9, R = F.xa = 10, S = F.pa = 11, T = F.va = 17, sa = F.wa = 18, ta = F.Fa = 33, ua = F.Ga = 34, za = F.Ha = 35, Aa = F.ea = 49, Ba = F.fa = 50, Ca = F.ga = 51, Da = F.ha = 52, Ea = F.ma = 65, Fa = F.na = 66, Ga = F.oa = 67, Ha = F.qa = 81, Ia = F.ra = 83, U = F.ya = 97, Ja = F.za = 98, Ka = F.Aa = 99, La = F.Ba = 100, Ma = F.Ca = 101, Na = F.Da = 102, V = F.Ia = 113, 
Oa = F.ia = 114, Pa = F.sa = 129, Qa = F.aa = 130;
function Ra() {
  this.h = T;
  this.string = this.value = void 0;
  this.M = Buffer.alloc ? Buffer.alloc(65536) : new Buffer(65536);
  this.o = 0;
  this.mode = this.key = this.A = this.J = void 0;
  this.stack = [];
  this.l = V;
  this.m = this.I = 0;
  this.V = {2:new Buffer(2), 3:new Buffer(3), 4:new Buffer(4)};
  this.offset = -1;
}
function Sa(a) {
  for (var b = Object.keys(F), c = 0, e = b.length; c < e; c++) {
    var m = b[c];
    if (F[m] === a) {
      return m;
    }
  }
  return a && "0x" + a.toString(16);
}
l = Ra.prototype;
l.T = function(a) {
  throw a;
};
function W(a, b, c) {
  a.h = sa;
  a.T(Error("Unexpected " + JSON.stringify(String.fromCharCode(b[c])) + " at position " + c + " in state " + Sa(a.h)));
}
function X(a, b) {
  65536 <= a.o && (a.string += a.M.toString("utf8"), a.o = 0);
  a.M[a.o++] = b;
}
function Y(a, b, c, e) {
  var m = b.length;
  "number" === typeof c && (m = "number" === typeof e ? 0 > e ? b.length - c + e : e - c : b.length - c);
  0 > m && (m = 0);
  65536 < a.o + m && (a.string += a.M.toString("utf8", 0, a.o), a.o = 0);
  b.copy(a.M, a.o, c, e);
  a.o += m;
}
l.write = function(a) {
  "string" === typeof a && (a = new Buffer(a));
  for (var b, c = 0, e = a.length; c < e; c++) {
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
      if (b = a[c], 0 < this.I) {
        for (b = 0; b < this.I; b++) {
          this.V[this.m][this.m - this.I + b] = a[b];
        }
        Y(this, this.V[this.m]);
        this.m = this.I = 0;
        c = c + b - 1;
      } else if (0 === this.I && 128 <= b) {
        if (193 >= b || 244 < b) {
          return this.T(Error("Invalid UTF-8 character at position " + c + " in state " + Sa(this.h)));
        }
        194 <= b && 223 >= b && (this.m = 2);
        224 <= b && 239 >= b && (this.m = 3);
        240 <= b && 244 >= b && (this.m = 4);
        if (this.m + c > a.length) {
          for (b = 0; b <= a.length - 1 - c; b++) {
            this.V[this.m][b] = a[c + b];
          }
          this.I = c + this.m - a.length;
          c = a.length - 1;
        } else {
          Y(this, a, c, c + this.m), c = c + this.m - 1;
        }
      } else if (34 === b) {
        this.h = T, this.string += this.M.toString("utf8", 0, this.o), this.o = 0, this.j(R, this.string), this.offset += Buffer.byteLength(this.string, "utf8") + 1, this.string = void 0;
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
        this.J = "", this.h = Ka;
      } else {
        return W(this, a, c);
      }
    } else if (this.h === Ka || this.h === La || this.h === Ma || this.h === Na) {
      if (b = a[c], 48 <= b && 64 > b || 64 < b && 70 >= b || 96 < b && 102 >= b) {
        this.J += String.fromCharCode(b), this.h++ === Na && (b = parseInt(this.J, 16), this.J = void 0, void 0 !== this.A && 56320 <= b && 57344 > b ? (Y(this, new Buffer(String.fromCharCode(this.A, b))), this.A = void 0) : void 0 === this.A && 55296 <= b && 56320 > b ? this.A = b : (void 0 !== this.A && (Y(this, new Buffer(String.fromCharCode(this.A))), this.A = void 0), Y(this, new Buffer(String.fromCharCode(b)))), this.h = U);
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
  a.T(Error("Unexpected " + Sa(b) + (c ? "(" + JSON.stringify(c) + ")" : "") + " in state " + Sa(a.l)));
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
  var e = !1, m = !1, q = [], G = !1, g = new Ta();
  g.readable = g.writable = !0;
  g.paused = !1;
  g.Y = !0;
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
    !g.writable && g.Y && process.nextTick(function() {
      g.destroy();
    });
  });
  g.end = function(n) {
    if (!e) {
      return e = !0, arguments.length && g.write(n), g.writable = !1, c.call(g), !g.readable && g.Y && g.destroy(), g;
    }
  };
  g.destroy = function() {
    if (!m) {
      return e = m = !0, q.length = 0, g.writable = g.readable = !1, g.emit("close"), g;
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
  const e = new Ra(), m = Ua();
  c = b && "object" === typeof b ? b : c || {};
  m._parser = e;
  e.C = e.j;
  e.j = Ya;
  e.T = Za;
  e.W = 0;
  e.$ = [];
  e.v = [];
  e.O = a;
  e.P = "function" === typeof b ? b : function() {
  };
  e.R = !!c.quotAlways;
  e.S = !!c.useSingleQuot;
  e.U = c.instructionAttrPrefix || ":";
  e.L = "";
  return e.F = m;
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
  43 !== this._parser.W && this.emit("error", "Invalid html.json");
  this.queue(null);
  this._parser = this._parser.F = null;
}
function Za(a) {
  -1 < a.message.indexOf("at position") && (a.message = "Invalid JSON (" + a.message + ")");
  this.P(a.message);
  this.F.emit("error", a);
}
function Ya(a, b) {
  function c() {
    const h = f.v.length ? f.O.call(f.F, f.B, f.v) : f.O.call(f.F, f.B);
    f.B = null;
    f.v.length = 0;
    return h;
  }
  function e() {
    f.v.unshift(f.B);
    const h = oa(f.O.bind(f.F), f.K, f.v, f.P);
    f.B = null;
    f.v.length = 0;
    return h;
  }
  function m(h) {
    if (null != h) {
      if (aa[f.K]) {
        if (!1 !== h) {
          return " " + f.K;
        }
      } else {
        return " " + f.K + "=" + E(h, f.S, f.R);
      }
    }
    return "";
  }
  function q(h) {
    const u = n.pop();
    d = n.length ? 42 : 43;
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
        "" === u ? (k = h ? "" : ">", f.D = "", G()) : A(u) && (k = h ? "" : f.X || f.N ? " />" : ">", (f.X || f.N) && !h || ca[u] && !f.G ? f.D = ba[u] ? "" : u : (k += "</" + u + ">", f.D = ""), G());
    }
  }
  function G() {
    f.G = f.H = f.N = !1;
    for (let h = 0, u = n.length; h < u; ++h) {
      const r = n[h];
      13 === r || 16 === r ? f.G = !0 : A(r) && (da[r] && (f.G = !0), ha[r] && (f.H = !0), ea[r] && (f.N = !0));
    }
  }
  function g() {
    let h = "";
    f.D && (h = "</" + f.D + ">", f.D = "");
    return h;
  }
  if (a === L || a === N) {
    this.stack.length && this.C(a, b);
  } else {
    var n = this.$, d = this.W, z = !1, f = this;
    switch(d) {
      case 39:
        switch(a) {
          case J:
          case H:
            this.C(a, b);
            return;
          case K:
            if (0 === this.stack.length) {
              a = c();
              if (y(a)) {
                ia = this.G;
                ja = this.H;
                ka = this.X || this.N;
                var k = ra(a, this.O, this.P, {quotAlways:this.R, useSingleQuot:this.S, instructionAttrPrefix:this.U});
                ia = ja = ka = !1;
              } else {
                k = B(a) ? "" + a : "";
              }
              q(!!k);
              break;
            }
          case I:
            1 === this.stack.length && (this.v.push(this.value), this.value = null);
            this.C(a, b);
            return;
          case R:
          case S:
          case O:
          case P:
          case Q:
            this.stack.length ? this.C(a, b) : this.v.push(b);
            return;
          default:
            d = -1;
        }break;
      case 36:
        switch(a) {
          case J:
          case H:
            this.C(a, b);
            return;
          case K:
            if (0 === this.stack.length) {
              k = m(e());
              d = 31;
              break;
            }
          case I:
            1 === this.stack.length && (this.v.push(this.value), this.value = null);
            this.C(a, b);
            return;
          case R:
            if (0 === this.stack.length && !this.B) {
              this.B = b;
              return;
            }
          case S:
          case O:
          case P:
          case Q:
            this.stack.length ? this.C(a, b) : this.v.push(b);
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
            a = 32 === d ? 32 : -1;
            break;
          default:
            a = -1;
        }switch(a) {
          case 0:
            k = z ? (z = !1, ">") : "";
            d = 38;
            break;
          case 9:
            d = 19;
            n.push(9);
            break;
          case 19:
            k = "<!DOCTYPE " + b + ">";
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
            b = qa(b);
            z = b[1];
            const h = b[2];
            b = b[0];
            "p" !== this.D || fa[b] ? this.D = k = "" : k = g();
            k += "<" + b;
            z && (k += " id=" + E(z, this.S, this.R));
            h && (k += " class=" + E(h, this.S, this.R));
            this.G || (this.G = !!da[b]);
            this.H || (this.H = !!ha[b]);
            28 === a ? n.push("") : n.push(b);
            G();
            d = 30;
            break;
          case 30:
            d = 31;
            break;
          case 31:
            0 === b.indexOf(this.U) ? (this.K = b.substr(this.U.length), d = 40) : (this.K = b, d = "style" === b ? 33 : 32);
            break;
          case 36:
            d = 36;
            break;
          case 42:
            this.B = b, b = e();
          case 32:
            k = m(b);
            d = 31;
            break;
          case 39:
            d = 41;
            break;
          case 33:
            d = 34;
            break;
          case 34:
            this.Z = b;
            d = 35;
            break;
          case 35:
            "" !== b && null !== b && (this.L += ";" + pa(this.Z) + ":" + b);
            d = 34;
            break;
          case 40:
            this.L && (k = m(this.L.substr(1)), this.L = "");
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
            n.push(18);
            break;
          case 29:
            k = "</" + b + ">";
            d = 37;
            break;
          case 3:
            d = 20;
            n.push(3);
            break;
          case 20:
            k = g() + (f.H ? "" + b : C("" + b));
            d = 37;
            break;
          case 41:
            k = (z ? (z = !1, ">") : "") + g() + (f.H ? "" + b : C("" + b));
            d = 42;
            break;
          case 4:
            k = "<![CDATA[";
            d = 21;
            n.push(4);
            break;
          case 21:
            k = b;
            d = 37;
            break;
          case 8:
            k = "\x3c!--";
            d = 22;
            n.push(8);
            break;
          case 22:
            k = b;
            d = 37;
            break;
          case 13:
            k = g() + "\x3c!--[";
            d = 23;
            n.push(13);
            break;
          case 23:
            k = b + "]>";
            d = 41;
            break;
          case 16:
            k = g() + "\x3c!--{";
            d = 25;
            n.push(16);
            break;
          case 25:
            k = b + "};";
            d = 41;
            break;
          case 14:
            k = "\x3c!--[";
            d = 24;
            n.push(14);
            break;
          case 24:
            k = b + "]>\x3c!--\x3e";
            d = 37;
            break;
          case 15:
            k = "\x3c!--<![endif]--\x3e";
            d = 37;
            n.push(15);
            break;
          case 7:
            d = 26;
            n.push(7);
            break;
          case 26:
            this.B = b;
            d = 39;
            break;
          default:
            d = -1;
        }
    }
    -1 === d ? (this.P("Not html.json format!"), this.F.emit("error", "Not html.json format!")) : (this.W = d, k && this.F.queue(k));
  }
}
;
