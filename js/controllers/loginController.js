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
		},
		function(){
			$state.go('login');
			$scope.username = '';
			$scope.password = '';
			Flash.create('danger', 'This site is only for administrators');	
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