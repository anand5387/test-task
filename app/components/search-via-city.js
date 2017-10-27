import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),
    query: {
        city: '',
        country: ''
    },
    isLoading: false,
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
            if(this.get('isValid')) {
                this.set('isLoading', true)
                try {
                    let self = this
                    var latestData = this.get('store').queryRecord('weather', {
                        appid: '054e91c49df188834700a4af8c7146a7',
                        q: this.get('queryString'),
                        units: 'metric'
                    });
                    self.set('model', latestData);
                    self.set('isLoading', false);
                } catch(e) {
                    Ember.Logger.log(e);
                }
                this.set('isLoading', false);
            } else {
                Ember.Logger.log('Enter City or Country Name');
            }
        }
    }
});
