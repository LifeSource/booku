(function (app) {
	
	"use strict";
	
	var editBookController = function ($scope, $http, bookService, $location, $routeParams) {
		
		var onBookComplete = function (data) {
			$scope.book = data;
		};
		
		var onError = function (response) {
			console.log("Unable to process request: " + response.data);
		};

		var onUpdated = function () {
			toastr.success("Book saved succesfully!");
			$location.path("/");
		};

		var bookId = $routeParams.id;
		
		bookService.getBookById(bookId).then(onBookComplete, onError);

		$scope.updateBook = function (bookId) {
			$http.put("/api/books/" + bookId, $scope.book).then(onUpdated, onError);
		};

		$scope.cancel = function () {
			$location.path("/");	
		};

	};

	app.controller("editBookController", ["$scope","$http", "bookService","$location", "$routeParams", editBookController]);

}(angular.module("booku")));
