angular.module('findCarApp').service('auth',['api', '$cookies', '$http' ,function(api, $cookies, $http){
    
  /**
   * Function to handle user login
   * @param username   Username of the user
   * @param password   Password of the user
   * @param successCb  Function to execute in case of success
   * @param errorCb    Function to execute in case of error
   * @param notAdminCb Function to execute in case that the user is not admin
   */
  this.login = function(username, password, successCb, errorCb, notAdminCb){
    var setHeader = this.setHeader;
    api.Auth.login({userName: username, password: password} ,function(response){
      if(response.data.isAdmin){
        $cookies.put('x-access-token', response.data.token);
        setHeader();
        successCb();
      }else{
        notAdminCb();
      }
    },errorCb);
  }

  /**
   * Function to check if the user is logged in
   */
  this.checkUserLogin = function(){
    if($cookies.get('x-access-token')){
      this.setHeader();
      return true;
    }
    return false;
  }

  /**
   * Function to set the session header
   */
  this.setHeader = function(){
    $http.defaults.headers.common['x-access-token'] = $cookies.get('x-access-token');
  }

  /**
   * Function to clear the session cookie
   */
  this.clearSession = function(){
    $cookies.remove('x-access-token');
    delete $http.defaults.headers.common['x-access-token'];
  }

  /**
   * Function to handle user logout
   * @param  successCb Function to execute in case of success
   */
  this.logout = function(successCb){
    var clearSession = this.clearSession;
    api.Auth.logout(function(){
      clearSession();
      successCb();
    });
  }
}]);