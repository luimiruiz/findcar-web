angular.module('findCarApp',['ui.router'])
.run(function ($rootScope) {
  $rootScope.$on('$stateChangeStart', 
  	function (event, next, nextParams, fromState) {
    	
  });
});