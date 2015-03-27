
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

ContactMe.ContactEditController = Ember.ObjectController.extend({
  actions: {
    saveContact: function() {
      var contact = this.get('content');
      if (contact.phoneNumber) {
        Ember.set(contact, 'phoneNumber', contact.phoneNumber.replace(/\D/g, ''));
      }
      this.transitionToRoute('contact.index', contact);
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
      if (contact.phoneNumber) {
        Ember.set(contact, 'phoneNumber', contact.phoneNumber.replace(/\D/g, ''));
      }
      contacts.addObject(contact);
      this.transitionToRoute('contact', contact);
    }
  }
});
