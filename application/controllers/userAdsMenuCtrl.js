advertsApp.controller('UserAdsMenuCtrl', ['$scope', '$rootScope', function($scope, $rootScope){
	$scope.selectedStatus = '1';
	$scope.statuses = [
		{id:'', name:"All"},
		{id:'Published', name:"Published"},
		{id:'WaitingApproval', name:"Waiting Approval"},
		{id:'Inactive', name:"Inactive"},
		{id:'Rejected', name:"Rejected"}
	];
	$scope.onStatusSelected = function(){		
		$rootScope.$broadcast('statClicked', $scope.selectedStatus);
	}	
}])