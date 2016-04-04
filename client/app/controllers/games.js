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

			console.log(data.data);
			
			$window.location.href = '#/game/' + data.data._id;
			$scope.game = data.data;
			$scope.current_user = CurrentFactory.getCurrentUser();
		})
	}

	// $scope.deletePoll = function(id){

	// 	PollFactory.delete(id, function(data){
	// 		setPolls();
	// 	})
	// }

	$scope.chooseOption = function(answer){
		var info = {user: $scope.current_user, answer: answer, game: $scope.game}
		console.log("CHOOSOPITION");
		GameFactory.update(info, function(data){
			console.log("CHOOSOPITION2222222");
			$window.location.href = '#/user/' + $scope.current_user._id;
			$scope.current_user = CurrentFactory.getCurrentUser();
		})
	}

	$scope.logout = function(){
		CurrentFactory.logout();
		$scope.current_user = {};
		$window.location.href = '#/';
	}

	var path = $location.path();
	if(path.substring(0,6) == '/game/'){
		// $scope.game._id = path.substring(7,path.length);
		GameFactory.show(function(data){
			$scope.game = data.data;
			$scope.current_user = CurrentFactory.getCurrentUser();
		})
	} 


	if(path.substring(0,6) == '/user/'){
		// $scope.game._id = path.substring(7,path.length);
		UserFactory.show(path, function(output){
			$scope.user = output.data;
			$scope.gameTable = [[],
			 [0, 30, -10, 10],
			 [0, -10, 20, -20],
			 [0, -10, 20, -30]
			];
		})
	} 
})