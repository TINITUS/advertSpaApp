'use strict';

var advertsApp = angular.module('AdvertsApp', [
		'ngRoute',
		'ngResource',
		'ui.bootstrap',			
		'angular-loading-bar',
		'angular-growl',
		'LocalStorageModule'
		]);
	
advertsApp.config(['$routeProvider', 'localStorageServiceProvider', 'growlProvider', function($routeProvider, localStorageServiceProvider, growlProvider) {
	
	var routePermissions = {
            isLogged: {
                authenticate: function ($q, authService) {                	
                    if (authService.isLogged() == true) {
                        return true;
                    } else {
                        return $q.reject('not authorized');
                    }
                }
           }
        }

	//public paths
	$routeProvider.when('/',{
		templateUrl: 'application/templates/home.html',
		controller: 'homeCtrl'
	});
	$routeProvider.when('/log-in',{
		templateUrl: 'application/templates/login.html',
		controller: 'loginCtrl',
		controllerAs: 'login'
	});
	$routeProvider.when('/register',{
		templateUrl: 'application/templates/register.html',
		controller: 'registerCtrl'
	});
	//secured paths
	$routeProvider.when('/user/ads',{
		templateUrl: 'application/templates/user.ads.html',
		controller: 'UserAdsCtrl',
		resolve: routePermissions.isLogged
	});
	/*$routeProvider.when('/user/ads/new',{
		templateUrl: 'application/templates/user.ads.new.html',
		controller: 'UserAdsNewCtrl',
	});
	$routeProvider.when('user/ads/edit/:id',{
		templateUrl: 'application/templates/user.ads.edit.html',
		controller: 'UserAdsEditCtrl',
	});
	$routeProvider.when('user/ads/delete/:id',{
		templateUrl: 'application/templates/user.ads.delete.html',
		controller: 'UserAdsDeleteCtrl',
	});
	$routeProvider.when('user/profile',{
		templateUrl: 'application/templates/user.profile.html',
		controller: 'UserProfileCtrl',
	});*/
    $routeProvider.when('/unauthorized', {
        template: '<div><p>Your request was rejected. You might not be authorized to view this content. <br><a href="#/log-in">Please log in!</a></p></div>'
    });
	$routeProvider.otherwise({
		redirectTo: '/'
	});
	
	//Local Storage Settigs
	localStorageServiceProvider.setStorageType('sessionStorage');

    //Growl Settings
    growlProvider.globalTimeToLive(5000);
}]);	
advertsApp.run(function ($rootScope, $location) {
        $rootScope.$on('$routeChangeError', function (ev, current, previous, rejection) {
            $location.path('/unauthorized');
        })
    });
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