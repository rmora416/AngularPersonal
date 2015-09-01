angular.module('app', ['ngRoute', 'app.controllers', 'app.services'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.

	when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
  	}).
	when('/AgregarBoleta', {
        templateUrl: 'views/AgregarBoleta.html',
        controller: 'AgregarBoletaController'
    }).
  	otherwise({
    	redirectTo: '/'
  	});
}]);