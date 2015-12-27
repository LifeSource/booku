(function () {
    "use strict";

    angular
        .module("app.core")
        .config(routes);

    routes.inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];

    function routes($stateProvider, $urlRouterProvider, $locationProvider) {

        $locationProvider.html5Mode(true).hashPrefix("!");

		$urlRouterProvider.otherwise("/");

		$stateProvider
			.state("home", {
				url: "/",
				templateUrl: "app/home/home.html",
				controller: "HomeController",
				controllerAs: "vm"
			})
			.state("about", {
				url: "/about",
				templateUrl: "app/home/about.html"
			})
            .state("bookList", {
                url: "/books",
                templateUrl: "app/book/bookList.html",
                controller: "BookListController",
                controllerAs: "vm"
            });
			//.state("bookAdd", {
				//url: "/books/add/",
				//templateUrl: "/partials/book/bookAddView.jade",
				//controller: "BookAddController as vm"
			//})
			//.state("bookEdit", {
				//abstract: true,
				//url: "/books/edit/:bookId",
				//templateUrl: "/partials/book/bookEditView.jade",
				//controller: "BookEditController as vm"
			//})
			//.state("bookEdit.info", {
				//url: "/info",
				//templateUrl: "/partials/book/bookEditInfoView.jade"
			//})
			//.state("bookDetail", {
				//url: "/books/:bookId",
				//templateUrl: "/partials/book/bookDetailView.jade",
				//[>cont<]roller: "BookDetailController as vm"
			//});
	}

})();
