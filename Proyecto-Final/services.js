angular.module('app.services', [])
.factory('Products', function(){
	var products = [
			{
				_id:1,
				_name: 'Coca Cola'
			},
			{
				_id:2,
				_name: 'Pepsi'
			}
		];

		var add = function(id, name){
			products.push({_id: id, _name: name});
		};

		var list = function(){
			return products;
		};

		return{
			add:add,
			list: list
		};
});