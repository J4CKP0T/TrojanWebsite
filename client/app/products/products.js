'use strict';

angular.module('trojanApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('products', {
        url: '/products',
        abstract: true,
        templateUrl: 'app/products/products.html'
      })
      .state('products.index', {
      	url: '',
      	views: {
      		'': {
      			templateUrl: 'app/products/products.index.html',
      			controller: 'ProductsShowcaseCtrl'
      		}
      	}
      })
      .state('products.show', {
      	url: '/{productId:[0-9]{1,2}}',
      	views: {
	      	'': {
	      		templateUrl: 'app/products/products.show.html',
	      		controller: 'ProductCtrl'		
	      	}
	      }
      	
      });
  });