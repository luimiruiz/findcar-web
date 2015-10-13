angular.module('findCarApp').controller('usersController',['$scope', 'user', 'Flash', '$state' ,function($scope, user, Flash, $state){

	/**
	 * USer object to create
	 */
	$scope.auxUser = {};

	/**
	 * Object with the errors
	 * @type 
	 */
	$scope.errors = {};

	/**
	 * Creates a new user
	 */
	$scope.createUser = function(){
		$scope.errors = user.validateUserData($scope.auxUser);
		if(!jQuery.isEmptyObject($scope.errors)){
			return;
		}
		user.createUser($scope.auxUser, 
		function(response){
			Flash.create('success', 'El usuario se ha creado con éxito');
			$scope.auxUser = {};
		},function(error){
			Flash.create('danger', error.data.message);
		});
	}
}]);