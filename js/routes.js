
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

ContactMe.ContactRoute = Ember.Route.extend({
  model: function(params) {
    return FIXTURES.findBy('id', parseInt(params.contact_id));
  }
});

ContactMe.ContactsIndexRoute = Ember.Route.extend({
  redirect: function(params) {
    var contacts = this.modelFor('contacts');
    if(!Ember.isEmpty(contacts)) {
      this.replaceWith('contact', contacts.get('firstObject'));
    }
  }
});
