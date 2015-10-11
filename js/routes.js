angular.module('FindCarApp').config(function($stateProvider, $urlRouterProvider){
  $stateProvider
   .state('login',{
    url: '/login',
    views: {
      'content' : {
          templateUrl: 'partials/login.html',
          controller: 'LoginController'
      }
    }
  })
  .state('publications',{
    url: '/',
    views: {
      'header': {
        templateUrl: 'partials/menu.html'
      },
      'content': {
          templateUrl: 'partials/publications.html',
          controller: 'PublicationsController'
      }
    }
  })
  .state('manufacturers',{
    url: '/manufacturers',
    views: {
      'content': {
          templateUrl: 'partials/manufacturers.html',
          controller: 'ManufacturersController'
      },
      'header': {
        templateUrl: 'partials/menu.html'
      }
    }
  })
  .state('models',{
    url: '/models',
    views: {
      'content': {
          templateUrl: 'partials/models.html',
          controller: 'ModelsController'
      },
      'header': {
        templateUrl: 'partials/menu.html'
      }
    }
  })
  .state('create-user',{
    url: '/create-user',
    views: {
      'content': {
          templateUrl: 'partials/create-user.html',
          controller: 'UsersController'
      }
    }
  })
  .state('create-admin',{
    url: '/create-admin',
    views: {
      'content': {
          templateUrl: 'partials/create-admin.html',
          controller: 'AdminsController'
      },
      'header': {
        templateUrl: 'partials/menu.html'
      }
    }
  })
  $urlRouterProvider.otherwise('/');
});