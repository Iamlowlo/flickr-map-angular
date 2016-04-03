(function() {
	'use strict';

	angular
		.module('angularProject')
		.controller('DashboardController',DashboardController);

	/** @ngInject */
	function DashboardController($rootScope){
		$rootScope.withHeader=true;
		$rootScope.viewClass='dashboard';
	}
})();