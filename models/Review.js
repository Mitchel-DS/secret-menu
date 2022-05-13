const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
	restaurant: {
		type: String,
	},
	rating: {
		type: Number,
	},
	comment: {
		type: String,
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: String,
	}
});

const Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;