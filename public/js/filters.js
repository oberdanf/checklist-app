'use strict';

angular.module('mean.system').filter('notReadyEmployees', function() {
    return function(employee) {
        console.log(employee);
        console.log('AE CARALHO');
        return employee.progress < 100;
    };
});

angular.module('mean.system').filter('readyEmployees', function() {
    return function(employee) {
        return employee.progress ===  100;
    };
});