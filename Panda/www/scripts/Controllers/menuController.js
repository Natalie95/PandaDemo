myApp.controller('menuController', function ($scope, $cordovaDialogs, $cordovaDeviceOrientation) {


    // panda-logo - panda on the loading page
    // PandaPng - panda near the wardrobe (menu page)
    // wardrobe (menu page)
    $scope.load = function () {
        adapt();
    };

    window.onorientationchange = function () {
        adapt();
    };

    var adapt = function () {
        if ((window.orientation == 0) || window.orientation == 180) {
             adaptiveSizeVertical();
        } else if (window.orientation == -90 || window.orientation == 90) {
            adaptiveSizeHorizontal();
        }
    };

    var adaptiveSizeHorizontal = function () {
        var panda = document.getElementById('pandaPng');
        var wardrobe = document.getElementById('wardrobe');
        var table = document.getElementById('table');
        panda.style.width = 0.23 * (401 / 425) * screen.width + "px";
        panda.style.height = 0.23 * screen.width + "px";
        panda.style.position = "absolute";
        panda.style.bottom = 0;
        if (screen.width < 768) {
            panda.style.left = 0.2 * screen.width + "px";
        } else {
            panda.style.left = 0.4 * screen.width + "px";
        }
        wardrobe.style.position = "absolute";
        wardrobe.style.bottom = 0;
        wardrobe.style.right = "2%";
        if (screen.width < 768) {
            wardrobe.style.width = 0.8 * (924 / 943) * screen.width + "px";
        } else {
            wardrobe.style.width = 0.6 * (924 / 943) * screen.width + "px";
        }
        wardrobe.style.height = 1 * screen.height + "px";
        table.style.visibility = "visible";
        table.style.visibility = "visible";
        table.style.width = 0.55 * (554 / 847) * screen.width + "px";
        table.style.height = 0.55 * screen.width + "px";
    };

    var adaptiveSizeVertical = function () {
        var panda = document.getElementById('pandaPng');
        var wardrobe = document.getElementById('wardrobe');
        var table = document.getElementById('table');
        table.style.visibility = "hidden";
        table.style.visibility = "hidden";
        wardrobe.style.position = "absolute";
        wardrobe.style.bottom = 0;
        wardrobe.style.right = 0;
        wardrobe.style.width = "100%";
        wardrobe.style.height = 1 * screen.height + "px";
        panda.style.width = 0.40 * (401 / 425) * screen.width + "px";
        panda.style.height = 0.40 * screen.width + "px";
        panda.style.position = "absolute";
        panda.style.bottom = 0;
        panda.style.left = 0;
    };

});