var mongoose = require("mongoose");

module.exports = function(config) {

	mongoose.connect(config.db);

	var database = mongoose.connection;
};
