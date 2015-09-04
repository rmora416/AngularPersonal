angular.module('app.services', ['firebase'])
.factory('boletasService',['$firebaseArray', function($firebaseArray){	
	var ref = new Firebase("https://emergencias.firebaseio.com/Boletas");	
	return $firebaseArray(ref);	
}]);