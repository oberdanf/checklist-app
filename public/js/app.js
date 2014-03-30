'use strict';

angular.module('mean', ['ngCookies', 'ngResource', 'ui.bootstrap', 'ui.router', 'toaster', 'ngAnimate', 'mean.system', 'mean.articles', 'mean.employees']);

angular.module('mean.system', []);
angular.module('mean.articles', []);
angular.module('mean.employees', []);
angular.module('mean.checklists', []);