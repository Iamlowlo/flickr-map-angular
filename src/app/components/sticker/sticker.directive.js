(function(){
  'use strict';

  angular
    .module('angularProject')
    .directive('sticker', sticker);

  function sticker(stickerFactory){
    function StickerController($scope){
    }
    return {
      restrict: 'E',
      templateUrl: stickerFactory.getTemplate(),
      controller: StickerController,
      controllerAs: 'stickerCtrl',
      scope: {
        stickerInfo: '='
      },
      bindToController: true
    }
  }
})();