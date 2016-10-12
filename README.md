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

## License

[Apache-2.0](/LICENSE)
