myApp.controller('menuController', function ($scope, $cordovaDialogs, $cordovaDeviceOrientation) {


    // panda-logo - panda on the loading page
    // PandaPng - panda near the wardrobe (menu page)
    // wardrobe (menu page)


    $scope.load = function () {
        document.getElementById('pandaPng').style.width= 0.23 * (401/425) * screen.width + "px";
        document.getElementById('pandaPng').style.height = 0.23 * screen.width + "px";
        if (screen.width < 768) {
            document.getElementById('wardrobe').style.width = 0.8 * (924 / 943) * screen.width + "px";
        } else {
            document.getElementById('wardrobe').style.width = 0.6 * (924 / 943) * screen.width + "px";
        }
        document.getElementById('wardrobe').style.height = 0.98 * screen.height + "px";
        document.getElementById('table').style.width = 0.55 * (554 / 847) * screen.width + "px";
        document.getElementById('table').style.height = 0.55 * screen.width + "px";
        document.getElementById('clock').style.width = 0.2 * (344 / 343) * screen.width + "px";
        document.getElementById('clock').style.height = 0.2 * screen.width + "px";
    };


    window.onorientationchange = function () {
        if ((window.orientation == 0) || window.orientation == 180) {
            
        } else if (window.orientation == -90 || window.orientation == 90) {
            
        }
    };
});