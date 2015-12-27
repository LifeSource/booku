(function (app) {

    "use strict";

        angular
        .module("book.module")
        .controller("BookListController", BookListController);

        BookListController.inject = ["$q", "bookService"];

        function BookListController($q, bookService) {

            var vm = this;

            vm.dashboardList = [
                { className: "author",  name: "About Me", state: "about", icon: "education" },
                { className: "book", name: "Collection", state: "bookList", icon: "book" },
                { className: "add", name: "", state: "addBook", icon: "plus" }
            ];
            
            vm.options = [ "title", "author", "genre", "publisher", "price", "date" ];
            vm.sortOption = vm.options[0];

            vm.clearSearch = function() { vm.searchTerm = ""; };

            activate();

            function activate() {
                var promises = [getAllBooks()];
                $q.all(promises)
                    .then(function(data) {
                        toastr.info("Books collection loaded successfully!");
                    })
                    .catch(onError);
            }

            function getAllBooks() {
                return bookService.query()
                    .then(onComplete)
                    .catch(onError);
            }

            function onComplete(data) {
                vm.books = data;	
                return data;
            }

            function onError(err) {
                toastr.error("Unable to fetch the data: " + err);
            }
        }

})();
