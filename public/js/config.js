'use strict';

//Setting up route
angular.module('mean').config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    // For unmatched routes:
    $urlRouterProvider.otherwise('/');

    // states for my app
    $stateProvider
      /* Employees */
      .state('all employees', {
        url: '/employees',
        templateUrl: 'views/index.html'
    })
      .state('create employee', {
        url: '/employees/create',
        templateUrl: 'views/employees/create.html'
    })
      .state('edit employee', {
        url: '/employees/:employeeId/edit',
        templateUrl: 'views/employees/edit.html'
    })
      .state('employee by id', {
        url: '/employees/:employeeId',
        templateUrl: 'views/employees/view.html'
    })
      .state('delete employee', {
        url: '/employees/:employeeId/delete',
        templateUrl: 'views/index.html'
    })
      /* Checklist */
      .state('edit checklist', {
        url: '/checklist/:employeeId',
        templateUrl: 'views/checklist/edit.html'
    })
      .state('home', {
        url: '/',
        templateUrl: 'views/index.html'
    });
}
]);

//Setting HTML5 Location Mode
angular.module('mean').config(['$locationProvider',
  function($locationProvider) {
    $locationProvider.hashPrefix('!');
}
]);