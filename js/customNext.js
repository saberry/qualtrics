// Pretty straightforward and nothing new here //
// Just copy and paste into your js editor //

Qualtrics.SurveyEngine.addOnload(function() {

var newName = 'INSERT YOUR CUSTOM TEXT HERE'; // This is the only thing you need to do

if ($('NextButton').nodeName == 'INPUT') {
  $('NextButton').setValue(newName);
}

else if ($('NextButtonText').nodeName == 'SPAN') {
  $('NextButtonText').innerHTML = newName;
}

else {
  $('NextButton').innerHTML = newName;
}

document.getElementById('NextButton');

});