advertsApp.directive('categories', function(){
	// Runs during compile
	return {
		controller: 'CategoriesCtrl',
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: 'application/templates/categories.html',
		replace: true
	};
});