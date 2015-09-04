var app = angular.module('app', ['ngRoute', 'firebase', 'app.controllers', 'app.services']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.

	when('/home', {
        templateUrl: 'views/home.html',
        controller: 'homeCtrl'
  	}).
	when('/agregarBoleta', {
        templateUrl: 'views/AgregarBoleta.html',
        controller: 'agregarBoletaCtrl'
    }).
  	otherwise({
    	redirectTo: '/home'
  	});
}]);

app.run(function($rootScope, $location, $anchorScroll, $routeParams) {
  $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
    $location.hash($routeParams.scrollTo);
    $anchorScroll();  
  });
})




  $(document).ready(function(){
      $('[data-toggle="tooltip"]').tooltip();   
  });

