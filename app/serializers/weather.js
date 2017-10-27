import DS from 'ember-data';
export default DS.JSONAPISerializer.extend({
    /* Response normalized to support JSON API Format. Its done only for sample */
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
            payload.data = payload;
            payload.data.attributes = payload;
            payload.data.type = 'weather';
        return this._super(store, primaryModelClass, payload, id, requestType);
    }
});

