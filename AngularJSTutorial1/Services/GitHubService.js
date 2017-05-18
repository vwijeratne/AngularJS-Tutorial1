var gitHubService = function ($http) {

    var getUser = function (username) {
        return $http.get("https://api.github.com/users/" + username)
            .then(function (response) {
                return response.data;
            });
    };

    var getRepos = function (user) {
        return $http.get(user.repos_url)
            .then(function (response) {
                return response.data;
            });
    };

    //var getRepoDetails = function (username, reponame) {
    //    var repo;
    //    return $http.get("https://api.github.com/repos/" + username + "/" + reponame)
    //        .then(function (response) {
    //            repo = response.data;
    //            return $http.get("https://api.github.com/repos/" + username + "/" + reponame + "/contributors");
    //        })
    //        .then(function (results) {
    //            repo.contributos = result.data;
    //            return repo;
    //        })
    //};

    var getContributors = function (reponame, username) {
        return $http.get("https://api.github.com/repos/" + username + "/" + reponame + "/contributors")
            .then(function (response) {
                return response.data;
            });
    };

    return {
        getUser: getUser,
        getRepos: getRepos,
        //getRepo: getRepo,
        getContributors: getContributors
    };
};

var app = angular.module("GitHubUsersApp");
app.factory("gitHubService", gitHubService);
