(function (){

	var advertsApp = angular.module('AdvertsApp', [
			'ngRoute',
			'ui.bootstrap',
			'homeModule',
			'loginModule',
			'registerModule']);
		
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
}());