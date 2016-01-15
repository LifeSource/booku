describe("BookList Controller", function() {

    var controller;

    beforeEach(function() {
        bard.appModule("book.module");
        bard.inject("$controller", "$log", "$q", "$rootScope", "bookService");

        var ds = {
            query: function() {
                return $q.when();
            }
        };
        controller = $controller("BookListController", { bookService: ds});
    });



});
