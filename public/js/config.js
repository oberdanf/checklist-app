'use strict';

//Setting up route
angular.module('mean').config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    // For unmatched routes:
    $urlRouterProvider.otherwise('/');

    // states for my app
    $stateProvider
      .state('all articles', {
        url: '/articles',
        templateUrl: 'views/articles/list.html'
    })
      .state('create article', {
        url: '/articles/create',
        templateUrl: 'views/articles/create.html'
    })
      .state('edit article', {
        url: '/articles/:articleId/edit',
        templateUrl: 'views/articles/edit.html'
    })
      .state('article by id', {
        url: '/articles/:articleId',
        templateUrl: 'views/articles/view.html'
    })
      /* Employees */
      .state('all employees', {
        url: '/employees',
        // templateUrl: 'views/employees/list.html'
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
      /* Workflow */
      .state('edit workflow', {
        url: '/workflow/edit',
        // templateUrl: 'views/employees/list.html'
        templateUrl: 'workflow/edit.html'
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