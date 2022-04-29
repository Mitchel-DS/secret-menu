const restaurants = async (req, res) => {
	const page = {
		title: "Restaurants"
	}
    res.render('restaurants', {
		page: page
	})
};

module.exports = {
	restaurants: restaurants
};