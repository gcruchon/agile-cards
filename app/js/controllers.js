'use strict';

/* Controllers */

angular.module('agileCardsApp.controllers', [])
    .controller('CardListController', ['$scope', 'Card',
        function($scope, Card) {
            $scope.cards = Card.query();
            //$scope.orderProp = 'age';
        }
    ])
    .controller('CardDetailController', ['$scope', '$routeParams', 'Card',
        function($scope, $routeParams, Card) {
            $scope.cards = Card.query(function(cards) {
                $scope.card = cards[$routeParams.cardIndex];
            });
        }
    ]);