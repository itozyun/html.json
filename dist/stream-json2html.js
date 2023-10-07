var DEFINE_HTML2JSON__EXPORT_JSON2HTML = !1, DEFINE_HTML2JSON__EXPORT_JSON2JSON = !1, DEFINE_HTML2JSON__DEBUG = !0, DEFINE_HTML2JSON__USE_XML_NS = !0, DEFINE_HTML2JSON__USE_XHTML = !0, DEFINE_INSTRUCTION_ATTR_PREFIX = ":", HTML_DOT_JSON__NODE_TYPE = {DOCUMENT_NODE:0, DOCUMENT_FRAGMENT_NODE:1, ELEMENT_NODE:2, TEXT_NODE:3, COMMENT_NODE:4, CONDITIONAL_COMMENT_HIDE_LOWER:5, CONDITIONAL_COMMENT_SHOW_LOWER:6, PROCESSING_INSTRUCTION:7};
(function(z, u, P) {
  (function() {
    function v(a) {
      return "" + a === a;
    }
    function D(a) {
      return 0 === a.indexOf("<?xml ") || 0 <= a.toUpperCase().indexOf('<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML ');
    }
    function w(a) {
      return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
    }
    function x(a, c, n) {
      a = w("" + a);
      if (a.match('"')) {
        a = a.match("'") ? c ? "'" + a.split("&apos;").join("'").split("'").join("&apos;") + "'" : '"' + a.split("&quot;").join('"').split('"').join("&quot;") + '"' : "'" + a + "'";
      } else if (n || a.match(/[^0-9a-z\.\-]/g) || 72 < a.length) {
        a += (c ? '"' : "'") + w(a) + (c ? '"' : "'");
      }
      return a;
    }
    function E(a) {
      var c = a.indexOf("#"), n = a.indexOf(".");
      if (c < n) {
        var k = a.split(".")[1];
        a = a.split(".")[0];
        if (0 < c) {
          var p = a.split("#")[1];
          a = a.split("#")[0];
        }
      } else {
        n < c && (p = a.split("#")[1], a = a.split("#")[0], 0 < n && (k = a.split(".")[1], a = a.split(".")[0]));
      }
      return [a, p, k];
    }
    function F(a) {
      "string" === typeof a && (a = G ? u.from(a) : new u(a));
      this._parser.write(a);
    }
    function H(a) {
      a && this.write(a);
      this._parser._expect !== b.END_OF_DOCUMENT && this.emit("error", "Invalid html.json");
      this.queue(null);
      this._parser = this._parser._stream = null;
    }
    function I(a) {
      -1 < a.message.indexOf("at position") && (a.message = "Invalid JSON (" + a.message + ")");
      this._onerror(a.message);
      this._stream.emit("error", a);
    }
    function J(a, c) {
      function n() {
        const l = f._args.length ? f._onInstruction.call(f._stream, f._functionName, f._args) : f._onInstruction.call(f._stream, f._functionName);
        f._functionName = null;
        f._args.length = 0;
        return l;
      }
      function k(l) {
        return "" !== l && null !== l ? " " + f._attribute + "=" + x(l, f._useSingleQuot, f._quotAlways) : "";
      }
      function p(l) {
        const q = m.pop();
        e = m.length ? b.IN_CHILD_NODES : b.END_OF_DOCUMENT;
        switch(q) {
          case HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE:
          case HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE:
          case HTML_DOT_JSON__NODE_TYPE.TEXT_NODE:
          case HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION:
            break;
          case HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER:
            h = "<![endif]--\x3e";
            break;
          case HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER:
            h = "\x3c!--<![endif]--\x3e";
            break;
          case HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE:
            h = "--\x3e";
            break;
          default:
            h = l ? "" : f._isXMLDocument || f._isXmlInHTML ? " />" : ">", (f._isXMLDocument || f._isXmlInHTML) && !l || K[q] && !f._noOmitEndTag ? f._omittedEndTagBefore = L[q] ? "" : q : (h += "</" + q + ">", f._omittedEndTagBefore = ""), y();
        }
      }
      function y() {
        f._noOmitEndTag = f._skipEscapeForHTML = f._isXmlInHTML = !1;
        for (let l = 0, q = m.length; l < q; ++l) {
          const t = m[l];
          v(t) && (A[t] && (f._noOmitEndTag = !0), B[t] && (f._skipEscapeForHTML = !0), M[t] || 0 < t.indexOf(":")) && (f._isXmlInHTML = !0);
        }
      }
      function C() {
        let l = "";
        !r && f._omittedEndTagBefore && (l = "</" + f._omittedEndTagBefore + ">", f._omittedEndTagBefore = "");
        return l;
      }
      if (a === g.C.COLON || a === g.C.COMMA) {
        this.stack.length && this._createValue(a, c);
      } else {
        console.log("> " + a + " : " + c, this._expect, this._tree);
        var m = this._tree, e = this._expect, r = !1, f = this;
        switch(e) {
          case b.PROCESSING_INSTRUCTION_ARGS:
            switch(a) {
              case g.C.LEFT_BRACKET:
              case g.C.LEFT_BRACE:
                this._createValue(a, c);
                return;
              case g.C.RIGHT_BRACKET:
                if (0 === this.stack.length) {
                  var h = (c = n()) && c.pop === [].pop ? (void 0)(c, this._onInstruction, this._onerror, {quotAlways:this._quotAlways, useSingleQuot:this._useSingleQuot, instructionAttrPrefix:this._attrPrefix}) : v(c) || c === c - 0 ? "" + c : "";
                  e = b.END_OF_NODE;
                  break;
                }
              case g.C.RIGHT_BRACE:
                1 === this.stack.length ? (this._args.push(this.value), this.value = null) : this._createValue(a, c);
                return;
              case g.C.STRING:
              case g.C.NUMBER:
              case g.C.TRUE:
              case g.C.FALSE:
              case g.C.NULL:
                this.stack.length ? this._createValue(a, c) : this._args.push(c);
                return;
              default:
                e = b.ERROR;
            }break;
          case b.IN_INSTRUCTION_ATTRIBUTE:
            switch(a) {
              case g.C.LEFT_BRACKET:
              case g.C.LEFT_BRACE:
                this._createValue(a, c);
                return;
              case g.C.RIGHT_BRACKET:
                if (0 === this.stack.length) {
                  h = k(n());
                  e = b.ATTRIBUTE_PROPERTY;
                  break;
                }
              case g.C.RIGHT_BRACE:
                1 === this.stack.length ? (this._args.push(this.value), this.value = null) : this._createValue(a, c);
                return;
              case g.C.STRING:
                if (0 === this.stack.length && !this._functionName) {
                  this._functionName = c;
                  return;
                }
              case g.C.NUMBER:
              case g.C.TRUE:
              case g.C.FALSE:
              case g.C.NULL:
                this.stack.length ? this._createValue(a, c) : this._args.push(c);
                return;
              default:
                e = b.ERROR;
            }break;
          default:
            switch(a) {
              case g.C.LEFT_BRACKET:
                switch(e) {
                  case b.ATTRIBUTES_START:
                  case b.CHILD_NODES_START:
                    r = !0;
                  case b.NODE_START:
                  case b.IN_CHILD_NODES:
                    a = d.NODE_START;
                    break;
                  case b.INSTRUCTION_ATTRIBUTE_START:
                    a = d.IN_INSTRUCTION_ATTRIBUTE;
                    break;
                  default:
                    a = d.ERROR;
                }break;
              case g.C.RIGHT_BRACKET:
                a = e === b.ATTRIBUTES_START || e === b.CHILD_NODES_START ? d.CLOSE_EMPTY_ELEMENT : e === b.IN_CHILD_NODES || e === b.END_OF_NODE ? d.END_OF_NODE : d.ERROR;
                break;
              case g.C.LEFT_BRACE:
                a = e === b.ATTRIBUTES_START ? d.ATTRIBUTES_START : e === b.STYLES_START ? d.STYLES_START : d.ERROR;
                break;
              case g.C.RIGHT_BRACE:
                a = e === b.ATTRIBUTE_PROPERTY ? d.END_OF_ATTRIBUTES : e === b.CSS_PROPERTY ? d.END_OF_STYLES : d.ERROR;
                break;
              case g.C.STRING:
                switch(e) {
                  case b.NODE_TYPE:
                  case b.TAG_NAME:
                    a = d.TAG_NAME;
                    break;
                  case b.DOCUMENT_NODE_VALUE:
                    a = d.DOCUMENT_NODE_VALUE;
                    break;
                  case b.TEXT_NODE_VALUE:
                    a = d.TEXT_NODE_VALUE;
                    break;
                  case b.COMMENT_NODE_VALUE:
                    a = d.COMMENT_NODE_VALUE;
                    break;
                  case b.COMMENT_HIDE_LOWER_FORMURA:
                    a = d.COMMENT_HIDE_LOWER_FORMURA;
                    break;
                  case b.COMMENT_SHOW_LOWER_FORMURA:
                    a = d.COMMENT_SHOW_LOWER_FORMURA;
                    break;
                  case b.ATTRIBUTE_PROPERTY:
                    a = d.ATTRIBUTE_PROPERTY;
                    break;
                  case b.ATTRIBUTE_VALUE:
                    a = d.ATTRIBUTE_VALUE;
                    break;
                  case b.STYLES_START:
                    a = d.STYLES_START;
                    break;
                  case b.CSS_PROPERTY:
                    a = d.CSS_PROPERTY;
                    break;
                  case b.CSS_VALUE:
                    a = d.CSS_VALUE;
                    break;
                  case b.ATTRIBUTES_START:
                  case b.CHILD_NODES_START:
                    r = !0;
                  case b.IN_CHILD_NODES:
                    a = d.TEXT_DATA;
                    break;
                  case b.PROCESSING_INSTRUCTION_NAME:
                    a = d.PROCESSING_INSTRUCTION_NAME;
                    break;
                  case b.INSTRUCTION_ATTRIBUTE_START:
                    a = d.INSTRUCTION_ATTRIBUTE_NAME;
                    break;
                  default:
                    a = d.ERROR;
                }break;
              case g.C.NUMBER:
                switch(e) {
                  case b.NODE_TYPE:
                    a = c;
                    break;
                  case b.ATTRIBUTE_VALUE:
                    a = d.ATTRIBUTE_VALUE;
                    break;
                  case b.CSS_VALUE:
                    a = d.CSS_VALUE;
                    break;
                  case b.TEXT_NODE_VALUE:
                    a = d.TEXT_NODE_VALUE;
                    break;
                  case b.ATTRIBUTES_START:
                  case b.CHILD_NODES_START:
                    r = !0;
                  case b.IN_CHILD_NODES:
                    a = d.TEXT_DATA;
                    c += "";
                    break;
                  default:
                    a = d.ERROR;
                }break;
              case g.C.TRUE:
              case g.C.FALSE:
              case g.C.NULL:
                a = e === b.ATTRIBUTE_VALUE ? d.ATTRIBUTE_VALUE : d.ERROR;
                break;
              default:
                a = d.ERROR;
            }console.log(". " + a);
            switch(a) {
              case d.NODE_START:
                h = r && v(m[m.length - 1]) ? ">" : "";
                e = b.NODE_TYPE;
                break;
              case d.DOCUMENT_NODE_START:
                e = b.DOCUMENT_NODE_VALUE;
                m.push(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE);
                break;
              case d.DOCUMENT_NODE_VALUE:
                DEFINE_HTML2JSON__USE_XHTML && (this._isXMLDocument = D(c));
                h = c;
                e = b.CHILD_NODES_START;
                break;
              case d.DOCUMENT_FRAGMENT_NODE_START:
                e = b.CHILD_NODES_START;
                m.push(HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE);
                break;
              case d.ELEMENT_NODE_START:
                e = b.TAG_NAME;
                break;
              case d.TAG_NAME:
                c = E(c);
                a = c[1];
                const l = c[2];
                c = c[0];
                h = ("p" === this._omittedEndTagBefore && N[c] ? "</p>" : "") + "<" + c;
                this._omittedEndTagBefore = "";
                a && (h += " id=" + x(a, this._useSingleQuot, this._quotAlways));
                l && (h += " class=" + x(l, this._useSingleQuot, this._quotAlways));
                this._noOmitEndTag || (this._noOmitEndTag = !!A[c]);
                this._skipEscapeForHTML || (this._skipEscapeForHTML = !!B[c]);
                m.push(c);
                y();
                e = b.ATTRIBUTES_START;
                break;
              case d.ATTRIBUTES_START:
                e = b.ATTRIBUTE_PROPERTY;
                break;
              case d.ATTRIBUTE_PROPERTY:
                0 === c.indexOf(this._attrPrefix) ? (this._attribute = c.substr(this._attrPrefix.length), e = b.INSTRUCTION_ATTRIBUTE_START) : (this._attribute = c, e = "style" === c ? b.STYLES_START : b.ATTRIBUTE_VALUE);
                break;
              case d.IN_INSTRUCTION_ATTRIBUTE:
                e = b.IN_INSTRUCTION_ATTRIBUTE;
                break;
              case d.INSTRUCTION_ATTRIBUTE_NAME:
                this._functionName = c, c = n();
              case d.ATTRIBUTE_VALUE:
                h = k(c);
                e = b.ATTRIBUTE_PROPERTY;
                break;
              case d.END_OF_ATTRIBUTES:
                e = b.CHILD_NODES_START;
                break;
              case d.STYLES_START:
                e = b.CSS_PROPERTY;
                break;
              case d.CSS_PROPERTY:
                this._cssPropety = c;
                e = b.CSS_VALUE;
                break;
              case d.CSS_VALUE:
                "" !== c && null !== c && (this._cssText += ";" + this._cssPropety + ":" + c);
                e = b.CSS_PROPERTY;
                break;
              case d.END_OF_STYLES:
                this._cssText && (h = k(this._cssText.substr(1)), this._cssText = "");
                e = b.ATTRIBUTE_PROPERTY;
                break;
              case d.END_OF_NODE:
                p(!0);
                break;
              case d.CLOSE_EMPTY_ELEMENT:
                p(!1);
                break;
              case d.TEXT_NODE_START:
                e = b.TEXT_NODE_VALUE;
                m.push(HTML_DOT_JSON__NODE_TYPE.TEXT_NODE);
                break;
              case d.TEXT_NODE_VALUE:
                h = C() + (f._skipEscapeForHTML ? "" + c : w("" + c));
                e = b.END_OF_NODE;
                break;
              case d.TEXT_DATA:
                h = (r && v(m[m.length - 1]) ? ">" : "") + C() + (f._skipEscapeForHTML ? "" + c : w("" + c));
                e = b.IN_CHILD_NODES;
                break;
              case d.COMMENT_NODE_START:
                h = "\x3c!--";
                e = b.COMMENT_NODE_VALUE;
                m.push(HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE);
                break;
              case d.COMMENT_NODE_VALUE:
                h = c;
                e = b.END_OF_NODE;
                break;
              case d.COMMENT_HIDE_LOWER_START:
                h = "\x3c!--[";
                e = b.COMMENT_HIDE_LOWER_FORMURA;
                m.push(HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER);
                break;
              case d.COMMENT_HIDE_LOWER_FORMURA:
                h = c + "]>";
                e = b.CHILD_NODES_START;
                break;
              case d.COMMENT_SHOW_LOWER_START:
                h = "\x3c!--[";
                e = b.COMMENT_SHOW_LOWER_FORMURA;
                m.push(HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER);
                break;
              case d.COMMENT_SHOW_LOWER_FORMURA:
                h = c + "]>\x3c!--\x3e";
                e = b.CHILD_NODES_START;
                break;
              case d.PROCESSING_INSTRUCTION_START:
                e = b.PROCESSING_INSTRUCTION_NAME;
                m.push(HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION);
                break;
              case d.PROCESSING_INSTRUCTION_NAME:
                e = b.PROCESSING_INSTRUCTION_ARGS;
                break;
              default:
                e = b.ERROR;
            }
        }
        console.log("- " + h, e, this._tree);
        e === b.ERROR ? (this._onerror("Not html.json format!"), this._stream.emit("error", "Not html.json format!")) : (this._expect = e, h && this._stream.queue(h));
      }
    }
    var L = {link:!0, meta:!0, br:!0, hr:!0, img:!0, input:!0, area:!0, base:!0, col:!0, embed:!0, keygen:!0, param:!0}, K = {p:!0, dt:!0, dd:!0, li:!0, option:!0, thead:!0, tfoot:!0, th:!0, tr:!0, td:!0, rt:!0, rp:!0, optgroup:!0, caption:!0, colgroup:!0, col:!0}, A = {a:!0, audio:!0, del:!0, ins:!0, map:!0, noscript:!0, video:!0}, M = {svg:!0, math:!0}, N = {table:!0, img:!0, svg:!0, picture:!0, object:!0, embed:!0, video:!0, audio:!0, blockquot:!0, form:!0, fieldset:!0}, B = {script:!0, style:!0, 
    plaintext:!0, xmp:!0, noscript:!0};
    const g = z("jsonparse"), O = z("through"), G = u.from && u.from !== Uint8Array.from, b = {ERROR:HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE - 2, NODE_START:HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE - 1, DOCUMENT_NODE_VALUE:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 1, TEXT_NODE_VALUE:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 2, COMMENT_NODE_VALUE:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 3, COMMENT_HIDE_LOWER_FORMURA:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 4, COMMENT_SHOW_LOWER_FORMURA:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 
    5, PROCESSING_INSTRUCTION_NAME:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 6, TAG_NAME:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 7, ATTRIBUTES_START:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 8, ATTRIBUTE_PROPERTY:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 9, ATTRIBUTE_VALUE:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 10, STYLES_START:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 11, CSS_PROPERTY:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 12, CSS_VALUE:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 
    13, IN_INSTRUCTION_ATTRIBUTE:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 14, END_OF_NODE:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 15, NODE_TYPE:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 16, PROCESSING_INSTRUCTION_ARGS:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 17, INSTRUCTION_ATTRIBUTE_START:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 18, CHILD_NODES_START:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 19, IN_CHILD_NODES:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 
    20, END_OF_DOCUMENT:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION + 21}, d = {ERROR:b.ERROR, NODE_START:b.NODE_START, DOCUMENT_NODE_START:HTML_DOT_JSON__NODE_TYPE.DOCUMENT_NODE, DOCUMENT_FRAGMENT_NODE_START:HTML_DOT_JSON__NODE_TYPE.DOCUMENT_FRAGMENT_NODE, ELEMENT_NODE_START:HTML_DOT_JSON__NODE_TYPE.ELEMENT_NODE, TEXT_NODE_START:HTML_DOT_JSON__NODE_TYPE.TEXT_NODE, COMMENT_NODE_START:HTML_DOT_JSON__NODE_TYPE.COMMENT_NODE, COMMENT_HIDE_LOWER_START:HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_HIDE_LOWER, 
    COMMENT_SHOW_LOWER_START:HTML_DOT_JSON__NODE_TYPE.CONDITIONAL_COMMENT_SHOW_LOWER, PROCESSING_INSTRUCTION_START:HTML_DOT_JSON__NODE_TYPE.PROCESSING_INSTRUCTION, DOCUMENT_NODE_VALUE:b.DOCUMENT_NODE_VALUE, TEXT_NODE_VALUE:b.TEXT_NODE_VALUE, COMMENT_NODE_VALUE:b.COMMENT_NODE_VALUE, COMMENT_HIDE_LOWER_FORMURA:b.COMMENT_HIDE_LOWER_FORMURA, COMMENT_SHOW_LOWER_FORMURA:b.COMMENT_SHOW_LOWER_FORMURA, PROCESSING_INSTRUCTION_NAME:b.PROCESSING_INSTRUCTION_NAME, TAG_NAME:b.TAG_NAME, ATTRIBUTES_START:b.ATTRIBUTES_START, 
    ATTRIBUTE_PROPERTY:b.ATTRIBUTE_PROPERTY, ATTRIBUTE_VALUE:b.ATTRIBUTE_VALUE, STYLES_START:b.STYLES_START, CSS_PROPERTY:b.CSS_PROPERTY, CSS_VALUE:b.CSS_VALUE, IN_INSTRUCTION_ATTRIBUTE:b.IN_INSTRUCTION_ATTRIBUTE, END_OF_NODE:b.END_OF_NODE, CLOSE_EMPTY_ELEMENT:b.END_OF_NODE + 1, END_OF_ATTRIBUTES:b.END_OF_NODE + 2, END_OF_STYLES:b.END_OF_NODE + 3, TEXT_DATA:b.END_OF_NODE + 4, INSTRUCTION_ATTRIBUTE_NAME:b.END_OF_NODE + 5};
    module.exports = function(a, c, n) {
      const k = new g(), p = O(F, H);
      n = c && "object" === typeof c ? c : n || {};
      p._parser = k;
      k._createValue = k.onToken;
      k.onToken = J;
      k.onError = I;
      k._expect = b.NODE_START;
      k._tree = [];
      k._args = [];
      k._onInstruction = a;
      k._onerror = "function" === typeof c ? c : function(y) {
      };
      k._quotAlways = !!n.quotAlways;
      k._useSingleQuot = !!n.useSingleQuot;
      k._attrPrefix = n.instructionAttrPrefix || DEFINE_INSTRUCTION_ATTR_PREFIX;
      k._cssText = "";
      return k._stream = p;
    };
  })();
})(require, Buffer, void 0);

