// jQuery Autocomplete //
// You will need to put the following lines in your header source: //

/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.3/jquery-ui.min.js"></script>
<script>var $j = jQuery.noConflict();</script> */

$j(function() {
  var availableTags = [
    "George Jefferson",
    "Archie Bunker",
    "Kid Dynomite",
    "Schneider"
    // You can continue adding names//
    ];

$j( ".InputText" ).autocomplete({
  source: availableTags
});

});