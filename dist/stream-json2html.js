var DEFINE_HTML2JSON__EXPORT_JSON2HTML = !1, DEFINE_HTML2JSON__EXPORT_JSON2JSON = !1, DEFINE_HTML2JSON__DEBUG = !0, DEFINE_HTML2JSON__USE_XML_NS = !0, DEFINE_HTML2JSON__USE_XHTML = !0, DEFINE_HTML2JSON__INSTRUCTION_ATTR_PREFIX = ":", HTML_DOT_JSON__NODE_TYPE = {ELEMENT_NODE:1, TEXT_NODE:3, CDATA_SECTION:4, PROCESSING_INSTRUCTION:7, COMMENT_NODE:8, DOCUMENT_NODE:9, DOCUMENT_FRAGMENT_NODE:11, CONDITIONAL_COMMENT_HIDE_LOWER:13, CONDITIONAL_COMMENT_SHOW_LOWER:14, NETSCAPE4_CONDITIONAL_COMMENT:15};
const DEFINE_HTML2JSON__PHASE = {ERROR:HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE - 2, NODE_START:HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE - 1, ELEMENT_NODE_START:HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE, TEXT_NODE_START:HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, CDATA_SECTION_START:HTML_DOT_JSON__NODE_TYPE.CDATA_SECTION, PROCESSING_INSTRUCTION_START:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION, COMMENT_NODE_START:HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE, DOCUMENT_NODE_START:HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE, 
DOCUMENT_FRAGMENT_NODE_START:HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, COMMENT_HIDE_LOWER_START:HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER, COMMENT_SHOW_LOWER_START:HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER, NETSCAPE4_CONDITIONAL_COMMENT:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT, DOCUMENT_NODE_VALUE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 1, TEXT_NODE_VALUE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 2, CDATA_SECTION_VALUE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 
3, COMMENT_NODE_VALUE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 4, COMMENT_HIDE_LOWER_FORMURA:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 5, COMMENT_SHOW_LOWER_FORMURA:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 6, PROCESSING_INSTRUCTION_NAME:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 7, TAG_NAME:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 8, ATTRIBUTES_START:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 9, ATTRIBUTE_PROPERTY:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 
10, ATTRIBUTE_VALUE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 11, STYLES_START:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 12, CSS_PROPERTY:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 13, CSS_VALUE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 14, IN_INSTRUCTION_ATTRIBUTE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 15, END_OF_NODE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 16, CLOSE_EMPTY_ELEMENT:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 
17, END_OF_ATTRIBUTES:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 18, END_OF_STYLES:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 19, TEXT_DATA:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 20, INSTRUCTION_ATTRIBUTE_NAME:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 21}, DEFINE_HTML2JSON__EXPECT = {ERROR:DEFINE_HTML2JSON__PHASE.ERROR, NODE_START:DEFINE_HTML2JSON__PHASE.NODE_START, DOCUMENT_NODE_VALUE:DEFINE_HTML2JSON__PHASE.DOCUMENT_NODE_VALUE, TEXT_NODE_VALUE:DEFINE_HTML2JSON__PHASE.TEXT_NODE_VALUE, 
CDATA_SECTION_VALUE:DEFINE_HTML2JSON__PHASE.CDATA_SECTION_VALUE, COMMENT_NODE_VALUE:DEFINE_HTML2JSON__PHASE.COMMENT_NODE_VALUE, COMMENT_HIDE_LOWER_FORMURA:DEFINE_HTML2JSON__PHASE.COMMENT_HIDE_LOWER_FORMURA, COMMENT_SHOW_LOWER_FORMURA:DEFINE_HTML2JSON__PHASE.COMMENT_SHOW_LOWER_FORMURA, PROCESSING_INSTRUCTION_NAME:DEFINE_HTML2JSON__PHASE.PROCESSING_INSTRUCTION_NAME, TAG_NAME:DEFINE_HTML2JSON__PHASE.TAG_NAME, ATTRIBUTES_START:DEFINE_HTML2JSON__PHASE.ATTRIBUTES_START, ATTRIBUTE_PROPERTY:DEFINE_HTML2JSON__PHASE.ATTRIBUTE_PROPERTY, 
ATTRIBUTE_VALUE:DEFINE_HTML2JSON__PHASE.ATTRIBUTE_VALUE, STYLES_START:DEFINE_HTML2JSON__PHASE.STYLES_START, CSS_PROPERTY:DEFINE_HTML2JSON__PHASE.CSS_PROPERTY, CSS_VALUE:DEFINE_HTML2JSON__PHASE.CSS_VALUE, IN_INSTRUCTION_ATTRIBUTE:DEFINE_HTML2JSON__PHASE.IN_INSTRUCTION_ATTRIBUTE, END_OF_NODE:DEFINE_HTML2JSON__PHASE.END_OF_NODE, NODE_TYPE:DEFINE_HTML2JSON__PHASE.END_OF_NODE + 1, PROCESSING_INSTRUCTION_ARGS:DEFINE_HTML2JSON__PHASE.END_OF_NODE + 2, INSTRUCTION_ATTRIBUTE_START:DEFINE_HTML2JSON__PHASE.END_OF_NODE + 
3, CHILD_NODES_START:DEFINE_HTML2JSON__PHASE.END_OF_NODE + 4, IN_CHILD_NODES:DEFINE_HTML2JSON__PHASE.END_OF_NODE + 5, END_OF_DOCUMENT:DEFINE_HTML2JSON__PHASE.END_OF_NODE + 6};
(function() {
  function J() {
    this.tState = N;
    this.string = this.value = void 0;
    this.stringBuffer = Buffer.alloc ? Buffer.alloc(65536) : new Buffer(65536);
    this.stringBufferOffset = 0;
    this.mode = this.key = this.highSurrogate = this.unicode = void 0;
    this.stack = [];
    this.state = Q;
    this.bytes_in_sequence = this.bytes_remaining = 0;
    this.temp_buffs = {2:new Buffer(2), 3:new Buffer(3), 4:new Buffer(4)};
    this.offset = -1;
  }
  function da(c, b, e) {
    function A() {
      for (; R.length && !g.paused;) {
        var C = R.shift();
        if (null === C) {
          return g.emit("end");
        }
        g.emit("data", C);
      }
    }
    c = c || function(C) {
      this.queue(C);
    };
    b = b || function() {
      this.queue(null);
    };
    var K = !1, T = !1, R = [], L = !1, g = new Ka();
    g.readable = g.writable = !0;
    g.paused = !1;
    g.autoDestroy = !(e && !1 === e.autoDestroy);
    g.write = function(C) {
      c.call(this, C);
      return !g.paused;
    };
    g.queue = g.push = function(C) {
      if (L) {
        return g;
      }
      null === C && (L = !0);
      R.push(C);
      A();
      return g;
    };
    g.on("end", function() {
      g.readable = !1;
      !g.writable && g.autoDestroy && process.nextTick(function() {
        g.destroy();
      });
    });
    g.end = function(C) {
      if (!K) {
        return K = !0, arguments.length && g.write(C), g.writable = !1, b.call(g), !g.readable && g.autoDestroy && g.destroy(), g;
      }
    };
    g.destroy = function() {
      if (!T) {
        return K = T = !0, R.length = 0, g.writable = g.readable = !1, g.emit("close"), g;
      }
    };
    g.pause = function() {
      if (!g.paused) {
        return g.paused = !0, g;
      }
    };
    g.resume = function() {
      g.paused && (g.paused = !1, g.emit("resume"));
      A();
      g.paused || g.emit("drain");
      return g;
    };
    return g;
  }
  var k = {}, U = k.LEFT_BRACE = 1, O = k.RIGHT_BRACE = 2, V = k.LEFT_BRACKET = 3, S = k.RIGHT_BRACKET = 4, W = k.COLON = 5, X = k.COMMA = 6, Y = k.TRUE = 7, Z = k.FALSE = 8, aa = k.NULL = 9, P = k.STRING = 10, ba = k.NUMBER = 11, N = k.START = 17, qa = k.STOP = 18, ra = k.TRUE1 = 33, sa = k.TRUE2 = 34, ta = k.TRUE3 = 35, ua = k.FALSE1 = 49, va = k.FALSE2 = 50, wa = k.FALSE3 = 51, xa = k.FALSE4 = 52, ya = k.NULL1 = 65, za = k.NULL2 = 66, Aa = k.NULL3 = 67, Ba = k.NUMBER1 = 81, ia = k.NUMBER3 = 83, 
  H = k.STRING1 = 97, Ca = k.STRING2 = 98, Da = k.STRING3 = 99, La = k.STRING4 = 100, Ma = k.STRING5 = 101, Ea = k.STRING6 = 102, Q = k.VALUE = 113, ja = k.KEY = 114, ea = k.OBJECT = 129, fa = k.ARRAY = 130;
  J.toknam = function(c) {
    for (var b = Object.keys(k), e = 0, A = b.length; e < A; e++) {
      var K = b[e];
      if (k[K] === c) {
        return K;
      }
    }
    return c && "0x" + c.toString(16);
  };
  var D = J.prototype;
  D.onError = function(c) {
    throw c;
  };
  D.charError = function(c, b) {
    this.tState = qa;
    this.onError(Error("Unexpected " + JSON.stringify(String.fromCharCode(c[b])) + " at position " + b + " in state " + J.toknam(this.tState)));
  };
  D.appendStringChar = function(c) {
    65536 <= this.stringBufferOffset && (this.string += this.stringBuffer.toString("utf8"), this.stringBufferOffset = 0);
    this.stringBuffer[this.stringBufferOffset++] = c;
  };
  D.appendStringBuf = function(c, b, e) {
    var A = c.length;
    "number" === typeof b && (A = "number" === typeof e ? 0 > e ? c.length - b + e : e - b : c.length - b);
    0 > A && (A = 0);
    65536 < this.stringBufferOffset + A && (this.string += this.stringBuffer.toString("utf8", 0, this.stringBufferOffset), this.stringBufferOffset = 0);
    c.copy(this.stringBuffer, this.stringBufferOffset, b, e);
    this.stringBufferOffset += A;
  };
  D.write = function(c) {
    "string" === typeof c && (c = new Buffer(c));
    for (var b, e = 0, A = c.length; e < A; e++) {
      if (this.tState === N) {
        if (b = c[e], this.offset++, 123 === b) {
          this.onToken(U, "{");
        } else if (125 === b) {
          this.onToken(O, "}");
        } else if (91 === b) {
          this.onToken(V, "[");
        } else if (93 === b) {
          this.onToken(S, "]");
        } else if (58 === b) {
          this.onToken(W, ":");
        } else if (44 === b) {
          this.onToken(X, ",");
        } else if (116 === b) {
          this.tState = ra;
        } else if (102 === b) {
          this.tState = ua;
        } else if (110 === b) {
          this.tState = ya;
        } else if (34 === b) {
          this.string = "", this.stringBufferOffset = 0, this.tState = H;
        } else if (45 === b) {
          this.string = "-", this.tState = Ba;
        } else {
          if (48 <= b && 64 > b) {
            this.string = String.fromCharCode(b), this.tState = ia;
          } else if (32 !== b && 9 !== b && 10 !== b && 13 !== b) {
            return this.charError(c, e);
          }
        }
      } else if (this.tState === H) {
        if (b = c[e], 0 < this.bytes_remaining) {
          for (b = 0; b < this.bytes_remaining; b++) {
            this.temp_buffs[this.bytes_in_sequence][this.bytes_in_sequence - this.bytes_remaining + b] = c[b];
          }
          this.appendStringBuf(this.temp_buffs[this.bytes_in_sequence]);
          this.bytes_in_sequence = this.bytes_remaining = 0;
          e = e + b - 1;
        } else if (0 === this.bytes_remaining && 128 <= b) {
          if (193 >= b || 244 < b) {
            return this.onError(Error("Invalid UTF-8 character at position " + e + " in state " + J.toknam(this.tState)));
          }
          194 <= b && 223 >= b && (this.bytes_in_sequence = 2);
          224 <= b && 239 >= b && (this.bytes_in_sequence = 3);
          240 <= b && 244 >= b && (this.bytes_in_sequence = 4);
          if (this.bytes_in_sequence + e > c.length) {
            for (b = 0; b <= c.length - 1 - e; b++) {
              this.temp_buffs[this.bytes_in_sequence][b] = c[e + b];
            }
            this.bytes_remaining = e + this.bytes_in_sequence - c.length;
            e = c.length - 1;
          } else {
            this.appendStringBuf(c, e, e + this.bytes_in_sequence), e = e + this.bytes_in_sequence - 1;
          }
        } else if (34 === b) {
          this.tState = N, this.string += this.stringBuffer.toString("utf8", 0, this.stringBufferOffset), this.stringBufferOffset = 0, this.onToken(P, this.string), this.offset += Buffer.byteLength(this.string, "utf8") + 1, this.string = void 0;
        } else if (92 === b) {
          this.tState = Ca;
        } else if (32 <= b) {
          this.appendStringChar(b);
        } else {
          return this.charError(c, e);
        }
      } else if (this.tState === Ca) {
        if (b = c[e], 34 === b) {
          this.appendStringChar(b), this.tState = H;
        } else if (92 === b) {
          this.appendStringChar(92), this.tState = H;
        } else if (47 === b) {
          this.appendStringChar(47), this.tState = H;
        } else if (98 === b) {
          this.appendStringChar(8), this.tState = H;
        } else if (102 === b) {
          this.appendStringChar(12), this.tState = H;
        } else if (110 === b) {
          this.appendStringChar(10), this.tState = H;
        } else if (114 === b) {
          this.appendStringChar(13), this.tState = H;
        } else if (116 === b) {
          this.appendStringChar(9), this.tState = H;
        } else if (117 === b) {
          this.unicode = "", this.tState = Da;
        } else {
          return this.charError(c, e);
        }
      } else if (this.tState === Da || this.tState === La || this.tState === Ma || this.tState === Ea) {
        if (b = c[e], 48 <= b && 64 > b || 64 < b && 70 >= b || 96 < b && 102 >= b) {
          this.unicode += String.fromCharCode(b), this.tState++ === Ea && (b = parseInt(this.unicode, 16), this.unicode = void 0, void 0 !== this.highSurrogate && 56320 <= b && 57344 > b ? (this.appendStringBuf(new Buffer(String.fromCharCode(this.highSurrogate, b))), this.highSurrogate = void 0) : void 0 === this.highSurrogate && 55296 <= b && 56320 > b ? this.highSurrogate = b : (void 0 !== this.highSurrogate && (this.appendStringBuf(new Buffer(String.fromCharCode(this.highSurrogate))), this.highSurrogate = 
          void 0), this.appendStringBuf(new Buffer(String.fromCharCode(b)))), this.tState = H);
        } else {
          return this.charError(c, e);
        }
      } else if (this.tState === Ba || this.tState === ia) {
        switch(b = c[e], b) {
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
            this.tState = ia;
            break;
          default:
            this.tState = N;
            b = Number(this.string);
            if (isNaN(b)) {
              return this.charError(c, e);
            }
            if (this.string.match(/[0-9]+/) == this.string && b.toString() != this.string) {
              this.onToken(P, this.string);
            } else {
              this.onToken(ba, b);
            }
            this.offset += this.string.length - 1;
            this.string = void 0;
            e--;
        }
      } else if (this.tState === ra) {
        if (114 === c[e]) {
          this.tState = sa;
        } else {
          return this.charError(c, e);
        }
      } else if (this.tState === sa) {
        if (117 === c[e]) {
          this.tState = ta;
        } else {
          return this.charError(c, e);
        }
      } else if (this.tState === ta) {
        if (101 === c[e]) {
          this.tState = N, this.onToken(Y, !0), this.offset += 3;
        } else {
          return this.charError(c, e);
        }
      } else if (this.tState === ua) {
        if (97 === c[e]) {
          this.tState = va;
        } else {
          return this.charError(c, e);
        }
      } else if (this.tState === va) {
        if (108 === c[e]) {
          this.tState = wa;
        } else {
          return this.charError(c, e);
        }
      } else if (this.tState === wa) {
        if (115 === c[e]) {
          this.tState = xa;
        } else {
          return this.charError(c, e);
        }
      } else if (this.tState === xa) {
        if (101 === c[e]) {
          this.tState = N, this.onToken(Z, !1), this.offset += 4;
        } else {
          return this.charError(c, e);
        }
      } else if (this.tState === ya) {
        if (117 === c[e]) {
          this.tState = za;
        } else {
          return this.charError(c, e);
        }
      } else if (this.tState === za) {
        if (108 === c[e]) {
          this.tState = Aa;
        } else {
          return this.charError(c, e);
        }
      } else if (this.tState === Aa) {
        if (108 === c[e]) {
          this.tState = N, this.onToken(aa, null), this.offset += 3;
        } else {
          return this.charError(c, e);
        }
      }
    }
  };
  D.onToken = function(c, b) {
  };
  D.parseError = function(c, b) {
    this.tState = qa;
    this.onError(Error("Unexpected " + J.toknam(c) + (b ? "(" + JSON.stringify(b) + ")" : "") + " in state " + J.toknam(this.state)));
  };
  D.push = function() {
    this.stack.push({value:this.value, key:this.key, mode:this.mode});
  };
  D.pop = function() {
    var c = this.value, b = this.stack.pop();
    this.value = b.value;
    this.key = b.key;
    this.mode = b.mode;
    this.emit(c);
    this.mode || (this.state = Q);
  };
  D.emit = function(c) {
    this.mode && (this.state = X);
    this.onValue(c);
  };
  D.onValue = function(c) {
  };
  D.onToken = function(c, b) {
    if (this.state === Q) {
      if (c === P || c === ba || c === Y || c === Z || c === aa) {
        this.value && (this.value[this.key] = b), this.emit(b);
      } else if (c === U) {
        this.push(), this.value = this.value ? this.value[this.key] = {} : {}, this.key = void 0, this.state = ja, this.mode = ea;
      } else if (c === V) {
        this.push(), this.value = this.value ? this.value[this.key] = [] : [], this.key = 0, this.mode = fa, this.state = Q;
      } else if (c === O) {
        if (this.mode === ea) {
          this.pop();
        } else {
          return this.parseError(c, b);
        }
      } else if (c === S) {
        if (this.mode === fa) {
          this.pop();
        } else {
          return this.parseError(c, b);
        }
      } else {
        return this.parseError(c, b);
      }
    } else if (this.state === ja) {
      if (c === P) {
        this.key = b, this.state = W;
      } else if (c === O) {
        this.pop();
      } else {
        return this.parseError(c, b);
      }
    } else if (this.state === W) {
      if (c === W) {
        this.state = Q;
      } else {
        return this.parseError(c, b);
      }
    } else if (this.state === X) {
      if (c === X) {
        this.mode === fa ? (this.key++, this.state = Q) : this.mode === ea && (this.state = ja);
      } else if (c === S && this.mode === fa || c === O && this.mode === ea) {
        this.pop();
      } else {
        return this.parseError(c, b);
      }
    } else {
      return this.parseError(c, b);
    }
  };
  J.C = k;
  module.exports = J;
  var Ka = require("stream");
  exports = module.exports = da;
  da.through = da;
  var E;
  (function() {
    function c(a) {
      return !(!a || a.pop !== [].pop);
    }
    function b(a) {
      return "" + a === a;
    }
    function e(a) {
      return b(a) || a === +a;
    }
    function A(a) {
      return 0 === a.indexOf("<?xml ") || 0 <= a.toUpperCase().indexOf('<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML ');
    }
    function K(a) {
      if (e(a)) {
        a = HTML_DOT_JSON__NODE_TYPE.TEXT_NODE;
      } else {
        if (c(a)) {
          if (b(a[0])) {
            a = HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE;
          } else {
            var d = a[0];
            a = d === +d ? a[0] : -1;
          }
        } else {
          a = -1;
        }
      }
      return a;
    }
    function T(a) {
      return !c(a) && !(!a || "object" !== typeof a);
    }
    function R(a, d, n, q, B) {
      var F = d[1], M = d.slice(2);
      a = M.length ? a(F, M) : a(F);
      void 0 !== a && null !== a && "" !== a && (e(a) ? n ? n.splice(q, 1, a) : (d.length = 0, d.push(HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, d)) : c(a) ? a[0] === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE ? n ? (a.shift(), a.unshift(q, 1), n.splice.apply(n, a)) : (d.length = 0, d.push.apply(d, a)) : c(a[0]) ? n ? (a.unshift(q, 1), n.splice.apply(n, a)) : (d.length = 0, d.push(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE), d.push.apply(d, a)) : n ? n.splice(q, 1, a) : (d.length = 0, d.push(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, 
      a)) : DEFINE_HTML2JSON__DEBUG && B("PROCESSING_INSTRUCTION Error! [" + JSON.stringify(d) + "]"));
      return a;
    }
    function L(a) {
      return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
    }
    function g(a, d, n) {
      a = L("" + a);
      if (a.match('"')) {
        a = a.match("'") ? d ? "'" + a.split("&apos;").join("'").split("'").join("&apos;") + "'" : '"' + a.split("&quot;").join('"').split('"').join("&quot;") + '"' : "'" + a + "'";
      } else if (n || a.match(/[^0-9a-z\.\-]/g) || 72 < a.length) {
        a = (d ? "'" : '"') + L(a) + (d ? "'" : '"');
      }
      return a;
    }
    function C(a) {
      var d = a.indexOf("#"), n = a.indexOf(".");
      if (d < n) {
        var q = a.split(".")[1];
        a = a.split(".")[0];
        if (0 < d) {
          var B = a.split("#")[1];
          a = a.split("#")[0];
        }
      } else {
        n < d && (B = a.split("#")[1], a = a.split("#")[0], 0 < n && (q = a.split(".")[1], a = a.split(".")[0]));
      }
      return [a, B, q];
    }
    function Na(a) {
      "string" === typeof a && (a = Oa ? Buffer.from(a) : new Buffer(a));
      this._parser.write(a);
    }
    function Pa(a) {
      a && this.write(a);
      this._parser._expect !== DEFINE_HTML2JSON__EXPECT.END_OF_DOCUMENT && this.emit("error", "Invalid html.json");
      this.queue(null);
      this._parser = this._parser._stream = null;
    }
    function Qa(a) {
      -1 < a.message.indexOf("at position") && (a.message = "Invalid JSON (" + a.message + ")");
      this._onerror(a.message);
      this._stream.emit("error", a);
    }
    function Ra(a, d) {
      function n() {
        const u = m._args.length ? m._onInstruction.call(m._stream, m._functionName, m._args) : m._onInstruction.call(m._stream, m._functionName);
        m._functionName = null;
        m._args.length = 0;
        return u;
      }
      function q(u) {
        return "" !== u && null !== u ? Fa[m._attribute] ? " " + m._attribute : " " + m._attribute + "=" + g(u, m._useSingleQuot, m._quotAlways) : "";
      }
      function B(u) {
        const l = t.pop();
        f = t.length ? DEFINE_HTML2JSON__EXPECT.IN_CHILD_NODES : DEFINE_HTML2JSON__EXPECT.END_OF_DOCUMENT;
        switch(l) {
          case HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER:
            p = "<![endif]--\x3e";
            break;
          case HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER:
            p = "\x3c!--<![endif]--\x3e";
            break;
          case HTML_DOT_JSON__NODE_TYPE.CDATA_SECTION:
            p = "]]\x3e";
            break;
          case HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE:
            p = "--\x3e";
            break;
          default:
            b(l) && (p = u ? "" : m._isXMLDocument || m._isXmlInHTML ? " />" : ">", (m._isXMLDocument || m._isXmlInHTML) && !u || Ga[l] && !m._neverOmitEndTag ? m._omittedEndTagBefore = Ha[l] ? "" : l : (p += "</" + l + ">", m._omittedEndTagBefore = ""), F());
        }
      }
      function F() {
        m._neverOmitEndTag = m._skipEscapeForHTML = m._isXmlInHTML = !1;
        for (let u = 0, l = t.length; u < l; ++u) {
          const x = t[u];
          x === HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER || x === HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER ? m._neverOmitEndTag = !0 : b(x) && (ka[x] && (m._neverOmitEndTag = !0), la[x] && (m._skipEscapeForHTML = !0), Ia[x] || 0 < x.indexOf(":")) && (m._isXmlInHTML = !0);
        }
      }
      function M() {
        let u = "";
        !I && m._omittedEndTagBefore && (u = "</" + m._omittedEndTagBefore + ">", m._omittedEndTagBefore = "");
        return u;
      }
      if (a === W || a === X) {
        this.stack.length && this._createValue(a, d);
      } else {
        var t = this._tree, f = this._expect, I = !1, m = this;
        switch(f) {
          case DEFINE_HTML2JSON__EXPECT.PROCESSING_INSTRUCTION_ARGS:
            switch(a) {
              case V:
              case U:
                this._createValue(a, d);
                return;
              case S:
                if (0 === this.stack.length) {
                  d = n();
                  if (c(d)) {
                    ma = this._neverOmitEndTag;
                    na = this._skipEscapeForHTML;
                    oa = this._isXMLDocument || this._isXmlInHTML;
                    var p = E(d, this._onInstruction, this._onerror, {quotAlways:this._quotAlways, useSingleQuot:this._useSingleQuot, instructionAttrPrefix:this._attrPrefix});
                    ma = na = oa = !1;
                  } else {
                    p = e(d) ? "" + d : "";
                  }
                  B(!!p);
                  break;
                }
              case O:
                1 === this.stack.length && (this._args.push(this.value), this.value = null);
                this._createValue(a, d);
                return;
              case P:
              case ba:
              case Y:
              case Z:
              case aa:
                this.stack.length ? this._createValue(a, d) : this._args.push(d);
                return;
              default:
                f = DEFINE_HTML2JSON__EXPECT.ERROR;
            }break;
          case DEFINE_HTML2JSON__EXPECT.IN_INSTRUCTION_ATTRIBUTE:
            switch(a) {
              case V:
              case U:
                this._createValue(a, d);
                return;
              case S:
                if (0 === this.stack.length) {
                  p = q(n());
                  f = DEFINE_HTML2JSON__EXPECT.ATTRIBUTE_PROPERTY;
                  break;
                }
              case O:
                1 === this.stack.length && (this._args.push(this.value), this.value = null);
                this._createValue(a, d);
                return;
              case P:
                if (0 === this.stack.length && !this._functionName) {
                  this._functionName = d;
                  return;
                }
              case ba:
              case Y:
              case Z:
              case aa:
                this.stack.length ? this._createValue(a, d) : this._args.push(d);
                return;
              default:
                f = DEFINE_HTML2JSON__EXPECT.ERROR;
            }break;
          default:
            switch(a) {
              case V:
                switch(f) {
                  case DEFINE_HTML2JSON__EXPECT.ATTRIBUTES_START:
                  case DEFINE_HTML2JSON__EXPECT.CHILD_NODES_START:
                    I = !0;
                  case DEFINE_HTML2JSON__EXPECT.NODE_START:
                  case DEFINE_HTML2JSON__EXPECT.IN_CHILD_NODES:
                    a = DEFINE_HTML2JSON__PHASE.NODE_START;
                    break;
                  case DEFINE_HTML2JSON__EXPECT.INSTRUCTION_ATTRIBUTE_START:
                    a = DEFINE_HTML2JSON__PHASE.IN_INSTRUCTION_ATTRIBUTE;
                    break;
                  default:
                    a = DEFINE_HTML2JSON__PHASE.ERROR;
                }break;
              case S:
                a = f === DEFINE_HTML2JSON__EXPECT.ATTRIBUTES_START || f === DEFINE_HTML2JSON__EXPECT.CHILD_NODES_START ? DEFINE_HTML2JSON__PHASE.CLOSE_EMPTY_ELEMENT : f === DEFINE_HTML2JSON__EXPECT.IN_CHILD_NODES || f === DEFINE_HTML2JSON__EXPECT.END_OF_NODE ? DEFINE_HTML2JSON__PHASE.END_OF_NODE : DEFINE_HTML2JSON__PHASE.ERROR;
                break;
              case U:
                a = f === DEFINE_HTML2JSON__EXPECT.ATTRIBUTES_START ? DEFINE_HTML2JSON__PHASE.ATTRIBUTES_START : f === DEFINE_HTML2JSON__EXPECT.STYLES_START ? DEFINE_HTML2JSON__PHASE.STYLES_START : DEFINE_HTML2JSON__PHASE.ERROR;
                break;
              case O:
                a = f === DEFINE_HTML2JSON__EXPECT.ATTRIBUTE_PROPERTY ? DEFINE_HTML2JSON__PHASE.END_OF_ATTRIBUTES : f === DEFINE_HTML2JSON__EXPECT.CSS_PROPERTY ? DEFINE_HTML2JSON__PHASE.END_OF_STYLES : DEFINE_HTML2JSON__PHASE.ERROR;
                break;
              case P:
                switch(f) {
                  case DEFINE_HTML2JSON__EXPECT.NODE_TYPE:
                  case DEFINE_HTML2JSON__EXPECT.TAG_NAME:
                    a = DEFINE_HTML2JSON__PHASE.TAG_NAME;
                    break;
                  case DEFINE_HTML2JSON__EXPECT.DOCUMENT_NODE_VALUE:
                    a = DEFINE_HTML2JSON__PHASE.DOCUMENT_NODE_VALUE;
                    break;
                  case DEFINE_HTML2JSON__EXPECT.TEXT_NODE_VALUE:
                    a = DEFINE_HTML2JSON__PHASE.TEXT_NODE_VALUE;
                    break;
                  case DEFINE_HTML2JSON__EXPECT.CDATA_SECTION_VALUE:
                    a = DEFINE_HTML2JSON__PHASE.CDATA_SECTION_VALUE;
                    break;
                  case DEFINE_HTML2JSON__EXPECT.COMMENT_NODE_VALUE:
                    a = DEFINE_HTML2JSON__PHASE.COMMENT_NODE_VALUE;
                    break;
                  case DEFINE_HTML2JSON__EXPECT.COMMENT_HIDE_LOWER_FORMURA:
                    a = DEFINE_HTML2JSON__PHASE.COMMENT_HIDE_LOWER_FORMURA;
                    break;
                  case DEFINE_HTML2JSON__EXPECT.COMMENT_SHOW_LOWER_FORMURA:
                    a = DEFINE_HTML2JSON__PHASE.COMMENT_SHOW_LOWER_FORMURA;
                    break;
                  case DEFINE_HTML2JSON__EXPECT.ATTRIBUTE_PROPERTY:
                    a = DEFINE_HTML2JSON__PHASE.ATTRIBUTE_PROPERTY;
                    break;
                  case DEFINE_HTML2JSON__EXPECT.ATTRIBUTE_VALUE:
                    a = DEFINE_HTML2JSON__PHASE.ATTRIBUTE_VALUE;
                    break;
                  case DEFINE_HTML2JSON__EXPECT.STYLES_START:
                    a = DEFINE_HTML2JSON__PHASE.STYLES_START;
                    break;
                  case DEFINE_HTML2JSON__EXPECT.CSS_PROPERTY:
                    a = DEFINE_HTML2JSON__PHASE.CSS_PROPERTY;
                    break;
                  case DEFINE_HTML2JSON__EXPECT.CSS_VALUE:
                    a = DEFINE_HTML2JSON__PHASE.CSS_VALUE;
                    break;
                  case DEFINE_HTML2JSON__EXPECT.ATTRIBUTES_START:
                  case DEFINE_HTML2JSON__EXPECT.CHILD_NODES_START:
                    I = !0;
                  case DEFINE_HTML2JSON__EXPECT.IN_CHILD_NODES:
                    a = DEFINE_HTML2JSON__PHASE.TEXT_DATA;
                    break;
                  case DEFINE_HTML2JSON__EXPECT.PROCESSING_INSTRUCTION_NAME:
                    a = DEFINE_HTML2JSON__PHASE.PROCESSING_INSTRUCTION_NAME;
                    break;
                  case DEFINE_HTML2JSON__EXPECT.INSTRUCTION_ATTRIBUTE_START:
                    a = DEFINE_HTML2JSON__PHASE.INSTRUCTION_ATTRIBUTE_NAME;
                    break;
                  default:
                    a = DEFINE_HTML2JSON__PHASE.ERROR;
                }break;
              case ba:
                switch(f) {
                  case DEFINE_HTML2JSON__EXPECT.NODE_TYPE:
                    a = d;
                    break;
                  case DEFINE_HTML2JSON__EXPECT.ATTRIBUTE_VALUE:
                    a = DEFINE_HTML2JSON__PHASE.ATTRIBUTE_VALUE;
                    break;
                  case DEFINE_HTML2JSON__EXPECT.CSS_VALUE:
                    a = DEFINE_HTML2JSON__PHASE.CSS_VALUE;
                    break;
                  case DEFINE_HTML2JSON__EXPECT.TEXT_NODE_VALUE:
                    a = DEFINE_HTML2JSON__PHASE.TEXT_NODE_VALUE;
                    break;
                  case DEFINE_HTML2JSON__EXPECT.ATTRIBUTES_START:
                  case DEFINE_HTML2JSON__EXPECT.CHILD_NODES_START:
                    I = !0;
                  case DEFINE_HTML2JSON__EXPECT.IN_CHILD_NODES:
                    a = DEFINE_HTML2JSON__PHASE.TEXT_DATA;
                    d += "";
                    break;
                  case DEFINE_HTML2JSON__EXPECT.CDATA_SECTION_VALUE:
                    a = DEFINE_HTML2JSON__PHASE.CDATA_SECTION_VALUE;
                    d += "";
                    break;
                  case DEFINE_HTML2JSON__EXPECT.COMMENT_NODE_VALUE:
                    a = DEFINE_HTML2JSON__PHASE.COMMENT_NODE_VALUE;
                    d += "";
                    break;
                  default:
                    a = DEFINE_HTML2JSON__PHASE.ERROR;
                }break;
              case Y:
              case Z:
              case aa:
                a = f === DEFINE_HTML2JSON__EXPECT.ATTRIBUTE_VALUE ? DEFINE_HTML2JSON__PHASE.ATTRIBUTE_VALUE : DEFINE_HTML2JSON__PHASE.ERROR;
                break;
              default:
                a = DEFINE_HTML2JSON__PHASE.ERROR;
            }switch(a) {
              case DEFINE_HTML2JSON__PHASE.NODE_START:
                p = I && b(t[t.length - 1]) ? ">" : "";
                f = DEFINE_HTML2JSON__EXPECT.NODE_TYPE;
                break;
              case DEFINE_HTML2JSON__PHASE.DOCUMENT_NODE_START:
                f = DEFINE_HTML2JSON__EXPECT.DOCUMENT_NODE_VALUE;
                t.push(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE);
                break;
              case DEFINE_HTML2JSON__PHASE.DOCUMENT_NODE_VALUE:
                DEFINE_HTML2JSON__USE_XHTML && (this._isXMLDocument = A(d));
                p = d;
                f = DEFINE_HTML2JSON__EXPECT.CHILD_NODES_START;
                break;
              case DEFINE_HTML2JSON__PHASE.DOCUMENT_FRAGMENT_NODE_START:
                f = DEFINE_HTML2JSON__EXPECT.CHILD_NODES_START;
                t.push(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE);
                break;
              case DEFINE_HTML2JSON__PHASE.ELEMENT_NODE_START:
                f = DEFINE_HTML2JSON__EXPECT.TAG_NAME;
                break;
              case DEFINE_HTML2JSON__PHASE.TAG_NAME:
                d = C(d);
                a = d[1];
                const u = d[2];
                d = d[0];
                p = ("p" === this._omittedEndTagBefore && Ja[d] ? "</p>" : "") + "<" + d;
                this._omittedEndTagBefore = "";
                a && (p += " id=" + g(a, this._useSingleQuot, this._quotAlways));
                u && (p += " class=" + g(u, this._useSingleQuot, this._quotAlways));
                this._neverOmitEndTag || (this._neverOmitEndTag = !!ka[d]);
                this._skipEscapeForHTML || (this._skipEscapeForHTML = !!la[d]);
                t.push(d);
                F();
                f = DEFINE_HTML2JSON__EXPECT.ATTRIBUTES_START;
                break;
              case DEFINE_HTML2JSON__PHASE.ATTRIBUTES_START:
                f = DEFINE_HTML2JSON__EXPECT.ATTRIBUTE_PROPERTY;
                break;
              case DEFINE_HTML2JSON__PHASE.ATTRIBUTE_PROPERTY:
                0 === d.indexOf(this._attrPrefix) ? (this._attribute = d.substr(this._attrPrefix.length), f = DEFINE_HTML2JSON__EXPECT.INSTRUCTION_ATTRIBUTE_START) : (this._attribute = d, f = "style" === d ? DEFINE_HTML2JSON__EXPECT.STYLES_START : DEFINE_HTML2JSON__EXPECT.ATTRIBUTE_VALUE);
                break;
              case DEFINE_HTML2JSON__PHASE.IN_INSTRUCTION_ATTRIBUTE:
                f = DEFINE_HTML2JSON__EXPECT.IN_INSTRUCTION_ATTRIBUTE;
                break;
              case DEFINE_HTML2JSON__PHASE.INSTRUCTION_ATTRIBUTE_NAME:
                this._functionName = d, d = n();
              case DEFINE_HTML2JSON__PHASE.ATTRIBUTE_VALUE:
                p = q(d);
                f = DEFINE_HTML2JSON__EXPECT.ATTRIBUTE_PROPERTY;
                break;
              case DEFINE_HTML2JSON__PHASE.END_OF_ATTRIBUTES:
                f = DEFINE_HTML2JSON__EXPECT.CHILD_NODES_START;
                break;
              case DEFINE_HTML2JSON__PHASE.STYLES_START:
                f = DEFINE_HTML2JSON__EXPECT.CSS_PROPERTY;
                break;
              case DEFINE_HTML2JSON__PHASE.CSS_PROPERTY:
                this._cssPropety = d;
                f = DEFINE_HTML2JSON__EXPECT.CSS_VALUE;
                break;
              case DEFINE_HTML2JSON__PHASE.CSS_VALUE:
                "" !== d && null !== d && (this._cssText += ";" + this._cssPropety + ":" + d);
                f = DEFINE_HTML2JSON__EXPECT.CSS_PROPERTY;
                break;
              case DEFINE_HTML2JSON__PHASE.END_OF_STYLES:
                this._cssText && (p = q(this._cssText.substr(1)), this._cssText = "");
                f = DEFINE_HTML2JSON__EXPECT.ATTRIBUTE_PROPERTY;
                break;
              case DEFINE_HTML2JSON__PHASE.END_OF_NODE:
                B(!0);
                break;
              case DEFINE_HTML2JSON__PHASE.CLOSE_EMPTY_ELEMENT:
                B(!1);
                break;
              case DEFINE_HTML2JSON__PHASE.TEXT_NODE_START:
                f = DEFINE_HTML2JSON__EXPECT.TEXT_NODE_VALUE;
                t.push(HTML_DOT_JSON__NODE_TYPE.TEXT_NODE);
                break;
              case DEFINE_HTML2JSON__PHASE.TEXT_NODE_VALUE:
                p = M() + (m._skipEscapeForHTML ? "" + d : L("" + d));
                f = DEFINE_HTML2JSON__EXPECT.END_OF_NODE;
                break;
              case DEFINE_HTML2JSON__PHASE.TEXT_DATA:
                p = (I && b(t[t.length - 1]) ? ">" : "") + M() + (m._skipEscapeForHTML ? "" + d : L("" + d));
                f = DEFINE_HTML2JSON__EXPECT.IN_CHILD_NODES;
                break;
              case DEFINE_HTML2JSON__PHASE.CDATA_SECTION_START:
                p = "<![CDATA[";
                f = DEFINE_HTML2JSON__EXPECT.CDATA_SECTION_VALUE;
                t.push(HTML_DOT_JSON__NODE_TYPE.CDATA_SECTION);
                break;
              case DEFINE_HTML2JSON__PHASE.CDATA_SECTION_VALUE:
                p = d;
                f = DEFINE_HTML2JSON__EXPECT.END_OF_NODE;
                break;
              case DEFINE_HTML2JSON__PHASE.COMMENT_NODE_START:
                p = "\x3c!--";
                f = DEFINE_HTML2JSON__EXPECT.COMMENT_NODE_VALUE;
                t.push(HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE);
                break;
              case DEFINE_HTML2JSON__PHASE.COMMENT_NODE_VALUE:
                p = d;
                f = DEFINE_HTML2JSON__EXPECT.END_OF_NODE;
                break;
              case DEFINE_HTML2JSON__PHASE.COMMENT_HIDE_LOWER_START:
                p = M() + "\x3c!--[";
                f = DEFINE_HTML2JSON__EXPECT.COMMENT_HIDE_LOWER_FORMURA;
                t.push(HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER);
                break;
              case DEFINE_HTML2JSON__PHASE.COMMENT_HIDE_LOWER_FORMURA:
                p = d + "]>";
                f = DEFINE_HTML2JSON__EXPECT.CHILD_NODES_START;
                break;
              case DEFINE_HTML2JSON__PHASE.COMMENT_SHOW_LOWER_START:
                p = M() + "\x3c!--[";
                f = DEFINE_HTML2JSON__EXPECT.COMMENT_SHOW_LOWER_FORMURA;
                t.push(HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER);
                break;
              case DEFINE_HTML2JSON__PHASE.COMMENT_SHOW_LOWER_FORMURA:
                p = d + "]>\x3c!--\x3e";
                f = DEFINE_HTML2JSON__EXPECT.CHILD_NODES_START;
                break;
              case DEFINE_HTML2JSON__PHASE.PROCESSING_INSTRUCTION_START:
                f = DEFINE_HTML2JSON__EXPECT.PROCESSING_INSTRUCTION_NAME;
                t.push(HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION);
                break;
              case DEFINE_HTML2JSON__PHASE.PROCESSING_INSTRUCTION_NAME:
                this._functionName = d;
                f = DEFINE_HTML2JSON__EXPECT.PROCESSING_INSTRUCTION_ARGS;
                break;
              default:
                f = DEFINE_HTML2JSON__EXPECT.ERROR;
            }
        }
        f === DEFINE_HTML2JSON__EXPECT.ERROR ? (this._onerror("Not html.json format!"), this._stream.emit("error", "Not html.json format!")) : (this._expect = f, p && this._stream.queue(p));
      }
    }
    var Fa = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, Ha = {link:!0, meta:!0, br:!0, hr:!0, img:!0, input:!0, area:!0, base:!0, col:!0, embed:!0, keygen:!0, param:!0}, Ga = {p:!0, dt:!0, dd:!0, li:!0, option:!0, thead:!0, tfoot:!0, th:!0, tr:!0, td:!0, rt:!0, rp:!0, optgroup:!0, caption:!0, colgroup:!0, col:!0}, ka = {a:!0, audio:!0, del:!0, ins:!0, map:!0, noscript:!0, video:!0}, Ia = 
    {svg:!0, math:!0}, Ja = {table:!0, form:!0, fieldset:!0, blockquot:!0, legend:!0, svg:!0, picture:!0, object:!0, embed:!0, video:!0, audio:!0, applet:!0, iframe:!0, a:!0, abbr:!0, acronym:!0, b:!0, basefont:!0, bdo:!0, big:!0, br:!0, button:!0, cite:!0, code:!0, del:!0, dfn:!0, em:!0, font:!0, i:!0, img:!0, input:!0, ins:!0, isindex:!0, kbd:!0, label:!0, q:!0, ruby:!0, s:!0, samp:!0, select:!0, small:!0, span:!0, strike:!0, strong:!0, sub:!0, sup:!0, textarea:!0, time:!0, tt:!0, u:!0, var:!0, 
    wbr:!0}, la = {script:!0, style:!0, plaintext:!0, xmp:!0, noscript:!0}, ma = !1, na = !1, oa = !1;
    E = function(a, d, n, q) {
      function B(l, x, y, v, h) {
        function w() {
          p && (r += "</" + p + ">", p = "");
        }
        var r = "", ha = l[0], G = l[1], ca = 1, z = ha;
        switch(ha) {
          case HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE:
            DEFINE_HTML2JSON__USE_XHTML && A(G) && (u = !0);
            r += G + F(l, !1, !1);
            break;
          case HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE:
            r += F(l, v, h);
            break;
          case HTML_DOT_JSON__NODE_TYPE.TEXT_NODE:
            w();
            r += h ? G : L("" + G);
            break;
          case HTML_DOT_JSON__NODE_TYPE.CDATA_SECTION:
            b(G) ? r += "<![CDATA[" + G + "]]\x3e" : DEFINE_HTML2JSON__DEBUG && t("CDATA_SECTION Error! [" + l + "]");
            break;
          case HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE:
            b(G) ? r += "\x3c!--" + G + "--\x3e" : DEFINE_HTML2JSON__DEBUG && t("COMMENT_NODE Error! [" + l + "]");
            break;
          case HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER:
            w();
            b(G) ? r += "\x3c!--[" + G + "]>" : DEFINE_HTML2JSON__DEBUG && t("CONDITIONAL_COMMENT_HIDE_LOWER Error! [" + l + "]");
            r += F(l, !0, h) + "<![endif]--\x3e";
            break;
          case HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER:
            w();
            b(G) ? r += "\x3c!--[" + G + "]>\x3c!--\x3e" : DEFINE_HTML2JSON__DEBUG && t("CONDITIONAL_COMMENT_SHOW_LOWER Error! [" + l + "]");
            r += F(l, !0, h) + "\x3c!--<![endif]--\x3e";
            break;
          case HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION:
            v = R(d, l, x, y, t);
            if (void 0 !== v && null !== v && "" !== v && (e(v) || c(v))) {
              return -1;
            }
            break;
          case HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE:
            z = l[1], ca = 2;
          default:
            if (b(z)) {
              z = C(z);
              x = z[1];
              y = z[2];
              z = z[0];
              "p" === p && Ja[z] && (r += "</p>");
              p = "";
              r += "<" + z;
              x && (r += " id=" + g(x, I, f));
              y && (r += " class=" + g(y, I, f));
              if (!u) {
                var pa = u ? !0 : Ia[z] ? !0 : DEFINE_HTML2JSON__USE_XML_NS ? 0 < z.indexOf(":") : !1;
                pa = u = pa;
              }
              ca = l[ca];
              T(ca) && (r += " " + M(ca));
              r = (l = F(l, v || ka[z], h || la[z])) ? r + (">" + l) : r + (u ? "/>" : ">");
              u && !l || Ga[z] && !v ? p = Ha[z] ? "" : z : (r += "</" + z + ">", p = "");
              pa && (u = !1);
            } else {
              DEFINE_HTML2JSON__DEBUG && t("Not html.json! [" + l + "]");
            }
        }
        return r;
      }
      function F(l, x, y) {
        var v = "";
        var h = l[0];
        var w = K(l) === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE, r = h === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE ? 2 : 1;
        for (h = w ? T(l[r]) ? r + 1 : r : h === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE ? 1 : h === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE || h === HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER || h === HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER ? 2 : Infinity; h < l.length; ++h) {
          w = l[h], e(w) ? v += B([HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, w], null, 0, x, y) : c(w) ? (w = B(w, l, h, x, y), -1 === w ? --h : v += w) : DEFINE_HTML2JSON__DEBUG && t("Invalid html.json! [" + w + "]");
        }
        return v;
      }
      function M(l) {
        var x = "", y, v;
        for (y in l) {
          var h = l[y];
          (v = 0 === y.indexOf(m)) && (y = y.substr(m.length));
          "className" === y && (y = "class");
          if (v) {
            var w = void 0;
            v = d;
            var r = y, ha = t;
            c(h) && b(h[0]) ? (w = h[0], h = h.slice(1), w = h.length ? v(w, h) : v(w)) : b(h) ? w = v(h) : DEFINE_HTML2JSON__DEBUG && ha("Invalid InstructionAttr value! [" + r + "=" + h + "]");
            h = w;
          }
          if ("" !== h && null != h && (x += " " + y, !Fa[y])) {
            if ("style" === y && h && "object" === typeof h) {
              v = void 0;
              w = h;
              r = "";
              for (v in w) {
                h = w[v], "0px" === h && (h = 0), r += ";" + v + ":" + L("" + h);
              }
              h = r.substr(1);
              if (!h) {
                continue;
              }
            }
            x += "=" + g(h, I, f);
          }
        }
        return x.substr(1);
      }
      var t = "function" === typeof n ? n : function(l) {
      };
      n = n && "object" === typeof n ? n : q || {};
      var f = !!n.quotAlways, I = !!n.useSingleQuot, m = n.instructionAttrPrefix || DEFINE_HTML2JSON__INSTRUCTION_ATTR_PREFIX, p, u = oa;
      if (c(a)) {
        return K(a) === HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION && (a = [HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, a]), B(a, null, 0, ma || !1, na || !1);
      }
      DEFINE_HTML2JSON__DEBUG && t("Invalid html.json document!");
    };
    DEFINE_HTML2JSON__EXPORT_JSON2HTML && (module.exports = E, E.DOCUMENT_NODE = HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE, E.DOCUMENT_FRAGMENT_NODE = HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, E.ELEMENT_NODE = HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE, E.TEXT_NODE = HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, E.CDATA_SECTION = HTML_DOT_JSON__NODE_TYPE.CDATA_SECTION, E.COMMENT_NODE = HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE, E.CONDITIONAL_COMMENT_HIDE_LOWER = HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER, 
    E.CONDITIONAL_COMMENT_SHOW_LOWER = HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER, E.PROCESSING_INSTRUCTION = HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION);
    const Oa = Buffer.from && Buffer.from !== Uint8Array.from;
    module.exports = function(a, d, n) {
      const q = new J(), B = da(Na, Pa);
      n = d && "object" === typeof d ? d : n || {};
      B._parser = q;
      q._createValue = q.onToken;
      q.onToken = Ra;
      q.onError = Qa;
      q._expect = DEFINE_HTML2JSON__EXPECT.NODE_START;
      q._tree = [];
      q._args = [];
      q._onInstruction = a;
      q._onerror = "function" === typeof d ? d : function(F) {
      };
      q._quotAlways = !!n.quotAlways;
      q._useSingleQuot = !!n.useSingleQuot;
      q._attrPrefix = n.instructionAttrPrefix || DEFINE_HTML2JSON__INSTRUCTION_ATTR_PREFIX;
      q._cssText = "";
      return q._stream = B;
    };
    module.exports.DOCUMENT_NODE = HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE;
    module.exports.DOCUMENT_FRAGMENT_NODE = HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE;
    module.exports.ELEMENT_NODE = HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE;
    module.exports.TEXT_NODE = HTML_DOT_JSON__NODE_TYPE.TEXT_NODE;
    module.exports.CDATA_SECTION = HTML_DOT_JSON__NODE_TYPE.CDATA_SECTION;
    module.exports.COMMENT_NODE = HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE;
    module.exports.CONDITIONAL_COMMENT_HIDE_LOWER = HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER;
    module.exports.CONDITIONAL_COMMENT_SHOW_LOWER = HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER;
    module.exports.PROCESSING_INSTRUCTION = HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION;
  })();
})();

