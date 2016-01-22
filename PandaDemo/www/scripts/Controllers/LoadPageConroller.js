myApp.controller('loadPageController', function ($scope, $cordovaDialogs, $state) {

    var timeout = 3000; 
    var menuHref = 'menu';

    $scope.loading = function () {
        setTimeout(function () {
            $state.go(menuHref);
        }, timeout);
    };

});