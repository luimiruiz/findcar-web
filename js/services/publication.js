angular.module('findCarApp').service('publication',['api', function(api){
  
  /**
   * Search existing publications
   * @param  searchParams Object with the search params
   * @return Array
   */
  this.searchPublications = function(searchParams, successCb){
  	params = {}
  	if(searchParams.page && searchParams.page != "#"){
  		params.page = searchParams.page
  	}
  	if(searchParams.offset && searchParams.offset != "#"){
  		params.offset = searchParams.offset
  	}
  	if(searchParams.minPrice && searchParams.minPrice != "#"){
  		params.price1 = searchParams.minPrice
  	}
  	if(searchParams.maxPrice && searchParams.maxPrice != "#"){
  		params.price2 = searchParams.maxPrice
  	}
  	if(searchParams.minYear && searchParams.minYear != "#"){
  		params.year1 = searchParams.minYear
  	}
  	if(searchParams.model && searchParams.model != "#"){
  		params.modelId = searchParams.model
  	}
  	if(searchParams.manufacturer && searchParams.manufacturer != "#"){
  		params.ManufacturerId = searchParams.manufacturer
  	}
    api.Publication.search(params,successCb);
  }
}]);