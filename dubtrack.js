var heartNo = [":heart: :yellow_heart: :green_heart: :blue_heart: :purple_heart: :heart: :yellow_heart: :green_heart: :blue_heart: :purple_heart:", ":yellow_heart: :green_heart: :blue_heart: :purple_heart: :heart: :yellow_heart: :green_heart: :blue_heart: :purple_heart: :heart:", ":green_heart: :blue_heart: :purple_heart: :heart: :yellow_heart: :green_heart: :blue_heart: :purple_heart: :heart: :yellow_heart:", ":blue_heart: :purple_heart: :heart: :yellow_heart: :green_heart: :blue_heart: :purple_heart: :heart: :yellow_heart: :green_heart:", ":purple_heart: :heart: :yellow_heart: :green_heart: :blue_heart: :purple_heart: :heart: :yellow_heart: :green_heart: :blue_heart:"];
function startSpamDialouge() {
    if (confirm("Taste the Rainbow?")) {
      var i = 0;
      var myVar;
      function myFunction() {
      myVar = setInterval(spam, 3000);
      }
      function spam() {
        if (i < 5) {
          $('#chat-txt-message').val(heartNo[i]);
          Dubtrack.room.chat.sendMessage();
          i++
        }
        else {
          i = 0;
        }
      }
    } 
    else {
      alert("test2");
    }
}
startSpamDialouge();



