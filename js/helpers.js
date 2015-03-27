
Ember.Handlebars.helper('formatPhoneNumber', (function() {
  var rgx = /^(\d)?(\d{3})?(\d{3})(\d{4})$/,
      replacer = function(match, p1, p2, p3, p4) {
        var output = '';
        if (p1) { output += '+' + p1 + ' '; }
        if (p2) { output += '(' + p2 + ') '; }
        output += p3 + ' - ' + p4;
        return output;
      };

  return function(phoneNumber) {
    var numberString, matches, length, output;
    numberString = ('' + phoneNumber).replace(/\D/g, '');
    output = numberString.replace(rgx, replacer);
    return new Ember.Handlebars.SafeString(output);
  }
})(), 'phoneNumber');
