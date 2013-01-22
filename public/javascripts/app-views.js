App.ApplicationView = Ember.View.extend({
    templateName:  'application',
    classNames: ['application-view']
});

App.HomeView =  Ember.View.extend({
    templateName:  'index',
    mouseDown: function() {
      	this.controller.set('slogan','changed');
      	//App.container.lookup('router:main').router
      	//App.container.lookup('controller:home')
    }
});

App.FooterView =  Em.View.extend({
    templateName:  'footer'
});