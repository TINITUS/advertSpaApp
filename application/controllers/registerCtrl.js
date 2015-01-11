"use strict";

advertsApp.controller('registerCtrl', ['$scope', '$http', '$location', 'growl', 'userData', 'baseUrl', function($scope, $http, $location, growl, userData, baseUrl){
	var self = $scope;
	self.pageTitle = "Register";
	self.user = {};
	self.towns = [];

	$http.get(baseUrl+"Towns").success(function (data) {
		if(data){
			self.towns = data;
		}
	});

	self.onRegisterUser = function() { 
		userData.registerUser(self.user).then(
			function(data){
				self.user = {username:"", password:"", confirmPassword:"", name:"", email:"", phone:"", town:""};
				console.log(data);
				$location.path('/log-in');
				growl.addSuccessMessage('registration was successful! Please, Log-in!');
			},
			function(error){
				if(error.modelState['']){
					for(var i = 0; i<error.modelState[''].length; i++){
						growl.addErrorMessage(error.modelState[''][i]);
					}
				} else {
					console.log(error.modelState.model);
					for(var model in error.modelState){
						growl.addErrorMessage(error.modelState[model][0]);					
					}
				}
			}			
		);
	};
}]);