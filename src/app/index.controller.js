(function(){
	'use sctrict';
	angular
		.module('angularProject')
		.controller('IndexController', IndexController);
	function IndexController($scope, $route) {
		$scope.$on('$routeChangeStart',function(next, current){
			$scope.withHeader = current.$$route.withHeader;
			$scope.viewClass = current.$$route.viewClass;
			$scope.active = {href:current.$$route.originalPath};
			$scope.links = [];
			for (var routeId in $route.routes){
				if ('mainLink' in $route.routes[routeId]){
					var newLink = linkMaker($route.routes[routeId]);
					if ('subnav' in $route.routes[routeId]){
						newLink.subnav = [];
						$route.routes[routeId].subnav.forEach(function(subNavItem){
							var newSubLink = linkMaker($route.routes[subNavItem]);
							newLink.subnav.push(newSubLink);
						});
					}
					$scope.links.push(newLink);
				}
			}
		});

		function linkMaker(rawRoute){
			var link = {
										title : rawRoute.title,
										originalPath : rawRoute.originalPath
									};
			return link;
		}
	}
})();