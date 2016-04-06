(function(){
  'use strict';

  angular
    .module('angularProject')
    .directive('sticker', sticker);

  function sticker(stickerFactory){
    function StickerController($scope, stickerFactory){
      $scope.getTemplate = function(){
          return stickerFactory.getTemplate($scope.stickerCtrl.stickerInfo.href);
        };
    }
    return {
      restrict: 'E',
      template: '<article class="sticker" ng-include src="getTemplate()">',
      controller: StickerController,
      controllerAs: 'stickerCtrl',
      scope: {
        stickerInfo: '='
      },
      bindToController: true
    }
  }
})();