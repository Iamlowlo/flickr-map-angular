(function(){
  'use strict';

  angular
    .module('angularProject')
    .directive('dropdown',[dropdownDirective]);

  function dropdownController($scope) {
    // variable setUp
    if (typeof $scope.isCollapsed == 'undefined') {
      $scope.isCollapsed = false;
    }

    //methods setUp
    $scope.toggleDropdown = toggleDropdown;
    
    function toggleDropdown() {
      console.log($scope.isCollapsed);
      $scope.isCollapsed = !$scope.isCollapsed;
    }
  }


  function dropdownDirective() {
    return {
      strict : 'E',
      templateUrl: 'app/components/dropdown/dropdown.html',
      transclude: true,
      scope: {
        title: '=dropdownTitle',
        isCollapsed: '='
      },
      controller: dropdownController
    }
  }

})();