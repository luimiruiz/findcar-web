angular.module('findCarApp').controller('modelsController',['$scope',function($scope){

	/**
	 * Array with the models
	 * Array
	 */
	$scope.models = [];

	/**
	 * Model Array used in the add/edit Modal
	 * @type Object
	 */
	$scope.auxModel = {};

	/**
	 * Shows the add model modal
	 */
	$scope.showAddModel = function(){

	}

	/**
	 * Adds a new model
	 */
	$scope.addModel = function(){

	}

	/**
	 * Shows edit model modal
	 * @param  index Index of the model
	 */
	$scope.showEditModel = function(index){

	}

	/**
	 * Edits a model
	 */
	$scope.editModel = function(){

	}

	/**
	 * Deletes a model
	 * @param  index Index of the model
	 */
	$scope.deleteModel = function(index){

	}

	/**
	 * Function to handle the change of a manufacturer
	 * @param  int seletedId Identifier of the selected manufacturer
	 */
	$scope.changeManufacturer = function(seletedId){

	}

}]);