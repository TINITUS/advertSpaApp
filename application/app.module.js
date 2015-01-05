(function (){

	var advertsApp = angular.module('AdvertsApp', ['ngRoute', 'ui.bootstrap']);		

	advertsApp.controller('AdsHomeCtrl', ['$http', function($http){
		var self = this,
			baseUrl = 'http://softuni-ads.azurewebsites.net/api/';
		self.imagePlaceholder = "data:image/jpeg;base64,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"
		self.allAds = [];
		self.categories = [];
		self.towns = [];
		self.page = 1;
		self.totalPages = 0;
		self.itemsPP = 5;
		

		$http.get(baseUrl+"Categories").success(function (data) {
			if(data){
				self.categories = data;
			}
		});

		$http.get(baseUrl+"Towns").success(function (data) {
			if(data){
				self.towns = data;
			}
		});

		self.getAds = function (pageNum) {			
			$http.get(baseUrl+"Ads",{params:{"StartPage":pageNum,"PageSize":self.itemsPP}})
			  .success(function (data) {
				if(data.ads.length){
					self.page = pageNum;
					self.pagination = [];				
					self.totalPages = data.numPages;
					self.allAds = data.ads;
					for (var i = 1; i <= self.totalPages; i++) {					
						self.pagination.push(i);
					};
				}
			});	
		};
		self.getAds(1);
	}]);
}());