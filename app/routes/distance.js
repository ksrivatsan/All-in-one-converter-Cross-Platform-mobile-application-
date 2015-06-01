import Ember from 'ember';

var DistanceRoute = Ember.Route.extend({

  setupController: function(controller, model) {
    // controller.set('title', 'Distance')
    controller.set('content', model.get('content'));
  },
  model: function() {
    return this.store.find('conversionstore');
  }
  
});


export default DistanceRoute;
