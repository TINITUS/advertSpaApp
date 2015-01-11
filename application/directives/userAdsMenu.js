advertsApp.directive('userAdsMenu', function(){
	// Runs during compile
	return {
		controller: 'UserAdsMenuCtrl',
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: 'application/templates/userAdsMenu.html',
		replace: true
	};
});