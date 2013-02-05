App.Router.map(function() {
	this.resource("index", { path: "/" });
  	this.resource('about', { path: "/about" }, function() {
  		this.route('contact');
  	});
  	this.resource("profile");
});

App.ApplicationRoute = Ember.Route.extend({
  setupController: function(controller, model){
  	console.log("ApplicationRouter setup");
  	controller.set("profile", App.Profile.find(1));
    this._super(controller, model);
  }
});

App.ProfileRoute = Ember.Route.extend({
  model: function() {
    return App.Profile.find(1);
  }
});

App.AboutContactRoute = Ember.Route.extend({
	enter: function(){
		console.log('init route about contact');
		this.controllerFor('footer').set('details','contact');
	},
	renderTemplate: function(controller, model) {
    	this.render('aboutContact');
  	}
});

App.AboutIndexRoute = Ember.Route.extend({
	enter: function(){
		console.log('init route about index');
		this.controllerFor('footer').set('details','about');
	},
	renderTemplate: function(controller, model) {
    	this.render('aboutIndex');
  	}
});

//App.HomeRoute = Ember.Route.extend({
	//renderTemplates: function() {
    //	this.render('index');
  	//}
//});

//App.AboutRoute = Ember.Route.extend({
//	renderTemplates: function() {
//    	this.render('about');
//  	},
//  	setupControllers: function(controller) {
//  		controller.set('abouts', App.About.find());
//  		var footerController = this.controllerFor('footer');
//  		footerController.set('details', 'about route');
//		this.render('footer', {
//      		into: 'application',
//      		outlet: 'footer',
//      		controller: footerController
//    	});
//  	}
//});