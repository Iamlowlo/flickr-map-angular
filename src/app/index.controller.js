(function(){
	'use sctrict';
	angular
		.module('angularProject')
		.controller('IndexController', IndexController);
	function IndexController($scope) {
		$scope.$on('$routeChangeStart',function(next, current){
			$scope.withHeader = current.$$route.withHeader;
			$scope.viewClass = current.$$route.viewClass;
		})

	}
})();