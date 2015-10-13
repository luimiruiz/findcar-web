angular.module('findCarApp').service('manufacturer',['api', function(api){
  
  /**
   * Returns all the manufacturers
   * @param  successCb    Function to execute in case of success
   * @return array
   */
  this.getAll = function(successCb){
    api.Manufacturer.getAll({},successCb);
  }

  /**
   * Creates a new manufacturer
   * @param  manufacturer Object with the data
   * @param  successCb    Function to execute in case of success
   * @param  errorCb      Function to execute in case of error
   */
  this.create = function(manufacturer, successCb, errorCb){
    api.Manufacturer.create(manufacturer, successCb, errorCb);
  }

  /**
   * Edits a manufacturer
   * @param  manufacturer Object with the data
   * @param  successCb    Function to execute in case of success
   * @param  errorCb      Function to execute in case of error
   */
  this.edit = function(manufacturer, successCb, errorCb){
    api.Manufacturer.edit(manufacturer, successCb, errorCb);
  }

  /**
   * Deletes manufacturer
   * @param  manufacturerId Identifier of the manufacturer
   * @param  successCb    Function to execute in case of success
   * @param  errorCb      Function to execute in case of error
   */
  this.delete = function(manufacturerId, successCb, errorCb){
    api.Manufacturer.delete({id: manufacturerId}, successCb, errorCb);
  }

}]);