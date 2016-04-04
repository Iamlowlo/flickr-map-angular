(function(){
	'use sctrict';
	angular
		.module('angularProject')
		.controller('IndexController', IndexController);
	function IndexController($scope, $route) {
		$scope.$on('$routeChangeStart',function(next, current){
			$scope.withHeader = current.$$route.withHeader;
			$scope.viewClass = current.$$route.viewClass;

			$scope.links = [];
			for (var routeId in $route.routes){
				if ('title' in $route.routes[routeId]){
					$scope.links.push({
						href: $route.routes[routeId].originalPath,
						title: $route.routes[routeId].title
					});
				}
			}
		})

	}
})();