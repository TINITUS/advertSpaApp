"use strict";

advertsApp.controller('UserAdsEditCtrl', ['$scope', '$routeParams', '$location', 'authService', 'userAdsService', 'growl', 'categoriesData', 'townsData', 
    function ($scope, $routeParams, $location, authService, userAdsService, growl, categoriesData, townsData ) {
        $scope.pageTitle = "Edit Ad";
        $scope.towns = townsData.getTowns();
        $scope.categories = categoriesData.getCategories();
        $scope.buttonName = 'Change image';
        $scope.user = (authService.getUserData() != null || authService.getUserData() != undefined) ? authService.getUserData().username: null;
        $scope.logOut = function(){
            userData.userLogOut().then(
                function (data){
                    authService.removeUserData();
                    growl.addSuccessMessage('Logged-out successfully!');
                    $scope.user = null;
                    $location.path('/');
                },
                function (error){
                    console.log(error);
                }
            );
        };


        userAdsService.getById($routeParams.id)
            .then(
            function getAdByIdSuccess(adData) {
                $scope.ad = adData;
            },
            function getAdByIdError(adError) {
                console.log(adError);
            }
        );

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

        $scope.editAd = function (ad, adEditForm) {
            if (adEditForm.$valid) {
                userAdsService.editUserAd(ad)
                    .then(
                    function adEditSuccess() {
                        growl.addSuccessMessage('Advertisement edited. Don\'t forget to submit it for publishing;');
                        $location.path('/user/ads');
                    },
                    function adEditError(adEditError) {
                        growl.addErrorMessage(adEditError.data.message);
                        console.log(adEditError);
                    }
                )
            }
        };

        $scope.deleteImageUrl = function (ad) {
            $scope.ad.imageDataUrl = null;            
        }
    }]);