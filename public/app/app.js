(function () {
	var app = angular.module("booku", ["ngResource", "ngRoute"]);

	app.config(function ($routeProvider) {
		$routeProvider
			.when("/", {
				templateUrl: "/partials/main/home.jade",
				controller: "HomeController"
			})
			.otherwise({ redirectTo: "/" });
	});
}());
