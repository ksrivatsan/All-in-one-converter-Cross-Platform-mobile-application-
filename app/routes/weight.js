import Ember from 'ember';

var WeightRoute = Ember.Route.extend({

  setupController: function(controller, model) {
    controller.set('title', 'Weight')
    .set('model', model);
  },
  model: function() {
    return [
    ];
  }
  
});


export default WeightRoute;
