angular.module('findCarApp').controller('adminsController',['$scope', 'user', 'Flash', '$state' ,function($scope, user, Flash, $state){

	/**
	 * Admin object to create
	 */
	$scope.auxAdmin = {};

	/**
	 * Object with the errors
	 * @type 
	 */
	$scope.errors = {};

	/**
	 * Creates a new admin
	 */
	$scope.createAdmin = function(){
		$scope.errors = user.validateUserData($scope.auxAdmin);
		if(!jQuery.isEmptyObject($scope.errors)){
			return;
		}
		user.createAdmin($scope.auxAdmin, 
		function(response){
			Flash.create('success', 'El usuario se ha creado con éxito');
			$scope.auxAdmin = {};
		},function(error){
			Flash.create('danger', error.data.message);
		});
	}
}]);