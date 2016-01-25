var myApp = angular.module('myApp', ['ngCordova', 'ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('loading');
        $stateProvider.state('loading', {
            url: '/loading',
            templateUrl: 'partial/loading.html',
            controller: 'loadPageController'
        })
        .state('menu', {
            url: '/menu',
            templateUrl: 'partial/menu.html',
            controller: 'menuController'
        })
    });
