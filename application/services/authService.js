'use strict'
advertsApp.factory('authService', ['$http', 'baseUrl', '$q', function($http, baseUrl, $q){
	
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

	function logout(user) {
		var url = baseUrl + 'user/login';
		return httpRequest(url, user);	
	}


	return {
		userLogin : login,
		registerUser : register
	};
}])