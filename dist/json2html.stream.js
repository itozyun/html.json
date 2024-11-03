(function(W, J, I, Oa, Pa) {
  function K(a, b, c, g, e) {
    if (a === !!a) {
      var k = null;
      this.m = a;
    } else {
      k = a, this.m = k.m;
    }
    this.j = k;
    this.X = c;
    k && (k.h || (k.h = []), a = k.h, 0 <= b && b < a.length ? a.splice(b, 0, this) : a.push(this));
    switch(c) {
      case 1:
      case 17:
        this.T = e || null, b = X(g), g = b[0];
      case 18:
        this.K = g;
        break;
      case 7:
        this.R = e || null;
      case 3:
      case 4:
      case 8:
      case 9:
      case 13:
      case 14:
      case 16:
        this.H = g;
    }
  }
  function da(a) {
    return a.m ? Y === a ? a.J ? oa : a.N ? Z : pa : Y.j === a ? qa : ra : sa;
  }
  function ea(a, b, c) {
    var g = a.h = a.h || [], e = g.length, k = c.length;
    for (b = b < e ? b : e; k;) {
      e = c[--k], 11 === e.X ? e.h && e.h.length && ea(a, b, e.h) : (e.remove(), g.splice(b, 0, e), e.j = a);
    }
  }
  function fa(a, b, c) {
    var g = a, e = L(g), k = 0, f = b(a, null, -1, k / 3), h = [-1, a, e];
    if (Infinity !== f && -Infinity !== f) {
      if (0 < g.length - e) {
        do {
          var d = ++h[k], l = g[d + e];
          if (void 0 === l) {
            if (h.length = k, k -= 3, g = h[k + 1], e = h[k + 2], c && g) {
              d = h[k] + e;
              f = c(g[d], g, d, k / 3 + 1);
              if (Infinity === f) {
                return;
              }
              -Infinity !== f && (-1 >= f || 1 <= f) && (h[k] += f);
            }
          } else {
            f = b(l, g, d + e, k / 3 + 1);
            if (Infinity === f) {
              return;
            }
            if (-Infinity !== f) {
              if (-1 >= f) {
                h[k] += f;
              } else if (1 <= f && (h[k] += f), L(l) < l.length) {
                k += 3, h[k] = -1, h[k + 1] = g = l, h[k + 2] = e = L(l);
              } else if (c && g) {
                f = c(l, g, d + e, k / 3 + 1);
                if (Infinity === f) {
                  return;
                }
                -Infinity !== f && (-1 >= f || 1 <= f) && (h[k] += f);
              }
            }
          }
        } while (0 <= k);
      }
      c && c(a, null, -1, 0);
    }
  }
  function B(a) {
    return !(!a || a.pop !== [].pop);
  }
  function aa(a) {
    return !(!a || "object" !== typeof a);
  }
  function E(a) {
    return "" + a === a;
  }
  function F(a) {
    return a === +a;
  }
  function Q(a) {
    return E(a) || F(a) ? 3 : B(a) ? E(a[0]) ? 1 : F(a[0]) ? a[0] : -1 : -1;
  }
  function ta(a, b, c) {
    var g = b[1];
    b = b.slice(2);
    var e;
    "function" === typeof a ? e = b.length ? a.call(c, g, b) : a.call(c, g) : a[g] && (e = b.length ? a[g].apply(c || a, b) : a[g].call(c || a));
    e && B(e[0]) && e.unshift(11);
    return e;
  }
  function ha(a, b, c, g, e) {
    var k;
    if (B(c) && E(c[0])) {
      var f = c[0];
      c = c.slice(1);
      "function" === typeof a ? k = c.length ? a.call(e, f, c) : a.call(e, f) : a[f] && (k = c.length ? a[f].apply(e || a, c) : a[f].call(e || a));
    } else {
      E(c) && ("function" === typeof a ? k = a.call(e, c) : a[c] && (k = a[c].call(e || a)));
    }
    B(k) && (a = ha(a, b, k, g, e), void 0 !== a && (k = a));
    return k;
  }
  function ua(a, b, c) {
    a = va(a);
    var g;
    Y = a;
    b && (b.h ? b.h.push(a) : b.h = [a]);
    if (B(c)) {
      for (b = 0, g = c.length; b < g; b += 2) {
        var e = c[b], k = c[b + 1];
        if (F(e)) {
          if (e === a.X && !0 === k(a)) {
            break;
          }
        } else if ("*" === e) {
          if (!0 === k(a)) {
            break;
          }
        } else if (E(e) && e === a.K && !0 === k(a)) {
          break;
        }
      }
    } else {
      c(a);
    }
    return a;
  }
  function L(a) {
    var b = a[0], c = Q(a);
    return 1 === c || 17 === c ? (b = F(b) ? 2 : 1, a = a[b], !B(a) && aa(a) ? b + 1 : b) : 11 === b ? 1 : 9 === b || 13 === b || 16 === b ? 2 : Infinity;
  }
  function X(a) {
    var b = a.indexOf("#"), c = a.indexOf("."), g = "", e = "";
    b < c ? (g = a.split(".")[1], a = a.split(".")[0], 0 < b && (e = a.split("#")[1], a = a.split("#")[0])) : c < b && (e = a.split("#")[1], a = a.split("#")[0], 0 < c && (g = a.split(".")[1], a = a.split(".")[0]));
    return [a, e, g];
  }
  function M(a) {
    return a.split("&lt;").join("&amp;lt;").split("&gt;").join("&amp;gt;").split("<").join("&lt;").split(">").join("&gt;");
  }
  function wa(a) {
    var b = [], c = -1, g;
    for (g in a) {
      var e = a[g];
      "0px" === e && (e = 0);
      for (var k = ++c, f, h = [], d = g.split(""), l = d.length; l;) {
        f = d[--l], "A" <= f && "Z" >= f && (f = "-" + f.toLowerCase()), h[l] = f;
      }
      f = h.join("");
      b[k] = f + ":" + M("" + e);
    }
    return b.join(";").substr(1);
  }
  function va(a) {
    var b, c;
    fa(a, function(g, e, k, f) {
      function h(n, r, m) {
        if (b) {
          f < c.length && (c.length = f);
          var p = c[c.length - 1];
          Z <= da(p) ? (p.G = p.G || [], p.G.push([n, r, m]), n = null) : n = new K(p, p.h && p.h.length, n, r, m);
          L(g) < g.length && (c[f] = n);
        } else {
          b = new K(!0, 0, n, r, m), c = [b];
        }
      }
      if (E(g) || F(g)) {
        h(3, g);
      } else {
        e = g[0];
        k = g[1];
        var d = 1, l = e, q;
        switch(e) {
          case 9:
          case 13:
          case 16:
            h(e, k);
            break;
          case 11:
            h(e);
            break;
          case 3:
          case 4:
          case 8:
          case 14:
          case 18:
            h(e, k);
            break;
          case 15:
            h(e);
            break;
          case 7:
            d = [];
            l = 2;
            for (q = g.length; l < q; ++l) {
              d[l - 2] = g[l];
            }
            h(e, k, q - 2 ? d : null);
            break;
          case 1:
          case 17:
            l = k, d = 2;
          default:
            E(l) && h(1 === d ? 1 : e, l, g[d]);
        }
      }
      return Infinity;
    });
    return b;
  }
  function xa(a, b, c, g, e, k) {
    function f() {
      var m = "";
      r && (m = "</" + r.toLowerCase() + ">", r = "");
      return m;
    }
    function h(m, p, C) {
      m = M("" + m);
      var w = m.match('"'), y = m.match("'"), v = p ? "'" : '"';
      w && y ? m = p ? v + m.split("'").join("\\'") + v : v + m.split('"').join('\\"') + v : w ? m = "'" + m + "'" : y ? m = p ? v + m.split("'").join("\\'") + v : v + m + v : C || m.match(/[^0-9a-z\.\-]/g) || 72 < m.length ? m = v + m + v : "" === m && (m = v + v);
      return m;
    }
    k = k || {};
    var d = !0 === k.quotAlways, l = !0 === k.useSingleQuot, q = k.instructionAttrPrefix || ":", n = [!1, null, !1, !1, !1], r;
    b(function(m, p, C, w, y, v) {
      function N(ia) {
        t[++x] = f() + (R ? ia : M("" + ia));
      }
      var t = [], x = -1;
      p = !1;
      B(m) && (p = y);
      y = n[5 * w];
      var ba = n[5 * w + 1];
      C = n[5 * w + 2];
      var R = n[5 * w + 3];
      ba = g ? ua(m, ba, g) : null;
      var u = m[0], A = m[1], S = 1, D;
      switch(Q(m)) {
        case 9:
          t[++x] = A;
          break;
        case 3:
          B(m) || (A = m);
          N(A);
          break;
        case 4:
          t[++x] = "<![CDATA[" + M("" + A) + "]]\x3e";
          break;
        case 8:
          t[++x] = "\x3c!--" + M("" + A) + "--\x3e";
          break;
        case 13:
          t[++x] = f() + "\x3c!--[" + A + "]>";
          break;
        case 16:
          t[++x] = f() + "\x3c!--{" + A + "};";
          break;
        case 14:
          t[++x] = "\x3c!--[" + A + "]>\x3c!--\x3e";
          break;
        case 15:
          t[++x] = "\x3c!--<![endif]--\x3e";
          break;
        case 7:
          if (c) {
            var G = ta(c, m, v);
            v = B(G);
            if (null != G && "" !== G) {
              if (E(G) || F(G)) {
                N(G);
              } else if (v) {
                return G;
              }
            }
          }
          break;
        case 18:
          t[++x] = "</" + A + ">";
          break;
        case 17:
          G = !0;
        case 1:
          F(u) && (u = A, S = 2);
          u = X(u);
          A = u[1];
          var ja = u[2];
          u = u[0];
          m = m[S];
          "P" !== r || ya[u] ? r = "" : t[++x] = f();
          y = y || (y || za[u] ? !0 : 0 < u.indexOf(":"));
          C = C || !!Aa[u];
          R = R || !!Ba[u];
          t[++x] = "<" + (y ? u : u.toLowerCase());
          A && (t[++x] = " id=" + h(A, l, y || d));
          ja && (t[++x] = " class=" + h(ja, l, y || d));
          if (!B(m) && aa(m)) {
            for (D in m) {
              u = m[D];
              (S = 0 === D.indexOf(q)) && (D = D.substr(q.length));
              "className" === D && (D = "class");
              if (S && c && (u = ha(c, D, u, e, v), v && v.stopped)) {
                return;
              }
              null == u || ka[D] && !1 === u || (t[++x] = " " + D, ka[D] || !0 === u) || "style" === D && aa(u) && (u = wa(u), !u) || (t[++x] = "=" + h(u, l, y || d));
            }
          }
          !y || p || G ? t[++x] = ">" : t[++x] = " />";
      }
      n[5 * w + 5] = y;
      n[5 * w + 6] = ba;
      n[5 * w + 7] = C;
      n[5 * w + 8] = R;
      n[5 * w + 9] = p;
      -1 !== x && ca(a, t.join(""));
    }, function(m, p, C, w) {
      p = [];
      C = -1;
      var y = n[5 * w + 5], v = n[5 * w + 7], N = n[5 * w + 9], t = m[0];
      5 * w + 5 < n.length && (n.length = 5 * w + 5);
      switch(Q(m)) {
        case 13:
          p[++C] = f() + "<![endif]--\x3e";
          break;
        case 16:
          p[++C] = f() + "--\x3e";
          break;
        case 17:
          r = "";
          break;
        case 1:
          F(t) && (t = m[1]), t = X(t)[0], !N && Ca[t] ? r = "" : y && !N || Da[t] && (!v || "P" !== t) ? r = t : (p[++C] = "</" + (y ? t : t.toLowerCase()) + ">", r = "");
      }
      -1 !== C && ca(a, p.join(""));
      0 === w && (a = null);
    });
    b = null;
  }
  function T() {
    this.l = void 0;
    this.J = [];
    this.h = 17;
    this.j = void 0;
    this.V = U(65536);
    this.o = 0;
    this.D = this.F = this.G = this.unicode = void 0;
    this.state = 113;
    this.m = this.K = 0;
    this.$ = {2:U(2), 3:U(3), 4:U(4)};
  }
  function H(a, b) {
    65536 <= a.o && (a.j += a.V.toString("utf8"), a.o = 0);
    a.V[a.o++] = b;
  }
  function O(a, b, c, g) {
    var e = b.length;
    "number" === typeof c && (e = "number" === typeof g ? 0 > g ? b.length - c + g : g - c : b.length - c);
    0 > e && (e = 0);
    65536 < a.o + e && (a.j += a.V.toString("utf8", 0, a.o), a.o = 0);
    b.copy(a.V, a.o, c, g);
    a.o += e;
  }
  function la(a) {
    a.J.push({l:a.l, F:a.F, D:a.D});
  }
  function V(a) {
    var b = a.l, c = a.J.pop();
    a.l = c.l;
    a.F = c.F;
    a.D = c.D;
    a.emit(b);
    a.D || (a.state = 113);
  }
  function Ea() {
    this.readable = !1;
    this.writable || process.nextTick(() => this.destroy());
  }
  function ca(a, b) {
    a.fa || (null === b && (a.fa = !0), a.aa.push(b), ma(a));
  }
  function ma(a) {
    for (var b = a.aa; b.length && !a.paused;) {
      var c = b.shift();
      null === c ? a.emit("end") : a.emit("data", c);
    }
  }
  function Fa(a) {
    const b = new T(), c = new Ga();
    c.M = b;
    b.W = c;
    b.ba = 0;
    b.R = [];
    b.N = b.v;
    b.v = Ha;
    b.onError = Ia;
    b.Z = [];
    b.da = [];
    b.Y = a;
    c.on("resume", Ja);
    c.stop = Ka;
    c.restart = La;
    return c;
  }
  function Ka() {
    this.stopped || (this.stopped = !0, this.pause());
  }
  function La() {
    this.stopped && (this.stopped = !1, this.resume());
  }
  function Ma(a) {
    if (F(a) || a === !!a) {
      a = "" + a;
    }
    E(a) && (a = P(a));
    this.M.write(a);
  }
  function Na(a) {
    null != a && this.write(a);
    37 !== this.M.ba && this.emit("error", "Invalid html.json");
    ca(this, null);
    this.M = this.M.W = null;
  }
  function Ja() {
    var a = this.M, b = a.da;
    if (b) {
      for (; b.length && !this.stopped;) {
        a.v(b.shift(), b.shift());
      }
    }
  }
  function Ia(a) {
    -1 < a.message.indexOf("at position") && (a.message = "Invalid JSON (" + a.message + ")");
    this.Y && this.Y(a.message);
    this.W.emit("error", a);
  }
  function Ha(a, b) {
    function c(l) {
      h.X = l;
    }
    function g(l) {
      const q = h.X, n = h.H;
      switch(q) {
        case 11:
          return e([q], l);
        case 17:
        case 1:
          if (h.T) {
            return e([q, n, h.T], l);
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
          return e([q].concat(h.R), !1);
      }
      return !1;
    }
    function e(l, q) {
      const n = h.Z;
      var r = h.W, m = n.length - 1;
      -1 === m && 9 !== l[0] && 11 !== l[0] && (n.push([[11], -1]), m = 0, h.ha = !0);
      const p = n[m] || [null, -1];
      m = h.ka(l, p[0], p[1] + 1, m + 1, q, r);
      (r = r.stopped) ? -1 !== m && h.da.push(a, b) : (h.R.length = 0, h.T = null, ++p[1], q ? n.push([l, -1]) : k(l));
      return r;
    }
    function k(l) {
      const q = h.Z;
      let n = q.length - 1, r = q[n];
      l || (l = r[0], q.pop(), --n, r = q[n] || [null, 0]);
      h.ga && h.ga(l, r[0], r[1], n + 1);
    }
    function f() {
      return h.Z.length - (h.ha ? 1 : 0) ? 36 : 37;
    }
    const h = this;
    var d = this.ba;
    if (this.W.stopped) {
      this.da.push(a, b);
    } else if (5 === a || 6 === a) {
      this.J.length && this.N(a, b);
    } else {
      switch(d) {
        case 26:
          switch(a) {
            case 4:
              if (0 === this.J.length) {
                if (g(!1)) {
                  return;
                }
                d = f();
                break;
              }
            case 2:
              1 === this.J.length && (this.R.push(this.l), this.l = null);
            case 3:
            case 1:
              this.N(a, b);
              break;
            default:
              this.J.length ? this.N(a, b) : this.R.push(b);
          }break;
        case 34:
          switch(a) {
            case 2:
              1 === this.J.length && (this.T = this.l, this.l = null, d = 35);
            default:
              this.N(a, b);
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
              h.H = b;
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
              h.H = b;
              break;
            case 30:
              d = 34;
              this.T = {};
              this.N(a, b);
              break;
            case 35:
              k();
              d = f();
              break;
            case 31:
              if (g(!1)) {
                return;
              }
              d = f();
              break;
            case 34:
              if (g(!1)) {
                return;
              }
              d = f();
              break;
            case 18:
              d = 29;
              c(18);
              break;
            case 29:
              d = 31;
              h.H = b;
              break;
            case 3:
              d = 20;
              c(3);
              break;
            case 20:
              d = 31;
              h.H = b;
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
              h.H = b;
              break;
            case 8:
              d = 22;
              c(8);
              break;
            case 22:
              d = 31;
              h.H = b;
              break;
            case 13:
              d = 23;
              c(13);
              break;
            case 23:
              d = 35;
              h.H = b;
              break;
            case 16:
              d = 25;
              c(16);
              break;
            case 25:
              d = 35;
              h.H = b;
              break;
            case 14:
              d = 24;
              c(14);
              break;
            case 24:
              d = 31;
              h.H = b;
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
      -1 === d ? (this.Y && this.Y("Not html.json format!"), this.W.emit("error", "Not html.json format!")) : this.ba = d;
    }
  }
  function z(a, b, c, g) {
    const e = Fa(c);
    xa(e, function(k, f) {
      var h, d;
      e.M.ka = function(l, q, n, r, m, p) {
        if (h) {
          if (na(h, d, p, k, f)) {
            return;
          }
          h = null;
        }
        l = k(l, q, n, r, m, p);
        r = B(l);
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
            na(q, d, p, k, f) && (h = q);
          }
          return -1;
        }
      };
      e.M.ga = f;
    }, a, b, c, g);
    return e;
  }
  function na(a, b, c, g, e) {
    var k;
    fa(a, function(f, h, d, l) {
      if (f !== a && !f.h) {
        l = g(f, h, (1 === l ? b : 0) + d, l, L(f) < f.length, c);
        var q = B(l);
        if (c.stopped) {
          return k = !0, Infinity;
        }
        if (q) {
          return 11 === l[0] ? (l.shift(), l.unshift(d, 1), h.splice.apply(h, l)) : h.splice(d, 1, l), -1;
        }
        if (E(f) || F(f)) {
          f = [3, f], h.splice(d, 1, f);
        }
        f.h = !0;
      }
    }, function(f, h, d, l) {
      f === a || f.left || -1 === [9, 11, 1, 17, 13, 16].indexOf(Q(f)) || (e(f, h, (1 === l ? b : 0) + d, l), f.left = !0);
    });
    return k;
  }
  var Y = null;
  K.prototype.remove = function() {
    if (Z <= da(this)) {
      return this.J = !0, null;
    }
    var a = this.j ? this.j.h.indexOf(this) : -1;
    0 <= a && (this.j.h.splice(a, 1), this.j = null);
  };
  K.prototype.wrap = function(a, b, c) {
    if (this.m) {
      this.o = this.o || [], this.o.push([a, b, c]), a = null;
    } else if (this.j) {
      var g = this.j, e = this.j ? this.j.h.indexOf(this) : -1;
      a = new K(g, e, a, b, c);
    } else {
      a = null;
    }
    ea(a, 0, [this]);
    return a;
  };
  var sa = 0, ra = 1, pa = 2, Z = 3, oa = 4, qa = 5, za = {xml:!0, svg:!0, math:!0}, ka = {async:!0, autofocus:!0, checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, draggable:!0, hidden:!0, ismap:!0, loop:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, novalidate:!0, nowrap:!0, readonly:!0, required:!0, reversed:!0, scoped:!0, selected:!0}, Ca = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, COMMAND:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, 
  PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0, area:!0, base:!0, basefont:!0, br:!0, bgsound:!0, col:!0, command:!0, frame:!0, hr:!0, img:!0, input:!0, isindex:!0, keygen:!0, link:!0, meta:!0, param:!0, source:!0, track:!0, embed:!0, wbr:!0}, Da = {HTML:!0, HEAD:!0, BODY:!0, P:!0, DT:!0, DD:!0, LI:!0, OPTION:!0, TBODY:!0, THEAD:!0, TFOOT:!0, TD:!0, TH:!0, TR:!0, RB:!0, RBC:!0, RP:!0, RT:!0, RTC:!0, OPTGROUP:!0, CAPTION:!0, COLGROUP:!0}, Aa = {A:!0, AUDIO:!0, DEL:!0, INS:!0, MAP:!0, NOSCRIPT:!0, 
  VIDEO:!0}, ya = {H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, ADDRESS:!0, BLOCKQUOTE:!0, DIV:!0, DL:!0, FIELDSET:!0, FORM:!0, HR:!0, LEGEND:!0, MENU:!0, NOSCRIPT:!0, OL:!0, P:!0, PRE:!0, UL:!0, CENTER:!0, DIR:!0, NOFRAMES:!0, MARQUEE:!0}, Ba = {SCRIPT:!0, STYLE:!0, TEXTAREA:!0, TITLE:!0, PLAINTEXT:!0, XMP:!0, script:!0, style:!0, textarea:!0, title:!0, plaintext:!0, xmp:!0};
  const P = I.from ? I.from : (...a) => new I(...a), U = I.alloc ? I.alloc : (...a) => new I(...a);
  T.prototype.write = function(a) {
    "string" === typeof a && (a = P(a));
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
                this.j = J.fromCharCode(b), this.h = 83;
              } else if (32 !== b && 9 !== b && 10 !== b && 13 !== b) {
                this.h = 18;
                return;
              }
          }break;
        case 97:
          b = a[c];
          if (0 < this.K) {
            for (b = 0; b < this.K; b++) {
              this.$[this.m][this.m - this.K + b] = a[b];
            }
            O(this, this.$[this.m]);
            this.m = this.K = 0;
            c = c + b - 1;
          } else if (0 === this.K && 128 <= b) {
            if (194 <= b && 223 >= b && (this.m = 2), 224 <= b && 239 >= b && (this.m = 3), 240 <= b && 244 >= b && (this.m = 4), this.m + c > a.length) {
              for (b = 0; b <= a.length - 1 - c; b++) {
                this.$[this.m][b] = a[c + b];
              }
              this.K = c + this.m - a.length;
              c = a.length - 1;
            } else {
              O(this, a, c, c + this.m), c = c + this.m - 1;
            }
          } else if (34 === b) {
            this.h = 17, this.j += this.V.toString("utf8", 0, this.o), this.o = 0, this.v(10, this.j), I.byteLength(this.j, "utf8"), this.j = void 0;
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
            this.unicode += J.fromCharCode(b), 102 === this.h++ && (b = parseInt(this.unicode, 16), this.unicode = void 0, void 0 !== this.G && 56320 <= b && 57344 > b ? (O(this, P(J.fromCharCode(this.G, b))), this.G = void 0) : void 0 === this.G && 55296 <= b && 56320 > b ? this.G = b : (void 0 !== this.G && (O(this, P(J.fromCharCode(this.G))), this.G = void 0), O(this, P(J.fromCharCode(b)))), this.h = 97);
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
              this.j += J.fromCharCode(b);
              this.h = 83;
              break;
            default:
              this.h = 17;
              b = Number(this.j);
              if (isNaN(b)) {
                this.h = 18;
                return;
              }
              this.j.match(/[0-9]+/) == this.j && b.toString() != this.j ? this.v(10, this.j) : this.v(11, b);
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
  T.prototype.emit = function() {
    this.D && (this.state = 6);
  };
  T.prototype.v = function(a, b) {
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
            la(this);
            this.l = this.l ? this.l[this.F] = {} : {};
            this.F = void 0;
            this.state = 114;
            this.D = 129;
            break;
          case 3:
            la(this);
            this.l = this.l ? this.l[this.F] = [] : [];
            this.F = 0;
            this.D = 130;
            this.state = 113;
            break;
          case 2:
            129 === this.D ? V(this) : this.h = 18;
            break;
          case 4:
            130 === this.D ? V(this) : this.h = 18;
            break;
          default:
            this.h = 18;
        }break;
      case 114:
        10 === a ? (this.F = b, this.state = 5) : 2 === a ? V(this) : this.h = 18;
        break;
      case 5:
        5 === a ? this.state = 113 : this.h = 18;
        break;
      case 6:
        6 === a ? 130 === this.D ? (this.F++, this.state = 113) : 129 === this.D && (this.state = 114) : 4 === a && 130 === this.D || 2 === a && 129 === this.D ? V(this) : this.h = 18;
        break;
      default:
        this.h = 18;
    }
  };
  W = W("stream");
  var Ga = class extends W.Stream {
    constructor() {
      super();
      this.ja = Ma;
      this.ia = Na;
      this.destroyed = this.paused = this.fa = this.ended = !1;
      this.readable = this.writable = !0;
      this.aa = [];
      this.on("end", Ea);
    }
    write(a) {
      this.ja.call(this, a);
      return !this.paused;
    }
    ea() {
      if (this.paused) {
        this.on("resume", this.ea);
      } else {
        this.writable && (this.writable = !1, this.ia.call(this), this.readable || this.destroy());
      }
    }
    end(a) {
      this.ended || (this.ended = !0, arguments.length && this.write(a), this.ea());
    }
    destroy() {
      this.destroyed || (this.ended = this.destroyed = !0, this.aa.length = 0, this.writable = this.readable = !1, this.emit("close"));
    }
    pause() {
      this.paused || (this.paused = !0, this.emit("pause"));
    }
    resume() {
      this.paused && (this.paused = !1, this.emit("resume"));
      ma(this);
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
})(require, String, Buffer, JSON, void 0);

