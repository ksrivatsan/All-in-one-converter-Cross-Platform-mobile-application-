import Ember from 'ember';

var CurrencyRoute = Ember.Route.extend({

  setupController: function(controller, model) {
    controller.set('title', 'Currency')
    .set('model', model);
  },
  model: function() {
    return [
    ];
  }
  
});


export default CurrencyRoute;
