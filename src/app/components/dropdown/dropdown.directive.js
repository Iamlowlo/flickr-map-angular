(function(){
  'use strict';

  angular
    .module('angularProject')
    .directive('dropdown',[dropdownDirective]);

  function dropdownController($scope) {
    console.log($scope.isCollapsed);
    if (typeof $scope.isCollapsed == 'undefined') {
      $scope.isCollapsed = false;
    }
  }

  function dropdownLink($scope, element) {
    console.log($scope.isCollapsed);
    element.on('click', function(e){
      $scope.isCollapsed = !$scope.isCollapsed;
    })
  }

  function dropdownDirective() {
    console.log('directive');
    return {
      strict : 'E',
      templateUrl: 'app/components/dropdown/dropdown.html',
      transclude: true,
      scope: {
        title: '=dropdownTitle'
      },
      controller: dropdownController,
      link: dropdownLink
    }
  }

})();