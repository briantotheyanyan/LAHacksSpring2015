window.addEventListener("mouseup", function(event){
		var line = "";
		line = window.getSelection().toString();
		if(line != ""){
			chrome.extension.sendMessage({"name":line});
		}
	});