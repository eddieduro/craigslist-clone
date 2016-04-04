import Ember from 'ember';

export function showSubcat(params/*, hash*/) {
  var categories = params[0];
  console.log(categories.listings);
  // if(categories.get('subcategory') === )
}
export default Ember.Helper.helper(showSubcat);
