'use strict';

describe('Controller: LocationCtrl', function () {

  // load the controller's module
  beforeEach(module('trojanApp'));

  var LocationCtrl,
      scope,
      $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/things')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

    scope = $rootScope.$new();
    LocationCtrl = $controller('LocationCtrl', {
      $scope: scope
    });
  }));

  it('should have a location', function () {
    // $httpBackend.flush();
    expect(scope.location).not.toBeNull();
  });

});
