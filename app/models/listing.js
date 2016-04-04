import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  date: DS.attr(),
  content: DS.attr(),
  author: DS.attr(),
  location: DS.attr(),
  compensation: DS.attr(),
  subcategory: DS.attr(),
  category: DS.belongsTo('category', {async:true})
});
