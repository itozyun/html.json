(function(Z, ra, aa, E, J) {
  function D(a) {
    return a === "" + a;
  }
  function F(a) {
    return a === +a;
  }
  function M(a) {
    return !!a && "object" === typeof a;
  }
  function B(a) {
    return !!a && a.constructor === Array;
  }
  function sa(a) {
    function b(m, t) {
      for (var h = [], v = m.length, r = 0, q = -1, z; r < v; ++r) {
        z = m[r], M(z) ? h[++q] = r : t[r] = z;
      }
      return h;
    }
    function c(m, t) {
      var h = [], v = -1, r;
      for (r in m) {
        var q = m[r];
        M(q) ? h[++v] = r : t[r] = q;
      }
      return h;
    }
    var g = 0, d = B(a), e = d ? [] : {}, f = d ? b(a, e) : M(a) ? c(a, e) : null, k, n;
    if (null === f) {
      return a;
    }
    for (a = [f, k = a, n = e]; 0 <= g;) {
      var l = f.shift();
      if (null != l) {
        var p = k[l];
        d = B(p);
        l = n[l] = d ? [] : {};
        d = d ? b(p, l) : c(p, l);
        d.length && (g += 3, a.push(f = d, k = p, n = l));
      } else {
        a.length = g, g -= 3, f = a[g], k = a[g + 1], n = a[g + 2];
      }
    }
    return e;
  }
  function ha(a, b, c) {
    var g = a, d = O(g), e = 0, f = b(a, null, -1, e / 3), k = [-1, a, d];
    if (E !== f && -E !== f) {
      if (0 < g.length - d) {
        do {
          var n = ++k[e], l = g[n + d];
          if (null != l) {
            f = b(l, g, n + d, e / 3 + 1);
            if (E === f) {
              return;
            }
            if (-E !== f) {
              if (-1 >= f) {
                k[e] += f;
              } else if (1 <= f && (k[e] += f), O(l) < l.length) {
                e += 3, k[e] = -1, k[e + 1] = g = l, k[e + 2] = d = O(l);
              } else if (c && g) {
                f = c(l, g, n + d, e / 3 + 1);
                if (E === f) {
                  return;
                }
                -E !== f && (-1 >= f || 1 <= f) && (k[e] += f);
              }
            }
          } else if (k.length = e, e -= 3, g = k[e + 1], d = k[e + 2], c && g) {
            n = k[e] + d;
            f = c(g[n], g, n, e / 3 + 1);
            if (E === f) {
              return;
            }
            -E !== f && (-1 >= f || 1 <= f) && (k[e] += f);
          }
        } while (0 <= e);
      }
      c && c(a, null, -1, 0);
    }
  }
  function P(a, b, c, g, d) {
    if (!!a === a) {
      var e = null;
      this.m = a;
    } else {
      e = a, this.m = e.m;
    }
    this.j = e;
    this.S = c;
    e && (e.h || (e.h = []), a = e.h, 0 <= b && b < a.length ? a.splice(b, 0, this) : a.push(this));
    switch(c) {
      case 1:
      case 17:
        this.M = d || null, b = ba(g), g = b[0];
      case 18:
        this.H = g;
        break;
      case 7:
        this.K = d || null;
      case 3:
      case 4:
      case 8:
      case 9:
      case 13:
      case 14:
      case 16:
        this.D = g;
    }
  }
  function ia(a) {
    return a.m ? ca === a ? a.G ? ta : a.J ? da : ua : ca.j === a ? va : wa : xa;
  }
  function ja(a, b, c) {
    var g = a.h = a.h || [], d = g.length, e = c.length;
    for (b = b < d ? b : d; e;) {
      d = c[--e], 11 === d.S ? d.h && d.h.length && ja(a, b, d.h) : (d.remove(), g.splice(b, 0, d), d.j = a);
    }
  }
  function Q(a) {
    return a.split("&lt;").join("&amp;lt;").split("&gt;").join("&amp;gt;").split("<").join("&lt;").split(">").join("&gt;");
  }
  function T(a) {
    return D(a) || F(a) ? 3 : B(a) ? D(a[0]) ? 1 : F(a[0]) ? a[0] : -1 : -1;
  }
  function ya(a, b, c) {
    var g = b[1];
    b = b.slice(2);
    var d;
    a && a.constructor === aa ? d = b.length ? a.call(c, g, b) : a.call(c, g) : a[g] && (d = b.length ? a[g].apply(c || a, b) : a[g].call(c || a));
    (d = sa(d)) && B(d[0]) && d.unshift(11);
    return d;
  }
  function ka(a, b, c, g, d) {
    var e;
    if (B(c) && D(c[0])) {
      var f = c[0];
      c = c.slice(1);
      a && a.constructor === aa ? e = c.length ? a.call(d, f, c) : a.call(d, f) : a[f] && (e = c.length ? a[f].apply(d || a, c) : a[f].call(d || a));
    } else {
      D(c) && (a && a.constructor === aa ? e = a.call(d, c) : a[c] && (e = a[c].call(d || a)));
    }
    B(e) && (a = ka(a, b, e, g, d), void 0 !== a && (e = a));
    return e;
  }
  function za(a, b, c) {
    a = Aa(a);
    var g;
    ca = a;
    b && (b.h ? b.h.push(a) : b.h = [a]);
    if (B(c)) {
      for (b = 0, g = c.length; b < g; b += 2) {
        var d = c[b], e = c[b + 1];
        if (F(d)) {
          if (d === a.S && !0 === e(a)) {
            break;
          }
        } else if ("*" === d) {
          if (!0 === e(a)) {
            break;
          }
        } else if (D(d) && d === a.H && !0 === e(a)) {
          break;
        }
      }
    } else {
      c(a);
    }
    return a;
  }
  function O(a) {
    var b = a[0], c = T(a);
    return 1 === c || 17 === c ? (b = F(b) ? 2 : 1, a = a[b], !B(a) && M(a) ? b + 1 : b) : 11 === b ? 1 : 9 === b || 13 === b || 16 === b ? 2 : E;
  }
  function la(a) {
    var b = a[0];
    return (a = D(b) ? b : 1 === b || 17 === b ? a[1] : "") ? ba(a)[0] : a;
  }
  function ba(a) {
    var b = a.indexOf("#"), c = a.indexOf("."), g = "", d = "";
    b < c ? (g = a.split(".")[1], a = a.split(".")[0], 0 < b && (d = a.split("#")[1], a = a.split("#")[0])) : c < b && (d = a.split("#")[1], a = a.split("#")[0], 0 < c && (g = a.split(".")[1], a = a.split(".")[0]));
    return [a, d, g];
  }
  function Ba(a) {
    var b = [], c = -1, g;
    for (g in a) {
      var d = a[g];
      "0px" === d && (d = 0);
      for (var e = ++c, f, k = [], n = g.split(""), l = n.length; l;) {
        f = n[--l], "A" <= f && "Z" >= f && (f = "-" + f.toLowerCase()), k[l] = f;
      }
      f = k.join("");
      b[e] = f + ":" + d;
    }
    return b.join(";");
  }
  function Aa(a) {
    var b, c;
    ha(a, function(g, d, e, f) {
      function k(m, t, h) {
        if (b) {
          f < c.length && (c.length = f);
          var v = c[c.length - 1];
          da <= ia(v) ? (v.F = v.F || [], v.F.push([m, t, h]), m = null) : m = new P(v, v.h && v.h.length, m, t, h);
          O(g) < g.length && (c[f] = m);
        } else {
          b = new P(!0, 0, m, t, h), c = [b];
        }
      }
      if (D(g) || F(g)) {
        k(3, g);
      } else {
        d = g[0];
        e = g[1];
        var n = 1, l = d, p;
        switch(d) {
          case 9:
          case 13:
          case 16:
            k(d, e);
            break;
          case 11:
            k(d);
            break;
          case 3:
          case 4:
          case 8:
          case 14:
          case 18:
            k(d, e);
            break;
          case 15:
            k(d);
            break;
          case 7:
            n = [];
            l = 2;
            for (p = g.length; l < p; ++l) {
              n[l - 2] = g[l];
            }
            k(d, e, p - 2 ? n : null);
            break;
          case 1:
          case 17:
            l = e, n = 2;
          default:
            D(l) && k(1 === n ? 1 : d, l, g[n]);
        }
      }
      return E;
    });
    return b;
  }
  function Ca(a, b, c, g, d, e) {
    function f() {
      var h = "";
      t && (h = "</" + t + ">", t = "");
      return h;
    }
    function k(h, v, r) {
      var q = h.match('"'), z = h.match("'"), w = v ? "'" : '"';
      q && z ? h = v ? w + h.split("'").join("\\'") + w : w + h.split('"').join('\\"') + w : q ? h = "'" + h + "'" : z ? h = v ? w + h.split("'").join("\\'") + w : w + h + w : r || h.match(/[^0-9a-z\.\-]/g) || 72 < h.length ? h = w + h + w : "" === h && (h = w + w);
      return h;
    }
    e = e || {};
    var n = !0 === e.useQuoteAlways, l = !0 === e.useSingleQuote, p = e.instructionAttrPrefix || ":", m = [!1, null, !1, !1, !1, !1], t;
    b(function(h, v, r, q, z, w) {
      function U(ma) {
        x[++y] = f() + (V ? ma : Q("" + ma));
      }
      var x = [], y = -1;
      v = m[6 * q];
      var u = m[6 * q + 1];
      r = m[6 * q + 2];
      var V = m[6 * q + 3], ea = !1, K = !1;
      B(h) && (ea = z);
      z = g ? za(h, u, g) : null;
      u = h[0];
      var C = h[1], L = 1, G;
      switch(T(h)) {
        case 9:
          x[++y] = C;
          break;
        case 3:
          B(h) || (C = h);
          U(C);
          break;
        case 4:
          x[++y] = "<![CDATA[" + Q("" + C) + "]]\x3e";
          break;
        case 8:
          x[++y] = "\x3c!--" + Q("" + C) + "--\x3e";
          break;
        case 13:
          x[++y] = f() + "\x3c!--[" + C + "]>";
          break;
        case 16:
          x[++y] = f() + "\x3c!--{" + C + "};";
          break;
        case 14:
          x[++y] = f() + "\x3c!--[" + C + "]>\x3c!--\x3e";
          break;
        case 15:
          x[++y] = f() + "\x3c!--<![endif]--\x3e";
          break;
        case 7:
          if (c) {
            var I = ya(c, h, w);
            if (w = B(I)) {
              return I;
            }
            (D(I) || F(I)) && "" !== I && U(I);
          }
          break;
        case 18:
          x[++y] = "</" + C + ">";
          break;
        case 17:
          I = !0;
        case 1:
          F(u) && (u = C, L = 2);
          u = ba(u);
          C = u[1];
          var na = u[2];
          u = u[0];
          h = h[L];
          "p" !== t || Da[u] ? t = "" : x[++y] = f();
          K = (v = v || !!Ea[u]) || 0 < u.indexOf(":");
          r = r || K || !!Fa[u];
          V = V || Ga[u] && !Ha[u];
          x[++y] = "<" + u;
          C && (x[++y] = " id=" + k(C, l, K || n));
          na && (x[++y] = " class=" + k(na, l, K || n));
          if (!B(h) && M(h)) {
            for (G in h) {
              u = h[G];
              (L = 0 === G.indexOf(p)) && (G = G.substr(p.length));
              "className" === G && (G = "class");
              if (L && c && (u = ka(c, G, u, d, w), w && w.stopped)) {
                return;
              }
              if (null != u && (L = Ia[G], !L || !1 !== u) && (x[++y] = " " + G, !L && !0 !== u)) {
                if ("style" === G && M(u)) {
                  if (u = Q(Ba(u)), !u) {
                    continue;
                  }
                } else {
                  u = Q("" + u);
                }
                x[++y] = "=" + k(u, l, K || n);
              }
            }
          }
          !K || ea || I ? x[++y] = ">" : x[++y] = " />";
      }
      m[6 * q + 6] = v;
      m[6 * q + 7] = z;
      m[6 * q + 8] = r;
      m[6 * q + 9] = V;
      m[6 * q + 10] = ea;
      m[6 * q + 11] = K;
      -1 !== y && fa(a, x.join(""));
    }, function(h, v, r, q, z) {
      r = [];
      var w = -1, U = m[6 * q + 8], x = m[6 * q + 10], y = m[6 * q + 11];
      6 * q + 6 < m.length && (m.length = 6 * q + 6);
      switch(T(h)) {
        case 13:
          r[++w] = f() + "<![endif]--\x3e";
          break;
        case 16:
          r[++w] = f() + "--\x3e";
          break;
        case 17:
          t = "";
          break;
        case 1:
          h = la(h), !x && (y || Ja[h] && !Ka[h]) ? t = "" : y && !x || !(U || !La[h] || "p" === h && z && Ma[la(v)]) ? t = h : (r[++w] = "</" + h + ">", t = "");
      }
      -1 !== w && fa(a, r.join(""));
      0 === q && (a = null);
    });
    b = null;
  }
  function W() {
    this.l = void 0;
    this.G = [];
    this.h = 17;
    this.j = void 0;
    this.P = X(65536);
    this.o = 0;
    this.A = this.B = this.F = this.unicode = void 0;
    this.state = 113;
    this.m = this.J = 0;
    this.T = {2:X(2), 3:X(3), 4:X(4)};
  }
  function H(a, b) {
    65536 <= a.o && (a.j += a.P.toString("utf8"), a.o = 0);
    a.P[a.o++] = b;
  }
  function R(a, b, c, g) {
    var d = b.length;
    F(c) && (d = F(g) ? 0 > g ? b.length - c + g : g - c : b.length - c);
    0 > d && (d = 0);
    65536 < a.o + d && (a.j += a.P.toString("utf8", 0, a.o), a.o = 0);
    b.copy(a.P, a.o, c, g);
    a.o += d;
  }
  function oa(a) {
    a.G.push({l:a.l, B:a.B, A:a.A});
  }
  function Y(a) {
    var b = a.l, c = a.G.pop();
    a.l = c.l;
    a.B = c.B;
    a.A = c.A;
    a.emit(b);
    a.A || (a.state = 113);
  }
  function Na() {
    this.readable = !1;
    this.writable || process.nextTick(() => this.destroy());
  }
  function fa(a, b) {
    a.ba || (null === b && (a.ba = !0), a.V.push(b), pa(a));
  }
  function pa(a) {
    for (var b = a.V; b.length && !a.paused;) {
      var c = b.shift();
      null === c ? a.emit("end") : a.emit("data", c);
    }
  }
  function Oa(a) {
    const b = new W(), c = new Pa();
    c.I = b;
    b.W = c;
    b.R = 0;
    b.K = [];
    b.Z = !1;
    b.N = b.v;
    b.v = Qa;
    b.onError = Ra;
    b.$ = [];
    b.X = [];
    b.ha = a;
    b.Y = Sa;
    c.on("resume", Ta);
    c.stop = Ua;
    c.restart = Va;
    return c;
  }
  function Ua() {
    this.stopped || (this.stopped = !0, this.pause());
  }
  function Va() {
    this.stopped && (this.stopped = !1, this.resume());
  }
  function Wa(a) {
    if (F(a) || !!a === a) {
      a = "" + a;
    }
    D(a) && (a = S(a));
    this.I.write(a);
  }
  function Xa(a) {
    null != a && this.write(a);
    this.I.U && this.I.Y(!0);
    fa(this, null);
    this.I = this.I.W = null;
  }
  function Ta() {
    var a = this.I, b = a.X;
    if (b) {
      for (; b.length && !this.stopped;) {
        a.v(b.shift(), b.shift());
      }
    }
  }
  function Ra() {
  }
  function Sa(a, b) {
    const c = this.$;
    let g = c.length - 1, d = c[g];
    b || (b = d[0], c.pop(), --g, d = c[g] || [null, 0]);
    this.da && this.da(b, d[0], d[1], g + 1, a);
    return this.R = c.length - +this.Z ? 36 : 37;
  }
  function Qa(a, b) {
    function c(k) {
      d.S = k;
    }
    function g(k, n) {
      function l(t, h) {
        const v = d.$;
        var r = d.W, q = v.length - 1;
        -1 === q && 9 !== t[0] && 11 !== t[0] && (v.push([[11], -1]), q = 0, d.Z = !0);
        const z = v[q] || [null, -1];
        q = d.ga(t, z[0], z[1] + 1, q + 1, h, n, r);
        (r = r.stopped) ? -1 !== q && (d.X.push(a, b), h || (d.H = !0)) : (d.K.length = 0, d.M = null, ++z[1], h ? (v.push([t, -1]), d.R = e = 36) : e = d.Y(n, t));
        return r;
      }
      const p = d.S, m = d.D;
      switch(p) {
        case 11:
          return l([p], k);
        case 17:
        case 1:
          if (d.M) {
            return l([p, m, d.M], k);
          }
        case 9:
        case 13:
        case 16:
          return l([p, m], k);
        case 3:
        case 4:
        case 8:
        case 14:
        case 18:
          return l([p, m], !1);
        case 15:
          return l([p], !1);
        case 7:
          return l([p].concat(d.K), !1);
      }
      return !1;
    }
    const d = this;
    let e = this.R, f;
    if (this.W.stopped) {
      this.X.push(a, b);
    } else {
      if (!this.H || 6 !== a && 4 !== a || (this.H = !1, !g(!1, 4 === a))) {
        if (!this.U || 6 !== a && 4 !== a || (this.U = !1, e = this.Y(4 === a)), 5 === a || 6 === a) {
          this.G.length && this.N(a, b);
        } else {
          switch(e) {
            case 26:
              switch(a) {
                case 4:
                  if (0 === this.G.length) {
                    this.H = !0;
                    break;
                  }
                case 2:
                  1 === this.G.length && (this.K.push(this.l), this.l = null);
                case 3:
                case 1:
                  this.N(a, b);
                  break;
                default:
                  this.G.length ? this.N(a, b) : this.K.push(b);
              }break;
            case 34:
              switch(a) {
                case 2:
                  1 === this.G.length && (this.M = this.l, this.l = null, e = 35);
                default:
                  this.N(a, b);
              }break;
            default:
              switch(a) {
                case 3:
                  switch(e) {
                    case 30:
                    case 35:
                      f = 32;
                      break;
                    case 0:
                    case 36:
                      f = 0;
                      break;
                    default:
                      f = -1;
                  }break;
                case 4:
                  f = 30 === e || 35 === e ? 34 : 36 === e ? 35 : 31 === e ? 31 : -1;
                  break;
                case 1:
                  f = 30 === e ? 30 : -1;
                  break;
                case 10:
                  switch(e) {
                    case 32:
                    case 27:
                      f = 27;
                      break;
                    case 28:
                      f = 28;
                      break;
                    case 29:
                      f = 29;
                      break;
                    case 19:
                      f = 19;
                      break;
                    case 20:
                      f = 20;
                      break;
                    case 21:
                      f = 21;
                      break;
                    case 22:
                      f = 22;
                      break;
                    case 23:
                      f = 23;
                      break;
                    case 25:
                      f = 25;
                      break;
                    case 24:
                      f = 24;
                      break;
                    case 30:
                    case 35:
                      f = 33;
                      break;
                    case 36:
                      f = 38;
                      break;
                    default:
                      f = -1;
                  }break;
                case 11:
                  switch(e) {
                    case 32:
                      f = b;
                      break;
                    case 20:
                      f = 20;
                      break;
                    case 30:
                    case 35:
                      f = 33;
                      break;
                    case 36:
                      f = 38;
                      break;
                    case 21:
                      f = 21;
                      break;
                    case 22:
                      f = 22;
                      break;
                    default:
                      f = -1;
                  }break;
                default:
                  f = -1;
              }switch(f) {
                case 32:
                  if (g(!0)) {
                    return;
                  }
                case 0:
                  e = 32;
                  break;
                case 9:
                  e = 19;
                  c(9);
                  break;
                case 19:
                  e = 35;
                  d.D = b;
                  break;
                case 11:
                  e = 35;
                  c(11);
                  break;
                case 1:
                  e = 27;
                  break;
                case 17:
                  e = 28;
                  c(17);
                  break;
                case 27:
                  c(1);
                case 28:
                  e = 30;
                  d.D = b;
                  break;
                case 30:
                  e = 34;
                  this.M = {};
                  this.N(a, b);
                  break;
                case 35:
                  this.U = !0;
                  break;
                case 31:
                  this.H = !0;
                  break;
                case 34:
                  this.H = !0;
                  break;
                case 18:
                  e = 29;
                  c(18);
                  break;
                case 29:
                  e = 31;
                  d.D = b;
                  break;
                case 3:
                  e = 20;
                  c(3);
                  break;
                case 20:
                  e = 31;
                  d.D = b;
                  break;
                case 33:
                  if (g(!0)) {
                    return;
                  }
                case 38:
                  this.H = !0;
                  e = 36;
                  c(3);
                  d.D = b;
                  break;
                case 4:
                  e = 21;
                  c(4);
                  break;
                case 21:
                  e = 31;
                  d.D = b;
                  break;
                case 8:
                  e = 22;
                  c(8);
                  break;
                case 22:
                  e = 31;
                  d.D = b;
                  break;
                case 13:
                  e = 23;
                  c(13);
                  break;
                case 23:
                  e = 35;
                  d.D = b;
                  break;
                case 16:
                  e = 25;
                  c(16);
                  break;
                case 25:
                  e = 35;
                  d.D = b;
                  break;
                case 14:
                  e = 24;
                  c(14);
                  break;
                case 24:
                  e = 31;
                  d.D = b;
                  break;
                case 15:
                  e = 31;
                  c(15);
                  break;
                case 7:
                  e = 26;
                  c(7);
                  break;
                default:
                  e = -1;
              }
          }
          -1 !== e && (this.R = e);
        }
      }
    }
  }
  function A(a, b, c, g) {
    const d = Oa(c);
    Ca(d, function(e, f) {
      var k, n, l;
      d.I.ga = function(p, m, t, h, v, r, q) {
        if (k) {
          if (qa(k, n, l, q, e, f)) {
            return;
          }
          k = null;
        }
        p = e(p, m, t, h, v, q);
        h = B(p);
        if (!q.stopped) {
          if (h) {
            n = t - m.length;
            l = r;
            if (11 === p[0]) {
              for (t = 1, h = p.length; t < h; ++t) {
                m.push(p[t]);
              }
            } else {
              m.push(p);
            }
            qa(m, n, r, q, e, f) && (k = m);
          }
          return -1;
        }
      };
      d.I.da = f;
    }, a, b, c, g);
    return d;
  }
  function qa(a, b, c, g, d, e) {
    var f;
    ha(a, function(k, n, l, p) {
      if (k !== a && !k.h) {
        p = d(k, n, (1 === p ? b : 0) + l, p, O(k) < k.length, g);
        var m = B(p);
        if (g.stopped) {
          return f = !0, E;
        }
        if (m) {
          return 11 === p[0] ? (p.shift(), p.unshift(l, 1), n.splice.apply(n, p)) : n.splice(l, 1, p), -1;
        }
        if (D(k) || F(k)) {
          k = [3, k], n.splice(l, 1, k);
        }
        k.h = !0;
      }
    }, function(k, n, l, p) {
      k === a || k.left || -1 === [9, 11, 1, 17, 13, 16].indexOf(T(k)) || (e(k, n, (1 === p ? b : 0) + l, p, (1 !== p || c) && l === n.length - 1), k.left = !0);
    });
    return f;
  }
  var ca = null;
  P.prototype.remove = function() {
    if (da <= ia(this)) {
      return this.G = !0, null;
    }
    var a = this.j ? this.j.h.indexOf(this) : -1;
    0 <= a && (this.j.h.splice(a, 1), this.j = null);
  };
  P.prototype.wrap = function(a, b, c) {
    if (this.m) {
      this.o = this.o || [], this.o.push([a, b, c]), a = null;
    } else if (this.j) {
      var g = this.j, d = this.j ? this.j.h.indexOf(this) : -1;
      a = new P(g, d, a, b, c);
    } else {
      a = null;
    }
    ja(a, 0, [this]);
    return a;
  };
  var xa = 0, wa = 1, ua = 2, da = 3, ta = 4, va = 5, Ea = {xml:!0, svg:!0, math:!0}, Ia = {async:!0, autofocus:!0, checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, draggable:!0, hidden:!0, ismap:!0, loop:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, novalidate:!0, nowrap:!0, readonly:!0, required:!0, reversed:!0, scoped:!0, selected:!0}, Ja = {area:!0, base:!0, col:!0, embed:!0, br:!0, hr:!0, img:!0, input:!0, link:!0, meta:!0, source:!0, track:!0, wbr:!0}, Ga = {script:!0, style:!0, 
  textarea:!0, title:!0}, Ha = {textarea:!0, title:!0}, La = {html:!0, head:!0, body:!0, p:!0, dt:!0, dd:!0, li:!0, option:!0, tbody:!0, thead:!0, tfoot:!0, td:!0, th:!0, tr:!0, rp:!0, rt:!0, optgroup:!0, caption:!0, colgroup:!0}, Ka = {source:!0}, Fa = {a:!0}, Ma = {audio:!0, del:!0, ins:!0, map:!0, noscript:!0, video:!0}, Da = {h1:!0, h2:!0, h3:!0, h4:!0, h5:!0, h6:!0, address:!0, blockquote:!0, div:!0, dl:!0, fieldset:!0, form:!0, hr:!0, legend:!0, ul:!0, noscript:!0, ol:!0, p:!0, pre:!0, article:!0, 
  aside:!0, canvas:!0, details:!0, figcaption:!0, figure:!0, footer:!0, header:!0, hgroup:!0, main:!0, nav:!0, section:!0, table:!1};
  const S = J.from ? J.from : (...a) => new J(...a), X = J.alloc ? J.alloc : (...a) => new J(...a), N = ra.fromCharCode;
  W.prototype.write = function(a) {
    D(a) && (a = S(a));
    for (var b, c = 0, g = a.length; c < g; c++) {
      switch(this.h) {
        case 17:
          b = a[c];
          switch(b) {
            case 123:
              this.v(1, "{");
              break;
            case 125:
              this.v(2, "}");
              break;
            case 91:
              this.v(3, "[");
              break;
            case 93:
              this.v(4, "]");
              break;
            case 58:
              this.v(5, ":");
              break;
            case 44:
              this.v(6, ",");
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
              this.o = 0;
              this.h = 97;
              break;
            case 45:
              this.j = "-";
              this.h = 81;
              break;
            default:
              if (48 <= b && 64 > b) {
                this.j = N(b), this.h = 83;
              } else if (32 !== b && 9 !== b && 10 !== b && 13 !== b) {
                this.h = 18;
                return;
              }
          }break;
        case 97:
          b = a[c];
          if (0 < this.J) {
            for (b = 0; b < this.J; b++) {
              this.T[this.m][this.m - this.J + b] = a[b];
            }
            R(this, this.T[this.m]);
            this.m = this.J = 0;
            c = c + b - 1;
          } else if (0 === this.J && 128 <= b) {
            if (194 <= b && 223 >= b && (this.m = 2), 224 <= b && 239 >= b && (this.m = 3), 240 <= b && 244 >= b && (this.m = 4), this.m + c > a.length) {
              for (b = 0; b <= a.length - 1 - c; b++) {
                this.T[this.m][b] = a[c + b];
              }
              this.J = c + this.m - a.length;
              c = a.length - 1;
            } else {
              R(this, a, c, c + this.m), c = c + this.m - 1;
            }
          } else if (34 === b) {
            this.h = 17, this.j += this.P.toString("utf8", 0, this.o), this.o = 0, this.v(10, this.j), J.byteLength(this.j, "utf8"), this.j = void 0;
          } else if (92 === b) {
            this.h = 98;
          } else if (32 <= b) {
            H(this, b);
          } else {
            this.h = 18;
            return;
          }
          break;
        case 98:
          b = a[c];
          switch(b) {
            case 34:
              H(this, b);
              this.h = 97;
              break;
            case 92:
              H(this, 92);
              this.h = 97;
              break;
            case 47:
              H(this, 47);
              this.h = 97;
              break;
            case 98:
              H(this, 8);
              this.h = 97;
              break;
            case 102:
              H(this, 12);
              this.h = 97;
              break;
            case 110:
              H(this, 10);
              this.h = 97;
              break;
            case 114:
              H(this, 13);
              this.h = 97;
              break;
            case 116:
              H(this, 9);
              this.h = 97;
              break;
            case 117:
              this.unicode = "";
              this.h = 99;
              break;
            default:
              this.h = 18;
              return;
          }break;
        case 99:
        case 100:
        case 101:
        case 102:
          b = a[c];
          if (48 <= b && 64 > b || 64 < b && 70 >= b || 96 < b && 102 >= b) {
            this.unicode += N(b), 102 === this.h++ && (b = parseInt(this.unicode, 16), this.unicode = void 0, void 0 !== this.F && 56320 <= b && 57344 > b ? (R(this, S(N(this.F, b))), this.F = void 0) : void 0 === this.F && 55296 <= b && 56320 > b ? this.F = b : (void 0 !== this.F && (R(this, S(N(this.F))), this.F = void 0), R(this, S(N(b)))), this.h = 97);
          } else {
            this.h = 18;
            return;
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
              this.j += N(b);
              this.h = 83;
              break;
            default:
              this.h = 17;
              b = Number(this.j);
              if (isNaN(b)) {
                this.h = 18;
                return;
              }
              this.j.match(/[0-9]+/) == this.j && b + "" != this.j ? this.v(10, this.j) : this.v(11, b);
              this.j = void 0;
              c--;
          }break;
        case 33:
          if (114 === a[c]) {
            this.h = 34;
          } else {
            this.h = 18;
            return;
          }
          break;
        case 34:
          if (117 === a[c]) {
            this.h = 35;
          } else {
            this.h = 18;
            return;
          }
          break;
        case 35:
          if (101 === a[c]) {
            this.h = 17, this.v(7, !0);
          } else {
            this.h = 18;
            return;
          }
          break;
        case 49:
          if (97 === a[c]) {
            this.h = 50;
          } else {
            this.h = 18;
            return;
          }
          break;
        case 50:
          if (108 === a[c]) {
            this.h = 51;
          } else {
            this.h = 18;
            return;
          }
          break;
        case 51:
          if (115 === a[c]) {
            this.h = 52;
          } else {
            this.h = 18;
            return;
          }
          break;
        case 52:
          if (101 === a[c]) {
            this.h = 17, this.v(8, !1);
          } else {
            this.h = 18;
            return;
          }
          break;
        case 65:
          if (117 === a[c]) {
            this.h = 66;
          } else {
            this.h = 18;
            return;
          }
          break;
        case 66:
          if (108 === a[c]) {
            this.h = 67;
          } else {
            this.h = 18;
            return;
          }
          break;
        case 67:
          if (108 === a[c]) {
            this.h = 17, this.v(9, null);
          } else {
            this.h = 18;
            return;
          }
      }
    }
  };
  W.prototype.emit = function() {
    this.A && (this.state = 6);
  };
  W.prototype.v = function(a, b) {
    switch(this.state) {
      case 113:
        switch(a) {
          case 10:
          case 11:
          case 7:
          case 8:
          case 9:
            this.l && (this.l[this.B] = b);
            this.emit(b);
            break;
          case 1:
            oa(this);
            this.l = this.l ? this.l[this.B] = {} : {};
            this.B = void 0;
            this.state = 114;
            this.A = 129;
            break;
          case 3:
            oa(this);
            this.l = this.l ? this.l[this.B] = [] : [];
            this.B = 0;
            this.A = 130;
            this.state = 113;
            break;
          case 2:
            129 === this.A ? Y(this) : this.h = 18;
            break;
          case 4:
            130 === this.A ? Y(this) : this.h = 18;
            break;
          default:
            this.h = 18;
        }break;
      case 114:
        10 === a ? (this.B = b, this.state = 5) : 2 === a ? Y(this) : this.h = 18;
        break;
      case 5:
        5 === a ? this.state = 113 : this.h = 18;
        break;
      case 6:
        6 === a ? 130 === this.A ? (this.B++, this.state = 113) : 129 === this.A && (this.state = 114) : 4 === a && 130 === this.A || 2 === a && 129 === this.A ? Y(this) : this.h = 18;
        break;
      default:
        this.h = 18;
    }
  };
  Z = Z("stream");
  var Pa = class extends Z.Stream {
    constructor() {
      super();
      this.fa = Wa;
      this.ea = Xa;
      this.destroyed = this.paused = this.ba = this.ended = !1;
      this.readable = this.writable = !0;
      this.V = [];
      this.on("end", Na);
    }
    write(a) {
      this.fa(a);
      return !this.paused;
    }
    aa() {
      if (this.paused) {
        this.on("resume", this.aa);
      } else {
        this.writable && (this.writable = !1, this.ea(), this.readable || this.destroy());
      }
    }
    end(a) {
      this.ended || (this.ended = !0, arguments.length && this.write(a), this.aa());
    }
    destroy() {
      this.destroyed || (this.ended = this.destroyed = !0, this.V.length = 0, this.writable = this.readable = !1, this.emit("close"));
    }
    pause() {
      this.paused || (this.paused = !0, this.emit("pause"));
    }
    resume() {
      this.paused && (this.paused = !1, this.emit("resume"));
      pa(this);
      this.paused || this.emit("drain");
    }
  };
  A.module = {};
  module.exports = A;
  A.DOCUMENT_NODE = 9;
  A.DOCUMENT_FRAGMENT_NODE = 11;
  A.ELEMENT_NODE = 1;
  A.TEXT_NODE = 3;
  A.CDATA_SECTION = 4;
  A.PROCESSING_INSTRUCTION = 7;
  A.COMMENT_NODE = 8;
  A.COND_CMT_HIDE_LOWER = 13;
  A.COND_CMT_SHOW_LOWER_START = 14;
  A.COND_CMT_SHOW_LOWER_END = 15;
  A.NETSCAPE4_COND_CMT_HIDE_LOWER = 16;
  A.ELEMENT_START_TAG = 17;
  A.ELEMENT_END_TAG = 18;
})(require, String, Function, Infinity, Buffer);

