(function(app) {

    "use strict";

    angular
        .module("book.module")
        .controller("BookListController", BookListController);

    BookListController.inject = ["$q", "$state", "bookService"];

    function BookListController($q, $state, bookService) {

        var vm = this;

        vm.books = [];
        vm.showBookDetail = showBookDetail;

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

        function showBookDetail(bookId) {
            $state.go("bookDetail", { id: bookId });
        }
    }

})();
