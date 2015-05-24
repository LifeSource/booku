var mongoose = require("mongoose");
var Book = require("../models/book");
var seedData = require("../models/seedData");

module.exports = function(config) {

	mongoose.connect(config.db);
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
