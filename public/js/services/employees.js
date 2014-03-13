'use strict';

//Employees service used for employees REST endpoint
angular.module('mean.employees').factory('Employees', ['$resource', function($resource) {
    return $resource('employees/:employeeId', {
        employeeId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);

angular.module('mean.employees').factory('ReadyEmployees', ['$resource', function($resource) {
    return $resource('employees/ready');
}]);

angular.module('mean.employees').factory('NotReadyEmployees', ['$resource', function($resource) {
    return $resource('employees/notReady');
}]);