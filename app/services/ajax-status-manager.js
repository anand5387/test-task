import Ember from 'ember';

export default Ember.Service.extend({

  counter: 0,

  incrementCounter: function () {
    if (this.get('counter') === 0) {
      Ember.$('body').addClass('requestInProgress');
      Ember.$('.data-disable-on-request, [data-disable-on-request]').trigger('ajax:requestInProgress', true);
    }
    this.incrementProperty('counter', 1);
  },

  decrementCounter: function () {
    this.decrementProperty('counter', 1);
    if (this.get('counter') === 0) {
      Ember.$('body').removeClass('requestInProgress');
      Ember.$('.data-disable-on-request, [data-disable-on-request]').trigger('ajax:requestInProgress', false);
    }
  }
});
