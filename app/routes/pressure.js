import Ember from 'ember';

var PressureRoute = Ember.Route.extend({

  setupController: function(controller, model) {
    controller.set('title', 'Pressure')
    .set('content', model.get('content'));
  },
  model: function() {
    return this.store.find('conversionstore');
  }
  
});


export default PressureRoute;
