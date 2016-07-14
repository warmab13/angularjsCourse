(function(){
	var app = angular.module('gemStore', []);

	app.controller('StoreController', function(){
		this.product = gem;
	});

	var gem = {
		name: 'Dodecahedron',
		price: 2.95,
		description: 'Lorem ipsum dolor sit amet',
		canPurchase: true,
		soldOut: true,
	}

	var gem1 = {
		name: 'Azurite',
		price: 2.95
	}
})();
