"use strict";

advertsApp.factory('authService', ['localStorageService', function(ls){
	var key  = 'currentUser';	

	function saveUserData (data) {
		ls.set(key, data);
	}

	function getUserData (data) {
		return ls.get(key);
	}

	function removeUserData(){
		ls.clearAll();
	}

	return {
		saveUserData : saveUserData,
		getUserData : getUserData,
		removeUserData : removeUserData
	};
}])