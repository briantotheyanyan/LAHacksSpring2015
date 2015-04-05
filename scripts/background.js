$(document).ready(function(){
		$('head').append(<script src='https://cdn.firebase.com/v0/firebase.js'></script>);
		var f = new Firebase("https://swagaliicious.firebaseio.com/");
		f.on('child_added', function (snapshot) {
				var message = snapshot.val();
				console.log(message);
			});
	}
);

