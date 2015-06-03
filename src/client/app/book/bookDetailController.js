(function (app) {

	"use strict";

	var BookDetailController = function (bookService, $stateParams, $state) {

		var vm = this;

		vm.cancel = function () {
			$state.go("bookList");
		};

		vm.edit = function () {
			$state.go("bookEdit.info", { bookId: $stateParams.bookId });
		};

		vm.remove = function () {
			bookService.remove($stateParams.bookId)
				.then(function (response) {
					toastr.success("Book succesfully removed!");
					$state.go("bookList");
				}, function (err) {
					toastr.error(err);
				});
		};

		var onComplete = function (data) {
			vm.book = data;
		};

		var onError = function (err) {
			toastr.err("Unable to fetch data: " + err);
		};

		bookService.get($stateParams.bookId).then(onComplete, onError);
	};

	app.controller("BookDetailController", ["bookService", "$stateParams", "$state", BookDetailController]);
	
}(angular.module("booku")));
