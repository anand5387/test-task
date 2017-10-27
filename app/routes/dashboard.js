import Ember from 'ember';
/*import longitude from 'npm:random-longitude';
import latitude from 'npm:random-latitude';*/
import country from 'npm:random-country';
export default Ember.Route.extend({
    /*  Used Random country instead of random co-ords, 
        because for most of the time it will show error 
        for blank cities. 

        To make it user understandable, instead of Geo location API,
        Used Random country to show different Weather zones.

        To check on Geo Co-ords, able to un comment Latitude and Longitude params 
        and Comment the City Param.
    */
    model() {
        /* 
            APPID and Other Parameters are directly added for sample task. For real time
            applications this will be moved to common config places
        */
        return this.store.queryRecord('weather', {
            appid: '054e91c49df188834700a4af8c7146a7',
            /*lat: latitude(),
            lon: longitude(),*/
            q: country({ full: true }),
            units: 'metric'
        });
    },

    afterModel(model) {
        model.set('errorMessage', false);
    },

    actions: {
        loading() {
            return true; // allows the loading template to be shown
        },
        error(error) {
          if (error) {
            return this.transitionTo('error'); // Tranition to error page
          }
        }
      }
});
