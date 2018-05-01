$(function(){
  var participant = [
  	{ value: 'Nihit Jain | nihit.jain_cs16@gla.ac.in', data: '<a href="/sheero/certi/adm/sample.pdf" target="_blank" download="sample.pdf">Download</a>'},
    { value: 'Name | email', data: '<a href="/complete/link/to/certificate.pdf" target="_blank">Download</a>'},
    { value: 'Dummy Name (dummy@email.com)', data: '<a href="/dummy/link/to/certificate.pdf" download="FILE_NAME">Download</a>'}
    ];
  
  // setup autocomplete function pulling from currencies[] array
  $('#autocomplete').autocomplete({
    lookup: participant,
    onSelect: function (suggestion) {
      var thehtml = '<strong>Participant Name (email):</strong> ' + suggestion.value + ' <br> <strong>Link:</strong> ' + suggestion.data;
      $('#outputcontent').html(thehtml);
    }
  });
  

});