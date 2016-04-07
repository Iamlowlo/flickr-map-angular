(function(){
	'use strict';

	angular
		.module('angularProject')
		.controller('pbuController',['$scope','flickrAPIService', PbuController]);

	function PbuController($scope, flickrAPIService){
		$scope.userPicsVeil=false;
		
		$scope.searchName = 'The_Pretender';

		$scope.searchUser = function(){
			$scope.userPicsVeil=true;
			flickrAPIService.getUser($scope.searchName)
				.success(function(getUserData){
					$scope.userPicsVeil=false;
					if (getUserData.stat == 'ok'){
						delete $scope.errorMessage;
						console.log(getUserData.user);
						$scope.userName = getUserData.user.username._content;
						flickrAPIService.getUserPublicPhotos(getUserData.user.id, 1)
							.success(function(getUserPublicPhotosData){
								console.log(getUserPublicPhotosData.photos);
								$scope.userPhotos = getUserPublicPhotosData.photos.photo;
							});
					}else{
						delete $scope.userName;
						$scope.errorMessage = data.message;
					}
				});
		};
	};
})();