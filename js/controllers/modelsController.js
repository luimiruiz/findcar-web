angular.module('findCarApp').controller('modelsController',['$scope','model', 'manufacturer', 'Flash',function($scope, model, manufacturer, Flash){


	/**
	 * Array with the models
	 * Array
	 */
	$scope.models = [];

	/**
	 * Array with the manufacturers;
	 */
	$scope.manufacturers = [];

	/**
	 * Model Array used in the add/edit Modal
	 * @type Object
	 */
	$scope.auxModel = {
		name: '',
		manufacturerId: '#'
	};

	/**
	 * Data of the model modal
	 */
	$scope.modalData = {
		action: "Agregar"
	}

	/**
	 * The selected manufacturer
	 */
	$scope.selectedManufacturer = "#";

	/**
	 * Shows the add model modal
	 */
	$scope.showAddModel = function(){
		$scope.modalData.errors = [];
		$scope.modalData.action = "Agregar";
		$scope.auxModel = {
							name: '',
							manufacturerId: '#'
						  };
		jQuery('#modelModal').modal('show');
	}

	/**
	 * Adds a new model
	 */
	$scope.addModel = function(){
		model.create($scope.auxModel, 
		function(response){ //SuccessCb
			if($scope.auxModel.manufacturerId == $scope.selectedManufacturer){
				$scope.models.push(response.data);
			}
			Flash.create('success','Modelo creado exitosamente');
			jQuery('#modelModal').modal('hide');
		},	
		function(error){ //ErrorCb
			Flash.create('danger',error.data.message);
		})
	}

	/**
	 * Shows edit model modal
	 * @param  index Index of the model
	 */
	$scope.showEditModel = function(index){
		$scope.modalData.errors = [];
		$scope.modalData.action = "Editar";
		$scope.auxModel = angular.copy($scope.models[index]);
		$scope.auxModel.manufacturerId = $scope.selectedManufacturer;
		jQuery('#modelModal').modal('show');
	}

	/**
	 * Edits a model
	 */
	$scope.editModel = function(){
		model.edit($scope.auxModel, 
		function(response){ //SuccessCb
			for(i in $scope.models){
				if($scope.models[i].id == response.data.id){
					$scope.models[i] = response.data;
				}
			}
			jQuery('#modelModal').modal('hide');
			Flash.create('success','Modelo editado exitosamente');
		},	
		function(error){ //ErrorCb
			Flash.create('danger',error.data.message);
		})
	}

	/**
	 * Deletes a model
	 * @param  index Index of the model
	 */
	$scope.deleteModel = function(index){
		if(confirm('Esta seguro que desea eliminar el Modelo?')){
			model.delete($scope.models[index].id, 
			function(response){ //SuccessCb
				$scope.models.splice(index, 1);
				Flash.create('success','Modelo eliminado exitosamente');
			},	
			function(error){ //ErrorCb
				Flash.create('danger',error.data.message);
			})
		}
	}

	/**
	 * Handle the model modal submit
	 */
	$scope.modelSubmit = function(){
		if(!$scope.auxModel.name){
			$scope.modalData.nameErrors = ['Este campo es requerido'];
			return;
		}else{
			$scope.modalData.nameErrors = [];
		}
		if($scope.auxModel.manufacturerId == '#'){
			$scope.modalData.manufacturerErrors = ['Este campo es requerido'];
			return;
		}else{
			$scope.modalData.manufacturerErrors = [];
		}
		if($scope.modalData.action == "Agregar"){
			return $scope.addModel();
		}
		return $scope.editModel();
	}

	manufacturer.getAll(function(response){
		if(!response.error){
			$scope.manufacturers = response.data;
		}
	});

	/**
	 * Function to handle the change of a manufacturer
	 */
	$scope.changeManufacturer = function(){
		model.getAll($scope.selectedManufacturer,function(response){
			if(!response.error){
				$scope.models = response.data;
			}
		});
	}

}]);