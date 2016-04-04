(function(){
  'use strict';

  angular
    .module('angularProject')
    .directive('sticker', sticker);

  function sticker(){
    function StickerController($scope){
    }
    return {
      restrict: 'E',
      templateUrl: 'app/components/sticker/sticker.html',
      controller: StickerController,
      controllerAs: 'sticker',
      scope: {
        stickerInfo: '='
      },
      bindToController: true
    }
  }
})();