'use strict';

var advertsApp = angular.module('AdvertsApp', [
		'ngRoute',
		'ngResource',
		'ui.bootstrap',			
		'angular-loading-bar',
		'angular-growl',
		'LocalStorageModule'
		]);
	
advertsApp.config(['$routeProvider', 'localStorageServiceProvider',function($routeProvider, localStorageServiceProvider) {
	$routeProvider.when('/',{
		templateUrl: 'application/templates/home.html',
		controller: 'homeCtrl'
	})
	.when('/log-in',{
		templateUrl: 'application/templates/login.html',
		controller: 'loginCtrl',
		controllerAs: 'login'
	})
	.when('/register',{
		templateUrl: 'application/templates/register.html',
		controller: 'registerCtrl'
	})
	.otherwise({
		redirectTo: '/'
	});

	localStorageServiceProvider	    
    .setPrefix('advertsApp')
    .setStorageType('sessionStorage');
}]);	

var compareTo = function() {
    return {
        require: "ngModel",
        scope: {
            otherModelValue: "=compareTo"
        },
        link: function(scope, element, attributes, ngModel) {
             
            ngModel.$validators.compareTo = function(modelValue) {
                return modelValue == scope.otherModelValue;
            };
 
            scope.$watch("otherModelValue", function() {
                ngModel.$validate();
            });
        }
    };
};
 
advertsApp.directive("compareTo", compareTo);
advertsApp.constant('baseUrl', 'http://softuni-ads.azurewebsites.net/api/');