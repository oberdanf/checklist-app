'use strict';

angular.module('mean.checklists')
    .controller('ChecklistsController', ['$scope', '$stateParams', '$location', 'Global', function ($scope, $stateParams, $location, Global) {
    $scope.global = Global;
}]);