import DS from 'ember-data';

const {attr} = DS;

export default DS.Model.extend({
    base: attr(),
    clouds: attr(),
    main: attr(),
    description: attr(),
    coord: attr(),
    weather: attr(),
    wind: attr(),
    name: attr(),
    sys: attr()
});
