/**
* login Module
*
* Description
* login module
*/
var loginModule = angular.module('loginModule', ['angular-growl']).controller('loginCtrl', ['$http', 'growl', function($http, growl){
	var self = this, 
		baseUrl = 'http://softuni-ads.azurewebsites.net/api/';

	self.user = {username:"", password:""};
	self.onLoginUser = function(){		
		$http({
			method  : "POST",
			url     : baseUrl+'user/login',
			headers : {
				'Content-Type' : 'application/json; charset=utf-8'
			},
			data  : self.user
		})
		.success( function (data) {
			console.log(data);
		})
		.error( function (data) {
			if(data.error_description){
				growl.addErrorMessage(data.error_description);
			}
		});
	}
}]);