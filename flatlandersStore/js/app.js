(function(){
	var app = angular.module('gemStore', []);

	app.controller('StoreController', function(){
		this.product = gems2;
	});

	var gems = [
		{
			name: 'Dodecahedron',
			price: 2.95,
			description: 'Lorem ipsum dolor sit amet',
			images:[
				{
					full:'gem-01.gif',
					thumb:'gem-02.gif'
				}
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			images:[
				{
					full:'gem-03.gif',
					thumb:'gem-04.gif'
				}
			]
		}

	];

	var gems1 = [
		{ name: 'Azurite', price: 2.95 },
    	{ name: 'Bloodstone', price: 5.95 },
    	{ name: 'Zircon', price: 3.95 }
	];

	var gems2 = { name: 'Azurite', price: 2.95 };

})();
