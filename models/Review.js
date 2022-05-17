const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
	restaurant: {
		type: Schema.Types.ObjectId, 
		ref: 'Restaurant' 
	},
	rating: {
		type: Number,
		default: '1'
	},
	comment: {
		type: String,
	},
	created: {
		type: Date,
		default: Date.now
	},
	user_id: {
		type: Schema.Types.ObjectId, 
		ref: 'User' 
	},
	user: {
		type: Object,
	}
});

const Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;