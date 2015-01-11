advertsApp.directive('towns', function(){
	// Runs during compile
	return {
		controller: 'TownsCtrl',
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: 'application/templates/towns.html',
		replace: true
	};
});