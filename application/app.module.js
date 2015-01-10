	var advertsApp = angular.module('AdvertsApp', [
			'ngRoute',
			'ui.bootstrap',
			'homeModule',			
			'angular-loading-bar',
			'angular-growl'
			]);
		
	advertsApp.config(['$routeProvider',function($routeProvider) {
		$routeProvider.when('/',{
			templateUrl: 'application/home/home.notlogged.html',
    		controller: 'homeCtrl',
    		controllerAs: 'ads'
		})
		.when('/log-in',{
			templateUrl: 'application/login/login.html',
			controller: 'loginCtrl',
			controllerAs: 'login'
		})
		.when('/register',{
			templateUrl: 'application/register/register.html',
			controller: 'registerCtrl',
			controllerAs: 'register'
		})
		.otherwise({
			redirectTo: '/'
		});
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