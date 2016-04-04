import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.query('listing', {
      orderBy: 'subcategory',
      equalTo: params.listing_subcategory,
    });
  }
});
