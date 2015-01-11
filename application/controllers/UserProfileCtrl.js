advertsApp.controller('UserProfileCtrl', ['$scope', 'townsData', 'userProfileData', 'growl', '$location', 'userData', 'authService',
    function ($scope, townsData, userProfileData, growl, $location, userData, authService) {
        $scope.emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        $scope.passwordPattern = /^[\s\S]{2,100}$/;
        $scope.towns = townsData.getTowns();
        $scope.pageTitle = "Edit profile";
        $scope.user = userProfileData.get(); 
        $scope.username = (authService.getUserData() != null || authService.getUserData() != undefined) ? authService.getUserData().username: null;
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

        $scope.editUserProfile = function (user, userEditProfileForm) {
            if (userEditProfileForm.$valid) {
                userProfileData.editUserProfile(user)
                    .then(
                    function userProfileEditSuccess(userProfileEditData) {
                        growl.addSuccessMessage('User profile successfully updated.');
                        $location.path('/user/home');

                    },
                    function userProfileEditError(userProfileEditErr) {
                        growl.addErrorMessage(userProfileEditErr.data.message);
                        console.log(userProfileEditErr);
                    }
                )
            } else {
                growl.errorMessage('The user form contains invalid data.');
            }
        };

        $scope.changeUserPassword = function (pass, userChangePasswordForm) {
            if (userChangePasswordForm.$valid) {
                userProfileData.changeUserPassword(pass)
                    .then(
                    function changeUserPassSuccess(changeUserPassData) {
                        growl.addSuccessMessage('The password was successfully changed');
                        $location.path('/user/home');
                    },
                    function changeUserPassError(changeUserPassErr) {
                        growl.addErrorMessage('The password couldn\'t be changed.');
                        console.log(changeUserPassErr);
                    }
                )
            } else {
                growl.addErrorMessage('Tne user form contains invalid data.');
            }
        };
    }]);