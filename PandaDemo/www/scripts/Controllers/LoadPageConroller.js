myApp.controller('loadPageController', function ($scope, $cordovaDialogs, $state) {

    var timeout = 0000; 
    var menuHref = 'menu';

    $scope.loading = function () {
        document.getElementById('panda-logo').style.width = 0.5 * (294 / 272) * screen.width + "px";
        document.getElementById('panda-logo').style.height = 0.5 *  screen.width + "px";
        setTimeout(function () {
           $state.go(menuHref);
        }, timeout);
    };

});