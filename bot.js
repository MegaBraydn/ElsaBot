/*
    namespace variables

 */
 
var version = 3.0;

/*
    Mainline code
*/

API.sendChat("elsabot ver" + version + " is active!");

/*
    callback definitions 
*/

API.on(API.CHAT_COMMAND, function(value) {
  alert(value + ' typed as chat command');
});

API.on(API.CHAT, function(data) {
    if (data.type === "message" && data.message === "!skip") {
        var staff = [];
        staff = API.getStaff();
        alert(staff[0].username + ", " + data.un)
        for (var i = 0, l = staff.length; i < l; i++) {
            if (data.un === staff[i].username) {
                alert("break");
                if (staff[i].role > 1) {
                    API.moderateForceSkip();
                }
            }
        }
    }
});

/*
the following commands are prototypes used during development
//
API.on(API.CHAT, function(data) {
  if(data.type === "message" && data.message === "!testcmd") {
    API.moderateDeleteChat(data.cid);
    if (data.un === "zenopie") {
      //alert("t1");
      var staff = [];
      staff = API.getStaff();
      //alert("nr on staff =" + staff.length);
      alert("staff [0] " + staff[0].role + staff[0].username);
      //alert("testcmds");
    }
  }
});

API.on(API.CHAT, function(data) {
  if(data.type === "message" && data.message === "!ping") {
    API.moderateDeleteChat(data.cid);
    API.sendChat("!pong");
  }
});

*/
