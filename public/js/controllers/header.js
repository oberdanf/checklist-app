'use strict';

angular.module('mean.system').controller('HeaderController', ['$scope', 'Global', '$location', function ($scope, Global, $location) {
    $scope.global = Global;

    $scope.menu = [{
        'title': 'Dashboard',
        'link': 'dashboard'
    }];

    $scope.goToRoute = function(url) {
        //Just hide the menu if it is really collapsed
        var elMenu = document.getElementById('collapsableMenuDiv');
        var isDisplayBlock = getComputedStyle(elMenu).display === 'block';

        if (isDisplayBlock && elMenu.classList.contains('in')) {
            $scope.isCollapsed = !$scope.isCollapsed;
        }

        //move to its path url
        $location.path(url);
    };

    $scope.isCollapsed = false;

}]);