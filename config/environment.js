/* eslint-env node */

const PRODUCTION__HOST = 'https://api.openweathermap.org/data/2.5';
const LOCAL_HOST = 'https://api.openweathermap.org/data/2.5';

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'repo',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      },
      API_SERVICES: {
        HOST: PRODUCTION__HOST,
        NAMESPACE: ''
      },
      OWM_API: {
        KEY: '054e91c49df188834700a4af8c7146a7'
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.EmberENV.API_SERVICES.HOST = LOCAL_HOST;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.EmberENV.API_SERVICES.HOST = LOCAL_HOST;
  }

  if (environment === 'production') {

  }

  return ENV;
};
