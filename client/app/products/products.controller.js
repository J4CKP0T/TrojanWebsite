'use strict';

angular.module('trojanApp')

	.controller('ProductsShowcaseCtrl', [
		'$scope','$location','TrojanProducts',
		function($scope,$location,TrojanProducts) {
			$scope.products = TrojanProducts.getProducts();
		
			$scope.showProduct = function(i) {
				$location.path('/products/' + i);
			};
		}])

	.controller('ProductCtrl', [
		'$scope','$location','$stateParams','TrojanProducts',
		function($scope,$location,$stateParams,TrojanProducts) {
			var id = $stateParams.productId;

			$scope.showProduct = function() {
				$scope.product = TrojanProducts.getProduct(id);		
				id = $scope.product.id;
			};
			$scope.showProduct();
		
			$scope.showPrevProduct = function() {
				$location.path('/products/'+ (id-1));
			};

			$scope.showNextProduct = function() {
				$location.path('/products/'+ (parseInt(id)+1));
			};
		}]);