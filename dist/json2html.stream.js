(function(require, String, Buffer, JSON, undefined) {
  var COMPILED = !0, goog = goog || {};
  goog.global = this || self;
  goog.exportPath_ = function(a, b, c, d) {
    a = a.split(".");
    d = d || goog.global;
    a[0] in d || "undefined" == typeof d.execScript || d.execScript("var " + a[0]);
    for (var e; a.length && (e = a.shift());) {
      if (a.length || void 0 === b) {
        d = d[e] && d[e] !== Object.prototype[e] ? d[e] : d[e] = {};
      } else if (!c && goog.isObject(b) && goog.isObject(d[e])) {
        for (var f in b) {
          b.hasOwnProperty(f) && (d[e][f] = b[f]);
        }
      } else {
        d[e] = b;
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
  goog.UID_PROPERTY_ = "closure_uid_" + (1E9 * Math.random() >>> 0);
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
      for (var f = [], n = 0; n < e.length; n++) {
        f.push(c(e[n]));
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
      for (var n = Array(arguments.length - 2), p = 2; p < arguments.length; p++) {
        n[p - 2] = arguments[p];
      }
      return b.prototype[e].apply(d, n);
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
      var n = 0;
      for (e = 0; e < a.length; e++) {
        f(a[e]), b[e].onLoad(function() {
          ++n == a.length && c();
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
          for (var n = [], p = 0; p < a.loadingDeps_.length; p++) {
            n.push(a.loadingDeps_[p]);
          }
          return n;
        }, setModuleState:function(n) {
          goog.moduleLoaderState_ = {type:n, moduleName:"", declareLegacyNamespace:!1};
        }, registerEs6ModuleExports:function(n, p, h) {
          h && (goog.loadedModules_[h] = {exports:p, type:goog.ModuleType.ES6, moduleId:h || ""});
        }, registerGoogModuleExports:function(n, p) {
          goog.loadedModules_[n] = {exports:p, type:goog.ModuleType.GOOG, moduleId:n};
        }, clearModuleState:function() {
          goog.moduleLoaderState_ = null;
        }, defer:function(n) {
          if (c) {
            throw Error("Cannot register with defer after the call to load.");
          }
          a.defer_(d, n);
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
    } else if (goog.inHtmlDocument_()) {
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
        var d = function(p) {
          p.readyState && "complete" != p.readyState ? p.onload = d : (goog.Dependency.unregisterCallback_(e), a.loaded());
        };
        var e = goog.Dependency.registerCallback_(d);
        c = c ? ' nonce="' + c + '"' : "";
        var f = '<script src="' + this.path + '"' + c + (goog.Dependency.defer_ ? " defer" : "") + ' id="script-' + e + '">\x3c/script>';
        f += "<script" + c + ">";
        f = goog.Dependency.defer_ ? f + ("document.getElementById('script-" + e + "').onload = function() {\n  goog.Dependency.callback_('" + e + "', this);\n};\n") : f + ("goog.Dependency.callback_('" + e + "', document.getElementById('script-" + e + "'));");
        f += "\x3c/script>";
        b.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(f) : f);
      } else {
        var n = b.createElement("script");
        n.defer = goog.Dependency.defer_;
        n.async = !1;
        c && (n.nonce = c);
        n.onload = function() {
          n.onload = null;
          a.loaded();
        };
        n.src = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(this.path) : this.path;
        b.head.appendChild(n);
      }
    } else {
      goog.logToConsole_("Cannot use default debug loader outside of HTML documents."), "deps.js" == this.relativePath ? (goog.logToConsole_("Consider setting CLOSURE_IMPORT_SCRIPT before loading base.js, or setting CLOSURE_NO_DEPS to true."), a.loaded()) : a.pause();
    }
  }, goog.Es6ModuleDependency = function(a, b, c, d, e) {
    goog.Dependency.call(this, a, b, c, d, e);
  }, goog.inherits(goog.Es6ModuleDependency, goog.Dependency), goog.Es6ModuleDependency.prototype.load = function(a) {
    function b(m, g) {
      var q = "", l = goog.getScriptNonce_();
      l && (q = ' nonce="' + l + '"');
      m = g ? '<script type="module" crossorigin' + q + ">" + g + "\x3c/script>" : '<script type="module" crossorigin src="' + m + '"' + q + ">\x3c/script>";
      d.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(m) : m);
    }
    function c(m, g) {
      var q = d.createElement("script");
      q.defer = !0;
      q.async = !1;
      q.type = "module";
      q.setAttribute("crossorigin", !0);
      var l = goog.getScriptNonce_();
      l && (q.nonce = l);
      g ? q.text = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScript(g) : g : q.src = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(m) : m;
      d.head.appendChild(q);
    }
    if (goog.global.CLOSURE_IMPORT_SCRIPT) {
      goog.global.CLOSURE_IMPORT_SCRIPT(this.path) ? a.loaded() : a.pause();
    } else if (goog.inHtmlDocument_()) {
      var d = goog.global.document, e = this;
      if (goog.isDocumentLoading_()) {
        var f = b;
        goog.Dependency.defer_ = !0;
      } else {
        f = c;
      }
      var n = goog.Dependency.registerCallback_(function() {
        goog.Dependency.unregisterCallback_(n);
        a.setModuleState(goog.ModuleType.ES6);
      });
      f(void 0, 'goog.Dependency.callback_("' + n + '")');
      f(this.path, void 0);
      var p = goog.Dependency.registerCallback_(function(m) {
        goog.Dependency.unregisterCallback_(p);
        a.registerEs6ModuleExports(e.path, m, goog.moduleLoaderState_.moduleName);
      });
      f(void 0, 'import * as m from "' + this.path + '"; goog.Dependency.callback_("' + p + '", m)');
      var h = goog.Dependency.registerCallback_(function() {
        goog.Dependency.unregisterCallback_(h);
        a.clearModuleState();
        a.loaded();
      });
      f(void 0, 'goog.Dependency.callback_("' + h + '")');
    } else {
      goog.logToConsole_("Cannot use default debug loader outside of HTML documents."), a.pause();
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
          var m = e.contents_;
          e.contents_ = null;
          goog.globalEval(goog.CLOSURE_EVAL_PREFILTER_.createScript(m));
          if (f) {
            var g = goog.moduleLoaderState_.moduleName;
          }
        } finally {
          f && a.clearModuleState();
        }
        f && goog.global.$jscomp.require.ensure([e.getPathName()], function() {
          a.registerEs6ModuleExports(e.path, goog.global.$jscomp.require(e.getPathName()), g);
        });
        a.loaded();
      }
    }
    function d() {
      var m = goog.global.document, g = goog.Dependency.registerCallback_(function() {
        goog.Dependency.unregisterCallback_(g);
        c();
      }), q = goog.getScriptNonce_();
      q = "<script" + (q ? ' nonce="' + q + '"' : "") + ">" + goog.protectScriptTag_('goog.Dependency.callback_("' + g + '");') + "\x3c/script>";
      m.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(q) : q);
    }
    var e = this;
    if (goog.global.CLOSURE_IMPORT_SCRIPT) {
      b(), this.contents_ && goog.global.CLOSURE_IMPORT_SCRIPT("", this.contents_) ? (this.contents_ = null, a.loaded()) : a.pause();
    } else {
      var f = this.loadFlags.module == goog.ModuleType.ES6;
      this.lazyFetch_ || b();
      var n = 1 < a.pending().length;
      if (goog.Dependency.defer_ && (n || goog.isDocumentLoading_())) {
        a.defer(function() {
          c();
        });
      } else {
        var p = goog.global.document;
        n = goog.inHtmlDocument_() && ("ActiveXObject" in goog.global || goog.isEdge_());
        if (f && goog.inHtmlDocument_() && goog.isDocumentLoading_() && !n) {
          goog.Dependency.defer_ = !0;
          a.pause();
          var h = p.onreadystatechange;
          p.onreadystatechange = function() {
            "interactive" == p.readyState && (p.onreadystatechange = h, c(), a.resume());
            "function" === typeof h && h.apply(void 0, arguments);
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
  td:!0, th:!0, tr:!0, rb:!0, rbc:!0, rp:!0, rt:!0, rtc:!0, optgroup:!0, caption:!0, colgroup:!0}, m_DESCENDANTS_MUST_HAVE_END_TAGS = {a:!0, audio:!0, del:!0, ins:!0, map:!0, noscript:!0, video:!0}, m_TAGNAME_TO_NAMESPACE = {xml:"http://www.w3.org/1999/xhtml", svg:"http://www.w3.org/2000/svg", math:"http://www.w3.org/1998/Math/MathML"}, m_P_END_TAG_LESS_TAGS = {address:!0, article:!0, aside:!0, blockquote:!0, canvas:!0, details:!0, div:!0, dl:!0, fieldset:!0, figcaption:!0, figure:!0, footer:!0, 
  form:!0, h1:!0, h2:!0, h3:!0, h4:!0, h5:!0, h6:!0, header:!0, hgroup:!0, hr:!0, legend:!0, main:!0, menu:!0, nav:!0, noscript:!0, ol:!0, p:!0, pre:!0, section:!0, ul:!0, center:!0, dir:!0, noframes:!0, marquee:!0}, m_UNESCAPED_TAGS = {script:!0, style:!0, plaintext:!0, xmp:!0}, m_endTagRequired = !1, m_escapeForHTMLDisabled = !1, m_isXMLDocument = !1;
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
    var f = b[1], n = b.slice(2);
    a = n.length ? a(f, n) : a(f);
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
  var json2html = function(a, b, c, d) {
    function e(k, r, t, u, w) {
      function y() {
        q && (v += "</" + q + ">", q = "");
      }
      var v = "", D = k[0], z = k[1], A = 1, x = D;
      switch(D) {
        case htmljson.NODE_TYPE.DOCUMENT_NODE:
          htmljson.DEFINE.USE_XHTML && m_isXML(z) && (l = !0);
          v = "<!DOCTYPE " + z + ">" + f(k, u, w);
          break;
        case htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE:
          v = f(k, u, w);
          break;
        case htmljson.NODE_TYPE.TEXT_NODE:
          y();
          v += w ? z : m_escapeForHTML("" + z);
          break;
        case htmljson.NODE_TYPE.CDATA_SECTION:
          m_isString(z) ? v = "<![CDATA[" + z + "]]\x3e" : htmljson.DEFINE.DEBUG && p("CDATA_SECTION Error! [" + k + "]");
          break;
        case htmljson.NODE_TYPE.COMMENT_NODE:
          m_isString(z) ? v = "\x3c!--" + z + "--\x3e" : htmljson.DEFINE.DEBUG && p("COMMENT_NODE Error! [" + k + "]");
          break;
        case htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER:
          y();
          m_isString(z) ? v = "\x3c!--[" + z + "]>" : htmljson.DEFINE.DEBUG && p("COND_CMT_HIDE_LOWER Error! [" + k + "]");
          v += f(k, !0, w) + "<![endif]--\x3e";
          break;
        case htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER:
          y();
          m_isString(z) ? v = "\x3c!--{" + z + "};" : htmljson.DEFINE.DEBUG && p("NETSCAPE4_COND_CMT_HIDE_LOWER Error! [" + k + "]");
          v += f(k, !0, w) + "--\x3e";
          break;
        case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START:
          m_isString(z) ? v = "\x3c!--[" + z + "]>\x3c!--\x3e" : htmljson.DEFINE.DEBUG && p("COND_CMT_SHOW_LOWER_START Error! [" + k + "]");
          v += f(k, u, w) + "\x3c!--<![endif]--\x3e";
          break;
        case htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_END:
          v = "\x3c!--<![endif]--\x3e";
          break;
        case htmljson.NODE_TYPE.PROCESSING_INSTRUCTION:
          u = m_executeProcessingInstruction(b, k, r, t, p);
          if (void 0 !== u && null !== u && "" !== u && (m_isStringOrNumber(u) || m_isArray(u))) {
            return -1;
          }
          break;
        case htmljson.NODE_TYPE.ELEMENT_END_TAG:
          m_isString(z) ? v = "</" + z + ">" : htmljson.DEFINE.DEBUG && p("ELEMENT_END_TAG Error! [" + k + "]");
          break;
        case htmljson.NODE_TYPE.ELEMENT_START_TAG:
          var E = !0;
        case htmljson.NODE_TYPE.ELEMENT_NODE:
          x = k[1], A = 2;
        default:
          if (m_isString(x)) {
            x = m_parseTagName(x);
            r = x[1];
            t = x[2];
            x = x[0];
            "p" !== q || m_P_END_TAG_LESS_TAGS[x] || (v = "</p>");
            q = "";
            v += "<" + x;
            r && (v += " id=" + m_quoteAttributeValue(r, m, h));
            t && (v += " class=" + m_quoteAttributeValue(t, m, h));
            if (!l) {
              var B = l ? !0 : m_TAGNAME_TO_NAMESPACE[x] ? !0 : m_isNamespacedTag(x);
              B = l = B;
            }
            A = k[A];
            m_isAttributes(A) && (v += " " + n(A));
            v = (k = f(k, u || m_DESCENDANTS_MUST_HAVE_END_TAGS[x], w || m_UNESCAPED_TAGS[x])) ? v + (">" + k) : E ? v + ">" : v + (l ? "/>" : ">");
            E ? q = "" : l && !k || m_OMITTABLE_END_TAGS[x] && !u ? q = m_NO_CHILD_ELEMENTS[x] ? "" : x : (v += "</" + x + ">", q = "");
            B && (l = !1);
          } else {
            htmljson.DEFINE.DEBUG && p("Not html.json! [" + k + "]");
          }
      }
      return v;
    }
    function f(k, r, t) {
      for (var u = "", w = m_getChildNodeStartIndex(k), y; w < k.length; ++w) {
        y = k[w], m_isStringOrNumber(y) ? u += e([htmljson.NODE_TYPE.TEXT_NODE, y], null, 0, r, t) : m_isArray(y) ? (y = e(y, k, w, r, t), -1 === y ? --w : u += y) : htmljson.DEFINE.DEBUG && p("Invalid html.json! [" + y + "]");
      }
      return u;
    }
    function n(k) {
      var r = "", t, u;
      for (t in k) {
        var w = k[t];
        (u = m_isInstructionAttr(g, t)) && (t = t.substr(g.length));
        "className" === t && (t = "class");
        u && (w = m_executeInstructionAttr(!0, b, t, w, p));
        if (!(null == w || m_ATTRS_NO_VALUE[t] && !1 === w || (r += " " + t, m_ATTRS_NO_VALUE[t]))) {
          if ("style" === t && m_isObject(w)) {
            u = void 0;
            var y = w, v = "";
            for (u in y) {
              w = y[u], "0px" === w && (w = 0), v += ";" + m_toSnakeCase(u) + ":" + m_escapeForHTML("" + w);
            }
            w = v.substr(1);
            if (!w) {
              continue;
            }
          }
          r += "=" + m_quoteAttributeValue(w, m, h);
        }
      }
      return r.substr(1);
    }
    var p = "function" === typeof c ? c : function(k) {
    };
    c = c && "object" === typeof c ? c : d || {};
    var h = !!c.quotAlways, m = !!c.useSingleQuot, g = c.instructionAttrPrefix || htmljson.DEFINE.INSTRUCTION_ATTR_PREFIX, q, l = m_isXMLDocument;
    if (m_isArray(a)) {
      return m_getNodeType(a) === htmljson.NODE_TYPE.PROCESSING_INSTRUCTION && (a = [htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE, a]), e(a, null, 0, m_endTagRequired || !1, m_escapeForHTMLDisabled || !1);
    }
    htmljson.DEFINE.DEBUG && p("Invalid html.json document!");
  };
  var C = {}, LEFT_BRACE = C.LEFT_BRACE = 1, RIGHT_BRACE = C.RIGHT_BRACE = 2, LEFT_BRACKET = C.LEFT_BRACKET = 3, RIGHT_BRACKET = C.RIGHT_BRACKET = 4, COLON = C.COLON = 5, COMMA = C.COMMA = 6, TRUE = C.TRUE = 7, FALSE = C.FALSE = 8, NULL = C.NULL = 9, STRING = C.STRING = 10, NUMBER = C.NUMBER = 11, START = C.START = 17, STOP = C.STOP = 18, TRUE1 = C.TRUE1 = 33, TRUE2 = C.TRUE2 = 34, TRUE3 = C.TRUE3 = 35, FALSE1 = C.FALSE1 = 49, FALSE2 = C.FALSE2 = 50, FALSE3 = C.FALSE3 = 51, FALSE4 = C.FALSE4 = 52, 
  NULL1 = C.NULL1 = 65, NULL2 = C.NULL2 = 66, NULL3 = C.NULL3 = 67, NUMBER1 = C.NUMBER1 = 81, NUMBER3 = C.NUMBER3 = 83, STRING1 = C.STRING1 = 97, STRING2 = C.STRING2 = 98, STRING3 = C.STRING3 = 99, STRING4 = C.STRING4 = 100, STRING5 = C.STRING5 = 101, STRING6 = C.STRING6 = 102, VALUE = C.VALUE = 113, KEY = C.KEY = 114, OBJECT = C.OBJECT = 129, ARRAY = C.ARRAY = 130, BACK_SLASH = 92, FORWARD_SLASH = 47, BACKSPACE = 8, FORM_FEED = 12, NEWLINE = 10, CARRIAGE_RETURN = 13, TAB = 9, STRING_BUFFER_SIZE = 
  65536, Parser = function() {
    this.tState = START;
    this.string = this.value = void 0;
    this.stringBuffer = Buffer.alloc ? Buffer.alloc(STRING_BUFFER_SIZE) : new Buffer(STRING_BUFFER_SIZE);
    this.stringBufferOffset = 0;
    this.mode = this.key = this.highSurrogate = this.unicode = void 0;
    this.stack = [];
    this.state = VALUE;
    this.bytes_in_sequence = this.bytes_remaining = 0;
    this.temp_buffs = {2:new Buffer(2), 3:new Buffer(3), 4:new Buffer(4)};
    this.offset = -1;
  };
  Parser.toknam = function(a) {
    for (var b = Object.keys(C), c = 0, d = b.length; c < d; c++) {
      var e = b[c];
      if (C[e] === a) {
        return e;
      }
    }
    return a && "0x" + a.toString(16);
  };
  var proto = Parser.prototype;
  proto.onError = function(a) {
    throw a;
  };
  proto.charError = function(a, b) {
    this.tState = STOP;
    this.onError(Error("Unexpected " + JSON.stringify(String.fromCharCode(a[b])) + " at position " + b + " in state " + Parser.toknam(this.tState)));
  };
  proto.appendStringChar = function(a) {
    this.stringBufferOffset >= STRING_BUFFER_SIZE && (this.string += this.stringBuffer.toString("utf8"), this.stringBufferOffset = 0);
    this.stringBuffer[this.stringBufferOffset++] = a;
  };
  proto.appendStringBuf = function(a, b, c) {
    var d = a.length;
    "number" === typeof b && (d = "number" === typeof c ? 0 > c ? a.length - b + c : c - b : a.length - b);
    0 > d && (d = 0);
    this.stringBufferOffset + d > STRING_BUFFER_SIZE && (this.string += this.stringBuffer.toString("utf8", 0, this.stringBufferOffset), this.stringBufferOffset = 0);
    a.copy(this.stringBuffer, this.stringBufferOffset, b, c);
    this.stringBufferOffset += d;
  };
  proto.write = function(a) {
    "string" === typeof a && (a = new Buffer(a));
    for (var b, c = 0, d = a.length; c < d; c++) {
      if (this.tState === START) {
        if (b = a[c], this.offset++, 123 === b) {
          this.onToken(LEFT_BRACE, "{");
        } else if (125 === b) {
          this.onToken(RIGHT_BRACE, "}");
        } else if (91 === b) {
          this.onToken(LEFT_BRACKET, "[");
        } else if (93 === b) {
          this.onToken(RIGHT_BRACKET, "]");
        } else if (58 === b) {
          this.onToken(COLON, ":");
        } else if (44 === b) {
          this.onToken(COMMA, ",");
        } else if (116 === b) {
          this.tState = TRUE1;
        } else if (102 === b) {
          this.tState = FALSE1;
        } else if (110 === b) {
          this.tState = NULL1;
        } else if (34 === b) {
          this.string = "", this.stringBufferOffset = 0, this.tState = STRING1;
        } else if (45 === b) {
          this.string = "-", this.tState = NUMBER1;
        } else if (48 <= b && 64 > b) {
          this.string = String.fromCharCode(b), this.tState = NUMBER3;
        } else {
          if (32 !== b && 9 !== b && 10 !== b && 13 !== b) {
            return this.charError(a, c);
          }
        }
      } else if (this.tState === STRING1) {
        if (b = a[c], 0 < this.bytes_remaining) {
          for (b = 0; b < this.bytes_remaining; b++) {
            this.temp_buffs[this.bytes_in_sequence][this.bytes_in_sequence - this.bytes_remaining + b] = a[b];
          }
          this.appendStringBuf(this.temp_buffs[this.bytes_in_sequence]);
          this.bytes_in_sequence = this.bytes_remaining = 0;
          c = c + b - 1;
        } else if (0 === this.bytes_remaining && 128 <= b) {
          if (193 >= b || 244 < b) {
            return this.onError(Error("Invalid UTF-8 character at position " + c + " in state " + Parser.toknam(this.tState)));
          }
          194 <= b && 223 >= b && (this.bytes_in_sequence = 2);
          224 <= b && 239 >= b && (this.bytes_in_sequence = 3);
          240 <= b && 244 >= b && (this.bytes_in_sequence = 4);
          if (this.bytes_in_sequence + c > a.length) {
            for (b = 0; b <= a.length - 1 - c; b++) {
              this.temp_buffs[this.bytes_in_sequence][b] = a[c + b];
            }
            this.bytes_remaining = c + this.bytes_in_sequence - a.length;
            c = a.length - 1;
          } else {
            this.appendStringBuf(a, c, c + this.bytes_in_sequence), c = c + this.bytes_in_sequence - 1;
          }
        } else if (34 === b) {
          this.tState = START, this.string += this.stringBuffer.toString("utf8", 0, this.stringBufferOffset), this.stringBufferOffset = 0, this.onToken(STRING, this.string), this.offset += Buffer.byteLength(this.string, "utf8") + 1, this.string = void 0;
        } else if (92 === b) {
          this.tState = STRING2;
        } else if (32 <= b) {
          this.appendStringChar(b);
        } else {
          return this.charError(a, c);
        }
      } else if (this.tState === STRING2) {
        if (b = a[c], 34 === b) {
          this.appendStringChar(b), this.tState = STRING1;
        } else if (92 === b) {
          this.appendStringChar(BACK_SLASH), this.tState = STRING1;
        } else if (47 === b) {
          this.appendStringChar(FORWARD_SLASH), this.tState = STRING1;
        } else if (98 === b) {
          this.appendStringChar(BACKSPACE), this.tState = STRING1;
        } else if (102 === b) {
          this.appendStringChar(FORM_FEED), this.tState = STRING1;
        } else if (110 === b) {
          this.appendStringChar(NEWLINE), this.tState = STRING1;
        } else if (114 === b) {
          this.appendStringChar(CARRIAGE_RETURN), this.tState = STRING1;
        } else if (116 === b) {
          this.appendStringChar(TAB), this.tState = STRING1;
        } else if (117 === b) {
          this.unicode = "", this.tState = STRING3;
        } else {
          return this.charError(a, c);
        }
      } else if (this.tState === STRING3 || this.tState === STRING4 || this.tState === STRING5 || this.tState === STRING6) {
        if (b = a[c], 48 <= b && 64 > b || 64 < b && 70 >= b || 96 < b && 102 >= b) {
          this.unicode += String.fromCharCode(b), this.tState++ === STRING6 && (b = parseInt(this.unicode, 16), this.unicode = void 0, void 0 !== this.highSurrogate && 56320 <= b && 57344 > b ? (this.appendStringBuf(new Buffer(String.fromCharCode(this.highSurrogate, b))), this.highSurrogate = void 0) : void 0 === this.highSurrogate && 55296 <= b && 56320 > b ? this.highSurrogate = b : (void 0 !== this.highSurrogate && (this.appendStringBuf(new Buffer(String.fromCharCode(this.highSurrogate))), this.highSurrogate = 
          void 0), this.appendStringBuf(new Buffer(String.fromCharCode(b)))), this.tState = STRING1);
        } else {
          return this.charError(a, c);
        }
      } else if (this.tState === NUMBER1 || this.tState === NUMBER3) {
        switch(b = a[c], b) {
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
            this.tState = NUMBER3;
            break;
          default:
            this.tState = START;
            b = Number(this.string);
            if (isNaN(b)) {
              return this.charError(a, c);
            }
            if (this.string.match(/[0-9]+/) == this.string && b.toString() != this.string) {
              this.onToken(STRING, this.string);
            } else {
              this.onToken(NUMBER, b);
            }
            this.offset += this.string.length - 1;
            this.string = void 0;
            c--;
        }
      } else if (this.tState === TRUE1) {
        if (114 === a[c]) {
          this.tState = TRUE2;
        } else {
          return this.charError(a, c);
        }
      } else if (this.tState === TRUE2) {
        if (117 === a[c]) {
          this.tState = TRUE3;
        } else {
          return this.charError(a, c);
        }
      } else if (this.tState === TRUE3) {
        if (101 === a[c]) {
          this.tState = START, this.onToken(TRUE, !0), this.offset += 3;
        } else {
          return this.charError(a, c);
        }
      } else if (this.tState === FALSE1) {
        if (97 === a[c]) {
          this.tState = FALSE2;
        } else {
          return this.charError(a, c);
        }
      } else if (this.tState === FALSE2) {
        if (108 === a[c]) {
          this.tState = FALSE3;
        } else {
          return this.charError(a, c);
        }
      } else if (this.tState === FALSE3) {
        if (115 === a[c]) {
          this.tState = FALSE4;
        } else {
          return this.charError(a, c);
        }
      } else if (this.tState === FALSE4) {
        if (101 === a[c]) {
          this.tState = START, this.onToken(FALSE, !1), this.offset += 4;
        } else {
          return this.charError(a, c);
        }
      } else if (this.tState === NULL1) {
        if (117 === a[c]) {
          this.tState = NULL2;
        } else {
          return this.charError(a, c);
        }
      } else if (this.tState === NULL2) {
        if (108 === a[c]) {
          this.tState = NULL3;
        } else {
          return this.charError(a, c);
        }
      } else if (this.tState === NULL3) {
        if (108 === a[c]) {
          this.tState = START, this.onToken(NULL, null), this.offset += 3;
        } else {
          return this.charError(a, c);
        }
      }
    }
  };
  proto.onToken = function(a, b) {
  };
  proto.parseError = function(a, b) {
    this.tState = STOP;
    this.onError(Error("Unexpected " + Parser.toknam(a) + (b ? "(" + JSON.stringify(b) + ")" : "") + " in state " + Parser.toknam(this.state)));
  };
  proto.push = function() {
    this.stack.push({value:this.value, key:this.key, mode:this.mode});
  };
  proto.pop = function() {
    var a = this.value, b = this.stack.pop();
    this.value = b.value;
    this.key = b.key;
    this.mode = b.mode;
    this.emit(a);
    this.mode || (this.state = VALUE);
  };
  proto.emit = function(a) {
    this.mode && (this.state = COMMA);
    this.onValue(a);
  };
  proto.onValue = function(a) {
  };
  proto.onToken = function(a, b) {
    if (this.state === VALUE) {
      if (a === STRING || a === NUMBER || a === TRUE || a === FALSE || a === NULL) {
        this.value && (this.value[this.key] = b), this.emit(b);
      } else if (a === LEFT_BRACE) {
        this.push(), this.value = this.value ? this.value[this.key] = {} : {}, this.key = void 0, this.state = KEY, this.mode = OBJECT;
      } else if (a === LEFT_BRACKET) {
        this.push(), this.value = this.value ? this.value[this.key] = [] : [], this.key = 0, this.mode = ARRAY, this.state = VALUE;
      } else if (a === RIGHT_BRACE) {
        if (this.mode === OBJECT) {
          this.pop();
        } else {
          return this.parseError(a, b);
        }
      } else if (a === RIGHT_BRACKET) {
        if (this.mode === ARRAY) {
          this.pop();
        } else {
          return this.parseError(a, b);
        }
      } else {
        return this.parseError(a, b);
      }
    } else if (this.state === KEY) {
      if (a === STRING) {
        this.key = b, this.state = COLON;
      } else if (a === RIGHT_BRACE) {
        this.pop();
      } else {
        return this.parseError(a, b);
      }
    } else if (this.state === COLON) {
      if (a === COLON) {
        this.state = VALUE;
      } else {
        return this.parseError(a, b);
      }
    } else if (this.state === COMMA) {
      if (a === COMMA) {
        this.mode === ARRAY ? (this.key++, this.state = VALUE) : this.mode === OBJECT && (this.state = KEY);
      } else if (a === RIGHT_BRACKET && this.mode === ARRAY || a === RIGHT_BRACE && this.mode === OBJECT) {
        this.pop();
      } else {
        return this.parseError(a, b);
      }
    } else {
      return this.parseError(a, b);
    }
  };
  Parser.C = C;
  var Stream = require("stream"), through = function(a, b, c) {
    function d() {
      for (; n.length && !h.paused;) {
        var m = n.shift();
        if (null === m) {
          return h.emit("end");
        }
        h.emit("data", m);
      }
    }
    a = a || function(m) {
      this.queue(m);
    };
    b = b || function() {
      this.queue(null);
    };
    var e = !1, f = !1, n = [], p = !1, h = new Stream();
    h.readable = h.writable = !0;
    h.paused = !1;
    h.autoDestroy = !(c && !1 === c.autoDestroy);
    h.write = function(m) {
      a.call(this, m);
      return !h.paused;
    };
    h.queue = h.push = function(m) {
      if (p) {
        return h;
      }
      null === m && (p = !0);
      n.push(m);
      d();
      return h;
    };
    h.on("end", function() {
      h.readable = !1;
      !h.writable && h.autoDestroy && process.nextTick(function() {
        h.destroy();
      });
    });
    h.end = function(m) {
      if (!e) {
        return e = !0, arguments.length && h.write(m), h.writable = !1, b.call(h), !h.readable && h.autoDestroy && h.destroy(), h;
      }
    };
    h.destroy = function() {
      if (!f) {
        return e = f = !0, n.length = 0, h.writable = h.readable = !1, h.emit("close"), h;
      }
    };
    h.pause = function() {
      if (!h.paused) {
        return h.paused = !0, h;
      }
    };
    h.resume = function() {
      h.paused && (h.paused = !1, h.emit("resume"));
      d();
      h.paused || h.emit("drain");
      return h;
    };
    return h;
  };
  json2html.stream = {};
  const bufferFrom = Buffer.from && Buffer.from !== Uint8Array.from;
  module.exports = function(a, b, c) {
    const d = new Parser(), e = through(writeHandler, endHandler);
    c = b && "object" === typeof b ? b : c || {};
    e._parser = d;
    d._createValue = d.onToken;
    d.onToken = onToken;
    d.onError = onError;
    d._expect = htmljson.EXPECT.NODE_START;
    d._tree = [];
    d._args = [];
    d._onInstruction = a;
    d._onerror = "function" === typeof b ? b : function(f) {
    };
    d._quotAlways = !!c.quotAlways;
    d._useSingleQuot = !!c.useSingleQuot;
    d._attrPrefix = c.instructionAttrPrefix || htmljson.DEFINE.INSTRUCTION_ATTR_PREFIX;
    d._cssText = "";
    return d._stream = e;
  };
  module.exports.DOCUMENT_NODE = htmljson.NODE_TYPE.DOCUMENT_NODE;
  module.exports.DOCUMENT_FRAGMENT_NODE = htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE;
  module.exports.ELEMENT_NODE = htmljson.NODE_TYPE.ELEMENT_NODE;
  module.exports.TEXT_NODE = htmljson.NODE_TYPE.TEXT_NODE;
  module.exports.CDATA_SECTION = htmljson.NODE_TYPE.CDATA_SECTION;
  module.exports.PROCESSING_INSTRUCTION = htmljson.NODE_TYPE.PROCESSING_INSTRUCTION;
  module.exports.COMMENT_NODE = htmljson.NODE_TYPE.COMMENT_NODE;
  module.exports.COND_CMT_HIDE_LOWER = htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER;
  module.exports.COND_CMT_SHOW_LOWER_START = htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START;
  module.exports.COND_CMT_SHOW_LOWER_END = htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_END;
  module.exports.NETSCAPE4_COND_CMT_HIDE_LOWER = htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER;
  module.exports.ELEMENT_START_TAG = htmljson.NODE_TYPE.ELEMENT_START_TAG;
  module.exports.ELEMENT_END_TAG = htmljson.NODE_TYPE.ELEMENT_END_TAG;
  function writeHandler(a) {
    "string" === typeof a && (a = bufferFrom ? Buffer.from(a) : new Buffer(a));
    this._parser.write(a);
  }
  function endHandler(a) {
    a && this.write(a);
    this._parser._expect !== htmljson.EXPECT.END_OF_DOCUMENT && this.emit("error", "Invalid html.json");
    this.queue(null);
    this._parser = this._parser._stream = null;
  }
  function onError(a) {
    -1 < a.message.indexOf("at position") && (a.message = "Invalid JSON (" + a.message + ")");
    this._onerror(a.message);
    this._stream.emit("error", a);
  }
  function onToken(a, b) {
    function c() {
      const r = l._args.length ? l._onInstruction.call(l._stream, l._functionName, l._args) : l._onInstruction.call(l._stream, l._functionName);
      l._functionName = null;
      l._args.length = 0;
      return r;
    }
    function d() {
      l._args.unshift(l._functionName);
      const r = m_executeInstructionAttr(!0, l._onInstruction.bind(l._stream), l._attribute, l._args, l._onerror);
      l._functionName = null;
      l._args.length = 0;
      return r;
    }
    function e(r) {
      if (null != r) {
        if (m_ATTRS_NO_VALUE[l._attribute]) {
          if (!1 !== r) {
            return " " + l._attribute;
          }
        } else {
          return " " + l._attribute + "=" + m_quoteAttributeValue(r, l._useSingleQuot, l._quotAlways);
        }
      }
      return "";
    }
    function f(r) {
      const t = m.pop();
      g = m.length ? htmljson.EXPECT.IN_CHILD_NODES : htmljson.EXPECT.END_OF_DOCUMENT;
      switch(t) {
        case htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER:
          k = "<![endif]--\x3e";
          break;
        case htmljson.NODE_TYPE.CDATA_SECTION:
          k = "]]\x3e";
          break;
        case htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER:
        case htmljson.NODE_TYPE.COMMENT_NODE:
          k = "--\x3e";
          break;
        default:
          "" === t ? (k = r ? "" : ">", l._omittedEndTagBefore = "", n()) : m_isString(t) && (k = r ? "" : l._isXMLDocument || l._isXmlInHTML ? " />" : ">", (l._isXMLDocument || l._isXmlInHTML) && !r || m_OMITTABLE_END_TAGS[t] && !l._endTagRequired ? l._omittedEndTagBefore = m_NO_CHILD_ELEMENTS[t] ? "" : t : (k += "</" + t + ">", l._omittedEndTagBefore = ""), n());
      }
    }
    function n() {
      l._endTagRequired = l._escapeForHTMLDisabled = l._isXmlInHTML = !1;
      for (let r = 0, t = m.length; r < t; ++r) {
        const u = m[r];
        u === htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER || u === htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER ? l._endTagRequired = !0 : m_isString(u) && (m_DESCENDANTS_MUST_HAVE_END_TAGS[u] && (l._endTagRequired = !0), m_UNESCAPED_TAGS[u] && (l._escapeForHTMLDisabled = !0), m_TAGNAME_TO_NAMESPACE[u] || m_isNamespacedTag(u)) && (l._isXmlInHTML = !0);
      }
    }
    function p() {
      return q && (q = !1, m[m.length - 1] !== htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER) ? ">" : "";
    }
    function h() {
      let r = "";
      !q && l._omittedEndTagBefore && (r = "</" + l._omittedEndTagBefore + ">", l._omittedEndTagBefore = "");
      return r;
    }
    if (a === COLON || a === COMMA) {
      this.stack.length && this._createValue(a, b);
    } else {
      var m = this._tree, g = this._expect, q = !1, l = this;
      switch(g) {
        case htmljson.EXPECT.PROCESSING_INSTRUCTION_ARGS:
          switch(a) {
            case LEFT_BRACKET:
            case LEFT_BRACE:
              this._createValue(a, b);
              return;
            case RIGHT_BRACKET:
              if (0 === this.stack.length) {
                a = c();
                if (m_isArray(a)) {
                  m_endTagRequired = this._endTagRequired;
                  m_escapeForHTMLDisabled = this._escapeForHTMLDisabled;
                  m_isXMLDocument = this._isXMLDocument || this._isXmlInHTML;
                  var k = json2html(a, this._onInstruction, this._onerror, {quotAlways:this._quotAlways, useSingleQuot:this._useSingleQuot, instructionAttrPrefix:this._attrPrefix});
                  m_endTagRequired = m_escapeForHTMLDisabled = m_isXMLDocument = !1;
                } else {
                  k = m_isStringOrNumber(a) ? "" + a : "";
                }
                f(!!k);
                break;
              }
            case RIGHT_BRACE:
              1 === this.stack.length && (this._args.push(this.value), this.value = null);
              this._createValue(a, b);
              return;
            case STRING:
            case NUMBER:
            case TRUE:
            case FALSE:
            case NULL:
              this.stack.length ? this._createValue(a, b) : this._args.push(b);
              return;
            default:
              g = htmljson.EXPECT.ERROR;
          }break;
        case htmljson.EXPECT.IN_INSTRUCTION_ATTRIBUTE:
          switch(a) {
            case LEFT_BRACKET:
            case LEFT_BRACE:
              this._createValue(a, b);
              return;
            case RIGHT_BRACKET:
              if (0 === this.stack.length) {
                k = e(d());
                g = htmljson.EXPECT.ATTRIBUTE_PROPERTY;
                break;
              }
            case RIGHT_BRACE:
              1 === this.stack.length && (this._args.push(this.value), this.value = null);
              this._createValue(a, b);
              return;
            case STRING:
              if (0 === this.stack.length && !this._functionName) {
                this._functionName = b;
                return;
              }
            case NUMBER:
            case TRUE:
            case FALSE:
            case NULL:
              this.stack.length ? this._createValue(a, b) : this._args.push(b);
              return;
            default:
              g = htmljson.EXPECT.ERROR;
          }break;
        default:
          switch(a) {
            case LEFT_BRACKET:
              switch(g) {
                case htmljson.EXPECT.ATTRIBUTES_START:
                case htmljson.EXPECT.CHILD_NODES_START:
                  q = !0;
                case htmljson.EXPECT.NODE_START:
                case htmljson.EXPECT.IN_CHILD_NODES:
                  a = htmljson.PHASE.NODE_START;
                  break;
                case htmljson.EXPECT.INSTRUCTION_ATTRIBUTE_START:
                  a = htmljson.PHASE.IN_INSTRUCTION_ATTRIBUTE;
                  break;
                default:
                  a = htmljson.PHASE.ERROR;
              }break;
            case RIGHT_BRACKET:
              a = g === htmljson.EXPECT.ATTRIBUTES_START || g === htmljson.EXPECT.CHILD_NODES_START ? htmljson.PHASE.CLOSE_EMPTY_ELEMENT : g === htmljson.EXPECT.IN_CHILD_NODES || g === htmljson.EXPECT.END_OF_NODE ? htmljson.PHASE.END_OF_NODE : htmljson.PHASE.ERROR;
              break;
            case LEFT_BRACE:
              a = g === htmljson.EXPECT.ATTRIBUTES_START ? htmljson.PHASE.ATTRIBUTES_START : g === htmljson.EXPECT.STYLES_START ? htmljson.PHASE.STYLES_START : htmljson.PHASE.ERROR;
              break;
            case RIGHT_BRACE:
              a = g === htmljson.EXPECT.ATTRIBUTE_PROPERTY ? htmljson.PHASE.END_OF_ATTRIBUTES : g === htmljson.EXPECT.CSS_PROPERTY ? htmljson.PHASE.END_OF_STYLES : htmljson.PHASE.ERROR;
              break;
            case STRING:
              switch(g) {
                case htmljson.EXPECT.NODE_TYPE:
                case htmljson.EXPECT.TAG_NAME:
                  a = htmljson.PHASE.TAG_NAME;
                  break;
                case htmljson.EXPECT.TAG_NAME_WITHOUT_END_TAG:
                  a = htmljson.PHASE.TAG_NAME_WITHOUT_END_TAG;
                  break;
                case htmljson.EXPECT.TAG_NAME_WITHOUT_START_TAG:
                  a = htmljson.PHASE.TAG_NAME_WITHOUT_START_TAG;
                  break;
                case htmljson.EXPECT.DOCUMENT_NODE_VALUE:
                  a = htmljson.PHASE.DOCUMENT_NODE_VALUE;
                  break;
                case htmljson.EXPECT.TEXT_NODE_VALUE:
                  a = htmljson.PHASE.TEXT_NODE_VALUE;
                  break;
                case htmljson.EXPECT.CDATA_SECTION_VALUE:
                  a = htmljson.PHASE.CDATA_SECTION_VALUE;
                  break;
                case htmljson.EXPECT.COMMENT_NODE_VALUE:
                  a = htmljson.PHASE.COMMENT_NODE_VALUE;
                  break;
                case htmljson.EXPECT.COND_CMT_HIDE_LOWER_FORMURA:
                  a = htmljson.PHASE.COND_CMT_HIDE_LOWER_FORMURA;
                  break;
                case htmljson.EXPECT.NN4_COND_CMT_SHOW_LOWER_FORMURA:
                  a = htmljson.PHASE.NN4_COND_CMT_SHOW_LOWER_FORMURA;
                  break;
                case htmljson.EXPECT.COND_CMT_SHOW_LOWER_FORMURA:
                  a = htmljson.PHASE.COND_CMT_SHOW_LOWER_FORMURA;
                  break;
                case htmljson.EXPECT.ATTRIBUTE_PROPERTY:
                  a = htmljson.PHASE.ATTRIBUTE_PROPERTY;
                  break;
                case htmljson.EXPECT.ATTRIBUTE_VALUE:
                  a = htmljson.PHASE.ATTRIBUTE_VALUE;
                  break;
                case htmljson.EXPECT.STYLES_START:
                  a = htmljson.PHASE.STYLES_START;
                  break;
                case htmljson.EXPECT.CSS_PROPERTY:
                  a = htmljson.PHASE.CSS_PROPERTY;
                  break;
                case htmljson.EXPECT.CSS_VALUE:
                  a = htmljson.PHASE.CSS_VALUE;
                  break;
                case htmljson.EXPECT.ATTRIBUTES_START:
                case htmljson.EXPECT.CHILD_NODES_START:
                  q = !0;
                case htmljson.EXPECT.IN_CHILD_NODES:
                  a = htmljson.PHASE.TEXT_DATA;
                  break;
                case htmljson.EXPECT.PROCESSING_INSTRUCTION_NAME:
                  a = htmljson.PHASE.PROCESSING_INSTRUCTION_NAME;
                  break;
                case htmljson.EXPECT.INSTRUCTION_ATTRIBUTE_START:
                  a = htmljson.PHASE.INSTRUCTION_ATTRIBUTE_NAME;
                  break;
                default:
                  a = htmljson.PHASE.ERROR;
              }break;
            case NUMBER:
              switch(g) {
                case htmljson.EXPECT.NODE_TYPE:
                  a = b;
                  break;
                case htmljson.EXPECT.ATTRIBUTE_VALUE:
                  a = htmljson.PHASE.ATTRIBUTE_VALUE;
                  break;
                case htmljson.EXPECT.CSS_VALUE:
                  a = htmljson.PHASE.CSS_VALUE;
                  break;
                case htmljson.EXPECT.TEXT_NODE_VALUE:
                  a = htmljson.PHASE.TEXT_NODE_VALUE;
                  break;
                case htmljson.EXPECT.ATTRIBUTES_START:
                case htmljson.EXPECT.CHILD_NODES_START:
                  q = !0;
                case htmljson.EXPECT.IN_CHILD_NODES:
                  a = htmljson.PHASE.TEXT_DATA;
                  b += "";
                  break;
                case htmljson.EXPECT.CDATA_SECTION_VALUE:
                  a = htmljson.PHASE.CDATA_SECTION_VALUE;
                  b += "";
                  break;
                case htmljson.EXPECT.COMMENT_NODE_VALUE:
                  a = htmljson.PHASE.COMMENT_NODE_VALUE;
                  b += "";
                  break;
                default:
                  a = htmljson.PHASE.ERROR;
              }break;
            case TRUE:
            case FALSE:
            case NULL:
              a = g === htmljson.EXPECT.ATTRIBUTE_VALUE ? htmljson.PHASE.ATTRIBUTE_VALUE : htmljson.PHASE.ERROR;
              break;
            default:
              a = htmljson.PHASE.ERROR;
          }switch(a) {
            case htmljson.PHASE.NODE_START:
              k = p();
              g = htmljson.EXPECT.NODE_TYPE;
              break;
            case htmljson.PHASE.ENTER_DOCUMENT_NODE:
              g = htmljson.EXPECT.DOCUMENT_NODE_VALUE;
              m.push(htmljson.NODE_TYPE.DOCUMENT_NODE);
              break;
            case htmljson.PHASE.DOCUMENT_NODE_VALUE:
              htmljson.DEFINE.USE_XHTML && (this._isXMLDocument = m_isXML(b));
              k = "<!DOCTYPE " + b + ">";
              g = htmljson.EXPECT.CHILD_NODES_START;
              break;
            case htmljson.PHASE.ENTER_DOCUMENT_FRAGMENT_NODE:
              g = htmljson.EXPECT.CHILD_NODES_START;
              m.push(htmljson.NODE_TYPE.DOCUMENT_FRAGMENT_NODE);
              break;
            case htmljson.PHASE.ENTER_ELEMENT_NODE:
              g = htmljson.EXPECT.TAG_NAME;
              break;
            case htmljson.PHASE.ENTER_ELEMENT_START_TAG:
              g = htmljson.EXPECT.TAG_NAME_WITHOUT_END_TAG;
              break;
            case htmljson.PHASE.TAG_NAME:
            case htmljson.PHASE.TAG_NAME_WITHOUT_END_TAG:
              b = m_parseTagName(b);
              const r = b[1], t = b[2];
              b = b[0];
              k = ("p" !== this._omittedEndTagBefore || m_P_END_TAG_LESS_TAGS[b] ? "" : "</p>") + "<" + b;
              this._omittedEndTagBefore = "";
              r && (k += " id=" + m_quoteAttributeValue(r, this._useSingleQuot, this._quotAlways));
              t && (k += " class=" + m_quoteAttributeValue(t, this._useSingleQuot, this._quotAlways));
              this._endTagRequired || (this._endTagRequired = !!m_DESCENDANTS_MUST_HAVE_END_TAGS[b]);
              this._escapeForHTMLDisabled || (this._escapeForHTMLDisabled = !!m_UNESCAPED_TAGS[b]);
              a === htmljson.PHASE.TAG_NAME_WITHOUT_END_TAG ? m.push("") : m.push(b);
              n();
              g = htmljson.EXPECT.ATTRIBUTES_START;
              break;
            case htmljson.PHASE.ATTRIBUTES_START:
              g = htmljson.EXPECT.ATTRIBUTE_PROPERTY;
              break;
            case htmljson.PHASE.ATTRIBUTE_PROPERTY:
              m_isInstructionAttr(this._attrPrefix, b) ? (this._attribute = b.substr(this._attrPrefix.length), g = htmljson.EXPECT.INSTRUCTION_ATTRIBUTE_START) : (this._attribute = b, g = "style" === b ? htmljson.EXPECT.STYLES_START : htmljson.EXPECT.ATTRIBUTE_VALUE);
              break;
            case htmljson.PHASE.IN_INSTRUCTION_ATTRIBUTE:
              g = htmljson.EXPECT.IN_INSTRUCTION_ATTRIBUTE;
              break;
            case htmljson.PHASE.INSTRUCTION_ATTRIBUTE_NAME:
              this._functionName = b, b = d();
            case htmljson.PHASE.ATTRIBUTE_VALUE:
              k = e(b);
              g = htmljson.EXPECT.ATTRIBUTE_PROPERTY;
              break;
            case htmljson.PHASE.END_OF_ATTRIBUTES:
              g = htmljson.EXPECT.CHILD_NODES_START;
              break;
            case htmljson.PHASE.STYLES_START:
              g = htmljson.EXPECT.CSS_PROPERTY;
              break;
            case htmljson.PHASE.CSS_PROPERTY:
              this._cssPropety = b;
              g = htmljson.EXPECT.CSS_VALUE;
              break;
            case htmljson.PHASE.CSS_VALUE:
              "" !== b && null !== b && (this._cssText += ";" + m_toSnakeCase(this._cssPropety) + ":" + b);
              g = htmljson.EXPECT.CSS_PROPERTY;
              break;
            case htmljson.PHASE.END_OF_STYLES:
              this._cssText && (k = e(this._cssText.substr(1)), this._cssText = "");
              g = htmljson.EXPECT.ATTRIBUTE_PROPERTY;
              break;
            case htmljson.PHASE.END_OF_NODE:
              f(!0);
              break;
            case htmljson.PHASE.CLOSE_EMPTY_ELEMENT:
              f(!1);
              break;
            case htmljson.PHASE.ENTER_ELEMENT_END_TAG:
              g = htmljson.EXPECT.TAG_NAME_WITHOUT_START_TAG;
              m.push(htmljson.NODE_TYPE.ELEMENT_END_TAG);
              break;
            case htmljson.PHASE.TAG_NAME_WITHOUT_START_TAG:
              k = "</" + b + ">";
              g = htmljson.EXPECT.END_OF_NODE;
              break;
            case htmljson.PHASE.ENTER_TEXT_NODE:
              g = htmljson.EXPECT.TEXT_NODE_VALUE;
              m.push(htmljson.NODE_TYPE.TEXT_NODE);
              break;
            case htmljson.PHASE.TEXT_NODE_VALUE:
              k = h() + (l._escapeForHTMLDisabled ? "" + b : m_escapeForHTML("" + b));
              g = htmljson.EXPECT.END_OF_NODE;
              break;
            case htmljson.PHASE.TEXT_DATA:
              k = p() + h() + (l._escapeForHTMLDisabled ? "" + b : m_escapeForHTML("" + b));
              g = htmljson.EXPECT.IN_CHILD_NODES;
              break;
            case htmljson.PHASE.ENTER_CDATA_SECTION:
              k = "<![CDATA[";
              g = htmljson.EXPECT.CDATA_SECTION_VALUE;
              m.push(htmljson.NODE_TYPE.CDATA_SECTION);
              break;
            case htmljson.PHASE.CDATA_SECTION_VALUE:
              k = b;
              g = htmljson.EXPECT.END_OF_NODE;
              break;
            case htmljson.PHASE.ENTER_COMMENT_NODE:
              k = "\x3c!--";
              g = htmljson.EXPECT.COMMENT_NODE_VALUE;
              m.push(htmljson.NODE_TYPE.COMMENT_NODE);
              break;
            case htmljson.PHASE.COMMENT_NODE_VALUE:
              k = b;
              g = htmljson.EXPECT.END_OF_NODE;
              break;
            case htmljson.PHASE.ENTER_COND_CMT_HIDE_LOWER:
              k = h() + "\x3c!--[";
              g = htmljson.EXPECT.COND_CMT_HIDE_LOWER_FORMURA;
              m.push(htmljson.NODE_TYPE.COND_CMT_HIDE_LOWER);
              break;
            case htmljson.PHASE.COND_CMT_HIDE_LOWER_FORMURA:
              k = b + "]";
              g = htmljson.EXPECT.CHILD_NODES_START;
              break;
            case htmljson.PHASE.ENTER_NN4_COND_CMT_HIDE_LOWER:
              k = h() + "\x3c!--{";
              g = htmljson.EXPECT.NN4_COND_CMT_SHOW_LOWER_FORMURA;
              m.push(htmljson.NODE_TYPE.NETSCAPE4_COND_CMT_HIDE_LOWER);
              break;
            case htmljson.PHASE.NN4_COND_CMT_SHOW_LOWER_FORMURA:
              k = b + "};";
              g = htmljson.EXPECT.CHILD_NODES_START;
              break;
            case htmljson.PHASE.ENTER_COND_CMT_SHOW_LOWER_START:
              k = "\x3c!--[";
              g = htmljson.EXPECT.COND_CMT_SHOW_LOWER_FORMURA;
              m.push(htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_START);
              break;
            case htmljson.PHASE.COND_CMT_SHOW_LOWER_FORMURA:
              k = b + "]>\x3c!--\x3e";
              g = htmljson.EXPECT.END_OF_NODE;
              break;
            case htmljson.PHASE.ENTER_COND_CMT_SHOW_LOWER_END:
              k = "\x3c!--<![endif]--\x3e";
              g = htmljson.EXPECT.END_OF_NODE;
              m.push(htmljson.NODE_TYPE.COND_CMT_SHOW_LOWER_END);
              break;
            case htmljson.PHASE.ENTER_PROCESSING_INSTRUCTION:
              g = htmljson.EXPECT.PROCESSING_INSTRUCTION_NAME;
              m.push(htmljson.NODE_TYPE.PROCESSING_INSTRUCTION);
              break;
            case htmljson.PHASE.PROCESSING_INSTRUCTION_NAME:
              this._functionName = b;
              g = htmljson.EXPECT.PROCESSING_INSTRUCTION_ARGS;
              break;
            default:
              g = htmljson.EXPECT.ERROR;
          }
      }
      g === htmljson.EXPECT.ERROR ? (this._onerror("Not html.json format!"), this._stream.emit("error", "Not html.json format!")) : (this._expect = g, k && this._stream.queue(k));
    }
  }
})(require, String, Buffer, JSON, void 0);

