function g(a, b) {
  var f = a, e = l(f), c = 0, d = b(a, null, -1, c / 3);
  a = [-1, a, e];
  if (Infinity !== d && -Infinity !== d && 0 < f.length - e) {
    do {
      d = ++a[c];
      var h = f[d + e];
      if (null != h) {
        d = b(h, f, d + e, c / 3 + 1);
        if (Infinity === d) {
          break;
        }
        -Infinity !== d && (-1 >= d ? a[c] += d : (1 <= d && (a[c] += d), l(h) < h.length && (c += 3, a[c] = -1, a[c + 1] = f = h, a[c + 2] = e = l(h))));
      } else {
        a.length = c, c -= 3, f = a[c + 1], e = a[c + 2];
      }
    } while (0 <= c);
  }
}
;var n = {CAPTION:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, 
AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DD:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, 
DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DT:{ADDRESS:!0, 
P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, 
KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, P:{A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, LABEL:!0, INPUT:!0, BUTTON:!0, 
SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, HTML:{HEAD:!0, BODY:!0}, HEAD:{TITLE:!0, BASE:!0, BGSOUND:!0, LINK:!0, META:!0, STYLE:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0}, COLGROUP:{COL:!0}, OPTGROUP:{OPTION:!0}, OPTION:{}, TBODY:{TR:!0}, TR:{TH:!0, TD:!0}, RBC:{RB:!0, RP:!0, RT:!0}};
n.LI = n.TD = n.DD;
n.TH = n.DT;
n.RB = n.RP = n.RT = n.P;
n.TFOOT = n.THEAD = n.TBODY;
n.RTC = n.RBC;
function q(a) {
  if (a === "" + a || a === +a) {
    a = 3;
  } else {
    if (a && a.constructor === Array) {
      var b = a[0];
      b === "" + b ? a = 1 : (b = a[0], a = b === +b ? a[0] : -1);
    } else {
      a = -1;
    }
  }
  return a;
}
function l(a) {
  var b = a[0], f = q(a);
  return 1 === f || 17 === f ? (b = b === +b ? 2 : 1, (a = a[b]) && a.constructor === Array || !a || "object" !== typeof a ? b : b + 1) : 11 === b ? 1 : 9 === b || 13 === b || 16 === b ? 2 : Infinity;
}
;function r(a, b) {
  var f = !0;
  g(a, function(e) {
    var c = e[0], d = 1, h;
    switch(q(e)) {
      case 7:
        return f = !1, Infinity;
      case 1:
      case 17:
        if (c === +c && (d = 2), e = e[d], (!e || e.constructor !== Array) && e && "object" === typeof e) {
          for (h in e) {
            if (0 === h.indexOf(b)) {
              return f = !1, Infinity;
            }
          }
        }
    }
  });
  return f;
}
;module.exports = {STATIC:1, DYNAMIC:2};
module.exports.gulp = function(a, b) {
  const f = require("plugin-error"), e = require("through2"), c = b && b.instructionAttrPrefix || ":";
  return e.obj(function(d, h, k) {
    if (d.isNull()) {
      return k();
    }
    if (d.isStream()) {
      return this.emit("error", new f("filter", "Streaming not supported")), k();
    }
    if (".json" === d.extname) {
      try {
        const m = JSON.parse(d.contents.toString(h)), p = r(m, c);
        if (!p && a & 1 || p && a & 2) {
          return k();
        }
      } catch (m) {
        this.emit("error", new f("filter", m));
      }
    }
    k(null, d);
  });
};

