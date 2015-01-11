"use strict";

advertsApp.factory('authService', ['$q','localStorageService', function($q, ls){
	var key  = 'currentUser',
		headers = {};	

	function saveUserData (data) {
		ls.set(key, data);
	}

	function getUserData () {
		return ls.get(key);
	}

	function removeUserData(){
		ls.clearAll();
	}

	function getAuthHeader(){
		headers.Authorization = 'Bearer ' + getUserData().access_token;
		return headers;
	}

	function isLogged(){
		return !!getUserData();
	}

	return {
		saveUserData : saveUserData,
		getUserData : getUserData,
		removeUserData : removeUserData,
		getAuthHeader : getAuthHeader,
		isLogged: isLogged
	};
}])