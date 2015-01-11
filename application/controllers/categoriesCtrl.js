advertsApp.controller('CategoriesCtrl', ['$scope', '$rootScope', 'categoriesData', 'adsFilter', function($scope, $rootScope, categoriesData, adsFilter){
	
	$scope.selectedCategory = '';

	categoriesData.getCategories()
		.$promise
		.then(
			function (data) {
				$scope.categories = data;
			}
		);
	$scope.onCatSelected = function(){
		adsFilter.filterByCategory($scope.selectedCategory);
		$rootScope.$broadcast('catClicked', $scope.selectedCategory);
	}
}])