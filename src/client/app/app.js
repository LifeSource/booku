(function () {
	"use strict";

	var app = angular.module("booku", ["common.services",
		"ui.router","ui.mask", "ui.bootstrap"]);

	var RoutesController = function ($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise("/");

		$stateProvider
			.state("home", {
				url: "/",
				templateUrl: "/partials/home/welcome"
			})
			.state("about", {
				url: "/about",
				templateUrl: "/partials/home/about"

			})
			.state("bookList", {
				url: "/books",
				templateUrl: "/partials/book/bookListView.jade",
				controller: "BookListController as vm"	
			})
			.state("bookAdd", {
				url: "/books/add/",
				templateUrl: "/partials/book/bookAddView.jade",
				controller: "BookAddController as vm"
			})
			.state("bookEdit", {
				abstract: true,
				url: "/books/edit/:bookId",
				templateUrl: "/partials/book/bookEditView.jade",
				controller: "BookEditController as vm"
			})
			.state("bookEdit.info", {
				url: "/info",
				templateUrl: "/partials/book/bookEditInfoView.jade"
			})
			.state("bookDetail", {
				url: "/books/:bookId",
				templateUrl: "/partials/book/bookDetailView.jade",
				controller: "BookDetailController as vm"
			});
	};

	app.config(["$stateProvider", "$urlRouterProvider", RoutesController]);
}());
