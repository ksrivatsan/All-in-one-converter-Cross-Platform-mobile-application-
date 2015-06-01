import Ember from 'ember';

var SpeedRoute = Ember.Route.extend({

  setupController: function(controller, model) {
    controller.set('title', 'Speed')
    .set('model', model);
  },
  model: function() {
    return [
    ];
  }
  
});


export default SpeedRoute;
