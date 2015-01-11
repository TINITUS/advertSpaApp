"use strict";

advertsApp.controller('loginCtrl', ['$scope','$http', '$location', 'growl', 'userData', 'authService', function($scope, $http, $location, growl, userData, authService){
	var self = $scope;
	self.pageTitle = "Log-in";
	self.user = {username:"", password:""};
	self.onLoginUser = 	function() { 
		userData.userLogin(self.user).then(
			function(data){
				growl.addSuccessMessage("Hello " + data.username);
				authService.saveUserData(data);				
				$location.path("/home");
			},
			function(error){
				if(error.error_description){
				growl.addErrorMessage(error.error_description);
			}
			}
		);
	};

}]);