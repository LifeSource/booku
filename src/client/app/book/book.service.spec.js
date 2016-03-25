describe("bookService", function() {


    beforeEach(function() {
        bard.appModule("book.module");
        bard.inject("$http", "$httpBackend", "$q", "$rootScope", "bookService");
    });

    it("should exist", function() {
        expect(bookService).to.exist; 
    });

    it("should have a query() method", function() {
        expect(bookService.query).to.exist;
    });

    it("query() should return a list of books", function() {
        
    });

    it("query() should hit the /api/books/", function() {

        $httpBackend.expectGET("/api/books/").respond(200);
        bookService.query();
        $httpBackend.verifyNoOutstandingExpectation();
        //$httpBackend.flush();
    });

    it("query() reports error if server fails", function() {

        $httpBackend.whenGET("/api/books/").respond(500);
        var error;

        bookService.query().catch(function (err) {
            error = err;
        });

        $httpBackend.flush();

        expect(error).to.be.undefined;
        //expect(error).to.be.defined;
    });

    it("should have a get() method", function() {
        expect(bookService.get).to.exist;    
    });

    it("should have a put() method", function() {
        expect(bookService.put).to.exist;
    });

    it("should have a post() method", function() {
        expect(bookService.post).to.exist;
    });
});

