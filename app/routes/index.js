import Ember from 'ember';

var IndexRoute = Ember.Route.extend({

  model: function() {
  	return {header: "All in one Converter", button: "button"};
  }
});


export default IndexRoute;
