const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
	name: {
		type: String,
	},
	category: {
		type: String,
	},
	rating: {
		type: String,
	}
});

const Restaurant = mongoose.model('Restaurants', RestaurantSchema);

module.exports = Restaurant;