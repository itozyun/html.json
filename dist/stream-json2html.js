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
    this.tState = P;
    this.string = this.value = void 0;
    this.stringBuffer = Buffer.alloc ? Buffer.alloc(65536) : new Buffer(65536);
    this.stringBufferOffset = 0;
    this.mode = this.key = this.highSurrogate = this.unicode = void 0;
    this.stack = [];
    this.state = S;
    this.bytes_in_sequence = this.bytes_remaining = 0;
    this.temp_buffs = {2:new Buffer(2), 3:new Buffer(3), 4:new Buffer(4)};
    this.offset = -1;
  }
  function da(c, b, e) {
    function z() {
      for (; H.length && !h.paused;) {
        var A = H.shift();
        if (null === A) {
          return h.emit("end");
        }
        h.emit("data", A);
      }
    }
    c = c || function(A) {
      this.queue(A);
    };
    b = b || function() {
      this.queue(null);
    };
    var K = !1, U = !1, H = [], L = !1, h = new Ka();
    h.readable = h.writable = !0;
    h.paused = !1;
    h.autoDestroy = !(e && !1 === e.autoDestroy);
    h.write = function(A) {
      c.call(this, A);
      return !h.paused;
    };
    h.queue = h.push = function(A) {
      if (L) {
        return h;
      }
      null === A && (L = !0);
      H.push(A);
      z();
      return h;
    };
    h.on("end", function() {
      h.readable = !1;
      !h.writable && h.autoDestroy && process.nextTick(function() {
        h.destroy();
      });
    });
    h.end = function(A) {
      if (!K) {
        return K = !0, arguments.length && h.write(A), h.writable = !1, b.call(h), !h.readable && h.autoDestroy && h.destroy(), h;
      }
    };
    h.destroy = function() {
      if (!U) {
        return K = U = !0, H.length = 0, h.writable = h.readable = !1, h.emit("close"), h;
      }
    };
    h.pause = function() {
      if (!h.paused) {
        return h.paused = !0, h;
      }
    };
    h.resume = function() {
      h.paused && (h.paused = !1, h.emit("resume"));
      z();
      h.paused || h.emit("drain");
      return h;
    };
    return h;
  }
  var m = {}, V = m.LEFT_BRACE = 1, Q = m.RIGHT_BRACE = 2, W = m.LEFT_BRACKET = 3, T = m.RIGHT_BRACKET = 4, X = m.COLON = 5, Y = m.COMMA = 6, Z = m.TRUE = 7, aa = m.FALSE = 8, ba = m.NULL = 9, R = m.STRING = 10, ca = m.NUMBER = 11, P = m.START = 17, qa = m.STOP = 18, ra = m.TRUE1 = 33, sa = m.TRUE2 = 34, ta = m.TRUE3 = 35, ua = m.FALSE1 = 49, va = m.FALSE2 = 50, wa = m.FALSE3 = 51, xa = m.FALSE4 = 52, ya = m.NULL1 = 65, za = m.NULL2 = 66, Aa = m.NULL3 = 67, Ba = m.NUMBER1 = 81, ia = m.NUMBER3 = 83, 
  I = m.STRING1 = 97, Ca = m.STRING2 = 98, Da = m.STRING3 = 99, La = m.STRING4 = 100, Ma = m.STRING5 = 101, Ea = m.STRING6 = 102, S = m.VALUE = 113, ja = m.KEY = 114, ea = m.OBJECT = 129, fa = m.ARRAY = 130;
  J.toknam = function(c) {
    for (var b = Object.keys(m), e = 0, z = b.length; e < z; e++) {
      var K = b[e];
      if (m[K] === c) {
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
    var z = c.length;
    "number" === typeof b && (z = "number" === typeof e ? 0 > e ? c.length - b + e : e - b : c.length - b);
    0 > z && (z = 0);
    65536 < this.stringBufferOffset + z && (this.string += this.stringBuffer.toString("utf8", 0, this.stringBufferOffset), this.stringBufferOffset = 0);
    c.copy(this.stringBuffer, this.stringBufferOffset, b, e);
    this.stringBufferOffset += z;
  };
  D.write = function(c) {
    "string" === typeof c && (c = new Buffer(c));
    for (var b, e = 0, z = c.length; e < z; e++) {
      if (this.tState === P) {
        if (b = c[e], this.offset++, 123 === b) {
          this.onToken(V, "{");
        } else if (125 === b) {
          this.onToken(Q, "}");
        } else if (91 === b) {
          this.onToken(W, "[");
        } else if (93 === b) {
          this.onToken(T, "]");
        } else if (58 === b) {
          this.onToken(X, ":");
        } else if (44 === b) {
          this.onToken(Y, ",");
        } else if (116 === b) {
          this.tState = ra;
        } else if (102 === b) {
          this.tState = ua;
        } else if (110 === b) {
          this.tState = ya;
        } else if (34 === b) {
          this.string = "", this.stringBufferOffset = 0, this.tState = I;
        } else if (45 === b) {
          this.string = "-", this.tState = Ba;
        } else {
          if (48 <= b && 64 > b) {
            this.string = String.fromCharCode(b), this.tState = ia;
          } else if (32 !== b && 9 !== b && 10 !== b && 13 !== b) {
            return this.charError(c, e);
          }
        }
      } else if (this.tState === I) {
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
          this.tState = P, this.string += this.stringBuffer.toString("utf8", 0, this.stringBufferOffset), this.stringBufferOffset = 0, this.onToken(R, this.string), this.offset += Buffer.byteLength(this.string, "utf8") + 1, this.string = void 0;
        } else if (92 === b) {
          this.tState = Ca;
        } else if (32 <= b) {
          this.appendStringChar(b);
        } else {
          return this.charError(c, e);
        }
      } else if (this.tState === Ca) {
        if (b = c[e], 34 === b) {
          this.appendStringChar(b), this.tState = I;
        } else if (92 === b) {
          this.appendStringChar(92), this.tState = I;
        } else if (47 === b) {
          this.appendStringChar(47), this.tState = I;
        } else if (98 === b) {
          this.appendStringChar(8), this.tState = I;
        } else if (102 === b) {
          this.appendStringChar(12), this.tState = I;
        } else if (110 === b) {
          this.appendStringChar(10), this.tState = I;
        } else if (114 === b) {
          this.appendStringChar(13), this.tState = I;
        } else if (116 === b) {
          this.appendStringChar(9), this.tState = I;
        } else if (117 === b) {
          this.unicode = "", this.tState = Da;
        } else {
          return this.charError(c, e);
        }
      } else if (this.tState === Da || this.tState === La || this.tState === Ma || this.tState === Ea) {
        if (b = c[e], 48 <= b && 64 > b || 64 < b && 70 >= b || 96 < b && 102 >= b) {
          this.unicode += String.fromCharCode(b), this.tState++ === Ea && (b = parseInt(this.unicode, 16), this.unicode = void 0, void 0 !== this.highSurrogate && 56320 <= b && 57344 > b ? (this.appendStringBuf(new Buffer(String.fromCharCode(this.highSurrogate, b))), this.highSurrogate = void 0) : void 0 === this.highSurrogate && 55296 <= b && 56320 > b ? this.highSurrogate = b : (void 0 !== this.highSurrogate && (this.appendStringBuf(new Buffer(String.fromCharCode(this.highSurrogate))), this.highSurrogate = 
          void 0), this.appendStringBuf(new Buffer(String.fromCharCode(b)))), this.tState = I);
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
            this.tState = P;
            b = Number(this.string);
            if (isNaN(b)) {
              return this.charError(c, e);
            }
            if (this.string.match(/[0-9]+/) == this.string && b.toString() != this.string) {
              this.onToken(R, this.string);
            } else {
              this.onToken(ca, b);
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
          this.tState = P, this.onToken(Z, !0), this.offset += 3;
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
          this.tState = P, this.onToken(aa, !1), this.offset += 4;
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
          this.tState = P, this.onToken(ba, null), this.offset += 3;
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
    this.mode || (this.state = S);
  };
  D.emit = function(c) {
    this.mode && (this.state = Y);
    this.onValue(c);
  };
  D.onValue = function(c) {
  };
  D.onToken = function(c, b) {
    if (this.state === S) {
      if (c === R || c === ca || c === Z || c === aa || c === ba) {
        this.value && (this.value[this.key] = b), this.emit(b);
      } else if (c === V) {
        this.push(), this.value = this.value ? this.value[this.key] = {} : {}, this.key = void 0, this.state = ja, this.mode = ea;
      } else if (c === W) {
        this.push(), this.value = this.value ? this.value[this.key] = [] : [], this.key = 0, this.mode = fa, this.state = S;
      } else if (c === Q) {
        if (this.mode === ea) {
          this.pop();
        } else {
          return this.parseError(c, b);
        }
      } else if (c === T) {
        if (this.mode === fa) {
          this.pop();
        } else {
          return this.parseError(c, b);
        }
      } else {
        return this.parseError(c, b);
      }
    } else if (this.state === ja) {
      if (c === R) {
        this.key = b, this.state = X;
      } else if (c === Q) {
        this.pop();
      } else {
        return this.parseError(c, b);
      }
    } else if (this.state === X) {
      if (c === X) {
        this.state = S;
      } else {
        return this.parseError(c, b);
      }
    } else if (this.state === Y) {
      if (c === Y) {
        this.mode === fa ? (this.key++, this.state = S) : this.mode === ea && (this.state = ja);
      } else if (c === T && this.mode === fa || c === Q && this.mode === ea) {
        this.pop();
      } else {
        return this.parseError(c, b);
      }
    } else {
      return this.parseError(c, b);
    }
  };
  J.C = m;
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
    function z(a) {
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
    function U(a) {
      return !c(a) && !(!a || "object" !== typeof a);
    }
    function H(a) {
      return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
    }
    function L(a, d, t) {
      a = H("" + a);
      if (a.match('"')) {
        a = a.match("'") ? d ? "'" + a.split("&apos;").join("'").split("'").join("&apos;") + "'" : '"' + a.split("&quot;").join('"').split('"').join("&quot;") + '"' : "'" + a + "'";
      } else if (t || a.match(/[^0-9a-z\.\-]/g) || 72 < a.length) {
        a = (d ? "'" : '"') + H(a) + (d ? "'" : '"');
      }
      return a;
    }
    function h(a) {
      var d = a.indexOf("#"), t = a.indexOf(".");
      if (d < t) {
        var u = a.split(".")[1];
        a = a.split(".")[0];
        if (0 < d) {
          var B = a.split("#")[1];
          a = a.split("#")[0];
        }
      } else {
        t < d && (B = a.split("#")[1], a = a.split("#")[0], 0 < t && (u = a.split(".")[1], a = a.split(".")[0]));
      }
      return [a, B, u];
    }
    function A(a) {
      "string" === typeof a && (a = Na ? Buffer.from(a) : new Buffer(a));
      this._parser.write(a);
    }
    function Oa(a) {
      a && this.write(a);
      this._parser._expect !== DEFINE_HTML2JSON__EXPECT.END_OF_DOCUMENT && this.emit("error", "Invalid html.json");
      this.queue(null);
      this._parser = this._parser._stream = null;
    }
    function Pa(a) {
      -1 < a.message.indexOf("at position") && (a.message = "Invalid JSON (" + a.message + ")");
      this._onerror(a.message);
      this._stream.emit("error", a);
    }
    function Qa(a, d) {
      function t() {
        const f = l._args.length ? l._onInstruction.call(l._stream, l._functionName, l._args) : l._onInstruction.call(l._stream, l._functionName);
        l._functionName = null;
        l._args.length = 0;
        return f;
      }
      function u(f) {
        return "" !== f && null !== f ? Fa[l._attribute] ? " " + l._attribute : " " + l._attribute + "=" + L(f, l._useSingleQuot, l._quotAlways) : "";
      }
      function B(f) {
        const r = x.pop();
        g = x.length ? DEFINE_HTML2JSON__EXPECT.IN_CHILD_NODES : DEFINE_HTML2JSON__EXPECT.END_OF_DOCUMENT;
        switch(r) {
          case HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER:
            n = "<![endif]--\x3e";
            break;
          case HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER:
            n = "\x3c!--<![endif]--\x3e";
            break;
          case HTML_DOT_JSON__NODE_TYPE.CDATA_SECTION:
            n = "]]\x3e";
            break;
          case HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE:
            n = "--\x3e";
            break;
          default:
            b(r) && (n = f ? "" : l._isXMLDocument || l._isXmlInHTML ? " />" : ">", (l._isXMLDocument || l._isXmlInHTML) && !f || Ga[r] && !l._neverOmitEndTag ? l._omittedEndTagBefore = Ha[r] ? "" : r : (n += "</" + r + ">", l._omittedEndTagBefore = ""), M());
        }
      }
      function M() {
        l._neverOmitEndTag = l._skipEscapeForHTML = l._isXmlInHTML = !1;
        for (let f = 0, r = x.length; f < r; ++f) {
          const v = x[f];
          v === HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER || v === HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER ? l._neverOmitEndTag = !0 : b(v) && (ka[v] && (l._neverOmitEndTag = !0), la[v] && (l._skipEscapeForHTML = !0), Ia[v] || 0 < v.indexOf(":")) && (l._isXmlInHTML = !0);
        }
      }
      function F() {
        let f = "";
        !N && l._omittedEndTagBefore && (f = "</" + l._omittedEndTagBefore + ">", l._omittedEndTagBefore = "");
        return f;
      }
      if (a === X || a === Y) {
        this.stack.length && this._createValue(a, d);
      } else {
        var x = this._tree, g = this._expect, N = !1, l = this;
        switch(g) {
          case DEFINE_HTML2JSON__EXPECT.PROCESSING_INSTRUCTION_ARGS:
            switch(a) {
              case W:
              case V:
                this._createValue(a, d);
                return;
              case T:
                if (0 === this.stack.length) {
                  d = t();
                  if (c(d)) {
                    ma = this._neverOmitEndTag;
                    na = this._skipEscapeForHTML;
                    oa = this._isXMLDocument || this._isXmlInHTML;
                    var n = E(d, this._onInstruction, this._onerror, {quotAlways:this._quotAlways, useSingleQuot:this._useSingleQuot, instructionAttrPrefix:this._attrPrefix});
                    ma = na = oa = !1;
                  } else {
                    n = e(d) ? "" + d : "";
                  }
                  B(!!n);
                  break;
                }
              case Q:
                1 === this.stack.length && (this._args.push(this.value), this.value = null);
                this._createValue(a, d);
                return;
              case R:
              case ca:
              case Z:
              case aa:
              case ba:
                this.stack.length ? this._createValue(a, d) : this._args.push(d);
                return;
              default:
                g = DEFINE_HTML2JSON__EXPECT.ERROR;
            }break;
          case DEFINE_HTML2JSON__EXPECT.IN_INSTRUCTION_ATTRIBUTE:
            switch(a) {
              case W:
              case V:
                this._createValue(a, d);
                return;
              case T:
                if (0 === this.stack.length) {
                  n = u(t());
                  g = DEFINE_HTML2JSON__EXPECT.ATTRIBUTE_PROPERTY;
                  break;
                }
              case Q:
                1 === this.stack.length && (this._args.push(this.value), this.value = null);
                this._createValue(a, d);
                return;
              case R:
                if (0 === this.stack.length && !this._functionName) {
                  this._functionName = d;
                  return;
                }
              case ca:
              case Z:
              case aa:
              case ba:
                this.stack.length ? this._createValue(a, d) : this._args.push(d);
                return;
              default:
                g = DEFINE_HTML2JSON__EXPECT.ERROR;
            }break;
          default:
            switch(a) {
              case W:
                switch(g) {
                  case DEFINE_HTML2JSON__EXPECT.ATTRIBUTES_START:
                  case DEFINE_HTML2JSON__EXPECT.CHILD_NODES_START:
                    N = !0;
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
              case T:
                a = g === DEFINE_HTML2JSON__EXPECT.ATTRIBUTES_START || g === DEFINE_HTML2JSON__EXPECT.CHILD_NODES_START ? DEFINE_HTML2JSON__PHASE.CLOSE_EMPTY_ELEMENT : g === DEFINE_HTML2JSON__EXPECT.IN_CHILD_NODES || g === DEFINE_HTML2JSON__EXPECT.END_OF_NODE ? DEFINE_HTML2JSON__PHASE.END_OF_NODE : DEFINE_HTML2JSON__PHASE.ERROR;
                break;
              case V:
                a = g === DEFINE_HTML2JSON__EXPECT.ATTRIBUTES_START ? DEFINE_HTML2JSON__PHASE.ATTRIBUTES_START : g === DEFINE_HTML2JSON__EXPECT.STYLES_START ? DEFINE_HTML2JSON__PHASE.STYLES_START : DEFINE_HTML2JSON__PHASE.ERROR;
                break;
              case Q:
                a = g === DEFINE_HTML2JSON__EXPECT.ATTRIBUTE_PROPERTY ? DEFINE_HTML2JSON__PHASE.END_OF_ATTRIBUTES : g === DEFINE_HTML2JSON__EXPECT.CSS_PROPERTY ? DEFINE_HTML2JSON__PHASE.END_OF_STYLES : DEFINE_HTML2JSON__PHASE.ERROR;
                break;
              case R:
                switch(g) {
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
                    N = !0;
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
              case ca:
                switch(g) {
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
                    N = !0;
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
              case Z:
              case aa:
              case ba:
                a = g === DEFINE_HTML2JSON__EXPECT.ATTRIBUTE_VALUE ? DEFINE_HTML2JSON__PHASE.ATTRIBUTE_VALUE : DEFINE_HTML2JSON__PHASE.ERROR;
                break;
              default:
                a = DEFINE_HTML2JSON__PHASE.ERROR;
            }switch(a) {
              case DEFINE_HTML2JSON__PHASE.NODE_START:
                n = N && b(x[x.length - 1]) ? ">" : "";
                g = DEFINE_HTML2JSON__EXPECT.NODE_TYPE;
                break;
              case DEFINE_HTML2JSON__PHASE.DOCUMENT_NODE_START:
                g = DEFINE_HTML2JSON__EXPECT.DOCUMENT_NODE_VALUE;
                x.push(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE);
                break;
              case DEFINE_HTML2JSON__PHASE.DOCUMENT_NODE_VALUE:
                DEFINE_HTML2JSON__USE_XHTML && (this._isXMLDocument = z(d));
                n = d;
                g = DEFINE_HTML2JSON__EXPECT.CHILD_NODES_START;
                break;
              case DEFINE_HTML2JSON__PHASE.DOCUMENT_FRAGMENT_NODE_START:
                g = DEFINE_HTML2JSON__EXPECT.CHILD_NODES_START;
                x.push(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE);
                break;
              case DEFINE_HTML2JSON__PHASE.ELEMENT_NODE_START:
                g = DEFINE_HTML2JSON__EXPECT.TAG_NAME;
                break;
              case DEFINE_HTML2JSON__PHASE.TAG_NAME:
                d = h(d);
                a = d[1];
                const f = d[2];
                d = d[0];
                n = ("p" === this._omittedEndTagBefore && Ja[d] ? "</p>" : "") + "<" + d;
                this._omittedEndTagBefore = "";
                a && (n += " id=" + L(a, this._useSingleQuot, this._quotAlways));
                f && (n += " class=" + L(f, this._useSingleQuot, this._quotAlways));
                this._neverOmitEndTag || (this._neverOmitEndTag = !!ka[d]);
                this._skipEscapeForHTML || (this._skipEscapeForHTML = !!la[d]);
                x.push(d);
                M();
                g = DEFINE_HTML2JSON__EXPECT.ATTRIBUTES_START;
                break;
              case DEFINE_HTML2JSON__PHASE.ATTRIBUTES_START:
                g = DEFINE_HTML2JSON__EXPECT.ATTRIBUTE_PROPERTY;
                break;
              case DEFINE_HTML2JSON__PHASE.ATTRIBUTE_PROPERTY:
                0 === d.indexOf(this._attrPrefix) ? (this._attribute = d.substr(this._attrPrefix.length), g = DEFINE_HTML2JSON__EXPECT.INSTRUCTION_ATTRIBUTE_START) : (this._attribute = d, g = "style" === d ? DEFINE_HTML2JSON__EXPECT.STYLES_START : DEFINE_HTML2JSON__EXPECT.ATTRIBUTE_VALUE);
                break;
              case DEFINE_HTML2JSON__PHASE.IN_INSTRUCTION_ATTRIBUTE:
                g = DEFINE_HTML2JSON__EXPECT.IN_INSTRUCTION_ATTRIBUTE;
                break;
              case DEFINE_HTML2JSON__PHASE.INSTRUCTION_ATTRIBUTE_NAME:
                this._functionName = d, d = t();
              case DEFINE_HTML2JSON__PHASE.ATTRIBUTE_VALUE:
                n = u(d);
                g = DEFINE_HTML2JSON__EXPECT.ATTRIBUTE_PROPERTY;
                break;
              case DEFINE_HTML2JSON__PHASE.END_OF_ATTRIBUTES:
                g = DEFINE_HTML2JSON__EXPECT.CHILD_NODES_START;
                break;
              case DEFINE_HTML2JSON__PHASE.STYLES_START:
                g = DEFINE_HTML2JSON__EXPECT.CSS_PROPERTY;
                break;
              case DEFINE_HTML2JSON__PHASE.CSS_PROPERTY:
                this._cssPropety = d;
                g = DEFINE_HTML2JSON__EXPECT.CSS_VALUE;
                break;
              case DEFINE_HTML2JSON__PHASE.CSS_VALUE:
                "" !== d && null !== d && (this._cssText += ";" + this._cssPropety + ":" + d);
                g = DEFINE_HTML2JSON__EXPECT.CSS_PROPERTY;
                break;
              case DEFINE_HTML2JSON__PHASE.END_OF_STYLES:
                this._cssText && (n = u(this._cssText.substr(1)), this._cssText = "");
                g = DEFINE_HTML2JSON__EXPECT.ATTRIBUTE_PROPERTY;
                break;
              case DEFINE_HTML2JSON__PHASE.END_OF_NODE:
                B(!0);
                break;
              case DEFINE_HTML2JSON__PHASE.CLOSE_EMPTY_ELEMENT:
                B(!1);
                break;
              case DEFINE_HTML2JSON__PHASE.TEXT_NODE_START:
                g = DEFINE_HTML2JSON__EXPECT.TEXT_NODE_VALUE;
                x.push(HTML_DOT_JSON__NODE_TYPE.TEXT_NODE);
                break;
              case DEFINE_HTML2JSON__PHASE.TEXT_NODE_VALUE:
                n = F() + (l._skipEscapeForHTML ? "" + d : H("" + d));
                g = DEFINE_HTML2JSON__EXPECT.END_OF_NODE;
                break;
              case DEFINE_HTML2JSON__PHASE.TEXT_DATA:
                n = (N && b(x[x.length - 1]) ? ">" : "") + F() + (l._skipEscapeForHTML ? "" + d : H("" + d));
                g = DEFINE_HTML2JSON__EXPECT.IN_CHILD_NODES;
                break;
              case DEFINE_HTML2JSON__PHASE.CDATA_SECTION_START:
                n = "<![CDATA[";
                g = DEFINE_HTML2JSON__EXPECT.CDATA_SECTION_VALUE;
                x.push(HTML_DOT_JSON__NODE_TYPE.CDATA_SECTION);
                break;
              case DEFINE_HTML2JSON__PHASE.CDATA_SECTION_VALUE:
                n = d;
                g = DEFINE_HTML2JSON__EXPECT.END_OF_NODE;
                break;
              case DEFINE_HTML2JSON__PHASE.COMMENT_NODE_START:
                n = "\x3c!--";
                g = DEFINE_HTML2JSON__EXPECT.COMMENT_NODE_VALUE;
                x.push(HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE);
                break;
              case DEFINE_HTML2JSON__PHASE.COMMENT_NODE_VALUE:
                n = d;
                g = DEFINE_HTML2JSON__EXPECT.END_OF_NODE;
                break;
              case DEFINE_HTML2JSON__PHASE.COMMENT_HIDE_LOWER_START:
                n = "\x3c!--[";
                g = DEFINE_HTML2JSON__EXPECT.COMMENT_HIDE_LOWER_FORMURA;
                x.push(HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER);
                break;
              case DEFINE_HTML2JSON__PHASE.COMMENT_HIDE_LOWER_FORMURA:
                n = d + "]>";
                g = DEFINE_HTML2JSON__EXPECT.CHILD_NODES_START;
                break;
              case DEFINE_HTML2JSON__PHASE.COMMENT_SHOW_LOWER_START:
                n = "\x3c!--[";
                g = DEFINE_HTML2JSON__EXPECT.COMMENT_SHOW_LOWER_FORMURA;
                x.push(HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER);
                break;
              case DEFINE_HTML2JSON__PHASE.COMMENT_SHOW_LOWER_FORMURA:
                n = d + "]>\x3c!--\x3e";
                g = DEFINE_HTML2JSON__EXPECT.CHILD_NODES_START;
                break;
              case DEFINE_HTML2JSON__PHASE.PROCESSING_INSTRUCTION_START:
                g = DEFINE_HTML2JSON__EXPECT.PROCESSING_INSTRUCTION_NAME;
                x.push(HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION);
                break;
              case DEFINE_HTML2JSON__PHASE.PROCESSING_INSTRUCTION_NAME:
                this._functionName = d;
                g = DEFINE_HTML2JSON__EXPECT.PROCESSING_INSTRUCTION_ARGS;
                break;
              default:
                g = DEFINE_HTML2JSON__EXPECT.ERROR;
            }
        }
        g === DEFINE_HTML2JSON__EXPECT.ERROR ? (this._onerror("Not html.json format!"), this._stream.emit("error", "Not html.json format!")) : (this._expect = g, n && this._stream.queue(n));
      }
    }
    var Fa = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, Ha = {link:!0, meta:!0, br:!0, hr:!0, img:!0, input:!0, area:!0, base:!0, col:!0, embed:!0, keygen:!0, param:!0}, Ga = {p:!0, dt:!0, dd:!0, li:!0, option:!0, thead:!0, tfoot:!0, th:!0, tr:!0, td:!0, rt:!0, rp:!0, optgroup:!0, caption:!0, colgroup:!0, col:!0}, ka = {a:!0, audio:!0, del:!0, ins:!0, map:!0, noscript:!0, video:!0}, Ia = 
    {svg:!0, math:!0}, Ja = {table:!0, img:!0, svg:!0, picture:!0, object:!0, embed:!0, video:!0, audio:!0, blockquot:!0, form:!0, fieldset:!0}, la = {script:!0, style:!0, plaintext:!0, xmp:!0, noscript:!0}, ma = !1, na = !1, oa = !1;
    E = function(a, d, t, u) {
      function B(f, r, v, O, y) {
        var p = "", q = f[0], w = f[1], G = 1, k = q;
        switch(q) {
          case HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE:
            DEFINE_HTML2JSON__USE_XHTML && z(w) && (n = !0);
            p += w + M(f, !1, !1);
            break;
          case HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE:
            p += M(f, O, y);
            break;
          case HTML_DOT_JSON__NODE_TYPE.TEXT_NODE:
            l && (p += "</" + l + ">", l = "");
            p += y ? w : H("" + w);
            break;
          case HTML_DOT_JSON__NODE_TYPE.CDATA_SECTION:
            b(w) ? p += "<![CDATA[" + w + "]]\x3e" : DEFINE_HTML2JSON__DEBUG && F("CDATA_SECTION Error! [" + f + "]");
            break;
          case HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE:
            b(w) ? p += "\x3c!--" + w + "--\x3e" : DEFINE_HTML2JSON__DEBUG && F("COMMENT_NODE Error! [" + f + "]");
            break;
          case HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER:
            b(w) ? p += "\x3c!--[" + w + "]>" : DEFINE_HTML2JSON__DEBUG && F("CONDITIONAL_COMMENT_HIDE_LOWER Error! [" + f + "]");
            p += M(f, !0, y) + "<![endif]--\x3e";
            break;
          case HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER:
            b(w) ? p += "\x3c!--[" + w + "]>\x3c!--\x3e" : DEFINE_HTML2JSON__DEBUG && F("CONDITIONAL_COMMENT_SHOW_LOWER Error! [" + f + "]");
            p += M(f, !0, y) + "\x3c!--<![endif]--\x3e";
            break;
          case HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION:
            O = F;
            k = f[1];
            y = f.slice(2);
            k = y.length ? d(k, y) : d(k);
            void 0 !== k && null !== k && "" !== k && (e(k) ? r ? r.splice(v, 1, k) : (f.length = 0, f.push(HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, f)) : c(k) ? k[0] === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE ? r ? (k.shift(), k.unshift(v, 1), r.splice.apply(r, k)) : (f.length = 0, f.push.apply(f, k)) : c(k[0]) ? r ? (k.unshift(v, 1), r.splice.apply(r, k)) : (f.length = 0, f.push(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE), f.push.apply(f, k)) : r ? r.splice(v, 1, k) : (f.length = 0, f.push(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, 
            k)) : DEFINE_HTML2JSON__DEBUG && O("PROCESSING_INSTRUCTION Error! [" + JSON.stringify(f) + "]"));
            if (void 0 !== k && null !== k && "" !== k && (e(k) || c(k))) {
              return -1;
            }
            break;
          case HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE:
            k = f[1], G = 2;
          default:
            if (b(k)) {
              k = h(k);
              r = k[1];
              v = k[2];
              k = k[0];
              "p" === l && Ja[k] && (p += "</p>");
              l = "";
              p += "<" + k;
              r && (p += " id=" + L(r, g, x));
              v && (p += " class=" + L(v, g, x));
              if (!n) {
                var pa = n ? !0 : Ia[k] ? !0 : DEFINE_HTML2JSON__USE_XML_NS ? 0 < k.indexOf(":") : !1;
                pa = n = pa;
              }
              r = f[G];
              if (U(r)) {
                var C;
                v = "";
                for (C in r) {
                  q = r[C];
                  (G = 0 === C.indexOf(N)) && (C = C.substr(N.length));
                  "className" === C && (C = "class");
                  if (G) {
                    w = void 0;
                    G = d;
                    var ha = C, Ra = F;
                    c(q) && b(q[0]) ? (w = q[0], q = q.slice(1), w = q.length ? G(w, q) : G(w)) : b(q) ? w = G(q) : DEFINE_HTML2JSON__DEBUG && Ra("Invalid InstructionAttr value! [" + ha + "=" + q + "]");
                    q = w;
                  }
                  if ("" !== q && null != q && (v += " " + C, !Fa[C])) {
                    if ("style" === C && q && "object" === typeof q) {
                      G = void 0;
                      w = q;
                      ha = "";
                      for (G in w) {
                        q = w[G], "0px" === q && (q = 0), ha += ";" + G + ":" + H("" + q);
                      }
                      q = ha.substr(1);
                      if (!q) {
                        continue;
                      }
                    }
                    v += "=" + L(q, g, x);
                  }
                }
                C = v.substr(1);
                p += " " + C;
              }
              p = (f = M(f, O || ka[k], y || la[k])) ? p + (">" + f) : p + (n ? "/>" : ">");
              n && !f || Ga[k] && !O ? l = Ha[k] ? "" : k : (p += "</" + k + ">", l = "");
              pa && (n = !1);
            } else {
              DEFINE_HTML2JSON__DEBUG && F("Not html.json! [" + f + "]");
            }
        }
        return p;
      }
      function M(f, r, v) {
        var O = "";
        var y = f[0];
        var p = K(f) === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE, q = y === HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE ? 2 : 1;
        for (y = p ? U(f[q]) ? q + 1 : q : y === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE ? 1 : y === HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE || y === HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER || y === HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER ? 2 : Infinity; y < f.length; ++y) {
          p = f[y], e(p) ? O += B([HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, p], null, 0, r, v) : c(p) ? (p = B(p, f, y, r, v), -1 === p ? --y : O += p) : DEFINE_HTML2JSON__DEBUG && F("Invalid html.json! [" + p + "]");
        }
        return O;
      }
      var F = "function" === typeof t ? t : function(f) {
      };
      t = t && "object" === typeof t ? t : u || {};
      var x = !!t.quotAlways, g = !!t.useSingleQuot, N = t.instructionAttrPrefix || DEFINE_HTML2JSON__INSTRUCTION_ATTR_PREFIX, l, n = oa;
      if (c(a)) {
        return K(a) === HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION && (a = [HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, a]), B(a, null, 0, ma || !1, na || !1);
      }
      DEFINE_HTML2JSON__DEBUG && F("Invalid html.json document!");
    };
    DEFINE_HTML2JSON__EXPORT_JSON2HTML && (module.exports = E, E.DOCUMENT_NODE = HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE, E.DOCUMENT_FRAGMENT_NODE = HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, E.ELEMENT_NODE = HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE, E.TEXT_NODE = HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, E.CDATA_SECTION = HTML_DOT_JSON__NODE_TYPE.CDATA_SECTION, E.COMMENT_NODE = HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE, E.CONDITIONAL_COMMENT_HIDE_LOWER = HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER, 
    E.CONDITIONAL_COMMENT_SHOW_LOWER = HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER, E.PROCESSING_INSTRUCTION = HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION);
    const Na = Buffer.from && Buffer.from !== Uint8Array.from;
    module.exports = function(a, d, t) {
      const u = new J(), B = da(A, Oa);
      t = d && "object" === typeof d ? d : t || {};
      B._parser = u;
      u._createValue = u.onToken;
      u.onToken = Qa;
      u.onError = Pa;
      u._expect = DEFINE_HTML2JSON__EXPECT.NODE_START;
      u._tree = [];
      u._args = [];
      u._onInstruction = a;
      u._onerror = "function" === typeof d ? d : function(M) {
      };
      u._quotAlways = !!t.quotAlways;
      u._useSingleQuot = !!t.useSingleQuot;
      u._attrPrefix = t.instructionAttrPrefix || DEFINE_HTML2JSON__INSTRUCTION_ATTR_PREFIX;
      u._cssText = "";
      return u._stream = B;
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

