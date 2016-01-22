var myApp = angular.module('myApp', ['ngCordova', 'ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "/www/index.html",
                controller: "loadPageController"
            })
            .when("/menu", {
                templateUrl: "/www/menu.html"
            });
    });

myApp.controller('loadPageController', function ($scope, $cordovaDialogs, $location) {

    var timeout = 0000;
    var menuHref = "/menu.html";

    $scope.loading = function () {
        setTimeout(function () {
            location.href = menuHref;
        }, timeout);
    };
});