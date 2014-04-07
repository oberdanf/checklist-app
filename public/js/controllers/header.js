'use strict';

angular.module('mean.system').controller('HeaderController', ['$scope', 'Global', '$location', function ($scope, Global, $location) {
    $scope.global = Global;

    $scope.menu = [{
        'title': 'Dashboard',
        'link': 'dashboard'
    }];

    $scope.goToRoute = function(url) {
        $location.path(url);
    };

    $scope.isCollapsed = false;

}]);