angular.module('findCarApp').factory('api', function($resource) {
  apiUrl = 'http://159.203.138.159:3000';
  return {
    User: $resource(apiUrl+ '/users',{}, {
      create: {
        method: 'POST',
        url: apiUrl + '/users',
        headers: [{'Content-Type': 'application/json'}]
      },
    }),
    Admin: $resource(apiUrl+ '/users',{}, {
      create: {
        method: 'POST',
        url: apiUrl + '/users/createAdmin',
        headers: [{'Content-Type': 'application/json'}]
      },
    }),
    Auth: $resource(apiUrl+ '/users', {},{
      login: {
        method: 'POST',
        url: apiUrl + '/users/login',
        headers: [{'Content-Type': 'application/json'}]
      },
      logout: {
        method: 'GET',
        url: apiUrl + '/users/logout'
      }
    }),
    Manufacturer: $resource(apiUrl+ '/manufacturers', {id: '@id'}, {
      create: {
        method: 'POST',
        headers: [{'Content-Type': 'application/json'}]
      },
      edit: {
        method: 'PUT',
        headers: [{'Content-Type': 'application/json'}]
      },
      delete: {
        method: 'DELETE',
        url: apiUrl + '/manufacturers/:id',
        headers: [{'Content-Type': 'application/json'}]
      },
      getAll: {
        method: 'GET',
        url: apiUrl+ '/manufacturers'
      }
    }),
    Model: $resource(apiUrl+ '/models',{}, {
      create: {
        method: 'POST',
        headers: [{'Content-Type': 'application/json'}]
      },
      edit: {
        method: 'PUT',
        headers: [{'Content-Type': 'application/json'}]
      },
      delete: {
        method: 'DELETE',
        url: apiUrl + '/models/:id',
        headers: [{'Content-Type': 'application/json'}]
      },
      getAll: {
        method: 'GET'
      }
    }),
    Color: $resource(apiUrl+ '/colors', {
      getAll: {
        method: 'GET'
      }
    }),
    Publication: $resource(apiUrl+ '/cars',{} ,{
      search: {
        method: 'GET'
      }
    })
  };
});

