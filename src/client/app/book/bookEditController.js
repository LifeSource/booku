(function (app) {
	
	"use strict";
	
	var BookEditController = function (bookService, $stateParams, $state) {
		
		var vm = this;

		var bookId = $stateParams.bookId;

		var onComplete = function (data) {
			vm.book = data;	

			if (vm.book || vm.book._id) {
				vm.title = "Editing: " + vm.book.title;
			} else {
				vm.title = "New Book";
			}
		};

		var onError = function (err) {
			toastr.error("Unable to fetch the data: " + err);
		};

		vm.cancel = function () {
			$state.go("bookList");
		};

		vm.save = function (isValid) {
			if (isValid) {
				console.log(JSON.stringify(vm.book));
				bookService.put(bookId, vm.book);
				$state.go("bookList");
				toastr.success("Book updated successfully!");
			} else {
				toastr.error("Please check the form for validation errors before proceeding.");
			}
		}; 

		bookService.get(bookId).then(onComplete, onError);
	};

	app.controller("BookEditController", ["bookService","$stateParams", "$state", BookEditController]);

}(angular.module("booku")));
