/* This code will lock out the response for 15 seconds.
After 15 seconds, the response buttons will become active and the page will
progress on button press. This works great for mobile, especially the
offline app. You can just copy and paste all of this into the js editor. */

Qualtrics.SurveyEngine.addOnload(function()
{

$('NextButton') && $('NextButton').hide();

/* You will need to change the QIDs below to match the values in your survey.
You can also add or subtract; just follow the same format and make the changes
throughout the code. */

var ros1 = document.getElementById("QR~QID/2~1");
var ros2 = document.getElementById("QR~QID/2~2");
var ros3 = document.getElementById("QR~QID/2~3");

ros1.disabled = true;
ros2.disabled = true;
ros3.disabled = true;

function enableButton(){ros1.disabled = false;
					   ros2.disabled = false;
					   ros3.disabled = false;}

setTimeout(enableButton, 15000); // You can change this to any value

this.questionclick = function(event,element){
	if (element.type == 'radio'){
		this.clickNextButton();
	}
}

});