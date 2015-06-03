(function (app) {
	
	"use strict";

	var BookListController = function (bookResource, bookService) {
		
		var vm = this;

		vm.options = [ "title", "author", "genre", "publisher", "price", "date" ];
		vm.sortOption = vm.options[0];

		vm.clearSearch = function() {
			vm.searchTerm = "";
		};

		var onComplete = function (data) {
			vm.books = data;	
			toastr.info("Books collection loaded successfully!");
		};

		var onError = function (err) {
			toastr.error("Unable to fetch the data: " + err);
		};

		bookService.query().then(onComplete, onError);
	};

	app.controller("BookListController", ["bookResource", "bookService", BookListController]);

}(angular.module("booku")));
