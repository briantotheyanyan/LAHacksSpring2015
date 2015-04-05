//$("head").append("<script src='firebase.js'> </script>");
var swagaliicious = new Firebase("https://swagaliicious.firebaseio.com/");

messagesRef.on('child_added', function (snapshot) {
    var message = snapshot.val();
    alert(message.text);
});