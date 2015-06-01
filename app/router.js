import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

	this.resource('index', {path: '/'});

	this.route('distance');
	this.route('speed');
	this.route('weight');
	this.route('currency');
	this.route('pressure');
	this.route('temperature');

});

export default Router;
