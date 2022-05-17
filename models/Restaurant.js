const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
	name: {
		type: String,
	},
	address: {
		type: String,
	},
	category: {
		type: String,
	},
	rating: {
		type: Number,
	}
});

const Restaurant = mongoose.model('Restaurants', RestaurantSchema);

module.exports = Restaurant;