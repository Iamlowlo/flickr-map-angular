(function() {
	'use strict';

	angular
		.module('angularProject')
		.controller('MainController', MainController);

	/** @ngInject */
	function MainController($rootScope) {
		var controller = this;
		$rootScope.withHeader = false;
		$rootScope.viewClass = 'mainView';
	}
})();
