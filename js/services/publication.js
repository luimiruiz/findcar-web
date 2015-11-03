angular.module('findCarApp').service('publication',['api', function(api){
  
  /**
   * Search existing publications
   * @param  searchParams Object with the search params
   * @return Array
   */
  this.searchPublications = function(searchParams, successCb){
    api.Publication.search({page: searchParams.page},successCb);
  }
}]);