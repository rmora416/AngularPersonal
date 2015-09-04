angular.module('app.services', [])
.factory('ProductsService', function(){
	var products = [
			{
				_id:1,
				_name: 'Coca Cola',
				_isSpecial:false
			},
			{
				_id:2,
				_name: 'Pepsi',
				_isSpecial:true
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