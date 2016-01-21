var myApp = angular.module('myApp', ['ngCordova', 'ngRoute'])
.config(function ($compileProvider) {
    $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})
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
myApp.controller('loadPageController', function ($scope, $cordovaDialogs) {

    var loadingIsReady = false;

    $scope.loading = function () {

        // loading actions

        loadingIsReady = true;
    };

    $scope.showLoginSigninButtons = function () {
        return loadingIsReady;
    };


});