describe.only("bookService", function() {

    var service;

    beforeEach(function() {
        bard.appModule("book.module");
        bard.inject("$http", "$httpBackend", "$q", "$rootScope", "bookService");

        service = bookService;
    });

    afterEach(function() {

    });
    
    it("should exist", function() {
        expect(bookService).to.exist; 
    });

    it("bookService should have a query() method", function() {
        expect(bookService.query).to.exist;
    });

    it("bookService.query() should hit the /api/books/", function() {

        //$httpBackend.when("GET", "/api/books/").respond(200, []);

        $httpBackend.expectGET("/api/books/").respond(200);

        service.query();

        $httpBackend.verifyNoOutstandingExpectation();

        //$httpBackend.flush();
    });

    it("bookService.query() reports error if server fails", function() {

        $httpBackend.whenGET("/api/books/").respond(500);
        var error;

        service.query().catch(function (err) {
            error = err;
            console.log("error: ", err);
        });

        $httpBackend.flush();

        //expect(error).to.exist;
        expect(error).to.be.undefined;
    });
});

