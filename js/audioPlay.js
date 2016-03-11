// Plays an audio file on choice select //

Qualtrics.SurveyEngine.addOnload(function() {

var audio = new Audio('LINK.TO.YOUR.FILE'); // Change this to your sound file //

/* This will play an audio file on the RO with a choice value of 1 is selected.
Just change the value to make it happen for a different response */

this.questionclick = function(event,element) {
  if (this.getChoiceValue(1) === true) {
    audio.play();
  }

  else if (this.getChoiceValue(1) !== true) {
    return;
  }
}
});