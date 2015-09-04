angular.module('app.controllers', [])

.controller('homeCtrl', [ '$scope', 'boletasService', function($scope, boletasService) {	
	$scope.items = boletasService;
	console.log($scope.items);

	// a method to create new item; called by ng-submit
    $scope.addItem = function() {
      // calling $add on a synchronized array is like Array.push(),
      // except that it saves the changes to our database!
      $scope.items.$add({
        Entrevistado: $scope.Entrevistado_New,
        FechaVisita: $scope.FechaVisita_New,
        FenomenoOcurrido: $scope.FenomenoOcurrido_New
      });

      // reset the message input
      $scope.Entrevistado_New = "";
      $scope.FechaVisita_New = "";
      $scope.FenomenoOcurrido_New = "";
  };

}])

.controller('agregarBoletaCtrl', [ '$scope', 'ProductsService', function($scope, ProductsService) {
	$scope.products = ProductsService.list();

	$scope.save = function(){
		ProductsService.add($scope.newProduct._id, $scope.newProduct._name);
		alert(JSON.stringify($scope.products));
	};	
}]);