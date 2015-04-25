var express = require("express"),
    mongoose = require("mongoose");

module.exports = function(app) {

	app.get("/", function (req, res) {
		res.render("index");
	});

	app.get("*", function(req, res) {
		//res.render("index");
		res.render("index", { title: "Booku" });
	});
};
