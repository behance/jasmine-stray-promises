import 'core-js/es6/promise';
import {
  install,
  uninstall,
  setupPromiseDetection,
  detectStrayPromises,
  watchPromiseImplementation
} from '../../src/promises';

describe('promises', function() {
  beforeEach(function() {
    // mock a promise implementation
    class MockPromise extends Promise {
      then(...args) {
        return super.then(...args);
      }

      catch(...args) {
        return super.then(...args);
      }
    }

    this.MockPromise = MockPromise;
    this.originalMockPromiseThen = MockPromise.prototype.then;
    this.originalMockPromiseCatch = MockPromise.prototype.catch;
    watchPromiseImplementation(MockPromise);
  });

  describe('#install', function() {
    afterEach(uninstall);

    it('should replace real promise implementations', function() {
      install();

      expect(this.MockPromise.prototype.then).not.toEqual(this.originalMockPromiseThen);
      expect(this.MockPromise.prototype.catch).not.toEqual(this.originalMockPromiseCatch);
    });
  });

  describe('#uninstall', function() {
    beforeEach(install);

    it('should restore real promise implementations', function() {
      uninstall();

      expect(this.MockPromise.prototype.then).toEqual(this.originalMockPromiseThen);
      expect(this.MockPromise.prototype.catch).toEqual(this.originalMockPromiseCatch);
    });
  });

  describe('#detectStrayPromises', function() {
    beforeEach(install);

    beforeEach(setupPromiseDetection);

    afterEach(uninstall);

    it('should throw if promises executed outside of test when chaining then', function(done) {
      const spy = jasmine.createSpy('promise callback');
      const promise = (new this.MockPromise((resolve) => setTimeout(resolve, 10)));
      promise.then(spy);

      const doneSpy = jasmine.createSpy('done');
      doneSpy.fail = jasmine.createSpy('done.fail').and.callFake((err) => {
        // calls through complete promise stack to determine if any are not supposed to be executed
        expect(spy).toHaveBeenCalled();
        expect(err.message).toMatch(/Promise "then" .+ resolved outside test constraints/);
        done();
      });

      detectStrayPromises.call(this, doneSpy);
    });

    it('should throw if promises executed outside of test when chaining then => catch', function(done) {
      const spy = jasmine.createSpy('promise callback');
      const promise = (new this.MockPromise((resolve, reject) => setTimeout(reject, 10)));
      promise.then(null, spy);

      const doneSpy = jasmine.createSpy('done');
      doneSpy.fail = jasmine.createSpy('done.fail').and.callFake((err) => {
        // calls through complete promise stack to determine if any are not supposed to be executed
        expect(spy).toHaveBeenCalled();
        expect(err.message).toMatch(/Promise "then" .+ resolved outside test constraints/);
        done();
      });

      detectStrayPromises.call(this, doneSpy);
    });

    it('should throw if promises executed outside of test when chaining catch', function(done) {
      const spy = jasmine.createSpy('promise callback');
      const promise = (new this.MockPromise((resolve, reject) => setTimeout(reject, 10)));
      promise.catch(spy);

      const doneSpy = jasmine.createSpy('done');
      doneSpy.fail = jasmine.createSpy('done.fail').and.callFake((err) => {
        expect(spy).not.toHaveBeenCalled();
        expect(err.message).toMatch(/Promise "catch" .+ resolved outside test constraints/);
        done();
      });

      detectStrayPromises.call(this, doneSpy);
    });

    it('should not throw if promises executed inside of test when chaining then', function(done) {
      const spy = jasmine.createSpy('promise callback');
      const promise = (new this.MockPromise((resolve) => setTimeout(resolve, 10)));
      promise.then(spy);

      const doneSpy = jasmine.createSpy('done').and.callFake(() => {
        expect(spy).toHaveBeenCalled();
        done();
      });
      doneSpy.fail = jasmine.createSpy('done.fail').and.callFake(done.fail);

      setTimeout(() => {
        detectStrayPromises.call(this, doneSpy);
      }, 15);
    });

    it('should not throw if promises executed inside of test when chaining catch', function(done) {
      const spy = jasmine.createSpy('promise callback');
      const promise = (new this.MockPromise((resolve) => setTimeout(resolve, 10)));
      promise.catch(spy);

      const doneSpy = jasmine.createSpy('done').and.callFake(() => {
        expect(spy).toHaveBeenCalled();
        done();
      });
      doneSpy.fail = jasmine.createSpy('done.fail').and.callFake(done.fail);

      setTimeout(() => {
        detectStrayPromises.call(this, doneSpy);
      }, 15);
    });

    describe('jasmine#_ignoreStrayPromises', function() {
      it('should not throw if promises executed outside of test with _ignoreStrayPromises using then', function(done) {
        const spy = jasmine.createSpy('promise callback');
        const promise = (new this.MockPromise((resolve) => setTimeout(resolve, 10)));
        promise.then(spy);

        const doneSpy = jasmine.createSpy('done').and.callFake(done);
        doneSpy.fail = jasmine.createSpy('done.fail').and.callFake(done.fail);

        this._ignoreStrayPromises();

        detectStrayPromises.call(this, doneSpy);
      });

      it('should not throw if promises executed outside of test with _ignoreStrayPromises using catch', function(done) {
        const spy = jasmine.createSpy('promise callback');
        const promise = (new this.MockPromise((resolve) => setTimeout(resolve, 10)));
        promise.catch(spy);

        const doneSpy = jasmine.createSpy('done').and.callFake(done);
        doneSpy.fail = jasmine.createSpy('done.fail').and.callFake(done.fail);

        this._ignoreStrayPromises();

        detectStrayPromises.call(this, doneSpy);
      });
    });
  });
});
