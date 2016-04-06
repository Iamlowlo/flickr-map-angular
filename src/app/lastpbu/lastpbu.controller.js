(function(){
	'use strict';

	angular
		.module('angularProject')
		.controller('pbuController',['$scope','flickrAPIService', PbuController]);

	function PbuController($scope, flickrAPIService){

		flickrAPIService.getUser('The_Pretender').success(function(data){
			$scope.userName = data.user.username._content;
		})
	};
})();