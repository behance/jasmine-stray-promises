import 'core-js/es6/map';

let strayPromises = [];
let isInstalled = false;
// Internal promise reference counter
let idx = 0;

const WATCHED_PROMISE_METHODS = ['then', 'catch'];
const WATCHED_PROMISE_IMPLEMENTATIONS = new Map();

/**
 * Rebind an individual resolver function
 * ex. `.then(resolver)`
 *
 * @param {Function|*} fn
 * @param {Number} localIdx
 * @returns {Function|*}
 */
function rebindResolver(fn, localIdx) {
  if (typeof fn !== 'function') {
    return fn;
  }
  return function reboundResolver() {
    strayPromises = strayPromises.filter(({ id }) => id !== localIdx);
    return fn.apply(this, arguments);
  };
}

/**
 * Rebind a thenable callback
 *
 * @param {Function} thenablePrototype
 * @returns {Function}
 */
function rebindThenable(thenablePrototype) {
  return function reboundThenable(...args) {
    const localIdx = idx++;

    // must throw the error for PhantomJS to generate the stack trace
    let err;
    try {
      throw new Error('Promise resolved outside test constraints');
    }
    catch (e) {
      err = e;
    }
    strayPromises.push({
      id: localIdx,
      err
    });

    return thenablePrototype.apply(
      this,
      args.map((fn) => rebindResolver(fn, localIdx))
    );
  };
}

/**
 * Hook up all watched Promise implementations
 */
function wirePromiseHooks() {
  WATCHED_PROMISE_IMPLEMENTATIONS.forEach((protoCache, promiseImpl) => {
    if (protoCache.isInstalled) {
      return;
    }
    protoCache.isInstalled = true;
    WATCHED_PROMISE_METHODS.forEach((method) => {
      if (typeof promiseImpl.prototype[method] === 'function') {
        promiseImpl.prototype[method] = rebindThenable(protoCache[method]);
      }
    });
  });
}

/**
 * Remove all watched Promise implementation hooks
 */
function unwirePromiseHooks() {
  WATCHED_PROMISE_IMPLEMENTATIONS.forEach((protoCache, promiseImpl) => {
    if (!protoCache.isInstalled) {
      return;
    }
    protoCache.isInstalled = false;
    WATCHED_PROMISE_METHODS.forEach((method) => {
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
export function watchPromiseImplementation(promiseImpl) {
  const protoCache = {};
  WATCHED_PROMISE_METHODS.forEach((method) => {
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
 * Override the timer functions with the tested functions
 */
export function install() {
  if (isInstalled) {
    return;
  }
  isInstalled = true;
  wirePromiseHooks();
}

/**
 * Restore the original timer functions
 */
export function uninstall() {
  if (!isInstalled) {
    return;
  }
  isInstalled = false;
  unwirePromiseHooks();
}

/**
 * Set up jasmine instance variable for ignoring promises
 */
export function setupPromiseDetection() {
  strayPromises = [];

  this._ignoreStrayPromises = () => {
    this.__strayPromisesIgnored = true;
  };
}

/**
 * Detect any stray timers used in beforeEach, afterEach
 *
 * @throws {Error}
 */
export function detectStrayPromises() {
  // find stray promises from current tests
  const localStrayPromises = [...strayPromises];

  // reset timer cache for next test
  strayPromises = [];

  if (!this.__strayPromisesIgnored && localStrayPromises.length > 0) {
    let firstStrayPromise = localStrayPromises.shift();
    throw firstStrayPromise.err;
  }
}
