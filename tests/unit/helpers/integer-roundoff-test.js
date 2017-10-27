
import { integerRoundoff } from 'repo/helpers/integer-roundoff';
import { module, test } from 'qunit';

module('Unit | Helper | integer roundoff');

test('it works', function(assert) {
  assert.equal(integerRoundoff([0]), '0', 'if value is zero');
  assert.equal(integerRoundoff([99.8]), '100', 'rounds up value correctly');
  assert.equal(integerRoundoff([89.29]), '89', 'rounds down value correctly');
});

