import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('search-via-city', 'Integration | Component | search via city', {
  integration: true
});

test('Default State', function(assert) {
  const Model = Ember.Object.extend({
    city: '',
    country: ''
  });

  const model = Model.create();
  this.set('query', model);
  this.render(hbs`{{search-via-city }}`);
  assert.equal(this.$('#cityQuery').length, 1, 'City text box available');
  assert.equal(this.$('#countryQuery').length, 1, 'Country text box available');
  assert.equal(this.$('button').length, 1, 'Search button available');
  assert.equal(this.$('.text-danger').length, 1, 'Error message shown');
});

test('Checking search value', function(assert) {
  const Model = Ember.Object.extend({
    city: '',
    country: ''
  });

  const model = Model.create();
  this.set('query', model);
  this.render(hbs`{{search-via-city }}`);
  assert.equal(this.$('#cityQuery').length, 1, 'City text box available');
  assert.equal(this.$('#countryQuery').length, 1, 'Country text box available');
  assert.equal(this.$('button').length, 1, 'Search button available');
  this.$('#cityQuery').val('New York').change();
  assert.equal(this.$('.text-danger').length, 0, 'Valid search - Error message hidden');
});
