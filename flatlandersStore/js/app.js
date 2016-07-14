(function(){
	var app = angular.module('gemStore', []);

	app.controller('StoreController', function(){
		this.products = gems1;
	});

	var gems = [
		{
			name: 'Dodecahedron',
			price: 2.95,
			description: 'Lorem ipsum dolor sit amet',
			canPurchase: true,
			soldOut: true,
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet',
			canPurchase: true,
		}

	];

	var gems1 = [
		{ name: 'Azurite', price: 2.95 },
    	{ name: 'Bloodstone', price: 5.95 },
    	{ name: 'Zircon', price: 3.95 }
	];

})();
