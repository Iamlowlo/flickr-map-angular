(function(){
	'use strict';

	angular
		.module('angularProject')
		.controller('pbuController',['$scope','flickrAPIService', PbuController]);

	function PbuController($scope, flickrAPIService){

		flickrAPIService.getUser($scope.searchName)
			.success(function(data){
				if (data.stat == 'ok'){
					$scope.userName = data.user.username._content;
				}else{
					$scope.errorMessage = data.message;
				}
			})
	};
})();