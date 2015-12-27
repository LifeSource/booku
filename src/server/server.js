var express = require("express"),
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

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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
// routing
//require("./config/routes")(app);

// database configuration and setup
//require("./config/mongoose")(config);

app.listen(config.port, function () {
	console.log("Listening on port: " + config.port);
});
