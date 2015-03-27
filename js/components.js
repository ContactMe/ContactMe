
ContactMe.ConfirmationButtonComponent = Ember.Component.extend({
  didRequestAction: false,
  confirmationText: null,
  click: function() {
    if (this.get('didRequestAction')) {
      this.set('didRequestAction', false);
      this.sendAction('action', this.get('param'));
    } else {
      this.set('didRequestAction', true);
    }
  }
});
