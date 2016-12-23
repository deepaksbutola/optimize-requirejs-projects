/*jshint unused: vars */
require.config({
  paths: {
    'jquery':'js/jquery',
	angular: 'js/angular',
    'angular-animate': 'js/angular-animate'
  },
  shim: {
    'angular-animate': [
      'angular'
    ]
  },
  waitSeconds : 0,
  priority: [
    'angular'
  ],
  packages: [

  ]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';

require([
  'jquery',
  'angular',
  'angular-animate'
], function($,bootstrap,slick,angular,angularslick,app,angularBootstrap) {
  'use strict';
  /* jshint ignore:start */
  var $html = angular.element(document.getElementsByTagName('html')[0]);
  /* jshint ignore:end */
  angular.element().ready(function() {
    angular.resumeBootstrap([app.name]);
  });
});