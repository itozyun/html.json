var DEFINE_HTML2JSON__EXPORT_JSON2HTML = !1, DEFINE_HTML2JSON__EXPORT_JSON2JSON = !1, DEFINE_HTML2JSON__DEBUG = !0, DEFINE_HTML2JSON__USE_XML_NS = !0, DEFINE_HTML2JSON__USE_XHTML = !0, DEFINE_HTML2JSON__GULP_PULGIN = !1, DEFINE_HTML2JSON__INSTRUCTION_ATTR_PREFIX = ":", HTML_DOT_JSON__NODE_TYPE = {ELEMENT_NODE:1, TEXT_NODE:3, CDATA_SECTION:4, PROCESSING_INSTRUCTION:7, COMMENT_NODE:8, DOCUMENT_NODE:9, DOCUMENT_FRAGMENT_NODE:11, CONDITIONAL_COMMENT_HIDE_LOWER:13, CONDITIONAL_COMMENT_SHOW_LOWER:14, NETSCAPE4_CONDITIONAL_COMMENT:15};
const HTML2JSON__PHASE = {ERROR:HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE - 2, NODE_START:HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE - 1, ELEMENT_NODE_START:HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE, TEXT_NODE_START:HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, CDATA_SECTION_START:HTML_DOT_JSON__NODE_TYPE.CDATA_SECTION, PROCESSING_INSTRUCTION_START:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION, COMMENT_NODE_START:HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE, DOCUMENT_NODE_START:HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE, DOCUMENT_FRAGMENT_NODE_START:HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, 
COMMENT_HIDE_LOWER_START:HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER, COMMENT_SHOW_LOWER_START:HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER, NETSCAPE4_CONDITIONAL_COMMENT:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT, DOCUMENT_NODE_VALUE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 1, TEXT_NODE_VALUE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 2, CDATA_SECTION_VALUE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 3, COMMENT_NODE_VALUE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 
4, COMMENT_HIDE_LOWER_FORMURA:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 5, COMMENT_SHOW_LOWER_FORMURA:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 6, PROCESSING_INSTRUCTION_NAME:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 7, TAG_NAME:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 8, ATTRIBUTES_START:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 9, ATTRIBUTE_PROPERTY:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 10, ATTRIBUTE_VALUE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 
11, STYLES_START:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 12, CSS_PROPERTY:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 13, CSS_VALUE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 14, IN_INSTRUCTION_ATTRIBUTE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 15, END_OF_NODE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 16, CLOSE_EMPTY_ELEMENT:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 17, END_OF_ATTRIBUTES:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 
18, END_OF_STYLES:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 19, TEXT_DATA:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 20, INSTRUCTION_ATTRIBUTE_NAME:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 21}, HTML2JSON__EXPECT = {ERROR:HTML2JSON__PHASE.ERROR, NODE_START:HTML2JSON__PHASE.NODE_START, DOCUMENT_NODE_VALUE:HTML2JSON__PHASE.DOCUMENT_NODE_VALUE, TEXT_NODE_VALUE:HTML2JSON__PHASE.TEXT_NODE_VALUE, CDATA_SECTION_VALUE:HTML2JSON__PHASE.CDATA_SECTION_VALUE, COMMENT_NODE_VALUE:HTML2JSON__PHASE.COMMENT_NODE_VALUE, 
COMMENT_HIDE_LOWER_FORMURA:HTML2JSON__PHASE.COMMENT_HIDE_LOWER_FORMURA, COMMENT_SHOW_LOWER_FORMURA:HTML2JSON__PHASE.COMMENT_SHOW_LOWER_FORMURA, PROCESSING_INSTRUCTION_NAME:HTML2JSON__PHASE.PROCESSING_INSTRUCTION_NAME, TAG_NAME:HTML2JSON__PHASE.TAG_NAME, ATTRIBUTES_START:HTML2JSON__PHASE.ATTRIBUTES_START, ATTRIBUTE_PROPERTY:HTML2JSON__PHASE.ATTRIBUTE_PROPERTY, ATTRIBUTE_VALUE:HTML2JSON__PHASE.ATTRIBUTE_VALUE, STYLES_START:HTML2JSON__PHASE.STYLES_START, CSS_PROPERTY:HTML2JSON__PHASE.CSS_PROPERTY, CSS_VALUE:HTML2JSON__PHASE.CSS_VALUE, 
IN_INSTRUCTION_ATTRIBUTE:HTML2JSON__PHASE.IN_INSTRUCTION_ATTRIBUTE, END_OF_NODE:HTML2JSON__PHASE.END_OF_NODE, NODE_TYPE:HTML2JSON__PHASE.END_OF_NODE + 1, PROCESSING_INSTRUCTION_ARGS:HTML2JSON__PHASE.END_OF_NODE + 2, INSTRUCTION_ATTRIBUTE_START:HTML2JSON__PHASE.END_OF_NODE + 3, CHILD_NODES_START:HTML2JSON__PHASE.END_OF_NODE + 4, IN_CHILD_NODES:HTML2JSON__PHASE.END_OF_NODE + 5, END_OF_DOCUMENT:HTML2JSON__PHASE.END_OF_NODE + 6};
(function() {
  function I() {
    this.tState = L;
    this.string = this.value = void 0;
    this.stringBuffer = Buffer.alloc ? Buffer.alloc(65536) : new Buffer(65536);
    this.stringBufferOffset = 0;
    this.mode = this.key = this.highSurrogate = this.unicode = void 0;
    this.stack = [];
    this.state = P;
    this.bytes_in_sequence = this.bytes_remaining = 0;
    this.temp_buffs = {2:new Buffer(2), 3:new Buffer(3), 4:new Buffer(4)};
    this.offset = -1;
  }
  function da(c, b, e) {
    function C() {
      for (; Q.length && !h.paused;) {
        var y = Q.shift();
        if (null === y) {
          return h.emit("end");
        }
        h.emit("data", y);
      }
    }
    c = c || function(y) {
      this.queue(y);
    };
    b = b || function() {
      this.queue(null);
    };
    var J = !1, T = !1, Q = [], R = !1, h = new Ma();
    h.readable = h.writable = !0;
    h.paused = !1;
    h.autoDestroy = !(e && !1 === e.autoDestroy);
    h.write = function(y) {
      c.call(this, y);
      return !h.paused;
    };
    h.queue = h.push = function(y) {
      if (R) {
        return h;
      }
      null === y && (R = !0);
      Q.push(y);
      C();
      return h;
    };
    h.on("end", function() {
      h.readable = !1;
      !h.writable && h.autoDestroy && process.nextTick(function() {
        h.destroy();
      });
    });
    h.end = function(y) {
      if (!J) {
        return J = !0, arguments.length && h.write(y), h.writable = !1, b.call(h), !h.readable && h.autoDestroy && h.destroy(), h;
      }
    };
    h.destroy = function() {
      if (!T) {
        return J = T = !0, Q.length = 0, h.writable = h.readable = !1, h.emit("close"), h;
      }
    };
    h.pause = function() {
      if (!h.paused) {
        return h.paused = !0, h;
      }
    };
    h.resume = function() {
      h.paused && (h.paused = !1, h.emit("resume"));
      C();
      h.paused || h.emit("drain");
      return h;
    };
    return h;
  }
  var n = {}, U = n.LEFT_BRACE = 1, M = n.RIGHT_BRACE = 2, V = n.LEFT_BRACKET = 3, S = n.RIGHT_BRACKET = 4, W = n.COLON = 5, X = n.COMMA = 6, Y = n.TRUE = 7, Z = n.FALSE = 8, aa = n.NULL = 9, N = n.STRING = 10, ba = n.NUMBER = 11, L = n.START = 17, qa = n.STOP = 18, ra = n.TRUE1 = 33, sa = n.TRUE2 = 34, ta = n.TRUE3 = 35, ua = n.FALSE1 = 49, va = n.FALSE2 = 50, wa = n.FALSE3 = 51, xa = n.FALSE4 = 52, ya = n.NULL1 = 65, za = n.NULL2 = 66, Aa = n.NULL3 = 67, Ba = n.NUMBER1 = 81, ha = n.NUMBER3 = 83, 
  H = n.STRING1 = 97, Ca = n.STRING2 = 98, Da = n.STRING3 = 99, Na = n.STRING4 = 100, Oa = n.STRING5 = 101, Ea = n.STRING6 = 102, P = n.VALUE = 113, ia = n.KEY = 114, ea = n.OBJECT = 129, fa = n.ARRAY = 130;
  I.toknam = function(c) {
    for (var b = Object.keys(n), e = 0, C = b.length; e < C; e++) {
      var J = b[e];
      if (n[J] === c) {
        return J;
      }
    }
    return c && "0x" + c.toString(16);
  };
  var E = I.prototype;
  E.onError = function(c) {
    throw c;
  };
  E.charError = function(c, b) {
    this.tState = qa;
    this.onError(Error("Unexpected " + JSON.stringify(String.fromCharCode(c[b])) + " at position " + b + " in state " + I.toknam(this.tState)));
  };
  E.appendStringChar = function(c) {
    65536 <= this.stringBufferOffset && (this.string += this.stringBuffer.toString("utf8"), this.stringBufferOffset = 0);
    this.stringBuffer[this.stringBufferOffset++] = c;
  };
  E.appendStringBuf = function(c, b, e) {
    var C = c.length;
    "number" === typeof b && (C = "number" === typeof e ? 0 > e ? c.length - b + e : e - b : c.length - b);
    0 > C && (C = 0);
    65536 < this.stringBufferOffset + C && (this.string += this.stringBuffer.toString("utf8", 0, this.stringBufferOffset), this.stringBufferOffset = 0);
    c.copy(this.stringBuffer, this.stringBufferOffset, b, e);
    this.stringBufferOffset += C;
  };
  E.write = function(c) {
    "string" === typeof c && (c = new Buffer(c));
    for (var b, e = 0, C = c.length; e < C; e++) {
      if (this.tState === L) {
        if (b = c[e], this.offset++, 123 === b) {
          this.onToken(U, "{");
        } else if (125 === b) {
          this.onToken(M, "}");
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
            this.string = String.fromCharCode(b), this.tState = ha;
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
            return this.onError(Error("Invalid UTF-8 character at position " + e + " in state " + I.toknam(this.tState)));
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
          this.tState = L, this.string += this.stringBuffer.toString("utf8", 0, this.stringBufferOffset), this.stringBufferOffset = 0, this.onToken(N, this.string), this.offset += Buffer.byteLength(this.string, "utf8") + 1, this.string = void 0;
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
      } else if (this.tState === Da || this.tState === Na || this.tState === Oa || this.tState === Ea) {
        if (b = c[e], 48 <= b && 64 > b || 64 < b && 70 >= b || 96 < b && 102 >= b) {
          this.unicode += String.fromCharCode(b), this.tState++ === Ea && (b = parseInt(this.unicode, 16), this.unicode = void 0, void 0 !== this.highSurrogate && 56320 <= b && 57344 > b ? (this.appendStringBuf(new Buffer(String.fromCharCode(this.highSurrogate, b))), this.highSurrogate = void 0) : void 0 === this.highSurrogate && 55296 <= b && 56320 > b ? this.highSurrogate = b : (void 0 !== this.highSurrogate && (this.appendStringBuf(new Buffer(String.fromCharCode(this.highSurrogate))), this.highSurrogate = 
          void 0), this.appendStringBuf(new Buffer(String.fromCharCode(b)))), this.tState = H);
        } else {
          return this.charError(c, e);
        }
      } else if (this.tState === Ba || this.tState === ha) {
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
            this.tState = ha;
            break;
          default:
            this.tState = L;
            b = Number(this.string);
            if (isNaN(b)) {
              return this.charError(c, e);
            }
            if (this.string.match(/[0-9]+/) == this.string && b.toString() != this.string) {
              this.onToken(N, this.string);
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
          this.tState = L, this.onToken(Y, !0), this.offset += 3;
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
          this.tState = L, this.onToken(Z, !1), this.offset += 4;
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
          this.tState = L, this.onToken(aa, null), this.offset += 3;
        } else {
          return this.charError(c, e);
        }
      }
    }
  };
  E.onToken = function(c, b) {
  };
  E.parseError = function(c, b) {
    this.tState = qa;
    this.onError(Error("Unexpected " + I.toknam(c) + (b ? "(" + JSON.stringify(b) + ")" : "") + " in state " + I.toknam(this.state)));
  };
  E.push = function() {
    this.stack.push({value:this.value, key:this.key, mode:this.mode});
  };
  E.pop = function() {
    var c = this.value, b = this.stack.pop();
    this.value = b.value;
    this.key = b.key;
    this.mode = b.mode;
    this.emit(c);
    this.mode || (this.state = P);
  };
  E.emit = function(c) {
    this.mode && (this.state = X);
    this.onValue(c);
  };
  E.onValue = function(c) {
  };
  E.onToken = function(c, b) {
    if (this.state === P) {
      if (c === N || c === ba || c === Y || c === Z || c === aa) {
        this.value && (this.value[this.key] = b), this.emit(b);
      } else if (c === U) {
        this.push(), this.value = this.value ? this.value[this.key] = {} : {}, this.key = void 0, this.state = ia, this.mode = ea;
      } else if (c === V) {
        this.push(), this.value = this.value ? this.value[this.key] = [] : [], this.key = 0, this.mode = fa, this.state = P;
      } else if (c === M) {
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
    } else if (this.state === ia) {
      if (c === N) {
        this.key = b, this.state = W;
      } else if (c === M) {
        this.pop();
      } else {
        return this.parseError(c, b);
      }
    } else if (this.state === W) {
      if (c === W) {
        this.state = P;
      } else {
        return this.parseError(c, b);
      }
    } else if (this.state === X) {
      if (c === X) {
        this.mode === fa ? (this.key++, this.state = P) : this.mode === ea && (this.state = ia);
      } else if (c === S && this.mode === fa || c === M && this.mode === ea) {
        this.pop();
      } else {
        return this.parseError(c, b);
      }
    } else {
      return this.parseError(c, b);
    }
  };
  I.C = n;
  module.exports = I;
  var Ma = require("stream");
  exports = module.exports = da;
  da.through = da;
  var F;
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
    function C(a) {
      return 0 === a.indexOf("<?xml ") || 0 <= a.toUpperCase().indexOf('<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML ');
    }
    function J(a) {
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
    function Q(a, d, m, l, z) {
      var u = d[1], O = d.slice(2);
      a = O.length ? a(u, O) : a(u);
      void 0 !== a && null !== a && "" !== a && (e(a) ? m ? m.splice(l, 1, a) : (d.length = 0, d.push(HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, d)) : c(a) ? a[0] === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE ? m ? (a.shift(), a.unshift(l, 1), m.splice.apply(m, a)) : (d.length = 0, d.push.apply(d, a)) : c(a[0]) ? m ? (a.unshift(l, 1), m.splice.apply(m, a)) : (d.length = 0, d.push(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE), d.push.apply(d, a)) : m ? m.splice(l, 1, a) : (d.length = 0, d.push(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, 
      a)) : DEFINE_HTML2JSON__DEBUG && z("PROCESSING_INSTRUCTION Error! [" + JSON.stringify(d) + "]"));
      return a;
    }
    function R(a, d, m, l, z) {
      if (c(l) && b(l[0])) {
        var u = l[0];
        l = l.slice(1);
        u = l.length ? d(u, l) : d(u);
      } else {
        b(l) ? u = d(l) : DEFINE_HTML2JSON__DEBUG && z("Invalid InstructionAttr value! [" + m + "=" + l + "]");
      }
      return a && c(u) ? R(!0, d, m, u, z) : u;
    }
    function h(a) {
      return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
    }
    function y(a, d, m) {
      a = h("" + a);
      if (a.match('"')) {
        a = a.match("'") ? d ? "'" + a.split("&apos;").join("'").split("'").join("&apos;") + "'" : '"' + a.split("&quot;").join('"').split('"').join("&quot;") + '"' : "'" + a + "'";
      } else if (m || a.match(/[^0-9a-z\.\-]/g) || 72 < a.length) {
        a = (d ? "'" : '"') + h(a) + (d ? "'" : '"');
      }
      return a;
    }
    function Fa(a) {
      var d = [];
      a = a.split("");
      for (var m = a.length, l; m;) {
        l = a[--m], "A" <= l && "Z" >= l && (l = "-" + l.toLowerCase()), d[m] = l;
      }
      return d.join("");
    }
    function Ga(a) {
      var d = a.indexOf("#"), m = a.indexOf(".");
      if (d < m) {
        var l = a.split(".")[1];
        a = a.split(".")[0];
        if (0 < d) {
          var z = a.split("#")[1];
          a = a.split("#")[0];
        }
      } else {
        m < d && (z = a.split("#")[1], a = a.split("#")[0], 0 < m && (l = a.split(".")[1], a = a.split(".")[0]));
      }
      return [a, z, l];
    }
    function Pa(a) {
      "string" === typeof a && (a = Qa ? Buffer.from(a) : new Buffer(a));
      this._parser.write(a);
    }
    function Ra(a) {
      a && this.write(a);
      this._parser._expect !== HTML2JSON__EXPECT.END_OF_DOCUMENT && this.emit("error", "Invalid html.json");
      this.queue(null);
      this._parser = this._parser._stream = null;
    }
    function Sa(a) {
      -1 < a.message.indexOf("at position") && (a.message = "Invalid JSON (" + a.message + ")");
      this._onerror(a.message);
      this._stream.emit("error", a);
    }
    function Ta(a, d) {
      function m() {
        const k = g._args.length ? g._onInstruction.call(g._stream, g._functionName, g._args) : g._onInstruction.call(g._stream, g._functionName);
        g._functionName = null;
        g._args.length = 0;
        return k;
      }
      function l() {
        g._args.unshift(g._functionName);
        const k = R(!0, g._onInstruction.bind(g._stream), g._attribute, g._args, g._onerror);
        g._functionName = null;
        g._args.length = 0;
        return k;
      }
      function z(k) {
        if (null != k) {
          if (ja[g._attribute]) {
            if (!1 !== k) {
              return " " + g._attribute;
            }
          } else {
            return " " + g._attribute + "=" + y(k, g._useSingleQuot, g._quotAlways);
          }
        }
        return "";
      }
      function u(k) {
        const w = v.pop();
        f = v.length ? HTML2JSON__EXPECT.IN_CHILD_NODES : HTML2JSON__EXPECT.END_OF_DOCUMENT;
        switch(w) {
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
            b(w) && (p = k ? "" : g._isXMLDocument || g._isXmlInHTML ? " />" : ">", (g._isXMLDocument || g._isXmlInHTML) && !k || Ha[w] && !g._endTagRequired ? g._omittedEndTagBefore = Ia[w] ? "" : w : (p += "</" + w + ">", g._omittedEndTagBefore = ""), O());
        }
      }
      function O() {
        g._endTagRequired = g._escapeForHTMLDisabled = g._isXmlInHTML = !1;
        for (let k = 0, w = v.length; k < w; ++k) {
          const r = v[k];
          r === HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER || r === HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER ? g._endTagRequired = !0 : b(r) && (ka[r] && (g._endTagRequired = !0), la[r] && (g._escapeForHTMLDisabled = !0), Ja[r] || DEFINE_HTML2JSON__USE_XML_NS && 0 < r.indexOf(":")) && (g._isXmlInHTML = !0);
        }
      }
      function D() {
        let k = "";
        !K && g._omittedEndTagBefore && (k = "</" + g._omittedEndTagBefore + ">", g._omittedEndTagBefore = "");
        return k;
      }
      if (a === W || a === X) {
        this.stack.length && this._createValue(a, d);
      } else {
        var v = this._tree, f = this._expect, K = !1, g = this;
        switch(f) {
          case HTML2JSON__EXPECT.PROCESSING_INSTRUCTION_ARGS:
            switch(a) {
              case V:
              case U:
                this._createValue(a, d);
                return;
              case S:
                if (0 === this.stack.length) {
                  d = m();
                  if (c(d)) {
                    ma = this._endTagRequired;
                    na = this._escapeForHTMLDisabled;
                    oa = this._isXMLDocument || this._isXmlInHTML;
                    var p = F(d, this._onInstruction, this._onerror, {quotAlways:this._quotAlways, useSingleQuot:this._useSingleQuot, instructionAttrPrefix:this._attrPrefix});
                    ma = na = oa = !1;
                  } else {
                    p = e(d) ? "" + d : "";
                  }
                  u(!!p);
                  break;
                }
              case M:
                1 === this.stack.length && (this._args.push(this.value), this.value = null);
                this._createValue(a, d);
                return;
              case N:
              case ba:
              case Y:
              case Z:
              case aa:
                this.stack.length ? this._createValue(a, d) : this._args.push(d);
                return;
              default:
                f = HTML2JSON__EXPECT.ERROR;
            }break;
          case HTML2JSON__EXPECT.IN_INSTRUCTION_ATTRIBUTE:
            switch(a) {
              case V:
              case U:
                this._createValue(a, d);
                return;
              case S:
                if (0 === this.stack.length) {
                  p = z(l());
                  f = HTML2JSON__EXPECT.ATTRIBUTE_PROPERTY;
                  break;
                }
              case M:
                1 === this.stack.length && (this._args.push(this.value), this.value = null);
                this._createValue(a, d);
                return;
              case N:
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
                f = HTML2JSON__EXPECT.ERROR;
            }break;
          default:
            switch(a) {
              case V:
                switch(f) {
                  case HTML2JSON__EXPECT.ATTRIBUTES_START:
                  case HTML2JSON__EXPECT.CHILD_NODES_START:
                    K = !0;
                  case HTML2JSON__EXPECT.NODE_START:
                  case HTML2JSON__EXPECT.IN_CHILD_NODES:
                    a = HTML2JSON__PHASE.NODE_START;
                    break;
                  case HTML2JSON__EXPECT.INSTRUCTION_ATTRIBUTE_START:
                    a = HTML2JSON__PHASE.IN_INSTRUCTION_ATTRIBUTE;
                    break;
                  default:
                    a = HTML2JSON__PHASE.ERROR;
                }break;
              case S:
                a = f === HTML2JSON__EXPECT.ATTRIBUTES_START || f === HTML2JSON__EXPECT.CHILD_NODES_START ? HTML2JSON__PHASE.CLOSE_EMPTY_ELEMENT : f === HTML2JSON__EXPECT.IN_CHILD_NODES || f === HTML2JSON__EXPECT.END_OF_NODE ? HTML2JSON__PHASE.END_OF_NODE : HTML2JSON__PHASE.ERROR;
                break;
              case U:
                a = f === HTML2JSON__EXPECT.ATTRIBUTES_START ? HTML2JSON__PHASE.ATTRIBUTES_START : f === HTML2JSON__EXPECT.STYLES_START ? HTML2JSON__PHASE.STYLES_START : HTML2JSON__PHASE.ERROR;
                break;
              case M:
                a = f === HTML2JSON__EXPECT.ATTRIBUTE_PROPERTY ? HTML2JSON__PHASE.END_OF_ATTRIBUTES : f === HTML2JSON__EXPECT.CSS_PROPERTY ? HTML2JSON__PHASE.END_OF_STYLES : HTML2JSON__PHASE.ERROR;
                break;
              case N:
                switch(f) {
                  case HTML2JSON__EXPECT.NODE_TYPE:
                  case HTML2JSON__EXPECT.TAG_NAME:
                    a = HTML2JSON__PHASE.TAG_NAME;
                    break;
                  case HTML2JSON__EXPECT.DOCUMENT_NODE_VALUE:
                    a = HTML2JSON__PHASE.DOCUMENT_NODE_VALUE;
                    break;
                  case HTML2JSON__EXPECT.TEXT_NODE_VALUE:
                    a = HTML2JSON__PHASE.TEXT_NODE_VALUE;
                    break;
                  case HTML2JSON__EXPECT.CDATA_SECTION_VALUE:
                    a = HTML2JSON__PHASE.CDATA_SECTION_VALUE;
                    break;
                  case HTML2JSON__EXPECT.COMMENT_NODE_VALUE:
                    a = HTML2JSON__PHASE.COMMENT_NODE_VALUE;
                    break;
                  case HTML2JSON__EXPECT.COMMENT_HIDE_LOWER_FORMURA:
                    a = HTML2JSON__PHASE.COMMENT_HIDE_LOWER_FORMURA;
                    break;
                  case HTML2JSON__EXPECT.COMMENT_SHOW_LOWER_FORMURA:
                    a = HTML2JSON__PHASE.COMMENT_SHOW_LOWER_FORMURA;
                    break;
                  case HTML2JSON__EXPECT.ATTRIBUTE_PROPERTY:
                    a = HTML2JSON__PHASE.ATTRIBUTE_PROPERTY;
                    break;
                  case HTML2JSON__EXPECT.ATTRIBUTE_VALUE:
                    a = HTML2JSON__PHASE.ATTRIBUTE_VALUE;
                    break;
                  case HTML2JSON__EXPECT.STYLES_START:
                    a = HTML2JSON__PHASE.STYLES_START;
                    break;
                  case HTML2JSON__EXPECT.CSS_PROPERTY:
                    a = HTML2JSON__PHASE.CSS_PROPERTY;
                    break;
                  case HTML2JSON__EXPECT.CSS_VALUE:
                    a = HTML2JSON__PHASE.CSS_VALUE;
                    break;
                  case HTML2JSON__EXPECT.ATTRIBUTES_START:
                  case HTML2JSON__EXPECT.CHILD_NODES_START:
                    K = !0;
                  case HTML2JSON__EXPECT.IN_CHILD_NODES:
                    a = HTML2JSON__PHASE.TEXT_DATA;
                    break;
                  case HTML2JSON__EXPECT.PROCESSING_INSTRUCTION_NAME:
                    a = HTML2JSON__PHASE.PROCESSING_INSTRUCTION_NAME;
                    break;
                  case HTML2JSON__EXPECT.INSTRUCTION_ATTRIBUTE_START:
                    a = HTML2JSON__PHASE.INSTRUCTION_ATTRIBUTE_NAME;
                    break;
                  default:
                    a = HTML2JSON__PHASE.ERROR;
                }break;
              case ba:
                switch(f) {
                  case HTML2JSON__EXPECT.NODE_TYPE:
                    a = d;
                    break;
                  case HTML2JSON__EXPECT.ATTRIBUTE_VALUE:
                    a = HTML2JSON__PHASE.ATTRIBUTE_VALUE;
                    break;
                  case HTML2JSON__EXPECT.CSS_VALUE:
                    a = HTML2JSON__PHASE.CSS_VALUE;
                    break;
                  case HTML2JSON__EXPECT.TEXT_NODE_VALUE:
                    a = HTML2JSON__PHASE.TEXT_NODE_VALUE;
                    break;
                  case HTML2JSON__EXPECT.ATTRIBUTES_START:
                  case HTML2JSON__EXPECT.CHILD_NODES_START:
                    K = !0;
                  case HTML2JSON__EXPECT.IN_CHILD_NODES:
                    a = HTML2JSON__PHASE.TEXT_DATA;
                    d += "";
                    break;
                  case HTML2JSON__EXPECT.CDATA_SECTION_VALUE:
                    a = HTML2JSON__PHASE.CDATA_SECTION_VALUE;
                    d += "";
                    break;
                  case HTML2JSON__EXPECT.COMMENT_NODE_VALUE:
                    a = HTML2JSON__PHASE.COMMENT_NODE_VALUE;
                    d += "";
                    break;
                  default:
                    a = HTML2JSON__PHASE.ERROR;
                }break;
              case Y:
              case Z:
              case aa:
                a = f === HTML2JSON__EXPECT.ATTRIBUTE_VALUE ? HTML2JSON__PHASE.ATTRIBUTE_VALUE : HTML2JSON__PHASE.ERROR;
                break;
              default:
                a = HTML2JSON__PHASE.ERROR;
            }switch(a) {
              case HTML2JSON__PHASE.NODE_START:
                p = K && b(v[v.length - 1]) ? ">" : "";
                f = HTML2JSON__EXPECT.NODE_TYPE;
                break;
              case HTML2JSON__PHASE.DOCUMENT_NODE_START:
                f = HTML2JSON__EXPECT.DOCUMENT_NODE_VALUE;
                v.push(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE);
                break;
              case HTML2JSON__PHASE.DOCUMENT_NODE_VALUE:
                DEFINE_HTML2JSON__USE_XHTML && (this._isXMLDocument = C(d));
                p = d;
                f = HTML2JSON__EXPECT.CHILD_NODES_START;
                break;
              case HTML2JSON__PHASE.DOCUMENT_FRAGMENT_NODE_START:
                f = HTML2JSON__EXPECT.CHILD_NODES_START;
                v.push(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE);
                break;
              case HTML2JSON__PHASE.ELEMENT_NODE_START:
                f = HTML2JSON__EXPECT.TAG_NAME;
                break;
              case HTML2JSON__PHASE.TAG_NAME:
                d = Ga(d);
                a = d[1];
                const k = d[2];
                d = d[0];
                p = ("p" !== this._omittedEndTagBefore || Ka[d] ? "" : "</p>") + "<" + d;
                this._omittedEndTagBefore = "";
                a && (p += " id=" + y(a, this._useSingleQuot, this._quotAlways));
                k && (p += " class=" + y(k, this._useSingleQuot, this._quotAlways));
                this._endTagRequired || (this._endTagRequired = !!ka[d]);
                this._escapeForHTMLDisabled || (this._escapeForHTMLDisabled = !!la[d]);
                v.push(d);
                O();
                f = HTML2JSON__EXPECT.ATTRIBUTES_START;
                break;
              case HTML2JSON__PHASE.ATTRIBUTES_START:
                f = HTML2JSON__EXPECT.ATTRIBUTE_PROPERTY;
                break;
              case HTML2JSON__PHASE.ATTRIBUTE_PROPERTY:
                0 === d.indexOf(this._attrPrefix) ? (this._attribute = d.substr(this._attrPrefix.length), f = HTML2JSON__EXPECT.INSTRUCTION_ATTRIBUTE_START) : (this._attribute = d, f = "style" === d ? HTML2JSON__EXPECT.STYLES_START : HTML2JSON__EXPECT.ATTRIBUTE_VALUE);
                break;
              case HTML2JSON__PHASE.IN_INSTRUCTION_ATTRIBUTE:
                f = HTML2JSON__EXPECT.IN_INSTRUCTION_ATTRIBUTE;
                break;
              case HTML2JSON__PHASE.INSTRUCTION_ATTRIBUTE_NAME:
                this._functionName = d, d = l();
              case HTML2JSON__PHASE.ATTRIBUTE_VALUE:
                p = z(d);
                f = HTML2JSON__EXPECT.ATTRIBUTE_PROPERTY;
                break;
              case HTML2JSON__PHASE.END_OF_ATTRIBUTES:
                f = HTML2JSON__EXPECT.CHILD_NODES_START;
                break;
              case HTML2JSON__PHASE.STYLES_START:
                f = HTML2JSON__EXPECT.CSS_PROPERTY;
                break;
              case HTML2JSON__PHASE.CSS_PROPERTY:
                this._cssPropety = d;
                f = HTML2JSON__EXPECT.CSS_VALUE;
                break;
              case HTML2JSON__PHASE.CSS_VALUE:
                "" !== d && null !== d && (this._cssText += ";" + Fa(this._cssPropety) + ":" + d);
                f = HTML2JSON__EXPECT.CSS_PROPERTY;
                break;
              case HTML2JSON__PHASE.END_OF_STYLES:
                this._cssText && (p = z(this._cssText.substr(1)), this._cssText = "");
                f = HTML2JSON__EXPECT.ATTRIBUTE_PROPERTY;
                break;
              case HTML2JSON__PHASE.END_OF_NODE:
                u(!0);
                break;
              case HTML2JSON__PHASE.CLOSE_EMPTY_ELEMENT:
                u(!1);
                break;
              case HTML2JSON__PHASE.TEXT_NODE_START:
                f = HTML2JSON__EXPECT.TEXT_NODE_VALUE;
                v.push(HTML_DOT_JSON__NODE_TYPE.TEXT_NODE);
                break;
              case HTML2JSON__PHASE.TEXT_NODE_VALUE:
                p = D() + (g._escapeForHTMLDisabled ? "" + d : h("" + d));
                f = HTML2JSON__EXPECT.END_OF_NODE;
                break;
              case HTML2JSON__PHASE.TEXT_DATA:
                p = (K && b(v[v.length - 1]) ? ">" : "") + D() + (g._escapeForHTMLDisabled ? "" + d : h("" + d));
                f = HTML2JSON__EXPECT.IN_CHILD_NODES;
                break;
              case HTML2JSON__PHASE.CDATA_SECTION_START:
                p = "<![CDATA[";
                f = HTML2JSON__EXPECT.CDATA_SECTION_VALUE;
                v.push(HTML_DOT_JSON__NODE_TYPE.CDATA_SECTION);
                break;
              case HTML2JSON__PHASE.CDATA_SECTION_VALUE:
                p = d;
                f = HTML2JSON__EXPECT.END_OF_NODE;
                break;
              case HTML2JSON__PHASE.COMMENT_NODE_START:
                p = "\x3c!--";
                f = HTML2JSON__EXPECT.COMMENT_NODE_VALUE;
                v.push(HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE);
                break;
              case HTML2JSON__PHASE.COMMENT_NODE_VALUE:
                p = d;
                f = HTML2JSON__EXPECT.END_OF_NODE;
                break;
              case HTML2JSON__PHASE.COMMENT_HIDE_LOWER_START:
                p = D() + "\x3c!--[";
                f = HTML2JSON__EXPECT.COMMENT_HIDE_LOWER_FORMURA;
                v.push(HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER);
                break;
              case HTML2JSON__PHASE.COMMENT_HIDE_LOWER_FORMURA:
                p = d + "]>";
                f = HTML2JSON__EXPECT.CHILD_NODES_START;
                break;
              case HTML2JSON__PHASE.COMMENT_SHOW_LOWER_START:
                p = D() + "\x3c!--[";
                f = HTML2JSON__EXPECT.COMMENT_SHOW_LOWER_FORMURA;
                v.push(HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER);
                break;
              case HTML2JSON__PHASE.COMMENT_SHOW_LOWER_FORMURA:
                p = d + "]>\x3c!--\x3e";
                f = HTML2JSON__EXPECT.CHILD_NODES_START;
                break;
              case HTML2JSON__PHASE.PROCESSING_INSTRUCTION_START:
                f = HTML2JSON__EXPECT.PROCESSING_INSTRUCTION_NAME;
                v.push(HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION);
                break;
              case HTML2JSON__PHASE.PROCESSING_INSTRUCTION_NAME:
                this._functionName = d;
                f = HTML2JSON__EXPECT.PROCESSING_INSTRUCTION_ARGS;
                break;
              default:
                f = HTML2JSON__EXPECT.ERROR;
            }
        }
        f === HTML2JSON__EXPECT.ERROR ? (this._onerror("Not html.json format!"), this._stream.emit("error", "Not html.json format!")) : (this._expect = f, p && this._stream.queue(p));
      }
    }
    var ja = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, Ia = {link:!0, meta:!0, br:!0, hr:!0, img:!0, input:!0, area:!0, base:!0, col:!0, embed:!0, keygen:!0, param:!0, track:!0, wbr:!0, command:!0, basefont:!0, frame:!0, isindex:!0, bgsound:!0}, Ha = {p:!0, dt:!0, dd:!0, li:!0, option:!0, thead:!0, tfoot:!0, th:!0, tr:!0, td:!0, rt:!0, rp:!0, optgroup:!0, caption:!0, colgroup:!0}, ka = 
    {a:!0, audio:!0, del:!0, ins:!0, map:!0, noscript:!0, video:!0}, Ja = {xml:"http://www.w3.org/1999/xhtml", svg:"http://www.w3.org/2000/svg", math:"http://www.w3.org/1998/Math/MathML"}, Ka = {address:!0, article:!0, aside:!0, blockquote:!0, canvas:!0, details:!0, div:!0, dl:!0, fieldset:!0, figcaption:!0, figure:!0, footer:!0, form:!0, h1:!0, h2:!0, h3:!0, h4:!0, h5:!0, h6:!0, header:!0, hgroup:!0, hr:!0, legend:!0, main:!0, menu:!0, nav:!0, noscript:!0, ol:!0, p:!0, pre:!0, section:!0, ul:!0, 
    center:!0, dir:!0, noframes:!0, marquee:!0}, la = {script:!0, style:!0, plaintext:!0, xmp:!0}, ma = !1, na = !1, oa = !1;
    F = function(a, d, m, l) {
      function z(k, w, r, x, q) {
        function B() {
          g && (t += "</" + g + ">", g = "");
        }
        var t = "", La = k[0], G = k[1], ca = 1, A = La;
        switch(La) {
          case HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE:
            DEFINE_HTML2JSON__USE_XHTML && C(G) && (p = !0);
            t += G + u(k, !1, !1);
            break;
          case HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE:
            t += u(k, x, q);
            break;
          case HTML_DOT_JSON__NODE_TYPE.TEXT_NODE:
            B();
            t += q ? G : h("" + G);
            break;
          case HTML_DOT_JSON__NODE_TYPE.CDATA_SECTION:
            b(G) ? t += "<![CDATA[" + G + "]]\x3e" : DEFINE_HTML2JSON__DEBUG && D("CDATA_SECTION Error! [" + k + "]");
            break;
          case HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE:
            b(G) ? t += "\x3c!--" + G + "--\x3e" : DEFINE_HTML2JSON__DEBUG && D("COMMENT_NODE Error! [" + k + "]");
            break;
          case HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER:
            B();
            b(G) ? t += "\x3c!--[" + G + "]>" : DEFINE_HTML2JSON__DEBUG && D("CONDITIONAL_COMMENT_HIDE_LOWER Error! [" + k + "]");
            t += u(k, !0, q) + "<![endif]--\x3e";
            break;
          case HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER:
            B();
            b(G) ? t += "\x3c!--[" + G + "]>\x3c!--\x3e" : DEFINE_HTML2JSON__DEBUG && D("CONDITIONAL_COMMENT_SHOW_LOWER Error! [" + k + "]");
            t += u(k, !0, q) + "\x3c!--<![endif]--\x3e";
            break;
          case HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION:
            x = Q(d, k, w, r, D);
            if (void 0 !== x && null !== x && "" !== x && (e(x) || c(x))) {
              return -1;
            }
            break;
          case HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE:
            A = k[1], ca = 2;
          default:
            if (b(A)) {
              A = Ga(A);
              w = A[1];
              r = A[2];
              A = A[0];
              "p" !== g || Ka[A] || (t += "</p>");
              g = "";
              t += "<" + A;
              w && (t += " id=" + y(w, f, v));
              r && (t += " class=" + y(r, f, v));
              if (!p) {
                var pa = p ? !0 : Ja[A] ? !0 : DEFINE_HTML2JSON__USE_XML_NS ? 0 < A.indexOf(":") : !1;
                pa = p = pa;
              }
              ca = k[ca];
              T(ca) && (t += " " + O(ca));
              t = (k = u(k, x || ka[A], q || la[A])) ? t + (">" + k) : t + (p ? "/>" : ">");
              p && !k || Ha[A] && !x ? g = Ia[A] ? "" : A : (t += "</" + A + ">", g = "");
              pa && (p = !1);
            } else {
              DEFINE_HTML2JSON__DEBUG && D("Not html.json! [" + k + "]");
            }
        }
        return t;
      }
      function u(k, w, r) {
        var x = "";
        var q = k[0];
        var B = J(k) === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE, t = q === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE ? 2 : 1;
        for (q = B ? T(k[t]) ? t + 1 : t : q === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE ? 1 : q === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE || q === HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER || q === HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER ? 2 : Infinity; q < k.length; ++q) {
          B = k[q], e(B) ? x += z([HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, B], null, 0, w, r) : c(B) ? (B = z(B, k, q, w, r), -1 === B ? --q : x += B) : DEFINE_HTML2JSON__DEBUG && D("Invalid html.json! [" + B + "]");
        }
        return x;
      }
      function O(k) {
        var w = "", r, x;
        for (r in k) {
          var q = k[r];
          (x = 0 === r.indexOf(K)) && (r = r.substr(K.length));
          "className" === r && (r = "class");
          x && (q = R(!0, d, r, q, D));
          if (!(null == q || ja[r] && !1 === q || (w += " " + r, ja[r]))) {
            if ("style" === r && q && "object" === typeof q) {
              x = void 0;
              var B = q, t = "";
              for (x in B) {
                q = B[x], "0px" === q && (q = 0), t += ";" + Fa(x) + ":" + h("" + q);
              }
              q = t.substr(1);
              if (!q) {
                continue;
              }
            }
            w += "=" + y(q, f, v);
          }
        }
        return w.substr(1);
      }
      var D = "function" === typeof m ? m : function(k) {
      };
      m = m && "object" === typeof m ? m : l || {};
      var v = !!m.quotAlways, f = !!m.useSingleQuot, K = m.instructionAttrPrefix || DEFINE_HTML2JSON__INSTRUCTION_ATTR_PREFIX, g, p = oa;
      if (c(a)) {
        return J(a) === HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION && (a = [HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, a]), z(a, null, 0, ma || !1, na || !1);
      }
      DEFINE_HTML2JSON__DEBUG && D("Invalid html.json document!");
    };
    DEFINE_HTML2JSON__EXPORT_JSON2HTML && (module.exports = F, F.DOCUMENT_NODE = HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE, F.DOCUMENT_FRAGMENT_NODE = HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, F.ELEMENT_NODE = HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE, F.TEXT_NODE = HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, F.CDATA_SECTION = HTML_DOT_JSON__NODE_TYPE.CDATA_SECTION, F.COMMENT_NODE = HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE, F.CONDITIONAL_COMMENT_HIDE_LOWER = HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER, 
    F.CONDITIONAL_COMMENT_SHOW_LOWER = HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER, F.PROCESSING_INSTRUCTION = HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION);
    const Qa = Buffer.from && Buffer.from !== Uint8Array.from;
    module.exports = function(a, d, m) {
      const l = new I(), z = da(Pa, Ra);
      m = d && "object" === typeof d ? d : m || {};
      z._parser = l;
      l._createValue = l.onToken;
      l.onToken = Ta;
      l.onError = Sa;
      l._expect = HTML2JSON__EXPECT.NODE_START;
      l._tree = [];
      l._args = [];
      l._onInstruction = a;
      l._onerror = "function" === typeof d ? d : function(u) {
      };
      l._quotAlways = !!m.quotAlways;
      l._useSingleQuot = !!m.useSingleQuot;
      l._attrPrefix = m.instructionAttrPrefix || DEFINE_HTML2JSON__INSTRUCTION_ATTR_PREFIX;
      l._cssText = "";
      return l._stream = z;
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

