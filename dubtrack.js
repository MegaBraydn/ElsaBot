var heartNo = [":heart: :yellow_heart: :green_heart: :blue_heart: :purple_heart: :heart: :yellow_heart: :green_heart: :blue_heart: :purple_heart:", ":yellow_heart: :green_heart: :blue_heart: :purple_heart: :heart: :yellow_heart: :green_heart: :blue_heart: :purple_heart: :heart:", ":green_heart: :blue_heart: :purple_heart: :heart: :yellow_heart: :green_heart: :blue_heart: :purple_heart: :heart: :yellow_heart:", ":blue_heart: :purple_heart: :heart: :yellow_heart: :green_heart: :blue_heart: :purple_heart: :heart: :yellow_heart: :green_heart:", ":purple_heart: :heart: :yellow_heart: :green_heart: :blue_heart: :purple_heart: :heart: :yellow_heart: :green_heart: :blue_heart:"];
var i = 0;
function startSpamDialouge() {
    if (confirm("Taste the Rainbow?") === true) {
      var myVar;
      function myFunction() {
        myVar = setInterval(spam, 300);
      }
      myFunction();
    } 
    else {
      alert("good work");
    }
}
function spam() {
    if (i < 4) {
        $('#chat-txt-message').val(heartNo[i]);
        Dubtrack.room.chat.sendMessage();
        i++
    }
    else {
        $('#chat-txt-message').val(heartNo[i]);
        Dubtrack.room.chat.sendMessage();
        i = 0;
    }
}
startSpamDialouge();



