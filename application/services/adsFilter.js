"use strict";

advertsApp.factory('adsFilter', function(){
	var filterParams = {};
	
	function filterByTown(town){
		filterParams.townId = town;
	}

	function filterByCategory(category){		
		filterParams.categoryId = category;
	}

	function getFlterParam () {
		return filterParams;
	}

	return {
		filterByCategory : filterByCategory,
		filterByTown : filterByTown,
		getFlterParam : getFlterParam
	};
})