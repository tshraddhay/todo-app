'use strict';

/**
 * @ngdoc function
 * @name todoAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoAppApp
 */
angular.module('todoAppApp')
  .controller('MainCtrl', function ($scope, $rootScope) {
    
    $scope.addTodo = function () {
    	if ($scope.newTodo && $scope.newTodo !== '') {
	    	var newItem = {
	    		name : $scope.newTodo,
	    		complete: false
	    	};
	    	$rootScope.todoList.push(newItem);
	    	$scope.newTodo = '';
    	}
    };

    $scope.markComplete = function (selectedTodo) {
    	selectedTodo.complete = true;
    };
  });
