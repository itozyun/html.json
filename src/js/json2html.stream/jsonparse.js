/**
 * @see https://github.com/creationix/jsonparse/blob/a5d5260e263d67929236e282ca7947d7b385fcd1/jsonparse.js
 * 
 */
goog.provide( 'Parser' );
goog.provide( 'Parser.C' );
goog.provide( 'bufferFrom' );

goog.require( 'htmljson.DEFINE.DEBUG' );

/*global Buffer*/
/**
 * Named constants with unique integer values
 * 
 * @enum {number}
 */
var C = {
  // Tokens
  LEFT_BRACE    : 0x1,
  RIGHT_BRACE   : 0x2,
  LEFT_BRACKET  : 0x3,
  RIGHT_BRACKET : 0x4,
  COLON         : 0x5,
  COMMA         : 0x6,
  TRUE          : 0x7,
  FALSE         : 0x8,
  NULL          : 0x9,
  STRING        : 0xa,
  NUMBER        : 0xb,
  // Tokenizer States
  START   : 0x11,
  STOP    : 0x12,
  TRUE1   : 0x21,
  TRUE2   : 0x22,
  TRUE3   : 0x23,
  FALSE1  : 0x31,
  FALSE2  : 0x32,
  FALSE3  : 0x33,
  FALSE4  : 0x34,
  NULL1   : 0x41,
  NULL2   : 0x42,
  NULL3   : 0x43,
  NUMBER1 : 0x51,
  NUMBER3 : 0x53,
  STRING1 : 0x61,
  STRING2 : 0x62,
  STRING3 : 0x63,
  STRING4 : 0x64,
  STRING5 : 0x65,
  STRING6 : 0x66,
  // Parser States
  VALUE   : 0x71,
  KEY     : 0x72,
  // Parser Modes
  OBJECT  : 0x81,
  ARRAY   : 0x82
};

// Character constants
var BACK_SLASH =      "\\".charCodeAt(0);
var FORWARD_SLASH =   "\/".charCodeAt(0);
var BACKSPACE =       "\b".charCodeAt(0);
var FORM_FEED =       "\f".charCodeAt(0);
var NEWLINE =         "\n".charCodeAt(0);
var CARRIAGE_RETURN = "\r".charCodeAt(0);
var TAB =             "\t".charCodeAt(0);

var STRING_BUFFER_SIZE = 64 * 1024;

const bufferFrom = Buffer.from ? Buffer.from : (...args) => new Buffer(...args);
const alloc = Buffer.alloc ? Buffer.alloc : (...args) => new Buffer(...args);

/** @constructor */
Parser = function() {
  this.currentValue = undefined;

  /** @const {!Array.<!{currentValue : *, _key : (string | number | void), _mode : (number | void)}>} */
  this.jsonStack = [];

  /** @private */ this.tState = C.START;
  /** @private */ this._string = undefined; // string data
  /** @private */ this.stringBuffer = alloc(STRING_BUFFER_SIZE);
  /** @private */ this.stringBufferOffset = 0;
  /** @private */ this.unicode = undefined; // unicode escapes
  /** @private */ this.highSurrogate = undefined;

  /** @private */ this._key = undefined;
  /** @private */ this._mode = undefined;

  /** @private */ this.state = C.VALUE;
  /** @private */ this.bytes_remaining = 0; // number of bytes remaining in multi byte utf8 char to read after split boundary
  /** @private */ this.bytes_in_sequence = 0; // bytes in multi byte utf8 char to read
  /** @private */ this.temp_buffs = { "2": alloc(2), "3": alloc(3), "4": alloc(4) }; // for rebuilding chars split before boundary is reached

  // Stream offset
  /** @private */ this._offset = -1;
}

// Slow code to string converter (only used when throwing syntax errors)
Parser.toknam = function (code) {
  if (htmljson.DEFINE.DEBUG) {
      var keys = Object.keys(C);
      for (var i = 0, l = keys.length; i < l; i++) {
        var key = keys[i];
        if (C[key] === code) { return key; }
      }
  }
  return code && ("0x" + code.toString(16));
};

Parser.prototype.onError = function (err) { throw err; };
Parser.prototype.charError = function (buffer, i) {
  this.tState = C.STOP;
  this.onError(new Error("Unexpected " + JSON.stringify(String.fromCharCode(buffer[i])) + " at position " + i + " in state " + Parser.toknam(this.tState)));
};
Parser.prototype.appendStringChar = function (char) {
  if (this.stringBufferOffset >= STRING_BUFFER_SIZE) {
    this._string += this.stringBuffer.toString('utf8');
    this.stringBufferOffset = 0;
  }

  this.stringBuffer[this.stringBufferOffset++] = char;
};
/**
 * 
 * @param {!Buffer} buf 
 * @param {number=} start 
 * @param {number=} end 
 */
Parser.prototype.appendStringBuf = function (buf, start, end) {
  var size = buf.length;
  if (typeof start === 'number') {
    if (typeof end === 'number') {
      if (end < 0) {
        // adding a negative end decreeses the size
        size = buf.length - start + end;
      } else {
        size = end - start;
      }
    } else {
      size = buf.length - start;
    }
  }

  if (size < 0) {
    size = 0;
  }

  if (this.stringBufferOffset + size > STRING_BUFFER_SIZE) {
    this._string += this.stringBuffer.toString('utf8', 0, this.stringBufferOffset);
    this.stringBufferOffset = 0;
  }

  buf.copy(this.stringBuffer, this.stringBufferOffset, start, end);
  this.stringBufferOffset += size;
};
/**
 * 
 * @param {!Buffer | string} buffer 
 * @returns 
 */
Parser.prototype.write = function (buffer) {
  if (typeof buffer === "string") buffer = bufferFrom(buffer);
  var n;
  for (var i = 0, l = buffer.length; i < l; i++) {
    switch (this.tState) {
      case C.START:
        n = buffer[i];
        this._offset++;
        switch (n) {
          case 0x7b: this.onToken(C.LEFT_BRACE, "{"); // {
            break;
          case 0x7d: this.onToken(C.RIGHT_BRACE, "}"); // }
            break;
          case 0x5b: this.onToken(C.LEFT_BRACKET, "["); // [
            break;
          case 0x5d: this.onToken(C.RIGHT_BRACKET, "]"); // ]
            break;
          case 0x3a: this.onToken(C.COLON, ":");  // :
            break;
          case 0x2c: this.onToken(C.COMMA, ","); // ,
            break;
          case 0x74: this.tState = C.TRUE1;  // t
            break;
          case 0x66: this.tState = C.FALSE1;  // f
            break;
          case 0x6e: this.tState = C.NULL1; // n
            break;
          case 0x22: // "
            this._string = "";
            this.stringBufferOffset = 0;
            this.tState = C.STRING1;
            break;
          case 0x2d: this._string = "-"; this.tState = C.NUMBER1; // -
            break;
          default:
            if (n >= 0x30 && n < 0x40) { // 1-9
              this._string = String.fromCharCode(n); this.tState = C.NUMBER3;
            } else if (n === 0x20 || n === 0x09 || n === 0x0a || n === 0x0d) {
              // whitespace
            } else {
              return this.charError(buffer, i);
            }
            break;
        }
        break;
      case C.STRING1: // After open quote
        n = buffer[i]; // get current byte from buffer
        // check for carry over of a multi byte char split between data chunks
        // & fill temp buffer it with start of this data chunk up to the boundary limit set in the last iteration
        if (this.bytes_remaining > 0) {
          for (var j = 0; j < this.bytes_remaining; j++) {
            this.temp_buffs[this.bytes_in_sequence][this.bytes_in_sequence - this.bytes_remaining + j] = buffer[j];
          }

          this.appendStringBuf(this.temp_buffs[this.bytes_in_sequence]);
          this.bytes_in_sequence = this.bytes_remaining = 0;
          i = i + j - 1;
        } else if (this.bytes_remaining === 0 && n >= 128) { // else if no remainder bytes carried over, parse multi byte (>=128) chars one at a time
          if (n <= 193 || n > 244) {
            return this.onError(new Error("Invalid UTF-8 character at position " + i + " in state " + Parser.toknam(this.tState)));
          }
          if ((n >= 194) && (n <= 223)) this.bytes_in_sequence = 2;
          if ((n >= 224) && (n <= 239)) this.bytes_in_sequence = 3;
          if ((n >= 240) && (n <= 244)) this.bytes_in_sequence = 4;
          if ((this.bytes_in_sequence + i) > buffer.length) { // if bytes needed to complete char fall outside buffer length, we have a boundary split
            for (var k = 0; k <= (buffer.length - 1 - i); k++) {
              this.temp_buffs[this.bytes_in_sequence][k] = buffer[i + k]; // fill temp buffer of correct size with bytes available in this chunk
            }
            this.bytes_remaining = (i + this.bytes_in_sequence) - buffer.length;
            i = buffer.length - 1;
          } else {
            this.appendStringBuf(buffer, i, i + this.bytes_in_sequence);
            i = i + this.bytes_in_sequence - 1;
          }
        } else if (n === 0x22) {
          this.tState = C.START;
          this._string += this.stringBuffer.toString('utf8', 0, this.stringBufferOffset);
          this.stringBufferOffset = 0;
          this.onToken(C.STRING, this._string);
          this._offset += Buffer.byteLength(this._string, 'utf8') + 1;
          this._string = undefined;
        }
        else if (n === 0x5c) {
          this.tState = C.STRING2;
        }
        else if (n >= 0x20) { this.appendStringChar(n); }
        else {
            return this.charError(buffer, i);
        }
        break;
      case C.STRING2: // After backslash
        n = buffer[i];
        switch (n) {
          case 0x22: this.appendStringChar(n); this.tState = C.STRING1;break;
          case 0x5c: this.appendStringChar(BACK_SLASH); this.tState = C.STRING1;break;
          case 0x2f: this.appendStringChar(FORWARD_SLASH); this.tState = C.STRING1;break;
          case 0x62: this.appendStringChar(BACKSPACE); this.tState = C.STRING1;break;
          case 0x66: this.appendStringChar(FORM_FEED); this.tState = C.STRING1;break;
          case 0x6e: this.appendStringChar(NEWLINE); this.tState = C.STRING1;break;
          case 0x72: this.appendStringChar(CARRIAGE_RETURN); this.tState = C.STRING1;break;
          case 0x74: this.appendStringChar(TAB); this.tState = C.STRING1;break;
          case 0x75: this.unicode = ""; this.tState = C.STRING3;break;
          default:
            return this.charError(buffer, i);
        }
        break;
      case C.STRING3:
      case C.STRING4:
      case C.STRING5:
      case C.STRING6: // unicode hex codes
        n = buffer[i];
        // 0-9 A-F a-f
        if ((n >= 0x30 && n < 0x40) || (n > 0x40 && n <= 0x46) || (n > 0x60 && n <= 0x66)) {
          this.unicode += String.fromCharCode(n);
          if (this.tState++ === C.STRING6) {
            var intVal = parseInt(this.unicode, 16);
            this.unicode = undefined;
            if (this.highSurrogate !== undefined && intVal >= 0xDC00 && intVal < (0xDFFF + 1)) { //<56320,57343> - lowSurrogate
              this.appendStringBuf(bufferFrom(String.fromCharCode(this.highSurrogate, intVal)));
              this.highSurrogate = undefined;
            } else if (this.highSurrogate === undefined && intVal >= 0xD800 && intVal < (0xDBFF + 1)) { //<55296,56319> - highSurrogate
              this.highSurrogate = intVal;
            } else {
              if (this.highSurrogate !== undefined) {
                this.appendStringBuf(bufferFrom(String.fromCharCode(this.highSurrogate)));
                this.highSurrogate = undefined;
              }
              this.appendStringBuf(bufferFrom(String.fromCharCode(intVal)));
            }
            this.tState = C.STRING1;
          }
        } else {
          return this.charError(buffer, i);
        }
        break;
    case C.NUMBER1:
    case C.NUMBER3:
        n = buffer[i];

        switch (n) {
          case 0x30: // 0
          case 0x31: // 1
          case 0x32: // 2
          case 0x33: // 3
          case 0x34: // 4
          case 0x35: // 5
          case 0x36: // 6
          case 0x37: // 7
          case 0x38: // 8
          case 0x39: // 9
          case 0x2e: // .
          case 0x65: // e
          case 0x45: // E
          case 0x2b: // +
          case 0x2d: // -
            this._string += String.fromCharCode(n);
            this.tState = C.NUMBER3;
            break;
          default:
            this.tState = C.START;
            var result = Number(this._string);

            if (isNaN(result)){
              return this.charError(buffer, i);
            }

            if ((this._string.match(/[0-9]+/) == this._string) && (result.toString() != this._string)) {
              // Long string of digits which is an ID string and not valid and/or safe JavaScript integer Number
              this.onToken(C.STRING, this._string);
            } else {
              this.onToken(C.NUMBER, result);
            }

            this._offset += this._string.length - 1;
            this._string = undefined;
            i--;
            break;
        }
        break;
      case C.TRUE1: // r
        if (buffer[i] === 0x72) { this.tState = C.TRUE2; }
        else { return this.charError(buffer, i); }
        break;
      case C.TRUE2: // u
        if (buffer[i] === 0x75) { this.tState = C.TRUE3; }
        else { return this.charError(buffer, i); }
        break;
      case C.TRUE3: // e
        if (buffer[i] === 0x65) { this.tState = C.START; this.onToken(C.TRUE, true); this._offset += 3; }
        else { return this.charError(buffer, i); }
        break;
      case C.FALSE1: // a
        if (buffer[i] === 0x61) { this.tState = C.FALSE2; }
        else { return this.charError(buffer, i); }
        break;
      case C.FALSE2: // l
        if (buffer[i] === 0x6c) { this.tState = C.FALSE3; }
        else { return this.charError(buffer, i); }
        break;
      case C.FALSE3: // s
        if (buffer[i] === 0x73) { this.tState = C.FALSE4; }
        else { return this.charError(buffer, i); }
        break;
      case C.FALSE4: // e
        if (buffer[i] === 0x65) { this.tState = C.START; this.onToken(C.FALSE, false); this._offset += 4; }
        else { return this.charError(buffer, i); }
        break;
      case C.NULL1: // u
        if (buffer[i] === 0x75) { this.tState = C.NULL2; }
        else { return this.charError(buffer, i); }
        break;
      case C.NULL2: // l
        if (buffer[i] === 0x6c) { this.tState = C.NULL3; }
        else { return this.charError(buffer, i); }
        break;
      case C.NULL3: // l
        if (buffer[i] === 0x6c) { this.tState = C.START; this.onToken(C.NULL, null); this._offset += 3; }
        else { return this.charError(buffer, i); }
        break;
    }
  }
};

Parser.prototype.parseError = function (token, value) {
  this.tState = C.STOP;
  this.onError(new Error("Unexpected " + Parser.toknam(token) + (value ? ("(" + JSON.stringify(value) + ")") : "") + " in state " + Parser.toknam(this.state)));
};
Parser.prototype.pushToJsonStack = function () {
  this.jsonStack.push({currentValue: this.currentValue, _key: this._key, _mode: this._mode});
};
Parser.prototype.popFromJsonStack = function () {
  var value = this.currentValue;
  var parent = this.jsonStack.pop();
  this.currentValue = parent.currentValue;
  this._key = parent._key;
  this._mode = parent._mode;
  this.emit(value);
  if (!this._mode) { this.state = C.VALUE; }
};
Parser.prototype.emit = function (value) {
  if (this._mode) { this.state = C.COMMA; }
  this.onValue(value);
};
Parser.prototype.onValue = function (value) {
  // Override me
};
Parser.prototype.onToken = function (token, value) {
  switch (this.state) {
    case C.VALUE:
      switch (token) {
        case C.STRING:
        case C.NUMBER:
        case C.TRUE:
        case C.FALSE:
        case C.NULL:
          if (this.currentValue) {
            this.currentValue[this._key] = value;
          }
          this.emit(value);
          break;
        case C.LEFT_BRACE:
          this.pushToJsonStack();
          if (this.currentValue) {
            this.currentValue = this.currentValue[this._key] = {};
          } else {
            this.currentValue = {};
          }
          this._key = undefined;
          this.state = C.KEY;
          this._mode = C.OBJECT;
          break;
        case C.LEFT_BRACKET:
          this.pushToJsonStack();
          if (this.currentValue) {
            this.currentValue = this.currentValue[this._key] = [];
          } else {
            this.currentValue = [];
          }
          this._key = 0;
          this._mode = C.ARRAY;
          this.state = C.VALUE;
          break;
        case C.RIGHT_BRACE:
          if (this._mode === C.OBJECT) {
            this.popFromJsonStack();
          } else {
            return this.parseError(token, value);
          }
          break;
        case C.RIGHT_BRACKET:
          if (this._mode === C.ARRAY) {
            this.popFromJsonStack();
          } else {
            return this.parseError(token, value);
          }
          break;
        default:
          return this.parseError(token, value);
      }
      break;
    case C.KEY:
      if (token === C.STRING) {
        this._key = value;
        this.state = C.COLON;
      } else if (token === C.RIGHT_BRACE) {
        this.popFromJsonStack();
      } else {
        return this.parseError(token, value);
      }
      break;
    case C.COLON:
      if (token === C.COLON) { this.state = C.VALUE; }
      else { return this.parseError(token, value); }
      break;
    case C.COMMA:
      if (token === C.COMMA) {
        if (this._mode === C.ARRAY) { this._key++; this.state = C.VALUE; }
        else if (this._mode === C.OBJECT) { this.state = C.KEY; }

      } else if (token === C.RIGHT_BRACKET && this._mode === C.ARRAY || token === C.RIGHT_BRACE && this._mode === C.OBJECT) {
        this.popFromJsonStack();
      } else {
        return this.parseError(token, value);
      }
      break;
    default:
      return this.parseError(token, value);
  }
};

Parser.C = C;

// module.exports = Parser;
