var express = require("express"),
    mongoose = require("mongoose");

module.exports = function(app) {

	var Book = require("../models/book");
	var bookRouter = require("../routes/bookRoutes")(Book);

	// API routes
	app.use("/api/books", bookRouter);

	// View routes
	app.get("/partials/*", function (req, res) {
		res.render("../../client/app/" + req.params[0]);	
	});

	app.get("*", function(req, res) {
		res.render("index", { title: "Booku" });
	});
};
