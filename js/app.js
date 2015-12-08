angular.module('findCarApp',['ui.router', 'ngResource', 'flash', 'ngCookies'])
.run(function ($rootScope, $state, auth) {
  $rootScope.$on('$stateChangeStart', 
  	function (event, next, nextParams, fromState) {
    	if(!auth.checkUserLogin() && next.name != 'login' && next.name != 'create-user'){
    		event.preventDefault();
    		$state.go('login');
    	}else if(auth.checkUserLogin() && next.name == 'login'){
    		event.preventDefault();
    		$state.go('publications');
    	}
  });
});