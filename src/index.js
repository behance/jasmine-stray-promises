/* eslint-env jasmine */

import {
  install,
  uninstall,
  setupPromiseDetection,
  detectStrayPromises,
  watchPromiseImplementation,
} from './promises';

// assign function so it can be used to hook up additional Promise libs
window._watchPromiseImplementation = watchPromiseImplementation;

// install timers
beforeAll(install);

afterAll(uninstall);

beforeEach(setupPromiseDetection);

afterEach(detectStrayPromises);

if (window.Promise) {
  // watch the native implementation
  watchPromiseImplementation(Promise);
}
