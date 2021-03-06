console.log('users.js');

game_app.controller('UserController', function($scope, $location, UserFactory, CurrentFactory){

	var gameTable = [[],
			 [0, 30, -10, 10],
			 [0, -10, 20, -20],
			 [0, -10, 20, -30]
			];

	$scope.addUser = function(){
		UserFactory.create($scope.new_user, function(data){
			
			$location.path('/user/'+ data.data._id);
			CurrentFactory.setCurrentUser(data['data']);
			$scope.current_user = CurrentFactory.getCurrentUser();
		});
	}

	$scope.index = function(){

		UserFactory.index(function(data){
			$scope.users = data.data;
		})
	}
})