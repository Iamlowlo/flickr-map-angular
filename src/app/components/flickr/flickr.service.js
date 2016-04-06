(function(){
  'use strict';

  angular
    .module('angularProject')
    .service('flickrAPIService',['$http', 'FlickrAPI', FlickrAPI]);
  function FlickrAPI($http, flickrAPI) {
    var basePath = 'https://api.flickr.com/services/rest/?format=json&nojsoncallback=1&api_key='+flickrAPI;

    this.getUser = function(username){
      return $http.get(basePath + '&method=flickr.people.findByUsername&username=' + username);
    }
  }
  
})();