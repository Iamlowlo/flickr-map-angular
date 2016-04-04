(function() {
  'use strict';

  angular
    .module('angularProject')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main',
        withHeader: false,
        viewClass: 'mainView',
        title: 'Main'
      })
      .when('/dashboard', {
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'dashboard',
        withHeader: true,
        viewClass: 'dashboardView',
        title: 'Dashboard'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
