'use strict';

angular.module('trojanApp')
	.factory('TrojanProducts', function() {
			var products = [
				{
					id: 0,
					name: 'Diesel Injection Cleaner',
					description: '...',
					filename: '/assets/images/diesel_injection_cleaner.png'
				},
				{
					id: 1,
					name: 'Penetrating Oil',
					description: '...',
					filename: '/assets/images/penetrating_oil.png'
				},
				{
					id: 2,
					name: 'Super Engine Conditioner',
					description: '...',
					filename: '/assets/images/super_engine_conditioner.png'
				},
				{
					id: 3,
					name: 'Waterbased Carbon Cleaner',
					description: '...',
					filename: '/assets/images/waterbased_carbon_cleaner.png'
				}];

			var factory = {};

			factory.getProducts = function() {
				return products;
			};

			factory.getProduct = function(index) {
				if (index < 0) {
					return products[products.length-1];
				}

				if (index >= products.length) {
					return products[0];
				} 

				return products[index];
			};

			factory.numProducts = function() {
				return products.length;
			};

			return factory;
	});