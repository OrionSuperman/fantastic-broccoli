console.log('user.js');

poll_app.factory('UserFactory', function($http, $location){
	var factory = {};

	factory.create = function(info, callback){
		$http.post('/users', info)
		.then(function(output){
			callback(output);
		})
	}

	return factory;
})