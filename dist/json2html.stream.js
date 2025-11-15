(function(Z, qa, aa, D, J) {
  function E(a) {
    return a === "" + a;
  }
  function B(a) {
    return a === +a;
  }
  function S(a) {
    return !!a && "object" === typeof a;
  }
  function A(a) {
    return !!a && a.constructor === Array;
  }
  function ra(a) {
    function b(c) {
      var g = c, e;
      if (A(c)) {
        g = [];
        var f = 0;
        for (e = c.length; f < e; ++f) {
          g[f] = b(c[f]);
        }
      } else if (S(c)) {
        for (f in g = {}, c) {
          g[f] = b(c[f]);
        }
      }
      return g;
    }
    return b(a);
  }
  function ha(a, b, c) {
    var g = a, e = M(g), f = 0, h = b(a, null, -1, f / 3), k = [-1, a, e];
    if (D !== h && -D !== h) {
      if (0 < g.length - e) {
        do {
          var d = ++k[f], l = g[d + e];
          if (null != l) {
            h = b(l, g, d + e, f / 3 + 1);
            if (D === h) {
              return;
            }
            if (-D !== h) {
              if (-1 >= h) {
                k[f] += h;
              } else if (1 <= h && (k[f] += h), M(l) < l.length) {
                f += 3, k[f] = -1, k[f + 1] = g = l, k[f + 2] = e = M(l);
              } else if (c && g) {
                h = c(l, g, d + e, f / 3 + 1);
                if (D === h) {
                  return;
                }
                -D !== h && (-1 >= h || 1 <= h) && (k[f] += h);
              }
            }
          } else if (k.length = f, f -= 3, g = k[f + 1], e = k[f + 2], c && g) {
            d = k[f] + e;
            h = c(g[d], g, d, f / 3 + 1);
            if (D === h) {
              return;
            }
            -D !== h && (-1 >= h || 1 <= h) && (k[f] += h);
          }
        } while (0 <= f);
      }
      c && c(a, null, -1, 0);
    }
  }
  function N(a, b, c, g, e) {
    if (!!a === a) {
      var f = null;
      this.m = a;
    } else {
      f = a, this.m = f.m;
    }
    this.j = f;
    this.S = c;
    f && (f.h || (f.h = []), a = f.h, 0 <= b && b < a.length ? a.splice(b, 0, this) : a.push(this));
    switch(c) {
      case 1:
      case 17:
        this.N = e || null, b = ba(g), g = b[0];
      case 18:
        this.I = g;
        break;
      case 7:
        this.M = e || null;
      case 3:
      case 4:
      case 8:
      case 9:
      case 13:
      case 14:
      case 16:
        this.G = g;
    }
  }
  function ia(a) {
    return a.m ? ca === a ? a.H ? sa : a.J ? da : ta : ca.j === a ? ua : va : wa;
  }
  function ja(a, b, c) {
    var g = a.h = a.h || [], e = g.length, f = c.length;
    for (b = b < e ? b : e; f;) {
      e = c[--f], 11 === e.S ? e.h && e.h.length && ja(a, b, e.h) : (e.remove(), g.splice(b, 0, e), e.j = a);
    }
  }
  function O(a) {
    return a.split("&lt;").join("&amp;lt;").split("&gt;").join("&amp;gt;").split("<").join("&lt;").split(">").join("&gt;");
  }
  function T(a) {
    return E(a) || B(a) ? 3 : A(a) ? E(a[0]) ? 1 : B(a[0]) ? a[0] : -1 : -1;
  }
  function xa(a, b, c) {
    var g = b[1];
    b = b.slice(2);
    var e;
    a && a.constructor === aa ? e = b.length ? a.call(c, g, b) : a.call(c, g) : a[g] && (e = b.length ? a[g].apply(c || a, b) : a[g].call(c || a));
    (e = ra(e)) && A(e[0]) && e.unshift(11);
    return e;
  }
  function ka(a, b, c, g, e) {
    var f;
    if (A(c) && E(c[0])) {
      var h = c[0];
      c = c.slice(1);
      a && a.constructor === aa ? f = c.length ? a.call(e, h, c) : a.call(e, h) : a[h] && (f = c.length ? a[h].apply(e || a, c) : a[h].call(e || a));
    } else {
      E(c) && (a && a.constructor === aa ? f = a.call(e, c) : a[c] && (f = a[c].call(e || a)));
    }
    A(f) && (a = ka(a, b, f, g, e), void 0 !== a && (f = a));
    return f;
  }
  function ya(a, b, c) {
    a = za(a);
    var g;
    ca = a;
    b && (b.h ? b.h.push(a) : b.h = [a]);
    if (A(c)) {
      for (b = 0, g = c.length; b < g; b += 2) {
        var e = c[b], f = c[b + 1];
        if (B(e)) {
          if (e === a.S && !0 === f(a)) {
            break;
          }
        } else if ("*" === e) {
          if (!0 === f(a)) {
            break;
          }
        } else if (E(e) && e === a.I && !0 === f(a)) {
          break;
        }
      }
    } else {
      c(a);
    }
    return a;
  }
  function M(a) {
    var b = a[0], c = T(a);
    return 1 === c || 17 === c ? (b = B(b) ? 2 : 1, a = a[b], !A(a) && S(a) ? b + 1 : b) : 11 === b ? 1 : 9 === b || 13 === b || 16 === b ? 2 : D;
  }
  function ba(a) {
    var b = a.indexOf("#"), c = a.indexOf("."), g = "", e = "";
    b < c ? (g = a.split(".")[1], a = a.split(".")[0], 0 < b && (e = a.split("#")[1], a = a.split("#")[0])) : c < b && (e = a.split("#")[1], a = a.split("#")[0], 0 < c && (g = a.split(".")[1], a = a.split(".")[0]));
    return [a, e, g];
  }
  function Aa(a) {
    var b = [], c = -1, g;
    for (g in a) {
      var e = a[g];
      "0px" === e && (e = 0);
      for (var f = ++c, h, k = [], d = g.split(""), l = d.length; l;) {
        h = d[--l], "A" <= h && "Z" >= h && (h = "-" + h.toLowerCase()), k[l] = h;
      }
      h = k.join("");
      b[f] = h + ":" + e;
    }
    return b.join(";");
  }
  function za(a) {
    var b, c;
    ha(a, function(g, e, f, h) {
      function k(n, r, m) {
        if (b) {
          h < c.length && (c.length = h);
          var p = c[c.length - 1];
          da <= ia(p) ? (p.F = p.F || [], p.F.push([n, r, m]), n = null) : n = new N(p, p.h && p.h.length, n, r, m);
          M(g) < g.length && (c[h] = n);
        } else {
          b = new N(!0, 0, n, r, m), c = [b];
        }
      }
      if (E(g) || B(g)) {
        k(3, g);
      } else {
        e = g[0];
        f = g[1];
        var d = 1, l = e, q;
        switch(e) {
          case 9:
          case 13:
          case 16:
            k(e, f);
            break;
          case 11:
            k(e);
            break;
          case 3:
          case 4:
          case 8:
          case 14:
          case 18:
            k(e, f);
            break;
          case 15:
            k(e);
            break;
          case 7:
            d = [];
            l = 2;
            for (q = g.length; l < q; ++l) {
              d[l - 2] = g[l];
            }
            k(e, f, q - 2 ? d : null);
            break;
          case 1:
          case 17:
            l = f, d = 2;
          default:
            E(l) && k(1 === d ? 1 : e, l, g[d]);
        }
      }
      return D;
    });
    return b;
  }
  function Ba(a, b, c, g, e, f) {
    function h() {
      var m = "";
      r && (m = "</" + r + ">", r = "");
      return m;
    }
    function k(m, p, C) {
      var w = m.match('"'), H = m.match("'"), v = p ? "'" : '"';
      w && H ? m = p ? v + m.split("'").join("\\'") + v : v + m.split('"').join('\\"') + v : w ? m = "'" + m + "'" : H ? m = p ? v + m.split("'").join("\\'") + v : v + m + v : C || m.match(/[^0-9a-z\.\-]/g) || 72 < m.length ? m = v + m + v : "" === m && (m = v + v);
      return m;
    }
    f = f || {};
    var d = !0 === f.useQuoteAlways, l = !0 === f.useSingleQuote, q = f.instructionAttrPrefix || ":", n = [!1, null, !1, !1, !1, !1], r;
    b(function(m, p, C, w, H, v) {
      function U(la) {
        u[++x] = h() + (V ? la : O("" + la));
      }
      var u = [], x = -1;
      p = n[6 * w];
      var t = n[6 * w + 1];
      C = n[6 * w + 2];
      var V = n[6 * w + 3], ea = !1, K = !1;
      A(m) && (ea = H);
      H = g ? ya(m, t, g) : null;
      t = m[0];
      var y = m[1], P = 1, F;
      switch(T(m)) {
        case 9:
          u[++x] = y;
          break;
        case 3:
          A(m) || (y = m);
          U(y);
          break;
        case 4:
          u[++x] = "<![CDATA[" + O("" + y) + "]]\x3e";
          break;
        case 8:
          u[++x] = "\x3c!--" + O("" + y) + "--\x3e";
          break;
        case 13:
          u[++x] = h() + "\x3c!--[" + y + "]>";
          break;
        case 16:
          u[++x] = h() + "\x3c!--{" + y + "};";
          break;
        case 14:
          u[++x] = "\x3c!--[" + y + "]>\x3c!--\x3e";
          break;
        case 15:
          u[++x] = "\x3c!--<![endif]--\x3e";
          break;
        case 7:
          if (c) {
            var I = xa(c, m, v);
            if (v = A(I)) {
              return I;
            }
            (E(I) || B(I)) && "" !== I && U(I);
          }
          break;
        case 18:
          u[++x] = "</" + y + ">";
          break;
        case 17:
          I = !0;
        case 1:
          B(t) && (t = y, P = 2);
          t = ba(t);
          y = t[1];
          var ma = t[2];
          t = t[0];
          m = m[P];
          "p" !== r || Ca[t] ? r = "" : u[++x] = h();
          K = (p = p || !!Da[t]) || 0 < t.indexOf(":");
          C = C || !!Ea[t];
          P = t;
          V = V || Fa[P] && !Ga[P];
          u[++x] = "<" + t;
          y && (u[++x] = " id=" + k(y, l, K || d));
          ma && (u[++x] = " class=" + k(ma, l, K || d));
          if (!A(m) && S(m)) {
            for (F in m) {
              t = m[F];
              (y = 0 === F.indexOf(q)) && (F = F.substr(q.length));
              "className" === F && (F = "class");
              if (y && c && (t = ka(c, F, t, e, v), v && v.stopped)) {
                return;
              }
              if (null != t && (y = Ha[F], !y || !1 !== t) && (u[++x] = " " + F, !y && !0 !== t)) {
                if ("style" === F && S(t)) {
                  if (t = O(Aa(t)), !t) {
                    continue;
                  }
                } else {
                  t = O("" + t);
                }
                u[++x] = "=" + k(t, l, K || d);
              }
            }
          }
          !K || ea || I ? u[++x] = ">" : u[++x] = " />";
      }
      n[6 * w + 6] = p;
      n[6 * w + 7] = H;
      n[6 * w + 8] = C;
      n[6 * w + 9] = V;
      n[6 * w + 10] = ea;
      n[6 * w + 11] = K;
      -1 !== x && fa(a, u.join(""));
    }, function(m, p, C, w) {
      p = [];
      C = -1;
      var H = n[6 * w + 8], v = n[6 * w + 10], U = n[6 * w + 11], u = m[0];
      6 * w + 6 < n.length && (n.length = 6 * w + 6);
      switch(T(m)) {
        case 13:
          p[++C] = h() + "<![endif]--\x3e";
          break;
        case 16:
          p[++C] = h() + "--\x3e";
          break;
        case 17:
          r = "";
          break;
        case 1:
          B(u) && (u = m[1]), u = ba(u)[0], !v && Ia[u] ? r = "" : U && !v || Ja[u] && (!H || "p" !== u) ? r = u : (p[++C] = "</" + u + ">", r = "");
      }
      -1 !== C && fa(a, p.join(""));
      0 === w && (a = null);
    });
    b = null;
  }
  function W() {
    this.l = void 0;
    this.H = [];
    this.h = 17;
    this.j = void 0;
    this.R = X(65536);
    this.o = 0;
    this.B = this.D = this.F = this.unicode = void 0;
    this.state = 113;
    this.m = this.I = 0;
    this.U = {2:X(2), 3:X(3), 4:X(4)};
  }
  function G(a, b) {
    65536 <= a.o && (a.j += a.R.toString("utf8"), a.o = 0);
    a.R[a.o++] = b;
  }
  function Q(a, b, c, g) {
    var e = b.length;
    B(c) && (e = B(g) ? 0 > g ? b.length - c + g : g - c : b.length - c);
    0 > e && (e = 0);
    65536 < a.o + e && (a.j += a.R.toString("utf8", 0, a.o), a.o = 0);
    b.copy(a.R, a.o, c, g);
    a.o += e;
  }
  function na(a) {
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
  function Ka() {
    this.readable = !1;
    this.writable || process.nextTick(() => this.destroy());
  }
  function fa(a, b) {
    a.$ || (null === b && (a.$ = !0), a.V.push(b), oa(a));
  }
  function oa(a) {
    for (var b = a.V; b.length && !a.paused;) {
      var c = b.shift();
      null === c ? a.emit("end") : a.emit("data", c);
    }
  }
  function La(a) {
    const b = new W(), c = new Ma();
    c.K = b;
    b.W = c;
    b.Y = 0;
    b.M = [];
    b.J = b.v;
    b.v = Na;
    b.onError = Oa;
    b.T = [];
    b.X = [];
    b.ga = a;
    c.on("resume", Pa);
    c.stop = Qa;
    c.restart = Ra;
    return c;
  }
  function Qa() {
    this.stopped || (this.stopped = !0, this.pause());
  }
  function Ra() {
    this.stopped && (this.stopped = !1, this.resume());
  }
  function Sa(a) {
    if (B(a) || !!a === a) {
      a = "" + a;
    }
    E(a) && (a = R(a));
    this.K.write(a);
  }
  function Ta(a) {
    null != a && this.write(a);
    fa(this, null);
    this.K = this.K.W = null;
  }
  function Pa() {
    var a = this.K, b = a.X;
    if (b) {
      for (; b.length && !this.stopped;) {
        a.v(b.shift(), b.shift());
      }
    }
  }
  function Oa() {
  }
  function Na(a, b) {
    function c(l) {
      k.S = l;
    }
    function g(l) {
      const q = k.S, n = k.G;
      switch(q) {
        case 11:
          return e([q], l);
        case 17:
        case 1:
          if (k.N) {
            return e([q, n, k.N], l);
          }
        case 9:
        case 13:
        case 16:
          return e([q, n], l);
        case 3:
        case 4:
        case 8:
        case 14:
        case 18:
          return e([q, n], !1);
        case 15:
          return e([q], !1);
        case 7:
          return e([q].concat(k.M), !1);
      }
      return !1;
    }
    function e(l, q) {
      const n = k.T;
      var r = k.W, m = n.length - 1;
      -1 === m && 9 !== l[0] && 11 !== l[0] && (n.push([[11], -1]), m = 0, k.ba = !0);
      const p = n[m] || [null, -1];
      m = k.fa(l, p[0], p[1] + 1, m + 1, q, r);
      (r = r.stopped) ? -1 !== m && k.X.push(a, b) : (k.M.length = 0, k.N = null, ++p[1], q ? n.push([l, -1]) : f(l));
      return r;
    }
    function f(l) {
      const q = k.T;
      let n = q.length - 1, r = q[n];
      l || (l = r[0], q.pop(), --n, r = q[n] || [null, 0]);
      k.aa && k.aa(l, r[0], r[1], n + 1);
    }
    function h() {
      return k.T.length - (k.ba ? 1 : 0) ? 36 : 37;
    }
    const k = this;
    var d = this.Y;
    if (this.W.stopped) {
      this.X.push(a, b);
    } else if (5 === a || 6 === a) {
      this.H.length && this.J(a, b);
    } else {
      switch(d) {
        case 26:
          switch(a) {
            case 4:
              if (0 === this.H.length) {
                if (g(!1)) {
                  return;
                }
                d = h();
                break;
              }
            case 2:
              1 === this.H.length && (this.M.push(this.l), this.l = null);
            case 3:
            case 1:
              this.J(a, b);
              break;
            default:
              this.H.length ? this.J(a, b) : this.M.push(b);
          }break;
        case 34:
          switch(a) {
            case 2:
              1 === this.H.length && (this.N = this.l, this.l = null, d = 35);
            default:
              this.J(a, b);
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
              k.G = b;
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
              k.G = b;
              break;
            case 30:
              d = 34;
              this.N = {};
              this.J(a, b);
              break;
            case 35:
              f();
              d = h();
              break;
            case 31:
              if (g(!1)) {
                return;
              }
              d = h();
              break;
            case 34:
              if (g(!1)) {
                return;
              }
              d = h();
              break;
            case 18:
              d = 29;
              c(18);
              break;
            case 29:
              d = 31;
              k.G = b;
              break;
            case 3:
              d = 20;
              c(3);
              break;
            case 20:
              d = 31;
              k.G = b;
              break;
            case 33:
              if (g(!0)) {
                return;
              }
            case 38:
              d = 36;
              e([3, b], !1);
              break;
            case 4:
              d = 21;
              c(4);
              break;
            case 21:
              d = 31;
              k.G = b;
              break;
            case 8:
              d = 22;
              c(8);
              break;
            case 22:
              d = 31;
              k.G = b;
              break;
            case 13:
              d = 23;
              c(13);
              break;
            case 23:
              d = 35;
              k.G = b;
              break;
            case 16:
              d = 25;
              c(16);
              break;
            case 25:
              d = 35;
              k.G = b;
              break;
            case 14:
              d = 24;
              c(14);
              break;
            case 24:
              d = 31;
              k.G = b;
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
      -1 !== d && (this.Y = d);
    }
  }
  function z(a, b, c, g) {
    const e = La(c);
    Ba(e, function(f, h) {
      var k, d;
      e.K.fa = function(l, q, n, r, m, p) {
        if (k) {
          if (pa(k, d, p, f, h)) {
            return;
          }
          k = null;
        }
        l = f(l, q, n, r, m, p);
        r = A(l);
        if (!p.stopped) {
          if (r) {
            d = n - q.length;
            if (11 === l[0]) {
              for (n = 1, r = l.length; n < r; ++n) {
                q.push(l[n]);
              }
            } else {
              q.push(l);
            }
            pa(q, d, p, f, h) && (k = q);
          }
          return -1;
        }
      };
      e.K.aa = h;
    }, a, b, c, g);
    return e;
  }
  function pa(a, b, c, g, e) {
    var f;
    ha(a, function(h, k, d, l) {
      if (h !== a && !h.h) {
        l = g(h, k, (1 === l ? b : 0) + d, l, M(h) < h.length, c);
        var q = A(l);
        if (c.stopped) {
          return f = !0, D;
        }
        if (q) {
          return 11 === l[0] ? (l.shift(), l.unshift(d, 1), k.splice.apply(k, l)) : k.splice(d, 1, l), -1;
        }
        if (E(h) || B(h)) {
          h = [3, h], k.splice(d, 1, h);
        }
        h.h = !0;
      }
    }, function(h, k, d, l) {
      h === a || h.left || -1 === [9, 11, 1, 17, 13, 16].indexOf(T(h)) || (e(h, k, (1 === l ? b : 0) + d, l), h.left = !0);
    });
    return f;
  }
  var ca = null;
  N.prototype.remove = function() {
    if (da <= ia(this)) {
      return this.H = !0, null;
    }
    var a = this.j ? this.j.h.indexOf(this) : -1;
    0 <= a && (this.j.h.splice(a, 1), this.j = null);
  };
  N.prototype.wrap = function(a, b, c) {
    if (this.m) {
      this.o = this.o || [], this.o.push([a, b, c]), a = null;
    } else if (this.j) {
      var g = this.j, e = this.j ? this.j.h.indexOf(this) : -1;
      a = new N(g, e, a, b, c);
    } else {
      a = null;
    }
    ja(a, 0, [this]);
    return a;
  };
  var wa = 0, va = 1, ta = 2, da = 3, sa = 4, ua = 5, Da = {xml:!0, svg:!0, math:!0}, Ha = {async:!0, autofocus:!0, checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, draggable:!0, hidden:!0, ismap:!0, loop:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, novalidate:!0, nowrap:!0, readonly:!0, required:!0, reversed:!0, scoped:!0, selected:!0}, Ia = {area:!0, base:!0, col:!0, embed:!0, br:!0, hr:!0, img:!0, input:!0, link:!0, meta:!0, source:!0, track:!0, wbr:!0}, Fa = {script:!0, style:!0, 
  textarea:!0, title:!0}, Ga = {textarea:!0, title:!0}, Ja = {html:!0, head:!0, body:!0, p:!0, dt:!0, dd:!0, li:!0, option:!0, tbody:!0, thead:!0, tfoot:!0, td:!0, th:!0, tr:!0, rp:!0, rt:!0, optgroup:!0, caption:!0, colgroup:!0}, Ea = {a:!0, audio:!0, del:!0, ins:!0, map:!0, noscript:!0, video:!0}, Ca = {h1:!0, h2:!0, h3:!0, h4:!0, h5:!0, h6:!0, address:!0, blockquote:!0, div:!0, dl:!0, fieldset:!0, form:!0, hr:!0, legend:!0, ul:!0, noscript:!0, ol:!0, p:!0, pre:!0, article:!0, aside:!0, canvas:!0, 
  details:!0, figcaption:!0, figure:!0, footer:!0, header:!0, hgroup:!0, main:!0, nav:!0, section:!0};
  const R = J.from ? J.from : (...a) => new J(...a), X = J.alloc ? J.alloc : (...a) => new J(...a), L = qa.fromCharCode;
  W.prototype.write = function(a) {
    E(a) && (a = R(a));
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
                this.j = L(b), this.h = 83;
              } else if (32 !== b && 9 !== b && 10 !== b && 13 !== b) {
                this.h = 18;
                return;
              }
          }break;
        case 97:
          b = a[c];
          if (0 < this.I) {
            for (b = 0; b < this.I; b++) {
              this.U[this.m][this.m - this.I + b] = a[b];
            }
            Q(this, this.U[this.m]);
            this.m = this.I = 0;
            c = c + b - 1;
          } else if (0 === this.I && 128 <= b) {
            if (194 <= b && 223 >= b && (this.m = 2), 224 <= b && 239 >= b && (this.m = 3), 240 <= b && 244 >= b && (this.m = 4), this.m + c > a.length) {
              for (b = 0; b <= a.length - 1 - c; b++) {
                this.U[this.m][b] = a[c + b];
              }
              this.I = c + this.m - a.length;
              c = a.length - 1;
            } else {
              Q(this, a, c, c + this.m), c = c + this.m - 1;
            }
          } else if (34 === b) {
            this.h = 17, this.j += this.R.toString("utf8", 0, this.o), this.o = 0, this.v(10, this.j), J.byteLength(this.j, "utf8"), this.j = void 0;
          } else if (92 === b) {
            this.h = 98;
          } else if (32 <= b) {
            G(this, b);
          } else {
            this.h = 18;
            return;
          }
          break;
        case 98:
          b = a[c];
          switch(b) {
            case 34:
              G(this, b);
              this.h = 97;
              break;
            case 92:
              G(this, 92);
              this.h = 97;
              break;
            case 47:
              G(this, 47);
              this.h = 97;
              break;
            case 98:
              G(this, 8);
              this.h = 97;
              break;
            case 102:
              G(this, 12);
              this.h = 97;
              break;
            case 110:
              G(this, 10);
              this.h = 97;
              break;
            case 114:
              G(this, 13);
              this.h = 97;
              break;
            case 116:
              G(this, 9);
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
            this.unicode += L(b), 102 === this.h++ && (b = parseInt(this.unicode, 16), this.unicode = void 0, void 0 !== this.F && 56320 <= b && 57344 > b ? (Q(this, R(L(this.F, b))), this.F = void 0) : void 0 === this.F && 55296 <= b && 56320 > b ? this.F = b : (void 0 !== this.F && (Q(this, R(L(this.F))), this.F = void 0), Q(this, R(L(b)))), this.h = 97);
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
              this.j += L(b);
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
            na(this);
            this.l = this.l ? this.l[this.D] = {} : {};
            this.D = void 0;
            this.state = 114;
            this.B = 129;
            break;
          case 3:
            na(this);
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
  var Ma = class extends Z.Stream {
    constructor() {
      super();
      this.ea = Sa;
      this.da = Ta;
      this.destroyed = this.paused = this.$ = this.ended = !1;
      this.readable = this.writable = !0;
      this.V = [];
      this.on("end", Ka);
    }
    write(a) {
      this.ea(a);
      return !this.paused;
    }
    Z() {
      if (this.paused) {
        this.on("resume", this.Z);
      } else {
        this.writable && (this.writable = !1, this.da(), this.readable || this.destroy());
      }
    }
    end(a) {
      this.ended || (this.ended = !0, arguments.length && this.write(a), this.Z());
    }
    destroy() {
      this.destroyed || (this.ended = this.destroyed = !0, this.V.length = 0, this.writable = this.readable = !1, this.emit("close"));
    }
    pause() {
      this.paused || (this.paused = !0, this.emit("pause"));
    }
    resume() {
      this.paused && (this.paused = !1, this.emit("resume"));
      oa(this);
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

