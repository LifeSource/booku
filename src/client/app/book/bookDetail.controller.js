(function () {

	"use strict";

	angular
	    .module("book.module")
	    .controller("BookDetailController", BookDetailController);

    BookDetailController.$inject = ["$q", "$stateParams", "$state", "bookService"];

	function BookDetailController ($q, $stateParams, $state, bookService) {

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

		activate();

		function activate() {
		    getBook($stateParams.id);
		}

		function getBook(id) {
		    return bookService.get(id)
		        .then(onComplete)
		        .catch(onError);
		}

        function onComplete(data) { 
            vm.book = data;
            return data;
        }
		function onError(reason) { toastr.err("Unable to fetch data: " + reason); }
	}
	
})();
