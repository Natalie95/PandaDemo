var myApp = angular.module('myApp', ['ngCordova', 'ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/index');
        $stateProvider.state('index', {
            url: '/index.html',
            templateUrl: '/index.html',
            controller: 'loadPageController'
        })
        .state('menu', {
            url: '/menu',
            templateUrl: '/menu.html'
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