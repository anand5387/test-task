import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),
    query: {
        city: '',
        country: ''
    },
    isInitial: true,
    queryObserver: Ember.observer('query.city', 'query.country', function() {
        this.set('isInitial', false);
    }),
    isValid: Ember.computed('query.city', 'query.country', function() {
        return this.get('query.city') != '' || this.get('query.country') != '';
    }),
    queryString: Ember.computed('query.city', 'query.country', function() {
        let queryParam;
        if(this.get('query.city') != '' && this.get('query.country') != '') {
            queryParam = `${this.get('query.city')},${this.get('query.country')}`;
        } else if (this.get('query.city') != '') {
            queryParam = this.get('query.city');
        } else if (this.get('query.country') != '') {
            queryParam = this.get('query.country');
        } else {
            queryParam = '';
        }
        return queryParam;
    }),
    actions: {
        findWeather() {
            try {
                let latestData = this.get('store').queryRecord('weather', {
                    appid: '054e91c49df188834700a4af8c7146a7',
                    q: this.get('queryString'),
                    units: 'metric'
                });
                this.set('model', latestData);
            } catch(e) {
                Ember.Logger.log(e);
                this.set('model', null);
            }
        }
    }
});
