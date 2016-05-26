'use strict';

describe('Controller: DoneCtrl', function () {

  // load the controller's module
  beforeEach(module('todoAppApp'));

  var AboutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DoneCtrl = $controller('DoneCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));
});
