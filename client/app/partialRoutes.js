console.log("partialRoutes.js");

var poll_app = angular.module('poll_app', ['ngRoute']);

poll_app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: '/static/partials/login.html'
	})
	.when('/dashboard', {
		templateUrl: '/static/partials/dashboard.html'
	})
	.when('/create', {
		templateUrl: '/static/partials/create.html'
	})
	.when('/poll/:id', {
		templateUrl: '/static/partials/poll.html'
	})
	.otherwise({
		redirectTo: '/'
	});
})