/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 69);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var store = __webpack_require__(33)('wks'),
    uid = __webpack_require__(15),
    _Symbol = __webpack_require__(1).Symbol,
    USE_SYMBOL = typeof _Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ },
/* 1 */
/***/ function(module, exports) {

"use strict";
'use strict';

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(13)(function () {
  return Object.defineProperty({}, 'a', { get: function get() {
      return 7;
    } }).a != 7;
});

/***/ },
/* 3 */
/***/ function(module, exports) {

"use strict";
"use strict";

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

/***/ },
/* 4 */
/***/ function(module, exports) {

"use strict";
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function (it) {
  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var isObject = __webpack_require__(4);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var dP = __webpack_require__(7),
    createDesc = __webpack_require__(17);
module.exports = __webpack_require__(2) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var anObject = __webpack_require__(5),
    IE8_DOM_DEFINE = __webpack_require__(28),
    toPrimitive = __webpack_require__(35),
    dP = Object.defineProperty;

exports.f = __webpack_require__(2) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) {/* empty */}
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var global = __webpack_require__(1),
    hide = __webpack_require__(6),
    has = __webpack_require__(3),
    SRC = __webpack_require__(15)('src'),
    TO_STRING = 'toString',
    $toString = Function[TO_STRING],
    TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(10).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else {
    if (!safe) {
      delete O[key];
      hide(O, key, val);
    } else {
      if (O[key]) O[key] = val;else hide(O, key, val);
    }
  }
  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

/***/ },
/* 9 */
/***/ function(module, exports) {

"use strict";
"use strict";

module.exports = {};

/***/ },
/* 10 */
/***/ function(module, exports) {

"use strict";
'use strict';

var core = module.exports = { version: '2.4.0' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

// optional / simple context binding
var aFunction = __webpack_require__(38);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };
    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };
    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }
  return function () /* ...args */{
    return fn.apply(that, arguments);
  };
};

/***/ },
/* 12 */
/***/ function(module, exports) {

"use strict";
"use strict";

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ },
/* 13 */
/***/ function(module, exports) {

"use strict";
"use strict";

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(45),
    defined = __webpack_require__(12);
module.exports = function (it) {
  return IObject(defined(it));
};

/***/ },
/* 15 */
/***/ function(module, exports) {

"use strict";
'use strict';

var id = 0,
    px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var LIBRARY = __webpack_require__(50),
    $export = __webpack_require__(26),
    redefine = __webpack_require__(8),
    hide = __webpack_require__(6),
    has = __webpack_require__(3),
    Iterators = __webpack_require__(9),
    $iterCreate = __webpack_require__(48),
    setToStringTag = __webpack_require__(18),
    getPrototypeOf = __webpack_require__(53),
    ITERATOR = __webpack_require__(0)('iterator'),
    BUGGY = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
,
    FF_ITERATOR = '@@iterator',
    KEYS = 'keys',
    VALUES = 'values';

var returnThis = function returnThis() {
  return this;
};

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function getMethod(kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS:
        return function keys() {
          return new Constructor(this, kind);
        };
      case VALUES:
        return function values() {
          return new Constructor(this, kind);
        };
    }return function entries() {
      return new Constructor(this, kind);
    };
  };
  var TAG = NAME + ' Iterator',
      DEF_VALUES = DEFAULT == VALUES,
      VALUES_BUG = false,
      proto = Base.prototype,
      $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
      $default = $native || getMethod(DEFAULT),
      $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined,
      $anyNative = NAME == 'Array' ? proto.entries || $native : $native,
      methods,
      key,
      IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() {
      return $native.call(this);
    };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ },
/* 17 */
/***/ function(module, exports) {

"use strict";
"use strict";

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var def = __webpack_require__(7).f,
    has = __webpack_require__(3),
    TAG = __webpack_require__(0)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var shared = __webpack_require__(33)('keys'),
    uid = __webpack_require__(15);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

/***/ },
/* 20 */
/***/ function(module, exports) {

"use strict";
"use strict";

// 7.1.4 ToInteger
var ceil = Math.ceil,
    floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ },
/* 21 */
/***/ function(module, exports) {

"use strict";
'use strict';

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
    throw TypeError(name + ': incorrect invocation!');
  }return it;
};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(23),
    TAG = __webpack_require__(0)('toStringTag')
// ES3 wrong here
,
    ARG = cof(function () {
  return arguments;
}()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function tryGet(it, key) {
  try {
    return it[key];
  } catch (e) {/* empty */}
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
  // @@toStringTag case
  : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
  // builtinTag case
  : ARG ? cof(O)
  // ES3 arguments fallback
  : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ },
/* 23 */
/***/ function(module, exports) {

"use strict";
"use strict";

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var isObject = __webpack_require__(4),
    document = __webpack_require__(1).document
// in old IE typeof document.createElement is 'object'
,
    is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

/***/ },
/* 25 */
/***/ function(module, exports) {

"use strict";
'use strict';

// IE 8- don't enum bug keys
module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var global = __webpack_require__(1),
    core = __webpack_require__(10),
    hide = __webpack_require__(6),
    redefine = __webpack_require__(8),
    ctx = __webpack_require__(11),
    PROTOTYPE = 'prototype';

var $export = function $export(type, name, source) {
  var IS_FORCED = type & $export.F,
      IS_GLOBAL = type & $export.G,
      IS_STATIC = type & $export.S,
      IS_PROTO = type & $export.P,
      IS_BIND = type & $export.B,
      target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE],
      exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
      expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {}),
      key,
      own,
      out,
      exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1; // forced
$export.G = 2; // global
$export.S = 4; // static
$export.P = 8; // proto
$export.B = 16; // bind
$export.W = 32; // wrap
$export.U = 64; // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var ctx = __webpack_require__(11),
    call = __webpack_require__(47),
    isArrayIter = __webpack_require__(46),
    anObject = __webpack_require__(5),
    toLength = __webpack_require__(34),
    getIterFn = __webpack_require__(62),
    BREAK = {},
    RETURN = {};
var _exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () {
    return iterable;
  } : getIterFn(iterable),
      f = ctx(fn, that, entries ? 2 : 1),
      index = 0,
      length,
      step,
      iterator,
      result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
_exports.BREAK = BREAK;
_exports.RETURN = RETURN;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

module.exports = !__webpack_require__(2) && !__webpack_require__(13)(function () {
  return Object.defineProperty(__webpack_require__(24)('div'), 'a', { get: function get() {
      return 7;
    } }).a != 7;
});

/***/ },
/* 29 */
/***/ function(module, exports) {

"use strict";
"use strict";

module.exports = function (done, value) {
  return { value: value, done: !!done };
};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var META = __webpack_require__(15)('meta'),
    isObject = __webpack_require__(4),
    has = __webpack_require__(3),
    setDesc = __webpack_require__(7).f,
    id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(13)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function setMeta(it) {
  setDesc(it, META, { value: {
      i: 'O' + ++id, // object ID
      w: {} // weak collections IDs
    } });
};
var fastKey = function fastKey(it, create) {
  // return primitive with prefix
  if (!isObject(it)) return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
    // return object ID
  }return it[META].i;
};
var getWeak = function getWeak(it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
    // return hash weak collections IDs
  }return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function onFreeze(it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(5),
    dPs = __webpack_require__(51),
    enumBugKeys = __webpack_require__(25),
    IE_PROTO = __webpack_require__(19)('IE_PROTO'),
    Empty = function Empty() {/* empty */},
    PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var _createDict = function createDict() {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(24)('iframe'),
      i = enumBugKeys.length,
      lt = '<',
      gt = '>',
      iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(43).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  _createDict = iframeDocument.F;
  while (i--) {
    delete _createDict[PROTOTYPE][enumBugKeys[i]];
  }return _createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = _createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var redefine = __webpack_require__(8);
module.exports = function (target, src, safe) {
  for (var key in src) {
    redefine(target, key, src[key], safe);
  }return target;
};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var global = __webpack_require__(1),
    SHARED = '__core-js_shared__',
    store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

// 7.1.15 ToLength
var toInteger = __webpack_require__(20),
    min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(4);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.watchPromiseImplementation = watchPromiseImplementation;
exports.unwatchPromiseImplementation = unwatchPromiseImplementation;
exports.install = install;
exports.uninstall = uninstall;
exports.setupPromiseDetection = setupPromiseDetection;
exports.detectStrayPromises = detectStrayPromises;

__webpack_require__(37);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var strayPromises = [];
var isInstalled = false;
var isCleaningUp = false;
// Internal promise reference counter
var idx = 0;

/* global process */
var globalDebugMode = typeof process !== 'undefined' && process.env && process.env.STRAY_PROMISE_DEBUG;
var isDebug = globalDebugMode;

var WATCHED_PROMISE_METHODS = ['then', 'catch'];
var WATCHED_PROMISE_IMPLEMENTATIONS = new Map();

/**
 * Rebind an individual resolver function
 * ex. `.then(resolver)`
 *
 * @param {Function|*} fn
 * @param {Number} localIdx
 * @returns {Function|*}
 */
function rebindResolver(fn, localIdx) {
  if (typeof fn !== 'function' || isCleaningUp) {
    return fn;
  }
  function reboundResolver() {
    strayPromises.some(function (strayPromise) {
      if (strayPromise.id !== localIdx || isCleaningUp) {
        return false;
      }
      strayPromise.hasBeenCalled = true;
      return true;
    });
    return fn.apply(this, arguments);
  }
  if (isDebug) {
    reboundResolver.originalFn = String(fn);
  }
  return reboundResolver;
}

/**
 * Rebind a thenable callback
 *
 * @param {String} method
 * @param {Function} thenablePrototype
 * @returns {Function}
 */
function rebindThenable(method, thenablePrototype) {
  return function reboundThenable() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (isCleaningUp) {
      return thenablePrototype.apply(this, args);
    }

    var localIdx = idx++;

    // must throw the error for PhantomJS to generate the stack trace
    var err = void 0;
    try {
      // Use this error message during development
      if (isDebug) {
        throw new Error('Promise "' + method + '" with id "' + localIdx + '" resolved outside test constraints');
      } else {
        throw new Error('Promise "' + method + '" resolved outside test constraints');
      }
    } catch (e) {
      err = e;
    }
    var promiseData = {
      id: localIdx,
      hasBeenCalled: false,
      args: args,
      err: err,
      method: method
    };
    strayPromises.push(promiseData);

    var newPromise = thenablePrototype.apply(this, args.map(function (fn) {
      return rebindResolver(fn, localIdx);
    }));

    // keep a handy call stack reference
    promiseData.promise = this;

    return newPromise;
  };
}

/**
 * Hook up all watched Promise implementations
 */
function wirePromiseHooks() {
  WATCHED_PROMISE_IMPLEMENTATIONS.forEach(function (protoCache, promiseImpl) {
    if (protoCache.isInstalled) {
      return;
    }
    protoCache.isInstalled = true;
    WATCHED_PROMISE_METHODS.forEach(function (method) {
      if (typeof promiseImpl.prototype[method] === 'function') {
        promiseImpl.prototype[method] = rebindThenable(method, protoCache[method]);
      }
    });
  });
}

/**
 * Remove all watched Promise implementation hooks
 */
function unwirePromiseHooks() {
  WATCHED_PROMISE_IMPLEMENTATIONS.forEach(function (protoCache, promiseImpl) {
    if (!protoCache.isInstalled) {
      return;
    }
    protoCache.isInstalled = false;
    WATCHED_PROMISE_METHODS.forEach(function (method) {
      if (typeof promiseImpl.prototype[method] === 'function' && typeof protoCache[method] === 'function') {
        promiseImpl.prototype[method] = protoCache[method];
      }
    });
  });
}

/**
 * Mark a specific Promise implementation as "watched"
 *
 * @param {Function} promiseImpl
 */
function watchPromiseImplementation(promiseImpl) {
  if (WATCHED_PROMISE_IMPLEMENTATIONS.has(promiseImpl)) {
    return;
  }
  var protoCache = {};
  WATCHED_PROMISE_METHODS.forEach(function (method) {
    if (typeof promiseImpl.prototype[method] === 'function') {
      protoCache[method] = promiseImpl.prototype[method];
    }
  });
  WATCHED_PROMISE_IMPLEMENTATIONS.set(promiseImpl, protoCache);
  if (isInstalled) {
    wirePromiseHooks();
  }
}

/**
 * Mark a specific Promise implementation as "unwatched"
 *
 * @param {Function} promiseImpl
 */
function unwatchPromiseImplementation(promiseImpl) {
  WATCHED_PROMISE_IMPLEMENTATIONS.delete(promiseImpl);
}

/**
 * Override the timer functions with the tested functions
 */
function install() {
  if (isInstalled) {
    return;
  }
  isInstalled = true;
  wirePromiseHooks();
}

/**
 * Restore the original timer functions
 */
function uninstall() {
  if (!isInstalled) {
    return;
  }
  isInstalled = false;
  unwirePromiseHooks();
}

/**
 * Set up jasmine instance variable for ignoring promises
 */
function setupPromiseDetection() {
  var _this = this;

  strayPromises = [];
  isCleaningUp = false;
  isDebug = globalDebugMode;

  this._ignoreStrayPromises = function () {
    _this.__strayPromisesIgnored = true;
  };

  this._enableStrayPromisesDebugging = function () {
    isDebug = true;
  };
}

/**
 * Detect any stray timers used in beforeEach, afterEach
 *
 * @throws {Error}
 */
function detectStrayPromises(done) {
  // find stray promises from current tests
  var localStrayPromises = [].concat(_toConsumableArray(strayPromises));
  isCleaningUp = true;

  // reset timer cache for next test
  strayPromises = [];

  if (!this.__strayPromisesIgnored && localStrayPromises.length > 0) {
    (function () {
      var filterUnresolved = function filterUnresolved(val) {
        unresolvedPromises = unresolvedPromises.filter(function (_ref2) {
          var id = _ref2.id;
          return id !== val.id;
        });
      };

      var unresolvedPromises = [].concat(_toConsumableArray(localStrayPromises)).filter(function (_ref) {
        var hasBeenCalled = _ref.hasBeenCalled;
        return !hasBeenCalled;
      });

      Promise.all([].concat(_toConsumableArray(unresolvedPromises)).map(function (val) {
        var isCatchStatement = val.method === 'catch' || val.method === 'then' && !val.args[0];
        var isThenStatement = val.method === 'then' && typeof val.args[0] === 'function';
        // Must clear up any "catch" statements that were never called
        return val.promise.then(function (data) {
          // filter out catch clauses where the resolution of the promise was a success
          if (isCatchStatement) {
            filterUnresolved(val);
          }
          return data;
        }).catch(function () {
          if (val.hasBeenCalled && isCatchStatement || isThenStatement) {
            filterUnresolved(val);
          }
        });
      })).then(function () {
        isCleaningUp = false;
        if (unresolvedPromises.length > 0) {
          (function () {
            var firstStrayPromise = unresolvedPromises.shift();
            if (isDebug) {
              firstStrayPromise.args.forEach(function (arg) {
                if (typeof arg !== 'function') {
                  return;
                }
                console.log('Stray promise', firstStrayPromise.id, firstStrayPromise.method, String(arg.fn || arg));
              });
            }
            throw firstStrayPromise.err;
          })();
        }
      }).then(done, done.fail);
    })();
  } else {
    done();
  }
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(68)))

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

__webpack_require__(65);
__webpack_require__(66);
__webpack_require__(67);
__webpack_require__(64);
module.exports = __webpack_require__(10).Map;

/***/ },
/* 38 */
/***/ function(module, exports) {

"use strict";
'use strict';

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(0)('unscopables'),
    ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(6)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(14),
    toLength = __webpack_require__(34),
    toIndex = __webpack_require__(60);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this),
        length = toLength(O.length),
        index = toIndex(fromIndex, length),
        value;
    // Array#includes uses SameValueZero equality algorithm
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      if (value != value) return true;
      // Array#toIndex ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      }
    }return !IS_INCLUDES && -1;
  };
};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var dP = __webpack_require__(7).f,
    create = __webpack_require__(31),
    redefineAll = __webpack_require__(32),
    ctx = __webpack_require__(11),
    anInstance = __webpack_require__(21),
    defined = __webpack_require__(12),
    forOf = __webpack_require__(27),
    $iterDefine = __webpack_require__(16),
    step = __webpack_require__(29),
    setSpecies = __webpack_require__(58),
    DESCRIPTORS = __webpack_require__(2),
    fastKey = __webpack_require__(30).fastKey,
    SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function getEntry(that, key) {
  // fast case
  var index = fastKey(key),
      entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._i = create(null); // index
      that._f = undefined; // first entry
      that._l = undefined; // last entry
      that[SIZE] = 0; // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = this, data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function _delete(key) {
        var that = this,
            entry = getEntry(that, key);
        if (entry) {
          var next = entry.n,
              prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        }return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /*, that = undefined */) {
        anInstance(this, C, 'forEach');
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3),
            entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) {
            entry = entry.p;
          }
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function get() {
        return defined(this[SIZE]);
      }
    });
    return C;
  },
  def: function def(that, key, value) {
    var entry = getEntry(that, key),
        prev,
        index;
    // change existing entry
    if (entry) {
      entry.v = value;
      // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key, // <- key
        v: value, // <- value
        p: prev = that._l, // <- previous entry
        n: undefined, // <- next entry
        r: false // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    }return that;
  },
  getEntry: getEntry,
  setStrong: function setStrong(C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = iterated; // target
      this._k = kind; // kind
      this._l = undefined; // previous
    }, function () {
      var that = this,
          kind = that._k,
          entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) {
        entry = entry.p;
      } // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var global = __webpack_require__(1),
    $export = __webpack_require__(26),
    redefine = __webpack_require__(8),
    redefineAll = __webpack_require__(32),
    meta = __webpack_require__(30),
    forOf = __webpack_require__(27),
    anInstance = __webpack_require__(21),
    isObject = __webpack_require__(4),
    fails = __webpack_require__(13),
    $iterDetect = __webpack_require__(49),
    setToStringTag = __webpack_require__(18),
    inheritIfRequired = __webpack_require__(44);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME],
      C = Base,
      ADDER = IS_MAP ? 'set' : 'add',
      proto = C && C.prototype,
      O = {};
  var fixMethod = function fixMethod(KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY, KEY == 'delete' ? function (a) {
      return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'has' ? function has(a) {
      return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'get' ? function get(a) {
      return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'add' ? function add(a) {
      fn.call(this, a === 0 ? 0 : a);return this;
    } : function set(a, b) {
      fn.call(this, a === 0 ? 0 : a, b);return this;
    });
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C()
    // early implementations not supports chaining
    ,
        HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    ,
        THROWS_ON_PRIMITIVES = fails(function () {
      instance.has(1);
    })
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    ,
        ACCEPT_ITERABLES = $iterDetect(function (iter) {
      new C(iter);
    }) // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    ,
        BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C(),
          index = 5;
      while (index--) {
        $instance[ADDER](index, index);
      }return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

module.exports = __webpack_require__(1).document && document.documentElement;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var isObject = __webpack_require__(4),
    setPrototypeOf = __webpack_require__(57).set;
module.exports = function (that, target, C) {
  var P,
      S = target.constructor;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  }return that;
};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(23);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

// check on default Array iterator
var Iterators = __webpack_require__(9),
    ITERATOR = __webpack_require__(0)('iterator'),
    ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(5);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
    // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var create = __webpack_require__(31),
    descriptor = __webpack_require__(17),
    setToStringTag = __webpack_require__(18),
    IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(6)(IteratorPrototype, __webpack_require__(0)('iterator'), function () {
  return this;
});

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var ITERATOR = __webpack_require__(0)('iterator'),
    SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () {
    SAFE_CLOSING = true;
  };
  Array.from(riter, function () {
    throw 2;
  });
} catch (e) {/* empty */}

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7],
        iter = arr[ITERATOR]();
    iter.next = function () {
      return { done: safe = true };
    };
    arr[ITERATOR] = function () {
      return iter;
    };
    exec(arr);
  } catch (e) {/* empty */}
  return safe;
};

/***/ },
/* 50 */
/***/ function(module, exports) {

"use strict";
"use strict";

module.exports = false;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var dP = __webpack_require__(7),
    anObject = __webpack_require__(5),
    getKeys = __webpack_require__(55);

module.exports = __webpack_require__(2) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties),
      length = keys.length,
      i = 0,
      P;
  while (length > i) {
    dP.f(O, P = keys[i++], Properties[P]);
  }return O;
};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var pIE = __webpack_require__(56),
    createDesc = __webpack_require__(17),
    toIObject = __webpack_require__(14),
    toPrimitive = __webpack_require__(35),
    has = __webpack_require__(3),
    IE8_DOM_DEFINE = __webpack_require__(28),
    gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(2) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) {/* empty */}
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(3),
    toObject = __webpack_require__(61),
    IE_PROTO = __webpack_require__(19)('IE_PROTO'),
    ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  }return O instanceof Object ? ObjectProto : null;
};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var has = __webpack_require__(3),
    toIObject = __webpack_require__(14),
    arrayIndexOf = __webpack_require__(40)(false),
    IE_PROTO = __webpack_require__(19)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object),
      i = 0,
      result = [],
      key;
  for (key in O) {
    if (key != IE_PROTO) has(O, key) && result.push(key);
  } // Don't enum bug & hidden keys
  while (names.length > i) {
    if (has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
  }return result;
};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(54),
    enumBugKeys = __webpack_require__(25);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

/***/ },
/* 56 */
/***/ function(module, exports) {

"use strict";
"use strict";

exports.f = {}.propertyIsEnumerable;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(4),
    anObject = __webpack_require__(5);
var check = function check(O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
  function (test, buggy, set) {
    try {
      set = __webpack_require__(11)(Function.call, __webpack_require__(52).f(Object.prototype, '__proto__').set, 2);
      set(test, []);
      buggy = !(test instanceof Array);
    } catch (e) {
      buggy = true;
    }
    return function setPrototypeOf(O, proto) {
      check(O, proto);
      if (buggy) O.__proto__ = proto;else set(O, proto);
      return O;
    };
  }({}, false) : undefined),
  check: check
};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var global = __webpack_require__(1),
    dP = __webpack_require__(7),
    DESCRIPTORS = __webpack_require__(2),
    SPECIES = __webpack_require__(0)('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function get() {
      return this;
    }
  });
};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var toInteger = __webpack_require__(20),
    defined = __webpack_require__(12);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that)),
        i = toInteger(pos),
        l = s.length,
        a,
        b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var toInteger = __webpack_require__(20),
    max = Math.max,
    min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(12);
module.exports = function (it) {
  return Object(defined(it));
};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var classof = __webpack_require__(22),
    ITERATOR = __webpack_require__(0)('iterator'),
    Iterators = __webpack_require__(9);
module.exports = __webpack_require__(10).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var addToUnscopables = __webpack_require__(39),
    step = __webpack_require__(29),
    Iterators = __webpack_require__(9),
    toIObject = __webpack_require__(14);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(16)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0; // next index
  this._k = kind; // kind
  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t,
      kind = this._k,
      index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var strong = __webpack_require__(41);

// 23.1 Map Objects
module.exports = __webpack_require__(42)('Map', function (get) {
  return function Map() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(this, key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(this, key === 0 ? 0 : key, value);
  }
}, strong, true);

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';
// 19.1.3.6 Object.prototype.toString()

var classof = __webpack_require__(22),
    test = {};
test[__webpack_require__(0)('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(8)(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var $at = __webpack_require__(59)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(16)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0; // next index
  // 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t,
      index = this._i,
      point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var $iterators = __webpack_require__(63),
    redefine = __webpack_require__(8),
    global = __webpack_require__(1),
    hide = __webpack_require__(6),
    Iterators = __webpack_require__(9),
    wks = __webpack_require__(0),
    ITERATOR = wks('iterator'),
    TO_STRING_TAG = wks('toStringTag'),
    ArrayValues = Iterators.Array;

for (var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++) {
  var NAME = collections[i],
      Collection = global[NAME],
      proto = Collection && Collection.prototype,
      key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    for (key in $iterators) {
      if (!proto[key]) redefine(proto, key, $iterators[key], true);
    }
  }
}

/***/ },
/* 68 */
/***/ function(module, exports) {

"use strict";
'use strict';

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _promises = __webpack_require__(36);

// assign function so it can be used to hook up additional Promise libs
window._watchPromiseImplementation = _promises.watchPromiseImplementation;

// install timers
/* eslint-env jasmine */

beforeAll(_promises.install);

afterAll(_promises.uninstall);

beforeEach(_promises.setupPromiseDetection);

afterEach(_promises.detectStrayPromises);

if (window.Promise) {
  // watch the native implementation
  (0, _promises.watchPromiseImplementation)(Promise);
}

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDUwZGJlZDM1ZTE1MjU0MTlmOGEiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3drcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19jb3JlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2NsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19mb3Itb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX21ldGEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvbWlzZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2VzNi9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2NvbGxlY3Rpb24tc3Ryb25nLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19jb2xsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19pbmhlcml0LWlmLXJlcXVpcmVkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fc2V0LXByb3RvLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19zZXQtc3BlY2llcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL190by1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbInN0b3JlIiwicmVxdWlyZSIsInVpZCIsIlN5bWJvbCIsIlVTRV9TWU1CT0wiLCIkZXhwb3J0cyIsIm1vZHVsZSIsImV4cG9ydHMiLCJuYW1lIiwiZ2xvYmFsIiwid2luZG93IiwiTWF0aCIsInNlbGYiLCJGdW5jdGlvbiIsIl9fZyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiYSIsImhhc093blByb3BlcnR5IiwiaXQiLCJrZXkiLCJjYWxsIiwiaXNPYmplY3QiLCJUeXBlRXJyb3IiLCJkUCIsImNyZWF0ZURlc2MiLCJvYmplY3QiLCJ2YWx1ZSIsImYiLCJhbk9iamVjdCIsIklFOF9ET01fREVGSU5FIiwidG9QcmltaXRpdmUiLCJPIiwiUCIsIkF0dHJpYnV0ZXMiLCJlIiwiaGlkZSIsImhhcyIsIlNSQyIsIlRPX1NUUklORyIsIiR0b1N0cmluZyIsIlRQTCIsInNwbGl0IiwiaW5zcGVjdFNvdXJjZSIsInZhbCIsInNhZmUiLCJpc0Z1bmN0aW9uIiwiam9pbiIsIlN0cmluZyIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY29yZSIsInZlcnNpb24iLCJfX2UiLCJhRnVuY3Rpb24iLCJmbiIsInRoYXQiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJiIiwiYyIsImFwcGx5IiwiYXJndW1lbnRzIiwiZXhlYyIsIklPYmplY3QiLCJkZWZpbmVkIiwiaWQiLCJweCIsInJhbmRvbSIsImNvbmNhdCIsIkxJQlJBUlkiLCIkZXhwb3J0IiwicmVkZWZpbmUiLCJJdGVyYXRvcnMiLCIkaXRlckNyZWF0ZSIsInNldFRvU3RyaW5nVGFnIiwiZ2V0UHJvdG90eXBlT2YiLCJJVEVSQVRPUiIsIkJVR0dZIiwia2V5cyIsIkZGX0lURVJBVE9SIiwiS0VZUyIsIlZBTFVFUyIsInJldHVyblRoaXMiLCJCYXNlIiwiTkFNRSIsIkNvbnN0cnVjdG9yIiwibmV4dCIsIkRFRkFVTFQiLCJJU19TRVQiLCJGT1JDRUQiLCJnZXRNZXRob2QiLCJraW5kIiwicHJvdG8iLCJ2YWx1ZXMiLCJlbnRyaWVzIiwiVEFHIiwiREVGX1ZBTFVFUyIsIlZBTFVFU19CVUciLCIkbmF0aXZlIiwiJGRlZmF1bHQiLCIkZW50cmllcyIsIiRhbnlOYXRpdmUiLCJtZXRob2RzIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJGIiwiYml0bWFwIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZGVmIiwidGFnIiwic3RhdCIsInNoYXJlZCIsImNlaWwiLCJmbG9vciIsImlzTmFOIiwiZm9yYmlkZGVuRmllbGQiLCJjb2YiLCJBUkciLCJ0cnlHZXQiLCJUIiwiQiIsImNhbGxlZSIsInNsaWNlIiwiZG9jdW1lbnQiLCJpcyIsImNyZWF0ZUVsZW1lbnQiLCJjdHgiLCJQUk9UT1RZUEUiLCJ0eXBlIiwic291cmNlIiwiSVNfRk9SQ0VEIiwiSVNfR0xPQkFMIiwiRyIsIklTX1NUQVRJQyIsIlMiLCJJU19QUk9UTyIsIklTX0JJTkQiLCJ0YXJnZXQiLCJleHBQcm90byIsIm93biIsIm91dCIsImV4cCIsIlUiLCJXIiwiUiIsImlzQXJyYXlJdGVyIiwidG9MZW5ndGgiLCJnZXRJdGVyRm4iLCJCUkVBSyIsIlJFVFVSTiIsIml0ZXJhYmxlIiwiaXRlckZuIiwiaW5kZXgiLCJzdGVwIiwiaXRlcmF0b3IiLCJyZXN1bHQiLCJkb25lIiwiTUVUQSIsInNldERlc2MiLCJpc0V4dGVuc2libGUiLCJGUkVFWkUiLCJwcmV2ZW50RXh0ZW5zaW9ucyIsInNldE1ldGEiLCJpIiwidyIsImZhc3RLZXkiLCJjcmVhdGUiLCJnZXRXZWFrIiwib25GcmVlemUiLCJtZXRhIiwiTkVFRCIsIktFWSIsImRQcyIsImVudW1CdWdLZXlzIiwiSUVfUFJPVE8iLCJFbXB0eSIsImNyZWF0ZURpY3QiLCJpZnJhbWUiLCJsdCIsImd0IiwiaWZyYW1lRG9jdW1lbnQiLCJzdHlsZSIsImRpc3BsYXkiLCJhcHBlbmRDaGlsZCIsInNyYyIsImNvbnRlbnRXaW5kb3ciLCJvcGVuIiwid3JpdGUiLCJjbG9zZSIsIlByb3BlcnRpZXMiLCJTSEFSRUQiLCJ0b0ludGVnZXIiLCJtaW4iLCJ2YWx1ZU9mIiwid2F0Y2hQcm9taXNlSW1wbGVtZW50YXRpb24iLCJ1bndhdGNoUHJvbWlzZUltcGxlbWVudGF0aW9uIiwiaW5zdGFsbCIsInVuaW5zdGFsbCIsInNldHVwUHJvbWlzZURldGVjdGlvbiIsImRldGVjdFN0cmF5UHJvbWlzZXMiLCJzdHJheVByb21pc2VzIiwiaXNJbnN0YWxsZWQiLCJpc0NsZWFuaW5nVXAiLCJpZHgiLCJnbG9iYWxEZWJ1Z01vZGUiLCJwcm9jZXNzIiwiZW52IiwiU1RSQVlfUFJPTUlTRV9ERUJVRyIsImlzRGVidWciLCJXQVRDSEVEX1BST01JU0VfTUVUSE9EUyIsIldBVENIRURfUFJPTUlTRV9JTVBMRU1FTlRBVElPTlMiLCJNYXAiLCJyZWJpbmRSZXNvbHZlciIsImxvY2FsSWR4IiwicmVib3VuZFJlc29sdmVyIiwic29tZSIsInN0cmF5UHJvbWlzZSIsImhhc0JlZW5DYWxsZWQiLCJvcmlnaW5hbEZuIiwicmViaW5kVGhlbmFibGUiLCJtZXRob2QiLCJ0aGVuYWJsZVByb3RvdHlwZSIsInJlYm91bmRUaGVuYWJsZSIsImFyZ3MiLCJlcnIiLCJFcnJvciIsInByb21pc2VEYXRhIiwicHVzaCIsIm5ld1Byb21pc2UiLCJtYXAiLCJwcm9taXNlIiwid2lyZVByb21pc2VIb29rcyIsImZvckVhY2giLCJwcm90b0NhY2hlIiwicHJvbWlzZUltcGwiLCJ1bndpcmVQcm9taXNlSG9va3MiLCJzZXQiLCJkZWxldGUiLCJfaWdub3JlU3RyYXlQcm9taXNlcyIsIl9fc3RyYXlQcm9taXNlc0lnbm9yZWQiLCJfZW5hYmxlU3RyYXlQcm9taXNlc0RlYnVnZ2luZyIsImxvY2FsU3RyYXlQcm9taXNlcyIsImZpbHRlclVucmVzb2x2ZWQiLCJ1bnJlc29sdmVkUHJvbWlzZXMiLCJmaWx0ZXIiLCJQcm9taXNlIiwiYWxsIiwiaXNDYXRjaFN0YXRlbWVudCIsImlzVGhlblN0YXRlbWVudCIsInRoZW4iLCJkYXRhIiwiY2F0Y2giLCJmaXJzdFN0cmF5UHJvbWlzZSIsInNoaWZ0IiwiYXJnIiwiY29uc29sZSIsImxvZyIsImZhaWwiLCJVTlNDT1BBQkxFUyIsIkFycmF5UHJvdG8iLCJBcnJheSIsInRvSU9iamVjdCIsInRvSW5kZXgiLCJJU19JTkNMVURFUyIsIiR0aGlzIiwiZWwiLCJmcm9tSW5kZXgiLCJyZWRlZmluZUFsbCIsImFuSW5zdGFuY2UiLCJmb3JPZiIsIiRpdGVyRGVmaW5lIiwic2V0U3BlY2llcyIsIkRFU0NSSVBUT1JTIiwiU0laRSIsImdldEVudHJ5IiwiZW50cnkiLCJfaSIsIl9mIiwibiIsImsiLCJnZXRDb25zdHJ1Y3RvciIsIndyYXBwZXIiLCJJU19NQVAiLCJBRERFUiIsIkMiLCJfbCIsImNsZWFyIiwiciIsInAiLCJwcmV2IiwiY2FsbGJhY2tmbiIsInYiLCJzZXRTdHJvbmciLCJpdGVyYXRlZCIsIl90IiwiX2siLCJmYWlscyIsIiRpdGVyRGV0ZWN0IiwiaW5oZXJpdElmUmVxdWlyZWQiLCJjb21tb24iLCJJU19XRUFLIiwiZml4TWV0aG9kIiwiYWRkIiwiaW5zdGFuY2UiLCJIQVNOVF9DSEFJTklORyIsIlRIUk9XU19PTl9QUklNSVRJVkVTIiwiQUNDRVBUX0lURVJBQkxFUyIsIml0ZXIiLCJCVUdHWV9aRVJPIiwiJGluc3RhbmNlIiwiY29uc3RydWN0b3IiLCJkb2N1bWVudEVsZW1lbnQiLCJzZXRQcm90b3R5cGVPZiIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwicmV0IiwiZGVzY3JpcHRvciIsIlNBRkVfQ0xPU0lORyIsInJpdGVyIiwiZnJvbSIsInNraXBDbG9zaW5nIiwiYXJyIiwiZ2V0S2V5cyIsImRlZmluZVByb3BlcnRpZXMiLCJwSUUiLCJnT1BEIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwidG9PYmplY3QiLCJPYmplY3RQcm90byIsImFycmF5SW5kZXhPZiIsIm5hbWVzIiwiJGtleXMiLCJjaGVjayIsInRlc3QiLCJidWdneSIsIl9fcHJvdG9fXyIsIlNQRUNJRVMiLCJwb3MiLCJzIiwibCIsImNoYXJDb2RlQXQiLCJjaGFyQXQiLCJtYXgiLCJjbGFzc29mIiwiZ2V0SXRlcmF0b3JNZXRob2QiLCJhZGRUb1Vuc2NvcGFibGVzIiwiQXJndW1lbnRzIiwic3Ryb25nIiwiJGF0IiwicG9pbnQiLCIkaXRlcmF0b3JzIiwid2tzIiwiVE9fU1RSSU5HX1RBRyIsIkFycmF5VmFsdWVzIiwiY29sbGVjdGlvbnMiLCJDb2xsZWN0aW9uIiwiY2FjaGVkU2V0VGltZW91dCIsImNhY2hlZENsZWFyVGltZW91dCIsImRlZmF1bHRTZXRUaW1vdXQiLCJkZWZhdWx0Q2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsInJ1blRpbWVvdXQiLCJmdW4iLCJydW5DbGVhclRpbWVvdXQiLCJtYXJrZXIiLCJxdWV1ZSIsImRyYWluaW5nIiwiY3VycmVudFF1ZXVlIiwicXVldWVJbmRleCIsImNsZWFuVXBOZXh0VGljayIsImRyYWluUXVldWUiLCJ0aW1lb3V0IiwibGVuIiwicnVuIiwibmV4dFRpY2siLCJJdGVtIiwiYXJyYXkiLCJ0aXRsZSIsImJyb3dzZXIiLCJhcmd2IiwidmVyc2lvbnMiLCJub29wIiwib24iLCJhZGRMaXN0ZW5lciIsIm9uY2UiLCJvZmYiLCJyZW1vdmVMaXN0ZW5lciIsInJlbW92ZUFsbExpc3RlbmVycyIsImVtaXQiLCJiaW5kaW5nIiwiY3dkIiwiY2hkaXIiLCJkaXIiLCJ1bWFzayIsIl93YXRjaFByb21pc2VJbXBsZW1lbnRhdGlvbiIsImJlZm9yZUFsbCIsImFmdGVyQWxsIiwiYmVmb3JlRWFjaCIsImFmdGVyRWFjaCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzlEQSxJQUFJQSxRQUFhLG1CQUFBQyxDQUFRLEVBQVIsRUFBcUIsS0FBckIsQ0FBakI7QUFBQSxJQUNJQyxNQUFhLG1CQUFBRCxDQUFRLEVB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SUFBUixHQUFlLEVBQWY7QUFDQTlLLFFBQVEzSixPQUFSLEdBQWtCLEVBQWxCLEMsQ0FBc0I7QUFDdEIySixRQUFRK0ssUUFBUixHQUFtQixFQUFuQjs7QUFFQSxTQUFTQyxJQUFULEdBQWdCLENBQUU7O0FBRWxCaEwsUUFBUWlMLEVBQVIsR0FBYUQsSUFBYjtBQUNBaEwsUUFBUWtMLFdBQVIsR0FBc0JGLElBQXRCO0FBQ0FoTCxRQUFRbUwsSUFBUixHQUFlSCxJQUFmO0FBQ0FoTCxRQUFRb0wsR0FBUixHQUFjSixJQUFkO0FBQ0FoTCxRQUFRcUwsY0FBUixHQUF5QkwsSUFBekI7QUFDQWhMLFFBQVFzTCxrQkFBUixHQUE2Qk4sSUFBN0I7QUFDQWhMLFFBQVF1TCxJQUFSLEdBQWVQLElBQWY7O0FBRUFoTCxRQUFRd0wsT0FBUixHQUFrQixVQUFVaFksSUFBVixFQUFnQjtBQUM5QixVQUFNLElBQUk0TixLQUFKLENBQVUsa0NBQVYsQ0FBTjtBQUNILENBRkQ7O0FBSUFwQixRQUFReUwsR0FBUixHQUFjLFlBQVk7QUFBRSxXQUFPLEdBQVA7QUFBWSxDQUF4QztBQUNBekwsUUFBUTBMLEtBQVIsR0FBZ0IsVUFBVUMsR0FBVixFQUFlO0FBQzNCLFVBQU0sSUFBSXZLLEtBQUosQ0FBVSxnQ0FBVixDQUFOO0FBQ0gsQ0FGRDtBQUdBcEIsUUFBUTRMLEtBQVIsR0FBZ0IsWUFBVztBQUFFLFdBQU8sQ0FBUDtBQUFXLENBQXhDLEM7Ozs7Ozs7OztBQ2pMQTs7QUFRQTtBQUNBbFksT0FBT21ZLDJCQUFQOztBQUVBO0FBYkE7O0FBY0FDOztBQUVBQzs7QUFFQUM7O0FBRUFDOztBQUVBLElBQUl2WSxPQUFPOE8sT0FBWCxFQUFvQjtBQUNsQjtBQUNBLDRDQUEyQkEsT0FBM0I7QUFDRCxDIiwiZmlsZSI6Imphc21pbmUtc3RyYXktcHJvbWlzZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9yeSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb3J5IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHR9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNjkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDA1MGRiZWQzNWUxNTI1NDE5ZjhhIiwidmFyIHN0b3JlICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJylcbiAgLCB1aWQgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCBTeW1ib2wgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sXG4gICwgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX3drcy5qcyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fZ2xvYmFsLmpzIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2hhcy5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2FuLW9iamVjdC5qcyIsInZhciBkUCAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9faGlkZS5qcyIsInZhciBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGRQICAgICAgICAgICAgID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyl7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZignZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKU9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcC5qcyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhpZGUgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIGhhcyAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgU1JDICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJykoJ3NyYycpXG4gICwgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJ1xuICAsICR0b1N0cmluZyA9IEZ1bmN0aW9uW1RPX1NUUklOR11cbiAgLCBUUEwgICAgICAgPSAoJycgKyAkdG9TdHJpbmcpLnNwbGl0KFRPX1NUUklORyk7XG5cbnJlcXVpcmUoJy4vX2NvcmUnKS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gJHRvU3RyaW5nLmNhbGwoaXQpO1xufTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTywga2V5LCB2YWwsIHNhZmUpe1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJztcbiAgaWYoaXNGdW5jdGlvbiloYXModmFsLCAnbmFtZScpIHx8IGhpZGUodmFsLCAnbmFtZScsIGtleSk7XG4gIGlmKE9ba2V5XSA9PT0gdmFsKXJldHVybjtcbiAgaWYoaXNGdW5jdGlvbiloYXModmFsLCBTUkMpIHx8IGhpZGUodmFsLCBTUkMsIE9ba2V5XSA/ICcnICsgT1trZXldIDogVFBMLmpvaW4oU3RyaW5nKGtleSkpKTtcbiAgaWYoTyA9PT0gZ2xvYmFsKXtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSB7XG4gICAgaWYoIXNhZmUpe1xuICAgICAgZGVsZXRlIE9ba2V5XTtcbiAgICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZihPW2tleV0pT1trZXldID0gdmFsO1xuICAgICAgZWxzZSBoaWRlKE8sIGtleSwgdmFsKTtcbiAgICB9XG4gIH1cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxufSkoRnVuY3Rpb24ucHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG4gIHJldHVybiB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nICYmIHRoaXNbU1JDXSB8fCAkdG9TdHJpbmcuY2FsbCh0aGlzKTtcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qcyIsIm1vZHVsZS5leHBvcnRzID0ge307XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuNC4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fY29yZS5qcyIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2N0eC5qcyIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19mYWlscy5qcyIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ2YXIgaWQgPSAwXG4gICwgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fdWlkLmpzIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIGhpZGUgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIEl0ZXJhdG9ycyAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCAkaXRlckNyZWF0ZSAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKVxuICAsIElURVJBVE9SICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBCVUdHWSAgICAgICAgICA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKSAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gICwgRkZfSVRFUkFUT1IgICAgPSAnQEBpdGVyYXRvcidcbiAgLCBLRVlTICAgICAgICAgICA9ICdrZXlzJ1xuICAsIFZBTFVFUyAgICAgICAgID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKXtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24oa2luZCl7XG4gICAgaWYoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaChraW5kKXtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHICAgICAgICA9IE5BTUUgKyAnIEl0ZXJhdG9yJ1xuICAgICwgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTXG4gICAgLCBWQUxVRVNfQlVHID0gZmFsc2VcbiAgICAsIHByb3RvICAgICAgPSBCYXNlLnByb3RvdHlwZVxuICAgICwgJG5hdGl2ZSAgICA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXVxuICAgICwgJGRlZmF1bHQgICA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpXG4gICAgLCAkZW50cmllcyAgID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZFxuICAgICwgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmVcbiAgICAsIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYoJGFueU5hdGl2ZSl7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UpKTtcbiAgICBpZihJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSl7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKWhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZihERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpe1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKXtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddICA9IHJldHVyblRoaXM7XG4gIGlmKERFRkFVTFQpe1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6ICBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6ICAgIElTX1NFVCAgICAgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZihGT1JDRUQpZm9yKGtleSBpbiBtZXRob2RzKXtcbiAgICAgIGlmKCEoa2V5IGluIHByb3RvKSlyZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19pdGVyLWRlZmluZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaGFzID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcbiAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSlkZWYoaXQsIFRBRywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZ30pO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIENvbnN0cnVjdG9yLCBuYW1lLCBmb3JiaWRkZW5GaWVsZCl7XG4gIGlmKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKXtcbiAgICB0aHJvdyBUeXBlRXJyb3IobmFtZSArICc6IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuICB9IHJldHVybiBpdDtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2FuLWluc3RhbmNlLmpzIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXG4gIC8vIEVTMyB3cm9uZyBoZXJlXG4gICwgQVJHID0gY29mKGZ1bmN0aW9uKCl7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fY2xhc3NvZi5qcyIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2NvZi5qcyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudFxuICAvLyBpbiBvbGQgSUUgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCdcbiAgLCBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgcmVkZWZpbmUgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSB8fCAoZ2xvYmFsW25hbWVdID0ge30pIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIGV4cFByb3RvICA9IGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pXG4gICAgLCBrZXksIG93biwgb3V0LCBleHA7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IChvd24gPyB0YXJnZXQgOiBzb3VyY2UpW2tleV07XG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICBleHAgPSBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHRlbmQgZ2xvYmFsXG4gICAgaWYodGFyZ2V0KXJlZGVmaW5lKHRhcmdldCwga2V5LCBvdXQsIHR5cGUgJiAkZXhwb3J0LlUpO1xuICAgIC8vIGV4cG9ydFxuICAgIGlmKGV4cG9ydHNba2V5XSAhPSBvdXQpaGlkZShleHBvcnRzLCBrZXksIGV4cCk7XG4gICAgaWYoSVNfUFJPVE8gJiYgZXhwUHJvdG9ba2V5XSAhPSBvdXQpZXhwUHJvdG9ba2V5XSA9IG91dDtcbiAgfVxufTtcbmdsb2JhbC5jb3JlID0gY29yZTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWAgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2V4cG9ydC5qcyIsInZhciBjdHggICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgY2FsbCAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKVxuICAsIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpXG4gICwgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIHRvTGVuZ3RoICAgID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCBnZXRJdGVyRm4gICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJylcbiAgLCBCUkVBSyAgICAgICA9IHt9XG4gICwgUkVUVVJOICAgICAgPSB7fTtcbnZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKXtcbiAgdmFyIGl0ZXJGbiA9IElURVJBVE9SID8gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKVxuICAgICwgZiAgICAgID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpXG4gICAgLCBpbmRleCAgPSAwXG4gICAgLCBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXRlcmFibGUgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgLy8gZmFzdCBjYXNlIGZvciBhcnJheXMgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yXG4gIGlmKGlzQXJyYXlJdGVyKGl0ZXJGbikpZm9yKGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTilyZXR1cm4gcmVzdWx0O1xuICB9IGVsc2UgZm9yKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7ICl7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTilyZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuZXhwb3J0cy5CUkVBSyAgPSBCUkVBSztcbmV4cG9ydHMuUkVUVVJOID0gUkVUVVJOO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19mb3Itb2YuanMiLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsInZhciBNRVRBICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJylcbiAgLCBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgaGFzICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHNldERlc2MgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGlkICAgICAgID0gMDtcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uKGl0KXtcbiAgc2V0RGVzYyhpdCwgTUVUQSwge3ZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfX0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24oaXQsIGNyZWF0ZSl7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZighaGFzKGl0LCBNRVRBKSl7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYoIWNyZWF0ZSlyZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuICBpZighaGFzKGl0LCBNRVRBKSl7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmKCFjcmVhdGUpcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbihpdCl7XG4gIGlmKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSlzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogICAgICBNRVRBLFxuICBORUVEOiAgICAgZmFsc2UsXG4gIGZhc3RLZXk6ICBmYXN0S2V5LFxuICBnZXRXZWFrOiAgZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19tZXRhLmpzIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGRQcyAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIEVtcHR5ICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIFBST1RPVFlQRSAgID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24oKXtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJylcbiAgICAsIGkgICAgICA9IGVudW1CdWdLZXlzLmxlbmd0aFxuICAgICwgbHQgICAgID0gJzwnXG4gICAgLCBndCAgICAgPSAnPidcbiAgICAsIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlKGktLSlkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcyl7XG4gIHZhciByZXN1bHQ7XG4gIGlmKE8gIT09IG51bGwpe1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ2YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0YXJnZXQsIHNyYywgc2FmZSl7XG4gIGZvcih2YXIga2V5IGluIHNyYylyZWRlZmluZSh0YXJnZXQsIGtleSwgc3JjW2tleV0sIHNhZmUpO1xuICByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXydcbiAgLCBzdG9yZSAgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLmpzIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIFMpe1xuICBpZighaXNPYmplY3QoaXQpKXJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZighUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJpbXBvcnQgJ2NvcmUtanMvZXM2L21hcCc7XG5cbmxldCBzdHJheVByb21pc2VzID0gW107XG5sZXQgaXNJbnN0YWxsZWQgPSBmYWxzZTtcbmxldCBpc0NsZWFuaW5nVXAgPSBmYWxzZTtcbi8vIEludGVybmFsIHByb21pc2UgcmVmZXJlbmNlIGNvdW50ZXJcbmxldCBpZHggPSAwO1xuXG4vKiBnbG9iYWwgcHJvY2VzcyAqL1xuY29uc3QgZ2xvYmFsRGVidWdNb2RlID0gKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBwcm9jZXNzLmVudiAmJiBwcm9jZXNzLmVudi5TVFJBWV9QUk9NSVNFX0RFQlVHKTtcbmxldCBpc0RlYnVnID0gZ2xvYmFsRGVidWdNb2RlO1xuXG5jb25zdCBXQVRDSEVEX1BST01JU0VfTUVUSE9EUyA9IFsndGhlbicsICdjYXRjaCddO1xuY29uc3QgV0FUQ0hFRF9QUk9NSVNFX0lNUExFTUVOVEFUSU9OUyA9IG5ldyBNYXAoKTtcblxuLyoqXG4gKiBSZWJpbmQgYW4gaW5kaXZpZHVhbCByZXNvbHZlciBmdW5jdGlvblxuICogZXguIGAudGhlbihyZXNvbHZlcilgXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbnwqfSBmblxuICogQHBhcmFtIHtOdW1iZXJ9IGxvY2FsSWR4XG4gKiBAcmV0dXJucyB7RnVuY3Rpb258Kn1cbiAqL1xuZnVuY3Rpb24gcmViaW5kUmVzb2x2ZXIoZm4sIGxvY2FsSWR4KSB7XG4gIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicgfHwgaXNDbGVhbmluZ1VwKSB7XG4gICAgcmV0dXJuIGZuO1xuICB9XG4gIGZ1bmN0aW9uIHJlYm91bmRSZXNvbHZlcigpIHtcbiAgICBzdHJheVByb21pc2VzLnNvbWUoKHN0cmF5UHJvbWlzZSkgPT4ge1xuICAgICAgaWYgKHN0cmF5UHJvbWlzZS5pZCAhPT0gbG9jYWxJZHggfHwgaXNDbGVhbmluZ1VwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHN0cmF5UHJvbWlzZS5oYXNCZWVuQ2FsbGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG4gIGlmIChpc0RlYnVnKSB7XG4gICAgcmVib3VuZFJlc29sdmVyLm9yaWdpbmFsRm4gPSBTdHJpbmcoZm4pO1xuICB9XG4gIHJldHVybiByZWJvdW5kUmVzb2x2ZXI7XG59XG5cbi8qKlxuICogUmViaW5kIGEgdGhlbmFibGUgY2FsbGJhY2tcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0aGVuYWJsZVByb3RvdHlwZVxuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiByZWJpbmRUaGVuYWJsZShtZXRob2QsIHRoZW5hYmxlUHJvdG90eXBlKSB7XG4gIHJldHVybiBmdW5jdGlvbiByZWJvdW5kVGhlbmFibGUoLi4uYXJncykge1xuICAgIGlmIChpc0NsZWFuaW5nVXApIHtcbiAgICAgIHJldHVybiB0aGVuYWJsZVByb3RvdHlwZS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG5cbiAgICBjb25zdCBsb2NhbElkeCA9IGlkeCsrO1xuXG4gICAgLy8gbXVzdCB0aHJvdyB0aGUgZXJyb3IgZm9yIFBoYW50b21KUyB0byBnZW5lcmF0ZSB0aGUgc3RhY2sgdHJhY2VcbiAgICBsZXQgZXJyO1xuICAgIHRyeSB7XG4gICAgICAvLyBVc2UgdGhpcyBlcnJvciBtZXNzYWdlIGR1cmluZyBkZXZlbG9wbWVudFxuICAgICAgaWYgKGlzRGVidWcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBQcm9taXNlIFwiJHttZXRob2R9XCIgd2l0aCBpZCBcIiR7bG9jYWxJZHh9XCIgcmVzb2x2ZWQgb3V0c2lkZSB0ZXN0IGNvbnN0cmFpbnRzYCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBQcm9taXNlIFwiJHttZXRob2R9XCIgcmVzb2x2ZWQgb3V0c2lkZSB0ZXN0IGNvbnN0cmFpbnRzYCk7XG4gICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICBlcnIgPSBlO1xuICAgIH1cbiAgICBjb25zdCBwcm9taXNlRGF0YSA9IHtcbiAgICAgIGlkOiBsb2NhbElkeCxcbiAgICAgIGhhc0JlZW5DYWxsZWQ6IGZhbHNlLFxuICAgICAgYXJncyxcbiAgICAgIGVycixcbiAgICAgIG1ldGhvZFxuICAgIH07XG4gICAgc3RyYXlQcm9taXNlcy5wdXNoKHByb21pc2VEYXRhKTtcblxuICAgIGNvbnN0IG5ld1Byb21pc2UgPSB0aGVuYWJsZVByb3RvdHlwZS5hcHBseShcbiAgICAgIHRoaXMsXG4gICAgICBhcmdzLm1hcCgoZm4pID0+IHJlYmluZFJlc29sdmVyKGZuLCBsb2NhbElkeCkpXG4gICAgKTtcblxuICAgIC8vIGtlZXAgYSBoYW5keSBjYWxsIHN0YWNrIHJlZmVyZW5jZVxuICAgIHByb21pc2VEYXRhLnByb21pc2UgPSB0aGlzO1xuXG4gICAgcmV0dXJuIG5ld1Byb21pc2U7XG4gIH07XG59XG5cbi8qKlxuICogSG9vayB1cCBhbGwgd2F0Y2hlZCBQcm9taXNlIGltcGxlbWVudGF0aW9uc1xuICovXG5mdW5jdGlvbiB3aXJlUHJvbWlzZUhvb2tzKCkge1xuICBXQVRDSEVEX1BST01JU0VfSU1QTEVNRU5UQVRJT05TLmZvckVhY2goKHByb3RvQ2FjaGUsIHByb21pc2VJbXBsKSA9PiB7XG4gICAgaWYgKHByb3RvQ2FjaGUuaXNJbnN0YWxsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcHJvdG9DYWNoZS5pc0luc3RhbGxlZCA9IHRydWU7XG4gICAgV0FUQ0hFRF9QUk9NSVNFX01FVEhPRFMuZm9yRWFjaCgobWV0aG9kKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIHByb21pc2VJbXBsLnByb3RvdHlwZVttZXRob2RdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByb21pc2VJbXBsLnByb3RvdHlwZVttZXRob2RdID0gcmViaW5kVGhlbmFibGUobWV0aG9kLCBwcm90b0NhY2hlW21ldGhvZF0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgYWxsIHdhdGNoZWQgUHJvbWlzZSBpbXBsZW1lbnRhdGlvbiBob29rc1xuICovXG5mdW5jdGlvbiB1bndpcmVQcm9taXNlSG9va3MoKSB7XG4gIFdBVENIRURfUFJPTUlTRV9JTVBMRU1FTlRBVElPTlMuZm9yRWFjaCgocHJvdG9DYWNoZSwgcHJvbWlzZUltcGwpID0+IHtcbiAgICBpZiAoIXByb3RvQ2FjaGUuaXNJbnN0YWxsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcHJvdG9DYWNoZS5pc0luc3RhbGxlZCA9IGZhbHNlO1xuICAgIFdBVENIRURfUFJPTUlTRV9NRVRIT0RTLmZvckVhY2goKG1ldGhvZCkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBwcm9taXNlSW1wbC5wcm90b3R5cGVbbWV0aG9kXSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgcHJvdG9DYWNoZVttZXRob2RdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByb21pc2VJbXBsLnByb3RvdHlwZVttZXRob2RdID0gcHJvdG9DYWNoZVttZXRob2RdO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBNYXJrIGEgc3BlY2lmaWMgUHJvbWlzZSBpbXBsZW1lbnRhdGlvbiBhcyBcIndhdGNoZWRcIlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByb21pc2VJbXBsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3YXRjaFByb21pc2VJbXBsZW1lbnRhdGlvbihwcm9taXNlSW1wbCkge1xuICBpZiAoV0FUQ0hFRF9QUk9NSVNFX0lNUExFTUVOVEFUSU9OUy5oYXMocHJvbWlzZUltcGwpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHByb3RvQ2FjaGUgPSB7fTtcbiAgV0FUQ0hFRF9QUk9NSVNFX01FVEhPRFMuZm9yRWFjaCgobWV0aG9kKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBwcm9taXNlSW1wbC5wcm90b3R5cGVbbWV0aG9kXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvdG9DYWNoZVttZXRob2RdID0gcHJvbWlzZUltcGwucHJvdG90eXBlW21ldGhvZF07XG4gICAgfVxuICB9KTtcbiAgV0FUQ0hFRF9QUk9NSVNFX0lNUExFTUVOVEFUSU9OUy5zZXQocHJvbWlzZUltcGwsIHByb3RvQ2FjaGUpO1xuICBpZiAoaXNJbnN0YWxsZWQpIHtcbiAgICB3aXJlUHJvbWlzZUhvb2tzKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBNYXJrIGEgc3BlY2lmaWMgUHJvbWlzZSBpbXBsZW1lbnRhdGlvbiBhcyBcInVud2F0Y2hlZFwiXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJvbWlzZUltcGxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVud2F0Y2hQcm9taXNlSW1wbGVtZW50YXRpb24ocHJvbWlzZUltcGwpIHtcbiAgV0FUQ0hFRF9QUk9NSVNFX0lNUExFTUVOVEFUSU9OUy5kZWxldGUocHJvbWlzZUltcGwpO1xufVxuXG4vKipcbiAqIE92ZXJyaWRlIHRoZSB0aW1lciBmdW5jdGlvbnMgd2l0aCB0aGUgdGVzdGVkIGZ1bmN0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gaW5zdGFsbCgpIHtcbiAgaWYgKGlzSW5zdGFsbGVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlzSW5zdGFsbGVkID0gdHJ1ZTtcbiAgd2lyZVByb21pc2VIb29rcygpO1xufVxuXG4vKipcbiAqIFJlc3RvcmUgdGhlIG9yaWdpbmFsIHRpbWVyIGZ1bmN0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gdW5pbnN0YWxsKCkge1xuICBpZiAoIWlzSW5zdGFsbGVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlzSW5zdGFsbGVkID0gZmFsc2U7XG4gIHVud2lyZVByb21pc2VIb29rcygpO1xufVxuXG4vKipcbiAqIFNldCB1cCBqYXNtaW5lIGluc3RhbmNlIHZhcmlhYmxlIGZvciBpZ25vcmluZyBwcm9taXNlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBQcm9taXNlRGV0ZWN0aW9uKCkge1xuICBzdHJheVByb21pc2VzID0gW107XG4gIGlzQ2xlYW5pbmdVcCA9IGZhbHNlO1xuICBpc0RlYnVnID0gZ2xvYmFsRGVidWdNb2RlO1xuXG4gIHRoaXMuX2lnbm9yZVN0cmF5UHJvbWlzZXMgPSAoKSA9PiB7XG4gICAgdGhpcy5fX3N0cmF5UHJvbWlzZXNJZ25vcmVkID0gdHJ1ZTtcbiAgfTtcblxuICB0aGlzLl9lbmFibGVTdHJheVByb21pc2VzRGVidWdnaW5nID0gKCkgPT4ge1xuICAgIGlzRGVidWcgPSB0cnVlO1xuICB9O1xufVxuXG4vKipcbiAqIERldGVjdCBhbnkgc3RyYXkgdGltZXJzIHVzZWQgaW4gYmVmb3JlRWFjaCwgYWZ0ZXJFYWNoXG4gKlxuICogQHRocm93cyB7RXJyb3J9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXRlY3RTdHJheVByb21pc2VzKGRvbmUpIHtcbiAgLy8gZmluZCBzdHJheSBwcm9taXNlcyBmcm9tIGN1cnJlbnQgdGVzdHNcbiAgY29uc3QgbG9jYWxTdHJheVByb21pc2VzID0gWy4uLnN0cmF5UHJvbWlzZXNdO1xuICBpc0NsZWFuaW5nVXAgPSB0cnVlO1xuXG4gIC8vIHJlc2V0IHRpbWVyIGNhY2hlIGZvciBuZXh0IHRlc3RcbiAgc3RyYXlQcm9taXNlcyA9IFtdO1xuXG4gIGlmICghdGhpcy5fX3N0cmF5UHJvbWlzZXNJZ25vcmVkICYmIGxvY2FsU3RyYXlQcm9taXNlcy5sZW5ndGggPiAwKSB7XG4gICAgbGV0IHVucmVzb2x2ZWRQcm9taXNlcyA9IFsuLi5sb2NhbFN0cmF5UHJvbWlzZXNdLmZpbHRlcigoeyBoYXNCZWVuQ2FsbGVkIH0pID0+ICFoYXNCZWVuQ2FsbGVkKTtcblxuICAgIGZ1bmN0aW9uIGZpbHRlclVucmVzb2x2ZWQodmFsKSB7XG4gICAgICB1bnJlc29sdmVkUHJvbWlzZXMgPSB1bnJlc29sdmVkUHJvbWlzZXMuZmlsdGVyKCh7IGlkIH0pID0+IGlkICE9PSB2YWwuaWQpO1xuICAgIH1cblxuICAgIFByb21pc2UuYWxsKFxuICAgICAgWy4uLnVucmVzb2x2ZWRQcm9taXNlc10ubWFwKCh2YWwpID0+IHtcbiAgICAgICAgY29uc3QgaXNDYXRjaFN0YXRlbWVudCA9IHZhbC5tZXRob2QgPT09ICdjYXRjaCcgfHwgKHZhbC5tZXRob2QgPT09ICd0aGVuJyAmJiAhdmFsLmFyZ3NbMF0pO1xuICAgICAgICBjb25zdCBpc1RoZW5TdGF0ZW1lbnQgPSB2YWwubWV0aG9kID09PSAndGhlbicgJiYgdHlwZW9mIHZhbC5hcmdzWzBdID09PSAnZnVuY3Rpb24nO1xuICAgICAgICAvLyBNdXN0IGNsZWFyIHVwIGFueSBcImNhdGNoXCIgc3RhdGVtZW50cyB0aGF0IHdlcmUgbmV2ZXIgY2FsbGVkXG4gICAgICAgIHJldHVybiB2YWwucHJvbWlzZVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIC8vIGZpbHRlciBvdXQgY2F0Y2ggY2xhdXNlcyB3aGVyZSB0aGUgcmVzb2x1dGlvbiBvZiB0aGUgcHJvbWlzZSB3YXMgYSBzdWNjZXNzXG4gICAgICAgICAgaWYgKGlzQ2F0Y2hTdGF0ZW1lbnQpIHtcbiAgICAgICAgICAgIGZpbHRlclVucmVzb2x2ZWQodmFsKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgaWYgKCh2YWwuaGFzQmVlbkNhbGxlZCAmJiBpc0NhdGNoU3RhdGVtZW50KSB8fCBpc1RoZW5TdGF0ZW1lbnQpIHtcbiAgICAgICAgICAgIGZpbHRlclVucmVzb2x2ZWQodmFsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICApXG4gICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICBpc0NsZWFuaW5nVXAgPSBmYWxzZTtcbiAgICAgIGlmICh1bnJlc29sdmVkUHJvbWlzZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBmaXJzdFN0cmF5UHJvbWlzZSA9IHVucmVzb2x2ZWRQcm9taXNlcy5zaGlmdCgpO1xuICAgICAgICBpZiAoaXNEZWJ1Zykge1xuICAgICAgICAgIGZpcnN0U3RyYXlQcm9taXNlLmFyZ3MuZm9yRWFjaCgoYXJnKSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGFyZyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU3RyYXkgcHJvbWlzZScsIGZpcnN0U3RyYXlQcm9taXNlLmlkLCBmaXJzdFN0cmF5UHJvbWlzZS5tZXRob2QsIFN0cmluZyhhcmcuZm4gfHwgYXJnKSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZmlyc3RTdHJheVByb21pc2UuZXJyO1xuICAgICAgfVxuICAgIH0pXG4gICAgLnRoZW4oZG9uZSwgZG9uZS5mYWlsKTtcbiAgfVxuICBlbHNlIHtcbiAgICBkb25lKCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9taXNlcy5qcyIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5tYXAnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLk1hcDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvZXM2L21hcC5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwiLy8gMjIuMS4zLjMxIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxudmFyIFVOU0NPUEFCTEVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3Vuc2NvcGFibGVzJylcbiAgLCBBcnJheVByb3RvICA9IEFycmF5LnByb3RvdHlwZTtcbmlmKEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdID09IHVuZGVmaW5lZClyZXF1aXJlKCcuL19oaWRlJykoQXJyYXlQcm90bywgVU5TQ09QQUJMRVMsIHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgQXJyYXlQcm90b1tVTlNDT1BBQkxFU11ba2V5XSA9IHRydWU7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvTGVuZ3RoICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgdG9JbmRleCAgID0gcmVxdWlyZSgnLi9fdG8taW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oSVNfSU5DTFVERVMpe1xuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGVsLCBmcm9tSW5kZXgpe1xuICAgIHZhciBPICAgICAgPSB0b0lPYmplY3QoJHRoaXMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSB0b0luZGV4KGZyb21JbmRleCwgbGVuZ3RoKVxuICAgICAgLCB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgaWYoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpd2hpbGUobGVuZ3RoID4gaW5kZXgpe1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgaWYodmFsdWUgIT0gdmFsdWUpcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjdG9JbmRleCBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pe1xuICAgICAgaWYoT1tpbmRleF0gPT09IGVsKXJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGRQICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGNyZWF0ZSAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgcmVkZWZpbmVBbGwgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKVxuICAsIGN0eCAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBhbkluc3RhbmNlICA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJylcbiAgLCBkZWZpbmVkICAgICA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKVxuICAsIGZvck9mICAgICAgID0gcmVxdWlyZSgnLi9fZm9yLW9mJylcbiAgLCAkaXRlckRlZmluZSA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJylcbiAgLCBzdGVwICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpXG4gICwgc2V0U3BlY2llcyAgPSByZXF1aXJlKCcuL19zZXQtc3BlY2llcycpXG4gICwgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpXG4gICwgZmFzdEtleSAgICAgPSByZXF1aXJlKCcuL19tZXRhJykuZmFzdEtleVxuICAsIFNJWkUgICAgICAgID0gREVTQ1JJUFRPUlMgPyAnX3MnIDogJ3NpemUnO1xuXG52YXIgZ2V0RW50cnkgPSBmdW5jdGlvbih0aGF0LCBrZXkpe1xuICAvLyBmYXN0IGNhc2VcbiAgdmFyIGluZGV4ID0gZmFzdEtleShrZXkpLCBlbnRyeTtcbiAgaWYoaW5kZXggIT09ICdGJylyZXR1cm4gdGhhdC5faVtpbmRleF07XG4gIC8vIGZyb3plbiBvYmplY3QgY2FzZVxuICBmb3IoZW50cnkgPSB0aGF0Ll9mOyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uKXtcbiAgICBpZihlbnRyeS5rID09IGtleSlyZXR1cm4gZW50cnk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRDb25zdHJ1Y3RvcjogZnVuY3Rpb24od3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUil7XG4gICAgdmFyIEMgPSB3cmFwcGVyKGZ1bmN0aW9uKHRoYXQsIGl0ZXJhYmxlKXtcbiAgICAgIGFuSW5zdGFuY2UodGhhdCwgQywgTkFNRSwgJ19pJyk7XG4gICAgICB0aGF0Ll9pID0gY3JlYXRlKG51bGwpOyAvLyBpbmRleFxuICAgICAgdGhhdC5fZiA9IHVuZGVmaW5lZDsgICAgLy8gZmlyc3QgZW50cnlcbiAgICAgIHRoYXQuX2wgPSB1bmRlZmluZWQ7ICAgIC8vIGxhc3QgZW50cnlcbiAgICAgIHRoYXRbU0laRV0gPSAwOyAgICAgICAgIC8vIHNpemVcbiAgICAgIGlmKGl0ZXJhYmxlICE9IHVuZGVmaW5lZClmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0aGF0W0FEREVSXSwgdGhhdCk7XG4gICAgfSk7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIHtcbiAgICAgIC8vIDIzLjEuMy4xIE1hcC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgLy8gMjMuMi4zLjIgU2V0LnByb3RvdHlwZS5jbGVhcigpXG4gICAgICBjbGVhcjogZnVuY3Rpb24gY2xlYXIoKXtcbiAgICAgICAgZm9yKHZhciB0aGF0ID0gdGhpcywgZGF0YSA9IHRoYXQuX2ksIGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubil7XG4gICAgICAgICAgZW50cnkuciA9IHRydWU7XG4gICAgICAgICAgaWYoZW50cnkucCllbnRyeS5wID0gZW50cnkucC5uID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGRlbGV0ZSBkYXRhW2VudHJ5LmldO1xuICAgICAgICB9XG4gICAgICAgIHRoYXQuX2YgPSB0aGF0Ll9sID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGF0W1NJWkVdID0gMDtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuMyBNYXAucHJvdG90eXBlLmRlbGV0ZShrZXkpXG4gICAgICAvLyAyMy4yLjMuNCBTZXQucHJvdG90eXBlLmRlbGV0ZSh2YWx1ZSlcbiAgICAgICdkZWxldGUnOiBmdW5jdGlvbihrZXkpe1xuICAgICAgICB2YXIgdGhhdCAgPSB0aGlzXG4gICAgICAgICAgLCBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSk7XG4gICAgICAgIGlmKGVudHJ5KXtcbiAgICAgICAgICB2YXIgbmV4dCA9IGVudHJ5Lm5cbiAgICAgICAgICAgICwgcHJldiA9IGVudHJ5LnA7XG4gICAgICAgICAgZGVsZXRlIHRoYXQuX2lbZW50cnkuaV07XG4gICAgICAgICAgZW50cnkuciA9IHRydWU7XG4gICAgICAgICAgaWYocHJldilwcmV2Lm4gPSBuZXh0O1xuICAgICAgICAgIGlmKG5leHQpbmV4dC5wID0gcHJldjtcbiAgICAgICAgICBpZih0aGF0Ll9mID09IGVudHJ5KXRoYXQuX2YgPSBuZXh0O1xuICAgICAgICAgIGlmKHRoYXQuX2wgPT0gZW50cnkpdGhhdC5fbCA9IHByZXY7XG4gICAgICAgICAgdGhhdFtTSVpFXS0tO1xuICAgICAgICB9IHJldHVybiAhIWVudHJ5O1xuICAgICAgfSxcbiAgICAgIC8vIDIzLjIuMy42IFNldC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICAgICAgLy8gMjMuMS4zLjUgTWFwLnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gICAgICBmb3JFYWNoOiBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyosIHRoYXQgPSB1bmRlZmluZWQgKi8pe1xuICAgICAgICBhbkluc3RhbmNlKHRoaXMsIEMsICdmb3JFYWNoJyk7XG4gICAgICAgIHZhciBmID0gY3R4KGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCAzKVxuICAgICAgICAgICwgZW50cnk7XG4gICAgICAgIHdoaWxlKGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uIDogdGhpcy5fZil7XG4gICAgICAgICAgZihlbnRyeS52LCBlbnRyeS5rLCB0aGlzKTtcbiAgICAgICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcbiAgICAgICAgICB3aGlsZShlbnRyeSAmJiBlbnRyeS5yKWVudHJ5ID0gZW50cnkucDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIDIzLjEuMy43IE1hcC5wcm90b3R5cGUuaGFzKGtleSlcbiAgICAgIC8vIDIzLjIuMy43IFNldC5wcm90b3R5cGUuaGFzKHZhbHVlKVxuICAgICAgaGFzOiBmdW5jdGlvbiBoYXMoa2V5KXtcbiAgICAgICAgcmV0dXJuICEhZ2V0RW50cnkodGhpcywga2V5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZihERVNDUklQVE9SUylkUChDLnByb3RvdHlwZSwgJ3NpemUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiBkZWZpbmVkKHRoaXNbU0laRV0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBDO1xuICB9LFxuICBkZWY6IGZ1bmN0aW9uKHRoYXQsIGtleSwgdmFsdWUpe1xuICAgIHZhciBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSlcbiAgICAgICwgcHJldiwgaW5kZXg7XG4gICAgLy8gY2hhbmdlIGV4aXN0aW5nIGVudHJ5XG4gICAgaWYoZW50cnkpe1xuICAgICAgZW50cnkudiA9IHZhbHVlO1xuICAgIC8vIGNyZWF0ZSBuZXcgZW50cnlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhhdC5fbCA9IGVudHJ5ID0ge1xuICAgICAgICBpOiBpbmRleCA9IGZhc3RLZXkoa2V5LCB0cnVlKSwgLy8gPC0gaW5kZXhcbiAgICAgICAgazoga2V5LCAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIGtleVxuICAgICAgICB2OiB2YWx1ZSwgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gdmFsdWVcbiAgICAgICAgcDogcHJldiA9IHRoYXQuX2wsICAgICAgICAgICAgIC8vIDwtIHByZXZpb3VzIGVudHJ5XG4gICAgICAgIG46IHVuZGVmaW5lZCwgICAgICAgICAgICAgICAgICAvLyA8LSBuZXh0IGVudHJ5XG4gICAgICAgIHI6IGZhbHNlICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSByZW1vdmVkXG4gICAgICB9O1xuICAgICAgaWYoIXRoYXQuX2YpdGhhdC5fZiA9IGVudHJ5O1xuICAgICAgaWYocHJldilwcmV2Lm4gPSBlbnRyeTtcbiAgICAgIHRoYXRbU0laRV0rKztcbiAgICAgIC8vIGFkZCB0byBpbmRleFxuICAgICAgaWYoaW5kZXggIT09ICdGJyl0aGF0Ll9pW2luZGV4XSA9IGVudHJ5O1xuICAgIH0gcmV0dXJuIHRoYXQ7XG4gIH0sXG4gIGdldEVudHJ5OiBnZXRFbnRyeSxcbiAgc2V0U3Ryb25nOiBmdW5jdGlvbihDLCBOQU1FLCBJU19NQVApe1xuICAgIC8vIGFkZCAua2V5cywgLnZhbHVlcywgLmVudHJpZXMsIFtAQGl0ZXJhdG9yXVxuICAgIC8vIDIzLjEuMy40LCAyMy4xLjMuOCwgMjMuMS4zLjExLCAyMy4xLjMuMTIsIDIzLjIuMy41LCAyMy4yLjMuOCwgMjMuMi4zLjEwLCAyMy4yLjMuMTFcbiAgICAkaXRlckRlZmluZShDLCBOQU1FLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gICAgICB0aGlzLl90ID0gaXRlcmF0ZWQ7ICAvLyB0YXJnZXRcbiAgICAgIHRoaXMuX2sgPSBraW5kOyAgICAgIC8vIGtpbmRcbiAgICAgIHRoaXMuX2wgPSB1bmRlZmluZWQ7IC8vIHByZXZpb3VzXG4gICAgfSwgZnVuY3Rpb24oKXtcbiAgICAgIHZhciB0aGF0ICA9IHRoaXNcbiAgICAgICAgLCBraW5kICA9IHRoYXQuX2tcbiAgICAgICAgLCBlbnRyeSA9IHRoYXQuX2w7XG4gICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcbiAgICAgIHdoaWxlKGVudHJ5ICYmIGVudHJ5LnIpZW50cnkgPSBlbnRyeS5wO1xuICAgICAgLy8gZ2V0IG5leHQgZW50cnlcbiAgICAgIGlmKCF0aGF0Ll90IHx8ICEodGhhdC5fbCA9IGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uIDogdGhhdC5fdC5fZikpe1xuICAgICAgICAvLyBvciBmaW5pc2ggdGhlIGl0ZXJhdGlvblxuICAgICAgICB0aGF0Ll90ID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gc3RlcCgxKTtcbiAgICAgIH1cbiAgICAgIC8vIHJldHVybiBzdGVwIGJ5IGtpbmRcbiAgICAgIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgZW50cnkuayk7XG4gICAgICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIGVudHJ5LnYpO1xuICAgICAgcmV0dXJuIHN0ZXAoMCwgW2VudHJ5LmssIGVudHJ5LnZdKTtcbiAgICB9LCBJU19NQVAgPyAnZW50cmllcycgOiAndmFsdWVzJyAsICFJU19NQVAsIHRydWUpO1xuXG4gICAgLy8gYWRkIFtAQHNwZWNpZXNdLCAyMy4xLjIuMiwgMjMuMi4yLjJcbiAgICBzZXRTcGVjaWVzKE5BTUUpO1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19jb2xsZWN0aW9uLXN0cm9uZy5qcyIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgJGV4cG9ydCAgICAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIHJlZGVmaW5lQWxsICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJylcbiAgLCBtZXRhICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX21ldGEnKVxuICAsIGZvck9mICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZm9yLW9mJylcbiAgLCBhbkluc3RhbmNlICAgICAgICA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJylcbiAgLCBpc09iamVjdCAgICAgICAgICA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgZmFpbHMgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19mYWlscycpXG4gICwgJGl0ZXJEZXRlY3QgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpXG4gICwgc2V0VG9TdHJpbmdUYWcgICAgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgaW5oZXJpdElmUmVxdWlyZWQgPSByZXF1aXJlKCcuL19pbmhlcml0LWlmLXJlcXVpcmVkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTkFNRSwgd3JhcHBlciwgbWV0aG9kcywgY29tbW9uLCBJU19NQVAsIElTX1dFQUspe1xuICB2YXIgQmFzZSAgPSBnbG9iYWxbTkFNRV1cbiAgICAsIEMgICAgID0gQmFzZVxuICAgICwgQURERVIgPSBJU19NQVAgPyAnc2V0JyA6ICdhZGQnXG4gICAgLCBwcm90byA9IEMgJiYgQy5wcm90b3R5cGVcbiAgICAsIE8gICAgID0ge307XG4gIHZhciBmaXhNZXRob2QgPSBmdW5jdGlvbihLRVkpe1xuICAgIHZhciBmbiA9IHByb3RvW0tFWV07XG4gICAgcmVkZWZpbmUocHJvdG8sIEtFWSxcbiAgICAgIEtFWSA9PSAnZGVsZXRlJyA/IGZ1bmN0aW9uKGEpe1xuICAgICAgICByZXR1cm4gSVNfV0VBSyAmJiAhaXNPYmplY3QoYSkgPyBmYWxzZSA6IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhKTtcbiAgICAgIH0gOiBLRVkgPT0gJ2hhcycgPyBmdW5jdGlvbiBoYXMoYSl7XG4gICAgICAgIHJldHVybiBJU19XRUFLICYmICFpc09iamVjdChhKSA/IGZhbHNlIDogZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEpO1xuICAgICAgfSA6IEtFWSA9PSAnZ2V0JyA/IGZ1bmN0aW9uIGdldChhKXtcbiAgICAgICAgcmV0dXJuIElTX1dFQUsgJiYgIWlzT2JqZWN0KGEpID8gdW5kZWZpbmVkIDogZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEpO1xuICAgICAgfSA6IEtFWSA9PSAnYWRkJyA/IGZ1bmN0aW9uIGFkZChhKXsgZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEpOyByZXR1cm4gdGhpczsgfVxuICAgICAgICA6IGZ1bmN0aW9uIHNldChhLCBiKXsgZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEsIGIpOyByZXR1cm4gdGhpczsgfVxuICAgICk7XG4gIH07XG4gIGlmKHR5cGVvZiBDICE9ICdmdW5jdGlvbicgfHwgIShJU19XRUFLIHx8IHByb3RvLmZvckVhY2ggJiYgIWZhaWxzKGZ1bmN0aW9uKCl7XG4gICAgbmV3IEMoKS5lbnRyaWVzKCkubmV4dCgpO1xuICB9KSkpe1xuICAgIC8vIGNyZWF0ZSBjb2xsZWN0aW9uIGNvbnN0cnVjdG9yXG4gICAgQyA9IGNvbW1vbi5nZXRDb25zdHJ1Y3Rvcih3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKTtcbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwgbWV0aG9kcyk7XG4gICAgbWV0YS5ORUVEID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgaW5zdGFuY2UgICAgICAgICAgICAgPSBuZXcgQ1xuICAgICAgLy8gZWFybHkgaW1wbGVtZW50YXRpb25zIG5vdCBzdXBwb3J0cyBjaGFpbmluZ1xuICAgICAgLCBIQVNOVF9DSEFJTklORyAgICAgICA9IGluc3RhbmNlW0FEREVSXShJU19XRUFLID8ge30gOiAtMCwgMSkgIT0gaW5zdGFuY2VcbiAgICAgIC8vIFY4IH4gIENocm9taXVtIDQwLSB3ZWFrLWNvbGxlY3Rpb25zIHRocm93cyBvbiBwcmltaXRpdmVzLCBidXQgc2hvdWxkIHJldHVybiBmYWxzZVxuICAgICAgLCBUSFJPV1NfT05fUFJJTUlUSVZFUyA9IGZhaWxzKGZ1bmN0aW9uKCl7IGluc3RhbmNlLmhhcygxKTsgfSlcbiAgICAgIC8vIG1vc3QgZWFybHkgaW1wbGVtZW50YXRpb25zIGRvZXNuJ3Qgc3VwcG9ydHMgaXRlcmFibGVzLCBtb3N0IG1vZGVybiAtIG5vdCBjbG9zZSBpdCBjb3JyZWN0bHlcbiAgICAgICwgQUNDRVBUX0lURVJBQkxFUyAgICAgPSAkaXRlckRldGVjdChmdW5jdGlvbihpdGVyKXsgbmV3IEMoaXRlcik7IH0pIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgICAvLyBmb3IgZWFybHkgaW1wbGVtZW50YXRpb25zIC0wIGFuZCArMCBub3QgdGhlIHNhbWVcbiAgICAgICwgQlVHR1lfWkVSTyA9ICFJU19XRUFLICYmIGZhaWxzKGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vIFY4IH4gQ2hyb21pdW0gNDItIGZhaWxzIG9ubHkgd2l0aCA1KyBlbGVtZW50c1xuICAgICAgICB2YXIgJGluc3RhbmNlID0gbmV3IEMoKVxuICAgICAgICAgICwgaW5kZXggICAgID0gNTtcbiAgICAgICAgd2hpbGUoaW5kZXgtLSkkaW5zdGFuY2VbQURERVJdKGluZGV4LCBpbmRleCk7XG4gICAgICAgIHJldHVybiAhJGluc3RhbmNlLmhhcygtMCk7XG4gICAgICB9KTtcbiAgICBpZighQUNDRVBUX0lURVJBQkxFUyl7IFxuICAgICAgQyA9IHdyYXBwZXIoZnVuY3Rpb24odGFyZ2V0LCBpdGVyYWJsZSl7XG4gICAgICAgIGFuSW5zdGFuY2UodGFyZ2V0LCBDLCBOQU1FKTtcbiAgICAgICAgdmFyIHRoYXQgPSBpbmhlcml0SWZSZXF1aXJlZChuZXcgQmFzZSwgdGFyZ2V0LCBDKTtcbiAgICAgICAgaWYoaXRlcmFibGUgIT0gdW5kZWZpbmVkKWZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRoYXRbQURERVJdLCB0aGF0KTtcbiAgICAgICAgcmV0dXJuIHRoYXQ7XG4gICAgICB9KTtcbiAgICAgIEMucHJvdG90eXBlID0gcHJvdG87XG4gICAgICBwcm90by5jb25zdHJ1Y3RvciA9IEM7XG4gICAgfVxuICAgIGlmKFRIUk9XU19PTl9QUklNSVRJVkVTIHx8IEJVR0dZX1pFUk8pe1xuICAgICAgZml4TWV0aG9kKCdkZWxldGUnKTtcbiAgICAgIGZpeE1ldGhvZCgnaGFzJyk7XG4gICAgICBJU19NQVAgJiYgZml4TWV0aG9kKCdnZXQnKTtcbiAgICB9XG4gICAgaWYoQlVHR1lfWkVSTyB8fCBIQVNOVF9DSEFJTklORylmaXhNZXRob2QoQURERVIpO1xuICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgc2hvdWxkIG5vdCBjb250YWlucyAuY2xlYXIgbWV0aG9kXG4gICAgaWYoSVNfV0VBSyAmJiBwcm90by5jbGVhcilkZWxldGUgcHJvdG8uY2xlYXI7XG4gIH1cblxuICBzZXRUb1N0cmluZ1RhZyhDLCBOQU1FKTtcblxuICBPW05BTUVdID0gQztcbiAgJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAoQyAhPSBCYXNlKSwgTyk7XG5cbiAgaWYoIUlTX1dFQUspY29tbW9uLnNldFN0cm9uZyhDLCBOQU1FLCBJU19NQVApO1xuXG4gIHJldHVybiBDO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fY29sbGVjdGlvbi5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19odG1sLmpzIiwidmFyIGlzT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGhhdCwgdGFyZ2V0LCBDKXtcbiAgdmFyIFAsIFMgPSB0YXJnZXQuY29uc3RydWN0b3I7XG4gIGlmKFMgIT09IEMgJiYgdHlwZW9mIFMgPT0gJ2Z1bmN0aW9uJyAmJiAoUCA9IFMucHJvdG90eXBlKSAhPT0gQy5wcm90b3R5cGUgJiYgaXNPYmplY3QoUCkgJiYgc2V0UHJvdG90eXBlT2Ype1xuICAgIHNldFByb3RvdHlwZU9mKHRoYXQsIFApO1xuICB9IHJldHVybiB0aGF0O1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9faW5oZXJpdC1pZi1yZXF1aXJlZC5qcyIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19pb2JqZWN0LmpzIiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIElURVJBVE9SICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoKGUpe1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYocmV0ICE9PSB1bmRlZmluZWQpYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCBkZXNjcmlwdG9yICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpe1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHtuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ2YXIgSVRFUkFUT1IgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbigpeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbigpeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjLCBza2lwQ2xvc2luZyl7XG4gIGlmKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKXJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyICA9IFs3XVxuICAgICAgLCBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uKCl7IHJldHVybiB7ZG9uZTogc2FmZSA9IHRydWV9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbigpeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2xpYnJhcnkuanMiLCJ2YXIgZFAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzICAgPSBnZXRLZXlzKFByb3BlcnRpZXMpXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaSA9IDBcbiAgICAsIFA7XG4gIHdoaWxlKGxlbmd0aCA+IGkpZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwidmFyIHBJRSAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpXG4gICwgY3JlYXRlRGVzYyAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCB0b0lPYmplY3QgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgZ09QRCAgICAgICAgICAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKXtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBnT1BEKE8sIFApO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKGhhcyhPLCBQKSlyZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24oTyl7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYoaGFzKE8sIElFX1BST1RPKSlyZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3Ipe1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ2YXIgaGFzICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b0lPYmplY3QgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKVxuICAsIElFX1BST1RPICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIG5hbWVzKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwga2V5O1xuICBmb3Ioa2V5IGluIE8paWYoa2V5ICE9IElFX1BST1RPKWhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSlpZihoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpe1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKXtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1waWUuanMiLCIvLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgY2hlY2sgPSBmdW5jdGlvbihPLCBwcm90byl7XG4gIGFuT2JqZWN0KE8pO1xuICBpZighaXNPYmplY3QocHJvdG8pICYmIHByb3RvICE9PSBudWxsKXRocm93IFR5cGVFcnJvcihwcm90byArIFwiOiBjYW4ndCBzZXQgYXMgcHJvdG90eXBlIVwiKTtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKCdfX3Byb3RvX18nIGluIHt9ID8gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGZ1bmN0aW9uKHRlc3QsIGJ1Z2d5LCBzZXQpe1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0ID0gcmVxdWlyZSgnLi9fY3R4JykoRnVuY3Rpb24uY2FsbCwgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQsIDIpO1xuICAgICAgICBzZXQodGVzdCwgW10pO1xuICAgICAgICBidWdneSA9ICEodGVzdCBpbnN0YW5jZW9mIEFycmF5KTtcbiAgICAgIH0gY2F0Y2goZSl7IGJ1Z2d5ID0gdHJ1ZTsgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKXtcbiAgICAgICAgY2hlY2soTywgcHJvdG8pO1xuICAgICAgICBpZihidWdneSlPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgICAgICBlbHNlIHNldChPLCBwcm90byk7XG4gICAgICAgIHJldHVybiBPO1xuICAgICAgfTtcbiAgICB9KHt9LCBmYWxzZSkgOiB1bmRlZmluZWQpLFxuICBjaGVjazogY2hlY2tcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX3NldC1wcm90by5qcyIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgZFAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsIFNQRUNJRVMgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVkpe1xuICB2YXIgQyA9IGdsb2JhbFtLRVldO1xuICBpZihERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKWRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgZGVmaW5lZCAgID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVE9fU1RSSU5HKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKHRoYXQsIHBvcyl7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSlcbiAgICAgICwgaSA9IHRvSW50ZWdlcihwb3MpXG4gICAgICAsIGwgPSBzLmxlbmd0aFxuICAgICAgLCBhLCBiO1xuICAgIGlmKGkgPCAwIHx8IGkgPj0gbClyZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1heCAgICAgICA9IE1hdGgubWF4XG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGluZGV4LCBsZW5ndGgpe1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8taW5kZXguanMiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX3RvLW9iamVjdC5qcyIsInZhciBjbGFzc29mICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCBJVEVSQVRPUiAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ICE9IHVuZGVmaW5lZClyZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJylcbiAgLCBzdGVwICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJylcbiAgLCBJdGVyYXRvcnMgICAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCB0b0lPYmplY3QgICAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBraW5kICA9IHRoaXMuX2tcbiAgICAsIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZighTyB8fCBpbmRleCA+PSBPLmxlbmd0aCl7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHN0cm9uZyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24tc3Ryb25nJyk7XG5cbi8vIDIzLjEgTWFwIE9iamVjdHNcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbicpKCdNYXAnLCBmdW5jdGlvbihnZXQpe1xuICByZXR1cm4gZnVuY3Rpb24gTWFwKCl7IHJldHVybiBnZXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpOyB9O1xufSwge1xuICAvLyAyMy4xLjMuNiBNYXAucHJvdG90eXBlLmdldChrZXkpXG4gIGdldDogZnVuY3Rpb24gZ2V0KGtleSl7XG4gICAgdmFyIGVudHJ5ID0gc3Ryb25nLmdldEVudHJ5KHRoaXMsIGtleSk7XG4gICAgcmV0dXJuIGVudHJ5ICYmIGVudHJ5LnY7XG4gIH0sXG4gIC8vIDIzLjEuMy45IE1hcC5wcm90b3R5cGUuc2V0KGtleSwgdmFsdWUpXG4gIHNldDogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpe1xuICAgIHJldHVybiBzdHJvbmcuZGVmKHRoaXMsIGtleSA9PT0gMCA/IDAgOiBrZXksIHZhbHVlKTtcbiAgfVxufSwgc3Ryb25nLCB0cnVlKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubWFwLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIHRlc3QgICAgPSB7fTtcbnRlc3RbcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyldID0gJ3onO1xuaWYodGVzdCArICcnICE9ICdbb2JqZWN0IHpdJyl7XG4gIHJlcXVpcmUoJy4vX3JlZGVmaW5lJykoT2JqZWN0LnByb3RvdHlwZSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgICByZXR1cm4gJ1tvYmplY3QgJyArIGNsYXNzb2YodGhpcykgKyAnXSc7XG4gIH0sIHRydWUpO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nLmpzIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCAgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbihpdGVyYXRlZCl7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGluZGV4ID0gdGhpcy5faVxuICAgICwgcG9pbnQ7XG4gIGlmKGluZGV4ID49IE8ubGVuZ3RoKXJldHVybiB7dmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZX07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7dmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZX07XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwidmFyICRpdGVyYXRvcnMgICAgPSByZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpXG4gICwgcmVkZWZpbmUgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBnbG9iYWwgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoaWRlICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgSXRlcmF0b3JzICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgd2tzICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpXG4gICwgSVRFUkFUT1IgICAgICA9IHdrcygnaXRlcmF0b3InKVxuICAsIFRPX1NUUklOR19UQUcgPSB3a3MoJ3RvU3RyaW5nVGFnJylcbiAgLCBBcnJheVZhbHVlcyAgID0gSXRlcmF0b3JzLkFycmF5O1xuXG5mb3IodmFyIGNvbGxlY3Rpb25zID0gWydOb2RlTGlzdCcsICdET01Ub2tlbkxpc3QnLCAnTWVkaWFMaXN0JywgJ1N0eWxlU2hlZXRMaXN0JywgJ0NTU1J1bGVMaXN0J10sIGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgdmFyIE5BTUUgICAgICAgPSBjb2xsZWN0aW9uc1tpXVxuICAgICwgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXVxuICAgICwgcHJvdG8gICAgICA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGVcbiAgICAsIGtleTtcbiAgaWYocHJvdG8pe1xuICAgIGlmKCFwcm90b1tJVEVSQVRPUl0paGlkZShwcm90bywgSVRFUkFUT1IsIEFycmF5VmFsdWVzKTtcbiAgICBpZighcHJvdG9bVE9fU1RSSU5HX1RBR10paGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gICAgSXRlcmF0b3JzW05BTUVdID0gQXJyYXlWYWx1ZXM7XG4gICAgZm9yKGtleSBpbiAkaXRlcmF0b3JzKWlmKCFwcm90b1trZXldKXJlZGVmaW5lKHByb3RvLCBrZXksICRpdGVyYXRvcnNba2V5XSwgdHJ1ZSk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vcHJvY2Vzcy9icm93c2VyLmpzIiwiLyogZXNsaW50LWVudiBqYXNtaW5lICovXG5cbmltcG9ydCB7XG4gIGluc3RhbGwsXG4gIHVuaW5zdGFsbCxcbiAgc2V0dXBQcm9taXNlRGV0ZWN0aW9uLFxuICBkZXRlY3RTdHJheVByb21pc2VzLFxuICB3YXRjaFByb21pc2VJbXBsZW1lbnRhdGlvblxufSBmcm9tICcuL3Byb21pc2VzJztcblxuLy8gYXNzaWduIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSB1c2VkIHRvIGhvb2sgdXAgYWRkaXRpb25hbCBQcm9taXNlIGxpYnNcbndpbmRvdy5fd2F0Y2hQcm9taXNlSW1wbGVtZW50YXRpb24gPSB3YXRjaFByb21pc2VJbXBsZW1lbnRhdGlvbjtcblxuLy8gaW5zdGFsbCB0aW1lcnNcbmJlZm9yZUFsbChpbnN0YWxsKTtcblxuYWZ0ZXJBbGwodW5pbnN0YWxsKTtcblxuYmVmb3JlRWFjaChzZXR1cFByb21pc2VEZXRlY3Rpb24pO1xuXG5hZnRlckVhY2goZGV0ZWN0U3RyYXlQcm9taXNlcyk7XG5cbmlmICh3aW5kb3cuUHJvbWlzZSkge1xuICAvLyB3YXRjaCB0aGUgbmF0aXZlIGltcGxlbWVudGF0aW9uXG4gIHdhdGNoUHJvbWlzZUltcGxlbWVudGF0aW9uKFByb21pc2UpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==