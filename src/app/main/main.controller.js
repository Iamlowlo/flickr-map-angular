(function() {
  'use strict';

  angular
    .module('angularProject')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $rootScope) {
    var vm = this;
    $rootScope.withHeader = true;


  }
})();
