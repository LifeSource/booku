var mongoose = require("mongoose");

var reviewSchema = new mongoose.Schema({
    reviewer: { type: String, required: true },
    rating: { type: Number, min: 0, max: 5 },
    comment: { type: String, required: true },
    reviewDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Review", reviewSchema);
