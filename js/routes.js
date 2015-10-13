angular.module('findCarApp').config(function($stateProvider, $urlRouterProvider){
  $stateProvider
   .state('login',{
    url: '/login',
    views: {
      'content' : {
          templateUrl: 'partials/login.html',
          controller: 'loginController'
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
          controller: 'publicationsController'
      }
    }
  })
  .state('manufacturers',{
    url: '/manufacturers',
    views: {
      'content': {
          templateUrl: 'partials/manufacturers.html',
          controller: 'manufacturersController'
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
          controller: 'modelsController'
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
          controller: 'usersController'
      }
    }
  })
  .state('create-admin',{
    url: '/create-admin',
    views: {
      'content': {
          templateUrl: 'partials/create-admin.html',
          controller: 'adminsController'
      },
      'header': {
        templateUrl: 'partials/menu.html'
      }
    }
  })
  $urlRouterProvider.otherwise('/');
});