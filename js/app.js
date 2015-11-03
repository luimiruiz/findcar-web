angular.module('findCarApp',['ui.router', 'ngResource', 'flash', 'ngCookies', 'infinite-scroll'])
.run(function ($rootScope, $state, auth) {
  $rootScope.$on('$stateChangeStart', 
  	function (event, next, nextParams, fromState) {
  		console.log(next);
    	if(!auth.checkUserLogin() && next.name != 'login' && next.name != 'create-user'){
    		event.preventDefault();
    		$state.go('login');
    	}else if(auth.checkUserLogin() && next.name == 'login'){
    		event.preventDefault();
    		$state.go('publications');
    	}
  });
});