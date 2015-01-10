"use strict";

advertsApp.controller('loginCtrl', ['$http', 'growl', 'authService','$location', function($http, growl, auth, $location){
	var self = this;

	self.user = {username:"", password:""};
	self.onLoginUser = 	function() { 
		auth.userLogin(self.user).then(
			function(data){
				growl.addSuccessMessage("Hello " + data.username);
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