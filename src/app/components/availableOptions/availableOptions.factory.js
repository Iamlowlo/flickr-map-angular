(function(){
	'use strict';
	angular
		.module('angularProject')
		.factory('AvailableOptionsFactory',AvailableOptionsFactory);
	function AvailableOptionsFactory() {
		return [
			{	
				title: 'Last 10 world wide pictures'
			},{	
				title: 'Last 50 pictures by city'
			},{	
				title: 'Last 100 pictures near you'
			},{	
				title: 'Last pictures taken by an user'
			}
		]
	}
})();