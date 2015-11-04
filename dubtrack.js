var elem = document.getElementById("chat-txt-message");
elem.value = ":heart: :yellow_heart: :green_heart: :blue_heart: :purple_heart: :heart: :yellow_heart: :green_heart: :blue_heart: :purple_heart:";
var e = $.Event( "keypress", { which: 13 } );
document.getElementById("chat-txt-message").trigger(e);

