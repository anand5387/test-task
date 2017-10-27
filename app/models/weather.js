import DS from 'ember-data';

const {attr} = DS;

export default DS.Model.extend({
    /* Only DTO consumed. On complex Models computed properties will be created for view and conditional handling */
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
