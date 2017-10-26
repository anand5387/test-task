import Ember from 'ember';
const {getOwner, Service, computed, Logger, inject} = Ember;

export default Service.extend({
  window: inject.service(),
  config: computed(function () {
    return getOwner(this).resolveRegistration('config:environment');
  }),

  /**
   * isTestLike is true when env is development and runnig tests in browser
   * or environment = test
   * @param  {String} 'config' key
   * @param  {Function} function compution callback
   * @return {Boolean}
   */
  isTestLike: computed('config', function () {
    let config = this.get('config');
    return config.environment === 'test' ||
      config.environment === 'development' &&
      this.get('window.location.pathname') === '/tests';
  }),
  isProductionLike: computed('config', function () {
    var config = this.get('config');

    return !!config && !!config.environment && !config.simulateDevEnvironment &&
      (config.environment === 'production' || config.environment === 'staging');
  }),
  isRealProduction: computed(function () {
    var config = this.get('config');

    if (!config) {
      return false;
    }
    let env = config.hasOwnProperty('deployEnvironment') ?
      config.deployEnvironment :
      config.environment;

    return env === 'production';
  }),
  getConfig() {
    Logger.warn('configService::getConfig is deprecated, use .config instead!');
    return this.get('config');
  }
});
