/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var COMPILED = !0, goog = goog || {};
goog.global = this || self;
goog.exportPath_ = function(a, b, c, d) {
  a = a.split(".");
  d = d || goog.global;
  a[0] in d || "undefined" == typeof d.execScript || d.execScript("var " + a[0]);
  for (var e; a.length && (e = a.shift());) {
    if (a.length || void 0 === b) {
      d = d[e] && d[e] !== Object.prototype[e] ? d[e] : d[e] = {};
    } else {
      if (!c && goog.isObject(b) && goog.isObject(d[e])) {
        for (var f in b) {
          b.hasOwnProperty(f) && (d[e][f] = b[f]);
        }
      } else {
        d[e] = b;
      }
    }
  }
};
goog.define = function(a, b) {
  if (!COMPILED) {
    var c = goog.global.CLOSURE_UNCOMPILED_DEFINES, d = goog.global.CLOSURE_DEFINES;
    c && void 0 === c.nodeType && Object.prototype.hasOwnProperty.call(c, a) ? b = c[a] : d && void 0 === d.nodeType && Object.prototype.hasOwnProperty.call(d, a) && (b = d[a]);
  }
  return b;
};
goog.FEATURESET_YEAR = 2012;
goog.DEBUG = !0;
goog.LOCALE = "en";
goog.TRUSTED_SITE = !0;
goog.DISALLOW_TEST_ONLY_CODE = COMPILED && !goog.DEBUG;
goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING = !1;
goog.provide = function(a) {
  if (goog.isInModuleLoader_()) {
    throw Error("goog.provide cannot be used within a module.");
  }
  if (!COMPILED && goog.isProvided_(a)) {
    throw Error('Namespace "' + a + '" already declared.');
  }
  goog.constructNamespace_(a);
};
goog.constructNamespace_ = function(a, b, c) {
  if (!COMPILED) {
    delete goog.implicitNamespaces_[a];
    for (var d = a; (d = d.substring(0, d.lastIndexOf("."))) && !goog.getObjectByName(d);) {
      goog.implicitNamespaces_[d] = !0;
    }
  }
  goog.exportPath_(a, b, c);
};
goog.NONCE_PATTERN_ = /^[\w+/_-]+[=]{0,2}$/;
goog.getScriptNonce_ = function(a) {
  a = (a || goog.global).document;
  return (a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && goog.NONCE_PATTERN_.test(a) ? a : "";
};
goog.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
goog.module = function(a) {
  if ("string" !== typeof a || !a || -1 == a.search(goog.VALID_MODULE_RE_)) {
    throw Error("Invalid module identifier");
  }
  if (!goog.isInGoogModuleLoader_()) {
    throw Error("Module " + a + " has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.");
  }
  if (goog.moduleLoaderState_.moduleName) {
    throw Error("goog.module may only be called once per module.");
  }
  goog.moduleLoaderState_.moduleName = a;
  if (!COMPILED) {
    if (goog.isProvided_(a)) {
      throw Error('Namespace "' + a + '" already declared.');
    }
    delete goog.implicitNamespaces_[a];
  }
};
goog.module.get = function(a) {
  return goog.module.getInternal_(a);
};
goog.module.getInternal_ = function(a) {
  if (!COMPILED) {
    if (a in goog.loadedModules_) {
      return goog.loadedModules_[a].exports;
    }
    if (!goog.implicitNamespaces_[a]) {
      return a = goog.getObjectByName(a), null != a ? a : null;
    }
  }
  return null;
};
goog.ModuleType = {ES6:"es6", GOOG:"goog"};
goog.moduleLoaderState_ = null;
goog.isInModuleLoader_ = function() {
  return goog.isInGoogModuleLoader_() || goog.isInEs6ModuleLoader_();
};
goog.isInGoogModuleLoader_ = function() {
  return !!goog.moduleLoaderState_ && goog.moduleLoaderState_.type == goog.ModuleType.GOOG;
};
goog.isInEs6ModuleLoader_ = function() {
  if (goog.moduleLoaderState_ && goog.moduleLoaderState_.type == goog.ModuleType.ES6) {
    return !0;
  }
  var a = goog.global.$jscomp;
  return a ? "function" != typeof a.getCurrentModulePath ? !1 : !!a.getCurrentModulePath() : !1;
};
goog.module.declareLegacyNamespace = function() {
  if (!COMPILED && !goog.isInGoogModuleLoader_()) {
    throw Error("goog.module.declareLegacyNamespace must be called from within a goog.module");
  }
  if (!COMPILED && !goog.moduleLoaderState_.moduleName) {
    throw Error("goog.module must be called prior to goog.module.declareLegacyNamespace.");
  }
  goog.moduleLoaderState_.declareLegacyNamespace = !0;
};
goog.declareModuleId = function(a) {
  if (!COMPILED) {
    if (!goog.isInEs6ModuleLoader_()) {
      throw Error("goog.declareModuleId may only be called from within an ES6 module");
    }
    if (goog.moduleLoaderState_ && goog.moduleLoaderState_.moduleName) {
      throw Error("goog.declareModuleId may only be called once per module.");
    }
    if (a in goog.loadedModules_) {
      throw Error('Module with namespace "' + a + '" already exists.');
    }
  }
  if (goog.moduleLoaderState_) {
    goog.moduleLoaderState_.moduleName = a;
  } else {
    var b = goog.global.$jscomp;
    if (!b || "function" != typeof b.getCurrentModulePath) {
      throw Error('Module with namespace "' + a + '" has been loaded incorrectly.');
    }
    b = b.require(b.getCurrentModulePath());
    goog.loadedModules_[a] = {exports:b, type:goog.ModuleType.ES6, moduleId:a};
  }
};
goog.setTestOnly = function(a) {
  if (goog.DISALLOW_TEST_ONLY_CODE) {
    throw a = a || "", Error("Importing test-only code into non-debug environment" + (a ? ": " + a : "."));
  }
};
goog.forwardDeclare = function(a) {
};
COMPILED || (goog.isProvided_ = function(a) {
  return a in goog.loadedModules_ || !goog.implicitNamespaces_[a] && null != goog.getObjectByName(a);
}, goog.implicitNamespaces_ = {"goog.module":!0});
goog.getObjectByName = function(a, b) {
  a = a.split(".");
  b = b || goog.global;
  for (var c = 0; c < a.length; c++) {
    if (b = b[a[c]], null == b) {
      return null;
    }
  }
  return b;
};
goog.addDependency = function(a, b, c, d) {
  !COMPILED && goog.DEPENDENCIES_ENABLED && goog.debugLoader_.addDependency(a, b, c, d);
};
goog.ENABLE_DEBUG_LOADER = !1;
goog.logToConsole_ = function(a) {
  goog.global.console && goog.global.console.error(a);
};
goog.require = function(a) {
  if (!COMPILED) {
    goog.ENABLE_DEBUG_LOADER && goog.debugLoader_.requested(a);
    if (goog.isProvided_(a)) {
      if (goog.isInModuleLoader_()) {
        return goog.module.getInternal_(a);
      }
    } else if (goog.ENABLE_DEBUG_LOADER) {
      var b = goog.moduleLoaderState_;
      goog.moduleLoaderState_ = null;
      try {
        goog.debugLoader_.load_(a);
      } finally {
        goog.moduleLoaderState_ = b;
      }
    }
    return null;
  }
};
goog.requireType = function(a) {
  return {};
};
goog.basePath = "";
goog.abstractMethod = function() {
  throw Error("unimplemented abstract method");
};
goog.addSingletonGetter = function(a) {
  a.instance_ = void 0;
  a.getInstance = function() {
    if (a.instance_) {
      return a.instance_;
    }
    goog.DEBUG && (goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = a);
    return a.instance_ = new a();
  };
};
goog.instantiatedSingletons_ = [];
goog.LOAD_MODULE_USING_EVAL = !0;
goog.SEAL_MODULE_EXPORTS = goog.DEBUG;
goog.loadedModules_ = {};
goog.DEPENDENCIES_ENABLED = !COMPILED && goog.ENABLE_DEBUG_LOADER;
goog.TRANSPILE = "detect";
goog.ASSUME_ES_MODULES_TRANSPILED = !1;
goog.TRUSTED_TYPES_POLICY_NAME = "goog";
goog.hasBadLetScoping = null;
goog.loadModule = function(a) {
  var b = goog.moduleLoaderState_;
  try {
    goog.moduleLoaderState_ = {moduleName:"", declareLegacyNamespace:!1, type:goog.ModuleType.GOOG};
    var c = {}, d = c;
    if ("function" === typeof a) {
      d = a.call(void 0, d);
    } else if ("string" === typeof a) {
      d = goog.loadModuleFromSource_.call(void 0, d, a);
    } else {
      throw Error("Invalid module definition");
    }
    var e = goog.moduleLoaderState_.moduleName;
    if ("string" === typeof e && e) {
      goog.moduleLoaderState_.declareLegacyNamespace ? goog.constructNamespace_(e, d, c !== d) : goog.SEAL_MODULE_EXPORTS && Object.seal && "object" == typeof d && null != d && Object.seal(d), goog.loadedModules_[e] = {exports:d, type:goog.ModuleType.GOOG, moduleId:goog.moduleLoaderState_.moduleName};
    } else {
      throw Error('Invalid module name "' + e + '"');
    }
  } finally {
    goog.moduleLoaderState_ = b;
  }
};
goog.loadModuleFromSource_ = function(a, b) {
  eval(goog.CLOSURE_EVAL_PREFILTER_.createScript(b));
  return a;
};
goog.normalizePath_ = function(a) {
  a = a.split("/");
  for (var b = 0; b < a.length;) {
    "." == a[b] ? a.splice(b, 1) : b && ".." == a[b] && a[b - 1] && ".." != a[b - 1] ? a.splice(--b, 2) : b++;
  }
  return a.join("/");
};
goog.loadFileSync_ = function(a) {
  if (goog.global.CLOSURE_LOAD_FILE_SYNC) {
    return goog.global.CLOSURE_LOAD_FILE_SYNC(a);
  }
  try {
    var b = new goog.global.XMLHttpRequest();
    b.open("get", a, !1);
    b.send();
    return 0 == b.status || 200 == b.status ? b.responseText : null;
  } catch (c) {
    return null;
  }
};
goog.typeOf = function(a) {
  var b = typeof a;
  return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
};
goog.isArrayLike = function(a) {
  var b = goog.typeOf(a);
  return "array" == b || "object" == b && "number" == typeof a.length;
};
goog.isDateLike = function(a) {
  return goog.isObject(a) && "function" == typeof a.getFullYear;
};
goog.isObject = function(a) {
  var b = typeof a;
  return "object" == b && null != a || "function" == b;
};
goog.getUid = function(a) {
  return Object.prototype.hasOwnProperty.call(a, goog.UID_PROPERTY_) && a[goog.UID_PROPERTY_] || (a[goog.UID_PROPERTY_] = ++goog.uidCounter_);
};
goog.hasUid = function(a) {
  return !!a[goog.UID_PROPERTY_];
};
goog.removeUid = function(a) {
  null !== a && "removeAttribute" in a && a.removeAttribute(goog.UID_PROPERTY_);
  try {
    delete a[goog.UID_PROPERTY_];
  } catch (b) {
  }
};
goog.UID_PROPERTY_ = "closure_uid_" + (1e9 * Math.random() >>> 0);
goog.uidCounter_ = 0;
goog.cloneObject = function(a) {
  var b = goog.typeOf(a);
  if ("object" == b || "array" == b) {
    if ("function" === typeof a.clone) {
      return a.clone();
    }
    if ("undefined" !== typeof Map && a instanceof Map) {
      return new Map(a);
    }
    if ("undefined" !== typeof Set && a instanceof Set) {
      return new Set(a);
    }
    b = "array" == b ? [] : {};
    for (var c in a) {
      b[c] = goog.cloneObject(a[c]);
    }
    return b;
  }
  return a;
};
goog.bindNative_ = function(a, b, c) {
  return a.call.apply(a.bind, arguments);
};
goog.bindJs_ = function(a, b, c) {
  if (!a) {
    throw Error();
  }
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var e = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(e, d);
      return a.apply(b, e);
    };
  }
  return function() {
    return a.apply(b, arguments);
  };
};
goog.bind = function(a, b, c) {
  Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? goog.bind = goog.bindNative_ : goog.bind = goog.bindJs_;
  return goog.bind.apply(null, arguments);
};
goog.partial = function(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var d = c.slice();
    d.push.apply(d, arguments);
    return a.apply(this, d);
  };
};
goog.now = function() {
  return Date.now();
};
goog.globalEval = function(a) {
  (0,eval)(a);
};
goog.getCssName = function(a, b) {
  if ("." == String(a).charAt(0)) {
    throw Error('className passed in goog.getCssName must not start with ".". You passed: ' + a);
  }
  var c = function(e) {
    return goog.cssNameMapping_[e] || e;
  }, d = function(e) {
    e = e.split("-");
    for (var f = [], g = 0; g < e.length; g++) {
      f.push(c(e[g]));
    }
    return f.join("-");
  };
  d = goog.cssNameMapping_ ? "BY_WHOLE" == goog.cssNameMappingStyle_ ? c : d : function(e) {
    return e;
  };
  a = b ? a + "-" + d(b) : d(a);
  return goog.global.CLOSURE_CSS_NAME_MAP_FN ? goog.global.CLOSURE_CSS_NAME_MAP_FN(a) : a;
};
goog.setCssNameMapping = function(a, b) {
  goog.cssNameMapping_ = a;
  goog.cssNameMappingStyle_ = b;
};
!COMPILED && goog.global.CLOSURE_CSS_NAME_MAPPING && (goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING);
goog.GetMsgOptions = function() {
};
goog.getMsg = function(a, b, c) {
  c && c.html && (a = a.replace(/</g, "&lt;"));
  c && c.unescapeHtmlEntities && (a = a.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&apos;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, "&"));
  b && (a = a.replace(/\{\$([^}]+)}/g, function(d, e) {
    return null != b && e in b ? b[e] : d;
  }));
  return a;
};
goog.getMsgWithFallback = function(a, b) {
  return a;
};
goog.exportSymbol = function(a, b, c) {
  goog.exportPath_(a, b, !0, c);
};
goog.exportProperty = function(a, b, c) {
  a[b] = c;
};
goog.inherits = function(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.superClass_ = b.prototype;
  a.prototype = new c();
  a.prototype.constructor = a;
  a.base = function(d, e, f) {
    for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) {
      g[h - 2] = arguments[h];
    }
    return b.prototype[e].apply(d, g);
  };
};
goog.scope = function(a) {
  if (goog.isInModuleLoader_()) {
    throw Error("goog.scope is not supported within a module.");
  }
  a.call(goog.global);
};
COMPILED || (goog.global.COMPILED = COMPILED);
goog.defineClass = function(a, b) {
  var c = b.constructor, d = b.statics;
  c && c != Object.prototype.constructor || (c = function() {
    throw Error("cannot instantiate an interface (no constructor defined).");
  });
  c = goog.defineClass.createSealingConstructor_(c, a);
  a && goog.inherits(c, a);
  delete b.constructor;
  delete b.statics;
  goog.defineClass.applyProperties_(c.prototype, b);
  null != d && (d instanceof Function ? d(c) : goog.defineClass.applyProperties_(c, d));
  return c;
};
goog.defineClass.SEAL_CLASS_INSTANCES = goog.DEBUG;
goog.defineClass.createSealingConstructor_ = function(a, b) {
  return goog.defineClass.SEAL_CLASS_INSTANCES ? function() {
    var c = a.apply(this, arguments) || this;
    c[goog.UID_PROPERTY_] = c[goog.UID_PROPERTY_];
    return c;
  } : a;
};
goog.defineClass.OBJECT_PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
goog.defineClass.applyProperties_ = function(a, b) {
  for (var c in b) {
    Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c]);
  }
  for (var d = 0; d < goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length; d++) {
    c = goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[d], Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c]);
  }
};
goog.identity_ = function(a) {
  return a;
};
goog.createTrustedTypesPolicy = function(a) {
  var b = null, c = goog.global.trustedTypes;
  if (!c || !c.createPolicy) {
    return b;
  }
  try {
    b = c.createPolicy(a, {createHTML:goog.identity_, createScript:goog.identity_, createScriptURL:goog.identity_});
  } catch (d) {
    goog.logToConsole_(d.message);
  }
  return b;
};
!COMPILED && goog.DEPENDENCIES_ENABLED && (goog.isEdge_ = function() {
  return !!(goog.global.navigator && goog.global.navigator.userAgent ? goog.global.navigator.userAgent : "").match(/Edge\/(\d+)(\.\d)*/i);
}, goog.inHtmlDocument_ = function() {
  var a = goog.global.document;
  return null != a && "write" in a;
}, goog.isDocumentLoading_ = function() {
  var a = goog.global.document;
  return a.attachEvent ? "complete" != a.readyState : "loading" == a.readyState;
}, goog.findBasePath_ = function() {
  if (void 0 != goog.global.CLOSURE_BASE_PATH && "string" === typeof goog.global.CLOSURE_BASE_PATH) {
    goog.basePath = goog.global.CLOSURE_BASE_PATH;
  } else if (goog.inHtmlDocument_()) {
    var a = goog.global.document, b = a.currentScript;
    a = b ? [b] : a.getElementsByTagName("SCRIPT");
    for (b = a.length - 1; 0 <= b; --b) {
      var c = a[b].src, d = c.lastIndexOf("?");
      d = -1 == d ? c.length : d;
      if ("base.js" == c.slice(d - 7, d)) {
        goog.basePath = c.slice(0, d - 7);
        break;
      }
    }
  }
}, goog.findBasePath_(), goog.protectScriptTag_ = function(a) {
  return a.replace(/<\/(SCRIPT)/ig, "\\x3c/$1");
}, goog.DebugLoader_ = function() {
  this.dependencies_ = {};
  this.idToPath_ = {};
  this.written_ = {};
  this.loadingDeps_ = [];
  this.depsToLoad_ = [];
  this.paused_ = !1;
  this.factory_ = new goog.DependencyFactory();
  this.deferredCallbacks_ = {};
  this.deferredQueue_ = [];
}, goog.DebugLoader_.prototype.bootstrap = function(a, b) {
  function c() {
    d && (goog.global.setTimeout(d, 0), d = null);
  }
  var d = b;
  if (a.length) {
    b = [];
    for (var e = 0; e < a.length; e++) {
      var f = this.getPathFromDeps_(a[e]);
      if (!f) {
        throw Error("Unregonized namespace: " + a[e]);
      }
      b.push(this.dependencies_[f]);
    }
    f = goog.require;
    var g = 0;
    for (e = 0; e < a.length; e++) {
      f(a[e]), b[e].onLoad(function() {
        ++g == a.length && c();
      });
    }
  } else {
    c();
  }
}, goog.DebugLoader_.prototype.loadClosureDeps = function() {
  this.depsToLoad_.push(this.factory_.createDependency(goog.normalizePath_(goog.basePath + "deps.js"), "deps.js", [], [], {}));
  this.loadDeps_();
}, goog.DebugLoader_.prototype.requested = function(a, b) {
  (a = this.getPathFromDeps_(a)) && (b || this.areDepsLoaded_(this.dependencies_[a].requires)) && (b = this.deferredCallbacks_[a]) && (delete this.deferredCallbacks_[a], b());
}, goog.DebugLoader_.prototype.setDependencyFactory = function(a) {
  this.factory_ = a;
}, goog.DebugLoader_.prototype.load_ = function(a) {
  if (this.getPathFromDeps_(a)) {
    var b = this, c = [], d = function(e) {
      var f = b.getPathFromDeps_(e);
      if (!f) {
        throw Error("Bad dependency path or symbol: " + e);
      }
      if (!b.written_[f]) {
        b.written_[f] = !0;
        e = b.dependencies_[f];
        for (f = 0; f < e.requires.length; f++) {
          goog.isProvided_(e.requires[f]) || d(e.requires[f]);
        }
        c.push(e);
      }
    };
    d(a);
    a = !!this.depsToLoad_.length;
    this.depsToLoad_ = this.depsToLoad_.concat(c);
    this.paused_ || a || this.loadDeps_();
  } else {
    goog.logToConsole_("goog.require could not find: " + a);
  }
}, goog.DebugLoader_.prototype.loadDeps_ = function() {
  for (var a = this, b = this.paused_; this.depsToLoad_.length && !b;) {
    (function() {
      var c = !1, d = a.depsToLoad_.shift(), e = !1;
      a.loading_(d);
      var f = {pause:function() {
        if (c) {
          throw Error("Cannot call pause after the call to load.");
        }
        b = !0;
      }, resume:function() {
        c ? a.resume_() : b = !1;
      }, loaded:function() {
        if (e) {
          throw Error("Double call to loaded.");
        }
        e = !0;
        a.loaded_(d);
      }, pending:function() {
        for (var g = [], h = 0; h < a.loadingDeps_.length; h++) {
          g.push(a.loadingDeps_[h]);
        }
        return g;
      }, setModuleState:function(g) {
        goog.moduleLoaderState_ = {type:g, moduleName:"", declareLegacyNamespace:!1};
      }, registerEs6ModuleExports:function(g, h, x) {
        x && (goog.loadedModules_[x] = {exports:h, type:goog.ModuleType.ES6, moduleId:x || ""});
      }, registerGoogModuleExports:function(g, h) {
        goog.loadedModules_[g] = {exports:h, type:goog.ModuleType.GOOG, moduleId:g};
      }, clearModuleState:function() {
        goog.moduleLoaderState_ = null;
      }, defer:function(g) {
        if (c) {
          throw Error("Cannot register with defer after the call to load.");
        }
        a.defer_(d, g);
      }, areDepsLoaded:function() {
        return a.areDepsLoaded_(d.requires);
      }};
      try {
        d.load(f);
      } finally {
        c = !0;
      }
    })();
  }
  b && this.pause_();
}, goog.DebugLoader_.prototype.pause_ = function() {
  this.paused_ = !0;
}, goog.DebugLoader_.prototype.resume_ = function() {
  this.paused_ && (this.paused_ = !1, this.loadDeps_());
}, goog.DebugLoader_.prototype.loading_ = function(a) {
  this.loadingDeps_.push(a);
}, goog.DebugLoader_.prototype.loaded_ = function(a) {
  for (var b = 0; b < this.loadingDeps_.length; b++) {
    if (this.loadingDeps_[b] == a) {
      this.loadingDeps_.splice(b, 1);
      break;
    }
  }
  for (b = 0; b < this.deferredQueue_.length; b++) {
    if (this.deferredQueue_[b] == a.path) {
      this.deferredQueue_.splice(b, 1);
      break;
    }
  }
  if (this.loadingDeps_.length == this.deferredQueue_.length && !this.depsToLoad_.length) {
    for (; this.deferredQueue_.length;) {
      this.requested(this.deferredQueue_.shift(), !0);
    }
  }
  a.loaded();
}, goog.DebugLoader_.prototype.areDepsLoaded_ = function(a) {
  for (var b = 0; b < a.length; b++) {
    var c = this.getPathFromDeps_(a[b]);
    if (!c || !(c in this.deferredCallbacks_ || goog.isProvided_(a[b]))) {
      return !1;
    }
  }
  return !0;
}, goog.DebugLoader_.prototype.getPathFromDeps_ = function(a) {
  return a in this.idToPath_ ? this.idToPath_[a] : a in this.dependencies_ ? a : null;
}, goog.DebugLoader_.prototype.defer_ = function(a, b) {
  this.deferredCallbacks_[a.path] = b;
  this.deferredQueue_.push(a.path);
}, goog.LoadController = function() {
}, goog.LoadController.prototype.pause = function() {
}, goog.LoadController.prototype.resume = function() {
}, goog.LoadController.prototype.loaded = function() {
}, goog.LoadController.prototype.pending = function() {
}, goog.LoadController.prototype.registerEs6ModuleExports = function(a, b, c) {
}, goog.LoadController.prototype.setModuleState = function(a) {
}, goog.LoadController.prototype.clearModuleState = function() {
}, goog.LoadController.prototype.defer = function(a) {
}, goog.LoadController.prototype.areDepsLoaded = function() {
}, goog.Dependency = function(a, b, c, d, e) {
  this.path = a;
  this.relativePath = b;
  this.provides = c;
  this.requires = d;
  this.loadFlags = e;
  this.loaded_ = !1;
  this.loadCallbacks_ = [];
}, goog.Dependency.prototype.getPathName = function() {
  var a = this.path, b = a.indexOf("://");
  0 <= b && (a = a.substring(b + 3), b = a.indexOf("/"), 0 <= b && (a = a.substring(b + 1)));
  return a;
}, goog.Dependency.prototype.onLoad = function(a) {
  this.loaded_ ? a() : this.loadCallbacks_.push(a);
}, goog.Dependency.prototype.loaded = function() {
  this.loaded_ = !0;
  var a = this.loadCallbacks_;
  this.loadCallbacks_ = [];
  for (var b = 0; b < a.length; b++) {
    a[b]();
  }
}, goog.Dependency.defer_ = !1, goog.Dependency.callbackMap_ = {}, goog.Dependency.registerCallback_ = function(a) {
  var b = Math.random().toString(32);
  goog.Dependency.callbackMap_[b] = a;
  return b;
}, goog.Dependency.unregisterCallback_ = function(a) {
  delete goog.Dependency.callbackMap_[a];
}, goog.Dependency.callback_ = function(a, b) {
  if (a in goog.Dependency.callbackMap_) {
    for (var c = goog.Dependency.callbackMap_[a], d = [], e = 1; e < arguments.length; e++) {
      d.push(arguments[e]);
    }
    c.apply(void 0, d);
  } else {
    throw Error("Callback key " + a + " does not exist (was base.js loaded more than once?).");
  }
}, goog.Dependency.prototype.load = function(a) {
  if (goog.global.CLOSURE_IMPORT_SCRIPT) {
    goog.global.CLOSURE_IMPORT_SCRIPT(this.path) ? a.loaded() : a.pause();
  } else {
    if (goog.inHtmlDocument_()) {
      var b = goog.global.document;
      if ("complete" == b.readyState && !goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING) {
        if (/\bdeps.js$/.test(this.path)) {
          a.loaded();
          return;
        }
        throw Error('Cannot write "' + this.path + '" after document load');
      }
      var c = goog.getScriptNonce_();
      if (!goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING && goog.isDocumentLoading_()) {
        var d = function(h) {
          h.readyState && "complete" != h.readyState ? h.onload = d : (goog.Dependency.unregisterCallback_(e), a.loaded());
        };
        var e = goog.Dependency.registerCallback_(d);
        c = c ? ' nonce="' + c + '"' : "";
        var f = '<script src="' + this.path + '"' + c + (goog.Dependency.defer_ ? " defer" : "") + ' id="script-' + e + '">\x3c/script>';
        f += "<script" + c + ">";
        f = goog.Dependency.defer_ ? f + ("document.getElementById('script-" + e + "').onload = function() {\n  goog.Dependency.callback_('" + e + "', this);\n};\n") : f + ("goog.Dependency.callback_('" + e + "', document.getElementById('script-" + e + "'));");
        f += "\x3c/script>";
        b.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(f) : f);
      } else {
        var g = b.createElement("script");
        g.defer = goog.Dependency.defer_;
        g.async = !1;
        c && (g.nonce = c);
        g.onload = function() {
          g.onload = null;
          a.loaded();
        };
        g.src = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(this.path) : this.path;
        b.head.appendChild(g);
      }
    } else {
      goog.logToConsole_("Cannot use default debug loader outside of HTML documents."), "deps.js" == this.relativePath ? (goog.logToConsole_("Consider setting CLOSURE_IMPORT_SCRIPT before loading base.js, or setting CLOSURE_NO_DEPS to true."), a.loaded()) : a.pause();
    }
  }
}, goog.Es6ModuleDependency = function(a, b, c, d, e) {
  goog.Dependency.call(this, a, b, c, d, e);
}, goog.inherits(goog.Es6ModuleDependency, goog.Dependency), goog.Es6ModuleDependency.prototype.load = function(a) {
  function b(q, w) {
    var t = "", H = goog.getScriptNonce_();
    H && (t = ' nonce="' + H + '"');
    q = w ? '<script type="module" crossorigin' + t + ">" + w + "\x3c/script>" : '<script type="module" crossorigin src="' + q + '"' + t + ">\x3c/script>";
    d.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(q) : q);
  }
  function c(q, w) {
    var t = d.createElement("script");
    t.defer = !0;
    t.async = !1;
    t.type = "module";
    t.setAttribute("crossorigin", !0);
    var H = goog.getScriptNonce_();
    H && (t.nonce = H);
    w ? t.text = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScript(w) : w : t.src = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(q) : q;
    d.head.appendChild(t);
  }
  if (goog.global.CLOSURE_IMPORT_SCRIPT) {
    goog.global.CLOSURE_IMPORT_SCRIPT(this.path) ? a.loaded() : a.pause();
  } else {
    if (goog.inHtmlDocument_()) {
      var d = goog.global.document, e = this;
      if (goog.isDocumentLoading_()) {
        var f = b;
        goog.Dependency.defer_ = !0;
      } else {
        f = c;
      }
      var g = goog.Dependency.registerCallback_(function() {
        goog.Dependency.unregisterCallback_(g);
        a.setModuleState(goog.ModuleType.ES6);
      });
      f(void 0, 'goog.Dependency.callback_("' + g + '")');
      f(this.path, void 0);
      var h = goog.Dependency.registerCallback_(function(q) {
        goog.Dependency.unregisterCallback_(h);
        a.registerEs6ModuleExports(e.path, q, goog.moduleLoaderState_.moduleName);
      });
      f(void 0, 'import * as m from "' + this.path + '"; goog.Dependency.callback_("' + h + '", m)');
      var x = goog.Dependency.registerCallback_(function() {
        goog.Dependency.unregisterCallback_(x);
        a.clearModuleState();
        a.loaded();
      });
      f(void 0, 'goog.Dependency.callback_("' + x + '")');
    } else {
      goog.logToConsole_("Cannot use default debug loader outside of HTML documents."), a.pause();
    }
  }
}, goog.TransformedDependency = function(a, b, c, d, e) {
  goog.Dependency.call(this, a, b, c, d, e);
  this.contents_ = null;
  this.lazyFetch_ = !goog.inHtmlDocument_() || !("noModule" in goog.global.document.createElement("script"));
}, goog.inherits(goog.TransformedDependency, goog.Dependency), goog.TransformedDependency.prototype.load = function(a) {
  function b() {
    e.contents_ = goog.loadFileSync_(e.path);
    e.contents_ && (e.contents_ = e.transform(e.contents_), e.contents_ && (e.contents_ += "\n//# sourceURL=" + e.path));
  }
  function c() {
    e.lazyFetch_ && b();
    if (e.contents_) {
      f && a.setModuleState(goog.ModuleType.ES6);
      try {
        var q = e.contents_;
        e.contents_ = null;
        goog.globalEval(goog.CLOSURE_EVAL_PREFILTER_.createScript(q));
        if (f) {
          var w = goog.moduleLoaderState_.moduleName;
        }
      } finally {
        f && a.clearModuleState();
      }
      f && goog.global.$jscomp.require.ensure([e.getPathName()], function() {
        a.registerEs6ModuleExports(e.path, goog.global.$jscomp.require(e.getPathName()), w);
      });
      a.loaded();
    }
  }
  function d() {
    var q = goog.global.document, w = goog.Dependency.registerCallback_(function() {
      goog.Dependency.unregisterCallback_(w);
      c();
    }), t = goog.getScriptNonce_();
    t = "<script" + (t ? ' nonce="' + t + '"' : "") + ">" + goog.protectScriptTag_('goog.Dependency.callback_("' + w + '");') + "\x3c/script>";
    q.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(t) : t);
  }
  var e = this;
  if (goog.global.CLOSURE_IMPORT_SCRIPT) {
    b(), this.contents_ && goog.global.CLOSURE_IMPORT_SCRIPT("", this.contents_) ? (this.contents_ = null, a.loaded()) : a.pause();
  } else {
    var f = this.loadFlags.module == goog.ModuleType.ES6;
    this.lazyFetch_ || b();
    var g = 1 < a.pending().length;
    if (goog.Dependency.defer_ && (g || goog.isDocumentLoading_())) {
      a.defer(function() {
        c();
      });
    } else {
      var h = goog.global.document;
      g = goog.inHtmlDocument_() && ("ActiveXObject" in goog.global || goog.isEdge_());
      if (f && goog.inHtmlDocument_() && goog.isDocumentLoading_() && !g) {
        goog.Dependency.defer_ = !0;
        a.pause();
        var x = h.onreadystatechange;
        h.onreadystatechange = function() {
          "interactive" == h.readyState && (h.onreadystatechange = x, c(), a.resume());
          "function" === typeof x && x.apply(void 0, arguments);
        };
      } else {
        goog.inHtmlDocument_() && goog.isDocumentLoading_() ? d() : c();
      }
    }
  }
}, goog.TransformedDependency.prototype.transform = function(a) {
}, goog.PreTranspiledEs6ModuleDependency = function(a, b, c, d, e) {
  goog.TransformedDependency.call(this, a, b, c, d, e);
}, goog.inherits(goog.PreTranspiledEs6ModuleDependency, goog.TransformedDependency), goog.PreTranspiledEs6ModuleDependency.prototype.transform = function(a) {
  return a;
}, goog.GoogModuleDependency = function(a, b, c, d, e) {
  goog.TransformedDependency.call(this, a, b, c, d, e);
}, goog.inherits(goog.GoogModuleDependency, goog.TransformedDependency), goog.GoogModuleDependency.prototype.transform = function(a) {
  return goog.LOAD_MODULE_USING_EVAL && void 0 !== goog.global.JSON ? "goog.loadModule(" + goog.global.JSON.stringify(a + "\n//# sourceURL=" + this.path + "\n") + ");" : 'goog.loadModule(function(exports) {"use strict";' + a + "\n;return exports});\n//# sourceURL=" + this.path + "\n";
}, goog.DebugLoader_.prototype.addDependency = function(a, b, c, d) {
  b = b || [];
  a = a.replace(/\\/g, "/");
  var e = goog.normalizePath_(goog.basePath + a);
  d && "boolean" !== typeof d || (d = d ? {module:goog.ModuleType.GOOG} : {});
  c = this.factory_.createDependency(e, a, b, c, d);
  this.dependencies_[e] = c;
  for (c = 0; c < b.length; c++) {
    this.idToPath_[b[c]] = e;
  }
  this.idToPath_[a] = e;
}, goog.DependencyFactory = function() {
}, goog.DependencyFactory.prototype.createDependency = function(a, b, c, d, e) {
  return e.module == goog.ModuleType.GOOG ? new goog.GoogModuleDependency(a, b, c, d, e) : e.module == goog.ModuleType.ES6 ? goog.ASSUME_ES_MODULES_TRANSPILED ? new goog.PreTranspiledEs6ModuleDependency(a, b, c, d, e) : new goog.Es6ModuleDependency(a, b, c, d, e) : new goog.Dependency(a, b, c, d, e);
}, goog.debugLoader_ = new goog.DebugLoader_(), goog.loadClosureDeps = function() {
  goog.debugLoader_.loadClosureDeps();
}, goog.setDependencyFactory = function(a) {
  goog.debugLoader_.setDependencyFactory(a);
}, goog.TRUSTED_TYPES_POLICY_ = goog.TRUSTED_TYPES_POLICY_NAME ? goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME + "#base") : null, goog.global.CLOSURE_NO_DEPS || goog.debugLoader_.loadClosureDeps(), goog.bootstrap = function(a, b) {
  goog.debugLoader_.bootstrap(a, b);
});
if (!COMPILED) {
  var isChrome87 = !1;
  try {
    isChrome87 = eval(goog.global.trustedTypes.emptyScript) !== goog.global.trustedTypes.emptyScript;
  } catch (a) {
  }
  goog.CLOSURE_EVAL_PREFILTER_ = goog.global.trustedTypes && isChrome87 && goog.createTrustedTypesPolicy("goog#base#devonly#eval") || {createScript:goog.identity_};
}
;var htmlparser = {XML_ROOT_ELEMENTS:{xml:!0, svg:!0, math:!0}, BOOLEAN_ATTRIBUTES:{async:!0, autofocus:!0, checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, draggable:!0, hidden:!0, ismap:!0, loop:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, novalidate:!0, nowrap:!0, readonly:!0, required:!0, reversed:!0, scoped:!0, selected:!0}, VOID_ELEMENTS:{AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, COMMAND:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, 
META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0, area:!0, base:!0, basefont:!0, br:!0, bgsound:!0, col:!0, command:!0, frame:!0, hr:!0, img:!0, input:!0, isindex:!0, keygen:!0, link:!0, meta:!0, param:!0, source:!0, track:!0, embed:!0, wbr:!0}, RAW_TEXT_ELEMENTS:{SCRIPT:!0, STYLE:!0, TEXTAREA:!0, TITLE:!0, PLAINTEXT:!0, XMP:!0, script:!0, style:!0, textarea:!0, title:!0, plaintext:!0, xmp:!0}}, OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN = {CAPTION:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, 
H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, FORM:!0, LABEL:!0, 
INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DD:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, 
KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DT:{ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, 
DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, 
DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, P:{A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, 
PROGRESS:!0, METER:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, HTML:{HEAD:!0, BODY:!0}, HEAD:{TITLE:!0, BASE:!0, BGSOUND:!0, LINK:!0, META:!0, STYLE:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLETE:!0}, COLGROUP:{COL:!0}, OPTGROUP:{OPTION:!0}, OPTION:{}, TBODY:{TR:!0}, TR:{TH:!0, TD:!0}, RBC:{RB:!0, RP:!0, RT:!0}};
htmlparser.OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN = OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN;
OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.LI = OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.TD = OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.DD;
OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.TH = OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.DT;
OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.RB = OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.RP = OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.RT = OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.P;
OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.TFOOT = OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.THEAD = OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.TBODY;
OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.RTC = OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.RBC;
var htmljson = {NODE_TYPE:{ELEMENT_NODE:1, TEXT_NODE:3, CDATA_SECTION:4, PROCESSING_INSTRUCTION:7, COMMENT_NODE:8, DOCUMENT_NODE:9, DOCUMENT_FRAGMENT_NODE:11, COND_CMT_HIDE_LOWER:13, COND_CMT_SHOW_LOWER_START:14, COND_CMT_SHOW_LOWER_END:15, NETSCAPE4_COND_CMT_HIDE_LOWER:16, ELEMENT_START_TAG:17, ELEMENT_END_TAG:18}};
htmljson.PHASE = {ERROR:htmljson.NODE_TYPE.ELEMENT_NODE - 2, NODE_START:htmljson.NODE_TYPE.ELEMENT_NODE - 1, ENTER_ELEMENT_NODE:htmljson.NODE_TYPE.ELEMENT_NODE, ENTER_TEXT_NODE:htmljson.NODE_TYPE.TEXT_NODE, ENTER_CDATA_SECTION:htmljson.NODE_TYPE.CDATA_SECTION, ENTER_PROCESSING_INSTRUCTION:htmljson.NODE_TYPE.PROCESSING_INSTRUCTION, ENTER_COMMENT_NODE:htmljson.NODE_TYPE.COMMENT_NODE, ENTER_DOCUMENT_NODE:htmljson.NODE_TYPE.DOCUMENT_NODE, ENTER_DOCUMENT_FRAGMENT_NODE:htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE, 
ENTER_COND_CMT_HIDE_LOWER:htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER, ENTER_COND_CMT_SHOW_LOWER_START:htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START, ENTER_COND_CMT_SHOW_LOWER_END:htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_END, ENTER_NN4_COND_CMT_HIDE_LOWER:htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER, ENTER_ELEMENT_START_TAG:htmljson.NODE_TYPE.ELEMENT_START_TAG, ENTER_ELEMENT_END_TAG:htmljson.NODE_TYPE.ELEMENT_END_TAG, DOCUMENT_NODE_VALUE:htmljson.NODE_TYPE.ELEMENT_END_TAG + 1, TEXT_NODE_VALUE:htmljson.NODE_TYPE.ELEMENT_END_TAG + 
2, CDATA_SECTION_VALUE:htmljson.NODE_TYPE.ELEMENT_END_TAG + 3, COMMENT_NODE_VALUE:htmljson.NODE_TYPE.ELEMENT_END_TAG + 4, COND_CMT_HIDE_LOWER_FORMURA:htmljson.NODE_TYPE.ELEMENT_END_TAG + 5, COND_CMT_SHOW_LOWER_FORMURA:htmljson.NODE_TYPE.ELEMENT_END_TAG + 6, NN4_COND_CMT_SHOW_LOWER_FORMURA:htmljson.NODE_TYPE.ELEMENT_END_TAG + 7, PROCESSING_INSTRUCTION_NAME:htmljson.NODE_TYPE.ELEMENT_END_TAG + 8, TAG_NAME:htmljson.NODE_TYPE.ELEMENT_END_TAG + 9, TAG_NAME_WITHOUT_END_TAG:htmljson.NODE_TYPE.ELEMENT_END_TAG + 
10, TAG_NAME_WITHOUT_START_TAG:htmljson.NODE_TYPE.ELEMENT_END_TAG + 11, ATTRIBUTES_START:htmljson.NODE_TYPE.ELEMENT_END_TAG + 12, ATTRIBUTE_PROPERTY:htmljson.NODE_TYPE.ELEMENT_END_TAG + 13, ATTRIBUTE_VALUE:htmljson.NODE_TYPE.ELEMENT_END_TAG + 14, STYLES_START:htmljson.NODE_TYPE.ELEMENT_END_TAG + 15, CSS_PROPERTY:htmljson.NODE_TYPE.ELEMENT_END_TAG + 16, CSS_VALUE:htmljson.NODE_TYPE.ELEMENT_END_TAG + 17, IN_INSTRUCTION_ATTRIBUTE:htmljson.NODE_TYPE.ELEMENT_END_TAG + 18, END_OF_NODE:htmljson.NODE_TYPE.ELEMENT_END_TAG + 
19, CLOSE_EMPTY_ELEMENT:htmljson.NODE_TYPE.ELEMENT_END_TAG + 20, END_OF_ATTRIBUTES:htmljson.NODE_TYPE.ELEMENT_END_TAG + 21, END_OF_STYLES:htmljson.NODE_TYPE.ELEMENT_END_TAG + 22, TEXT_DATA:htmljson.NODE_TYPE.ELEMENT_END_TAG + 23, INSTRUCTION_ATTRIBUTE_NAME:htmljson.NODE_TYPE.ELEMENT_END_TAG + 24};
htmljson.EXPECT = {ERROR:htmljson.PHASE.ERROR, NODE_START:htmljson.PHASE.NODE_START, DOCUMENT_NODE_VALUE:htmljson.PHASE.DOCUMENT_NODE_VALUE, TEXT_NODE_VALUE:htmljson.PHASE.TEXT_NODE_VALUE, CDATA_SECTION_VALUE:htmljson.PHASE.CDATA_SECTION_VALUE, COMMENT_NODE_VALUE:htmljson.PHASE.COMMENT_NODE_VALUE, COND_CMT_HIDE_LOWER_FORMURA:htmljson.PHASE.COND_CMT_HIDE_LOWER_FORMURA, COND_CMT_SHOW_LOWER_FORMURA:htmljson.PHASE.COND_CMT_SHOW_LOWER_FORMURA, NN4_COND_CMT_SHOW_LOWER_FORMURA:htmljson.PHASE.NN4_COND_CMT_SHOW_LOWER_FORMURA, 
PROCESSING_INSTRUCTION_NAME:htmljson.PHASE.PROCESSING_INSTRUCTION_NAME, TAG_NAME:htmljson.PHASE.TAG_NAME, TAG_NAME_WITHOUT_END_TAG:htmljson.PHASE.TAG_NAME_WITHOUT_END_TAG, TAG_NAME_WITHOUT_START_TAG:htmljson.PHASE.TAG_NAME_WITHOUT_START_TAG, ATTRIBUTES_START:htmljson.PHASE.ATTRIBUTES_START, ATTRIBUTE_PROPERTY:htmljson.PHASE.ATTRIBUTE_PROPERTY, ATTRIBUTE_VALUE:htmljson.PHASE.ATTRIBUTE_VALUE, STYLES_START:htmljson.PHASE.STYLES_START, CSS_PROPERTY:htmljson.PHASE.CSS_PROPERTY, CSS_VALUE:htmljson.PHASE.CSS_VALUE, 
IN_INSTRUCTION_ATTRIBUTE:htmljson.PHASE.IN_INSTRUCTION_ATTRIBUTE, END_OF_NODE:htmljson.PHASE.END_OF_NODE, NODE_TYPE:htmljson.PHASE.END_OF_NODE + 1, PROCESSING_INSTRUCTION_ARGS:htmljson.PHASE.END_OF_NODE + 2, INSTRUCTION_ATTRIBUTE_START:htmljson.PHASE.END_OF_NODE + 3, CHILD_NODES_START:htmljson.PHASE.END_OF_NODE + 4, IN_CHILD_NODES:htmljson.PHASE.END_OF_NODE + 5, END_OF_DOCUMENT:htmljson.PHASE.END_OF_NODE + 6};
htmlparser.DEFINE = {};
htmlparser.typedef = {};
htmlparser.typedef.Handler = {};
htmlparser.DEFINE.useXML = !0;
htmlparser.DEFINE.useVML = !1;
htmlparser.DEFINE.useLazy = !1;
htmlparser.DEFINE.parsingStop = !0;
htmlparser.DEFINE.useDocTypeNode = !1;
htmlparser.DEFINE.useProcessingInstruction = !1;
htmlparser.DEFINE.useCDATASection = !0;
htmlparser.DEFINE.attributePrefixSymbol = "";
htmlparser._CHAR_KINDS = {IS_UPPERCASE_ALPHABETS:1, IS_LOWERCASE_ALPHABETS:2, IS_WHITESPACE:4};
htmlparser._CHARS = {a:2, b:2, c:2, d:2, e:2, f:2, g:2, h:2, i:2, j:2, k:2, l:2, m:2, n:2, o:2, p:2, q:2, r:2, s:2, t:2, u:2, v:2, w:2, x:2, y:2, z:2, A:1, B:1, C:1, D:1, E:1, F:1, G:1, H:1, I:1, J:1, K:1, L:1, M:1, N:1, O:1, P:1, Q:1, R:1, S:1, T:1, U:1, V:1, W:1, X:1, Y:1, Z:1, "\t":4, "\n":4, "\f":4, "\r":4, " ":4};
htmlparser.isWhitespace = function(a) {
  return htmlparser._CHARS[a] & htmlparser._CHAR_KINDS.IS_WHITESPACE;
};
htmlparser.isAlphabet = function(a) {
  return htmlparser._CHARS[a] & htmlparser._CHAR_KINDS.IS_UPPERCASE_ALPHABETS + htmlparser._CHAR_KINDS.IS_LOWERCASE_ALPHABETS;
};
htmlparser.isXMLRootElement = function(a) {
  return !!htmlparser.XML_ROOT_ELEMENTS[a];
};
htmlparser.isNamespacedTag = function(a) {
  return 0 < a.indexOf(":");
};
var $jscomp$scope$1759477293$1$exec = function(a, b, c, d, e, f) {
  function g() {
    b && (c.onParseText(h(a.substring(0, b))), a = a.substring(b), b = 0);
  }
  function h(z) {
    return z.split("&lt;").join("<").split("&gt;").join(">").split("&amp;lt;").join("&lt;").split("&amp;gt;").join("&gt;");
  }
  function x(z, n, p) {
    for (var k = 0, u = p.length, y = 3, m, B; y < u && 2 !== k;) {
      B = p.charAt(y);
      switch(k) {
        case 0:
          htmlparser.isWhitespace(B) ? k = 1 : ">" === B && (k = 2);
          k && (m = p.substring(2, y));
          break;
        case 1:
          ">" === B && (k = 2);
      }
      ++y;
    }
    return 2 === k ? !htmlparser.VOID_ELEMENTS[m] && q(z, n, D || F ? m : m.toUpperCase(), !1) && htmlparser.DEFINE.parsingStop ? $jscomp$scope$1759477293$0$PARSING_STOP : y : 0;
  }
  function q(z, n, p, k) {
    var u = 0, y = z.length;
    if (p) {
      for (u = y; 0 <= u && z[--u] !== p;) {
      }
    }
    if (0 <= u) {
      for (; u < y;) {
        if (!0 === n.onParseEndTag(z[--y], k && !OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN[z[y]], !1) && htmlparser.DEFINE.parsingStop) {
          return !0;
        }
        htmlparser.DEFINE.useXML && D && htmlparser.isXMLRootElement(z[y]) && (D = !!n.isXHTML);
      }
      z.length = u;
      if (htmlparser.DEFINE.useVML && F) {
        for (F = !1, y = u; y;) {
          if (htmlparser.isNamespacedTag(z[--y])) {
            F = !0;
            break;
          }
        }
      }
    } else {
      if (!0 === n.onParseEndTag(p, !1, !0) && htmlparser.DEFINE.parsingStop) {
        return !0;
      }
    }
  }
  function w(z, n, p, k) {
    function u(O, P) {
      function Q(R) {
        return h(R).split('\\"').join('"').split("\\'").join("'").split("&quot;").join('"').split("&apos;").join("'");
      }
      I[O] = !0 === P ? !0 : htmlparser.BOOLEAN_ATTRIBUTES[O.toLowerCase()] ? D ? Q(P || O) : !0 : Q(P || "");
      ++A;
    }
    function y() {
      (M = "/>" === k.substr(v, 2)) && ++v;
      return M;
    }
    for (var m = 1, B = k.length, v = 2, I = {}, A = 0, M = !1, C, K, J, E, L, N; v < B && 9 > m;) {
      C = k.charAt(v);
      switch(m) {
        case 1:
          if (htmlparser.isWhitespace(C)) {
            m = 2, K = k.substring(1, v);
          } else if (">" === C || y()) {
            m = 9, K = k.substring(1, v);
          }
          break;
        case 2:
          ">" === C || y() ? m = 9 : htmlparser.isWhitespace(C) || (m = 3, J = v);
          break;
        case 3:
          if ("=" === C) {
            m = 5, E = k.substring(J, v);
          } else if (htmlparser.isWhitespace(C)) {
            m = 4, E = k.substring(J, v);
          } else if (">" === C || y()) {
            m = 9, u(k.substring(J, v), !0);
          }
          break;
        case 4:
          "=" === C ? m = 5 : ">" === C || y() ? (m = 9, u(E, !0)) : htmlparser.isWhitespace(C) || (m = 3, u(E, !0), J = v);
          break;
        case 5:
          '"' === C || "'" === C ? (m = 6, L = C, J = v + 1) : htmlparser.isWhitespace(C) || (m = 7, J = v);
          N = !1;
          break;
        case 6:
          N || C !== L || (m = 2, u(E, k.substring(J, v)));
          N = "\\" === C && !N;
          break;
        case 7:
          htmlparser.isWhitespace(C) ? m = 2 : ">" === C && (m = 9), 7 !== m && u(E, k.substring(J, v));
      }
      ++v;
    }
    if (9 === m) {
      m = K.toUpperCase();
      htmlparser.DEFINE.useXML && !D && (D = htmlparser.isXMLRootElement(K));
      htmlparser.DEFINE.useVML && !F && (F = htmlparser.isNamespacedTag(K));
      if (!D && !F) {
        for (; n;) {
          if (OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN[n] && !OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN[n][m]) {
            if (q(z, p, n, !1) && htmlparser.DEFINE.parsingStop) {
              return $jscomp$scope$1759477293$0$PARSING_STOP;
            }
            n = z[z.length - 1];
          } else {
            break;
          }
        }
      }
      (M = M || !!htmlparser.VOID_ELEMENTS[m]) || (z[z.length] = D || F ? K : m);
      return !0 === p.onParseStartTag(D || F ? K : m, A ? I : null, M, v) && htmlparser.DEFINE.parsingStop ? $jscomp$scope$1759477293$0$PARSING_STOP : v;
    }
    return 0;
  }
  var t = d ? +new Date() : 0, H = c.intervalMs || 16;
  f = f || [];
  for (var D = htmlparser.DEFINE.useXML && !!c.isXHTML, F = !1, G = a.length - b, r, l; a;) {
    r = f[f.length - 1];
    if (htmlparser.RAW_TEXT_ELEMENTS[r]) {
      if ("PLAINTEXT" === r || "plaintext" === r) {
        c.onParseText(h(a)), a = "";
      } else {
        if (l = a.indexOf("</" + (D || F ? r : r.toLowerCase())), -1 === l && (l = a.indexOf("</" + (D || F ? r.toUpperCase() : r))), 0 <= l) {
          b = l;
          g();
          r = x(f, c, a);
          if (r === $jscomp$scope$1759477293$0$PARSING_STOP && htmlparser.DEFINE.parsingStop) {
            return;
          }
          if (r) {
            a = a.substring(r);
          } else {
            c.onParseError(a);
            return;
          }
        } else {
          c.onParseError(a);
          return;
        }
      }
    } else if (htmlparser.DEFINE.useDocTypeNode && a.indexOf("<!DOCTYPE ") === b) {
      if (g(), l = a.indexOf(">"), -1 !== l) {
        c.onParseDocType(a.substring(b, l + 1)), a = a.substring(l + 1);
      } else {
        c.onParseError(a);
        return;
      }
    } else if (htmlparser.DEFINE.useProcessingInstruction && a.indexOf("<?") === b) {
      if (g(), l = a.indexOf("?>"), -1 !== l) {
        c.onParseProcessingInstruction(h(a.substring(2, l))), a = a.substring(l + 2);
      } else {
        c.onParseError(a);
        return;
      }
    } else if (htmlparser.DEFINE.useCDATASection && a.indexOf("<![CDATA[") === b) {
      if (g(), l = a.indexOf("]]\x3e"), -1 !== l) {
        c.onParseCDATASection(h(a.substring(9, l))), a = a.substring(l + 3);
      } else {
        c.onParseError(a);
        return;
      }
    } else if (a.indexOf("\x3c!--") === b) {
      if (g(), l = a.indexOf("--\x3e"), -1 !== l) {
        c.onParseComment(h(a.substring(4, l))), a = a.substring(l + 3);
      } else {
        c.onParseError(a);
        return;
      }
    } else if (a.indexOf("</") === b && htmlparser.isAlphabet(a.charAt(b + 2))) {
      g();
      r = x(f, c, a);
      if (htmlparser.DEFINE.parsingStop && r === $jscomp$scope$1759477293$0$PARSING_STOP) {
        return;
      }
      if (r) {
        a = a.substring(r);
      } else {
        c.onParseError(a);
        return;
      }
    } else if ("<" === a.charAt(b) && htmlparser.isAlphabet(a.charAt(b + 1))) {
      g();
      r = w(f, r, c, a);
      if (htmlparser.DEFINE.parsingStop && r === $jscomp$scope$1759477293$0$PARSING_STOP) {
        return;
      }
      if (r) {
        a = a.substring(r);
      } else {
        c.onParseError(a);
        return;
      }
    } else {
      l = a.indexOf("<", b), -1 === l ? (c.onParseText(h(a)), a = "") : b < l ? b = l : ++b;
    }
    r = a.length - b;
    if (r === G) {
      c.onParseError(a);
      return;
    }
    if (htmlparser.DEFINE.useLazy && d && a && t + H <= +new Date()) {
      c.onParseProgress(1 - r / e, $jscomp$scope$1759477293$1$exec, [a, b, c, d, e, f]);
      return;
    }
    G = r;
  }
  g();
  q(f, c, "", !0);
  htmlparser.DEFINE.useLazy && d && c.onComplete();
}, $jscomp$scope$1759477293$0$PARSING_STOP = 1;
htmlparser.exec = function(a, b) {
  $jscomp$scope$1759477293$1$exec(a, 0, b, htmlparser.DEFINE.useLazy && !!b.onComplete, a.length);
};
htmljson.DEFINE = {};
htmljson.DEFINE.DEBUG = !1;
htmljson.DEFINE.USE_XML_NS = !1;
htmljson.DEFINE.USE_XHTML = !1;
htmljson.DEFINE.INSTRUCTION_ATTR_PREFIX = ":";
htmljson.base = {};
var Styles, Attrs, InstructionArgs, HTMLJson, InstructionHandler, EnterNodeHandler, m_OMITTABLE_END_TAGS = {HTML:!0, HEAD:!0, BODY:!0, P:!0, DT:!0, DD:!0, LI:!0, OPTION:!0, TBODY:!0, THEAD:!0, TFOOT:!0, TD:!0, TH:!0, TR:!0, RB:!0, RBC:!0, RP:!0, RT:!0, RTC:!0, OPTGROUP:!0, CAPTION:!0, COLGROUP:!0}, m_CHILD_P_MUST_HAVE_END_TAG = {A:!0, AUDIO:!0, DEL:!0, INS:!0, MAP:!0, NOSCRIPT:!0, VIDEO:!0}, m_TAGNAME_TO_NAMESPACE = {xml:"http://www.w3.org/1999/xhtml", svg:"http://www.w3.org/2000/svg", math:"http://www.w3.org/1998/Math/MathML"}, 
m_P_END_TAG_LESS_TAGS = {H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, ADDRESS:!0, BLOCKQUOTE:!0, DIV:!0, DL:!0, FIELDSET:!0, FORM:!0, HR:!0, LEGEND:!0, MENU:!0, NOSCRIPT:!0, OL:!0, P:!0, PRE:!0, UL:!0, CENTER:!0, DIR:!0, NOFRAMES:!0, MARQUEE:!0}, m_UNESCAPED_ELEMENTS = {SCRIPT:!0, STYLE:!0, TEXTAREA:!0, TITLE:!0, PLAINTEXT:!0, XMP:!0, script:!0, style:!0, textarea:!0, title:!0, plaintext:!0, xmp:!0}, m_TRIM_NEWLINES_ELEMENTS = {SCRIPT:!0, STYLE:!0, TEXTAREA:!0, script:!0, style:!0, textarea:!0}, m_FAMILY_OF_PRE_ELEMENT = 
{PRE:!0, LISTING:!0, pre:!0, listing:!0}, m_pEndTagRequired = !1, m_escapeForHTMLDisabled = !1, m_isXMLDocument = !1;
function m_isArray(a) {
  return !(!a || a.pop !== [].pop);
}
function m_isObject(a) {
  return !(!a || "object" !== typeof a);
}
function m_isBoolean(a) {
  return a === !!a;
}
function m_isString(a) {
  return "" + a === a;
}
function m_isNumber(a) {
  return a === +a;
}
function m_isStringOrNumber(a) {
  return m_isString(a) || m_isNumber(a);
}
function m_isFiniteNumberString(a) {
  return a === "" + +a && a === a && a !== "" + 1 / 0 && a !== "" + -1 / 0;
}
function m_tryToFiniteNumber(a) {
  return m_isFiniteNumberString(a) ? +a : a;
}
function m_isNodeList(a) {
  return m_isArray(a) && m_isArray(a[0]);
}
function m_isStrictNode(a) {
  return m_isArray(a) && (m_isNumber(a[0]) || m_isString(a[0]));
}
function m_isXML(a) {
  return 0 === a.indexOf("<?xml ") || 0 <= a.toUpperCase().indexOf('<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML ');
}
function m_getNodeType(a) {
  return m_isStringOrNumber(a) ? htmljson.NODE_TYPE.TEXT_NODE : m_isArray(a) ? m_isString(a[0]) ? htmljson.NODE_TYPE.ELEMENT_NODE : m_isNumber(a[0]) ? a[0] : -1 : -1;
}
function m_isAttributes(a) {
  return !m_isArray(a) && m_isObject(a);
}
function m_isInstructionAttr(a, b) {
  return 0 === b.indexOf(a);
}
function m_executeProcessingInstruction(a, b, c, d, e) {
  var f = b[1], g = b.slice(2);
  a = "function" === typeof a ? g.length ? a(f, g) : a(f) : g.length ? a[f].apply(null, g) : a[f]();
  void 0 !== a && null !== a && "" !== a && (m_isStringOrNumber(a) ? c ? c.splice(d, 1, a) : (b.length = 0, b.push(htmljson.NODE_TYPE.TEXT_NODE, b)) : m_isArray(a) ? a[0] === htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE ? c ? (a.shift(), a.unshift(d, 1), c.splice.apply(c, a)) : (b.length = 0, b.push.apply(b, a)) : m_isArray(a[0]) ? c ? (a.unshift(d, 1), c.splice.apply(c, a)) : (b.length = 0, b.push(htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE), b.push.apply(b, a)) : c ? c.splice(d, 1, a) : (b.length = 
  0, b.push(htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE, a)) : htmljson.DEFINE.DEBUG && e("PROCESSING_INSTRUCTION Error! [" + JSON.stringify(b) + "]"));
  return a;
}
function m_executeInstructionAttr(a, b, c, d, e) {
  if (m_isArray(d) && m_isString(d[0])) {
    var f = d[0];
    d = d.slice(1);
    f = "function" === typeof b ? d.length ? b(f, d) : b(f) : d.length ? b[f](d) : b[f]();
  } else {
    m_isString(d) ? f = "function" === typeof b ? b(d) : b[d]() : htmljson.DEFINE.DEBUG && e("Invalid InstructionAttr value! [" + c + "=" + d + "]");
  }
  return a && m_isArray(f) ? m_executeInstructionAttr(!0, b, c, f, e) : f;
}
function m_isEnterNodeHandler(a) {
  return m_isArray(a) || "function" === typeof a;
}
function m_executeEnterNodeHandler(a, b, c) {
  a = m_createVNodeFromHTMLJson(a, !0);
  var d;
  VNode.currentRestrictedVNode = a;
  b && (b._childNodes ? b._childNodes.push(a) : b._childNodes = [a]);
  if (m_isArray(c)) {
    var e = a.isElement();
    b = 0;
    for (d = c.length; b < d; b += 2) {
      var f = c[b + 0];
      var g = c[b + 1];
      if (m_isNumber(f)) {
        if (f === a._nodeType && !0 === g(a)) {
          break;
        }
      } else if (e && m_isString(f) && f === a._tagName && !0 === g(a)) {
        break;
      }
    }
  } else {
    c(a);
  }
  return a;
}
function m_escapeForHTML(a) {
  return a.split("&lt;").join("&amp;lt;").split("&gt;").join("&amp;gt;").split("<").join("&lt;").split(">").join("&gt;");
}
function m_quoteAttributeValue(a, b, c) {
  a = m_escapeForHTML("" + a);
  var d = a.match('"'), e = a.match("'"), f = b ? "'" : '"';
  d && e ? a = b ? f + a.split("'").join("\\'") + f : f + a.split('"').join('\\"') + f : d ? a = "'" + a + "'" : e ? a = b ? f + a.split("'").join("\\'") + f : f + a + f : c || a.match(/[^0-9a-z\.\-]/g) || 72 < a.length ? a = f + a + f : "" === a && (a = f + f);
  return a;
}
function m_toSnakeCase(a) {
  var b = [];
  a = a.split("");
  for (var c = a.length, d; c;) {
    d = a[--c], "A" <= d && "Z" >= d && (d = "-" + d.toLowerCase()), b[c] = d;
  }
  return b.join("");
}
function m_getChildNodeStartIndex(a) {
  var b = a[0], c = m_getNodeType(a) === htmljson.NODE_TYPE.ELEMENT_NODE || b === htmljson.NODE_TYPE.ELEMENT_START_TAG, d = m_isNumber(b) ? 2 : 1;
  return c ? m_isAttributes(a[d]) ? d + 1 : d : b === htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE ? 1 : b === htmljson.NODE_TYPE.DOCUMENT_NODE || b === htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER || b === htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER ? 2 : Infinity;
}
function m_normalizeTextNodes(a) {
  var b = m_getChildNodeStartIndex(a), c = "", d;
  if (b < a.length) {
    for (d = b; d < a.length;) {
      b = a[d];
      var e = m_getNodeType(b);
      e === htmljson.NODE_TYPE.TEXT_NODE ? (c = m_isStringOrNumber(b) ? c + b : c + b[1], a.splice(d, 1)) : (c && (a.splice(d, 0, m_tryToFiniteNumber(c)), c = ""), ++d, e !== htmljson.NODE_TYPE.ELEMENT_NODE && e !== htmljson.NODE_TYPE.ELEMENT_START_TAG && e !== htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER && e !== htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER || m_normalizeTextNodes(b));
    }
    c && (a[d] = m_tryToFiniteNumber(c));
  }
}
function m_trimWhiteSpaces(a, b, c, d, e, f) {
  if (!b && d) {
    if (c) {
      a = m_trimChar(a, "\n");
    } else {
      a = a.split("\r\n").join("\n");
      f && (a = a.replace(/([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])\s([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])/g, "$1$2"));
      for (a = a.split("\t").join(" "); 0 <= a.indexOf("\n\n");) {
        a = a.split("\n\n").join("\n");
      }
      if (e) {
        var g = "\n" === a.charAt(0) && /\n[ ]*$/.test(a);
      }
      a = m_trimLastChar(a, "\n");
      for (a = a.split("\n").join(" "); 0 <= a.indexOf("  ");) {
        a = a.split("  ").join(" ");
      }
      g && (a = m_trimChar(a, " "));
      a = a.split("\\u0020").join(" ").split("&#x20;").join(" ").split("&#32;").join(" ");
    }
  }
  return m_tryToFiniteNumber(a);
}
function m_trimChar(a, b) {
  return m_trimLastChar(m_trimFirstChar(a, b), b);
}
function m_trimFirstChar(a, b) {
  for (; a.charAt(0) === b;) {
    a = a.substr(1);
  }
  return a;
}
function m_trimLastChar(a, b) {
  for (; a.charAt(a.length - 1) === b;) {
    a = a.substr(0, a.length - 1);
  }
  return a;
}
function m_parseTagName(a) {
  var b = a.indexOf("#"), c = a.indexOf("."), d = "", e = "";
  b < c ? (d = a.split(".")[1], a = a.split(".")[0], 0 < b && (e = a.split("#")[1], a = a.split("#")[0])) : c < b && (e = a.split("#")[1], a = a.split("#")[0], 0 < c && (d = a.split(".")[1], a = a.split(".")[0]));
  return [a, e, d];
}
function m_createTagName(a, b, c) {
  b && (a += "#" + b);
  c && (a += "." + c);
  return a;
}
function m_toCSSTest(a) {
  var b = [], c = -1, d;
  for (d in a) {
    var e = a[d];
    "0px" === e && (e = 0);
    b[++c] = m_toSnakeCase(d) + ":" + m_escapeForHTML("" + e);
  }
  return b.join(";").substr(1);
}
function m_parseCSSText(a) {
  for (var b = 0, c = a.length, d = {}, e = 0, f, g, h, x; 0 < c;) {
    f = a.charAt(0);
    switch(b) {
      case 0:
        htmlparser.isWhitespace(f) || (g = 0, b = 1);
        break;
      case 1:
        ":" === f && (x = a.substring(g, 0), g = 0, b = 2);
        break;
      case 2:
        htmlparser.isWhitespace(f) || (g = 0, b = 3);
        break;
      case 3:
        h === f ? h = "" : h || ('"' === f || "'" === f ? h = f : ";" === f && (b = x, f = a.substring(g, 0), d[b] = "0px" === f ? 0 : m_tryToFiniteNumber(f), ++e, b = 0));
    }
    if (3 === b) {
      f = x;
      var q = a.substring(g);
      d[f] = "0px" === q ? 0 : m_tryToFiniteNumber(q);
      ++e;
    }
  }
  return e ? d : null;
}
function m_isStaticDocument(a, b) {
  function c(e) {
    var f = e[0], g = e[1], h = f, x = 1;
    switch(f) {
      case htmljson.NODE_TYPE.DOCUMENT_NODE:
      case htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE:
      case htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER:
      case htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER:
        return d(e);
      case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION:
        return !0;
      case htmljson.NODE_TYPE.ELEMENT_NODE:
      case htmljson.NODE_TYPE.ELEMENT_START_TAG:
        h = g, x = 2;
      default:
        if (m_isString(h)) {
          if (m_isAttributes(e[x])) {
            a: {
              f = e[x];
              for (q in f) {
                if (m_isInstructionAttr(b, q)) {
                  var q = !0;
                  break a;
                }
              }
              q = !1;
            }
            if (q) {
              return !0;
            }
          }
          return d(e);
        }
    }
    return !1;
  }
  function d(e) {
    for (var f = m_getChildNodeStartIndex(e), g = e.length, h; f < g; ++f) {
      if (h = e[f], m_isArray(h) && c(h)) {
        return !0;
      }
    }
    return !1;
  }
  return !c(a);
}
function m_createVNodeFromHTMLJson(a, b) {
  function c(e, f) {
    function g(H, D, F) {
      return h ? h.insertNodeLast(H, D, F) : new VNode(b, 0, H, D, F);
    }
    var h = m_isBoolean(f) ? null : f;
    f = e[0];
    var x = e[1], q = 1, w = f;
    switch(f) {
      case htmljson.NODE_TYPE.TEXT_NODE:
      case htmljson.NODE_TYPE.CDATA_SECTION:
      case htmljson.NODE_TYPE.COMMENT_NODE:
      case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START:
      case htmljson.NODE_TYPE.ELEMENT_END_TAG:
        return g(f, x);
      case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_END:
        return g(f);
      case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION:
        var t = [];
        q = 2;
        for (w = e.length; q < w; ++q) {
          t[q - 2] = e[q];
        }
        return g(f, x, w ? t : null);
      case htmljson.NODE_TYPE.DOCUMENT_NODE:
      case htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER:
      case htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER:
        t = g(f, x);
        break;
      case htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE:
        t = g(f);
        break;
      case htmljson.NODE_TYPE.ELEMENT_NODE:
      case htmljson.NODE_TYPE.ELEMENT_START_TAG:
        w = x, q = 2;
      default:
        m_isString(w) && (t = g(1 === q ? htmljson.NODE_TYPE.ELEMENT_NODE : f, w, e[q]));
    }
    b || d(e, t);
    return t;
  }
  function d(e, f) {
    for (var g = m_getChildNodeStartIndex(e), h; g < e.length; ++g) {
      h = e[g], m_isStringOrNumber(h) ? f.insertNodeLast(htmljson.NODE_TYPE.TEXT_NODE, h) : m_isArray(h) && c(h, f);
    }
  }
  return c(a, b);
}
;var VNode = function(a, b, c, d, e) {
  if (m_isBoolean(a)) {
    var f = null;
    this._isRestrictedMode = a;
  } else {
    f = a, this._isRestrictedMode = f._isRestrictedMode;
  }
  if (htmljson.DEFINE.DEBUG && f) {
    switch(f._nodeType) {
      case htmljson.NODE_TYPE.TEXT_NODE:
      case htmljson.NODE_TYPE.COMMENT_NODE:
      case htmljson.NODE_TYPE.CDATA_SECTION:
      case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION:
      case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_END:
      case htmljson.NODE_TYPE.ELEMENT_END_TAG:
        throw "nodeType:" + f._nodeType + " \u306f\u89aa\u306b\u306a\u308b\u3053\u3068\u304c\u51fa\u6765\u307e\u305b\u3093!";
    }
    if (_isDocOrDocFragment(this)) {
      throw "nodeType:" + f._nodeType + " \u306f\u5b50\u306b\u306a\u308b\u3053\u3068\u304c\u51fa\u6765\u307e\u305b\u3093!";
    }
  }
  this._parent = f;
  this._nodeType = c;
  if (f) {
    if (f._childNodes || (f._childNodes = []), a = f._childNodes, 0 <= b && b < a.length) {
      if (htmljson.DEFINE.DEBUG && 1 <= b && a[b - 1]._nodeType === htmljson.NODE_TYPE.ELEMENT_START_TAG) {
        throw "\u9589\u3058\u30bf\u30b0\u306e\u7121\u3044 Element \u306e\u6b21\u306b Node \u3092\u633f\u5165\u3059\u308b\u3053\u3068\u306f\u51fa\u6765\u307e\u305b\u3093!";
      }
      a.splice(b, 0, this);
    } else {
      if (htmljson.DEFINE.DEBUG && a.length && a[a.length - 1]._nodeType === htmljson.NODE_TYPE.ELEMENT_START_TAG) {
        throw "\u9589\u3058\u30bf\u30b0\u306e\u7121\u3044 Element \u306e\u6b21\u306b Node \u3092\u633f\u5165\u3059\u308b\u3053\u3068\u306f\u51fa\u6765\u307e\u305b\u3093!";
      }
      a.push(this);
    }
  }
  switch(c) {
    case htmljson.NODE_TYPE.ELEMENT_NODE:
    case htmljson.NODE_TYPE.ELEMENT_START_TAG:
      this._attrs = e || null, d = m_parseTagName(d), this._id = d[1], this._className = d[2], d = d[0];
    case htmljson.NODE_TYPE.ELEMENT_END_TAG:
      this._tagName = d;
      break;
    case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION:
      this._args = e || null;
    case htmljson.NODE_TYPE.TEXT_NODE:
    case htmljson.NODE_TYPE.CDATA_SECTION:
    case htmljson.NODE_TYPE.COMMENT_NODE:
    case htmljson.NODE_TYPE.DOCUMENT_NODE:
    case htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER:
    case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START:
    case htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER:
      this._nodeValue = d;
  }
};
VNode.currentRestrictedVNode = null;
VNode.treeIsUpdated = !1;
VNode.prototype.getHTMLJson = function() {
  if (htmljson.DEFINE.DEBUG && this._isRestrictedMode) {
    throw "restricted mode \u3067\u306f getHTMLJSON() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  var a = [this._nodeType], b = this._childNodes, c;
  switch(this._nodeType) {
    case htmljson.NODE_TYPE.ELEMENT_NODE:
      a.length = 0;
    case htmljson.NODE_TYPE.ELEMENT_START_TAG:
      a.push(m_createTagName(this._tagName, this._id, this._className));
      var d = this._attrs;
      m_isAttributes(d) && (a.push(d), d.style && m_isObject(d.style) && (d.style = m_toCSSTest(d.style)));
      break;
    case htmljson.NODE_TYPE.ELEMENT_END_TAG:
      a[1] = this._tagName;
      break;
    case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION:
      if (d = this._args) {
        var e = 0;
        for (c = d.length; e < c; ++e) {
          a[2 + e] = d[e];
        }
      }
    case htmljson.NODE_TYPE.TEXT_NODE:
    case htmljson.NODE_TYPE.CDATA_SECTION:
    case htmljson.NODE_TYPE.COMMENT_NODE:
    case htmljson.NODE_TYPE.DOCUMENT_NODE:
    case htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER:
    case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START:
    case htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER:
      a[1] = this._nodeValue;
  }
  if (b) {
    for (e = 0, c = b.length; e < c; ++e) {
      a.push(b[e].getHTMLJson());
    }
  }
  return a;
};
VNode.prototype.getNodeType = function() {
  return this._nodeType;
};
VNode.prototype.setNodeType = function(a) {
  if (htmljson.DEFINE.DEBUG) {
    if (this._isRestrictedMode) {
      throw "restricted mode \u3067\u306f setNodeType() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
    }
    if (a !== htmljson.NODE_TYPE.DOCUMENT_NODE || this._nodeType !== htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE) {
      throw "nodeType \u306e\u5909\u66f4\u306f DOCUMENT_FRAGMENT_NODE -> DOCUMENT_NODE \u3060\u3051\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u307e\u3059!";
    }
  }
  _compareValuesAndSetUpdatedFlag(this._nodeType, a);
  this._nodeType = a;
};
VNode.prototype.getNodeValue = function() {
  switch(this._nodeType) {
    case htmljson.NODE_TYPE.TEXT_NODE:
    case htmljson.NODE_TYPE.CDATA_SECTION:
    case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION:
    case htmljson.NODE_TYPE.COMMENT_NODE:
    case htmljson.NODE_TYPE.DOCUMENT_NODE:
    case htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER:
    case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START:
    case htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER:
      return this._nodeValue;
    default:
      if (htmljson.DEFINE.DEBUG) {
        throw "getNodeValue() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
      }
  }
};
VNode.prototype.setNodeValue = function(a) {
  if (htmljson.DEFINE.DEBUG && this._isRestrictedMode && !_isCurrentVNode(this)) {
    throw "restricted mode \u3067\u306f\u73fe\u5728\u306e\u30ce\u30fc\u30c9\u4ee5\u5916\u3078\u306e setNodeValue() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  switch(this._nodeType) {
    case htmljson.NODE_TYPE.TEXT_NODE:
    case htmljson.NODE_TYPE.CDATA_SECTION:
    case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION:
    case htmljson.NODE_TYPE.COMMENT_NODE:
    case htmljson.NODE_TYPE.DOCUMENT_NODE:
      _compareValuesAndSetUpdatedFlag(this._nodeValue, a);
      this._nodeValue = a;
      break;
    default:
      if (htmljson.DEFINE.DEBUG) {
        throw "setNodeValue() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
      }
  }
};
VNode.prototype.isElement = function() {
  return this._nodeType === htmljson.NODE_TYPE.ELEMENT_NODE || this._nodeType === htmljson.NODE_TYPE.ELEMENT_START_TAG;
};
VNode.prototype.finalize = function() {
  if (htmljson.DEFINE.DEBUG && this._isRestrictedMode) {
    throw "restricted mode \u3067\u306f finalize() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  if (htmljson.DEFINE.DEBUG && this._nodeType !== htmljson.NODE_TYPE.ELEMENT_START_TAG) {
    throw "finalize() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  _compareValuesAndSetUpdatedFlag(this._nodeType, htmljson.NODE_TYPE.ELEMENT_NODE);
  this._nodeType = htmljson.NODE_TYPE.ELEMENT_NODE;
};
VNode.prototype.isClosed = function() {
  return this._nodeType !== htmljson.NODE_TYPE.ELEMENT_START_TAG;
};
VNode.prototype.isValid = function() {
  var a = this._childNodes, b;
  if (a) {
    var c = 0;
    for (b = a.length; c < b; ++c) {
      var d = a[c];
      if (d._nodeType !== htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER && d._nodeType !== htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER && !d.isValid()) {
        return !1;
      }
    }
  }
  return this._nodeType !== htmljson.NODE_TYPE.ELEMENT_START_TAG && this._nodeType !== htmljson.NODE_TYPE.ELEMENT_END_TAG;
};
VNode.prototype.walkNodes = function(a) {
  _walkAllDescendantNodes(this, a);
};
VNode.prototype.walkElements = function(a) {
  _walkAllDescendantNodes(this, function(b) {
    if (b.isElement()) {
      return a(b);
    }
  });
};
VNode.prototype.walkText = function(a) {
  _walkAllDescendantNodes(this, function(b) {
    if (b._nodeType === htmljson.NODE_TYPE.TEXT_NODE) {
      return a(b);
    }
  });
};
VNode.prototype.getElementByID = function(a) {
  var b = null;
  this.walkElements(function(c) {
    if (c.getAttr("id") === a) {
      return b = c, !0;
    }
  });
  return b;
};
VNode.prototype.getElementListByTag = function(a) {
  var b = [], c = -1;
  this.walkElements(function(d) {
    d._tagName === a && (b[++c] = d);
  });
  return b;
};
VNode.prototype.getElementListByClass = function(a) {
  var b = [], c = -1;
  this.walkElements(function(d) {
    d.hasClassName(a) && (b[++c] = d);
  });
  return b;
};
VNode.prototype.getElementListByName = function(a) {
  var b = [], c = -1;
  this.walkElements(function(d) {
    d.getAttr("name") === a && (b[++c] = d);
  });
  return b;
};
VNode.prototype.getTagName = function() {
  if (htmljson.DEFINE.DEBUG && !this.isElement() && this._nodeType !== htmljson.NODE_TYPE.ELEMENT_END_TAG) {
    throw "getTagName() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  return this._tagName;
};
VNode.prototype.setTagName = function(a) {
  if (htmljson.DEFINE.DEBUG && !this.isElement() && this._nodeType !== htmljson.NODE_TYPE.ELEMENT_END_TAG) {
    throw "getTagName() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  _compareValuesAndSetUpdatedFlag(this._tagName, a);
  this._tagName = a;
};
VNode.prototype.getClassName = function() {
  if (htmljson.DEFINE.DEBUG && !this.isElement()) {
    throw "getClassName() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  return this._className;
};
VNode.prototype.hasClassName = function(a) {
  if (htmljson.DEFINE.DEBUG) {
    if (!this.isElement()) {
      throw "hasClassName() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (-1 !== a.indexOf(" ")) {
      throw "hasClassName() \u306f\u534a\u89d2\u6587\u5b57\u3092\u542b\u3080 className \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u307e\u305b\u3093!";
    }
  }
  return 0 <= (" " + this._className + " ").indexOf(" " + a + " ");
};
VNode.prototype.addClassName = function(a) {
  if (htmljson.DEFINE.DEBUG) {
    if (!this.isElement()) {
      throw "addClassName() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (this._isRestrictedMode && !_isCurrentVNode(this)) {
      throw "restricted mode \u3067\u306f\u73fe\u5728\u306e\u30ce\u30fc\u30c9\u4ee5\u5916\u3078\u306e addClassName() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
    }
    if (-1 !== a.indexOf(" ")) {
      throw "addClassName() \u306f\u534a\u89d2\u6587\u5b57\u3092\u542b\u3080 className \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u307e\u305b\u3093!";
    }
  }
  this.hasClassName(a) || (this._className = (this._className ? " " : "") + a, VNode.treeIsUpdated = !0);
};
VNode.prototype.removeClassName = function(a) {
  if (htmljson.DEFINE.DEBUG) {
    if (!this.isElement()) {
      throw "removeClassName() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (this._isRestrictedMode && !_isCurrentVNode(this)) {
      throw "restricted mode \u3067\u306f\u73fe\u5728\u306e\u30ce\u30fc\u30c9\u4ee5\u5916\u3078\u306e removeClassName() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
    }
    if (-1 !== a.indexOf(" ")) {
      throw "removeClassName() \u306f\u534a\u89d2\u6587\u5b57\u3092\u542b\u3080 className \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u307e\u305b\u3093!";
    }
  }
  if (this.hasClassName(a)) {
    var b = this._className.split(" ");
    b.splice(b.indexOf(a), 1);
    this._className = b.join(" ");
    VNode.treeIsUpdated = !0;
  }
};
VNode.prototype.hasAttr = function(a) {
  if (htmljson.DEFINE.DEBUG && !this.isElement()) {
    throw "hasAttr() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  return "class" === a || "className" === a ? !!this._className : "id" === a ? !!this._id : m_isAttributes(this._attrs) ? null != this._attrs[a] : !1;
};
VNode.prototype.getAttr = function(a) {
  if (htmljson.DEFINE.DEBUG && !this.isElement()) {
    throw "getAttr() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  if ("class" === a || "className" === a) {
    return this._className;
  }
  if ("id" === a) {
    return this._id;
  }
  if (m_isAttributes(this._attrs)) {
    return this._attrs[a];
  }
};
VNode.prototype.setAttr = function(a, b) {
  if (htmljson.DEFINE.DEBUG) {
    if (!this.isElement()) {
      throw "setAttr() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (this._isRestrictedMode && !_isCurrentVNode(this)) {
      throw "restricted mode \u3067\u306f\u73fe\u5728\u306e\u30ce\u30fc\u30c9\u4ee5\u5916\u3078\u306e setAttr() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
    }
  }
  "class" === a || "className" === a ? (_compareValuesAndSetUpdatedFlag(this._className, b), this._className = b) : "id" === a ? (_compareValuesAndSetUpdatedFlag(this._id, b), this._id = b) : (m_isAttributes(this._attrs) || (this._attrs = {}), _compareValuesAndSetUpdatedFlag(this._attrs[a], b), this._attrs[a] = b);
};
VNode.prototype.removeAttr = function(a) {
  if (htmljson.DEFINE.DEBUG) {
    if (!this.isElement()) {
      throw "removeAttr() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (this._isRestrictedMode && !_isCurrentVNode(this)) {
      throw "restricted mode \u3067\u306f\u73fe\u5728\u306e\u30ce\u30fc\u30c9\u4ee5\u5916\u3078\u306e removeAttr() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
    }
  }
  "class" === a || "className" === a ? (_compareValuesAndSetUpdatedFlag(this._className, ""), this._className = "") : "id" === a ? (_compareValuesAndSetUpdatedFlag(this._id, ""), this._id = "") : m_isAttributes(this._attrs) && (_compareValuesAndSetUpdatedFlag(this._attrs[a], void 0), delete this._attrs[a]);
};
VNode.prototype.getStyle = function(a) {
  if (htmljson.DEFINE.DEBUG && !this.isElement()) {
    throw "getStyle() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  var b = this.getAttr("style");
  b && m_isString(b) && (b = m_parseCSSText(b), this.setAttr("style", b));
  if (b) {
    return b[a];
  }
};
VNode.prototype.setStyle = function(a, b) {
  if (htmljson.DEFINE.DEBUG) {
    if (!this.isElement()) {
      throw "setStyle() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (this._isRestrictedMode && !_isCurrentVNode(this)) {
      throw "restricted mode \u3067\u306f\u73fe\u5728\u306e\u30ce\u30fc\u30c9\u4ee5\u5916\u3078\u306e setStyle() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
    }
  }
  var c = this.getAttr("style");
  c && m_isString(c) ? (c = m_parseCSSText(c), this.setAttr("style", c)) : c || this.setAttr("style", c = {});
  b = "0px" === b ? 0 : m_tryToFiniteNumber(b);
  _compareValuesAndSetUpdatedFlag(c[a], b);
  c[a] = b;
};
VNode.prototype.removeStyle = function(a) {
  if (htmljson.DEFINE.DEBUG) {
    if (!this.isElement()) {
      throw "getStyle() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (this._isRestrictedMode && !_isCurrentVNode(this)) {
      throw "restricted mode \u3067\u306f\u73fe\u5728\u306e\u30ce\u30fc\u30c9\u4ee5\u5916\u3078\u306e removeStyle() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
    }
  }
  var b = this.getAttr("style");
  b && m_isString(b) && (b = m_parseCSSText(b), this.setAttr("style", b));
  b && (_compareValuesAndSetUpdatedFlag(b[a], void 0), delete b[a]);
};
VNode.prototype.getTextContent = function() {
  if (htmljson.DEFINE.DEBUG) {
    if (!this.isElement() && !_isDocOrDocFragment(this)) {
      throw "getStyle() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (this._isRestrictedMode && !_isCurrentVNode(this)) {
      throw "restricted mode \u3067\u306f\u73fe\u5728\u306e\u30ce\u30fc\u30c9\u4ee5\u5916\u3078\u306e getTextContent() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
    }
  }
  var a = "";
  this.walkText(function(b) {
    a += b.getNodeValue();
  });
  return a;
};
VNode.prototype.setTextContent = function(a) {
  if (htmljson.DEFINE.DEBUG) {
    if (!this.isElement()) {
      throw "getStyle() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (this._isRestrictedMode && !_isCurrentVNode(this)) {
      throw "restricted mode \u3067\u306f\u73fe\u5728\u306e\u30ce\u30fc\u30c9\u4ee5\u5916\u3078\u306e setTextContent() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
    }
  }
  this.empty();
  this.insertNodeFirst(htmljson.NODE_TYPE.TEXT_NODE, a);
};
VNode.prototype.getParent = function() {
  if (htmljson.DEFINE.DEBUG) {
    if (_isDocOrDocFragment(this)) {
      throw "getParent() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (this._isRestrictedMode && !_isCurrentVNode(this)) {
      throw "restricted mode \u3067\u306f\u73fe\u5728\u306e\u30ce\u30fc\u30c9\u4ee5\u5916\u3078\u306e getParent() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
    }
  }
  return this._parent;
};
VNode.prototype.getPrevNode = function() {
  if (htmljson.DEFINE.DEBUG) {
    if (_isDocOrDocFragment(this)) {
      throw "getPrevNode() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (this._isRestrictedMode) {
      throw "restricted mode \u3067\u306f getPrevNode() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
    }
  }
  return this._parent && this._parent.getChildNodeAt(this.getMyIndex() - 1);
};
VNode.prototype.getNextNode = function() {
  if (htmljson.DEFINE.DEBUG) {
    if (this._nodeType === htmljson.NODE_TYPE.ELEMENT_START_TAG || _isDocOrDocFragment(this)) {
      throw "getNextNode() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (this._isRestrictedMode) {
      throw "restricted mode \u3067\u306f getNextNode() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
    }
  }
  return this._parent && this._parent.getChildNodeAt(this.getMyIndex() + 1);
};
VNode.prototype.getMyIndex = function() {
  if (htmljson.DEFINE.DEBUG) {
    if (_isDocOrDocFragment(this)) {
      throw "getMyIndex() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (this._isRestrictedMode) {
      throw "restricted mode \u3067\u306f getMyIndex() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
    }
  }
  return this._parent ? this._parent._childNodes.indexOf(this) : -1;
};
VNode.prototype.getChildNodeCount = function() {
  if (htmljson.DEFINE.DEBUG) {
    if (!_canHasChildren(this)) {
      throw "getChildNodeCount() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (this._isRestrictedMode) {
      throw "restricted mode \u3067\u306f getChildNodeCount() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
    }
  }
  return this._childNodes && this._childNodes.length;
};
VNode.prototype.getFirstChild = function() {
  if (htmljson.DEFINE.DEBUG) {
    if (!_canHasChildren(this)) {
      throw "getFirstChild() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (this._isRestrictedMode) {
      throw "restricted mode \u3067\u306f getFirstChild() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
    }
  }
  return this.getChildNodeAt(0);
};
VNode.prototype.getLastChild = function() {
  if (htmljson.DEFINE.DEBUG) {
    if (!_canHasChildren(this)) {
      throw "getLastChild() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (this._isRestrictedMode) {
      throw "restricted mode \u3067\u306f getLastChild() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
    }
  }
  return this.getChildNodeAt(this.getChildNodeCount() - 1);
};
VNode.prototype.getChildNodeAt = function(a) {
  if (htmljson.DEFINE.DEBUG) {
    if (!_canHasChildren(this)) {
      throw "getChildNodeAt() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (this._isRestrictedMode) {
      throw "restricted mode \u3067\u306f getChildNodeAt() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
    }
  }
  return this._childNodes && this._childNodes[a] || null;
};
VNode.prototype.remove = function() {
  if (htmljson.DEFINE.DEBUG) {
    if (_isDocOrDocFragment(this)) {
      throw "remove() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (this._isRestrictedMode && !_isCurrentVNode(this)) {
      throw "restricted mode \u3067\u306f\u73fe\u5728\u306e\u30ce\u30fc\u30c9\u4ee5\u5916\u3078\u306e discard() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
    }
  }
  if (this._isRestrictedMode) {
    return this._removed = VNode.treeIsUpdated = !0, null;
  }
  var a = this.getMyIndex();
  0 <= a && (this._parent._childNodes.splice(a, 1), this._parent = null, VNode.treeIsUpdated = !0);
};
VNode.prototype.empty = function() {
  if (htmljson.DEFINE.DEBUG) {
    if (!_canHasChildren(this)) {
      throw "empty() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (this._isRestrictedMode && !_isCurrentVNode(this)) {
      throw "restricted mode \u3067\u306f\u73fe\u5728\u306e\u30ce\u30fc\u30c9\u4ee5\u5916\u3078\u306e empty() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
    }
  }
  if (this._isRestrictedMode) {
    this._emptied = VNode.treeIsUpdated = !0, this._nodesInsertedFirst && (this._nodesInsertedFirst.length = 0), this._nodesInsertedLast && (this._nodesInsertedLast.length = 0);
  } else {
    var a = this._childNodes, b;
    if (a) {
      for (b = a.length; b;) {
        a[--b].remove();
      }
    }
  }
};
VNode.prototype.insertBefore = function(a) {
  if (htmljson.DEFINE.DEBUG) {
    if (_isDocOrDocFragment(this)) {
      throw "insertBefore() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (this._isRestrictedMode) {
      throw "restricted mode \u3067\u306f insertBefore() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
    }
  }
  this._parent && _insertAt(this._parent, this.getMyIndex(), arguments);
};
VNode.prototype.insertFirst = function(a) {
  if (htmljson.DEFINE.DEBUG && this._isRestrictedMode) {
    throw "restricted mode \u3067\u306f insertFirst() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  _insertAt(this, 0, arguments);
};
VNode.prototype.insertAt = function(a, b) {
  if (htmljson.DEFINE.DEBUG && this._isRestrictedMode) {
    throw "restricted mode \u3067\u306f insertAt() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  var c = [], d;
  for (d = arguments.length; 1 < d;) {
    c[d - 2] = arguments[--d];
  }
  _insertAt(this, a, c);
};
VNode.prototype.insertLast = function(a) {
  if (htmljson.DEFINE.DEBUG && this._isRestrictedMode) {
    throw "restricted mode \u3067\u306f insertLast() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  _insertAt(this, this.getChildNodeCount(), arguments);
};
VNode.prototype.insertAfter = function(a) {
  if (htmljson.DEFINE.DEBUG) {
    if (_isDocOrDocFragment(this) || this._nodeType === htmljson.NODE_TYPE.ELEMENT_START_TAG) {
      throw "insertAfter() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (this._isRestrictedMode) {
      throw "restricted mode \u3067\u306f insertAfter() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
    }
  }
  this._parent && _insertAt(this._parent, this.getMyIndex() + 1, arguments);
};
function _insertAt(a, b, c) {
  var d = a._childNodes = a._childNodes || [], e = d.length, f = c.length;
  b = b < e ? b : e;
  if (htmljson.DEFINE.DEBUG) {
    for (; f;) {
      if (htmljson.DEFINE.DEBUG && g && c[f - 1]._nodeType === htmljson.NODE_TYPE.ELEMENT_START_TAG) {
        throw "\u9589\u3058\u30bf\u30b0\u306e\u7121\u3044 Element \u306e\u6b21\u306b Node \u3092\u633f\u5165\u3059\u308b\u3053\u3068\u306f\u51fa\u6765\u307e\u305b\u3093!";
      }
      var g = c[--f];
      if (htmljson.DEFINE.DEBUG && g._nodeType === htmljson.NODE_TYPE.DOCUMENT_NODE) {
        throw "Document Node \u3092\u633f\u5165\u3059\u308b\u3053\u3068\u306f\u51fa\u6765\u307e\u305b\u3093!";
      }
    }
    f = c.length;
  }
  f && (VNode.treeIsUpdated = !0);
  for (; f;) {
    g = c[--f], g._nodeType === htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE ? g.getChildNodeCount() && _insertAt(a, b, g._childNodes) : (g.remove(), d.splice(b, 0, g), g._parent = a);
  }
}
VNode.prototype.insertElementBefore = function(a, b, c) {
  if (htmljson.DEFINE.DEBUG) {
    if (_isDocOrDocFragment(this)) {
      throw "insertElementBefore() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (this._isRestrictedMode && !_isCurrentVNode(this)) {
      throw "restricted mode \u3067\u306f\u73fe\u5728\u306e\u30ce\u30fc\u30c9\u4ee5\u5916\u3078\u306e insertElementBefore() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
    }
  }
  return this._isRestrictedMode ? (this._nodesInsertedBefore = this._nodesInsertedBefore || [], this._nodesInsertedBefore.push([htmljson.NODE_TYPE.ELEMENT_NODE, a, b, c]), VNode.treeIsUpdated = !0, null) : this._parent ? this._parent.insertElementAt(this.getMyIndex(), a, b, c) : null;
};
VNode.prototype.insertElementFirst = function(a, b, c) {
  if (htmljson.DEFINE.DEBUG && this._isRestrictedMode && !_isCurrentVNodeAndCanHaveChildren(this)) {
    throw "restricted mode \u3067\u306f\u73fe\u5728\u306e\u30ce\u30fc\u30c9\u4ee5\u5916\u3078\u306e insertElementFirst() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  return this._isRestrictedMode ? (this._nodesInsertedFirst = this._nodesInsertedFirst || [], this._nodesInsertedFirst.unshift([htmljson.NODE_TYPE.ELEMENT_NODE, a, b, c]), VNode.treeIsUpdated = !0, null) : this.insertElementAt(0, a, b, c);
};
VNode.prototype.insertElementAt = function(a, b, c, d) {
  if (htmljson.DEFINE.DEBUG && this._isRestrictedMode) {
    throw "restricted mode \u3067\u306f insertElementAt() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  a = new VNode(this, a, htmljson.NODE_TYPE.ELEMENT_NODE, b, c);
  null != d && a.insertNodeAt(0, htmljson.NODE_TYPE.TEXT_NODE, d);
  VNode.treeIsUpdated = !0;
  return a;
};
VNode.prototype.insertElementLast = function(a, b, c) {
  if (htmljson.DEFINE.DEBUG && this._isRestrictedMode && !_isCurrentVNodeAndCanHaveChildren(this)) {
    throw "restricted mode \u3067\u306f\u73fe\u5728\u306e\u30ce\u30fc\u30c9\u4ee5\u5916\u3078\u306e insertElementLast() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  return this._isRestrictedMode ? (this._nodesInsertedLast = this._nodesInsertedLast || [], this._nodesInsertedLast.push([htmljson.NODE_TYPE.ELEMENT_NODE, a, b, c]), VNode.treeIsUpdated = !0, null) : this.insertElementAt(this.getChildNodeCount(), a, b, c);
};
VNode.prototype.insertElementAfter = function(a, b, c) {
  if (htmljson.DEFINE.DEBUG) {
    if (_isDocOrDocFragment(this) || this._nodeType === htmljson.NODE_TYPE.ELEMENT_START_TAG) {
      throw "insertElementAfter() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (this._isRestrictedMode && !_isCurrentVNode(this)) {
      throw "restricted mode \u3067\u306f\u73fe\u5728\u306e\u30ce\u30fc\u30c9\u4ee5\u5916\u3078\u306e insertElementAfter() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
    }
  }
  return this._isRestrictedMode ? (this._nodesInsertedAfter = this._nodesInsertedAfter || [], this._nodesInsertedAfter.unshift([htmljson.NODE_TYPE.ELEMENT_NODE, a, b, c]), VNode.treeIsUpdated = !0, null) : this._parent ? this._parent.insertElementAt(this.getMyIndex() + 1, a, b, c) : null;
};
VNode.prototype.insertNodeBefore = function(a, b, c) {
  if (htmljson.DEFINE.DEBUG) {
    if (_isDocOrDocFragment(this)) {
      throw "insertNodeBefore() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (this._isRestrictedMode && !_isCurrentVNode(this)) {
      throw "restricted mode \u3067\u306f\u73fe\u5728\u306e\u30ce\u30fc\u30c9\u4ee5\u5916\u3078\u306e insertNodeBefore() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
    }
  }
  return this._isRestrictedMode ? (this._nodesInsertedBefore = this._nodesInsertedBefore || [], this._nodesInsertedBefore.push([a, b, c]), VNode.treeIsUpdated = !0, null) : this._parent ? this._parent.insertNodeAt(this.getMyIndex(), a, b, c) : null;
};
VNode.prototype.insertNodeFirst = function(a, b, c) {
  if (htmljson.DEFINE.DEBUG && this._isRestrictedMode && !_isCurrentVNodeAndCanHaveChildren(this)) {
    throw "restricted mode \u3067\u306f\u73fe\u5728\u306e\u30ce\u30fc\u30c9\u4ee5\u5916\u3078\u306e insertNodeFirst() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  return this._isRestrictedMode ? (this._nodesInsertedFirst = this._nodesInsertedFirst || [], this._nodesInsertedFirst.unshift([a, b, c]), VNode.treeIsUpdated = !0, null) : this.insertNodeAt(0, a, b, c);
};
VNode.prototype.insertNodeAt = function(a, b, c, d) {
  if (htmljson.DEFINE.DEBUG && this._isRestrictedMode) {
    throw "restricted mode \u3067\u306f insertNodeAt() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  VNode.treeIsUpdated = !0;
  return new VNode(this, a, b, c, d);
};
VNode.prototype.insertNodeLast = function(a, b, c) {
  if (htmljson.DEFINE.DEBUG && this._isRestrictedMode && !_isCurrentVNodeAndCanHaveChildren(this)) {
    throw "restricted mode \u3067\u306f\u73fe\u5728\u306e\u30ce\u30fc\u30c9\u4ee5\u5916\u3078\u306e insertNodeLast() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  return this._isRestrictedMode ? (this._nodesInsertedLast = this._nodesInsertedLast || [], this._nodesInsertedLast.push([a, b, c]), VNode.treeIsUpdated = !0, null) : this.insertNodeAt(this.getChildNodeCount(), a, b, c);
};
VNode.prototype.insertNodeAfter = function(a, b, c) {
  if (htmljson.DEFINE.DEBUG) {
    if (_isDocOrDocFragment(this) || a === htmljson.NODE_TYPE.ELEMENT_START_TAG) {
      throw "insertNodeAfter() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (this._isRestrictedMode && !_isCurrentVNode(this)) {
      throw "restricted mode \u3067\u306f\u73fe\u5728\u306e\u30ce\u30fc\u30c9\u4ee5\u5916\u3078\u306e insertNodeAfter() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
    }
  }
  return this._isRestrictedMode ? (this._nodesInsertedAfter = this._nodesInsertedAfter || [], this._nodesInsertedAfter.unshift([a, b, c]), VNode.treeIsUpdated = !0, null) : this._parent ? this._parent.insertNodeAt(this.getMyIndex() + 1, a, b, c) : null;
};
var _RESTRICTED_MODE = {NO_RESTRICTIONS:0, NEW_NODE:1, CURRENT_NODE_EMPTY:2, CURRENT_NODE_HAS_CHILDREN:3, READ_ONLY:4}, _WALK = {NONE:0, BREAK:1, SKIP:2};
function _canHasChildren(a) {
  return a._nodeType === htmljson.NODE_TYPE.ELEMENT_NODE || a._nodeType === htmljson.NODE_TYPE.ELEMENT_START_TAG || a._nodeType === htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER || a._nodeType === htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER || _isDocOrDocFragment(a);
}
function _isDocOrDocFragment(a) {
  return a._nodeType === htmljson.NODE_TYPE.DOCUMENT_NODE || a._nodeType === htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE;
}
function _isCurrentVNode(a) {
  return a === VNode.currentRestrictedVNode && !a._removed;
}
function _isCurrentVNodeAndCanHaveChildren(a) {
  return _isCurrentVNode(a) && _canHasChildren(a);
}
function _compareValuesAndSetUpdatedFlag(a, b) {
  a !== b && (VNode.treeIsUpdated = !0);
}
function _walkAllDescendantNodes(a, b) {
  a = a._childNodes;
  var c = 0, d;
  if (a && (d = a.length)) {
    var e = [-1, a];
    do {
      var f = ++e[c];
      if (f = a[f]) {
        d = b(f);
        if (d === _WALK.BREAK) {
          break;
        }
        d !== _WALK.SKIP && (f = f._childNodes) && (d = f.length) && (c += 2, e[c + 0] = -1, e[c + 1] = a = f);
      } else {
        e.length = c, c -= 2, a = e[c + 1];
      }
    } while (0 <= c);
  }
}
;var json2json = {main:function(a, b, c, d, e, f) {
  function g(p, k, u, y, m, B) {
    var v = p[0], I = p[1], A = 1, M = v;
    switch(v) {
      case htmljson.NODE_TYPE.DOCUMENT_NODE:
        htmljson.DEFINE.USE_XHTML && m_isXML(I) && (l = !0);
      case htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE:
        h(p, y, m, B);
        break;
      case htmljson.NODE_TYPE.TEXT_NODE:
        I = m_trimWhiteSpaces("" + I, m, B, w, t, H);
        if ("" !== I) {
          k[u] = I;
        } else {
          return k.splice(u, 1), -1;
        }
        break;
      case htmljson.NODE_TYPE.CDATA_SECTION:
        if (!D && k) {
          return k.splice(u, 1), -1;
        }
        break;
      case htmljson.NODE_TYPE.COMMENT_NODE:
        if (!F && k) {
          return k.splice(u, 1), -1;
        }
        break;
      case htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER:
        h(p, y, m, B);
        if (!G && k && 2 === p.length) {
          return k.splice(u, 1), -1;
        }
        break;
      case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_END:
        p = k[u - 1];
        if (!G && p && p[0] === htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START && p) {
          return k.splice(u - 1, 2), -2;
        }
        break;
      case htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER:
        h(p, y, m, B);
        if (!G && k && 2 === p.length) {
          return k.splice(u, 1), -1;
        }
        break;
      case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION:
        if (x) {
          if (p = m_executeProcessingInstruction(x, p, k, u, q), void 0 !== p) {
            if (null === p || "" === p) {
              return k ? k.splice(u, 1) : (a.length = 0, a.push(htmljson.NODE_TYPE.COMMENT_NODE, "")), -1;
            }
            if (!m_isStringOrNumber(p) && m_isArray(p)) {
              return -1;
            }
          } else {
            n = !1;
          }
        } else {
          q("onInstruction is void!");
        }
        break;
      case htmljson.NODE_TYPE.ELEMENT_NODE:
      case htmljson.NODE_TYPE.ELEMENT_START_TAG:
        M = I, A = 2;
      default:
        if (m_isString(M)) {
          if (1 + A <= p.length) {
            k = p[A];
            if (m_isAttributes(k)) {
              u = A - 1;
              B = 0;
              var C;
              v = m_parseTagName(p[u]);
              I = v[1];
              var K = v[2];
              v = v[0];
              for (L in k) {
                var J = L;
                var E = k[L];
                if (C = m_isInstructionAttr(r, L)) {
                  var L = L.substr(r.length);
                  "className" === L && (L = "class");
                  x ? E = m_executeInstructionAttr(!1, x, L, E, q) : q("onInstruction is void!");
                  if (void 0 !== E) {
                    if (delete k[J], m_isArray(E)) {
                      m_isString(E[0]) ? (k[J] = E, n = !1, ++B) : htmljson.DEFINE.DEBUG && q("Invalid dynamic attribute callback value! [" + J + "=" + E + "]");
                    } else if ((!htmlparser.BOOLEAN_ATTRIBUTES[L] || !1 !== E) && null !== E) {
                      if (m_isString(E)) {
                        if ("id" === L) {
                          I = E;
                          continue;
                        } else if ("class" === L) {
                          J = E.split(" ");
                          for (E = J.length; E;) {
                            C = J[--E], -1 === (" " + K + " ").indexOf(" " + C + " ") && (K = (K ? " " : "") + C);
                          }
                          continue;
                        }
                      }
                      k[L] = E;
                      ++B;
                    }
                  } else {
                    n = !1, ++B;
                  }
                } else {
                  ++B;
                }
              }
              p[u] = m_createTagName(v, I, K);
              0 === B && p.splice(A, 1);
            }
            if (!l) {
              var N = M;
              N = l ? !0 : htmlparser.isXMLRootElement(N) ? !0 : htmlparser.isNamespacedTag(N);
              N = l = N;
            }
            A = !!m_FAMILY_OF_PRE_ELEMENT[M];
            h(p, y, A || m, !!m_TRIM_NEWLINES_ELEMENTS[M]);
            N && (l = !1);
          }
        } else {
          htmljson.DEFINE.DEBUG && q("Not html.json! [" + p + "]");
        }
    }
    return 0;
  }
  function h(p, k, u, y) {
    var m = m_getChildNodeStartIndex(p);
    for (k.push(p); m < p.length; ++m) {
      var B = p[m];
      if (!m_isStringOrNumber(B)) {
        if (m_isArray(B)) {
          if (B = g(B, p, m, k, u, y)) {
            m += B, z = !0;
          }
        } else {
          htmljson.DEFINE.DEBUG && q("Invalid html.json! [" + B + "]");
        }
      }
    }
    k.pop();
  }
  var x = b || null;
  b = "function" === typeof d ? d : null;
  var q = "function" === typeof e ? e : function(p) {
  };
  e = f || {};
  var w = -1 !== ["normal", !0, "aggressive"].indexOf(e.trimWhitespaces), t = "aggressive" === e.trimWhitespaces, H = !!e.removeNewlineBetweenFullWidthChars, D = !1 !== e.keepCDATASections, F = !1 !== e.keepComments, G = !0 === e.keepEmptyConditionalComment, r = e.instructionAttrPrefix || htmljson.DEFINE.INSTRUCTION_ATTR_PREFIX, l = !1, z = !1, n = !0;
  if (m_isArray(a)) {
    return g(a, null, 0, [], !1, !1), z && m_normalizeTextNodes(a), b && _dispatchDocumentReadyEvent(b, a) && (n = m_isStaticDocument(a, r)), n;
  }
  htmljson.DEFINE.DEBUG && q("Invalid html.json document!");
}};
function _dispatchDocumentReadyEvent(a, b) {
  var c = m_createVNodeFromHTMLJson(b, !1);
  VNode.treeIsUpdated = !1;
  a(c);
  if (a = VNode.treeIsUpdated) {
    VNode.treeIsUpdated = !1, b.length = 0, b.push.apply(b, c.getHTMLJson()), m_normalizeTextNodes(b);
  }
  return a;
}
;json2json.module = {};
module.exports = json2json.main;
json2json.main.DOCUMENT_NODE = htmljson.NODE_TYPE.DOCUMENT_NODE;
json2json.main.DOCUMENT_FRAGMENT_NODE = htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE;
json2json.main.ELEMENT_NODE = htmljson.NODE_TYPE.ELEMENT_NODE;
json2json.main.TEXT_NODE = htmljson.NODE_TYPE.TEXT_NODE;
json2json.main.CDATA_SECTION = htmljson.NODE_TYPE.CDATA_SECTION;
json2json.main.PROCESSING_INSTRUCTION = htmljson.NODE_TYPE.PROCESSING_INSTRUCTION;
json2json.main.COMMENT_NODE = htmljson.NODE_TYPE.COMMENT_NODE;
json2json.main.COND_CMT_HIDE_LOWER = htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER;
json2json.main.COND_CMT_SHOW_LOWER_START = htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START;
json2json.main.COND_CMT_SHOW_LOWER_END = htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_END;
json2json.main.NETSCAPE4_COND_CMT_HIDE_LOWER = htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER;
json2json.main.ELEMENT_START_TAG = htmljson.NODE_TYPE.ELEMENT_START_TAG;
json2json.main.ELEMENT_END_TAG = htmljson.NODE_TYPE.ELEMENT_END_TAG;
var json2html = {main:function(a, b, c, d, e) {
  function f(l, z, n, p, k, u) {
    function y() {
      var K = "";
      G && (K = "</" + (r ? G : G.toLowerCase()) + ">", G = "");
      return K;
    }
    var m = w ? m_executeEnterNodeHandler(l, n, w) : null;
    n = "";
    var B = l[0], v = l[1], I = 1, A = B, M;
    switch(B) {
      case htmljson.NODE_TYPE.DOCUMENT_NODE:
        htmljson.DEFINE.USE_XHTML && m_isXML(v) && (r = !0);
        n = v + h(l, m, !1, u);
        break;
      case htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE:
        n = h(l, m, k, u);
        break;
      case htmljson.NODE_TYPE.TEXT_NODE:
        n = y() + (u ? v : m_escapeForHTML("" + v));
        break;
      case htmljson.NODE_TYPE.CDATA_SECTION:
        htmljson.DEFINE.DEBUG && !m_isString(v) && t("CDATA_SECTION Error! [" + l + "]");
        n = "<![CDATA[" + m_escapeForHTML("" + v) + "]]\x3e";
        break;
      case htmljson.NODE_TYPE.COMMENT_NODE:
        htmljson.DEFINE.DEBUG && !m_isString(v) && t("COMMENT_NODE Error! [" + l + "]");
        n = "\x3c!--" + m_escapeForHTML("" + v) + "--\x3e";
        break;
      case htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER:
        htmljson.DEFINE.DEBUG && !m_isString(v) && t("COND_CMT_HIDE_LOWER Error! [" + l + "]");
        n = y() + "\x3c!--[" + v + "]>" + h(l, m, !0, u) + "<![endif]--\x3e";
        break;
      case htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER:
        htmljson.DEFINE.DEBUG && !m_isString(v) && t("NETSCAPE4_COND_CMT_HIDE_LOWER Error! [" + l + "]");
        n = y() + "\x3c!--{" + v + "};" + h(l, m, !0, u) + "--\x3e";
        break;
      case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START:
        htmljson.DEFINE.DEBUG && !m_isString(v) && t("COND_CMT_SHOW_LOWER_START Error! [" + l + "]");
        n = "\x3c!--[" + v + "]>\x3c!--\x3e";
        break;
      case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_END:
        n = "\x3c!--<![endif]--\x3e";
        break;
      case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION:
        if (q) {
          if (k = m_executeProcessingInstruction(q, l, z, p, t), void 0 !== k && null !== k && "" !== k) {
            if (m_isStringOrNumber(k) || m_isArray(k)) {
              return -1;
            }
            htmljson.DEFINE.DEBUG && t("PROCESSING_INSTRUCTION Error! [" + JSON.stringify(l) + "] result:" + JSON.stringify(k));
          }
        } else {
          t("onInstruction is void!");
        }
        break;
      case htmljson.NODE_TYPE.ELEMENT_END_TAG:
        htmljson.DEFINE.DEBUG && !m_isString(v) && t("ELEMENT_END_TAG Error! [" + l + "]");
        n = "</" + v + ">";
        break;
      case htmljson.NODE_TYPE.ELEMENT_START_TAG:
        var C = !0;
      case htmljson.NODE_TYPE.ELEMENT_NODE:
        A = l[1], I = 2;
      default:
        htmljson.DEFINE.DEBUG && !m_isString(A) && t("Not html.json! [" + l + "]"), A = m_parseTagName(A), z = A[1], p = A[2], A = A[0], I = l[I], "P" !== G || m_P_END_TAG_LESS_TAGS[A] ? G = "" : n = y(), r || (M = r = g(A)), n += "<" + (r ? A : A.toLowerCase()), z && (n += " id=" + m_quoteAttributeValue(z, D, r || H)), p && (n += " class=" + m_quoteAttributeValue(p, D, r || H)), m_isAttributes(I) && (n += x(I)), n = (l = h(l, m, m_CHILD_P_MUST_HAVE_END_TAG[A], u || m_UNESCAPED_ELEMENTS[A])) ? n + 
        (">" + l) : C ? n + ">" : n + (r ? " />" : ">"), C && (G = ""), !l && htmlparser.VOID_ELEMENTS[A] ? G = "" : r && !l || m_OMITTABLE_END_TAGS[A] && (!k || "P" !== A) ? G = A : (n += "</" + (r ? A : A.toLowerCase()) + ">", G = ""), M && (r = !1);
    }
    return n;
  }
  function g(l) {
    return r || htmlparser.isXMLRootElement(l) ? !0 : htmlparser.isNamespacedTag(l);
  }
  function h(l, z, n, p) {
    for (var k = [], u = m_getChildNodeStartIndex(l), y = -1, m; u < l.length; ++u) {
      m = l[u], m_isStringOrNumber(m) ? k[++y] = f([htmljson.NODE_TYPE.TEXT_NODE, m], l, z, u, !1, p) : m_isArray(m) ? (m = f(m, l, z, u, n, p), -1 === m ? --u : k[++y] = m) : htmljson.DEFINE.DEBUG && t("Invalid html.json! [" + m + "]");
    }
    return k.join("");
  }
  function x(l) {
    var z = "", n, p;
    for (n in l) {
      var k = l[n];
      (p = m_isInstructionAttr(F, n)) && (n = n.substr(F.length));
      "className" === n && (n = "class");
      p && (q ? k = m_executeInstructionAttr(!0, q, n, k, t) : t("onInstruction is void!"));
      if (!(null == k || htmlparser.BOOLEAN_ATTRIBUTES[n] && !1 === k || (z += " " + n, htmlparser.BOOLEAN_ATTRIBUTES[n] || !0 === k))) {
        if ("style" === n && m_isObject(k) && (k = m_toCSSTest(k), !k)) {
          continue;
        }
        z += "=" + m_quoteAttributeValue(k, D, r || H);
      }
    }
    return z;
  }
  var q = b || null, w = c || null, t = "function" === typeof d ? d : function(l) {
  };
  b = e || {};
  var H = !0 === b.quotAlways, D = !0 === b.useSingleQuot, F = b.instructionAttrPrefix || htmljson.DEFINE.INSTRUCTION_ATTR_PREFIX, G, r = m_isXMLDocument;
  if (m_isArray(a)) {
    return m_getNodeType(a) === htmljson.NODE_TYPE.PROCESSING_INSTRUCTION && (a = [htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE, a]), f(a, null, null, 0, m_pEndTagRequired || !1, m_escapeForHTMLDisabled || !1);
  }
  htmljson.DEFINE.DEBUG && t("Invalid html.json document!");
}};
json2json.gulp = {};
json2json.main.gulp = function(a, b, c, d, e) {
  const f = require("plugin-error"), g = require("through2"), h = e || {}, x = h.outputStaticPagesAsHTML, q = h.staticPages && "object" === typeof h.staticPages ? h.staticPages : {};
  h.staticPages = q;
  return g.obj(function(w, t, H) {
    if (w.isNull()) {
      return H();
    }
    if (w.isStream()) {
      return this.emit("error", new f("json2json", "Streaming not supported")), H();
    }
    if (".json" === w.extname) {
      try {
        const D = JSON.parse(w.contents.toString(t)), F = json2json.main(D, a, b, c, d, h);
        let G;
        if (x) {
          const r = w.path.split("\\").join("/").split(".");
          r.pop();
          q[r.join(".")] = F;
        }
        if (F && x) {
          G = json2html.main(D, void 0, b, d, h);
          const r = "." + w.stem.split(".").pop();
          w.stem = w.stem.substr(0, w.stem.length - w.extname.length);
          w.extname = r;
        } else {
          G = JSON.stringify(D, null, h.prettify ? "    " : "");
        }
        w.contents = Buffer.from(G);
      } catch (D) {
        this.emit("error", new f("json2json", D));
      }
    }
    H(null, w);
  });
};

