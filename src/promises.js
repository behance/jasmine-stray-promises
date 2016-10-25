import 'core-js/es6/map';

let strayPromises = [];
let isInstalled = false;
let isCleaningUp = false;
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
  if (typeof fn !== 'function' || isCleaningUp) {
    return fn;
  }
  function reboundResolver() {
    strayPromises.some((strayPromise) => {
      if (strayPromise.id !== localIdx || isCleaningUp) {
        return false;
      }
      strayPromise.hasBeenCalled = true;
      return true;
    });
    return fn.apply(this, arguments);
  }
  // this is useful for debugging
  // reboundResolver.originalFn = String(fn);
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
  return function reboundThenable(...args) {
    if (isCleaningUp) {
      return thenablePrototype.apply(this, args);
    }

    const localIdx = idx++;

    // must throw the error for PhantomJS to generate the stack trace
    let err;
    try {
      // Use this error message during development
      // throw new Error(`Promise "${method}" with id "${localIdx}" resolved outside test constraints`);
      throw new Error(`Promise "${method}" resolved outside test constraints`);
    }
    catch (e) {
      err = e;
    }
    const promiseData = {
      id: localIdx,
      hasBeenCalled: false,
      args,
      err,
      method
    };
    strayPromises.push(promiseData);

    const newPromise = thenablePrototype.apply(
      this,
      args.map((fn) => rebindResolver(fn, localIdx))
    );

    // keep a handy call stack reference
    promiseData.promise = this;

    return newPromise;
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
        promiseImpl.prototype[method] = rebindThenable(method, protoCache[method]);
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
  if (WATCHED_PROMISE_IMPLEMENTATIONS.has(promiseImpl)) {
    return;
  }
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
 * Mark a specific Promise implementation as "unwatched"
 *
 * @param {Function} promiseImpl
 */
export function unwatchPromiseImplementation(promiseImpl) {
  WATCHED_PROMISE_IMPLEMENTATIONS.delete(promiseImpl);
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
  isCleaningUp = false;

  this._ignoreStrayPromises = () => {
    this.__strayPromisesIgnored = true;
  };
}

/**
 * Detect any stray timers used in beforeEach, afterEach
 *
 * @throws {Error}
 */
export function detectStrayPromises(done) {
  // find stray promises from current tests
  const localStrayPromises = [...strayPromises];
  isCleaningUp = true;

  // reset timer cache for next test
  strayPromises = [];

  if (!this.__strayPromisesIgnored && localStrayPromises.length > 0) {
    let unresolvedPromises = [...localStrayPromises].filter(({ hasBeenCalled }) => !hasBeenCalled);

    function filterUnresolved(val) {
      unresolvedPromises = unresolvedPromises.filter(({ id }) => id !== val.id);
    }

    Promise.all(
      [...unresolvedPromises].map((val) => {
        const isCatchStatement = val.method === 'catch' || (val.method === 'then' && !val.args[0]);
        const isThenStatement = val.method === 'then' && typeof val.args[0] === 'function';
        // Must clear up any "catch" statements that were never called
        return val.promise
        .then((data) => {
          // filter out catch clauses where the resolution of the promise was a success
          if (isCatchStatement) {
            filterUnresolved(val);
          }
          return data;
        })
        .catch(() => {
          if ((val.hasBeenCalled && isCatchStatement) || isThenStatement) {
            filterUnresolved(val);
          }
        });
      })
    )
    .then(function() {
      isCleaningUp = false;
      if (unresolvedPromises.length > 0) {
        const firstStrayPromise = unresolvedPromises.shift();
        throw firstStrayPromise.err;
      }
    })
    .then(done, done.fail);
  }
  else {
    done();
  }
}
