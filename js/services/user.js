angular.module('findCarApp').service('user',['api', function(api){
  
   	/**
  	 * Function to create a new admin
  	 * @param adminData Data of the admin to create
  	 * @param successCb Function to execute in case of success
  	 * @param errorCb   Function to execute in case of error
  	 */
	this.createAdmin = function(adminData, successCb, errorCb){
    console.log(1);
    api.Admin.create(adminData, successCb, errorCb);
	}

	/**
  	 * Function to create a new user
  	 * @param userData Data of the user to create
  	 * @param successCb Function to execute in case of success
  	 * @param errorCb   Function to execute in case of error
  	 */
	this.createUser = function(userData, successCb, errorCb){
    api.User.create(userData, successCb, errorCb);
	}

  /**
   * Validates the email of an user
   * @param  email Email to validate
   */
  this.validateEmail = function(email){
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
  }

  /**
   * Validates the data of an user
   * @param  userData Data of the user
   * @return errors
   */
  this.validateUserData = function(userData){
    errors = {};
    if(!userData.userName){
      errors.userName = 'Este campo es requerido';
    }
    if(!userData.email){
      errors.email = 'Este campo es requerido';  
    }else if(!this.validateEmail(userData.email)){
      errors.email = 'Ingrese un email valido';  
    }
    if(!userData.password){
      errors.password = 'Este campo es requerido';
    }else if(userData.password.length < 6){
      errors.password = 'El password debe tener por lo menos 6 caractéres';
    }
    if(!userData.passwordConfirmation){
      errors.passwordConfirmation = 'Este campo es requerido';
    }else if(userData.passwordConfirmation != userData.password){
      errors.passwordConfirmation = 'La confirmación debe ser igual al password';
    }
    return errors;
  }

}]);