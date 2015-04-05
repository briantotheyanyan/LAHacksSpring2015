$(document).ready(function(){
		var new_script = document.createElement('script');
		new_script.type = 'text/javascript';
		new_script.src = './firebase.js';
		new_script.className = 'MyInjectedScript';
		document.getElementsByTagName('head')[0].appendChild(new_script);
		
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
	}
	);