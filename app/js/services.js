'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var agileCardsServices = angular.module('agileCardsApp.services', ['ngResource']);

agileCardsServices.value('version', '0.1');

agileCardsServices .factory('Card', ['$resource',
    function($resource){
        return $resource('cards/:cardId.json', {}, {
            query: {method:'GET', params:{cardId:'cards'}, isArray:true}
        });
    }
]);