'use strict';

angular.module('trojanApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [
    {
      'title': 'Home',
      'link': '/'
    },
    // {
    //   'title': 'Info',
    //   'link': '/info'
    // },
    {
      'title': 'Products',
      'link': '/products'
    },
    {
      'title': 'Contacts',
      'link': '/contacts'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };

    $scope.isSubDirectory = function(route) {
      return route === $location.path().split('/',2).join('/');
    };

    $scope.isChildrenDirectory = function(route) {
      var parts = $location.path().split('/');
      if (parts.length !== 3) {return false;}
      return $scope.isSubDirectory(route);
    };
  });