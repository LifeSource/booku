var express = require("express"),
	path = require("path"),
	stylus = require("stylus"),
	bodyParser = require("body-parser"),
	cookieParser = require("cookie-parser");

module.exports = function (app, config) { 

	// chose to use the jade templating engine
	app.set("view engine", "jade");
	app.set("views", path.resolve(config.rootPath, "server/views"));

	// middlewares
	app.use(cookieParser());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());

	// static files
	app.use(express.static(path.resolve(config.rootPath, "client/")));
	app.use(express.static("./"));
};
