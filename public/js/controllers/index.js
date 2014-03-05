'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', 'Global','Employees', function ($scope, Global, Employees) {
    $scope.global = Global;
    
    //TODO: This part needs to come from Employees controller
    $scope.sortOrder = 'progress';
    
    $scope.find = function() {
        Employees.query(function(employees) {
            $scope.employees = employees;
        });
    };
}]);