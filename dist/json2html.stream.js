var n, aa = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, ca = {xml:!0, svg:!0, math:!0}, da = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, COMMAND:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0, area:!0, base:!0, basefont:!0, br:!0, bgsound:!0, col:!0, command:!0, frame:!0, hr:!0, img:!0, input:!0, 
isindex:!0, keygen:!0, link:!0, meta:!0, param:!0, source:!0, track:!0, embed:!0, wbr:!0}, ea = {HTML:!0, HEAD:!0, BODY:!0, P:!0, DT:!0, DD:!0, LI:!0, OPTION:!0, TBODY:!0, THEAD:!0, TFOOT:!0, TD:!0, TH:!0, TR:!0, RB:!0, RBC:!0, RP:!0, RT:!0, RTC:!0, OPTGROUP:!0, CAPTION:!0, COLGROUP:!0}, fa = {A:!0, AUDIO:!0, DEL:!0, INS:!0, MAP:!0, NOSCRIPT:!0, VIDEO:!0}, ha = {H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, ADDRESS:!0, BLOCKQUOTE:!0, DIV:!0, DL:!0, FIELDSET:!0, FORM:!0, HR:!0, LEGEND:!0, MENU:!0, NOSCRIPT:!0, 
OL:!0, P:!0, PRE:!0, UL:!0, CENTER:!0, DIR:!0, NOFRAMES:!0, MARQUEE:!0}, ia = {SCRIPT:!0, STYLE:!0, TEXTAREA:!0, TITLE:!0, PLAINTEXT:!0, XMP:!0, script:!0, style:!0, textarea:!0, title:!0, plaintext:!0, xmp:!0}, ja = !1, ka = !1, la = !1;
function A(a) {
  return !(!a || a.pop !== [].pop);
}
function ma(a) {
  return !(!a || "object" !== typeof a);
}
function B(a) {
  return "" + a === a;
}
function C(a) {
  return B(a) || a === +a;
}
function na(a) {
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
function oa(a, b, c, h) {
  var e = b[1], l = b.slice(2), u;
  "function" === typeof a ? u = l.length ? a(e, l) : a(e) : u = l.length ? a[e](l) : a[e]();
  void 0 !== u && null !== u && "" !== u && (C(u) ? c ? c.splice(h, 1, u) : (b.length = 0, b.push(3, b)) : A(u) && (11 === u[0] ? c ? (u.shift(), u.unshift(h, 1), c.splice.apply(c, u)) : (b.length = 0, b.push.apply(b, u)) : A(u[0]) ? c ? (u.unshift(h, 1), c.splice.apply(c, u)) : (b.length = 0, b.push(11), b.push.apply(b, u)) : c ? c.splice(h, 1, u) : (b.length = 0, b.push(11, u))));
  return u;
}
function pa(a, b, c, h) {
  var e;
  if (A(c) && B(c[0])) {
    var l = c[0];
    c = c.slice(1);
    "function" === typeof a ? e = c.length ? a(l, c) : a(l) : e = c.length ? a[l](c) : a[l]();
  } else {
    B(c) && ("function" === typeof a ? e = a(c) : e = a[c]());
  }
  return A(e) ? pa(a, b, e, h) : e;
}
function D(a) {
  return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
function F(a, b, c) {
  a = D("" + a);
  var h = a.match('"'), e = a.match("'"), l = b ? "'" : '"';
  if (h && e) {
    a = b ? l + a.split("'").join("\\'") + l : l + a.split('"').join('\\"') + l;
  } else if (h) {
    a = "'" + a + "'";
  } else if (e) {
    a = b ? l + a.split("'").join("\\'") + l : l + a + l;
  } else if (c || a.match(/[^0-9a-z\.\-]/g) || 72 < a.length) {
    a = l + a + l;
  }
  return a;
}
function qa(a) {
  var b = [];
  a = a.split("");
  for (var c = a.length, h; c;) {
    h = a[--c], "A" <= h && "Z" >= h && (h = "-" + h.toLowerCase()), b[c] = h;
  }
  return b.join("");
}
function ra(a) {
  var b = a.indexOf("#"), c = a.indexOf("."), h = "", e = "";
  b < c ? (h = a.split(".")[1], a = a.split(".")[0], 0 < b && (e = a.split("#")[1], a = a.split("#")[0])) : c < b && (e = a.split("#")[1], a = a.split("#")[0], 0 < c && (h = a.split(".")[1], a = a.split(".")[0]));
  return [a, e, h];
}
function sa(a, b, c, h) {
  function e(p, y, v, w, q) {
    function x() {
      var xa = "";
      k && (xa = "</" + k + ">", k = "");
      return xa;
    }
    var r = "", ba = p[0], H = p[1], N = 1, z = ba, ya;
    switch(ba) {
      case 9:
        r = "<!DOCTYPE " + H + ">" + l(p, !1, q);
        break;
      case 11:
        r = l(p, w, q);
        break;
      case 3:
        r = x() + (q ? H : D("" + H));
        break;
      case 4:
        r = "<![CDATA[" + H + "]]\x3e";
        break;
      case 8:
        r = "\x3c!--" + H + "--\x3e";
        break;
      case 13:
        r = x() + "\x3c!--[" + H + "]>" + l(p, !0, q) + "<![endif]--\x3e";
        break;
      case 16:
        r = x() + "\x3c!--{" + H + "};" + l(p, !0, q) + "--\x3e";
        break;
      case 14:
        r = "\x3c!--[" + H + "]>\x3c!--\x3e";
        break;
      case 15:
        r = "\x3c!--<![endif]--\x3e";
        break;
      case 7:
        if (f) {
          if (w = oa(f, p, y, v), void 0 !== w && null !== w && "" !== w && (C(w) || A(w))) {
            return -1;
          }
        } else {
          m("onInstruction is void!");
        }
        break;
      case 18:
        r = "</" + H + ">";
        break;
      case 17:
        var za = !0;
      case 1:
        z = p[1], N = 2;
      default:
        z = ra(z), y = z[1], v = z[2], z = z[0], N = p[N], "P" !== k || ha[z] ? k = "" : r = x(), r += "<" + z, y && (r += " id=" + F(y, E, t || d)), v && (r += " class=" + F(v, E, t || d)), t || (ya = t = t || ca[z] ? !0 : !1), !A(N) && ma(N) && (r += u(N)), r = (p = l(p, fa[z], q || ia[z])) ? r + (">" + p) : za ? r + ">" : r + (t ? " />" : ">"), za ? k = "" : t && !p || ea[z] && (!w || "P" !== z) ? k = da[z] ? "" : z : (r += "</" + z + ">", k = ""), ya && (t = !1);
    }
    return r;
  }
  function l(p, y, v) {
    var w = [], q = p[0], x = q === +q ? 2 : 1;
    1 === na(p) || 17 === q ? (q = p[x], x = !A(q) && ma(q) ? x + 1 : x) : x = 11 === q ? 1 : 9 === q || 13 === q || 16 === q ? 2 : Infinity;
    q = -1;
    for (var r; x < p.length; ++x) {
      r = p[x], C(r) ? w[++q] = e([3, r], p, x, !1, v) : A(r) && (r = e(r, p, x, y, v), -1 === r ? --x : w[++q] = r);
    }
    return w.join("");
  }
  function u(p) {
    var y = "", v, w;
    for (v in p) {
      var q = p[v];
      (w = 0 === v.indexOf(g)) && (v = v.substr(g.length));
      "className" === v && (v = "class");
      w && (f ? q = pa(f, v, q, m) : m("onInstruction is void!"));
      if (!(null == q || aa[v] && !1 === q || (y += " " + v, aa[v]))) {
        if ("style" === v && ma(q)) {
          w = void 0;
          var x = q, r = [], ba = -1;
          for (w in x) {
            q = x[w], "0px" === q && (q = 0), r[++ba] = qa(w) + ":" + D("" + q);
          }
          q = r.join(";").substr(1);
          if (!q) {
            continue;
          }
        }
        y += "=" + F(q, E, t || d);
      }
    }
    return y;
  }
  var f = b || null, m = "function" === typeof c ? c : function() {
  };
  b = h || {};
  var d = !0 === b.quotAlways, E = !0 === b.useSingleQuot, g = b.instructionAttrPrefix || ":", k, t = la;
  if (A(a)) {
    return 7 === na(a) && (a = [11, a]), e(a, null, 0, ja || !1, ka || !1);
  }
}
var G = {}, I = G.pa = 1, J = G.ya = 2, K = G.qa = 3, L = G.za = 4, M = G.ha = 5, O = G.ia = 6, P = G.Ja = 7, Q = G.ja = 8, R = G.ra = 9, S = G.Ca = 10, T = G.va = 11, U = G.Aa = 17, ta = G.Ba = 18, ua = G.Ka = 33, va = G.La = 34, wa = G.Ma = 35, Aa = G.ka = 49, Ba = G.la = 50, Ca = G.ma = 51, Da = G.na = 52, Ea = G.sa = 65, Fa = G.ta = 66, Ga = G.ua = 67, Ha = G.wa = 81, Ia = G.xa = 83, V = G.Da = 97, Ja = G.Ea = 98, Ka = G.Fa = 99, La = G.Ga = 100, Ma = G.Ha = 101, Na = G.Ia = 102, W = G.Na = 113, 
Oa = G.oa = 114, Pa = G.OBJECT = 129, Qa = G.ga = 130;
function Ra() {
  this.h = U;
  this.string = this.value = void 0;
  this.W = Buffer.alloc ? Buffer.alloc(65536) : new Buffer(65536);
  this.o = 0;
  this.mode = this.key = this.C = this.R = void 0;
  this.stack = [];
  this.l = W;
  this.m = this.N = 0;
  this.aa = {2:new Buffer(2), 3:new Buffer(3), 4:new Buffer(4)};
  this.offset = -1;
}
function Sa(a) {
  for (var b = Object.keys(G), c = 0, h = b.length; c < h; c++) {
    var e = b[c];
    if (G[e] === a) {
      return e;
    }
  }
  return a && "0x" + a.toString(16);
}
n = Ra.prototype;
n.O = function(a) {
  throw a;
};
function X(a, b, c) {
  a.h = ta;
  a.O(Error("Unexpected " + JSON.stringify(String.fromCharCode(b[c])) + " at position " + c + " in state " + Sa(a.h)));
}
function Y(a, b) {
  65536 <= a.o && (a.string += a.W.toString("utf8"), a.o = 0);
  a.W[a.o++] = b;
}
function Ta(a, b, c, h) {
  var e = b.length;
  "number" === typeof c && (e = "number" === typeof h ? 0 > h ? b.length - c + h : h - c : b.length - c);
  0 > e && (e = 0);
  65536 < a.o + e && (a.string += a.W.toString("utf8", 0, a.o), a.o = 0);
  b.copy(a.W, a.o, c, h);
  a.o += e;
}
n.write = function(a) {
  "string" === typeof a && (a = new Buffer(a));
  for (var b, c = 0, h = a.length; c < h; c++) {
    if (this.h === U) {
      if (b = a[c], this.offset++, 123 === b) {
        this.j(I, "{");
      } else if (125 === b) {
        this.j(J, "}");
      } else if (91 === b) {
        this.j(K, "[");
      } else if (93 === b) {
        this.j(L, "]");
      } else if (58 === b) {
        this.j(M, ":");
      } else if (44 === b) {
        this.j(O, ",");
      } else if (116 === b) {
        this.h = ua;
      } else if (102 === b) {
        this.h = Aa;
      } else if (110 === b) {
        this.h = Ea;
      } else if (34 === b) {
        this.string = "", this.o = 0, this.h = V;
      } else if (45 === b) {
        this.string = "-", this.h = Ha;
      } else if (48 <= b && 64 > b) {
        this.string = String.fromCharCode(b), this.h = Ia;
      } else {
        if (32 !== b && 9 !== b && 10 !== b && 13 !== b) {
          return X(this, a, c);
        }
      }
    } else if (this.h === V) {
      if (b = a[c], 0 < this.N) {
        for (b = 0; b < this.N; b++) {
          this.aa[this.m][this.m - this.N + b] = a[b];
        }
        Ta(this, this.aa[this.m]);
        this.m = this.N = 0;
        c = c + b - 1;
      } else if (0 === this.N && 128 <= b) {
        if (193 >= b || 244 < b) {
          return this.O(Error("Invalid UTF-8 character at position " + c + " in state " + Sa(this.h)));
        }
        194 <= b && 223 >= b && (this.m = 2);
        224 <= b && 239 >= b && (this.m = 3);
        240 <= b && 244 >= b && (this.m = 4);
        if (this.m + c > a.length) {
          for (b = 0; b <= a.length - 1 - c; b++) {
            this.aa[this.m][b] = a[c + b];
          }
          this.N = c + this.m - a.length;
          c = a.length - 1;
        } else {
          Ta(this, a, c, c + this.m), c = c + this.m - 1;
        }
      } else if (34 === b) {
        this.h = U, this.string += this.W.toString("utf8", 0, this.o), this.o = 0, this.j(S, this.string), this.offset += Buffer.byteLength(this.string, "utf8") + 1, this.string = void 0;
      } else if (92 === b) {
        this.h = Ja;
      } else if (32 <= b) {
        Y(this, b);
      } else {
        return X(this, a, c);
      }
    } else if (this.h === Ja) {
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
        this.R = "", this.h = Ka;
      } else {
        return X(this, a, c);
      }
    } else if (this.h === Ka || this.h === La || this.h === Ma || this.h === Na) {
      if (b = a[c], 48 <= b && 64 > b || 64 < b && 70 >= b || 96 < b && 102 >= b) {
        this.R += String.fromCharCode(b), this.h++ === Na && (b = parseInt(this.R, 16), this.R = void 0, void 0 !== this.C && 56320 <= b && 57344 > b ? (Ta(this, new Buffer(String.fromCharCode(this.C, b))), this.C = void 0) : void 0 === this.C && 55296 <= b && 56320 > b ? this.C = b : (void 0 !== this.C && (Ta(this, new Buffer(String.fromCharCode(this.C))), this.C = void 0), Ta(this, new Buffer(String.fromCharCode(b)))), this.h = V);
      } else {
        return X(this, a, c);
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
          this.h = U;
          b = Number(this.string);
          if (isNaN(b)) {
            return X(this, a, c);
          }
          this.string.match(/[0-9]+/) == this.string && b.toString() != this.string ? this.j(S, this.string) : this.j(T, b);
          this.offset += this.string.length - 1;
          this.string = void 0;
          c--;
      }
    } else if (this.h === ua) {
      if (114 === a[c]) {
        this.h = va;
      } else {
        return X(this, a, c);
      }
    } else if (this.h === va) {
      if (117 === a[c]) {
        this.h = wa;
      } else {
        return X(this, a, c);
      }
    } else if (this.h === wa) {
      if (101 === a[c]) {
        this.h = U, this.j(P, !0), this.offset += 3;
      } else {
        return X(this, a, c);
      }
    } else if (this.h === Aa) {
      if (97 === a[c]) {
        this.h = Ba;
      } else {
        return X(this, a, c);
      }
    } else if (this.h === Ba) {
      if (108 === a[c]) {
        this.h = Ca;
      } else {
        return X(this, a, c);
      }
    } else if (this.h === Ca) {
      if (115 === a[c]) {
        this.h = Da;
      } else {
        return X(this, a, c);
      }
    } else if (this.h === Da) {
      if (101 === a[c]) {
        this.h = U, this.j(Q, !1), this.offset += 4;
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
      if (108 === a[c]) {
        this.h = Ga;
      } else {
        return X(this, a, c);
      }
    } else if (this.h === Ga) {
      if (108 === a[c]) {
        this.h = U, this.j(R, null), this.offset += 3;
      } else {
        return X(this, a, c);
      }
    }
  }
};
n.j = function() {
};
function Z(a, b, c) {
  a.h = ta;
  a.O(Error("Unexpected " + Sa(b) + (c ? "(" + JSON.stringify(c) + ")" : "") + " in state " + Sa(a.l)));
}
n.push = function() {
  this.stack.push({value:this.value, key:this.key, mode:this.mode});
};
n.pop = function() {
  var a = this.value, b = this.stack.pop();
  this.value = b.value;
  this.key = b.key;
  this.mode = b.mode;
  this.emit(a);
  this.mode || (this.l = W);
};
n.emit = function() {
  this.mode && (this.l = O);
};
n.j = function(a, b) {
  if (this.l === W) {
    if (a === S || a === T || a === P || a === Q || a === R) {
      this.value && (this.value[this.key] = b), this.emit(b);
    } else if (a === I) {
      this.push(), this.value = this.value ? this.value[this.key] = {} : {}, this.key = void 0, this.l = Oa, this.mode = Pa;
    } else if (a === K) {
      this.push(), this.value = this.value ? this.value[this.key] = [] : [], this.key = 0, this.mode = Qa, this.l = W;
    } else if (a === J) {
      if (this.mode === Pa) {
        this.pop();
      } else {
        return Z(this, a, b);
      }
    } else if (a === L) {
      if (this.mode === Qa) {
        this.pop();
      } else {
        return Z(this, a, b);
      }
    } else {
      return Z(this, a, b);
    }
  } else if (this.l === Oa) {
    if (a === S) {
      this.key = b, this.l = M;
    } else if (a === J) {
      this.pop();
    } else {
      return Z(this, a, b);
    }
  } else if (this.l === M) {
    if (a === M) {
      this.l = W;
    } else {
      return Z(this, a, b);
    }
  } else if (this.l === O) {
    if (a === O) {
      this.mode === Qa ? (this.key++, this.l = W) : this.mode === Pa && (this.l = Oa);
    } else if (a === L && this.mode === Qa || a === J && this.mode === Pa) {
      this.pop();
    } else {
      return Z(this, a, b);
    }
  } else {
    return Z(this, a, b);
  }
};
var Ua = require("stream");
function Va() {
  function a() {
    for (; l.length && !f.paused;) {
      var m = l.shift();
      if (null === m) {
        return f.emit("end");
      }
      f.emit("data", m);
    }
  }
  var b = Wa, c = Xa;
  b = b || function(m) {
    this.queue(m);
  };
  c = c || function() {
    this.queue(null);
  };
  var h = !1, e = !1, l = [], u = !1, f = new Ua();
  f.readable = f.writable = !0;
  f.paused = !1;
  f.da = !0;
  f.write = function(m) {
    b.call(this, m);
    return !f.paused;
  };
  f.queue = f.push = function(m) {
    if (u) {
      return f;
    }
    null === m && (u = !0);
    l.push(m);
    a();
    return f;
  };
  f.on("end", function() {
    f.readable = !1;
    !f.writable && f.da && process.nextTick(function() {
      f.destroy();
    });
  });
  f.end = function(m) {
    if (!h) {
      return h = !0, arguments.length && f.write(m), f.writable = !1, c.call(f), !f.readable && f.da && f.destroy(), f;
    }
  };
  f.destroy = function() {
    if (!e) {
      return h = e = !0, l.length = 0, f.writable = f.readable = !1, f.emit("close"), f;
    }
  };
  f.pause = function() {
    if (!f.paused) {
      return f.paused = !0, f;
    }
  };
  f.resume = function() {
    f.paused && (f.paused = !1, f.emit("resume"));
    a();
    f.paused || f.emit("drain");
    return f;
  };
  return f;
}
const Ya = Buffer.from && Buffer.from !== Uint8Array.from;
module.exports = function(a, b, c, h) {
  const e = new Ra(), l = Va();
  h = h || {};
  l._parser = e;
  e.K = l;
  e.F = e.j;
  e.j = Za;
  e.O = $a;
  e.ba = 0;
  e.fa = [];
  e.v = [];
  e.M = a || null;
  e.Oa = b || null;
  e.X = "function" === typeof c ? c : function() {
  };
  e.Y = !!h.quotAlways;
  e.Z = !!h.useSingleQuot;
  e.$ = h.instructionAttrPrefix || ":";
  e.V = "";
  return l;
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
function Wa(a) {
  "string" === typeof a && (a = Ya ? Buffer.from(a) : new Buffer(a));
  this._parser.write(a);
}
function Xa(a) {
  a && this.write(a);
  43 !== this._parser.ba && this.emit("error", "Invalid html.json");
  this.queue(null);
  this._parser = this._parser.K = null;
}
function $a(a) {
  -1 < a.message.indexOf("at position") && (a.message = "Invalid JSON (" + a.message + ")");
  this.X(a.message);
  this.K.emit("error", a);
}
function Za(a, b) {
  function c() {
    if (g.M) {
      const t = g.v.length ? g.M.call(g.K, g.D, g.v) : g.M.call(g.K, g.D);
      g.D = null;
      g.v.length = 0;
      return t;
    }
    g.O("onInstruction is void!");
    return "";
  }
  function h() {
    if (g.M) {
      g.v.unshift(g.D);
      const t = pa(g.M.bind(g.K), g.T, g.v, g.X);
      g.D = null;
      g.v.length = 0;
      return t;
    }
    g.O("onInstruction is void!");
    return "";
  }
  function e(t) {
    if (null != t) {
      if (aa[g.T]) {
        if (!1 !== t) {
          return " " + g.T;
        }
      } else {
        return " " + g.T + "=" + F(t, g.Z, g.G || g.Y);
      }
    }
    return "";
  }
  function l(t) {
    const p = m.pop();
    d = m.length ? 42 : 43;
    switch(p) {
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
        "" === p ? (k = t ? "" : ">", g.H = "", u()) : B(p) && (k = t ? "" : g.ca || g.G ? " />" : ">", (g.ca || g.G) && !t || ea[p] && (!g.J || "P" !== p) ? g.H = da[p] ? "" : p : (k += "</" + p + ">", g.H = ""), u());
    }
  }
  function u() {
    g.J = g.L = g.G = !1;
    for (let t = 0, p = m.length; t < p; ++t) {
      const y = m[t];
      13 === y || 16 === y ? g.J = !0 : B(y) && (t === p - 1 && (g.J = g.J || fa[y]), ia[y] && (g.L = !0), ca[y] && (g.G = !0));
    }
  }
  function f() {
    let t = "";
    g.H && (t = "</" + g.H + ">", g.H = "");
    return t;
  }
  if (a === M || a === O) {
    this.stack.length && this.F(a, b);
  } else {
    var m = this.fa, d = this.ba, E = !1, g = this;
    switch(d) {
      case 39:
        switch(a) {
          case K:
          case I:
            this.F(a, b);
            return;
          case L:
            if (0 === this.stack.length) {
              a = c();
              if (A(a)) {
                ja = this.J;
                ka = this.L;
                la = this.ca || this.G;
                var k = sa(a, this.M, this.X, {quotAlways:this.Y, useSingleQuot:this.Z, instructionAttrPrefix:this.$});
                ja = ka = la = !1;
              } else {
                k = C(a) ? "" + a : "";
              }
              l(!!k);
              break;
            }
          case J:
            1 === this.stack.length && (this.v.push(this.value), this.value = null);
            this.F(a, b);
            return;
          case S:
          case T:
          case P:
          case Q:
          case R:
            this.stack.length ? this.F(a, b) : this.v.push(b);
            return;
          default:
            d = -1;
        }break;
      case 36:
        switch(a) {
          case K:
          case I:
            this.F(a, b);
            return;
          case L:
            if (0 === this.stack.length) {
              k = e(h());
              d = 31;
              break;
            }
          case J:
            1 === this.stack.length && (this.v.push(this.value), this.value = null);
            this.F(a, b);
            return;
          case S:
            if (0 === this.stack.length && !this.D) {
              this.D = b;
              return;
            }
          case T:
          case P:
          case Q:
          case R:
            this.stack.length ? this.F(a, b) : this.v.push(b);
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
                E = B(m[m.length - 1]);
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
          case I:
            a = 30 === d ? 30 : 33 === d ? 33 : -1;
            break;
          case J:
            a = 31 === d ? 39 : 34 === d ? 40 : -1;
            break;
          case S:
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
                E = B(m[m.length - 1]);
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
          case T:
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
                E = B(m[m.length - 1]);
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
          case P:
          case Q:
          case R:
            a = 32 === d ? 32 : -1;
            break;
          default:
            a = -1;
        }switch(a) {
          case 0:
            k = E ? (E = !1, ">") : "";
            d = 38;
            break;
          case 9:
            d = 19;
            m.push(9);
            break;
          case 19:
            k = "<!DOCTYPE " + b + ">";
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
            b = ra(b);
            E = b[1];
            const t = b[2];
            b = b[0];
            "P" !== this.H || ha[b] ? this.H = k = "" : k = f();
            k += "<" + b;
            E && (k += " id=" + F(E, this.Z, this.G || this.Y));
            t && (k += " class=" + F(t, this.Z, this.G || this.Y));
            this.J || (this.J = !!fa[b]);
            this.L || (this.L = !!ia[b]);
            28 === a ? m.push("") : m.push(b);
            u();
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
            this.D = b, b = h();
          case 32:
            k = e(b);
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
            "" !== b && null !== b && (this.V += ";" + qa(this.ea) + ":" + b);
            d = 34;
            break;
          case 40:
            this.V && (k = e(this.V.substr(1)), this.V = "");
            d = 31;
            break;
          case 37:
            l(!0);
            break;
          case 38:
            l(!1);
            break;
          case 18:
            d = 29;
            m.push(18);
            break;
          case 29:
            k = "</" + b + ">";
            d = 37;
            break;
          case 3:
            d = 20;
            m.push(3);
            break;
          case 20:
            k = f() + (g.L ? "" + b : D("" + b));
            d = 37;
            break;
          case 41:
            k = (E ? (E = !1, ">") : "") + f() + (g.L ? "" + b : D("" + b));
            d = 42;
            break;
          case 4:
            k = "<![CDATA[";
            d = 21;
            m.push(4);
            break;
          case 21:
            k = b;
            d = 37;
            break;
          case 8:
            k = "\x3c!--";
            d = 22;
            m.push(8);
            break;
          case 22:
            k = b;
            d = 37;
            break;
          case 13:
            k = f() + "\x3c!--[";
            d = 23;
            m.push(13);
            break;
          case 23:
            k = b + "]>";
            d = 41;
            break;
          case 16:
            k = f() + "\x3c!--{";
            d = 25;
            m.push(16);
            break;
          case 25:
            k = b + "};";
            d = 41;
            break;
          case 14:
            k = "\x3c!--[";
            d = 24;
            m.push(14);
            break;
          case 24:
            k = b + "]>\x3c!--\x3e";
            d = 37;
            break;
          case 15:
            k = "\x3c!--<![endif]--\x3e";
            d = 37;
            m.push(15);
            break;
          case 7:
            d = 26;
            m.push(7);
            break;
          case 26:
            this.D = b;
            d = 39;
            break;
          default:
            d = -1;
        }
    }
    -1 === d ? (this.X("Not html.json format!"), this.K.emit("error", "Not html.json format!")) : (this.ba = d, k && this.K.queue(k));
  }
}
;
