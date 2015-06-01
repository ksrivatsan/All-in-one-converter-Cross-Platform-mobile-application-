import Ember from 'ember';

var WeightController = Ember.ArrayController.extend({
  pounds:'',
  kgs:'',
  kilometerPerHourConversion: function (){
    this.set('kgs',this.get('pounds') / 2.20462);
  }.observes('pounds'),
  milesPerHourConversion: function (){
    this.set('pounds',this.get('kgs') * 2.20462);
  }.observes('kgs'),
});


export default WeightController;
