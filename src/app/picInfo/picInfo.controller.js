(function(){
  'use strict';

  angular
    .module('angularProject')
    .controller('picInfoController', ['$scope','$routeParams','flickrAPIService','dateService',PicInfoController]);
  function PicInfoController($scope, $routeParams, flickrAPIService, dateService) {
    flickrAPIService.getPicInfo($routeParams.id)
      .success(function(data){
        console.log(data.photo);
        $scope.picInfoFulfilled = true;
        $scope.title = data.photo.title._content;
        $scope.author = data.photo.owner.username;
        $scope.date = dateService.getFormattedTime(new Date(1000*data.photo.dates.posted));
        $scope.description = (data.photo.description._content.length >0)?data.photo.description._content:false;
      });
    flickrAPIService.getPicUrls($routeParams.id)
      .success(function(data){
        console.log(data.sizes);
        $scope.picUrlsFulfilled = true;
        $scope.src = {};
        $scope.src.xxl = data.sizes.size[data.sizes.size.length-1].source;
      });

  }
})();