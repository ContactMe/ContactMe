
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

var server = new Pretender(function() {
  this.get('/contacts', function(request) {
    return [200, {'Content-Type': 'application/json'}, JSON.stringify(FIXTURES)];
  });

  this.get('/contacts/:id', function(request) {
    var data = FIXTURES.findBy('id', parseInt(request.params.id));
    return [200, {'Content-Type': 'application/json'}, JSON.stringify(data)];
  });
});
