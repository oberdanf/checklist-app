'use strict'

checklistApp.controller('dashboardController', 
        function dashboardController($scope){

          $scope.sortOrder = 'progress'
          $scope.newEmployees = [
            {
              progress: 66,
              name: 'Priscila Koeck Machado',
              date: '14/02/2014',
              responsible: 'peoplecare@bravisoftware.com'            
            },
            {
              progress: 10,
              name: 'Oberdan Bitencourt Ferreira',
              date: '12/01/2014',
              responsible: 'peoplecare@bravisoftware.com'
            },
            {
              progress: 20,
              name: 'Antonio José Resende de Campos',
              date: '12/01/2014',
              responsible: 'peoplecare@bravisoftware.com'            
            },
            {
              progress: 30,
              name: 'Ruann Magalhães Homem',
              date: '12/01/2014',
              responsible: 'peoplecare@bravisoftware.com'            
            }
          ];

        $scope.readyEmployees = [
          {
            progress: 100,
            name: 'Max Claus Nunes',
            date: '01/12/2013',
            responsible: 'peoplecare@bravisoftware.com'
          },
          {
            progress: 100,
            name: 'Rodrigo Bastos Vieira',
            date: '10/07/1931',
            responsible: 'peoplecare@bravisoftware.com'            
          }
        ];
      }
);