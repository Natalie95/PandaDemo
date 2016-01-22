myApp.controller('menuController', function ($scope, $cordovaDialogs, $cordovaDeviceOrientation) {
    $scope.load = function () {
        var options = {
            frequency: 3000,
            filter: true     // if frequency is set, filter is ignored
        }

        var watch = $cordovaDeviceOrientation.watchHeading(options).then(
          null,
          function (error) {
              // An error occurred
          },
          function (result) {   // updates constantly (depending on frequency value)
              $cordovaDialogs.alert(result.magneticHeading);
              var trueHeading = result.trueHeading;
              var accuracy = result.headingAccuracy;
              var timeStamp = result.timestamp;
          });
    };
});