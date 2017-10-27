import { test } from 'qunit';
import moduleForAcceptance from 'repo/tests/helpers/module-for-acceptance';
import errorStateWorkaround from 'repo/tests/helpers/error-state-workaround';

moduleForAcceptance('Acceptance | dashboard', {
  beforeEach: function() {
    errorStateWorkaround.setup(err => {
      if(err) {
        return true;
      }
    });
  },
 
  afterEach: function() {
    errorStateWorkaround.teardown();
  },
});

test('visiting dashboard', function(assert) {
  visit('/dashboard');

  andThen(function() {
    assert.equal(currentURL(), '/dashboard', 'Landed on dashboard page');
    assert.equal(find('.form-inline .form-group').length, 2, 'Search forms available');
    assert.equal(find('.form-inline button').length, 1, 'Search button available');
    assert.equal(find('h1').text().trim(), 'Weather in your current city', 'H1 header available');
    assert.equal(find('h2').length, 1, 'H2 - City Name available');
    assert.equal(find('h3').length, 1, 'H3 - Temperature available');
    assert.equal(find('h4').length, 1, 'H4 - Weather type available');
  });

  fillIn('#cityQuery', 'Chennai');
  fillIn('#countryQuery', 'India');
  click('.form-inline button');

  andThen(function () {
    assert.equal(find('h2').text().trim(), 'Chennai, IN', '​And I see the updated weather for Chennai');
  });

  fillIn('#cityQuery', 'New York');
  fillIn('#countryQuery', 'US');
  click('.form-inline button');

  andThen(function () {
    assert.equal(find('h2').text().trim(), 'New York, US', '​And I see the updated weather for New York');
  });

  fillIn('#cityQuery', 'zzzzzzz');
  fillIn('#countryQuery', 'zzzzzz');
  click('.form-inline button');   

  andThen(function () {
    assert.equal(find('h1.text-danger').length, 1, '​And I see the error message for invalid city');
  });

  
});
