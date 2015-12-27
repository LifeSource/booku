var express = require("express"),
    mongoose = require("mongoose");

module.exports = function(app) {

	var Book = require("../models/book");
	var bookRouter = require("../routes/bookRoutes")(Book);

	// API routes
	app.use("/api/books", bookRouter);
};
