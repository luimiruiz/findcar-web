angular.module('findCarApp').controller('publicationsController',['$scope',function($scope){
	$scope.publications = [];
	$scope.searchParams = {};
	$scope.auxPublication = {};

	/**
	 * Function to search new publications
	 */
	$scope.searchPublications = function(){

	}

	/**
	 * Function to show the edit publication modal
	 * @param index Index of the publication
	 */
	$scope.showEditPublication = function(index){

	}

	/**
	 * Function to edit a publication
	 */
	$scope.editPublication = function(){

	}

	/**
	 * Function to show the add publication modal
	 */
	$scope.showAddPublication = function(){

	}

	/**
	 * Function to create a new publication
	 */
	$scope.addPublication = function(){

	}

	/**
	 * Deletes an existing publication
	 * @param  index Index of the publication to delete
	 */
	$scope.deletePublication = function(index){

	}
}]);