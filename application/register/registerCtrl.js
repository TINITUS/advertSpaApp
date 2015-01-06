/**
* register Module
*
* Description
* register module
*/
var registerModule = angular.module('registerModule', []).controller('registerCtrl', ['$http', function($http){
	self.user = {'username': ''};
}]);