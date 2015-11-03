var elem = document.getElementById("chat-txt-message");
elem.value = ":heart: :yellow_heart: :green_heart: :blue_heart: :purple_heart: :heart: :yellow_heart: :green_heart: :blue_heart: :purple_heart:";
var evt = document.createEvent("KeyboardEvent");
evt.initKeyEvent("keyup",true,true,window,0,0,0,0,13,13);
document.getElementById("chat-txt-message").dispatchEvent(evt);
document.focus();
