'use strict';

var checklistApp = angular.module('checklistApp', ['ngRoute']);

checklistApp.config(function($routeProvider, $locationProvider) {
  $routeProvider.
  when('/', {
    templateUrl: 'dashboard.html',
    controller: 'dashboardController'  
  }).
   otherwise({
        redirectTo: 'dashboard.html'
      });
});