angular.module('app.services', ['firebase'])
.factory('fenomenosService', ['$firebaseObject','$firebaseArray', function($firebaseObject, $firebaseArray)
{
	var fenomenos = {};

	var ref = new Firebase("https://emergencias.firebaseio.com");	

	var list = function(){
		var boletaRef = ref.child('Opciones/FenomenoOcurrido');
		return $firebaseArray(boletaRef);	
	};

	return{		
		list: list
	};
}]);