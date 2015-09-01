angular.module('callbacks', ['ngRoute', 'firebase', 'callbacks.controllers', 'callbacks.services'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.

	when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
  	}).
	when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutController'
    }).

  when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UsersController'
    }).

  	otherwise({
    	redirectTo: '/'
  	});
}]);