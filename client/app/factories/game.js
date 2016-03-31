console.log('game.js');

game_app.factory('GameFactory', function($http, $location){
	var factory = {};
	var game = [];

	// factory.index = function(callback) {
	// 	$http.get('/polls')
	// 	.then(function(output){
	// 		polls = output;
	// 		callback(polls);
	// 	})
	// }

	factory.create = function(info, callback){
		$http.post('/games', info)
		.then(function(output){
			callback(output);
		})
	}

	factory.update = function(info, callback){
		console.log(info);
		$http.put('/polls', info)
		.then(function(output){
			callback(output);
		})
	}

	factory.delete = function(info, callback){
		console.log("THIS IS THE ID");
		console.log(info);
		$http.post('/polls/delete', info)
		.then(function(output){
			callback(output);
		})
	}

	factory.show = function(callback){
		console.log($location.path);
		$http.get($location.path())
		.then(function(output){
			callback(output);
		})
	}

	return factory;
})