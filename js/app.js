(function() {
	'use strict';
	
	angular
		.module('cotas', [ 'ngRoute', 'firebase' ])
		.config(config);
		
	function config($routeProvider) {
	  $routeProvider
		.when('/', {
		  controller:'ListCtrl',
		  controllerAs: 'list',
		  templateUrl:'list.html'
		})
		.when('/edit/:id', {
		  controller:'EditCtrl',
		  controllerAs: 'edit',
		  templateUrl:'edit.html'
		})
		.when('/new', {
		  controller:'CreateCtrl',
		  controllerAs: 'create',
		  templateUrl:'create.html'
		})
		.otherwise({
		  redirectTo:'/'
		});
	}	
})();