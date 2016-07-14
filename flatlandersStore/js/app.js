(function(){
	var app = angular.module('gemStore', []);

	app.controller('StoreController', function(){
		this.product = gem1;
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

	var gem1 = {
		name: 'Azurite',
		price: 110.50,
		canPurchase: false,
		soldOut: true
	};

})();
