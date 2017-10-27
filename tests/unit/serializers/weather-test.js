import { moduleForModel, test } from 'ember-qunit';

moduleForModel('weather', 'Unit | Serializer | weather', {
  // Specify the other units that are required for this test.
  needs: ['serializer:weather']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});

/*test('normalize response', function (assert) {
  assert.expect(3);
  let store = this.container.lookup('service:store'),
    serializer = store.serializerFor('weather'),
    hash = {
      data: {
        weather: [{
            id: 1,
            name: 'London'
          }]
      }
    };
    serializer.normalizeResponse(
      store,
      store.modelFor('weather'),
      hash,
      hash.id
    );
    console.log(hash);
  assert.equal(hash.data.weather.id, '1', 'should have one response');
  assert.equal(hash.data.weather.name, 'London', 'should have city name');
  assert.notOk(hash.data.weather.fault, 'should not have 1st fault key');
});*/
