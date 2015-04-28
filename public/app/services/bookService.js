(function (app) {
	"use strict";

	var bookService = function ($http) {
		
		var apiPath = {
			books: "/api/books"
		};

		var getBooks = function () {
			return $http.get(apiPath.books).then(function (response) {
				return response.data;
			});			
		};

		return {
			getBooks: getBooks
		};
	};

	app.factory("bookService", bookService);

}(angular.module("booku")));
