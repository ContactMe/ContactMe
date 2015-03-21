
ContactMe.ContactController = Ember.ObjectController.extend({
  needs: ['contacts'],
  actions: {
    deleteContact: function(model) {
      var contacts = this.get('controllers.contacts');
      contacts.removeObject(model);
      this.transitionToRoute('contacts');
    }
  }
});

ContactMe.ContactsNewController = Ember.ObjectController.extend({
  needs: ['contacts'],
  actions: {
    createContact: function() {
      var contact = this.get('content'),
          contacts = this.get('controllers.contacts'),
          length = contacts.get('length');
      Ember.set(contact, 'id', length + 1);
      contacts.addObject(contact);
      this.transitionToRoute('contact', contact);
    }
  }
});
