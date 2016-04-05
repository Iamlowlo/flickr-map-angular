(function(){
	'use strict'

	angular
		.module('angularProject')
		.factory('stickerFactory', StickerFactory);

	function StickerFactory(){
		var template = 'app/components/sticker/sticker.html',
			templateWithLink = 'app/components/sticker/stickerWithLink.html';
		return {
			getTemplate: function(variableToCheck){
				console.log(variableToCheck);
				if (!variableToCheck) {
					return template;
				} else {
					return templateWithLink;
				}
			}
		}
	}
})();