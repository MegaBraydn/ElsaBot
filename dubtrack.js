var heartNo = [":heart: :yellow_heart: :green_heart: :blue_heart: :purple_heart: :heart: :yellow_heart: :green_heart: :blue_heart: :purple_heart: :heart: :yellow_heart: :green_heart: :blue_heart:", ":yellow_heart: :green_heart: :blue_heart: :purple_heart: :heart: :yellow_heart: :green_heart: :blue_heart: :purple_heart: :heart: :yellow_heart: :green_heart: :blue_heart: :purple_heart:", ":green_heart: :blue_heart: :purple_heart: :heart: :yellow_heart: :green_heart: :blue_heart: :purple_heart: :heart: :yellow_heart: :green_heart: :blue_heart: :purple_heart: :heart:", ":blue_heart: :purple_heart: :heart: :yellow_heart: :green_heart: :blue_heart: :purple_heart: :heart: :yellow_heart: :green_heart: :blue_heart: :purple_heart: :heart: :yellow_heart:", ":purple_heart: :heart: :yellow_heart: :green_heart: :blue_heart: :purple_heart: :heart: :yellow_heart: :green_heart: :blue_heart: :purple_heart: :heart: :yellow_heart: :green_heart:"];
var i = 0;
function startSpamDialouge() {
    if (confirm("Taste the Rainbow?") === true) {
        var myVar;
        function myFunction() {
            myVar = setInterval(spam, 300);
        }
        $('#chat-txt-message').val("http://40.media.tumblr.com/PFO2xF03Amxr6pp8vQCxGHero1_500.jpg");
        Dubtrack.room.chat.sendMessage();
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



