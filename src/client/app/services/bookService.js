(function (app) {
	"use strict";

	var bookService = function ($http) {
		
		var apiPath = {
			books: "/api/books/"
		};

		var getBooks = function () {
			return $http.get(apiPath.books).then(function (response) {
				return response.data;
			});			
		};

		var getBookById = function (id) {
			return $http.get(apiPath.books + id).then(
				function (response) {
					return response.data;
				});
		};

		return {
			getBooks: getBooks,
			getBookById: getBookById
		};
	};

	app.factory("bookService", bookService);

}(angular.module("booku")));
