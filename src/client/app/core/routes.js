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
            })
            .state("bookAdd", {
                url: "/books/add/",
                templateUrl: "app/book/bookAdd.html",
                controller: "BookAddController",
                controllerAs: "vm"
            })
            .state("bookEdit", {
                abstract: true,
                url: "/books/edit/:bookId",
                templateUrl: "app/book/bookEdit.html",
                controller: "BookEditController",
                controllerAs: "vm"
            })
            .state("bookEdit.info", {
                url: "/info",
                templateUrl: "app/book/bookEditInfo.html"
            })
            .state("bookDetail", {
                url: "/books/:id",
                templateUrl: "app/book/bookDetail.html",
                controller: "BookDetailController",
                controllerAs: "vm"
            });
    }

})();
