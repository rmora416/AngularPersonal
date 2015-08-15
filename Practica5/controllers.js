angular.module('jsoop.controllers', [])

.controller('HomeController', function($scope) {
	var hello = function(message){
			console.log('Hello ' + message);
		};

	$scope.model = {
		
		name:'Fulano',
		phone:87876156,
		active:true,
		say: hello,

		print: function(message){
			console.log('Hola mundo ' + message);
		}

	};

})

.controller('AboutController', [ '$scope', function($scope) {
	

}]);