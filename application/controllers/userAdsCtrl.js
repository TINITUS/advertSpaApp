advertsApp.controller('UserAdsCtrl', ['$scope','$location', 'userAdsService', 'authService', 'userData', function($scope,$location, userAdsService, authService, userData){
	$scope.requestParams = {startPage: 1, pageSize: 5};
	$scope.pageTitle = 'My Ads';
	$scope.user = (authService.getUserData() != null || authService.getUserData() != undefined) ? authService.getUserData().username: null;
	$scope.logOut = function(){
		userData.userLogOut().then(
			function (data){
				authService.removeUserData();
				growl.addSuccessMessage('Logged-out successfully!');
				self.user = null;
				$location.path('/');
			},
			function (error){
				console.log(error);
			}
		);
	};
	userAdsService.getUserAds($scope.requestParams)
	.then(
        function getUserAdsSuccess(userAdsData) {
        	console.log(userAdsData);
            /*$scope.ads = userAdsData.ads;
            $scope.pagesArr = new Array(userAdsData.numPages);*/
        },
        function getUserAdsError(userAdsError) {
            console.log(userAdsError);
		}
	);
}])