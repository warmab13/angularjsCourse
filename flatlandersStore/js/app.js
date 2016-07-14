(function(){
	var app = angular.module('gemStore', []);

	app.controller('StoreController', function(){
		this.product = gem1;
	});

	var gem = {
		name: 'Dodecahedron',
		price: 2.95,
		description: 'Lorem ipsum dolor sit amet',
	}

	var gem1 = {
		name: 'Azurite',
		price: 2.95
	}
})();
