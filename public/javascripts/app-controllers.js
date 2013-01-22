App.AboutController = Ember.Controller.extend({
	abouts: null
});

App.ApplicationController = Ember.Controller.extend({
});
  
App.FooterController =  Em.ObjectController.extend({
	details: 'none'
});

App.HomeController =  Ember.Controller.extend({
	slogan: 'A framework for creating ambitious web applications',
	isSlogan: true
});