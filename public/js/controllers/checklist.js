'use strict';

angular.module('mean.checklists')
    .controller('ChecklistsController', ['$scope', '$stateParams', '$location', 'Global', 'Employees', 'Checklists', function ($scope, $stateParams, $location, Global, Employees, Checklists) {
    $scope.global = Global;

    /* These two were added just to pass on JSLint validation. Remove after! */
    $scope.employees = Employees;
    $scope.checklists = Checklists;

    //TODO: Needs implementing
}]);