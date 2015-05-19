(function () {
	"use strict";

	var app = angular.module("booku", ["ngResource", "ngRoute"]);

	app.config(function ($routeProvider) {
		$routeProvider
			.when("/home", {
				templateUrl: "/partials/main/home.jade",
				controller: "HomeController"
			})
			.when("/book/add", {
				templateUrl: "/partials/book/add.jade",
				//controller: "BookController"
			})
			.otherwise({ redirectTo: "/home" });
	});
}());
