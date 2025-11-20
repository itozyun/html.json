(function(Z, ra, aa, E, J) {
  function C(a) {
    return a === "" + a;
  }
  function F(a) {
    return a === +a;
  }
  function S(a) {
    return !!a && "object" === typeof a;
  }
  function A(a) {
    return !!a && a.constructor === Array;
  }
  function sa(a) {
    function b(c) {
      var g = c, f;
      if (A(c)) {
        g = [];
        var e = 0;
        for (f = c.length; e < f; ++e) {
          g[e] = b(c[e]);
        }
      } else if (S(c)) {
        for (e in g = {}, c) {
          g[e] = b(c[e]);
        }
      }
      return g;
    }
    return b(a);
  }
  function ha(a, b, c) {
    var g = a, f = N(g), e = 0, d = b(a, null, -1, e / 3), h = [-1, a, f];
    if (E !== d && -E !== d) {
      if (0 < g.length - f) {
        do {
          var m = ++h[e], l = g[m + f];
          if (null != l) {
            d = b(l, g, m + f, e / 3 + 1);
            if (E === d) {
              return;
            }
            if (-E !== d) {
              if (-1 >= d) {
                h[e] += d;
              } else if (1 <= d && (h[e] += d), N(l) < l.length) {
                e += 3, h[e] = -1, h[e + 1] = g = l, h[e + 2] = f = N(l);
              } else if (c && g) {
                d = c(l, g, m + f, e / 3 + 1);
                if (E === d) {
                  return;
                }
                -E !== d && (-1 >= d || 1 <= d) && (h[e] += d);
              }
            }
          } else if (h.length = e, e -= 3, g = h[e + 1], f = h[e + 2], c && g) {
            m = h[e] + f;
            d = c(g[m], g, m, e / 3 + 1);
            if (E === d) {
              return;
            }
            -E !== d && (-1 >= d || 1 <= d) && (h[e] += d);
          }
        } while (0 <= e);
      }
      c && c(a, null, -1, 0);
    }
  }
  function O(a, b, c, g, f) {
    if (!!a === a) {
      var e = null;
      this.m = a;
    } else {
      e = a, this.m = e.m;
    }
    this.j = e;
    this.T = c;
    e && (e.h || (e.h = []), a = e.h, 0 <= b && b < a.length ? a.splice(b, 0, this) : a.push(this));
    switch(c) {
      case 1:
      case 17:
        this.N = f || null, b = ba(g), g = b[0];
      case 18:
        this.I = g;
        break;
      case 7:
        this.M = f || null;
      case 3:
      case 4:
      case 8:
      case 9:
      case 13:
      case 14:
      case 16:
        this.F = g;
    }
  }
  function ia(a) {
    return a.m ? ca === a ? a.H ? ta : a.K ? da : ua : ca.j === a ? va : wa : xa;
  }
  function ja(a, b, c) {
    var g = a.h = a.h || [], f = g.length, e = c.length;
    for (b = b < f ? b : f; e;) {
      f = c[--e], 11 === f.T ? f.h && f.h.length && ja(a, b, f.h) : (f.remove(), g.splice(b, 0, f), f.j = a);
    }
  }
  function P(a) {
    return a.split("&lt;").join("&amp;lt;").split("&gt;").join("&amp;gt;").split("<").join("&lt;").split(">").join("&gt;");
  }
  function T(a) {
    return C(a) || F(a) ? 3 : A(a) ? C(a[0]) ? 1 : F(a[0]) ? a[0] : -1 : -1;
  }
  function ya(a, b, c) {
    var g = b[1];
    b = b.slice(2);
    var f;
    a && a.constructor === aa ? f = b.length ? a.call(c, g, b) : a.call(c, g) : a[g] && (f = b.length ? a[g].apply(c || a, b) : a[g].call(c || a));
    (f = sa(f)) && A(f[0]) && f.unshift(11);
    return f;
  }
  function ka(a, b, c, g, f) {
    var e;
    if (A(c) && C(c[0])) {
      var d = c[0];
      c = c.slice(1);
      a && a.constructor === aa ? e = c.length ? a.call(f, d, c) : a.call(f, d) : a[d] && (e = c.length ? a[d].apply(f || a, c) : a[d].call(f || a));
    } else {
      C(c) && (a && a.constructor === aa ? e = a.call(f, c) : a[c] && (e = a[c].call(f || a)));
    }
    A(e) && (a = ka(a, b, e, g, f), void 0 !== a && (e = a));
    return e;
  }
  function za(a, b, c) {
    a = Aa(a);
    var g;
    ca = a;
    b && (b.h ? b.h.push(a) : b.h = [a]);
    if (A(c)) {
      for (b = 0, g = c.length; b < g; b += 2) {
        var f = c[b], e = c[b + 1];
        if (F(f)) {
          if (f === a.T && !0 === e(a)) {
            break;
          }
        } else if ("*" === f) {
          if (!0 === e(a)) {
            break;
          }
        } else if (C(f) && f === a.I && !0 === e(a)) {
          break;
        }
      }
    } else {
      c(a);
    }
    return a;
  }
  function N(a) {
    var b = a[0], c = T(a);
    return 1 === c || 17 === c ? (b = F(b) ? 2 : 1, a = a[b], !A(a) && S(a) ? b + 1 : b) : 11 === b ? 1 : 9 === b || 13 === b || 16 === b ? 2 : E;
  }
  function la(a) {
    var b = a[0];
    return (a = C(b) ? b : 1 === b || 17 === b ? a[1] : "") ? ba(a)[0] : a;
  }
  function ba(a) {
    var b = a.indexOf("#"), c = a.indexOf("."), g = "", f = "";
    b < c ? (g = a.split(".")[1], a = a.split(".")[0], 0 < b && (f = a.split("#")[1], a = a.split("#")[0])) : c < b && (f = a.split("#")[1], a = a.split("#")[0], 0 < c && (g = a.split(".")[1], a = a.split(".")[0]));
    return [a, f, g];
  }
  function Ba(a) {
    var b = [], c = -1, g;
    for (g in a) {
      var f = a[g];
      "0px" === f && (f = 0);
      for (var e = ++c, d, h = [], m = g.split(""), l = m.length; l;) {
        d = m[--l], "A" <= d && "Z" >= d && (d = "-" + d.toLowerCase()), h[l] = d;
      }
      d = h.join("");
      b[e] = d + ":" + f;
    }
    return b.join(";");
  }
  function Aa(a) {
    var b, c;
    ha(a, function(g, f, e, d) {
      function h(p, t, k) {
        if (b) {
          d < c.length && (c.length = d);
          var u = c[c.length - 1];
          da <= ia(u) ? (u.G = u.G || [], u.G.push([p, t, k]), p = null) : p = new O(u, u.h && u.h.length, p, t, k);
          N(g) < g.length && (c[d] = p);
        } else {
          b = new O(!0, 0, p, t, k), c = [b];
        }
      }
      if (C(g) || F(g)) {
        h(3, g);
      } else {
        f = g[0];
        e = g[1];
        var m = 1, l = f, n;
        switch(f) {
          case 9:
          case 13:
          case 16:
            h(f, e);
            break;
          case 11:
            h(f);
            break;
          case 3:
          case 4:
          case 8:
          case 14:
          case 18:
            h(f, e);
            break;
          case 15:
            h(f);
            break;
          case 7:
            m = [];
            l = 2;
            for (n = g.length; l < n; ++l) {
              m[l - 2] = g[l];
            }
            h(f, e, n - 2 ? m : null);
            break;
          case 1:
          case 17:
            l = e, m = 2;
          default:
            C(l) && h(1 === m ? 1 : f, l, g[m]);
        }
      }
      return E;
    });
    return b;
  }
  function Ca(a, b, c, g, f, e) {
    function d() {
      var k = "";
      t && (k = "</" + t + ">", t = "");
      return k;
    }
    function h(k, u, y) {
      var q = k.match('"'), D = k.match("'"), v = u ? "'" : '"';
      q && D ? k = u ? v + k.split("'").join("\\'") + v : v + k.split('"').join('\\"') + v : q ? k = "'" + k + "'" : D ? k = u ? v + k.split("'").join("\\'") + v : v + k + v : y || k.match(/[^0-9a-z\.\-]/g) || 72 < k.length ? k = v + k + v : "" === k && (k = v + v);
      return k;
    }
    e = e || {};
    var m = !0 === e.useQuoteAlways, l = !0 === e.useSingleQuote, n = e.instructionAttrPrefix || ":", p = [!1, null, !1, !1, !1, !1], t;
    b(function(k, u, y, q, D, v) {
      function U(ma) {
        w[++x] = d() + (V ? ma : P("" + ma));
      }
      var w = [], x = -1;
      u = p[6 * q];
      var r = p[6 * q + 1];
      y = p[6 * q + 2];
      var V = p[6 * q + 3], ea = !1, K = !1;
      A(k) && (ea = D);
      D = g ? za(k, r, g) : null;
      r = k[0];
      var B = k[1], L = 1, G;
      switch(T(k)) {
        case 9:
          w[++x] = B;
          break;
        case 3:
          A(k) || (B = k);
          U(B);
          break;
        case 4:
          w[++x] = "<![CDATA[" + P("" + B) + "]]\x3e";
          break;
        case 8:
          w[++x] = "\x3c!--" + P("" + B) + "--\x3e";
          break;
        case 13:
          w[++x] = d() + "\x3c!--[" + B + "]>";
          break;
        case 16:
          w[++x] = d() + "\x3c!--{" + B + "};";
          break;
        case 14:
          w[++x] = d() + "\x3c!--[" + B + "]>\x3c!--\x3e";
          break;
        case 15:
          w[++x] = d() + "\x3c!--<![endif]--\x3e";
          break;
        case 7:
          if (c) {
            var I = ya(c, k, v);
            if (v = A(I)) {
              return I;
            }
            (C(I) || F(I)) && "" !== I && U(I);
          }
          break;
        case 18:
          w[++x] = "</" + B + ">";
          break;
        case 17:
          I = !0;
        case 1:
          F(r) && (r = B, L = 2);
          r = ba(r);
          B = r[1];
          var na = r[2];
          r = r[0];
          k = k[L];
          "p" !== t || Da[r] ? t = "" : w[++x] = d();
          K = (u = u || !!Ea[r]) || 0 < r.indexOf(":");
          y = y || K || !!Fa[r];
          V = V || Ga[r] && !Ha[r];
          w[++x] = "<" + r;
          B && (w[++x] = " id=" + h(B, l, K || m));
          na && (w[++x] = " class=" + h(na, l, K || m));
          if (!A(k) && S(k)) {
            for (G in k) {
              r = k[G];
              (L = 0 === G.indexOf(n)) && (G = G.substr(n.length));
              "className" === G && (G = "class");
              if (L && c && (r = ka(c, G, r, f, v), v && v.stopped)) {
                return;
              }
              if (null != r && (L = Ia[G], !L || !1 !== r) && (w[++x] = " " + G, !L && !0 !== r)) {
                if ("style" === G && S(r)) {
                  if (r = P(Ba(r)), !r) {
                    continue;
                  }
                } else {
                  r = P("" + r);
                }
                w[++x] = "=" + h(r, l, K || m);
              }
            }
          }
          !K || ea || I ? w[++x] = ">" : w[++x] = " />";
      }
      p[6 * q + 6] = u;
      p[6 * q + 7] = D;
      p[6 * q + 8] = y;
      p[6 * q + 9] = V;
      p[6 * q + 10] = ea;
      p[6 * q + 11] = K;
      -1 !== x && fa(a, w.join(""));
    }, function(k, u, y, q, D) {
      y = [];
      var v = -1, U = p[6 * q + 8], w = p[6 * q + 10], x = p[6 * q + 11];
      6 * q + 6 < p.length && (p.length = 6 * q + 6);
      switch(T(k)) {
        case 13:
          y[++v] = d() + "<![endif]--\x3e";
          break;
        case 16:
          y[++v] = d() + "--\x3e";
          break;
        case 17:
          t = "";
          break;
        case 1:
          k = la(k), w || !x && !Ja[k] ? x && !w || !(U || !Ka[k] || "p" === k && D && La[la(u)]) ? t = k : (y[++v] = "</" + k + ">", t = "") : t = "";
      }
      -1 !== v && fa(a, y.join(""));
      0 === q && (a = null);
    });
    b = null;
  }
  function W() {
    this.l = void 0;
    this.H = [];
    this.h = 17;
    this.j = void 0;
    this.S = X(65536);
    this.o = 0;
    this.B = this.D = this.G = this.unicode = void 0;
    this.state = 113;
    this.m = this.K = 0;
    this.V = {2:X(2), 3:X(3), 4:X(4)};
  }
  function H(a, b) {
    65536 <= a.o && (a.j += a.S.toString("utf8"), a.o = 0);
    a.S[a.o++] = b;
  }
  function Q(a, b, c, g) {
    var f = b.length;
    F(c) && (f = F(g) ? 0 > g ? b.length - c + g : g - c : b.length - c);
    0 > f && (f = 0);
    65536 < a.o + f && (a.j += a.S.toString("utf8", 0, a.o), a.o = 0);
    b.copy(a.S, a.o, c, g);
    a.o += f;
  }
  function oa(a) {
    a.H.push({l:a.l, D:a.D, B:a.B});
  }
  function Y(a) {
    var b = a.l, c = a.H.pop();
    a.l = c.l;
    a.D = c.D;
    a.B = c.B;
    a.emit(b);
    a.B || (a.state = 113);
  }
  function Ma() {
    this.readable = !1;
    this.writable || process.nextTick(() => this.destroy());
  }
  function fa(a, b) {
    a.da || (null === b && (a.da = !0), a.X.push(b), pa(a));
  }
  function pa(a) {
    for (var b = a.X; b.length && !a.paused;) {
      var c = b.shift();
      null === c ? a.emit("end") : a.emit("data", c);
    }
  }
  function Na(a) {
    const b = new W(), c = new Oa();
    c.J = b;
    b.Y = c;
    b.aa = 0;
    b.M = [];
    b.R = b.v;
    b.v = Pa;
    b.onError = Qa;
    b.U = [];
    b.Z = [];
    b.ja = a;
    b.$ = Ra;
    c.on("resume", Sa);
    c.stop = Ta;
    c.restart = Ua;
    return c;
  }
  function Ta() {
    this.stopped || (this.stopped = !0, this.pause());
  }
  function Ua() {
    this.stopped && (this.stopped = !1, this.resume());
  }
  function Va(a) {
    if (F(a) || !!a === a) {
      a = "" + a;
    }
    C(a) && (a = R(a));
    this.J.write(a);
  }
  function Wa(a) {
    null != a && this.write(a);
    this.J.W && this.J.$(!0);
    fa(this, null);
    this.J = this.J.Y = null;
  }
  function Sa() {
    var a = this.J, b = a.Z;
    if (b) {
      for (; b.length && !this.stopped;) {
        a.v(b.shift(), b.shift());
      }
    }
  }
  function Qa() {
  }
  function Ra(a, b) {
    const c = this.U;
    let g = c.length - 1, f = c[g];
    b || (b = f[0], c.pop(), --g, f = c[g] || [null, 0]);
    this.ea && this.ea(b, f[0], f[1], g + 1, a);
  }
  function Pa(a, b) {
    function c(h) {
      e.T = h;
    }
    function g(h, m) {
      function l(t, k) {
        const u = e.U;
        var y = e.Y, q = u.length - 1;
        -1 === q && 9 !== t[0] && 11 !== t[0] && (u.push([[11], -1]), q = 0, e.fa = !0);
        const D = u[q] || [null, -1];
        q = e.ia(t, D[0], D[1] + 1, q + 1, k, m, y);
        (y = y.stopped) ? -1 !== q && (e.Z.push(a, b), k || (e.I = !0)) : (e.M.length = 0, e.N = null, ++D[1], k ? u.push([t, -1]) : e.$(m, t));
        return y;
      }
      const n = e.T, p = e.F;
      switch(n) {
        case 11:
          return l([n], h);
        case 17:
        case 1:
          if (e.N) {
            return l([n, p, e.N], h);
          }
        case 9:
        case 13:
        case 16:
          return l([n, p], h);
        case 3:
        case 4:
        case 8:
        case 14:
        case 18:
          return l([n, p], !1);
        case 15:
          return l([n], !1);
        case 7:
          return l([n].concat(e.M), !1);
      }
      return !1;
    }
    function f() {
      return e.U.length - (e.fa ? 1 : 0) ? 36 : 37;
    }
    const e = this;
    var d = this.aa;
    if (this.Y.stopped) {
      this.Z.push(a, b);
    } else {
      if (36 !== d || !this.I || 6 !== a && 4 !== a || (this.I = !1, !g(!1, 4 === a))) {
        if (36 !== d || !this.W || 6 !== a && 4 !== a || (this.W = !1, this.$(4 === a)), 5 === a || 6 === a) {
          this.H.length && this.R(a, b);
        } else {
          switch(d) {
            case 26:
              switch(a) {
                case 4:
                  if (0 === this.H.length) {
                    this.I = !0;
                    d = f();
                    break;
                  }
                case 2:
                  1 === this.H.length && (this.M.push(this.l), this.l = null);
                case 3:
                case 1:
                  this.R(a, b);
                  break;
                default:
                  this.H.length ? this.R(a, b) : this.M.push(b);
              }break;
            case 34:
              switch(a) {
                case 2:
                  1 === this.H.length && (this.N = this.l, this.l = null, d = 35);
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
                  if (g(!0)) {
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
                  e.F = b;
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
                  e.F = b;
                  break;
                case 30:
                  d = 34;
                  this.N = {};
                  this.R(a, b);
                  break;
                case 35:
                  this.W = !0;
                  d = f();
                  break;
                case 31:
                  this.I = !0;
                  d = f();
                  break;
                case 34:
                  this.I = !0;
                  d = f();
                  break;
                case 18:
                  d = 29;
                  c(18);
                  break;
                case 29:
                  d = 31;
                  e.F = b;
                  break;
                case 3:
                  d = 20;
                  c(3);
                  break;
                case 20:
                  d = 31;
                  e.F = b;
                  break;
                case 33:
                  if (g(!0)) {
                    return;
                  }
                case 38:
                  this.I = !0;
                  d = 36;
                  c(3);
                  e.F = b;
                  break;
                case 4:
                  d = 21;
                  c(4);
                  break;
                case 21:
                  d = 31;
                  e.F = b;
                  break;
                case 8:
                  d = 22;
                  c(8);
                  break;
                case 22:
                  d = 31;
                  e.F = b;
                  break;
                case 13:
                  d = 23;
                  c(13);
                  break;
                case 23:
                  d = 35;
                  e.F = b;
                  break;
                case 16:
                  d = 25;
                  c(16);
                  break;
                case 25:
                  d = 35;
                  e.F = b;
                  break;
                case 14:
                  d = 24;
                  c(14);
                  break;
                case 24:
                  d = 31;
                  e.F = b;
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
          -1 !== d && (this.aa = d);
        }
      }
    }
  }
  function z(a, b, c, g) {
    const f = Na(c);
    Ca(f, function(e, d) {
      var h, m, l;
      f.J.ia = function(n, p, t, k, u, y, q) {
        if (h) {
          if (qa(h, m, l, q, e, d)) {
            return;
          }
          h = null;
        }
        n = e(n, p, t, k, u, q);
        k = A(n);
        if (!q.stopped) {
          if (k) {
            m = t - p.length;
            l = y;
            if (11 === n[0]) {
              for (t = 1, k = n.length; t < k; ++t) {
                p.push(n[t]);
              }
            } else {
              p.push(n);
            }
            qa(p, m, y, q, e, d) && (h = p);
          }
          return -1;
        }
      };
      f.J.ea = d;
    }, a, b, c, g);
    return f;
  }
  function qa(a, b, c, g, f, e) {
    var d;
    ha(a, function(h, m, l, n) {
      if (h !== a && !h.h) {
        n = f(h, m, (1 === n ? b : 0) + l, n, N(h) < h.length, g);
        var p = A(n);
        if (g.stopped) {
          return d = !0, E;
        }
        if (p) {
          return 11 === n[0] ? (n.shift(), n.unshift(l, 1), m.splice.apply(m, n)) : m.splice(l, 1, n), -1;
        }
        if (C(h) || F(h)) {
          h = [3, h], m.splice(l, 1, h);
        }
        h.h = !0;
      }
    }, function(h, m, l, n) {
      h === a || h.left || -1 === [9, 11, 1, 17, 13, 16].indexOf(T(h)) || (e(h, m, (1 === n ? b : 0) + l, n, (1 !== n || c) && l === m.length - 1), h.left = !0);
    });
    return d;
  }
  var ca = null;
  O.prototype.remove = function() {
    if (da <= ia(this)) {
      return this.H = !0, null;
    }
    var a = this.j ? this.j.h.indexOf(this) : -1;
    0 <= a && (this.j.h.splice(a, 1), this.j = null);
  };
  O.prototype.wrap = function(a, b, c) {
    if (this.m) {
      this.o = this.o || [], this.o.push([a, b, c]), a = null;
    } else if (this.j) {
      var g = this.j, f = this.j ? this.j.h.indexOf(this) : -1;
      a = new O(g, f, a, b, c);
    } else {
      a = null;
    }
    ja(a, 0, [this]);
    return a;
  };
  var xa = 0, wa = 1, ua = 2, da = 3, ta = 4, va = 5, Ea = {xml:!0, svg:!0, math:!0}, Ia = {async:!0, autofocus:!0, checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, draggable:!0, hidden:!0, ismap:!0, loop:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, novalidate:!0, nowrap:!0, readonly:!0, required:!0, reversed:!0, scoped:!0, selected:!0}, Ja = {area:!0, base:!0, col:!0, embed:!0, br:!0, hr:!0, img:!0, input:!0, link:!0, meta:!0, source:!0, track:!0, wbr:!0}, Ga = {script:!0, style:!0, 
  textarea:!0, title:!0}, Ha = {textarea:!0, title:!0}, Ka = {html:!0, head:!0, body:!0, p:!0, dt:!0, dd:!0, li:!0, option:!0, tbody:!0, thead:!0, tfoot:!0, td:!0, th:!0, tr:!0, rp:!0, rt:!0, optgroup:!0, caption:!0, colgroup:!0}, La = {audio:!0, del:!0, ins:!0, map:!0, noscript:!0, video:!0}, Fa = {a:!0}, Da = {h1:!0, h2:!0, h3:!0, h4:!0, h5:!0, h6:!0, address:!0, blockquote:!0, div:!0, dl:!0, fieldset:!0, form:!0, hr:!0, legend:!0, ul:!0, noscript:!0, ol:!0, p:!0, pre:!0, article:!0, aside:!0, 
  canvas:!0, details:!0, figcaption:!0, figure:!0, footer:!0, header:!0, hgroup:!0, main:!0, nav:!0, section:!0};
  const R = J.from ? J.from : (...a) => new J(...a), X = J.alloc ? J.alloc : (...a) => new J(...a), M = ra.fromCharCode;
  W.prototype.write = function(a) {
    C(a) && (a = R(a));
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
                this.j = M(b), this.h = 83;
              } else if (32 !== b && 9 !== b && 10 !== b && 13 !== b) {
                this.h = 18;
                return;
              }
          }break;
        case 97:
          b = a[c];
          if (0 < this.K) {
            for (b = 0; b < this.K; b++) {
              this.V[this.m][this.m - this.K + b] = a[b];
            }
            Q(this, this.V[this.m]);
            this.m = this.K = 0;
            c = c + b - 1;
          } else if (0 === this.K && 128 <= b) {
            if (194 <= b && 223 >= b && (this.m = 2), 224 <= b && 239 >= b && (this.m = 3), 240 <= b && 244 >= b && (this.m = 4), this.m + c > a.length) {
              for (b = 0; b <= a.length - 1 - c; b++) {
                this.V[this.m][b] = a[c + b];
              }
              this.K = c + this.m - a.length;
              c = a.length - 1;
            } else {
              Q(this, a, c, c + this.m), c = c + this.m - 1;
            }
          } else if (34 === b) {
            this.h = 17, this.j += this.S.toString("utf8", 0, this.o), this.o = 0, this.v(10, this.j), J.byteLength(this.j, "utf8"), this.j = void 0;
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
            this.unicode += M(b), 102 === this.h++ && (b = parseInt(this.unicode, 16), this.unicode = void 0, void 0 !== this.G && 56320 <= b && 57344 > b ? (Q(this, R(M(this.G, b))), this.G = void 0) : void 0 === this.G && 55296 <= b && 56320 > b ? this.G = b : (void 0 !== this.G && (Q(this, R(M(this.G))), this.G = void 0), Q(this, R(M(b)))), this.h = 97);
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
              this.j += M(b);
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
    this.B && (this.state = 6);
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
            this.l && (this.l[this.D] = b);
            this.emit(b);
            break;
          case 1:
            oa(this);
            this.l = this.l ? this.l[this.D] = {} : {};
            this.D = void 0;
            this.state = 114;
            this.B = 129;
            break;
          case 3:
            oa(this);
            this.l = this.l ? this.l[this.D] = [] : [];
            this.D = 0;
            this.B = 130;
            this.state = 113;
            break;
          case 2:
            129 === this.B ? Y(this) : this.h = 18;
            break;
          case 4:
            130 === this.B ? Y(this) : this.h = 18;
            break;
          default:
            this.h = 18;
        }break;
      case 114:
        10 === a ? (this.D = b, this.state = 5) : 2 === a ? Y(this) : this.h = 18;
        break;
      case 5:
        5 === a ? this.state = 113 : this.h = 18;
        break;
      case 6:
        6 === a ? 130 === this.B ? (this.D++, this.state = 113) : 129 === this.B && (this.state = 114) : 4 === a && 130 === this.B || 2 === a && 129 === this.B ? Y(this) : this.h = 18;
        break;
      default:
        this.h = 18;
    }
  };
  Z = Z("stream");
  var Oa = class extends Z.Stream {
    constructor() {
      super();
      this.ha = Va;
      this.ga = Wa;
      this.destroyed = this.paused = this.da = this.ended = !1;
      this.readable = this.writable = !0;
      this.X = [];
      this.on("end", Ma);
    }
    write(a) {
      this.ha(a);
      return !this.paused;
    }
    ba() {
      if (this.paused) {
        this.on("resume", this.ba);
      } else {
        this.writable && (this.writable = !1, this.ga(), this.readable || this.destroy());
      }
    }
    end(a) {
      this.ended || (this.ended = !0, arguments.length && this.write(a), this.ba());
    }
    destroy() {
      this.destroyed || (this.ended = this.destroyed = !0, this.X.length = 0, this.writable = this.readable = !1, this.emit("close"));
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
  z.module = {};
  module.exports = z;
  z.DOCUMENT_NODE = 9;
  z.DOCUMENT_FRAGMENT_NODE = 11;
  z.ELEMENT_NODE = 1;
  z.TEXT_NODE = 3;
  z.CDATA_SECTION = 4;
  z.PROCESSING_INSTRUCTION = 7;
  z.COMMENT_NODE = 8;
  z.COND_CMT_HIDE_LOWER = 13;
  z.COND_CMT_SHOW_LOWER_START = 14;
  z.COND_CMT_SHOW_LOWER_END = 15;
  z.NETSCAPE4_COND_CMT_HIDE_LOWER = 16;
  z.ELEMENT_START_TAG = 17;
  z.ELEMENT_END_TAG = 18;
})(require, String, Function, Infinity, Buffer);

