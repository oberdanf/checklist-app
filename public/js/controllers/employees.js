'use strict';

angular.module('mean.employees')
    .controller('EmployeesController', ['$scope', '$stateParams', '$location', 'Global', 'Employees', function ($scope, $stateParams, $location, Global, Employees) {
    $scope.global = Global;

    $scope.create = function() {
        var employee = new Employees({
            progress: this.progress,
            name: this.name,
            date: this.date,
            responsible: this.responsible
        });
        employee.$save(function(response) {
            $location.path('employees/' + response._id);
        });

        this.progress = 0;
        this.name = '';
        this.date = '';
        this.responsible = '';
    };

    $scope.remove = function(employee) {
        if (employee) {
            employee.$remove();

            for (var i in $scope.employees) {
                if ($scope.employees[i] === employee) {
                    $scope.employees.splice(i, 1);
                }
            }
        }
        else {
            $scope.employee.$remove();
            $location.path('employees');
        }
    };

    $scope.update = function() {
        var employee = $scope.employee;
        if (!employee.updated) {
            employee.updated = [];
        }
        employee.updated.push(new Date().getTime());

        employee.$update(function() {
            $location.path('employees/' + employee._id);
        });
    };

    $scope.find = function() {
        Employees.query(function(employees) {
            $scope.employees = employees;
        });
    };

    $scope.findOne = function() {
        Employees.get({
            employeeId: $stateParams.employeeId
        }, function(employee) {
            $scope.employee = employee;
        });
    };
}]);