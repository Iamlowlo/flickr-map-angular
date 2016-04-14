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

    this.getUserPublicPhotos = function(userId, qty){
      if (typeof qty !== 'undefined') {
        qty = '&per_page='+qty;
      } else {
        qty = '';
      }
      return $http.get(basePath + '&method=flickr.people.getPublicPhotos&extras=url_t,geo,date_taken,tags,views&user_id=' + userId + qty);
    }

    this.getLastWWPictures = function(qty){
      if (typeof qty !== 'undefined') {
        qty = qty;
      } else {
        qty = 10;
      }
      return $http.get(basePath + '&method=flickr.photos.getRecent&extras=url_t,geo,date_taken,tags,views&per_page=' + qty);
    }

    this.getPicInfo = function(photoId){
      return $http.get(basePath + '&method=flickr.photos.getInfo&photo_id='+photoId);
    }

    this.getPicUrls = function(photoId){
      return $http.get(basePath + '&method=flickr.photos.getSizes&photo_id='+photoId);
    }
  }
  
})();

