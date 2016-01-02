module.exports = function () {

    var Book = require("../../models/book/book.model");

    var controller = {
        use: use,
        get: get,
        post: post,
        update: update,
        delete: remove,
        query: query
    };

    return controller;

    function use(req, res, next) {
        Book.findById(req.params.id, function (err, book) {
            if (err) {
                req.status(500).send(err);
            } else if (book) {
                req.book = book;
                next();
            } else {
                res.status(404).send("Book not found!");
            }
        });
    }

    function get(req, res) {
        res.json(req.book);
    }

    function post(req, res) {
        var book = new Book(req.body);

        book.save(function (err, book) {
            (err) ? res.status(500).send(err) : res.status(201).send(book);
        });
    }

    function update(req, res) {

        if (req.params.id) {
            delete req.params.id;
        }

        for (var prop in req.book) {
            req.book[prop] = req.body[prop];
        }

        req.book.save(function (err, book) {
            (err) ? res.status(500).send(err) : res.status(201).send(book);
        });
    }

    function remove(req, res) {
        req.book.delete(function (err, book) {
            (err) ? res.status(500).send(err) : res.status(204).send("Book deleted successfully.");
        });
    }

    function query(req, res) {
        Book.find().exec(function (err, books) {
            (err) ? res.status(500).send(err) : res.json(books);
        });
    }

}
