App.Router.map(function(match) {
  match("/").to("home");
  match("/about").to("about");
});

App.HomeRoute = Ember.Route.extend({
	//renderTemplates: function() {
    //	this.render('index');
  	//}
});

App.AboutRoute = Ember.Route.extend({
	renderTemplates: function() {
    	this.render('about');
  	},
  	setupControllers: function(controller) {
  		controller.set('abouts', App.About.find());
  		var footerController = this.controllerFor('footer');
  		footerController.set('details', 'about route');
		this.render('footer', {
      		into: 'application',
      		outlet: 'footer',
      		controller: footerController
    	});
  	}
});