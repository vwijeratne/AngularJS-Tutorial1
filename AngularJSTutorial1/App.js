var app = angular.module("GitHubUsersApp", ["ngRoute"]);

app.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
}]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/main",
        {
            templateUrl: "Views/Main.html",
            controller: "MainController"
        })
        .when("/users/:username",
        {
            templateUrl: "Views/Users.html",
            controller: "UsersController"
        })
        .when("/repo/:username/:reponame",
        {
            templateUrl: "Views/Repo.html",
            controller: "RepoController"
        })
        .otherwise({ redirectTo: "/main" });
});