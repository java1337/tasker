'use strict';

var app = angular
  .module('TaskNinjaApp', [
    'ngAnimate',
    'ngResource',    
    'ngRoute',    
    'firebase',
    'toaster',
    'angularMoment'
  ])
  .constant('FURL', 'https://hltasker.firebaseio.com/')  
  .config(function ($routeProvider) {
    $routeProvider      
      .when('/', {
        templateUrl: 'views/browse.html',
        controller: 'TaskController'
      })
      .when('/login', {
			templateUrl: 'views/login.html',
			controller: 'AuthController'
      })
      .when('/register', {
      	templateUrl: 'views/register.html',
      	controller: 'AuthController'
      })
      .when('/browse', {
        templateUrl: 'views/browse.html',
        controller: 'TaskController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
