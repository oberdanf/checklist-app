'use strict';

angular.module('mean.employees')
    .controller('EmployeesController',
        ['$scope', '$stateParams', '$location', 'toaster', 'Global', 'Employees', 'ReadyEmployees', 'NotReadyEmployees',
        function ($scope, $stateParams, $location, toaster, Global, Employees, ReadyEmployees, NotReadyEmployees) {
    
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
            toaster.pop('success', '', 'Employee successfully created');
            $location.path('employees/' + response._id + '/edit');
        });
    };

    $scope.remove = function(employee) {
        if (employee) {
            Employees.delete({}, employee);
            // employee.$delete();
        }
        else {
            $scope.employee.$delete();
            toaster.pop('success', '', 'Employee successfully deleted');
            $location.path('employees');
        }
    };

    $scope.update = function() {
        var employee = $scope.employee;

        employee.$update(function() {
            if ($location.path().indexOf('checklist') !== -1) {
                toaster.pop('success', '', 'Checklist successfully updated');
                $location.path('checklist/' + employee._id);
            } else {
                toaster.pop('success', '', 'Employee successfully updated');
                $location.path('employees/' + employee._id + '/edit');
            }
        });
    };

    $scope.findOne = function() {
        Employees.get({
            employeeId: $stateParams.employeeId
        }, function(employee) {
            $scope.employee = employee;
        });
    };

    //It will execute automatically
    (function findEmployees() {

        ReadyEmployees.query(function success (employees) {
            $scope.readyEmployees = employees;
        }, function error (err) {
            toaster.pop('error', '', err.data);
        });

        NotReadyEmployees.query(function success (employees) {
            $scope.notReadyEmployees = employees;
        }, function error (err) {
            toaster.pop('error', '', err.data);
        });
    })();

}]);