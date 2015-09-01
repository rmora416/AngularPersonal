angular.module('app.controllers', [])

.controller('HomeController', [ '$scope', function($scope) {
	$scope.name = 'Randall';

	var reload = function(){
		$scope.name = '';
	};

	$scope.reload = reload;

}])

.controller('AgregarBoletaController', [ '$scope', 'Products', function($scope, Products) {
	$scope.products = Products.list();

	$scope.save = function(){
		Products.add($scope.newProduct._id, $scope.newProduct._name);
	};
}]);