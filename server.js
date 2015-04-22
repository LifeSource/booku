var express = require("express");
var app = express();

// defaults to whatever is set on the environment variable, otherwise use development
var env = process.env.NOD_ENV || "development";

// set the configuration base on the environment variable set.
var config = require("./config/configuration")[env];

// setup for express and its middlewares
require("./config/express")(app, config);

// database configuration and setup
require("./config/mongoose")(config);

app.listen(3000);