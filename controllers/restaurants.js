const Restaurant = require('../models/Restaurant');
const Menu = require('../models/Menu');

const restaurants = async (req, res) => {
	const page = {
		title: "Restaurants"
	}
	Restaurant.find().lean().then(restaurants => {
		res.render('restaurants', {
			page: page,
			restaurants: restaurants
		})
	})
};

const details = async (req, res) => {
	const page = {
		title: "Details"
	}

	const restaurant = req.body;
	Menu.find({restaurant: restaurant.title}).lean().then(details => {

		res.render('details', {
			page: page,
			details: details
		})
	})

};

module.exports = {
	restaurants: restaurants,
	details: details
};