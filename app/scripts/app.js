'use strict';

/**
 * @ngdoc overview
 * @name todoAppApp
 * @description
 * # todoAppApp
 *
 * Main module of the application.
 */
angular
  .module('todoAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/done', {
        templateUrl: 'views/done.html',
        controller: 'DoneCtrl',
        controllerAs: 'done'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function($rootScope){
    $rootScope.todoList = [
      {'name': 'item 1', 'complete': false},
      {'name': 'item 2', 'complete': false},
      {'name': 'item 3', 'complete': false}
    ];
  });
