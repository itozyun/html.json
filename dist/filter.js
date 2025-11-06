function h(a, b) {
  var f = a, e = l(f), c = 0, d = b(a, null, -1, c / 3);
  a = [-1, a, e];
  if (Infinity !== d && -Infinity !== d && 0 < f.length - e) {
    do {
      d = ++a[c];
      var g = f[d + e];
      if (null != g) {
        d = b(g, f, d + e, c / 3 + 1);
        if (Infinity === d) {
          break;
        }
        -Infinity !== d && (-1 >= d ? a[c] += d : (1 <= d && (a[c] += d), l(g) < g.length && (c += 3, a[c] = -1, a[c + 1] = f = g, a[c + 2] = e = l(g))));
      } else {
        a.length = c, c -= 3, f = a[c + 1], e = a[c + 2];
      }
    } while (0 <= c);
  }
}
;var n = {caption:{article:!0, section:!0, nav:!0, aside:!0, h1:!0, h2:!0, h3:!0, h4:!0, h5:!0, h6:!0, header:!0, footer:!0, address:!0, p:!0, hr:!0, pre:!0, blockquote:!0, ol:!0, ul:!0, dl:!0, figure:!0, div:!0, a:!0, em:!0, strong:!0, small:!0, s:!0, cite:!0, q:!0, dfn:!0, abbr:!0, data:!0, time:!0, code:!0, "var":!0, samp:!0, kbd:!0, sub:!0, sup:!0, i:!0, b:!0, u:!0, mark:!0, ruby:!0, bdi:!0, bdo:!0, span:!0, br:!0, wbr:!0, ins:!0, del:!0, picture:!0, img:!0, iframe:!0, embed:!0, object:!0, video:!0, 
audio:!0, map:!0, area:!0, math:!0, svg:!0, form:!0, label:!0, input:!0, button:!0, select:!0, datalist:!0, textarea:!0, output:!0, progress:!0, meter:!0, fieldset:!0, details:!0, dialog:!0, script:!0, noscript:!0, template:!0, canvas:!0}, dd:{article:!0, section:!0, nav:!0, aside:!0, h1:!0, h2:!0, h3:!0, h4:!0, h5:!0, h6:!0, header:!0, footer:!0, address:!0, p:!0, hr:!0, pre:!0, blockquote:!0, ol:!0, ul:!0, dl:!0, figure:!0, div:!0, a:!0, em:!0, strong:!0, small:!0, s:!0, cite:!0, q:!0, dfn:!0, 
abbr:!0, data:!0, time:!0, code:!0, "var":!0, samp:!0, kbd:!0, sub:!0, sup:!0, i:!0, b:!0, u:!0, mark:!0, ruby:!0, bdi:!0, bdo:!0, span:!0, br:!0, wbr:!0, ins:!0, del:!0, picture:!0, img:!0, iframe:!0, embed:!0, object:!0, video:!0, audio:!0, map:!0, area:!0, math:!0, svg:!0, table:!0, form:!0, label:!0, input:!0, button:!0, select:!0, datalist:!0, textarea:!0, output:!0, progress:!0, meter:!0, fieldset:!0, details:!0, dialog:!0, script:!0, noscript:!0, template:!0, canvas:!0}, dt:{address:!0, p:!0, 
hr:!0, pre:!0, blockquote:!0, ol:!0, ul:!0, dl:!0, figure:!0, div:!0, a:!0, em:!0, strong:!0, small:!0, s:!0, cite:!0, q:!0, dfn:!0, abbr:!0, data:!0, time:!0, code:!0, "var":!0, samp:!0, kbd:!0, sub:!0, sup:!0, i:!0, b:!0, u:!0, mark:!0, ruby:!0, bdi:!0, bdo:!0, span:!0, br:!0, wbr:!0, ins:!0, del:!0, picture:!0, img:!0, iframe:!0, embed:!0, object:!0, video:!0, audio:!0, map:!0, area:!0, math:!0, svg:!0, table:!0, form:!0, label:!0, input:!0, button:!0, select:!0, datalist:!0, textarea:!0, output:!0, 
progress:!0, meter:!0, fieldset:!0, details:!0, dialog:!0, script:!0, noscript:!0, template:!0, canvas:!0}, p:{a:!0, em:!0, strong:!0, small:!0, s:!0, cite:!0, q:!0, dfn:!0, abbr:!0, data:!0, time:!0, code:!0, "var":!0, samp:!0, kbd:!0, sub:!0, sup:!0, i:!0, b:!0, u:!0, mark:!0, ruby:!0, bdi:!0, bdo:!0, span:!0, br:!0, wbr:!0, ins:!0, del:!0, picture:!0, img:!0, iframe:!0, embed:!0, object:!0, video:!0, audio:!0, map:!0, area:!0, math:!0, svg:!0, label:!0, input:!0, button:!0, select:!0, datalist:!0, 
textarea:!0, output:!0, progress:!0, meter:!0, script:!0, noscript:!0, template:!0, canvas:!0}, html:{head:!0, body:!0}, head:{title:!0, base:!0, link:!0, meta:!0, style:!0, script:!0, noscript:!0, template:!0}, colgroup:{col:!0}, optgroup:{option:!0}, option:{}, tbody:{tr:!0}, tr:{th:!0, td:!0}};
n.li = n.td = n.dd;
n.th = n.dt;
n.rp = n.rt = n.p;
n.tfoot = n.thead = n.tbody;
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
  h(a, function(e) {
    var c = e[0], d = 1, g;
    switch(q(e)) {
      case 7:
        return f = !1, Infinity;
      case 1:
      case 17:
        if (c === +c && (d = 2), e = e[d], (!e || e.constructor !== Array) && e && "object" === typeof e) {
          for (g in e) {
            if (0 === g.indexOf(b)) {
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
  return e.obj(function(d, g, k) {
    if (d.isNull()) {
      return k();
    }
    if (d.isStream()) {
      return this.emit("error", new f("filter", "Streaming not supported")), k();
    }
    if (".json" === d.extname) {
      try {
        const m = JSON.parse(d.contents.toString(g)), p = r(m, c);
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

