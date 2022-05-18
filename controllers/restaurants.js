const Restaurant = require('../models/Restaurant');
const Menu = require('../models/Menu');
const Review = require('../models/Review');
const User = require('../models/User');

let session

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
	session = req.session

	const restaurant = req.body;
	const restaurantId = await Restaurant.findOne({ name: restaurant.title })
	const restaurantDetails = await Menu.findOne({ restaurant: restaurant.title }).lean();
	const reviews = await Review.find({ restaurant: restaurantId._id }).lean();
	console.log(reviews)
	session.restaurant = restaurantDetails;

	const page = {
		title: 'Details'
	}

	Menu.find({ restaurant: restaurant.title }).lean().then(details => {
		res.render('details', {
			page: page,
			details: details,
			restaurantDetails: restaurantDetails,
			reviews: reviews
		})
	})
};

const reviews = async (req, res) => {
	const page = {
		title: "Reviews"
	}
	res.render('reviews', {
		page: page
	})
};

const postReviews = async (req, res) => {
	session = req.session

	const rating = req.body.rating
	const comment = req.body.comment
	const title = req.body.title
	const restaurant = await Restaurant.findOne({ name: session.restaurant.restaurant }).lean();
	const user = await User.findOne({ mail: session.authUser.mail }).lean();
	console.log(user)
	console.log(restaurant)

	try {
		const newReview = await Review.create({
			restaurant: restaurant._id,
			rating: rating,
			title: title,
			comment: comment,
			user_id: user._id,
			user: user
		});
		res.redirect('/restaurants')
	} catch (error) {
		console.log('Failed to create review, try again.')
		console.log(error)
		res.redirect('/reviews')
	}
};

module.exports = {
	restaurants: restaurants,
	details: details,
	reviews: reviews,
	postReviews: postReviews
};