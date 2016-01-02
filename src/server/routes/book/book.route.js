var express = require("express");

module.exports = function () {

	var bookRouter = express.Router();

    var bookController = require("../../controllers/book/book.controller")();

	bookRouter.route("/")
	    .get(bookController.query)
	    .post(bookController.post);

	bookRouter.use("/:id", bookController.use);

	bookRouter.route("/:id")
	    .get(bookController.get)
	    .patch(bookController.update)
	    .delete(bookController.delete);

	return bookRouter;
};
