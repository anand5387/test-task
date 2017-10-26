import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        tryAgain() {
            console.log('Clicker');
            return this.transitionTo('dashboard');
        }
    }
});
