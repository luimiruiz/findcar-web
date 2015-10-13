angular.module('findCarApp').controller('manufacturersController',['$scope',function($scope){
	/**
	 * Array with the manufacturers
	 * Array
	 */
	$scope.manufacturers = [];

	/**
	 * Manufacturer Array used in the add/edit Modal
	 * @type Object
	 */
	$scope.auxManufacturer = {};

	/**
	 * Shows the add Manufacturer modal
	 */
	$scope.showAddManufacturer = function(){

	}

	/**
	 * Adds a new Manufacturer
	 */
	$scope.addManufacturer = function(){

	}

	/**
	 * Shows edit Manufacturer modal
	 * @param  index Index of the Manufacturer
	 */
	$scope.showEditManufacturer = function(index){

	}

	/**
	 * Edits a Manufacturer
	 */
	$scope.editManufacturer = function(){

	}

	/**
	 * Deletes a manufacturer
	 * @param  index Index of the manufacturer
	 */
	$scope.deleteManufacturer = function(index){

	}
}]);