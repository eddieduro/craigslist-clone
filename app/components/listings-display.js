import Ember from 'ember';

export default Ember.Component.extend({


    sortedListing: Ember.computed.filterBy('listing', 'subcategory', 'tech'),
    // sortedListing: function (){
    //   var listings = this.get('listing.content');
    //   var subcategory = [];
    // listings.forEach(function(listing){
    //   // if(this.get('subcategory') === listing.subcategory){
    //
    //     subcategory.push(listing._data);
    //   // }
    // })
    //   console.log(listings);
    // return this.get('listing').filterBy('subcategory', this.get("subcategory"));
    // }.property('listing.@each.subcategory')
  // var listing = this.get('listing');

});
