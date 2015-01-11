advertsApp.factory('categoriesData', ['$resource', 'baseUrl', function($resource, baseUrl){
	
	function getCategories () {
		return $resource(baseUrl + 'categories').query();
	}

	return {
		getCategories : getCategories
	};
}])