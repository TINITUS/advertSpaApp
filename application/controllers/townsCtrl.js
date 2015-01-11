advertsApp.controller('TownsCtrl', ['$scope', '$rootScope', 'townsData', 'adsFilter', function($scope, $rootScope, townsData, adsFilter){

	$scope.selectedTown = '';

	townsData.getTowns()
		.$promise
		.then(
			function (data) {
				$scope.towns = data;
			}
		);

	$scope.onTownSelected = function(){
		adsFilter.filterByTown($scope.selectedTown);
		$rootScope.$broadcast('townClicked', $scope.selectedTown);
	}	
}])