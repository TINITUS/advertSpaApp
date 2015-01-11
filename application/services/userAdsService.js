advertsApp.factory('userAdsService', ['$resource', 'baseUrl', 'authService', function($resource, baseUrl, authService){
	var userAdsUrl = baseUrl + 'user/ads',            
        headers = authService.getAuthHeader(),
        publicAdsResource = $resource(baseUrl + '/ads', null, {
            'getAll': {method: 'GET', isArray: false}
        }),
        userAdsResource = $resource(userAdsUrl, null, {
            'publishAd': {method: 'POST', headers: headers},
            'getUserAds': {method: 'GET', headers: headers},
            'deactivate': {url: userAdsUrl + '/deactivate/:id', method: 'PUT', params: {id: '@id'}, headers: headers},
            'publishAgain': {url: userAdsUrl + '/publishAgain/:id', method: 'PUT', params: {id: '@id'}, headers: headers},
            'getById': {url: userAdsUrl + '/:id', method: 'GET', headers: headers},
            'editUserAd': {url: userAdsUrl + '/:id', method: 'PUT', params: {id: '@id'}, headers: headers},
            'deleteUserAd': {url: userAdsUrl + '/:id', method: 'DELETE', params: {id: '@id'}, headers: headers}
        });       

	return {
		all: function (adsRequestParams) {
            return publicAdsResource.getAll(adsRequestParams).$promise;
        },
        publishAd: function (ad) {
            return userAdsResource.publishAd(ad).$promise;
        },
        getUserAds: function (adsRequestParams) {
            return userAdsResource.getUserAds(adsRequestParams).$promise;
        },
        deactivate: function (id) {
            return userAdsResource.deactivate({id: id}).$promise;
        },
        publishAgain: function (id) {
            return userAdsResource.publishAgain({id: id}).$promise;
        },
        getById: function (id) {
            return userAdsResource.getById({id: id}).$promise;
        },
        editUserAd: function (ad) {
            return userAdsResource.editUserAd(ad).$promise;
        },
        deleteUserAd: function (ad) {
            return userAdsResource.deleteUserAd({id: ad.id}).$promise;
        }
	}
}])