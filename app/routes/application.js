import Ember from 'ember';

export default Ember.Route.extend({
  // By Default land on Dashboard Router
  beforeModel() {
    return this.transitionTo('dashboard');
  }
});
