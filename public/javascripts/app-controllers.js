App.AboutController = Ember.Controller.extend({
	abouts: null
});

App.ApplicationController = Ember.Controller.extend({
	init: function() {
        this._super();
        this.set('profile', App.Profile.find(1));
    },
	profile: { "gravatar": "http://www.gravatar.com/avatar/5555afc5f10728b618994a71f61579c9?s=45&r=pg&d=mm" }	
});
  
App.FooterController =  Ember.Controller.extend({
	details: 'none'
});

//App.HomeController =  Ember.Controller.extend({
//	slogan: 'A framework for creating ambitious web applications',
//	isSlogan: true
//});