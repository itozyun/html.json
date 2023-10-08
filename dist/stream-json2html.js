var DEFINE_HTML2JSON__EXPORT_JSON2HTML = !1, DEFINE_HTML2JSON__EXPORT_JSON2JSON = !1, DEFINE_HTML2JSON__DEBUG = !0, DEFINE_HTML2JSON__USE_XML_NS = !0, DEFINE_HTML2JSON__USE_XHTML = !0, DEFINE_INSTRUCTION_ATTR_PREFIX = ":", HTML_DOT_JSON__NODE_TYPE = {ELEMENT_NODE:1, TEXT_NODE:3, CDATA_SECTION:4, PROCESSING_INSTRUCTION:7, COMMENT_NODE:8, DOCUMENT_NODE:9, DOCUMENT_FRAGMENT_NODE:11, CONDITIONAL_COMMENT_HIDE_LOWER:13, CONDITIONAL_COMMENT_SHOW_LOWER:14, NETSCAPE4_CONDITIONAL_COMMENT:15};
const PHASE = {ERROR:HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE - 2, NODE_START:HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE - 1, ELEMENT_NODE_START:HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE, TEXT_NODE_START:HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, CDATA_SECTION_START:HTML_DOT_JSON__NODE_TYPE.CDATA_SECTION, PROCESSING_INSTRUCTION_START:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION, COMMENT_NODE_START:HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE, DOCUMENT_NODE_START:HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE, DOCUMENT_FRAGMENT_NODE_START:HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, 
COMMENT_HIDE_LOWER_START:HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER, COMMENT_SHOW_LOWER_START:HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER, NETSCAPE4_CONDITIONAL_COMMENT:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT, DOCUMENT_NODE_VALUE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 1, TEXT_NODE_VALUE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 2, CDATA_SECTION_VALUE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 3, COMMENT_NODE_VALUE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 
4, COMMENT_HIDE_LOWER_FORMURA:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 5, COMMENT_SHOW_LOWER_FORMURA:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 6, PROCESSING_INSTRUCTION_NAME:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 7, TAG_NAME:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 8, ATTRIBUTES_START:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 9, ATTRIBUTE_PROPERTY:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 10, ATTRIBUTE_VALUE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 
11, STYLES_START:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 12, CSS_PROPERTY:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 13, CSS_VALUE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 14, IN_INSTRUCTION_ATTRIBUTE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 15, END_OF_NODE:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 16, CLOSE_EMPTY_ELEMENT:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 17, END_OF_ATTRIBUTES:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 
18, END_OF_STYLES:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 19, TEXT_DATA:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 20, INSTRUCTION_ATTRIBUTE_NAME:HTML_DOT_JSON__NODE_TYPE.NETSCAPE4_CONDITIONAL_COMMENT + 21}, EXPECT = {ERROR:PHASE.ERROR, NODE_START:PHASE.NODE_START, DOCUMENT_NODE_VALUE:PHASE.DOCUMENT_NODE_VALUE, TEXT_NODE_VALUE:PHASE.TEXT_NODE_VALUE, CDATA_SECTION_VALUE:PHASE.CDATA_SECTION_VALUE, COMMENT_NODE_VALUE:PHASE.COMMENT_NODE_VALUE, COMMENT_HIDE_LOWER_FORMURA:PHASE.COMMENT_HIDE_LOWER_FORMURA, 
COMMENT_SHOW_LOWER_FORMURA:PHASE.COMMENT_SHOW_LOWER_FORMURA, PROCESSING_INSTRUCTION_NAME:PHASE.PROCESSING_INSTRUCTION_NAME, TAG_NAME:PHASE.TAG_NAME, ATTRIBUTES_START:PHASE.ATTRIBUTES_START, ATTRIBUTE_PROPERTY:PHASE.ATTRIBUTE_PROPERTY, ATTRIBUTE_VALUE:PHASE.ATTRIBUTE_VALUE, STYLES_START:PHASE.STYLES_START, CSS_PROPERTY:PHASE.CSS_PROPERTY, CSS_VALUE:PHASE.CSS_VALUE, IN_INSTRUCTION_ATTRIBUTE:PHASE.IN_INSTRUCTION_ATTRIBUTE, END_OF_NODE:PHASE.END_OF_NODE, NODE_TYPE:PHASE.END_OF_NODE + 1, PROCESSING_INSTRUCTION_ARGS:PHASE.END_OF_NODE + 
2, INSTRUCTION_ATTRIBUTE_START:PHASE.END_OF_NODE + 3, CHILD_NODES_START:PHASE.END_OF_NODE + 4, IN_CHILD_NODES:PHASE.END_OF_NODE + 5, END_OF_DOCUMENT:PHASE.END_OF_NODE + 6};
(function() {
  function w() {
    this.tState = A;
    this.string = this.value = void 0;
    this.stringBuffer = Buffer.alloc ? Buffer.alloc(65536) : new Buffer(65536);
    this.stringBufferOffset = 0;
    this.mode = this.key = this.highSurrogate = this.unicode = void 0;
    this.stack = [];
    this.state = E;
    this.bytes_in_sequence = this.bytes_remaining = 0;
    this.temp_buffs = {2:new Buffer(2), 3:new Buffer(3), 4:new Buffer(4)};
    this.offset = -1;
  }
  function Q(c, a, e) {
    function q() {
      for (; F.length && !g.paused;) {
        var t = F.shift();
        if (null === t) {
          return g.emit("end");
        }
        g.emit("data", t);
      }
    }
    c = c || function(t) {
      this.queue(t);
    };
    a = a || function() {
      this.queue(null);
    };
    var y = !1, R = !1, F = [], S = !1, g = new ra();
    g.readable = g.writable = !0;
    g.paused = !1;
    g.autoDestroy = !(e && !1 === e.autoDestroy);
    g.write = function(t) {
      c.call(this, t);
      return !g.paused;
    };
    g.queue = g.push = function(t) {
      if (S) {
        return g;
      }
      null === t && (S = !0);
      F.push(t);
      q();
      return g;
    };
    g.on("end", function() {
      g.readable = !1;
      !g.writable && g.autoDestroy && process.nextTick(function() {
        g.destroy();
      });
    });
    g.end = function(t) {
      if (!y) {
        return y = !0, arguments.length && g.write(t), g.writable = !1, a.call(g), !g.readable && g.autoDestroy && g.destroy(), g;
      }
    };
    g.destroy = function() {
      if (!R) {
        return y = R = !0, F.length = 0, g.writable = g.readable = !1, g.emit("close"), g;
      }
    };
    g.pause = function() {
      if (!g.paused) {
        return g.paused = !0, g;
      }
    };
    g.resume = function() {
      g.paused && (g.paused = !1, g.emit("resume"));
      q();
      g.paused || g.emit("drain");
      return g;
    };
    return g;
  }
  var h = {}, I = h.LEFT_BRACE = 1, B = h.RIGHT_BRACE = 2, J = h.LEFT_BRACKET = 3, G = h.RIGHT_BRACKET = 4, K = h.COLON = 5, L = h.COMMA = 6, M = h.TRUE = 7, N = h.FALSE = 8, O = h.NULL = 9, C = h.STRING = 10, P = h.NUMBER = 11, A = h.START = 17, Y = h.STOP = 18, Z = h.TRUE1 = 33, aa = h.TRUE2 = 34, ba = h.TRUE3 = 35, ca = h.FALSE1 = 49, da = h.FALSE2 = 50, ea = h.FALSE3 = 51, fa = h.FALSE4 = 52, ha = h.NULL1 = 65, ia = h.NULL2 = 66, ja = h.NULL3 = 67, ka = h.NUMBER1 = 81, V = h.NUMBER3 = 83, v = 
  h.STRING1 = 97, la = h.STRING2 = 98, ma = h.STRING3 = 99, sa = h.STRING4 = 100, ta = h.STRING5 = 101, na = h.STRING6 = 102, E = h.VALUE = 113, W = h.KEY = 114, T = h.OBJECT = 129, U = h.ARRAY = 130;
  w.toknam = function(c) {
    for (var a = Object.keys(h), e = 0, q = a.length; e < q; e++) {
      var y = a[e];
      if (h[y] === c) {
        return y;
      }
    }
    return c && "0x" + c.toString(16);
  };
  var u = w.prototype;
  u.onError = function(c) {
    throw c;
  };
  u.charError = function(c, a) {
    this.tState = Y;
    this.onError(Error("Unexpected " + JSON.stringify(String.fromCharCode(c[a])) + " at position " + a + " in state " + w.toknam(this.tState)));
  };
  u.appendStringChar = function(c) {
    65536 <= this.stringBufferOffset && (this.string += this.stringBuffer.toString("utf8"), this.stringBufferOffset = 0);
    this.stringBuffer[this.stringBufferOffset++] = c;
  };
  u.appendStringBuf = function(c, a, e) {
    var q = c.length;
    "number" === typeof a && (q = "number" === typeof e ? 0 > e ? c.length - a + e : e - a : c.length - a);
    0 > q && (q = 0);
    65536 < this.stringBufferOffset + q && (this.string += this.stringBuffer.toString("utf8", 0, this.stringBufferOffset), this.stringBufferOffset = 0);
    c.copy(this.stringBuffer, this.stringBufferOffset, a, e);
    this.stringBufferOffset += q;
  };
  u.write = function(c) {
    "string" === typeof c && (c = new Buffer(c));
    for (var a, e = 0, q = c.length; e < q; e++) {
      if (this.tState === A) {
        if (a = c[e], this.offset++, 123 === a) {
          this.onToken(I, "{");
        } else if (125 === a) {
          this.onToken(B, "}");
        } else if (91 === a) {
          this.onToken(J, "[");
        } else if (93 === a) {
          this.onToken(G, "]");
        } else if (58 === a) {
          this.onToken(K, ":");
        } else if (44 === a) {
          this.onToken(L, ",");
        } else if (116 === a) {
          this.tState = Z;
        } else if (102 === a) {
          this.tState = ca;
        } else if (110 === a) {
          this.tState = ha;
        } else if (34 === a) {
          this.string = "", this.stringBufferOffset = 0, this.tState = v;
        } else if (45 === a) {
          this.string = "-", this.tState = ka;
        } else {
          if (48 <= a && 64 > a) {
            this.string = String.fromCharCode(a), this.tState = V;
          } else if (32 !== a && 9 !== a && 10 !== a && 13 !== a) {
            return this.charError(c, e);
          }
        }
      } else if (this.tState === v) {
        if (a = c[e], 0 < this.bytes_remaining) {
          for (a = 0; a < this.bytes_remaining; a++) {
            this.temp_buffs[this.bytes_in_sequence][this.bytes_in_sequence - this.bytes_remaining + a] = c[a];
          }
          this.appendStringBuf(this.temp_buffs[this.bytes_in_sequence]);
          this.bytes_in_sequence = this.bytes_remaining = 0;
          e = e + a - 1;
        } else if (0 === this.bytes_remaining && 128 <= a) {
          if (193 >= a || 244 < a) {
            return this.onError(Error("Invalid UTF-8 character at position " + e + " in state " + w.toknam(this.tState)));
          }
          194 <= a && 223 >= a && (this.bytes_in_sequence = 2);
          224 <= a && 239 >= a && (this.bytes_in_sequence = 3);
          240 <= a && 244 >= a && (this.bytes_in_sequence = 4);
          if (this.bytes_in_sequence + e > c.length) {
            for (a = 0; a <= c.length - 1 - e; a++) {
              this.temp_buffs[this.bytes_in_sequence][a] = c[e + a];
            }
            this.bytes_remaining = e + this.bytes_in_sequence - c.length;
            e = c.length - 1;
          } else {
            this.appendStringBuf(c, e, e + this.bytes_in_sequence), e = e + this.bytes_in_sequence - 1;
          }
        } else if (34 === a) {
          this.tState = A, this.string += this.stringBuffer.toString("utf8", 0, this.stringBufferOffset), this.stringBufferOffset = 0, this.onToken(C, this.string), this.offset += Buffer.byteLength(this.string, "utf8") + 1, this.string = void 0;
        } else if (92 === a) {
          this.tState = la;
        } else if (32 <= a) {
          this.appendStringChar(a);
        } else {
          return this.charError(c, e);
        }
      } else if (this.tState === la) {
        if (a = c[e], 34 === a) {
          this.appendStringChar(a), this.tState = v;
        } else if (92 === a) {
          this.appendStringChar(92), this.tState = v;
        } else if (47 === a) {
          this.appendStringChar(47), this.tState = v;
        } else if (98 === a) {
          this.appendStringChar(8), this.tState = v;
        } else if (102 === a) {
          this.appendStringChar(12), this.tState = v;
        } else if (110 === a) {
          this.appendStringChar(10), this.tState = v;
        } else if (114 === a) {
          this.appendStringChar(13), this.tState = v;
        } else if (116 === a) {
          this.appendStringChar(9), this.tState = v;
        } else if (117 === a) {
          this.unicode = "", this.tState = ma;
        } else {
          return this.charError(c, e);
        }
      } else if (this.tState === ma || this.tState === sa || this.tState === ta || this.tState === na) {
        if (a = c[e], 48 <= a && 64 > a || 64 < a && 70 >= a || 96 < a && 102 >= a) {
          this.unicode += String.fromCharCode(a), this.tState++ === na && (a = parseInt(this.unicode, 16), this.unicode = void 0, void 0 !== this.highSurrogate && 56320 <= a && 57344 > a ? (this.appendStringBuf(new Buffer(String.fromCharCode(this.highSurrogate, a))), this.highSurrogate = void 0) : void 0 === this.highSurrogate && 55296 <= a && 56320 > a ? this.highSurrogate = a : (void 0 !== this.highSurrogate && (this.appendStringBuf(new Buffer(String.fromCharCode(this.highSurrogate))), this.highSurrogate = 
          void 0), this.appendStringBuf(new Buffer(String.fromCharCode(a)))), this.tState = v);
        } else {
          return this.charError(c, e);
        }
      } else if (this.tState === ka || this.tState === V) {
        switch(a = c[e], a) {
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
            this.string += String.fromCharCode(a);
            this.tState = V;
            break;
          default:
            this.tState = A;
            a = Number(this.string);
            if (isNaN(a)) {
              return this.charError(c, e);
            }
            if (this.string.match(/[0-9]+/) == this.string && a.toString() != this.string) {
              this.onToken(C, this.string);
            } else {
              this.onToken(P, a);
            }
            this.offset += this.string.length - 1;
            this.string = void 0;
            e--;
        }
      } else if (this.tState === Z) {
        if (114 === c[e]) {
          this.tState = aa;
        } else {
          return this.charError(c, e);
        }
      } else if (this.tState === aa) {
        if (117 === c[e]) {
          this.tState = ba;
        } else {
          return this.charError(c, e);
        }
      } else if (this.tState === ba) {
        if (101 === c[e]) {
          this.tState = A, this.onToken(M, !0), this.offset += 3;
        } else {
          return this.charError(c, e);
        }
      } else if (this.tState === ca) {
        if (97 === c[e]) {
          this.tState = da;
        } else {
          return this.charError(c, e);
        }
      } else if (this.tState === da) {
        if (108 === c[e]) {
          this.tState = ea;
        } else {
          return this.charError(c, e);
        }
      } else if (this.tState === ea) {
        if (115 === c[e]) {
          this.tState = fa;
        } else {
          return this.charError(c, e);
        }
      } else if (this.tState === fa) {
        if (101 === c[e]) {
          this.tState = A, this.onToken(N, !1), this.offset += 4;
        } else {
          return this.charError(c, e);
        }
      } else if (this.tState === ha) {
        if (117 === c[e]) {
          this.tState = ia;
        } else {
          return this.charError(c, e);
        }
      } else if (this.tState === ia) {
        if (108 === c[e]) {
          this.tState = ja;
        } else {
          return this.charError(c, e);
        }
      } else if (this.tState === ja) {
        if (108 === c[e]) {
          this.tState = A, this.onToken(O, null), this.offset += 3;
        } else {
          return this.charError(c, e);
        }
      }
    }
  };
  u.onToken = function(c, a) {
  };
  u.parseError = function(c, a) {
    this.tState = Y;
    this.onError(Error("Unexpected " + w.toknam(c) + (a ? "(" + JSON.stringify(a) + ")" : "") + " in state " + w.toknam(this.state)));
  };
  u.push = function() {
    this.stack.push({value:this.value, key:this.key, mode:this.mode});
  };
  u.pop = function() {
    var c = this.value, a = this.stack.pop();
    this.value = a.value;
    this.key = a.key;
    this.mode = a.mode;
    this.emit(c);
    this.mode || (this.state = E);
  };
  u.emit = function(c) {
    this.mode && (this.state = L);
    this.onValue(c);
  };
  u.onValue = function(c) {
  };
  u.onToken = function(c, a) {
    if (this.state === E) {
      if (c === C || c === P || c === M || c === N || c === O) {
        this.value && (this.value[this.key] = a), this.emit(a);
      } else if (c === I) {
        this.push(), this.value = this.value ? this.value[this.key] = {} : {}, this.key = void 0, this.state = W, this.mode = T;
      } else if (c === J) {
        this.push(), this.value = this.value ? this.value[this.key] = [] : [], this.key = 0, this.mode = U, this.state = E;
      } else if (c === B) {
        if (this.mode === T) {
          this.pop();
        } else {
          return this.parseError(c, a);
        }
      } else if (c === G) {
        if (this.mode === U) {
          this.pop();
        } else {
          return this.parseError(c, a);
        }
      } else {
        return this.parseError(c, a);
      }
    } else if (this.state === W) {
      if (c === C) {
        this.key = a, this.state = K;
      } else if (c === B) {
        this.pop();
      } else {
        return this.parseError(c, a);
      }
    } else if (this.state === K) {
      if (c === K) {
        this.state = E;
      } else {
        return this.parseError(c, a);
      }
    } else if (this.state === L) {
      if (c === L) {
        this.mode === U ? (this.key++, this.state = E) : this.mode === T && (this.state = W);
      } else if (c === G && this.mode === U || c === B && this.mode === T) {
        this.pop();
      } else {
        return this.parseError(c, a);
      }
    } else {
      return this.parseError(c, a);
    }
  };
  w.C = h;
  module.exports = w;
  var ra = require("stream");
  exports = module.exports = Q;
  Q.through = Q;
  (function() {
    function c(b) {
      return "" + b === b;
    }
    function a(b) {
      return 0 === b.indexOf("<?xml ") || 0 <= b.toUpperCase().indexOf('<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML ');
    }
    function e(b) {
      return b.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
    }
    function q(b, d, r) {
      b = e("" + b);
      if (b.match('"')) {
        b = b.match("'") ? d ? "'" + b.split("&apos;").join("'").split("'").join("&apos;") + "'" : '"' + b.split("&quot;").join('"').split('"').join("&quot;") + '"' : "'" + b + "'";
      } else if (r || b.match(/[^0-9a-z\.\-]/g) || 72 < b.length) {
        b = (d ? "'" : '"') + e(b) + (d ? "'" : '"');
      }
      return b;
    }
    function y(b) {
      var d = b.indexOf("#"), r = b.indexOf(".");
      if (d < r) {
        var m = b.split(".")[1];
        b = b.split(".")[0];
        if (0 < d) {
          var x = b.split("#")[1];
          b = b.split("#")[0];
        }
      } else {
        r < d && (x = b.split("#")[1], b = b.split("#")[0], 0 < r && (m = b.split(".")[1], b = b.split(".")[0]));
      }
      return [b, x, m];
    }
    function R(b) {
      "string" === typeof b && (b = ua ? Buffer.from(b) : new Buffer(b));
      this._parser.write(b);
    }
    function F(b) {
      b && this.write(b);
      this._parser._expect !== EXPECT.END_OF_DOCUMENT && this.emit("error", "Invalid html.json");
      this.queue(null);
      this._parser = this._parser._stream = null;
    }
    function S(b) {
      -1 < b.message.indexOf("at position") && (b.message = "Invalid JSON (" + b.message + ")");
      this._onerror(b.message);
      this._stream.emit("error", b);
    }
    function g(b, d) {
      function r() {
        const n = k._args.length ? k._onInstruction.call(k._stream, k._functionName, k._args) : k._onInstruction.call(k._stream, k._functionName);
        k._functionName = null;
        k._args.length = 0;
        return n;
      }
      function m(n) {
        return "" !== n && null !== n ? " " + k._attribute + "=" + q(n, k._useSingleQuot, k._quotAlways) : "";
      }
      function x(n) {
        const z = p.pop();
        f = p.length ? EXPECT.IN_CHILD_NODES : EXPECT.END_OF_DOCUMENT;
        switch(z) {
          case HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER:
            l = "<![endif]--\x3e";
            break;
          case HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER:
            l = "\x3c!--<![endif]--\x3e";
            break;
          case HTML_DOT_JSON__NODE_TYPE.CDATA_SECTION:
            l = "]]\x3e";
            break;
          case HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE:
            l = "--\x3e";
            break;
          default:
            c(z) && (l = n ? "" : k._isXMLDocument || k._isXmlInHTML ? " />" : ">", (k._isXMLDocument || k._isXmlInHTML) && !n || va[z] && !k._noOmitEndTag ? k._omittedEndTagBefore = t[z] ? "" : z : (l += "</" + z + ">", k._omittedEndTagBefore = ""), X());
        }
      }
      function X() {
        k._noOmitEndTag = k._skipEscapeForHTML = k._isXmlInHTML = !1;
        for (let n = 0, z = p.length; n < z; ++n) {
          const D = p[n];
          D === HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER || D === HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER ? k._noOmitEndTag = !0 : c(D) && (oa[D] && (k._noOmitEndTag = !0), pa[D] && (k._skipEscapeForHTML = !0), wa[D] || 0 < D.indexOf(":")) && (k._isXmlInHTML = !0);
        }
      }
      function qa() {
        let n = "";
        !H && k._omittedEndTagBefore && (n = "</" + k._omittedEndTagBefore + ">", k._omittedEndTagBefore = "");
        return n;
      }
      if (b === K || b === L) {
        this.stack.length && this._createValue(b, d);
      } else {
        var p = this._tree, f = this._expect, H = !1, k = this;
        switch(f) {
          case EXPECT.PROCESSING_INSTRUCTION_ARGS:
            switch(b) {
              case J:
              case I:
                this._createValue(b, d);
                return;
              case G:
                if (0 === this.stack.length) {
                  var l = (d = r()) && d.pop === [].pop ? (void 0)(d, this._onInstruction, this._onerror, {quotAlways:this._quotAlways, useSingleQuot:this._useSingleQuot, instructionAttrPrefix:this._attrPrefix}) : c(d) || d === +d ? "" + d : "";
                  x(!!l);
                  break;
                }
              case B:
                1 === this.stack.length && (this._args.push(this.value), this.value = null);
                this._createValue(b, d);
                return;
              case C:
              case P:
              case M:
              case N:
              case O:
                this.stack.length ? this._createValue(b, d) : this._args.push(d);
                return;
              default:
                f = EXPECT.ERROR;
            }break;
          case EXPECT.IN_INSTRUCTION_ATTRIBUTE:
            switch(b) {
              case J:
              case I:
                this._createValue(b, d);
                return;
              case G:
                if (0 === this.stack.length) {
                  l = m(r());
                  f = EXPECT.ATTRIBUTE_PROPERTY;
                  break;
                }
              case B:
                1 === this.stack.length && (this._args.push(this.value), this.value = null);
                this._createValue(b, d);
                return;
              case C:
                if (0 === this.stack.length && !this._functionName) {
                  this._functionName = d;
                  return;
                }
              case P:
              case M:
              case N:
              case O:
                this.stack.length ? this._createValue(b, d) : this._args.push(d);
                return;
              default:
                f = EXPECT.ERROR;
            }break;
          default:
            switch(b) {
              case J:
                switch(f) {
                  case EXPECT.ATTRIBUTES_START:
                  case EXPECT.CHILD_NODES_START:
                    H = !0;
                  case EXPECT.NODE_START:
                  case EXPECT.IN_CHILD_NODES:
                    b = PHASE.NODE_START;
                    break;
                  case EXPECT.INSTRUCTION_ATTRIBUTE_START:
                    b = PHASE.IN_INSTRUCTION_ATTRIBUTE;
                    break;
                  default:
                    b = PHASE.ERROR;
                }break;
              case G:
                b = f === EXPECT.ATTRIBUTES_START || f === EXPECT.CHILD_NODES_START ? PHASE.CLOSE_EMPTY_ELEMENT : f === EXPECT.IN_CHILD_NODES || f === EXPECT.END_OF_NODE ? PHASE.END_OF_NODE : PHASE.ERROR;
                break;
              case I:
                b = f === EXPECT.ATTRIBUTES_START ? PHASE.ATTRIBUTES_START : f === EXPECT.STYLES_START ? PHASE.STYLES_START : PHASE.ERROR;
                break;
              case B:
                b = f === EXPECT.ATTRIBUTE_PROPERTY ? PHASE.END_OF_ATTRIBUTES : f === EXPECT.CSS_PROPERTY ? PHASE.END_OF_STYLES : PHASE.ERROR;
                break;
              case C:
                switch(f) {
                  case EXPECT.NODE_TYPE:
                  case EXPECT.TAG_NAME:
                    b = PHASE.TAG_NAME;
                    break;
                  case EXPECT.DOCUMENT_NODE_VALUE:
                    b = PHASE.DOCUMENT_NODE_VALUE;
                    break;
                  case EXPECT.TEXT_NODE_VALUE:
                    b = PHASE.TEXT_NODE_VALUE;
                    break;
                  case EXPECT.CDATA_SECTION_VALUE:
                    b = PHASE.CDATA_SECTION_VALUE;
                    break;
                  case EXPECT.COMMENT_NODE_VALUE:
                    b = PHASE.COMMENT_NODE_VALUE;
                    break;
                  case EXPECT.COMMENT_HIDE_LOWER_FORMURA:
                    b = PHASE.COMMENT_HIDE_LOWER_FORMURA;
                    break;
                  case EXPECT.COMMENT_SHOW_LOWER_FORMURA:
                    b = PHASE.COMMENT_SHOW_LOWER_FORMURA;
                    break;
                  case EXPECT.ATTRIBUTE_PROPERTY:
                    b = PHASE.ATTRIBUTE_PROPERTY;
                    break;
                  case EXPECT.ATTRIBUTE_VALUE:
                    b = PHASE.ATTRIBUTE_VALUE;
                    break;
                  case EXPECT.STYLES_START:
                    b = PHASE.STYLES_START;
                    break;
                  case EXPECT.CSS_PROPERTY:
                    b = PHASE.CSS_PROPERTY;
                    break;
                  case EXPECT.CSS_VALUE:
                    b = PHASE.CSS_VALUE;
                    break;
                  case EXPECT.ATTRIBUTES_START:
                  case EXPECT.CHILD_NODES_START:
                    H = !0;
                  case EXPECT.IN_CHILD_NODES:
                    b = PHASE.TEXT_DATA;
                    break;
                  case EXPECT.PROCESSING_INSTRUCTION_NAME:
                    b = PHASE.PROCESSING_INSTRUCTION_NAME;
                    break;
                  case EXPECT.INSTRUCTION_ATTRIBUTE_START:
                    b = PHASE.INSTRUCTION_ATTRIBUTE_NAME;
                    break;
                  default:
                    b = PHASE.ERROR;
                }break;
              case P:
                switch(f) {
                  case EXPECT.NODE_TYPE:
                    b = d;
                    break;
                  case EXPECT.ATTRIBUTE_VALUE:
                    b = PHASE.ATTRIBUTE_VALUE;
                    break;
                  case EXPECT.CSS_VALUE:
                    b = PHASE.CSS_VALUE;
                    break;
                  case EXPECT.TEXT_NODE_VALUE:
                    b = PHASE.TEXT_NODE_VALUE;
                    break;
                  case EXPECT.ATTRIBUTES_START:
                  case EXPECT.CHILD_NODES_START:
                    H = !0;
                  case EXPECT.IN_CHILD_NODES:
                    b = PHASE.TEXT_DATA;
                    d += "";
                    break;
                  case EXPECT.CDATA_SECTION_VALUE:
                    b = PHASE.CDATA_SECTION_VALUE;
                    d += "";
                    break;
                  case EXPECT.COMMENT_NODE_VALUE:
                    b = PHASE.COMMENT_NODE_VALUE;
                    d += "";
                    break;
                  default:
                    b = PHASE.ERROR;
                }break;
              case M:
              case N:
              case O:
                b = f === EXPECT.ATTRIBUTE_VALUE ? PHASE.ATTRIBUTE_VALUE : PHASE.ERROR;
                break;
              default:
                b = PHASE.ERROR;
            }switch(b) {
              case PHASE.NODE_START:
                l = H && c(p[p.length - 1]) ? ">" : "";
                f = EXPECT.NODE_TYPE;
                break;
              case PHASE.DOCUMENT_NODE_START:
                f = EXPECT.DOCUMENT_NODE_VALUE;
                p.push(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE);
                break;
              case PHASE.DOCUMENT_NODE_VALUE:
                DEFINE_HTML2JSON__USE_XHTML && (this._isXMLDocument = a(d));
                l = d;
                f = EXPECT.CHILD_NODES_START;
                break;
              case PHASE.DOCUMENT_FRAGMENT_NODE_START:
                f = EXPECT.CHILD_NODES_START;
                p.push(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE);
                break;
              case PHASE.ELEMENT_NODE_START:
                f = EXPECT.TAG_NAME;
                break;
              case PHASE.TAG_NAME:
                d = y(d);
                b = d[1];
                const n = d[2];
                d = d[0];
                l = ("p" === this._omittedEndTagBefore && xa[d] ? "</p>" : "") + "<" + d;
                this._omittedEndTagBefore = "";
                b && (l += " id=" + q(b, this._useSingleQuot, this._quotAlways));
                n && (l += " class=" + q(n, this._useSingleQuot, this._quotAlways));
                this._noOmitEndTag || (this._noOmitEndTag = !!oa[d]);
                this._skipEscapeForHTML || (this._skipEscapeForHTML = !!pa[d]);
                p.push(d);
                X();
                f = EXPECT.ATTRIBUTES_START;
                break;
              case PHASE.ATTRIBUTES_START:
                f = EXPECT.ATTRIBUTE_PROPERTY;
                break;
              case PHASE.ATTRIBUTE_PROPERTY:
                0 === d.indexOf(this._attrPrefix) ? (this._attribute = d.substr(this._attrPrefix.length), f = EXPECT.INSTRUCTION_ATTRIBUTE_START) : (this._attribute = d, f = "style" === d ? EXPECT.STYLES_START : EXPECT.ATTRIBUTE_VALUE);
                break;
              case PHASE.IN_INSTRUCTION_ATTRIBUTE:
                f = EXPECT.IN_INSTRUCTION_ATTRIBUTE;
                break;
              case PHASE.INSTRUCTION_ATTRIBUTE_NAME:
                this._functionName = d, d = r();
              case PHASE.ATTRIBUTE_VALUE:
                l = m(d);
                f = EXPECT.ATTRIBUTE_PROPERTY;
                break;
              case PHASE.END_OF_ATTRIBUTES:
                f = EXPECT.CHILD_NODES_START;
                break;
              case PHASE.STYLES_START:
                f = EXPECT.CSS_PROPERTY;
                break;
              case PHASE.CSS_PROPERTY:
                this._cssPropety = d;
                f = EXPECT.CSS_VALUE;
                break;
              case PHASE.CSS_VALUE:
                "" !== d && null !== d && (this._cssText += ";" + this._cssPropety + ":" + d);
                f = EXPECT.CSS_PROPERTY;
                break;
              case PHASE.END_OF_STYLES:
                this._cssText && (l = m(this._cssText.substr(1)), this._cssText = "");
                f = EXPECT.ATTRIBUTE_PROPERTY;
                break;
              case PHASE.END_OF_NODE:
                x(!0);
                break;
              case PHASE.CLOSE_EMPTY_ELEMENT:
                x(!1);
                break;
              case PHASE.TEXT_NODE_START:
                f = EXPECT.TEXT_NODE_VALUE;
                p.push(HTML_DOT_JSON__NODE_TYPE.TEXT_NODE);
                break;
              case PHASE.TEXT_NODE_VALUE:
                l = qa() + (k._skipEscapeForHTML ? "" + d : e("" + d));
                f = EXPECT.END_OF_NODE;
                break;
              case PHASE.TEXT_DATA:
                l = (H && c(p[p.length - 1]) ? ">" : "") + qa() + (k._skipEscapeForHTML ? "" + d : e("" + d));
                f = EXPECT.IN_CHILD_NODES;
                break;
              case PHASE.CDATA_SECTION_START:
                l = "<![CDATA[";
                f = EXPECT.CDATA_SECTION_VALUE;
                p.push(HTML_DOT_JSON__NODE_TYPE.CDATA_SECTION);
                break;
              case PHASE.CDATA_SECTION_VALUE:
                l = d;
                f = EXPECT.END_OF_NODE;
                break;
              case PHASE.COMMENT_NODE_START:
                l = "\x3c!--";
                f = EXPECT.COMMENT_NODE_VALUE;
                p.push(HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE);
                break;
              case PHASE.COMMENT_NODE_VALUE:
                l = d;
                f = EXPECT.END_OF_NODE;
                break;
              case PHASE.COMMENT_HIDE_LOWER_START:
                l = "\x3c!--[";
                f = EXPECT.COMMENT_HIDE_LOWER_FORMURA;
                p.push(HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER);
                break;
              case PHASE.COMMENT_HIDE_LOWER_FORMURA:
                l = d + "]>";
                f = EXPECT.CHILD_NODES_START;
                break;
              case PHASE.COMMENT_SHOW_LOWER_START:
                l = "\x3c!--[";
                f = EXPECT.COMMENT_SHOW_LOWER_FORMURA;
                p.push(HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER);
                break;
              case PHASE.COMMENT_SHOW_LOWER_FORMURA:
                l = d + "]>\x3c!--\x3e";
                f = EXPECT.CHILD_NODES_START;
                break;
              case PHASE.PROCESSING_INSTRUCTION_START:
                f = EXPECT.PROCESSING_INSTRUCTION_NAME;
                p.push(HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION);
                break;
              case PHASE.PROCESSING_INSTRUCTION_NAME:
                this._functionName = d;
                f = EXPECT.PROCESSING_INSTRUCTION_ARGS;
                break;
              default:
                f = EXPECT.ERROR;
            }
        }
        f === EXPECT.ERROR ? (this._onerror("Not html.json format!"), this._stream.emit("error", "Not html.json format!")) : (this._expect = f, l && this._stream.queue(l));
      }
    }
    var t = {link:!0, meta:!0, br:!0, hr:!0, img:!0, input:!0, area:!0, base:!0, col:!0, embed:!0, keygen:!0, param:!0}, va = {p:!0, dt:!0, dd:!0, li:!0, option:!0, thead:!0, tfoot:!0, th:!0, tr:!0, td:!0, rt:!0, rp:!0, optgroup:!0, caption:!0, colgroup:!0, col:!0}, oa = {a:!0, audio:!0, del:!0, ins:!0, map:!0, noscript:!0, video:!0}, wa = {svg:!0, math:!0}, xa = {table:!0, img:!0, svg:!0, picture:!0, object:!0, embed:!0, video:!0, audio:!0, blockquot:!0, form:!0, fieldset:!0}, pa = {script:!0, style:!0, 
    plaintext:!0, xmp:!0, noscript:!0};
    const ua = Buffer.from && Buffer.from !== Uint8Array.from;
    module.exports = function(b, d, r) {
      const m = new w(), x = Q(R, F);
      r = d && "object" === typeof d ? d : r || {};
      x._parser = m;
      m._createValue = m.onToken;
      m.onToken = g;
      m.onError = S;
      m._expect = EXPECT.NODE_START;
      m._tree = [];
      m._args = [];
      m._onInstruction = b;
      m._onerror = "function" === typeof d ? d : function(X) {
      };
      m._quotAlways = !!r.quotAlways;
      m._useSingleQuot = !!r.useSingleQuot;
      m._attrPrefix = r.instructionAttrPrefix || DEFINE_INSTRUCTION_ATTR_PREFIX;
      m._cssText = "";
      return m._stream = x;
    };
  })();
})();

