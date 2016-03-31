console.log('poll.js');

poll_app.factory('PollFactory', function($http, $location){
	var factory = {};
	var polls = [];

	factory.index = function(callback) {
		$http.get('/polls')
		.then(function(output){
			polls = output;
			callback(polls);
		})
	}

	factory.create = function(info, callback){
		$http.post('/polls', info)
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