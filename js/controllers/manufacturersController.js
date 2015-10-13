angular.module('findCarApp').controller('manufacturersController',['$scope', 'manufacturer', 'Flash',function($scope, manufacturer, Flash){
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
	 * Data of the manufacturer modal
	 */
	$scope.modalData = {
		action: "Agregar"
	}

	/**
	 * Shows the add Manufacturer modal
	 */
	$scope.showAddManufacturer = function(){
		$scope.modalData.errors = [];
		$scope.modalData.action = "Agregar";
		$scope.auxManufacturer = {};
		jQuery('#manufacturerModal').modal('show');
	}

	/**
	 * Adds a new Manufacturer
	 */
	$scope.addManufacturer = function(){
		manufacturer.create($scope.auxManufacturer, 
		function(response){ //SuccessCb
			$scope.manufacturers.push(response.data);
			Flash.create('success','Marca creada exitosamente');
			jQuery('#manufacturerModal').modal('hide');
		},	
		function(error){ //ErrorCb
			Flash.create('danger',error.data.message);
		})
	}

	/**
	 * Shows edit Manufacturer modal
	 * @param  index Index of the Manufacturer
	 */
	$scope.showEditManufacturer = function(index){
		$scope.modalData.errors = [];
		$scope.modalData.action = "Editar";
		$scope.auxManufacturer = angular.copy($scope.manufacturers[index]);
		console.log($scope.auxManufacturer);
		jQuery('#manufacturerModal').modal('show');
	}

	/**
	 * Edits a Manufacturer
	 */
	$scope.editManufacturer = function(){
		manufacturer.edit($scope.auxManufacturer, 
		function(response){ //SuccessCb
			for(i in $scope.manufacturers){
				if($scope.manufacturers[i].id == response.data.id){
					$scope.manufacturers[i] = response.data;
				}
			}
			jQuery('#manufacturerModal').modal('hide');
			Flash.create('success','Marca editada exitosamente');
		},	
		function(error){ //ErrorCb
			Flash.create('danger',error.data.message);
		})
	}

	/**
	 * Deletes a manufacturer
	 * @param  index Index of the manufacturer
	 */
	$scope.deleteManufacturer = function(index){
		if(confirm('Esta seguro que desea eliminar la marca?')){
			manufacturer.delete($scope.manufacturers[index].id, 
			function(response){ //SuccessCb
				$scope.manufacturers.splice(index, 1);
				Flash.create('success','Marca eliminada exitosamente');
			},	
			function(error){ //ErrorCb
				Flash.create('danger',error.data.message);
			})
		}
	}

	/**
	 * Handle the manufacturer submit
	 */
	$scope.manufacturerSubmit = function(){
		if(!$scope.auxManufacturer.name){
			$scope.modalData.errors = ['Este campo es requerido'];
			return;
		}else{
			$scope.modalData.errors = [];
		}
		if($scope.modalData.action == "Agregar"){
			return $scope.addManufacturer();
		}
		return $scope.editManufacturer();
	}

	manufacturer.getAll(function(response){
		if(!response.error){
			$scope.manufacturers = response.data;
		}
	});
}]);