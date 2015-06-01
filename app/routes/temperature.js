import Ember from 'ember';

var TemperatureRoute = Ember.Route.extend({

  setupController: function(controller, model) {
    controller.set('title', 'Temperature')
    .set('model', model);
  },
  model: function() {
    return [
    ];
  }
  
});


export default TemperatureRoute;
