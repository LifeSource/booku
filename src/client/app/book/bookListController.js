(function (app) {
	
	"use strict";

	var BookListController = function ($location, bookService) {
		
		var vm = this;

		var onComplete = function (response) {
			vm.books = response;
		};

		var onError = function (reason) {
			console.log("Unable to fetch book data: " + reasons);
		};

		bookService.getBooks().then(onComplete, onError);
		
		vm.editBook = function (id) {
			console.log(id);
			$location.path("/book/edit/"+id);
		};
	};

	app.controller("BookListController", ["$location", "bookService", BookListController]);

}(angular.module("booku")));
