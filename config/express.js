var express = require("express"),
	path = require("path"),
	stylus = require("stylus"),
	bodyParser = require("body-parser"),
	cookieParser = require("cookie-parser");

module.exports = function (app, config) { 

	// chose to use the jade templating engine
	app.set("view engine", "jade");
	app.set("views", path.join(config.rootPath, "booku/views"));

	// middlewares
	app.use(cookieParser());
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));

	// Where to find the client side files, (img, css, js)
	app.use(express.static(path.join(config.rootPath, "booku/public")));
};
