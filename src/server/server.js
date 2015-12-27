var express = require("express"),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser");

app = express();

var config = {
    env: process.env.NODE_ENV || "dev",
    port: process.env.PORT || 3000,
    root: "./",
    dist: "./dist/",
    client: "./src/client/",
    index: "./src/client/index.html"
};

// Body Parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// database configuration and setup
var dbConfig = require("./config/configuration");
require("./config/mongoose")(dbConfig);

// API routes
var Book = require("./models/book");
var bookRouter = require("./routes/bookRoutes")(Book);
app.use("/api/books", bookRouter);

switch (config.env) {
    case "production":
        app.use(express.static(config.dist));
        app.use("/*", express.static(config.dist + "index.html"));
        break;
    default:
        app.use(express.static(config.client));
        app.use(express.static(config.root));
        app.use("/*", express.static(config.index));
        break;
}


app.listen(config.port, function () {
	console.log("Listening on port: " + config.port);
});
