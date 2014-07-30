var app = angular.module('cotas', [ 'ngRoute', 'firebase' ])
.value('fbURL', 'https://cota-encente.firebaseio.com/')
 .factory('Cotas', function($firebase, fbURL) {
  return $firebase(new Firebase(fbURL));
});

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller:'ListCtrl',
      templateUrl:'list.html'
    })
    .when('/edit/:projectId', {
      controller:'EditCtrl',
      templateUrl:'detail.html'
    })
    .when('/new', {
      controller:'CreateCtrl',
      templateUrl:'detail.html'
    })
    .otherwise({
      redirectTo:'/'
    });
});