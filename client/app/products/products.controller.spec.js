'use strict';

describe('Controller: ProductCtrl', function () {

  // load the controller's module
  beforeEach(module('trojanApp'));

  var ProductCtrl,
      ProductsShowcaseCtrl,
      scope1,
      scope2,
      $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/things')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

    scope1 = $rootScope.$new();
    ProductsShowcaseCtrl = $controller('ProductsShowcaseCtrl', {
      $scope: scope1
    });

    scope2 = $rootScope.$new();
    ProductCtrl = $controller('ProductCtrl', {
      $scope: scope2
    });
  }));
});
