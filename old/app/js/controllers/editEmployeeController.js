'use strict'

var mongoose = require('mongoose'),
    Employee = mongoose.model('Employee')

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

exports.create = function onEmployeeCreate(req, res) {
  var employee = new Employee(req.body);
  employee.save(function onEmployeeSaved(err) {
    if (err) {
      return res.send('/', {
        errors: err.errors,
        employee: employee
      });
    } else {
      res.jsonp(employee);
    }
  });
};