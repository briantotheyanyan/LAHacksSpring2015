Firebase.enableLogging(true);
var f = new Firebase('https://swagalicious.firebaseio.com/');

window.addEventListener("mouseup", function(event){
		var line="";
		line = window.getSelection().toString();
		console.log(line);

		if(line != ""){
			f.push({"text": line});
		}
	}
	);