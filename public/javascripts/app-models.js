App.About = DS.Model.extend({
    name: DS.attr('string')
});

App.Profile = DS.Model.extend({
  email: DS.attr('string'),
  gravatar: DS.attr('string')
});