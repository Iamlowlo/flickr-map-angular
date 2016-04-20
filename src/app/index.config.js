(function() {
  'use strict';

  angular
    .module('angularProject')
    .config(config);

  /** @ngInject */
  function config($logProvider,uiGmapGoogleMapApiProvider,GMapsAPI) {
    // Enable log
    $logProvider.debugEnabled(true);
    // gmpas-angular config
    uiGmapGoogleMapApiProvider.configure({
      key: GMapsAPI,
      v: '3.23'
    })
  }

})();
