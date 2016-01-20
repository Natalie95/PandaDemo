var myApp = angular.module('myApp', ['ngCordova', 'ngRoute', 'ngResource', 'ui.router']);

myApp.config(function ($routeProvider) {

    $routeProvider.when('/menu', {
       // controller: TestCtrl,
        template: '../menu/html'
    });

});