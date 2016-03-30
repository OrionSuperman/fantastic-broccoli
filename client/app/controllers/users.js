console.log('users.js');

poll_app.controller('UserController', function($scope, $location, UserFactory, CurrentFactory){

	$scope.addUser = function(){
		UserFactory.create($scope.new_user, function(data){
			
			CurrentFactory.setCurrentUser(data['data']);
			$scope.current_user = CurrentFactory.getCurrentUser();
			$location.path('/dashboard');
		});
	}
})