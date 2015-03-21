
ContactMe.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.replaceWith('contacts')
  }
});

ContactMe.ContactsRoute = Ember.Route.extend({
  model: function(params) {
    return FIXTURES;
  }
});
