describe("BookAddController", function() {

    var controller;
    var books = [{
        id: 1,
        title: "C# in Depth",
        author: "Jon Skeet",
        publisher: "Manning Publishing",
        publishedYear: new Date().getFullYear()
    }];

    beforeEach(function() {
        bard.appModule("book.module");
        bard.inject("$controller", "$rootScope", "$q", "bookService");

        controller = $controller("BookAddController");
    });

    it("controller should exist", function() {
        expect(controller).to.exist;
    });

});
