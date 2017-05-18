var app = angular.module("GitHubUsersApp");

app.controller("RepoController", function ($scope, gitHubService, $routeParams) {

    $scope.reponame = $routeParams.reponame;
    $scope.username = $routeParams.username;
    $scope.issuecount = $routeParams.issueCount;
    $scope.error = "";

    var OnContributorComplete = function (data) {
        $scope.contributors = data;
    };

    var OnError = function (error) {
        $scope.error = error.msg;
    };

    gitHubService.getContributors($scope.reponame, $scope.username).then(OnContributorComplete);
});