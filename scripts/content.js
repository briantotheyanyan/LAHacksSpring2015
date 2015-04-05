
//$("head").append("<script src='firebase.js'> </script> ");
var swagaliicious = new Firebase("https://swagaliicious.firebaseio.com/");

window.addEventListener("mouseup", function(event){
		var line = "";
		line = window.getSelection().toString();
		if(line != ""){
			//chrome.extension.sendMessage({"name":line});
			swagaliicious.push({text: line});
		}
	});