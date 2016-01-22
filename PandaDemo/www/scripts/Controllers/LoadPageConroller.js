var myApp = angular.module('myApp', ['ngCordova', 'ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('loading');
        $stateProvider.state('loading', {
            url: '/loading',
            templateUrl: '/loading.html',
            controller: 'loadPageController'
        })
        .state('menu', {
            url: '/menu',
            templateUrl: '/menu.html',
            controller: 'menuController'
        })
    });

myApp.controller('loadPageController', function ($scope, $cordovaDialogs, $state) {

    var timeout = 3000; 
    var menuHref = 'menu';

    $scope.loading = function () {
        setTimeout(function () {
            $state.go(menuHref);
        }, timeout);
    };

});