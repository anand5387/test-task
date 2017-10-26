import Ember from 'ember';

export function integerRoundoff(params/*, hash*/) {
  return Math.round(params[0]);
}

export default Ember.Helper.helper(integerRoundoff);
