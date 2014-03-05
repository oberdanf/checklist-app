'use strict';

var checklistApp = angular.module('checklistApp', ['ngRoute']);

checklistApp.config(function($routeProvider, $locationProvider) {
  $routeProvider.
  when('/', {
    templateUrl: 'dashboard.html',
    controller: 'dashboardController'  
  }).
  when('/edit', {
    templateUrl: 'edit.html',
    controller: 'editEmployeeController'  
  }).
  when('/add', {
    templateUrl: 'addEmployee.html',
    controller: 'addEmployeeController'  
  }).
  otherwise({
    redirectTo: 'dashboard.html'
  });
   // $locationProvider.html5Mode(true);
});