console.log('current_user.js');

poll_app.factory('CurrentFactory', function(){
	var factory = {};
	var current_user;
	factory.setCurrentUser = function(user){
		current_user = user;
	}

	factory.getCurrentUser = function(){
		return current_user;
	}

	factory.logout = function(){
		current_user = {};
	}

	return factory;
})