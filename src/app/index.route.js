(function() {
  'use strict';

  angular
    .module('angularProject')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/intro/intro.html',
        controller: 'IntroController',
        controllerAs: 'intro',
        withHeader: false,
        viewClass: 'introView',
        title: 'Intro',
        mainLink: true
      })
      .when('/dashboard', {
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'dashboard',
        withHeader: true,
        viewClass: 'dashboardView',
        title: 'Dashboard',
        mainLink: true,
        subnav: ['/last10ww','/last5cp','/last100ny','/lastpbu']
      })
      .when('/last10ww', {
        templateUrl: 'app/last10ww/last10ww.html',
        controller: 'lastWWController',
        controllerAs: 'wwCtrl',
        withHeader: true,
        viewClass: 'mapView last10ww',
        title: 'Last 10 worldwide'
      })
      .when('/last5cp', {
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'dashboard',
        withHeader: true,
        viewClass: 'mapView last5cp',
        title: 'Last 5 by city'
      })
      .when('/last100ny', {
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'dashboard',
        withHeader: true,
        viewClass: 'mapView last100ny',
        title: 'Last 100 near you'
      })
      .when('/lastpbu', {
        templateUrl: 'app/lastpbu/lastpbu.html',
        controller: 'pbuController',
        controllerAs: 'pbuCtrl',
        withHeader: true,
        viewClass: 'mapView lastpbu',
        title: 'Last pictures by user'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
