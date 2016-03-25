describe("BookList Controller", function() {

    var scope,
        controller;

    var books = [
        {
            title: "C# In Depth",
            author: "Jon Skeet",
            genre: "Computing",
            publisher: "Manning Publishing",
            publishedDate: new Date(),
            price: 25.95,
            imageUrl: "csharpindepth.jpeg",
            summary: "Great C# book.",
            reviews: []
        }
    ];

    beforeEach(function() {
        bard.appModule("book.module");
        bard.inject("$controller", "$log", "$q", "$rootScope", "bookService");

        var bs = {
            query: function () {
                return $q.when(books);
            }
        };
        
        controller = $controller("BookListController", { bookService: bs });
    });


    it("should exist", function() {
        expect(controller).to.exist;    
    });

    it("should have empty book array before activation", function() {
        expect(controller.books).to.exist;
        expect(controller.books.length).to.equal(0);
    });

    describe("after activation", function() {
        it("should have a list of books", function() {
            $rootScope.$apply();
            expect(controller.books).to.have.length.above(0);
        });

        it("should have mock books", function() {
            $rootScope.$apply();
            expect(controller.books).to.have.length(books.length);
        });
    });
});
