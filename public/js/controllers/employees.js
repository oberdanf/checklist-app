'use strict';

angular.module('mean.employees')
    .controller('EmployeesController',
        ['$scope', '$stateParams', '$location', 'Global', 'Employees', 'ReadyEmployees', 'NotReadyEmployees',
        function ($scope, $stateParams, $location, Global, Employees, ReadyEmployees, NotReadyEmployees) {
    
    $scope.global = Global;
    $scope.sortOrder = 'progress';

    $scope.create = function() {
        var employee = new Employees({
            progress: this.progress,
            name: this.name,
            date: this.date,
            responsible: this.responsible
        });
        employee.$save(function(response) {
            $location.path('employees/' + response._id + '/edit');
        });
    };

    $scope.remove = function(employee) {
        if (employee) {
            employee.$delete();
        }
        else {
            $scope.employee.$delete();
            $location.path('employees');
        }
    };

    $scope.update = function() {
        var employee = $scope.employee;

        employee.$update(function() {
            if ($location.path().indexOf('checklist') !== -1) {
                $location.path('checklist/' + employee._id);
            } else{
                $location.path('employees/' + employee._id + '/edit');
            }
        });
    };

    /*$scope.find = function() {
        Employees.query(function(employees) {
            $scope.employees = employees;
        });
    };*/

    $scope.findOne = function() {
        Employees.get({
            employeeId: $stateParams.employeeId
        }, function(employee) {
            $scope.employee = employee;
        });
    };

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