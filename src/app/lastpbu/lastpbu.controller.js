(function(){
	'use strict';

	angular
		.module('angularProject')
		.controller('pbuController',['$scope','flickrAPIService', PbuController]);

	function PbuController($scope, flickrAPIService){
		$scope.userPicsVeil=false;
		$scope.searchUser = function(){
			$scope.userPicsVeil=true;
			flickrAPIService.getUser($scope.searchName)
				.success(function(getUserData){
					$scope.userPicsVeil=false;
					if (getUserData.stat == 'ok'){
						delete $scope.errorMessage;
						console.log(getUserData.user);
						$scope.userName = getUserData.user.username._content;
						flickrAPIService.getPublicUserPhotos(getUserData.user.id, 30)
							.success(function(getPublicUserPhotosData){
								console.log(getPublicUserPhotosData.photos);
								$scope.userPhotos = getPublicUserPhotosData.photos.photo;
							});
					}else{
						delete $scope.userName;
						$scope.errorMessage = data.message;
					}
				});
		};
	};
})();