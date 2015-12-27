(function (app) {
	
	"use strict";
	
	var BookAddController = function (bookService, $state) {
		
		var vm = this;

		vm.book = {
			title: "",
			author: "",
			genre: "",
			price: 0,
			publisher: "",
			publishedDate: new Date(),
			summary: ""	
		};

		vm.open = function ($event) {
			$event.preventDefault();
			$event.stopPropagation();

			vm.opened = !vm.opened;
		};

		vm.save = function (isValid) {

			if (isValid) {
				bookService.post(vm.book).then(function (response) {
					toastr.success("Book added successfully!");
					$state.go("bookList");
				}, function (err) {
					toastr.error(err);
				});
			} else {
				toastr.error("Form validation error, please ensure all forms fields are valid.");
			}
		};

		vm.cancel = function () {
			$state.go("bookList");
		};
	};

	app.controller("BookAddController", ["bookService", "$state", BookAddController]);

}(angular.module("booku")));
