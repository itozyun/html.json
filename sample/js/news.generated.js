(function(X, F, G, Y, U, Z) {
  function ka(a, b, c) {
    var h = a, g = M(h), m = 0, e = b(a, null, -1, m / 3), f = [-1, a, g];
    if (Infinity !== e && -Infinity !== e) {
      if (0 < h.length - g) {
        do {
          var d = ++f[m], k = h[d + g];
          if (void 0 === k) {
            if (f.length = m, m -= 3, h = f[m + 1], g = f[m + 2], c && h) {
              d = f[m] + g;
              e = c(h[d], h, d, m / 3 + 1);
              if (Infinity === e) {
                return;
              }
              -Infinity !== e && (-1 >= e || 1 <= e) && (f[m] += e);
            }
          } else {
            e = b(k, h, d + g, m / 3 + 1);
            if (Infinity === e) {
              return;
            }
            if (-Infinity !== e) {
              if (-1 >= e) {
                f[m] += e;
              } else if (1 <= e && (f[m] += e), M(k) < k.length) {
                m += 3, f[m] = -1, f[m + 1] = h = k, f[m + 2] = g = M(k);
              } else if (c && h) {
                e = c(k, h, d + g, m / 3 + 1);
                if (Infinity === e) {
                  return;
                }
                -Infinity !== e && (-1 >= e || 1 <= e) && (f[m] += e);
              }
            }
          }
        } while (0 <= m);
      }
      c && c(a, null, -1, 0);
    }
  }
  function B(a) {
    return !(!a || a.pop !== [].pop);
  }
  function V(a) {
    return !(!a || "object" !== typeof a);
  }
  function E(a) {
    return "" + a === a;
  }
  function N(a) {
    if (E(a) || a === +a) {
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
  function la(a, b, c) {
    var h = b[1];
    b = b.slice(2);
    var g;
    "function" === typeof a ? g = b.length ? a.call(c, h, b) : a.call(c, h) : a[h] && (g = b.length ? a[h].apply(c || a, b) : a[h].call(c || a));
    g && B(g[0]) && g.unshift(11);
    return g;
  }
  function aa(a, b, c, h, g) {
    var m;
    if (B(c) && E(c[0])) {
      var e = c[0];
      c = c.slice(1);
      "function" === typeof a ? m = c.length ? a.call(g, e, c) : a.call(g, e) : a[e] && (m = c.length ? a[e].apply(g || a, c) : a[e].call(g || a));
    } else {
      E(c) ? "function" === typeof a ? m = a.call(g, c) : a[c] && (m = a[c].call(g || a)) : h && h("Invalid InstructionAttr value! [" + b + "=" + c + "]");
    }
    B(m) && (a = aa(a, b, m, h, g), void 0 !== a && (m = a));
    return m;
  }
  function M(a) {
    var b = a[0], c = N(a);
    return 1 === c || 17 === c ? (b = b === +b ? 2 : 1, a = a[b], !B(a) && V(a) ? b + 1 : b) : 11 === b ? 1 : 9 === b || 13 === b || 16 === b ? 2 : Infinity;
  }
  function ba(a) {
    var b = a.indexOf("#"), c = a.indexOf("."), h = "", g = "";
    b < c ? (h = a.split(".")[1], a = a.split(".")[0], 0 < b && (g = a.split("#")[1], a = a.split("#")[0])) : c < b && (g = a.split("#")[1], a = a.split("#")[0], 0 < c && (h = a.split(".")[1], a = a.split(".")[0]));
    return [a, g, h];
  }
  function I(a) {
    return a.split("&lt;").join("&amp;lt;").split("&gt;").join("&amp;gt;").split("<").join("&lt;").split(">").join("&gt;");
  }
  function ma(a) {
    var b = [], c = -1, h;
    for (h in a) {
      var g = a[h];
      "0px" === g && (g = 0);
      for (var m = ++c, e, f = [], d = h.split(""), k = d.length; k;) {
        e = d[--k], "A" <= e && "Z" >= e && (e = "-" + e.toLowerCase()), f[k] = e;
      }
      e = f.join("");
      b[m] = e + ":" + I("" + g);
    }
    return b.join(";").substr(1);
  }
  function na(a, b, c) {
    function h() {
      var l = "";
      n && (l = "</" + n.toLowerCase() + ">", n = "");
      return l;
    }
    function g(l, r, v) {
      l = I("" + l);
      var t = l.match('"'), x = l.match("'"), u = r ? "'" : '"';
      t && x ? l = r ? u + l.split("'").join("\\'") + u : u + l.split('"').join('\\"') + u : t ? l = "'" + l + "'" : x ? l = r ? u + l.split("'").join("\\'") + u : u + l + u : v || l.match(/[^0-9a-z\.\-]/g) || 72 < l.length ? l = u + l + u : "" === l && (l = u + u);
      return l;
    }
    var m = {}, e = !0 === m.quotAlways, f = !0 === m.useSingleQuot, d = m.instructionAttrPrefix || ":", k = [!1, null, !1, !1, !1], n;
    b(function(l, r, v, t, x, u) {
      function J(ca) {
        p[++w] = h() + (O ? ca : I("" + ca));
      }
      var p = [], w = -1;
      r = !1;
      B(l) && (r = x);
      x = k[5 * t];
      v = k[5 * t + 2];
      var O = k[5 * t + 3], q = l[0], z = l[1], P = 1, A;
      switch(N(l)) {
        case 9:
          p[++w] = z;
          break;
        case 3:
          B(l) || (z = l);
          J(z);
          break;
        case 4:
          p[++w] = "<![CDATA[" + I("" + z) + "]]\x3e";
          break;
        case 8:
          p[++w] = "\x3c!--" + I("" + z) + "--\x3e";
          break;
        case 13:
          p[++w] = h() + "\x3c!--[" + z + "]>";
          break;
        case 16:
          p[++w] = h() + "\x3c!--{" + z + "};";
          break;
        case 14:
          p[++w] = "\x3c!--[" + z + "]>\x3c!--\x3e";
          break;
        case 15:
          p[++w] = "\x3c!--<![endif]--\x3e";
          break;
        case 7:
          if (c) {
            var C = la(c, l, u);
            u = B(C);
            if (null != C && "" !== C) {
              if (E(C) || C === +C) {
                J(C);
              } else if (u) {
                return C;
              }
            }
          }
          break;
        case 18:
          p[++w] = "</" + z + ">";
          break;
        case 17:
          C = !0;
        case 1:
          q === +q && (q = z, P = 2);
          q = ba(q);
          z = q[1];
          var da = q[2];
          q = q[0];
          l = l[P];
          "P" !== n || oa[q] ? n = "" : p[++w] = h();
          x = x || (x || pa[q] ? !0 : 0 < q.indexOf(":"));
          v = v || !!qa[q];
          O = O || !!ra[q];
          p[++w] = "<" + (x ? q : q.toLowerCase());
          z && (p[++w] = " id=" + g(z, f, x || e));
          da && (p[++w] = " class=" + g(da, f, x || e));
          if (!B(l) && V(l)) {
            for (A in l) {
              q = l[A];
              (P = 0 === A.indexOf(d)) && (A = A.substr(d.length));
              "className" === A && (A = "class");
              if (P && c && (q = aa(c, A, q, void 0, u), u && u.stopped)) {
                return;
              }
              null == q || ea[A] && !1 === q || (p[++w] = " " + A, ea[A] || !0 === q) || "style" === A && V(q) && (q = ma(q), !q) || (p[++w] = "=" + g(q, f, x || e));
            }
          }
          !x || r || C ? p[++w] = ">" : p[++w] = " />";
      }
      k[5 * t + 5] = x;
      k[5 * t + 6] = null;
      k[5 * t + 7] = v;
      k[5 * t + 8] = O;
      k[5 * t + 9] = r;
      -1 !== w && W(a, p.join(""));
    }, function(l, r, v, t) {
      r = [];
      v = -1;
      var x = k[5 * t + 5], u = k[5 * t + 7], J = k[5 * t + 9], p = l[0];
      5 * t + 5 < k.length && (k.length = 5 * t + 5);
      switch(N(l)) {
        case 13:
          r[++v] = h() + "<![endif]--\x3e";
          break;
        case 16:
          r[++v] = h() + "--\x3e";
          break;
        case 17:
          n = "";
          break;
        case 1:
          p === +p && (p = l[1]), p = ba(p)[0], !J && sa[p] ? n = "" : x && !J || ta[p] && (!u || "P" !== p) ? n = p : (r[++v] = "</" + (x ? p : p.toLowerCase()) + ">", n = "");
      }
      -1 !== v && W(a, r.join(""));
      0 === t && (a = null);
    });
    b = null;
  }
  function Q() {
    this.l = void 0;
    this.J = [];
    this.h = 17;
    this.j = void 0;
    this.T = R(65536);
    this.D = 0;
    this.o = this.F = this.H = this.unicode = void 0;
    this.state = 113;
    this.v = this.N = 0;
    this.Z = {2:R(2), 3:R(3), 4:R(4)};
  }
  function S(a) {
    for (var b = Object.keys(fa), c = 0, h = b.length; c < h; c++) {
      var g = b[c];
      if (fa[g] === a) {
        return g;
      }
    }
    return a && "0x" + a.toString(16);
  }
  function y(a, b, c) {
    a.h = 18;
    a.onError(Error("Unexpected " + Y.stringify(F.fromCharCode(b[c])) + " at position " + c + " in state " + S(a.h)));
  }
  function D(a, b) {
    65536 <= a.D && (a.j += a.T.toString("utf8"), a.D = 0);
    a.T[a.D++] = b;
  }
  function K(a, b, c, h) {
    var g = b.length;
    "number" === typeof c && (g = "number" === typeof h ? 0 > h ? b.length - c + h : h - c : b.length - c);
    0 > g && (g = 0);
    65536 < a.D + g && (a.j += a.T.toString("utf8", 0, a.D), a.D = 0);
    b.copy(a.T, a.D, c, h);
    a.D += g;
  }
  function H(a, b, c) {
    a.h = 18;
    a.onError(Error("Unexpected " + S(b) + (c ? "(" + Y.stringify(c) + ")" : "") + " in state " + S(a.state)));
  }
  function ha(a) {
    a.J.push({l:a.l, F:a.F, o:a.o});
  }
  function T(a) {
    var b = a.l, c = a.J.pop();
    a.l = c.l;
    a.F = c.F;
    a.o = c.o;
    a.emit(b);
    a.o || (a.state = 113);
  }
  function ua() {
    this.readable = !1;
    this.writable || process.nextTick(() => this.destroy());
  }
  function W(a, b) {
    a.ea || (null === b && (a.ea = !0), a.$.push(b), ia(a));
  }
  function ia(a) {
    for (var b = a.$; b.length && !a.paused;) {
      var c = b.shift();
      null === c ? a.emit("end") : a.emit("data", c);
    }
  }
  function va() {
    const a = new Q(), b = new wa();
    b.K = a;
    a.V = b;
    a.aa = 0;
    a.M = [];
    a.R = a.m;
    a.m = xa;
    a.onError = ya;
    a.Y = [];
    a.ba = [];
    a.X = void 0;
    b.on("resume", za);
    b.stop = Aa;
    b.restart = Ba;
    return b;
  }
  function Aa() {
    this.stopped || (this.stopped = !0, this.pause());
  }
  function Ba() {
    this.stopped && (this.stopped = !1, this.resume());
  }
  function Ca(a) {
    if (a === +a || a === !!a) {
      a = "" + a;
    }
    E(a) && (a = L(a));
    this.K.write(a);
  }
  function Da(a) {
    null != a && this.write(a);
    37 !== this.K.aa && this.emit("error", "Invalid html.json");
    W(this, null);
    this.K = this.K.V = null;
  }
  function za() {
    var a = this.K, b = a.ba;
    if (b) {
      for (; b.length && !this.stopped;) {
        a.m(b.shift(), b.shift());
      }
    }
  }
  function ya(a) {
    -1 < a.message.indexOf("at position") && (a.message = "Invalid JSON (" + a.message + ")");
    this.X && this.X(a.message);
    this.V.emit("error", a);
  }
  function xa(a, b) {
    function c(k) {
      f.ia = k;
    }
    function h(k) {
      const n = f.ia, l = f.G;
      switch(n) {
        case 11:
          return g([n], k);
        case 17:
        case 1:
          if (f.W) {
            return g([n, l, f.W], k);
          }
        case 9:
        case 13:
        case 16:
          return g([n, l], k);
        case 3:
        case 4:
        case 8:
        case 14:
        case 18:
          return g([n, l], !1);
        case 15:
          return g([n], !1);
        case 7:
          return g([n].concat(f.M), !1);
      }
      return !1;
    }
    function g(k, n) {
      const l = f.Y;
      var r = f.V, v = l.length - 1;
      -1 === v && 9 !== k[0] && 11 !== k[0] && (l.push([[11], -1]), v = 0, f.ha = !0);
      const t = l[v] || [null, -1];
      v = f.la(k, t[0], t[1] + 1, v + 1, n, r);
      (r = r.stopped) ? -1 !== v && f.ba.push(a, b) : (f.M.length = 0, f.W = null, ++t[1], n ? l.push([k, -1]) : m(k));
      return r;
    }
    function m(k) {
      const n = f.Y;
      let l = n.length - 1, r = n[l];
      k || (k = r[0], n.pop(), --l, r = n[l] || [null, 0]);
      f.ga && f.ga(k, r[0], r[1], l + 1);
    }
    function e() {
      return f.Y.length - (f.ha ? 1 : 0) ? 36 : 37;
    }
    const f = this;
    var d = this.aa;
    if (this.V.stopped) {
      this.ba.push(a, b);
    } else if (5 === a || 6 === a) {
      this.J.length && this.R(a, b);
    } else {
      switch(d) {
        case 26:
          switch(a) {
            case 4:
              if (0 === this.J.length) {
                if (0 === this.M.length) {
                  d = -1;
                  break;
                }
                if (h(!1)) {
                  return;
                }
                d = e();
                break;
              }
            case 2:
              1 === this.J.length && (this.M.push(this.l), this.l = null);
            case 3:
            case 1:
              this.R(a, b);
              break;
            default:
              this.J.length ? this.R(a, b) : (0 !== this.M.length || E(b) || (d = -1), this.M.push(b));
          }break;
        case 34:
          switch(a) {
            case 2:
              1 === this.J.length && (this.W = this.l, this.l = null, d = 35);
            default:
              this.R(a, b);
          }break;
        default:
          switch(a) {
            case 3:
              switch(d) {
                case 30:
                case 35:
                  d = 32;
                  break;
                case 0:
                case 36:
                  d = 0;
                  break;
                default:
                  d = -1;
              }break;
            case 4:
              d = 30 === d || 35 === d ? 34 : 36 === d ? 35 : 31 === d ? 31 : -1;
              break;
            case 1:
              d = 30 === d ? 30 : -1;
              break;
            case 10:
              switch(d) {
                case 32:
                case 27:
                  d = 27;
                  break;
                case 28:
                  d = 28;
                  break;
                case 29:
                  d = 29;
                  break;
                case 19:
                  d = 19;
                  break;
                case 20:
                  d = 20;
                  break;
                case 21:
                  d = 21;
                  break;
                case 22:
                  d = 22;
                  break;
                case 23:
                  d = 23;
                  break;
                case 25:
                  d = 25;
                  break;
                case 24:
                  d = 24;
                  break;
                case 30:
                case 35:
                  d = 33;
                  break;
                case 36:
                  d = 38;
                  break;
                default:
                  d = -1;
              }break;
            case 11:
              switch(d) {
                case 32:
                  d = b;
                  break;
                case 20:
                  d = 20;
                  break;
                case 30:
                case 35:
                  d = 33;
                  break;
                case 36:
                  d = 38;
                  break;
                case 21:
                  d = 21;
                  break;
                case 22:
                  d = 22;
                  break;
                default:
                  d = -1;
              }break;
            default:
              d = -1;
          }switch(d) {
            case 32:
              if (h(!0)) {
                return;
              }
            case 0:
              d = 32;
              break;
            case 9:
              d = 19;
              c(9);
              break;
            case 19:
              d = 35;
              f.G = b;
              break;
            case 11:
              d = 35;
              c(11);
              break;
            case 1:
              d = 27;
              break;
            case 17:
              d = 28;
              c(17);
              break;
            case 27:
              c(1);
            case 28:
              d = 30;
              f.G = b;
              break;
            case 30:
              d = 34;
              this.W = {};
              this.R(a, b);
              break;
            case 35:
              m();
              d = e();
              break;
            case 31:
              if (h(!1)) {
                return;
              }
              d = e();
              break;
            case 34:
              if (h(!1)) {
                return;
              }
              d = e();
              break;
            case 18:
              d = 29;
              c(18);
              break;
            case 29:
              d = 31;
              f.G = b;
              break;
            case 3:
              d = 20;
              c(3);
              break;
            case 20:
              d = 31;
              f.G = b;
              break;
            case 33:
              if (h(!0)) {
                return;
              }
            case 38:
              d = 36;
              g([3, b], !1);
              break;
            case 4:
              d = 21;
              c(4);
              break;
            case 21:
              d = 31;
              f.G = b;
              break;
            case 8:
              d = 22;
              c(8);
              break;
            case 22:
              d = 31;
              f.G = b;
              break;
            case 13:
              d = 23;
              c(13);
              break;
            case 23:
              d = 35;
              f.G = b;
              break;
            case 16:
              d = 25;
              c(16);
              break;
            case 25:
              d = 35;
              f.G = b;
              break;
            case 14:
              d = 24;
              c(14);
              break;
            case 24:
              d = 31;
              f.G = b;
              break;
            case 15:
              d = 31;
              c(15);
              break;
            case 7:
              d = 26;
              c(7);
              break;
            default:
              d = -1;
          }
      }
      -1 === d ? (this.X && this.X("Not html.json format!"), this.V.emit("error", "Not html.json format!")) : this.aa = d;
    }
  }
  function Ea(a) {
    const b = va();
    na(b, function(c, h) {
      var g, m;
      b.K.la = function(e, f, d, k, n, l) {
        if (g) {
          if (ja(g, m, l, c, h)) {
            return;
          }
          g = null;
        }
        e = c(e, f, d, k, n, l);
        k = B(e);
        if (l.stopped) {
          if (null != e) {
            throw "ProcessingInstruction \u306e\u30cf\u30f3\u30c9\u30e9\u3067 htmlJson \u306e\u8fd4\u5374\u3068 stop \u306e\u4e21\u65b9\u3092\u884c\u3046\u3053\u3068\u306f\u51fa\u6765\u307e\u305b\u3093!";
          }
        } else {
          if (k) {
            m = d - f.length;
            if (11 === e[0]) {
              for (d = 1, k = e.length; d < k; ++d) {
                f.push(e[d]);
              }
            } else {
              f.push(e);
            }
            ja(f, m, l, c, h) && (g = f);
          }
          return -1;
        }
      };
      b.K.ga = h;
    }, a);
    return b;
  }
  function ja(a, b, c, h, g) {
    var m;
    ka(a, function(e, f, d, k) {
      if (e !== a && !e.h) {
        k = h(e, f, (1 === k ? b : 0) + d, k, M(e) < e.length, c);
        var n = B(k);
        if (c.stopped) {
          if (n) {
            throw "ProcessingInstruction \u306e\u30cf\u30f3\u30c9\u30e9\u3067 htmlJson \u306e\u8fd4\u5374\u3068 stop \u306e\u4e21\u65b9\u3092\u884c\u3046\u3053\u3068\u306f\u51fa\u6765\u307e\u305b\u3093!";
          }
          m = !0;
          return Infinity;
        }
        if (n) {
          return 11 === k[0] ? (k.shift(), k.unshift(d, 1), f.splice.apply(f, k)) : f.splice(d, 1, k), -1;
        }
        if (E(e) || e === +e) {
          e = [3, e], f.splice(d, 1, e);
        }
        e.h = !0;
      }
    }, function(e, f, d, k) {
      e === a || e.left || -1 === [9, 11, 1, 17, 13, 16].indexOf(N(e)) || (g(e, f, (1 === k ? b : 0) + d, k), e.left = !0);
    });
    return m;
  }
  var pa = {xml:!0, svg:!0, math:!0}, ea = {async:!0, autofocus:!0, checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, draggable:!0, hidden:!0, ismap:!0, loop:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, novalidate:!0, nowrap:!0, readonly:!0, required:!0, reversed:!0, scoped:!0, selected:!0}, sa = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, COMMAND:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, 
  WBR:!0, area:!0, base:!0, basefont:!0, br:!0, bgsound:!0, col:!0, command:!0, frame:!0, hr:!0, img:!0, input:!0, isindex:!0, keygen:!0, link:!0, meta:!0, param:!0, source:!0, track:!0, embed:!0, wbr:!0}, ta = {HTML:!0, HEAD:!0, BODY:!0, P:!0, DT:!0, DD:!0, LI:!0, OPTION:!0, TBODY:!0, THEAD:!0, TFOOT:!0, TD:!0, TH:!0, TR:!0, RB:!0, RBC:!0, RP:!0, RT:!0, RTC:!0, OPTGROUP:!0, CAPTION:!0, COLGROUP:!0}, qa = {A:!0, AUDIO:!0, DEL:!0, INS:!0, MAP:!0, NOSCRIPT:!0, VIDEO:!0}, oa = {H1:!0, H2:!0, H3:!0, 
  H4:!0, H5:!0, H6:!0, ADDRESS:!0, BLOCKQUOTE:!0, DIV:!0, DL:!0, FIELDSET:!0, FORM:!0, HR:!0, LEGEND:!0, MENU:!0, NOSCRIPT:!0, OL:!0, P:!0, PRE:!0, UL:!0, CENTER:!0, DIR:!0, NOFRAMES:!0, MARQUEE:!0}, ra = {SCRIPT:!0, STYLE:!0, TEXTAREA:!0, TITLE:!0, PLAINTEXT:!0, XMP:!0, script:!0, style:!0, textarea:!0, title:!0, plaintext:!0, xmp:!0};
  const L = G.from ? G.from : (...a) => new G(...a), R = G.alloc ? G.alloc : (...a) => new G(...a);
  var fa = {va:1, Ea:2, wa:3, Fa:4, na:5, oa:6, Pa:7, pa:8, xa:9, Ia:10, Ba:11, Ga:17, Ha:18, Qa:33, Ra:34, Sa:35, qa:49, ra:50, sa:51, ta:52, ya:65, za:66, Aa:67, Ca:81, Da:83, Ja:97, Ka:98, La:99, Ma:100, Na:101, Oa:102, Ta:113, ua:114, OBJECT:129, ma:130};
  Q.prototype.write = function(a) {
    "string" === typeof a && (a = L(a));
    for (var b, c = 0, h = a.length; c < h; c++) {
      switch(this.h) {
        case 17:
          b = a[c];
          switch(b) {
            case 123:
              this.m(1, "{");
              break;
            case 125:
              this.m(2, "}");
              break;
            case 91:
              this.m(3, "[");
              break;
            case 93:
              this.m(4, "]");
              break;
            case 58:
              this.m(5, ":");
              break;
            case 44:
              this.m(6, ",");
              break;
            case 116:
              this.h = 33;
              break;
            case 102:
              this.h = 49;
              break;
            case 110:
              this.h = 65;
              break;
            case 34:
              this.j = "";
              this.D = 0;
              this.h = 97;
              break;
            case 45:
              this.j = "-";
              this.h = 81;
              break;
            default:
              if (48 <= b && 64 > b) {
                this.j = F.fromCharCode(b), this.h = 83;
              } else if (32 !== b && 9 !== b && 10 !== b && 13 !== b) {
                return y(this, a, c);
              }
          }break;
        case 97:
          b = a[c];
          if (0 < this.N) {
            for (b = 0; b < this.N; b++) {
              this.Z[this.v][this.v - this.N + b] = a[b];
            }
            K(this, this.Z[this.v]);
            this.v = this.N = 0;
            c = c + b - 1;
          } else if (0 === this.N && 128 <= b) {
            if (193 >= b || 244 < b) {
              return this.onError(Error("Invalid UTF-8 character at position " + c + " in state " + S(this.h)));
            }
            194 <= b && 223 >= b && (this.v = 2);
            224 <= b && 239 >= b && (this.v = 3);
            240 <= b && 244 >= b && (this.v = 4);
            if (this.v + c > a.length) {
              for (b = 0; b <= a.length - 1 - c; b++) {
                this.Z[this.v][b] = a[c + b];
              }
              this.N = c + this.v - a.length;
              c = a.length - 1;
            } else {
              K(this, a, c, c + this.v), c = c + this.v - 1;
            }
          } else if (34 === b) {
            this.h = 17, this.j += this.T.toString("utf8", 0, this.D), this.D = 0, this.m(10, this.j), G.byteLength(this.j, "utf8"), this.j = void 0;
          } else if (92 === b) {
            this.h = 98;
          } else if (32 <= b) {
            D(this, b);
          } else {
            return y(this, a, c);
          }
          break;
        case 98:
          b = a[c];
          switch(b) {
            case 34:
              D(this, b);
              this.h = 97;
              break;
            case 92:
              D(this, 92);
              this.h = 97;
              break;
            case 47:
              D(this, 47);
              this.h = 97;
              break;
            case 98:
              D(this, 8);
              this.h = 97;
              break;
            case 102:
              D(this, 12);
              this.h = 97;
              break;
            case 110:
              D(this, 10);
              this.h = 97;
              break;
            case 114:
              D(this, 13);
              this.h = 97;
              break;
            case 116:
              D(this, 9);
              this.h = 97;
              break;
            case 117:
              this.unicode = "";
              this.h = 99;
              break;
            default:
              return y(this, a, c);
          }break;
        case 99:
        case 100:
        case 101:
        case 102:
          b = a[c];
          if (48 <= b && 64 > b || 64 < b && 70 >= b || 96 < b && 102 >= b) {
            this.unicode += F.fromCharCode(b), 102 === this.h++ && (b = parseInt(this.unicode, 16), this.unicode = void 0, void 0 !== this.H && 56320 <= b && 57344 > b ? (K(this, L(F.fromCharCode(this.H, b))), this.H = void 0) : void 0 === this.H && 55296 <= b && 56320 > b ? this.H = b : (void 0 !== this.H && (K(this, L(F.fromCharCode(this.H))), this.H = void 0), K(this, L(F.fromCharCode(b)))), this.h = 97);
          } else {
            return y(this, a, c);
          }
          break;
        case 81:
        case 83:
          b = a[c];
          switch(b) {
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
              this.j += F.fromCharCode(b);
              this.h = 83;
              break;
            default:
              this.h = 17;
              b = Number(this.j);
              if (isNaN(b)) {
                return y(this, a, c);
              }
              this.j.match(/[0-9]+/) == this.j && b.toString() != this.j ? this.m(10, this.j) : this.m(11, b);
              this.j = void 0;
              c--;
          }break;
        case 33:
          if (114 === a[c]) {
            this.h = 34;
          } else {
            return y(this, a, c);
          }
          break;
        case 34:
          if (117 === a[c]) {
            this.h = 35;
          } else {
            return y(this, a, c);
          }
          break;
        case 35:
          if (101 === a[c]) {
            this.h = 17, this.m(7, !0);
          } else {
            return y(this, a, c);
          }
          break;
        case 49:
          if (97 === a[c]) {
            this.h = 50;
          } else {
            return y(this, a, c);
          }
          break;
        case 50:
          if (108 === a[c]) {
            this.h = 51;
          } else {
            return y(this, a, c);
          }
          break;
        case 51:
          if (115 === a[c]) {
            this.h = 52;
          } else {
            return y(this, a, c);
          }
          break;
        case 52:
          if (101 === a[c]) {
            this.h = 17, this.m(8, !1);
          } else {
            return y(this, a, c);
          }
          break;
        case 65:
          if (117 === a[c]) {
            this.h = 66;
          } else {
            return y(this, a, c);
          }
          break;
        case 66:
          if (108 === a[c]) {
            this.h = 67;
          } else {
            return y(this, a, c);
          }
          break;
        case 67:
          if (108 === a[c]) {
            this.h = 17, this.m(9, null);
          } else {
            return y(this, a, c);
          }
      }
    }
  };
  Q.prototype.emit = function() {
    this.o && (this.state = 6);
  };
  Q.prototype.m = function(a, b) {
    switch(this.state) {
      case 113:
        switch(a) {
          case 10:
          case 11:
          case 7:
          case 8:
          case 9:
            this.l && (this.l[this.F] = b);
            this.emit(b);
            break;
          case 1:
            ha(this);
            this.l = this.l ? this.l[this.F] = {} : {};
            this.F = void 0;
            this.state = 114;
            this.o = 129;
            break;
          case 3:
            ha(this);
            this.l = this.l ? this.l[this.F] = [] : [];
            this.F = 0;
            this.o = 130;
            this.state = 113;
            break;
          case 2:
            if (129 === this.o) {
              T(this);
            } else {
              return H(this, a, b);
            }
            break;
          case 4:
            if (130 === this.o) {
              T(this);
            } else {
              return H(this, a, b);
            }
            break;
          default:
            return H(this, a, b);
        }break;
      case 114:
        if (10 === a) {
          this.F = b, this.state = 5;
        } else if (2 === a) {
          T(this);
        } else {
          return H(this, a, b);
        }
        break;
      case 5:
        if (5 === a) {
          this.state = 113;
        } else {
          return H(this, a, b);
        }
        break;
      case 6:
        if (6 === a) {
          130 === this.o ? (this.F++, this.state = 113) : 129 === this.o && (this.state = 114);
        } else if (4 === a && 130 === this.o || 2 === a && 129 === this.o) {
          T(this);
        } else {
          return H(this, a, b);
        }
        break;
      default:
        return H(this, a, b);
    }
  };
  Z = X("stream");
  var wa = class extends Z.Stream {
    constructor() {
      super();
      this.fa = "json2html";
      this.ka = Ca;
      this.ja = Da;
      this.destroyed = this.paused = this.ea = this.ended = !1;
      this.readable = this.writable = !0;
      this.$ = [];
      this.on("end", ua);
    }
    write(a) {
      this.ka.call(this, a);
      return !this.paused;
    }
    da() {
      if (this.paused) {
        this.on("resume", this.da);
      } else {
        this.writable && (this.writable = !1, this.ja.call(this), this.readable || this.destroy());
      }
    }
    end(a) {
      this.ended || (this.ended = !0, arguments.length && this.write(a), this.da());
    }
    destroy() {
      this.destroyed || (this.ended = this.destroyed = !0, this.$.length = 0, this.writable = this.readable = !1, this.emit("close"));
    }
    pause() {
      this.paused || (this.paused = !0, console.log("[Through: " + this.fa + "] pause()"), this.emit("pause"));
    }
    resume() {
      this.paused && (this.paused = !1, console.log("[Through: " + this.fa + "] resume()"), this.emit("resume"));
      ia(this);
      this.paused || this.emit("drain");
    }
  };
  const Fa = new (X("rss-parser"))();
  module.exports = {news:function() {
    const a = U.now();
    let b, c, h;
    Fa.parseURL("http://www.jcp.or.jp/akahata/index.rdf").then(g => {
      b = g.items;
      c && (h = U.now() - a, c.restart(), c = null);
    });
    return Ea({time:function() {
      if (b) {
        return "\ud83d\udd8a " + b.length + " Articles, \u231b" + (U.now() - a) / 1E3 + "s" + (h ? "(" + h / 1E3 + "s)" : "");
      }
      c = this;
      c.stop();
    }, news:function() {
      for (var g = [11], m = b.length, e = 0, f; e < m; ++e) {
        f = b[e], g.push(["H3", ["A", {href:f.link}, "\ud83d\udd8a " + f.title.substr(0, 50)]]);
      }
      return g;
    }});
  }};
})(require, String, Buffer, JSON, Date, void 0);

