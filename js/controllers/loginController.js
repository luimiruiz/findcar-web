angular.module('findCarApp').controller('loginController',['$scope', 'auth', 'Flash', '$state',function($scope, auth, Flash, $state){

	/**
	 * Handles the user login
	 */
	$scope.login = function(){
		auth.login($scope.username, $scope.password, 
		function(response){
			$state.go('publications');
		},
		function(error){
			Flash.create('danger', error.data.message);
		})
	}

	/**
	 * Handles user logout
	 */
	$scope.logout = function(){
		auth.logout(function(response){
			$state.go('login');
		});
	}

}]);