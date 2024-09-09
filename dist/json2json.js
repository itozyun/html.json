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
      }, registerEs6ModuleExports:function(g, h, t) {
        t && (goog.loadedModules_[t] = {exports:h, type:goog.ModuleType.ES6, moduleId:t || ""});
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
  function b(u, w) {
    var r = "", z = goog.getScriptNonce_();
    z && (r = ' nonce="' + z + '"');
    u = w ? '<script type="module" crossorigin' + r + ">" + w + "\x3c/script>" : '<script type="module" crossorigin src="' + u + '"' + r + ">\x3c/script>";
    d.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(u) : u);
  }
  function c(u, w) {
    var r = d.createElement("script");
    r.defer = !0;
    r.async = !1;
    r.type = "module";
    r.setAttribute("crossorigin", !0);
    var z = goog.getScriptNonce_();
    z && (r.nonce = z);
    w ? r.text = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScript(w) : w : r.src = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(u) : u;
    d.head.appendChild(r);
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
      var h = goog.Dependency.registerCallback_(function(u) {
        goog.Dependency.unregisterCallback_(h);
        a.registerEs6ModuleExports(e.path, u, goog.moduleLoaderState_.moduleName);
      });
      f(void 0, 'import * as m from "' + this.path + '"; goog.Dependency.callback_("' + h + '", m)');
      var t = goog.Dependency.registerCallback_(function() {
        goog.Dependency.unregisterCallback_(t);
        a.clearModuleState();
        a.loaded();
      });
      f(void 0, 'goog.Dependency.callback_("' + t + '")');
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
        var u = e.contents_;
        e.contents_ = null;
        goog.globalEval(goog.CLOSURE_EVAL_PREFILTER_.createScript(u));
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
    var u = goog.global.document, w = goog.Dependency.registerCallback_(function() {
      goog.Dependency.unregisterCallback_(w);
      c();
    }), r = goog.getScriptNonce_();
    r = "<script" + (r ? ' nonce="' + r + '"' : "") + ">" + goog.protectScriptTag_('goog.Dependency.callback_("' + w + '");') + "\x3c/script>";
    u.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(r) : r);
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
        var t = h.onreadystatechange;
        h.onreadystatechange = function() {
          "interactive" == h.readyState && (h.onreadystatechange = t, c(), a.resume());
          "function" === typeof t && t.apply(void 0, arguments);
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
;var htmljson = {NODE_TYPE:{ELEMENT_NODE:1, TEXT_NODE:3, CDATA_SECTION:4, PROCESSING_INSTRUCTION:7, COMMENT_NODE:8, DOCUMENT_NODE:9, DOCUMENT_FRAGMENT_NODE:11, COND_CMT_HIDE_LOWER:13, COND_CMT_SHOW_LOWER_START:14, COND_CMT_SHOW_LOWER_END:15, NETSCAPE4_COND_CMT_HIDE_LOWER:16, ELEMENT_START_TAG:17, ELEMENT_END_TAG:18}};
htmljson.PHASE = {ERROR:htmljson.NODE_TYPE.ELEMENT_NODE - 2, NODE_START:htmljson.NODE_TYPE.ELEMENT_NODE - 1, ENTER_ELEMENT_NODE:htmljson.NODE_TYPE.ELEMENT_NODE, ENTER_TEXT_NODE:htmljson.NODE_TYPE.TEXT_NODE, ENTER_CDATA_SECTION:htmljson.NODE_TYPE.CDATA_SECTION, ENTER_PROCESSING_INSTRUCTION:htmljson.NODE_TYPE.PROCESSING_INSTRUCTION, ENTER_COMMENT_NODE:htmljson.NODE_TYPE.COMMENT_NODE, ENTER_DOCUMENT_NODE:htmljson.NODE_TYPE.DOCUMENT_NODE, ENTER_DOCUMENT_FRAGMENT_NODE:htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE, 
ENTER_COND_CMT_HIDE_LOWER:htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER, ENTER_COND_CMT_SHOW_LOWER_START:htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START, ENTER_COND_CMT_SHOW_LOWER_END:htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_END, ENTER_NN4_COND_CMT_HIDE_LOWER:htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER, ENTER_ELEMENT_START_TAG:htmljson.NODE_TYPE.ELEMENT_START_TAG, ENTER_ELEMENT_END_TAG:htmljson.NODE_TYPE.ELEMENT_END_TAG, DOCUMENT_NODE_VALUE:htmljson.NODE_TYPE.ELEMENT_END_TAG + 1, TEXT_NODE_VALUE:htmljson.NODE_TYPE.ELEMENT_END_TAG + 
2, CDATA_SECTION_VALUE:htmljson.NODE_TYPE.ELEMENT_END_TAG + 3, COMMENT_NODE_VALUE:htmljson.NODE_TYPE.ELEMENT_END_TAG + 4, COND_CMT_HIDE_LOWER_FORMURA:htmljson.NODE_TYPE.ELEMENT_END_TAG + 5, COND_CMT_SHOW_LOWER_FORMURA:htmljson.NODE_TYPE.ELEMENT_END_TAG + 6, NN4_COND_CMT_SHOW_LOWER_FORMURA:htmljson.NODE_TYPE.ELEMENT_END_TAG + 7, PROCESSING_INSTRUCTION_NAME:htmljson.NODE_TYPE.ELEMENT_END_TAG + 8, TAG_NAME:htmljson.NODE_TYPE.ELEMENT_END_TAG + 9, TAG_NAME_WITHOUT_END_TAG:htmljson.NODE_TYPE.ELEMENT_END_TAG + 
10, TAG_NAME_WITHOUT_START_TAG:htmljson.NODE_TYPE.ELEMENT_END_TAG + 11, ATTRIBUTES_START:htmljson.NODE_TYPE.ELEMENT_END_TAG + 12, ATTRIBUTE_PROPERTY:htmljson.NODE_TYPE.ELEMENT_END_TAG + 13, ATTRIBUTE_VALUE:htmljson.NODE_TYPE.ELEMENT_END_TAG + 14, STYLES_START:htmljson.NODE_TYPE.ELEMENT_END_TAG + 15, CSS_PROPERTY:htmljson.NODE_TYPE.ELEMENT_END_TAG + 16, CSS_VALUE:htmljson.NODE_TYPE.ELEMENT_END_TAG + 17, IN_INSTRUCTION_ATTRIBUTE:htmljson.NODE_TYPE.ELEMENT_END_TAG + 18, END_OF_NODE:htmljson.NODE_TYPE.ELEMENT_END_TAG + 
19, CLOSE_EMPTY_ELEMENT:htmljson.NODE_TYPE.ELEMENT_END_TAG + 20, END_OF_ATTRIBUTES:htmljson.NODE_TYPE.ELEMENT_END_TAG + 21, END_OF_STYLES:htmljson.NODE_TYPE.ELEMENT_END_TAG + 22, TEXT_DATA:htmljson.NODE_TYPE.ELEMENT_END_TAG + 23, INSTRUCTION_ATTRIBUTE_NAME:htmljson.NODE_TYPE.ELEMENT_END_TAG + 24};
htmljson.EXPECT = {ERROR:htmljson.PHASE.ERROR, NODE_START:htmljson.PHASE.NODE_START, DOCUMENT_NODE_VALUE:htmljson.PHASE.DOCUMENT_NODE_VALUE, TEXT_NODE_VALUE:htmljson.PHASE.TEXT_NODE_VALUE, CDATA_SECTION_VALUE:htmljson.PHASE.CDATA_SECTION_VALUE, COMMENT_NODE_VALUE:htmljson.PHASE.COMMENT_NODE_VALUE, COND_CMT_HIDE_LOWER_FORMURA:htmljson.PHASE.COND_CMT_HIDE_LOWER_FORMURA, COND_CMT_SHOW_LOWER_FORMURA:htmljson.PHASE.COND_CMT_SHOW_LOWER_FORMURA, NN4_COND_CMT_SHOW_LOWER_FORMURA:htmljson.PHASE.NN4_COND_CMT_SHOW_LOWER_FORMURA, 
PROCESSING_INSTRUCTION_NAME:htmljson.PHASE.PROCESSING_INSTRUCTION_NAME, TAG_NAME:htmljson.PHASE.TAG_NAME, TAG_NAME_WITHOUT_END_TAG:htmljson.PHASE.TAG_NAME_WITHOUT_END_TAG, TAG_NAME_WITHOUT_START_TAG:htmljson.PHASE.TAG_NAME_WITHOUT_START_TAG, ATTRIBUTES_START:htmljson.PHASE.ATTRIBUTES_START, ATTRIBUTE_PROPERTY:htmljson.PHASE.ATTRIBUTE_PROPERTY, ATTRIBUTE_VALUE:htmljson.PHASE.ATTRIBUTE_VALUE, STYLES_START:htmljson.PHASE.STYLES_START, CSS_PROPERTY:htmljson.PHASE.CSS_PROPERTY, CSS_VALUE:htmljson.PHASE.CSS_VALUE, 
IN_INSTRUCTION_ATTRIBUTE:htmljson.PHASE.IN_INSTRUCTION_ATTRIBUTE, END_OF_NODE:htmljson.PHASE.END_OF_NODE, NODE_TYPE:htmljson.PHASE.END_OF_NODE + 1, PROCESSING_INSTRUCTION_ARGS:htmljson.PHASE.END_OF_NODE + 2, INSTRUCTION_ATTRIBUTE_START:htmljson.PHASE.END_OF_NODE + 3, CHILD_NODES_START:htmljson.PHASE.END_OF_NODE + 4, IN_CHILD_NODES:htmljson.PHASE.END_OF_NODE + 5, END_OF_DOCUMENT:htmljson.PHASE.END_OF_NODE + 6};
htmljson.DEFINE = {};
htmljson.DEFINE.DEBUG = !0;
htmljson.DEFINE.USE_XML_NS = !1;
htmljson.DEFINE.USE_XHTML = !1;
htmljson.DEFINE.INSTRUCTION_ATTR_PREFIX = ":";
htmljson.base = {};
var m_ATTRS_NO_VALUE = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, m_NO_CHILD_ELEMENTS = {link:!0, meta:!0, br:!0, hr:!0, img:!0, input:!0, area:!0, base:!0, col:!0, embed:!0, keygen:!0, param:!0, track:!0, wbr:!0, command:!0, basefont:!0, frame:!0, isindex:!0, bgsound:!0}, m_OMITTABLE_END_TAGS = {html:!0, head:!0, body:!0, p:!0, dt:!0, dd:!0, li:!0, option:!0, tbody:!0, thead:!0, tfoot:!0, 
td:!0, th:!0, tr:!0, rb:!0, rbc:!0, rp:!0, rt:!0, rtc:!0, optgroup:!0, caption:!0, colgroup:!0}, m_DESCENDANTS_MUST_HAVE_END_TAGS = {a:!0, audio:!0, del:!0, ins:!0, map:!0, noscript:!0, video:!0}, m_TAGNAME_TO_NAMESPACE = {xml:"http://www.w3.org/1999/xhtml", svg:"http://www.w3.org/2000/svg", math:"http://www.w3.org/1998/Math/MathML"}, m_P_END_TAG_LESS_TAGS = {address:!0, article:!0, aside:!0, blockquote:!0, canvas:!0, details:!0, div:!0, dl:!0, fieldset:!0, figcaption:!0, figure:!0, footer:!0, form:!0, 
h1:!0, h2:!0, h3:!0, h4:!0, h5:!0, h6:!0, header:!0, hgroup:!0, hr:!0, legend:!0, main:!0, menu:!0, nav:!0, noscript:!0, ol:!0, p:!0, pre:!0, section:!0, ul:!0, center:!0, dir:!0, noframes:!0, marquee:!0}, m_UNESCAPED_TAGS = {script:!0, style:!0, plaintext:!0, xmp:!0}, m_endTagRequired = !1, m_escapeForHTMLDisabled = !1, m_isXMLDocument = !1;
function m_isArray(a) {
  return !(!a || a.pop !== [].pop);
}
function m_isObject(a) {
  return !(!a || "object" !== typeof a);
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
function m_isNumberString(a) {
  return a === "" + +a && m_isNumber(parseInt(a, 10));
}
function m_tryToNumber(a) {
  return m_isNumberString(a) ? +a : a;
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
function m_isNamespacedTag(a) {
  return htmljson.DEFINE.USE_XML_NS ? 0 < a.indexOf(":") : !1;
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
  a = g.length ? a(f, g) : a(f);
  void 0 !== a && null !== a && "" !== a && (m_isStringOrNumber(a) ? c ? c.splice(d, 1, a) : (b.length = 0, b.push(htmljson.NODE_TYPE.TEXT_NODE, b)) : m_isArray(a) ? a[0] === htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE ? c ? (a.shift(), a.unshift(d, 1), c.splice.apply(c, a)) : (b.length = 0, b.push.apply(b, a)) : m_isArray(a[0]) ? c ? (a.unshift(d, 1), c.splice.apply(c, a)) : (b.length = 0, b.push(htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE), b.push.apply(b, a)) : c ? c.splice(d, 1, a) : (b.length = 
  0, b.push(htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE, a)) : htmljson.DEFINE.DEBUG && e("PROCESSING_INSTRUCTION Error! [" + JSON.stringify(b) + "]"));
  return a;
}
function m_executeInstructionAttr(a, b, c, d, e) {
  if (m_isArray(d) && m_isString(d[0])) {
    var f = d[0];
    d = d.slice(1);
    f = d.length ? b(f, d) : b(f);
  } else {
    m_isString(d) ? f = b(d) : htmljson.DEFINE.DEBUG && e("Invalid InstructionAttr value! [" + c + "=" + d + "]");
  }
  return a && m_isArray(f) ? m_executeInstructionAttr(!0, b, c, f, e) : f;
}
function m_escapeForHTML(a) {
  return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
function m_quoteAttributeValue(a, b, c) {
  a = m_escapeForHTML("" + a);
  if (a.match('"')) {
    a = a.match("'") ? b ? "'" + a.split("&apos;").join("'").split("'").join("&apos;") + "'" : '"' + a.split("&quot;").join('"').split('"').join("&quot;") + '"' : "'" + a + "'";
  } else if (c || a.match(/[^0-9a-z\.\-]/g) || 72 < a.length) {
    a = (b ? "'" : '"') + m_escapeForHTML(a) + (b ? "'" : '"');
  }
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
      e === htmljson.NODE_TYPE.TEXT_NODE ? (c = m_isStringOrNumber(b) ? c + b : c + b[1], a.splice(d, 1)) : (c && (a.splice(d, 0, m_tryToNumber(c)), c = ""), ++d, e !== htmljson.NODE_TYPE.ELEMENT_NODE && e !== htmljson.NODE_TYPE.ELEMENT_START_TAG || m_normalizeTextNodes(b));
    }
    c && (a[d] = m_tryToNumber(c));
  }
}
function m_parseTagName(a) {
  var b = a.indexOf("#"), c = a.indexOf(".");
  if (b < c) {
    var d = a.split(".")[1];
    a = a.split(".")[0];
    if (0 < b) {
      var e = a.split("#")[1];
      a = a.split("#")[0];
    }
  } else {
    c < b && (e = a.split("#")[1], a = a.split("#")[0], 0 < c && (d = a.split(".")[1], a = a.split(".")[0]));
  }
  return [a, e, d];
}
;var json2json = function(a, b, c, d, e) {
  function f(p, l, n, m) {
    var v = p[0], k = p[1], B = 1, x = v;
    switch(v) {
      case htmljson.NODE_TYPE.DOCUMENT_NODE:
        g(p, m);
        break;
      case htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE:
        g(p, m);
        break;
      case htmljson.NODE_TYPE.TEXT_NODE:
        break;
      case htmljson.NODE_TYPE.CDATA_SECTION:
        if (!u && l) {
          return l.splice(n, 1), -1;
        }
        break;
      case htmljson.NODE_TYPE.COMMENT_NODE:
        if (!w && l) {
          return l.splice(n, 1), -1;
        }
        break;
      case htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER:
        g(p, m);
        break;
      case htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER:
        g(p, m);
        break;
      case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION:
        p = m_executeProcessingInstruction(h, p, l, n, t);
        if (void 0 !== p) {
          z = !0;
          if (null === p || "" === p) {
            return l ? l.splice(n, 1) : (a.length = 0, a.push(htmljson.NODE_TYPE.COMMENT_NODE, "")), -1;
          }
          if (!m_isStringOrNumber(p) && m_isArray(p)) {
            return -1;
          }
        } else {
          q = !1;
        }
        break;
      case htmljson.NODE_TYPE.ELEMENT_NODE:
      case htmljson.NODE_TYPE.ELEMENT_START_TAG:
        x = k, B = 2;
      default:
        if (m_isString(x)) {
          if (1 + B <= p.length) {
            l = p[B];
            if (m_isAttributes(l)) {
              n = 0;
              for (var A in l) {
                v = A, k = l[A], (x = m_isInstructionAttr(r, A)) ? (A = A.substr(r.length), "className" === A && (A = "class"), k = m_executeInstructionAttr(!1, h, A, k, t), void 0 !== k ? (delete l[v], m_isArray(k) ? m_isString(k[0]) ? (l[v] = k, q = !1, ++n) : htmljson.DEFINE.DEBUG && t("Invalid dynamic attribute callback value! [" + v + "=" + k + "]") : m_ATTRS_NO_VALUE[A] && !1 === k || null === k || (l[A] = k, ++n)) : (q = !1, ++n)) : ++n;
              }
              0 === n && p.splice(B, 1);
            }
            g(p, m);
          }
        } else {
          htmljson.DEFINE.DEBUG && t("Not html.json! [" + p + "]");
        }
    }
    return 0;
  }
  function g(p, l) {
    var n = m_getChildNodeStartIndex(p);
    for (l.push(p); n < p.length; ++n) {
      var m = p[n];
      m_isStringOrNumber(m) || (m_isArray(m) ? (m = f(m, p, n, l)) && (n += m) : htmljson.DEFINE.DEBUG && t("Invalid html.json! [" + m + "]"));
    }
    l.pop();
  }
  var h = "function" === typeof b ? b : function(p, l) {
  }, t = "function" === typeof d ? d : function(p) {
  };
  b = m_isObject(b) ? b : m_isObject(c) ? c : m_isObject(d) ? d : e || {};
  var u = !1 !== b.keepCDATASections, w = !1 !== b.keepComments, r = b.instructionAttrPrefix || htmljson.DEFINE.INSTRUCTION_ATTR_PREFIX, z = !1, q = !0;
  if (m_isArray(a)) {
    return f(a, null, 0, []), z && m_normalizeTextNodes(a), q;
  }
  htmljson.DEFINE.DEBUG && t("Invalid html.json document!");
};
json2json.module = {};
module.exports = json2json;
json2json.DOCUMENT_NODE = htmljson.NODE_TYPE.DOCUMENT_NODE;
json2json.DOCUMENT_FRAGMENT_NODE = htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE;
json2json.ELEMENT_NODE = htmljson.NODE_TYPE.ELEMENT_NODE;
json2json.TEXT_NODE = htmljson.NODE_TYPE.TEXT_NODE;
json2json.CDATA_SECTION = htmljson.NODE_TYPE.CDATA_SECTION;
json2json.PROCESSING_INSTRUCTION = htmljson.NODE_TYPE.PROCESSING_INSTRUCTION;
json2json.COMMENT_NODE = htmljson.NODE_TYPE.COMMENT_NODE;
json2json.COND_CMT_HIDE_LOWER = htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER;
json2json.COND_CMT_SHOW_LOWER_START = htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START;
json2json.COND_CMT_SHOW_LOWER_END = htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_END;
json2json.NETSCAPE4_COND_CMT_HIDE_LOWER = htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER;
json2json.ELEMENT_START_TAG = htmljson.NODE_TYPE.ELEMENT_START_TAG;
json2json.ELEMENT_END_TAG = htmljson.NODE_TYPE.ELEMENT_END_TAG;
var json2html = function(a, b, c, d) {
  function e(q, p, l, n, m) {
    function v() {
      r && (k += "</" + r + ">", r = "");
    }
    var k = "", B = q[0], x = q[1], A = 1, y = B;
    switch(B) {
      case htmljson.NODE_TYPE.DOCUMENT_NODE:
        htmljson.DEFINE.USE_XHTML && m_isXML(x) && (z = !0);
        k = "<!DOCTYPE " + x + ">" + f(q, n, m);
        break;
      case htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE:
        k = f(q, n, m);
        break;
      case htmljson.NODE_TYPE.TEXT_NODE:
        v();
        k += m ? x : m_escapeForHTML("" + x);
        break;
      case htmljson.NODE_TYPE.CDATA_SECTION:
        m_isString(x) ? k = "<![CDATA[" + x + "]]\x3e" : htmljson.DEFINE.DEBUG && h("CDATA_SECTION Error! [" + q + "]");
        break;
      case htmljson.NODE_TYPE.COMMENT_NODE:
        m_isString(x) ? k = "\x3c!--" + x + "--\x3e" : htmljson.DEFINE.DEBUG && h("COMMENT_NODE Error! [" + q + "]");
        break;
      case htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER:
        v();
        m_isString(x) ? k = "\x3c!--[" + x + "]>" : htmljson.DEFINE.DEBUG && h("COND_CMT_HIDE_LOWER Error! [" + q + "]");
        k += f(q, !0, m) + "<![endif]--\x3e";
        break;
      case htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER:
        v();
        m_isString(x) ? k = "\x3c!--{" + x + "};" : htmljson.DEFINE.DEBUG && h("NETSCAPE4_COND_CMT_HIDE_LOWER Error! [" + q + "]");
        k += f(q, !0, m) + "--\x3e";
        break;
      case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START:
        m_isString(x) ? k = "\x3c!--[" + x + "]>\x3c!--\x3e" : htmljson.DEFINE.DEBUG && h("COND_CMT_SHOW_LOWER_START Error! [" + q + "]");
        k += f(q, n, m) + "\x3c!--<![endif]--\x3e";
        break;
      case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_END:
        k = "\x3c!--<![endif]--\x3e";
        break;
      case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION:
        n = m_executeProcessingInstruction(b, q, p, l, h);
        if (void 0 !== n && null !== n && "" !== n && (m_isStringOrNumber(n) || m_isArray(n))) {
          return -1;
        }
        break;
      case htmljson.NODE_TYPE.ELEMENT_END_TAG:
        m_isString(x) ? k = "</" + x + ">" : htmljson.DEFINE.DEBUG && h("ELEMENT_END_TAG Error! [" + q + "]");
        break;
      case htmljson.NODE_TYPE.ELEMENT_START_TAG:
        var D = !0;
      case htmljson.NODE_TYPE.ELEMENT_NODE:
        y = q[1], A = 2;
      default:
        if (m_isString(y)) {
          y = m_parseTagName(y);
          p = y[1];
          l = y[2];
          y = y[0];
          "p" !== r || m_P_END_TAG_LESS_TAGS[y] || (k = "</p>");
          r = "";
          k += "<" + y;
          p && (k += " id=" + m_quoteAttributeValue(p, u, t));
          l && (k += " class=" + m_quoteAttributeValue(l, u, t));
          if (!z) {
            var C = z ? !0 : m_TAGNAME_TO_NAMESPACE[y] ? !0 : m_isNamespacedTag(y);
            C = z = C;
          }
          A = q[A];
          m_isAttributes(A) && (k += " " + g(A));
          k = (q = f(q, n || m_DESCENDANTS_MUST_HAVE_END_TAGS[y], m || m_UNESCAPED_TAGS[y])) ? k + (">" + q) : D ? k + ">" : k + (z ? "/>" : ">");
          D ? r = "" : z && !q || m_OMITTABLE_END_TAGS[y] && !n ? r = m_NO_CHILD_ELEMENTS[y] ? "" : y : (k += "</" + y + ">", r = "");
          C && (z = !1);
        } else {
          htmljson.DEFINE.DEBUG && h("Not html.json! [" + q + "]");
        }
    }
    return k;
  }
  function f(q, p, l) {
    for (var n = "", m = m_getChildNodeStartIndex(q), v; m < q.length; ++m) {
      v = q[m], m_isStringOrNumber(v) ? n += e([htmljson.NODE_TYPE.TEXT_NODE, v], null, 0, p, l) : m_isArray(v) ? (v = e(v, q, m, p, l), -1 === v ? --m : n += v) : htmljson.DEFINE.DEBUG && h("Invalid html.json! [" + v + "]");
    }
    return n;
  }
  function g(q) {
    var p = "", l, n;
    for (l in q) {
      var m = q[l];
      (n = m_isInstructionAttr(w, l)) && (l = l.substr(w.length));
      "className" === l && (l = "class");
      n && (m = m_executeInstructionAttr(!0, b, l, m, h));
      if (!(null == m || m_ATTRS_NO_VALUE[l] && !1 === m || (p += " " + l, m_ATTRS_NO_VALUE[l]))) {
        if ("style" === l && m_isObject(m)) {
          n = void 0;
          var v = m, k = "";
          for (n in v) {
            m = v[n], "0px" === m && (m = 0), k += ";" + m_toSnakeCase(n) + ":" + m_escapeForHTML("" + m);
          }
          m = k.substr(1);
          if (!m) {
            continue;
          }
        }
        p += "=" + m_quoteAttributeValue(m, u, t);
      }
    }
    return p.substr(1);
  }
  var h = "function" === typeof c ? c : function(q) {
  };
  c = c && "object" === typeof c ? c : d || {};
  var t = !!c.quotAlways, u = !!c.useSingleQuot, w = c.instructionAttrPrefix || htmljson.DEFINE.INSTRUCTION_ATTR_PREFIX, r, z = m_isXMLDocument;
  if (m_isArray(a)) {
    return m_getNodeType(a) === htmljson.NODE_TYPE.PROCESSING_INSTRUCTION && (a = [htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE, a]), e(a, null, 0, m_endTagRequired || !1, m_escapeForHTMLDisabled || !1);
  }
  htmljson.DEFINE.DEBUG && h("Invalid html.json document!");
};
json2json.gulp = function(a, b, c) {
  const d = require("plugin-error"), e = require("through2"), f = b && "object" === typeof b ? b : c && "object" === typeof c ? c : {};
  return e(function(g, h, t) {
    if (g.isNull()) {
      return t();
    }
    if (g.isStream()) {
      return this.emit("error", new d("json2json", "Streaming not supported")), t();
    }
    if (".json" === g.extname) {
      try {
        const u = JSON.parse(g.contents.toString(h));
        let w;
        json2json(u, a, b, c) && f.outputStaticPagesAsHTML ? (w = json2html(u, a, b, c), g.extname = "." + g.stem.split(".").pop(), g.stem = g.stem.substr(0, g.stem.length - g.extname.length)) : w = JSON.stringify(u, null, f.prettify ? "    " : "");
        g.contents = Buffer.from(w);
        this.push(g);
      } catch (u) {
        this.emit("error", new d("json2json", u));
      }
    } else {
      this.push(g);
    }
    t();
  });
};

