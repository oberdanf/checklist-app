'use strict'

checklistApp.controller('editEmployeeController', 
        function editEmployeeController($scope){

          $scope.employeeName = "Ruann Magalhães Homem"

          $scope.employeeProgress = 30

          $scope.tasks = [
            {
              text: 'Create Tribal e-mail'
            },
            {
              text: 'Check computer login'
            },
            {
              text: 'Require Bravi\'s door password'
            },
            {
              text: 'Install default programs'
            }
          ];        
      }
);