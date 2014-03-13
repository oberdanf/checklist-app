'use strict';

angular.module('mean.system').controller('IndexController',
	['$scope', 'Global','ReadyEmployees', 'NotReadyEmployees',
	function ($scope, Global, ReadyEmployees, NotReadyEmployees) {
    $scope.global = Global;
    
    //TODO: This part needs to come from Employees controller
    $scope.sortOrder = 'progress';

    //It will execute automatically
    (function findEmployees() {

        ReadyEmployees.query(function(employees) {
            $scope.readyEmployees = employees;
        });

        NotReadyEmployees.query(function(employees) {
            $scope.notReadyEmployees = employees;
        });
    })();
}]);