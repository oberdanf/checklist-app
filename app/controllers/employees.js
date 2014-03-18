'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Employee = mongoose.model('Employee'),
    _ = require('lodash');


/**
 * Find employee by id
 */
exports.employee = function(req, res, next, id) {
    Employee.load(id, function(err, employee) {
        if (err) return next(err);
        if (!employee) return next(new Error('Failed to load employee ' + id));
        req.employee = employee;
        next();
    });
};

/**
 * Create an employee
 */
exports.create = function(req, res) {
    var employee = new Employee(req.body);
    employee.checklist = {
        name: 'EBS Induction Process',
        progress: 0,
        steps: [
            {
                name: 'Step name 1',
                description: 'Step description 1',
                isCompleted: false
            },
            {
                name: 'Step name 2',
                description: 'Step description 2',
                isCompleted: false
            },
            {
                name: 'Step name 3',
                description: 'Step description 3',
                isCompleted: false
            },
            {
                name: 'Step name 4',
                description: 'Step description 4',
                isCompleted: false
            }
        ]
    };
    
    employee.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                employee: employee
            });
        } else {
            res.jsonp(employee);
        }
    });
};

/**
 * Update an employee
 */
exports.update = function(req, res) {
    var employee = req.employee;
    employee = _.extend(employee, req.body);

    employee.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                employee: employee
            });
        } else {
            res.jsonp(employee);
        }
    });
};

/**
 * Delete an employee
 */
exports.destroy = function(req, res) {
    var employee = req.employee;

    employee.remove(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                employee: employee
            });
        } else {
            res.jsonp(employee);
        }
    });
};

/**
 * Show an employee
 */
exports.show = function(req, res) {
    res.jsonp(req.employee);
};

/**
 * List of Employees
 */
exports.all = function(req, res) {
    Employee.find().sort('-created').exec(function(err, employees) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(employees);
        }
    });
};

/**
 * List of Employees
 */
exports.notReadyEmployees = function(req, res) {
    Employee.find().where('progress').lt(100).sort('-progress').exec(function(err, employees) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(employees);
        }
    });
};

exports.readyEmployees = function(req, res) {
    Employee.find({ progress: 100 }).sort('-date').exec(function(err, employees) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(employees);
        }
    });
};
