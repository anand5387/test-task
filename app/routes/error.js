import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        // Navigate back to Dashboard page
        tryAgain() {
            return this.transitionTo('dashboard');
        }
    }
});
