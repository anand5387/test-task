// Ember annoyingly breaks acceptance tests that involve
// landing on an "error" substate. Until this is solved,
// this workaround helps.
//
// This involves temporariliy overriding Ember.Test.adapter.exception
// to make it not re-raise exceptions related to this
// error substate.
//
// Code is mostly pinched from https://github.com/emberjs/ember.js/issues/12791
// (see comment by @aquamme on May 11, 2016), adapted to
// be reusable.
//
// To use, import this module and call `setup` on the
// test's `beforeEach` hook. Then call `teardown` on
// `afterEach`:
//
//   * `setup`: receives a callback that in turn
//      will receive the raised error. The callback
//      should return a truthy value if the passed error
//      must be ignored, falsy otherwise. Ie: if the
//      passed error is ok and simply part of the error
//      chain expected to lead to the error substate,
//      return true; otherwise return false.
//
//   * `teardown`: doesn't take any arguments.
//
// Note that Ember.Test.adapter.exception will be overriden
// between the calls to `setup` and `teardown`. If you
// do any further override, this code will not work.
//
import Ember from 'ember';

export default {
 oldAdapterException: null,

 setup(isExpected) {
   this.oldAdapterException = Ember.Test.adapter.exception;
   Ember.Test.adapter.exception = err => {
     if (!isExpected(err)) {
       return this.oldAdapterException(err);
     }
   };
 },

 teardown() {
   Ember.Test.adapter.exception = this.oldAdapterException;
 },
};