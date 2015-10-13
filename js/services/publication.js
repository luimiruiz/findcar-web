angular.module('findCarApp').service('publication',['api', function(api){
  
  /**
   * Search existing publications
   * @param  searchParams Object with the search params
   * @return Array
   */
  this.searchPublications = function(searchParams){

  }

  /**
   * Creates a new publication
   * @param publicationData Object with the data of the publication
   * @param successCb       Function to execute in case of success
   * @param errorCb         Function to execute in case of error
   */
  this.createPublication = function(publicationData, successCb, errorCb){

  }

  /**
   * Edits a publication
   * @param publicationData Object with the data of the publication
   * @param successCb       Function to execute in case of success
   * @param errorCb         Function to execute in case of error
   */
  this.editPublication = function(publicationData, successCb, errorCb){

  }

   /**
   * Deletes a publication
   * @param publicationData Object with the data of the publication
   * @param successCb       Function to execute in case of success
   * @param errorCb         Function to execute in case of error
   */
  this.deletePublication = function(publicationId, successCb, errorCb){

  }
}]);