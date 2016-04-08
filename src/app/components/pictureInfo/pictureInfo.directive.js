(function(){
  'use strict';

  angular
    .module('angularProject')
    .directive('pictureInfo', PictureInfo);

  function PictureInfo() {
    function PictureInfoController($scope) {
      console.log($scope);
      $scope.picExtraInfo = [];
      if ($scope.picInfCtrl.date !== '') {
        $scope.picExtraInfo.push({ title : 'Date: ', content : $scope.picInfCtrl.date })
      }
      if ($scope.picInfCtrl.lat !== 0 && $scope.picInfCtrl.lng !== 0) {
        $scope.picExtraInfo.push({ title : 'Geo: ', content : 'Lat: ' + $scope.picInfCtrl.lat + ', Lng: ' + $scope.picInfCtrl.lng })
      }
      if ($scope.picInfCtrl.views !== 0) {
        $scope.picExtraInfo.push({ title : 'Views: ', content : $scope.picInfCtrl.views })
      }
      if ($scope.picInfCtrl.tags !== '') {
        $scope.picExtraInfo.push({ title : 'Tags: ', content : tagMaker($scope.picInfCtrl.tags) })
      }
      function tagMaker(tagsOnAString){
        var decoratedTags = '';
        tagsOnAString.split(' ').forEach(function(tagItem){
          decoratedTags += '<span class="tag">'+escape(tagItem)+'</span>';
        });
        return decoratedTags;
      }
    };

    return{
      restrict : 'E',
      scope: {
          title : '=pictitle',
          src : '=picsrc',
          date : '=date',
          views : '=views',
          tags : '=tags',
          lat : '=lat',
          lng : '=lng'
        },
      templateUrl : 'app/components/pictureInfo/pictureInfo.html',
      controller: PictureInfoController,
      controllerAs: 'picInfCtrl',
      bindToController: true
    }
  }

})();