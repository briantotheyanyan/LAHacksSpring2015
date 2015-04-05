$(document).ready(function(){
		var new_script = document.createElement('script');
		new_script.type = 'text/javascript';
		new_script.src = './firebase.js';
		new_script.className = 'MyInjectedScript';
		document.getElementsByTagName('head')[0].appendChild(new_script);
		var f = new Firebase("https://swagaliicious.firebaseio.com/");
		f.on('child_added', function (snapshot) {
				var message = snapshot.val();
				console.log(message);
			});
	}
);

