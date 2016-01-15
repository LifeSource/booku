(function() {

    "use strict";

    describe("BookAddController", function() {

        var controller;

        beforeEach(function() {
            bard.appModule("book.module");
            bard.inject("$controller", "$rootScope", "$q", "bookService");

            controller = $controller("BookAddController");
        });

        it("controller should exist", function() {
            expect(controller).to.exist;
        });

        it("controller should have a property called vm", function() {
            controller.vm.should.exist;
        });
    });

}());
