(function(){
	'use strict';
	
	angular
		.module('angularProject')
		.factory('AvailableOptionsFactory',AvailableOptionsFactory);
	function AvailableOptionsFactory() {
		return [
			{	
				title: 'Last 10 world wide pictures',
				img: 'test.jpg',
				href: '/last10ww'
			},{	
				title: 'Last 5 pictures by city',
				img: 'test.jpg',
				href: '/last5cp'
			},{	
				title: 'Last 100 pictures near you',
				img: 'test.jpg',
				href: '/last100ny'
			},{	
				title: 'Last pictures taken by an user',
				img: 'test.jpg',
				href: '/lastpbu'
			}
		]
	}
})();