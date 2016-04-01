console.log("partialRoutes.js");

var game_app = angular.module('game_app', ['ngRoute']);

game_app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: '/static/partials/login.html'
	})
	.when('/game/:id', {
		templateUrl: '/static/partials/game.html'
	})
	.when('/create', {
		templateUrl: '/static/partials/create.html'
	})
	.when('/user/:id', {
		templateUrl: '/static/partials/user.html'
	})
	.when('/userlist', {
		templateUrl: '/static/partials/userlist.html'
	})
	.otherwise({
		redirectTo: '/'
	});
})