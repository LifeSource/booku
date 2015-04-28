(function (app) {
	
	"use strict";

	var HomeController = function ($scope, bookService) {
		
		$scope.message = "Home Controller";

		var onComplete = function (response) {
			$scope.books = response;
			//$scope.books = response.data;
		};

		var onError = function (reason) {
			console.log("Unable to fetch book data: " + reasons);
		};

		bookService.getBooks().then(onComplete, onError);
	};

	app.controller("HomeController", ["$scope", "bookService", HomeController]);
		

}(angular.module("booku")));
