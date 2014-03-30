'use strict';

// Employees routes use employees controller
var employees = require('../controllers/employees');
var authorization = require('./middlewares/authorization');

// Employees authorization helpers
/*var hasAuthorization = function(req, res, next) {
	if (req.employee.user.id !== req.user.id) {
        return res.send(401, 'User is not authorized');
    }
    next();
};*/

module.exports = function(app) {

    app.get('/employees', authorization.requiresLogin, employees.all);
    app.get('/employees/notready', authorization.requiresLogin, employees.notReadyEmployees);
    app.get('/employees/ready', authorization.requiresLogin, employees.readyEmployees);
    app.post('/employees', authorization.requiresLogin, employees.create);
    app.get('/employees/:employeeId', authorization.requiresLogin, employees.show);
    app.put('/employees/:employeeId', authorization.requiresLogin, employees.update);
    app.del('/employees/:employeeId', authorization.requiresLogin, employees.destroy);

    //Checklist routes
    //TODO: Move this to a proper route when a user can have more than one checklist
    app.get('/checklist/:employeeId', authorization.requiresLogin, employees.show);
    app.post('/checklist/:employeeId', authorization.requiresLogin, employees.update);

    // Finish with setting up the employeeId param
    app.param('employeeId', employees.employee);

};