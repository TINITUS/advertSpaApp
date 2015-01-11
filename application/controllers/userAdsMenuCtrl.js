advertsApp.controller('UserAdsMenuCtrl', ['$scope', function($scope){
	$scope.selectedStatus = '1';
	$scope.statuses = [
		{id:'1', name:"All"},
		{id:'2', name:"Published"},
		{id:'3', name:"Waiting Approval"},
		{id:'4', name:"Inactive"},
		{id:'5', name:"Rejected"}
	]	
}])