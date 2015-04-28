var express = require("express"),
    mongoose = require("mongoose");

module.exports = function(app) {

	var Book = require("../models/book");
	var bookRouter = express.Router();

	bookRouter.route("/Books")
		.get(function (req, res) {
			Book.find({}).exec(function (err, books) {
				if (err) {
					console.log(err);
				} else {
					res.json(books);
				}
			});
		});

	// API
	app.use("/api", bookRouter);

	// render the angular partials
	app.get("/partials/*", function (req, res) {
		res.render("../public/app/" + req.params[0]);	
	});

	app.get("*", function(req, res) {
		//res.render("index");
		res.render("index", { title: "Booku" });
	});
};
