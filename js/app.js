angular.module('FindCarApp',['ui.router'])
.run(function ($rootScope) {
  $rootScope.$on('$stateChangeStart', 
  	function (event, next, nextParams, fromState) {
    	$rootScope.currentParams = angular.copy(nextParams);
  });
});