/**
* register Module
*
* Description
* register module
*/
var registerModule = angular.module('registerModule', ['angular-growl']).controller('registerCtrl', ['$http','growl', function($http, growl){
	var self = this,
		baseUrl = 'http://softuni-ads.azurewebsites.net/api/';

	self.user = {};
	self.towns = [];

	$http.get(baseUrl+"Towns").success(function (data) {
		if(data){
			self.towns = data;
		}
	});

	self.onRegisterUser = function(){		
		$http({
			method  : "POST",
			url     : baseUrl+'user/register',
			headers : {
				'Content-Type' : 'application/json; charset=utf-8'
			},
			data  : self.user
		})
		.success(function(data){
			self.user = {username:"", password:"", confirmPassword:"", name:"", email:"", phone:"", town:""};
			console.log(data);
			growl.addSuccessMessage('registration was successful! Please, Log-in!');
		})
		.error(function(data){
			if(data.modelState['']){
				for(var i = 0; i<data.modelState[''].length; i++){
					growl.addErrorMessage(data.modelState[''][i]);
				}
			} else {
				console.log(data.modelState.model);
				for(var model in data.modelState){
					growl.addErrorMessage(data.modelState[model][0]);					
				}
			}
		});
	}
}]);