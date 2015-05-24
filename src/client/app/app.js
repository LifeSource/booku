(function () {
	"use strict";

	var app = angular.module("booku", ["ngResource", "ui.router"]);

	var RoutesController = function ($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise("/");

		$stateProvider
			.state("home", {
				url: "/",
				templateUrl: "/partials/home/welcome.jade"
			})
			.state("bookList", {
				url: "/books",
				templateUrl: "/partials/book/bookListView.jade",
				controller: "BookListController as vm"	
			})
			.state("bookEdit", {
				url: "/books/edit/:bookId",
				templateUrl: "/partials/book/bookEditView.jade",
				controller: "BookEditController as vm"
			});
		
	};

	app.config(["$stateProvider", "$urlRouterProvider", RoutesController]);

   /* app.config(function ($routeProvider) {*/
		//$routeProvider
			//.when("/home", {
				//templateUrl: "/partials/main/home.jade",
				//controller: "HomeController"
			//})
			//.when("/book/add", {
				//templateUrl: "/partials/book/add.jade"
			//})
			//.when("/book/edit/:id", {
				//templateUrl: "/partials/book/edit.jade",
				//controller: "editBookController"
			//})
			//.otherwise({ redirectTo: "/home" });
	/*});*/
}());
