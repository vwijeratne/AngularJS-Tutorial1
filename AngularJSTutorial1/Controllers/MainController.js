var app = angular.module("GitHubUsersApp");

app.controller("MainController", function ($scope, $interval, $location) {
    $scope.countdown = 5;
    $scope.username = "vwijeratne";

    var countdownInterval = null;

    $scope.search = function (username) {
        if (countdownInterval) {
            $interval.cancel(countdownInterval);
            $scope.countdown = null;
        }
        $location.path("/users/" + username);
    };

    var decrementCountDown = function () {
        $scope.countdown -= 1;
        if ($scope.countdown < 1)
            $scope.search($scope.username);
    };

    var startCountDown = function () {
        countdownInterval = $interval(decrementCountDown, 1000, $scope.countdown);
    };

    startCountDown();

});