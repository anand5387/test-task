import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';

moduleFor('service:config-service', 'Unit | Service | config service', {
  // Specify the other units that are required for this test.
  needs: ['service:window']
});

// Replace this with your real tests.
test('it exists', function (assert) {
  let service = this.subject();
  assert.ok(service);
});

test('getConfig()', function (assert) {
  let service = this.subject(),
    mockConfig = {a: 1};
  Ember.setOwner(service, {
    resolveRegistration: function () {
      return mockConfig;
    }
  });

  assert.deepEqual(service.getConfig(), mockConfig);
});

test('.config', function (assert) {
  let service = this.subject(),
    mockConfig = {a: 1};
  Ember.setOwner(service, {
    resolveRegistration: function () {
      return mockConfig;
    }
  });

  assert.deepEqual(service.get('config'), mockConfig);
});

test('.isProductionLike when there is no config', function (assert) {
  let service = this.subject({
    config: null
  });
  assert.notOk(service.get('isProductionLike'), 'should be false');
});

test('.isProductionLike when config.environment is production', function (assert) {
  let service = this.subject({
    config: {environment: 'production'}
  });
  assert.ok(service.get('isProductionLike'), 'should be true');
});

test('.isProductionLike when config.environment is staging', function (assert) {
  let service = this.subject({
    config: {environment: 'staging'}
  });
  assert.ok(service.get('isProductionLike'), 'should be true');
});

test('.isProductionLike when config.environment is development', function (assert) {
  let service = this.subject({
    config: {environment: 'development'}
  });
  assert.notOk(service.get('isProductionLike'), 'should be false');
});

test('.isProductionLike when config.environment is test', function (assert) {
  let service = this.subject({
    config: {environment: 'test'}
  });
  assert.notOk(service.get('isProductionLike'), 'should be false');
});

test('.isRealProduction when there is no config', function (assert) {
  let service = this.subject({
    config: null
  });
  assert.notOk(service.get('isProductionLike'), 'should be false');
});

test('.isRealProduction when config.environment is production', function (assert) {
  let service = this.subject({
    config: {environment: 'production'}
  });
  assert.ok(service.get('isRealProduction'), 'should be true');
});

test('.isRealProduction when config.environment is staging', function (assert) {
  let service = this.subject({
    config: {
      environment: 'production',
      deployEnvironemnt: 'staging'
    }
  });
  assert.ok(service.get('isRealProduction'), 'should be false');
});

test('.isRealProduction when config.environment is development', function (assert) {
  let service = this.subject({
    config: {environment: 'development'}
  });
  assert.notOk(service.get('isRealProduction'), 'should be false');
});

test('.isRealProduction when config.environment is test', function (assert) {
  let service = this.subject({
    config: {environment: 'test'}
  });
  assert.notOk(service.get('isRealProduction'), 'should be false');
});

test('#isTestLike', function (assert) {
  let service = this.subject({
    config: {environment: 'test'}
  });

  assert.equal(service.get('isTestLike'), true, 'should be true when env is test');
});

test('#isTestLike', function (assert) {
  let service = this.subject({
    config: {environment: 'production'}
  });

  assert.equal(service.get('isTestLike'), false, 'should be false when env is test');
});


test('#isTestLike', function (assert) {
  let service = this.subject({
    config: {environment: 'development'},
    window: {
      location: {
        pathname: '/tests'
      }
    }
  });

  assert.equal(service.get('isTestLike'), true, 'should be true when env is development and path is /tests');
});

test('#isTestLike', function (assert) {
  let service = this.subject({
    config: {environment: 'production'},
    window: {
      location: {
        pathname: '/tests'
      }
    }
  });

  assert.equal(service.get('isTestLike'), false, 'should be false when env is prod and path is /tests');
});
