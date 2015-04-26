(function () {
	var app = angular.module("booku", ["ngResource", "ngRoute"]);

	app.config(function ($routeProvider) {
		$routeProvider
			.when("/", {
				templateUrl: "/partials/main"
			})
			.otherwise({ redirectTo: "/" });
	});
}());
