(function(){
	'use strict';

	angular
		.module('angularProject')
		.service('dateService', DateService);

	function DateService() {
		this.getFormattedTime = function(date){
			return 	this.twoDigitsValue(date.getDate())
					+'/'+this.twoDigitsValue(date.getMonth()+1)
					+'/'+date.getFullYear()
					+' '+date.getHours()
					+':'+this.twoDigitsValue(date.getMinutes())
					+':'+this.twoDigitsValue(date.getSeconds());
		};

		this.twoDigitsValue = function(value){
			if (value.toString().length<2) {
				return '0'+value;
			}else{
				return value;
			}
		}
	}
})();