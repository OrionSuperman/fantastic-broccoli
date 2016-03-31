console.log('user.js');

game_app.factory('UserFactory', function($http, $location){
	var factory = {};

	factory.create = function(info, callback){
		$http.post('/users', info)
		.then(function(output){
			callback(output);
		})
	}

	factory.show = function(callback){
		$http.get('/user/:id')
		.then(function(output){
			callback(output);
		})
	}

	return factory;
})