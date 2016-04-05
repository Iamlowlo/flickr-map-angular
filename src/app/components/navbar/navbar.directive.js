(function() {
  'use strict';

  angular
    .module('angularProject')
    .directive('acmeNavbar', ['$route',acmeNavbar]);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController($scope, $route) {
      var vm = this;
      
    }
  }

})();
