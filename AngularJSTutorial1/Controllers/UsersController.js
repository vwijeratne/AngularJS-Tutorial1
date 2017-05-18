var app = angular.module("GitHubUsersApp");

app.controller("UsersController", function ($scope, gitHubService, $location, $routeParams) {

    $scope.username = $routeParams.username;
    $scope.repoSortOrder = "-stargazers_count";

    var onUserComplete = function (data) {
        $scope.user = data;
        gitHubService.getRepos($scope.user).then(OnReposComplete, OnError);
    };

    var OnReposComplete = function (data) {
        $scope.repos = data;
    };

    var OnError = function (error) {
        $scope.error = error.message;
    };


    gitHubService.getUser($scope.username).then(onUserComplete, OnError);

});