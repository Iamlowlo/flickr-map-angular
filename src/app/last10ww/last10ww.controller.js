(function(){
	'use strict';

	angular
		.module('angularProject')
		.controller('lastWWController', ['$scope','flickrAPIService','dateService',LastWWController]);
	function LastWWController($scope, flickrAPIService, dateService) {
			flickrAPIService.getLastWWPictures()
				.success(function(lastPicturesData){
					console.log(lastPicturesData);
					if (lastPicturesData.stat === 'ok') {
						delete $scope.errorMessage;
						$scope.timeWhenAsked = dateService.getFormattedTime(new Date());
						$scope.lastPictures = lastPicturesData.photos.photo;
					}else{
						delete $scope.lastPictures;
						$scope.errorMessage = lastPicturesData.message;
					}
				})
	};
})();