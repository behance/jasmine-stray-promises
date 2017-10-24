/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(23)('wks');

var uid = __webpack_require__(10);

var _Symbol = __webpack_require__(1).Symbol;

var USE_SYMBOL = typeof _Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self // eslint-disable-next-line no-new-func
: Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function (it) {
  return _typeof(it) === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(11)(function () {
  return Object.defineProperty({}, 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);

var hide = __webpack_require__(6);

var has = __webpack_require__(4);

var SRC = __webpack_require__(10)('src');

var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(12).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));

  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  } // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative

})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(7);

var createDesc = __webpack_require__(15);

module.exports = __webpack_require__(3) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(8);

var IE8_DOM_DEFINE = __webpack_require__(24);

var toPrimitive = __webpack_require__(26);

var dP = Object.defineProperty;
exports.f = __webpack_require__(3) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2);

module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();

module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

var core = module.exports = {
  version: '2.5.1'
};
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(46);

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

  return function ()
  /* ...args */
  {
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(50);

var defined = __webpack_require__(17);

module.exports = function (it) {
  return IObject(defined(it));
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;

module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LIBRARY = __webpack_require__(45);

var $export = __webpack_require__(27);

var redefine = __webpack_require__(5);

var hide = __webpack_require__(6);

var has = __webpack_require__(4);

var Iterators = __webpack_require__(9);

var $iterCreate = __webpack_require__(47);

var setToStringTag = __webpack_require__(20);

var getPrototypeOf = __webpack_require__(54);

var ITERATOR = __webpack_require__(0)('iterator');

var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`

var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

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
    }

    return function entries() {
      return new Constructor(this, kind);
    };
  };

  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype; // Fix native

  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));

    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true); // fix for some old engines

      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  } // fix Array#{values, @@iterator}.name in V8 / FF


  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;

    $default = function values() {
      return $native.call(this);
    };
  } // Define iterator


  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  } // Plug for library


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

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(23)('keys');

var uid = __webpack_require__(10);

module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(7).f;

var has = __webpack_require__(4);

var TAG = __webpack_require__(0)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
    configurable: true,
    value: tag
  });
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(22);

var TAG = __webpack_require__(0)('toStringTag'); // ES3 wrong here


var ARG = cof(function () {
  return arguments;
}()) == 'Arguments'; // fallback for IE11 Script Access Denied error

var tryGet = function tryGet(it, key) {
  try {
    return it[key];
  } catch (e) {
    /* empty */
  }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
  : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T // builtinTag case
  : ARG ? cof(O) // ES3 arguments fallback
  : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

module.exports = function (key) {
  return store[key] || (store[key] = {});
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(3) && !__webpack_require__(11)(function () {
  return Object.defineProperty(__webpack_require__(25)('div'), 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2);

var document = __webpack_require__(1).document; // typeof document.createElement is 'object' in old IE


var is = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(2); // instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string


module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);

var core = __webpack_require__(12);

var hide = __webpack_require__(6);

var redefine = __webpack_require__(5);

var ctx = __webpack_require__(13);

var PROTOTYPE = 'prototype';

var $export = function $export(type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;

  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined; // export native or passed

    out = (own ? target : source)[key]; // bind timers to global for call from export context

    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out; // extend global

    if (target) redefine(target, key, out, type & $export.U); // export

    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};

global.core = core; // type bitmap

$export.F = 1; // forced

$export.G = 2; // global

$export.S = 4; // static

$export.P = 8; // proto

$export.B = 16; // bind

$export.W = 32; // wrap

$export.U = 64; // safe

$export.R = 128; // real proto method for `library`

module.exports = $export;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(8);

var dPs = __webpack_require__(48);

var enumBugKeys = __webpack_require__(31);

var IE_PROTO = __webpack_require__(19)('IE_PROTO');

var Empty = function Empty() {
  /* empty */
};

var PROTOTYPE = 'prototype'; // Create object with fake `null` prototype: use iframe Object with cleared prototype

var _createDict = function createDict() {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(25)('iframe');

  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';

  __webpack_require__(53).appendChild(iframe);

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
  }

  return _createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;

  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

    result[IE_PROTO] = O;
  } else result = _createDict();

  return Properties === undefined ? result : dPs(result, Properties);
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(49);

var enumBugKeys = __webpack_require__(31);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(16);

var min = Math.min;

module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return {
    value: value,
    done: !!done
  };
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(5);

module.exports = function (target, src, safe) {
  for (var key in src) {
    redefine(target, key, src[key], safe);
  }

  return target;
};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
    throw TypeError(name + ': incorrect invocation!');
  }

  return it;
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(13);

var call = __webpack_require__(61);

var isArrayIter = __webpack_require__(62);

var anObject = __webpack_require__(8);

var toLength = __webpack_require__(30);

var getIterFn = __webpack_require__(63);

var BREAK = {};
var RETURN = {};

var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () {
    return iterable;
  } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!'); // fast case for arrays with default iterator

  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};

exports.BREAK = BREAK;
exports.RETURN = RETURN;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var META = __webpack_require__(10)('meta');

var isObject = __webpack_require__(2);

var has = __webpack_require__(4);

var setDesc = __webpack_require__(7).f;

var id = 0;

var isExtensible = Object.isExtensible || function () {
  return true;
};

var FREEZE = !__webpack_require__(11)(function () {
  return isExtensible(Object.preventExtensions({}));
});

var setMeta = function setMeta(it) {
  setDesc(it, META, {
    value: {
      i: 'O' + ++id,
      // object ID
      w: {} // weak collections IDs

    }
  });
};

var fastKey = function fastKey(it, create) {
  // return primitive with prefix
  if (!isObject(it)) return _typeof(it) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;

  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F'; // not necessary to add metadata

    if (!create) return 'E'; // add missing metadata

    setMeta(it); // return object ID
  }

  return it[META].i;
};

var getWeak = function getWeak(it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true; // not necessary to add metadata

    if (!create) return false; // add missing metadata

    setMeta(it); // return hash weak collections IDs
  }

  return it[META].w;
}; // add metadata on freeze-family methods calling


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

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2);

module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__promises__ = __webpack_require__(39);
/* eslint-env jasmine */
 // assign function so it can be used to hook up additional Promise libs

window._watchPromiseImplementation = __WEBPACK_IMPORTED_MODULE_0__promises__["e" /* watchPromiseImplementation */]; // install timers

beforeAll(__WEBPACK_IMPORTED_MODULE_0__promises__["b" /* install */]);
afterAll(__WEBPACK_IMPORTED_MODULE_0__promises__["d" /* uninstall */]);
beforeEach(__WEBPACK_IMPORTED_MODULE_0__promises__["c" /* setupPromiseDetection */]);
afterEach(__WEBPACK_IMPORTED_MODULE_0__promises__["a" /* detectStrayPromises */]);

if (window.Promise) {
  // watch the native implementation
  Object(__WEBPACK_IMPORTED_MODULE_0__promises__["e" /* watchPromiseImplementation */])(Promise);
}

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["e"] = watchPromiseImplementation;
/* unused harmony export unwatchPromiseImplementation */
/* harmony export (immutable) */ __webpack_exports__["b"] = install;
/* harmony export (immutable) */ __webpack_exports__["d"] = uninstall;
/* harmony export (immutable) */ __webpack_exports__["c"] = setupPromiseDetection;
/* harmony export (immutable) */ __webpack_exports__["a"] = detectStrayPromises;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_map__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_map__);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }


var strayPromises = [];
var isInstalled = false;
var isCleaningUp = false; // Internal promise reference counter

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

    var localIdx = idx++; // must throw the error for PhantomJS to generate the stack trace

    var err = void 0;

    try {
      // Use this error message during development
      if (isDebug) {
        throw new Error("Promise \"" + method + "\" with id \"" + localIdx + "\" resolved outside test constraints");
      } else {
        throw new Error("Promise \"" + method + "\" resolved outside test constraints");
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
    })); // keep a handy call stack reference

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

  this._onlyWarnOnStrayPromises = function () {
    _this.__onlyWarnOnStrayPromises = true;
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
  var _this2 = this;

  // find stray promises from current tests
  var localStrayPromises = [].concat(_toConsumableArray(strayPromises));
  isCleaningUp = true; // reset timer cache for next test

  strayPromises = [];

  if (!this.__strayPromisesIgnored && localStrayPromises.length > 0) {
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
      var isThenStatement = val.method === 'then' && typeof val.args[0] === 'function'; // Must clear up any "catch" statements that were never called

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
        var firstStrayPromise = unresolvedPromises.shift();

        if (isDebug) {
          firstStrayPromise.args.forEach(function (arg) {
            if (typeof arg !== 'function') {
              return;
            }

            console.log('Stray promise', firstStrayPromise.id, firstStrayPromise.method, String(arg.fn || arg));
          });
        }

        if (_this2.__onlyWarnOnStrayPromises) {
          console.warn(firstStrayPromise.err.message);
          return;
        }

        throw firstStrayPromise.err;
      }
    }).then(done, done.fail);
  } else {
    done();
  }
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(40)))

/***/ }),
/* 40 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
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
  } // if setTimeout wasn't available but was latter defined


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
  } // if clearTimeout wasn't available but was latter defined


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
}; // v8 likes predictible objects


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
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

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

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(42);

__webpack_require__(43);

__webpack_require__(56);

__webpack_require__(59);

module.exports = __webpack_require__(12).Map;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 19.1.3.6 Object.prototype.toString()

var classof = __webpack_require__(21);

var test = {};
test[__webpack_require__(0)('toStringTag')] = 'z';

if (test + '' != '[object z]') {
  __webpack_require__(5)(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $at = __webpack_require__(44)(true); // 21.1.3.27 String.prototype[@@iterator]()


__webpack_require__(18)(String, 'String', function (iterated) {
  this._t = String(iterated); // target

  this._i = 0; // next index
  // 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return {
    value: undefined,
    done: true
  };
  point = $at(O, index);
  this._i += point.length;
  return {
    value: point,
    done: false
  };
});

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(16);

var defined = __webpack_require__(17); // true  -> String#at
// false -> String#codePointAt


module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = false;

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var create = __webpack_require__(28);

var descriptor = __webpack_require__(15);

var setToStringTag = __webpack_require__(20);

var IteratorPrototype = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()

__webpack_require__(6)(IteratorPrototype, __webpack_require__(0)('iterator'), function () {
  return this;
});

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, {
    next: descriptor(1, next)
  });
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(7);

var anObject = __webpack_require__(8);

var getKeys = __webpack_require__(29);

module.exports = __webpack_require__(3) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;

  while (length > i) {
    dP.f(O, P = keys[i++], Properties[P]);
  }

  return O;
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(4);

var toIObject = __webpack_require__(14);

var arrayIndexOf = __webpack_require__(51)(false);

var IE_PROTO = __webpack_require__(19)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) {
    if (key != IE_PROTO) has(O, key) && result.push(key);
  } // Don't enum bug & hidden keys


  while (names.length > i) {
    if (has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
  }

  return result;
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(22); // eslint-disable-next-line no-prototype-builtins


module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(14);

var toLength = __webpack_require__(30);

var toAbsoluteIndex = __webpack_require__(52);

module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare

      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      }
    }
    return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(16);

var max = Math.max;
var min = Math.min;

module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(1).document;

module.exports = document && document.documentElement;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(4);

var toObject = __webpack_require__(55);

var IE_PROTO = __webpack_require__(19)('IE_PROTO');

var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];

  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  }

  return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(17);

module.exports = function (it) {
  return Object(defined(it));
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(57);

var getKeys = __webpack_require__(29);

var redefine = __webpack_require__(5);

var global = __webpack_require__(1);

var hide = __webpack_require__(6);

var Iterators = __webpack_require__(9);

var wks = __webpack_require__(0);

var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;
var DOMIterables = {
  CSSRuleList: true,
  // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true,
  // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true,
  // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;

  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) {
      if (!proto[key]) redefine(proto, key, $iterators[key], true);
    }
  }
}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var addToUnscopables = __webpack_require__(58);

var step = __webpack_require__(32);

var Iterators = __webpack_require__(9);

var toIObject = __webpack_require__(14); // 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()


module.exports = __webpack_require__(18)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target

  this._i = 0; // next index

  this._k = kind; // kind
  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;

  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }

  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values'); // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)

Iterators.Arguments = Iterators.Array;
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(0)('unscopables');

var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(6)(ArrayProto, UNSCOPABLES, {});

module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var strong = __webpack_require__(60);

var validate = __webpack_require__(37);

var MAP = 'Map'; // 23.1 Map Objects

module.exports = __webpack_require__(65)(MAP, function (get) {
  return function Map() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dP = __webpack_require__(7).f;

var create = __webpack_require__(28);

var redefineAll = __webpack_require__(33);

var ctx = __webpack_require__(13);

var anInstance = __webpack_require__(34);

var forOf = __webpack_require__(35);

var $iterDefine = __webpack_require__(18);

var step = __webpack_require__(32);

var setSpecies = __webpack_require__(64);

var DESCRIPTORS = __webpack_require__(3);

var fastKey = __webpack_require__(36).fastKey;

var validate = __webpack_require__(37);

var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function getEntry(that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index]; // frozen object case

  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME; // collection type

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
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
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
        var that = validate(this, NAME);
        var entry = getEntry(that, key);

        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        }

        return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn
      /* , that = undefined */
      ) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;

        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this); // revert to the last existing entry

          while (entry && entry.r) {
            entry = entry.p;
          }
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function get() {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function def(that, key, value) {
    var entry = getEntry(that, key);
    var prev, index; // change existing entry

    if (entry) {
      entry.v = value; // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true),
        // <- index
        k: key,
        // <- key
        v: value,
        // <- value
        p: prev = that._l,
        // <- previous entry
        n: undefined,
        // <- next entry
        r: false // <- removed

      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++; // add to index

      if (index !== 'F') that._i[index] = entry;
    }

    return that;
  },
  getEntry: getEntry,
  setStrong: function setStrong(C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target

      this._k = kind; // kind

      this._l = undefined; // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l; // revert to the last existing entry

      while (entry && entry.r) {
        entry = entry.p;
      } // get next entry


      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      } // return step by kind


      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true); // add [@@species], 23.1.2.2, 23.2.2.2

    setSpecies(NAME);
  }
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(8);

module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value); // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(9);

var ITERATOR = __webpack_require__(0)('iterator');

var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(21);

var ITERATOR = __webpack_require__(0)('iterator');

var Iterators = __webpack_require__(9);

module.exports = __webpack_require__(12).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(1);

var dP = __webpack_require__(7);

var DESCRIPTORS = __webpack_require__(3);

var SPECIES = __webpack_require__(0)('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function get() {
      return this;
    }
  });
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(1);

var $export = __webpack_require__(27);

var redefine = __webpack_require__(5);

var redefineAll = __webpack_require__(33);

var meta = __webpack_require__(36);

var forOf = __webpack_require__(35);

var anInstance = __webpack_require__(34);

var isObject = __webpack_require__(2);

var fails = __webpack_require__(11);

var $iterDetect = __webpack_require__(66);

var setToStringTag = __webpack_require__(20);

var inheritIfRequired = __webpack_require__(67);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};

  var fixMethod = function fixMethod(KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY, KEY == 'delete' ? function (a) {
      return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'has' ? function has(a) {
      return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'get' ? function get(a) {
      return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'add' ? function add(a) {
      fn.call(this, a === 0 ? 0 : a);
      return this;
    } : function set(a, b) {
      fn.call(this, a === 0 ? 0 : a, b);
      return this;
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
    var instance = new C(); // early implementations not supports chaining

    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance; // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false

    var THROWS_ON_PRIMITIVES = fails(function () {
      instance.has(1);
    }); // most early implementations doesn't supports iterables, most modern - not close it correctly

    var ACCEPT_ITERABLES = $iterDetect(function (iter) {
      new C(iter);
    }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same

    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;

      while (index--) {
        $instance[ADDER](index, index);
      }

      return !$instance.has(-0);
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

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER); // weak collections should not contains .clear method

    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);
  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);
  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);
  return C;
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(0)('iterator');

var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();

  riter['return'] = function () {
    SAFE_CLOSING = true;
  }; // eslint-disable-next-line no-throw-literal


  Array.from(riter, function () {
    throw 2;
  });
} catch (e) {
  /* empty */
}

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;

  try {
    var arr = [7];
    var iter = arr[ITERATOR]();

    iter.next = function () {
      return {
        done: safe = true
      };
    };

    arr[ITERATOR] = function () {
      return iter;
    };

    exec(arr);
  } catch (e) {
    /* empty */
  }

  return safe;
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2);

var setPrototypeOf = __webpack_require__(68).set;

module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;

  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  }

  return that;
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.

/* eslint-disable no-proto */
var isObject = __webpack_require__(2);

var anObject = __webpack_require__(8);

var check = function check(O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};

module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
  function (test, buggy, set) {
    try {
      set = __webpack_require__(13)(Function.call, __webpack_require__(69).f(Object.prototype, '__proto__').set, 2);
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

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(70);

var createDesc = __webpack_require__(15);

var toIObject = __webpack_require__(14);

var toPrimitive = __webpack_require__(26);

var has = __webpack_require__(4);

var IE8_DOM_DEFINE = __webpack_require__(24);

var gOPD = Object.getOwnPropertyDescriptor;
exports.f = __webpack_require__(3) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) {
    /* empty */
  }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 70 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2FmMTFlMTMyNDIwNTU1NTJiMGMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jbGFzc29mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mb3Itb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbWV0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL192YWxpZGF0ZS1jb2xsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvbWlzZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9lczYvbWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29sbGVjdGlvbi1zdHJvbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pbmhlcml0LWlmLXJlcXVpcmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NldC1wcm90by5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtcGllLmpzIl0sIm5hbWVzIjpbInN0b3JlIiwicmVxdWlyZSIsInVpZCIsIlN5bWJvbCIsIlVTRV9TWU1CT0wiLCIkZXhwb3J0cyIsIm1vZHVsZSIsImV4cG9ydHMiLCJuYW1lIiwiZ2xvYmFsIiwid2luZG93IiwiTWF0aCIsInNlbGYiLCJGdW5jdGlvbiIsIl9fZyIsIml0IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJhIiwiaGFzT3duUHJvcGVydHkiLCJrZXkiLCJjYWxsIiwiaGlkZSIsImhhcyIsIlNSQyIsIlRPX1NUUklORyIsIiR0b1N0cmluZyIsIlRQTCIsInNwbGl0IiwiaW5zcGVjdFNvdXJjZSIsIk8iLCJ2YWwiLCJzYWZlIiwiaXNGdW5jdGlvbiIsImpvaW4iLCJTdHJpbmciLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImRQIiwiY3JlYXRlRGVzYyIsIm9iamVjdCIsInZhbHVlIiwiZiIsImFuT2JqZWN0IiwiSUU4X0RPTV9ERUZJTkUiLCJ0b1ByaW1pdGl2ZSIsIlAiLCJBdHRyaWJ1dGVzIiwiZSIsIlR5cGVFcnJvciIsImlzT2JqZWN0IiwiaWQiLCJweCIsInJhbmRvbSIsImNvbmNhdCIsInVuZGVmaW5lZCIsImV4ZWMiLCJjb3JlIiwidmVyc2lvbiIsIl9fZSIsImFGdW5jdGlvbiIsImZuIiwidGhhdCIsImxlbmd0aCIsImIiLCJjIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJJT2JqZWN0IiwiZGVmaW5lZCIsImJpdG1hcCIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImNlaWwiLCJmbG9vciIsImlzTmFOIiwiTElCUkFSWSIsIiRleHBvcnQiLCJyZWRlZmluZSIsIkl0ZXJhdG9ycyIsIiRpdGVyQ3JlYXRlIiwic2V0VG9TdHJpbmdUYWciLCJnZXRQcm90b3R5cGVPZiIsIklURVJBVE9SIiwiQlVHR1kiLCJrZXlzIiwiRkZfSVRFUkFUT1IiLCJLRVlTIiwiVkFMVUVTIiwicmV0dXJuVGhpcyIsIkJhc2UiLCJOQU1FIiwiQ29uc3RydWN0b3IiLCJuZXh0IiwiREVGQVVMVCIsIklTX1NFVCIsIkZPUkNFRCIsImdldE1ldGhvZCIsImtpbmQiLCJwcm90byIsInZhbHVlcyIsImVudHJpZXMiLCJUQUciLCJERUZfVkFMVUVTIiwiVkFMVUVTX0JVRyIsIiRuYXRpdmUiLCIkZGVmYXVsdCIsIiRlbnRyaWVzIiwiJGFueU5hdGl2ZSIsIm1ldGhvZHMiLCJJdGVyYXRvclByb3RvdHlwZSIsIkYiLCJzaGFyZWQiLCJkZWYiLCJ0YWciLCJzdGF0IiwiY29mIiwiQVJHIiwidHJ5R2V0IiwiVCIsIkIiLCJjYWxsZWUiLCJzbGljZSIsIlNIQVJFRCIsImRvY3VtZW50IiwiaXMiLCJjcmVhdGVFbGVtZW50IiwiUyIsInZhbHVlT2YiLCJjdHgiLCJQUk9UT1RZUEUiLCJ0eXBlIiwic291cmNlIiwiSVNfRk9SQ0VEIiwiSVNfR0xPQkFMIiwiRyIsIklTX1NUQVRJQyIsIklTX1BST1RPIiwiSVNfQklORCIsInRhcmdldCIsImV4cFByb3RvIiwib3duIiwib3V0IiwiZXhwIiwiVSIsIlciLCJSIiwiZFBzIiwiZW51bUJ1Z0tleXMiLCJJRV9QUk9UTyIsIkVtcHR5IiwiY3JlYXRlRGljdCIsImlmcmFtZSIsImkiLCJsdCIsImd0IiwiaWZyYW1lRG9jdW1lbnQiLCJzdHlsZSIsImRpc3BsYXkiLCJhcHBlbmRDaGlsZCIsInNyYyIsImNvbnRlbnRXaW5kb3ciLCJvcGVuIiwid3JpdGUiLCJjbG9zZSIsImNyZWF0ZSIsIlByb3BlcnRpZXMiLCJyZXN1bHQiLCIka2V5cyIsInRvSW50ZWdlciIsIm1pbiIsImRvbmUiLCJmb3JiaWRkZW5GaWVsZCIsImlzQXJyYXlJdGVyIiwidG9MZW5ndGgiLCJnZXRJdGVyRm4iLCJCUkVBSyIsIlJFVFVSTiIsIml0ZXJhYmxlIiwiaXRlckZuIiwiaW5kZXgiLCJzdGVwIiwiaXRlcmF0b3IiLCJNRVRBIiwic2V0RGVzYyIsImlzRXh0ZW5zaWJsZSIsIkZSRUVaRSIsInByZXZlbnRFeHRlbnNpb25zIiwic2V0TWV0YSIsInciLCJmYXN0S2V5IiwiZ2V0V2VhayIsIm9uRnJlZXplIiwibWV0YSIsIk5FRUQiLCJLRVkiLCJUWVBFIiwiX3QiLCJfd2F0Y2hQcm9taXNlSW1wbGVtZW50YXRpb24iLCJiZWZvcmVBbGwiLCJhZnRlckFsbCIsImJlZm9yZUVhY2giLCJhZnRlckVhY2giLCJQcm9taXNlIiwid2F0Y2hQcm9taXNlSW1wbGVtZW50YXRpb24iLCJzdHJheVByb21pc2VzIiwiaXNJbnN0YWxsZWQiLCJpc0NsZWFuaW5nVXAiLCJpZHgiLCJnbG9iYWxEZWJ1Z01vZGUiLCJwcm9jZXNzIiwiZW52IiwiU1RSQVlfUFJPTUlTRV9ERUJVRyIsImlzRGVidWciLCJXQVRDSEVEX1BST01JU0VfTUVUSE9EUyIsIldBVENIRURfUFJPTUlTRV9JTVBMRU1FTlRBVElPTlMiLCJNYXAiLCJyZWJpbmRSZXNvbHZlciIsImxvY2FsSWR4IiwicmVib3VuZFJlc29sdmVyIiwic29tZSIsInN0cmF5UHJvbWlzZSIsImhhc0JlZW5DYWxsZWQiLCJvcmlnaW5hbEZuIiwicmViaW5kVGhlbmFibGUiLCJtZXRob2QiLCJ0aGVuYWJsZVByb3RvdHlwZSIsInJlYm91bmRUaGVuYWJsZSIsImFyZ3MiLCJlcnIiLCJFcnJvciIsInByb21pc2VEYXRhIiwicHVzaCIsIm5ld1Byb21pc2UiLCJtYXAiLCJwcm9taXNlIiwid2lyZVByb21pc2VIb29rcyIsImZvckVhY2giLCJwcm90b0NhY2hlIiwicHJvbWlzZUltcGwiLCJ1bndpcmVQcm9taXNlSG9va3MiLCJzZXQiLCJ1bndhdGNoUHJvbWlzZUltcGxlbWVudGF0aW9uIiwiZGVsZXRlIiwiaW5zdGFsbCIsInVuaW5zdGFsbCIsInNldHVwUHJvbWlzZURldGVjdGlvbiIsIl9pZ25vcmVTdHJheVByb21pc2VzIiwiX19zdHJheVByb21pc2VzSWdub3JlZCIsIl9vbmx5V2Fybk9uU3RyYXlQcm9taXNlcyIsIl9fb25seVdhcm5PblN0cmF5UHJvbWlzZXMiLCJfZW5hYmxlU3RyYXlQcm9taXNlc0RlYnVnZ2luZyIsImRldGVjdFN0cmF5UHJvbWlzZXMiLCJsb2NhbFN0cmF5UHJvbWlzZXMiLCJmaWx0ZXJVbnJlc29sdmVkIiwidW5yZXNvbHZlZFByb21pc2VzIiwiZmlsdGVyIiwiYWxsIiwiaXNDYXRjaFN0YXRlbWVudCIsImlzVGhlblN0YXRlbWVudCIsInRoZW4iLCJkYXRhIiwiY2F0Y2giLCJmaXJzdFN0cmF5UHJvbWlzZSIsInNoaWZ0IiwiYXJnIiwiY29uc29sZSIsImxvZyIsIndhcm4iLCJtZXNzYWdlIiwiZmFpbCIsImNhY2hlZFNldFRpbWVvdXQiLCJjYWNoZWRDbGVhclRpbWVvdXQiLCJkZWZhdWx0U2V0VGltb3V0IiwiZGVmYXVsdENsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJydW5UaW1lb3V0IiwiZnVuIiwicnVuQ2xlYXJUaW1lb3V0IiwibWFya2VyIiwicXVldWUiLCJkcmFpbmluZyIsImN1cnJlbnRRdWV1ZSIsInF1ZXVlSW5kZXgiLCJjbGVhblVwTmV4dFRpY2siLCJkcmFpblF1ZXVlIiwidGltZW91dCIsImxlbiIsInJ1biIsIm5leHRUaWNrIiwiQXJyYXkiLCJJdGVtIiwiYXJyYXkiLCJ0aXRsZSIsImJyb3dzZXIiLCJhcmd2IiwidmVyc2lvbnMiLCJub29wIiwib24iLCJhZGRMaXN0ZW5lciIsIm9uY2UiLCJvZmYiLCJyZW1vdmVMaXN0ZW5lciIsInJlbW92ZUFsbExpc3RlbmVycyIsImVtaXQiLCJwcmVwZW5kTGlzdGVuZXIiLCJwcmVwZW5kT25jZUxpc3RlbmVyIiwibGlzdGVuZXJzIiwiYmluZGluZyIsImN3ZCIsImNoZGlyIiwiZGlyIiwidW1hc2siLCJjbGFzc29mIiwidGVzdCIsIiRhdCIsIml0ZXJhdGVkIiwiX2kiLCJwb2ludCIsInBvcyIsInMiLCJsIiwiY2hhckNvZGVBdCIsImNoYXJBdCIsImRlc2NyaXB0b3IiLCJnZXRLZXlzIiwiZGVmaW5lUHJvcGVydGllcyIsInRvSU9iamVjdCIsImFycmF5SW5kZXhPZiIsIm5hbWVzIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJ0b0Fic29sdXRlSW5kZXgiLCJJU19JTkNMVURFUyIsIiR0aGlzIiwiZWwiLCJmcm9tSW5kZXgiLCJtYXgiLCJkb2N1bWVudEVsZW1lbnQiLCJ0b09iamVjdCIsIk9iamVjdFByb3RvIiwiY29uc3RydWN0b3IiLCIkaXRlcmF0b3JzIiwid2tzIiwiVE9fU1RSSU5HX1RBRyIsIkFycmF5VmFsdWVzIiwiRE9NSXRlcmFibGVzIiwiQ1NTUnVsZUxpc3QiLCJDU1NTdHlsZURlY2xhcmF0aW9uIiwiQ1NTVmFsdWVMaXN0IiwiQ2xpZW50UmVjdExpc3QiLCJET01SZWN0TGlzdCIsIkRPTVN0cmluZ0xpc3QiLCJET01Ub2tlbkxpc3QiLCJEYXRhVHJhbnNmZXJJdGVtTGlzdCIsIkZpbGVMaXN0IiwiSFRNTEFsbENvbGxlY3Rpb24iLCJIVE1MQ29sbGVjdGlvbiIsIkhUTUxGb3JtRWxlbWVudCIsIkhUTUxTZWxlY3RFbGVtZW50IiwiTWVkaWFMaXN0IiwiTWltZVR5cGVBcnJheSIsIk5hbWVkTm9kZU1hcCIsIk5vZGVMaXN0IiwiUGFpbnRSZXF1ZXN0TGlzdCIsIlBsdWdpbiIsIlBsdWdpbkFycmF5IiwiU1ZHTGVuZ3RoTGlzdCIsIlNWR051bWJlckxpc3QiLCJTVkdQYXRoU2VnTGlzdCIsIlNWR1BvaW50TGlzdCIsIlNWR1N0cmluZ0xpc3QiLCJTVkdUcmFuc2Zvcm1MaXN0IiwiU291cmNlQnVmZmVyTGlzdCIsIlN0eWxlU2hlZXRMaXN0IiwiVGV4dFRyYWNrQ3VlTGlzdCIsIlRleHRUcmFja0xpc3QiLCJUb3VjaExpc3QiLCJjb2xsZWN0aW9ucyIsImV4cGxpY2l0IiwiQ29sbGVjdGlvbiIsImFkZFRvVW5zY29wYWJsZXMiLCJfayIsIkFyZ3VtZW50cyIsIlVOU0NPUEFCTEVTIiwiQXJyYXlQcm90byIsInN0cm9uZyIsInZhbGlkYXRlIiwiTUFQIiwiZW50cnkiLCJnZXRFbnRyeSIsInYiLCJyZWRlZmluZUFsbCIsImFuSW5zdGFuY2UiLCJmb3JPZiIsIiRpdGVyRGVmaW5lIiwic2V0U3BlY2llcyIsIkRFU0NSSVBUT1JTIiwiU0laRSIsIl9mIiwibiIsImsiLCJnZXRDb25zdHJ1Y3RvciIsIndyYXBwZXIiLCJJU19NQVAiLCJBRERFUiIsIkMiLCJfbCIsImNsZWFyIiwiciIsInAiLCJwcmV2IiwiY2FsbGJhY2tmbiIsInNldFN0cm9uZyIsInJldCIsImdldEl0ZXJhdG9yTWV0aG9kIiwiU1BFQ0lFUyIsImZhaWxzIiwiJGl0ZXJEZXRlY3QiLCJpbmhlcml0SWZSZXF1aXJlZCIsImNvbW1vbiIsIklTX1dFQUsiLCJmaXhNZXRob2QiLCJhZGQiLCJpbnN0YW5jZSIsIkhBU05UX0NIQUlOSU5HIiwiVEhST1dTX09OX1BSSU1JVElWRVMiLCJBQ0NFUFRfSVRFUkFCTEVTIiwiaXRlciIsIkJVR0dZX1pFUk8iLCIkaW5zdGFuY2UiLCJTQUZFX0NMT1NJTkciLCJyaXRlciIsImZyb20iLCJza2lwQ2xvc2luZyIsImFyciIsInNldFByb3RvdHlwZU9mIiwiY2hlY2siLCJidWdneSIsIl9fcHJvdG9fXyIsInBJRSIsImdPUEQiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQSxJQUFJQSxRQUFRLG1CQUFBQyxDQUFRLEVBQVIsRUFBcUIsS0FBckIsQ0FBWjs7QUFDQSxJQUFJQyxNQUFNLG1CQUFBRCxDQUFRLEVBQVIsQ0FBVjs7QUFDQSxJQUFJRSxVQUFTLG1CQUFBRixDQUFRLENBQVIsRUFBcUJFLE1BQWxDOztBQUNBLElBQUlDLGFBQWEsT0FBT0QsT0FBUCxJQUFpQixVQUFsQzs7QUFFQSxJQUFJRSxXQUFXQyxPQUFPQyxPQUFQLEdBQWlCLFVBQVVDLElBQVYsRUFBZ0I7QUFDOUMsU0FBT1IsTUFBTVEsSUFBTixNQUFnQlIsTUFBTVEsSUFBTixJQUNyQkosY0FBY0QsUUFBT0ssSUFBUCxDQUFkLElBQThCLENBQUNKLGFBQWFELE9BQWIsR0FBc0JELEdBQXZCLEVBQTRCLFlBQVlNLElBQXhDLENBRHpCLENBQVA7QUFFRCxDQUhEOztBQUtBSCxTQUFTTCxL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cmIsUUFBUW9DLENBQVIsR0FBWSxtQkFBQTFDLENBQVEsQ0FBUixJQUE0QjBiLElBQTVCLEdBQW1DLFNBQVNDLHdCQUFULENBQWtDN1osQ0FBbEMsRUFBcUNnQixDQUFyQyxFQUF3QztBQUNyRmhCLE1BQUkyUyxVQUFVM1MsQ0FBVixDQUFKO0FBQ0FnQixNQUFJRCxZQUFZQyxDQUFaLEVBQWUsSUFBZixDQUFKO0FBQ0EsTUFBSUYsY0FBSixFQUFvQixJQUFJO0FBQ3RCLFdBQU84WSxLQUFLNVosQ0FBTCxFQUFRZ0IsQ0FBUixDQUFQO0FBQ0QsR0FGbUIsQ0FFbEIsT0FBT0UsQ0FBUCxFQUFVO0FBQUU7QUFBYTtBQUMzQixNQUFJekIsSUFBSU8sQ0FBSixFQUFPZ0IsQ0FBUCxDQUFKLEVBQWUsT0FBT1AsV0FBVyxDQUFDa1osSUFBSS9ZLENBQUosQ0FBTXJCLElBQU4sQ0FBV1MsQ0FBWCxFQUFjZ0IsQ0FBZCxDQUFaLEVBQThCaEIsRUFBRWdCLENBQUYsQ0FBOUIsQ0FBUDtBQUNoQixDQVBELEM7Ozs7OztBQ1JBeEMsUUFBUW9DLENBQVIsR0FBWSxHQUFHa1Msb0JBQWYsQyIsImZpbGUiOiJqYXNtaW5lLXN0cmF5LXByb21pc2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMzgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDdhZjExZTEzMjQyMDU1NTUyYjBjIiwidmFyIHN0b3JlID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbDtcbnZhciBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYgKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpIF9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZ2xvYmFsLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1vYmplY3QuanMiLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hhcy5qcyIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFNSQyA9IHJlcXVpcmUoJy4vX3VpZCcpKCdzcmMnKTtcbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyICR0b1N0cmluZyA9IEZ1bmN0aW9uW1RPX1NUUklOR107XG52YXIgVFBMID0gKCcnICsgJHRvU3RyaW5nKS5zcGxpdChUT19TVFJJTkcpO1xuXG5yZXF1aXJlKCcuL19jb3JlJykuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gJHRvU3RyaW5nLmNhbGwoaXQpO1xufTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsLCBzYWZlKSB7XG4gIHZhciBpc0Z1bmN0aW9uID0gdHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nO1xuICBpZiAoaXNGdW5jdGlvbikgaGFzKHZhbCwgJ25hbWUnKSB8fCBoaWRlKHZhbCwgJ25hbWUnLCBrZXkpO1xuICBpZiAoT1trZXldID09PSB2YWwpIHJldHVybjtcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsIFNSQykgfHwgaGlkZSh2YWwsIFNSQywgT1trZXldID8gJycgKyBPW2tleV0gOiBUUEwuam9pbihTdHJpbmcoa2V5KSkpO1xuICBpZiAoTyA9PT0gZ2xvYmFsKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2UgaWYgKCFzYWZlKSB7XG4gICAgZGVsZXRlIE9ba2V5XTtcbiAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgfSBlbHNlIGlmIChPW2tleV0pIHtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSB7XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH1cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxufSkoRnVuY3Rpb24ucHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiB0aGlzW1NSQ10gfHwgJHRvU3RyaW5nLmNhbGwodGhpcyk7XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLmpzIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faGlkZS5qcyIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGRQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwidmFyIGlkID0gMDtcbnZhciBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL191aWQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mYWlscy5qcyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7IHZlcnNpb246ICcyLjUuMScgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb3JlLmpzIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY3R4LmpzIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZWZpbmVkLmpzIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyICRpdGVyQ3JlYXRlID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBCVUdHWSA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKTsgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxudmFyIEZGX0lURVJBVE9SID0gJ0BAaXRlcmF0b3InO1xudmFyIEtFWVMgPSAna2V5cyc7XG52YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uIChraW5kKSB7XG4gICAgaWYgKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKSByZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFUztcbiAgdmFyIFZBTFVFU19CVUcgPSBmYWxzZTtcbiAgdmFyIHByb3RvID0gQmFzZS5wcm90b3R5cGU7XG4gIHZhciAkbmF0aXZlID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdO1xuICB2YXIgJGRlZmF1bHQgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKTtcbiAgdmFyICRlbnRyaWVzID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZDtcbiAgdmFyICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlO1xuICB2YXIgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZiAoJGFueU5hdGl2ZSkge1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgSXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmICghTElCUkFSWSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpIGhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSkge1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gPSByZXR1cm5UaGlzO1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChrZXkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKCEoa2V5IGluIHByb3RvKSkgcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCB0YWcsIHN0YXQpIHtcbiAgaWYgKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpIGRlZihpdCwgVEFHLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZyB9KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIEFSRyA9IGNvZihmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NsYXNzb2YuanMiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb2YuanMiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLmpzIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFMpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciB0YXJnZXQgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gfHwgKGdsb2JhbFtuYW1lXSA9IHt9KSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV07XG4gIHZhciBleHBvcnRzID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XG4gIHZhciBleHBQcm90byA9IGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pO1xuICB2YXIga2V5LCBvd24sIG91dCwgZXhwO1xuICBpZiAoSVNfR0xPQkFMKSBzb3VyY2UgPSBuYW1lO1xuICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gKG93biA/IHRhcmdldCA6IHNvdXJjZSlba2V5XTtcbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIGV4cCA9IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4dGVuZCBnbG9iYWxcbiAgICBpZiAodGFyZ2V0KSByZWRlZmluZSh0YXJnZXQsIGtleSwgb3V0LCB0eXBlICYgJGV4cG9ydC5VKTtcbiAgICAvLyBleHBvcnRcbiAgICBpZiAoZXhwb3J0c1trZXldICE9IG91dCkgaGlkZShleHBvcnRzLCBrZXksIGV4cCk7XG4gICAgaWYgKElTX1BST1RPICYmIGV4cFByb3RvW2tleV0gIT0gb3V0KSBleHBQcm90b1trZXldID0gb3V0O1xuICB9XG59O1xuZ2xvYmFsLmNvcmUgPSBjb3JlO1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBkUHMgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgRW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKTtcbiAgdmFyIGkgPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHZhciBsdCA9ICc8JztcbiAgdmFyIGd0ID0gJz4nO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUgKGktLSkgZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZG9uZSwgdmFsdWUpIHtcbiAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmUgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCJ2YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzcmMsIHNhZmUpIHtcbiAgZm9yICh2YXIga2V5IGluIHNyYykgcmVkZWZpbmUodGFyZ2V0LCBrZXksIHNyY1trZXldLCBzYWZlKTtcbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS1hbGwuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgQ29uc3RydWN0b3IsIG5hbWUsIGZvcmJpZGRlbkZpZWxkKSB7XG4gIGlmICghKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpIHx8IChmb3JiaWRkZW5GaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZvcmJpZGRlbkZpZWxkIGluIGl0KSkge1xuICAgIHRocm93IFR5cGVFcnJvcihuYW1lICsgJzogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FuLWluc3RhbmNlLmpzIiwidmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKTtcbnZhciBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgZ2V0SXRlckZuID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBCUkVBSyA9IHt9O1xudmFyIFJFVFVSTiA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKSB7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKTtcbiAgdmFyIGYgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSk7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmICh0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYgKGlzQXJyYXlJdGVyKGl0ZXJGbikpIGZvciAobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7KSB7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Zvci1vZi5qcyIsInZhciBNRVRBID0gcmVxdWlyZSgnLi9fdWlkJykoJ21ldGEnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHNldERlc2MgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGlkID0gMDtcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIEZSRUVaRSA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbiAoaXQpIHtcbiAgc2V0RGVzYyhpdCwgTUVUQSwgeyB2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gfSk7XG59O1xudmFyIGZhc3RLZXkgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIGhhc2ggd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSByZXR1cm4gaXRbTUVUQV0udztcbn07XG4vLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcbnZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoRlJFRVpFICYmIG1ldGEuTkVFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXMoaXQsIE1FVEEpKSBzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogTUVUQSxcbiAgTkVFRDogZmFsc2UsXG4gIGZhc3RLZXk6IGZhc3RLZXksXG4gIGdldFdlYWs6IGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX21ldGEuanMiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBUWVBFKSB7XG4gIGlmICghaXNPYmplY3QoaXQpIHx8IGl0Ll90ICE9PSBUWVBFKSB0aHJvdyBUeXBlRXJyb3IoJ0luY29tcGF0aWJsZSByZWNlaXZlciwgJyArIFRZUEUgKyAnIHJlcXVpcmVkIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdmFsaWRhdGUtY29sbGVjdGlvbi5qcyIsIi8qIGVzbGludC1lbnYgamFzbWluZSAqL1xuXG5pbXBvcnQge1xuICBpbnN0YWxsLFxuICB1bmluc3RhbGwsXG4gIHNldHVwUHJvbWlzZURldGVjdGlvbixcbiAgZGV0ZWN0U3RyYXlQcm9taXNlcyxcbiAgd2F0Y2hQcm9taXNlSW1wbGVtZW50YXRpb24sXG59IGZyb20gJy4vcHJvbWlzZXMnO1xuXG4vLyBhc3NpZ24gZnVuY3Rpb24gc28gaXQgY2FuIGJlIHVzZWQgdG8gaG9vayB1cCBhZGRpdGlvbmFsIFByb21pc2UgbGlic1xud2luZG93Ll93YXRjaFByb21pc2VJbXBsZW1lbnRhdGlvbiA9IHdhdGNoUHJvbWlzZUltcGxlbWVudGF0aW9uO1xuXG4vLyBpbnN0YWxsIHRpbWVyc1xuYmVmb3JlQWxsKGluc3RhbGwpO1xuXG5hZnRlckFsbCh1bmluc3RhbGwpO1xuXG5iZWZvcmVFYWNoKHNldHVwUHJvbWlzZURldGVjdGlvbik7XG5cbmFmdGVyRWFjaChkZXRlY3RTdHJheVByb21pc2VzKTtcblxuaWYgKHdpbmRvdy5Qcm9taXNlKSB7XG4gIC8vIHdhdGNoIHRoZSBuYXRpdmUgaW1wbGVtZW50YXRpb25cbiAgd2F0Y2hQcm9taXNlSW1wbGVtZW50YXRpb24oUHJvbWlzZSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJpbXBvcnQgJ2NvcmUtanMvZXM2L21hcCc7XG5cbmxldCBzdHJheVByb21pc2VzID0gW107XG5sZXQgaXNJbnN0YWxsZWQgPSBmYWxzZTtcbmxldCBpc0NsZWFuaW5nVXAgPSBmYWxzZTtcbi8vIEludGVybmFsIHByb21pc2UgcmVmZXJlbmNlIGNvdW50ZXJcbmxldCBpZHggPSAwO1xuXG4vKiBnbG9iYWwgcHJvY2VzcyAqL1xuY29uc3QgZ2xvYmFsRGVidWdNb2RlID0gKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBwcm9jZXNzLmVudiAmJiBwcm9jZXNzLmVudi5TVFJBWV9QUk9NSVNFX0RFQlVHKTtcbmxldCBpc0RlYnVnID0gZ2xvYmFsRGVidWdNb2RlO1xuXG5jb25zdCBXQVRDSEVEX1BST01JU0VfTUVUSE9EUyA9IFsndGhlbicsICdjYXRjaCddO1xuY29uc3QgV0FUQ0hFRF9QUk9NSVNFX0lNUExFTUVOVEFUSU9OUyA9IG5ldyBNYXAoKTtcblxuLyoqXG4gKiBSZWJpbmQgYW4gaW5kaXZpZHVhbCByZXNvbHZlciBmdW5jdGlvblxuICogZXguIGAudGhlbihyZXNvbHZlcilgXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbnwqfSBmblxuICogQHBhcmFtIHtOdW1iZXJ9IGxvY2FsSWR4XG4gKiBAcmV0dXJucyB7RnVuY3Rpb258Kn1cbiAqL1xuZnVuY3Rpb24gcmViaW5kUmVzb2x2ZXIoZm4sIGxvY2FsSWR4KSB7XG4gIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicgfHwgaXNDbGVhbmluZ1VwKSB7XG4gICAgcmV0dXJuIGZuO1xuICB9XG4gIGZ1bmN0aW9uIHJlYm91bmRSZXNvbHZlcigpIHtcbiAgICBzdHJheVByb21pc2VzLnNvbWUoKHN0cmF5UHJvbWlzZSkgPT4ge1xuICAgICAgaWYgKHN0cmF5UHJvbWlzZS5pZCAhPT0gbG9jYWxJZHggfHwgaXNDbGVhbmluZ1VwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHN0cmF5UHJvbWlzZS5oYXNCZWVuQ2FsbGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG4gIGlmIChpc0RlYnVnKSB7XG4gICAgcmVib3VuZFJlc29sdmVyLm9yaWdpbmFsRm4gPSBTdHJpbmcoZm4pO1xuICB9XG4gIHJldHVybiByZWJvdW5kUmVzb2x2ZXI7XG59XG5cbi8qKlxuICogUmViaW5kIGEgdGhlbmFibGUgY2FsbGJhY2tcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0aGVuYWJsZVByb3RvdHlwZVxuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiByZWJpbmRUaGVuYWJsZShtZXRob2QsIHRoZW5hYmxlUHJvdG90eXBlKSB7XG4gIHJldHVybiBmdW5jdGlvbiByZWJvdW5kVGhlbmFibGUoLi4uYXJncykge1xuICAgIGlmIChpc0NsZWFuaW5nVXApIHtcbiAgICAgIHJldHVybiB0aGVuYWJsZVByb3RvdHlwZS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG5cbiAgICBjb25zdCBsb2NhbElkeCA9IGlkeCsrO1xuXG4gICAgLy8gbXVzdCB0aHJvdyB0aGUgZXJyb3IgZm9yIFBoYW50b21KUyB0byBnZW5lcmF0ZSB0aGUgc3RhY2sgdHJhY2VcbiAgICBsZXQgZXJyO1xuICAgIHRyeSB7XG4gICAgICAvLyBVc2UgdGhpcyBlcnJvciBtZXNzYWdlIGR1cmluZyBkZXZlbG9wbWVudFxuICAgICAgaWYgKGlzRGVidWcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBQcm9taXNlIFwiJHttZXRob2R9XCIgd2l0aCBpZCBcIiR7bG9jYWxJZHh9XCIgcmVzb2x2ZWQgb3V0c2lkZSB0ZXN0IGNvbnN0cmFpbnRzYCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBQcm9taXNlIFwiJHttZXRob2R9XCIgcmVzb2x2ZWQgb3V0c2lkZSB0ZXN0IGNvbnN0cmFpbnRzYCk7XG4gICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICBlcnIgPSBlO1xuICAgIH1cbiAgICBjb25zdCBwcm9taXNlRGF0YSA9IHtcbiAgICAgIGlkOiBsb2NhbElkeCxcbiAgICAgIGhhc0JlZW5DYWxsZWQ6IGZhbHNlLFxuICAgICAgYXJncyxcbiAgICAgIGVycixcbiAgICAgIG1ldGhvZCxcbiAgICB9O1xuICAgIHN0cmF5UHJvbWlzZXMucHVzaChwcm9taXNlRGF0YSk7XG5cbiAgICBjb25zdCBuZXdQcm9taXNlID0gdGhlbmFibGVQcm90b3R5cGUuYXBwbHkoXG4gICAgICB0aGlzLFxuICAgICAgYXJncy5tYXAoKGZuKSA9PiByZWJpbmRSZXNvbHZlcihmbiwgbG9jYWxJZHgpKVxuICAgICk7XG5cbiAgICAvLyBrZWVwIGEgaGFuZHkgY2FsbCBzdGFjayByZWZlcmVuY2VcbiAgICBwcm9taXNlRGF0YS5wcm9taXNlID0gdGhpcztcblxuICAgIHJldHVybiBuZXdQcm9taXNlO1xuICB9O1xufVxuXG4vKipcbiAqIEhvb2sgdXAgYWxsIHdhdGNoZWQgUHJvbWlzZSBpbXBsZW1lbnRhdGlvbnNcbiAqL1xuZnVuY3Rpb24gd2lyZVByb21pc2VIb29rcygpIHtcbiAgV0FUQ0hFRF9QUk9NSVNFX0lNUExFTUVOVEFUSU9OUy5mb3JFYWNoKChwcm90b0NhY2hlLCBwcm9taXNlSW1wbCkgPT4ge1xuICAgIGlmIChwcm90b0NhY2hlLmlzSW5zdGFsbGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHByb3RvQ2FjaGUuaXNJbnN0YWxsZWQgPSB0cnVlO1xuICAgIFdBVENIRURfUFJPTUlTRV9NRVRIT0RTLmZvckVhY2goKG1ldGhvZCkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBwcm9taXNlSW1wbC5wcm90b3R5cGVbbWV0aG9kXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcm9taXNlSW1wbC5wcm90b3R5cGVbbWV0aG9kXSA9IHJlYmluZFRoZW5hYmxlKG1ldGhvZCwgcHJvdG9DYWNoZVttZXRob2RdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbi8qKlxuICogUmVtb3ZlIGFsbCB3YXRjaGVkIFByb21pc2UgaW1wbGVtZW50YXRpb24gaG9va3NcbiAqL1xuZnVuY3Rpb24gdW53aXJlUHJvbWlzZUhvb2tzKCkge1xuICBXQVRDSEVEX1BST01JU0VfSU1QTEVNRU5UQVRJT05TLmZvckVhY2goKHByb3RvQ2FjaGUsIHByb21pc2VJbXBsKSA9PiB7XG4gICAgaWYgKCFwcm90b0NhY2hlLmlzSW5zdGFsbGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHByb3RvQ2FjaGUuaXNJbnN0YWxsZWQgPSBmYWxzZTtcbiAgICBXQVRDSEVEX1BST01JU0VfTUVUSE9EUy5mb3JFYWNoKChtZXRob2QpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgcHJvbWlzZUltcGwucHJvdG90eXBlW21ldGhvZF0gPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHByb3RvQ2FjaGVbbWV0aG9kXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcm9taXNlSW1wbC5wcm90b3R5cGVbbWV0aG9kXSA9IHByb3RvQ2FjaGVbbWV0aG9kXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbi8qKlxuICogTWFyayBhIHNwZWNpZmljIFByb21pc2UgaW1wbGVtZW50YXRpb24gYXMgXCJ3YXRjaGVkXCJcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcm9taXNlSW1wbFxuICovXG5leHBvcnQgZnVuY3Rpb24gd2F0Y2hQcm9taXNlSW1wbGVtZW50YXRpb24ocHJvbWlzZUltcGwpIHtcbiAgaWYgKFdBVENIRURfUFJPTUlTRV9JTVBMRU1FTlRBVElPTlMuaGFzKHByb21pc2VJbXBsKSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBwcm90b0NhY2hlID0ge307XG4gIFdBVENIRURfUFJPTUlTRV9NRVRIT0RTLmZvckVhY2goKG1ldGhvZCkgPT4ge1xuICAgIGlmICh0eXBlb2YgcHJvbWlzZUltcGwucHJvdG90eXBlW21ldGhvZF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb3RvQ2FjaGVbbWV0aG9kXSA9IHByb21pc2VJbXBsLnByb3RvdHlwZVttZXRob2RdO1xuICAgIH1cbiAgfSk7XG4gIFdBVENIRURfUFJPTUlTRV9JTVBMRU1FTlRBVElPTlMuc2V0KHByb21pc2VJbXBsLCBwcm90b0NhY2hlKTtcbiAgaWYgKGlzSW5zdGFsbGVkKSB7XG4gICAgd2lyZVByb21pc2VIb29rcygpO1xuICB9XG59XG5cbi8qKlxuICogTWFyayBhIHNwZWNpZmljIFByb21pc2UgaW1wbGVtZW50YXRpb24gYXMgXCJ1bndhdGNoZWRcIlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByb21pc2VJbXBsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1bndhdGNoUHJvbWlzZUltcGxlbWVudGF0aW9uKHByb21pc2VJbXBsKSB7XG4gIFdBVENIRURfUFJPTUlTRV9JTVBMRU1FTlRBVElPTlMuZGVsZXRlKHByb21pc2VJbXBsKTtcbn1cblxuLyoqXG4gKiBPdmVycmlkZSB0aGUgdGltZXIgZnVuY3Rpb25zIHdpdGggdGhlIHRlc3RlZCBmdW5jdGlvbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluc3RhbGwoKSB7XG4gIGlmIChpc0luc3RhbGxlZCkge1xuICAgIHJldHVybjtcbiAgfVxuICBpc0luc3RhbGxlZCA9IHRydWU7XG4gIHdpcmVQcm9taXNlSG9va3MoKTtcbn1cblxuLyoqXG4gKiBSZXN0b3JlIHRoZSBvcmlnaW5hbCB0aW1lciBmdW5jdGlvbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVuaW5zdGFsbCgpIHtcbiAgaWYgKCFpc0luc3RhbGxlZCkge1xuICAgIHJldHVybjtcbiAgfVxuICBpc0luc3RhbGxlZCA9IGZhbHNlO1xuICB1bndpcmVQcm9taXNlSG9va3MoKTtcbn1cblxuLyoqXG4gKiBTZXQgdXAgamFzbWluZSBpbnN0YW5jZSB2YXJpYWJsZSBmb3IgaWdub3JpbmcgcHJvbWlzZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldHVwUHJvbWlzZURldGVjdGlvbigpIHtcbiAgc3RyYXlQcm9taXNlcyA9IFtdO1xuICBpc0NsZWFuaW5nVXAgPSBmYWxzZTtcbiAgaXNEZWJ1ZyA9IGdsb2JhbERlYnVnTW9kZTtcblxuICB0aGlzLl9pZ25vcmVTdHJheVByb21pc2VzID0gKCkgPT4ge1xuICAgIHRoaXMuX19zdHJheVByb21pc2VzSWdub3JlZCA9IHRydWU7XG4gIH07XG5cbiAgdGhpcy5fb25seVdhcm5PblN0cmF5UHJvbWlzZXMgPSAoKSA9PiB7XG4gICAgdGhpcy5fX29ubHlXYXJuT25TdHJheVByb21pc2VzID0gdHJ1ZTtcbiAgfTtcblxuICB0aGlzLl9lbmFibGVTdHJheVByb21pc2VzRGVidWdnaW5nID0gKCkgPT4ge1xuICAgIGlzRGVidWcgPSB0cnVlO1xuICB9O1xufVxuXG4vKipcbiAqIERldGVjdCBhbnkgc3RyYXkgdGltZXJzIHVzZWQgaW4gYmVmb3JlRWFjaCwgYWZ0ZXJFYWNoXG4gKlxuICogQHRocm93cyB7RXJyb3J9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXRlY3RTdHJheVByb21pc2VzKGRvbmUpIHtcbiAgLy8gZmluZCBzdHJheSBwcm9taXNlcyBmcm9tIGN1cnJlbnQgdGVzdHNcbiAgY29uc3QgbG9jYWxTdHJheVByb21pc2VzID0gWy4uLnN0cmF5UHJvbWlzZXNdO1xuICBpc0NsZWFuaW5nVXAgPSB0cnVlO1xuXG4gIC8vIHJlc2V0IHRpbWVyIGNhY2hlIGZvciBuZXh0IHRlc3RcbiAgc3RyYXlQcm9taXNlcyA9IFtdO1xuXG4gIGlmICghdGhpcy5fX3N0cmF5UHJvbWlzZXNJZ25vcmVkICYmIGxvY2FsU3RyYXlQcm9taXNlcy5sZW5ndGggPiAwKSB7XG4gICAgbGV0IHVucmVzb2x2ZWRQcm9taXNlcyA9IFsuLi5sb2NhbFN0cmF5UHJvbWlzZXNdLmZpbHRlcigoeyBoYXNCZWVuQ2FsbGVkIH0pID0+ICFoYXNCZWVuQ2FsbGVkKTtcblxuICAgIGZ1bmN0aW9uIGZpbHRlclVucmVzb2x2ZWQodmFsKSB7XG4gICAgICB1bnJlc29sdmVkUHJvbWlzZXMgPSB1bnJlc29sdmVkUHJvbWlzZXMuZmlsdGVyKCh7IGlkIH0pID0+IGlkICE9PSB2YWwuaWQpO1xuICAgIH1cblxuICAgIFByb21pc2UuYWxsKFxuICAgICAgWy4uLnVucmVzb2x2ZWRQcm9taXNlc10ubWFwKCh2YWwpID0+IHtcbiAgICAgICAgY29uc3QgaXNDYXRjaFN0YXRlbWVudCA9IHZhbC5tZXRob2QgPT09ICdjYXRjaCcgfHwgKHZhbC5tZXRob2QgPT09ICd0aGVuJyAmJiAhdmFsLmFyZ3NbMF0pO1xuICAgICAgICBjb25zdCBpc1RoZW5TdGF0ZW1lbnQgPSB2YWwubWV0aG9kID09PSAndGhlbicgJiYgdHlwZW9mIHZhbC5hcmdzWzBdID09PSAnZnVuY3Rpb24nO1xuICAgICAgICAvLyBNdXN0IGNsZWFyIHVwIGFueSBcImNhdGNoXCIgc3RhdGVtZW50cyB0aGF0IHdlcmUgbmV2ZXIgY2FsbGVkXG4gICAgICAgIHJldHVybiB2YWwucHJvbWlzZVxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgLy8gZmlsdGVyIG91dCBjYXRjaCBjbGF1c2VzIHdoZXJlIHRoZSByZXNvbHV0aW9uIG9mIHRoZSBwcm9taXNlIHdhcyBhIHN1Y2Nlc3NcbiAgICAgICAgICAgIGlmIChpc0NhdGNoU3RhdGVtZW50KSB7XG4gICAgICAgICAgICAgIGZpbHRlclVucmVzb2x2ZWQodmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgIGlmICgodmFsLmhhc0JlZW5DYWxsZWQgJiYgaXNDYXRjaFN0YXRlbWVudCkgfHwgaXNUaGVuU3RhdGVtZW50KSB7XG4gICAgICAgICAgICAgIGZpbHRlclVucmVzb2x2ZWQodmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBpc0NsZWFuaW5nVXAgPSBmYWxzZTtcbiAgICAgICAgaWYgKHVucmVzb2x2ZWRQcm9taXNlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29uc3QgZmlyc3RTdHJheVByb21pc2UgPSB1bnJlc29sdmVkUHJvbWlzZXMuc2hpZnQoKTtcbiAgICAgICAgICBpZiAoaXNEZWJ1Zykge1xuICAgICAgICAgICAgZmlyc3RTdHJheVByb21pc2UuYXJncy5mb3JFYWNoKChhcmcpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhcmcgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1N0cmF5IHByb21pc2UnLCBmaXJzdFN0cmF5UHJvbWlzZS5pZCwgZmlyc3RTdHJheVByb21pc2UubWV0aG9kLCBTdHJpbmcoYXJnLmZuIHx8IGFyZykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLl9fb25seVdhcm5PblN0cmF5UHJvbWlzZXMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihmaXJzdFN0cmF5UHJvbWlzZS5lcnIubWVzc2FnZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IGZpcnN0U3RyYXlQcm9taXNlLmVycjtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC50aGVuKGRvbmUsIGRvbmUuZmFpbCk7XG4gIH1cbiAgZWxzZSB7XG4gICAgZG9uZSgpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvbWlzZXMuanMiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5tYXAnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLk1hcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2VzNi9tYXAuanMiLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIHRlc3QgPSB7fTtcbnRlc3RbcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyldID0gJ3onO1xuaWYgKHRlc3QgKyAnJyAhPSAnW29iamVjdCB6XScpIHtcbiAgcmVxdWlyZSgnLi9fcmVkZWZpbmUnKShPYmplY3QucHJvdG90eXBlLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gJ1tvYmplY3QgJyArIGNsYXNzb2YodGhpcykgKyAnXSc7XG4gIH0sIHRydWUpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZy5qcyIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbiAoaXRlcmF0ZWQpIHtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBpbmRleCA9IHRoaXMuX2k7XG4gIHZhciBwb2ludDtcbiAgaWYgKGluZGV4ID49IE8ubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7IHZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2UgfTtcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFRPX1NUUklORykge1xuICByZXR1cm4gZnVuY3Rpb24gKHRoYXQsIHBvcykge1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpO1xuICAgIHZhciBpID0gdG9JbnRlZ2VyKHBvcyk7XG4gICAgdmFyIGwgPSBzLmxlbmd0aDtcbiAgICB2YXIgYSwgYjtcbiAgICBpZiAoaSA8IDAgfHwgaSA+PSBsKSByZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19saWJyYXJ5LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCkge1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHsgbmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KSB9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgPSBnZXRLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIFA7XG4gIHdoaWxlIChsZW5ndGggPiBpKSBkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSU9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgaWYgKGtleSAhPSBJRV9QUk9UTykgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pb2JqZWN0LmpzIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuL190by1hYnNvbHV0ZS1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pIHtcbiAgICAgIGlmIChPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanMiLCJ2YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbm1vZHVsZS5leHBvcnRzID0gZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faHRtbC5qcyIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIChPKSB7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYgKGhhcyhPLCBJRV9QUk9UTykpIHJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYgKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwidmFyICRpdGVyYXRvcnMgPSByZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xudmFyIElURVJBVE9SID0gd2tzKCdpdGVyYXRvcicpO1xudmFyIFRPX1NUUklOR19UQUcgPSB3a3MoJ3RvU3RyaW5nVGFnJyk7XG52YXIgQXJyYXlWYWx1ZXMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbnZhciBET01JdGVyYWJsZXMgPSB7XG4gIENTU1J1bGVMaXN0OiB0cnVlLCAvLyBUT0RPOiBOb3Qgc3BlYyBjb21wbGlhbnQsIHNob3VsZCBiZSBmYWxzZS5cbiAgQ1NTU3R5bGVEZWNsYXJhdGlvbjogZmFsc2UsXG4gIENTU1ZhbHVlTGlzdDogZmFsc2UsXG4gIENsaWVudFJlY3RMaXN0OiBmYWxzZSxcbiAgRE9NUmVjdExpc3Q6IGZhbHNlLFxuICBET01TdHJpbmdMaXN0OiBmYWxzZSxcbiAgRE9NVG9rZW5MaXN0OiB0cnVlLFxuICBEYXRhVHJhbnNmZXJJdGVtTGlzdDogZmFsc2UsXG4gIEZpbGVMaXN0OiBmYWxzZSxcbiAgSFRNTEFsbENvbGxlY3Rpb246IGZhbHNlLFxuICBIVE1MQ29sbGVjdGlvbjogZmFsc2UsXG4gIEhUTUxGb3JtRWxlbWVudDogZmFsc2UsXG4gIEhUTUxTZWxlY3RFbGVtZW50OiBmYWxzZSxcbiAgTWVkaWFMaXN0OiB0cnVlLCAvLyBUT0RPOiBOb3Qgc3BlYyBjb21wbGlhbnQsIHNob3VsZCBiZSBmYWxzZS5cbiAgTWltZVR5cGVBcnJheTogZmFsc2UsXG4gIE5hbWVkTm9kZU1hcDogZmFsc2UsXG4gIE5vZGVMaXN0OiB0cnVlLFxuICBQYWludFJlcXVlc3RMaXN0OiBmYWxzZSxcbiAgUGx1Z2luOiBmYWxzZSxcbiAgUGx1Z2luQXJyYXk6IGZhbHNlLFxuICBTVkdMZW5ndGhMaXN0OiBmYWxzZSxcbiAgU1ZHTnVtYmVyTGlzdDogZmFsc2UsXG4gIFNWR1BhdGhTZWdMaXN0OiBmYWxzZSxcbiAgU1ZHUG9pbnRMaXN0OiBmYWxzZSxcbiAgU1ZHU3RyaW5nTGlzdDogZmFsc2UsXG4gIFNWR1RyYW5zZm9ybUxpc3Q6IGZhbHNlLFxuICBTb3VyY2VCdWZmZXJMaXN0OiBmYWxzZSxcbiAgU3R5bGVTaGVldExpc3Q6IHRydWUsIC8vIFRPRE86IE5vdCBzcGVjIGNvbXBsaWFudCwgc2hvdWxkIGJlIGZhbHNlLlxuICBUZXh0VHJhY2tDdWVMaXN0OiBmYWxzZSxcbiAgVGV4dFRyYWNrTGlzdDogZmFsc2UsXG4gIFRvdWNoTGlzdDogZmFsc2Vcbn07XG5cbmZvciAodmFyIGNvbGxlY3Rpb25zID0gZ2V0S2V5cyhET01JdGVyYWJsZXMpLCBpID0gMDsgaSA8IGNvbGxlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gIHZhciBOQU1FID0gY29sbGVjdGlvbnNbaV07XG4gIHZhciBleHBsaWNpdCA9IERPTUl0ZXJhYmxlc1tOQU1FXTtcbiAgdmFyIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV07XG4gIHZhciBwcm90byA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIHZhciBrZXk7XG4gIGlmIChwcm90bykge1xuICAgIGlmICghcHJvdG9bSVRFUkFUT1JdKSBoaWRlKHByb3RvLCBJVEVSQVRPUiwgQXJyYXlWYWx1ZXMpO1xuICAgIGlmICghcHJvdG9bVE9fU1RSSU5HX1RBR10pIGhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICAgIEl0ZXJhdG9yc1tOQU1FXSA9IEFycmF5VmFsdWVzO1xuICAgIGlmIChleHBsaWNpdCkgZm9yIChrZXkgaW4gJGl0ZXJhdG9ycykgaWYgKCFwcm90b1trZXldKSByZWRlZmluZShwcm90bywga2V5LCAkaXRlcmF0b3JzW2tleV0sIHRydWUpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpO1xudmFyIHN0ZXAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBraW5kID0gdGhpcy5faztcbiAgdmFyIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZiAoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpIHtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCIvLyAyMi4xLjMuMzEgQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG52YXIgVU5TQ09QQUJMRVMgPSByZXF1aXJlKCcuL193a3MnKSgndW5zY29wYWJsZXMnKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuaWYgKEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdID09IHVuZGVmaW5lZCkgcmVxdWlyZSgnLi9faGlkZScpKEFycmF5UHJvdG8sIFVOU0NPUEFCTEVTLCB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgQXJyYXlQcm90b1tVTlNDT1BBQkxFU11ba2V5XSA9IHRydWU7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHN0cm9uZyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24tc3Ryb25nJyk7XG52YXIgdmFsaWRhdGUgPSByZXF1aXJlKCcuL192YWxpZGF0ZS1jb2xsZWN0aW9uJyk7XG52YXIgTUFQID0gJ01hcCc7XG5cbi8vIDIzLjEgTWFwIE9iamVjdHNcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbicpKE1BUCwgZnVuY3Rpb24gKGdldCkge1xuICByZXR1cm4gZnVuY3Rpb24gTWFwKCkgeyByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTsgfTtcbn0sIHtcbiAgLy8gMjMuMS4zLjYgTWFwLnByb3RvdHlwZS5nZXQoa2V5KVxuICBnZXQ6IGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICB2YXIgZW50cnkgPSBzdHJvbmcuZ2V0RW50cnkodmFsaWRhdGUodGhpcywgTUFQKSwga2V5KTtcbiAgICByZXR1cm4gZW50cnkgJiYgZW50cnkudjtcbiAgfSxcbiAgLy8gMjMuMS4zLjkgTWFwLnByb3RvdHlwZS5zZXQoa2V5LCB2YWx1ZSlcbiAgc2V0OiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSkge1xuICAgIHJldHVybiBzdHJvbmcuZGVmKHZhbGlkYXRlKHRoaXMsIE1BUCksIGtleSA9PT0gMCA/IDAgOiBrZXksIHZhbHVlKTtcbiAgfVxufSwgc3Ryb25nLCB0cnVlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hcC5qcyIsIid1c2Ugc3RyaWN0JztcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIHJlZGVmaW5lQWxsID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcbnZhciAkaXRlckRlZmluZSA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJyk7XG52YXIgc3RlcCA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpO1xudmFyIHNldFNwZWNpZXMgPSByZXF1aXJlKCcuL19zZXQtc3BlY2llcycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBmYXN0S2V5ID0gcmVxdWlyZSgnLi9fbWV0YScpLmZhc3RLZXk7XG52YXIgdmFsaWRhdGUgPSByZXF1aXJlKCcuL192YWxpZGF0ZS1jb2xsZWN0aW9uJyk7XG52YXIgU0laRSA9IERFU0NSSVBUT1JTID8gJ19zJyA6ICdzaXplJztcblxudmFyIGdldEVudHJ5ID0gZnVuY3Rpb24gKHRoYXQsIGtleSkge1xuICAvLyBmYXN0IGNhc2VcbiAgdmFyIGluZGV4ID0gZmFzdEtleShrZXkpO1xuICB2YXIgZW50cnk7XG4gIGlmIChpbmRleCAhPT0gJ0YnKSByZXR1cm4gdGhhdC5faVtpbmRleF07XG4gIC8vIGZyb3plbiBvYmplY3QgY2FzZVxuICBmb3IgKGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubikge1xuICAgIGlmIChlbnRyeS5rID09IGtleSkgcmV0dXJuIGVudHJ5O1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uICh3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKSB7XG4gICAgdmFyIEMgPSB3cmFwcGVyKGZ1bmN0aW9uICh0aGF0LCBpdGVyYWJsZSkge1xuICAgICAgYW5JbnN0YW5jZSh0aGF0LCBDLCBOQU1FLCAnX2knKTtcbiAgICAgIHRoYXQuX3QgPSBOQU1FOyAgICAgICAgIC8vIGNvbGxlY3Rpb24gdHlwZVxuICAgICAgdGhhdC5faSA9IGNyZWF0ZShudWxsKTsgLy8gaW5kZXhcbiAgICAgIHRoYXQuX2YgPSB1bmRlZmluZWQ7ICAgIC8vIGZpcnN0IGVudHJ5XG4gICAgICB0aGF0Ll9sID0gdW5kZWZpbmVkOyAgICAvLyBsYXN0IGVudHJ5XG4gICAgICB0aGF0W1NJWkVdID0gMDsgICAgICAgICAvLyBzaXplXG4gICAgICBpZiAoaXRlcmFibGUgIT0gdW5kZWZpbmVkKSBmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0aGF0W0FEREVSXSwgdGhhdCk7XG4gICAgfSk7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIHtcbiAgICAgIC8vIDIzLjEuMy4xIE1hcC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgLy8gMjMuMi4zLjIgU2V0LnByb3RvdHlwZS5jbGVhcigpXG4gICAgICBjbGVhcjogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICAgIGZvciAodmFyIHRoYXQgPSB2YWxpZGF0ZSh0aGlzLCBOQU1FKSwgZGF0YSA9IHRoYXQuX2ksIGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubikge1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmIChlbnRyeS5wKSBlbnRyeS5wID0gZW50cnkucC5uID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGRlbGV0ZSBkYXRhW2VudHJ5LmldO1xuICAgICAgICB9XG4gICAgICAgIHRoYXQuX2YgPSB0aGF0Ll9sID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGF0W1NJWkVdID0gMDtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuMyBNYXAucHJvdG90eXBlLmRlbGV0ZShrZXkpXG4gICAgICAvLyAyMy4yLjMuNCBTZXQucHJvdG90eXBlLmRlbGV0ZSh2YWx1ZSlcbiAgICAgICdkZWxldGUnOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciB0aGF0ID0gdmFsaWRhdGUodGhpcywgTkFNRSk7XG4gICAgICAgIHZhciBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSk7XG4gICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgIHZhciBuZXh0ID0gZW50cnkubjtcbiAgICAgICAgICB2YXIgcHJldiA9IGVudHJ5LnA7XG4gICAgICAgICAgZGVsZXRlIHRoYXQuX2lbZW50cnkuaV07XG4gICAgICAgICAgZW50cnkuciA9IHRydWU7XG4gICAgICAgICAgaWYgKHByZXYpIHByZXYubiA9IG5leHQ7XG4gICAgICAgICAgaWYgKG5leHQpIG5leHQucCA9IHByZXY7XG4gICAgICAgICAgaWYgKHRoYXQuX2YgPT0gZW50cnkpIHRoYXQuX2YgPSBuZXh0O1xuICAgICAgICAgIGlmICh0aGF0Ll9sID09IGVudHJ5KSB0aGF0Ll9sID0gcHJldjtcbiAgICAgICAgICB0aGF0W1NJWkVdLS07XG4gICAgICAgIH0gcmV0dXJuICEhZW50cnk7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMi4zLjYgU2V0LnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gICAgICAvLyAyMy4xLjMuNSBNYXAucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIGZvckVhY2g6IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcbiAgICAgICAgdmFsaWRhdGUodGhpcywgTkFNRSk7XG4gICAgICAgIHZhciBmID0gY3R4KGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCAzKTtcbiAgICAgICAgdmFyIGVudHJ5O1xuICAgICAgICB3aGlsZSAoZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGlzLl9mKSB7XG4gICAgICAgICAgZihlbnRyeS52LCBlbnRyeS5rLCB0aGlzKTtcbiAgICAgICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcbiAgICAgICAgICB3aGlsZSAoZW50cnkgJiYgZW50cnkucikgZW50cnkgPSBlbnRyeS5wO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjcgTWFwLnByb3RvdHlwZS5oYXMoa2V5KVxuICAgICAgLy8gMjMuMi4zLjcgU2V0LnByb3RvdHlwZS5oYXModmFsdWUpXG4gICAgICBoYXM6IGZ1bmN0aW9uIGhhcyhrZXkpIHtcbiAgICAgICAgcmV0dXJuICEhZ2V0RW50cnkodmFsaWRhdGUodGhpcywgTkFNRSksIGtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKERFU0NSSVBUT1JTKSBkUChDLnByb3RvdHlwZSwgJ3NpemUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHRoaXMsIE5BTUUpW1NJWkVdO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBDO1xuICB9LFxuICBkZWY6IGZ1bmN0aW9uICh0aGF0LCBrZXksIHZhbHVlKSB7XG4gICAgdmFyIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KTtcbiAgICB2YXIgcHJldiwgaW5kZXg7XG4gICAgLy8gY2hhbmdlIGV4aXN0aW5nIGVudHJ5XG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICBlbnRyeS52ID0gdmFsdWU7XG4gICAgLy8gY3JlYXRlIG5ldyBlbnRyeVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGF0Ll9sID0gZW50cnkgPSB7XG4gICAgICAgIGk6IGluZGV4ID0gZmFzdEtleShrZXksIHRydWUpLCAvLyA8LSBpbmRleFxuICAgICAgICBrOiBrZXksICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0ga2V5XG4gICAgICAgIHY6IHZhbHVlLCAgICAgICAgICAgICAgICAgICAgICAvLyA8LSB2YWx1ZVxuICAgICAgICBwOiBwcmV2ID0gdGhhdC5fbCwgICAgICAgICAgICAgLy8gPC0gcHJldmlvdXMgZW50cnlcbiAgICAgICAgbjogdW5kZWZpbmVkLCAgICAgICAgICAgICAgICAgIC8vIDwtIG5leHQgZW50cnlcbiAgICAgICAgcjogZmFsc2UgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHJlbW92ZWRcbiAgICAgIH07XG4gICAgICBpZiAoIXRoYXQuX2YpIHRoYXQuX2YgPSBlbnRyeTtcbiAgICAgIGlmIChwcmV2KSBwcmV2Lm4gPSBlbnRyeTtcbiAgICAgIHRoYXRbU0laRV0rKztcbiAgICAgIC8vIGFkZCB0byBpbmRleFxuICAgICAgaWYgKGluZGV4ICE9PSAnRicpIHRoYXQuX2lbaW5kZXhdID0gZW50cnk7XG4gICAgfSByZXR1cm4gdGhhdDtcbiAgfSxcbiAgZ2V0RW50cnk6IGdldEVudHJ5LFxuICBzZXRTdHJvbmc6IGZ1bmN0aW9uIChDLCBOQU1FLCBJU19NQVApIHtcbiAgICAvLyBhZGQgLmtleXMsIC52YWx1ZXMsIC5lbnRyaWVzLCBbQEBpdGVyYXRvcl1cbiAgICAvLyAyMy4xLjMuNCwgMjMuMS4zLjgsIDIzLjEuMy4xMSwgMjMuMS4zLjEyLCAyMy4yLjMuNSwgMjMuMi4zLjgsIDIzLjIuMy4xMCwgMjMuMi4zLjExXG4gICAgJGl0ZXJEZWZpbmUoQywgTkFNRSwgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gICAgICB0aGlzLl90ID0gdmFsaWRhdGUoaXRlcmF0ZWQsIE5BTUUpOyAvLyB0YXJnZXRcbiAgICAgIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAgICAgIC8vIGtpbmRcbiAgICAgIHRoaXMuX2wgPSB1bmRlZmluZWQ7ICAgICAgICAgICAgICAgIC8vIHByZXZpb3VzXG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgdmFyIGtpbmQgPSB0aGF0Ll9rO1xuICAgICAgdmFyIGVudHJ5ID0gdGhhdC5fbDtcbiAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgd2hpbGUgKGVudHJ5ICYmIGVudHJ5LnIpIGVudHJ5ID0gZW50cnkucDtcbiAgICAgIC8vIGdldCBuZXh0IGVudHJ5XG4gICAgICBpZiAoIXRoYXQuX3QgfHwgISh0aGF0Ll9sID0gZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGF0Ll90Ll9mKSkge1xuICAgICAgICAvLyBvciBmaW5pc2ggdGhlIGl0ZXJhdGlvblxuICAgICAgICB0aGF0Ll90ID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gc3RlcCgxKTtcbiAgICAgIH1cbiAgICAgIC8vIHJldHVybiBzdGVwIGJ5IGtpbmRcbiAgICAgIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHN0ZXAoMCwgZW50cnkuayk7XG4gICAgICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHN0ZXAoMCwgZW50cnkudik7XG4gICAgICByZXR1cm4gc3RlcCgwLCBbZW50cnkuaywgZW50cnkudl0pO1xuICAgIH0sIElTX01BUCA/ICdlbnRyaWVzJyA6ICd2YWx1ZXMnLCAhSVNfTUFQLCB0cnVlKTtcblxuICAgIC8vIGFkZCBbQEBzcGVjaWVzXSwgMjMuMS4yLjIsIDIzLjIuMi4yXG4gICAgc2V0U3BlY2llcyhOQU1FKTtcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvbGxlY3Rpb24tc3Ryb25nLmpzIiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaCAoZSkge1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYgKHJldCAhPT0gdW5kZWZpbmVkKSBhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ICE9IHVuZGVmaW5lZCkgcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVkpIHtcbiAgdmFyIEMgPSBnbG9iYWxbS0VZXTtcbiAgaWYgKERFU0NSSVBUT1JTICYmIEMgJiYgIUNbU1BFQ0lFU10pIGRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgfSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciByZWRlZmluZUFsbCA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpO1xudmFyIG1ldGEgPSByZXF1aXJlKCcuL19tZXRhJyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciAkaXRlckRldGVjdCA9IHJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0Jyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGluaGVyaXRJZlJlcXVpcmVkID0gcmVxdWlyZSgnLi9faW5oZXJpdC1pZi1yZXF1aXJlZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChOQU1FLCB3cmFwcGVyLCBtZXRob2RzLCBjb21tb24sIElTX01BUCwgSVNfV0VBSykge1xuICB2YXIgQmFzZSA9IGdsb2JhbFtOQU1FXTtcbiAgdmFyIEMgPSBCYXNlO1xuICB2YXIgQURERVIgPSBJU19NQVAgPyAnc2V0JyA6ICdhZGQnO1xuICB2YXIgcHJvdG8gPSBDICYmIEMucHJvdG90eXBlO1xuICB2YXIgTyA9IHt9O1xuICB2YXIgZml4TWV0aG9kID0gZnVuY3Rpb24gKEtFWSkge1xuICAgIHZhciBmbiA9IHByb3RvW0tFWV07XG4gICAgcmVkZWZpbmUocHJvdG8sIEtFWSxcbiAgICAgIEtFWSA9PSAnZGVsZXRlJyA/IGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHJldHVybiBJU19XRUFLICYmICFpc09iamVjdChhKSA/IGZhbHNlIDogZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEpO1xuICAgICAgfSA6IEtFWSA9PSAnaGFzJyA/IGZ1bmN0aW9uIGhhcyhhKSB7XG4gICAgICAgIHJldHVybiBJU19XRUFLICYmICFpc09iamVjdChhKSA/IGZhbHNlIDogZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEpO1xuICAgICAgfSA6IEtFWSA9PSAnZ2V0JyA/IGZ1bmN0aW9uIGdldChhKSB7XG4gICAgICAgIHJldHVybiBJU19XRUFLICYmICFpc09iamVjdChhKSA/IHVuZGVmaW5lZCA6IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhKTtcbiAgICAgIH0gOiBLRVkgPT0gJ2FkZCcgPyBmdW5jdGlvbiBhZGQoYSkgeyBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSk7IHJldHVybiB0aGlzOyB9XG4gICAgICAgIDogZnVuY3Rpb24gc2V0KGEsIGIpIHsgZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEsIGIpOyByZXR1cm4gdGhpczsgfVxuICAgICk7XG4gIH07XG4gIGlmICh0eXBlb2YgQyAhPSAnZnVuY3Rpb24nIHx8ICEoSVNfV0VBSyB8fCBwcm90by5mb3JFYWNoICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgbmV3IEMoKS5lbnRyaWVzKCkubmV4dCgpO1xuICB9KSkpIHtcbiAgICAvLyBjcmVhdGUgY29sbGVjdGlvbiBjb25zdHJ1Y3RvclxuICAgIEMgPSBjb21tb24uZ2V0Q29uc3RydWN0b3Iod3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUik7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIG1ldGhvZHMpO1xuICAgIG1ldGEuTkVFRCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGluc3RhbmNlID0gbmV3IEMoKTtcbiAgICAvLyBlYXJseSBpbXBsZW1lbnRhdGlvbnMgbm90IHN1cHBvcnRzIGNoYWluaW5nXG4gICAgdmFyIEhBU05UX0NIQUlOSU5HID0gaW5zdGFuY2VbQURERVJdKElTX1dFQUsgPyB7fSA6IC0wLCAxKSAhPSBpbnN0YW5jZTtcbiAgICAvLyBWOCB+ICBDaHJvbWl1bSA0MC0gd2Vhay1jb2xsZWN0aW9ucyB0aHJvd3Mgb24gcHJpbWl0aXZlcywgYnV0IHNob3VsZCByZXR1cm4gZmFsc2VcbiAgICB2YXIgVEhST1dTX09OX1BSSU1JVElWRVMgPSBmYWlscyhmdW5jdGlvbiAoKSB7IGluc3RhbmNlLmhhcygxKTsgfSk7XG4gICAgLy8gbW9zdCBlYXJseSBpbXBsZW1lbnRhdGlvbnMgZG9lc24ndCBzdXBwb3J0cyBpdGVyYWJsZXMsIG1vc3QgbW9kZXJuIC0gbm90IGNsb3NlIGl0IGNvcnJlY3RseVxuICAgIHZhciBBQ0NFUFRfSVRFUkFCTEVTID0gJGl0ZXJEZXRlY3QoZnVuY3Rpb24gKGl0ZXIpIHsgbmV3IEMoaXRlcik7IH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIC8vIGZvciBlYXJseSBpbXBsZW1lbnRhdGlvbnMgLTAgYW5kICswIG5vdCB0aGUgc2FtZVxuICAgIHZhciBCVUdHWV9aRVJPID0gIUlTX1dFQUsgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgICAgLy8gVjggfiBDaHJvbWl1bSA0Mi0gZmFpbHMgb25seSB3aXRoIDUrIGVsZW1lbnRzXG4gICAgICB2YXIgJGluc3RhbmNlID0gbmV3IEMoKTtcbiAgICAgIHZhciBpbmRleCA9IDU7XG4gICAgICB3aGlsZSAoaW5kZXgtLSkgJGluc3RhbmNlW0FEREVSXShpbmRleCwgaW5kZXgpO1xuICAgICAgcmV0dXJuICEkaW5zdGFuY2UuaGFzKC0wKTtcbiAgICB9KTtcbiAgICBpZiAoIUFDQ0VQVF9JVEVSQUJMRVMpIHtcbiAgICAgIEMgPSB3cmFwcGVyKGZ1bmN0aW9uICh0YXJnZXQsIGl0ZXJhYmxlKSB7XG4gICAgICAgIGFuSW5zdGFuY2UodGFyZ2V0LCBDLCBOQU1FKTtcbiAgICAgICAgdmFyIHRoYXQgPSBpbmhlcml0SWZSZXF1aXJlZChuZXcgQmFzZSgpLCB0YXJnZXQsIEMpO1xuICAgICAgICBpZiAoaXRlcmFibGUgIT0gdW5kZWZpbmVkKSBmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0aGF0W0FEREVSXSwgdGhhdCk7XG4gICAgICAgIHJldHVybiB0aGF0O1xuICAgICAgfSk7XG4gICAgICBDLnByb3RvdHlwZSA9IHByb3RvO1xuICAgICAgcHJvdG8uY29uc3RydWN0b3IgPSBDO1xuICAgIH1cbiAgICBpZiAoVEhST1dTX09OX1BSSU1JVElWRVMgfHwgQlVHR1lfWkVSTykge1xuICAgICAgZml4TWV0aG9kKCdkZWxldGUnKTtcbiAgICAgIGZpeE1ldGhvZCgnaGFzJyk7XG4gICAgICBJU19NQVAgJiYgZml4TWV0aG9kKCdnZXQnKTtcbiAgICB9XG4gICAgaWYgKEJVR0dZX1pFUk8gfHwgSEFTTlRfQ0hBSU5JTkcpIGZpeE1ldGhvZChBRERFUik7XG4gICAgLy8gd2VhayBjb2xsZWN0aW9ucyBzaG91bGQgbm90IGNvbnRhaW5zIC5jbGVhciBtZXRob2RcbiAgICBpZiAoSVNfV0VBSyAmJiBwcm90by5jbGVhcikgZGVsZXRlIHByb3RvLmNsZWFyO1xuICB9XG5cbiAgc2V0VG9TdHJpbmdUYWcoQywgTkFNRSk7XG5cbiAgT1tOQU1FXSA9IEM7XG4gICRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogKEMgIT0gQmFzZSksIE8pO1xuXG4gIGlmICghSVNfV0VBSykgY29tbW9uLnNldFN0cm9uZyhDLCBOQU1FLCBJU19NQVApO1xuXG4gIHJldHVybiBDO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvbGxlY3Rpb24uanMiLCJ2YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbiAoKSB7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uICgpIHsgdGhyb3cgMjsgfSk7XG59IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYywgc2tpcENsb3NpbmcpIHtcbiAgaWYgKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKSByZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciA9IFs3XTtcbiAgICB2YXIgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB7IGRvbmU6IHNhZmUgPSB0cnVlIH07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRoYXQsIHRhcmdldCwgQykge1xuICB2YXIgUyA9IHRhcmdldC5jb25zdHJ1Y3RvcjtcbiAgdmFyIFA7XG4gIGlmIChTICE9PSBDICYmIHR5cGVvZiBTID09ICdmdW5jdGlvbicgJiYgKFAgPSBTLnByb3RvdHlwZSkgIT09IEMucHJvdG90eXBlICYmIGlzT2JqZWN0KFApICYmIHNldFByb3RvdHlwZU9mKSB7XG4gICAgc2V0UHJvdG90eXBlT2YodGhhdCwgUCk7XG4gIH0gcmV0dXJuIHRoYXQ7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW5oZXJpdC1pZi1yZXF1aXJlZC5qcyIsIi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoTywgcHJvdG8pIHtcbiAgYW5PYmplY3QoTyk7XG4gIGlmICghaXNPYmplY3QocHJvdG8pICYmIHByb3RvICE9PSBudWxsKSB0aHJvdyBUeXBlRXJyb3IocHJvdG8gKyBcIjogY2FuJ3Qgc2V0IGFzIHByb3RvdHlwZSFcIik7XG59O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBmdW5jdGlvbiAodGVzdCwgYnVnZ3ksIHNldCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0ID0gcmVxdWlyZSgnLi9fY3R4JykoRnVuY3Rpb24uY2FsbCwgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQsIDIpO1xuICAgICAgICBzZXQodGVzdCwgW10pO1xuICAgICAgICBidWdneSA9ICEodGVzdCBpbnN0YW5jZW9mIEFycmF5KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgYnVnZ3kgPSB0cnVlOyB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pIHtcbiAgICAgICAgY2hlY2soTywgcHJvdG8pO1xuICAgICAgICBpZiAoYnVnZ3kpIE8uX19wcm90b19fID0gcHJvdG87XG4gICAgICAgIGVsc2Ugc2V0KE8sIHByb3RvKTtcbiAgICAgICAgcmV0dXJuIE87XG4gICAgICB9O1xuICAgIH0oe30sIGZhbHNlKSA6IHVuZGVmaW5lZCksXG4gIGNoZWNrOiBjaGVja1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NldC1wcm90by5qcyIsInZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgZ09QRCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzKE8sIFApKSByZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanMiLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1waWUuanMiXSwic291cmNlUm9vdCI6IiJ9