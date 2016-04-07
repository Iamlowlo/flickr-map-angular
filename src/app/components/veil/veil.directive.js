(function(){
  'use strict';

  angular
    .module('angularProject')
    .directive('veil', VeilDirective);

  function VeilDirective() {
    return {
      restrict: 'E',
      template: '<div class="veil" ng-if="showing"></div>',
      scope: {
        showing: '='
      }
    };
  }

})();