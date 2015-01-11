advertsApp.controller('UserAdsNewCtrl', ['$scope', '$http', '$location','baseUrl', 'userAdsService', 'userData', 'authService', 'growl', function($scope, $http, $location, baseUrl, userAdsService, userData, authService, growl){
	$scope.pageTitle = 'New Ad';
	$scope.ad = {};
	$scope.user = (authService.getUserData() != null || authService.getUserData() != undefined) ? authService.getUserData().username: null;
	$http.get(baseUrl+"Towns").success(function (data) {
		if(data){
			$scope.towns = data;
		}
	});
	$http.get(baseUrl+"Categories").success(function (data) {
		if(data){
			$scope.categories = data;
		}
	});


	$scope.setFiles = function(element) {
    	$scope.$apply(function($scope) {
      		console.log('file:', element.files[0]);
      		$scope.file = element.files[0];
      		var file = $scope.file;
	        if (file.type.match(/image\/.*/)) {
	            var reader = new FileReader();
				reader.readAsDataURL(file);
	            reader.onload = function () {
	                var base64Str = reader.result;                
	                $scope.ad.imageDataUrl = base64Str;	               
	            	console.log( $scope.ad.imageDataUrl);
	            };	            
	        } else {
	            console.log('File type not supported!');
	        }
      	});      	
    };

	$scope.logOut = function(){
		userData.userLogOut().then(
			function (data){
				authService.removeUserData();
				growl.addSuccessMessage('Logged-out successfully!');
				$scope.user = null;
			},
			function (error){
				console.log(error);
			}
		);
	};

	$scope.onSumbmitAd = function onSumbmitAd () {
		userAdsService.publishAd($scope.ad).then(
			function (data){
				growl.addSuccessMessage(data.message);
				$location.path("/user/ads");
			},
			function (data){
				growl.addErrorMessage('Ad was not published!');
				console.log(data);
			}
		);
	}
}])