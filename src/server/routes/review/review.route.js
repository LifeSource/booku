var express = require("express");

module.exports = function () {
    
    var reviewRouter = express.Router();

    var reviewController = require("../controllers/review/review.controller")();


    reviewRouter.route("/")
        .get(reviewController.query)
        .post(reviewController.post);

    reviewRouter.use("/:id", reviewController.use);

    reviewRouter.route("/:id")
        .get(reviewController.get)
        .patch(reviewController.update)
        .delete(reviewController.delete);
    
    return reviewRouter;
};
