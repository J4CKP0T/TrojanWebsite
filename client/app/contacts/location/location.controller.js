'use strict';

angular.module('trojanApp')
	.controller('LocationCtrl', [
		'$scope',
		'uiGmapGoogleMapApi',
		function($scope,uiGmapGoogleMapApi) {
			uiGmapGoogleMapApi.then(function(maps) {
				maps = null;
    	});

			$scope.location = {
				latitude: 45,
				longitude: -73
			};

			$scope.map = { center: $scope.location, zoom: 12 };
			$scope.marker = {
				id: 0,
      	coords: $scope.location,
	    };
		}]);