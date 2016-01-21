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
    $scope.loading = function () {
        document.getElementById("loginButtons").style.display = "none";
        setTimeout(function () {
            document.getElementById("lapAnimation").style.display = "none";
            document.getElementById("loginButtons").style.display = "";
        }, 5000);
    };

    $scope.toMenu = function () {
        // $location.path("/menu");
        location.href = "/menu.html";
    };
});