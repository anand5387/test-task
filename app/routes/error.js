import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        tryAgain() {
            return this.transitionTo('dashboard');
        }
    }
});
