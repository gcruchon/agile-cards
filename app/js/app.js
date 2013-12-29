'use strict';


// Declare app level module which depends on filters, and services
angular.module('agileCardsApp', [
  'ngRoute',
  'agileCardsApp.filters',
  'agileCardsApp.services',
  'agileCardsApp.directives',
  'agileCardsApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cards', {templateUrl: 'partials/card-list.html', controller: 'CardListController'});
  $routeProvider.when('/card/:cardIndex/:cardId', {templateUrl: 'partials/card-detail.html', controller: 'CardDetailController'});
  $routeProvider.otherwise({redirectTo: '/cards'});
}]);
