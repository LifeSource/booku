var express = require("express"),
	path = require("path"),
	bodyParser = require("body-parser"),
	cookieParser = require("cookie-parser");

module.exports = function (app, config) { 

	// chose to use the jade templating engine
	app.set("view engine", "jade");
	app.set("view", path.join(config.rootPath, "views"));

	// middlewares
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
	app.use(cookieParser());

	// Where to find the client side files, (img, css, js)
	app.use(express.static(path.join(config.rootPath, "public")));
};