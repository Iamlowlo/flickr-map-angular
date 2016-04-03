(function() {
	'use strict';

	angular
		.module('angularProject')
		.controller('DashboardController',DashboardController);

	/** @ngInject */
	function DashboardController($scope, AvailableOptionsFactory, $rootScope){
		$scope.availableOptions = AvailableOptionsFactory;
	}
})();