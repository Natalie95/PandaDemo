myApp.controller('menuController', function ($scope, $cordovaDialogs, $cordovaDeviceOrientation) {
    $scope.load = function () {
        var el = document.getElementById('pandaPng');
        document.getElementById('pandaPng').style.width= 0.2 * (401/425) * screen.width + "px";
        document.getElementById('pandaPng').style.height = 0.2 * screen.width + "px";
    };

    window.onorientationchange = function () {
        if ((window.orientation == 0) || window.orientation == 180) {
            
        } else if (window.orientation == -90 || window.orientation == 90) {
            
        }
    };
});