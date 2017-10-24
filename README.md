# jasmine-stray-promises [![npm](https://img.shields.io/npm/v/jasmine-stray-promises.svg)](https://www.npmjs.com/package/jasmine-stray-promises) [![Build Status](https://travis-ci.org/behance/jasmine-stray-promises.svg?branch=master)](https://travis-ci.org/behance/jasmine-stray-promises)

Jasmine test helper for detecting async `Promise` usage outside of test boundaries.

> Requires [`jasmine`](https://github.com/jasmine/jasmine).

## Install

```
$ npm install --save-dev jasmine-stray-promises
```

## Usage

In `karma`:

```javascript
// karma.conf.js
module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],

    files: [
      // ...,
      require.resolve('jasmine-stray-promises'),
      // ...
    ],
  });
};
```

#### Ignoring stray promises in a test

Stray promises can be ignored in a single test or in a suite by calling `this._ignoreStrayPromises` in the jasmine test context.

```javascript
function asyncCall() {
  Promise.resolve('baz')
  .then(() => { /* do something */ });
}

describe('foo', function() {

  it('bar', function() {
    this._ignoreStrayPromises();

    asyncCall();
  });
});
```

#### Only print warning on stray promises in a test

Stray promises errors can be ignored (but will still be waited on), and an error can be printed in a single test or in a suite by calling `this._onlyWarnOnStrayPromises` in the jasmine test context.

```javascript
function asyncCall() {
  Promise.resolve('baz')
  .then(() => { /* do something */ });
}

describe('foo', function() {

  it('bar', function() {
    this._onlyWarnOnStrayPromises();

    asyncCall();
  });
});
```

#### Other Promise implementations

By default `jasmine-stray-promises` hook into the `window.Promise` implementation, but custom ones can be added as long as they
implement the thenable interface (i.e. has a "then" method on its prototype).

```javascript
const bluebird = require('bluebird');

window._watchPromiseImplementation(bluebird);
```

#### Debugging

Stray promises can be debugged by passing the following env variable to the test runner/compiler.

```sh
process.env.STRAY_PROMISE_DEBUG = true
```

Or within a test suite.

```javascript
describe('foo', function() {

  it('bar', function() {
    this._enableStrayPromisesDebugging();
  });
});
```

## Output

If test code executed a timer and didn't wait for it to resolve before ending the test, it will throw an error.

```javascript
// src.js
function track() {}

export function foo(a) {
  const p = new Promise((resolve) => setTimeout(resolve, 1000));
  p.then(track);
  return a + 1;
}

export function bar() {
  return foo(1);
}
```

```javascript
// test.js
import { bar } from './src';

describe('foo', function() {
  it('bar', function() {
    expect(bar()).toEqual(2);
  });
});
```

```text
PhantomJS 2.1.1 (Mac OS X 0.0.0) foo bar FAILED
       Error: Promise resolved outside test constraints in dist/jasmine-stray-promises.js (line 921)
       reboundThenable@dist/jasmine-stray-promises.js:921:67
       foo
       bar
       loaded@http://localhost:9876/context.js:151:17
PhantomJS 2.1.1 (Mac OS X 0.0.0): Executed 1 of 1 (1 FAILED) ERROR (0.004 secs / 0.003 secs)
```

## License

[Apache-2.0](/LICENSE)
