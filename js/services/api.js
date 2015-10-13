angular.module('findCarApp').factory('api', function($resource) {
  apiUrl = 'test';
  return {
    User: $resource(apiUrl+ '/v1/admin/users/', {id: '@id'}, {
      login: {
        method: 'POST',
        url: apiUrl + '/v1/admin/user/login'
      },
      profile: {
        method: 'GET',
        url: apiUrl +  '/v1/admin/my/profile'
      },
      logout: {
        method: 'GET',
        url: apiUrl + '/v1/admin/user/logout'
      }
    }),
    RealEstate: $resource(apiUrl, {id: '@id'}, {
      search: {
        method: 'GET',
        url: apiUrl + '/v1/admin/realestates/search/:searchQuery'
      },
      detail:{
        method: 'GET',
        url: apiUrl + '/v1/admin/realestates/:id'
      },
      refer: {
        method: 'POST',
        url: apiUrl + '/v1/admin/realestates/refer'
      },
      contact: {
        method: 'POST',
        url: apiUrl + '/v1/admin/realestates/:id/interest'
      }
    })
  };
});

