var express = require("express");
var app = express();

// defaults to environment variable or otherwise development
var env = process.env.NOD_ENV || "development";

// set the configuration base on the environment variable set.
var config = require("./config/configuration")[env];

// setup for express and its middlewares
require("./config/express")(app, config);

// routing
require("./config/routes")(app);

// database configuration and setup
require("./config/mongoose")(config);

app.listen(config.port, function () {
	console.log("Listening on port: " + config.port);
});
