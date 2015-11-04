var elem = document.getElementById("chat-txt-message");
elem.value = ":heart: :yellow_heart: :green_heart: :blue_heart: :purple_heart: :heart: :yellow_heart: :green_heart: :blue_heart: :purple_heart:";
var e = jQuery.Event("keypress");
e.which = 13; //choose the one you want
e.keyCode = 13;
$("#chat-txt-message").trigger(e);

