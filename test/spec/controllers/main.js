'use strict';

describe('Controller: MainCtrl', function () {

  beforeEach(module('todoAppApp'));

  var MainCtrl,
    scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of items to the root scope', function () {
    expect(MainCtrl.todoList.length).toBe(3);
  });
});
