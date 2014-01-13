'use strict'

checklistApp.controller('dashboardController', 
        function dashboardController($scope){

          $scope.newEmployees = [
            {
              name: 'Oberdan Bitencourt Ferreira',
              date: '12/01/2014',
              responsible: 'peoplecare@bravisoftware.com'
            },
            {
              name: 'Antonio José Resende de Campos',
              date: '12/01/2014',
              responsible: 'peoplecare@bravisoftware.com'            
            },
            {
              name: 'Ruann Magalhães Homem',
              date: '12/01/2014',
              responsible: 'peoplecare@bravisoftware.com'            
            }
          ];

        $scope.readyEmployees = [
          {
            name: 'Max Claus Nunes',
            date: '01/12/2013',
            responsible: 'peoplecare@bravisoftware.com'
          },
          {
            name: 'Rodrigo Bastos Vieira',
            date: '10/07/1931',
            responsible: 'peoplecare@bravisoftware.com'            
          }
        ];
      }
);