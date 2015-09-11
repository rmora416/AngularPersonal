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

when('/Fenomenos', {
        templateUrl: 'views/Opciones-FenomenoOcurrido.html',
        controller: 'fenomenoCtrl'
    }).


  	otherwise({
    	redirectTo: '/home'
  	});
}]);


app.directive('jqdatepicker', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
         link: function (scope, element, attrs, ngModelCtrl) {
            element.datepicker({
                dateFormat: 'dd/mm/yy',
                onSelect: function (date) {
                    scope.date = date;
                    scope.$apply();
                }
            });
        }
    };
});




  $(document).ready(function(){
      $('[data-toggle="tooltip"]').tooltip();   

      $('#datepicker1').datepicker({
          format: 'mm/dd/yyyy'          
        });
  });

