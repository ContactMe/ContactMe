
ContactMe = Ember.Application.create({
  rootElement: '#contactMe'
});

ContactMe.Router.map(function() {
  this.resource('contacts', function() {
    this.resource('contact', { path: ':contact_id' })
    this.route('new');
  });
})
