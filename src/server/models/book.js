var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var reMatch = new RegExp("/[a-zA-Z]/");

var requiredStringValidator = [
	function(val) {
		var testVal = val.trim();
		return (testVal.length > 0);
	},
	"{PATH} cannot be empty"
];

var bookSchema = new Schema({
	title: { type: String },
	author: { type: String },
	genre: { type: String },
	publisher: String, 
	publishedDate: Date,
	price: { type: Number, min: 0 },
	imageUrl: { type: String, default: "default.jepg" },
	summary: String
});

module.exports = mongoose.model("Book", bookSchema);
