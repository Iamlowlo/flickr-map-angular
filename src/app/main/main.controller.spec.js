(function() {
  'use strict';

  describe('controllers', function(){
    var vm;

    beforeEach(module('angularProject'));
    beforeEach(inject(function(_$controller_, _$timeout_) {
      vm = _$controller_('MainController');
    }));

  });
})();
