'use strict'
advertsApp.factory('userData', ['$http', 'baseUrl','authService', '$q', function($http, baseUrl, auth, $q){
	
	function httpRequest(url, data, headers){
		var d = $q.defer();
		$http({
			method:"POST",
			url: url,
			headers: (headers)?headers:"",
			data: data
		})
		.success(function (data) {
            d.resolve(data);
        })
        .error(function (error) {
            d.reject(error);
        });

    	return d.promise;
	}


	function login(user) {
		var url = baseUrl + 'user/login';
		return httpRequest(url, user);	
	}

	function register(user) {
		var url = baseUrl + 'user/register';
		return httpRequest(url, user);
	}

	function logout() {
		var url = baseUrl + 'user/logout',
			headers = {'Authorization' : 'Bearer ' + auth.getUserData().access_token};
		return httpRequest(url, {}, headers);	
	}

	return {
		userLogin : login,
		registerUser : register,
		userLogOut : logout
	};
}])