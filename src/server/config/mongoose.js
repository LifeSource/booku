var mongoose = require("mongoose");
var Book = require("../models/book/book.model");
var seedData = require("../models/seedData");

module.exports = function(config) {
    

    var env = process.env.NODE_ENV || "dev";

    switch (env) {
        case 'production':
            mongoose.connect(config.production.db);
            break;
        default:
            mongoose.connect(config.development.db);
            break;
    }

	var database = mongoose.connection;

	Book.find({}).exec(function (err, books) {
		if (books.length === 0) {
			console.log("\tSeeding database ...");
			database.collection("books").insert(seedData.books);		
		} else {
			console.log("\tDatabase is already seeded ...");
		}
	});
};
