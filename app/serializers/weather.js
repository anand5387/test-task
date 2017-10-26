import DS from 'ember-data';
export default DS.JSONAPISerializer.extend({
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
            payload.data = payload;
            payload.data.attributes = payload;
            payload.data.type = 'weather';
        console.log(payload);
        return this._super(store, primaryModelClass, payload, id, requestType);
    }
});

