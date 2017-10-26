import Ember from 'ember';
import DS from 'ember-data';

const {
  inject: {service},
  computed,
  isEmpty,
  String: {
    dasherize
  }
} = Ember;

export default DS.JSONAPIAdapter.extend({
  configService: service(),
  ajaxStatusManager: service(),

  appConfig: computed(function () {
    return this.get('configService.config');
  }),
  host: computed(function () {
    var appConfig = this.get('appConfig');

    return appConfig.EmberENV.API_SERVICES.HOST;
  }),
  namespace: computed(function () {
    var appConfig = this.get('appConfig');

    return appConfig.EmberENV.API_SERVICES.NAMESPACE;
  }),

  /**
   * Sets standard headers on all data requests
   * Includes oauth client id
   * Includes accessToken if present
   * Volatile ensures property is recomputed
   * every time
   * @return {Object}     header object
   */
  headers: computed(function () {
    var header = {
        Accept: 'application/vnd.api+json, application/json'
      };
    return header;
  }).volatile(),

  /**
   * dasherize RESTFUL paths
   * @param  {String} type  type
   * @return {String}      dasherized path
   */
  pathForType(type) {
    return dasherize(type);
  },

  /**
   * We need to override the default ajax implementation to be compatible with our backend.
   *
   * if options.$disableLoader is truthy will skip counting and wont trigger addClass method
   *
   * @param {String} url               The server endpoint
   * @param {String} type              What kind of http verb
   * @param {Object} hash              The data we send
   * @param {Object} options           config additional config
   * @returns {RSVP.Promise}           this._super()
   */
  ajax(url, type, hash, options) {

    var ajaxStatusManager = this.get('ajaxStatusManager'),
      increaseCounter = () => {
        if (!options.$disableLoader) {
          ajaxStatusManager.incrementCounter();
        }
      },
      decreaseCounter = () => {
        if (!options.$disableLoader) {
          ajaxStatusManager.decrementCounter();
        }
      };

    options = options || {};

    Ember.$.ajaxSetup({
      traditional: true,
      cache: false
    });

    increaseCounter();
    if (isEmpty(hash)) {
      hash = {
      };
    }
    if (isEmpty(hash.data)) {
      hash.data = {
      }; // Our server expects the message payload to be inside a data property
    }

    return this._super(url, type, hash)
      .catch((error) => {
        Ember.$('body').trigger('error::server', error);
        throw error;
      })
      .finally(decreaseCounter);
  },

  /**
   * Handle errors and throw a custom error (compatible
   * with Ember 1.x.x errors) instead of a AdapterError
   * @param  {Number} status  http status
   * @param  {[type]} headers headers object
   * @param  {[type]} payload payload Object
   * @return {Mixed}          error Object | _super()
   */
  handleResponse(status, headers, payload) {
    if (status >= 400) {
      if (status === 401) {
        this.handle401();
      }
      if (status === 404) {
        this.handle404();
      }
      let err = new Error();

      err.status = status;
      err.responseJSON = payload;
      return err;
    } else {
      return this._super(...arguments);
    }
  },

  //setup this hook as you wish in your application adapter(s)
  handle401() {
    return this;
  },

  handle404() {
      console.log('Handle 404');
    return this;
  }

});
