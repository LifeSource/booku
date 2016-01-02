module.exports = function () {

    var Review = require("../models/review/review.model");

    var controller = {
        use: use,
        get: get,
        post: post,
        update: update,
        delete: "delete",
        query: query
    };

    return controller;

    function use(req, res, next) {
        Review.find(req.params.review).exec(function (err, review) {
            if (err) {
                req.status(500).send(err);
            } else if (review) {
                res.review = review;
                next();
            } else {
                res.status(404).send("Review not found!");
            }
        });
    }

    function get(req, res) {
        res.json(req.review); 
    }

    function post(req, res) {
        var review = new Review(req.body);

        review.save(function (err, review) {
            (err) ? res.status(500).send(err) : res.status(201).send(review);
        });
    }

    function update(req, res) {

        if (req.params.id) {
            delete req.params.id;
        }

        for (var prop in req.review) {
            req.review[prop] = req.body[prop];
        }

        req.review.save(function (err, review) {
            (err) ? res.status(500).send(err) : res.status(201).send(review);
        });
    }

    function delete(req, res) {
        req.review.delete(function (err, review) {
            (err) ? res.status(500).send(err) : res.status(204).send("Review deleted successfully.");
        });
    }

    function query(req, res) {
        Review.find().exec(function (err, reviews) {
            (err) ? res.status(500).send(err) : res.json(reviews);
        });
    }

};
