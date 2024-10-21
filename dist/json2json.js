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
      }, registerEs6ModuleExports:function(g, h, r) {
        r && (goog.loadedModules_[r] = {exports:h, type:goog.ModuleType.ES6, moduleId:r || ""});
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
  function b(t, w) {
    var u = "", G = goog.getScriptNonce_();
    G && (u = ' nonce="' + G + '"');
    t = w ? '<script type="module" crossorigin' + u + ">" + w + "\x3c/script>" : '<script type="module" crossorigin src="' + t + '"' + u + ">\x3c/script>";
    d.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(t) : t);
  }
  function c(t, w) {
    var u = d.createElement("script");
    u.defer = !0;
    u.async = !1;
    u.type = "module";
    u.setAttribute("crossorigin", !0);
    var G = goog.getScriptNonce_();
    G && (u.nonce = G);
    w ? u.text = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScript(w) : w : u.src = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(t) : t;
    d.head.appendChild(u);
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
      var h = goog.Dependency.registerCallback_(function(t) {
        goog.Dependency.unregisterCallback_(h);
        a.registerEs6ModuleExports(e.path, t, goog.moduleLoaderState_.moduleName);
      });
      f(void 0, 'import * as m from "' + this.path + '"; goog.Dependency.callback_("' + h + '", m)');
      var r = goog.Dependency.registerCallback_(function() {
        goog.Dependency.unregisterCallback_(r);
        a.clearModuleState();
        a.loaded();
      });
      f(void 0, 'goog.Dependency.callback_("' + r + '")');
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
        var t = e.contents_;
        e.contents_ = null;
        goog.globalEval(goog.CLOSURE_EVAL_PREFILTER_.createScript(t));
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
    var t = goog.global.document, w = goog.Dependency.registerCallback_(function() {
      goog.Dependency.unregisterCallback_(w);
      c();
    }), u = goog.getScriptNonce_();
    u = "<script" + (u ? ' nonce="' + u + '"' : "") + ">" + goog.protectScriptTag_('goog.Dependency.callback_("' + w + '");') + "\x3c/script>";
    t.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(u) : u);
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
        var r = h.onreadystatechange;
        h.onreadystatechange = function() {
          "interactive" == h.readyState && (h.onreadystatechange = r, c(), a.resume());
          "function" === typeof r && r.apply(void 0, arguments);
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
PROGRESS:!0, METER:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, HTML:{HEAD:!0, BODY:!0}, HEAD:{TITLE:!0, BASE:!0, BGSOUND:!0, LINK:!0, META:!0, STYLE:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0}, COLGROUP:{COL:!0}, OPTGROUP:{OPTION:!0}, OPTION:{}, TBODY:{TR:!0}, TR:{TH:!0, TD:!0}, RBC:{RB:!0, RP:!0, RT:!0}};
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
  function h(n) {
    return n.split("&lt;").join("<").split("&gt;").join(">").split("&amp;lt;").join("&lt;").split("&amp;gt;").join("&gt;");
  }
  function r(n, l, A) {
    for (var p = 0, x = A.length, v = 3, m, H; v < x && 2 !== p;) {
      H = A.charAt(v);
      switch(p) {
        case 0:
          htmlparser.isWhitespace(H) ? p = 1 : ">" === H && (p = 2);
          p && (m = A.substring(2, v));
          break;
        case 1:
          ">" === H && (p = 2);
      }
      ++v;
    }
    return 2 === p ? !htmlparser.VOID_ELEMENTS[m] && t(n, l, C || E ? m : m.toUpperCase(), !1) && htmlparser.DEFINE.parsingStop ? $jscomp$scope$1759477293$0$PARSING_STOP : v : 0;
  }
  function t(n, l, A, p) {
    var x = 0, v = n.length;
    if (A) {
      for (x = v; 0 <= x && n[--x] !== A;) {
      }
    }
    if (0 <= x) {
      for (; x < v;) {
        if (!0 === l.onParseEndTag(n[--v], p && !OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN[n[v]], !1) && htmlparser.DEFINE.parsingStop) {
          return !0;
        }
        htmlparser.DEFINE.useXML && C && htmlparser.isXMLRootElement(n[v]) && (C = !!l.isXHTML);
      }
      n.length = x;
      if (htmlparser.DEFINE.useVML && E) {
        for (E = !1, v = x; v;) {
          if (htmlparser.isNamespacedTag(n[--v])) {
            E = !0;
            break;
          }
        }
      }
    } else {
      if (!0 === l.onParseEndTag(A, !1, !0) && htmlparser.DEFINE.parsingStop) {
        return !0;
      }
    }
  }
  function w(n, l, A, p) {
    function x(N, O) {
      function P(R) {
        return h(R).split('\\"').join('"').split("\\'").join("'").split("&quot;").join('"').split("&apos;").join("'");
      }
      I[N] = !0 === O ? !0 : htmlparser.BOOLEAN_ATTRIBUTES[N.toLowerCase()] ? C ? P(O || N) : !0 : P(O || "");
      ++B;
    }
    function v() {
      (D = "/>" === p.substr(y, 2)) && ++y;
      return D;
    }
    for (var m = 1, H = p.length, y = 2, I = {}, B = 0, D = !1, z, J, K, L, Q, M; y < H && 9 > m;) {
      z = p.charAt(y);
      switch(m) {
        case 1:
          if (htmlparser.isWhitespace(z)) {
            m = 2, J = p.substring(1, y);
          } else if (">" === z || v()) {
            m = 9, J = p.substring(1, y);
          }
          break;
        case 2:
          ">" === z || v() ? m = 9 : htmlparser.isWhitespace(z) || (m = 3, K = y);
          break;
        case 3:
          if ("=" === z) {
            m = 5, L = p.substring(K, y);
          } else if (htmlparser.isWhitespace(z)) {
            m = 4, L = p.substring(K, y);
          } else if (">" === z || v()) {
            m = 9, x(p.substring(K, y), !0);
          }
          break;
        case 4:
          "=" === z ? m = 5 : ">" === z || v() ? (m = 9, x(L, !0)) : htmlparser.isWhitespace(z) || (m = 3, x(L, !0), K = y);
          break;
        case 5:
          '"' === z || "'" === z ? (m = 6, Q = z, K = y + 1) : htmlparser.isWhitespace(z) || (m = 7, K = y);
          M = !1;
          break;
        case 6:
          M || z !== Q || (m = 2, x(L, p.substring(K, y)));
          M = "\\" === z && !M;
          break;
        case 7:
          htmlparser.isWhitespace(z) ? m = 2 : ">" === z && (m = 9), 7 !== m && x(L, p.substring(K, y));
      }
      ++y;
    }
    if (9 === m) {
      m = J.toUpperCase();
      htmlparser.DEFINE.useXML && !C && (C = htmlparser.isXMLRootElement(J));
      htmlparser.DEFINE.useVML && !E && (E = htmlparser.isNamespacedTag(J));
      if (!C && !E) {
        for (; l;) {
          if (OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN[l] && !OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN[l][m]) {
            if (t(n, A, l, !1) && htmlparser.DEFINE.parsingStop) {
              return $jscomp$scope$1759477293$0$PARSING_STOP;
            }
            l = n[n.length - 1];
          } else {
            break;
          }
        }
      }
      (D = D || !!htmlparser.VOID_ELEMENTS[m]) || (n[n.length] = C || E ? J : m);
      return !0 === A.onParseStartTag(C || E ? J : m, B ? I : null, D, y) && htmlparser.DEFINE.parsingStop ? $jscomp$scope$1759477293$0$PARSING_STOP : y;
    }
    return 0;
  }
  var u = d ? +new Date() : 0, G = c.intervalMs || 16;
  f = f || [];
  for (var C = htmlparser.DEFINE.useXML && !!c.isXHTML, E = !1, F = a.length - b, q, k; a;) {
    q = f[f.length - 1];
    if (htmlparser.RAW_TEXT_ELEMENTS[q]) {
      if ("PLAINTEXT" === q || "plaintext" === q) {
        c.onParseText(h(a)), a = "";
      } else {
        if (k = a.indexOf("</" + (C || E ? q : q.toLowerCase())), -1 === k && (k = a.indexOf("</" + (C || E ? q.toUpperCase() : q))), 0 <= k) {
          b = k;
          g();
          q = r(f, c, a);
          if (q === $jscomp$scope$1759477293$0$PARSING_STOP && htmlparser.DEFINE.parsingStop) {
            return;
          }
          if (q) {
            a = a.substring(q);
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
      if (g(), k = a.indexOf(">"), -1 !== k) {
        c.onParseDocType(a.substring(b, k + 1)), a = a.substring(k + 1);
      } else {
        c.onParseError(a);
        return;
      }
    } else if (htmlparser.DEFINE.useProcessingInstruction && a.indexOf("<?") === b) {
      if (g(), k = a.indexOf("?>"), -1 !== k) {
        c.onParseProcessingInstruction(h(a.substring(2, k))), a = a.substring(k + 2);
      } else {
        c.onParseError(a);
        return;
      }
    } else if (htmlparser.DEFINE.useCDATASection && a.indexOf("<![CDATA[") === b) {
      if (g(), k = a.indexOf("]]\x3e"), -1 !== k) {
        c.onParseCDATASection(h(a.substring(9, k))), a = a.substring(k + 3);
      } else {
        c.onParseError(a);
        return;
      }
    } else if (a.indexOf("\x3c!--") === b) {
      if (g(), k = a.indexOf("--\x3e"), -1 !== k) {
        c.onParseComment(h(a.substring(4, k))), a = a.substring(k + 3);
      } else {
        c.onParseError(a);
        return;
      }
    } else if (a.indexOf("</") === b && htmlparser.isAlphabet(a.charAt(b + 2))) {
      g();
      q = r(f, c, a);
      if (htmlparser.DEFINE.parsingStop && q === $jscomp$scope$1759477293$0$PARSING_STOP) {
        return;
      }
      if (q) {
        a = a.substring(q);
      } else {
        c.onParseError(a);
        return;
      }
    } else if ("<" === a.charAt(b) && htmlparser.isAlphabet(a.charAt(b + 1))) {
      g();
      q = w(f, q, c, a);
      if (htmlparser.DEFINE.parsingStop && q === $jscomp$scope$1759477293$0$PARSING_STOP) {
        return;
      }
      if (q) {
        a = a.substring(q);
      } else {
        c.onParseError(a);
        return;
      }
    } else {
      k = a.indexOf("<", b), -1 === k ? (c.onParseText(h(a)), a = "") : b < k ? b = k : ++b;
    }
    q = a.length - b;
    if (q === F) {
      c.onParseError(a);
      return;
    }
    if (htmlparser.DEFINE.useLazy && d && a && u + G <= +new Date()) {
      c.onParseProgress(1 - q / e, $jscomp$scope$1759477293$1$exec, [a, b, c, d, e, f]);
      return;
    }
    F = q;
  }
  g();
  t(f, c, "", !0);
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
  var f = b[1], g = b.slice(2), h;
  "function" === typeof a ? h = g.length ? a(f, g) : a(f) : a[f] && (h = g.length ? a[f].apply(null, g) : a[f]());
  void 0 !== h && null !== h && "" !== h && (m_isStringOrNumber(h) ? c ? c.splice(d, 1, h) : (b.length = 0, b.push(htmljson.NODE_TYPE.TEXT_NODE, b)) : m_isArray(h) ? h[0] === htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE ? c ? (h.shift(), h.unshift(d, 1), c.splice.apply(c, h)) : (b.length = 0, b.push.apply(b, h)) : m_isArray(h[0]) ? c ? (h.unshift(d, 1), c.splice.apply(c, h)) : (b.length = 0, b.push(htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE), b.push.apply(b, h)) : c ? c.splice(d, 1, h) : (b.length = 
  0, b.push(htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE, h)) : htmljson.DEFINE.DEBUG && e("PROCESSING_INSTRUCTION Error! [" + JSON.stringify(b) + "]"));
  return h;
}
function m_executeInstructionAttr(a, b, c, d, e, f) {
  var g;
  if (m_isArray(d) && m_isString(d[0])) {
    var h = d[0];
    d = d.slice(1);
    "function" === typeof b ? g = d.length ? b.call(f, h, d) : b.call(f, h) : b[h] && (g = d.length ? b[h].apply(f || b, d) : b[h].call(f || b));
  } else {
    m_isString(d) ? "function" === typeof b ? g = b.call(f, d) : b[d] && (g = b[d].call(f || b)) : htmljson.DEFINE.DEBUG && e("Invalid InstructionAttr value! [" + c + "=" + d + "]");
  }
  return a && m_isArray(g) ? m_executeInstructionAttr(!0, b, c, g, e, f) : g;
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
      } else if ("*" === f) {
        if (!0 === g(a)) {
          break;
        }
      } else if (e && m_isString(f)) {
        if (f === a._tagName && !0 === g(a)) {
          break;
        }
      } else if (htmljson.DEFINE.DEBUG) {
        throw "onEnterNode: invalid selector found! " + f;
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
  function b() {
    e.splice(f, 0, m_tryToFiniteNumber(c));
    c = "";
  }
  var c = "", d, e, f;
  m_traverseAllDescendantHTMLJsonNodes(a, function(g, h, r, t) {
    if (c && d !== t) {
      return b(), VISITOR_OPTION.INSERTED_BEFORER;
    }
    if (m_getNodeType(g) === htmljson.NODE_TYPE.TEXT_NODE) {
      return c = m_isStringOrNumber(g) ? c + g : c + g[1], h.splice(r, 1), d = t, e = h, f = r, VISITOR_OPTION.REMOVED;
    }
    if (c) {
      return b(), VISITOR_OPTION.INSERTED_BEFORER;
    }
  });
  c && b();
}
function m_trimWhiteSpaces(a, b, c, d, e, f) {
  a = a.split("\r\n").join("\n").split("\r").join("\n");
  if (!b && d) {
    if (c) {
      a = m_trimChar(a, "\n");
    } else {
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
  for (var b = 0, c = a.length, d = {}, e = 0, f, g, h, r; 0 < c;) {
    f = a.charAt(0);
    switch(b) {
      case 0:
        htmlparser.isWhitespace(f) || (g = 0, b = 1);
        break;
      case 1:
        ":" === f && (r = a.substring(g, 0), g = 0, b = 2);
        break;
      case 2:
        htmlparser.isWhitespace(f) || (g = 0, b = 3);
        break;
      case 3:
        h === f ? h = "" : h || ('"' === f || "'" === f ? h = f : ";" === f && (b = r, f = a.substring(g, 0), d[b] = "0px" === f ? 0 : m_tryToFiniteNumber(f), ++e, b = 0));
    }
    if (3 === b) {
      f = r;
      var t = a.substring(g);
      d[f] = "0px" === t ? 0 : m_tryToFiniteNumber(t);
      ++e;
    }
  }
  return e ? d : null;
}
function m_isStaticDocument(a, b) {
  var c = !1;
  m_traverseAllDescendantHTMLJsonNodes(a, function(d, e, f, g) {
    if (m_isArray(d)) {
      e = d[0];
      f = d[1];
      g = e;
      var h = 1;
      switch(e) {
        case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION:
          return c = !0, VISITOR_OPTION.BREAK;
        case htmljson.NODE_TYPE.ELEMENT_NODE:
        case htmljson.NODE_TYPE.ELEMENT_START_TAG:
          g = f, h = 2;
        default:
          if (m_isString(g) && m_isAttributes(d[h])) {
            a: {
              d = d[h];
              for (r in d) {
                if (m_isInstructionAttr(b, r)) {
                  var r = !0;
                  break a;
                }
              }
              r = !1;
            }
            if (r) {
              return c = !0, VISITOR_OPTION.BREAK;
            }
          }
      }
    }
  });
  return !c;
}
function m_createVNodeFromHTMLJson(a, b) {
  var c, d;
  m_traverseAllDescendantHTMLJsonNodes(a, function(e, f, g, h) {
    function r(G, C, E) {
      c ? (h + 1 < d.length && (d.length = h + 1), G = d[d.length - 1].insertNodeLast(G, C, E), m_isArray(e) && m_getChildNodeStartIndex(e) < e.length && (d[h + 1] = G)) : (c = new VNode(b, 0, G, C, E), d = [c]);
    }
    if (m_isStringOrNumber(e)) {
      r(htmljson.NODE_TYPE.TEXT_NODE, e);
    } else {
      f = e[0];
      g = e[1];
      var t = 1, w = f, u;
      switch(f) {
        case htmljson.NODE_TYPE.DOCUMENT_NODE:
        case htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER:
        case htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER:
          r(f, g);
          break;
        case htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE:
          r(f);
          break;
        case htmljson.NODE_TYPE.TEXT_NODE:
        case htmljson.NODE_TYPE.CDATA_SECTION:
        case htmljson.NODE_TYPE.COMMENT_NODE:
        case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START:
        case htmljson.NODE_TYPE.ELEMENT_END_TAG:
          r(f, g);
          break;
        case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_END:
          r(f);
          break;
        case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION:
          t = [];
          w = 2;
          for (u = e.length; w < u; ++w) {
            t[w - 2] = e[w];
          }
          r(f, g, u - 2 ? t : null);
          break;
        case htmljson.NODE_TYPE.ELEMENT_NODE:
        case htmljson.NODE_TYPE.ELEMENT_START_TAG:
          w = g, t = 2;
        default:
          m_isString(w) && r(1 === t ? htmljson.NODE_TYPE.ELEMENT_NODE : f, w, e[t]);
      }
    }
    if (b) {
      return VISITOR_OPTION.BREAK;
    }
  });
  return c;
}
var VISITOR_OPTION = {REMOVED:-1, NONE:0, INSERTED_BEFORER:1, BREAK:Infinity, SKIP:-Infinity};
function m_traverseAllDescendantHTMLJsonNodes(a, b, c) {
  var d = a, e = m_getChildNodeStartIndex(a), f = 0, g = b(a, null, -1, f / 3), h = [-1, a, e], r = !1;
  if (g === VISITOR_OPTION.BREAK || g === VISITOR_OPTION.SKIP) {
    return !1;
  }
  if (0 < d.length - e) {
    do {
      g = ++h[f];
      var t = d[g + e];
      if (void 0 === t) {
        if (h.length = f, f -= 3, d = h[f + 1], e = h[f + 2], c && d) {
          g = h[f] + e;
          g = d && c(d[g], d, g, f / 3);
          if (g === VISITOR_OPTION.BREAK) {
            return r;
          }
          g !== VISITOR_OPTION.SKIP && (g <= VISITOR_OPTION.REMOVED || VISITOR_OPTION.INSERTED_BEFORER <= g) && (h[f] += g, r = !0);
        }
      } else {
        g = b(t, d, g + e, f / 3);
        if (g === VISITOR_OPTION.BREAK) {
          return r;
        }
        g !== VISITOR_OPTION.SKIP && (g <= VISITOR_OPTION.REMOVED ? (h[f] += g, r = !0) : (VISITOR_OPTION.INSERTED_BEFORER <= g && (h[f] += g, r = !0), 0 < t.length - m_getChildNodeStartIndex(t) && (f += 3, h[f + 0] = -1, h[f + 1] = d = t, h[f + 2] = e = m_getChildNodeStartIndex(t))));
      }
    } while (0 <= f);
  }
  c && c(a, null, -1, 0);
  return r;
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
      this._attrs = e || null, b = m_parseTagName(d), this._id = b[1], this._className = b[2], d = b[0];
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
VNode.parentRestrictedVNode = null;
VNode.treeIsUpdated = !1;
VNode.prototype.getRestrictedMode = function() {
  return this._isRestrictedMode ? VNode.currentRestrictedVNode === this ? this._removed ? _RESTRICTED_MODE.CURRENT_NODE_REMOVED : this._hasUnknownChildren ? _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN : _RESTRICTED_MODE.CURRENT_NODE_IS_EMPTY : VNode.currentRestrictedVNode._parent === this ? _RESTRICTED_MODE.READ_ONLY : _RESTRICTED_MODE.NEW_NODE : _RESTRICTED_MODE.NO_RESTRICTIONS;
};
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
    if (_RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode()) {
      throw "In Restricted Mode. VNode cannot execute setNodeType()!";
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
  if (htmljson.DEFINE.DEBUG && _RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode()) {
    throw "In Restricted Mode. VNode cannot execute setNodeValue()!";
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
    throw "In Restricted Mode. VNode cannot execute finalize()!";
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
  var a = !0;
  _walkAllDescendantNodes(this, function(b) {
    if (b._nodeType === htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER || b._nodeType === htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER) {
      return _WALK.SKIP;
    }
    if (b._nodeType === htmljson.NODE_TYPE.ELEMENT_START_TAG || b._nodeType === htmljson.NODE_TYPE.ELEMENT_END_TAG) {
      return a = !1, _WALK.BREAK;
    }
  });
  return a;
};
VNode.prototype.walkNodes = function(a) {
  if (htmljson.DEFINE.DEBUG && _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode()) {
    throw "In Restricted Mode. VNode cannot execute walkNodes()!";
  }
  _walkAllDescendantNodes(this, a);
};
VNode.prototype.walkElements = function(a) {
  if (htmljson.DEFINE.DEBUG && _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode()) {
    throw "In Restricted Mode. VNode cannot execute walkElements()!";
  }
  _walkAllDescendantNodes(this, function(b) {
    if (b.isElement()) {
      return a(b);
    }
  });
};
VNode.prototype.walkText = function(a) {
  if (htmljson.DEFINE.DEBUG && _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode()) {
    throw "In Restricted Mode. VNode cannot execute walkText()!";
  }
  _walkAllDescendantNodes(this, function(b) {
    if (b._nodeType === htmljson.NODE_TYPE.TEXT_NODE) {
      return a(b);
    }
  });
};
VNode.prototype.contains = function(a) {
  if (htmljson.DEFINE.DEBUG && _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode()) {
    throw "In Restricted Mode. VNode cannot execute contains()!";
  }
  var b = !1;
  _walkAllDescendantNodes(this, function(c) {
    if (c === a) {
      return b = !0, _WALK.BREAK;
    }
  });
  return b;
};
VNode.prototype.getElementByID = function(a) {
  if (htmljson.DEFINE.DEBUG && _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode()) {
    throw "In Restricted Mode. VNode cannot execute getElementByID()!";
  }
  var b = null;
  this.walkElements(function(c) {
    if (c.getAttr("id") === a) {
      return b = c, _WALK.BREAK;
    }
  });
  return b;
};
VNode.prototype.getElementListByTag = function(a) {
  if (htmljson.DEFINE.DEBUG && _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode()) {
    throw "In Restricted Mode. VNode cannot execute getElementListByTag()!";
  }
  var b = [], c = -1;
  this.walkElements(function(d) {
    d._tagName === a && (b[++c] = d);
  });
  return b;
};
VNode.prototype.getElementListByClass = function(a) {
  if (htmljson.DEFINE.DEBUG && _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode()) {
    throw "In Restricted Mode. VNode cannot execute getElementListByClass()!";
  }
  var b = [], c = -1;
  this.walkElements(function(d) {
    d.hasClassName(a) && (b[++c] = d);
  });
  return b;
};
VNode.prototype.getElementListByName = function(a) {
  if (htmljson.DEFINE.DEBUG && _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode()) {
    throw "In Restricted Mode. VNode cannot execute getElementListByName()!";
  }
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
  if (htmljson.DEFINE.DEBUG) {
    if (!this.isElement() && this._nodeType !== htmljson.NODE_TYPE.ELEMENT_END_TAG) {
      throw "getTagName() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (_RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode()) {
      throw "In Restricted Mode. VNode cannot execute setTagName()!";
    }
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
    if (-1 !== a.indexOf(" ")) {
      throw "addClassName() \u306f\u534a\u89d2\u6587\u5b57\u3092\u542b\u3080 className \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u307e\u305b\u3093!";
    }
    if (_RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode()) {
      throw "In Restricted Mode. VNode cannot execute addClassName()!";
    }
  }
  this.hasClassName(a) || (this._className = (this._className ? " " : "") + a, VNode.treeIsUpdated = !0);
};
VNode.prototype.removeClassName = function(a) {
  if (htmljson.DEFINE.DEBUG) {
    if (!this.isElement()) {
      throw "removeClassName() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (-1 !== a.indexOf(" ")) {
      throw "removeClassName() \u306f\u534a\u89d2\u6587\u5b57\u3092\u542b\u3080 className \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u307e\u305b\u3093!";
    }
    if (_RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode()) {
      throw "In Restricted Mode. VNode cannot execute removeClassName()!";
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
    if (_RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode()) {
      throw "In Restricted Mode. VNode cannot execute setAttr()!";
    }
  }
  "class" === a || "className" === a ? (_compareValuesAndSetUpdatedFlag(this._className, b), this._className = b) : "id" === a ? (_compareValuesAndSetUpdatedFlag(this._id, b), this._id = b) : (m_isAttributes(this._attrs) || (this._attrs = {}), _compareValuesAndSetUpdatedFlag(this._attrs[a], b), this._attrs[a] = b);
};
VNode.prototype.removeAttr = function(a) {
  if (htmljson.DEFINE.DEBUG) {
    if (!this.isElement()) {
      throw "removeAttr() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (_RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode()) {
      throw "In Restricted Mode. VNode cannot execute removeAttr()!";
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
    if (_RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode()) {
      throw "In Restricted Mode. VNode cannot execute setStyle()!";
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
      throw "removeStyle() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (_RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode()) {
      throw "In Restricted Mode. VNode cannot execute removeStyle()!";
    }
  }
  var b = this.getAttr("style");
  b && m_isString(b) && (b = m_parseCSSText(b), this.setAttr("style", b));
  b && (_compareValuesAndSetUpdatedFlag(b[a], void 0), delete b[a]);
};
VNode.prototype.getTextContent = function() {
  if (htmljson.DEFINE.DEBUG) {
    if (!this.isElement() && !_isDocOrDocFragment(this)) {
      throw "getTextContent() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (_RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode()) {
      throw "In Restricted Mode. VNode cannot execute getTextContent()!";
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
    if (_RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode()) {
      throw "In Restricted Mode. VNode cannot execute setTextContent()!";
    }
  }
  _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode() && (this._hasUnknownChildren = !0);
  this.empty();
  this.insertNodeFirst(htmljson.NODE_TYPE.TEXT_NODE, a);
};
VNode.prototype.getParent = function() {
  if (htmljson.DEFINE.DEBUG && _isDocOrDocFragment(this)) {
    throw "getParent() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  return this._parent;
};
VNode.prototype.getPrevNode = function() {
  if (htmljson.DEFINE.DEBUG && _isDocOrDocFragment(this)) {
    throw "getPrevNode() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  return this._parent && this._parent.getChildNodeAt(this.getMyIndex() - 1);
};
VNode.prototype.getNextNode = function() {
  if (htmljson.DEFINE.DEBUG) {
    if (this._nodeType === htmljson.NODE_TYPE.ELEMENT_START_TAG || _isDocOrDocFragment(this)) {
      throw "getNextNode() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (_RESTRICTED_MODE.CURRENT_NODE_IS_EMPTY <= this.getRestrictedMode()) {
      throw "In Restricted Mode. VNode cannot execute getNextNode()!";
    }
  }
  return this._parent && this._parent.getChildNodeAt(this.getMyIndex() + 1);
};
VNode.prototype.getMyIndex = function() {
  if (htmljson.DEFINE.DEBUG && _isDocOrDocFragment(this)) {
    throw "getMyIndex() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  return this._parent ? this._parent._childNodes.indexOf(this) : -1;
};
VNode.prototype.getChildNodeCount = function() {
  if (htmljson.DEFINE.DEBUG) {
    if (!_canHasChildren(this)) {
      throw "getChildNodeCount() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (_RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode()) {
      throw "In Restricted Mode. VNode cannot execute getChildNodeCount()!";
    }
  }
  return this._childNodes && this._childNodes.length;
};
VNode.prototype.getFirstChild = function() {
  if (htmljson.DEFINE.DEBUG && !_canHasChildren(this)) {
    throw "getFirstChild() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  this.getRestrictedMode();
  return this.getChildNodeAt(0);
};
VNode.prototype.getLastChild = function() {
  if (htmljson.DEFINE.DEBUG) {
    if (!_canHasChildren(this)) {
      throw "getLastChild() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (_RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode()) {
      throw "In Restricted Mode. VNode cannot execute getLastChild()!";
    }
  }
  this.getRestrictedMode();
  return this.getChildNodeAt(this.getChildNodeCount() - 1);
};
VNode.prototype.getChildNodeAt = function(a) {
  if (htmljson.DEFINE.DEBUG) {
    if (!_canHasChildren(this)) {
      throw "getChildNodeAt() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (_RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode()) {
      throw "In Restricted Mode. VNode cannot execute getChildNodeAt()!";
    }
  }
  return this._childNodes && this._childNodes[a] || null;
};
VNode.prototype.remove = function() {
  if (htmljson.DEFINE.DEBUG) {
    if (_isDocOrDocFragment(this)) {
      throw "remove() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (_RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode()) {
      throw "In Restricted Mode. VNode cannot execute remove()!";
    }
  }
  if (_RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode()) {
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
    if (_RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode()) {
      throw "In Restricted Mode. VNode cannot execute empty()!";
    }
  }
  if (_RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode()) {
    this._hasUnknownChildren = !1, VNode.treeIsUpdated = !0, this._nodesInsertedFirst && (this._nodesInsertedFirst.length = 0), this._nodesInsertedLast && (this._nodesInsertedLast.length = 0);
  } else {
    var a = this._childNodes, b;
    if (a) {
      for (b = a.length; b;) {
        a[--b].remove();
      }
    }
  }
};
VNode.prototype.wrap = function(a, b, c) {
  if (htmljson.DEFINE.DEBUG) {
    if (this._isRestrictedMode && !_isCurrentVNode(this)) {
      throw "restricted mode \u3067\u306f\u73fe\u5728\u306e\u30ce\u30fc\u30c9\u4ee5\u5916\u3078\u306e empty() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
    }
    if (_RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode()) {
      throw "In Restricted Mode. VNode cannot execute wrap()!";
    }
  }
  a = this.insertNodeBefore(a, b, c);
  _insertAt(a, 0, [this]);
  return a;
};
VNode.prototype.replace = function(a, b, c) {
  if (htmljson.DEFINE.DEBUG && _RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode()) {
    throw "In Restricted Mode. VNode cannot execute replace()!";
  }
  a = this.insertNodeBefore(a, b, c);
  this.remove();
  return a;
};
VNode.prototype.insertBefore = function(a) {
  if (htmljson.DEFINE.DEBUG) {
    if (_isDocOrDocFragment(this)) {
      throw "insertBefore() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (_RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode()) {
      throw "In Restricted Mode. VNode cannot execute insertBefore()!";
    }
  }
  this._parent && _insertAt(this._parent, this.getMyIndex(), arguments);
};
VNode.prototype.insertFirst = function(a) {
  if (htmljson.DEFINE.DEBUG && _RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode()) {
    throw "In Restricted Mode. VNode cannot execute insertFirst()!";
  }
  _insertAt(this, 0, arguments);
};
VNode.prototype.insertAt = function(a, b) {
  if (htmljson.DEFINE.DEBUG && _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode()) {
    throw "In Restricted Mode. VNode cannot execute insertAt()!";
  }
  var c = [], d;
  for (d = arguments.length; 1 < d;) {
    c[d - 2] = arguments[--d];
  }
  _insertAt(this, a, c);
};
VNode.prototype.insertLast = function(a) {
  if (htmljson.DEFINE.DEBUG && _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode()) {
    throw "In Restricted Mode. VNode cannot execute insertLast()!";
  }
  _insertAt(this, this.getChildNodeCount(), arguments);
};
VNode.prototype.insertAfter = function(a) {
  if (htmljson.DEFINE.DEBUG) {
    if (_isDocOrDocFragment(this) || this._nodeType === htmljson.NODE_TYPE.ELEMENT_START_TAG) {
      throw "insertAfter() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (_RESTRICTED_MODE.CURRENT_NODE_REMOVED <= this.getRestrictedMode()) {
      throw "In Restricted Mode. VNode cannot execute insertAfter()!";
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
    if (_RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode()) {
      throw "In Restricted Mode. VNode cannot execute insertFirst()!";
    }
  }
  return _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode() ? (this._nodesInsertedBefore = this._nodesInsertedBefore || [], this._nodesInsertedBefore.push([htmljson.NODE_TYPE.ELEMENT_NODE, a, b, c]), VNode.treeIsUpdated = !0, null) : this._parent ? this._parent.insertElementAt(this.getMyIndex(), a, b, c) : null;
};
VNode.prototype.insertElementFirst = function(a, b, c) {
  if (htmljson.DEFINE.DEBUG && this._isRestrictedMode && !_isCurrentVNodeAndCanHaveChildren(this)) {
    throw "restricted mode \u3067\u306f\u73fe\u5728\u306e\u30ce\u30fc\u30c9\u4ee5\u5916\u3078\u306e insertElementFirst() \u306f\u975e\u5bfe\u5fdc\u3067\u3059!";
  }
  return _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode() ? (this._nodesInsertedFirst = this._nodesInsertedFirst || [], this._nodesInsertedFirst.unshift([htmljson.NODE_TYPE.ELEMENT_NODE, a, b, c]), VNode.treeIsUpdated = !0, null) : this.insertElementAt(0, a, b, c);
};
VNode.prototype.insertElementAt = function(a, b, c, d) {
  if (htmljson.DEFINE.DEBUG && _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode()) {
    throw "In Restricted Mode. VNode cannot execute insertElementAt()!";
  }
  a = new VNode(this, a, htmljson.NODE_TYPE.ELEMENT_NODE, b, c);
  null != d && a.insertNodeAt(0, htmljson.NODE_TYPE.TEXT_NODE, d);
  VNode.treeIsUpdated = !0;
  return a;
};
VNode.prototype.insertElementLast = function(a, b, c) {
  if (htmljson.DEFINE.DEBUG && _RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode()) {
    throw "In Restricted Mode. VNode cannot execute insertElementLast()!";
  }
  return _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode() ? (this._nodesInsertedLast = this._nodesInsertedLast || [], this._nodesInsertedLast.push([htmljson.NODE_TYPE.ELEMENT_NODE, a, b, c]), VNode.treeIsUpdated = !0, null) : this.insertElementAt(this.getChildNodeCount(), a, b, c);
};
VNode.prototype.insertElementAfter = function(a, b, c) {
  if (htmljson.DEFINE.DEBUG) {
    if (_isDocOrDocFragment(this) || this._nodeType === htmljson.NODE_TYPE.ELEMENT_START_TAG) {
      throw "insertElementAfter() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (_RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode()) {
      throw "In Restricted Mode. VNode cannot execute insertElementLast()!";
    }
  }
  return _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode() ? (this._nodesInsertedAfter = this._nodesInsertedAfter || [], this._nodesInsertedAfter.unshift([htmljson.NODE_TYPE.ELEMENT_NODE, a, b, c]), VNode.treeIsUpdated = !0, null) : this._parent ? this._parent.insertElementAt(this.getMyIndex() + 1, a, b, c) : null;
};
VNode.prototype.insertNodeBefore = function(a, b, c) {
  if (htmljson.DEFINE.DEBUG) {
    if (_isDocOrDocFragment(this)) {
      throw "insertNodeBefore() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (_RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode()) {
      throw "In Restricted Mode. VNode cannot execute insertNodeBefore()!";
    }
  }
  return this._isRestrictedMode ? (this._nodesInsertedBefore = this._nodesInsertedBefore || [], this._nodesInsertedBefore.push([a, b, c]), VNode.treeIsUpdated = !0, null) : this._parent ? this._parent.insertNodeAt(this.getMyIndex(), a, b, c) : null;
};
VNode.prototype.insertNodeFirst = function(a, b, c) {
  if (htmljson.DEFINE.DEBUG && _RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode()) {
    throw "In Restricted Mode. VNode cannot execute insertNodeFirst()!";
  }
  return _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode() ? (this._nodesInsertedFirst = this._nodesInsertedFirst || [], this._nodesInsertedFirst.unshift([a, b, c]), VNode.treeIsUpdated = !0, null) : this.insertNodeAt(0, a, b, c);
};
VNode.prototype.insertNodeAt = function(a, b, c, d) {
  if (htmljson.DEFINE.DEBUG && _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode()) {
    throw "In Restricted Mode. VNode cannot execute insertNodeAt()!";
  }
  VNode.treeIsUpdated = !0;
  return new VNode(this, a, b, c, d);
};
VNode.prototype.insertNodeLast = function(a, b, c) {
  if (htmljson.DEFINE.DEBUG && _RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode()) {
    throw "In Restricted Mode. VNode cannot execute insertNodeFirst()!";
  }
  return _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode() ? (this._nodesInsertedLast = this._nodesInsertedLast || [], this._nodesInsertedLast.push([a, b, c]), VNode.treeIsUpdated = !0, null) : this.insertNodeAt(this.getChildNodeCount(), a, b, c);
};
VNode.prototype.insertNodeAfter = function(a, b, c) {
  if (htmljson.DEFINE.DEBUG) {
    if (_isDocOrDocFragment(this) || a === htmljson.NODE_TYPE.ELEMENT_START_TAG) {
      throw "insertNodeAfter() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    if (_RESTRICTED_MODE.READ_ONLY <= this.getRestrictedMode()) {
      throw "In Restricted Mode. VNode cannot execute insertNodeFirst()!";
    }
  }
  return _RESTRICTED_MODE.CURRENT_NODE_HAS_UNKNOWN_CHILDREN <= this.getRestrictedMode() ? (this._nodesInsertedAfter = this._nodesInsertedAfter || [], this._nodesInsertedAfter.unshift([a, b, c]), VNode.treeIsUpdated = !0, null) : this._parent ? this._parent.insertNodeAt(this.getMyIndex() + 1, a, b, c) : null;
};
var _RESTRICTED_MODE = {NO_RESTRICTIONS:0, NEW_NODE:1, CURRENT_NODE_IS_EMPTY:2, CURRENT_NODE_HAS_UNKNOWN_CHILDREN:3, CURRENT_NODE_REMOVED:4, READ_ONLY:5}, _WALK = {NONE:0, BREAK:1, SKIP:2};
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
  var g = b || null;
  b = "function" === typeof d ? d : null;
  var h = "function" === typeof e ? e : function(k) {
  };
  e = f || {};
  var r = -1 !== ["normal", !0, "aggressive"].indexOf(e.trimWhitespaces), t = "aggressive" === e.trimWhitespaces, w = !!e.removeNewlineBetweenFullWidthChars, u = !1 !== e.keepCDATASections, G = !1 !== e.keepComments, C = !0 === e.keepEmptyConditionalComment, E = e.instructionAttrPrefix || htmljson.DEFINE.INSTRUCTION_ATTR_PREFIX, F = !0, q = [!1, !1];
  if (m_isArray(a)) {
    return (e = m_traverseAllDescendantHTMLJsonNodes(a, function(k, n, l, A) {
      var p = q[2 * A], x = q[2 * A + 1], v = k[0], m = k[1], H = 1;
      2 * A + 2 < q.length && (q.length = 2 * A + 2);
      switch(m_getNodeType(k)) {
        case htmljson.NODE_TYPE.DOCUMENT_NODE:
          break;
        case htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE:
          break;
        case htmljson.NODE_TYPE.TEXT_NODE:
          m_isArray(k) || (m = k);
          m = m_trimWhiteSpaces("" + m, p, x, r, t, w);
          if ("" !== m) {
            n[l] = m;
          } else {
            return n.splice(l, 1), VISITOR_OPTION.REMOVED;
          }
          return;
        case htmljson.NODE_TYPE.CDATA_SECTION:
          if (!u && n) {
            return n.splice(l, 1), VISITOR_OPTION.REMOVED;
          }
          break;
        case htmljson.NODE_TYPE.COMMENT_NODE:
          if (!G && n) {
            return n.splice(l, 1), VISITOR_OPTION.REMOVED;
          }
          break;
        case htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER:
          break;
        case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_END:
          v = n[l - 1];
          if (!C && v && v[0] === htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START && v) {
            return n.splice(l - 1, 2), 2 * VISITOR_OPTION.REMOVED;
          }
          break;
        case htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER:
          break;
        case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION:
          if (g) {
            if (v = m_executeProcessingInstruction(g, k, n, l, h), void 0 !== v) {
              if (null === v || "" === v) {
                return n ? n.splice(l, 1) : (a.length = 0, a.push(htmljson.NODE_TYPE.COMMENT_NODE, "")), VISITOR_OPTION.REMOVED;
              }
              if (!m_isStringOrNumber(v) && m_isArray(v)) {
                return VISITOR_OPTION.REMOVED;
              }
            } else {
              F = !1;
            }
          } else {
            htmljson.DEFINE.DEBUG && h("onInstruction is void!");
          }
          break;
        case htmljson.NODE_TYPE.ELEMENT_NODE:
        case htmljson.NODE_TYPE.ELEMENT_START_TAG:
          m_isNumber(v) && (v = m, H = 2);
          n = k[H];
          if (m_isAttributes(n)) {
            l = H - 1;
            x = 0;
            var y;
            A = m_parseTagName(k[l]);
            m = A[1];
            var I = A[2];
            A = A[0];
            for (z in n) {
              var B = z;
              var D = n[z];
              if (y = m_isInstructionAttr(E, z)) {
                var z = z.substr(E.length);
                "className" === z && (z = "class");
                if (g) {
                  if (D = m_executeInstructionAttr(!1, g, z, D, h), void 0 !== D) {
                    if (delete n[B], m_isArray(D)) {
                      m_isString(D[0]) ? (n[B] = D, F = !1, ++x) : htmljson.DEFINE.DEBUG && h("Invalid dynamic attribute callback value! [" + B + "=" + D + "]");
                    } else if ((!htmlparser.BOOLEAN_ATTRIBUTES[z] || !1 !== D) && null !== D) {
                      if (m_isString(D)) {
                        if ("id" === z) {
                          m = D;
                          continue;
                        } else if ("class" === z) {
                          B = D.split(" ");
                          for (D = B.length; D;) {
                            y = B[--D], -1 === (" " + I + " ").indexOf(" " + y + " ") && (I = (I ? " " : "") + y);
                          }
                          continue;
                        }
                      }
                      n[z] = D;
                      ++x;
                    }
                  } else {
                    F = !1, ++x;
                  }
                } else {
                  F = !1, ++x;
                }
              } else {
                ++x;
              }
            }
            k[l] = m_createTagName(A, m, I);
            0 === x && k.splice(H, 1);
          }
          p = p || !!m_FAMILY_OF_PRE_ELEMENT[v];
          x = !!m_TRIM_NEWLINES_ELEMENTS[v];
          break;
        default:
          htmljson.DEFINE.DEBUG && h("Not html.json! [" + k + "]");
      }
      0 < k.length - m_getChildNodeStartIndex(k) && q.push(p, x);
    }, function(k, n, l, A) {
      switch(m_getNodeType(k)) {
        case htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER:
        case htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER:
          if (!C && n && 2 === k.length) {
            return n.splice(l, 1), VISITOR_OPTION.REMOVED;
          }
      }
    })) && m_normalizeTextNodes(a), b && _dispatchDocumentReadyEvent(b, a) && (F = m_isStaticDocument(a, E)), F;
  }
  htmljson.DEFINE.DEBUG && h("Invalid html.json document!");
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
  function f(k, n, l, A, p, x) {
    function v() {
      var J = "";
      F && (J = "</" + (q ? F : F.toLowerCase()) + ">", F = "");
      return J;
    }
    var m = w ? m_executeEnterNodeHandler(k, l, w) : null;
    l = "";
    var H = k[0], y = k[1], I = 1, B = H, D;
    switch(H) {
      case htmljson.NODE_TYPE.DOCUMENT_NODE:
        htmljson.DEFINE.USE_XHTML && m_isXML(y) && (q = !0);
        l = y + h(k, m, !1, x);
        break;
      case htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE:
        l = h(k, m, p, x);
        break;
      case htmljson.NODE_TYPE.TEXT_NODE:
        l = v() + (x ? y : m_escapeForHTML("" + y));
        break;
      case htmljson.NODE_TYPE.CDATA_SECTION:
        htmljson.DEFINE.DEBUG && !m_isString(y) && u("CDATA_SECTION Error! [" + k + "]");
        l = "<![CDATA[" + m_escapeForHTML("" + y) + "]]\x3e";
        break;
      case htmljson.NODE_TYPE.COMMENT_NODE:
        htmljson.DEFINE.DEBUG && !m_isString(y) && u("COMMENT_NODE Error! [" + k + "]");
        l = "\x3c!--" + m_escapeForHTML("" + y) + "--\x3e";
        break;
      case htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER:
        htmljson.DEFINE.DEBUG && !m_isString(y) && u("COND_CMT_HIDE_LOWER Error! [" + k + "]");
        l = v() + "\x3c!--[" + y + "]>" + h(k, m, !0, x) + "<![endif]--\x3e";
        break;
      case htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER:
        htmljson.DEFINE.DEBUG && !m_isString(y) && u("NETSCAPE4_COND_CMT_HIDE_LOWER Error! [" + k + "]");
        l = v() + "\x3c!--{" + y + "};" + h(k, m, !0, x) + "--\x3e";
        break;
      case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START:
        htmljson.DEFINE.DEBUG && !m_isString(y) && u("COND_CMT_SHOW_LOWER_START Error! [" + k + "]");
        l = "\x3c!--[" + y + "]>\x3c!--\x3e";
        break;
      case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_END:
        l = "\x3c!--<![endif]--\x3e";
        break;
      case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION:
        if (t) {
          if (p = m_executeProcessingInstruction(t, k, n, A, u), void 0 !== p && null !== p && "" !== p) {
            if (m_isStringOrNumber(p) || m_isArray(p)) {
              return -1;
            }
            htmljson.DEFINE.DEBUG && u("PROCESSING_INSTRUCTION Error! [" + JSON.stringify(k) + "] result:" + JSON.stringify(p));
          }
        } else {
          u("onInstruction is void!");
        }
        break;
      case htmljson.NODE_TYPE.ELEMENT_END_TAG:
        htmljson.DEFINE.DEBUG && !m_isString(y) && u("ELEMENT_END_TAG Error! [" + k + "]");
        l = "</" + y + ">";
        break;
      case htmljson.NODE_TYPE.ELEMENT_START_TAG:
        var z = !0;
      case htmljson.NODE_TYPE.ELEMENT_NODE:
        B = k[1], I = 2;
      default:
        htmljson.DEFINE.DEBUG && !m_isString(B) && u("Not html.json! [" + k + "]"), B = m_parseTagName(B), n = B[1], A = B[2], B = B[0], I = k[I], "P" !== F || m_P_END_TAG_LESS_TAGS[B] ? F = "" : l = v(), q || (D = q = g(B)), l += "<" + (q ? B : B.toLowerCase()), n && (l += " id=" + m_quoteAttributeValue(n, C, q || G)), A && (l += " class=" + m_quoteAttributeValue(A, C, q || G)), m_isAttributes(I) && (l += r(I)), l = (k = h(k, m, m_CHILD_P_MUST_HAVE_END_TAG[B], x || m_UNESCAPED_ELEMENTS[B])) ? l + 
        (">" + k) : z ? l + ">" : l + (q ? " />" : ">"), z && (F = ""), !k && htmlparser.VOID_ELEMENTS[B] ? F = "" : q && !k || m_OMITTABLE_END_TAGS[B] && (!p || "P" !== B) ? F = B : (l += "</" + (q ? B : B.toLowerCase()) + ">", F = ""), D && (q = !1);
    }
    return l;
  }
  function g(k) {
    return q || htmlparser.isXMLRootElement(k) ? !0 : htmlparser.isNamespacedTag(k);
  }
  function h(k, n, l, A) {
    for (var p = [], x = m_getChildNodeStartIndex(k), v = -1, m; x < k.length; ++x) {
      m = k[x], m_isStringOrNumber(m) ? p[++v] = f([htmljson.NODE_TYPE.TEXT_NODE, m], k, n, x, !1, A) : m_isArray(m) ? (m = f(m, k, n, x, l, A), -1 === m ? --x : p[++v] = m) : htmljson.DEFINE.DEBUG && u("Invalid html.json! [" + m + "]");
    }
    return p.join("");
  }
  function r(k) {
    var n = "", l, A;
    for (l in k) {
      var p = k[l];
      (A = m_isInstructionAttr(E, l)) && (l = l.substr(E.length));
      "className" === l && (l = "class");
      A && (t ? p = m_executeInstructionAttr(!0, t, l, p, u) : htmljson.DEFINE.DEBUG && u("onInstruction is void!"));
      if (!(null == p || htmlparser.BOOLEAN_ATTRIBUTES[l] && !1 === p || (n += " " + l, htmlparser.BOOLEAN_ATTRIBUTES[l] || !0 === p))) {
        if ("style" === l && m_isObject(p) && (p = m_toCSSTest(p), !p)) {
          continue;
        }
        n += "=" + m_quoteAttributeValue(p, C, q || G);
      }
    }
    return n;
  }
  var t = b || null, w = c || null, u = "function" === typeof d ? d : function(k) {
  };
  b = e || {};
  var G = !0 === b.quotAlways, C = !0 === b.useSingleQuot, E = b.instructionAttrPrefix || htmljson.DEFINE.INSTRUCTION_ATTR_PREFIX, F, q = m_isXMLDocument;
  if (m_isArray(a)) {
    return m_getNodeType(a) === htmljson.NODE_TYPE.PROCESSING_INSTRUCTION && (a = [htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE, a]), f(a, null, null, 0, m_pEndTagRequired || !1, m_escapeForHTMLDisabled || !1);
  }
  htmljson.DEFINE.DEBUG && u("Invalid html.json document!");
}};
json2json.gulp = {};
json2json.main.gulp = function(a, b, c, d, e) {
  const f = require("plugin-error"), g = require("through2"), h = e || {}, r = h.outputStaticPagesAsHTML, t = h.staticPages && "object" === typeof h.staticPages ? h.staticPages : {};
  h.staticPages = t;
  return g.obj(function(w, u, G) {
    if (w.isNull()) {
      return G();
    }
    if (w.isStream()) {
      return this.emit("error", new f("json2json", "Streaming not supported")), G();
    }
    if (".json" === w.extname) {
      try {
        const C = JSON.parse(w.contents.toString(u)), E = json2json.main(C, a, b, c, d, h);
        let F;
        if (r) {
          const q = w.path.split("\\").join("/").split(".");
          q.pop();
          t[q.join(".")] = E;
        }
        if (E && r) {
          F = json2html.main(C, void 0, b, d, h);
          const q = "." + w.stem.split(".").pop();
          w.stem = w.stem.substr(0, w.stem.length - w.extname.length);
          w.extname = q;
        } else {
          F = JSON.stringify(C, null, h.prettify ? "    " : "");
        }
        w.contents = Buffer.from(F);
      } catch (C) {
        this.emit("error", new f("json2json", C));
      }
    }
    G(null, w);
  });
};

