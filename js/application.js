
ContactMe = Ember.Application.create({
  rootElement: '#contactMe'
});

ContactMe.Router.map(function() {
  this.resource('contacts')
})
