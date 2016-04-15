(function(){
  'use strict';

  angular
    .module('angularProject')
    .controller('picInfoController', ['$scope','$filter','$routeParams','flickrAPIService','dateService',PicInfoController]);
  function PicInfoController($scope, $filter, $routeParams, flickrAPIService, dateService) {
    flickrAPIService.getPicInfo($routeParams.id)
      .success(function(data){
        console.log(data.photo);
        $scope.picInfoFulfilled = true;
        $scope.title = data.photo.title._content;
        $scope.author = data.photo.owner.username;
        $scope.date = dateService.getFormattedTime(new Date(1000*data.photo.dates.posted));
        $scope.description = (data.photo.description._content.length >0)?data.photo.description._content:false;
        $scope.tags = data.photo.tags.tag;
      });
    flickrAPIService.getPicUrls($routeParams.id)
      .success(function(data){
        console.log(data.sizes);
        $scope.picUrlsFulfilled = true;
        $scope.sizes = data.sizes.size;
        $scope.mainImg = $filter('filter')(data.sizes.size,{width:550}, function(actual, desired){
          return (parseInt(actual)>=desired)?true:false;
        })[0];
      });

  }
})();