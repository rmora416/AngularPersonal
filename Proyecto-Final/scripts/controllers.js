angular.module('app.controllers', [])

.controller('homeCtrl', [ '$scope', 'boletasService', function($scope, boletasService) {	
	    
      $scope.items =boletasService.ListarBoletas();              

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

.controller('fenomenoCtrl', ['$scope', 'fenomenosService', function($scope, fenomenosService) {
  $scope.Lista = {};
  
  $scope.load = function(){
    var promise = fenomenosService.list()
    promise.then(function(fenomenos){
      $scope.Lista = fenomenos;
      $scope.$apply();
    }, function(error){
      console.error(error);
    });
  };

  $scope.agregar = function(){
    //$scope.Lista.$add({Nombre : $scope.NuevoItem});
  };
}])

.controller('agregarBoletaCtrl', [ '$scope', 'boletasService', function($scope, boletasService) {

    var init = function(){

    };

    //Genera un nuevo consecutivo para se utilizado como identificacdor de una nueva boleta
    $scope.generarID = function() {
        var promise = boletasService.UltimoConsecutivo()
        promise.then(function(consecutivo){
          $scope.NumeroBoleta = "SAE-" + consecutivo;
        }, function(error){
          console.error(error);
        });
    };  	

  	$scope.save = function(){
  		boletasService.add($scope.newProduct._id, $scope.newProduct._name);
  		alert(JSON.stringify($scope.products));
  	};	


    init();

}]);