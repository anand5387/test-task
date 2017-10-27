import { moduleFor, test } from 'ember-qunit';

moduleFor('adapter:weather', 'Unit | Adapter | weather', {
  // Specify the other units that are required for this test.
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
