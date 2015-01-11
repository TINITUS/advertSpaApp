advertsApp.factory('townsData', ['$resource', 'baseUrl', function($resource, baseUrl){
	
	function getTowns () {
		return $resource(baseUrl + 'towns').query();
	}

	return {
		getTowns : getTowns
	};
}])