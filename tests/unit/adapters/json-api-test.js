import { moduleFor, test } from 'ember-qunit';

moduleFor('adapter:json-api', 'Unit | Adapter | json api', {
  needs: [
          'service:configService',
          'service:ajaxStatusManager'
         ]
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let adapter = this.subject();
  assert.ok(adapter);
});
