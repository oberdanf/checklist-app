'use strict'

var mongoose = require('mongoose'),
    Employee = mongoose.model('Employee')

checklistApp.controller('addEmployeeController', 
        function addEmployeeController($scope){
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