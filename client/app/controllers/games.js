console.log('games.js');

game_app.controller('GameController', function($scope, $location, $window, GameFactory, UserFactory, CurrentFactory){
	$scope.current_user = CurrentFactory.getCurrentUser();

	// var setPolls = function(){
	// 	PollFactory.index(function(data){
	// 		$scope.polls = data['data'];
	// 		$scope.current_user = CurrentFactory.getCurrentUser();
	// 	})
	// }

	$scope.newGame = function(){
		
		GameFactory.create($scope.current_user, function(data){
			
			$window.location.href = '#/game/' + data.data._id;
			$scope.game = data.data;

		})
	}

	// $scope.deletePoll = function(id){

	// 	PollFactory.delete(id, function(data){
	// 		setPolls();
	// 	})
	// }

	$scope.chooseOption = function(answer){
		var info = {user: $scope.current_user, answer: answer}
		GameFactory.update(info, function(data){
			$window.location.href = '#/user/' + current_user._id;
		})
	}

	$scope.logout = function(){
		CurrentFactory.logout();
		$scope.current_user = {};
		$window.location.href = '#/';
	}

	var path = $location.path();
	if(path.substring(0,6) == '/game/'){
		$scope.game._id = path.substring(7,path.length);
	} 
})