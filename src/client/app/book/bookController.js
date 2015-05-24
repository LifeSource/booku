(function (app) {

	"use strict";

	var BookController = function ($scope, $http, bookService) {
	
	};

	app.controller("BookController", ["$scope", "$http", "bookService", BookController]);
	
}(angular.module("booku")));
