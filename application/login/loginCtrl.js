/**
* login Module
*
* Description
* login module
*/
var loginModule = angular.module('loginModule', []).controller('loginCtrl', ['$http', function($http){
	var self = this, 
		baseUrl = 'http://softuni-ads.azurewebsites.net/api/';

	self.user = {};
	self.onLoginUser = function(){		
		$http({
			method  : "POST",
			url     : baseUrl+'user/register',
			headers : {
				'Content-Type' : 'application/json; charset=utf-8'
			},
			data  : self.user
		});
	}
}]);