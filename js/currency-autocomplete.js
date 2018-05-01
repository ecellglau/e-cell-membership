$(function(){
  var participants = [
  	{ name: 'Nihit Jain', email: 'nihit.jain_cs16@gla.ac.in', link: '<a href="../certi/admad/sample.pdf"'},
    { value: 'Zambian kwacha', data: 'ZMK' },
    { value: 'Zimbabwean dollar', data: 'ZWD' },
  ];
  
  // setup autocomplete function pulling from currencies[] array
  $('#autocomplete').autocomplete({
    lookup: participants,
    onSelect: function (suggestion) {
      var thehtml = '<strong>Participant Name:</strong> ' + suggestion.name + ' <br> <strong>Email:</strong> ' + suggestion.email + ' <br> <strong>Link:</strong> ' + suggestion.link;
      $('#outputcontent').html(thehtml);
    }
  });
  

});