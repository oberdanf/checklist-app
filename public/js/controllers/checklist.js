'use strict';

angular.module('mean.workflows')
    .controller('ChecklistsController', ['$scope', '$stateParams', '$location', 'Global', 'Employees', 'Checklists', function ($scope, $stateParams, $location, Global, Employees, Workflows) {
    $scope.global = Global;

    /* These two were added just to pass on JSLint validation. Remove after! */
    $scope.employees = Employees;
    $scope.workflows = Workflows;

    //TODO: Needs implementing
}]);