
ContactMe = Ember.Application.create({
  rootElement: '#contactMe'
});

ContactMe.Router.map(function() {
  this.resource('contacts', function() {
    this.resource('contact', { path: ':contact_id' }, function() {
      this.route('edit');
    });
    this.route('new');
  });
})
