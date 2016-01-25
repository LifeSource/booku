describe("BookList Controller", function() {

    var scope,
        controller;

    beforeEach(function() {
        bard.appModule("book.module");
        bard.inject("$controller", "$log", "$q", "$rootScope", "bookService");

        scope = $rootScope.$new();
        controller = $controller("BookListController");
    });


    it("should exist", function() {
        expect(controller).to.exist;    
    });

    it("should have a vm property", function() {
        expect(controller.vm).to.exist;
    });
});
