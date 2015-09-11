angular.module('app.services', ['firebase'])
.factory('boletasService',['$firebaseObject','$firebaseArray', function($firebaseObject, $firebaseArray){	
	var boletasService = {};
	var ref = new Firebase("https://emergencias.firebaseio.com");	

	boletasService.ListarBoletas = function(){		
		var boletaRef = ref.child('Boletas');
		return $firebaseArray(boletaRef);	
	};
	
	boletasService.UltimoConsecutivo = function(){	

		return new Promise(function(success, fail){

		var consecutivoRef = ref.child('Boletas/UltimoConsecutivo');
		
		obj.transaction(function(currentvalue) {
			  return (currentvalue || 0) + 1;			    			 
			}, function(error, committed, snapshot) {			  	
			  	if(committed) 
			  	{
			  		success(snapshot.val());
			  	}
			  	else if (error) {
			    	console.log('Transaction failed abnormally!', error);
			    	fail(error);
			  	}
			});	  
	    });	
	};

	return	boletasService;
}]);