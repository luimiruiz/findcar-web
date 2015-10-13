angular.module('findCarApp').service('auth',['api',, function(api){
  this.login = function(username, password, callback, callbackError){
    API.User.login({username: username, password: password} ,function(response){
       $localstorage.set('X-AUTH-TOKEN', response.data.auth_token);
       callback();
       $http.defaults.headers.common['X-AUTH-TOKEN'] = response.data.auth_token;
    },callbackError);
  }
  this.checkUserLogin = function(){
    if( $localstorage.get('X-AUTH-TOKEN') && $localstorage.get('X-AUTH-TOKEN') != ''){
      this.setToken();
      return true;
    }
    return false;
  }

  this.setToken = function(){
    $http.defaults.headers.common['X-AUTH-TOKEN'] = $localstorage.get('X-AUTH-TOKEN');
  }

  this.clearAuthToken = function(){
    $localstorage.set('X-AUTH-TOKEN', '');
    delete $http.defaults.headers.common['X-AUTH-TOKEN'];
  }
  this.profile = function(successCb, errorCb){
    API.User.profile(successCb, errorCb);
  }

  this.logout = function(successCb){
    API.User.logout(function(){
      $localstorage.set('X-AUTH-TOKEN', '');
      delete $http.defaults.headers.common['X-AUTH-TOKEN'];
      successCb();
    });
  }
}]);