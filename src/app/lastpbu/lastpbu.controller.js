(function(){
	'use strict';

	angular
		.module('angularProject')
		.controller('pbuController',['$scope','flickrAPIService', PbuController]);

	function PbuController($scope, flickrAPIService){
		$scope.userPicsVeil=false;
		
		//$scope.searchName = 'The_Pretender';

		$scope.searchUser = function(){
			$scope.userPicsVeil=true;
			flickrAPIService.getUser($scope.searchName)
				.success(function(getUserData){
					console.log(getUserData);
					$scope.userPicsVeil=false;
					if (getUserData.stat == 'ok'){
						delete $scope.errorMessage;
						//console.log(getUserData.user);
						$scope.userName = getUserData.user.username._content;
						delete $scope.userPhotos;
						flickrAPIService.getUserPublicPhotos(getUserData.user.id, 20)
							.success(function(getUserPublicPhotosData){
								console.log(getUserPublicPhotosData.photos);
								if (getUserPublicPhotosData.photos.total === '0') {
									$scope.errorMessage = 'No public photos on this user';
								} else {
									delete $scope.errorMessage;
									$scope.userPhotos = getUserPublicPhotosData.photos.photo;
								}
							});
					}else{
						delete $scope.userName;
						$scope.errorMessage = getUserData.message;
					}
				});
		};
	};
})();