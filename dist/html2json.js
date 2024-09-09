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
    for (var f = [], k = 0; k < e.length; k++) {
      f.push(c(e[k]));
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
    for (var k = Array(arguments.length - 2), r = 2; r < arguments.length; r++) {
      k[r - 2] = arguments[r];
    }
    return b.prototype[e].apply(d, k);
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
    var k = 0;
    for (e = 0; e < a.length; e++) {
      f(a[e]), b[e].onLoad(function() {
        ++k == a.length && c();
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
        for (var k = [], r = 0; r < a.loadingDeps_.length; r++) {
          k.push(a.loadingDeps_[r]);
        }
        return k;
      }, setModuleState:function(k) {
        goog.moduleLoaderState_ = {type:k, moduleName:"", declareLegacyNamespace:!1};
      }, registerEs6ModuleExports:function(k, r, y) {
        y && (goog.loadedModules_[y] = {exports:r, type:goog.ModuleType.ES6, moduleId:y || ""});
      }, registerGoogModuleExports:function(k, r) {
        goog.loadedModules_[k] = {exports:r, type:goog.ModuleType.GOOG, moduleId:k};
      }, clearModuleState:function() {
        goog.moduleLoaderState_ = null;
      }, defer:function(k) {
        if (c) {
          throw Error("Cannot register with defer after the call to load.");
        }
        a.defer_(d, k);
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
        var d = function(r) {
          r.readyState && "complete" != r.readyState ? r.onload = d : (goog.Dependency.unregisterCallback_(e), a.loaded());
        };
        var e = goog.Dependency.registerCallback_(d);
        c = c ? ' nonce="' + c + '"' : "";
        var f = '<script src="' + this.path + '"' + c + (goog.Dependency.defer_ ? " defer" : "") + ' id="script-' + e + '">\x3c/script>';
        f += "<script" + c + ">";
        f = goog.Dependency.defer_ ? f + ("document.getElementById('script-" + e + "').onload = function() {\n  goog.Dependency.callback_('" + e + "', this);\n};\n") : f + ("goog.Dependency.callback_('" + e + "', document.getElementById('script-" + e + "'));");
        f += "\x3c/script>";
        b.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(f) : f);
      } else {
        var k = b.createElement("script");
        k.defer = goog.Dependency.defer_;
        k.async = !1;
        c && (k.nonce = c);
        k.onload = function() {
          k.onload = null;
          a.loaded();
        };
        k.src = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(this.path) : this.path;
        b.head.appendChild(k);
      }
    } else {
      goog.logToConsole_("Cannot use default debug loader outside of HTML documents."), "deps.js" == this.relativePath ? (goog.logToConsole_("Consider setting CLOSURE_IMPORT_SCRIPT before loading base.js, or setting CLOSURE_NO_DEPS to true."), a.loaded()) : a.pause();
    }
  }
}, goog.Es6ModuleDependency = function(a, b, c, d, e) {
  goog.Dependency.call(this, a, b, c, d, e);
}, goog.inherits(goog.Es6ModuleDependency, goog.Dependency), goog.Es6ModuleDependency.prototype.load = function(a) {
  function b(z, A) {
    var v = "", F = goog.getScriptNonce_();
    F && (v = ' nonce="' + F + '"');
    z = A ? '<script type="module" crossorigin' + v + ">" + A + "\x3c/script>" : '<script type="module" crossorigin src="' + z + '"' + v + ">\x3c/script>";
    d.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(z) : z);
  }
  function c(z, A) {
    var v = d.createElement("script");
    v.defer = !0;
    v.async = !1;
    v.type = "module";
    v.setAttribute("crossorigin", !0);
    var F = goog.getScriptNonce_();
    F && (v.nonce = F);
    A ? v.text = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScript(A) : A : v.src = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(z) : z;
    d.head.appendChild(v);
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
      var k = goog.Dependency.registerCallback_(function() {
        goog.Dependency.unregisterCallback_(k);
        a.setModuleState(goog.ModuleType.ES6);
      });
      f(void 0, 'goog.Dependency.callback_("' + k + '")');
      f(this.path, void 0);
      var r = goog.Dependency.registerCallback_(function(z) {
        goog.Dependency.unregisterCallback_(r);
        a.registerEs6ModuleExports(e.path, z, goog.moduleLoaderState_.moduleName);
      });
      f(void 0, 'import * as m from "' + this.path + '"; goog.Dependency.callback_("' + r + '", m)');
      var y = goog.Dependency.registerCallback_(function() {
        goog.Dependency.unregisterCallback_(y);
        a.clearModuleState();
        a.loaded();
      });
      f(void 0, 'goog.Dependency.callback_("' + y + '")');
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
        var z = e.contents_;
        e.contents_ = null;
        goog.globalEval(goog.CLOSURE_EVAL_PREFILTER_.createScript(z));
        if (f) {
          var A = goog.moduleLoaderState_.moduleName;
        }
      } finally {
        f && a.clearModuleState();
      }
      f && goog.global.$jscomp.require.ensure([e.getPathName()], function() {
        a.registerEs6ModuleExports(e.path, goog.global.$jscomp.require(e.getPathName()), A);
      });
      a.loaded();
    }
  }
  function d() {
    var z = goog.global.document, A = goog.Dependency.registerCallback_(function() {
      goog.Dependency.unregisterCallback_(A);
      c();
    }), v = goog.getScriptNonce_();
    v = "<script" + (v ? ' nonce="' + v + '"' : "") + ">" + goog.protectScriptTag_('goog.Dependency.callback_("' + A + '");') + "\x3c/script>";
    z.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(v) : v);
  }
  var e = this;
  if (goog.global.CLOSURE_IMPORT_SCRIPT) {
    b(), this.contents_ && goog.global.CLOSURE_IMPORT_SCRIPT("", this.contents_) ? (this.contents_ = null, a.loaded()) : a.pause();
  } else {
    var f = this.loadFlags.module == goog.ModuleType.ES6;
    this.lazyFetch_ || b();
    var k = 1 < a.pending().length;
    if (goog.Dependency.defer_ && (k || goog.isDocumentLoading_())) {
      a.defer(function() {
        c();
      });
    } else {
      var r = goog.global.document;
      k = goog.inHtmlDocument_() && ("ActiveXObject" in goog.global || goog.isEdge_());
      if (f && goog.inHtmlDocument_() && goog.isDocumentLoading_() && !k) {
        goog.Dependency.defer_ = !0;
        a.pause();
        var y = r.onreadystatechange;
        r.onreadystatechange = function() {
          "interactive" == r.readyState && (r.onreadystatechange = y, c(), a.resume());
          "function" === typeof y && y.apply(void 0, arguments);
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
;var OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN = {CAPTION:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, 
IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, MATH:!0, SVG:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DD:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, 
STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, MATH:!0, SVG:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, 
NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DT:{ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, MATH:!0, SVG:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, 
BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, P:{A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, 
MATH:!0, SVG:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, HTML:{HEAD:!0, BODY:!0}, HEAD:{TITLE:!0, BASE:!0, BGSOUND:!0, LINK:!0, META:!0, STYLE:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLETE:!0}, COLGROUP:{COL:!0}, OPTGROUP:{OPTION:!0}, OPTION:{}, TBODY:{TR:!0}, TR:{TH:!0, TD:!0}, RBC:{RB:!0, RP:!0, RT:!0}};
OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.LI = OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.TD = OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.DD;
OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.TH = OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.DT;
OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.RB = OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.RP = OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.RT = OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.P;
OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.TFOOT = OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.THEAD = OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.TBODY;
OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.RTC = OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN.RBC;
var htmlparser = {typedef:{}};
htmlparser.typedef.Handler = {};
htmlparser.DEFINE = {};
htmlparser.DEFINE.useXML = !0;
htmlparser.DEFINE.useDocTypeNode = !0;
htmlparser.DEFINE.useProcessingInstruction = !0;
htmlparser.DEFINE.useLazy = !1;
htmlparser.DEFINE.parsingStop = !1;
htmlparser.DEFINE.useCDATASection = !0;
htmlparser.DEFINE.attributePrefixSymbol = ":";
var _CHAR_KINDS = {IS_UPPERCASE_ALPHABETS:1, IS_LOWERCASE_ALPHABETS:2, IS_WHITESPACE:4}, $jscomp$scope$1759477293$7$exec = function(a, b, c, d, e, f) {
  function k() {
    b && (c.onParseText(y(a.substring(0, b))), a = a.substring(b), b = 0);
  }
  function r(B) {
    return $jscomp$scope$1759477293$5$CHARS[B] & _CHAR_KINDS.IS_UPPERCASE_ALPHABETS + _CHAR_KINDS.IS_LOWERCASE_ALPHABETS;
  }
  function y(B) {
    return B.split("&lt;").join("<").split("&gt;").join(">").split("&amp;").join("&");
  }
  function z(B, C, D) {
    for (var w = 0, g = D.length, n = 2, l, t, h; n < g && 3 !== w;) {
      t = D.charAt(n);
      switch(w) {
        case 0:
          r(t) && (w = 1, h = n);
          break;
        case 1:
          $jscomp$scope$1759477293$5$CHARS[t] & _CHAR_KINDS.IS_WHITESPACE ? w = 2 : ">" === t && (w = 3);
          1 !== w && (l = D.substring(h, n));
          break;
        case 2:
          ">" === t && (w = 3);
      }
      ++n;
    }
    return 3 === w ? A(B, C, E ? l : l.toUpperCase(), !1) && htmlparser.DEFINE.parsingStop ? $jscomp$scope$1759477293$6$PARSING_STOP : n : 0;
  }
  function A(B, C, D, w) {
    var g = 0, n = B.length;
    if (D) {
      for (g = n; 0 <= g && B[--g] !== D;) {
      }
    }
    if (0 <= g) {
      for (; g < n;) {
        if (!0 === C.onParseEndTag(B[--n], w && !OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN[B[n]], !1) && htmlparser.DEFINE.parsingStop) {
          return !0;
        }
        htmlparser.DEFINE.useXML && E && $jscomp$scope$1759477293$0$TAGS_XML[B[n]] && (E = !!C.isXHTML);
      }
      B.length = g;
    } else {
      if (!0 === C.onParseEndTag(D, !1, !0) && htmlparser.DEFINE.parsingStop) {
        return !0;
      }
    }
  }
  function v(B, C, D, w) {
    function g(N, O) {
      J[N] = $jscomp$scope$1759477293$4$ATTR_IS_NO_VAL[N.toLowerCase()] ? E ? y(O || N) : !0 : y(O || "");
      ++m;
    }
    function n() {
      (G = "/>" === w.substr(h, 2)) && ++h;
      return G;
    }
    for (var l = 0, t = w.length, h = 1, J = {}, m = 0, G = !1, H, u, x, q, P, L; h < t && 9 > l;) {
      u = w.charAt(h);
      switch(l) {
        case 0:
          r(u) && (l = 1, x = h);
          break;
        case 1:
          if ($jscomp$scope$1759477293$5$CHARS[u] & _CHAR_KINDS.IS_WHITESPACE) {
            l = 2, H = w.substring(x, h);
          } else if (">" === u || n()) {
            l = 9, H = w.substring(x, h);
          }
          break;
        case 2:
          if (htmlparser.DEFINE.attributePrefixSymbol && u === htmlparser.DEFINE.attributePrefixSymbol) {
            l = 3, x = h;
          } else if (r(u)) {
            l = 4, x = h;
          } else if (">" === u || n()) {
            l = 9;
          }
          break;
        case 3:
          htmlparser.DEFINE.attributePrefixSymbol && (l = r(u) ? 4 : 9);
          break;
        case 4:
          if ("=" === u) {
            l = 6, q = w.substring(x, h);
          } else if ($jscomp$scope$1759477293$5$CHARS[u] & _CHAR_KINDS.IS_WHITESPACE) {
            l = 5, q = w.substring(x, h);
          } else if (">" === u || n()) {
            l = 9, g(w.substring(x, h));
          }
          break;
        case 5:
          if (htmlparser.DEFINE.attributePrefixSymbol && u === htmlparser.DEFINE.attributePrefixSymbol) {
            l = 3, g(q), x = h;
          } else if (r(u)) {
            l = 4, g(q), x = h;
          } else if ("=" === u) {
            l = 6;
          } else if (">" === u || n()) {
            l = 9, g(q);
          }
          break;
        case 6:
          '"' === u || "'" === u ? (l = 7, P = u, x = h + 1) : $jscomp$scope$1759477293$5$CHARS[u] & _CHAR_KINDS.IS_WHITESPACE || (l = 8, x = h);
          L = !1;
          break;
        case 7:
          L || u !== P || (l = 2, g(q, w.substring(x, h)));
          L = "\\" === u && !L;
          break;
        case 8:
          $jscomp$scope$1759477293$5$CHARS[u] & _CHAR_KINDS.IS_WHITESPACE ? l = 2 : ">" === u ? l = 9 : !$jscomp$scope$1759477293$3$ATTR_VAL_IS_URI[q] && n() && (l = 9), 8 !== l && g(q, w.substring(x, h));
      }
      ++h;
    }
    if (9 === l) {
      l = H.toUpperCase();
      htmlparser.DEFINE.useXML && !E && (E = !!$jscomp$scope$1759477293$0$TAGS_XML[H]);
      if (!E) {
        for (; C;) {
          if (OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN[C] && !OMITTABLE_END_TAG_ELEMENTS_WITH_CHILDREN[C][l]) {
            if (A(B, D, C, !1) && htmlparser.DEFINE.parsingStop) {
              return $jscomp$scope$1759477293$6$PARSING_STOP;
            }
            C = B[B.length - 1];
          } else {
            break;
          }
        }
      }
      (G = G || !!$jscomp$scope$1759477293$1$TAGS_EMPTY[l]) || (B[B.length] = E ? H : l);
      return !0 === D.onParseStartTag(E ? H : l, m ? J : null, G, h) && htmlparser.DEFINE.parsingStop ? $jscomp$scope$1759477293$6$PARSING_STOP : h;
    }
    return 0;
  }
  var F = d ? +new Date() : 0, K = c.intervalMs || 16;
  f = f || [];
  for (var E = htmlparser.DEFINE.useXML && !!c.isXHTML, M = a.length - b, p, I; a;) {
    (p = I = f[f.length - 1]) && E && (I = p.toUpperCase());
    if ($jscomp$scope$1759477293$2$TAGS_SPECIAL[I]) {
      if ("PLAINTEXT" === I) {
        c.onParseText(y(a)), a = "";
      } else {
        if (p = a.toUpperCase().indexOf("</" + I), 0 <= p) {
          b = p;
          k();
          p = z(f, c, a);
          if (p === $jscomp$scope$1759477293$6$PARSING_STOP && htmlparser.DEFINE.parsingStop) {
            return;
          }
          if (p) {
            a = a.substring(p);
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
      if (k(), p = a.indexOf(">"), -1 !== p) {
        c.onParseDocType(a.substring(10, p)), a = a.substring(p + 1);
      } else {
        c.onParseError(a);
        return;
      }
    } else if (htmlparser.DEFINE.useProcessingInstruction && a.indexOf("<?") === b) {
      if (k(), p = a.indexOf("?>"), -1 !== p) {
        c.onParseProcessingInstruction(y(a.substring(2, p))), a = a.substring(p + 2);
      } else {
        c.onParseError(a);
        return;
      }
    } else if (htmlparser.DEFINE.useCDATASection && a.indexOf("<![CDATA[") === b) {
      if (k(), p = a.indexOf("]]\x3e"), -1 !== p) {
        c.onParseCDATASection(y(a.substring(9, p))), a = a.substring(p + 3);
      } else {
        c.onParseError(a);
        return;
      }
    } else if (a.indexOf("\x3c!--") === b) {
      if (k(), p = a.indexOf("--\x3e"), -1 !== p) {
        c.onParseComment(y(a.substring(4, p))), a = a.substring(p + 3);
      } else {
        c.onParseError(a);
        return;
      }
    } else if (a.indexOf("</") === b) {
      k();
      p = z(f, c, a);
      if (htmlparser.DEFINE.parsingStop && p === $jscomp$scope$1759477293$6$PARSING_STOP) {
        return;
      }
      if (p) {
        a = a.substring(p);
      } else {
        c.onParseError(a);
        return;
      }
    } else if ("<" === a.charAt(b) && r(a.charAt(b + 1))) {
      k();
      p = v(f, p, c, a);
      if (htmlparser.DEFINE.parsingStop && p === $jscomp$scope$1759477293$6$PARSING_STOP) {
        return;
      }
      if (p) {
        a = a.substring(p);
      } else {
        c.onParseError(a);
        return;
      }
    } else {
      p = a.indexOf("<", b), -1 === p ? (c.onParseText(y(a)), a = "") : b < p ? b = p : ++b;
    }
    p = a.length - b;
    if (p === M) {
      c.onParseError(a);
      return;
    }
    if (htmlparser.DEFINE.useLazy && d && a && F + K <= +new Date()) {
      c.onParseProgress(1 - p / e, $jscomp$scope$1759477293$7$exec, [a, b, c, d, e, f]);
      return;
    }
    M = p;
  }
  k();
  A(f, c, "", !0);
  htmlparser.DEFINE.useLazy && d && c.onComplete();
}, $jscomp$scope$1759477293$0$TAGS_XML = {xml:!0, svg:!0, math:!0}, $jscomp$scope$1759477293$1$TAGS_EMPTY = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, COMMAND:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0}, $jscomp$scope$1759477293$2$TAGS_SPECIAL = {SCRIPT:!0, STYLE:!0, PLAINTEXT:!0, XMP:!0, TEXTAREA:!0}, $jscomp$scope$1759477293$3$ATTR_VAL_IS_URI = {action:!0, archive:!0, background:!0, cite:!0, classid:!0, 
codebase:!0, data:!0, href:!0, longdesc:!0, profile:!0, src:!0, usemap:!0}, $jscomp$scope$1759477293$4$ATTR_IS_NO_VAL = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, $jscomp$scope$1759477293$5$CHARS = {a:2, b:2, c:2, d:2, e:2, f:2, g:2, h:2, i:2, j:2, k:2, l:2, m:2, n:2, o:2, p:2, q:2, r:2, s:2, t:2, u:2, v:2, w:2, x:2, y:2, z:2, A:1, B:1, C:1, D:1, E:1, F:1, G:1, H:1, I:1, J:1, K:1, L:1, 
M:1, N:1, O:1, P:1, Q:1, R:1, S:1, T:1, U:1, V:1, W:1, X:1, Y:1, Z:1, "\b":4, "\f":4, "\n":4, "\r":4, "\t":4, " ":4}, $jscomp$scope$1759477293$6$PARSING_STOP = 1;
htmlparser.exec = function(a, b) {
  $jscomp$scope$1759477293$7$exec(a, 0, b, htmlparser.DEFINE.useLazy && !!b.onComplete, a.length);
};
var htmljson = {NODE_TYPE:{ELEMENT_NODE:1, TEXT_NODE:3, CDATA_SECTION:4, PROCESSING_INSTRUCTION:7, COMMENT_NODE:8, DOCUMENT_NODE:9, DOCUMENT_FRAGMENT_NODE:11, COND_CMT_HIDE_LOWER:13, COND_CMT_SHOW_LOWER_START:14, COND_CMT_SHOW_LOWER_END:15, NETSCAPE4_COND_CMT_HIDE_LOWER:16, ELEMENT_START_TAG:17, ELEMENT_END_TAG:18}};
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
  var f = b[1], k = b.slice(2);
  a = k.length ? a(f, k) : a(f);
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
;function _canHasChildren(a) {
  return a._nodeType === htmljson.NODE_TYPE.ELEMENT_NODE || a._nodeType === htmljson.NODE_TYPE.ELEMENT_START_TAG || _isDocOrDocFragment(a);
}
function _isDocOrDocFragment(a) {
  return a._nodeType === htmljson.NODE_TYPE.DOCUMENT_NODE || a._nodeType === htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE;
}
var VNode = function(a, b, c, d, e) {
  if (htmljson.DEFINE.DEBUG && a) {
    switch(a._nodeType) {
      case htmljson.NODE_TYPE.TEXT_NODE:
      case htmljson.NODE_TYPE.COMMENT_NODE:
      case htmljson.NODE_TYPE.CDATA_SECTION:
      case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION:
      case htmljson.NODE_TYPE.ELEMENT_END_TAG:
        throw "nodeType:" + a._nodeType + " \u306f\u89aa\u306b\u306a\u308b\u3053\u3068\u304c\u51fa\u6765\u307e\u305b\u3093!";
    }
    if (_isDocOrDocFragment(this)) {
      throw "nodeType:" + a._nodeType + " \u306f\u5b50\u306b\u306a\u308b\u3053\u3068\u304c\u51fa\u6765\u307e\u305b\u3093!";
    }
  }
  this._parent = a;
  this._nodeType = c;
  if (a) {
    if (a._childNodes || (a._childNodes = []), a = a._childNodes, 0 <= b && b < a.length) {
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
      this._attrs = e || null;
    case htmljson.NODE_TYPE.ELEMENT_END_TAG:
      this._tagName = d;
      break;
    case htmljson.NODE_TYPE.TEXT_NODE:
    case htmljson.NODE_TYPE.COMMENT_NODE:
    case htmljson.NODE_TYPE.DOCUMENT_NODE:
    case htmljson.NODE_TYPE.CDATA_SECTION:
    case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION:
      this._data = d;
  }
};
VNode.prototype.getJSON = function() {
  var a = [this._nodeType], b = this._childNodes, c;
  switch(this._nodeType) {
    case htmljson.NODE_TYPE.ELEMENT_NODE:
      a.length = 0;
    case htmljson.NODE_TYPE.ELEMENT_START_TAG:
      a.push(this._tagName);
      m_isAttributes(this._attrs) && a.push(this._attrs);
      break;
    case htmljson.NODE_TYPE.ELEMENT_END_TAG:
      a[1] = this._tagName;
      break;
    case htmljson.NODE_TYPE.TEXT_NODE:
    case htmljson.NODE_TYPE.COMMENT_NODE:
    case htmljson.NODE_TYPE.DOCUMENT_NODE:
    case htmljson.NODE_TYPE.CDATA_SECTION:
    case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION:
      a[1] = this._data;
  }
  if (b) {
    var d = 0;
    for (c = b.length; d < c; ++d) {
      a.push(b[d].getJSON());
    }
  }
  return a;
};
VNode.prototype.getNodeType = function() {
  return this._nodeType === htmljson.NODE_TYPE.ELEMENT_START_TAG ? htmljson.NODE_TYPE.ELEMENT_NODE : this._nodeType;
};
VNode.prototype.setNodeType = function(a) {
  if (htmljson.DEFINE.DEBUG && (a !== htmljson.NODE_TYPE.DOCUMENT_NODE || this._nodeType !== htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE)) {
    throw "nodeType \u306e\u5909\u66f4\u306f DOCUMENT_FRAGMENT_NODE -> DOCUMENT_NODE \u3060\u3051\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u307e\u3059!";
  }
  this._nodeType = a;
};
VNode.prototype.close = function() {
  if (htmljson.DEFINE.DEBUG && this._nodeType !== htmljson.NODE_TYPE.ELEMENT_START_TAG) {
    throw "close() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  this._nodeType = htmljson.NODE_TYPE.ELEMENT_NODE;
};
VNode.prototype.closed = function() {
  return this._nodeType !== htmljson.NODE_TYPE.ELEMENT_START_TAG;
};
VNode.prototype.isValid = function() {
  var a = this._childNodes, b;
  if (a) {
    var c = 0;
    for (b = a.length; c < b; ++c) {
      if (!a[c].isValid()) {
        return !1;
      }
    }
  }
  return this._nodeType !== htmljson.NODE_TYPE.ELEMENT_START_TAG && this._nodeType !== htmljson.NODE_TYPE.ELEMENT_END_TAG;
};
VNode.prototype.getData = function() {
  switch(this._nodeType) {
    case htmljson.NODE_TYPE.TEXT_NODE:
    case htmljson.NODE_TYPE.CDATA_SECTION:
    case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION:
    case htmljson.NODE_TYPE.COMMENT_NODE:
    case htmljson.NODE_TYPE.DOCUMENT_NODE:
      return this._data;
    default:
      if (htmljson.DEFINE.DEBUG) {
        throw "getData() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
      }
  }
};
VNode.prototype.setData = function(a) {
  switch(this._nodeType) {
    case htmljson.NODE_TYPE.TEXT_NODE:
    case htmljson.NODE_TYPE.CDATA_SECTION:
    case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION:
    case htmljson.NODE_TYPE.COMMENT_NODE:
    case htmljson.NODE_TYPE.DOCUMENT_NODE:
      this._data = a;
      break;
    default:
      if (htmljson.DEFINE.DEBUG) {
        throw "setData() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
      }
  }
};
VNode.prototype.getAttributes = function() {
  if (htmljson.DEFINE.DEBUG && this._nodeType !== htmljson.NODE_TYPE.ELEMENT_NODE && this._nodeType !== htmljson.NODE_TYPE.ELEMENT_START_TAG) {
    throw "getAttributes() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  return m_isAttributes(this._attrs) ? this._attrs : null;
};
VNode.prototype.getTagName = function() {
  if (htmljson.DEFINE.DEBUG && this._nodeType !== htmljson.NODE_TYPE.ELEMENT_NODE && this._nodeType !== htmljson.NODE_TYPE.ELEMENT_START_TAG && this._nodeType !== htmljson.NODE_TYPE.ELEMENT_END_TAG) {
    throw "getTagName() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  return this._tagName;
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
  if (htmljson.DEFINE.DEBUG && (this._nodeType === htmljson.NODE_TYPE.ELEMENT_START_TAG || _isDocOrDocFragment(this))) {
    throw "getNextNode() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  return this._parent && this._parent.getChildNodeAt(this.getMyIndex() + 1);
};
VNode.prototype.getChildNodeLength = function() {
  if (htmljson.DEFINE.DEBUG && !_canHasChildren(this)) {
    throw "getChildNodeLength() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  return this._childNodes && this._childNodes.length;
};
VNode.prototype.getFirstChild = function() {
  if (htmljson.DEFINE.DEBUG && !_canHasChildren(this)) {
    throw "getFirstChild() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  return this.getChildNodeAt(0);
};
VNode.prototype.getLastChild = function() {
  if (htmljson.DEFINE.DEBUG && !_canHasChildren(this)) {
    throw "getLastChild() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  return this.getChildNodeAt(this.getChildNodeLength() - 1);
};
VNode.prototype.getChildNodeAt = function(a) {
  if (htmljson.DEFINE.DEBUG && !_canHasChildren(this)) {
    throw "getChildNodeAt() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  return this._childNodes && this._childNodes[a] || null;
};
VNode.prototype.getMyIndex = function() {
  if (htmljson.DEFINE.DEBUG && _isDocOrDocFragment(this)) {
    throw "getMyIndex() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  return this._parent ? this._parent._childNodes.indexOf(this) : -1;
};
VNode.prototype.remove = function() {
  if (htmljson.DEFINE.DEBUG && _isDocOrDocFragment(this)) {
    throw "remove() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  var a = this.getMyIndex();
  0 <= a && (this._parent._childNodes.splice(a, 1), this._parent = null);
};
VNode.prototype.empty = function() {
  if (htmljson.DEFINE.DEBUG && !_canHasChildren(this)) {
    throw "empty() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  var a = this._childNodes, b;
  if (a) {
    for (b = a.length; b;) {
      a[--b].remove();
    }
  }
};
VNode.prototype.insertBefore = function(a) {
  if (htmljson.DEFINE.DEBUG && _isDocOrDocFragment(this)) {
    throw "insertBefore() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  this._parent && _insertAt(this._parent, this.getMyIndex(), arguments);
};
VNode.prototype.insertFirst = function(a) {
  _insertAt(this, 0, arguments);
};
VNode.prototype.insertAt = function(a, b) {
  var c = [], d;
  for (d = arguments.length; 1 < d;) {
    c[d - 2] = arguments[--d];
  }
  _insertAt(this, a, c);
};
VNode.prototype.insertLast = function(a) {
  _insertAt(this, this.getChildNodeLength(), arguments);
};
VNode.prototype.insertAfter = function(a) {
  if (htmljson.DEFINE.DEBUG && _isDocOrDocFragment(this)) {
    throw "insertAfter() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  this._parent && _insertAt(this._parent, this.getMyIndex() + 1, arguments);
};
function _insertAt(a, b, c) {
  var d = a._childNodes = a._childNodes || [], e = d.length, f = c.length;
  for (b = b < e ? b : e; f;) {
    if (htmljson.DEFINE.DEBUG && k && c[f - 1]._nodeType === htmljson.NODE_TYPE.ELEMENT_START_TAG) {
      throw "\u9589\u3058\u30bf\u30b0\u306e\u7121\u3044 Element \u306e\u6b21\u306b Node \u3092\u633f\u5165\u3059\u308b\u3053\u3068\u306f\u51fa\u6765\u307e\u305b\u3093!";
    }
    var k = c[--f];
    if (htmljson.DEFINE.DEBUG && k._nodeType === htmljson.NODE_TYPE.DOCUMENT_NODE) {
      throw "_insertAt() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
    }
    k._nodeType === htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE ? k.getChildNodeLength() && _insertAt(a, b, k._childNodes) : (k.remove(), d.splice(b, 0, k), k._parent = a);
  }
}
VNode.prototype.insertElementBefore = function(a, b, c) {
  if (htmljson.DEFINE.DEBUG && _isDocOrDocFragment(this)) {
    throw "insertElementBefore() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  return this._parent ? this._parent.insertElementAt(this.getMyIndex(), a, b, c) : null;
};
VNode.prototype.insertElementFirst = function(a, b, c) {
  return this.insertElementAt(0, a, b, c);
};
VNode.prototype.insertElementAt = function(a, b, c, d) {
  a = new VNode(this, a, htmljson.NODE_TYPE.ELEMENT_NODE, b, c);
  null != d && a.insertNodeFirst(htmljson.NODE_TYPE.TEXT_NODE, d);
  return a;
};
VNode.prototype.insertElementLast = function(a, b, c) {
  return this.insertElementAt(this.getChildNodeLength(), a, b, c);
};
VNode.prototype.insertElementAfter = function(a, b, c) {
  if (htmljson.DEFINE.DEBUG && _isDocOrDocFragment(this)) {
    throw "insertElementAfter() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  return this._parent ? this._parent.insertElementAt(this.getMyIndex() + 1, a, b, c) : null;
};
VNode.prototype.insertNodeBefore = function(a, b, c) {
  if (htmljson.DEFINE.DEBUG && _isDocOrDocFragment(this)) {
    throw "insertNodeBefore() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  return this._parent ? this._parent.insertNodeAt(this.getMyIndex(), a, b, c) : null;
};
VNode.prototype.insertNodeFirst = function(a, b, c) {
  return this.insertNodeAt(0, a, b, c);
};
VNode.prototype.insertNodeAt = function(a, b, c, d) {
  return new VNode(this, a, b, c, d);
};
VNode.prototype.insertNodeLast = function(a, b, c) {
  return this.insertNodeAt(this.getChildNodeLength(), a, b, c);
};
VNode.prototype.insertNodeAfter = function(a, b, c) {
  if (htmljson.DEFINE.DEBUG && (_isDocOrDocFragment(this) || a === htmljson.NODE_TYPE.ELEMENT_START_TAG)) {
    throw "insertNodeAfter() \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044 nodeType \u3067\u3059!";
  }
  return this._parent ? this._parent.insertNodeAt(this.getMyIndex() + 1, a, b, c) : null;
};
htmljson.createVNodeFromHTML = function(a, b) {
  b = new Handler(b);
  htmlparser.exec(a, b);
  return b._rootNode;
};
function Handler(a) {
  this._allowInvalidTree = a;
  this._currentNode = this._rootNode = new VNode(null, 0, htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE);
}
Handler.prototype.onParseError = function(a) {
  throw a;
};
Handler.prototype.onParseDocType = function(a) {
  this._rootNode.setNodeType(htmljson.NODE_TYPE.DOCUMENT_NODE);
  this._rootNode.setData(a);
};
Handler.prototype.onParseStartTag = function(a, b, c, d) {
  c ? this._currentNode.insertElementLast(a, b) : this._currentNode = this._currentNode.insertNodeLast(htmljson.NODE_TYPE.ELEMENT_START_TAG, a, b);
};
Handler.prototype.onParseEndTag = function(a, b, c) {
  if (c) {
    this._allowInvalidTree && this._currentNode.insertNodeLast(htmljson.NODE_TYPE.ELEMENT_END_TAG, a);
  } else if (!b || !this._allowInvalidTree) {
    if (a === this._currentNode.getTagName()) {
      this._currentNode.close(), this._currentNode = this._currentNode.getParent();
    } else {
      throw "End tag error! " + a;
    }
  }
};
Handler.prototype.onParseText = function(a) {
  this._currentNode.insertNodeLast(htmljson.NODE_TYPE.TEXT_NODE, a);
};
Handler.prototype.onParseComment = function(a) {
  this._currentNode.insertNodeLast(htmljson.NODE_TYPE.COMMENT_NODE, a);
};
Handler.prototype.onParseCDATASection = function(a) {
  this._currentNode.insertNodeLast(htmljson.NODE_TYPE.CDATA_SECTION, a);
};
Handler.prototype.onParseProcessingInstruction = function(a) {
  this._currentNode.insertNodeLast(htmljson.NODE_TYPE.PROCESSING_INSTRUCTION, a);
};
const TRIM_LINEBREAKS = {script:!0, style:!0, textarea:!0};
var html2json = function(a, b, c) {
  function d(g, n, l, t) {
    var h;
    switch(g.getNodeType()) {
      case htmljson.NODE_TYPE.ELEMENT_NODE:
      case htmljson.NODE_TYPE.ELEMENT_START_TAG:
        var J = {};
        t = g.getTagName().toLowerCase();
        var m = "pre" === t;
        var G = g.getAttributes(), H = 0, u = "";
        if (G) {
          for (h in G) {
            var x = m_ATTRS_NO_VALUE[h] ? 1 : G[h];
            if ("id" === h) {
              t += "#" + x;
            } else if ("class" === h) {
              u = "." + x;
            } else {
              if (h.startsWith(C)) {
                var q = e(x);
                q.args ? (x = [q.name], F.apply(x, q.args)) : x = q.name;
              } else {
                m_isNumberString(x) && (x = +x);
              }
              J[h] = x;
              ++H;
            }
          }
        }
        t += u;
        if (m && K) {
          for (; h = k(g);) {
            if (y(h.getData())) {
              h.setData(z(h.getData(), "\n"));
              break;
            } else {
              h.remove();
            }
          }
          for (; h = r(g);) {
            if (y(h.getData())) {
              h.setData(A(h.getData(), "\n"));
              break;
            } else {
              h.remove();
            }
          }
        }
        h = H ? [t, J] : [t];
        for (q = 0; q < g.getChildNodeLength(); ++q) {
          d(g.getChildNodeAt(q), h, m || l, TRIM_LINEBREAKS[t]);
        }
        n.push(h);
        g.closed() || h.unshift(htmljson.NODE_TYPE.ELEMENT_START_TAG);
        break;
      case htmljson.NODE_TYPE.ELEMENT_END_TAG:
        n.push([htmljson.NODE_TYPE.ELEMENT_END_TAG, g.getTagName().toLowerCase()]);
        break;
      case htmljson.NODE_TYPE.TEXT_NODE:
        m = g.getData();
        if (!l && K) {
          if (t) {
            m = A(z(m, "\n"), "\n");
          } else {
            m = m.split("\r\n").join("\n");
            D && (m = m.replace(/([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])\s([\uFF01-\uFF60\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF])/g, "$1$2"));
            for (m = m.split("\t").join(" "); 0 <= m.indexOf("\n\n");) {
              m = m.split("\n\n").join("\n");
            }
            m = A(m, "\n");
            E && (q = "\n" === m.charAt(0) && /\n[ ]*$/.test(m));
            for (m = m.split("\n").join(" "); 0 <= m.indexOf("  ");) {
              m = m.split("  ").join(" ");
            }
            q && (m = A(z(m, " "), " "));
            m = m.split("\\u0020").join(" ").split("&#x20;").join(" ");
          }
        }
        m && n.push(m_tryToNumber(m));
        break;
      case htmljson.NODE_TYPE.CDATA_SECTION:
        m = g.getData();
        M && n.push([htmljson.NODE_TYPE.CDATA_SECTION, m_tryToNumber(m)]);
        break;
      case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION:
        m = g.getData();
        q = e(m);
        h = [htmljson.NODE_TYPE.PROCESSING_INSTRUCTION, q.name];
        q.args && F.apply(h, q.args);
        n.push(h);
        break;
      case htmljson.NODE_TYPE.COMMENT_NODE:
        m = g.getData();
        if (m.startsWith("[if") && 0 < m.indexOf("<![endif]")) {
          g = htmljson.createVNodeFromHTML(f(m, ">", "<![endif]", !0), !0);
          h = [htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER, f(m, "[", "]", !1)];
          for (q = 0; q < g.getChildNodeLength(); ++q) {
            d(g.getChildNodeAt(q), h, l, t);
          }
          (2 < h.length || p) && n.push(h);
        } else if (m.startsWith("{") && 2 < m.indexOf("};")) {
          g = htmljson.createVNodeFromHTML(f(m, "};", "--\x3e", !0), !0);
          h = [htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER, m.substring(0, m.indexOf("};"))];
          for (q = 0; q < g.getChildNodeLength(); ++q) {
            d(g.getChildNodeAt(q), h, l, t);
          }
          (2 < h.length || p) && n.push(h);
        } else {
          m.startsWith("[if") && 0 < m.indexOf("><!") ? (n.push([htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START, f(m, "[", "]", !1)]), w = !0) : "<![endif]" === m && w ? (n.push([htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_END]), w = !1) : p && n.push([htmljson.NODE_TYPE.COMMENT_NODE, m_tryToNumber(m)]);
        }
        break;
      case htmljson.NODE_TYPE.DOCUMENT_NODE:
        m = g.getData();
        K && (m = m.split("\n").join(" ").split("  ").join(" "));
        h = [htmljson.NODE_TYPE.DOCUMENT_NODE, m];
        n.push(h);
        for (q = 0; q < g.getChildNodeLength(); ++q) {
          d(g.getChildNodeAt(q), h, !1, !1);
        }
        break;
      case htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE:
        for (h = [htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE], n.push(h), q = 0; q < g.getChildNodeLength(); ++q) {
          d(g.getChildNodeAt(q), h, l, t);
        }
    }
  }
  function e(g) {
    var n = g.indexOf(I);
    var l = -1 === n ? g : g.substr(0, n);
    l = A(z(l, " "), " ");
    g = -1 === n ? [] : JSON.parse("[" + g.substring(n + I.length, g.lastIndexOf(B) - 2) + "]");
    return g.length ? {name:l, args:g} : {name:l};
  }
  function f(g, n, l, t) {
    n = g.indexOf(n) + n.length;
    l = t ? g.lastIndexOf(l) : g.indexOf(l, n);
    return g.substring(n, l);
  }
  function k(g) {
    for (var n = 0, l = g.getChildNodeLength(), t; n < l; ++n) {
      if (t = g.getChildNodeAt(n), 1 === t.getNodeType() && (t = k(t)), t && 3 === t.getNodeType()) {
        return t;
      }
    }
  }
  function r(g) {
    for (var n = g.getChildNodeLength(), l; n;) {
      if (l = g.getChildNodeAt(--n), 1 === l.getNodeType() && (l = r(l)), l && 3 === l.getNodeType()) {
        return l;
      }
    }
  }
  function y(g) {
    return g.split("\n").join("").split(" ").join("").split("\t").join("");
  }
  function z(g, n) {
    for (; g.charAt(0) === n;) {
      g = g.substr(1);
    }
    return g;
  }
  function A(g, n) {
    for (; g.charAt(g.length - 1) === n;) {
      g = g.substr(0, g.length - 1);
    }
    return g;
  }
  const v = [], F = v.push;
  a = htmljson.createVNodeFromHTML(a, b);
  c = c || {};
  const K = -1 === ["none", !1].indexOf(c.trimWhitespace), E = "agressive" === c.trimWhitespace, M = !!c.keepCDATASections, p = !!c.keepComments;
  b = c.argumentBrackets || "()";
  const I = b.substr(0, b.length / 2), B = b.substr(b.length), C = c.instructionAttrPrefix || htmljson.DEFINE.INSTRUCTION_ATTR_PREFIX, D = !!c.removeLineBreaksBetweenFullWidth;
  let w = !1;
  d(a, v, !1, !1);
  m_normalizeTextNodes(v[0]);
  return v[0];
};
html2json.module = {};
module.exports = html2json;
html2json.DOCUMENT_NODE = htmljson.NODE_TYPE.DOCUMENT_NODE;
html2json.DOCUMENT_FRAGMENT_NODE = htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE;
html2json.ELEMENT_NODE = htmljson.NODE_TYPE.ELEMENT_NODE;
html2json.TEXT_NODE = htmljson.NODE_TYPE.TEXT_NODE;
html2json.CDATA_SECTION = htmljson.NODE_TYPE.CDATA_SECTION;
html2json.PROCESSING_INSTRUCTION = htmljson.NODE_TYPE.PROCESSING_INSTRUCTION;
html2json.COMMENT_NODE = htmljson.NODE_TYPE.COMMENT_NODE;
html2json.COND_CMT_HIDE_LOWER = htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER;
html2json.COND_CMT_SHOW_LOWER_START = htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START;
html2json.NETSCAPE4_COND_CMT_HIDE_LOWER = htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER;
html2json.ELEMENT_START_TAG = htmljson.NODE_TYPE.ELEMENT_START_TAG;
html2json.ELEMENT_END_TAG = htmljson.NODE_TYPE.ELEMENT_END_TAG;
html2json.gulp = function(a) {
  const b = require("plugin-error"), c = require("through2"), d = a && "object" === typeof a ? a : {};
  return c(function(e, f, k) {
    if (e.isNull()) {
      return k();
    }
    if (e.isStream()) {
      return this.emit("error", new b("html2json", "Streaming not supported")), k();
    }
    const r = performance.now();
    if (".html" === e.extname || ".htm" === e.extname || ".xhtml" === e.extname || ".php" === e.extname) {
      try {
        e.contents = Buffer.from(JSON.stringify(html2json(e.contents.toString(f), !1, a), null, d.prettify ? "    " : "")), console.log(e.path.split(process.cwd())[1].split("\\").join("/"), performance.now() - r), e.extname = ".json", this.push(e);
      } catch (y) {
        this.emit("error", new b("html2json", y));
      }
    } else {
      this.push(e);
    }
    k();
  });
};

