console.log('polls.js');

poll_app.controller('PollController', function($scope, $location, $window, PollFactory, UserFactory, CurrentFactory){
	$scope.current_user = CurrentFactory.getCurrentUser();

	var setPolls = function(){
		PollFactory.index(function(data){
			$scope.polls = data['data'];
			$scope.current_user = CurrentFactory.getCurrentUser();
		})
	}

	$scope.addPoll = function(){
		console.log($scope.new_poll.answers);
		$scope.new_poll._user = $scope.current_user._id;
		PollFactory.create($scope.new_poll, function(data){
			setPolls();
			$window.location.href = '#/dashboard';

		})
	}

	$scope.deletePoll = function(id){

		PollFactory.delete(id, function(data){
			setPolls();
		})
	}

	$scope.vote = function(poll, answer){
		var info = {poll: poll, answer: answer}
		PollFactory.update(info, function(data){
			PollFactory.show(function(data){
				$scope.poll = data['data'];
			})
		})
	}

	$scope.logout = function(){
		CurrentFactory.logout();
		$scope.current_user = {};
		$window.location.href = '#/';
	}

	var path = $location.path();
	if(path.substring(0,6) == '/poll/'){
		PollFactory.show(function(data){
			$scope.poll = data['data'];
		})
	} else {
		setPolls();
	}
})