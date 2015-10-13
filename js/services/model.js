angular.module('findCarApp').service('model',['api', function(api){
  
  /**
   * Returns all the modesl of a manufacturer
   * @param  manufacturerId Identifier of the manufacturer
   * @return Array
   */
  this.getAll = function(manufacturerId, successCb){
    api.Model.getAll({manufacturerId: manufacturerId},successCb);
  }

 /**
   * Creates a new model
   * @param  model Object with the data
   * @param  successCb    Function to execute in case of success
   * @param  errorCb      Function to execute in case of error
   */
  this.create = function(model, successCb, errorCb){
    api.Model.create(model, successCb, errorCb);
  }

  /**
   * Edits a model
   * @param  model Object with the data
   * @param  successCb    Function to execute in case of success
   * @param  errorCb      Function to execute in case of error
   */
  this.edit = function(model, successCb, errorCb){
    api.Model.edit(model, successCb, errorCb);
  }

  /**
   * Deletes model
   * @param  modelId Identifier of the model
   * @param  successCb    Function to execute in case of success
   * @param  errorCb      Function to execute in case of error
   */
  this.delete = function(modelId, successCb, errorCb){
    api.Model.delete({id: modelId}, successCb, errorCb);
  }
}]);